---
title: HTML `<center>` 中央揃えテキスト要素
short-title: <center>
slug: Web/HTML/Reference/Elements/center
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

**`<center>`** は [HTML](/ja/docs/Web/HTML) の要素で、中に含まれるブロックレベルまたはインラインコンテンツを中央揃えして表示する[ブロックレベル要素](/ja/docs/Glossary/Block-level_content)です。コンテナーはふつう {{HTMLElement("body")}} ですが、必ずしもそうとは限りません。

このタグは HTML 4（および XHTML 1）で非推奨要素に指定され、[CSS](/ja/docs/Web/CSS) の {{Cssxref("text-align")}} プロパティを {{HTMLElement("div")}} 要素に適用するか、それぞれの {{HTMLElement("p")}} 要素に適用する方式が採用されました。ブロックを中央揃えするには、別な CSS プロパティである {{Cssxref("margin-left")}} および {{Cssxref("margin-right")}} など用いて、値を `auto` に設定してください（または、 {{Cssxref("margin")}} を `0 auto` に設定してください）。

## DOM インターフェイス

この要素は {{domxref("HTMLElement")}} インターフェイスを実装しています。

## 例 1

```html
<center>
  このテキストは中央揃えになります。
  <p>これは段落です。</p>
</center>
```

### 結果

{{EmbedLiveSample("Example 1")}}

## 例 2 （CSS での方法）

```html
<div class="center">
  このテキストは中央揃えになります。
  <p>これは段落です。</p>
</div>
```

```css
.center {
  text-align: center;
}
```

### 結果

{{EmbedLiveSample("Example 2 (CSS alternative)")}}

## 例 3 （CSS での方法）

```html
<p class="center">
  This line will be centered.<br />
  And so will this line.
</p>
```

```css
.center {
  text-align: center;
}
```

### 結果

{{EmbedLiveSample("Example 3 (CSS alternative)")}}

> [!NOTE]
> {{cssxref("text-align", "text-align: center")}} を {{HTMLElement("div")}} または {{HTMLElement("p")}} 要素に適用すると、そのコンテンツを中央揃えにしますが、コンテンツの寸法はどれも変更されません。

<!-- ## Technical summary -->

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}
