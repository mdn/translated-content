---
title: "WorkerGlobalScope: btoa() メソッド"
short-title: btoa()
slug: Web/API/WorkerGlobalScope/btoa
l10n:
  sourceCommit: dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{APIRef("HTML DOM")}}

**`btoa()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、 {{glossary("Base64")}} でエンコードされた {{Glossary("ASCII")}} 文字列をバイナリー文字列（すなわち、文字列のそれぞれの文字がバイナリーデータの各バイトとして扱われる文字列）から生成します。

このメソッドを使用すると、通信に支障をきたす可能性のあるデータをエンコードして送信し、その後で {{domxref("WorkerGlobalScope.atob()")}} メソッドを使用して再度デコードすることができます。
例えば ASCII で 0 から 31 の値のような制御文字をエンコードすることもできます。

## 構文

```js-nolint
btoa(stringToEncode)
```

### Parameters

- `stringToEncode`
  - : エンコードするバイナリー文字列です。

### 返値

`stringToEncode` の Base64 表現である ASCII 文字列です。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 文字列には、1 バイトに収まらない文字が含まれていた場合。詳細は後述の「Unicode 文字列」を参照してください。

## 例

```js
const encodedData = self.btoa("Hello, world"); // 文字列をエンコード
const decodedData = self.atob(encodedData); // 文字列をデコード
```

## Unicode 文字列

Base64 は、設計上、バイナリーデータを入力として期待します。JavaScript の文字列では、これは各文字が 1 バイトしか占有しない文字列を意味します。したがって、2 バイト以上の文字を含む文字列を `btoa()` に渡した場合、これはバイナリーデータとはみなされないため、エラーが発生します。

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: 長さ < 1 バイト

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: 長さ > 1 バイト

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // エラー
```

任意の Unicode テキストを扱うときにこの制限を回避する作業方法については、{{Glossary("Base64")}} の用語集の項目の「Unicode 問題」を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`btoa` のポリフィル](https://github.com/zloirock/core-js#base64-utility-methods) は [`core-js`](https://github.com/zloirock/core-js) で利用できます。
- [`data` URL](/ja/docs/Web/URI/Schemes/data)
- {{domxref("WorkerGlobalScope.atob()")}}
- {{domxref("Window.btoa()")}}: 同様のメソッドですが、ウィンドウスコープのものです。
- {{Glossary("Base64")}}
