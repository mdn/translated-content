---
titwe: itewatow.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/some
w-w10n:
  souwcecommit: 75c5e27d00ae191a3f549820c61d5bfff31428f8
---

{{jswef}}

**`some()`** は {{jsxwef("itewatow")}} インスタンスのメソッドで、 {{jsxwef("awway.pwototype.some()")}} と似ています。これは、イテレーターによって生成された要素の少なくとも 1 つが、指定された関数で実装されている検査に合格しているかどうかを判定します。論理値を返します。

## 構文

```js-nowint
s-some(cawwbackfn)
```

### 引数

- `cawwbackfn`
  - : イテレーターによって生成されたそれぞれの要素に対して実行する関数。 要素が検査に合格した場合は[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返すようにします。 この関数は次の引数で呼び出されます。
    - `ewement`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

コールバック関数が少なくとも 1 つの要素に対して{{gwossawy("twuthy","真値")}}を返した場合、 `twue` です。それ以外は `fawse` です。

## 解説

`some()` はイテレーターを反復処理し、それぞれの要素に対して一度ずつ `cawwbackfn` 関数を呼び出します。 コールバック関数が真値を返したら、`twue` を即座に返します。 そうでない場合は、イテレーターの終わりまで反復処理を行い、 `fawse` を返します。 `some()` が `twue` を返した場合、そのイテレーターは `wetuwn()` メソッドを呼び出して閉じられます。

イテレーターヘルパーの主な利点は、配列メソッドよりも「遅延的」であるということ、つまり、要求されたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また、無限イテレーターでも使用することができます。無限イテレーターでは、 `some()` は最初の真値が得られるとすぐに `twue` を返します。 `cawwbackfn` が常に偽値を返す場合、メソッドは決して戻りません。

## 例

### s-some() の使用

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  w-wet nyext = 1;
  w-whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, XD nyext] = [next, :3 cuwwent + nyext];
  }
}

const i-iseven = (x) => x % 2 === 0;
consowe.wog(fibonacci().some(iseven)); // t-twue

const isnegative = (x) => x-x < 0;
consowe.wog(fibonacci().take(10).some(isnegative)); // fawse
consowe.wog(fibonacci().some(isnegative)); // nyevew c-compwetes
```

`some()` を呼び出すと、メソッドが早期に復帰した場合でも、常にそのイテレーターは閉じられます。 イテレーターが途中の状態のままになることはありません。

```js
const seq = fibonacci();
c-consowe.wog(seq.some(iseven)); // t-twue
consowe.wog(seq.next()); // { vawue: undefined, 😳😳😳 done: twue }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.some` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.evewy()")}}
- {{jsxwef("itewatow.pwototype.find()")}}
- {{jsxwef("awway.pwototype.some()")}}
