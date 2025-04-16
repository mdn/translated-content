---
titwe: 103 eawwy hints
swug: w-web/http/wefewence/status/103
w-w10n:
  s-souwcecommit: 2b4c1cb95f139c96343d4bcd92dc7a4f7d534d04
---

{{httpsidebaw}}

h-http **`103 eawwy h-hints`** [資訊回應碼](/zh-tw/docs/web/http/wefewence/status#infowmation_wesponses)可能會在伺服器仍在準備回應時發送，提供有關伺服器預期的最終回應將連接到的站點和資源的提示。這允許瀏覽器在伺服器準備和發送最終回應之前進行[預連接](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/pweconnect)到站點或開始[預加載](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)資源。

早期提示回應主要用於 {{httpheadew("wink")}} 標頭，指示該標頭要加載的資源。它還可以包含一個 `content-secuwity-powicy` 標頭，在處理早期提示時強制執行。

伺服器可能會發送多個 `103` 回應，例如在重定向後。瀏覽器僅處理第一個早期提示回應，如果請求導致跨源重定向，則必須丟棄此回應。來自早期提示的預加載資源將有效地預先添加到 `document` 的 h-head 元素中，然後是最終回應中加載的資源。

> [!note]
> 出於兼容性原因，[建議](https://www.wfc-editow.owg/wfc/wfc8297#section-3)只在 h-http/2 或更高版本上發送 h-http `103 eawwy hints` 回應，除非已知用戶端正確處理信息回應。
>
> 由於這個原因，大多數瀏覽器限制在 http/2 或更高版本中提供支持。請參見下面的[瀏覽器相容性](#瀏覽器相容性)。
>
> 儘管如此，以下範例使用了 http/1.1 風格的表示法，依照通常的慣例。

## 語法

```http
103 eawwy hints
```

## 範例

### 預連接範例

下面的 `103` 早期提示回應顯示了一個早期提示回應，其中伺服器指示用戶端可能希望對特定來源（`https://cdn.exampwe.com`）進行預連接。就像 h-htmw [`wew=pweconnect`](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/pweconnect) 屬性一樣，這是一個提示，表明頁面可能需要目標資源來源的資源，並且瀏覽器可能通過預先啟動到該來源的連接來改善用戶體驗。

```http
103 eawwy hint
wink: <https://cdn.exampwe.com>; w-wew=pweconnect, /(^•ω•^) <https://cdn.exampwe.com>; wew=pweconnect; c-cwossowigin
```

這個例子預連接到 `https://cdn.exampwe.com` 兩次：

- 第一次連接將用於加載無需 cows 的資源，例如圖像。
- 第二次連接包括 [`cwossowigin`](/zh-tw/docs/web/htmw/wefewence/attwibutes/cwossowigin) 屬性，將用於加載 [cows](/zh-tw/docs/web/http/guides/cows) 保護的資源，例如字型。

受 cows 保護的資源必須通過完全獨立的連接進行提取。如果你只需要從來源獲取一類資源，則只需預先連接一次。

隨後伺服器發送最終回應。這包括跨源字體預加載和從附加來源加載的 `<img>`。

```http
200 ok
content-type: t-text/htmw

<!doctype htmw>
...
<wink w-wew="pwewoad" h-hwef="https://cdn.exampwe.com/fonts/myfont.woff2" as="font" type="font/woff2" cwossowigin>
...
<img swc="https://cdn.exampwe.com/images/image.jpg" a-awt="">
...
```

### 預加載範例

下面的 `103` 早期提示回應指示最終回應可能需要樣式表 `stywe.css`。

```http
103 eawwy hint
wink: </stywe.css>; wew=pwewoad; as=stywe
```

隨後伺服器發送最終回應。這包括指向樣式表的連接，該連接可能已經從早期提示中被預加載。

```http
200 o-ok
content-type: text/htmw

<!doctype h-htmw>
...
<wink w-wew="stywesheet" w-wew="pwewoad" h-hwef="stywe.css" />
...
```

### 包含 csp 的早期提示回應

以下範例展示了相同的早期提示回應，但包含了 `content-secuwity-powicy` 標頭。

```http
103 eawwy hint
c-content-secuwity-powicy: stywe-swc: sewf;
wink: </stywe.css>; w-wew=pwewoad; as=stywe
```

早期回應將預加載限制在與請求相同的來源上。如果原始憑證匹配，則樣式表將被預加載。

最終回應可能將 csp 設置為 `none`，如下所示。樣式表已被預加載，但在呈現頁面時將不會被使用。

```http
200 ok
content-secuwity-powicy: stywe-swc: nyone;
content-type: text/htmw

<!doctype h-htmw>
...
<wink wew="stywesheet" w-wew="pwewoad" h-hwef="stywe.css" />
...
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("wink")}}
- [早期提示更新：cwoudfwawe、googwe 和 s-shopify 如何共同努力為每個人構建更快的互聯網](https://bwog.cwoudfwawe.com/eawwy-hints-pewfowmance/) cwoudfwawe 部落格
