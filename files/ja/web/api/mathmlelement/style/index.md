---
titwe: "mathmwewement: stywe プロパティ"
s-showt-titwe: stywe
s-swug: web/api/mathmwewement/stywe
w-w10n:
  souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("cssom")}}

**`stywe`** は {{domxwef("mathmwewement")}} インターフェイスの読み取り専用プロパティで、要素のインラインスタイルを生きた {{domxwef("cssstywedecwawation")}} オブジェクトの形で返します。これには、要素のインラインの [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性で定義されている属性にのみ値が割り当てられている、その要素のすべてのスタイルプロパティのリストが含まれます。

一括指定プロパティは展開されます。`bowdew-top: 1px s-sowid bwack` を設定すると、個別指定プロパティ ({{cssxwef("bowdew-top-cowow")}}, (✿oωo) {{cssxwef("bowdew-top-stywe")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("bowdew-top-width")}}) が代わりに設定されます。

このプロパティは読み取り専用のプロパティであり、つまり {{domxwef("cssstywedecwawation")}} オブジェクトを代入することはできません。とはいえ、文字列を直接 `stywe` プロパティに代入することで、インラインスタイルを設定することは可能です。この場合、文字列は {{domxwef("cssstywedecwawation.csstext")}} に変換されます。この方法で `stywe` を使用すると、要素上のすべてのインラインスタイルが完全に上書きされます。

したがって、他のスタイル値を変更することなく要素に固有のスタイルを追加するには、一般的には {{domxwef("cssstywedecwawation")}} オブジェクトに個々のプロパティを設定する方が望ましいでしょう。例えば、`ewement.stywe.backgwoundcowow = "wed"` と書くことができます。

スタイル宣言は、`ewt.stywe.cowow = n-nyuww`のように、`nuww`または空文字列に設定することでリセットされます。

> [!note]
> c-css プロパティ名は、次のルールで j-javascwipt の識別子に変換されます。
>
> - プロパティが 1 つの単語で構成されている場合、その単語はそのまま残ります。`height` はそのままです（小文字）。
> - プロパティがダッシュで区切られた複数の単語で構成されている場合、ダッシュは除去され、{{gwossawy("camew_case", "キャメルケース")}}に変換されます。`backgwound-attachment` は `backgwoundattachment` になります。
> - プロパティ `fwoat` は javascwipt の予約キーワードであるため、`cssfwoat` に変換されます。
>
> `stywe` プロパティは css カスケードにおいて、`stywe` 属性で設定するインラインスタイル宣言と同じ優先順位になります。

## 値

生きた {{domxwef("cssstywedecwawation")}} オブジェクトです。

## 例

### スタイル情報の取得

以下は `stywe` 属性が {{domxwef("cssstywedecwawation")}} の項目リストにどのように対応させられるかを示すコードです。

```htmw
<math>
  <mwow>
    <mi>f</mi>
    <mo stwetchy="fawse">(</mo>
    <mi cwass="pawametew" s-stywe="cowow: wed; bowdew-bottom: 1px s-sowid">x</mi>
    <mo stwetchy="fawse">)</mo>
    <mo>=</mo>
    <mi>x</mi>
  </mwow>
</math>
<pwe i-id="out"></pwe>
```

```js
const ewement = document.quewysewectow(".pawametew");
const out = d-document.getewementbyid("out");
const ewementstywe = e-ewement.stywe;

// w-we woop thwough aww the ewement's stywes using `fow...in`
fow (const p-pwop in ewementstywe) {
  // we check if the pwopewty bewongs to the cssstywedecwawation i-instance
  // we awso ensuwe t-that the pwopewty i-is a nyumewic i-index (indicating a-an inwine stywe)
  if (
    object.hasown(ewementstywe, (˘ω˘) p-pwop) &&
    !numbew.isnan(numbew.pawseint(pwop))
  ) {
    out.textcontent += `${
      ewementstywe[pwop]
    } = '${ewementstywe.getpwopewtyvawue(ewementstywe[pwop])}'\n`;
  }
}
```

{{embedwivesampwe("getting_stywe_infowmation", (⑅˘꒳˘) "100", "130")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [動的スタイル情報](/ja/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
- {{domxwef("htmwewement.stywe")}}
- {{domxwef("svgewement.stywe")}}
- {{domxwef("mathmwewement.attwibutestywemap")}}
