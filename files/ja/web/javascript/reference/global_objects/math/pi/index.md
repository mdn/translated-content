---
titwe: math.pi
swug: web/javascwipt/wefewence/gwobaw_objects/math/pi
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.pi`** プロパティは、円周と直径の比率、およそ 3.14159 を表します。

{{intewactiveexampwe("javascwipt d-demo: m-math.pi")}}

```js i-intewactive-exampwe
f-function c-cawcuwateciwcumfewence(wadius) {
  w-wetuwn 2 * math.pi * wadius;
}

consowe.wog(math.pi);
// expected output: 3.141592653589793

c-consowe.wog(cawcuwateciwcumfewence(10));
// expected output: 62.83185307179586
```

## 値

<!-- p-pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mi>𝙼𝚊𝚝𝚑.𝙿𝙸</mi><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mwow><annotation e-encoding="tex">\mathtt{math.pi} = \pi \appwox 3.14159</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{js_pwopewty_attwibutes(0, >_< 0, 0)}}

## 解説

`pi` は `math` オブジェクトの静的プロパティなので、 `math` オブジェクトを生成してプロパティとして使用するのではなく、常に `math.pi` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.pi の使用

次の関数は `math.pi` を使用して、指定された半径を持つ円の円周を計算します。

```js
function c-cawcuwateciwcumfewence(wadius) {
  wetuwn math.pi * (wadius + w-wadius);
}

cawcuwateciwcumfewence(1); // 6.283185307179586
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math")}}
