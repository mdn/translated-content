---
title: Storage
slug: Web/API/Storage
---

{{APIRef("Web Storage API")}}

[Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API) 中的 **`Storage`** 介面提供了存取特定 domain session 及本機儲存的方法。舉例而言，它能夠對存取的資料進行新增、刪除、修改，

在操作上，如果是對象是 domain session storage ，會呼叫 {{domxref("Window.sessionStorage")}} 。而若是 local storage，則呼叫 {{domxref("Window.localStorage")}} 。

## 屬性

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : 返回一數字，代表儲存在 `Storage` 中的物件的數量。

## 方法

- {{domxref("Storage.key()")}}
  - : 當傳入一數字 `n`, 會返回 storage 裡第 n 個值的 key 值。
- {{domxref("Storage.getItem()")}}
  - : 當傳入一 key 值, 會返回 storage 裡此 key 值對應的 value 。
- {{domxref("Storage.setItem()")}}
  - : 當傳入 key 及 value 的值, 會在 storage 裡新增此 key 及 value 值，若 key 已存在，則會把值更新成傳入的 value。
- {{domxref("Storage.removeItem()")}}
  - : 當傳入一 key 值, 會把此 key 從 storage 裡刪除。
- {{domxref("Storage.clear()")}}
  - : 執行此方法，會刪除所有在 storage 裡的 key。

## 範例

在這裡，我們藉由呼叫 `localStorage` 來存取 `Storage` 物件，首先使用 `!localStorage.getItem('bgcolor')` 來確認 storage 裡是否有項目存在。

如果有，則執行函示 `setStyles()` ，這個函示使用 {{domxref("Storage.getItem()")}} 取得 storage 的值，並且用這些值更新頁面樣式 。

如果沒有，便執行另一個函示 `populateStorage()`，他使用 {{domxref("Storage.setItem()")}} 先設定 storage 項目的值，然後才執行`setStyles()`。

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
}
setStyles();

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);
}

function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> [!NOTE]
> 想要看這個範例完整運行，可以參考我們的 [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- [Using the Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
- {{domxref("Window.sessionStorage")}}
- {{domxref("CacheStorage")}}
