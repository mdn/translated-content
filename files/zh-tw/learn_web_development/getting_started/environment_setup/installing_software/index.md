---
title: 安裝基本軟體
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
original_slug: Learn/Getting_started_with_the_web/Installing_basic_software
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

在本文中，你會知道有哪些 Web 開發的簡易工具，以及正確的安裝方式。

## 專家都用哪些工具？

- **電腦**，這東西對某些人來說再合理不過了，但可能有人用自己的手機，或在圖書館電腦上讀這篇文章。若要真正著手開發 Web，最好還是弄一台桌電或筆電（Windows、Mac、Linux 都行）。
- **文字編輯器**，用來寫程式碼。可以是文字編輯器（如 [Visual Studio Code](https://code.visualstudio.com/)、[Notepad++](https://notepad-plus-plus.org/)、[Sublime Text](https://www.sublimetext.com/)、[Atom](https://atom.io/)、[GNU Emacs](https://www.gnu.org/software/emacs/)、[VIM](https://www.vim.org/)）、也可以是混合式編輯器（如 [Dreamweaver](https://www.adobe.com/products/dreamweaver.html) 或 [WebStorm](https://www.jetbrains.com/webstorm/)）。辦公室軟體的文件編輯器並不適合，因為它們依賴許多會干擾瀏覽器排版引擎的隱藏元素。
- **Web 瀏覽器**，可測試寫好的程式碼。目前最常用的瀏覽器有 [Firefox](https://www.mozilla.org/zh-TW/firefox/new/)、[Chrome](https://www.google.com/chrome/browser/)、[Opera](https://www.opera.com/)、[Safari](https://www.apple.com/safari/)、[Internet Explorer](https://windows.microsoft.com/zh-tw/internet-explorer/download-ie) 與 [Micrososft Edge](https://www.microsoft.com/zh-tw/windows/microsoft-edge)。你也可以測試自己網站在行動裝置上呈現的效果，若目標讀者分佈甚廣，你可能必須用舊版瀏覽器（如 IE 6–8）測試。
- **圖像編輯器**，如 [GIMP](http://www.gimp.org/)、[Paint.NET](http://www.getpaint.net/)、[Photoshop](https://www.adobe.com/products/photoshop.html) 都可用來為自己的網站添增圖案。
- **版本控制系統**，可讓團隊用以協作某個專案、分享程式碼與外部檔案，更可避免編輯作業發生衝突、還可以管理伺服器的檔案。目前 [Git](http://git-scm.com/) 是最常見的版本控制工具；[GitHub](https://github.com/) 與 [GitLab](https://gitlab.com) 則是最常用的程式碼分享服務。
- **FTP 程式**，可將網頁上傳至比較老的網路託管伺服器，以利使用者檢視 ── 前述的 [Git](http://git-scm.com/) 近年來漸漸取代了 FTP── 可用的 (S)FTP 程式有 [Cyberduck](https://cyberduck.io/)、[Fetch](http://fetchsoftworks.com/)、[FileZilla](https://filezilla-project.org/)。
- **自動化系統，**如 [Grunt](http://gruntjs.com/) 或 [Gulp](http://gulpjs.com/) 可自動執行重複性的作業，例如縮減程式碼並執行測試作業。
- 範本、函式庫、框架......等等，都能加速寫出一般功能。
- 及其他更多工具！

## 我實際需要、立刻需要哪些工具？

上面一長串看起來好像很嚇人，但其實剛接觸 Web 開發時，不需了解所有的東西。我們先幫你設定最低限度的必要工具：文字編輯器和幾款主流瀏覽器。

### 安裝文字編輯器

你的電腦裡很可能已經提供基本的文字編輯器了。Windows 本身就有[記事本](https://zh.wikipedia.org/wiki/記事本)；OS X 已提供[文字編輯](<https://zh.wikipedia.org/wiki/文字編輯_(應用程式)>)；Linux 各版本不太一樣：例如 Ubuntu 就有 [gedit](https://zh.wikipedia.org/wiki/Gedit)。

而針對 Web 開發，其實有著比 Notepad 或 TextEdit 好很多的工具。我們推薦使用 [Visual Studio Code](https://code.visualstudio.com/)，因為這個自由編輯器有提供即時預覽、以及程式碼提示。

### 安裝常用瀏覽器

目前我們會安裝數款 Web 瀏覽器的桌面版，以利測試我們所寫的程式碼。先在下方找到自己所用的作業系統，再點擊你愛用的瀏覽器連結：

- Linux：[Firefox](https://www.mozilla.org/zh-TW/firefox/new/)、[Chrome](https://www.google.com/chrome/browser/)、[Opera](https://www.opera.com/)、[Brave](https://brave.com)。
- Windows：[Firefox](https://www.mozilla.org/zh-TW/firefox/new/)、[Chrome](https://www.google.com/chrome/browser/)、[Opera](https://www.opera.com/)、[Internet Explorer](https://windows.microsoft.com/zh-TW/internet-explorer/download-ie)、[Micrososft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)、[Brave](https://brave.com)。（Edge 是 Windows 10 的預設瀏覽器；如果你用的是 Windows 8 或之後版本，可以安裝 IE 10 或更高版本；否則應安裝其他瀏覽器替代）
- macOS：[Firefox](https://www.mozilla.org/zh-TW/firefox/new/)、[Chrome](https://www.google.com/chrome/browser/)、[Opera](https://www.opera.com/)、[Safari](https://www.apple.com/safari/)、[Brave](https://brave.com)。（Safari 是 iOS 與 OS X 的預設瀏覽器）

在著手開發之前，應先安裝至少兩款瀏覽器以利後續測試。

> [!NOTE]
> Internet Explorer 與當今的 web 不相容，可能會讓專案跑不動。

### 安裝伺服器軟體

有些例子需要使用伺服器軟體。你可以在 [How do you set up a local testing server?](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) 找到作法。

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
