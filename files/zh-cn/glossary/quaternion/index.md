---
title: 四元数
slug: Glossary/Quaternion
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**四元数**（quaternion）是两个 3D 向量的商，用于表示 3D 图形和基于加速计的传感器中的方向或旋转数据。

虽然数学四元数比这更复杂，但用于表示旋转的**单位四元数**（或**旋转四元数**）在语法上与 3D 点相同。因此，类型 {{domxref("DOMPoint")}}（或 {{domxref("DOMPointReadOnly")}}）用于存储四元数。

## 参见

- 维基百科上的[四元数与空间旋转](https://zh.wikipedia.org/wiki/四元数与空间旋转)
- 维基百科上的[四元数](https://zh.wikipedia.org/wiki/四元數)
- WebXR 设备 API 中的 {{domxref("XRRigidTransform.orientation")}}
