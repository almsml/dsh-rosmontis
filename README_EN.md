# dsh-dafeiyu Rosmontis custom edition 🐱

A customized **dsh-dafeiyu (BigFish desktop companion)** plugin for DeepSeek Harness: the pet character is replaced with **Rosmontis** from *Arknights*, with character-accurate speech bubbles, click interactions, and idle micro-actions.

Driven by DeepSeek Harness session events, it shows the agent's thinking / working / waiting / success / error states as an always-on-top desktop pet on Windows.

## Features

- 15 Rosmontis sprites assembled into 21 animation clips (238×260 transparent PNGs)
- Character speech bubbles (in-game lines)
- Idle micro-actions: blink / glance / hum / float — 2s flash, **recency-decayed selection** (recent actions are less likely to repeat) and longer trigger intervals
- Click interaction: random head-pat ("嗯……我会忍住不弄折博士的手的……") or poke ("呀……！博士，请不要突然吓我……")
- State actions: idle=sleep, thinking/working=notes, searching=float, error=scared, dizzy=sad, success=happy

## Install

1. Replace the profile plugin:
   ```powershell
   $pkg = "$env:USERPROFILE\.dsh\profiles\desktop\node_modules\dsh-dafeiyu"
   Copy-Item "PATH\TO\THIS\REPO\*" $pkg -Recurse -Force
   ```
2. Requirements: Python 3 + PySide6 (`py -3 -m pip install PySide6`) — the plugin runs in Python source mode (bundled exe disabled)
3. Restart DSH WebUI, enable the pet in Settings → Plugins → 迷迭香桌面伴侣

Optional: rebuild the single-file helper with `scripts/build-helper.ps1` (needs PyInstaller + PySide6).

## Disclaimer

Rosmontis and her artwork belong to **Hypergryph / Arknights**. The character sprites in this repo are fan-made/AI-generated for **personal, non-commercial use only**. Code is MIT-licensed per the upstream project (see `LICENSE`, `ASSET_LICENSE.md`).

## Upstream

https://github.com/QCYTSN/dsh-dafeiyu
