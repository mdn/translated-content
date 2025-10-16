---
title: CSS カスタムハイライト API
slug: Web/API/CSS_Custom_Highlight_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("CSS Custom Highlight API")}}

CSS カスタムハイライト API は、JavaScript を使用して範囲を作成し、CSS を使用してスタイルを設定することにより、文書内の任意のテキスト範囲のスタイル設定を行うためのメカニズムを提供します。

## 概念と使い方

ウェブページ上のテキストの範囲にスタイルを設定することは、とても有用です。例えば、テキスト編集ウェブアプリは、綴りや文法の誤りを強調表示したり、コードエディターは構文エラーを強調表示したりします。

CSS カスタムハイライト API は、{{cssxref('::selection')}}、{{cssxref('::spelling-error')}}、{{cssxref('::grammar-error')}}、{{cssxref('::target-text')}} などの他の強調表示擬似要素の概念を拡張し、ブラウザーで定義された範囲に制限されることなく、任意の {{domxref('Range')}} オブジェクトを作成してスタイルを設定する方法を定義します。

CSS カスタムハイライト API を使用すると、ページ内の DOM 構造に影響を与えることなく、テキストの範囲をプログラムで作成し、ハイライトすることができます。

CSS カスタムハイライト API を使用して、ウェブページ上のテキストの範囲にスタイルを設定するには、4 つの段階があります。

1. 範囲 ({{domxref("Range")}}) オブジェクトを作成する。
2. これらの範囲に対してハイライト ({{domxref("Highlight")}}) オブジェクトを作成する。
3. ハイライトを {{domxref("HighlightRegistry")}} で登録する。
4. ハイライトに対して {{cssxref("::highlight", "::highlight()")}} 擬似要素でスタイル設定する。

### 範囲を作成

最初の段階では、JavaScript で {{domxref("Range")}} オブジェクトを作成して、スタイルを設定するテキストの範囲を定義します。例えば、次のようにします。

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);
```

### ハイライトを作成

2 つ目の段階では、テキストの範囲に対してハイライト ({{domxref("Highlight")}}) オブジェクトを作成します。

複数の範囲を 1 つのハイライトに関連付けることができます。複数のテキストを同じ方法でハイライトしたい場合は、単一のハイライトを作成し、対応する範囲で初期化する必要があります。

```js
const highlight = new Highlight(range1, range2);
```

しかし、必要に応じてハイライトをいくつでも作成することができます。例えば、各ユーザーが異なるテキストの色を取得する共同エディターを構築する場合、以下のコードスニペットのように、ユーザーごとに 1 つのハイライトを作成することができます。

```js
const user1Highlight = new Highlight(user1Range1, user1Range2);
const user2Highlight = new Highlight(user2Range1, user2Range2, user2Range3);
```

それぞれのハイライトには、異なるスタイルを設定することができます。

### ハイライトの登録

ハイライトを作成したら、 {{domxref("CSS/highlights_static", "CSS.highlights")}} から利用できる {{domxref("HighlightRegistry")}} を使用してそれらを登録します。

このレジストリーはマップ風 {{jsxref("Map")}} オブジェクトであり、次のようにハイライトを名前で登録することができます。

```js
CSS.highlights.set("user-1-highlight", user1Highlight);
CSS.highlights.set("user-2-highlight", user2Highlight);
```

上記のコードスニペットでは、 `user-1-highlight` および `user-2-highlight` 文字列は、登録されたハイライトにスタイルを適用するために CSS で使用できるカスタム識別子です。

レジストリーには、必要な数のハイライトを登録することができます。また、ハイライトの除去やレジストリー全体をクリアすることも可能です。

```js
// レジストリーから単一のハイライトを除去
CSS.highlights.delete("user-1-highlight");

// レジストリーをクリア
CSS.highlights.clear();
```

### ハイライトをスタイル設定

最後のステップは、登録したハイライトのスタイルを設定することです。これは、 {{cssxref("::highlight", "::highlight()")}} 擬似要素を使用して行います。例えば、前回のステップで登録した `user-1-highlight` ハイライトのスタイルを設定するには、次のようにします。

```css
::highlight(user-1-highlight) {
  background-color: yellow;
  color: black;
}
```

## インターフェイス

- {{domxref("Highlight")}}
  - : このインターフェイスは、文書内でスタイルを設定する範囲の集合を表すために使用されます。
- {{domxref("HighlightRegistry")}}
  - : {{domxref("CSS/highlights_static", "CSS.highlights")}} でアクセスできる {{jsxref("Map")}} 風のオブジェクトで、カスタム識別子でハイライトを登録するために使用されます。

## 例

### 検索結果のハイライト

この例では、CSS カスタムハイライト API を使用して検索結果をハイライトする方法を示します。

#### HTML

以下の HTML コードスニペットは、検索フィールドと、いくつかの段落からなる記事定義しています。

```html
<label>Search within text <input id="query" type="text" /></label>
<article>
  <p>
    Maxime debitis hic, delectus perspiciatis laborum molestiae labore,
    deleniti, quam consequatur iure veniam alias voluptas nisi quo. Dolorem
    eaque alias, quo vel quas repudiandae architecto deserunt quidem, sapiente
    laudantium nulla.
  </p>
  <p>
    Maiores odit molestias, necessitatibus doloremque dolor illum reprehenderit
    provident nostrum laboriosam iste, tempore perferendis! Ab porro neque esse
    voluptas libero necessitatibus fugiat, ex, minus atque deserunt veniam
    molestiae tempora? Vitae.
  </p>
  <p>
    Dolorum facilis voluptate eaque eius similique ducimus dignissimos assumenda
    quos architecto. Doloremque deleniti non exercitationem rerum quam alias
    harum, nisi obcaecati corporis temporibus vero sapiente voluptatum est
    quibusdam id ipsa.
  </p>
</article>
```

#### JavaScript

JavaScript は、検索フィールドの入力イベントを待ち受けするために使用されます。イベントが発生すると、コードは記事テキスト内で入力テキストと一致する部分を見つけます。次に、一致する範囲を作成し、 CSS カスタムハイライト API を使用して、 `search-results` ハイライトオブジェクトを作成して登録します。

```js
const query = document.getElementById("query");
const article = document.querySelector("article");

// 記事内のすべてのテキストノードを探す。これらのテキストノード内で
// 検索を実行
const treeWalker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
const allTextNodes = [];
let currentNode = treeWalker.nextNode();
while (currentNode) {
  allTextNodes.push(currentNode);
  currentNode = treeWalker.nextNode();
}

// 入力イベントを待ち受けして、検索を実行
query.addEventListener("input", () => {
  // CSS カスタムハイライト API に対応していない場合は、メッセージを
  // 表示して処理を中止
  if (!CSS.highlights) {
    article.textContent = "CSS カスタムハイライト API に対応していません。";
    return;
  }

  // HighlightRegistry をクリアして、以前の検索結果をすべて除去
  CSS.highlights.clear();

  // 検索クエリーをクリーンアップし、空の場合は終了
  const str = query.value.trim().toLowerCase();
  if (!str) {
    return;
  }

  // すべてのテキストノードを反復処理し、一致するものを探す
  const ranges = allTextNodes
    .map((el) => {
      return { el, text: el.textContent.toLowerCase() };
    })
    .map(({ text, el }) => {
      const indices = [];
      let startPos = 0;
      while (startPos < text.length) {
        const index = text.indexOf(str, startPos);
        if (index === -1) break;
        indices.push(index);
        startPos = index + str.length;
      }

      // テキストノード内で見つかった str の各インスタンスに
      // 対して、範囲オブジェクトを作成します。
      return indices.map((index) => {
        const range = new Range();
        range.setStart(el, index);
        range.setEnd(el, index + str.length);
        return range;
      });
    });

  // 範囲の Highlight オブジェクトを作成
  const searchResultsHighlight = new Highlight(...ranges.flat());

  // Highlight オブジェクトをレジストリーに登録
  CSS.highlights.set("search-results", searchResultsHighlight);
});
```

#### CSS

最後に、ハイライトのスタイルを設定するために、CSS で擬似要素 `::highlight()` を使用します。

```css
::highlight(search-results) {
  background-color: #f06;
  color: white;
}
```

#### 結果

結果は下記の通りです。検索フィールドにテキストを入力すると、記事内の該当箇所が強調表示されます。

{{ EmbedLiveSample('Highlighting search results', 700, 300) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
- HTML の [`contentEditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性
- CSS {{cssxref("pseudo-elements", "擬似要素", "", "nocode")}}
