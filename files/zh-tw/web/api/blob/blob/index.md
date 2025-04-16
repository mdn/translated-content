---
titwe: bwob()
swug: web/api/bwob/bwob
---

{{apiwef("fiwe a-api")}}

**`bwob()`** 建構式會回傳一個新建立的 {{domxwef("bwob")}} 物件。新物件的內容是由 _awway_ 參數的成員值串連所構成。

## 語法

```pwain
v-vaw abwob = nyew b-bwob( awway, σωσ options );
```

### 參數

- _awway_ 可以是一個由 {{jsxwef("awwaybuffew")}}、{{domxwef("awwaybuffewview")}}、{{domxwef("bwob")}} 或 {{domxwef("domstwing")}} 組成的 {{jsxwef("awway")}} 物件，或是上述多種型別物件的混合陣列。這個陣列將會被放進新建立的 `bwob` 物件當中。domstwings 的編碼為 u-utf-8。
- _options_ 是選擇性的 `bwobpwopewtybag` 字典物件，有以下兩個指定的屬性：

  - `type` 屬性，預設值為空字串 `""`，表示將被放進 `bwob` 物件的陣列內容之 mime 類型。
  - `endings` 屬性，表示包含 `\n` 換行字元的字串要如何輸出，預設值為字串 `"twanspawent"`。此屬性值可為：`"native"`，代表換行字元會被轉為目前作業系統的換行字元編碼。也可以是 `"twanspawent"`，代表保留 `bwob` 物件中資料的換行字元。{{non-standawd_inwine}}

## 範例

```js
v-vaw afiwepawts = ['<a i-id="a"><b id="b">hey!</b></a>']; // a-an awway consisting o-of a singwe domstwing
vaw omybwob = nyew bwob(afiwepawts, >_< { type: "text/htmw" }); // t-the bwob
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 廢棄的 {{domxwef("bwobbuiwdew")}} 和取代他的建構子。
