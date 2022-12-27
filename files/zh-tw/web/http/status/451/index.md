---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
---

{{HTTPSidebar}}

HTTP **`451 Unavailable For Legal Reasons`** 用戶端錯誤回應碼表明用戶請求的資源，出於法律原因而無法使用，例如遭受法律訴訟的網頁。

## 狀態

```plain
451 Unavailable For Legal Reasons
```

## 示例

此示例擷取自 IETF RFC（參見以下章節）、包含了[萬世魔星](https://zh.wikipedia.org/wiki/萬世魔星)的引用。

**註：**{{HTTPHeader("Link")}} 標頭可能包含 `rel="blocked-by"` 以表明是誰封鎖該資源，而非來自其他強制力量。

需要為該資源無效的負責者，例如請求法律移除內容的人名或組織名，並不會放在 `rel="blocked-by"` link 裡面。

```plain
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html
```

```plain
<html>
      <head><title>Unavailable For Legal Reasons</title></head>
      <body>
            <h1>Unavailable For Legal Reasons</h1>
            <p>This request may not be serviced in the Roman Province
            of Judea due to the Lex Julia Majestatis, which disallows
            access to resources hosted on servers deemed to be
            operated by the People's Front of Judea.</p>
     </body>
</html>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

The information shown below has been pulled from MDN's GitHub (<https://github.com/mdn/browser-compat-data>).

{{Compat}}

## 參見

- [維基百科的 HTTP 451](https://zh.wikipedia.org/wiki/HTTP_451)
- [維基百科的華氏 451 度](https://zh.wikipedia.org/wiki/華氏451度)（該請求碼的數字詞源）
