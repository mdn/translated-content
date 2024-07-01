---
title: Navigator.language
slug: Web/API/Navigator/language
---

{{APIRef("HTML DOM")}}

**`Navigator.language`** 是一個唯讀的屬性，回傳使用者偏好的語言字串，通常是瀏覽器 UI 的文字

## 語法

```js-nolint
const lang = navigator.language
```

### 值

一個 {{domxref("DOMString")}}. `lang` 儲存一個代表此語言的字串。定義在[BCP 47](https://tools.ietf.org/rfc/bcp/bcp47.txt)。範例: 合法的語言代碼 "en", "en-US", "fr", "fr-FR", "es-ES", etc.

在 iOS 小於 10.2 的 Safari 國碼是回傳小寫的喲！
"en-us", "fr-fr" etc.

## 範例

```js
if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Navigator.languages")}}
- {{domxref("navigator")}}
