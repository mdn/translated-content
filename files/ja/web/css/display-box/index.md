---
title: <display-box>
slug: Web/CSS/display-box
---

{{CSSRef}}

これらのキーワードは、要素が表示ボックスを作るかどうかを定義します。

## 構文

有効な `<display-box>` の値は以下のとおりです。

- `contents`

  - : これらの要素は自身のために特定のボックスを生成しません。擬似ボックスやその子ボックスで置き換えられます。なお、 CSS Display Level 3 仕様書では、 `contents` の値が「普通ではない要素」 — 置換要素のように、 CSS ボックスの純粋な概念に従って表示されない要素に影響する方法を定義しています。詳しくは [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) を参照してください。

    _ブラウザーのバグにより、現在のところ、この値を使用するとアクセシビリティツリーから要素を削除します。 — 読み上げソフトは中に何があるかを見ません。詳しくは後述の[アクセシビリティの考慮](#アクセシビリティの考慮)の節をご覧ください。_

- `none`
  - : 要素の表示を無くし、レイアウトに影響を与えなくなります (文書は要素が存在しないかのように表示されます)。すべての子孫要素も表示がなくなります。
    要素が通常占める空間を確保しつつ、実際には何も表示しないようにしたいのであれば、代わりに {{CSSxRef("visibility")}} プロパティを使用してください。

## アクセシビリティの考慮

多くのブラウザーの現在の実装では、[アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis)から `display` の値が `contents` である要素を削除します。これにより、その要素は — また、一部の版のブラウザーではその子孫要素も — 読み上げ技術で読み上げられなくなります。これは [CSSWG 仕様書](https://drafts.csswg.org/css-display/#the-display-properties)によれば、正しくない動作です。

- [More accessible markup with display: contents | Hidde de Vries](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## 例

最初の例では、 secret クラスの段落に `display: none` を設定します。ボックスとその内容は表示されなくなります。

### display: none

#### HTML

```html
<p>Visible text</p>
<p class="secret">Invisible text</p>
```

#### CSS

```css
p.secret {
  display: none;
}
```

#### 結果

{{EmbedLiveSample("display_none", "100%", 60)}}

### display: contents

この例では、外側の {{htmlelement("div")}} が 2 ピクセルの赤い境界線と 300px の幅を持っています。しかし、 `display: contents` も指定されているので、この `<div>` は表示されず、境界線や幅は適用されなくなり、子要素は親要素が存在しなかったかのように表示されます。

#### HTML

```html
<div class="outer">
  <div>Inner div.</div>
</div>
```

#### CSS

```css
.outer {
  border: 2px solid red;
  width: 300px;
  display: contents;
}

.outer > div {
  border: 1px solid green;
}
```

#### 結果

{{EmbedLiveSample("display_contents", 300, 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

### contents の対応

{{Compat("css.properties.display.contents", 10)}}

## 関連情報

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [More accessible markup with display: contents — hiddedevries.nl](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
