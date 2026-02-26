---
title: Quaternion
slug: Glossary/Quaternion
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **quaternion** est le quotient de deux vecteurs 3D et est utilisé en graphisme 3D ainsi que dans les capteurs à base d'accéléromètre pour représenter des données d'orientation ou de rotation.

Bien que les quaternions mathématiques soient plus complexes que cela, les **quaternions unitaires** (ou **quaternions de rotation**) utilisés pour représenter la rotation avec {{Glossary("WebGL")}} ou {{DOMxRef("WebXR_Device_API", "WebXR")}}, par exemple, sont représentés avec la même syntaxe qu'un point 3D. Ainsi, le type {{DOMxRef("DOMPoint")}} (ou {{DOMxRef("DOMPointReadOnly")}}) est utilisé pour stocker les quaternions.

## Voir aussi

- [Quaternions et rotation dans l'espace](https://fr.wikipedia.org/wiki/Quaternions_et_rotation_dans_l%27espace) sur Wikipédia
- [Quaternion](https://fr.wikipedia.org/wiki/Quaternion) sur Wikipédia
- {{DOMxRef("XRRigidTransform.orientation")}} dans la référence de l'API WebXR Device
