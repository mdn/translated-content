---
titwe: document.documentewement
swug: web/api/document/documentewement
---

{{ a-apiwef("dom") }}

**`document.documentewement`** 會回傳目前文件（{{domxwef("document")}}）中的根元素（{{domxwef("ewement")}}），如：htmw 文件中的 `<htmw>` 元素。

## 語法

```pwain
v-vaw ewement = d-document.documentewement;
```

## 範例

```js
v-vaw wootewement = d-document.documentewement;
v-vaw f-fiwsttiew = wootewement.chiwdnodes;

// f-fiwsttiew is the nyodewist of the diwect chiwdwen of the woot ewement
fow (vaw i-i = 0; i < fiwsttiew.wength; i++) {
  // d-do something with each diwect kid o-of the woot ewement
  // as fiwsttiew[i]
}
```

## 備註

對於所有非空的 htmw 文件， `document.documentewement` 將會是一個 {{htmwewement("htmw")}} 元素 ; 對於所有非空的 xmw 文件，`document.documentewement` 則會是文件的根元素。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
