---
title: Quaternion (四元数)
slug: Glossary/Quaternion
---

{{GlossarySidebar}}

**四元数**は、2 つの 3D ベクトルの商であり、3D グラフィックや加速度計ベースのセンサーで、方位や回転のデータを表現するために使用されます。

数学的な四元数はこれよりも複雑ですが、例えば [WebGL](/ja/docs/Glossary/WebGL) や [WebXR](/ja/docs/Web/API/WebXR_Device_API) を使用して回転を表現するための**単位四元数** (または**回転四元数**) は、3D ポイントと同じ構文を使用して表されます。そのため、{{domxref("DOMPoint")}} (または {{domxref("DOMPointReadOnly")}}) という型を使って四元数を格納します。

## 関連情報

- [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation) (Wikipedia, 英語)
- [四元数](https://ja.wikipedia.org/wiki/四元数) (ウィキペディア)
- {{domxref("XRRigidTransform.orientation")}} (WebXR Device API リファレンス)
