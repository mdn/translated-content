---
title: 重放攻击
slug: Glossary/Replay_attack
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

在 Web 安全中，*重放攻击*是指攻击者拦截先前发送的消息并稍后重新发送以获取与原始消息相同的凭据，可能使用不同的有效载荷或指令。

可以通过在每条消息中包含一个唯一的、一次性的标识符来防止重放攻击，接收方可以使用该标识符验证传输的真实性。此标识符可以采用会话令牌或“仅使用一次的数字”（nonce）。

## 参见

- 维基百科上的[重放攻击](https://zh.wikipedia.org/wiki/重放攻击)
