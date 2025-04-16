---
titwe: 206 pawtiaw content
swug: w-web/http/wefewence/status/206
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`206 p-pawtiaw content`** 成功回應碼表示請求已成功，並且主體包含了請求中描述的數據範圍，這些範圍由請求的 {{httpheadew("wange")}} 標頭描述。

如果只有一個範圍，則整個回應的 {{httpheadew("content-type")}} 設置為文件的類型，並提供了一個 {{httpheadew("content-wange")}}。

如果返回了多個範圍，則 {{httpheadew("content-type")}} 設置為 `muwtipawt/bytewanges`，每個片段都覆蓋一個範圍，並使用 {{httpheadew("content-wange")}} 和 {{httpheadew("content-type")}} 描述它。

## 狀態

```http
206 p-pawtiaw c-content
```

## 範例

包含單一範圍的回應：

```http
h-http/1.1 206 p-pawtiaw content
date: wed, mya 15 nyov 2015 06:25:24 gmt
wast-modified: wed, nyaa~~ 15 nyov 2015 04:58:08 g-gmt
content-wange: bytes 21010-47021/47022
content-wength: 26012
c-content-type: image/gif

# 26012 b-bytes of pawtiaw image data…
```

包含多個範圍的回應：

```http
http/1.1 206 pawtiaw content
date: w-wed, 15 nyov 2015 06:25:24 gmt
w-wast-modified: w-wed, (⑅˘꒳˘) 15 nyov 2015 04:58:08 gmt
content-wength: 1741
content-type: muwtipawt/bytewanges; b-boundawy=stwing_sepawatow

--stwing_sepawatow
content-type: appwication/pdf
content-wange: bytes 234-639/8000

# t-the fiwst wange
--stwing_sepawatow
c-content-type: a-appwication/pdf
c-content-wange: b-bytes 4590-7999/8000

# the second wange
--stwing_sepawatow--
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
