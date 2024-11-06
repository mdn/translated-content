---
title: 델타 (Delta)
slug: Glossary/Delta
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**델타**라는 용어는 두 값 또는 상태 간의 차이를 나타냅니다.

이름은 로마 알파벳의 문자 'D'에 해당하는 그리스 문자 Δ (델타)에서 유래되었습니다. 'D'는 'difference'의 약칭으로 문자 Δ를 사용하는 것을 의미합니다.

'델타'라는 용어는 물리적 또는 가상 객체의 속도, 위치 또는 가속도 변화를 전달할 때 일반적으로 사용됩니다. 음파의 크기나 주파수의 변화를 설명할 때도 사용됩니다.

예를 들어, 화면의 객체가 왼쪽에서 오른쪽으로 얼마나 멀리 이동하는지 설명할 때, 'delta x' 또는 'Δx'라는 용어를 사용할 수 있습니다.

마찬가지로, 'X'의 새 값과 이전 값이 주어지면, 다음과 같이 델타를 계산할 수 있습니다.

```js
let deltaX = newX - oldX;
```

더 일반적으로는, 델타를 수신하고 이를 사용하여 저장된 이전 조건을 업데이트합니다.

```js
let newX = oldX + deltaX;
```

## 같이 보기

- 마우스 휠 이벤트 (예를 들어, {{domxref("WheelEvent")}}는 {{domxref("WheelEvent.deltaX", "deltaX")}}, {{domxref("WheelEvent.deltaY", "deltaY")}} 및 {{domxref("WheelEvent.deltaZ", "deltaZ")}} 속성에서 마지막 이벤트 이후 휠이 이동한 거리를 제공합니다)
