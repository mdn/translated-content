---
title: 密碼套件
slug: Glossary/Cipher_suite
---

密碼套件是包括了密鑰交換算法，身份認證方法，批量加密密碼({{Glossary("cipher")}})和消息認證碼的組合.

在密碼系統({{Glossary("cryptosystem")}})裏像 {{Glossary("TLS")}}, 客戶端和伺服器在它們開始安全的通訊之前必須同意密碼套件。典型的密碼套件如 ECDHE_RSA_WITH_AES_128_GCM_SHA256 或 ECDHE-RSA-AES128-GCM-SHA256, 具有如下特徵:

- ECDHE (橢圓曲綫數字簽名算法) 進行密鑰交換
- RSA 進行認證
- AES-128 作爲密碼和伽羅瓦/計數器模式 (GCM) 作爲分組密碼模式的操作
- SHA-256 作爲基於散列的消息認證碼(HMAC)

## 了解更多

- [Mozilla 推薦 TLS 的密碼套件選擇](https://wiki.mozilla.org/Security/Server_Side_TLS)
