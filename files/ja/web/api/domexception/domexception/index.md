---
title: "DOMException: DOMException() コンストラクター"
short-title: DOMException()
slug: Web/API/DOMException/DOMException
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`DOMException()`** コンストラクターは、指定されたメッセージと名前を持つ {{domxref("DOMException")}} オブジェクトを返します。

## 構文

```js-nolint
new DOMException()
new DOMException(message)
new DOMException(message, name)
```

### 引数

- `message` {{optional_inline}}
  - : この例外の説明です。存在しない場合は、空文字列 `''` が使用されます。
- `name` {{optional_inline}}
  - : 文字列です。指定された名前が[標準エラー名](/ja/docs/Web/API/DOMException#エラー名)であった場合、その `DOMException` オブジェクトの [`code`](/ja/docs/Web/API/DOMException/code) プロパティは指定された名前に対応するコード番号を返します。

### 返値

新しく作成された {{domxref("DOMException")}} オブジェクトです。

## 例

この例では、ボタンを押すと独自の `DOMException` が発生し、それがキャッチされ、独自のエラーメッセージがアラートに表示されます。

### HTML

```html
<button>Trigger DOM Exception</button>

<p id="output"></p>
```

### JavaScript

```js
const button = document.querySelector("button");

button.onclick = () => {
  try {
    throw new DOMException("Custom DOM Exception Triggered.");
  } catch (error) {
    document.querySelector("#output").textContent = `Error: ${error.message}`;
  }
};
```

### 例

{{ EmbedLiveSample('Examples', '100%', 100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`DOMException` コンストラクターのポリフィル](https://github.com/zloirock/core-js#domexception)が [`core-js`](https://github.com/zloirock/core-js) で利用できます
