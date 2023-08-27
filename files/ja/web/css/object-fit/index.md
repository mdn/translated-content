---
title: object-fit
slug: Web/CSS/object-fit
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`object-fit`** プロパティは、[置換要素](/ja/docs/Web/CSS/Replaced_element)、例えば {{HTMLElement("img")}} や {{HTMLElement("video")}} などの中身を、コンテナーにどのようにはめ込むかを設定します。

要素のボックス内における置換要素の中身のオブジェクトの配置を変更するには、 {{cssxref("object-position")}} プロパティを使用することができます。

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

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
  - : 置換コンテンツはアスペクト比を維持したまま、要素のコンテンツボックスに収まるように拡大縮小されます。オブジェクト全体がボックス内に表示され、アスペクト比が維持されるので、オブジェクトのアスペクト比とボックスのアスペクト比が合わない場合は、[レターボックス](<https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%BF%E3%83%BC%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9_(%E6%98%A0%E5%83%8F%E6%8A%80%E8%A1%93)>)表示になります。
- `cover`
  - : 置換コンテンツはアスペクト比を維持したまま、要素のコンテンツボックス全体を埋めるように拡大縮小されます。オブジェクトのアスペクト比がボックスのアスペクト比と合わない場合は、オブジェクトの方が合うように切り取られます。
- `fill`
  - : 置換コンテンツは、要素のコンテンツボックス全体を埋めるサイズになります。オブジェクト全体が完全にボックスの中を埋めます。オブジェクトのアスペクト比がボックスのアスペクト比と合わない場合は、オブジェクトは合うように引き伸ばされます。
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
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
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
