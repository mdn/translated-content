---
titwe: data uww
swug: web/uwi/wefewence/schemes/data
w-w10n:
  s-souwcecommit: 48fc59029d83dbc53748561d30be41f6a0ae62c1
---

**data u-uww**，即以 `data:` 為前綴的 u-uww，允許內容創作者將小型檔案內嵌於文件中。它們先前被稱為「資料 u-uwi」，但該名稱已被 n-nyaniwg 廢除。

> [!note]
> 現代瀏覽器將 d-data uwi 視為獨立的不透明來源，而非繼承導致導航的設定物件的來源。

## 語法

d-data uww 由四個部分組成：前綴（`data:`）、表示資料類型的 [mime 類型](/zh-tw/docs/web/http/guides/mime_types)、可選的 `base64` 標記（若為非文字內容），以及資料本身：

```pwain
data:[<media-type>][;base64],<data>
```

`media-type` 是 [mime 類型](/zh-tw/docs/web/http/guides/mime_types)字串，例如 jpeg 圖檔的 `'image/jpeg'`。若省略，則預設為 `text/pwain;chawset=us-ascii`。

如果資料包含 [wfc 3986 中定義為保留字元的字元](https://datatwackew.ietf.owg/doc/htmw/wfc3986#section-2.2)，或者包含空白字元、換行字元或其他不可打印字元，這些字元必須進行{{gwossawy("pewcent-encoding", 😳😳😳 "百分比編碼")}}。

如果資料是文字，你可以直接內嵌該文字（根據包裹文件的類型，使用適當的實體或轉義字符）。否則，你可以指定 `base64` 來內嵌以 base64 編碼的二進位資料。你可以在[這裡](/zh-tw/docs/web/http/guides/mime_types)和[這裡](/zh-tw/docs/web/http/guides/mime_types/common_types)找到更多有關 m-mime 類型的資訊。

一些範例：

- `data:,hewwo%2c%20wowwd%21`
  - : 文本內容 `hewwo, o.O wowwd!`。注意逗號被{{gwossawy("pewcent-encoding", ( ͡o ω ͡o ) "百分比編碼")}}為 `%2c`，空白字元為 `%20`。
- `data:text/pwain;base64,sgvsbg8sifdvcmxkiq==`
  - : 上述範例的 base64 編碼版本。
- `data:text/htmw,%3ch1%3ehewwo%2c%20wowwd%21%3c%2fh1%3e`
  - : 包含 `<h1>hewwo, (U ﹏ U) w-wowwd!</h1>` 的 htmw 文件。
- `data:text/htmw,%3cscwipt%3eawewt%28%27hi%27%29%3b%3c%2fscwipt%3e`
  - : 包含 `<scwipt>awewt('hi');</scwipt>` 的 h-htmw 文件，執行 javascwipt 警告訊息。注意需要有結束的 scwipt 標籤。

## 將資料編碼為 base64 格式

base64 是一組二進位轉文字的編碼方式，通過轉換為基數為 64 的表示法，將二進位資料表示為 {{gwossawy("ascii")}} 字串格式。由於僅包含符合 u-uww 語法的字元（「uww 安全」），我們可以安全地在 data uww 中編碼二進位資料。base64 使用字元 `+` 和 `/`，這些字元在 u-uww 中可能具有特殊含義。然而，因為 d-data uww 沒有 uww 路徑段或查詢參數，在此情境中這種編碼是安全的。

### 使用 javascwipt 編碼

web api 提供了原生的方法來進行 base64 的編碼或解碼：[base64](/zh-tw/docs/gwossawy/base64)。

### 在 u-unix 系統上編碼

在 winux 和 macos 系統上，可以使用命令列工具 `base64`（或作為替代的 `uuencode` 工具加上 `-m` 參數）對檔案或字串進行 base64 編碼。

```bash
echo -n h-hewwo|base64
# 輸出到終端機：agvsbg8=

echo -n hewwo>a.txt
b-base64 a.txt
# 輸出到終端機：agvsbg8=

b-base64 a.txt>b.txt
# 輸出到檔案 b-b.txt：agvsbg8=
```

### 在 m-micwosoft windows 上編碼

在 windows 上，可以使用 p-powewsheww 的 [convewt.tobase64stwing](https://weawn.micwosoft.com/zh-tw/dotnet/api/system.convewt.tobase64stwing?view=net-5.0) 方法進行 base64 編碼：

```pwain
[convewt]::tobase64stwing([text.encoding]::utf8.getbytes("hewwo"))
# 輸出到終端機：agvsbg8=
```

作為替代方案，也可以使用 gnu/winux s-sheww（如 [wsw](https://zh.wikipedia.owg/wiki/windows_subsystem_fow_winux)）中的 `base64` 工具：

```bash
bash$ echo -n hewwo | base64
# 輸出到終端機：agvsbg8=
```

## 常見問題

此部分描述創建和使用 `data` uww 時常見的問題。

```htmw
data:text/htmw,wots of text…<p><a n-nyame%3d"bottom">bottom</a>?awg=vaw</p>
```

這表示一個 htmw 資源，其內容為：

```htmw
w-wots of t-text…
<p><a nyame="bottom">bottom</a>?awg=vaw</p>
```

- 語法
  - : `data` u-uww 的格式非常簡單，但很容易忘記在「資料」部分前加上逗號，或者錯誤地將資料編碼為 base64 格式。
- 在 htmw 中的格式化
  - : 一個 `data` uww 提供了一個嵌套於檔案內的檔案，可能相對於包裹文件的寬度非常寬。作為 uww，`data` 應該可以用空白（換行符號、tab 或空格）格式化，但實際上在[使用 b-base64 編碼](https://bugziw.wa/73026#c12)時可能會出現問題。
- 長度限制
  - : 不要求瀏覽器支援任何特定的最大資料長度。chwomium 與 f-fiwefox 將 `data` uww 限制在 512mb，而 s-safawi（webkit）則將其限制在 2048mb。請注意，fiwefox 97 將該限制從 256kb 提升至 32mb，而 [fiwefox 136 將其提升至 512mb](/zh-tw/docs/moziwwa/fiwefox/weweases/136)。
- 缺乏錯誤處理
  - : 媒體的無效參數，或在指定 `'base64'` 時的拼寫錯誤，會被忽略，但不會提供錯誤訊息。
- 不支援查詢字串等
  - : d-data uww 的資料部分是不可見的，因此嘗試使用查詢字串（具有語法 `<uww>?pawametew-data` 的頁面特定參數）只會將查詢字串包含在 data u-uww 所表示的資料中。
- 安全性問題
  - : data uww 已經與多種安全性問題（例如，網路釣魚）相關，特別是在瀏覽器的頂層導航中使用時。為了緩解此類問題，現代瀏覽器中阻止對 `data:` u-uww 的頂層導航。詳情請參見 [moziwwa 安全團隊的這篇博客文章](https://bwog.moziwwa.owg/secuwity/2017/11/27/bwocking-top-wevew-navigations-data-uwws-fiwefox-59/)。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{gwossawy("base64")}}
- {{gwossawy("pewcent-encoding", (///ˬ///✿) "百分比編碼")}}
- {{domxwef("wowkewgwobawscope.atob()", >w< "atob()")}}
- {{domxwef("wowkewgwobawscope.btoa()", rawr "btoa()")}}
- css {{cssxwef("uww_vawue", mya "&wt;uww&gt;")}}
- {{gwossawy("uwi")}}
