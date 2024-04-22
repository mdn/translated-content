---
title: btoa()
slug: Web/API/btoa
l10n:
  sourceCommit: 951c9cee9c31ef7c2f2314b87a7c7cc5e330d471
---

{{APIRef("HTML DOM")}}

**`btoa()`** メソッドは、 {{glossary("Base64")}} でエンコードされた ASCII 文字列をバイナリー文字列（すなわち、文字列のそれぞれの文字がバイナリーデータの各バイトとして扱われる文字列）から生成します。

このメソッドを使用すると、通信に支障をきたす可能性のあるデータをエンコードして送信し、その後で {{domxref("atob", "atob()")}} メソッドを使用して再度デコードすることができます。例えば ASCII で 0 から 31 の値のような制御文字をエンコードすることもできます。

## 構文

```js-nolint
btoa(stringToEncode)
```

### 引数

- `stringToEncode`
  - : エンコードするバイナリー文字列です。

### 返値

`stringToEncode` の Base64 表現である ASCII 文字列です。

### 例外

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 文字列には、1 バイトに収まらない文字が含まれていた場合。詳細は後述の「Unicode 文字列」を参照してください。

## 例

```js
const encodedData = btoa("Hello, world"); // 文字列をエンコード
const decodedData = atob(encodedData); // 文字列をデコード
```

## Unicode 文字列

`btoa()` 関数は、JavaScript の文字列を引数にとります。JavaScript の文字列は UTF-16 文字エンコーディングで表現されます。このエンコーディングでは、文字列は 16 ビット（2 バイト）単位の並びとして表現されます。すべての ASCII 文字はこれらの単位の 1 バイト目に収まりますが、他の多くの文字は収まりません。

Base64 は、設計上、バイナリーデータを入力として期待します。 JavaScript の文字列では、これは各文字が 1 バイトしか占有しない文字列を意味します。したがって、2 バイト以上の文字を含む文字列を `btoa()` に渡した場合、これはバイナリーデータとはみなされないため、エラーが発生します。

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: 長さ < 1 バイト

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: 長さ > 1 バイト

console.log(btoa(ok)); // YQ==
console.log(btoa(notOK)); // error
```

`btoa()` を用いて Unicode テキストを ASCII としてエンコードする必要がある場合、一つの選択肢として、各 16 ビット単位が 1 バイトしか占有しないように文字列を変換することができます。例えば、以下のようにします

```js
// Unicode 文字列で、各 16 ビット単位を 1 バイトしか占有
// しない文字列に変換します。
function toBinary(string) {
  const codeUnits = Uint16Array.from(
    { length: string.length },
    (element, index) => string.charCodeAt(index),
  );
  const charCodes = new Uint8Array(codeUnits.buffer);

  let result = "";
  charCodes.forEach((char) => {
    result += String.fromCharCode(char);
  });
  return result;
}

// 1 バイトを超える文字を含んだ文字列
const myString = "☸☹☺☻☼☾☿";

const converted = toBinary(myString);
const encoded = btoa(converted);
console.log(encoded); // OCY5JjomOyY8Jj4mPyY=
```

このようにした場合、当然ながらデコードされた文字列を逆変換する必要があります。

```js
function fromBinary(binary) {
  const bytes = Uint8Array.from({ length: binary.length }, (element, index) =>
    binary.charCodeAt(index),
  );
  const charCodes = new Uint16Array(bytes.buffer);

  let result = "";
  charCodes.forEach((char) => {
    result += String.fromCharCode(char);
  });
  return result;
}

const decoded = atob(encoded);
const original = fromBinary(decoded);
console.log(original); // ☸☹☺☻☼☾☿
```

用語集の {{Glossary("Base64")}} の項目にある[解決策その 1 - 文字列をエンコードする前にエスケープする](/ja/docs/Glossary/Base64#解決策その_1_-_文字列をエンコードする前にエスケープする)の例の `utf8_to_b64` および `b64_to_utf8` 関数も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`btoa` のポリフィル](https://github.com/zloirock/core-js#base64-utility-methods) は [`core-js`](https://github.com/zloirock/core-js) で利用できます。
- [`data` URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("atob","atob()")}}
- {{Glossary("Base64")}}
