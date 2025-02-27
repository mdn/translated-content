---
title: "Document: getElementsByTagName() メソッド"
short-title: getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{APIRef("DOM")}}

**`getElementsByTagName`** は {{domxref("Document")}} インターフェイスのメソッドで、指定されたタグ名を持つ要素の {{domxref("HTMLCollection")}} を返します。

ルートノードを含めた文書全体が検索されます。返された `HTMLCollection` は生きたものであり、つまり `document.getElementsByTagName()` を再度呼び出さなくても DOM ツリーと同期を取り続けるよう、自動的に自分自身を更新します。

## 構文

```js-nolint
getElementsByTagName(name)
```

### 引数

- `name`
  - : 要素の名前を表す文字列。特別な文字列 `*` はすべての要素を表します。

### 返値

生きた {{domxref("HTMLCollection")}} であり、見つかった要素がツリーに出現する順に並んでいます。

> **メモ:** [最新の W3C 仕様書](https://dom.spec.whatwg.org/#interface-document) では返値は `HTMLCollection` です。しかし、 WebKit ブラウザーではこのメソッドは {{domxref("NodeList")}} を返します。詳しくは [Firefox バグ 14869](https://bugzil.la/14869) を見てください。

## 例

以下の例では、 `getElementsByTagName()` は特定の親要素から開始し、その親要素から DOM を上から下へ再帰的に検索し、タグが `name` 引数と一致する子要素を探します。これは `document.getElementsByTagName()`、および機能的に同等な {{domxref("Element.getElementsByTagName()")}} は、 DOM ツリー内の特定の要素から検索を始めることを示します。

ボタンをクリックすると `getElementsByTagName()` を使用して、特定の親 (文書自体または 2 つの {{HTMLElement("div")}} 要素の何れかに囲まれたもの) の子孫の段落要素を数えます。

```html-nolint
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>getElementsByTagName の例</title>
    <script>
      function getAllParaElems() {
        const allParas = document.getElementsByTagName("p");
        const num = allParas.length;
        alert(`この文書には ${num} 個の段落があります`);
      }

      function div1ParaElems() {
        const div1 = document.getElementById("div1");
        const div1Paras = div1.getElementsByTagName("p");
        const num = div1Paras.length;
        alert(`#div1 には ${num} 個の段落があります`);
      }

      function div2ParaElems() {
        const div2 = document.getElementById("div2");
        const div2Paras = div2.getElementsByTagName("p");
        const num = div2Paras.length;
        alert(`#div2 には${num} 個の段落があります`);
      }
    </script>
  </head>
  <body style="border: solid green 3px">
    <p>外部のテキスト</p>
    <p>外部のテキスト</p>

    <div id="div1" style="border: solid blue 3px">
      <p>div1 のテキスト</p>
      <p>div1 のテキスト</p>
      <p>div1 のテキスト</p>

      <div id="div2" style="border: solid red 3px">
        <p>div2 のテキスト</p>
        <p>div2 のテキスト</p>
      </div>
    </div>

    <p>外部のテキスト</p>
    <p>外部のテキスト</p>

    <button onclick="getAllParaElems();">
      文書内のすべての p 要素を表示
    </button>
    <br />

    <button onclick="div1ParaElems();">
      div1 要素内のすべての p 要素を表示
    </button>
    <br />

    <button onclick="div2ParaElems();">
      div2 要素内のすべての p 要素を表示
    </button>
  </body>
</html>
```

## メモ

HTML 文書上で呼び出された場合、 `getElementsByTagName()` は処理前に引数を小文字に変換します。これは HTML 文書内のサブツリーにある{{Glossary("camel_case", "キャメルケース")}}の SVG 要素に一致させようとする場合には望ましくありません。
この場合は {{Domxref("document.getElementsByTagNameNS()")}} が便利です。 [Firefox バグ 499656](https://bugzil.la/499656) を参照してください。

`document.getElementsByTagName()` は、検索が文書全体を含むという点以外は {{domxref("Element.getElementsByTagName()")}} と類似しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.getElementsByTagName()")}}
- {{domxref("document.getElementById()")}} : `id` によって検索した要素への参照を返す
- {{domxref("document.getElementsByName()")}} : `name` によって検索した要素への参照を返す
- {{domxref("document.querySelector()")}} : `'div.myclass'` のような CSS セレクターによって要素への参照を返す
