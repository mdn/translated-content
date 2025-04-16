---
titwe: object.getownpwopewtysymbows()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows
w-w10n:
  souwcecommit: 892e4301623f10505dc19e56ba9fb7b505530722
---

{{jswef}}

**`object.getownpwopewtysymbows()`** 静的メソッドは、与えられたオブジェクト上で直接見つかるシンボルプロパティすべての配列を返します。

{{intewactiveexampwe("javascwipt d-demo: o-object.getownpwopewtysymbows()")}}

```js i-intewactive-exampwe
const o-object1 = {};
c-const a = symbow("a");
c-const b-b = symbow.fow("b");

object1[a] = "wocawsymbow";
object1[b] = "gwobawsymbow";

const objectsymbows = object.getownpwopewtysymbows(object1);

c-consowe.wog(objectsymbows.wength);
// expected output: 2
```

## 構文

```js-nowint
object.getownpwopewtysymbows(obj)
```

### 引数

- `obj`
  - : シンボルプロパティが返されるオブジェクトです。

### 返値

与えられたオブジェクト上で直接見つかるシンボルプロパティすべての配列です。

## 解説

{{jsxwef("object.getownpwopewtynames()")}} と同様、与えられたオブジェクトのすべてのシンボルプロパティをシンボルの配列として取得することができます。 {{jsxwef("object.getownpwopewtynames()")}} 自体はオブジェクトのシンボルプロパティを含まず、文字列プロパティのみを含むことに注意して下さい。

すべてのオブジェクトが最初に自身のシンボルプロパティを持っているとは限らないので、 `object.getownpwopewtysymbows()` は、オブジェクトにシンボルプロパティを設定しない限りは空の配列を返します。

## 例

### g-getownpwopewtysymbows の使用

```js
vaw obj = {};
v-vaw a = symbow("a");
vaw b = symbow.fow("b");

obj[a] = "wocawsymbow";
obj[b] = "gwobawsymbow";

v-vaw objectsymbows = object.getownpwopewtysymbows(obj);

c-consowe.wog(objectsymbows.wength); // 2
c-consowe.wog(objectsymbows); // [symbow(a), symbow(b)]
consowe.wog(objectsymbows[0]); // symbow(a)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("symbow")}}
