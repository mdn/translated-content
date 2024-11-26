---
title: "HTMLImageElement: sizes プロパティ"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`sizes`** プロパティによって、メディア条件のリストごとに、[画像](/ja/docs/Web/HTML/Element/img)のレイアウト幅を指定することができます。これにより、様々なメディア条件に合わせて文書の状態が変化したときに、異なる画像（方向やアスペクト比の異なる画像も含む）を自動的に選択する機能が提供されます。

それぞれの条件は、[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)で使われているのと同じ条件指定の形式を使用します。

## 値

カンマで区切られたソースサイズ記述子のリストと、オプションで代替サイズを含む文字列。それぞれの**ソースサイズ記述子**は、メディア条件、 1 つ以上のホワイトスペース文字、そしてメディア条件が `true` と評価されたときに画像に使用する**ソースサイズ値**で構成されます。

### メディア条件

それぞれのソースサイズ記述子は、メディアクエリー規格で定義されるメディア条件から構成される。ソースサイズ記述子は、ページのレイアウト中に画像に使用する幅を指定するために使用されるので、メディア条件は通常、[幅](/ja/docs/Web/CSS/@media/width)の情報のみに基づきます（必ずしもそうとは限りません）。メディア条件の構築方法の詳細は、[メディアクエリーの使用の構文](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries#構文)を参照してください。

### ソースサイズ値

ソースサイズの値は CSS の {{cssxref("length")}} です。フォントと相対的な単位 (`em` や `ex` など)、絶対的な単位 (`px` や `cm` など)、または `vw` という単位を使って指定することができ、ビューポート幅に対する割合（`1vw` はビューポート幅の 1%）で指定することができます。

> [!NOTE]
> ソースサイズ値は、コンテナーサイズに対するパーセント値として指定してはいけません。つまり、`50%` や `100%` といった長さの指定は、指定した値が何に対するパーセント値であるかが不明確になるため、許されません。

## 例

### ウィンドウの幅に合う画像の選択

この例では、ブログ風のレイアウトを作成し、テキストと画像を表示します。画像は、ウィンドウの幅に応じて 3 つのサイズポイントが指定されています。画像も 3 種類用意し、それぞれの幅を指定しています。ブラウザーはこれらの情報をすべて受け取り、指定された値に最も合う画像と幅を選択します。

画像がどのように使われるかは、ブラウザーやユーザーのディスプレイの画素密度に依存する場合があります。

この例の下にあるボタンで、実際に `sizes` プロパティを少し変更し、画像の 3 つの幅のうち最大のものを 40em と 50em の間で切り替えています。

#### HTML

```html
<article>
  <h1>An amazing headline</h1>
  <div class="test"></div>
  <p>
    This is even more amazing content text. It's really spectacular. And
    fascinating. Oh, it's also clever and witty. Award-winning stuff, I'm sure.
  </p>
  <img
    src="new-york-skyline-wide.jpg"
    srcset="
      new-york-skyline-wide.jpg 3724w,
      new-york-skyline-4by3.jpg 1961w,
      new-york-skyline-tall.jpg 1060w
    "
    sizes="((min-width: 50em) and (max-width: 60em)) 50em,
              ((min-width: 30em) and (max-width: 50em)) 30em,
              (max-width: 30em) 20em"
    alt="The New York City skyline on a beautiful day, with the One World Trade Center building in the middle." />
  <p>
    Then there's even more amazing stuff to say down here. Can you believe it? I
    sure can't.
  </p>

  <button id="break40">Last Width: 40em</button>
  <button id="break50">Last Width: 50em</button>
</article>
```

#### CSS

```css
article {
  margin: 1em;
  max-width: 60em;
  min-width: 20em;
  border: 4em solid #880e4f;
  border-radius: 7em;
  padding: 1.5em;
  font:
    16px "Open Sans",
    Verdana,
    Arial,
    Helvetica,
    sans-serif;
}

article img {
  display: block;
  max-width: 100%;
  border: 1px solid #888;
  box-shadow: 0 0.5em 0.3em #888;
  margin-bottom: 1.25em;
}
```

#### JavaScript

JavaScript のコードでは、　3　つ目の幅のオプションを 40em と 50em の間で切り替えることができる　2　つのボタンを処理しています。これは {{domxref("Element.click_event", "click")}} イベントを処理することで、 JavaScript 文字列オブジェクトの {{jsxref("String.replace", "replace()")}} メソッドを使って `sizes` 文字列の該当部分を置換して実現しています。

```js
const image = document.querySelector("article img");
const break40 = document.getElementById("break40");
const break50 = document.getElementById("break50");

break40.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/50em,/, "40em,")),
);

break50.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/40em,/, "50em,")),
);
```

#### 結果

{{EmbedLiveSample("Selecting an image to fit window width", "", 1050)}}

このページは{{LiveSampleLink('Selecting an image to fit window width', '独自のウィンドウで見る')}}ほうが、大きさを完全に調整できるので適しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)
- [メディアクエリーの使用](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [HTML における画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [`srcset` および `sizes` 属性の使用](/ja/docs/Web/HTML/Element/img#srcset_および_sizes_属性の使用)
