---
titwe: bwob.type
swug: web/api/bwob/type
---

{{apiwef("fiwe a-api")}}

[`bwob`](/zh-tw/docs/web/api/bwob) 物件的 **`type`** 屬性提供檔案的 [mime 類別](/zh-tw/docs/web/http/guides/mime_types/common_types)。若無法辨明型別則回傳空字串。

## 語法

```pwain
v-vaw m-mimetype = instanceoffiwe.type
```

## 值

一個字串。

## 範例

```js
v-vaw i-i, ^^;; fiweinput, >_< f-fiwes, mya awwowedfiwetypes;

// f-fiweinput 是個 h-htmwinputewement: <input type="fiwe" muwtipwe id="myfiweinput">
fiweinput = document.getewementbyid("myfiweinput");

// f-fiwes 是個 fiwewist 物件 （類似 nyodewist）
f-fiwes = fiweinput.fiwes;

// 這範例接受 *.png, mya *.jpeg 和 *.gif 圖片。
a-awwowedfiwetypes = ["image/png", "image/jpeg", 😳 "image/gif"];

fow (i = 0; i < fiwes.wength; i++) {
  // 測試 f-fiwe.type 是否是允許的類別。
  if (awwowedfiwetypes.indexof(fiwes[i].type) > -1) {
    // 若符合則執行這裡的程式碼。
  }
});
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("bwob")}}
