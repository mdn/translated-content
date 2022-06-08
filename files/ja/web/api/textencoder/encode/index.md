---
title: TextEncode.encode()
slug: Web/API/TextEncoder/encode
tags:
  - API
  - エンコーディング
  - メソッド
  - リファレンス
  - TextEncoder
  - encode
browser-compat: api.TextEncoder.encode
translation_of: Web/API/TextEncoder/encode
---
{{APIRef("Encoding API")}}

**`TextEncoder.encode()`** メソッドは入力として文字列を取り、 {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}} に引数で与えられたテキストが {{domxref("TextEncoder")}} オブジェクトで指定された方法でエンコードされたものが入ったものを返します。

## 構文

```js
encode(string)
```

### 引数

- `string`
  - : エンコードするテキストが入った文字列です。

### 返値

{{jsxref("Uint8Array")}} オブジェクトです。

## 例

```html
<p class="source">This is a sample paragraph.</p>
<p class="result">Encoded result: </p>
```

```js
const sourcePara = document.querySelector('.source');
const resultPara = document.querySelector('.result');
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();

let encoded = textEncoder.encode(string);
resultPara.textContent += encoded;
```

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{DOMxRef("TextEncoder")}} インターフェイス。
