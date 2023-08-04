---
title: "HTMLSelectElement: autofocus プロパティ"
short-title: autofocus
slug: Web/API/HTMLSelectElement/autofocus
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.autofocus`** プロパティは、HTML の [`autofocus`](/ja/docs/Web/HTML/Element/select#autofocus) 属性を反映した `true` または `false` の値を持ちます。これはユーザーが上書きしない限り、ページが読み込まれた際に関連付けられた {{HTMLElement("select")}} 要素がページ読み込み時に入力フォーカスを得るかどうかを示します。

この属性を指定することができるのは、1 つの文書内のフォーム関連要素 1 つだけです。もし複数あった場合、属性が設定された最初の要素（通常は該当する要素のうちページで最初のもの）が初期のフォーカスを得ます。

> **メモ:** このプロパティを設定しても、関連付けられた {{HTMLElement("select")}} 要素へフォーカスは設定されません。単純に文書へ*要素が挿入された*ときにブラウザーへフォーカスを移動するよう指示するだけです。挿入後に設定した場合、すなわち文書が読み込まれた後のほとんどの場合では、目に見える効果はありません。

## 値

論理値です。

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
const hasAutofocus = document.getElementById("mySelect").autofocus;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
