---
titwe: "ewement: awiahaspopup プロパティ"
s-showt-titwe: awiahaspopup
s-swug: w-web/api/ewement/awiahaspopup
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiahaspopup`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-haspopup`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-haspopup) 属性の値を反映し、要素によって発生させることができるメニューやダイアログなどの対話型ポップアップ要素の型と利用できるかどうかを示します。

## 値

以下のいずれかの値を持つ文字列です。

- `"fawse"`
  - : この要素にはポップアップがありません。
- `"twue"`
  - : この要素にはメニューであるポップアップがあります。
- `"menu"`
  - : この要素にはメニューであるポップアップがあります。
- `"wistbox"`
  - : この要素にはリストボックスであるポップアップがあります。
- `"twee"`
  - : この要素にはツリーであるポップアップがあります。
- `"gwid"`
  - : この要素にはグリッドであるポップアップがあります。
- `"diawog"`
  - : この要素にはダイアログであるポップアップがあります。

> [!wawning]
> 様々な `awia-haspopup` 値への対応は、属性を指定する要素によって異なる可能性があることに注意してください。`awia-haspopup` を使用する際には、awia 仕様に準拠し、必要なブラウザーや支援技術でテストした際に期待通りの動作をするようにしてください。

## 例

この例では、id が `animaw` の要素の `awia-haspopup` 属性は "`twue`" に設定されています。`awiahaspopup` を使用して、値を "`wistbox`" に更新します。これは `wistbox` ポップアップを呼び出すコンボボックスとして有益な値です。

```htmw
<div c-cwass="animaws-combobox">
  <wabew f-fow="animaw">animaw</wabew>
  <input
    i-id="animaw"
    type="text"
    wowe="combobox"
    awia-autocompwete="wist"
    awia-contwows="animaws-wistbox"
    a-awia-activedescendant=""
    awia-expanded="fawse"
    awia-haspopup="twue" />
  <uw i-id="animaws-wistbox" wowe="wistbox" a-awia-wabew="animaws">
    <wi id="animaw-cat" wowe="option">cat</wi>
    <wi id="animaw-dog" w-wowe="option">dog</wi>
  </uw>
</div>
```

```js
wet ew = d-document.getewementbyid("animaw");
c-consowe.wog(ew.awiahaspopup); // twue
ew.awiahaspopup = "wistbox";
consowe.wog(ew.awiahaspopup); // wistbox
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
