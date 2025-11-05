---
title: ::-webkit-scrollbar
slug: Web/CSS/Reference/Selectors/::-webkit-scrollbar
original_slug: Web/CSS/::-webkit-scrollbar
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{Non-standard_Header}}

`::-webkit-scrollbar` は CSS の擬似要素で、スクロール可能なオーバーフローを持つ要素のスクロールバーのスタイルに影響を与えます。

{{cssxref("scrollbar-color")}} および {{cssxref("scrollbar-width")}} の標準プロパティは、この擬似要素および関連する `::-webkit-scrollbar-*` 擬似要素に対応していないブラウザーの代替として使用できます（[ブラウザーの互換性](#ブラウザーの互換性)を参照してください）。

> [!NOTE]
> {{cssxref("scrollbar-color")}} および {{cssxref("scrollbar-width")}} に対応しており、 `auto` 以外の値が設定されている場合、これらは `::-webkit-scrollbar-*` スタイル設定を上書きします。
> 詳細については、「[スクロールバースタイルの代替設定を追加](#スクロールバースタイルに代替設定を追加)」をご覧ください。

## CSS スクロールバーのセレクター

以下の擬似要素を使用することで、WebKit ブラウザーのスクロールバーのさまざまな部分をカスタマイズすることができます。

- `::-webkit-scrollbar` — スクロールバー全体。
- `::-webkit-scrollbar-button` — スクロールバーのボタン（上下の矢印で一度に一行ずつスクロールします）。
- `::-webkit-scrollbar:horizontal` — 水平スクロールバー。
- `::-webkit-scrollbar-thumb` — ドラッグ可能なスクロールハンドル。
- `::-webkit-scrollbar-track` — スクロールバーのトラック（プログレスバー）で、白いバーの上にグレーのバーがあるところ。
- `::-webkit-scrollbar-track-piece` — トラック（プログレスバー）のハンドルで覆われていない部分。
- `::-webkit-scrollbar:vertical` — 垂直スクロールバー。
- `::-webkit-scrollbar-corner` — スクロールバーの一番下の角で、水平スクロールバーと垂直スクロールバーの両方が合わさるところ。これは多くの場合、ブラウザーウィンドウの右下隅になります。
- `::-webkit-resizer` — いくつかの要素の下隅に現れる、ドラッグ可能なサイズ変更ハンドルです。

## アクセシビリティ

制作者は、スクロールバーの外観を変更すると、[外部の一貫性が損なわれ](https://inclusivedesignprinciples.info/#be-consistent)、ユーザビリティに悪影響を与えるため、スクロールバーのスタイル設定は避けるようにしましょう。スクロールバーをスタイル設定する場合は、色のコントラストが十分であり、タッチターゲットの幅と高さが 44 ピクセル以上であることを確実にしてください。 [Techniques for WCAG 2.0: G183: Using a contrast ratio of 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html) および [Understanding WCAG 2.1 : Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) を参照してください。

## 例

### `-webkit-scrollbar` を使用してスクロールバーにスタイル設定

#### CSS

```css
.visible-scrollbar,
.invisible-scrollbar,
.mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
  padding: 1em;
  margin: 1em auto;
  outline: 2px dashed cornflowerblue;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* 「ほぼカスタマイズされた」スクロールバーをデモする
 * （幅と高さを指定した場合は表示されません） */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* またはトラックに追加 */
}

/* つまみを追加 */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
}
```

#### HTML

```html
<div class="visible-scrollbar">
  <h3>可視のスクロールバー</h3>
  <p>
    Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at
    nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut
    dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis
    velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit
    posuere est. Nulla libero sapien, egestas ac felis porta, cursus ultricies
    quam. Vestibulum tincidunt accumsan sapien, a fringilla dui semper in.
    Vivamus consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet
    faucibus. Curabitur nibh justo, faucibus sed velit cursus, mattis cursus
    dolor. Pellentesque id pretium est. Quisque convallis nisi a diam malesuada
    mollis. Aliquam at enim ligula.
  </p>
</div>

<div class="invisible-scrollbar">
  <h3>不可視のスクロールバー</h3>
  <p>
    Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
  </p>
</div>

<div class="mostly-customized-scrollbar">
  <h3>カスタムスクロールバー</h3>
  <p>
    Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br />
    And pretty tall<br />
    thing with weird scrollbars.<br />
    Who thought scrollbars could be made weird?
  </p>
</div>
```

#### 結果

{{EmbedLiveSample("`-webkit-scrollbar` を使用してスクロールバーにスタイル設定", 600, 300)}}

### スクロールバースタイルに代替設定を追加

{{cssxref("@supports")}} アットルールを使用して、ブラウザーが標準の {{cssxref("scrollbar-color")}} および {{cssxref("scrollbar-width")}} プロパティに対応しているかどうかを検出し、対応していない場合は `::-webkit-scrollbar-*` 擬似要素を使用して代替設定を使用することができます。次の例は、対応している場合は {{cssxref("scrollbar-color")}} を使用して、対応していない場合は `::-webkit-scrollbar-*` 擬似要素を使用して、スクロールバーに色を適用する方法を示しています。

#### HTML

```html
<div class="scroll-box">
  <h1>Yoshi</h1>
  <p>
    Yoshi is a fictional dinosaur who appears in video games published by
    Nintendo. Yoshi debuted in Super Mario World (1990) on the SNES as Mario and
    Luigi's sidekick.
  </p>
  <p>
    Throughout the mainline Super Mario series, Yoshi typically serves as
    Mario's trusted steed.
  </p>
  <p>
    With a gluttonous appetite, Yoshi can gobble enemies with his long tongue,
    and lay eggs that doubly function as projectiles.
  </p>
</div>
```

#### CSS

```css hidden
.scroll-box {
  overflow: auto;
  width: 20rem;
  height: 5rem;
  border: 2px solid cornflowerblue;
  margin: 2rem auto;
  font-family: monospace;
}
```

```css
/* For browsers that support `scrollbar-*` properties */
@supports (scrollbar-color: auto) {
  .scroll-box {
    scrollbar-color: aquamarine cornflowerblue;
  }
}

/* Otherwise, use `::-webkit-scrollbar-*` pseudo-elements */
@supports selector(::-webkit-scrollbar) {
  .scroll-box::-webkit-scrollbar {
    background: aquamarine;
  }
  .scroll-box::-webkit-scrollbar-thumb {
    background: cornflowerblue;
  }
}
```

#### 結果

下記の例では、境界線のあるボックスを垂直方向にスクロールして、スクロールバーのスタイル設定の効果を確認できます。

{{EmbedLiveSample("adding_a_fallback_to_standard_scrollbar_style_properties")}}

## 仕様書

規格の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Don't use custom scrollbars](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollbar styling](https://developer.chrome.com/docs/css-ui/scrollbar-styling) on developer.chrome.com (2024)
- [Styling Scrollbars](https://webkit.org/blog/363/styling-scrollbars/) on WebKit.org (2009)
