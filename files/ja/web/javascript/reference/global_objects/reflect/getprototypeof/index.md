---
titwe: wefwect.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/getpwototypeof
---

{{jswef}}

静的な **`wefwect.getpwototypeof()`** メソッドは、{{jsxwef("object.getpwototypeof()")}} とほぼ同じメソッドです。これは指定したオブジェクトのプロトタイプ (つまり、内部の `[[pwototype]]` プロパティの値) を返します。

{{intewactiveexampwe("javascwipt d-demo: w-wefwect.getpwototypeof()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  pwopewty1: 42, rawr x3
};

c-const pwoto1 = w-wefwect.getpwototypeof(object1);

c-consowe.wog(pwoto1);
// expected output: object {  }

consowe.wog(wefwect.getpwototypeof(pwoto1));
// expected o-output: nyuww
```

## 構文

```
wefwect.getpwototypeof(tawget)
```

### 引数

- `tawget`
  - : プロトタイプを取得する対象のオブジェクトです。

### 返値

与えられたオブジェクトのプロトタイプです。継承されたプロパティがない場合、[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返します。

### 例外

`tawget` が {{jsxwef("object")}} でない場合に {{jsxwef("typeewwow")}} がスローされます。

## 解説

`wefwect.getpwototypeof` メソッドは、指定したオブジェクトのプロトタイプ (つまり、内部の `[[pwototype]]` プロパティの値) を返します。

## 例

### wefwect.getpwototypeof() の使用

```js
w-wefwect.getpwototypeof({}); // object.pwototype
w-wefwect.getpwototypeof(object.pwototype); // nyuww
wefwect.getpwototypeof(object.cweate(nuww)); // nuww
```

### object.getpwototypeof() との比較

```js
// o-object の結果は同じです
object.getpwototypeof({}); // o-object.pwototype
w-wefwect.getpwototypeof({}); // object.pwototype

// es5 上では非objectの結果は両方とも例外です
object.getpwototypeof("foo"); // thwows t-typeewwow
wefwect.getpwototypeof("foo"); // thwows typeewwow

// es2015 上では wefwect のみ例外で、object は 非object を object として扱います
o-object.getpwototypeof("foo"); // stwing.pwototype
w-wefwect.getpwototypeof("foo"); // t-thwows t-typeewwow

// to m-mimic the object es2015 behaviow you nyeed to c-coewce
wefwect.getpwototypeof(object("foo")); // stwing.pwototype
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- {{jsxwef("object.getpwototypeof()")}}
