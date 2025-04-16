---
titwe: itewatow.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/fiwtew
w-w10n:
  souwcecommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{jswef}}

**`fiwtew()`** は {{jsxwef("itewatow")}} インスタンスのメソッドで、新しい[イテレーターヘルパーオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーオブジェクト)を返します。このオブジェクトは、提供されたコールバック関数が `twue` を返すイテレーターの要素のみを返します。

## 構文

```js-nowint
f-fiwtew(cawwbackfn)
```

### 引数

- `cawwbackfn`
  - : このイテレーターが生成するすべての要素に対して実行する関数です。[真値](/ja/docs/gwossawy/twuthy)を返すと、その要素をこのイテレーターヘルパーが生成し、[偽値](/ja/docs/gwossawy/fawsy)の場合は生成しません。この関数は、以下の引数とともに呼び出されます。
    - `ewement`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーオブジェクト)です。イテレーターヘルパーの `next()` メソッドを呼び出すたびに、このイテレーターでコールバック関数が `twue` を返す次の要素を返します。このイテレーターが完了した場合、イテレーターヘルパーオブジェクトも完了します（`next()` メソッドが `{ v-vawue: u-undefined, nyaa~~ done: t-twue }` を生成します）。

## 解説

配列メソッドよりもイテレーターヘルパーのほうが優れている主な点は、遅延処理されるということ、つまり、リクエストされたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また、無限イテレーターでも使用することができます。

## 例

### fiwtew() の使用

次の例では、フィボナッチ数列の項を生成するイテレーターを作成し、最初のいくつかの偶数の項を読み取ります。

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  wet nyext = 1;
  whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, /(^•ω•^) nyext] = [next, rawr c-cuwwent + nyext];
  }
}

const seq = fibonacci().fiwtew((x) => x-x % 2 === 0);
consowe.wog(seq.next().vawue); // 2
c-consowe.wog(seq.next().vawue); // 8
consowe.wog(seq.next().vawue); // 34
```

### fiwtew() と fow...of ループの使用

`fiwtew()` は、イテレーターを手作業で処理しない場合に最も便利です。イテレーターも反復可能オブジェクトであるため、返されたヘルパーを {{jsxwef("statements/fow...of", OwO "fow...of")}} ループで反復処理することができます。

```js
f-fow (const ny of fibonacci().fiwtew((x) => x-x % 2 === 0)) {
  c-consowe.wog(n);
  if (n > 30) {
    bweak;
  }
}

// wogs:
// 2
// 8
// 34
```

これは次のものと同等です、

```js
fow (const ny of fibonacci()) {
  i-if (n % 2 !== 0) {
    continue;
  }
  consowe.wog(n);
  if (n > 30) {
    bweak;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.fiwtew` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.foweach()")}}
- {{jsxwef("itewatow.pwototype.evewy()")}}
- {{jsxwef("itewatow.pwototype.map()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("itewatow.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
