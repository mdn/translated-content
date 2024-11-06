---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
---

{{APIRef()}}

`sessionStorage` 屬性能讓開發人員訪問當前 origin 的 {{DOMxRef("Storage")}} 物件。`sessionStorage` 跟 {{DOMxRef("Window.localStorage", "localStorage")}} 很相似：唯一不同的地方是存放在 `localStorage` 的資料並沒有過期的時效；而存放在 `sessionStorage` 的資料則會在頁面 session 結束時清空。只要該頁面頁面(頁籤)沒被關閉或者有還原(restore)該頁面，資料就會保存。**開啟新頁籤或視窗會產生一個新的 sessionStorage**，跟 Session 與 Cookies 的做法不大一樣。

另應該注意：不論資料放在 `sessionStorage` 還是 `localStorage`，都被**限制在該網站的規範內，其他網站無法存取**。

## 語法

```js
// 將資料存到sessionStorage
sessionStorage.setItem("key", "value");

// 從sessionStorage取得之前存的資料
var data = sessionStorage.getItem("key");

// 從sessionStorage移除之前存的資料
sessionStorage.removeItem("key");

// 從sessionStorage移除之前存的所有資料
sessionStorage.clear();
```

### 回傳值

一個 {{DOMxRef("Storage")}} 物件.

## 範例

下面簡短的程式碼，訪問了當前域名下的 session {{DOMxRef("Storage")}} 物件，並使用 {{DOMxRef("Storage.setItem()")}} 添加了資料單元。

```js
sessionStorage.setItem("myCat", "Tom");
```

以下提供的範例為將文字輸入元件的內容自動保存，如果瀏覽器不小心重新整理，在頁面恢復後，會自動將內容還原，不會造成尚未送出的資料被清空。

```js
// 取得我們要保留內容的text field元件
var field = document.getElementById("field");

// 檢查是否有之前的autosave的內容
// 這段程式碼會在瀏覽器進入該頁面時被執行
if (sessionStorage.getItem("autosave")) {
  // 還原先前的內容到指定的text field
  field.value = sessionStorage.getItem("autosave");
}

// 註冊事件監聽text field內容的變化
field.addEventListener("change", function () {
  // 並儲存變化後的內容至sessionStorage的物件裡
  sessionStorage.setItem("autosave", field.value);
});
```

> [!NOTE]
> 完整的範例可參考這篇文章: [Using the Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相關內容

- [Using the Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
