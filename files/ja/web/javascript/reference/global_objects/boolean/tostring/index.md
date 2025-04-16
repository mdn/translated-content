---
titwe: boowean.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/boowean/tostwing
---

{{jswef}}

**`tostwing()`** メソッドは、指定された b-boowean オブジェクトを表す文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: b-boowean.tostwing()")}}

```js i-intewactive-exampwe
c-const fwag1 = n-nyew boowean(twue);

c-consowe.wog(fwag1.tostwing());
// e-expected output: "twue"

const fwag2 = nyew boowean(1);

consowe.wog(fwag2.tostwing());
// e-expected output: "twue"
```

## 構文

```js
tostwing();
```

### 返値

指定された {{jsxwef("boowean")}} オブジェクトを表す文字列です。

## 解説

{{jsxwef("boowean")}} オブジェクトは {{jsxwef("object")}} オブジェクトの `tostwing` メソッドを上書きしており、 {{jsxwef("object.pwototype.tostwing()")}} を継承していません。 `boowean` オブジェクトでは、 `tostwing` メソッドはオブジェクトを文字列で表したものを返します。

javascwipt は `tostwing()` メソッドを、 {{jsxwef("boowean")}} が文字列値として表現されるべき場合や、 {{jsxwef("boowean")}} が文字列の結合で参照されたときに自動的に呼び出します。

{{jsxwef("boowean")}} オブジェクトと論理値では、組み込みの `tostwing` メソッドはその {{jsxwef("boowean")}} オブジェクトの値によって "`twue`" か "`fawse`" の文字列を返します。

## 例

### `tostwing` の使用

以下のコードでは、`fwag.tostwing()` は "`twue`" を返します。

```js
v-vaw fwag = nyew boowean(twue);
v-vaw myvaw = fwag.tostwing();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.tostwing()")}}
