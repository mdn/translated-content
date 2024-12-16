---
title: HTTP caching
slug: Web/HTTP/Caching
---

{{HTTPSidebar}}

藉由重複使用先前取過的資源，網站與網頁應用程式能夠顯著地提升效能。caching 可以減少網路傳輸量以降低一個資源可展示的延遲時間。善用 HTTP caching 可以讓網站可以回應更多請求。

## 不同種類的快取

快取是一種儲存伺服器回復的訊息且用此存檔回覆給請求者的技術。當快取伺服器有存者一份請求檔案的回覆，快取伺服器會攔截此請求訊息，回覆給請求者存在快取上的檔案，而不是從請求者請求的網頁伺服器去請求原始檔案。這樣的運作機制能達成下列幾個目的:讓網頁伺服器不用處理每個從客戶端發出的請求，減輕機器運作的負擔。且由於傳輸起點距離更接近請求端，能讓整體請求的過程效能更加，整體請求需要更少的時間傳送資源。對一個要達成高效能的網站來講，快取一個很重要的一塊。另一方面來講，快取的請求、回復、儲存機制必須設定好，別讓存在快取伺服器的檔案都是同一個:重要的是當資源改變才去使用快取，而不是一直存放著。

快取有好幾種，但他們可以分為兩大類:共用和私有的快取。共用的快取定義是指快取伺服器上存的回覆能給好幾個不同的請求者服務。而私有的快取就相對只會服務一個請求者。此頁面講到的快取大部分都是指代理伺服器和瀏覽器的快取，但是快取還有像是閘道器快取、CDN 快取、反向代理伺服器快取 、負載平衡器快取，它們都是部屬在網頁伺服器那邊，讓網站和網頁應用程式更加穩定，效能更好，且有更好的擴增姓。

![Type of Cache](type-of-cache.png)

### 瀏覽器私有的快取

私有的快取只會服務一個使用者。你可能已經在設定瀏覽器的時候看過快取了。一個瀏覽器快取會存放所有透過 HTTP 協定下載的檔案。這類型的快取是為了方便使用者上下頁移動、存檔、或者檢視檔案原始碼等等，讓使用者不用再次向原始伺服器請求檔案。此機制同樣的增進線下瀏覽快取。

### 代理伺服器的共用快取

一個共用的快取伺服器，是指快取存放者能讓多位使用者請求的檔案副本。舉例來說，ISP 或者你的公司內部網路可能會設置代理伺服器，用來服務每個使用者，讓一些較常用的檔案可以重複使用多次，減少網路交通的流量。

## Targets of caching operations

HTTP caching is optional, but reusing a cached resource is usually desirable. However, common HTTP caches are typically limited to caching responses to {{HTTPMethod("GET")}} and may decline other methods. The primary cache key consists of the request method and target URI (oftentimes only the URI is used as only GET requests are caching targets). Common forms of caching entries are:

- Successful results of a retrieval request: a {{HTTPStatus(200)}} (OK) response to a {{HTTPMethod("GET")}} request containing a resource like HTML documents, images or files.
- Permanent redirects: a {{HTTPStatus(301)}} (Moved Permanently) response.
- Error responses: a {{HTTPStatus(404)}} (Not Found) result page.
- Incomplete results: a {{HTTPStatus(206)}} (Partial Content) response.
- Responses other than {{HTTPMethod("GET")}} if something suitable for use as a cache key is defined.

A cache entry might also consist of multiple stored responses differentiated by a secondary key, if the request is target of content negotiation. For more details see the information about the {{HTTPHeader("Vary")}} header [below](#varying_responses).

## 控制快取

### `Cache-control` 檔頭

{{HTTPHeader("Cache-Control")}} 是 HTTP/1.1 用來特別指令快取如何處理回覆和要求的通用檔頭欄位。使用此欄位和多種的指令，來定義你的快取機制。

#### 不要存任何快取

快取不該存取任何的使用者請求或者伺服器的回覆。每個請求都是送到原始的伺服器去取得資源。

```plain
Cache-Control: no-store
```

#### 快取需存取，但是要重新驗證

快取伺服器在把已儲存的複製版本傳給請求者之前，先會送一個請求給網頁伺服器做驗證。

```plain
Cache-Control: no-cache
```

#### 私有或共用的快取

共用(Public)這個指令指出此回覆訊息可以由任何快取給存取。這點可以變成很有用處，假如頁面有不容易快取成功的 HTTP 驗證的訊息或者回覆狀態碼，現在應該很容易被存取了。

相對的，私有(Private)的指令指示快取只給一個使用者使用，且不能被共用的快取伺服器給儲存過。隱私視窗(無痕模式)的快取就可能是這樣子。

```plain
Cache-Control: private
Cache-Control: public
```

#### 有效期限

在這裡最重要的指令就是"`max-age=<seconds>`" ，意思是指存放在快取伺服器上的資源有剩下多少時間被認定還是新鮮的。 跟{{HTTPHeader("Expires")}}不太一樣，這個檔頭欄位快取指的是請求此回覆的日期和時間。對於程式中不常更新的檔案，你可以積極地使用此機制。這些檔案包含了，圖檔、CSS、Javascripts 檔案等等。

想要了解更多的話，請參見下面的[Freshness](#freshness)。

```plain
Cache-Control: max-age=31536000
```

#### 驗證

當使用"`must-revalidate`"指令時，快取伺服器一定要先發送請求訊息給網頁伺服器驗證，請已經確認是過有效期限且檔案有更新的回覆的話，舊的檔案就不能使用。假如想了解更多，請參見下面的[Validation](#cache_validation)。

```plain
Cache-Control: must-revalidate
```

### `Pragma`檔頭欄位

{{HTTPHeader("Pragma")}} 是 HTTP/1.0 的檔頭欄位，此檔頭欄位沒有特別指是 HTTP 回覆怎麼處理，所以用此來取代 HTTP/1.1 `Cache-Control`通用檔頭欄位並不是很穩定。假如`Cache-Control` 檔頭欄位在傳送請求訊息時被省略掉了，此檔頭欄位運作的結果跟 `Cache-Control: no-cache`一樣`。此Pragma`欄位只能跟 HTTP/1.0 的請求者使用。

## Freshness

Once a resource is stored in a cache, it could theoretically be served by the cache forever. Caches have finite storage so items are periodically removed from storage. This process is called _cache eviction_. On the other side, some resources may change on the server so the cache should be updated. As HTTP is a client-server protocol, servers can't contact caches and clients when a resource changes; they have to communicate an expiration time for the resource. Before this expiration time, the resource is _fresh_; after the expiration time, the resource is _stale_. Eviction algorithms often privilege fresh resources over stale resources. Note that a stale resource is not evicted or ignored; when the cache receives a request for a stale resource, it forwards this request with a {{HTTPHeader("If-None-Match")}} to check if it is in fact still fresh. If so, the server returns a {{HTTPStatus("304")}} (Not Modified) header without sending the body of the requested resource, saving some bandwidth.

Here is an example of this process with a shared cache proxy:

![Show how a proxy cache acts when a doc is not cache, in the cache and fresh, in the cache and stale.](http_staleness.png)

The freshness lifetime is calculated based on several headers. If a "`Cache-Control: max-age=N`" header is specified, then the freshness lifetime is equal to N. If this header is not present, which is very often the case, it is checked if an {{HTTPHeader("Expires")}} header is present. If an `Expires` header exists, then its value minus the value of the {{HTTPHeader("Date")}} header determines the freshness lifetime.

### Heuristic freshness checking

If an origin server does not explicitly specify freshness (e.g. using {{HTTPHeader("Cache-Control")}} or {{HTTPHeader("Expires")}} header) then a heuristic approach may be used.

In this case look for a {{HTTPHeader("Last-Modified")}} header. If this header is present, then the cache's freshness lifetime is equal to the value of the `Date` header minus the value of the `Last-modified` header divided by 10. The expiration time is computed as follows:

```plain
expirationTime = responseTime + freshnessLifetime - currentAge
```

where `responseTime` is the time at which the response was received according to the browser. For more information see [RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): 4.2.2. Calculating Heuristic Freshness](https://datatracker.ietf.org/doc/html/rfc7234#section-4.2.2).

### Revved resources

The more we use cached resources, the better the responsiveness and the performance of a Web site will be. To optimize this, good practices recommend to set expiration times as far in the future as possible. This is possible on resources that are regularly updated, or often, but is problematic for resources that are rarely and infrequently updated. They are the resources that would benefit the most from caching resources, yet this makes them very difficult to update. This is typical of the technical resources included and linked from each Web pages: JavaScript and CSS files change infrequently, but when they change you want them to be updated quickly.

Web developers invented a technique that Steve Souders called _revving_[\[1\]](https://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/). Infrequently updated files are named in a specific way: in their URL, usually in the filename, a revision (or version) number is added. That way each new revision of this resource is considered as a resource on its own that _never_ changes and that can have an expiration time very far in the future, usually one year or even more. In order to have the new versions, all the links to them must be changed, that is the drawback of this method: additional complexity that is usually taken care of by the tool chain used by Web developers. When the infrequently variable resources change they induce an additional change to often variable resources. When these are read, the new versions of the others are also read.

This technique has an additional benefit: updating two cached resources at the same time will not lead to the situation where the out-dated version of one resource is used in combination with the new version of the other one. This is very important when web sites have CSS stylesheets or JS scripts that have mutual dependencies, i.e., they depend on each other because they refer to the same HTML elements.

![How the revved cache mechanism works. With minor typo fix to grammar issue: https://github.com/mdn/sprints/issues/2618](http_revved_fix_typo.png)

The revision version added to revved resources doesn't need to be a classical revision string like 1.1.3, or even a monotonously growing suite of number. It can be anything that prevent collisions, like a hash or a date.

## Cache validation

When a cached document's expiration time has been reached, it is either validated or fetched again. Validation can only occur if the server provided either a _strong validator_ or a _weak validator_.

Revalidation is triggered when the user presses the reload button. It is also triggered under normal browsing if the cached response includes the "`Cache-Control: must-revalidate`" header. Another factor is the cache validation preferences in the `Advanced->Cache` preferences panel. There is an option to force a validation each time a document is loaded.

### ETags

The {{HTTPHeader("ETag")}} response header is an _opaque-to-the-useragent_ value that can be used as a strong validator. That means that a HTTP user-agent, such as the browser, does not know what this string represents and can't predict what its value would be. If the `ETag` header was part of the response for a resource, the client can issue an {{HTTPHeader("If-None-Match")}} in the header of future requests – in order to validate the cached resource.

### Last-Modified

The {{HTTPHeader("Last-Modified")}} response header can be used as a weak validator. It is considered weak because it only has 1-second resolution. If the `Last-Modified` header is present in a response, then the client can issue an {{HTTPHeader("If-Modified-Since")}} request header to validate the cached document.

When a validation request is made, the server can either ignore the validation request and respond with a normal {{HTTPStatus(200)}} `OK`, or it can return {{HTTPStatus(304)}} `Not Modified` (with an empty body) to instruct the browser to use its cached copy. The latter response can also include headers that update the expiration time of the cached document.

## Varying responses

The {{HTTPHeader("Vary")}} HTTP response header determines how to match future request headers to decide whether a cached response can be used, or if a fresh one must be requested from the origin server.

When a cache receives a request that has a `Vary` header field, it must not use a cached response by default unless all header fields specified in the `Vary` header match in both the original (cached) request and the new request.

![The Vary header leads cache to use more HTTP headers as key for the cache.](http_vary.png)This feature is commonly used to allow a resource to be cached in uncompressed and (various) compressed forms, and served appropriately to user agents based on the encodings that they support. For example, a server can set `Vary: Accept-Encoding` to ensure that a separate version of a resource is cached for all requests that specify support for a particular set of encodings, e.g. `Accept-Encoding: gzip,deflate,sdch`.

```plain
Vary: Accept-Encoding
```

> [!NOTE]
> Use `Vary` with care—it can easily reduce the effectiveness of caching! A caching server should use [normalization](#normalization) to reduce duplicated cache entries and unnecessary requests to the origin server. This is particularly true when using `Vary` with headers and header values that can have many values.

The `Vary` header can also be useful for serving different content to desktop and mobile users, or to allow search engines to discover the mobile version of a page (and perhaps also tell them that no [Cloaking](https://en.wikipedia.org/wiki/Cloaking) is intended). This is usually achieved with the `Vary: User-Agent` header, and works because the {{HTTPHeader("User-Agent")}} header value is different for mobile and desktop clients.

```plain
Vary: User-Agent
```

### Normalization

As discussed above, caching servers will by default match future requests _only_ to requests with _exactly_ the same headers and header values. That means a request will be made to the origin and a new cache will be created for every slight variant that might be specified by different user-agents.

For example, by default all of the following result in a separate request to the origin and a separate cache entry: `Accept-Encoding: gzip,deflate,sdch`, `Accept-Encoding: gzip,deflate`, `Accept-Encoding: gzip`. This is true even though the origin server will probably respond with — and store — the same resource for all requests (a gzip)!

To avoid unnecessary requests and duplicated cache entries, caching servers should use **normalization** to pre-process the request and cache only files that are needed. For example, in the case of `Accept-Encoding` you could check for `gzip` and other compression types in the header before doing further processing, and otherwise unset the header. In "pseudo code" this might look like:

```plain
// Normalize Accept-Encoding
if (req.http.Accept-Encoding) {
  if (req.http.Accept-Encoding ~ "gzip") {
    set req.http.Accept-Encoding = "gzip";
  }
  // elsif other encoding types to check
else {
  unset req.http.Accept-Encoding;
  }
}
```

`User-Agent` has even more variation than `Accept-Encoding`. So if using `Vary: User-Agent` for caching mobile/desktop variants of files you'd similarly check for the presence of `"mobile"` and `"desktop"` in the request `User-Agent` header, and then clear it.

## See also

- [RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/rfc7234)
- [Caching Tutorial – Mark Nottingham](https://www.mnot.net/cache_docs/)
- [HTTP caching – Ilya Grigorik](https://web.dev/articles/http-cache)
- [RedBot](https://redbot.org/), a tool to check your cache-related HTTP headers.
