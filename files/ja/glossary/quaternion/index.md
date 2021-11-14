---
title: Quaternion (四元数)
slug: Glossary/Quaternion
tags:
  - Definition
  - 用語集
  - Orientation
  - Quaternion
  - WebXR
  - rotation
---
**四元数**は、2 つの 3D ベクトルの商であり、3D グラフィックや加速度計ベースのセンサーで、方位や回転のデータを表現するために使用されます。

数学的な四元数はこれよりも複雑ですが、例えば [WebGL](/en-US/docs/Glossary/WebGL) や [WebXR](/en-US/docs/Web/API/WebXR_Device_API) を使用して回転を表現するための**単位四元数** (または**回転四元数**) は、3D ポイントと同じ構文を使用して表されます。そのため、{{domxref("DOMPoint")}} (または {{domxref("DOMPointReadOnly")}}) という型を使って四元数を格納します。

## 関連情報

- {{interwiki("wikipedia", "en:Quaternions and spatial rotation")}} (Wikipedia)
- {{interwiki("wikipedia", "四元数")}} (ウィキペディア)
- {{domxref("XRRigidTransform.orientation")}} (WebXR Device API リファレンス)
