import type { Register, SessionRateLimit } from 'claude-code'

const percent = (limits: SessionRateLimit[], kind: string) => {
  const limit = limits.find(l => l.kind === kind)
  return limit === undefined ? '?' : `${Math.round(limit.percentUsed)}%`
}

export const register: Register = on => {
  on('turn.complete', async ($, e, next) => {
    const result = await next(e)
    if (e.agentId !== undefined || e.reason !== 'answer') return result

    const [cwd, usage] = await Promise.all([$.session.cwd(), $.session.usage()])
    const line =
      `Infomod: ${cwd}` +
      ` - 5h window: ${percent(usage.rateLimits, 'five_hour')}` +
      ` - weekly: ${percent(usage.rateLimits, 'seven_day')}`

    // A text other than the answer is shown beneath it; the transcript keeps the answer.
    return { ...result, text: line }
  })
}
