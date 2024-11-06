---
title: "Document: getElementById() メソッド"
short-title: getElementById()
slug: Web/API/Document/getElementById
l10n:
  sourceCommit: 8d89e9669f59f208a80c0bdbee48ba75d37a726e
---

{{ ApiRef("DOM") }}

**`getElementById()`** は {{domxref("Document")}} インターフェイスのメソッドで、 {{domxref("Element.id", "id")}} プロパティが指定された文字列に一致する要素を表す {{domxref("Element")}} オブジェクトを返します。要素の ID は指定されていれば固有であることが求められているため、特定の要素にすばやくアクセスするには便利な方法です。

ID を持たない要素にアクセスする必要がある場合は、 {{domxref("Document.querySelector", "querySelector()")}} で何らかの{{Glossary("CSS selector", "セレクター")}}を使用して要素を検索することができます。

> [!NOTE]
> ID は文書内で固有である必要があります。単一の文書内で 2 つ以上の要素が同じ ID であった場合、このメソッドは最初に見つかった要素を返します。

## 構文

```js-nolint
getElementById(id)
```

> [!NOTE]
> メソッド名における `"Id"` の部分は、関数のコードに対して正しくなければなりません。 `getElementByID()` は自然に見えるかもしれませんが、正しくなく動作しません。

### 引数

- `id`
  - : 探す要素の ID です。 ID は大文字と小文字の区別がある文字列で、文書内で固有です。指定された ID の要素は一つしかありません。

### 返値

指定された ID に一致する DOM 要素オブジェクトを記述した {{domxref("Element")}} オブジェクト、または文書内に一致する要素がなければ `null` です。

## 例

### HTML

```html
<html lang="en">
  <head>
    <title>getElementById の例</title>
  </head>
  <body>
    <p id="para">いくらかのテキスト</p>
    <button onclick="changeColor('blue');">青</button>
    <button onclick="changeColor('red');">赤</button>
  </body>
</html>
```

### JavaScript

```js
function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### 結果

{{ EmbedLiveSample('Examples', 250, 120) }}

## 使用上のメモ

{{domxref("Document.querySelector()")}} や {{domxref("Document.querySelectorAll()")}} などの他の要素検索メソッドとは異なり、`getElementById()` はグローバルの `document` オブジェクトに対してのみ利用可能であり、 DOM のすべての要素オブジェクトのメソッドとしては利用*できません*。ID の値は文書全体を通して固有でなければならないため、機能の「ローカル」バージョンは必要ないのです。

### 例

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div id="parent-id">
      <p>hello word1</p>
      <p id="test1">hello word2</p>
      <p>hello word3</p>
      <p>hello word4</p>
    </div>
    <script>
      const parentDOM = document.getElementById("parent-id");
      const test1 = parentDOM.getElementById("test1");
      // エラーが発生
      // Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
  </body>
</html>
```

もし指定された `id` を持つ要素がなければ、この関数は `null` を返します。なお、 `id` 引数は大文字小文字の区別があるため、 `document.getElementById("Main")` は `<div id="main">` 要素ではなく `null` を返します。これは "M" と "m" がこのメソッドの目的では区別されるためです。

文書内にない要素は `getElementById()` で検索されません。要素を作成し ID を割り当てたとき、 `getElementById()` でアクセスする前に {{domxref("Node.insertBefore()")}} またはそのたぐいのメソッドで、要素を文書ツリーに挿入しておく必要があります。

```js
const element = document.createElement("div");
element.id = "testqq";
const el = document.getElementById("testqq"); // el は null になります
```

HTML 以外の文書の場合。 DOM の実装では、どの属性が ID 類であるかを示す情報が必要です。 "id" という名前の属性は、文書の DTD で定義されていない限り ID 類とみなされません。 `id` 属性は [XHTML](/ja/docs/Glossary/XHTML), XUL などの一般的な場合には ID 型として定義されています。属性が ID 類であるかどうかが分からない実装では、 `null` を返すでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document")}}: 文書内で要素への参照を取得するために使うことができる他のメソッドやプロパティで使用するための参照。
- {{domxref("Document.querySelector()")}}: `'div.myclass'` のようなセレクターを通したクエリーのためのもの。
- {{domxref("Document.evaluate()")}} `xml:id` によって {{glossary("XML")}} 文書内を選択するユーティリティーメソッド
