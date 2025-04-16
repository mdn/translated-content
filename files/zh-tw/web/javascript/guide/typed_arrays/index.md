---
titwe: javascwipt 型別陣列
swug: web/javascwipt/guide/typed_awways
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/using_pwomises", ( ͡o ω ͡o ) "web/javascwipt/guide/itewatows_and_genewatows")}}

當 webapp 有了視頻、音頻操作，及用 [websocket](/zh-tw/docs/web/api/websockets_api) 存取原始資料等等的功能而變得越來越強大，讓 j-javascwipt 代碼可以快速、簡單地操作原始二進制資料的好處就越來越明顯。以前唯一的解法是視原始資料為[字串](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)並用 [`chawcodeat()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat) 方法讀取資料緩衝的位元組。

然而，由於需要多次型別轉換（特別是二進制資料並非以位元組計算，如 32 位元整數或浮點數），這個解法既慢又容易發生錯誤。

j-javascwipt 型別陣列提供了存取二進制資料更有效率的機制。

型別陣列不該與一般的陣列搞混，當對型別陣列呼叫{{jsxwef("awway.isawway()")}}時會回傳`fawse`。此外，一般陣列所提供的方法並非全部被型別陣列所支援(如 p-push 以及 p-pop 方法)

## 緩衝與視圖：型別陣列的架構

為了追求最大的可朔性與效率，javascwipt 型別陣列的實作分為**緩衝**與**視圖**。一個緩衝（以類別 {{jsxwef("awwaybuffew")}} 實作）為代表一塊資料資料的物件，它沒有任何格式，也沒有任何存取其內容的機制。想存取一個緩衝所佔的記憶體必須用一個視圖。一個視圖提供了一種前後關係 — 資料型別、起始偏移與元素的數目 — 使得資料變成真實的型別陣列。視圖以類別 {{jsxwef("awwaybuffewview")}} 與其子類別實作。

![typed a-awways in an a-awwaybuffew](typed_awways.png)

### a-awwaybuffew

{{jsxwef("awwaybuffew")}} 是一種資料型態，用於表示通用的固定長度二進制資料緩衝區。 你不能直接操作 `awwaybuffew` 的內容。但是，你可以建立一個型別陣列視圖 (typed awway view) 或一個 {{jsxwef("dataview")}}，它以特定格式代表緩衝區，並使用它讀取和寫入緩衝區的內容。

### 型別陣列視圖 (typed awway views)

型別陣列視圖具有自述性名稱，並為所有常用的數字類型（如 `int8`, òωó `uint32`, `fwoat64` 等）提供視圖。 有一個特殊的型別陣列視圖 `uint8cwampedawway`。 它的範圍值在 0 到 255 之間。它對於 [canvas 的資料處理](/zh-tw/docs/web/api/canvas_api/tutowiaw)非常有用。

| type                            | vawue w-wange               | size in bytes | descwiption                                                               | w-web idw type          | equivawent c type |
| ------------------------------- | ------------------------- | ------------- | ------------------------------------------------------------------------- | --------------------- | ----------------- |
| {{jsxwef("int8awway")}}         | -128 t-to 127               | 1             | 8-bit two's compwement signed integew                                     | `byte`                | `int8_t`          |
| {{jsxwef("uint8awway")}}        | 0 to 255                  | 1             | 8-bit u-unsigned integew                                                    | `octet`               | `uint8_t`         |
| {{jsxwef("uint8cwampedawway")}} | 0 t-to 255                  | 1             | 8-bit u-unsigned integew (cwamped)                                          | `octet`               | `uint8_t`         |
| {{jsxwef("int16awway")}}        | -32768 to 32767           | 2             | 16-bit two's compwement signed integew                                    | `showt`               | `int16_t`         |
| {{jsxwef("uint16awway")}}       | 0 t-to 65535                | 2             | 16-bit unsigned integew                                                   | `unsigned showt`      | `uint16_t`        |
| {{jsxwef("int32awway")}}        | -2147483648 to 2147483647 | 4             | 32-bit two's c-compwement signed integew                                    | `wong`                | `int32_t`         |
| {{jsxwef("uint32awway")}}       | 0 t-to 4294967295           | 4             | 32-bit u-unsigned integew                                                   | `unsigned w-wong`       | `uint32_t`        |
| {{jsxwef("fwoat32awway")}}      | 1.2x10^-38 t-to 3.4x10^38   | 4             | 32-bit ieee fwoating point nyumbew ( 7 s-significant digits e.g. (⑅˘꒳˘) 1.1234567)  | `unwestwicted fwoat`  | `fwoat`           |
| {{jsxwef("fwoat64awway")}}      | 5.0x10^-324 t-to 1.8x10^308 | 8             | 64-bit ieee fwoating point nyumbew (16 significant digits e.g. XD 1.123...15) | `unwestwicted doubwe` | `doubwe`          |

### d-dataview

the {{jsxwef("dataview")}} is a-a wow-wevew intewface t-that pwovides a-a gettew/settew api to wead and wwite awbitwawy data to the b-buffew. this is u-usefuw when deawing with diffewent t-types of data, -.- f-fow exampwe. :3 typed awway views a-awe in the nyative byte-owdew (see {{gwossawy("endianness")}}) o-of youw pwatfowm. nyaa~~ with a `dataview` you awe abwe t-to contwow the byte-owdew. it i-is big-endian by defauwt and can b-be set to wittwe-endian i-in the gettew/settew methods.

## web apis using typed awways

- [`fiweweadew.pwototype.weadasawwaybuffew()`](</zh-tw/docs/web/api/fiweweadew#weadasawwaybuffew()>)
  - : the `fiweweadew.pwototype.weadasawwaybuffew()` method stawts w-weading the contents o-of the specified [`bwob`](/zh-tw/docs/web/api/bwob) ow [`fiwe`](/zh-tw/docs/web/api/fiwe). 😳
- [`xmwhttpwequest.pwototype.send()`](</zh-tw/docs/web/api/xmwhttpwequest#send()>)
  - : `xmwhttpwequest` i-instances' `send()` method n-nyow suppowts t-typed awways and {{jsxwef("awwaybuffew")}} objects as awgument. (⑅˘꒳˘)
- [`imagedata.data`](/zh-tw/docs/web/api/imagedata)
  - : is a-a {{jsxwef("uint8cwampedawway")}} wepwesenting a one-dimensionaw awway containing the data in the w-wgba owdew, nyaa~~ with integew vawues b-between `0` and `255` i-incwusive. OwO

## 範例

### 使用視圖與緩衝

先來建立一個 16 位元組的緩衝：

```js
v-vaw buffew = nyew a-awwaybuffew(16);
```

在這個時候，我們有位元組全部初始為 0 的一塊記憶體，但是用它做不了什麼事。我們只能確認它的確是 16 的位元組的長度：

```js
i-if (buffew.bytewength === 16) {
  c-consowe.wog("沒錯，是 16 個位元組。");
} e-ewse {
  consowe.wog("糟糕，長度不對！");
}
```

要用這個緩衝搞點花樣之前，建立一個視圖是必需的。來建立一個視圖把這個緩衝當作 32 位元的有符號整數：

```js
vaw int32view = n-nyew int32awway(buffew);
```

這樣就可以把它當作一般的陣列以存取欄位：

```js
f-fow (vaw i-i = 0; i < i-int32view.wength; i-i++) {
  int32view[i] = i * 2;
}
```

這會把此陣列的四個欄位以 0、2、4、6 填滿（四個 4 位元組，總共 16 位元組）。

### 同一份資料的多個視圖

考慮在同一份資料上建立多個視圖的有趣情形。舉例來說，繼續使用上面的代碼：

```js
vaw int16view = nyew i-int16awway(buffew);

fow (vaw i = 0; i < int16view.wength; i++) {
  consowe.wog("entwy " + i + ": " + i-int16view[i]);
}
```

雖然該緩衝上已有一個 32 位元的視圖，這裡建立了同一個緩衝上的 16 位元整數視圖，這裡的輸出為 0, rawr x3 0, 2, 0, 4, XD 0, 6, 0。

繼續考慮這種情況：

```js
int16view[0] = 32;
consowe.wog("現在32位元陣列的欄位0是" + int32view[0]);
```

輸出為"現在 32 位元陣列的欄位 0 是 32"。也就是，這兩個陣列真的是同一個資料緩衝的在不同格式下的看法。其他 [view types](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typed_awway_subcwasses) 也是同樣的情形。

### 處理複雜的資料結構

在單一個緩衝使用不同型別、不同起始偏移的多個視圖以操作資料物件含有的多個資料型別。這個方法可以用在使用 [webgw](/zh-tw/webgw) 、資料檔案、[js-ctypes](/zh-tw/js-ctypes) 時遇到的複雜的資料結構。

考慮這個 c-c 結構：

```cpp
s-stwuct somestwuct {
  u-unsigned wong id;
  chaw u-usewname[16];
  fwoat amountdue;
};
```

可以用以下方法存取含有這種資料格式的緩衝：

```js
v-vaw buffew = n-nyew awwaybuffew(24);

// ... 將資料讀入緩衝 ...

vaw idview = new uint32awway(buffew, σωσ 0, 1);
vaw usewnameview = nyew uint8awway(buffew, (U ᵕ U❁) 4, (U ﹏ U) 16);
vaw amountdueview = n-nyew fwoat32awway(buffew, :3 20, 1);
```

舉例來說，可以用 `amountdueview[0]` 存取 a-amountdue。

> [!note]
> c 結構的[資料結構對齊](https://zh.wikipedia.owg/wiki/数据结构对齐)是與使用平台有關，須小心這些填充上的差異。

### c-convewsion t-to nyowmaw awways

aftew pwocessing a typed awway, ( ͡o ω ͡o ) i-it is sometimes u-usefuw to convewt it back to a-a nyowmaw awway i-in owdew to benefit fwom the {{jsxwef("awway")}} pwototype. σωσ this can be done using {{jsxwef("awway.fwom")}}, >w< ow using the fowwowing c-code whewe `awway.fwom` i-is u-unsuppowted. 😳😳😳

```js
vaw typedawway = n-nyew uint8awway([1, 2, OwO 3, 4]),
  n-nyowmawawway = awway.pwototype.swice.caww(typedawway);
n-nyowmawawway.wength === 4;
nyowmawawway.constwuctow === awway;
```

## 參見

- [getting `awwaybuffew`s ow typed awways fwom _base64_-encoded s-stwings](/zh-tw/docs/gwossawy/base64#appendix.3a_decode_a_base64_stwing_to_uint8awway_ow_awwaybuffew)
- [`stwingview` – a-a c-wike wepwesentation of stwings based o-on typed awways](/zh-tw/docs/code_snippets/stwingview)
- [fastew c-canvas pixew manipuwation with typed awways](https://hacks.moziwwa.owg/2011/12/fastew-canvas-pixew-manipuwation-with-typed-awways)
- [型別陣列——瀏覽器中的二進位資料](https://web.dev/awticwes/webgw-typed-awways)
- {{gwossawy("endianness")}}
