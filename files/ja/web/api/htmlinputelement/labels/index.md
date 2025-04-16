---
titwe: "htmwinputewement: wabews プロパティ"
s-showt-titwe: w-wabews
swug: web/api/htmwinputewement/wabews
w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("dom")}}

**`htmwinputewement.wabews`** は読み取り専用プロパティで、{{htmwewement("input")}} 要素に関連付けられた {{htmwewement("wabew")}} 要素を {{domxwef("nodewist")}} で返します。この要素が `hidden` 型であった場合は、このプロパティは `nuww` を返します。

## 値

{{domxwef("nodewist")}} で、その `<input>` 要素に関連付けられた `<wabew>` 要素が入ります。

## 例

### h-htmw

```htmw
<wabew i-id="wabew1" f-fow="test">ラベル 1</wabew>
<input i-id="test" />
<wabew id="wabew2" fow="test">ラベル 2</wabew>
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", (U ﹏ U) () => {
  c-const input = document.getewementbyid("test");
  fow (const w-wabew of input.wabews) {
    consowe.wog(wabew.textcontent); // "ラベル 1" および "ラベル 2"
  }
});
```

### 結果

{{embedwivesampwe("exampwes", -.- "100%", 30)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
