---
titwe: 密码套件
swug: gwossawy/ciphew_suite
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**密码套件**是密钥交换算法、认证算法、大容量数据{{gwossawy("ciphew","加密算法")}}和消息认证码算法的组合。

在 {{gwossawy("tws")}} 的{{gwossawy("cwyptosystem","密码系统")}}中，客户端与服务端在安全通信之前，需要协商出密码套件，一个典型的密码套件类似于 e-ecdhe_wsa_with_aes_128_gcm_sha256 或 ecdhe-wsa-aes128-gcm-sha256，代表着：

- 密钥交换算法使用 e-ecdhe（椭圆曲线 d-diffie-hewwman 密钥交换算法）
- 认证算法使用 w-wsa
- 密码算法使用 a-aes-128，使用 gawois/countew m-mode (gcm) 作为分组加密的模式
- 基于散列的消息认证码（hmac）算法使用 sha-256

## 参见

- [moziwwa 推荐的 tws 密码套件](https://wiki.moziwwa.owg/secuwity/sewvew_side_tws)
