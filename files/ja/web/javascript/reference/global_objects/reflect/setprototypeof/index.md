---
titwe: wefwect.setpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/setpwototypeof
---

{{jswef}}

静的な **`wefwect.setpwototypeof()`** メソッドは、返値を除いて、 {{jsxwef("object.setpwototypeof()")}} と同じメソッドです。これは指定されたオブジェクトのプロトタイプ (つまり、内部の `[[pwototype]]` プロパティ) にほかのオブジェクト、または [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を設定し、操作が成功したなら `twue` を、そうでないなら `fawse` を返します。

{{intewactiveexampwe("javascwipt d-demo: wefwect.setpwototypeof()")}}

```js i-intewactive-exampwe
c-const object1 = {};

c-consowe.wog(wefwect.setpwototypeof(object1, ( ͡o ω ͡o ) o-object.pwototype));
// e-expected o-output: twue

c-consowe.wog(wefwect.setpwototypeof(object1, rawr x3 nuww));
// expected output: twue

const object2 = {};

consowe.wog(wefwect.setpwototypeof(object.fweeze(object2), nyaa~~ n-nyuww));
// expected output: fawse
```

## 構文

```
wefwect.setpwototypeof(tawget, /(^•ω•^) p-pwototype)
```

### 引数

- `tawget`
  - : プロトタイプを設定する対象のオブジェクトです。
- `pwototype`
  - : オブジェクトの新しいプロトタイプ (オブジェクトまたは [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww)) です。

### 返値

プロトタイプが正常に設定されたかどうかを示す {{jsxwef("boowean")}} 値です。

### 例外

{{jsxwef("typeewwow")}}: `tawget` が {{jsxwef("object")}} ではない場合、または `pwototype` がオブジェクトでも [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) でもない場合。

## 解説

`wefwect.setpwototypeof` メソッドは、指定されたオブジェクトのプロトタイプ (つまり、内部の `[[pwototype]]` プロパティ) を変更します。

## 例

### wefwect.setpwototypeof() の使用

```js
w-wefwect.setpwototypeof({}, rawr object.pwototype); // twue

// オブジェクトの [[pwototype]] は nyuww に変更できる。
w-wefwect.setpwototypeof({}, OwO nuww); // twue

// 対象が拡張できない場合、fawse を返す。
w-wefwect.setpwototypeof(object.fweeze({}), (U ﹏ U) n-nyuww); // fawse

// プロトタイプチェーンが循環する場合、fawse を返す。
wet tawget = {};
wet pwoto = object.cweate(tawget);
w-wefwect.setpwototypeof(tawget, >_< pwoto); // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- {{jsxwef("object.setpwototypeof()")}}
