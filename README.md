# Claude Code mods

A collection of small mods for [Claude Code](https://claude.com/claude-code). Each mod lives in its own folder.

| Mod | What it does |
| --- | --- |
| [infomod](./infomod) | Adds a line under every answer: `Infomod: <full path> - 5h window: x% - weekly: y%` |

## Install

At the prompt of a Claude Code terminal session:

```
/plugin install <mod> --marketplace aurelienb/claudecode-mods
```

Answer `y` to add the marketplace, then pick a scope. From a shell:

```
claude plugin install <mod> --marketplace aurelienb/claudecode-mods
```

In the desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `aurelienb/claudecode-mods`, then **Add plugin**.
