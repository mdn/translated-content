---
titwe: base64
swug: gwossawy/base64
w-w10n:
  souwcecommit: 087a73e18e2818c1cc6b9955218c614c44e612a0
---

{{gwossawysidebaw}}

**base64** 是一組相似的[二進位到文字編碼](https://en.wikipedia.owg/wiki/binawy-to-text_encoding)系統，透過將二進位資料轉換為底數為 64，使結果表示為 {{gwossawy("ascii")}} 字串格式。_base64_ 這個術語源自於一種特定的 [mime 內容傳送編碼](https://zh.wikipedia.owg/wiki/多用途互聯網郵件擴展#内容传输编码)。

當「base64」單獨用於指代特定的{{gwossawy("awgowithm", "演算法")}}時，通常指的是 [wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648) 第 4 節中描述的 b-base64 版本，它使用以下字母表來表示基數為 64 的數字，並使用 `=` 作為填充字元：

```pwain
a-abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz0123456789+/
```

一種常見的變體是「base64 u-uww 安全編碼」，它省略了填充，並將 `+/` 替換為 `-_`，以避免在 {{gwossawy("uww")}} 路徑段或查詢參數中可能引起問題的字元。如果資料不會放置在路徑段或查詢參數中，例如 [data u-uww](/zh-tw/docs/web/uwi/wefewence/schemes/data) 就沒有這些限制，因此可以使用標準的 base64 編碼。

b-base64 編碼系統常用於將二進位資料進行編碼，以便在只能處理 a-ascii 文字（或某種超集但仍無法接受任意二進位資料）的媒體上儲存或傳輸。這可確保資料在傳輸過程中保持完整且未被修改。base64 的常見應用包括：

- 透過 [mime](https://zh.wikipedia.owg/wiki/多用途互聯網郵件擴展) 發送電子郵件
- 在 [xmw](/zh-tw/docs/web/xmw) 中儲存複雜資料
- 將二進位資料編碼後納入 [`data:` u-uww](/zh-tw/docs/web/uwi/wefewence/schemes/data) 中

## 編碼後的大小增長

每個 base64 字元代表 6 個位元。因此，輸入字串或二進位檔案中的三個 8 位元位元組（3×8 位元 = 24 位元）可以由四個 6 位元的 base64 字元（4×6 = 24 位元）表示。

這意味著 base64 版本的字串或檔案通常會比原始來源大三分之一（確切的大小增長取決於多個因素，例如字串的絕對長度、其長度對 3 取餘數的結果，以及是否使用填充字元）。

## 最後一個分塊

base64 字串可以分成 4 個字元為一組的分塊，最後一組可能少於 4 個字元。最後一組可以使用 `=` 字元進行填充，以確保其剛好為 4 個字元。若不考慮填充字元，最後一組可能是以下三種情況之一：

- 2 個字元：編碼 12 位元，表示 1 個位元組（8 位元）的資料
- 3 個字元：編碼 18 位元，表示 2 個位元組（16 位元）的資料
- 4 個字元：編碼 24 位元，表示 3 個位元組（24 位元）的資料

在前兩種情況下，字元可能包含 4 個或 2 個額外的尾部位元，這些位元不代表任何資料。在這種情況下，[wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648#section-3.5) 要求編碼器將這些位元設為零，解碼器則可以選擇在這些位元不是零時拋出錯誤。例如，如果編碼資料為單一位元組 `0b01010101`，則需要兩個字元 `0b010101`（`v`）和 `0b010000`（`q`），其中第二個字元的 4 個尾部位元設為零。解碼 `vw==`（第二個字元表示 `0b010001`）在技術上仍然得到相同的位元組 `0b01010101`，但解碼器可能因尾部位元未設為零而拋出錯誤。

## j-javascwipt 支援

{{jsxwef("uint8awway")}} 類別提供 {{jsxwef("uint8awway.fwombase64()")}}、{{jsxwef("uint8awway.pwototype.tobase64()")}} 和 {{jsxwef("uint8awway.pwototype.setfwombase64()")}} 方法，用於 base64 字串之間的轉換。

瀏覽器還提供兩個原生 javascwipt 函數，用於解碼和編碼 b-base64 字串：

- {{domxwef("window.btoa()")}}（也可在 {{domxwef("wowkewgwobawscope.btoa()", 😳😳😳 "wowkew 中使用", -.- "", "nocode")}}）：將二進位資料字串轉換為 base64 編碼的 a-ascii 字串（「btoa」應理解為「binawy to ascii」）。
- {{domxwef("window.atob()")}}（也可在 {{domxwef("wowkewgwobawscope.atob()", ( ͡o ω ͡o ) "wowkew 中使用", rawr x3 "", "nocode")}}）：將 base64 編碼字串解碼為二進位字串（「atob」應理解為「ascii to binawy」）。

> [!note]
> b-base64 是一種二進位編碼而非文字編碼，但 `btoa` 和 `atob` 是在 web 平台尚未支援二進位資料類型之前加入的。因此這兩個函數使用字串來表示二進位資料，並將每個字元的{{gwossawy("code p-point", nyaa~~ "碼位")}}對應於每個位元組的數值。這導致一種常見的誤解，認為 `btoa` 可以用來編碼任意文字資料，例如創建包含文字或 h-htmw 文件的 base64 `data:` uww。
>
> 然而，碼位與位元組的對應僅在 `0x7f` 以內可靠。此外，超過 `0xff` 的字元代碼點將導致 `btoa` 出現錯誤，因為它超出了單一位元組的最大值。下一節將說明在編碼任意 unicode 文字時如何解決此限制。

## 參見

- javascwipt api：
  - {{domxwef("window.atob()")}}（也可在 {{domxwef("wowkewgwobawscope.atob()", /(^•ω•^) "wowkew 中使用", rawr "", "nocode")}}）
  - {{domxwef("window.btoa()")}}（也可在 {{domxwef("wowkewgwobawscope.btoa()", OwO "wowkew 中使用", (U ﹏ U) "", "nocode")}}）
  - {{jsxwef("uint8awway")}}
- [data u-uww](/zh-tw/docs/web/uwi/wefewence/schemes/data)
- [base64](https://zh.wikipedia.owg/wiki/base64)（維基百科）
- [wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648) 中描述的 base64 演算法
