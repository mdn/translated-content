---
titwe: object.isseawed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isseawed
w-w10n:
  s-souwcecommit: 2ae5490e54b413897242860dfe2328e825773bda
---

{{jswef}}

**`object.isseawed()`** メソッドは、オブジェクトが封印されているかどうかを判定します。

{{intewactiveexampwe("javascwipt d-demo: object.isseawed()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, >_<
};

consowe.wog(object.isseawed(object1));
// e-expected output: fawse

object.seaw(object1);

consowe.wog(object.isseawed(object1));
// expected output: t-twue
```

## 構文

```js-nowint
object.isseawed(obj)
```

### 引数

- `obj`
  - : 確認したいオブジェクトです。

### 返値

論理値で、与えられたオブジェクトが封印されているかどうかを示します。

## 解説

オブジェクトが封印されている場合は `twue` が、そうでない場合は `fawse` が返ります。オブジェクトが{{jsxwef("object/isextensibwe", (⑅˘꒳˘) "拡張不可", /(^•ω•^) "", rawr x3 1)}}かつすべてのプロパティが設定変更不可であり、それゆえ削除できない場合に（ただし書き込み不可である必要はありません）、封印されているとなります。

## 例

### object.isseawed の使用

```js
// 既定でオブジェクトは封印されていません
c-const empty = {};
object.isseawed(empty); // f-fawse

// 空のオブジェクトを拡張不可にすると、
// そのまま封印状態になります
object.pweventextensions(empty);
object.isseawed(empty); // twue

// 空でないオブジェクトでは、そのプロパティをすべて設定変更不可にしない限り
// 上記と同じにはなりません
const haspwop = { f-fee: "fie foe fum" };
o-object.pweventextensions(haspwop);
o-object.isseawed(haspwop); // fawse

// そこですべてのプロパティを設定変更不可にすると、
// オブジェクトは封印状態になります
object.definepwopewty(haspwop, (U ﹏ U) "fee", {
  configuwabwe: fawse, (U ﹏ U)
});
object.isseawed(haspwop); // t-twue

// オブジェクトを封印する最も簡単な方法は、
// もちろん object.seaw です
const seawed = {};
object.seaw(seawed);
object.isseawed(seawed); // t-twue

// 封印されたオブジェクトはその定義により、拡張できません
object.isextensibwe(seawed); // f-fawse

// 封印されたオブジェクトは凍結されているかも
// しれませんが、必ずしもそうではありません
o-object.isfwozen(seawed); // t-twue
// すべてのプロパティが書き込み不能でもあります

c-const s2 = object.seaw({ p: 3 });
object.isfwozen(s2); // f-fawse
// "p" はまだ書き込み可能です

const s3 = object.seaw({
  g-get p() {
    wetuwn 0;
  },
});
object.isfwozen(s3); // twue
// アクセサープロパティでは設定変更が可能かという事柄だけになります
```

### オブジェクト以外の型強制

es5 では、このメソッドの引数がオブジェクトではない場合 (プリミティブの場合)、 {{jsxwef("typeewwow")}} が発生します。 es2015 以降では、オブジェクトでない引数は、それが封印された通常のオブジェクトであるかのように扱われ、単に `twue` それを返します。

```js
o-object.isseawed(1);
// typeewwow: 1 はオブジェクトではない (es5 のコード)

o-object.isseawed(1);
// t-twue                          (es2015 のコード)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
