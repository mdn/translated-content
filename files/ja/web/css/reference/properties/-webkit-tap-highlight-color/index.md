---
title: CSS `-webkit-tap-highlight-color` プロパティ
short-title: -webkit-tap-highlight-color
slug: Web/CSS/Reference/Properties/-webkit-tap-highlight-color
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}

**`-webkit-tap-highlight-color`** は CSS の標準外のプロパティで、リンクがタップされている間に表示される強調色を設定します。強調は、ユーザーがタップしたことが正常に認識されていることを示し、またどの要素がタップされているかを示します。

## 構文

```css
-webkit-tap-highlight-color: red;
-webkit-tap-highlight-color: transparent; /* 強調をなくす */

/* グローバル値 */
-webkit-tap-highlight-color: inherit;
-webkit-tap-highlight-color: initial;
-webkit-tap-highlight-color: revert;
-webkit-tap-highlight-color: revert-layer;
-webkit-tap-highlight-color: unset;
```

### 値

{{Cssxref("&lt;color&gt;")}} です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`-webkit-tap-highlight-color = <color>`)}}

## 仕様書

標準には含まれていません。 Apple では [Safari Web Content Guide での説明](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5)があります。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebKit CSS 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions)
- 関連する CSS 擬似クラス:
  - {{cssxref(":hover")}}
  - {{cssxref(":active")}}
  - {{cssxref(":visited")}}
