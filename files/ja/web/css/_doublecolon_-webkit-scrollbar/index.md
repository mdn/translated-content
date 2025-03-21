---
title: ::-webkit-scrollbar
slug: Web/CSS/::-webkit-scrollbar
l10n:
  sourceCommit: 4e002d26cb032c915aeee366f922f23cbacd8bf1
---

{{CSSRef}}{{Non-standard_Header}}

`::-webkit-scrollbar` は CSS の擬似要素で、要素のスクロールバーに `overflow:scroll;` が設定されている場合、そのスタイルに影響を与えます。

> **メモ:** `overflow:scroll;` が設定されていなければ、スクロールバーは表示されません。

> **メモ:** `::-webkit-scrollbar` は [Blink](https://www.chromium.org/blink/) および [WebKit](https://webkit.org) ベースのブラウザー（例えば、Chrome、Edge、Opera、Safari、iOS のすべてのブラウザー、[その他](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based)）でのみ利用できます。スクロールバーのスタイル設定の標準化された方法は、 {{cssxref("scrollbar-color")}} と {{cssxref("scrollbar-width")}} が利用できます。

## CSS スクロールバーのセレクター

以下の擬似要素を使用することで、WebKit ブラウザーのスクロールバーのさまざまな部分をカスタマイズすることができます。

- `::-webkit-scrollbar` — スクロールバー全体。
- `::-webkit-scrollbar-button` — スクロールバーのボタン（上下の矢印で一度に一行ずつスクロールします）。
- `::-webkit-scrollbar:horizontal{}` — 水平スクロールバー。
- `::-webkit-scrollbar-thumb` — ドラッグ可能なスクロールハンドル。
- `::-webkit-scrollbar-track` — スクロールバーのトラック（プログレスバー）で、白いバーの上にグレーのバーがあるところ。
- `::-webkit-scrollbar-track-piece` — トラック（プログレスバー）のハンドルで覆われていない部分。
- `::-webkit-scrollbar:vertical{}` — 垂直スクロールバー。
- `::-webkit-scrollbar-corner` — スクロールバーの一番下の角で、水平スクロールバーと垂直スクロールバーの両方が合わさるところ。これは多くの場合、ブラウザーウィンドウの右下隅になります。
- `::-webkit-resizer` — いくつかの要素の下隅に現れる、ドラッグ可能なサイズ変更ハンドルです。

## 例

### CSS

```css
.visible-scrollbar,
.invisible-scrollbar,
.mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
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

### HTML

```html
<div class="visible-scrollbar">
  Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla
  elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut
  dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis
  velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere
  est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam.
  Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus
  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus.
  Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor.
  Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis.
  Aliquam at enim ligula.
</div>

<div class="invisible-scrollbar">
  Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
</div>

<div class="mostly-customized-scrollbar">
  Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br />
  And pretty tall<br />
  thing with weird scrollbars.<br />
  Who thought scrollbars could be made weird?
</div>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

規格の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- WebKit ブログの [Styling Scrollbars](https://webkit.org/blog/363/styling-scrollbars/)
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
