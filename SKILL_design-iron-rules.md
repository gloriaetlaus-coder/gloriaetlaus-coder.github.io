---
name: design-iron-rules
description: 用户设计铁律与语料写作规范。当用户进行任何UI设计、前端开发、文案编写时触发。强制执行：不改用户没说过的东西、禁止"不是A而是B"句式、禁止强行绑定、英文主题词纯直译。
name_cn: 设计铁律
description_cn: 用户设计铁律与语料写作规范，适用于所有tool/APP设计与文案编写场景
create_source: super-agent-skill-creator
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cdd38ef7-51c4-41e9-9d23-99ae1ac8c83f'
  PropagateID: 'cdd38ef7-51c4-41e9-9d23-99ae1ac8c83f'
  ReservedCode1: 'f38c1fc1-6d77-4a0d-8dbe-aec6c2a025b5'
  ReservedCode2: 'f38c1fc1-6d77-4a0d-8dbe-aec6c2a025b5'
---

# 设计铁律与语料写作规范

## 设计铁律（最高优先级）

1. **禁止修改用户没有说过的东西**：用户说改哪里就改哪里，不擅自乱联想、不自作主张扩展
2. **「不要动」= 完全保持原样**：任何位置、颜色、字体、动画都不改
3. **交付前必须仔细检查**：没改好的继续改；改错了改回用户认可的版本
4. **不做"改进"建议**：对用户已明确的设计（如 slogan 样式、卡片布局、空白风格），不做任何"改进"建议，除非用户主动问
5. **「删除」= 真删掉**：彻底删除，不要用新字段/新内容替换或填充，不要留空占位
6. **卡片上不显示的字段 = 用户不需要的字段**：不在 UI 上展示的字段就没有存在意义，不维护、不保留、不扩展
7. **永远不要使用「今朝·Good day」以外的旧项目名**：旧英文名/旧中文名一律禁止，文件夹统一用 `good-day`

## 视觉全局铁律（最高优先级）

1. **【颜色锁定】**：项目所有 UI 元素的默认颜色严格保持"淡紫色系"和"银白色系"，禁止突兀颜色
2. **【属性冻结原则】**：用户下达"替换某个元素"指令时，只修改用户点名的单一属性，其他属性全部视为"冻结"状态，禁止擅自调整
3. **【默认保留】**：没有明确说"斜体要改"就保留斜体；没有说"字号要改"就保留字号；没有说"去掉特效"就保留所有动效和光效

## 视觉对称与呼吸感铁律（最高优先级）

1. **【间距对称】**：垂直间距必须视觉绝对等距，用统一 CSS 参数控制
2. **【等距原则】**：相邻视觉层级间距必须视觉等距
3. **【规避裁切原则】**：绝对禁止边缘裁切/截断，优先通过增加 padding 或允许词组换行解决，绝不缩小字号
4. **【换行尊严原则】**：换行时禁止单字/单字母孤立占一行（中文至少两个字，英文至少两个音节）
5. **【排错逻辑顺序】**：①压缩 margin/padding → ②允许词组换行 → ③微调字号（必须先告知用户）→ 绝对禁止改 line-height
6. **【多终端适配】**：PC 和手机端都保持对称等距不裁切，以手机端为准调优

## 中文字体斜体铁律（最高优先级）

1. **【宋体无原生斜体字形】**：Songti SC 等中文衬线体没有原生 italic 字形，`font-style: italic` 对中文字无效——浏览器不会合成 CJK 斜体（即使 `font-synthesis: style` 也不可靠）
2. **【必须用 transform: skewX 实现中文斜体】**：中文主题词的斜体效果必须通过 `transform: skewX(-14deg)` 物理倾斜实现，不能依赖 `font-style: italic` 或 `font-synthesis`
3. **【skew-wrap 是斜体+渐变+发光的统一容器】**：中文主题词内容包裹在 `<span class="skew-wrap">` 中。`.skew-wrap` 必须同时承载以下属性：`display: inline-block` + `transform: skewX(-14deg)` + `background: linear-gradient(...)` + `-webkit-background-clip: text` + `-webkit-text-fill-color: transparent` + `filter: drop-shadow(...)`
4. **【渐变必须在 skew-wrap 上】**：`background-clip: text` 和渐变颜色必须直接设在 `.skew-wrap` 上，不能设在父元素上。如果设在父元素上，`transform: skewX` 倾斜后文字将不可见（因为 `background-clip: text` 的裁剪区域不随子元素 transform 变形）
5. **【父元素只保留排版属性】**：`.sign-cn`、`.sign-poem.sign-poem-cn`、`.sign-literal` 只保留字体、字号、字重、间距、padding、animation:fadeUp 等排版属性，渐变/发光/background-clip 全部移到 `.skew-wrap` 上
6. **【font-synthesis 设为 none】**：所有中文主题词元素的 `font-synthesis` 设为 `none`（禁止字体合成），斜体效果完全由 transform 负责
7. **【英文/拉丁字体不受影响】**：英文/拉丁字体（Georgia、Times New Roman 等）有原生 italic 字形，`font-style: italic` 正常生效，不需要 transform

## 语料写作铁律

1. **禁止「不是A而是B」句式**——用户极度反感，永久记住
2. **禁止强行绑定**——有的人悲伤就是悲伤，不要跟爱绑架起来
3. **英文主题词纯直译**——不加料、不生造、不过度解释
4. **释义围绕"身体/神经/激素"正面作用**，最长3行，末句提供情绪价值
5. **出处两行独立展示**（第一行：国家·学科，第二行：作者/机构），第二行不能留空
6. **释义字体**：用系统宋体（Songti SC 优先），禁引 Google Fonts 的 Noto Serif SC，字重 600

## 字体授权铁律

1. **只允许自由商用字体**：必须 SIL Open Font License 1.1 或全平台免费商用授权
2. **引入前必须确认授权**：在代码注释中标注授权类型

## 数据层与UI层完全统一铁律

1. **数据层和 UI 层的主题词（poem 和 cn）绝对不允许出现逗号**（ASCII `,` 和中文 `，` 都不许）
2. **英文/外文逗号 → 空格**；**中文逗号 → 空字符串直接删除**；清除后合并连续多空格
3. **数据源头清除**，不允许在 UI 层用 `replace` 掩盖数据层的逗号

## 卡片排版通用原则

1. **允许自然流式排版**：各行之间不需要强行首字垂直对齐，避免孤字换行
2. **严格控制容器空间**：中文短句（<10字）必须一行内完整显示，长句允许自然换行；CSS 用 `text-wrap: balance` + `word-break: keep-all`
3. **绝对红线**：禁止卡边/截断、禁止内容溢出、禁止未经告知缩小字号
4. **应急顺序**：增加容器宽度 → 允许自然流式排版 → 最后才考虑微调字号（≤10%，先告知用户）
5. **smartSegments 函数规则**：中文短句（≤ maxCn+5 字）整体成段不拆分，循环切分时若剩余恰好1字把上段末尾字挪过来，过短段（1-2字）并入前段

## 卡片排版物理极限与语料库拦截铁律

1. **【绝对视觉底线】**：整个工具在任何终端必须控制在一屏之内，卡片高度固定，内容超出即为失败
2. **【排版安全阈值】**：字号缩小上限 10%，如果缩小10%仍放不下，问题出在语料而非排版
3. **【语料库长度拦截器】**：渲染前校验文本长度，超限自动跳过不渲染
4. **【hidden 标记机制】**：`hidden: true` 的条目不参与抽取，但数据保留；`?showall=true` 可全量审查
5. **【长句处理】**：优先精简语料本身，禁止用 `overflow:hidden` 掩盖溢出

## PC端与移动端样式铁律

1. **平台差异不是代码错误**：手机与 PC 预览不同是底层渲染引擎导致，不要强行让两端"一模一样"
2. **强制媒体查询隔离**：手机端样式写在 `@media (max-width: 768px)` 里；PC 端写在 `@media (min-width: 769px)` 或默认样式里
3. **每次只改用户要求的那一端**，绝对不动另一端

## 强制本地验证超时与交付铁律（最高优先级）

1. **本地服务器 200 OK = 成功**：只要 `GET /index.html` 返回 200 OK，即项目成功运行，立刻进入下一步
2. **禁止繁琐自检**：拿到 200 OK 后立刻停止一切验证动作（curl、截图、Playwright 等）
3. **硬性超时上限 10 秒**：任何本地验证命令（Playwright 截图、无头浏览器、JS 语法检查）必须加 `--max-time 10` 或 `timeout 10`，超时直接终止，不报错、不重启、不重试
4. **网络卡住直接告知**：GitHub API 超时不反复重试，直接告诉用户"网络卡住了"
5. **端口冲突一次性处理**：清理一次不行立刻换备用端口（8080），绝不反复纠结

## 最终交付链路铁律（最高优先级）

1. **唯一交付格式**：可直接点击的 Markdown 超链接 `[链接文字](https://...)`，禁止代码块、禁止纯文本地址
2. **部署失败不降级**：GitHub 部署失败时不给旧本地链接，明确告知原因并重新部署
3. **禁止内容泄露**：不暴露内部测试代码、Git 命令行、无法点击的地址
4. **一律交付预览链接**：用户已明确表示以后都给预览链接，不再给审核链接
5. **预览模式隐藏审核按钮**：正常预览模式下「人工审核」入口按钮必须 `display: none`，仅 `?review=true` 审核模式才显示

## 人工审核功能纪律（最高优先级）

1. **【绝对起始点】**：进入审核模式必须从第1张卡片开始，强制清空 localStorage 审核记录
2. **【全量核验】**：审核列表展示所有当前未隐藏的卡片
3. **【禁止自作聪明】**：不允许自动跳步，所有卡片由用户亲自确认后进入下一张

## 审核模式功能优先铁律（最高优先级，凌驾于一切美观规则之上）

1. **功能大于美观**：只要是用于"人工审核"模式下的所有辅助元素（审核按钮、进度计数器、状态提示框等），其【可用性】永远高于【美观性】
2. **停止对审核UI的审美追求**：对审核按钮，不要使用复杂的发光、渐变、透明毛玻璃、花体字等装饰性CSS。只需要能看清、能用、能点即可
3. **审核元素独立布局**：审核按钮和计数器必须放在一个与【正式预览卡片】互不干扰的独立区域。绝对不能为了嵌入审核元素，去改动或破坏首页布局、卡片翻转动画、字体发光等正式UI的结构
4. **进度数字必须在审核按钮旁显眼显示**，确保用户随时能看清当前进度
5. **冲突时的仲裁标准**：如果在添加审核按钮时，系统出现白屏、页面错乱、首页消失等严重Bug，必须在"保证页面能正常跑起来"的前提下，重新增加审核按钮，绝不能为了美观而牺牲可用性

## 审核与预览严格分离铁律（最高优先级）

1. **完全隔离**：审核链接（`?qa2=true`）和正常预览链接（无参数）必须在代码里做成完全独立的两个状态。审核逻辑只存在于 `?qa2=true` 分支内，绝对禁止审核代码出现在正常预览的 `init()` 流程中
2. **正常预览零审核按钮**：正常预览页面上不得出现任何审核按钮、计数器或审核入口。审核入口只能通过 `?qa2=true` URL 参数进入
3. **强制清理 localStorage**：每次进入审核模式时，必须强制清空 localStorage 中的审核进度，确保始终从第1张卡片开始审核，而非从中间某张开始
4. **审核不污染渲染**：审核模式下的卡片渲染不得跳过 `drawSign()` 的动效链。如果审核模式需要展示卡片，必须走完整的动画流程（魔法棒→涟漪→延迟翻转），不得直接 `add('flipped')` 跳过动效
5. **回退优先**：一旦出现动效丢失、页面白屏、首页消失等异常，必须立刻用 Git 回退到正常版本，重新设计隔离方案，绝不在已崩坏的代码上打补丁

## 已隐藏卡片彻底封禁铁律（最高优先级）

1. **隐藏卡片禁止出现在任何数据流中**：抽取池、展示列表、审核列表都必须物理过滤
2. **强制数据隔离**：必须在底层数据返回时提前过滤，不只靠 CSS 隐藏
3. **所有端口一致**：预览链接、审核链接、正式发布链接都必须过滤隐藏卡片
4. **数据层保留**：`hidden: true` 的语料数据文件不删除，只在运行时过滤

## 语料库备份强制规则（最高优先级）

1. **Git Commit 必须完整提交所有数据文件**：包括 `hidden: true` 的语料数据，禁止删除/忽略/跳过任何隐藏语料数据
2. **禁止 .gitignore 排除语料文件**：`.gitignore` 中不能出现语料数据文件路径
3. **提交前检查**：`git status` 确认所有数据文件已纳入版本控制
4. **hidden 语料不是"不需要"**：隐藏卡片在 UI 上不显示 ≠ 数据可丢弃，数据层必须完整保留以便将来恢复或修改

## 全面排查与完整性交付铁律

1. **【逐条追踪】**：用 TodoWrite 逐条记录用户需求，每完成一项立即标记 completed
2. **【交付前全面核查】**：回溯用户本轮每一项需求，用清单表格确认已落实
3. **【半成品禁止交付】**：某项修改只做了一半必须继续完成后再交付
4. **【同类元素一致性】**：检查所有相关 CSS 类，确保全部应用，不能只改一个

## 用户交互与提交规范

1. **双重视角交叉理解**：用户可能同时提交自然语言描述和结构化指令，自然语言的真实意图为首要优先级
2. **冒号分隔=并列任务**：冒号前是修改区域，冒号后是详细要求，逐一修复
3. **直接改不要长篇预说明**：动手修改后直接生成预览链接
4. **视觉冲突优先保效果**：用户直接指令与代码实现冲突时，优先保证用户视觉上期待的最终效果

## 永久视觉基准 UI 清单（最高优先级，不可更改）

以进入人工审核之前用户认可的版本为基准。以后每次修改后交付前，必须对照此清单检查所有组件参数是否偏离基准——偏离则必须修正后再交付。

| 组件 | 字体 (Font) | 字号 (Size) | 字重 (Weight) | 倾斜度 (Skew) | 发光参数 (Filter) | 颜色 (Color) | 动效 (Animation) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 顶部 Slogan 中文 | CorpSrcWinSong, Songti SC | 48px (PC) / 42px (mobile) / 36px (360px) | 800 | skewX(-16deg) via title-sub-float | drop-shadow 三重呼吸 (title-breathe) | 银白渐变 #FFFFFF→#F4EEFC→#E4DAF2 | float + shimmer + breathe 三重 |
| 顶部 Slogan 英文 | Great Vibes, Allura, cursive | 52px (PC) / 42px (mobile) / 36px (360px) | 700 | font-style: italic (原生) | drop-shadow 三重呼吸 (title-breathe) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | float + shimmer + breathe 三重 |
| 卡片中文主题词 (.sign-cn .skew-wrap) | Songti SC, serif | clamp(24px,6vw,34px) PC / clamp(26px,8vw,32px) mobile | 700 | skewX(-14deg) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + poem-silver-shimmer |
| 卡片中文签诗 (.sign-poem-cn .skew-wrap) | Songti SC, serif | clamp(24px,6vw,34px) | 700 | skewX(-14deg) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + poem-silver-shimmer |
| 卡片中文直译 (.sign-literal .skew-wrap) | Songti SC, serif | clamp(20px,6.5vw,26px) PC / clamp(22px,6.5vw,28px) mobile | 700 | skewX(-14deg) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + cn-shimmer |
| 卡片英文/外文主题词 (.sign-poem) | Georgia, Times New Roman, serif | 34px PC / 28px mobile | 600 | font-style: italic (原生) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + poem-silver-shimmer |
| 卡片英文副题 (.sign-cn-en) | Georgia, Times New Roman, serif | 34px PC / 28px mobile | 700 | font-style: italic (原生) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + poem-silver-shimmer |
| 释义文字 (.sign-meaning) | Songti SC, serif | 13px PC / 15px mobile | 600 PC / 700 mobile | 无 | 无 | var(--text-soft) #4A3A65 | fadeUp |
| 出处 (.sign-source) | Songti SC, serif | 11px PC / 12px mobile | 700 | font-style: italic | 无 | #A89BC4 银紫色 | fadeUp |
| 底部按钮 (.btn-ghost) | -apple-system, PingFang SC, sans-serif | 13px PC / 15px mobile | 600 | 无 | box-shadow 紫光呼吸 | #6C52A8 | btn-float + btn-breathe |

### 基准执行要求
1. **每次修改后对照检查**：交付前逐一核对此表每行参数，偏离则修正
2. **功能与 UI 基准冲突时优先保 UI**：不可为完成功能牺牲文字居中、倾斜度或字号
3. **skew-wrap 承载全部视觉**：渐变、background-clip:text、filter 发光全部在 `.skew-wrap` 上，父元素只管排版
4. **居中保障**：`.sign-top` 用 `display:flex; flex-direction:column; align-items:center; text-align:center` 确保内容居中

## Git Commit 备份与回滚铁律（最高优先级）

1. **概念替换**：不用复制文件夹/建立文件备份，必须使用 Git Commit 做版本快照
2. **当用户说"满意/OK/不错/挺好/可以"时**：立刻执行 `git add .` + `git commit -m "OK版：满意状态"`，几秒钟完成，不占额外内存
3. **打 Tag 标记里程碑**：用 `git tag -a <版本名> -m "<描述>"` 打带注释的 Tag（如 `OK版`），方便快速回滚
4. **当用户要求"回滚/恢复/回到OK版"时**：直接 `git checkout OK版 -- index.html` 或 `git checkout <tag>` 恢复，保证 100% 精确还原
5. **每次大改前必须先 Commit**：在用户要求进行下一次修改之前，必须先完成一次 Commit，确保上一个版本随时可回滚
6. **本地代码与 GitHub 云端保持一致**：部署前确保本地已 commit，部署后确保 GitHub 上代码与本地一致
7. **Git 仓库位置**：项目 git 仓库在 `good-day/` 目录下（即 `/Users/jr/.local/share/TeleAgent/TeleAgent的工作空间/good-day/`）
8. **当前已有 Tag**：`OK版`（2026-08-29 用户认可的满意状态）

## 交付前检查清单

1. 只改了用户要求改的地方，没有顺手"改进"
2. 按钮绝对不许乱改（padding/高度/宽度/flex）
3. slogan 颜色未被误改（预览态银白渐变）
4. 所有文字完整显示，无截断、无溢出
5. 桌面端和手机端分别验证
6. 控制台零报错（favicon 404 除外）
7. 改错了立即恢复用户认可的版本
8. 部署后线上验证
9. 交付前完整重读本 skill 全文
10. 保存按钮规则：手机端文字「长按保存」，浮层关闭按钮文字「关闭」
11. 预览模式下人工审核按钮已隐藏
12. 中文主题词斜体可见（skewX-14deg + 渐变在 skew-wrap 上）
13. 手机端页面打开默认 scroll top:0，无偏移滚动
14. 释义文字有浅紫色 + 微弱呼吸发光动效（meaning-breathe）
15. 大改前已 git commit 保护上一个版本
13. 对照永久视觉基准 UI 清单逐行检查