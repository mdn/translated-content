---
title: '<slot>: ウェブコンポーネントのスロット要素'
slug: Web/HTML/Element/slot
tags:
  - Element
  - HTML
  - HTML ウェブコンポーネント
  - リファレンス
  - ウェブコンポーネント
  - シャドウ DOM
  - slot
translation_of: Web/HTML/Element/slot
---

{{HTMLRef}}

**`<slot>`** は [HTML](/ja/docs/Web/HTML) の要素 — <a href="/ja/docs/Web/Web_Components">ウェブコンポーネント</a>技術の一部 — は、ウェブコンポーネント内で別な DOM ツリーを構築し、いっしょに表示することができる独自のマークアップを入れることができるプレイスホルダーです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#transparent_content_model">透過的コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">イベント</th>
      <td>{{event("slotchange")}}</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>を受け付ける任意の要素
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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("name")}}

  - : スロットの名前です。

    **_名前付きスロット_**は、 `<slot>` 要素に `name` 属性が付きます。

## 例

```html
<template id="element-details-template">
  <style>
    details {font-family: "Open Sans Light", Helvetica, Arial, sans-serif }
    .name {font-weight: bold; color: #217ac0; font-size: 120% }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes { margin-left: 22px; font-size: 90% }
    .attributes p { margin-left: 16px; font-style: italic }
  </style>
  <details>
    <summary>
      <code class="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
      <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr>
</template>
```

> **Note:** この完全な例は、 [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details) で見ることができます（[ライブ実行](https://mdn.github.io/web-components-examples/element-details/)もご覧ください）。また、[テンプレートとスロットの利用](/ja/docs/Web/Web_Components/Using_templates_and_slots)にも説明があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
