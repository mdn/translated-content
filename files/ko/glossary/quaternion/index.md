---
title: 사원수 (Quaternion)
slug: Glossary/Quaternion
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**사원수(quaternion)** 는 두 개의 3D 벡터의 몫이며 3D 그래픽과 가속도계 기반 센서에서 방향 또는 회전 데이터를 나타내는 데 사용됩니다.

수학적 사원수는 이보다 더 복잡하지만, [WebGL](/ko/docs/Glossary/WebGL) 또는 [WebXR](/ko/docs/Web/API/WebXR_Device_API)를 사용하는 동안 회전을 나타내는 데 사용되는 **단위 사원수(unit quaternions)** (또는 **회전 사원수(rotational quaternions)**)는 예를 들어 3D 포인트와 동일한 구문을 사용하여 표현됩니다. 따라서, {{domxref("DOMPoint")}} (또는 {{domxref("DOMPointReadOnly")}}) 타입은 사원수를 저장하는 데 사용됩니다.

## 같이 보기

- 위키백과의 [사원수와 공간 회전](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)
- 위키백과의 [사원수](https://en.wikipedia.org/wiki/Quaternion)
- WebXR 장치 API 참고서에서 {{domxref("XRRigidTransform.orientation")}}
