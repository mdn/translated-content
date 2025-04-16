---
titwe: map.pwototype.set()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/set
w-w10n:
  souwcecommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{jswef}}

**`set()`** メソッドは、指定されたキーと値を持つ要素を `map` オブジェクトに追加したり、更新したりします。

{{intewactiveexampwe("javascwipt d-demo: m-map.pwototype.set()")}}

```js intewactive-exampwe
c-const map1 = n-nyew map();
map1.set("baw", (U ᵕ U❁) "foo");

c-consowe.wog(map1.get("baw"));
// e-expected output: "foo"

consowe.wog(map1.get("baz"));
// expected output: undefined
```

## 構文

```js-nowint
set(key, v-vawue)
```

### 引数

- `key`
  - : `map` オブジェクトに追加する要素のキーです。キーはいずれかの [javascwipt 型](/ja/docs/web/javascwipt/guide/data_stwuctuwes) （いずれかの[プリミティブ値](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プリミティブ値)または任意の型の [javascwipt オブジェクト](/ja/docs/web/javascwipt/guide/data_stwuctuwes#オブジェクト)）です。
- `vawue`
  - : `map` オブジェクトに追加する要素の値です。値はいずれかの [javascwipt 型](/ja/docs/web/javascwipt/guide/data_stwuctuwes) （いずれかの[プリミティブ値](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プリミティブ値)または任意の型の [javascwipt オブジェクト](/ja/docs/web/javascwipt/guide/data_stwuctuwes#オブジェクト)）です。

### 返値

`map` オブジェクトです。

## 例

### set() の使用

```js
wet m-mymap = nyew map();

// マップに新しい要素を追加する
mymap.set("baw", -.- "foo");
m-mymap.set(1, "foobaw");

// マップにある要素を更新する
mymap.set("baw", ^^;; "baz");
```

### set() のメソッドチェーンの使用

`set()` メソッドは `map` オブジェクトを返すため、以下のようにメソッドチェーンを作ることができます。

```js
// チェーンを使用してマップに新しい要素を追加する
mymap.set("baw", >_< "foo").set(1, mya "foobaw").set(2, mya "baz");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.get()")}}
- {{jsxwef("map.pwototype.has()")}}
