---
title: 新增消息來源閱讀工具
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
---

{{FirefoxSidebar}}

從 Firefox 2 起，消息來源（feed）可選用不同的 RSS 或 Atom 閱讀工具訂閱。這份文件提供新增其他閱讀程式支援的方法。

## 新增 Web 版閱讀工具

新增 Web 版閱讀工具需要三個設定：

- `browser.contentHandlers.types.number.title`
  - : 閱讀程式的名稱。
- `browser.contentHandlers.types.number.type`
  - : 這部份必須設定為「application/vnd.mozilla.maybe.feed」。
- `browser.contentHandlers.types.number.uri`
  - : 閱讀程式的 URI。其中以「%s」標示消息來源 URL 必須插入的地方。

`number` 應該替換成尚未使用的最小自然數。舉例來說，如果要新增一個名為「Easy Reader」的閱讀工具、且目前 0 到 4 皆已使用，則應將 `number` 設定為 5，如下：

- `browser.contentHandlers.types.5.title`: `Easy Reader`
- `browser.contentHandlers.types.5.type`: `application/vnd.mozilla.maybe.feed`
- `browser.contentHandlers.types.5.uri`: `http://www.theeasyreaderurl.com?feed=%s`

你可以用 `about:config` 手動加入這些設定，如果擴充套件要新增閱讀工具則亦可寫程式修改之。

### 從 Web 應用程式新增閱讀工具

使用 JavaScript 也可輕易新增消息來源的閱讀工具，只要用 `navigator.registerContentHandler()` 函式即可，如下：

```js
navigator.registerContentHandler(
  "application/vnd.mozilla.maybe.feed",
  "http://www.theeasyreaderurl.com?feed=%s",
  "Easy Reader",
);
```

## 新增本機閱讀程式

新增本機閱讀程式時，最簡單的方式便是使用「選項」（或「偏好設定」，名稱視作業系統而定）的「消息來源」面板直接添加。

當然也可以用擴充套件，改以程式方式新增閱讀程式。只要將`browser.feeds.handlers.application` 設定為閱讀程式的路徑即可。
