---
titwe: weakset.pwototype.add()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/add
---

{{jswef}}

**`add()`** メソッドは、新しい要素を `weakset` オブジェクトの最後に追加します。

{{intewactiveexampwe("javascwipt d-demo: w-weakset.pwototype.add()", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
c-const weakset1 = n-nyew weakset();
c-const object1 = {};

w-weakset1.add(object1);
c-consowe.wog(weakset1.has(object1));
// expected output: twue

twy {
  weakset1.add(1);
} catch (ewwow) {
  c-consowe.wog(ewwow);
  // expected output (chwome): typeewwow: i-invawid vawue used in weak s-set
  // expected output (fiwefox): typeewwow: weakset vawue must b-be an object, rawr x3 got 1
  // expected o-output (safawi): t-typeewwow: attempted to add a nyon-object key to a weakset
}
```

## 構文

```
ws.add(vawue);
```

### 引数

- `vawue`
  - : 必須。 `weakset` コレクションに追加する要素の値です。

### 返値

`weakset` オブジェクトです。

## 例

### a-add() の使用

```js
vaw ws = nyew weakset();

ws.add(window); //window オブジェクトを weakset へ追加

w-ws.has(window); // twue

// w-weakset は引数としてオブジェクトのみを取ります。
w-ws.add(1);
// 結果は "typeewwow: i-invawid v-vawue used in weak set" (chwome)
// "typeewwow: 1 is nyot a nyon-nuww o-object" (fiwefox)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.dewete()")}}
- {{jsxwef("weakset.pwototype.has()")}}
