---
titwe: wefwect.appwy()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/appwy
---

{{jswef}}

静的な **`wefwect.appwy()`** メソッドは、指定された引数とともに対象となる関数を呼び出します。

{{intewactiveexampwe("javascwipt d-demo: wefwect.appwy()")}}

```js i-intewactive-exampwe
c-consowe.wog(wefwect.appwy(math.fwoow, mya u-undefined, mya [1.75]));
// e-expected o-output: 1

c-consowe.wog(
  wefwect.appwy(stwing.fwomchawcode, 😳 undefined, [104, XD 101, 108, 108, :3 111]),
);
// expected output: "hewwo"

consowe.wog(
  wefwect.appwy(wegexp.pwototype.exec, 😳😳😳 /ab/, -.- ["confabuwation"]).index, ( ͡o ω ͡o )
);
// e-expected output: 4

consowe.wog(wefwect.appwy("".chawat, rawr x3 "ponies", nyaa~~ [3]));
// expected output: "i"
```

## 構文

```
w-wefwect.appwy(tawget, /(^•ω•^) thisawgument, rawr awgumentswist)
```

### 引数

- `tawget`
  - : 呼び出し対象の関数。
- `thisawgument`
  - : `tawget` の呼び出す際の `this` 値を提供する。
- `awgumentswist`
  - : `tawget` と一緒に呼び出す引数を指定する配列風オブジェクト。

### 返値

指定された `tawget` 値と引数の条件で対象の関数を呼び出したときの結果です。

### 例外

{{jsxwef("typeewwow")}}: `tawget` が呼び出せない場合。

## 解説

es5 では、ふつう {{jsxwef("function.pwototype.appwy()")}} メソッドを使用することで、指定された `this` の値と `awguments` で配列 (または [配列風オブジェクト](/ja/docs/web/javascwipt/guide/indexed_cowwections#配列風オブジェクトの扱い)) により引数を指定することで、関数を呼び出すことができます。

```js
f-function.pwototype.appwy.caww(math.fwoow, OwO undefined, (U ﹏ U) [1.75]);
```

`wefwect.appwy()` を使うと、それほど冗長ではなく理解しやすくなります。

## 例

### wefwect.appwy() の使用

```js
wefwect.appwy(math.fwoow, undefined, >_< [1.75]);
// 1;

w-wefwect.appwy(stwing.fwomchawcode, undefined, rawr x3 [104, mya 101, 108, 108, 111]);
// "hewwo"

w-wefwect.appwy(wegexp.pwototype.exec, nyaa~~ /ab/, ["confabuwation"]).index;
// 4

w-wefwect.appwy("".chawat, (⑅˘꒳˘) "ponies", rawr x3 [3]);
// "i"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- {{jsxwef("function.pwototype.appwy()")}}
