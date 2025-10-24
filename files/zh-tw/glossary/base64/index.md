---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: b75355e41772e6cae6543000d3c9fed21593b4d7
---

**Base64** 是一組相似的[二進位到文字編碼](https://en.wikipedia.org/wiki/Binary-to-text_encoding)方案，透過將二進位資料轉換為底數為 64，使結果表示為 {{glossary("ASCII")}} 字串格式。_Base64_ 這個術語源自於一種特定的 [MIME 內容傳送編碼](https://zh.wikipedia.org/wiki/多用途互聯網郵件擴展#内容传输编码)。

Base64 編碼方案常用於將二進位資料進行編碼，以便在只能處理 ASCII 文字（或某種超集但仍無法接受任意二進位資料）的媒體上儲存或傳輸。這可確保資料在傳輸過程中保持完整且未被修改。Base64 的常見應用包括：

- 透過 [MIME](https://zh.wikipedia.org/wiki/多用途互聯網郵件擴展) 發送電子郵件
- 在 [XML](/zh-TW/docs/Web/XML) 中儲存複雜資料
- 將二進位資料編碼後納入 [`data:` URL](/zh-TW/docs/Web/URI/Reference/Schemes/data) 中

## Base64 字元

當「Base64」單獨用於指代特定的{{glossary("algorithm", "演算法")}}時，通常指的是 {{rfc("4648", "", 4)}} 中描述的 Base64 版本，它使用以下字母表來表示基數為 64 的數字，並使用 `=` 作為填充字元：

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## URL 及檔名安全的 Base64

此定義的一個常見變體只允許在檔名和 {{glossary("URL")}} 值中安全使用的字元。
這個版本定義於 {{rfc("4648", "", 5)}}，省略了填充並將 `+` 和 `/` 替換為 `-` 和 `_`。

如果你不是將資料放在路徑段或查詢參數中，則不需要這種編碼——例如，[data URL](/zh-TW/docs/Web/URI/Reference/Schemes/data) 兩者皆無，可以使用標準的 Base64 編碼。

## 編碼後的大小增長

每個 Base64 字元代表 6 個位元（64 = 2<sup>6</sup>）。因此，輸入字串或二進位檔案中的三個 8 位元位元組（3×8 位元 = 24 位元）可以由四個 6 位元的 Base64 字元（4×6 = 24 位元）表示。

這意味著 Base64 版本的字串或檔案通常會比原始來源大三分之一（確切的大小增長取決於多個因素，例如字串的絕對長度、其長度對 3 取餘數的結果，以及是否使用填充字元）。

## 最後一個分塊

Base64 字串可以分成 4 個字元為一組的分塊，最後一組可能少於 4 個字元。最後一組可以使用 `=` 字元進行填充，以確保其剛好為 4 個字元。若不考慮填充字元，最後一組可能是以下三種情況之一：

- 2 個字元：編碼 12 位元，表示 1 個位元組（8 位元）的資料
- 3 個字元：編碼 18 位元，表示 2 個位元組（16 位元）的資料
- 4 個字元：編碼 24 位元，表示 3 個位元組（24 位元）的資料

在前兩種情況下，字元可能包含 4 個或 2 個額外的尾部位元，這些位元不代表任何資料。在這種情況下，[RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) 要求編碼器將這些位元設為零，解碼器則可以選擇在這些位元不是零時拋出錯誤。例如，如果編碼資料為單一位元組 `0b01010101`，則需要兩個字元 `0b010101`（`V`）和 `0b010000`（`Q`），其中第二個字元的 4 個尾部位元設為零。解碼 `VR==`（第二個字元表示 `0b010001`）在技術上仍然得到相同的位元組 `0b01010101`，但解碼器可能因尾部位元未設為零而拋出錯誤。

## JavaScript 支援

{{jsxref("Uint8Array")}} 類別提供 {{jsxref("Uint8Array.fromBase64()")}}、{{jsxref("Uint8Array.prototype.toBase64()")}} 和 {{jsxref("Uint8Array.prototype.setFromBase64()")}} 方法，用於 Base64 字串之間的轉換。

瀏覽器還提供兩個原生 JavaScript 函數，用於解碼和編碼 Base64 字串：

- {{domxref("Window.btoa()")}}（也可在 {{domxref("WorkerGlobalScope.btoa()", "worker 中使用", "", "nocode")}}）：將二進位資料字串轉換為 Base64 編碼的 ASCII 字串（「btoa」應理解為「binary to ASCII」）。
- {{domxref("Window.atob()")}}（也可在 {{domxref("WorkerGlobalScope.atob()", "worker 中使用", "", "nocode")}}）：將 Base64 編碼字串解碼為二進位字串（「atob」應理解為「ASCII to binary」）。

> [!NOTE]
> Base64 是一種二進位編碼而非文字編碼，但 `btoa` 和 `atob` 是在 Web 平台尚未支援二進位資料類型之前加入的。因此這兩個函數使用字串來表示二進位資料，並將每個字元的{{glossary("code point", "碼位")}}對應於每個位元組的數值。這導致一種常見的誤解，認為 `btoa` 可以用來編碼任意文字資料，例如創建包含文字或 HTML 文件的 Base64 `data:` URL。
>
> 然而，碼位與位元組的對應僅在 `0x7f` 以內可靠。此外，超過 `0xff` 的字元代碼點將導致 `btoa` 出現錯誤，因為它超出了單一位元組的最大值。下一節將說明在編碼任意 Unicode 文字時如何解決此限制。

## 參見

- JavaScript API：
  - {{domxref("Window.atob()")}}（也可在 {{domxref("WorkerGlobalScope.atob()", "worker 中使用", "", "nocode")}}）
  - {{domxref("Window.btoa()")}}（也可在 {{domxref("WorkerGlobalScope.btoa()", "worker 中使用", "", "nocode")}}）
  - {{jsxref("Uint8Array")}}
- [Data URL](/zh-TW/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://zh.wikipedia.org/wiki/Base64)（維基百科）
- [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) 中描述的 Base64 演算法
