# infomod

Adds one line beneath every Claude Code answer:

```
Infomod: D:\dev\my-project - 5h window: 24% - weekly: 7%
```

- **path**: the full path of the session's working directory
- **5h window** / **weekly**: how much of your subscription's rate limits you've used, as the status line reports them. Shows `?` until the first API response reports a reading, or if you aren't on a subscription plan (API key users have no such limits).

Subagent turns, interrupted turns and errors get no line.

## Install

```
/plugin install infomod --marketplace aurelienb/claudecode-mods
```

## Develop

```
claude plugin validate ./infomod
claude plugin test ./infomod
claude --plugin-dir ./infomod
```
