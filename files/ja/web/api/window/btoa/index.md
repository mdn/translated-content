---
title: "Window: btoa() メソッド"
short-title: btoa()
slug: Web/API/Window/btoa
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

**`btoa()`** は {{domxref("Window")}} インターフェイスのメソッドで、 {{glossary("Base64")}} でエンコードされた {{Glossary("ASCII")}} 文字列をバイナリー文字列（すなわち、文字列のそれぞれの文字がバイナリーデータの各バイトとして扱われる文字列）から生成します。

このメソッドを使用すると、通信に支障をきたす可能性のあるデータをエンコードして送信し、その後で {{domxref("Window.atob()")}} メソッドを使用して再度デコードすることができます。
例えば ASCII で 0 から 31 の値のような制御文字をエンコードすることもできます。

また、データが `Uint8Array` オブジェクトにある場合は、生のバイト列を含む文字列を作成しなくてもよいよう、 {{jsxref("Uint8Array.prototype.toBase64()")}} を使用することも検討してください。

## 構文

```js-nolint
btoa(stringToEncode)
```

### 引数

- `stringToEncode`
  - : エンコードするバイナリー文字列です。JavaScript の文字列は {{glossary("UTF-16")}} でエンコードされます。つまり、それぞれの文字は 256 未満のコードポイントを持ち、 1 バイトのデータを表す必要があります。

### 返値

`stringToEncode` の Base64 表現である ASCII 文字列です。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 文字列には、1 バイトに収まらない文字が含まれていた場合。詳細は後述の「Unicode 文字列」を参照してください。

## 例

```js
const encodedData = window.btoa("Hello, world"); // 文字列をエンコード
const decodedData = window.atob(encodedData); // 文字列をデコード
```

### Unicode 文字列

Base64 は、設計上、バイナリーデータを入力として期待します。 JavaScript の文字列では、これは各文字が 1 バイトしか占有しない文字列を意味します。したがって、2 バイト以上の文字を含む文字列を `btoa()` に渡した場合、これはバイナリーデータとはみなされないため、エラーが発生します。

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: 長さ < 1 バイト

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: 長さ > 1 バイト

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // エラー
```

`btoa` は、入力文字列のコードポイントをバイト値として解釈するため、文字のコードポイントが `0xff` を超える文字列に対して `btoa` を呼び出すと、 "Character Out Of Range" 例外が発生します。任意の Unicode テキストをエンコードする必要がある用途では、まず文字列を {{glossary("UTF-8")}} で構成するバイトに変換してから、そのバイトをエンコードする必要があります。

最も簡単な解決策は、`TextEncoder` および `TextDecoder` を使用して、UTF-8 と文字列の単一バイト表現間を変換することです。

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// 使い方
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

### 任意のバイナリーデータの変換

前回の節で説明した `bytesToBase64` および `base64ToBytes` 関数を使用すると、Base64 文字列と [`Uint8Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) を直接変換することができます。

パフォーマンスを向上させるため、 base64 データ URL 間の非同期変換は [`FileReader`](/ja/docs/Web/API/FileReader) および [`fetch`](/ja/docs/Web/API/Fetch_API) API を使用して、ウェブプラットフォーム内でネイティブに行うことができます。

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// 使い方
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

> [!NOTE]
> 対応している環境では、ネイティブの {{jsxref("Uint8Array.fromBase64()")}}、{{jsxref("Uint8Array.prototype.toBase64()")}}、{{jsxref("Uint8Array.prototype.setFromBase64()")}} の各メソッドもご検討ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`btoa` のポリフィル](https://github.com/zloirock/core-js#base64-utility-methods) は [`core-js`](https://github.com/zloirock/core-js) で利用できます。
- [`data` URL](/ja/docs/Web/URI/Reference/Schemes/data)
- {{domxref("WorkerGlobalScope.btoa()")}}: 同様のメソッドですが、ワーカースコープのものです。
- {{domxref("Window.atob()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64")}}
