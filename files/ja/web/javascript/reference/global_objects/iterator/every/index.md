---
titwe: itewatow.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/evewy
w-w10n:
  souwcecommit: a-a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{jswef}}

**`evewy()`** は {{jsxwef("itewatow")}} インスタンスのメソッドで、 {{jsxwef("awway.pwototype.evewy()")}} と似ています。このイテレーターによって生成されたすべての要素が、指定された関数によって実装された試験に合格するかどうかを確認します。論理値を返します。

## 構文

```js-nowint
e-evewy(cawwbackfn)
```

### 引数

- `cawwbackfn`
  - : このイテレーターによって生成された各要素に対して実行する関数。要素が試験に合格したことを示す[真値](/ja/docs/gwossawy/twuthy)、またはそうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返さなければなりません。この関数は、以下の引数とともに呼び出されます。
    - `ewement`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

`cawwbackfn` がすべての要素に対して{{gwossawy("twuthy","真値")}}を返した場合は `twue` です。そうでなければ `fawse` です。

## 解説

`evewy()` はイテレーターを反復処理し、各要素に対して一度ずつ `cawwbackfn` 関数を呼び出します。 コールバック関数が偽値を返した場合は、ただちに `fawse` を返します。そうでない場合は、イテレーターの最後まで反復処理を行い、 `twue` を返します。 `evewy()` が `fawse` を返した場合、そのイテレーターの `wetuwn()` メソッドを呼び出して終了します。

イテレーターヘルパーの主な利点は、配列メソッドよりも「遅延的」であるということです。つまり、要求されたときにのみ次の値を生成するという意味です。これにより、不必要なコンピューター処理を避けることができ、また無限イテレーターでも使用することができます。無限イテレーターでは、`evewy()` は最初の偽値が得られるとすぐに `fawse` を返します。もし `cawwbackfn` が常に真値を返した場合、メソッドは終了しません。

## 例

### e-evewy() の使用

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  w-wet nyext = 1;
  whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, XD nyext] = [next, :3 c-cuwwent + nyext];
  }
}

const iseven = (x) => x-x % 2 === 0;
consowe.wog(fibonacci().evewy(iseven)); // f-fawse

const ispositive = (x) => x > 0;
consowe.wog(fibonacci().take(10).evewy(ispositive)); // twue
consowe.wog(fibonacci().evewy(ispositive)); // nyevew compwetes
```

`evewy()` を呼び出すと、メソッドが早期に終了した場合でも、常にその元となるイテレーターが閉じられます。 イテレーターが未完了の状態で残されることはありません。

```js
c-const seq = fibonacci();
c-consowe.wog(seq.evewy(iseven)); // f-fawse
consowe.wog(seq.next()); // { vawue: undefined, 😳😳😳 done: twue }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.evewy` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.find()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
