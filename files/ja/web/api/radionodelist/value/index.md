---
title: "RadioNodeList: value プロパティ"
short-title: value
slug: Web/API/RadioNodeList/value
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("HTML DOM") }}

基盤となる要素の集合にラジオボタンが含まれている場合、**`RadioNodeList.value`** プロパティはチェック状態のラジオボタンを表します。`value` プロパティを取得すると、現在 `checked` 状態になっているラジオボタンの `value` が文字列として返されます。集合内にラジオボタンが含まれていなかったり、集合内のラジオボタンに `checked` 状態のものがなかったりした場合は、空文字列が返されます。`value` プロパティを設定すると、`value` プロパティが新しい値と等しい最初のラジオボタン入力要素に `checked` 状態が設定されます。

## 構文

```js-nolint
value = radioNodeList.value
radioNodeList.value = string
```

## 例

### HTML

```html
<form>
  <label><input type="radio" name="color" value="blue" />青</label>
  <label><input type="radio" name="color" value="red" />赤</label>
</form>
```

### JavaScript

```js
// フォームを取得
const form = document.forms[0];

// フォームのラジオボタンの集合を取得
const radios = form.elements["color"];

// 「赤」の選択肢を選択
radios.value = "red";
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("form")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("input")}} 要素
