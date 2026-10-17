import type { On } from 'claude-code'
import { test, expect } from 'claude-code/testing'

const turn = { durationMs: 1, isAborted: false, turnId: 't1' }

const fakeSession = (on: On) => {
  on('session.cwd', () => ({ value: 'D:\\dev\\my-project' }))
  on('session.usage', () => ({ value: {
    startedAt: 0,
    context: { window: 200000 } as never,
    rateLimits: [
      { kind: 'five_hour', percentUsed: 23.5 },
      { kind: 'seven_day', percentUsed: 7 },
    ],
  } }))
  on('turn.complete', ($, e) => ({ text: e.answer }))
}

test('appends the infomod line beneath a main-loop answer', async ($, on) => {
  fakeSession(on)
  const r = await $.turn.complete({ ...turn, answer: 'Hello', reason: 'answer' })
  expect(r.text).toBe('Infomod: D:\\dev\\my-project - 5h window: 24% - weekly: 7%')
})

test('leaves subagent answers alone', async ($, on) => {
  fakeSession(on)
  const r = await $.turn.complete({ ...turn, answer: 'Hi', reason: 'answer', agentId: 'a1' })
  expect(r.text).toBe('Hi')
})
