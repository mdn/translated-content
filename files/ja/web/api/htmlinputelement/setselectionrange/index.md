---
title: HTMLInputElement.setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - メソッド
  - リファレンス
  - テキスト欄選択 API
browser-compat: api.HTMLInputElement.setSelectionRange
translation_of: Web/API/HTMLInputElement/setSelectionRange
---
{{APIRef("HTML DOM")}}

**`HTMLInputElement.setSelectionRange()`** メソッドは、 {{HTMLElement("input")}} または {{HTMLElement("textarea")}} 要素の中で現在のテキストの選択範囲の開始位置と終了位置を設定します。

オプションとして、新しいバージョンのブラウザーでは、選択が行われたとみなす方向を指定することができます。これにより、例えば、ユーザーが選択範囲を設定するのに、選択されたテキストの末尾から先頭に向けてクリックとドラッグが行われたことを示すことができます。

この関数は 1 回の呼び出しで、 `HTMLInputElement.selectionStart`, `selectionEnd`, `selectionDirection` の各プロパティを更新します。

[WHATWG フォーム仕様書](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply)によると、 `selectionStart`, `selectionEnd` プロパティと `setSelectionRange` メソッドは、 text, search, URL, tel, password 型の入力欄にのみ適用されることに注意してください。 Chrome のバージョン 33 以降では、それ以外の入力型でこれらのプロパティとメソッドにアクセスすると例外が発生します。例えば、 `number` 型の入力欄では、 "Failed to read the 'selectionStart' property from 'HTMLInputElement': The input element's type ('number') does not support selection" （'HTMLInputElement' の 'selectionStart' プロパティを読み取りに失敗しました。この input 要素の入力型 ('number') は選択に対応していません）となります。

input 要素の**すべて**のテキストを選択したい場合は、代わりに [HTMLInputElement.select()](/ja/docs/Web/API/HTMLInputElement/select) メソッドを使用してください。

## 構文

```js
element.setSelectionRange(selectionStart, selectionEnd [, selectionDirection]);
```

### 引数

`selectionEnd` が `selectionStart` より小さい場合、両方の値は `selectionEnd` として扱われます。

- `selectionStart`
  - : 選択する最初の文字の 0 から始まる位置です。位置が要素の値の長さよりも大きい場合は、要素の値の末尾の位置と見なされます。
- `selectionEnd`
  - : 選択する最後の文字の*次の* 0 から始まる位置です。位置が要素の長さよりも大きい場合は、要素の値の末尾の位置と見なされます。
- `selectionDirection` {{optional_inline}}

  - : 選択が行われたと見なされる方向を示す文字列です。取りうる値は次の通りです。

    - `"forward"`
    - `"backward"`
    - `"none"` 選択方向が不明または無関係な場合です。既定値です。

## 例

この例の中のボタンをクリックすると、テキストボックスの 3、4、5 番目の文字（"Mozilla" の "zil"）が選択状態になります。

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla">
<button onclick="selectText()">テキストを選択</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.setSelectionRange(2, 5);
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
