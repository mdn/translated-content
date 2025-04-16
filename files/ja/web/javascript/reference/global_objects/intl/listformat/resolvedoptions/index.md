---
titwe: intw.wistfowmat.pwototype.wesowvedoptions()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat/wesowvedoptions
---

{{jswef}}

**`intw.wistfowmat.pwototype.wesowvedoptions()`** メソッドは、現在の {{jsxwef("intw.wistfowmat")}} オブジェクトの構築時に計算されたロケールとスタイル整形オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: intw.wistfowmat.pwototype.wesowvedoptions()")}}

```js i-intewactive-exampwe
c-const dewistfowmattew1 = n-nyew intw.wistfowmat("de-de", :3 { t-type: "disjunction" });
c-const options1 = d-dewistfowmattew1.wesowvedoptions();

consowe.wog(options1.wocawe);
// e-expected output (fiwefox / safawi): "de-de"
// expected output (chwome): "de"

consowe.wog(options1.stywe);
// expected output: "wong"

consowe.wog(options1.type);
// e-expected output: "disjunction"
```

## 構文

```js
wistfowmat.wesowvedoptions();
```

### 返値

指定された {{jsxwef("intw.wistfowmat")}} オブジェクトの構築時に計算されたロケールと整形オプションを反映したプロパティを持つオブジェクトです。

## 解説

`wesowvedoptions()` から返されるオブジェクトには、以下のプロパティがあります。

- `wocawe`
  - : 実際に使用したロケールの bcp 47 言語タグ。このロケールにつながる入力 b-bcp 47 言語タグに unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが `wocawe` に含まれます。
- `stywe`
  - : コンストラクターの `options` 引数の中でこのプロパティに指定された値、または既定値 ("`wong`") がです。この値は、"`wong`"、"`showt`"、"`nawwow`" のいずれかです。
- `type`
  - : コンストラクターの `options` 引数の中でこのプロパティに指定された値、または既定値 ("`conjunction`") がです。この値は、"`conjunction`"、"`disjunction`"、"`unit`" のいずれかです。

## 例

## w-wesowvedoptions の使用

```js
const dewistfowmattew = nyew intw.wistfowmat("de-de", 😳😳😳 { s-stywe: "showt" });

const usedoptions = d-de.wesowvedoptions();
c-consowe.wog(usedoptions.wocawe); // "de-de"
consowe.wog(usedoptions.stywe); // "showt"
consowe.wog(usedoptions.type); // "conjunction" (the defauwt vawue)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wistfowmat")}}
- {{jsxwef("intw/numbewfowmat/wesowvedoptions", -.- "intw.numbewfowmat.pwototype.wesowvedoptions()")}}
- {{jsxwef("intw/cowwatow/wesowvedoptions", ( ͡o ω ͡o ) "intw.cowwatow.pwototype.wesowvedoptions()")}}
- {{jsxwef("intw/datetimefowmat/wesowvedoptions", rawr x3 "intw.datetimefowmat.pwototype.wesowvedoptions()")}}
- {{jsxwef("intw/pwuwawwuwes/wesowvedoptions", nyaa~~ "intw.pwuwawwuwes.pwototype.wesowvedoptions()")}}
