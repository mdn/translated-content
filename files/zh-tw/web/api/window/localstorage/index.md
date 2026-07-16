---
title: Window：localStorage 屬性
slug: Web/API/Window/localStorage
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("Web Storage API")}}

{{domxref("window")}} 介面的 **`localStorage`** 唯讀屬性允許你存取一個用於{{DOMxRef("Document", "文件", "", "1")}}的{{glossary("origin", "源")}}的 {{DOMxRef("Storage")}} 物件；儲存的資料會跨瀏覽器工作階段保存。

`localStorage` 與 {{DOMxRef("Window.sessionStorage", "sessionStorage")}} 相似，不同之處在於 `localStorage` 的資料沒有過期時間，而 `sessionStorage` 的資料會在頁面工作階段結束時（也就是頁面關閉時）清除。（在「私密瀏覽」或「無痕」模式中載入的文件，其 `localStorage` 資料會在最後一個「私密」分頁關閉時清除。）

## 值

一個 {{DOMxRef("Storage")}} 物件，可用於存取目前同源的本機儲存空間。

### 例外

- `SecurityError`
  - : 在以下情況之一會拋出：
    - 同源不是[一個有效的協定／主機／埠元組](/zh-TW/docs/Web/Security/Defenses/Same-origin_policy#同源定義)。舉例來說，如果同源使用 `file:` 或 `data:` 協定，就可能發生這種情況。
    - 請求違反了政策決定。例如，使用者已將瀏覽器組態為防止頁面保存資料。

    請注意，如果使用者封鎖了 Cookie，瀏覽器可能會將此解釋為防止頁面保存資料的指令。

## 描述

使用 `localStorage` 儲存的鍵和值是 {{glossary("UTF-16")}} 字串格式。與物件一樣，整數鍵會自動轉換為字串。

`localStorage` 的資料**與文件的協定有關**。具體來說，對於透過 HTTP（例如 `http://example.com`）載入的網站，`localStorage` 回傳的物件與透過 HTTPS（例如 `https://example.com`）載入的相應網站的 `localStorage` 不同。

對於從 `file:` URL 載入的文件（也就是直接從使用者的本機檔案系統在瀏覽器中開啟的檔案，而不是由 web 伺服器提供），`localStorage` 的行為要求是未定義的，且可能因瀏覽器而異。

在所有目前的瀏覽器中，`localStorage` 似乎會為每個 `file:` URL 回傳一個不同的物件。換句話說，每個 `file:` URL 似乎都有自己獨特的本機儲存區域。但這種行為沒有保證，所以你不應該依賴它，因為如上所述，`file:` URL 的要求仍然是未定義的。因此，瀏覽器可能隨時更改其對 `localStorage` 的 `file:` URL 處理方式。事實上，一些瀏覽器隨著時間的推移*已經*改變了它們的處理方式。

## 範例

以下程式碼片段存取目前網域的本機 {{DOMxRef("Storage")}} 物件，並使用 {{DOMxRef("Storage.setItem()")}} 向其新增一個資料項目。

```js
localStorage.setItem("myCat", "Tom");
```

讀取 `localStorage` 項目的語法如下：

```js
const cat = localStorage.getItem("myCat");
```

移除 `localStorage` 項目的語法如下：

```js
localStorage.removeItem("myCat");
```

移除所有 `localStorage` 項目的語法如下：

```js
localStorage.clear();
```

> [!NOTE]
> 請參閱[使用 Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) 文章以取得完整範例。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{DOMxRef("Window.sessionStorage")}}
