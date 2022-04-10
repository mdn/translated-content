---
title: JavaScript と DOM インターフェイスによる HTML の表の操作
slug: >-
  Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
tags:
  - API
  - DOM
  - ガイド
  - HTML
  - JavaScript
translation_of: >-
  Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
---
{{DefaultAPISidebar("DOM")}}

## はじめに

この記事では、強力で基本的な DOM レベル 1 のメソッドと、それを JavaScript からどのように使用するかを概観します。どのようにして HTML 要素を動的に生成、アクセス、制御、削除するかを学ぶことができます。ここで紹介する DOM メソッドは HTML に限ったものではなく、XML に対しても用いることができます。ここで用意しているデモは、Firefox のすべてのバージョンや IE 5 以上を含むすべての最近のブラウザーで正常に動作します。

> **Note:** ここで紹介する DOM メソッドは ドキュメントオブジェクトモデル (コア) レベル 1 仕様の一部に過ぎません。DOM レベル 1 には HTML ドキュメント特有のメソッド (DOM 1 HTML) と共に、一般的なドキュメントアクセスと操作 (DOM 1 コア) のためのメソッドが含まれています。

## 例: 動的な HTML の表の生成

### HTML

```html
<input type="button" value="Generate a table." onclick="generate_table()">
```

### JavaScript

```js
function generate_table() {
  // body の参照を取得
  var body = document.getElementsByTagName("body")[0];

  // <table> 要素と <tbody> 要素を作成
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // すべてのセルを作成
  for (var i = 0; i < 2; i++) {
    // 表の行を作成
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // <td> 要素とテキストノードを作成し、テキストノードを
      // <td> の内容として、その <td> を表の行の末尾に追加
      var cell = document.createElement("td");
      var cellText = document.createTextNode(i+" 行目、 "+j+" 列目のセル");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // 表の本体の末尾に行を追加
    tblBody.appendChild(row);
  }

  // <tbody> を <table> の中に追加
  tbl.appendChild(tblBody);
  // <table> を <body> の中に追加
  body.appendChild(tbl);
  // tbl の border 属性を 2 に設定
  tbl.setAttribute("border", "2");
}
```

{{ EmbedLiveSample('Example_Creating_an_HTML_table_dynamically') }}

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
    body.appendChild(tbl);
    ```

この手法を覚えておきましょう。W3C DOM によるプログラミングでは頻繁に使うことになります。まず、トップダウンで要素を作成し、子を親へとボトムアップで追加していくのです。

JavaScript コードによって生成される HTML マークアップはこのようになります。

```html
...
<table border="2">
<tbody>
<tr><td>0 行目、 0 列目のセル</td><td>0 行目、 1 列目のセル</td></tr>
<tr><td>1 行目、 0 列目のセル</td><td>1 行目、 1 列目のセル</td></tr>
</tbody>
</table>
...
```

このコードによって生成される `<table>` 要素とその子要素を示す DOM オブジェクトツリーはこのようになります。

![](sample1-tabledom.jpg)

ほんの幾つかの DOM メソッドを使用するだけでこのように表と内部の子要素を構築できます。生成しようと計画している構造のツリーモデルを頭に置いておくことを忘れないようにしてください。そうすれば必要なコードを書くのは簡単です。図 1 の `<table>` ツリーでは `<table>` 要素は `<tbody>` 要素という子を 1 つ持ちます。`<tbody>` は 2 つ子を持ちます。各 `<tbody>` の子 (`<tr>`) は子を 1 つ (`<td>`) 持ちます。最後に各 `<td>` はテキストノードという子を 1 つ持ちます。

## 例: 段落の背景色の設定

`getElementsByTagName(tagNameValue)` は DOM の {{domxref("Element")}} および ルートの {{domxref("Document")}} 要素で利用することができます。呼び出すと、その要素の配下でタグ名が一致するすべての要素の配列を返します。リスト中の先頭の要素は、配列内の `[0]` の位置にあります。

### HTML

```html
<body>
  <input type="button" value="Set paragraph background color" onclick="set_background()">
  <p>hi</p>
  <p>hello</p>
</body>
```

### JavaScript

```js
function set_background() {
  // body 要素すべてのリストを取得します (あるのは 1 つだけですが)
  // それからその要素の 0 番目 (最初) の要素を選択します
  myBody = document.getElementsByTagName("body")[0];

  // 今度は body の子供である p 要素をすべて取得します
  myBodyElements = myBody.getElementsByTagName("p");

  // p 要素のリストから 2 番目の項目を取得します
  myP = myBodyElements[1];
  myP.style.background = "rgb(255,0,0)";
}
```

{{ EmbedLiveSample('Example_Setting_the_background_color_of_a_paragraph') }}

この例では、`myP` 変数を body 中の 2 つ目の `p` 要素を表す DOM オブジェクトに設定しています。

1. まず、すべての body 要素リストをこのようにして取得します。

    ```js
    myBody = document.getElementsByTagName("body")[0]
    ```

    有効な HTML 文書では body 要素は 1 つしかないため、このリストは 1 項目だけを持ちます。そのリストの最初の要素を `[0]` を使って選択することで取得します。

2. 次に、 `body` の子であるすべての `p` 要素をこのようにして取得します。

    ```js
    myBodyElements = myBody.getElementsByTagName("p");
    ```

3. そして `p` 要素のリストから 2 つ目の項目をこのようにして取得します。

    ```js
    myP = myBodyElements[1];
    ```

![](sample2a2.jpg)

一旦 HTML 要素に対応する DOM オブジェクトを取得すれば、そのプロパティを設定することできます。例えば、背景色のスタイルプロパティを設定したいのであればこのように加えるだけです。

```js
myP.style.background = "rgb(255,0,0)";
// インラインの STYLE 属性を設定
```

### document.createTextNode("..") によるテキストノードの生成

document オブジェクトを使用して `createTextNode` メソッドを呼び出し、テキストノードを生成します。テキスト内容を渡す必要があるだけです。返値はそのテキストノードを表すオブジェクトとなります。

```js
myTextNode = document.createTextNode("world");
```

これはそのテキストデータが `"world"` である `TEXT_NODE` 型 (テキスト断片) のノードを生成し、myTextNode がこのノードオブジェクトへの参照だということです。このテキストを HTML ページに挿入するには、このテキストノードを何か他のノード要素の子にする必要があります。

### appendChild(..) による要素の挿入

そこで `myP.appendChild(node_element)` を使って、その要素を 2 つ目の `<p>` 要素の子とします。

```js
myP.appendChild(myTextNode);
```

例を見て頂いたところで、単語 hello と world が一緒になっていることに注目して下さい: helloworld。ご覧のように外見的には、HTML ページを見ると 2 つのテキスト hello と world は単一ノードのように見えますが、ドキュメントモデルでは 2つのノードがあるのです。2 つ目のノードは `TEXT_NODE` 型の新しいノードで、2つ目の `&lt;p&gt;` タグの 2つ目の子供です。以下の図は文書ツリー中につい先程生成された Text Node オブジェクトを表しています。

![](sample2b2.jpg)

> **Note:** `createTextNode()` と `appendChild` は、hello と world という単語の間にホワイトスペースを入れる簡単な方法です。もう 1 つの重要な注意点は、hello の後に world という単語が追加されたように、`appendChild` メソッドは最後の子の後に子を追加するということです。ですから、hello と world の間にテキストノードを追加したい場合は、 `insertBefore` を `appendChild` の代わりに使用する必要があります。

### 文書オブジェクトと createElement(..) メソッドによる新しい要素の生成

`createElement` を使って、新しい HTML 要素やその他の任意の要素を作成することができます。例えば、 `<body>` 要素の子として新しい `<p>` 要素を作成したい場合は、先ほどの例の `myBody` を使用して、新しい要素ノードを追加します。ノードを作成するには、単に `document.createElement("タグ名")` を呼び出すだけです。例えば、以下のようになります。

```js
myNewPTAGnode = document.createElement("p");
myBody.appendChild(myNewPTAGnode);
```

![](sample2c.jpg)

### removeChild(..) メソッドによるノードの削除

ノードを削除することができます。以下のコードは、テキストノード `myTextNode` ("world" という単語を含む) を 2 番目の `<p>` 要素である `myP` から削除します。

```js
myP.removeChild(myTextNode);
```

テキストノード `myTextNode` ("world" という単語を含む) はまだ存在しています。以下のコードは、`myTextNode` を最近作成された `&lt;p&gt;` 要素である `myNewPTAGnode` に割り当てています。

```js
myNewPTAGnode.appendChild(myTextNode);
```

最終的に変更されたオブジェクトツリーはこのような状態なります。

![](sample2d.jpg)

## 表の動的生成 (Sample1.html に戻って)

この文書ではこれ以降再び sample1.html を扱っていきます。以下の図はこの例で生成される table オブジェクトツリー構造を表しています。

### HTML 表構造の再確認

![](sample1-tabledom.jpg)

### 要素ノードの生成とその文書ツリーへの挿入

sample1.html における基本的な表の生成の手順は次の通りです。

- body オブジェクトを取得する (document オブジェクトの最初の項目)。
- すべての要素を生成する。
- 最後に、各子要素を (上の図のように) 表構造に従って付加していきます。以下のソースコードは sample1.html のコメント付き版になります。

> **Note:** `start` 関数の最後には新たなコードがあります。DOM のメソッド `setAttribute()` を用いて表のの `border` プロパティが設定されており、`setAttribute()` は属性名と属性値という 2 つの引数を取ります。`setAttribute` メソッドを用いて任意の要素の任意の属性を設定することができます。

```html
<head>
<title>サンプルコード - 基本的 DOM インターフェイスによる HTML 要素の動的操作法</title>
<script>
    function start() {
        // body への参照を取得します
        var mybody = document.getElementsByTagName("body")[0];

        // <table> と <tbody> 要素を生成します
        mytable = document.createElement("table");
        mytablebody = document.createElement("tbody");

        // すべてのセルを生成します
        for(var j = 0; j < 3; j++) {
            // <tr> 要素を生成します
            mycurrent_row = document.createElement("tr");

            for(var i = 0; i < 4; i++) {
                // <td> 要素を生成します
                mycurrent_cell = document.createElement("td");
                // テキストノードを生成します
                currenttext = document.createTextNode("cell is row " + j + ", column " + i);
                // 生成したテキストノードを <td> セルへと付加します
                mycurrent_cell.appendChild(currenttext);
                // その <td> セルを <tr> 行へと付加します
                mycurrent_row.appendChild(mycurrent_cell);
            }
            // その <tr> 行を <tbody> へと付加します
            mytablebody.appendChild(mycurrent_row);
        }

        // <tbody> を <table> へと付加します
        mytable.appendChild(mytablebody);
        // <table> を <body> へと付加します
        mybody.appendChild(mytable);
        // mytable の border 属性を 2 に設定します
        mytable.setAttribute("border","2");
    }
</script>
</head>
<body onload="start()">
</body>
</html>
```

## DOM と CSS による表の操作

### 表からのテキスト取得

この例では、2 つの新しい DOM 属性を導入しています。まず、`childNodes` 属性を使用して mycel の子ノードのリストを取得します。`childNodes` リストには、名前やタイプに関係なく、すべての子ノードが含まれます。`getElementsByTagName()` と同様に、ノードのリストを返します。

違いは、(a) `getElementsByTagName()` が指定したタグ名の要素のみを返すことと、(b) `getElementsByTagName()` が直系の子だけでなく、任意のレベルの子孫を返すことです。

返されたリストを手に入れたら、`[x]` メソッドを使って目的の子項目を取得します。この例では、表の 2 行目の 2 番目のセルのテキストノードを myceltext に格納しています。

そして、この例では結果を表示するために、内容が `myceltext` のデータである新しいテキストノードを作成し、`<body>` 要素の子として追加します。

> **Note:** オブジェクトがテキストノードである場合、data 属性を使用して当該ノードのテキスト内容を得ることができます。

```js
mybody = document.getElementsByTagName("body")[0];
mytable = mybody.getElementsByTagName("table")[0];
mytablebody = mytable.getElementsByTagName("tbody")[0];
myrow = mytablebody.getElementsByTagName("tr")[1];
mycel = myrow.getElementsByTagName("td")[1];

// first item element of the childNodes list of mycel
myceltext=mycel.childNodes[0];

// currenttext の中身は myceltext の data 内容
currenttext=document.createTextNode(myceltext.data);
mybody.appendChild(currenttext);
```

### 属性値の取得

sample1 の最後で `setAttribute` が `mytable` オブジェクトに対して呼び出されています。この呼び出しは table の border プロパティを設定するのに使用されています。属性をの値取得するには、属性オブジェクトを返す `getAttribute` メソッドを使用してください。

```js
mytable.getAttribute("border");
```

### スタイルプロパティ変更による列の非表示化

JavaScript 変数にオブジェクトを納めさえすれば、スタイルプロパティを直接設定できます。以下のコードは 2 列目の各セル非表示とされ 1 行目の各セルが赤い背景色を持つように変更された sample1.html です。style プロパティが直接設定されていることに注意して下さい。

```html
<html>
<body onload="start()">
</body>
<script>
    function start() {
       var mybody = document.getElementsByTagName("body")[0];
       mytable = document.createElement("table");
       mytablebody = document.createElement("tbody");

       for(var row = 0; row < 2; row++) {
           mycurrent_row=document.createElement("tr");
           for(var col = 0; col < 2; col++) {
               mycurrent_cell = document.createElement("td");
               currenttext = document.createTextNode("cell is: " + row + col);
               mycurrent_cell.appendChild(currenttext);
               mycurrent_row.appendChild(mycurrent_cell);
               // 0 列目であればセルの背景色を設定し、
               // 1 列目であればセルを非表示とする
               if (col === 0) {
                   mycurrent_cell.style.background = "rgb(255,0,0)";
               } else {
                   mycurrent_cell.style.display = "none";
               }
           }
           mytablebody.appendChild(mycurrent_row);
       }
       mytable.appendChild(mytablebody);
       mybody.appendChild(mytable);
    }
</script>
</html>
```

#### 出典情報

- 著者
  - : Marcio Galli
- 引用元
  - : https\://web.archive.org/web/20000815054125/https\://mozilla.org/docs/dom/technote/tn-dom-table/
