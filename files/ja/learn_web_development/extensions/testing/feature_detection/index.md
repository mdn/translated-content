---
title: 機能検出の実装
slug: Learn_web_development/Extensions/Testing/Feature_detection
original_slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
l10n:
  sourceCommit: 02d11d391e3d376ed66b516c135147ea7cc34618
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

機能検出は、あるブラウザーがあるコードのブロックに対応しているかどうかを調べ、対応しているか (またはしていないか) に応じて異なるコードを実行することで、ブラウザーが常に動作し、ブラウザーによってクラッシュやエラーが発生しないようにします。この記事では、独自の単純な機能検出の書き方、実装をスピードアップするためのライブラリーの使い方、 `@supports` などの機能検出のためのネイティブ機能について詳しく説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript</a> 言語の主要部に通じていること。
        <a
          href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >ブラウザー横断テストの基本</a
        >について高水準の考えを持っていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        機能検出の概念について理解し、CSS と JavaScript で適切な解決方法を実装できるようにする。
      </td>
    </tr>
  </tbody>
</table>

## 機能検出の概念

機能検出の根底にあるアイデアは、プログラムを実行中のブラウザーがある特定の機能に対応しているかを確かめ、その結果に応じて異なるコードを実行するということで、対応ブラウザーと非対応ブラウザーのいずれでも許容できる挙動となるようにすることです。もしこの対策をしなければ、その特定の機能に対応していないブラウザーではサイトが正常に表示されなかったり、エラーを起こして使い勝手を悪化させるでしょう。

それでは、[よくある JavaScript の問題の扱い](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#機能検出)で触れた例を振り返ってみましょう。[位置情報 API](/ja/docs/Web/API/Geolocation_API) (ブラウザーを実行している端末の位置情報を返します)は、 [Navigator](/ja/docs/Web/API/Navigator) オブジェクトに含まれる `geolocation` プロパティを主なエントリーポイントとして持っています。そこで、以下のようにしてブラウザーが位置情報機能に対応しているかどうかを検出できます。

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // Google Maps API を用いて現在位置をマップ上に表示します
  });
} else {
  // 位置情報がなくてもマップを表示できるようにします
}
```

次に進む前にもう 1 つお伝えさせてください。機能検出と**ブラウザー検出**（サイトにアクセスしているブラウザーの種類の検出）を混同しないでください。これはいかなる場合にも避けられるべき悪しき風習です。詳しくは[ブラウザー検出をしない](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#ブラウザー検出をしない)を参照してください。

## 自分自身で機能検出テストを書く

この節では、 CSS と JavaScript の両方で、自分自身で機能検出テストを実装する方法を見ていきます。

### CSS

JavaScriptで _[element.style.プロパティ](/ja/docs/Web/API/HTMLElement/style)_ （例 `paragraph.style.rotate`）の存在をテストすることで、 CSS 機能のテストを書くことができます。

古典的な例は、ブラウザーの[サブグリッド](/ja/docs/Web/CSS/CSS_grid_layout/Subgrid)の対応をテストすることです。 [`grid-template-columns`](/ja/docs/Web/CSS/grid-template-columns) と [`grid-template-rows`](/ja/docs/Web/CSS/grid-template-rows) のサブグリッドの値として `subgrid` に対応しているブラウザーの場合、レイアウトでサブグリッドを使用することができます。そうでないブラウザーでは、通常のグリッドを使用することができて、動作はうまくいきますが、見た目はあまりよくありません。

この例を用いると、値が対応している場合はサブグリッドのスタイルシートを、対応していない場合は通常のグリッドのスタイルシートを含めることができます。そのためには、 HTML ファイルの見出しに 2 つのスタイルシートを含めることができます。 1 つはすべてのスタイル設定、もう 1 つはサブグリッドに対応していない場合の既定レイアウトを実装するものです。

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

ここでは、 `basic-styling.css` がすべてのブラウザーに適用したいスタイル設定を処理します。さらに 2 つの CSS ファイル `grid-layout.css` と `subgrid-layout.css` があります。これらにはブラウザーの対応レベルに応じて選択的に適用したい CSS が格納されています。

JavaScript を使用してサブグリッド値の対応をテストし、ブラウザーの対応に基づいて条件付きスタイルシートの `href` を更新します。

以下の JavaScript で満たされた `<script></script>` を文書内に追加します。

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

条件文では、 {{cssxref("grid-template-columns")}} プロパティが `subgrid` 値に対応しているかどうかを、 [`CSS.supports()`](/ja/docs/Web/API/CSS/supports_static) を使用してテストしています。

#### @supports

CSS にはネイティブの機能検出メカニズムがあります。 {{cssxref("@supports")}} アットルールです。これは[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)と同じように動作しますが、解像度や画面の内側、縦横比などのメディア特性に応じて CSS を選択的に適用するのではなく、 `CSS.supports()` と同じように、 CSS 機能が対応しているかどうかによって CSS を選択的に適用します。

例えば、前回の例を書き換えて `@supports` を使用することができます。

```css
@supports (grid-template-columns: subgrid) {
  main {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, minmax(100px, auto));
  }

  .item {
    display: grid;
    grid-column: 2 / 7;
    grid-row: 2 / 4;
    grid-template-columns: subgrid;
    grid-template-rows: repeat(3, 80px);
  }

  .subitem {
    grid-column: 3 / 6;
    grid-row: 1 / 3;
  }
}
```

このアットルールブロックは、現在のブラウザーが `grid-template-columns: subgrid;` 宣言に対応している場合にのみ、 CSS ルールを適用します。値を指定した条件が動作するためには、（プロパティ名だけでなく）完全に宣言を記載し、最後にセミコロンを含めない必要があります。

他にも `@supports` では `AND`、`OR`、`NOT` の論理演算が利用できます。

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

これは前回の例よりも便利です。機能検出をすべて CSS で行うことができ、 JavaScript は不要です。また、すべてのロジックを単一の CSS ファイルで処理することができるため、 HTTP リクエストを減らすことができます。このため、 CSS 機能のブラウザーの対応を判断するメソッドとして推奨されています。

### JavaScript

JavaScript の機能検出テストの例をすでに見ました。一般的に、このようなテストはいくつかある一般的なパターンの 1 つによって行われます。

検出可能な機能の一般的なパターンには、以下のようなものがあります。

- オブジェクトのメンバー

  - : 具体的なメソッドやプロパティ（通常は、検出する API や他の機能を使用するためのエントリーポイント）が親オブジェクトに存在するかどうかを調べます。

    先ほどの例では、[`navigator`](/ja/docs/Web/API/Navigator) オブジェクトに `geolocation` メンバがあるかどうかをテストすることで、[位置情報](/ja/docs/Web/API/Geolocation_API)の対応を検出するためにこのパターンを使用しました。

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- 要素のプロパティ

  - : {{domxref("Document.createElement()")}} を使ってメモリー内に要素を作成し、それにプロパティが存在するか調べます。

    この例では、[キャンバス API](/ja/docs/Web/API/Canvas_API) の対応を検出する方法を示しています。

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > 上の例の二重 `NOT` (`!!`) は、結果を歪める可能性のある{{glossary("Truthy", "真値")}}/{{glossary("Falsy", "偽値")}}ではなく、「適切な」論理値を返すように強制する方法です。

- 要素におけるメソッドの固有の返値

  - : {{domxref("Document.createElement()")}} を使用してメモリー内に要素を作成し、その要素にメソッドが存在するか調べます。存在する場合は、そのメソッドが返す値を調べます。このパターンの例については、 [Dive into HTML Video Format detection](https://diveinto.html5doctor.com/detect.html#video-formats) の機能テストを参照してください。

- 要素に割り当てられたプロパティ値の保持

  - : {{domxref("Document.createElement()")}} を使用してメモリー内に要素を作成し、プロパティに固有の値を設定し、その値が保持されているかどうかを調べます。このパターンの例については、 [Dive into HTML \<input> type detection](https://diveinto.html5doctor.com/detect.html#input-types) の機能テストを参照してください。

しかし、いくつかの機能は検出できないことが知られていることに留意してください。このような用途では、{{Glossary("Polyfill", "ポリフィル")}}を使用するなど、別の手法を用いる必要があります。

#### matchMedia

また、 {{domxref("Window.matchMedia")}} の JavaScript 機能についても触れておきたいと思います。これは、 JavaScript 内でメディアクエリーテストを実行するためのプロパティです。このように見ていきます。

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

例えば、 [Snapshot](https://github.com/chrisdavidmills/snapshot) デモでは、 Brick JavaScript ライブラリーを選択的に適用し、 UI レイアウトを処理するために使用していますが、小さな画面レイアウト（480px 幅以下）の場合のみ使用しています。最初に `media` 属性を使用して、ページ幅が 480px 以下の場合にのみ Brick CSS を使用します。

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

そして、 JavaScript で何度か `matchMedia()` を使用することで、小さな画面レイアウトにいる場合にのみ Brick のナビゲーション機能を実行することができます（広い画面レイアウトでは、すべてを一度に見ることができるので、異なるビュー間を移動する必要はありません）。

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## まとめ

この記事では、機能検出についてそれなりに詳しく取り上げ、主な概念を読み、自分自身で機能検出テストを実装する方法を示しました。

次は自動テストについて見ていきます。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
