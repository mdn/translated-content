---
title: SMTP
slug: Glossary/SMTP
---

**SMTP**（Simple Mail Transfer Protocol，简单邮件传输协议）是用于发送的邮件的[协议](/zh-CN/docs/Glossary/Protocol)。类似于[POP3](/zh-CN/docs/Glossary/POP)和[NNTP](/zh-CN/docs/Glossary/NNTP)，它是一个[状态机](/zh-CN/docs/Glossary/State_machine)驱动的协议

该协议相对简单。最复杂的部分在于添加支持不同的验证机制（[GSSAPI](https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface)， [CRAM-MD5](https://en.wikipedia.org/wiki/CRAM-MD5)，[NTLM](https://en.wikipedia.org/wiki/NTLM)，MSN，AUTH LOGIN，AUTH PLAIN 等），处理错误响应以及在验证机制错误时进行状态回退（如服务器声明其支持某种机制但其实并不）。

## 参见

- [术语表](/zh-CN/docs/Glossary)

  - [NNTP](/zh-CN/docs/Glossary/NNTP)
  - [POP3](/zh-CN/docs/Glossary/POP)
  - [协议](/zh-CN/docs/Glossary/Protocol)
  - [状态机](/zh-CN/docs/Glossary/State_machine)

- 维基百科

  - [SMTP](https://zh.wikipedia.org/wiki/SMTP)
