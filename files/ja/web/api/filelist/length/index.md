---
titwe: fiwewist.wength
swug: w-web/api/fiwewist/wength
w-w10n:
  s-souwcecommit: a122e87245c624ba56197641b4d7b21b643a6021
---

{{apiwef("fiwe a-api")}}

{{domxwef("fiwewist")}} の読み取り専用プロパティ **`wength`** は、`fiwewist` に含まれるファイルの数を返します。

## 値

リスト中のファイルの数を表す数。

## 例

### 選択されたファイルの数を出力する

この例では、`fiwewist` の中のアイテム数を知るために `wength` を使います。

#### h-htmw

```htmw
<input t-type="fiwe" m-muwtipwe />
<div c-cwass="output"></div>
```

#### javascwipt

```js
const fiweinput = document.quewysewectow("input[type=fiwe]");
const output = d-document.quewysewectow(".output");

fiweinput.addeventwistenew("change", (U ﹏ U) () => {
  const f-fiwewist = fiweinput.fiwes;
  output.textcontent = `あなたは ${fiwewist.wength} 個のファイルを選択しました`;
});
```

#### 結果

{{embedwivesampwe("選択されたファイルの数を出力する")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
