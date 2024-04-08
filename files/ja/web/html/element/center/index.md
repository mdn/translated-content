---
title: "<center>: 中央揃えテキスト要素"
slug: Web/HTML/Element/center
l10n:
  sourceCommit: 6f886b9147b7f62bacfa1e740a3ea288168a58aa
---

{{HTMLSidebar}}{{deprecated_header}}

**`<center>`** は [HTML](/ja/docs/Web/HTML) の要素で、中に含まれるブロックレベルまたはインラインコンテンツを中央揃えして表示する[ブロックレベル要素](/ja/docs/Glossary/Block-level_content)です。コンテナーはふつう {{HTMLElement("body")}} ですが、必ずしもそうとは限りません。

このタグは HTML 4（および XHTML 1）で非推奨要素に指定され、[CSS](/ja/docs/Web/CSS) の {{Cssxref("text-align")}} プロパティを {{HTMLElement("div")}} 要素に適用するか、それぞれの {{HTMLElement("p")}} 要素に適用する方式が採用されました。ブロックを中央揃えするには、別な CSS プロパティである {{Cssxref("margin-left")}} および {{Cssxref("margin-right")}} など用いて、値を `auto` に設定してください（または、 {{Cssxref("margin")}} を `0 auto` に設定してください）。

## DOM インターフェイス

この要素は {{domxref("HTMLElement")}} インターフェイスを実装しています。

## 例 1

```html
<center>
  This text will be centered.
  <p>So will this paragraph.</p>
</center>
```

### 結果

{{EmbedLiveSample("Example 1")}}

## 例 2 （CSS での方法）

```html
<div style="text-align:center">
  This text will be centered.
  <p>So will this paragraph.</p>
</div>
```

### 結果

{{EmbedLiveSample("Example 2 (CSS alternative)")}}

## 例 3 （CSS での方法）

```html
<p style="text-align:center">
  This line will be centered.<br />
  And so will this line.
</p>
```

### 結果

{{EmbedLiveSample("Example 3 (CSS alternative)")}}

> **メモ:** {{Cssxref("text-align")}}`:center` を {{HTMLElement("div")}} または {{HTMLElement("p")}} 要素に適用すると、その*コンテンツ*を中央揃えにしますが、コンテンツの寸法はどれも変更されません。

<!-- ## Technical summary -->

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}
