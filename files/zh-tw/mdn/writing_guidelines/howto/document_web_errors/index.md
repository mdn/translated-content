---
title: 如何撰寫網路錯誤文件
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

[JavaScript 錯誤參考文件](/zh-TW/docs/Web/JavaScript/Reference/Errors)是 MDN Web 文件的一個專案，旨在幫助網路開發者解決[開發者主控台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)中出現的錯誤。為推動專案，我們需要在 MDN Web 文件上撰寫更多網路錯誤文件，以便新增更多錯誤訊息來源工具的相關連結。本文說明如何撰寫網路錯誤文件。

JavaScript 錯誤訊息中包含一個「了解更多」的連結，點擊後會導向 JavaScript 錯誤參考文件，提供更多修正問題的建議。若要撰寫這些網路錯誤文件，你需要具備 JavaScript 知識，或至少能夠深入研究 [JavaScript](/zh-TW/docs/Web/JavaScript) 相關內容。

## 第一步——決定要撰寫的網頁錯誤

- [Firefox/Gecko 錯誤訊息](https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg)
- [Chrome/V8 錯誤訊息](https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h)

## 第二步——檢查現有的網頁錯誤文件

- 查看現有的 [JavaScript 錯誤參考文件](/zh-TW/docs/Web/JavaScript/Reference/Errors)，了解網路錯誤的文件架構及撰寫方式。
- 根據你想撰寫的錯誤類型，進一步參考相關頁面內容。
- 你可以複製現有頁面的內容再行修改。

## 第三步——建立新的網頁錯誤頁面

- 所有網路錯誤頁面皆存放於此目錄下：[/docs/Web/JavaScript/Reference/Errors](/zh-TW/docs/Web/JavaScript/Reference/Errors)。
- 若要建立新頁面，請參閱我們的[如何建立、編輯、移動或刪除頁面](/zh-TW/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)。

## 第四步——記錄網路錯誤

- 你可以選擇**複製**現有錯誤文件的架構，或是**從頭開始撰寫**。
- 你的文件應至少包含：

  - **語法區塊**：列出錯誤訊息在不同瀏覽器中顯示的方式。
  - **錯誤類型**。
  - **錯誤原因及影響**：解釋為何發生此錯誤及可能影響；請在錯誤訊息內容之上進一步說明。
  - **範例**：展示觸發錯誤的實際案例（可能有多種情境），並提供修正該錯誤的正確寫法範例。
  - **相關參考資料**：提供 MDN Web 文件上其它相關內容連結，方便讀者進一步查閱。

## 第五步——交付審核

建立屬性頁面後，請提交為 Pull Request。一位審核團隊成員將自動被指派來審核你的頁面。
