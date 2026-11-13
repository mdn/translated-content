---
title: object-fit
slug: Web/CSS/Reference/Properties/object-fit
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`object-fit`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{ glossary("replaced elements", "置換要素")}}、例えば {{HTMLElement("img")}} や {{HTMLElement("video")}} などのコンテンツを、コンテナーにどのようにはめ込むかを設定します。

> [!NOTE]
> `object-fit` プロパティは、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}}、{{HTMLElement("fencedframe")}} の各要素では効果がありません。

要素のボックス内における置換要素の中身のオブジェクトの配置を変更するには、 {{cssxref("object-position")}} プロパティを使用することができます。

{{InteractiveExample("CSS デモ: object-fit")}}

```css interactive-example-choice
object-fit: fill;
```

```css interactive-example-choice
object-fit: contain;
```

```css interactive-example-choice
object-fit: cover;
```

```css interactive-example-choice
object-fit: none;
```

```css interactive-example-choice
object-fit: scale-down;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888888;
}
```

## 構文

```css
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

/* グローバル値 */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: revert-layer;
object-fit: unset;
```

`object-fit` プロパティは、以下の一覧の中からキーワードを一つ選んで指定します。

### 値

- `contain`
  - : 置換コンテンツは{{glossary("aspect ratio", "アスペクト比")}}を維持したまま、要素のコンテンツボックスに収まるように拡大縮小されます。オブジェクト全体がボックス内に表示され、アスペクト比が維持されるので、オブジェクトのアスペクト比とボックスのアスペクト比が合わない場合は、[レターボックス](<https://ja.wikipedia.org/wiki/レターボックス_(映像技術)>)または[ピラーボックス](<https://ja.wikipedia.org/wiki/ピラーボックス_(映像技術)>)表示になります。
- `cover`
  - : 置換コンテンツはアスペクト比を維持したまま、要素のコンテンツボックス全体を埋めるように拡大縮小されます。オブジェクトのアスペクト比がボックスのアスペクト比と合わない場合は、オブジェクトの方が合うように切り取られます。
- `fill`
  - : 置換コンテンツは、要素のコンテンツボックス全体を埋めるサイズになります。オブジェクト全体が完全にボックスの中を埋めます。オブジェクトの{{glossary("aspect ratio", "アスペクト比")}}がボックスのアスペクト比と合わない場合は、オブジェクトは合うように引き伸ばされます。
- `none`
  - : 置換コンテンツは、拡大縮小されません。
- `scale-down`
  - : コンテンツは `none` または `contain` を指定したかのようにサイズが決められ、オブジェクトの実際のサイズが小さいほうを採用します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像に object-fit を設定

#### HTML

```html
<section>
  <h2>object-fit: fill</h2>
  <img class="fill" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="fill narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="contain narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="cover narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: none</h2>
  <img class="none" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="none narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="scale-down narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />
</section>
```

#### CSS

```css
h2 {
  font-family: "Courier New", monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid black;
  margin: 10px 0;
}

.narrow {
  width: 100px;
  height: 150px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

#### 結果

{{ EmbedLiveSample('Setting_object-fit_for_an_image', 500, 1100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の画像関連 CSS プロパティ: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}
- {{cssxref("background-size")}}
- [アスペクト比の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
