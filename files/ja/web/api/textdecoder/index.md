---
title: TextDecoder
slug: Web/API/TextDecoder
---

{{APIRef("Encoding API")}}

**`TextDecoder`** インターフェイスは特定のテキストエンコーディング、例えば `UTF-8`, `ISO-8859-2`, `KOI8-R`, `GBK`, 等のデコーダーを表します。デコーダーは入力としてバイトのストリームを取り、コードポイントのストリームを出力します。

## 例

### 型付き配列でのテキスト表現

この例では、中国語/日本語の文字 ![](2019-05-21_191907.png) を、異なる 5 種類の型付き配列、 {{jsxref("Uint8Array")}}, {{jsxref("Int8Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Int32Array")}} で表します。

```js
let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

let u8arr = new Uint8Array([240, 160, 174, 183]);
let i8arr = new Int8Array([-16, -96, -82, -73]);
let u16arr = new Uint16Array([41200, 47022]);
let i16arr = new Int16Array([-24336, -18514]);
let i32arr = new Int32Array([-1213292304]);

console.log(utf8decoder.decode(u8arr));
console.log(utf8decoder.decode(i8arr));
console.log(utf8decoder.decode(u16arr));
console.log(utf8decoder.decode(i16arr));
console.log(utf8decoder.decode(i32arr));
```

### UTF8 ではないテキストの扱い

この例では、ロシア語の "Привет, мир!"、 "Hello, world." という意味のテキストをデコードします。 {{domxref("TextDecoder/TextDecoder", "TextDecoder()")}} コンストラクターでは、キリル語の文字に適した Windows-1251 文字エンコーディングを指定します。

```js
let win1251decoder = new TextDecoder('windows-1251');
let bytes = new Uint8Array([207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33]);
console.log(win1251decoder.decode(bytes)); // Привет, мир!
```

## コンストラクター

- {{DOMxRef("TextDecoder.TextDecoder", "TextDecoder()")}}
  - : 新たに生成した `TextDecoder` を返します。これは、引数で指定したデコード方式を使用して連続したコードポイントを生成します。

## プロパティ

_`TextDecoder` インターフェイスは、何もプロパティを継承していません。_

- {{DOMxRef("TextDecoder.prototype.encoding")}}{{ReadOnlyInline}}
  - : デコーダーの名称を持つ {{DOMxRef("DOMString")}} であり、これは `TextDecoder` が使用する方式を表す文字列です。
- {{DOMxRef("TextDecoder.prototype.fatal")}}{{ReadOnlyInline}}
  - : エラーモードが fatal であるかを示す {{jsxref('Boolean')}} です。
- {{DOMxRef("TextDecoder.prototype.ignoreBOM")}}{{ReadOnlyInline}}
  - : バイトオーダーマークを無視するかどうかを示す {{jsxref('Boolean')}} です。

## メソッド

_`TextDecoder` インターフェイスは、何もメソッドを継承していません。_

- {{DOMxRef("TextDecoder.prototype.decode()")}}
  - : 特定の `TextDecoder` オブジェクトの方式でデコードされたテキストを含む {{domxref("DOMString")}} を返します。

## 仕様書

| 仕様書                                                                                   | 状態                         | 備考     |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Encoding", "#interface-textdecoder", "TextDecoder")}} | {{Spec2("Encoding")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.TextDecoder")}}

## 関連情報

- 逆の操作を表す {{DOMxRef("TextEncoder")}} インターフェイス。
- [`StringView`](/ja/Add-ons/Code_snippets/StringView) – 型付き配列による、C ライクな文字列の表現
- 非サポートブラウザーでもこのインターフェイスを使用可能にする [shim](https://github.com/inexorabletash/text-encoding)。
- [`Components.utils.importGlobalProperties`](/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.importGlobalProperties)
- [Node.js supports global export from v11.0.0](https://nodejs.org/api/util.html#util_class_util_textdecoder)
