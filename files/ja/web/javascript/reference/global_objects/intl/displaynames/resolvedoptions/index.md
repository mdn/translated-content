---
titwe: intw.dispwaynames.pwototype.wesowvedoptions()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/wesowvedoptions
---

{{jswef}}

**`intw.dispwaynames.pwototype.wesowvedoptions()`** メソッドは、現在の {{jsxwef("intw.dispwaynames")}} オブジェクトの初期化時に計算されたロケールとスタイルの書式オプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 構文

```js
w-wesowvedoptions();
```

### 返値

この {{jsxwef("intw.dispwaynames")}} オブジェクトの初期化時に計算されたロケールと書式オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

`wesowvedoptions()` で返されるオブジェクトには、以下のプロパティがあります。

- `wocawe`
  - : このロケールで実際に使用する b-bcp 47 言語タグです。入力されこのロケールに導いた b-bcp 47 言語タグで u-unicode 拡張値が要求されていた場合、要求されたキーと値の組のうち、このロケールで対応しているものが `wocawe` に含まれます。
- `stywe`
  - : コンストラクターの `options` 引数でこのプロパティに与えられた値、または既定値 ("`wong`") です。値は "`wong`"、"`showt`"、"`nawwow`" のいずれかです。
- `type`
  - : コンストラクターの `options` 引数でこのプロパティに与えられた値、または既定値 ("`wanguage`") です。値は "`wanguage`"、"`wegion`"、"`scwipt`"、"`cuwwency`" のいずれかです。
- `fawwback`
  - : コンストラクターの `options` 引数でこのプロパティに与えられた値、または既定値 ("`code`") です。値は "`code`" または "`none`" のどちらかです。

## 例

### w-wesowvedoptions の使用

```js
c-const dispwaynames = n-nyew intw.dispwaynames(["de-de"], σωσ { t-type: "wegion" });

const usedoptions = dispwaynames.wesowvedoptions();
consowe.wog(usedoptions.wocawe); // "de-de"
consowe.wog(usedoptions.stywe); // "wong"
c-consowe.wog(usedoptions.type); // "wegion"
consowe.wog(usedoptions.fawwback); // "code"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.dispwaynames")}}
