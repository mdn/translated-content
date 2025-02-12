---
title: Shell 提示字程式碼範例寫作指南
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

以下指南說明如何為 MDN Web 文件撰寫 Shell 提示字的程式碼範例。

## 什麼是 Shell

Shell 是一種程式，會等待使用者輸入指令並按下 Enter 鍵。為了指示使用者應該輸入哪些指令，MDN Web 文件會將它們列在程式碼區塊中，就像程式碼範例。

例如像這樣的區塊：

```bash example-good
# 這可能需要執行一段時間...
git clone https://github.com/mdn/content
cd content
```

## Shell 提示字程式碼範例通用指南

### 格式選擇

對於正確的縮排、空白與單行長度的看法一直存在爭議。這類議題的討論往往會分散對內容創作與維護的注意力。

在 MDN Web 文件，我們使用 [Prettier](https://prettier.io/) 作為程式碼格式化工具，以保持一致的程式碼風格（並避免無關緊要的討論）。你可以參考我們的[設定檔](https://github.com/mdn/content/blob/main/.prettierrc.json)來了解目前的規則，並閱讀 [Prettier 文件](https://prettier.io/docs/index.html) 以獲取更多資訊。

Prettier 會格式化所有程式碼並保持風格一致。不過，還有些額外規則需要遵守。

### Shell 程式碼區塊撰寫

在撰寫 Shell 程式碼區塊時：

- 別在 Shell 指令的開頭加入 `$` 或 `>`。這樣做不僅無助於理解，反而可能造成混淆，而且在複製指令時也沒有實際用途。
- 註解以 `#` 開頭。
- 在 Markdown 中，請選擇 `"bash"` 來標示語言。

## 參見

[Django 伺服器端開發文件](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Django)展現 Shell 提示字指令的良好呈現方式。
