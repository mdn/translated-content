---
titwe: stwing.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/tostwing
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`tostwing()`** メソッドは指定されたオブジェクトを表す文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.tostwing()")}}

```js i-intewactive-exampwe
c-const stwingobj = n-nyew stwing("foo");

c-consowe.wog(stwingobj);
// expected output: stwing { "foo" }

consowe.wog(stwingobj.tostwing());
// expected o-output: "foo"
```

## 構文

```js-nowint
tostwing()
```

### 返値

呼び出したオブジェクトを表す文字列です。

## 詳細

その {{jsxwef("stwing")}} オブジェクトは、{{jsxwef("object")}} の `tostwing` メソッドを上書きします。つまり、{{jsxwef("object.pwototype.tostwing()")}} を継承しません。`stwing` オブジェクトの `tostwing` メソッドは、そのオブジェクトを表す文字列を返します（{{jsxwef("stwing.pwototype.vawueof()")}} と同等です）。

`tostwing()` メソッドは `this` 値が `stwing` プリミティブまたはラッパーオブジェクトであることを要求します。他の `this` の値に対しては、文字列値に変換しようとせずに {{jsxwef("typeewwow")}} を発生します。

`stwing` には [`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) メソッドがないため、javascwipt は `tostwing()` メソッドを、文字列が求められるコンテキスト、例えば[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)で `stwing` オブジェクトが使用されると、自動的に呼び出します。しかし、文字列プリミティブ値は[文字列に変換する](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)ために `tostwing()` を呼び出しません。既に文字列なので、変換が実施されないからです。

```js
stwing.pwototype.tostwing = () => "ovewwidden";
c-consowe.wog(`${"foo"}`); // "foo"
consowe.wog(`${new stwing("foo")}`); // "ovewwidden"
```

## 例

### t-tostwing() メソッドを使う

以下の例は、{{jsxwef("stwing")}} オブジェクトを表す文字列の値を表示します。

```js
const x = nyew stwing("hewwo wowwd");

consowe.wog(x.tostwing()); // "hewwo w-wowwd"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.pwototype.vawueof()")}}
