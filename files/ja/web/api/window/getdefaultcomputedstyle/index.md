---
title: "Window: getDefaultComputedStyle() メソッド"
short-title: getDefaultComputedStyle()
slug: Web/API/Window/getDefaultComputedStyle
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

`getDefaultComputedStyle()` メソッドは、要素のすべての CSS プロパティの既定の[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)を返します。この際、作成者によるスタイル設定は無視されます。つまり、ユーザーエージェントとユーザーによるスタイル設定のみが考慮されます。

## 構文

```js-nolint
getDefaultComputedStyle(element)
getDefaultComputedStyle(element, pseudoElt)
```

### 引数

- `element`
  - : 計算済みスタイルを取得する対象の {{domxref("Element")}} です。
- `pseudoElt` {{optional_inline}}
  - : 一致する擬似要素を指定する文字列。通常の要素の場合は`null`（または未指定）でなければなりません。

### 返値

返される `style` は [`CSSStyleDeclaration`](/ja/docs/Web/API/CSSStyleDeclaration) オブジェクトです。このオブジェクトは {{domxref("Window.getComputedStyle()")}} が返すオブジェクトと同じ型ですが、ユーザーエージェントとユーザースタイルのみを考慮します。

## 例

### 単純な例

```js
const elem = document.getElementById("elemId");
const style = getDefaultComputedStyle(elem);
```

### より長い例

```html
<div id="elem-container">ダミー</div>
<div id="output"></div>
```

```css
#elem-container {
  position: absolute;
  left: 100px;
  top: 200px;
  height: 100px;
}
```

```js
const elem = document.getElementById("elem-container");
const theCSSprop = getDefaultComputedStyle(elem).position;
document.getElementById("output").textContent = theCSSprop; // "static" と出力
```

### 擬似要素で使用

`getDefaultComputedStyle()`メソッドは、擬似要素（{{cssxref("::before")}} や {{cssxref("::after")}} など）からスタイル情報を取得することが可能です。

```html
<h3>生成コンテンツ</h3>
```

```css
h3::after {
  content: " rocks!";
}
```

```js
const h3 = document.querySelector("h3");
const result = getDefaultComputedStyle(h3, "::after").content;

console.log("the generated content is: ", result); // returns 'none'
```

## メモ

特定の既知のケースにおいて、返される値は意図的に明示的に不正となります。
具体的には、いわゆる CSS 履歴漏洩のセキュリティ課題を避けるため、ブラウザーはリンクの `:visited` 擬似セレクターを適用する際に、使用済みリンクの値について明示的に「嘘」をつき、ユーザーがリンク先サイトを一度も訪問したことがないかのように常に値を返したり、適用可能なスタイルを制限していたりすることがあります。
これを実装する方法の例の詳細については、 <https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/> および <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/>）を参照してください。

## 仕様書

CSS ワーキンググループに提案されています。

## ブラウザーの互換性

{{Compat}}
