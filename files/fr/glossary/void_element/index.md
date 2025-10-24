---
title: Élément vide
slug: Glossary/Void_element
l10n:
  sourceCommit: 4654b14923a4bad8ca5244b4708c86e7f97ffd2b
---

{{GlossarySidebar}}

Un **élément vide** (<i lang="en">void element</i> en anglais) est un [élément](/fr/docs/Glossary/Element) HTML qui **ne peut pas** avoir de nœud enfant (c'est-à-dire des éléments imbriqués ou des nœuds texte). Les éléments vides n'ont qu'une balise ouvrante&nbsp;: les balises fermantes ne doivent pas être indiquées pour ces éléments.

En HTML, un élément vide ne doit pas avoir de balise fermante. Ainsi, `<input type="text"></input>` sera invalide en HTML. En revanche, pour SVG ou MathML, les éléments qui ne peuvent pas avoir de nœuds enfants peuvent utiliser une balise fermante plutôt que la syntaxe auto-fermante XML.

Les spécifications [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), et [MathML](https://www.w3.org/TR/MathML3/) définissent précisément ce que chaque élément peut contenir. Aussi, certaines combinaisons de balises n'ont pas de sémantique correcte associée.

Bien qu'on puisse ajouter des nœuds enfants à un élément vide par le biais du DOM en utilisant JavaScript, ce n'est pas une bonne pratique et le résultat obtenu pourra ne pas être fiable.

Voici la liste des éléments vides en HTML&nbsp;:

- [`<area>`](/fr/docs/Web/HTML/Reference/Elements/area)
- [`<base>`](/fr/docs/Web/HTML/Reference/Elements/base)
- [`<br>`](/fr/docs/Web/HTML/Reference/Elements/br)
- [`<col>`](/fr/docs/Web/HTML/Reference/Elements/col)
- [`<embed>`](/fr/docs/Web/HTML/Reference/Elements/embed)
- [`<hr>`](/fr/docs/Web/HTML/Reference/Elements/hr)
- [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img)
- [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input)
- [`<link>`](/fr/docs/Web/HTML/Reference/Elements/link)
- [`<meta>`](/fr/docs/Web/HTML/Reference/Elements/meta)
- [`<param>`](/fr/docs/Web/HTML/Reference/Elements/param)
- [`<source>`](/fr/docs/Web/HTML/Reference/Elements/source)
- [`<track>`](/fr/docs/Web/HTML/Reference/Elements/track)
- [`<wbr>`](/fr/docs/Web/HTML/Reference/Elements/wbr)

## Balises auto-fermantes

> [!NOTE]
> Les balises auto-fermantes (`<tag />`) n'existent pas en HTML.

Si une barre oblique `/` de fin est présente dans la balise ouvrante d'un élément HTML, les analyseurs syntaxiques HTML ignoreront ce caractère. Il est important de se rappeler cette distinction pour les éléments (comme [`<script>`](/fr/docs/Web/HTML/Reference/Elements/script) ou [`<ul>`](/fr/docs/Web/HTML/Reference/Elements/ul)) qui doivent avoir une balise fermante. Pour ces éléments, ajouter une barre oblique à la fin de la balise ouvrante ne suffira pas à fermer l'élément.

Toutefois, certains outils de formatage de code ajouteront une barre oblique de fin aux éléments vides afin de les rendre compatibles avec XHTML et d'améliorer la lisibilité. Ainsi, certains outils de formatage convertiront `<input type="text">` en `<input type="text" />`.

Les balises auto-fermantes sont requises pour les éléments vides en [XML](/fr/docs/Glossary/XML), [XHTML](/fr/docs/Glossary/XHTML), et [SVG](/fr/docs/Glossary/SVG) (par exemple, `<circle cx="50" cy="50" r="50" />`).

Pour SVG et MathML, les éléments qui ne peuvent pas avoir de nœud enfant peuvent utiliser une balise auto-fermante. Dans ces cas, si l'élément utilise une balise auto-fermante, il ne doit pas avoir de balise fermante en plus.

> [!NOTE]
> Si une barre oblique `/` est présente dans la balise ouvrante et directement précédée (sans espace) par une valeur d'attribut sans quotes, la barre oblique fera alors partie de la valeur de l'attribut plutôt que d'être ignorée par l'analyseur syntaxique. Ainsi, si on écrit `<img src=http://www.example.com/logo.svg/>`, cela signifiera que l'attribut `src` contiendra la valeur `http://www.example.com/logo.svg/` et l'URL ainsi construite est invalide.

## Voir aussi

- [Les éléments remplacés](/fr/docs/Web/CSS/CSS_images/Replaced_element_properties)
