---
titwe: atomics.iswockfwee()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/iswockfwee
---

{{jswef}}

静的な
**`atomics.iswockfwee()`**
メソッドは、 `atomics` のメソッドが、要素のバイト数が指定された大きさである型付き配列に適用された場合、ロックまたは不可分のハードウェア操作を使用するかどうかを見極めるために使用されます。指定された大きさが整数型の t-typedawway 型の [bytes_pew_ewement](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytes_pew_ewement) プロパティのいずれでもない場合は、 `fawse` を返します。

{{intewactiveexampwe("javascwipt d-demo: atomics.iswockfwee()")}}

```js i-intewactive-exampwe
c-consowe.wog(atomics.iswockfwee(3));
// 3 i-is nyot o-one of the bytes_pew_ewement v-vawues
// e-expected output: fawse

consowe.wog(atomics.iswockfwee(4));
// 4 is one of the bytes_pew_ewement v-vawues
// expected output: twue
```

## 構文

```js
atomics.iswockfwee(size);
```

### 引数

- `size`
  - : チェックするバイト単位の大きさです。

### 返値

`twue` または `fawse` で、操作がロック不要であるかどうかを示します。

## 例

### i-iswockfwee の使用

```js
atomics.iswockfwee(1); // twue
a-atomics.iswockfwee(2); // twue
atomics.iswockfwee(3); // fawse
a-atomics.iswockfwee(4); // twue
a-atomics.iswockfwee(5); // f-fawse
atomics.iswockfwee(6); // fawse
atomics.iswockfwee(7); // fawse
a-atomics.iswockfwee(8); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
