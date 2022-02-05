---
title: HTMLInputElement.setRangeText()
slug: Web/API/HTMLInputElement/setRangeText
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - メソッド
  - NeedsCompatTable
  - リファレンス
  - テキスト欄選択 API
browser-compat: api.HTMLInputElement.setRangeText
translation_of: Web/API/HTMLInputElement/setRangeText
---
{{APIRef("HTML DOM")}}

**`HTMLInputElement.setRangeText()`** メソッドは、 {{HTMLElement("input")}} や {{HTMLElement("textarea")}} 要素の中のテキストの範囲を新しい文字列に置き換えます。

## 構文

```js
element.setRangeText(replacement);
element.setRangeText(replacement, start, end [, selectMode]);
```

### 引数

- `replacement`
  - : 挿入する文字列。
- `start` {{optional_inline}}
  - : 置換する最初の文字を 0 から始まる位置で指定します。既定値は現在の `selectionStart` の値（ユーザーが現在選択している先頭）です。
- `end` {{optional_inline}}
  - : 置換する最後の文字の*次の*文字を 0 から始まる位置で指定します。既定値は現在の `selectionEnd` の値（ユーザーが現在選択している末尾）です。
- `selectMode` {{optional_inline}}

  - : テキストが置換された後で、選択範囲がどのように設定されるかを定義する文字列です。
    次の値が利用できます。

    - `"select"`: 新規挿入したテキストを選択します。
    - `"start"`: 挿入したテキストの直前に選択範囲を移動します。
    - `"end"`: 挿入したテキストの直後に選択範囲を移動します。
    - `"preserve"`: 選択範囲を保全しようとします。これが既定値です。

## 例

この例にあるボタンをクリックすると、テキストボックス内のテキストの一部を置き換えます。新しく挿入されたテキストは、その後で強調（選択）されます。

### HTML

```html
<input type="text" id="text-box" size="30" value="このテキストは更新されていません。">
<button onclick="selectText()">テキストを更新</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.setRangeText('ました', 11, 16, 'select');
}
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Selection")}}
