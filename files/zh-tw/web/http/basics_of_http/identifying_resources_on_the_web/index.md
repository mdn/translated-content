---
title: Identifying resources on the Web
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
---

{{HTTPSidebar}}

HTTP 請求的目標被稱為 「資源」，其性質並未進一步定義；它可以是一個文件、一張照片或其他任何東西。每個資源都由統一資源標識符（{{Glossary("URI")}}）識別，該 URI 在整個 HTTP 中用於識別資源。

## URLs 和 URNs

### URLs

最常見的 URI 形式是統一資源定位符（URL），也稱為 _網址_。

```url
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

可以將任何一個 URLs 輸入到瀏覽器的地址欄中，以告訴它加載相關的網頁（資源）。

URL 由不同的部分組成，一些是必需的，而其他是可選的。一個更複雜的例子可能如下所示：

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

統一資源名稱（URN）是一個在特定命名空間中以名稱識別資源的 URI。

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

這兩個 URN 分別對應到：

- 《0984》一書，作者是喬治·奧威爾（George Orwell）。
- IETF 規範 7230，標題為「超文本傳輸協議（HTTP/1.1）：消息語法和路由」。

## 統一資源識別符（URIs）的語法

### 方案(Scheme) 或 協議(protocol)

- ![Protocol](mdn-url-protocol@x2.png)
  - `http://` 是個協議，它指示瀏覽器應該使用哪種協議。通常情況下，這是 HTTP 協議或其安全版本 HTTPS。網頁需要使用這兩者之一，但瀏覽器也知道如何處理其他協議，比如 `mailto:`（用於打開郵件客戶端）或 `ftp:`（用於處理文件傳輸），所以如果你看到這些協議，也不要感到驚訝。一些常見的方案包括：

| 方案        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| data        | [Data URLs](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)   |
| file        | 特定主機的文件名                                             |
| ftp         | {{Glossary("FTP","File Transfer Protocol")}}                 |
| http/https  | [超文本傳輸協議（安全）](/zh-TW/docs/Glossary/HTTP)          |
| javascript  | URL 中嵌入的 JavaScript 代碼                                 |
| mailto      | 電子郵件地址                                                 |
| ssh         | 安全外殼                                                     |
| tel         | 電話                                                         |
| urn         | 統一資源名稱                                                 |
| view-source | 資源的源代碼                                                 |
| ws/wss      | [WebSocket 連接（安全）](/zh-TW/docs/Web/API/WebSockets_API) |

### 授權

- ![Domaine Name](mdn-url-domain@x2.png)
  - `www.example.com` 是管理命名空間的域名或授權方部分，它指示正在請求的 Web 服務器。或者，也可以直接使用 IP 地址，但由於不太方便，因此在 Web 上很少使用。

### 埠(Port)

- ![Port](mdn-url-port@x2.png)
  - `:80` 是在這個示例中的端口號。它表示用於訪問 Web 服務器上的資源的技術 "閘道"。通常，如果 Web 服務器使用 HTTP 協議的標準端口（HTTP 的端口為 80，HTTPS 的端口為 443）來提供對其資源的訪問權，則可以省略它。否則，它是必需的。

### 路徑

- ![Path to the file](mdn-url-path@x2.png)
  - `/path/to/myfile.html` 是 Web 服務器上資源的路徑。在 Web 早期，這樣的路徑代表了 Web 服務器上的實際文件位置。如今，它主要是由 Web 服務器抽象的處理，並且沒有實際的物理存在。

### 詢問

- ![Parameters](mdn-url-parameters@x2.png)
  - `?key1=value1&key2=value2` 是提供給 Web 服務器的額外參數。這些參數是一個由 `&` 符號分隔的鍵/值對列表。Web 服務器可以使用這些參數在將資源返回給用戶之前執行額外的操作。每個 Web 服務器都有自己的參數處理規則，了解特定 Web 服務器如何處理參數的唯一可靠方法是請教 Web 服務器的所有者。

### 分段

- ![Anchor](mdn-url-anchor@x2.png)
  - `#SomewhereInTheDocument` 是對資源本身的另一部分的錨點。錨點代表資源內的一種 「書籤」，它告訴瀏覽器顯示位於該 「書籤」 位置的內容。例如，在 HTML 文件中，瀏覽器將滾動到定義錨點的位置；在視頻或音頻文件中，瀏覽器將嘗試跳轉到錨點代表的時間。值得注意的是， # 後面的部分，也稱為片段標識符，不會隨請求一起發送到服務器。

## 使用筆記

在 {{Glossary("HTML")}} 內容中使用 URLs 時，通常只應該使用其中一些 URL 方案。當引用子資源（即作為較大文檔的一部分加載的文件）時，應僅使用 HTTP 和 HTTPS 方案。出於安全原因，越來越多的瀏覽器已經停用了使用 FTP 來加載子資源的支援。

FTP 在頂層（例如直接輸入到瀏覽器的 URL 欄中，或作為鏈接的目標）仍然可以接受，但一些瀏覽器可能將 FTP 內容的加載委派給另一個應用程序。

## 範例

```url
https://developer.mozilla.org/en-US/docs/Learn
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
