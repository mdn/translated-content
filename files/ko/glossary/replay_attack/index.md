---
title: 재전송 공격 (Replay attack)
slug: Glossary/Replay_attack
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{GlossarySidebar}}

웹 보안에서, '재전송 공격 (Replay attack)'은 공격자가 이전에 전송된 메시지를 가로채서 나중에 다시 전송하여 원래의 메시지와 동일한 자격 증명을 얻을 때 발생하며, 잠재적으로 다른 페이로드나 명령이 포함되어 있는 메시지를 다시 보내 공격하는 것을 의미합니다.

수신자가 전송의 신뢰성을 확인하는 데 사용 가능한 고유하고 일회성의 식별자를 각 메시지에 포함시키고 있으면 재생 공격을 방지할 수 있습니다. 이 식별자는 세션 토큰 또는 '한 번만 사용되는 숫자(number used only once, nonce)' 형식을 가질 수 있습니다.

## 같이 보기

- 위키백과의 [Replay attack](https://en.wikipedia.org/wiki/Replay_attack)
