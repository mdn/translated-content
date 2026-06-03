---
title: "HTMLSelectElement: showPicker() メソッド"
short-title: showPicker()
slug: Web/API/HTMLSelectElement/showPicker
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.showPicker()`** メソッドは、`select` 要素のブラウザーピッカーを表示します。

これは、通常、要素が選択された際に表示されるものと同じピッカーですが、ボタンを押すなど、他のユーザー操作から発生します。

## 構文

```js-nolint
showPicker()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 要素が変更可能なものでない場合に発生します。つまり、ユーザーが変更できない、あるいは自動的に事前入力できないということです。
- `NotAllowedError` {{domxref("DOMException")}}
  - : ユーザー操作（タッチジェスチャーやマウスクリックなど）によって明示的に開始されない場合、発生します（ピッカーには{{Glossary("Transient activation", "一時的な有効か")}}が要求されます）。
- `NotSupportedError` {{domxref("DOMException")}}
  - : ピッカーに関連付けられた要素がレンダリングされていない場合に発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : オリジンをまたいで iframe で呼び出された場合に発生します。

## セキュリティの注意事項

[一時的なユーザーの活性化](/ja/docs/Web/Security/Defenses/User_activation)が要求されます。
この機能が動作するには、ユーザーがページまたはUIの要素と対話する必要があります。

このメソッドは、同一オリジン iframe でのみ呼び出すことができます。別オリジンの iframe で呼び出された場合は例外が発生します。

## 例

### 機能検出

下記コードは、`showPicker()` が対応しているかどうかを調べる方法を示しています。

```js
if ("showPicker" in HTMLSelectElement.prototype) {
  // showPicker() is supported.
}
```

### ピッカーの起動

この例では、ボタンを使用して、2 つのオプションを持つ `<select>` 要素のピッカーを起動する方法を示しています。

#### HTML

```html
<p>
  <select>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
  <button type="button">Show Picker</button>
</p>
```

#### JavaScript

コードは `<button>` を取得し、その `click` イベントの待ち受けを追加します。
イベントハンドラーは `<select>` 要素を取得し、その `showPicker()` を呼び出します。

```js
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  const select = event.srcElement.previousElementSibling;
  try {
    select.showPicker();
  } catch (error) {
    window.alert(error);
  }
});
```

<!-- A live example cannot be shown here because they run in a cross-origin frame, and would cause a SecurityError -->

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ HTMLElement("select") }}
- {{ domxref("HTMLSelectElement") }}
- {{ domxref("HTMLInputElement.showPicker()") }}
