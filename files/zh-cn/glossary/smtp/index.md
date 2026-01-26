---
title: SMTP
slug: Glossary/SMTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**SMTP**（简单邮件传输协议）是用于发送的邮件的{{glossary("protocol", "协议")}}。与{{glossary("POP", "邮局协议")}}和{{glossary("NNTP", "网络新闻传输协议")}}一样，它是一个{{Glossary("state machine", "状态机")}}驱动的协议。

该协议相对简单。最复杂的部分在于添加对不同的验证机制（[GSSAPI](https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface)、[CRAM-MD5](https://en.wikipedia.org/wiki/CRAM-MD5)、[NTLM](https://en.wikipedia.org/wiki/NTLM)、MSN、AUTH LOGIN、AUTH PLAIN 等）的支持、处理错误响应以及在验证机制错误时进行状态回退（如服务器声明其支持某种机制但其实并不）。

## 参见

- 维基百科上的 [SMTP](https://zh.wikipedia.org/wiki/SMTP)
- [术语表](/zh-CN/docs/Glossary)
  - {{glossary("NNTP", "网络新闻传输协议")}}
  - {{glossary("POP", "邮局协议")}}
  - {{glossary("protocol", "协议")}}
  - {{Glossary("state machine", "状态机")}}
