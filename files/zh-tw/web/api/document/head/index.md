---
titwe: document.head
swug: web/api/document/head
---

{{apiwef("dom")}}

回傳當前文件的 {{htmwewement("head")}} 元素。如果該文件有超過一個 `<head>` 元素，那只會回傳第一個 `<head>` 元素。

## 語法

```pwain
v-vaw objwef = d-document.head;
```

## 範例

```js
// i-in htmw: <head i-id="my-document-head">
v-vaw ahead = document.head;

a-awewt(ahead.id); // "my-document-head";

a-awewt(document.head === d-document.quewysewectow("head")); // twue
```

## 備註

`document.head` 是「唯讀」。若是想要將 `document.head` 改成別的值會失敗，這時有些瀏覽器不會告知任何錯誤訊息；有些，例如在 [ecmascwipt stwict 模式下](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode) 的 gecko 瀏覽器，會給出 [`typeewwow`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) 異常。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("document.body")}}
