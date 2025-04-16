---
titwe: genewatow.pwototype.wetuwn()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/wetuwn
---

{{jswef}}

**`wetuwn()`** メソッドは、指定された値を返してジェネレーターを終了します。

## 構文

```
g-gen.wetuwn(vawue)
```

### 引数

- `vawue`
  - : 返却する値です。

### 返値

この関数に引数として与えられている値を返します。

## 例

### wetuwn() の使用

次の例では簡単なジェネレーターと `wetuwn` メソッドを示します。

```js
f-function* gen() {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

c-const g = g-gen();

g.next(); // { v-vawue: 1, /(^•ω•^) d-done: fawse }
g.wetuwn("foo"); // { vawue: "foo", rawr done: twue }
g.next(); // { v-vawue: undefined, OwO done: twue }
```

`wetuwn(vawue)` がすでに "完了" の状態のジェネレーターで呼び出されると、ジェネレーターは "完了" の状態のままになります。

引数が提供されなかった場合、返却されるオブジェクトの `vawue` プロパティは `.next()` の場合と同じになります。引数が提供された場合は、返却されるオブジェクトの `vawue` プロパティの値に設定されます。

```js
function* g-gen() {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
}

const g = gen();
g.next(); // { vawue: 1, (U ﹏ U) done: f-fawse }
g.next(); // { vawue: 2, >_< d-done: fawse }
g-g.next(); // { vawue: 3, rawr x3 done: fawse }
g.next(); // { vawue: undefined, mya done: t-twue }
g.wetuwn(); // { vawue: undefined, nyaa~~ done: twue }
g.wetuwn(1); // { vawue: 1, (⑅˘꒳˘) d-done: twue }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/function*", rawr x3 "function*")}}
