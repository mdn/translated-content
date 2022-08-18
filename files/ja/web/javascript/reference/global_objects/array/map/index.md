---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/map
---
{{JSRef}}

**`map()`** メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる**新しい配列を生成します**。

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## 構文

```
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // 新しい配列の要素を返す
}[, thisArg])
```

### 引数

- `callback`

  - : `arr` の要素ごとに呼び出される関数です。 `callback` が実行されるたびに、返された値が `new_array` に追加されます。

    `callback` 関数は以下の引数を受け付けます。

    - `currentValue`
      - : 現在処理中の要素の値です。
    - `index`{{optional_inline}}
      - : 現在処理中の要素の配列内における添字です。
    - `array`{{optional_inline}}
      - : `map` が実行されている配列です。

- `thisArg`{{optional_inline}}
  - : `callback` を実行するときに `this` として使う値です。

### 返値

与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列です。

## 解説

`map` は、与えられた `callback` 関数を配列の順番通りに、**各要素に対して一度ずつ呼び出し**、その結果から新しい配列を生成します。 `callback` は、値が代入されている配列の要素に対してのみ呼び出されます ({{jsxref("undefined")}} が代入されているものも含みます)。

これは配列の中で存在しない要素、すなわち以下の要素に対しては呼び出し*ません*。

- 設定されたことがない添字
- 削除された要素
- 値を割り当てられたことがない要素

### map() を使用すべきではない場合

`map` は新しい配列を作成するので、返された配列を使わない場合、map を使うのはパターンに合いません。代わりに {{jsxref("Array/forEach", "forEach")}} または {{jsxref("Statements/for...of", "for...of")}} を使用してください。

`map` を使用するべきでないのは以下の場合です。

- 返された配列を使用しない場合
- コールバックから値を返さない場合

### 引数の詳細

`callback` は、要素の値、要素の添字、走査されている Array オブジェクトという 3 つの引数をともなって呼び出されます。

`thisArg` 引数が与えられた場合は、それがコールバックの `this` として使用されます。引数が省略された場合は、 {{jsxref("undefined")}} が `this` の値として使用されます。 `callback` によって最終的に識別できる `this` の値は、[関数における通常の `this` を決定するルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決まります。

`map` は呼び出された配列を変化させません (ただし、呼び出された `callback` が配列を変更する可能性はあります)。

`map` によって処理される要素の範囲は、 `callback` が最初に呼び出される前に設定されます。 `map` の呼び出しが開始された後に追加された要素に対しては、 `callback` は実行されません。既存の配列要素が変更されたり、削除された場合、 `callback` に渡される値は `map` がそれらを訪れた時点での値になり、 `map` が削除された要素を訪問することはありません。

仕様書で定義されているアルゴリズムによって、 `map` が呼び出された配列がまばらである場合、結果の配列もまばらとなり、要素を空欄のままにします。

## ポリフィル

`map` は ECMA-262 標準に最近追加されたものである為、標準準拠を謳う実装中に存在しない場合があります。

次のコードをスクリプトの先頭に挿入すると、 `map` にネイティブで対応していない ECMA-262 実装でも `map` を使用できるようになります。このアルゴリズムは ECMA-262 第 5 版で指示されたアルゴリズムと全く同じものです。 {{jsxref("Object")}}、{{jsxref("TypeError")}}、{{jsxref("Array")}} はそれぞれオリジナルの値を持ち、またそれらの {{jsxref("Function.prototype.call")}} のオリジナルの値として評価されます。

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
```

## 例

### 数値の配列を平方根の配列にマッピング

次のコードは、数値からなる配列を取り、それらの数値の平方根からなる新しい配列を生成します。

```js
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots の内容は [1, 2, 3] となる
// numbers の内容は [1, 4, 9] のまま
```

### map を使用して配列内のオブジェクトを再フォーマット

次のコードは、オブジェクトの配列を受け取り、新たにフォーマットされた新しい配列を生成しています。

```js
let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
})
// フォーマットされた配列の内容は [{1: 10}, {2: 20}, {3: 30}]となる

// kvArray は
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
// のまま
```

### 引数を含む関数を使用して数値配列をマッピングする

次のコードは、1 つの引数を必要とする関数を使用するときに `map` がどのように動作するかを示しています。引数は元の配列を通した `map` ループとして、配列の各要素に自動的に割り当てられます。

```js
let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
```

### 汎用的な map の使用

以下の例は、各文字を表す ASCII エンコードのバイトの配列を得るために {{jsxref("String")}} に map を使う方法を示しています。:

```js
let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})
// a の内容は [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100] となる
```

### 汎用的な map の使用: querySelectorAll

この例では、`querySelectorAll` によって収集されたオブジェクトのコレクションを反復処理する方法を示します。これは `querySelectorAll` が `NodeList` (オブジェクトの集合) を返すためです。

この場合、画面に選択されているすべての `option` の値を返します。

```js
let elems = document.querySelectorAll('select option:checked')
let values = Array.prototype.map.call(elems, function(obj) {
  return obj.value
})
```

もっと簡単な方法は {{jsxref("Array.from()")}} メソッドを使用することです。

### トリッキーな使用例

([このブログの記事に創発されました](http://www.wirfs-brock.com/allen/posts/166))

コールバック関数は第一引数 (変換するべき要素) だけを意識して指定するケースがほとんどだと思います。しかし一般的に第一引数しか使わないような関数でも、実は追加のオプション引数を受け取っている場合があります。これは混乱につながる可能性があります。

まずこの例をご覧ください。

```js
["1", "2", "3"].map(parseInt)
```

返値は `[1, 2, 3]` となりそうですが、実際には `[1, NaN, NaN]` となります。

{{jsxref("parseInt")}} は大抵一つの引数のみで使われますが、実際には二つの引数を取っています。一つ目は数値文字列、二つ目は基数です。 `Array.prototype.map` はコールバックに次の 3 つの引数を与えています。

- その要素
- その添字
- その配列

{{jsxref("parseInt")}} は三つ目の引数を無視しますが、二つ目の引数は無視*しません*。これは混乱を起こす可能性があるソースです。

繰り返し手順の正確な例は以下の通りです。

```js
// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration  (index is 0): */ parseInt("1", 0)  // 1
/*  second iteration (index is 1): */ parseInt("2", 1)  // NaN
/*  third iteration  (index is 2): */ parseInt("3", 2)  // NaN
```

解決策を考えてみましょう。

```js
function returnInt(element) {
  return parseInt(element, 10)
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// 期待した通り、数値の配列が返る。

// アロー関数構文を使って、より簡潔に上記と同じ結果を得ることが出来ます。
['1', '2', '3'].map( str => parseInt(str) )

// ちなみにこの命題ではもっと簡単に同じ結果を得る方法があります。
['1', '2', '3'].map(Number)  // [1, 2, 3]

// parseInt() とは違って、 Number() は float または (解決した) 指数表現を返します。
['1.1', '2.2e2', '3e300'].map(Number)  // [1.1, 220, 3e+300]

// 比較のために、上記の配列に parseInt() を用いると次のようになります。
['1.1', '2.2e2', '3e300'].map( str => parseInt(str) ) // [1, 2, 3]
```

{{jsxref("parseInt")}} を引数として呼び出された map メソッドの代替出力の 1 つは、次のように実行されます。

```js
let xs = ['10', '10', '10']

xs = xs.map(parseInt)

console.log(xs)
// 実際の結果 10,NaN,2 は上記の説明からすると意外なものかもしれません。
```

### undefined を持つマップされた配列

{{jsxref("undefined")}} または nothing を返すと、以下のものを返します。

```js
let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (index < 3) {
     return num
  }
})
// index は 0 から始まるので、 filterNumbers は 1,2,3 および undefined になります。
// filteredNumbers は [1, 2, undefined, undefined]
// numbers は [1, 2, 3, 4] のまま
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.map', 'Array.prototype.map')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.map")}}

## 関連情報

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map")}} object
- {{jsxref("Array.from()")}}
