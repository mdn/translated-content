---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`aspect-ratio`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素ボックスの望ましい幅と高さの比率を定義することができます。つまり、親コンテナーやビューポートのサイズが変更されても、ブラウザーは要素の寸法を調整して、指定された幅と高さの比率を維持します。指定された{{glossary("aspect ratio","アスペクト比")}}は、auto のサイズやその他のレイアウト機能の計算に使用されます。

`aspect-ratio` が何らかの効果を持つためには、ボックスのサイズの少なくとも 1 つが自動である必要があります。幅も高さも自動サイズでない場合、指定されたアスペクト比はボックスの推奨サイズに何の影響も持ちません。

{{EmbedInteractiveExample("pages/css/aspect-ratio.html")}}

## 構文

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* 置換要素では 'auto' になる */
aspect-ratio: auto 3/4;
aspect-ratio: 9/6 auto;

/* グローバル値 */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

このプロパティは、キーワード `auto` または `<ratio>` のいずれか、または両方で指定します。両方が指定され、要素が[置換要素](/ja/docs/Web/CSS/Replaced_element)（[`<img>`](/ja/docs/Web/HTML/Element/img) など）である場合、コンテンツが読み込まれるまでは指定された比率が使用されます。コンテンツが読み込まれた後は、 `auto` の値が適用され、読み込まれたコンテンツの内在的なアスペクト比が使用されます。

要素が置換要素でない場合は、指定された `ratio` が使用されます。

### 値

- `auto`

  - : 内在的なアスペクト比がある[置換要素](/ja/docs/Web/CSS/Replaced_element)の場合は、*その*アスペクト比を使用し、それ以外の場合はボックスに推奨アスペクト比が設定されません。内在的なアスペクト比を使用して寸法を計算する際には、常にコンテンツボックスの寸法に対して行われます。

- {{cssxref("&lt;ratio&gt;")}}

  - : ボックスの推奨アスペクト比は、`width` / `height` で指定された比率です。`height` とそれに先立つスラッシュ文字が省略された場合、`height` の既定値は `1` です。推奨アスペクト比を含む寸法の計算では、`box-sizing` で指定されたボックスの寸法で行われます。

- `auto && <ratio>`

  - : `auto` と `<ratio>` が両方指定された場合、要素が `<img>` 要素のように内在的な縦横比を持つ置換要素である場合は `auto` が使用されます。 それ以外の場合は、指定された `width` / `height` の比率が好ましい縦横比として使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 固定の幅に対する aspect-ratio の効果の実験

この例では、`<div>` 要素の幅は `100px` に、高さは `auto` に設定されています。 幅の値が固定されているため、`aspect-ratio` プロパティは指定された幅と高さの比率を維持するために `<div>` 要素の高さのみに影響します。

```html hidden
<div>1/1</div>
<div>0.5</div>
<div>1</div>
<div>1/0.5</div>
<div>16/9</div>
```

```css hidden
div {
  display: inline-flex;
  background-color: lime;
  justify-content: center;
}
```

```css
div {
  width: 100px;
  height: auto;
}
div:nth-child(1) {
  aspect-ratio: 1/1;
}
div:nth-child(2) {
  aspect-ratio: 0.5;
}
div:nth-child(3) {
  aspect-ratio: 1;
}
div:nth-child(4) {
  aspect-ratio: 1/0.5;
}
div:nth-child(5) {
  aspect-ratio: 16/9;
}
```

{{EmbedLiveSample('Exploring aspect-ratio effects with fixed width', '100%', '300px')}}

### 自然なアスペクト比への代替

この例では、2つの `<img>` 要素を使用しています。最初の要素には、画像ファイルを指定する `src` 属性が設定されていません。

```html
<img src="" /> <img src="plumeria.jpg" />
```

次のコードでは、優先するアスペクト比として `3/2` を、代替として `auto` を設定しています。

```css
img {
  display: inline;
  width: 200px;
  border: 2px dashed red;
  background-color: lime;
  vertical-align: top;

  aspect-ratio: 3/2 auto;
}
```

置換コンテンツではない最初の画像は、縦横比が `3/2` のままですが、コンテンツが読み込まれた後の 2 番目の画像は、画像の自然な縦横比を使用していることに注目してください。

{{EmbedLiveSample('Fallback to natural aspect ratio', '100%', '300px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [アスペクト比を理解する](/ja/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [画像の aspect-ratio: ジャンクの防止](/ja/docs/Learn_web_development/Extensions/Performance/Multimedia#レンダリング戦略_画像を読み込むときのジャンクの防止)
- [Designing an aspect ratio unit for CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
