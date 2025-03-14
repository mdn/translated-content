---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef("Web Storage API")}}

**`localStorage`** 為一唯讀屬性, 此屬性允許你存取目前文件({{DOMxRef("Document")}})隸屬網域來源的 {{DOMxRef("Storage")}} 物件; 與 sessionStorage 不同的是其儲存資料的可存取範圍為跨瀏覽頁狀態(Browser Sessions). `localStorage` 的應用與 {{DOMxRef("Window.sessionStorage", "sessionStorage")}} 相似, 除了 `localStorage` 的儲存資料並無到期的限制, 而 `sessionStorage` 的儲存資料於目前瀏覽頁狀態結束的同時將一併被清除 — 也就是目前瀏覽器頁面被關閉的同時.

值得注意的是不論 `localStorage` 或者 `sessionStorage` **皆為專屬於目前瀏覽器頁面的通訊協定(Protocol)**.

鍵值名稱和值皆為**字串型式**(請留意, 當其為物件, 整數等將自動轉換為字串型式).

## Syntax

```plain
myStorage = window.localStorage;
```

### Value

{{DOMxRef("Storage")}} 物件 which can be used to access the current origin's local storage space.

### Exceptions

- `SecurityError`
  - : The request violates a policy decision, or the origin is not [a valid scheme/host/port tuple](/zh-TW/docs/Web/Security/Same-origin_policy#definition_of_an_origin) (this can happen if the origin uses the `file:` or `data:` scheme, for example). 舉例來說，使用者 may have their browser configured to deny permission to persist data for the specified origin.

## Example

下列的程式碼片段讀取了目前域名內的 local {{DOMxRef("Storage")}} 物件 ，並用{{DOMxRef("Storage.setItem()")}}，增加一個資料物件 item 到其中

```js
localStorage.setItem("myCat", "Tom");
```

讀取 `localStorage` 內物件的語法如下：

```js
var cat = localStorage.getItem("myCat");
```

移除 `localStorage` 內物件的語法如下：

```js
localStorage.removeItem("myCat");
```

刪除 `localStorage` 內所有物件的語法如下：

```js
// Clear all items
localStorage.clear();
```

> [!NOTE]
> Please refer to the [Using the Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) article for a full example.

## Specifications

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- [Using the Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Local storage with Window.localStorage](/zh-TW/docs/Web/API/Window/localStorage)
- {{DOMxRef("Window.sessionStorage")}}
