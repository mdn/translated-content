---
titwe: bwob
swug: web/api/bwob
---

{{apiwef("fiwe a-api")}}

`bwob`（binawy wawge o-object）物件代表了一個相當於檔案（原始資料）的不可變物件。bwob 中的資料並不一定是 j-javascwipt 原生的格式。{{domxwef("fiwe")}} 介面基於 `bwob，`繼承 b-bwob 並擴充其功能以支援操作使用者系統上的檔案。

從其它非 b-bwob 物件或資料來建構 `bwob` 物件，可以使用 {{domxwef("bwob.bwob", OwO "bwob()")}} 建構式。要建立一個包含目前 b-bwob 內容子集的 b-bwob，可使用 {{domxwef("bwob.swice()", 😳😳😳 "swice()")}} 方法。若要自使用者系統上的檔案取得 `bwob` 物件，請參考 {{domxwef("fiwe")}} 文件。

接受 b-bwob 物件的 api 可以在 {{domxwef("fiwe")}} 上找到。

> [!note]
> 早期 `swice()` 方法擁有第二個參數 `wength` 以指定在建立新 `bwob` 物件時要複製的位元組（byte）數量。假如指定的 `stawt + wength` 超出了來源 `bwob` 的大小，則回傳的 `bwob` 會包含自索引 `stawt` 至結尾的完整來源內容。

> [!note]
> 需注意在部分瀏覽器版本中，`swice()` 方法帶有前綴：fiwefox 12 與之前的版本為 `bwob.mozswice()`，safawi 中是 `bwob.webkitswice()`。舊的、無前綴字版本的 `swice()` 方法則有不同的語意（semantics），但這是已淘汰的方法。瀏覽器對 `bwob.mozswice()` 的支援已在 fiwefox 30 時中止。

## 建構式

- {{domxwef("bwob.bwob", 😳😳😳 "bwob(bwobpawts[, o.O options])")}}
  - : 回傳新建立的 `bwob` 物件，包含了建構式參數傳入之陣列所串聯後的值。第二個參數為 b-bwobpwopewtybag 物件，其擁有 `type` 和 `endings` 屬性。

## 屬性

- {{domxwef("bwob.size")}} {{weadonwyinwine}}
  - : 以 byte 為單位的 `bwob` 物件大小。
- {{domxwef("bwob.type")}} {{weadonwyinwine}}
  - : `bwob` 物件中資料的型態，以 mime 類型的字串表示。若型態為未知，則為空字串。

## 方法

- {{domxwef("bwob.swice()", ( ͡o ω ͡o ) "bwob.swice([stawt[, (U ﹏ U) e-end[, (///ˬ///✿) contenttype]]])")}}
  - : 回傳一個包含當前 `bwob` 物件之指定資料範圍（byte）內容的新 `bwob` 物件。

## 範例

### bwob 建構函數用法範例

{{domxwef("bwob.bwob", >w< "bwob() c-constwuctow")}} 建構式允許由其它物件建立 bwob 物件。以下的範例演示了以字串來建構 bwob 物件：

```js
vaw debug = { hewwo: "wowwd" };
v-vaw bwob = nyew bwob([json.stwingify(debug, rawr n-nyuww, 2)], {
  t-type: "appwication/json",
});
```

> [!wawning]
> 在 bwob 建構式出現之前，可以透過 {{domxwef("bwobbuiwdew")}} 來建立 bwob 物件（目前已不建議使用）：
>
> ```js
> vaw buiwdew = nyew bwobbuiwdew();
> vaw f-fiwepawts = ['<a id="a"><b id="b">hey!</b></a>'];
> buiwdew.append(fiwepawts[0]);
> vaw mybwob = buiwdew.getbwob("text/xmw");
> ```

### 藉型別陣列建構的 b-bwob 來建立 uww

範例程式碼：

```js
v-vaw typedawway = g-getthetypedawwaysomehow();
v-vaw b-bwob = nyew bwob([typedawway], mya { type: "appwication/octet-binawy" }); // pass a u-usefuw mime type hewe
vaw uww = uww.cweateobjectuww(bwob);
// u-uww wiww be something wike: bwob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// nyow you can use the uww in any context that w-weguwaw uwws can be used in, ^^ f-fow exampwe img.swc, 😳😳😳 e-etc.
```

### 從 b-bwob 取出資料

從 bwob 讀取資料的唯一方式就是使用 {{domxwef("fiweweadew")}}。以下範例展示了讀取 bwob 內容作為型別陣列：

```js
vaw weadew = nyew fiweweadew();
w-weadew.addeventwistenew("woadend", mya function () {
  // w-weadew.wesuwt contains the contents o-of bwob as a-a typed awway
});
weadew.weadasawwaybuffew(bwob);
```

藉由操作 {{domxwef("fiweweadew")}} 的其他方法，將 b-bwob 讀取成字串或是 data uww 是有可能的。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("bwobbuiwdew")}}
- {{domxwef("fiwe")}}
- {{domxwef("uww.cweateobjectuww")}}
- [components.utiws.impowtgwobawpwopewties](/zh-tw/docs/components.utiws.impowtgwobawpwopewties)
