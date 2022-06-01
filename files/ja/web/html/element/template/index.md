---
title: '<template>: コンテンツテンプレート要素'
slug: Web/HTML/Element/template
tags:
  - Element
  - HTML
  - HTML ウェブコンポーネント
  - HTML:フローコンテンツ
  - HTML:メタデータコンテンツ
  - HTML:記述コンテンツ
  - HTML:スクリプト対応要素
  - リファレンス
  - Template
  - ウェブ
  - ウェブコンポーネント
browser-compat: html.elements.template
translation_of: Web/HTML/Element/template
---

{{HTMLRef}}

**`<template>`** は [HTML](/ja/docs/Web/HTML) の要素で、ページが読み込まれたときにすぐにレンダリングされるのではなく、実行時に JavaScript を使って後からインスタンス化することができる {{Glossary("HTML")}} を保持するためのメカニズムです。

テンプレートは、文書内に格納されたコンテンツの断片として考えてください。ページの読み込み時にパーサーが **`<template>`** 要素の内容を処理している間、その内容の有効性のみが検証されます。しかし、要素の内容は描画されません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#metadata_content">メタデータコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#flow_content">フローコンテンツ</a>,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#script-supporting_elements">スクリプト対応要素</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>制限なし</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#metadata_content">メタデータコンテンツ</a>,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#script-supporting_elements">スクリプト対応要素</a>
        を受け付けるすべての要素。また、 {{htmlattrxref("span", "colgroup")}} 属性を持たない {{HTMLElement("colgroup")}} 要素の子になることもできます。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には、[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

ただし、 {{domxref("HTMLTemplateElement")}} の {{domxref("HTMLTemplateElement.content", "content")}} プロパティは、読み取り専用の {{domxref("DocumentFragment")}} で、テンプレートが表現する DOM サブツリーを保持しています。なお、 {{domxref("HTMLTemplateElement.content", "content")}} の値を直接使用すると予想外の動作につながる可能性があります。下記の [DocumentFragment の落とし穴の回避](#documentfragment_の落とし穴の回避)の節を参照してください。

## 例

まず、HTML 部分の例から始めましょう。

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existing data could optionally be included here -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

まず、JavaScript コードを使用して後からコンテンツを挿入するための表を作ります。次に、1 行分を表す HTML 断片の構造が書かれたテンプレートが続きます。

表が生成され、テンプレートが定義されました。 JavaScript を使って、テンプレートを基に構築される各行を表に挿入します。

```js
// templete 要素の content 属性の有無を確認することで、
// ブラウザーが HTML の template 要素に対応しているかテストします。
if ('content' in document.createElement('template')) {

    // 既存の HTML tbody と template の行を使って
    // table をインスタンス生成します。
    var tbody = document.querySelector("tbody");
    var template = document.querySelector('#productrow');

    // 新しい行を複製して表に挿入します。
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";

    tbody.appendChild(clone);

    // 新しい行を複製して表に挿入します。
    var clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    tbody.appendChild(clone2);

} else {
  // HTML の template 要素に対応していないので
  // 表に行を追加するほかの方法を探します。
}
```

結果として、 JavaScript を通して、新しい行が追加された HTML の表ができます。

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Examples", 500, 120)}}

## DocumentFragment の落とし穴の回避

{{domxref("DocumentFragment")}} は様々なイベントのために有効なターゲットではないので、その中の要素を複製したり、参照したりすることが好ましいことがよくあります。

以下の HTML および JavaScript を考えてみてください。

### HTML

```html
<div id="container"></div>

<template id="template">
  <div>クリックしてください</div>
</template>
```

### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — この div がクリックされました");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.firstElementChild.cloneNode(true);
secondClone.addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### 結果

`firstClone` は DocumentFragment のインスタンスなので、期待通りにコンテナー内に追加されますが、クリックしてもクリックイベントは発生しません。 `secondClone` は {{domxref("HTMLDivElement")}} のインスタンスなので、クリックすると期待通りに動作します。

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ウェブコンポーネント: {{HTMLElement("slot")}} (および過去の {{HTMLElement("shadow")}})
- [テンプレートとスロットの使用](/ja/docs/Web/Web_Components/Using_templates_and_slots)
