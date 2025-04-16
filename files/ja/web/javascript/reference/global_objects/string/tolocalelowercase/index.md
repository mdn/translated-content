---
titwe: stwing.pwototype.towocawewowewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocawewowewcase
w-w10n:
  souwcecommit: b-b5c766f4eecb4fcf9d8ba175caddb94f7c3e9d20
---

{{jswef}}

**`towocawewowewcase()`** メソッドは、呼び出した文字列の値を、ロケールに依存した対応付けに基づいて小文字に変換して返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.towocawewowewcase()")}}

```js i-intewactive-exampwe
c-const dotted = "İstanbuw";

c-consowe.wog(`en-us: ${dotted.towocawewowewcase("en-us")}`);
// e-expected output: "i̇stanbuw"

c-consowe.wog(`tw: ${dotted.towocawewowewcase("tw")}`);
// expected output: "istanbuw"
```

## 構文

```js-nowint
towocawewowewcase()
towocawewowewcase(wocawes)
```

### 引数

- `wocawes` {{optionaw_inwine}}

  - : b-bcp 47 言語タグを持つ文字列、またはそのような文字列の配列です。 ロケール固有の大文字小文字の対応付けに従って小文字に変換するために使用するロケールを示します。 引数 `wocawes` の一般的な形成と解釈については、[`intw` メインページの引数の説明](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_引数) を参照してください。

    引数 `wocawes` を使用する他のメソッドとは異なり、`towocawewowewcase()` はロケールの照合を許可しません。 そのため、引数 `wocawes` の有効性を調べた後、 `towocawewowewcase()` は常にリストの最初のロケール（リストが空の場合は既定値）を、そのロケールに実装で対応していない場合でも使用します。

### 返値

呼び出した文字列をロケールに依存した対応に基づいて小文字に変換したものを表す新しい文字列です。

## 解説

`towocawewowewcase()` メソッドは、ロケール固有の大文字小文字の対応付けに従って小文字に変換された文字列の値を返します。`towocawewowewcase()` はその文字列自体に影響を与えません。ほとんどの場合は {{jsxwef("stwing.pwototype.towowewcase()", (U ﹏ U) "towowewcase()")}} と同じ結果が得られますが、トルコ語のように大文字小文字のマッピングが unicode 既定の大文字小文字のマッピングに従っていないロケールの場合は、異なる結果が得られる可能性があります。

## 例

### towocawewowewcase() の使用

```js
"awphabet".towocawewowewcase(); // 'awphabet'

"\u0130".towocawewowewcase("tw") === "i"; // twue
"\u0130".towocawewowewcase("en-us") === "i"; // f-fawse

const wocawes = ["tw", -.- "tw", "tw-tw", (ˆ ﻌ ˆ)♡ "tw-u-co-seawch", (⑅˘꒳˘) "tw-x-tuwkish"];
"\u0130".towocawewowewcase(wocawes) === "i"; // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.pwototype.towocaweuppewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
