---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '53f9813b-7ef6-4148-b563-2e8ac3c09896'
  PropagateID: '53f9813b-7ef6-4148-b563-2e8ac3c09896'
  ReservedCode1: 'e9b62cb1-b45a-42a4-be0c-1e94d6194be0'
  ReservedCode2: 'e9b62cb1-b45a-42a4-be0c-1e94d6194be0'
---

# 永久视觉基准 UI 清单（最高优先级，不可更改）

> 以进入人工审核之前用户认可的版本为基准。以后每次修改后交付前，必须对照此清单检查所有组件参数是否偏离基准——偏离则必须修正后再交付。

| 组件 | 字体 (Font) | 字号 (Size) | 字重 (Weight) | 倾斜度 (Skew) | 发光参数 (Filter) | 颜色 (Color) | 动效 (Animation) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 顶部 Slogan 中文 | CorpSrcWinSong, Songti SC | 48px (PC) / 42px (mobile) / 36px (360px) | 800 | skewX(-16deg) via title-sub-float | drop-shadow 三重呼吸 (title-breathe) | 银白渐变 #FFFFFF→#F4EEFC→#E4DAF2 | float + shimmer + breathe 三重 |
| 顶部 Slogan 英文 | Great Vibes, Allura, cursive | 52px (PC) / 42px (mobile) / 36px (360px) | 700 | font-style: italic (原生) | drop-shadow 三重呼吸 (title-breathe) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | float + shimmer + breathe 三重 |
| 卡片中文主题词 (.sign-cn .skew-wrap) | Songti SC, serif | clamp(24px,6vw,34px) PC / clamp(26px,8vw,32px) mobile | 700 | skewX(-14deg) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + poem-silver-shimmer |
| 卡片中文签诗 (.sign-poem-cn .skew-wrap) | Songti SC, serif | clamp(24px,6vw,34px) | 700 | skewX(-14deg) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + poem-silver-shimmer |
| 卡片中文直译 (.sign-literal .skew-wrap) | Songti SC, serif | clamp(20px,6.5vw,26px) PC / clamp(22px,6.5vw,28px) mobile | 700 | skewX(-14deg) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + cn-shimmer |
| 卡片英文/外文主题词 (.sign-poem) | Georgia, Times New Roman, serif | 34px PC / 28px mobile | 600 | font-style: italic (原生) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + poem-silver-shimmer |
| 卡片英文副题 (.sign-cn-en) | Georgia, Times New Roman, serif | 34px PC / 28px mobile | 700 | font-style: italic (原生) | drop-shadow 三重 (4px+10px+1px) | 银白渐变 #FFFFFF→#E8DEF5→#D4C5ED | fadeUp + poem-silver-shimmer |
| 释义文字 (.sign-meaning) | Songti SC, serif | 13px PC / 15px mobile | 600 PC / 700 mobile | 无 | 无 | #8B7AA6 浅紫色 | fadeUp + meaning-breathe (微弱呼吸发光) |
| 出处 (.sign-source) | Songti SC, serif | 11px PC / 12px mobile | 700 | font-style: italic | 无 | #A89BC4 银紫色 | fadeUp |
| 底部按钮 (.btn-ghost) | -apple-system, PingFang SC, sans-serif | 13px PC / 15px mobile | 600 | 无 | box-shadow 紫光呼吸 | #6C52A8 | btn-float + btn-breathe |

## 基准执行要求

1. **每次修改后对照检查**：交付前逐一核对此表每行参数，偏离则修正
2. **功能与 UI 基准冲突时优先保 UI**：不可为完成功能牺牲文字居中、倾斜度或字号
3. **skew-wrap 承载全部视觉**：渐变、background-clip:text、filter 发光全部在 `.skew-wrap` 上，父元素只管排版
4. **居中保障**：`.sign-top` 用 `display:flex; flex-direction:column; align-items:center; text-align:center` 确保内容居中

> AI生成