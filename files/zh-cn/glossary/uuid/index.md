---
title: UUID
slug: Glossary/UUID
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**通用唯一标识符**（UUID）是用于在所有其他同类资源中唯一标识资源的标签。

计算机系统在本地使用非常大的随机数生成 UUID。理论上，这些 ID 可能不是全局唯一的，但重复的概率非常小。如果系统确实需要绝对唯一的 ID，则这些 ID 可能由中央机构分配。

UUID 是 128 位值，通常表示为 36 个字符的字符串，格式为 `123e4567-e89b-12d3-a456-426614174000`（5 个由连字符分隔的十六进制字符串）。有几个版本在计算方式上略有不同；例如，包含时间信息。

正式的定义可以在 [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122) 中找到。

## 参见

- 维基百科上的 [UUID](https://zh.wikipedia.org/wiki/通用唯一识别码)
- [`Crypto.randomUUID()`](/zh-CN/docs/Web/API/Crypto/randomUUID)
