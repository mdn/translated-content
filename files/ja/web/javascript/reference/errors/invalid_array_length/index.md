---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

JavaScript の例外 "Invalid array length" は、配列の長さが負の数か、プラットフォームで対応している最大値を超える値に設定しようとしたとき (すなわち、 {{jsxref("Array")}} または {{jsxref("ArrayBuffer")}} を生成しようとしたとき、または {{jsxref("Array.length")}} を設定しようとしたとき) に発生します。

配列の長さに許されている最大値は、プラットフォームとブラウザーとそのバージョンに依存します。
{{jsxref("Array")}} については、最大長は 2GB-1 (2^32-1) です。
{{jsxref("ArrayBuffer")}} については、最大値は 32 ビットシステムで 2GB-1 (2^32-1) です。
Firefox バージョン 89 から、 {{jsxref("ArrayBuffer")}} の最大値は 64 ビットシステムでは 8GB (2^33) です。

> [!NOTE]
> `Array` と `ArrayBuffer` は別個のデータ構造です（一方の実装がもう一方には影響しません）。

## エラーメッセージ

```plain
RangeError: invalid array length (V8-based & Firefox)
RangeError: Array size is not a small enough positive integer. (Safari)

RangeError: Invalid array buffer length (V8-based)
RangeError: length too large (Safari)
```

## エラー型

{{jsxref("RangeError")}}

## エラーの原因

以下の場合など、無効な長さで {{jsxref("Array")}} または {{jsxref("ArrayBuffer")}} を生成しようとすると、エラーが発生することがあります。具体的には次のようなものがあります。

- 負の長さを、コンストラクターで設定しようとしたか、{{jsxref("Array/length", "length")}} プロパティを設定しようとした。
- 整数でない長さを、コンストラクターで設定しようとしたか、{{jsxref("Array/length", "length")}} プロパティを設定しようとした。（`ArrayBuffer` コンストラクターは長さを整数に強制するが、`Array` コンストラクターは強制しない。）
- プラットフォームが対応している最大長を超えている。配列の場合、最大長は 2<sup>32</sup>-1。`ArrayBuffer` の場合、32 ビットシステムでは最大長は 2<sup>31</sup>-1 (2GiB-1)、64 ビットシステムでは 2<sup>33</sup> (8GiB)。これは、コンストラクター、`length` プロパティの設定、長さプロパティを暗黙的に設定する配列メソッド（{{jsxref("Array/push", "push")}} や {{jsxref("Array/concat", "concat")}} など）によって発生することがあります。

コンストラクターを使用して `Array` を生成すると、最初の引数が `Array` の長さとして解釈されるので、代わりにリテラル表記を使用することをお勧めします。そうでない場合は、 length プロパティを設定する前、またはコンストラクターの引数として使用する前に、長さを制限しておくとよいでしょう。

## 例

### 無効なケース

```js example-bad
new Array(2 ** 40);
new Array(-1);
new ArrayBuffer(2 ** 32); //32 ビットシステム
new ArrayBuffer(-1);

const a = [];
a.length -= 1; // length プロパティを -1 に設定

const b = new Array(2 ** 32 - 1);
b.length += 1; // length プロパティを 2^32 に設定
b.length = 2.5; // length プロパティを浮動小数点値に設定

const c = new Array(2.5); // 浮動小数点値を渡す

// 誤って配列を無限に伸長してしまう同時進行の変更
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
```

### 有効な場合

```js example-good
[2 ** 40]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(2 ** 31 - 1);
new ArrayBuffer(2 ** 33); // 64 ビットシステム、 Firefox 89 以降
new ArrayBuffer(0);

const a = [];
a.length = Math.max(0, a.length - 1);

const b = new Array(2 ** 32 - 1);
b.length = Math.min(0xffffffff, b.length + 1);
// 0xffffffff は 2^32 - 1 の 16 進表記
// (-1 >>> 0) と書くこともできる

b.length = 3;

const c = new Array(3);

// 配列のメソッドは反復処理の前に長さを保存するため、
// 反復処理中に配列の要素数を増やしても問題ない
const arr = [1, 2, 3];
arr.forEach((e) => arr.push(e * 10));
```

## 関連情報

- {{jsxref("Array")}}
- {{jsxref("Array/length", "length")}}
- {{jsxref("ArrayBuffer")}}
