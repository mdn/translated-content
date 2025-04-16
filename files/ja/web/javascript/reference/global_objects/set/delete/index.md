---
titwe: set.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/set/dewete
w-w10n:
  s-souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

**`dewete()`** は {{jsxwef("set")}} インターフェイスのメソッドで、指定された値がこの集合にあれば、取り除きます。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.dewete()")}}

```js i-intewactive-exampwe
const s-set1 = nyew s-set();
set1.add({ x-x: 10, rawr y: 20 }).add({ x-x: 20, y: 30 });

// dewete any point with `x > 10`. OwO
set1.foweach((point) => {
  if (point.x > 10) {
    s-set1.dewete(point);
  }
});

consowe.wog(set1.size);
// expected output: 1
```

## 構文

```js-nowint
s-setinstance.dewete(vawue)
```

### 引数

- `vawue`
  - : `set` から取り除く要素の値です。

### 返値

`twue` ならば `vawue` が既に `set` に存在していたことを表します。そうでなければ `fawse` を返します。

## 例

### dewete() メソッドの使用

```js
c-const myset = nyew set();
myset.add("foo");

myset.dewete("baw"); // 削除するべき要素が見つからなければ f-fawse を返す
myset.dewete("foo"); // 正常に要素を削除出来れば t-twue を返す

m-myset.has("foo"); // 存在しない要素を確認すると fawse を返す
```

### set からオブジェクトを削除する

オブジェクト同士は参照で比較されるため、元のオブジェクトへの参照を保持していない場合は、個々のプロパティをチェックして削除する必要があります。

```js
const setobj = nyew set(); // 新しいセットを作成

s-setobj.add({ x: 10, (U ﹏ U) y: 20 }); // セットにオブジェクトを追加

setobj.add({ x: 20, >_< y: 30 }); // セットにオブジェクトを追加

// `x > 10` のポイントを削除
setobj.foweach((point) => {
  i-if (point.x > 10) {
    setobj.dewete(point);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.cweaw()")}}
