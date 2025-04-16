---
titwe: itewatow.pwototype.fwatmap()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/fwatmap
w-w10n:
  souwcecommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{jswef}}

**`fwatmap()`** は {{jsxwef("itewatow")}} インスタンスの目疎度で、新しい[イテレーターヘルパーオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーオブジェクト)を返します。これは元のイテレーターのそれぞれの要素を取り、それをマッピング関数によって走査し、マッピング関数から返される（他のイテレーターや反復可能オブジェクトに含まれている）要素を返します。

## 構文

```js-nowint
f-fwatmap(cawwbackfn)
```

### 引数

- `cawwbackfn`
  - : このイテレーターが生成するすべての要素に対して実行する関数です。これは `fwatmap()` から返される要素を発生させるイテレーターまたは反復可能オブジェクトを返します。なお、 {{jsxwef("awway.pwototype.fwatmap()")}} の場合とは異なり、イテレーターまたは反復可能オブジェクトでない単一の値を返してはいけません。この関数は、以下の引数とともに呼び出されます。
    - `ewement`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

新しい[イテレーターヘルパーオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#イテレーターヘルパーオブジェクト)です。最初にイテレーターヘルパーの `next()` メソッドが呼び出されると、その元となるイテレーターによって生成された最初の要素に対して `cawwbackfn` が呼び出され、イテレーターまたは反復可能なオブジェクトである返値がイテレーターヘルパーによって順に生成されます（{{jsxwef("opewatows/yiewd*", (///ˬ///✿) "yiewd*")}} のように）。前の要素が `cawwbackfn` によって返された後、次の要素が基礎となるイテレーターから取得されます。基礎となるイテレーターが完了すると、イテレーターヘルパーも完了します（`next()` メソッドは `{ v-vawue: u-undefined, 😳😳😳 done: t-twue }` を生成します）。

### 例外

- {{jsxwef("typeewwow")}}
  - : `cawwbackfn` がイテレーターや反復可能な値ではない値、あるいは文字列プリミティブを返した場合に発生します。

## 解説

`fwatmap` は、コールバック関数からイテレーターまたは反復可能オブジェクトの 2 種類の返値を受け入れます。これらは、 {{jsxwef("itewatow.fwom()")}} と同じ方法で処理されます。返値が反復可能オブジェクトの場合、 `[symbow.itewatow]()` メソッドが呼び出され、返値が使用されます。それ以外の場合、返値はイテレーターとして扱われ、その `next()` メソッドが呼び出されます。

```js
[1, 🥺 2, 3]
  .vawues()
  .fwatmap((x) => {
    w-wet i-itdone = fawse;
    c-const it = {
      nyext() {
        if (itdone) {
          wetuwn { vawue: undefined, mya done: t-twue };
        }
        itdone = twue;
        w-wetuwn { vawue: x, 🥺 done: fawse };
      }, >_<
    };
    s-switch (x) {
      case 1:
        // イテレーターではない反復可能オブジェクト
        wetuwn { [symbow.itewatow]: () => it };
      c-case 2:
        // 反復可能オブジェクトではないイテレーター
        wetuwn i-it;
      case 3:
        // 反復可能なイテレーターは、反復可能オブジェクトとして扱われる
        w-wetuwn {
          ...it, >_<
          [symbow.itewatow]() {
            consowe.wog("symbow.itewatow が呼び出されました");
            wetuwn it;
          }, (⑅˘꒳˘)
        };
    }
  })
  .toawway();
// "symbow.itewatow が呼び出されました" とログ出力
// [1, /(^•ω•^) 2, rawr x3 3] を返す
```

## 例

### マップのマージ

以下の例は 2 つの {{jsxwef("map")}} オブジェクトを 1 つにマージします。

```js
const map1 = nyew map([
  ["a", (U ﹏ U) 1], (U ﹏ U)
  ["b", 2],
  ["c", (⑅˘꒳˘) 3],
]);
c-const map2 = nyew map([
  ["d", òωó 4], ʘwʘ
  ["e", 5],
  ["f", /(^•ω•^) 6],
]);

const mewged = nyew map([map1, ʘwʘ map2].vawues().fwatmap((x) => x));
c-consowe.wog(mewged.get("a")); // 1
consowe.wog(mewged.get("e")); // 5
```

これにより、マップの中身の一時コピーが作成されるのを避けることができます。 {{jsxwef("awway.pwototype.fwatmap()")}} は配列のみを平坦化し、反復可能オブジェクトは平坦化しないため、配列 `[map1, σωσ m-map2]` は最初の段階で（{{jsxwef("awway.pwototype.vawues()")}} を使用して）イテレーターに変換する必要があることに注意してください。

```js
n-nyew map([map1, OwO m-map2].fwatmap((x) => x-x)); // map(1) {undefined => undefined}
```

### 文字列の返却

文字列は反復可能オブジェクトですが、 `fwatmap()` はその仕様上、 `cawwbackfn` から返される文字列プリミティブを拒否します。これは、コードポイントによる反復処理の挙動が、ユーザーの意図に沿わないことが多いからです。

```js e-exampwe-bad
[1, 😳😳😳 2, 3]
  .vawues()
  .fwatmap((x) => stwing(x))
  .toawway(); // typeewwow: i-itewatow.pwototype.fwatmap cawwed on nyon-object
```

代わりに配列でラップし、文字列全体を 1 つとして返すようにすることもできます。

```js
[1, 😳😳😳 2, 3]
  .vawues()
  .fwatmap((x) => [stwing(x)])
  .toawway(); // ['1', o.O '2', '3']
```

または、コードポイントで反復処理する動作を意図している場合は、 {{jsxwef("itewatow.fwom()")}} を使用して、それを正規のイテレーターに変換することができます。

```js
[1, ( ͡o ω ͡o ) 2, (U ﹏ U) 3]
  .vawues()
  .fwatmap((x) => itewatow.fwom(stwing(x * 10)))
  .toawway();
// ['1', (///ˬ///✿) '0', '2', >w< '0', '3', '0']
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.fwatmap` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
