---
title: MIME 類別 (IANA 媒體類別)
slug: Web/HTTP/Basics_of_HTTP/MIME_types
---

{{HTTPSidebar}}

**媒體類別**(多用途網際網路郵件擴展或是**MIME 類別**)是一種表示文件、檔案或各式位元組的標準。它被定義並規範在 IETF 的 {{RFC(6838)}}。

[國際網路號碼分配局(IANA)](https://www.iana.org/) 負責所有官方的 MIME 類別，你可以從他們的 [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) 頁面找到最新且完整的類別清單。

> **警告：** 瀏覽器會採用 MIME 類別，_而非副檔名_，來判定如何對 URL 進行處理。所以伺服器要在回應的{{HTTPHeader("Content-Type")}}裡放入正確的 MIME 類別，否則瀏覽器很有可能轉譯錯誤或是無法正常運作，造成下載的檔案無法被正常處理。

## MIME 類別的結構

最簡單的 MIME 類別由*主類別(type)*和*子類別(subtype)*組成。兩個都是字串，並由一個斜線(/)相接，且不能包含任何空格：

```plain
type/subtype
```

**_主類別(type)_** 代表廣泛性的分類，譬如`video` 或 `text`。**_子類別_**(_subtype_) 則定義該資料精確的 MIME 類別。例如 MIME 類別為`text`, 子類可能會是 `plain` (純文字), `html` ({{Glossary("HTML")}} 源碼), 或`calendar` (iCalendar/`.ics`) 檔案。

每一種主類別都可能有一組自己的子類別，MIME 類別永遠都有主類別和子類別，從來不會只有單一個。

後面加上的參數可以提供更多細節：

```plain
type/subtype;parameter=value
```

例如一個 MIME 類別的主類是 `text`, 選擇性的 `charset` 參數可以用來指明資料種所使用的字元集。如果沒有指明`charset` ，預設使用 {{Glossary("ASCII")}} (`US-ASCII`) ，除非被{{Glossary("user agent", "user agent's")}} 的設定覆蓋過去。 要指明一個 UTF-8 的文字檔，可以使用 `text/plain;charset=UTF-8` 的 MIME 類別。

MIME 類別對大小寫不敏感，但通常都會使用小寫。

### Types

There are two classes of type: **discrete** and **multipart**. Discrete types are types which represent a single file or medium, such as a single text or music file, or a single video. A multipart type is one which represents a document that's comprised of multiple component parts, each of which may have its own individual MIME type; or, a multipart type may encapsulate multiple files being sent together in one transaction. For example, multipart MIME types are used when attaching multiple files to an email.

#### Discrete types

The discrete types currently registered with the IANA are:

- `application`[List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
  - : Any kind of binary data that doesn't fall explicitly into one of the other types; either data that will be executed or interpreted in some way or binary data that requires a specific application or category of application to use. Generic binary data (or binary data whose true type is unknown) is `application/octet-stream`. Other common examples include `application/pdf`, `application/pkcs8`, and `application/zip`.
- `audio` [List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
  - : Audio or music data. Examples include `audio/mpeg`, `audio/vorbis`.
- `example`
  - : Reserved for use as a placeholder in examples showing how to use MIME types. These should never be used outside of sample code listings and documentation. `example` can also be used as a subtype; for instance, in an example related to working with audio on the web, the MIME type `audio/example` can be used to indicate that the type is a placeholder and should be replaced with an appropriate one when using the code in the real world.
- `font` [List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
  - : Font/typeface data. Common examples include `font/woff`, `font/ttf`, and `font/otf`.
- `image` [List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
  - : Image or graphical data including both bitmap and vector still images as well as animated versions of still image formats such as animated {{Glossary("GIF")}} or APNG. Common examples are `image/jpeg`, `image/png`, and `image/svg+xml`.
- `model` [List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
  - : Model data for a 3D object or scene. Examples include `model/3mf` and `model/vml`.
- `text` [List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
  - : Text-only data including any human-readable content, source code, or textual data such as comma-separated value (CSV) formatted data. Examples include `text/plain`, `text/csv`, and `text/html`.
- `video` [List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#video)
  - : Video data or files, such as MP4 movies (`video/mp4`).

For text documents without a specific subtype, `text/plain` should be used. Similarly, for binary documents without a specific or known subtype, `application/octet-stream` should be used.

#### Multipart types

**Multipart** types indicate a category of document broken into pieces, often with different MIME types; they can also be used — especially in email scenarios — to represent multiple, separate files which are all part of the same transaction. They represent a **composite document**.

With the exception of `multipart/form-data`, used in the {{HTTPMethod("POST")}} method of [HTML Forms](/zh-TW/docs/Web/Guide/HTML/Forms), and `multipart/byteranges`, used with {{HTTPStatus("206")}} `Partial Content` to send part of a document, HTTP doesn't handle multipart documents in a special way: the message is transmitted to the browser (which will likely show a "Save As" window if it doesn't know how to display the document).

There are two multipart types:

- `message` [List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
  - : A message that encapsulates other messages. This can be used, for instance, to represent an email that includes a forwarded message as part of its data, or to allow sending very large messages in chunks as if it were multiple messages. Examples include `message/rfc822` (for forwarded or replied-to message quoting) and `message/partial` to allow breaking a large message into smaller ones automatically to be reassembled by the recipient.
- `multipart` [List at IANA](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)
  - : Data that is comprised of multiple components which may individually have different MIME types. Examples include `multipart/form-data` (for data produced using the {{domxref("FormData")}} API) and `multipart/byteranges` (defined in {{RFC(7233, "5.4.1")}} and used with {{Glossary("HTTP")}}'s {{HTTPStatus(206)}} "Partial Content" response returned when the fetched data is only part of the content, such as is delivered using the {{HTTPHeader("Range")}} header).

## 重要的 MIME 類別

### application/octet-stream

這是二進制檔案的預設類別，代表未知的二進制檔案，通常瀏覽器都不執行或是會詢問是否要執行。They treat it as if the {{HTTPHeader("Content-Disposition")}} header was set to `attachment`, and propose a "Save As" dialog.

### text/plain

文字檔案的預設類別。就算是未知的文字檔案，瀏覽器都先假設他們是可以被呈現於畫面的。

> **備註：** `text/plain` 不代表"任何一種文字檔案"。例如從用於表示 CSS 檔案的{{HTMLElement("link")}}元素載了一個 `text/plain` 檔案，瀏覽器不會識別該檔案為一個有效的 CSS 檔案。CSS 的 MIME 類別必須要使用 `text/css`。

### text/css

用來套用在網頁的 CSS 檔案**一定要**配合 `text/css` 做傳輸。如果伺服器沒有將副檔名 `.css` 視為 CSS 檔案，伺服器有可能會使用 `text/plain` 或是 `application/octet-stream` 的 MIME 型態來傳輸檔案，而導致這些檔案不被大多數的瀏覽器當成 CSS 而被忽略。

### text/html

All HTML content should be served with this type. Alternative MIME types for XHTML (like `application/xhtml+xml`) are mostly useless nowadays.

> **備註：** Use `application/xml` or `application/xhtml+xml` if you want XML’s strict parsing rules, [`<![CDATA[…]]>`](/zh-TW/docs/Web/API/CDATASection) sections, or elements that aren't from HTML/SVG/MathML namespaces.

### text/javascript

Per the HTML specification, JavaScript files should always be served using the MIME type `text/javascript`. No other values are considered valid, and using any of those may result in scripts that do not load or run.

For historical reasons, the [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) (the definition of how browsers should interpret media types and figure out what to do with content that doesn't have a valid one) allows JavaScript to be served using any MIME type that essentially matches any of the following:

- `application/javascript`
- `application/ecmascript`
- `application/x-ecmascript` {{Non-standard_Inline}}
- `application/x-javascript` {{Non-standard_Inline}}
- `text/javascript`
- `text/ecmascript`
- `text/javascript1.0` {{Non-standard_Inline}}
- `text/javascript1.1` {{Non-standard_Inline}}
- `text/javascript1.2` {{Non-standard_Inline}}
- `text/javascript1.3` {{Non-standard_Inline}}
- `text/javascript1.4` {{Non-standard_Inline}}
- `text/javascript1.5` {{Non-standard_Inline}}
- `text/jscript` {{Non-standard_Inline}}
- `text/livescript` {{Non-standard_Inline}}
- `text/x-ecmascript` {{Non-standard_Inline}}
- `text/x-javascript` {{Non-standard_Inline}}

> **備註：** Even though any given {{Glossary("user agent")}} may support any or all of these, you should only use `text/javascript`. It's the only MIME type guaranteed to work now and into the future.

Some content you find may have a `charset` parameter at the end of the `text/javascript` media type, to specify the character set used to represent the code's content. This is not valid, and in most cases will result in a script not being loaded.

### Image types

Files whose MIME type is `image` contain image data. The subtype specifies which specific image file format the data represents. Only a few image types are used commonly enough to be considered safe for use on web pages:

{{page("en-US/docs/Web/Media/Formats/Image_types", "table-of-image-file-types")}}

### Audio and video types

As is the case for images, HTML doesn't mandate that web browsers support any specific file and codec types for the {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements, so it's important to consider your target audience and the range of browsers (and versions of those browsers) they may be using when choosing the file type and codecs to use for media.

Our [media container formats guide](/zh-TW/docs/Web/Media/Formats/Containers) provides a list of the file types that are commonly supported by web browsers, including information about what their special use cases may be, any drawbacks they have, and compatibility information, along with other details.

The [audio codec](/zh-TW/docs/Web/Media/Formats/Audio_codecs) and [video codec](/zh-TW/docs/Web/Media/Formats/Video_codecs) guides list the various codecs that web browsers often support, providing compatibility details along with technical information such as how many audio channels they support, what sort of compression is used, and what bit rates and so forth they're useful at. The [codecs used by WebRTC](/zh-TW/docs/Web/Media/Formats/WebRTC_codecs) guide expands upon this by specifically covering the codecs supported by the major web browsers, so you can choose the codecs that best cover the range of browsers you wish to support.

As for MIME types of audio or video files, they typically specify the container format (file type). The optional [codecs parameter](/zh-TW/docs/Web/Media/Formats/codecs_parameter) can be added to the MIME type to further specify which codecs to use and what options were used to encode the media, such as codec profile, level, or other such information.

The most commonly used MIME types used for web content are listed below. This isn't a complete list of all the types that may be available, however. See the [media container formats](/zh-TW/docs/Web/Media/Formats/Containers) guide for that.

| MIME type                                               | Audio or video type                                                                                                                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | An audio file in the WAVE container format. The PCM audio codec (WAVE codec "1") is often supported, but other codecs have limited support (if any).                                    |
| `audio/webm`                                            | An audio file in the WebM container format. Vorbis and Opus are the codecs officially supported by the WebM specification.                                                              |
| `video/webm`                                            | A video file, possibly with audio, in the WebM container format. VP8 and VP9 are the most common video codecs; Vorbis and Opus the most common audio codecs.                            |
| `audio/ogg`                                             | An audio file in the Ogg container format. Vorbis is the most common audio codec used in such a container; however, Opus is now supported by Ogg as well.                               |
| `video/ogg`                                             | A video file, possibly with audio, in the Ogg container format. Theora is the usual video codec used within it; Vorbis is the usual audio codec, although Opus is becoming more common. |
| `application/ogg`                                       | An audio or video file using the Ogg container format. Theora is the usual video codec used within it; Vorbis is the usual audio codec.                                                 |

### multipart/form-data

The `multipart/form-data` type can be used when sending the values of a completed [HTML Form](/zh-TW/docs/Web/Guide/HTML/Forms) from browser to server.

As a multipart document format, it consists of different parts, delimited by a boundary (a string starting with a double dash `--`). Each part is its own entity with its own HTTP headers, {{HTTPHeader("Content-Disposition")}}, and {{HTTPHeader("Content-Type")}} for file uploading fields.

```plain
Content-Type: multipart/form-data; boundary=aBoundaryString
(other headers associated with the multipart document as a whole)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(data)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(data)
--aBoundaryString
(more subparts)
--aBoundaryString--
```

The following `<form>`:

```html
<form action="http://localhost:8000/" method="post" enctype="multipart/form-data">
  <label>Name: <input name="myTextField" value="Test"></label>
  <label><input type="checkbox" name="myCheckBox"> Check</label>
  <label>Upload file: <input type="file" name="myFile" value="test.txt"></label>
  <button>Send the file</button>
</form>
```

will send this message:

```plain
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--
```

### multipart/byteranges

The `multipart/byteranges` MIME type is used to send partial responses to the browser.

When the {{HTTPStatus("206")}} `Partial Content` status code is sent, this MIME type indicates that the document is composed of several parts, one for each of the requested ranges. Like other multipart types, the {{HTTPHeader("Content-Type")}} uses a `boundary` to separate the pieces. Each piece has a {{HTTPHeader("Content-Type")}} header with its actual type and a {{HTTPHeader("Content-Range")}} of the range it represents.

```plain
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="vieport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## Importance of setting the correct MIME type

Most web servers send unrecognized resources as the `application/octet-stream` MIME type. For security reasons, most browsers do not allow setting a custom default action for such resources, forcing the user to save it to disk to use it.

Some common incorrect server configurations:

- RAR-compressed files. In this case, the ideal would be the true type of the original files; this is often impossible as .RAR files can hold several resources of different types. In this case, configure the server to send `application/x-rar-compressed`.
- Audio and video. Only resources with the correct MIME Type will be played in {{HTMLElement("video")}} or {{HTMLElement("audio")}} elements. Be sure to specify the correct [media type for audio and video](/zh-TW/docs/Web/Media/Formats).
- Proprietary file types. Avoid using `application/octet-stream` as most browsers do not allow defining a default behavior (like "Open in Word") for this generic MIME type. A specific type like `application/vnd.mspowerpoint` lets users open such files automatically in the presentation software of their choice.

## MIME sniffing

In the absence of a MIME type, or in certain cases where browsers believe they are incorrect, browsers may perform _MIME sniffing_ — guessing the correct MIME type by looking at the bytes of the resource.

Each browser performs MIME sniffing differently and under different circumstances. (For example, Safari will look at the file extension in the URL if the sent MIME type is unsuitable.) There are security concerns as some MIME types represent executable content. Servers can prevent MIME sniffing by sending the {{HTTPHeader("X-Content-Type-Options")}} header.

## Other methods of conveying document type

MIME types are not the only way to convey document type information:

- Filename suffixes are sometimes used, especially on Microsoft Windows. Not all operating systems consider these suffixes meaningful (such as Linux and MacOS), and there is no guarantee they are correct.
- Magic numbers. The syntax of different formats allows file-type inference by looking at their byte structure. For example, GIF files start with the `47 49 46 38 39` hexadecimal value (`GIF89`), and PNG files with `89 50 4E 47` (`.PNG`). Not all file types have magic numbers, so this is not 100% reliable either.

## See also

- [Web media technologies](/zh-TW/docs/Web/Media)
- [Guide to media types used on the web](/zh-TW/docs/Web/Media/Formats)
- [Properly configuring server MIME types](/zh-TW/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types)
