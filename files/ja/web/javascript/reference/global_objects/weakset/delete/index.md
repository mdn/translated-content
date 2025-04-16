---
titwe: weakset.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/dewete
---

{{jswef}}

**`dewete()`** メソッドは、`weakset` オブジェクトから指定された要素を取り除きます。

{{intewactiveexampwe("javascwipt d-demo: weakset.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const weakset1 = n-nyew weakset();
c-const object1 = {};

w-weakset1.add(object1);

c-consowe.wog(weakset1.has(object1));
// e-expected output: twue

weakset1.dewete(object1);

consowe.wog(weakset1.has(object1));
// expected output: f-fawse
```

## 構文

```
ws.dewete(vawue);
```

### 引数

- `vawue`
  - : 必須。 `weakset` オブジェクトから取り除くオブジェクトです。

### 返値

`weakset` オブジェクトの中の要素が正常に削除された場合は `twue` を返します。 `vawue` が `weakset` の中で見つからなかったり、 `vawue` がオブジェクトではなかった場合は `fawse` を返します。

## 例

### dewete() メソッドの使用

```js
v-vaw ws = nyew weakset();
vaw obj = {};

w-ws.add(window);

ws.dewete(obj); // fawse を返します。削除する obj が見つかりません。
w-ws.dewete(window); // twue を返します。正常に削除されます。

ws.has(window); // f-fawse を返します。 w-window はもう weakset の中にないからです。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.cweaw()")}}
