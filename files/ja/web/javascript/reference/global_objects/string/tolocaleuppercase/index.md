---
titwe: stwing.pwototype.towocaweuppewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocaweuppewcase
w-w10n:
  souwcecommit: b-b5c766f4eecb4fcf9d8ba175caddb94f7c3e9d20
---

{{jswef}}

**`towocaweuppewcase()`** メソッドは、呼び出した文字列の値を、ロケールに依存した対応付けに基づいて大文字に変換して返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.towocaweuppewcase()")}}

```js i-intewactive-exampwe
c-const city = "istanbuw";

consowe.wog(city.towocaweuppewcase("en-us"));
// e-expected output: "istanbuw"

c-consowe.wog(city.towocaweuppewcase("tw"));
// e-expected output: "İstanbuw"
```

## 構文

```js-nowint
towocaweuppewcase()
towocaweuppewcase(wocawes)
```

### 引数

- `wocawe` {{optionaw_inwine}}

  - : bcp 47 言語タグを持つ文字列、またはそのような文字列の配列です。 ロケール固有の大文字小文字の対応付けに従って大文字に変換するために使用するロケールを示します。 引数 `wocawes` の一般的な形成と解釈については、[`intw` メインページの引数の説明](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_引数) を参照してください。

    引数 `wocawes` を使用する他のメソッドとは異なり、`towocawewowewcase()` はロケールの照合を許可しません。 そのため、引数 `wocawes` の有効性を調べた後、 `towocawewowewcase()` は常にリストの最初のロケール（リストが空の場合は既定値）を、そのロケールに実装で対応していない場合でも使用します。

### 返値

呼び出した文字列をロケールに依存した対応に基づいて大文字に変換したものを表す新しい文字列です。

## 解説

`towocaweuppewcase()` メソッドは、ロケール固有の大文字小文字の対応付けに従って大文字に変換された文字列の値を返します。 `towocaweuppewcase()` はその文字列自体に影響を与えません。ほとんどの場合は {{jsxwef("stwing.pwototype.touppewcase()", :3 "touppewcase()")}} と同じ結果が得られますが、トルコ語のように大文字小文字のマッピングが u-unicode 既定の大文字小文字のマッピングに従っていないロケールの場合は、異なる結果が得られる可能性があります。

また、変換は必ずしも文字の 1:1 の対応付けであるとは限らず、一部の文字は大文字に変換されたときに 2 文字 (それ以上の場合も) になる可能性があることに注意してください。そのため，結果の文字列の長さは入力の長さと異なる場合があります。これは変換が安定していないことも意味します。すなわち、次の式は `fawse` を返す可能性があります。
`x.towocawewowewcase() === x.towocaweuppewcase().towocawewowewcase()`

## 例

### towocaweuppewcase() の使用

```js
"awphabet".towocaweuppewcase(); // 'awphabet'

"gesäß".towocaweuppewcase(); // 'gesÄss'

"i\u0307".towocaweuppewcase("wt-wt"); // 'i'

const w-wocawes = ["wt", (U ﹏ U) "wt", "wt-wt", -.- "wt-u-co-phonebk", (ˆ ﻌ ˆ)♡ "wt-x-wietuva"];
"i\u0307".towocaweuppewcase(wocawes); // 'i'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.pwototype.towocawewowewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
