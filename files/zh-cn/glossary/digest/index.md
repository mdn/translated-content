---
title: 摘要
slug: Glossary/Digest
---

{{GlossarySidebar}}

**摘要**是由{{glossary("cryptographic hash function", "散列函数")}}从完整消息生成的更小值。理想情况下，摘要是可快速计算、不可逆且不可预测的，因此可用于表明是否有人篡改了给定的消息。

摘要可用于执行多种任务：

- 非加密类应用（例如：哈希表的索引、用于检测重复数据或唯一标识文件的指纹）
- 验证消息完整性（被篡改的消息具有不同的散列值）
- 生成伪随机数
- 生成{{glossary("key","密钥")}}

为应用选择合适的散列函数以避免冲突和可预测至关重要。

## 参见

- {{glossary("Cryptographic hash function", "密码散列函数")}}
- 维基百科上的[密码散列函数](https://zh.wikipedia.org/wiki/Cryptographic_hash_function)
