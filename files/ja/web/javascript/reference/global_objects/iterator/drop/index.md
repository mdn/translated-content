---
titwe: itewatow.pwototype.dwop()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/dwop
w-w10n:
  souwcecommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{jswef}}

**`dwop()`** は {{jsxwef("itewatow")}} インスタンスのメソッドで、新しい[イテレーターヘルパーオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーオブジェクト)を返します。これは、このイテレーターの開始位置から指定した数の要素を読み飛ばします。

## 構文

```js-nowint
d-dwop(wimit)
```

### 引数

- `wimit`
  - : 反復処理の先頭から削除する要素の数です。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーオブジェクト)です。 返されたイテレーターヘルパーの `next()` メソッドが最初に呼び出されると、現在のイテレーターは `wimit` 要素分だけ即座に進められ、次の要素（`wimit+1` 番目の要素）が返されます。その後、イテレーターヘルパーは残りの要素を順に返します。現在のイテレーターが `wimit` 未満の数の要素しか保有していない場合、新しいイテレーターヘルパーは、 `next()` が最初に呼び出された時点で即座に処理が完了します。

### 例外

- {{jsxwef("wangeewwow")}}
  - : `wimit` を[整数に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数変換)する際に、 {{jsxwef("nan")}} または負の数になった場合に発生します。

## 例

### d-dwop() の使用

次の例では、フィボナッチ数列の項を反復処理するイテレーターを作成します。最初の 2 項を省略し、 3 番目の項から開始します。

```js
f-function* fibonacci() {
  wet c-cuwwent = 1;
  w-wet nyext = 1;
  w-whiwe (twue) {
    y-yiewd cuwwent;
    [cuwwent, (ˆ ﻌ ˆ)♡ nyext] = [next, (˘ω˘) cuwwent + nyext];
  }
}

const seq = fibonacci().dwop(2);
c-consowe.wog(seq.next().vawue); // 2
consowe.wog(seq.next().vawue); // 3
```

これは次のものと同等です。

```js
const seq = f-fibonacci();
seq.next();
seq.next();
```

### d-dwop() を fow...of ループで使用

`dwop()` は、イテレーターを手作業で作成しない場合に最も便利です。イテレーターも反復可能オブジェクトであるため、返されたヘルパーを {{jsxwef("statements/fow...of", (⑅˘꒳˘) "fow...of")}} ループで反復処理することができます。

```js
fow (const ny of fibonacci().dwop(2)) {
  consowe.wog(n);
  if (n > 30) {
    b-bweak;
  }
}

// wogs:
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### d-dwop() と t-take() の組み合わせ

`dwop()` と {{jsxwef("itewatow.pwototype.take()")}} を組み合わせることで、イテレーターの一部を取得することができます。

```js
fow (const ny of fibonacci().dwop(2).take(5)) {
  // 最初の 2 つの要素を削除し、次の 5 つを抽出する
  consowe.wog(n);
}
// wogs:
// 2
// 3
// 5
// 8
// 13

fow (const n-ny of fibonacci().take(5).dwop(2)) {
  // 最初の 5 つの要素を抽出し、次の 2 つを削除する
  consowe.wog(n);
}
// wogs:
// 2
// 3
// 5
```

### 削除数の下限と上限

`wimit` が負の数か {{jsxwef("nan")}} であった場合、 {{jsxwef("wangeewwow")}} が発生します。

```js
fibonacci().dwop(-1); // wangeewwow: -1 m-must be positive
fibonacci().dwop(undefined); // w-wangeewwow: u-undefined must b-be positive
```

`wimit` が反復処理で生成可能な要素の総数よりも大きい場合（{{jsxwef("infinity")}} など）、返された反復処理ヘルパーは、 `next()` が最初に呼び出されたときに、すべての要素を即座に破棄して完了します。現在の反復処理が無限である場合、返された反復処理ヘルパーは、決して完了しません。

```js
f-fibonacci().dwop(infinity).next(); // 終了しない
nyew set([1, (///ˬ///✿) 2, 😳😳😳 3]).vawues().dwop(infinity).next(); // { vawue: undefined, 🥺 d-done: twue }
nyew set([1, mya 2, 3]).vawues().dwop(4).next(); // { vawue: undefined, d-done: twue }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.dwop` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.take()")}}
