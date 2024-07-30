---
title: JavaScript と DOM インターフェイスによる HTML の表の操作
slug: Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("DOM")}}

この記事では、強力で基本的な DOM レベル 1 のメソッドと、それを JavaScript からどのように使用するかを概観します。どのようにして HTML 要素を動的に生成、アクセス、制御、削除するかを学ぶことができます。ここで紹介する DOM メソッドは HTML に限ったものではなく、XML に対しても用いることができます。ここで用意しているデモは、すべての最近のブラウザーで正常に動作します。

> [!NOTE]
> ここで紹介する DOM メソッドは ドキュメントオブジェクトモデル（コア）レベル 1 仕様の一部に過ぎません。DOM レベル 1 には HTML ドキュメント特有のメソッド (DOM 1 HTML) と共に、一般的なドキュメントアクセスと操作（DOM 1 コア）のためのメソッドが含まれています。

## 動的な HTML の表の生成

### 例

この例では、ボタンがクリックされたときに新しい表をページに追加しています。

#### HTML

```html
<input type="button" value="Generate a table" onclick="generateTable()" />
```

#### JavaScript

```js
function generateTable() {
  // <table> 要素と <tbody> 要素を作成
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // すべてのセルを作成
  for (let i = 0; i < 2; i++) {
    // 表の行を作成
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // <td> 要素とテキストノードを作成し、テキストノードを
      // <td> の内容として、その <td> を表の行の末尾に追加
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`${i} 行目、${j} 列目のセル`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // 表の本体の末尾に行を追加
    tblBody.appendChild(row);
  }

  // <tbody> を <table> の中に追加
  tbl.appendChild(tblBody);
  // <table> を <body> の中に追加
  document.body.appendChild(tbl);
  // tbl の border 属性を 2 に設定
  tbl.setAttribute("border", "2");
}
```

```css hidden
table {
  margin: 1rem auto;
}

td {
  padding: 0.5rem;
}
```

#### 結果

{{ EmbedLiveSample('Example') }}

### 解説

要素とテキストノードを生成する順序を意識しながら確認していってください。

1. まず、`<table>` 要素を生成しました。
2. 次に `<tbody>` 要素生成し、これが `<table>` 要素の子となります。
3. 次に、ループを用いて `<tr>` 要素を生成し、これらが `<tbody>` 要素の子となります。
4. それぞれの `<tr>` 要素に対して、ループを用いて `<td>` 要素を生成し、これらが `<tr>` の子となります。
5. それから、それぞれの `<td>` 要素に対して、表のセルのテキストノードとテキストを生成しました。

`<table>`, `<tbody>`, `<tr>`, `<td>` の各要素とテキストノードを生成したら、逆の順序でそれぞれのオブジェクトを親へ追加していきます。

1. まず、各テキストノードをその親である `<td>` 要素へ追加します。

   ```js
   cell.appendChild(cellText);
   ```

2. 次に、各 `<td>` 要素をその親である `<tr>` 要素へと追加します。

   ```js
   row.appendChild(cell);
   ```

3. 次に、各 `<tr>` 要素をその親である `<tbody>` 要素へと追加します。

   ```js
   tblBody.appendChild(row);
   ```

4. 次に、`<tbody>` 要素をその親である `<table>` 要素へと追加します。

   ```js
   tbl.appendChild(tblBody);
   ```

5. 次に、`<table>` 要素をその親である `<body>` 要素へと追加します。

   ```js
   document.body.appendChild(tbl);
   ```

この手法を覚えておきましょう。W3C DOM によるプログラミングでは頻繁に使うことになります。まず、トップダウンで要素を作成し、子を親へとボトムアップで追加していくのです。

JavaScript コードによって生成される HTML マークアップはこのようになります。

```html
<table border="2">
  <tbody>
    <tr>
      <td>0 行目、 0 列目のセル</td>
      <td>0 行目、 1 列目のセル</td>
    </tr>
    <tr>
      <td>1 行目、 0 列目のセル</td>
      <td>1 行目、 1 列目のセル</td>
    </tr>
  </tbody>
</table>
```

このコードによって生成される `<table>` 要素とその子要素を示す DOM オブジェクトツリーはこのようになります。

![メイン要素とその子要素からDOMオブジェクトツリーが生成される仕組み](sample1-tabledom.jpg)

ほんの幾つかの DOM メソッドを使用するだけで、このように表と内部の子要素を構築できます。生成しようと計画している構造のツリーモデルを頭に置いておくことを忘れないようにしてください。そうすれば必要なコードを書くのは簡単です。図 1 の `<table>` ツリーでは `<table>` 要素は `<tbody>` 要素という子を 1 つ持ちます。`<tbody>` は 2 つ子を持ちます。各 `<tbody>` の子 (`<tr>`) は子を 1 つ (`<td>`) 持ちます。最後に各 `<td>` はテキストノードという子を 1 つ持ちます。

## 段落の背景色の設定

### 例

この例では、ボタンがクリックされたときに段落の背景色を変更しています。

#### HTML

```html
<body>
  <input type="button" value="段落の背景色を設定" onclick="setBackground()" />
  <p>hi</p>
  <p>hello</p>
</body>
```

#### JavaScript

```js
function setBackground() {
  // 文書中の p 要素をすべて取得する
  const paragraphs = document.getElementsByTagName("p");

  // p 要素のリストから 2 番目の項目を取得する
  const secondParagraph = paragraphs[1];

  // インラインスタイルを設定
  secondParagraph.style.background = "red";
}
```

#### 結果

{{ EmbedLiveSample('Example_2') }}

### 解説

`getElementsByTagName(tagNameValue)` は任意の DOM {{domxref("Element")}} またはルート {{domxref("Document")}} 要素で利用できるメソッドです。呼び出されると、タグ名に照合する要素の子孫をすべて配列で返します。リストの最初の要素は配列の位置 `[0]` に配置されます。

以下の手順で処理をします。

1. まず、この文書のすべての `p` 要素を取得します。

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. それから、 `p` 要素のリストから 2 番目の段落を取得します。

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![段落要素は、 DOM ツリー内の既存の段落の新しい兄弟として追加されます。](sample2a2.jpg)

3. 最後に、{{domxref("HTMLParagraphElement", "paragraph")}} オブジェクトの {{domxref("HTMLElement.style", "style")}} プロパティを使用して、背景色を赤に設定します。

   ```js
   secondParagraph.style.background = "red";
   ```

### document.createTextNode("..") によるテキストノードの生成

document オブジェクトを使用して `createTextNode` メソッドを呼び出し、テキストノードを生成します。テキストコンテンツを渡す必要があるだけです。返値は、そのテキストノードを表すオブジェクトとなります。

```js
myTextNode = document.createTextNode("world");
```

これはそのテキストデータが `"world"` である `TEXT_NODE` 型 (テキスト断片) のノードを生成し、`myTextNode` がこのノードオブジェクトへの参照だということです。このテキストを HTML ページに挿入するには、このテキストノードを何か他のノード要素の子にする必要があります。

### appendChild(..) による要素の挿入

そこで `myP.appendChild(node_element)` を使って、その要素を 2 つ目の `<p>` 要素の子とします。

```js
secondParagraph.appendChild(myTextNode);
```

例を見て頂いたところで、単語 hello と world が一緒になっていることに注目して下さい: helloworld。ご覧のように外見的には、HTML ページを見ると 2 つのテキスト hello と world は単一ノードのように見えますが、ドキュメントモデルでは 2つのノードがあるのです。2 つ目のノードは `TEXT_NODE` 型の新しいノードで、2つ目の `<p>` タグの 2つ目の子供です。以下の図は文書ツリー中につい先程生成された Text Node オブジェクトを表しています。

![段落要素内のテキストノードを DOM ツリー内の個々の兄弟として。](sample2b2.jpg)

> **メモ:** `createTextNode()` と `appendChild` は、hello と world という単語の間にホワイトスペースを入れる簡単な方法です。もう 1 つの重要な注意点は、hello の後に world という単語が追加されたように、`appendChild` メソッドは最後の子の後に子を追加するということです。ですから、hello と world の間にテキストノードを追加したい場合は、 `insertBefore` を `appendChild` の代わりに使用する必要があります。

### 文書オブジェクトと createElement(..) メソッドによる新しい要素の生成

`createElement` を使って、新しい HTML 要素やその他の任意の要素を作成することができます。例えば、 `<body>` 要素の子として新しい `<p>` 要素を作成したい場合は、先ほどの例の `myBody` を使用して、新しい要素ノードを追加します。ノードを作成するには、単に `document.createElement("タグ名")` を呼び出すだけです。例えば、以下のようになります。

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![新しいノード要素が文書ツリー内のテキストノードオブジェクトに追加される方法](sample2c.jpg)

### removeChild(..) メソッドによるノードの削除

ノードを削除することができます。以下のコードは、テキストノード `myTextNode` ("world" という単語を含む) を 2 番目の `<p>` 要素である `myP` から削除します。

```js
secondParagraph.removeChild(myTextNode);
```

テキストノード `myTextNode` （"world" という単語を含む）はまだ存在しています。以下のコードは、`myTextNode` を最近作成された `<p>` 要素である `myNewPTagNode` に割り当てています。

```js
myNewPTagNode.appendChild(myTextNode);
```

最終的に変更されたオブジェクトツリーはこのような状態なります。

![新しいノード要素を作成し、オブジェクトツリーのテキスト構造に追加します。](sample2d.jpg)

## 表の動的生成 (Sample1.html に戻って)

この文書ではこれ以降再び sample1.html を扱っていきます。以下の図はこの例で生成される table オブジェクトツリー構造を表しています。

### HTML 表構造の再確認

![新しいノード要素を追加した後の HTML 表オブジェクトのツリー構造](sample1-tabledom.jpg)

### 要素ノードの生成とその文書ツリーへの挿入

sample1.html における基本的な表の生成の手順は次の通りです。

- body オブジェクトを取得します（document オブジェクトの最初の項目）。
- すべての要素を生成します。
- 最後に、各子要素を（上の図のように）表構造に従って付加していきます。以下のソースコードは sample1.html のコメント付き版になります。

> **メモ:** `start` 関数の最後には新たなコードがあります。 DOM のメソッド `setAttribute()` を用いて表のの `border` プロパティが設定されており、`setAttribute()` は属性名と属性値という 2 つの引数を取ります。`setAttribute()` メソッドを用いて任意の要素の任意の属性を設定することができます。

```html
<html lang="ja">
  <head>
    <title>
      サンプルコード - 基本的 DOM インターフェイスによる HTML 要素の動的操作法
    </title>
    <script>
      function start() {
        // body への参照を取得します
        const myBody = document.getElementsByTagName("body")[0];

        // <table> と <tbody> 要素を生成します
        const myTable = document.createElement("table");
        const myTableBody = document.createElement("tbody");

        // すべてのセルを生成します
        for (let j = 0; j < 3; j++) {
          // <tr> 要素を生成します
          const myCurrentRow = document.createElement("tr");

          for (let i = 0; i < 4; i++) {
            // <td> 要素を生成します
            const myCurrentCell = document.createElement("td");
            // テキストノードを生成します
            const currentText = document.createTextNode(
              `cell is row ${j}, column ${i}`,
            );
            // 生成したテキストノードを <td> セルへと付加します
            myCurrentCell.appendChild(currentText);
            // その <td> セルを <tr> 行へと付加します
            myCurrentRow.appendChild(myCurrentCell);
          }
          // その <tr> 行を <tbody> へと付加します
          myTableBody.appendChild(myCurrentRow);
        }

        // <tbody> を <table> へと付加します
        myTable.appendChild(myTableBody);
        // <table> を <body> へと付加します
        myBody.appendChild(myTable);
        // mytable の border 属性を 2 に設定します
        myTable.setAttribute("border", "2");
      }
    </script>
  </head>
  <body onload="start()"></body>
</html>
```

## DOM と CSS による表の操作

### 表からのテキスト取得

この例では、2 つの新しい DOM 属性を導入しています。まず、`childNodes` 属性を使用して mycel の子ノードのリストを取得します。`childNodes` リストには、名前やタイプに関係なく、すべての子ノードが含まれます。`getElementsByTagName()` と同様に、ノードのリストを返します。

違いは、(a) `getElementsByTagName()` が指定したタグ名の要素のみを返すことと、(b) `getElementsByTagName()` が直系の子だけでなく、任意のレベルの子孫を返すことです。

返されたリストを手に入れたら、`[x]` メソッドを使って目的の子項目を取得します。この例では、表の 2 行目の 2 番目のセルのテキストノードを myceltext に格納しています。

そして、この例では結果を表示するために、内容が `myceltext` のデータである新しいテキストノードを作成し、`<body>` 要素の子として追加します。

> [!NOTE]
> オブジェクトがテキストノードである場合、data 属性を使用して当該ノードのテキスト内容を得ることができます。

```js
myBody = document.getElementsByTagName("body")[0];
myTable = myBody.getElementsByTagName("table")[0];
myTableBody = myTable.getElementsByTagName("tbody")[0];
myRow = myTableBody.getElementsByTagName("tr")[1];
myCell = myRow.getElementsByTagName("td")[1];

// myCell の childNodes リストの最初の項目要素
myCellText = myCell.childNodes[0];

// currentText のコンテンツは myCellText の data の内容
currentText = document.createTextNode(myCellText.data);
myBody.appendChild(currentText);
```

### 属性値の取得

sample1 の最後で `setAttribute` が `mytable` オブジェクトに対して呼び出されています。この呼び出しは table の border プロパティを設定するのに使用されています。属性をの値取得するには、属性オブジェクトを返す `getAttribute` メソッドを使用してください。

```js
myTable.getAttribute("border");
```

### スタイルプロパティ変更による列の非表示化

JavaScript 変数にオブジェクトを納めさえすれば、スタイルプロパティを直接設定できます。以下のコードは 2 列目の各セル非表示とされ 1 行目の各セルが赤い背景色を持つように変更された sample1.html です。style プロパティが直接設定されていることに注意して下さい。

```html
<html lang="en">
  <body onload="start()"></body>
  <script>
    function start() {
      const myBody = document.getElementsByTagName("body")[0];
      const myTable = document.createElement("table");
      const myTableBody = document.createElement("tbody");

      for (let row = 0; row < 2; row++) {
        const myCurrentRow = document.createElement("tr");
        for (let col = 0; col < 2; col++) {
          const myCurrentCell = document.createElement("td");
          const currentText = document.createTextNode(`cell is: ${row}${col}`);
          myCurrentCell.appendChild(currentText);
          myCurrentRow.appendChild(myCurrentCell);
          // 0 列目であればセルの背景色を設定し、
          // 1 列目であればセルを非表示とする
          if (col === 0) {
            myCurrentCell.style.background = "rgb(255, 0, 0)";
          } else {
            myCurrentCell.style.display = "none";
          }
        }
        myTableBody.appendChild(myCurrentRow);
      }
      myTable.appendChild(myTableBody);
      myBody.appendChild(myTable);
    }
  </script>
</html>
```
