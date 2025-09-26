---
title: Fallback alignment (代替配置)
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

[CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)では、要求された配置が実現できない場合に対処するために代替配置を指定しています。例えば、`justify-content: space-between` を指定した場合、複数の{{Glossary("alignment subject","配置対象物")}}が存在しなければなりません。存在しない場合は、代替配置が使用されます。これは、以下のように配置方法ごとに決まります。

- First baseline
  - : `start`
- Last baseline
  - : `safe end`
- Baseline
  - : `start`
- space-between
  - : `flex-start` (start)
- space-around
  - : `center`
- space-evenly
  - : `center`
- stretch
  - : `flex-start` (start)

## 関連情報

- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)
