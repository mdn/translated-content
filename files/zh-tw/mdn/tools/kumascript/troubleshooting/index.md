---
title: 修復 KumaScript 錯誤
slug: MDN/Tools/KumaScript/Troubleshooting
---

{{MDNSidebar}}

網頁上出現一塊又大又醜的 [KumaScript](/zh-TW/docs/MDN/Kuma/Introduction_to_KumaScript) 錯誤會惹惱讀者，好險任何擁有 MDN 帳號的人，可以編輯文件來修復錯誤。當一個頁面出現錯誤的時候，該面會被列在[有錯誤的文件](/zh-TW/docs/with-errors)裡面。網站編輯者會透過這份清單，找出並修復錯誤。這篇文章列出 KumaScript 錯誤的四種類型，還有解決他們的步驟。

## 文件解析錯誤

`DocumentParsingError` errors appear when KumaScript has trouble understanding something in the document itself. The most common cause is a syntax error in a [macro](/zh-TW/docs/MDN/Contribute/Content/Macros).

Check for:

- Use of curly braces without intending to call a macro.
  - : If you need to write \\{ in a document without calling a macro you can escape it with a \ like this: `\\{`
- Use of a special character in a macro parameter.
  - : If you need to use a " or a \ inside of a macro parameter they can be escaped with a \ like this: `\\` or `\"`
- Missing commas between macro parameters.
  - : Macro parameters need to be delimited by a comma (,) but not at the end of the list of parameters; for example `\{\{compat("html.elements.link", 2)}}`.
- HTML tags appearing inside a macro call
  - : If you apply styling to a macro, it will often break because, for example, a `</code>` tag may have appeared inside the macro code in the source code. Check the source view to see what's there, and remove any unnecessary styling.

## TemplateLoadingError

`TemplateLoadingError` errors appear when KumaScript has trouble finding which [macro](/zh-TW/docs/MDN/Contribute/Content/Macros) to include on a page.

Check for:

- Misspelling of macro names or renamed macros.
  - : There is a partial list of [macros for the MDN](/zh-TW/docs/MDN/Contribute/Content/Custom_macros), which may include the existing macro you are looking at, or its correct/new spelling.

> **備註：** You can make it quick and easy to jump to a specific macro by adding a [search keyword](http://kb.mozillazine.org/Using_keyword_searches) to Firefox. <<\<MORE SOON>>

## TemplateExecutionError

`TemplateExecutionError` errors appear when KumaScript encounters an error in the macro. These errors can only be fixed by admin users and need to be reported as bugs.

Before reporting an error check to see that it hasn't already been fixed. You can do this by forcing KumaScript to give you a fresh copy of the page by holding down <kbd>Shift</kbd> while you refresh the page (<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>R</kbd> on Windows/Linux, <kbd>Shift</kbd> + <kbd>Cmd</kbd> + <kbd>R</kbd> on Mac).

If the error persists, [report a bug](https://bugzilla.mozilla.org/enter_bug.cgi?product=Mozilla_Developer_Network&component=General#h=detail|bug), including the URL of the page and the text of the error.

## 未知和錯誤

如果錯誤並不屬於上述任何一項時，將被歸類為未知．

Check for fixes and report persistent bugs like described under [TemplateExecutionError](#TemplateExecutionError).
