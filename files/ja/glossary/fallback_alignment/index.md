---
title: Fallback alignment (代替配置)
slug: Glossary/Fallback_Alignment
tags:
  - CSS
  - 用語集
  - 配置
translation_of: Glossary/Fallback_Alignment
---
[CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)では、代替配置を要求された配置が実現できない場合に対処するために指定します。例えば、`justify-content: space-between` を指定した場合、複数の[配置対象物](/ja/docs/Glossary/Alignment_Subject)が存在しなければなりません。存在しない場合は、代替配置が使用されます。これは、以下のように配置方法ごとに決まります。

- first baseline
  - : `start`
- last baseline
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

- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
