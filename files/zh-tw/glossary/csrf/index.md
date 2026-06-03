---
title: CSRF
slug: Glossary/CSRF
---

**跨站請求偽造**（Cross-Site Request Forgery, CSRF）是一種冒充信任用戶，來傳送非預期指令的攻擊。比方說，可以在 {{glossary("URL")}} 連結背後添加惡意參數來攻擊：

```html
<img src="https://www.example.com/index.php?action=delete&id=123" />
```

對擁有 `https://www.example.com` 權限的用戶來說，`<img>` 元素會在用戶沒注意到的情況下執行 `https://www.example.com` 的操作。就算這個元素的域名不在 `https://www.example.com` 亦然。

有很多能預防 CSRF 的辦法，例如實作 {{glossary("REST", "RESTful API")}}、或添加 secure token 等等。

## 了解更多

### 一般知識

- 維基百科上的 [跨站請求偽造](https://zh.wikipedia.org/wiki/跨站請求偽造)
- [Prevention measures](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>)
- [MDN 安全手冊](/zh-TW/docs/Learn/tutorial/Information_Security_Basics)
