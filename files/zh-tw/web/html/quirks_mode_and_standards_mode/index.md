---
title: 怪異模式與標準模式
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
---

{{HTMLSidebar}}

很久以前，網頁通常有兩種版本：針對網景（Netscape）的 Navigator 的版本，以及針對微軟（Microsoft）的 Internet Explorer 的版本。在 W3C 創立網路標準後，為了不破壞當時既有的網站，瀏覽器不能直接起用這些標準。因此，瀏覽器導入了能分辨符合新規範、或屬於老舊網站的兩種模式。

目前瀏覽器的排版引擎有三種模式：怪異模式（Quirks mode）、接近標準模式（Almost standards mode）、以及標準模式（Standards mode）。在**怪異模式**，排版會模擬 Navigator 4 與 Internet Explorer 5 的非標準行為。為了支持在網路標準被廣泛採用前，就已經建置好的網站，這麼做是必要的。在**標準模式**，行為（期待）由 HTML 與 CSS 的規範描述起來。在**接近標準模式**，有少數的怪異行為被實行。

## 瀏覽器如何決定用哪個模式？

對 [HTML](/zh-TW/docs/Web/HTML) 文件來說，瀏覽器使用文件開頭的 DOCTYPE 來決定用怪異模式處理或標準模式處理。為了確保頁面使用標準模式，請確認你的頁面，如同本範例一樣擁有 DOCTYPE：

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body></body>
</html>
```

範例中的 `<!DOCTYPE html>` 是所有可用之中最簡單、並由 HTML5 推薦的。HTML 的早期變種也屬於推薦標準，不過今日的瀏覽器都會對這個 DOCTYPE 使用標準模式，就算是已過時的 Internet Explorer 6 也一樣。目前並沒有正當理由，去使用其他更複雜的 DOCTYPE。如果使用其他 DOCTYPE，可能會冒著觸發接近標準模式、或著怪異模式的風險。

請確定把 DOCTYPE 正確地放在 HTML 文件頂端。任何放在 DOCTYPE 前面的東西，如註解或 XML 聲明，會令 Internet Explorer 9 或更早期的瀏覽器觸發怪異模式。

在 HTML5，DOCTYPE 唯一的作用是啟用標準模式。更早期的 HTML 標準會附加其他意義，但沒有任何瀏覽器會用 DOCTYPE 去做模式間互換以外的用途。

另請參閱[不同的瀏覽器選擇不同模式](https://hsivonen.iki.fi/doctype/)的詳細說明。

### XHTML

如果你的網頁使用 [XHTML](/zh-TW/docs/XHTML) 並在 `Content-Type` HTTP 標頭使用 `application/xhtml+xml` MIME 類型，你不需要使用 DOCTYPE 啟動標準模式，因為這種文件會永遠使用標準模式。不過請注意服務頁面使用 `application/xhtml+xml` 會令 Internet Explorer 8 出於未知格式之故出現下載對話框，支持 XHTML 的第一個 Internet Explorer 版本是 Internet Explorer 9。

如果你的類 XHTML 網頁使用 `text/html` MIME 類型，瀏覽器會視為 HTML，你就需要 DOCTYPE 啟用標準模式。

## 我要如何知道目前是哪個模式？

在 Firefox，請從右鍵選單選擇*觀看頁面資訊*，然後查看*繪製模式*。

在 Internet Explorer，請按下 _F12_，然後查看*文件模式*.

## 這些模式有何不同？

請參閱[怪異模式的清單](/zh-TW/docs/Mozilla_Quirks_Mode_Behavior)還有[接近標準模式的清單](/zh-TW/docs/Mozilla/Gecko_Almost_Standards_Mode)之間的差別。
