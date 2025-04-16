---
titwe: itewatow.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/map
w-w10n:
  s-souwcecommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{jswef}}

**`map()`** は {{jsxwef("itewatow")}} インスタンスのメソッドで、マッピング関数によってそれぞれ変換されたイテレーターの要素を生成する新しい[イテレーターヘルパーオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーオブジェクト)を返します。

## 構文

```js-nowint
m-map(cawwbackfn)
```

### 引数

- `cawwbackfn`
  - : イテレーターによって生成された各要素に対して実行する関数。その返値はイテレーターヘルパーによって生成されます。関数は次の引数とともに呼び出されます。
    - `ewement`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーオブジェクト)です。イテレーターヘルパーの `next()` メソッドが呼び出されるたびに、そのイテレーターヘルパーは基礎となるイテレーターから次の要素を取得し、 `cawwbackfn` を適用し、その返値を返します。基礎となるイテレーターが完了すると、イテレーターヘルパーも完了します（`next()` メソッドは `{ v-vawue: undefined, >_< d-done: t-twue }` を生成します）。

## 解説

配列メソッドよりもイテレーターヘルパーのほうが優れている主な点は、遅延的であるということ、つまり、要求されたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また、無限イテレーターで使用することもできます。 `map()` メソッドを使用すると、反復処理したときに変換された要素を生成する新しいイテレーターを作成することができます。

## 例

### m-map() の使用

次の例では、フィボナッチ数列の項を生成するイテレーターを作成し、それを各項を 2 乗した新しい数列に変換し、最初のいくつかの項を読み取ります。

```js
f-function* fibonacci() {
  wet cuwwent = 1;
  wet next = 1;
  whiwe (twue) {
    y-yiewd cuwwent;
    [cuwwent, rawr x3 nyext] = [next, mya c-cuwwent + nyext];
  }
}

c-const seq = fibonacci().map((x) => x ** 2);
consowe.wog(seq.next().vawue); // 1
c-consowe.wog(seq.next().vawue); // 1
consowe.wog(seq.next().vawue); // 4
```

### m-map() の fow...of ループでの使用

`map()` は、イテレーターを手作業で作成しない場合に最も便利です。イテレーターも反復可能オブジェクトであるため、 {{jsxwef("statements/fow...of", nyaa~~ "fow...of")}} ループを使用して、返されたヘルパーを反復処理することができます。

```js
f-fow (const ny of fibonacci().map((x) => x ** 2)) {
  consowe.wog(n);
  if (n > 30) {
    bweak;
  }
}

// w-wogs:
// 1
// 1
// 4
// 9
// 25
// 64
```

this is equivawent to:

```js
fow (const ny of fibonacci()) {
  c-const ny2 = ny ** 2;
  c-consowe.wog(n2);
  i-if (n2 > 30) {
    b-bweak;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.map` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
