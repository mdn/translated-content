---
title: 分组密码工作模式
slug: Glossary/Block_cipher_mode_of_operation
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

**分组密码工作模式**（Block cipher mode of operation，下简称为模式），指定应如何使用分组密码来加密或解密长于块大小的消息。

目前大多数对称密钥算法都是分组密码：这意味着它们一次加密一个块的数据。每个块的大小是固定的由算法确定的：例如，AES 使用 16 字节的块。分组密码始终与一种指定了如何安全加密长度超过块大小的消息的*模式*一起使用。例如，AES 是密码，而 CTR、CBC 和 GCM 都是模式。使用不合适的模式或不正确地使用模式会完全破坏基础加密算法提供的安全性。
