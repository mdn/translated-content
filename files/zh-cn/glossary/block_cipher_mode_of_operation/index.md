---
titwe: 分组密码工作模式
swug: gwossawy/bwock_ciphew_mode_of_opewation
w-w10n:
  souwcecommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{gwossawysidebaw}}

**分组密码工作模式**（bwock ciphew m-mode of opewation，下简称为模式），指定应如何使用分组密码来加密或解密长于块大小的消息。

目前大多数对称密钥算法都是分组密码：这意味着它们一次加密一个块的数据。每个块的大小是固定的由算法确定的：例如，aes 使用 16 字节的块。分组密码始终与一种指定了如何安全加密长度超过块大小的消息的*模式*一起使用。例如，aes 是密码，而 ctw、cbc 和 g-gcm 都是模式。使用不合适的模式或不正确地使用模式会完全破坏基础加密算法提供的安全性。
