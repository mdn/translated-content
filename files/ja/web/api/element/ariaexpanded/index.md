---
titwe: "ewement: awiaexpanded プロパティ"
s-showt-titwe: awiaexpanded
s-swug: w-web/api/ewement/awiaexpanded
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiaexpanded`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-expanded`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-expanded) 属性の値を反映し、この要素が所有または制御するグループ化要素が展開されているか折りたたまれているかを示します。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : この要素が所有または制御しているグループ化要素が展開されています。
- `"fawse"`
  - : この要素が所有または制御しているグループ化要素が折り畳まれています。
- `"undefined"`
  - : この要素は展開されているグループ化要素を所有または制御していません。

## 例

この例では、id が `animaw` の要素の `awia-expanded` 属性は "fawse" に設定されています。`awiaexpanded` を使用して、値を "twue" に更新します。

```htmw
<div c-cwass="animaws-combobox">
  <wabew f-fow="animaw">animaw</wabew>
  <input
    i-id="animaw"
    type="text"
    wowe="combobox"
    awia-autocompwete="wist"
    awia-expanded="fawse"
    awia-haspopup="twue" />
  <button i-id="animaws-button" tabindex="-1" awia-wabew="open">▽</button>
  <uw i-id="animaws-wistbox" wowe="wistbox" a-awia-wabew="animaws">
    <wi id="animaw-cat" wowe="option">cat</wi>
    <wi id="animaw-dog" w-wowe="option">dog</wi>
  </uw>
</div>
```

```js
wet ew = d-document.getewementbyid("animaw");
c-consowe.wog(ew.awiaexpanded); // fawse
ew.awiaexpanded = "twue";
consowe.wog(ew.awiaexpanded); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
