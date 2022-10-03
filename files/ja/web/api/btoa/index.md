---
title: WindowOrWorkerGlobalScope.btoa()
slug: Web/API/btoa
original_slug: Web/API/WindowOrWorkerGlobalScope/btoa
---

{{APIRef("HTML DOM")}}

**`WindowOrWorkerGlobalScope.btoa()`** メソッドは、 {{glossary("Base64")}} でエンコードされた ASCII 文字列を[バイナリ文字列](/ja/docs/Web/API/DOMString/Binary) (例えば {{jsxref("String")}} オブジェクトのうち、文字列中のすべての文字がバイナリデータのバイトとして扱うことができるもの) から生成します。

このメソッドを使用すると、通信に支障をきたす可能性のあるデータをエンコードして送信し、その後 {{domxref("WindowOrWorkerGlobalScope.atob", "atob()")}} メソッドを使用して再度デコードすることができます。例えば ASCII で 0 から 31 の値のような制御文字をエンコードすることもできます。

## 構文

```
var encodedData = scope.btoa(stringToEncode);
```

### 引数

- `stringToEncode`
  - : エンコードする[バイナリ文字列](/ja/docs/Web/API/DOMString/Binary)です。

### 返値

`stringToEncode` の Base64 表現である ASCII 文字列です。

### 例外

- `InvalidCharacterError`
  - : 文字列には、1 バイトに収まらない文字が含まれていた場合。詳細は後述の「Unicode 文字列」を参照してください。

## 例

```js
const encodedData = window.btoa('Hello, world'); // 文字列をエンコード
const decodedData = window.atob(encodedData); // 文字列をデコード
```

## Unicode 文字列

`btoa()` 関数は、JavaScript の文字列を引数にとります。JavaScript の文字列は UTF-16 文字エンコーディングで表現されます。このエンコーディングでは、文字列は 16 ビット (2 バイト) 単位の並びとして表現されます。すべての ASCII 文字はこれらの単位の 1 バイト目に収まりますが、他の多くの文字は収まりません。

Base64 は、設計上、バイナリデータを入力として期待します。 JavaScript の文字列では、これは各文字が 1 バイトしか占有しない文字列を意味します。したがって、2 バイト以上の文字を含む文字列を `btoa()` に渡した場合、これはバイナリデータとはみなされないため、エラーが発生します。

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: 長さ < 1 バイト

const notOK = "✓"
console.log(notOK.codePointAt(0).toString(16)); // 2713: 長さ > 1 バイト

console.log(btoa(ok));    // YQ==
console.log(btoa(notOK)); // error
```

`btoa()` を用いて Unicode テキストを ASCII としてエンコードする必要がある場合、一つの選択肢として、各 16 ビット単位が 1 バイトしか占有しないように文字列を変換することができます。例えば、以下のようになります。

```js
// Unicode 文字列で、各 16 ビット単位を 1 バイトしか占有
// しない文字列に変換します。
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
}

// 1 バイトを超える文字を含んだ文字列
const myString = "☸☹☺☻☼☾☿";

const converted = toBinary(myString);
const encoded = btoa(converted);
console.log(encoded);                 // OCY5JjomOyY8Jj4mPyY=
```

このようにした場合、当然ながらデコードされた文字列を逆変換する必要があります。

```js
function fromBinary(binary) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

const decoded = atob(encoded);
const original = fromBinary(decoded);
console.log(original);                // ☸☹☺☻☼☾☿
```

## ポリフィル

対応していないブラウザーでは、 <https://github.com/MaxArt2501/base64-js/blob/master/base64.js> のポリフィルを利用することができます。

## 仕様書

| 仕様書                                                                                               | 状態                             | 備考                                                                                                                        |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-btoa', 'WindowOrWorkerGlobalScope.btoa()')}} | {{Spec2('HTML WHATWG')}} | 最新の仕様で、メソッドを `WindowOrWorkerGlobalScope` ミックスインに移動。                                                   |
| {{SpecName('HTML5.1', '#dom-windowbase64-btoa', 'WindowBase64.btoa()')}}     | {{Spec2('HTML5.1')}}     | {{SpecName("HTML WHATWG")}} のスナップショット、変更なし。                                                         |
| {{SpecName("HTML5 W3C", "#dom-windowbase64-btoa", "WindowBase64.btoa()")}} | {{Spec2('HTML5 W3C')}}     | {{SpecName("HTML WHATWG")}} のスナップショット。 `WindowBase64` の作成 (properties where on the target before it). |

## ブラウザーの互換性

{{Compat("api.WindowOrWorkerGlobalScope.btoa")}}

## 関連情報

- [`data` URI](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
- {{domxref("WindowOrWorkerGlobalScope.atob","atob()")}}
