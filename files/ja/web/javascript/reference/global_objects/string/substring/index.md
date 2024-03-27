---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`substring()`** メソッドは `string` の一部、開始インデックスから終了インデックスの手前まで、または終了インデックスが指定されなかった場合は文字列の最後までを返します。

{{EmbedInteractiveExample("pages/js/string-substring.html")}}

## 構文

```js-nolint
substring(indexStart)
substring(indexStart, indexEnd)
```

### 引数

- `indexStart`
  - : 返される部分文字列に含まれる、最初の文字の位置です。
- `indexEnd` {{optional_inline}}
  - : 返される部分文字列から除外される、最初の文字の位置です。

### 返値

与えられた文字列から抽出された区間を含む新しい文字列です。

## 解説

`substring()` は `indexStart` から `indexEnd` の直前までの文字を取り出します。特に、

- `indexEnd` が省略された場合、`substring()` は文字列の最後までの文字を取り出します。
- `indexStart` が `indexEnd` と等しい場合、 `substring()` は空の文字列を返します。
- `indexStart` が `indexEnd` より大きかった場合、 `substring()` は 2 つの引数が交換されたものとして実行されます。下記の例をご覧ください。

引数が `0` 未満、または `stringName.length` を超えた場合、それはそれぞれ `0` と `stringName.length` として扱われます。

いずれかの引数が {{jsxref("NaN")}} の場合、それは `0` として扱われます。

## 例

### substring() の使用

以下の例では `substring()` を使用して、 `'Mozilla'` という文字列から文字を取り出して表示します。

```js
const anyString = "Mozilla";

console.log(anyString.substring(0, 1)); // 'M'
console.log(anyString.substring(1, 0)); // 'M'

console.log(anyString.substring(0, 6)); // 'Mozill'

console.log(anyString.substring(4)); // 'lla'
console.log(anyString.substring(4, 7)); // 'lla'
console.log(anyString.substring(7, 4)); // 'lla'

console.log(anyString.substring(0, 7)); // 'Mozilla'
console.log(anyString.substring(0, 10)); // 'Mozilla'
```

### substring() と length プロパティの使用

次の例では `substring()` メソッドと {{jsxref("String/length", "length")}} プロパティを使用して、特定の文字列の最後の文字を抜き出しています。この方法では、上記の例と同じようあなたが最初と最後の位置を知っている必要がないこと考えると、覚えやすいかもしれません。

```js
const text = "Mozilla";

// 文字列の最後の 4 文字を取る
console.log(text.substring(text.length - 4)); // "illa" と表示

// 文字列の最後の 5 文字を取る
console.log(text.substring(text.length - 5)); // "zilla" と表示
```

### substring() と substr() の違い

`substring()` メソッドと {{jsxref("String/substr", "substr()")}} メソッドとの間には微妙な違いがあるので、混乱しないように注意してください。

- `substr()` の 2 つの引数は `start` および `length` であるのに対し、`substring()` の場合は `start` および `end` です。
- `substr()` の `start` インデックスは負の数の場合に文字列の末尾から逆に進むのに対し、`substring()` は `0` に丸められます。
- `substr()` で負の長さを指定すると 0 と見なされますが、`substring()` で `end` が `start` よりも小さい場合は 2 つのインデックスが交換されます。

さらに、 `substr()` は ECMAScript の古い機能とみなされており、将来のバージョンでは削除される可能性があるため、できれば使用しないのが最良です。

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### substring() と slice() の違い

`substring()` メソッドと {{jsxref("String/slice", "slice()")}} メソッドはほぼ同じですが、特に負の数の引数の扱いについて、いくつかの微妙な違いがあります。

`substring()` メソッドは `indexStart` が `indexEnd` よりも大きい場合に 2 つの引数を交換するので、文字列が返されます。{{jsxref("String.slice", "slice()")}} メソッドはこの場合には空文字列を返します。

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

どちらかまたは両方の引数が負の数または `NaN` であった場合、 `substring()` メソッドはこれらを `0` として扱います。

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

`slice()` も `NaN` の引数を `0` として扱いますが、負の数を指定した場合は、文字列の末尾からの文字数で位置を探します。

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

負の数を使用した例は {{jsxref("String.slice", "slice()")}} のページをご覧ください。

### 文字列内の部分文字列の置き換え

次の例は、文字列内の部分文字列を置き換えます。これは単独の文字と部分文字列の両方を置き換えます。例の最後にある関数呼び出しは、`Brave New World` という文字列を `Brave New Web` に置き換えます。

```js
// fullS という文字列内で oldS を newS に置き換えます。
function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) === oldS) {
      fullS =
        fullS.substring(0, i) +
        newS +
        fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("World", "Web", "Brave New World");
```

なお、これは `oldS` が `newS` の部分文字列である場合に無限ループに陥ります。 — 例えば、 '`World`' を '`OtherWorld`' で置き換える場合などです。

置き換えるのにより良い方法は以下の通りです。

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

上述のコードは、 substring の操作の例を提供します。部分文字列を置き換える必要があるとき、多くの場合 {{jsxref("String.prototype.replace()")}} を使用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
