---
title: "HTMLInputElement: showPicker() メソッド"
short-title: showPicker()
slug: Web/API/HTMLInputElement/showPicker
l10n:
  sourceCommit: e312e1548dda157699cff0fe339532a617477652
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement.showPicker()`** メソッドは、`input` 要素のブラウザーのピッカーを表示します。

これは、通常、要素が選択されたときに表示されるピッカーと同じものですが、ボタンを押すなど、ユーザーの操作で起動させることができます。

ブラウザーがよく実装しているのは、`"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"`, `"file"` の型の入力欄です。これは {{htmlelement("datalist")}} 要素や [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) 属性からの項目を表示することもできます。

もっと一般的に言えば、このメソッドは、ピッカーを持つプラットフォーム上のあらゆる入力要素にピッカーを表示するのが理想的です。

## 構文

```js-nolint
showPicker()
```

### 引数

なし。

### 返値

{{jsxref("undefined")}} です。

### 例外

- `InvalidStateError` の {{domxref("DOMException")}}
  - : 要素が変更可能でない場合、つまりユーザーが変更することができない、または自動的に事前入力することができない場合に発生します。
- `NotAllowedError` の {{domxref("DOMException")}}
  - : タッチジェスチャーやマウスクリックなどのユーザー操作によって明示的に起動されなかった場合に発生します（ピッカーには{{Glossary("Transient activation", "一時的な有効化")}}が必要です）。
- `SecurityError` の {{domxref("DOMException")}}
  - : 別オリジンの iframe で呼び出された場合に発生します。ただし、ファイルピッカーとカラーピッカーは例外（歴史的な理由で除外されます）。

## セキュリティ

[一時的な活性化](/ja/docs/Web/Security/User_activation)が必要です。この機能を作業するためには、ユーザーがページや UI 要素を操作する必要があります。

## 例

### 機能検出

以下のコードは、`showPicker()` に対応しているかどうかをチェックする方法を示します。

```js
if ("showPicker" in HTMLInputElement.prototype) {
  // showPicker() is supported.
}
```

### 通常の入力欄のピッカー

この例は、この機能を `color` と `file` の入力ピッカーに使用する方法を示しています。

> **メモ:** `date`、`datetime-local`、`month`、`time`、`week` のピッカーも同じように起動します。
> ライブ例がオリジン間フレームで実行され、[`SecurityError`](#securityerror)を発生させてしまうため、ここでは示せません。

#### HTML

```html
<p>
  <input type="color" />
  <button id="color">カラーピッカーを表示</button>
</p>

<p>
  <input type="file" />
  <button id="file">ファイルピッカーを表示</button>
</p>
```

#### JavaScript

このコードは、選択されたボタンの直前の要素を取得し、それに対して `showPicker()` を呼び出すだけです。

```js
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const input = event.srcElement.previousElementSibling;
    try {
      input.showPicker();
    } catch (error) {
      window.alert(error);
    }
  });
});
```

#### 結果

それぞれの入力型の横にあるボタンをクリックすると、その入力型のピッカーが表示されます。

{{EmbedLiveSample("Normal input pickers", "100%", "140px")}}

### データリスト入力における showPicker()

`showPicker()`は、[`<datalist>`](/ja/docs/Web/HTML/Element/datalist) で定義されている選択肢のリストに対してピッカーを起動することができます。

まず `<datalist>` を HTML で定義します。いくつものインターネットブラウザー、それを使用する `text` 型の入力、そしてボタンから構成されています。

```html
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>

<input type="text" list="browsers" />
<button>ブラウザーを選択</button>
```

下記コードでは、ボタンがクリックされたときに `showPicker()` を呼び出すイベントリスナーを追加しています。

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // 他のピッカーの仕組みで代替
  }
});
```

### 自動補完における showPicker()

`showPicker()` は [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) のある入力欄に対するピッカーを起動することができます。

ここでは、自動補完の選択肢の "name" を取る入力を定義しています。

```html
<input autocomplete="name" /> <button>自動補完の選択肢を表示</button>
```

下記コードは、ボタンがクリックされたときの入力のピッカーを示すものです。

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // 他のピッカーの仕組みで代替
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ HTMLElement("input") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLSelectElement.showPicker()") }}
- {{htmlelement("datalist")}}
- [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete)
