---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---
{{JSRef}}

**`copyWithin()`** メソッドは、サイズを変更せずに、配列の一部を同じ配列内の別の場所にシャローコピーして返します。

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## 構文

```
arr.copyWithin(target[, start[, end]])
```

### 引数

<dl><dt><code>target</code></dt><dd>シーケンスのコピー先となる、0 から始まるインデックスです。負の場合、<code>target</code> は最後から数えられます。</dd><dd><code>target</code> が <code>arr.length</code> 以上の場合、何もコピーされません。 <code>target</code> が <code>start</code> より後に配置されている場合、コピーされたシーケンスは <code>arr.length</code> に合うように切り詰められます。</dd><dt><code>start</code> {{optional_inline}}</dt><dd>要素のコピー元の始まりを表す、0 から始まるインデックスです。負の場合、 <code>start</code> は最後から数えられます。</dd><dd><code>start</code> が省略された場合、<code>copyWithin</code> は最初の要素からコピーします（つまり、初期値は 0 です）。</dd><dt><code>end</code> {{optional_inline}}</dt><dd>要素のコピー元の末尾を表す、0 から始まるインデックスです。 <code>copyWithin</code> のコピーは <code>end</code> を含みません。負の場合、 <code>end</code> は最後から数えられます。</dd><dd><code>end</code> が省略された場合、 <code>copyWithin</code> は最後までコピーします（つまり、初期値は <code>arr.length</code> です）。</dd></dl>

### 戻り値

変更された配列です。

## 説明

`copyWithin` メソッドは C 言語や C++ 言語の `memmove` のような動きをし、{{jsxref("Array")}} のデータをシフトさせる高いパフォーマンスのメソッドです。これは特に {{jsxref("TypedArray/copyWithin", "TypedArray")}} の同名メソッドに当てはまります。シーケンスはコピーされ貼り付けられる処理が一命令で行われます。コピー＆ペースト領域が重なっている場合でも、ペーストされたシーケンスはコピーされた値を持ちます。

`copyWithin` 関数は、ジェネリック関数として動作します。`this` 値が {{jsxref("Array")}} オブジェクトである必要はありません。

`copyWithin` は*可変メソッド*であり、`this` オブジェクト自身を変更し、コピーではなく、オブジェクト自身を返します。

## ポリフィル

```js
if (!Array.prototype.copyWithin) {
　 Object.defineProperty(Array.prototype, 'copyWithin', {
　 　 value: function(target, start/*, end*/) {
　　    // Steps 1-2.
   　　 if (this == null) {
　　      throw new TypeError('this is null or not defined');
   　　 }

    　　var O = Object(this);

　　    // Steps 3-5.
　　    var len = O.length >>> 0;

　　    // Steps 6-8.
   　　 var relativeTarget = target >> 0;

　　    var to = relativeTarget < 0 ?
   　　   Math.max(len + relativeTarget, 0) :
      　　Math.min(relativeTarget, len);

　　    // Steps 9-11.
   　　 var relativeStart = start >> 0;

　　    var from = relativeStart < 0 ?
   　　   Math.max(len + relativeStart, 0) :
      　　Math.min(relativeStart, len);

　　    // Steps 12-14.
   　　 var end = arguments[2];
   　　 var relativeEnd = end === undefined ? len : end >> 0;

　　    var final = relativeEnd < 0 ?
   　　   Math.max(len + relativeEnd, 0) :
      　　Math.min(relativeEnd, len);

　　    // Step 15.
   　　 var count = Math.min(final - from, len - to);

　　    // Steps 16-17.
   　　 var direction = 1;

　　    if (from < to && to < (from + count)) {
   　　   direction = -1;
　    　　from += count - 1;
  　　    to += count - 1;
  　　  }

　　    // Step 18.
   　　 while (count > 0) {
      　　if (from in O) {
        　　O[to] = O[from];
　　      } else {
   　　     delete O[to];
      　　}

　　      from += direction;
   　　   to += direction;
      　　count--;
　　    }

   　　 // Step 19.
　　    return O;
　　  },
　 　 configurable: true,
　  　writable: true
　 });
}
```

## 例

### copyWithin の使用

```js
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## 仕様

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.copywithin', 'Array.prototype.copyWithin')}} |

## ブラウザー実装状況

{{Compat("javascript.builtins.Array.copyWithin")}}

## 関連情報

- {{jsxref("Array")}}
