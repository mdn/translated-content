---
title: XLink
slug: Glossary/XLink
---

XLink est un standard du W3C qui sert à décrire des liens entre documents XML ou entre XML et d'autres documents. Un certain nombre de ses comportements est laissé à l'implémentation qui détermine comment ils doivent être gérés.

Des XLinks simples sont "pris en charge" dans Firefox (au moins dans SVG et MathML), bien qu'ils ne fonctionnent pas comme des liens dans le cas où un document XML brut avec des XLinks est chargé et qu'une tentative est faite pour cliquer sur des points particuliers de l'arborescence XML.

Pour ceux qui ont trouvé XLink 1.0 lourd pour les liens normaux, XLink 1.1 supprime la nécessité de spécifier `xlink:type="simple"` pour les liens simples.

XLink est utilisé dans [SVG](/fr/docs/Web/SVG), [MathML](/fr/docs/Web/MathML) et d'autres standards importants.

### Spécification

- [XLink 1.0](http://www.w3.org/TR/xlink/)
- [XLink 1.1](http://www.w3.org/TR/xlink11/) (actuellement au stade de brouillon de travail)

### Voir aussi

- [XML dans Mozilla](/fr/docs/XML_dans_Mozilla)
- [Code snippets:getAttributeNS](/fr/docs/Archive/Add-ons/Code_snippets/getAttributeNS) - un wrapper à utiliser avec les navigateurs qui ne supportent par cette méthode DOM
- [Code snippets:xml:base function](/fr/docs/Archive/Add-ons/Code_snippets/XML/base_function) - une tentative grossière de trouver un XLink complet en se basant sur un attribut xlink:href (ou \<xi:include href=>) et sur son xml:base ou celui de son ancêtre.
