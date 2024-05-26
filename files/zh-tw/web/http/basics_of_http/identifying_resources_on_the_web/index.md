---
title: 識別網路上的資源
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

HTTP 請求的目標被稱為「資源」，其性質並未進一步定義；它可以是一個文件、一張照片或其他任何東西。每個資源都由統一資源標識符（{{Glossary("URI")}}）識別，該 URI 在整個 HTTP 中用於識別資源。

## URL 和 URN

### URL

最常見的 URI 形式是統一資源定位符（URL），也稱為*網址*。

```url
https://developer.mozilla.org
https://developer.mozilla.org/zh-TW/docs/Learn/
https://developer.mozilla.org/zh-TW/search?q=URL
```

可以將任何一個 URL 輸入到瀏覽器的地址欄中，以告訴它加載相關的網頁（資源）。

URL 由不同的部分組成，一些是必需的，而其他是可選的。一個更複雜的例子可能如下所示：

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URN

統一資源名稱（URN）是一個在特定命名空間中以名稱識別資源的 URI。

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

這兩個 URN 分別對應到：

- 《0984》一書，作者是喬治·奧威爾（George Orwell）。
- IETF 規範 7230，標題為「超文本傳輸協定（HTTP/1.1）：消息語法和路由」。

## 統一資源識別符的語法

### 方案或協定

- ![協定](mdn-url-protocol@x2.png)
  - : `http://` 是個協定（protocol），它指示瀏覽器應該使用哪種協定。通常情況下，這是 HTTP 協定或其安全版本 HTTPS。網頁需要使用這兩者之一，但瀏覽器也知道如何處理其他協定，比如 `mailto:`（用於打開郵件用戶端）或 `ftp:`（用於處理文件傳輸），所以如果你看到這些協定，也不要感到驚訝。一些常見的方案（scheme）包括：

| 方案        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| data        | [Data URL](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)    |
| file        | 特定主機的文件名                                             |
| ftp         | {{Glossary("FTP", "文件傳輸協定")}}                           |
| http/https  | [超文字傳輸協定（安全）](/zh-TW/docs/Glossary/HTTP)          |
| javascript  | URL 中嵌入的 JavaScript 程式碼                               |
| mailto      | 電子郵件地址                                                 |
| ssh         | 安全外殼                                                     |
| tel         | 電話                                                         |
| urn         | 統一資源名稱                                                 |
| view-source | 資源的源程式碼                                               |
| ws/wss      | [WebSocket 連接（安全）](/zh-TW/docs/Web/API/WebSockets_API) |

### 權威

- ![域名](mdn-url-domain@x2.png)
  - : `www.example.com` 是域名或管理命名空間的權威，它指示正在請求的 Web 伺服器。或者，也可以直接使用 IP 位址，但由於不太方便，因此在 Web 上很少使用。

### 通訊埠

- ![通訊埠](mdn-url-port@x2.png)
  - : `:80` 是在這個範例中的通訊埠編號。它表示用於訪問 Web 伺服器上的資源的技術「閘道器」。通常，如果 Web 伺服器使用 HTTP 協定的標準通訊埠（HTTP 的通訊埠為 80，HTTPS 的通訊埠為 443）來提供對其資源的訪問權，則可以省略它。否則，它是必需的。

### 路徑

- ![文件路徑](mdn-url-path@x2.png)
  - : `/path/to/myfile.html` 是 Web 伺服器上資源的路徑。在 Web 早期，這樣的路徑代表了 Web 伺服器上的實際文件位置。如今，它主要是由 Web 伺服器抽象的處理，並且沒有實際的物理存在。

### 查詢

- ![參數](mdn-url-parameters@x2.png)
  - : `?key1=value1&key2=value2` 是提供給 Web 伺服器的額外參數。這些參數是一個由 `&` 符號分隔的鍵／值對列表。Web 伺服器可以使用這些參數在將資源返回給用戶之前執行額外的操作。每個 Web 伺服器都有自己的參數處理規則，了解特定 Web 伺服器如何處理參數的唯一可靠方法是請教 Web 伺服器的所有者。

### 片段

- ![錨點](mdn-url-anchor@x2.png)
  - : `#SomewhereInTheDocument` 是對資源本身的另一部分的錨點。錨點代表資源內的一種「書籤」，它告訴瀏覽器顯示位於該「書籤」位置的內容。例如，在 HTML 文件中，瀏覽器將滾動到定義錨點的位置；在視訊或音訊	文件中，瀏覽器將嘗試跳轉到錨點代表的時間。值得注意的是，# 後面的部分，也稱為片段標識符，不會隨請求一起發送到伺服器。

## 使用筆記

在 {{Glossary("HTML")}} 內容中使用 URL 時，通常只應該使用其中一些 URL 方案。當引用子資源（即作為更大文件一部分加載的檔案）時，應僅使用 HTTP 和 HTTPS 方案。出於安全原因，越來越多的瀏覽器已經停用了使用 FTP 來加載子資源的支援。

FTP 在頂層（例如直接輸入到瀏覽器的 URL 欄中，或作為連接的目標）仍然可以接受，但一些瀏覽器可能將 FTP 內容的加載委派給另一個應用程序。

## 範例

```url
https://developer.mozilla.org/zh-TW/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## 規範

{{Specifications}}

## 參見

- [什麼是 URL？](/zh-TW/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [IANA URI 方案列表](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
