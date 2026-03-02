---
title: XLink
slug: Glossary/XLink
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

XLink est un standard du W3C qui sert à décrire des liens entre documents XML ou entre XML et d'autres documents. Un certain nombre de ses comportements est laissé à l'implémentation qui détermine comment ils doivent être gérés.

Des XLinks simples sont "pris en charge" dans Firefox (au moins dans SVG et MathML), bien qu'ils ne fonctionnent pas comme des liens dans le cas où un document XML brut avec des XLinks est chargé et qu'une tentative est faite pour cliquer sur des points particuliers de l'arborescence XML.

Pour ceux qui ont trouvé XLink 1.0 lourd pour les liens normaux, XLink 1.1 supprime la nécessité de spécifier `xlink:type="simple"` pour les liens simples.

XLink est utilisé dans [SVG](/fr/docs/Web/SVG), [MathML](/fr/docs/Web/MathML) et d'autres standards importants.

### Voir aussi

- [XLink 1.1 <sup>(angl.)</sup>](https://www.w3.org/TR/xlink/)
- [XML](/fr/docs/Web/XML)
- [Extrait de code&nbsp;: getAttributeNS](/fr/docs/Web/API/Element/getAttributeNS) — un wrapper pour gérer certains navigateurs ne prenant pas en charge cette méthode DOM
