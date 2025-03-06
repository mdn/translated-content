---
title: 將你的網站發佈上線
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
original_slug: Learn/Getting_started_with_the_web/Publishing_your_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

當你完成你的網頁程式碼後，你需要把它放到網路上，這樣人們才可以搜尋得到。這個章節將介紹如何快速的把你的程式碼放到網路上。

## 有哪些選項？

發佈網站並不是一個幾句話就能說得完的課題，主要是因為有太多方法能夠發佈網站。在這個章節中，我們不會介紹所有可能的方法，但是我們會簡單講解三個概念，並從初學者的角度分別說明它們的優缺點，然後一步一步帶你用一個你現階段有辦法完成的方法發佈網站。

### 取得主機（hosting）和網域名稱（domain name）

如果想要完全掌控你發佈的網站，那你可能需要花錢買：

- 主機：跟主機租借商（hosting company）的[網路伺服器](/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)（web server）租一個放置檔案的空間。你把你建置的網頁檔案放到這個空間中，然後想要連結到網頁的人就能透過網頁伺服器連結到你的網站。
- [網域名稱](/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)(domain name)：人們可以透過這個獨特的網址來尋找你的網站，像是 `http://www.mozilla.org` 或 `http://www.bbc.co.uk`。你需要向**網域名稱註冊商**（domain registrar）租借網域名稱。

許多專業的網站是用這個方法發佈的。

除此之外，你還會需要一個 {{Glossary("FTP", "File Transfer Protocol (FTP)")}} 程式（點選 [How much does it cost: software](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#software) 來取得更多資訊），這樣才能真正的把你建置的網頁檔案傳達給伺服器。FTP 程式很廣泛，但一般來說，你可以用你公司提供的資訊，像是使用者名稱、密碼以及 host name 來登入你的網頁伺服器，它就會以兩個視窗的形式分別顯示你電腦裡的檔案和你網頁伺服器上的檔案，然後你就可以移動你的檔案。

![](ftp.jpg)

#### 租借主機和網域的方法

- 在這裡我們不介紹特定的主機租借商(hosting companies)或網域名稱註冊商(domain name registrars)，你只要搜尋「web hosting」與「domain names」就能找到。所有的註冊商都會提供方法，讓你檢查你想要的網域名稱可否使用、或有沒有被註冊過。
- 你的 {{Glossary("ISP", "網路供應商")}} 可能會提供有限制的主機，這可以讓你發佈一些比較簡易的網站，雖然會有些限制，但嘗試使用它來發佈你的第一個網站也是很不錯的 — 聯絡並詢問他們！
- 有些公司提供免費的服務，像是 [Neocities](https://neocities.org/)、[Blogger](https://www.blogger.com)和 [WordPress](https://wordpress.com/)，但是我要強調，你付出多少得到多少，不過使用它們來發佈你的第一個網站何嘗不是一個理想的方法? 而且免費的服務大部分不需要 FTP 程序來上傳檔案，你只需要用它們提供的介面來移動檔案。
- 有些公司同時提供主機(hosting)和網域(domains)的服務。

### 使用線上工具，像是 GitHub 或 Google App Engine

使用工具來發佈網站：

- [GitHub](https://github.com/) 可以交流程式的平台，它提供你一個空間來存放程式碼，這個空間是基於 [Git](http://git-scm.com/) 的**版本控制系統，**你能夠透過系統共同編輯平台上的程式專案，而這個系統是開放資源，也就是說全世界的人都可以找到你的 GitHub code，包括使用它、從中學習並將它改得更好。GitHub 提供一個非常實用的工具— [GitHub Pages](https://pages.github.com/)，它能讓你發佈網站。
- [Google App Engine](https://cloud.google.com/appengine/) 是一個強大的平台，不管是要從頭建置 multi-tiered web 程式還是託管靜態網站，它都能讓你在 Google 的基礎下建置和運行應用程式。點選 [How do you host your website on Google App Engine?](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine) 以獲得更多資訊。

這類工具和託管不同，通常他們都是免費的，不過功能當然也會受限。

### 透過如 Thimble 這樣的網路 IDE

有些 web app 會模擬網站的開發環境，讓你能執行 HTML, CSS, JavaScript，顯示程式碼執行結果、並渲染至網站上－－一切都在瀏覽器的一個頁籤內完成。通常這些工具用起來都簡單、學起來簡單、基本功能還是免費的。他們用獨一無二的網址，替你保管渲染好的頁面。不過，基本功能基本上很受限，而且 app 通常都不提供如圖像這種 asset 的託管。

試試以下網站，看看你能想到什麼點子：

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

![](jsbin-screen.png)

## 透過 GitHub 發布

來看看把網站用 Github Pages 發佈多簡單。

1. 首先註冊 [GitHub](https://github.com/) 並驗證電子郵件。
2. 接著針對要上傳的檔案[建立一個 repository](https://github.com/new)。
3. 在頁面的 _Repository name_ 標籤輸入 _username_.github.io，_username_ 是指你的用戶名。例如我們的好朋友 bobsmith 就會輸入 _bobsmith.github.io_。
   另外，請勾選 _Initialize this repository with a README_ 後點選 _Create repository_。![](github-create-repo.png)
4. 之後，把網站內容拖曳到 repository 目錄，並勾選 _Commit changes_。

   > [!NOTE]
   > 請確定目錄內有 _index.html_ 檔案。

5. 現在讓瀏覽器連到 _username_.github.io 來看看你的網站。例如你的用戶名字是 _chrisdavidmills_，就連到 [chrisdavidmills.github.io](http://chrisdavidmills.github.io/)。

   > [!NOTE]
   > 讓網站上線需要一點時間。如果網站沒有馬上運行，稍等一段時間後再試一次。

想多理解的話，請參考 [GitHub Pages Help](https://help.github.com/categories/github-pages-basics/).

## 參閱

- [何謂網路伺服器](/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Understanding domain names](/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [How much does it cost to do something on the web?](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): A nice tutorial from Codecademy that goes a bit further and shows some additional techniques.
- [Cheap or Free Static Website Hosting](http://alignedleft.com/resources/cheap-web-hosting) by Scott Murray has some useful ideas on available services.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
