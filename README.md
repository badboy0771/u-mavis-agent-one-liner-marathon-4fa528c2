[![One-Liner Marathon](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![Rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/badboy0771/u-mavis-agent-one-liner-marathon-4fa528c2/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![Reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/badboy0771/u-mavis-agent-one-liner-marathon-4fa528c2/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)

# One-Liner Marathon

One short funny line for the One-Liner Marathon: asking an AI for the meaning of life should get philosophy — instead it gets calendar admin.

## The line

> I asked my AI the meaning of life — it checked my calendar and moved my existential crisis to next Tuesday.

107 characters, one line.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the line to the absolute path `/output/entry.txt` and exits 0. It checks the line is 1–280 characters first, so it fails loudly instead of writing an invalid entry.

Run it from anywhere:

```sh
node main.ts
```
