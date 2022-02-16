---
title: clip
slug: Web/CSS/clip
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - 非推奨
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.clip
translation_of: Web/CSS/clip
---
{{CSSRef}}

**`clip`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のどの部分が可視であるかを定義します。 `clip` プロパティは絶対配置された要素、つまり {{cssxref("position","position:absolute")}} または {{cssxref("position","position:fixed")}} を持つ要素だけに適用されます。

```css
/* キーワード値 */
clip: auto;

/* <shape> 値 */
clip: rect(1px, 10em, 3rem, 2ch);

/* グローバル値 */
clip: inherit;
clip: initial;
clip: revert;
clip: unset;
```

## 構文

> **Note:** 可能であれば、より新しい {{cssxref("clip-path")}} を使うことをお勧めします。

### 値

- {{cssxref("shape")}}

  - : `rect(<top>, <right>, <bottom>, <left>)` 形式の矩形の {{cssxref("&lt;shape&gt;")}} です。 `<top>` と `<bottom>` は、ボックス境界の上辺からのオフセットを表します。`<right>` と `<left>` は、ボックス境界の左辺からのオフセットを表します。これがボックスの中身となります。

    `<top>`、`<right>`、`<bottom>`、`<left>` の値は {{cssxref("&lt;length&gt;")}} または `auto` のいずれかです。`auto` が指定されると、その辺の*内部のボックス境界*で切り取られます。

- `auto`
  - : 要素はクリップされません (既定値)。ボックス境界で切り取る `rect(auto, auto, auto, auto)` とはまったく異なることに注意してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Clipping_an_image">画像の切り抜き</h3>

#### CSS

```css
.dotted-border {
  border: dotted;
  position: relative;
  width: 536px;
  height: 350px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 360px;
  clip: rect(0, 175px, 113px, 0);
}

#middle {
  left: 280px;
  clip: rect(119px, 255px, 229px, 80px);
}

#bottom-right {
  left: 200px;
  clip: rect(235px, 335px, 345px, 160px);
}
```

#### HTML

```html
<p class="dotted-border">
  <img src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Original graphic">
  <img id="top-left" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to upper left">
  <img id="middle" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped towards middle">
  <img id="bottom-right" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to bottom right">
</p>
```

#### 結果

{{EmbedLiveSample('Clipping_an_image', '689px', '410px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは非推奨です。代わりに {{cssxref("clip-path")}} を使ってください。
- 関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow")}}, {{cssxref("display")}}, {{cssxref("position")}}
