---
title: data URIs
slug: Web/HTTP/Basics_of_HTTP/Data_URLs
---

{{HTTPSidebar}}

`data` URIs, 由 [RFC 2397](http://tools.ietf.org/html/rfc2397) 文件定義, 允許作者在文件中嵌入檔案.

## 表達式

data URI 的表達式如下：

```plain
data:[<mediatype>][;base64],<data>
```

`mediatype` 為一 MIME type 字串，例如 JPEG 圖檔為「`image/jpeg`」，為非必要參數，若省略的話，默認值為「`text/plain;charset=US-ASCII`」。

If the data is textual, you can simply embed the text (using the appropriate entities or escapes based on the enclosing document's type). Otherwise, you can specify `base64` to embed base64-encoded binary data.

### 範例

- data:,Hello%2C%20World!
  - : 一個簡單的 text/plain data
- data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D
  - : 同前者，但經過 base64 編碼。
- data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E
  - : 一 HTML 檔，內容為`<h1>Hello, World</h1>`

## 以 base64 格式編碼資料

在 Linux 和 Mac OS X 中，可以在終端機輸入下面的程式碼來進行編碼：

```plain
uuencode -m infile remotename
```

The `infile` parameter is the name of the file you wish to encode into base64 format, and `remotename` is the remote name for the file, which isn't actually used in `data` URLs.

輸出結果如下所示：

```plain
begin-base64 664 test
YSBzbGlnaHRseSBsb25nZXIgdGVzdCBmb3IgdGV2ZXIK
====
```

The `data` URI will use the encoded data after the initial header line.

### JavaScript

請先閱讀文章《 [Base64 encoding and decoding](/zh-TW/docs/Web/JavaScript/Base64_encoding_and_decoding). 》。

## 轉換 nsIFile 至 data URI

This function returns a base 64-encoded data URI from the passed [nsIFile](/zh-TW/XPCOM_Interface_Reference/nsIFile).

```js
function generateDataURI(file) {
  var contentType = Components.classes["@mozilla.org/mime;1"]
    .getService(Components.interfaces.nsIMIMEService)
    .getTypeFromFile(file);
  var inputStream = Components.classes[
    "@mozilla.org/network/file-input-stream;1"
  ].createInstance(Components.interfaces.nsIFileInputStream);
  inputStream.init(file, 0x01, 0600, 0);
  var stream = Components.classes[
    "@mozilla.org/binaryinputstream;1"
  ].createInstance(Components.interfaces.nsIBinaryInputStream);
  stream.setInputStream(inputStream);
  var encoded = btoa(stream.readBytes(stream.available()));
  return "data:" + contentType + ";base64," + encoded;
}
```

## 安全

> **備註：** Prior to Gecko 6.0, `data` URIs inherited the security context of the page currently in the browser window if the user enters a `data` URI into the location bar. Now `data` URIs get a new, empty, security context.

## 常見的問題

以下列舉幾個再使用 `data` URIs 時常遇到的問題.

- 表達式
  - : `data` URIs 的格式十分簡單, 但是我們容易忘記在 "data" 區塊前面使用逗號, 或是不正確的將資料轉換為 base64 的格式.
- 在 HTML 的格式
  - : A `data` URI provides a file within a file, which can potentially be very wide relative to the width of the enclosing document. As a URL, the `data` should be formatable with whitespace (linefeed, tab, or spaces), but there are practical issues that arise [when using base64 encoding](http://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12).
- 長度限制
  - : Although Mozilla supports `data` URIs of essentially unlimited length, browsers are not required to support any particular maximum length of data. For example, the Opera 11 browser limits `data` URIs to around 65000 characters.
- 缺乏錯誤處理
  - : Invalid parameters in media, or typos when specifying "base64", are ignored, but no error is provided.
- 未支援 query 字串, etc.

  - : The data portion of a data URI is opaque, so an attempt to use a query string (page-specific parameters, with the syntax `<url>?parameter-data`) with a data URI will just include the query string in the data the URI represents. For example:

    ```plain
    data:text/html,lots of text...<p><a name%3D"bottom">bottom</a>?arg=val
    ```

    This represents an HTML resource whose contents are:

    ```plain
    lots of text...<p><a name="bottom">bottom</a>?arg=val
    ```

    Note: as of Firefox 6, fragments (anchors) are processed consistent with other URI schemes, thus a bare "#" in the content needs to be escaped as '%23'.

## 瀏覽器的支援

The `data` scheme is supported by Opera 7.20 and above, as well as Safari and Konqueror. Internet Explorer 7 and below, however, do not currently support it. Internet Explorer 8 and above only supports `data` URIs for images in CSS, \<link>, and \<img>.

## 參見

- [Base64 encoding and decoding](/zh-TW/docs/Web/JavaScript/Base64_encoding_and_decoding)
- {{domxref("WindowBase64.atob","atob()")}}
- {{domxref("WindowBase64.btoa","btoa()")}}
- [CSS `url()`](/zh-TW/docs/Web/CSS/uri)
- [URI](/zh-TW/docs/URI)

## 資源

- [RFC 2397](http://tools.ietf.org/html/rfc2397) — The "data" URL scheme"
