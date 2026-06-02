---
title: "`layer()` CSS 関数"
short-title: layer()
slug: Web/CSS/Reference/At-rules/@import/layer_function
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

**`layer()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、{{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)と共に使用され、インポートされたリソースを分離された名前付き[カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer)にインポートするために使用します。

## 構文

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

`framework.themes.dark` は、CSS ファイルをインポートするレイヤーです。

## 形式文法

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("@import")}}
- [CSS アットルール関数](/ja/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
