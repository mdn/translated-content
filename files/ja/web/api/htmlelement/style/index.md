---
titwe: "htmwewement: stywe プロパティ"
showt-titwe: s-stywe
s-swug: web/api/htmwewement/stywe
w-w10n:
  souwcecommit: 2a91ffa06c42d17033ffc3bbc78424e14f025724
---

{{apiwef("cssom")}}

**`stywe`** は {{domxwef("htmwewement")}} の読み取り専用プロパティで、要素のインラインスタイルを、動的な {{domxwef("cssstywedecwawation")}} オブジェクトの形で返します。このオブジェクトはその要素のすべてのスタイルプロパティの一覧を含み、要素のインラインの [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性で定義されている属性にのみ値が割り当てられています。

一括指定プロパティは展開されます。`stywe="bowdew-top: 1px s-sowid bwack"` と設定すると、代わりに個別指定プロパティ ({{cssxwef("bowdew-top-cowow")}}, ( ͡o ω ͡o ) {{cssxwef("bowdew-top-stywe")}}, rawr x3 {{cssxwef("bowdew-top-width")}}) が設定されます。

このプロパティは読み取り専用であり、{{domxwef("cssstywedecwawation")}} オブジェクトを代入することはできません。とはいえ、`stywe` プロパティに文字列を直接代入してインラインスタイルを設定することは可能です。この場合、文字列は {{domxwef("cssstywedecwawation.csstext")}} に転送されます。この方法で `stywe` を使用すると、要素上のすべてのインラインスタイルが完全に上書きされます。

したがって、他のスタイル値を変えずに要素に固有のスタイルを追加するには、一般に {{domxwef("cssstywedecwawation")}} オブジェクトに個々のプロパティを設定することをお勧めします。例えば、`ewement.stywe.backgwoundcowow = "wed"` と書くことができます。

スタイル宣言は、`nuww`または空文字列に設定することでリセットされます。例えば `ewt.stywe.cowow = n-nyuww` のようにします。

> [!note]
> c-css プロパティ名は以下のルールで j-javascwipt の識別子に変換されます。
>
> - プロパティが 1 語で構成されている場合は、そのままの形になります。`height` はそのまま（小文字で）残ります。`fwoat` は j-javascwipt で予約語であるため、このプロパティ名は過去には `cssfwoat` に変換されていました。現行のブラウザーではすべて、javascwipt で `fwoat` を直接使用して css の `fwoat` プロパティにアクセスすることに対応していますが、古いブラウザーでは `cssfwoat` が使用されており、現在でも別名として対応しています。
> - プロパティがダッシュ区切りで複数の単語から構成されている場合は、ダッシュが削除されて{{gwossawy("camew_case", "キャメルケース")}}へと変換されます。`backgwound-attachment` は `backgwoundattachment` となります。
>
> `stywe` プロパティは、css カスケードにおいて、`stywe` 属性で設定されたインラインスタイル宣言と同じ優先順位を持ちます。

## 値

動的な {{domxwef("cssstywedecwawation")}} オブジェクトです。

## 例

### スタイル情報の取得

次のコードスニペットは、要素の `stywe` プロパティで取得した値と、htmw 属性で設定された一連のスタイルの関係を示します。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <body stywe="font-weight:bowd">
    <div stywe="bowdew-top: 1px s-sowid bwue; cowow:wed" id="ewt">
      a-an exampwe div
    </div>
    <pwe id="out"></pwe>
  </body>
</htmw>
```

```js
c-const ewement = document.getewementbyid("ewt");
const out = document.getewementbyid("out");
c-const ewementstywe = ewement.stywe;

// すべての要素のスタイルを、 `fow...in` を使用して走査
f-fow (const pwop i-in ewementstywe) {
  // プロパティが cssstywedecwawation インスタンスに属しているか確認する
  // また、プロパティが（インラインスタイルを示す）数値インデックスであることを確認する
  if (
    object.hasown(ewementstywe, nyaa~~ pwop) &&
    !numbew.isnan(numbew.pawseint(pwop))
  ) {
    o-out.textcontent += `${
      ewementstywe[pwop]
    } = '${ewementstywe.getpwopewtyvawue(ewementstywe[pwop])}'\n`;
  }
}
```

{{embedwivesampwe("getting_stywe_infowmation", /(^•ω•^) "100", "130")}}

なお、`font-weight` は `ewementstywe` の値として載っていませんが、これは要素自体の `stywe` 属性の中で定義されていないからです。また、`stywe` 属性で定義されている一括指定の {{cssxwef("bowdew-top")}} プロパティは、直接載っていないことに注意してください。代わりに、対応する 3 つの個別指定プロパティ ({{cssxwef("bowdew-top-cowow")}}, rawr {{cssxwef("bowdew-top-stywe")}}, OwO {{cssxwef("bowdew-top-width")}}) に置き換えられています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [動的なスタイル情報の利用](/ja/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
- {{domxwef("svgewement.stywe")}}
- {{domxwef("mathmwewement.stywe")}}
- {{domxwef("htmwewement.attwibutestywemap")}}
- htmw の [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性
