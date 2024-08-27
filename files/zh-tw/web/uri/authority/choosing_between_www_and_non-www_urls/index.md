---
title: 選擇 www 和非 www 網址
slug: Web/URI/Authority/Choosing_between_www_and_non-www_URLs
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/zh-TW/docs/Web/URI")}}

網站擁有者經常面臨的一個問題是選擇「www」（`www.example.com`）還是「非 www」（`example.com`）網址。本頁面將提供一些建議，幫助你做出最佳選擇。

## 什麼是域名？

在 HTTP URL 中，緊隨 `http://` 或 `https://` 之後的第一個子字串稱為域名。這個域名位於托管文件的伺服器上。

伺服器不一定是一台實體機器：多個伺服器可以位於同一台實體機器上。或者，一個伺服器可以由多台機器協同運作以處理請求或平衡負載。關鍵點是，語義上*一個域名代表一個伺服器*。

## 那麼，我需要為我的網站選擇其中一個嗎？

- **是的**，你需要選擇一個並持續使用。選擇哪個作為你的規範位置是你的決定，但一旦選擇，就要持續使用。這會讓你的網站對用戶和搜索引擎看起來更一致。這包括總是連接到選擇的域（如果你在網站中使用相對 URL，這應該不難），並且總是在電子郵件、社交網路等處分享相同域的連接。
- **不必**，你可以同時使用兩個。重要的是要保持一致並且清楚哪個是官方域。**這個官方域被稱為*規範名稱*。** 你的所有絕對連接應該使用它。即便如此，你仍然可以讓另一個域名正常運行：HTTP 允許兩種技術來讓用戶或搜索引擎明確知道哪個域是規範的，同時仍然允許非規範域名正常運作並提供預期的頁面。

因此，選擇你的域名之一作為規範域名吧！下面有兩種技術可以讓非規範域名仍然正常運行。

## 規範網址的技術

有不同的方法可以選擇哪個網站是*規範*的。

### 使用 HTTP 301 重定向

在這種情況下，你需要配置接收 HTTP 請求的伺服器（「www」和「非 www」網址的伺服器很可能是同一個）以對任何非規範域名的請求作出適當的 HTTP {{HTTPStatus(301)}} 回應。這將把嘗試訪問非規範 URL 的瀏覽器重定向到它們的規範等價 URL。例如，如果你選擇使用「非 www」URL 作為規範類型，你應該將所有「www」URL 重定向到不帶「www」的等價 URL。

範例：

1. 一個伺服器接收到 `http://www.example.org/whaddup` 的請求（當規範域是 example.org）。
2. 伺服器回應一個 {{HTTPStatus(301)}} 狀態碼，並帶有 {{HTTPHeader("Location")}} 標頭 `Location: http://example.org/whaddup`。
3. 用戶端向規範域名下的位置發出請求：`http://example.org/whaddup`。

[HTML5 boilerplate 專案](https://github.com/h5bp/html5-boilerplate)有一個[如何配置 Apache 伺服器以將一個域名重定向到另一個域名的範例](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258)。

### 使用 `<link rel="canonical">`

可以在頁面中添加一個特殊的 HTML {{HTMLElement("link")}} 元素來指示頁面的規範地址。這對頁面的讀者沒有影響，但告訴搜索引擎爬蟲頁面的實際位置。這樣，搜索引擎不會多次索引同一頁面，可能導致其被視為重複內容或垃圾內容，甚至從搜索引擎結果頁中移除或降低你的頁面排名。

添加這樣的標籤時，你為兩個域提供相同的內容，告訴搜索引擎哪個 URL 是規範的。在前面的範例中，`http://www.example.org/whaddup` 將提供與 `http://example.org/whaddup` 相同的內容，但在 head 中會有一個額外的 {{HTMLElement("link")}} 元素：

```html
<link href="http://example.org/whaddup" rel="canonical" />
```

與前一種情況不同，瀏覽器歷史記錄將認為非 www 和 www URL 是獨立的條目。

## 讓你的頁面對兩者都有效

使用這些技術，你可以配置你的伺服器正確回應 www 前綴和非 www 前綴的域名。這是個好建議，因為你無法預測用戶會在瀏覽器的 URL 欄中輸入哪個 URL。這是一個選擇哪種類型作為你的規範位置，然後將另一種類型重定向到它的問題。

## 決策的考量

這是一個非常主觀的話題——可以被視為一個 [bikeshedding](https://bikeshed.com/) 的問題。如果你想深入閱讀，以下是一些資源：

- [裸域的選項](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains)（2020）
- [WWW 與非 WWW——哪個對 WordPress SEO 更好？](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/)（2023）

## 參見

- [人們在 URL 欄中輸入什麼的統計數據](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/)（2011）
