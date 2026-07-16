---
title: HTML `<slot>` ウェブコンポーネントスロット要素
short-title: <slot>
slug: Web/HTML/Reference/Elements/slot
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

**`<slot>`** は [HTML](/ja/docs/Web/HTML) の要素で、[ウェブコンポーネント](/ja/docs/Web/API/Web_components)内のプレースホルダーであり、コンポーネントが使用される際に自分自身でマークアップを埋めることができます。
これにより、別個の DOM ツリーを生成し、それらを一緒に表示することが可能になります。

スロットには、プレーンテキスト、その他の HTML 要素、その他のウェブコンポーネントを入れることができます。
また、スロットにはデフォルトのコンテンツを指定することもでき、ウェブコンポーネントが使用された際に、そのスロットに他のコンテンツが割り当てられていない場合、このデフォルトのコンテンツが表示されます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `name`
  - : スロットの名前です。
    名前付きスロットとは、`name` 属性を持つ `<slot>` 要素のことです。一方、名前なしスロットには `name` 属性がなく、名前はデフォルトで空文字列となります。

    シャドウルートが[名前付きスロットの割り当て](/ja/docs/Web/HTML/Reference/Elements/template#named)を使用する場合、そのホストの最上位の子要素は、[`slot` 属性](/ja/docs/Web/API/Element/slot)に一致する名前を持つスロット内にレンダリングされます。
    スロット名はシャドウルートごとに固有のものです。同じ名前のスロットが 2 つある場合、一致する `slot` 属性を持つすべての要素は、最初のスロットにレンダリングされます。
    `slot` 属性を持たないすべての最上位の子要素は、まず最初の無名の `<slot>` 要素（デフォルトスロットと呼ばれます）内でレンダリングされます。
    シャドウルートが[手動スロット割り当て](/ja/docs/Web/HTML/Reference/Elements/template#manual)を使用している場合、`name` は効果がありません。

    詳しくは、`<template>` 要素の [`shadowrootslotassignment`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) および [`Element.attachShadow()`](/ja/docs/Web/API/Element/attachShadow#slotassignment) をご覧ください。

## 例

### 基本的な使い方

この HTML は、{{htmlelement("template")}} 要素内で、いくつかの名前付きスロットをどのように宣言できるかを示しています。
なお、これらのスロットは、テンプレートがシャドウルート内で使用される場合にのみ、スロットとして機能することに注意してください。

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", "Helvetica", "Arial", sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name">
        &lt;<slot name="element-name">NEED NAME</slot>&gt;
      </code>
      <span class="desc"><slot name="description">NEED DESCRIPTION</slot></span>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> [!NOTE]
> この完全な例は、 [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) で見ることができます（[ライブ実行](https://mdn.github.io/web-components-examples/element-details/)もご覧ください）。また、[テンプレートとスロットの利用](/ja/docs/Web/API/Web_components/Using_templates_and_slots)にも説明があります。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#透過的コンテンツ">透過的コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">イベント</th>
      <td>{{domxref("HTMLSlotElement/slotchange_event", "slotchange")}}</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>を受け付ける任意の要素
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
      <td>{{domxref("HTMLSlotElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
