---
title: HTMLSelectElement.autofocus
slug: Web/API/HTMLSelectElement/autofocus
tags:
  - API
  - HTML フォーム
  - HTMLSelectElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLSelectElement.autofocus
translation_of: Web/API/HTMLSelectElement/autofocus
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.autofocus`** プロパティは、 HTML の {{htmlattrxref("autofocus", "select")}} 属性を反映した `true` または `false` の値を持ちます。これはユーザーが上書きしない限り、ページが読み込まれた際に関連付けられた {{HTMLElement("select")}} 要素がページ読み込み時に入力フォーカスを得るかどうかを示します。

この属性を指定することができるのは、1 つの文書内のフォーム関連要素 1 つだけです。もし複数あった場合、属性が設定された最初の要素 (通常は該当する要素のうちページで最初のもの) が初期のフォーカスを得ます。

> **Note:** このプロパティを設定しても、関連付けられた {{HTMLElement("select")}} 要素へフォーカスは設定されません。単純に文書へ*要素が挿入された*ときにブラウザーへフォーカスを移動するよう指示するだけです。挿入後に設定した場合、すなわち文書が読み込まれた後のほとんどの場合では、目に見える効果はありません。

## 構文

```js
aBool = aSelectElement.autofocus; // autofocus の値を取得
aSelectElement.autofocus = aBool; // autofocus の値を設定
```

## 例

### HTML

```html
<select id="mySelect" autofocus>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### JavaScript

```js
// <select> に autofocus 属性があるかどうかをチェック
var hasAutofocus = document.getElementById('mySelect').autofocus;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
