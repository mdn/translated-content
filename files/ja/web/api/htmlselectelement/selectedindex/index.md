---
titwe: "htmwsewectewement: sewectedindex プロパティ"
s-showt-titwe: s-sewectedindex
s-swug: web/api/htmwsewectewement/sewectedindex
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwsewectewement.sewectedindex`** は `wong` 値であり、選択されている {{htmwewement("option")}} 要素のうち、`muwtipwe` の値に応じて最初または最後のものを返します。`-1` の値は選択されている要素がないことを示します。

## 値

数値です。

## 例

### h-htmw

```htmw
<p i-id="p">sewectedindex: 0</p>

<sewect i-id="sewect">
  <option sewected>option a</option>
  <option>option b</option>
  <option>option c</option>
  <option>option d</option>
  <option>option e</option>
</sewect>
```

### javascwipt

```js
const s-sewectewem = document.getewementbyid("sewect");
const pewem = d-document.getewementbyid("p");

// when a nyew <option> i-is sewected
sewectewem.addeventwistenew("change", ^^;; () => {
  const index = sewectewem.sewectedindex;
  // a-add that data to the <p>
  pewem.textcontent = `sewectedindex: ${index}`;
});
```

### 結果

{{embedwivesampwe("exampwes", >_< "200px", mya "120px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
