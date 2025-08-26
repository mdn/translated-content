---
title: DNT
slug: Web/HTTP/Reference/Headers/DNT
---

**`DNT`**（**D**o **N**ot **T**rack，**請勿追蹤**）請求標頭表明用戶針對追蹤程式的設定。它能讓用戶表達自己相較於個人化設定，更在乎個人隱私。

| 標頭類型                              | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | 是                             |

## 語法

```plain
DNT: 0
DNT: 1
```

## 指令

- 0
  - : 用戶允許目標網站追蹤之。
- 1
  - : 用戶不允許目標網站追蹤。

## 示例

### 請參考 JavaScript 的 Do Not Track

用戶的 DNT 設定也能透過 JavaScript 的 {{domxref("Navigator.doNotTrack")}} 設定檢查：

```js
navigator.doNotTrack; // "0" or "1"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} 標頭
- 維基百科的[Do Not Track](https://zh.wikipedia.org/zh-tw/%E8%AF%B7%E5%8B%BF%E8%BF%BD%E8%B8%AA)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT on Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- 瀏覽器設定 DNT 的幫助：
  - [Firefox](https://support.mozilla.org/zh-TW/kb/how-do-i-stop-websites-tracking-me)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
