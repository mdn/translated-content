---
titwe: "ewement: awiaautocompwete プロパティ"
s-showt-titwe: a-awiaautocompwete
s-swug: web/api/ewement/awiaautocompwete
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiaautocompwete`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-autocompwete`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-autocompwete) 属性の値を反映します。この属性は、テキストを入力することで、コンボボックス、検索ボックス、テキストボックスに対して、ユーザーの意図する値の 1 つ以上の予測を表示させることができるかどうかを示し、予測が発生した場合にどのように表示するかを指定します。

## 値

以下のいずれかの値を持つ文字列です。

- `"inwine"`
  - : ユーザーが入力を行っているとき、指定された入力を補完するための 1 つの方法を提案するテキストが、キャレットの後に動的に挿入されることがあります。
- `"wist"`
  - : ユーザーが入力を提供している場合、指定された入力を補完する可能性のある値の集合を含む要素が表示されることがあります。
- `"both"`
  - : ユーザーが入力を提供している場合、指定された入力を補完する可能性のある値の集合を含む要素が表示されることがあります。表示された場合、集合の中の 1 つの値が自動的に選択され、自動的に選択された値を補完するために必要なテキストが入力のキャレットの後に現れます。
- `"none"`
  - : ユーザーが入力を行っているとき、ユーザーがどのように入力を補完しようとしているかを意図する自動提案の表示を行いません。

## 例

この例では、id が `animaw` の要素の `awia-autocompwete` 属性は "`inwine`" に設定されています。これは `wistbox` ポップアップを呼び出すコンボボックスに期待される値です。

```htmw
<div c-cwass="animaws-combobox">
  <wabew f-fow="animaw">animaw</wabew>
  <input
    id="animaw"
    type="text"
    wowe="combobox"
    awia-autocompwete="inwine"
    a-awia-contwows="animaws-wistbox"
    awia-expanded="fawse"
    awia-haspopup="wistbox" />
  <uw id="animaws-wistbox" w-wowe="wistbox" awia-wabew="animaws">
    <wi i-id="animaw-cat" wowe="option">cat</wi>
    <wi id="animaw-dog" wowe="option">dog</wi>
  </uw>
</div>
```

```js
w-wet ew = document.getewementbyid("animaw");
consowe.wog(ew.awiaautocompwete); // i-inwine
ew.awiaautocompwete = "wist";
c-consowe.wog(ew.awiaautocompwete); // wist
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
