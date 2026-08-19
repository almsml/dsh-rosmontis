# DSH 迷迭香桌宠（dsh-dafeiyu Rosmontis 定制版）🐱

基于 **dsh-dafeiyu（大肥鱼桌面伴侣）** 深度定制的桌面宠物插件：角色替换为《明日方舟》精英干员 **迷迭香（Rosmontis）**，气泡台词、点击交互、微动作逻辑全部按角色人设重写。

由 DeepSeek Harness 会话事件驱动，实时在 Windows 桌面最上层显示 Agent 的思考/工作/等待/成功/报错状态。

---

## 特性

- **迷迭香角色素材**：15 张角色动作图全部投入使用，装配成 21 个动画 clip（238×260 透明 PNG）
- **角色化气泡台词**：使用迷迭香游戏原话（"做得好，博士，你真棒，谢谢你。""给我命令吧，我一定能完美地执行。""谢谢你一直照顾我们。喵。"）
- **空闲微动作**：眨眼 / 张望 / 哼歌 / 漂浮，随机闪现 2 秒后回到打盹待机；**去过减权**（刚播过的动作降低下次出现权重）+ 拉长的触发间隔
- **点击互动**：随机触发摸头（"嗯……我会忍住不弄折博士的手的……"）或被戳（"呀……！博士，请不要突然吓我……"）
- **状态动作**：待机=打盹、思考/工作=记事、搜索=漂浮、报错=惊吓、头晕=低落、成功=开心

## 动作映射

| 插件动作 | 素材 | 说明 |
|---|---|---|
| idle / blink | 打盹 | 待机（打盹版） |
| thinking / working | 记事 | 思考/办公 |
| working_search | 漂浮 | 漂浮搜索 |
| working_command / walk_* / dragging / tail / glance | 站立 | 无走路素材，站立替代 |
| waiting | 哼歌 | 等待 |
| success | 开心 | 成功 |
| error | 害怕 | 报错惊吓 |
| error_dizzy | 低落 | 头晕 |
| head_pat | 摸头 | 摸头 |
| poke | 被戳 | 被戳 |

## 安装

插件本体是 DSH 的 `dsh-dafeiyu` profile bundle。两种安装方式：

### 方式一：替换 profile 依赖（推荐本地使用）
```powershell
# 1. 把本仓库放到任意位置，例如 D:\repos\dsh-dafeiyu-rosmontis
# 2. 备份后替换 profile 里的插件
$pkg = "$env:USERPROFILE\.dsh\profiles\desktop\node_modules\dsh-dafeiyu"
Copy-Item "D:\repos\dsh-dafeiyu-rosmontis\*" $pkg -Recurse -Force
```

### 方式二：作为依赖安装
在 profile 的 `package.json` 中把 `dsh-dafeiyu` 依赖替换为本仓库的 git URL 后 `pnpm install`。

### 运行要求
- **Python 3 + PySide6**（源码模式必需；插件已停用内置 exe，改用 `py -3 runtime/helper.py` 运行）：
  ```powershell
  py -3 -m pip install PySide6
  ```
- 启用插件后重启 DSH WebUI，设置 → 插件 → 迷迭香桌面伴侣 → 确认已勾选"启用迷迭香"

> 想重新打包成单文件 exe：运行 `scripts/build-helper.ps1`（需要 PyInstaller + PySide6）。

## 素材再生成

角色素材源文件与装配脚本：
- 素材：`assets/pet/`（每 clip 一个 238×260 透明 PNG）
- 更换新素材后需同步更新 `assets/pet-manifest.json`（clip → 帧 → frameMs/loop）

## 版权与免责声明

- 角色"迷迭香（Rosmontis）"及其美术形象版权归 **鹰角网络 /《明日方舟》** 所有
- 本仓库的角色素材由玩家自绘/AI 生成，**仅限个人学习与娱乐用途**，请勿用于商业用途
- 代码部分沿用上游 dsh-dafeiyu 的 MIT 协议，见 `LICENSE` 与 `ASSET_LICENSE.md`

## 相关

- 上游：https://github.com/QCYTSN/dsh-dafeiyu
- 依赖：PySide6（Qt 运行时）
