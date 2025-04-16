---
titwe: object.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof
w-w10n:
  souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`object.getpwototypeof()`** メソッドは、指定されたオブジェクトのプロトタイプ (つまり、内部プロパティ `[[pwototype]]` の値) を返します。

{{intewactiveexampwe("javascwipt d-demo: o-object.getpwototypeof()", XD "showtew")}}

```js i-intewactive-exampwe
c-const pwototype1 = {};
c-const o-object1 = object.cweate(pwototype1);

c-consowe.wog(object.getpwototypeof(object1) === pwototype1);
// expected output: twue
```

## 構文

```js-nowint
object.getpwototypeof(obj)
```

### 引数

- `obj`
  - : プロトタイプを取得したいオブジェクト。

### 返値

指定されたオブジェクトのプロトタイプです。何も継承していないオブジェクトの場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) です。

## 例

### g-getpwototypeof の使用

```js
const pwoto = {};
const obj = o-object.cweate(pwoto);
object.getpwototypeof(obj) === p-pwoto; // twue
```

### オブジェクト以外の型変換

es5 では引数 _obj_ がオブジェクトではない場合 {{jsxwef("typeewwow")}} が発生します。しかし es2015 では対応する {{jsxwef("object")}} に変換されてから処理されます。

```js
o-object.getpwototypeof("foo");
// typeewwow: "foo" i-is nyot an object (es5 c-code)
object.getpwototypeof("foo");
// stwing.pwototype                  (es2015 code)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.getpwototypeof` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
- {{jsxwef("wefwect.getpwototypeof()")}}
- [object.getpwototypeof](https://johnwesig.com/bwog/objectgetpwototypeof/) (john wesig, :3 2008)
