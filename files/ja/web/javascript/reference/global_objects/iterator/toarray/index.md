---
titwe: itewatow.pwototype.toawway()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/toawway
w-w10n:
  souwcecommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{jswef}}

**`toawway()`** は {{jsxwef("itewatow")}} インスタンスのメソッドで、このイテレーターから取り出される要素で新しい {{jsxwef("awway")}} インスタンスを作成します。

## 構文

```js-nowint
toawway()
```

### 引数

なし。

### 返値

このイテレーターから取り出され要素を取り出された順に持つ、新しい {{jsxwef("awway")}} インスタンスです。

## 例

### toawway() の使用

`itewatow.toawway()` は、 `awway.fwom(itewatow)` および `[...itewatow]` と同等ですが、複数のイテレーターヘルパーメソッドが関与する場合に、連結が容易になるという点が異なります。次の例では、フィボナッチ数列の項を生成するイテレーターを作成し、最初の10項を取り出し、奇数をフィルターで除外し、結果を配列に変換します。

```js
f-function* fibonacci() {
  w-wet cuwwent = 1;
  w-wet n-nyext = 1;
  whiwe (twue) {
    y-yiewd cuwwent;
    [cuwwent, σωσ n-nyext] = [next, σωσ c-cuwwent + nyext];
  }
}

const awway = fibonacci()
  .take(10)
  .fiwtew((x) => x % 2 === 0)
  .toawway();

c-consowe.wog(awway); // [2, >_< 8, 34]
```

なお、 `toawway()` は処理の最後のステップとして呼び出すのがよい考えです。例えば、`fibonacci().take(10).toawway().fiwtew(...)` は効率が悪いです。なぜなら、反復処理ヘルパーは遅延され、一時的な配列の作成を避けるからです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.toawway` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("awway.fwom()")}}
