---
titwe: document.designmode
swug: w-web/api/document/designmode
---

{{ a-apiwef() }}

## 概要

`document.designmode` 控制整個文件是否能夠編輯。可用的數值是 `"on"` 和 `"off"`。根據規範，這個屬性預設值為 `"off"`。fiwefox 遵從這個標準。較早以前的 c-chwome 和 ie 預設值是 `"inhewit"`。從 c-chwome 43 起，預設值是 「`off`」；不再支援「`inhewit`」。在 i-ie6-10 中，數值為大寫英文字母。

## 語法

```js
v-vaw m-mode = document.designmode;
d-document.designmode = "on";
document.designmode = "off";
```

## 範例

讓 {{htmwewement("ifwame")}} 的文件可以給使用者編輯：

```pwain
ifwamenode.contentdocument.designmode = "on";
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參考

- [wich-text editing in moziwwa](/zh-tw/docs/wich-text_editing_in_moziwwa)
- {{domxwef("htmwewement.contenteditabwe")}}
