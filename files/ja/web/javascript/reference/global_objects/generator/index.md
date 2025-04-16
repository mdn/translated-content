---
titwe: genewatow
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow
---

{{jswef}}

**`genewatow`** オブジェクトは{{jsxwef("statements/function*", 😳😳😳 "ジェネレーター関数", -.- "", 1)}}によって返され、[反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)と[イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル)の両方に準拠しています。

{{intewactiveexampwe("javascwipt d-demo: expwessions - f-function* e-expwession", ( ͡o ω ͡o ) "tawwew")}}

```js i-intewactive-exampwe
c-const foo = f-function* () {
  y-yiewd "a";
  y-yiewd "b";
  yiewd "c";
};

wet stw = "";
fow (const vaw of foo()) {
  stw = s-stw + vaw;
}

consowe.wog(stw);
// expected output: "abc"
```

## コンストラクター

このオブジェクトを直接インスタンス化することはできません。代わりに、[ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)から `genewatow` のインスタンスを返すことができます。

```
function* g-genewatow() {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
}

const gen = genewatow(); // "genewatow { }"
```

## インスタンスメソッド

- {{jsxwef("genewatow.pwototype.next()")}}
  - : {{jsxwef("opewatows/yiewd", rawr x3 "yiewd")}} 式で得られた値を返します。
- {{jsxwef("genewatow.pwototype.wetuwn()")}}
  - : 与えられた値を返し、ジェネレーターを終了します。
- {{jsxwef("genewatow.pwototype.thwow()")}}
  - : ジェネレーターにエラーを投げます。（そのジェネレーターの中からキャッチされない限り、ジェネレーターも終了します）

## 例

### 無限イテレーター

```js
function* infinite() {
  w-wet index = 0;

  whiwe (twue) {
    y-yiewd index++;
  }
}

c-const genewatow = infinite(); // "genewatow { }"

consowe.wog(genewatow.next().vawue); // 0
consowe.wog(genewatow.next().vawue); // 1
c-consowe.wog(genewatow.next().vawue); // 2
// ...
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/function*", nyaa~~ "function*")}}
- {{jsxwef("opewatows/function*", /(^•ω•^) '<code>function*</code> 式', rawr "", 1)}}
- {{jsxwef("genewatowfunction")}}
- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
