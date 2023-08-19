---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
---

{{jsSidebar("Errors")}}

JavaScript の例外 "Invalid array length" は、配列の長さが負の数か、プラットフォームで対応している最大値を超える値に設定しようとしたとき (すなわち、 {{jsxref("Array")}} または {{jsxref("ArrayBuffer")}} を生成しようとしたとき、または {{jsxref("Array.length")}} を設定しようとしたとき) に発生します。

配列の長さに許されている最大値は、プラットフォームとブラウザーとそのバージョンに依存します。 {{jsxref("Array")}} については、最大長は 2GB-1 (2^32-1) です。 {{jsxref("ArrayBuffer")}} については、最大値は 32 ビットシステムで 2GB-1 (2^32-1) です。 Firefox バージョン 89 から、 {{jsxref("ArrayBuffer")}} の最大値は 64 ビットシステムでは 8GB (2^33) です。

> **メモ:** `Array` と `ArrayBuffer` は別個のデータ構造です (一方の実装がもう一方には影響しません)。

## メッセージ

```js
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chromium-based)
RangeError: Array buffer allocation failed (Chromium-based)
```

## エラーの種類

{{jsxref("RangeError")}}

## エラーの原因

配列の長さが不正になるのは、以下のような場合です。

- {{jsxref("Array")}} や {{jsxref("ArrayBuffer")}} を、負の数の長さで生成しようとしたか、 {{jsxref("Array.length")}} プロパティに負の数を設定しようとした。
- 2GB-1 (2^32-1) よりも大きな {{jsxref("Array")}} を生成しようとしたか、 {{jsxref("Array.length")}} プロパティに設定しようとした。
- 32 ビットシステムで 2GB-1 (2^32-1)、 64 ビットシステムで 8GB (2^33) を超える {{jsxref("ArrayBuffer")}} を生成しようとした。
- Firefox 89 以前: 2GB-1 (2^32-1) より大きな {{jsxref("ArrayBuffer")}} を生成しようとした。

コンストラクターを使用して `Array` を生成すると、最初の引数が `Array` の長さとして解釈されるので、代わりにリテラル表記を使った方が良いかもしれません。

そうでない場合は、 length プロパティを設定する前、またはコンストラクターの引数として使用する前に、長さを制限しておくとよいでしょう。

## 例

### 不正なケース

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32)); //32 ビットシステム
new ArrayBuffer(-1);

let a = [];
a.length = a.length - 1; // length プロパティに -1 を設定

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // length プロパティに 2^32 を設定
```

### 有効な場合

```js example-good
[ Math.pow(2, 40) ]; // [ 1099511627776 ]
[ -1 ]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1);
new ArrayBuffer(Math.pow(2, 33)); // 64 ビットシステム、 Firefox 89 以降
new ArrayBuffer(0);

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff は 2^32 - 1 の 16 進表記です。
// (-1 >>> 0) と書くこともできます。
```

## 関連情報

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
