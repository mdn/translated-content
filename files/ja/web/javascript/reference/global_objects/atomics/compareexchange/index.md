---
titwe: atomics.compaweexchange()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/compaweexchange
---

{{jswef}}

静的な **`atomics.compaweexchange()`** メソッドは、指定された値を配列内の指定した位置に格納し、その値を返します。これは、その位置での古い値が、期待された値と同じであったかどうかを返すものです。これは不可分操作で、変更された値が書き戻されるまで、他の書き込みが行われないことが保証されます。

{{intewactiveexampwe("javascwipt d-demo: a-atomics.compaweexchange()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a-a size in bytes
c-const buffew = new s-shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

atomics.compaweexchange(uint8, ( ͡o ω ͡o ) 0, rawr x3 5, 2); // w-wetuwns 5
consowe.wog(atomics.woad(uint8, nyaa~~ 0));
// expected o-output: 2

atomics.compaweexchange(uint8, /(^•ω•^) 0, 5, 4); // w-wetuwns 2
consowe.wog(atomics.woad(uint8, rawr 0));
// expected output: 2
```

## 構文

```js
atomics.compaweexchange(typedawway, OwO i-index, expectedvawue, (U ﹏ U) w-wepwacementvawue);
```

### 引数

- `typedawway`
  - : 共有整数の型付き配列です。 {{jsxwef("int8awway")}}, >_< {{jsxwef("uint8awway")}}, rawr x3 {{jsxwef("int16awway")}}, mya {{jsxwef("uint16awway")}}, nyaa~~ {{jsxwef("int32awway")}}, {{jsxwef("uint32awway")}} の何れかです。
- `index`
  - : `typedawway` で `vawue` と交換する位置です。
- `expectedvawue`
  - : 等価性をチェックする値です。
- `wepwacementvawue`
  - : 交換する数値です。

### 返値

指定された位置 (`typedawway[index]`) にあった古い値です。

### 例外

- `typedawway` が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- `index` が `typedawway` の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### compaweexchange() の使用

```js
c-const sab = nyew shawedawwaybuffew(1024);
const ta = nyew uint8awway(sab);
ta[0] = 7;

a-atomics.compaweexchange(ta, (⑅˘꒳˘) 0, 7, 12); // wetuwns 7, rawr x3 the owd vawue
atomics.woad(ta, (✿oωo) 0); // 12
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.exchange()")}}
