---
title: Navigator：registerProtocolHandler() 方法
slug: Web/API/Navigator/registerProtocolHandler
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

**{{domxref("Navigator")}}** 的 **`registerProtocolHandler()`** 方法讓網站可以將自己註冊為特定通訊協定的處理者。

## 語法

```js-nolint
registerProtocolHandler(scheme, url)
```

- protocol 是網站想要處理的 protocol 名稱，用字串表示。
- uri 是要給 handler 處理的 URI 字串。你可以在字串裡用 "%s" 來代表 escaped 過、需要處理的 URI。

### 例子

```plain
navigator.registerProtocolHandler("mailto",
                                 "https://mail.google.com/mail?view=cm&tf=0&to=%s",
                                 "Google Mail");
```

這會建立一個 handler，它允許 mailto 的鏈結將使用者帶到 Google Mail，將鏈結中指定的 email 位址插入到 URL。

### 參考資料

1. [DOM:window.navigator.registerProtocolHandler 原始網頁](/zh-TW/docs/DOM:window.navigator.registerProtocolHandler)

### 延伸閱讀

1. WHATWG's [Web Applications 1.0 working draft](http://whatwg.org/specs/web-apps/current-work/#custom-handlers)
