---
title: Élément vide
slug: Glossary/Void_element
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **élément vide** (<i lang="en">void element</i> en anglais) est un {{Glossary("element", "élément")}} HTML qui **ne peut pas** avoir de nœud enfant (c'est-à-dire des éléments imbriqués ou des nœuds texte). Les éléments vides n'ont qu'une balise ouvrante&nbsp;; les balises fermantes ne doivent pas être indiquées pour ces éléments.

En HTML, un élément vide ne doit pas avoir de balise fermante. Ainsi, `<input type="text"></input>` sera invalide en HTML. En revanche, pour SVG ou MathML, les éléments qui ne peuvent pas avoir de nœuds enfants peuvent utiliser une balise fermante plutôt que la syntaxe auto-fermante XML.

Les spécifications [HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/), [SVG <sup>(angl.)</sup>](https://svgwg.org/svg2-draft/), et [MathML <sup>(angl.)</sup>](https://w3c.github.io/mathml/spec.html) définissent précisément ce que chaque élément peut contenir. Aussi, certaines combinaisons de balises n'ont pas de sémantique correcte associée.

Bien qu'on puisse ajouter des nœuds enfants à un élément vide par le biais du DOM en utilisant JavaScript, ce n'est pas une bonne pratique et le résultat obtenu pourra ne pas être fiable.

Voici la liste des éléments vides en HTML&nbsp;:

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}} {{Deprecated_Inline}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}

## Balises auto-fermantes

_Les balises auto-fermantes (`<tag />`) n'existent pas en HTML._

Si une barre oblique `/` de fin est présente dans la balise ouvrante d'un élément HTML, les analyseurs syntaxiques HTML ignoreront ce caractère. Il est important de se rappeler cette distinction pour les éléments (comme {{HTMLElement('script')}} ou {{HTMLElement('ul')}}) qui doivent avoir une balise fermante. Pour ces éléments, ajouter une barre oblique à la fin de la balise ouvrante ne suffira pas à fermer l'élément.

Toutefois, certains outils de formatage de code ajouteront une barre oblique de fin aux éléments vides afin de les rendre compatibles avec XHTML et d'améliorer la lisibilité. Ainsi, certains outils de formatage convertiront `<input type="text">` en `<input type="text" />`.

Les balises auto-fermantes sont requises pour les éléments vides en {{Glossary("XML")}}, {{Glossary("XHTML")}} et {{Glossary("SVG")}} (par exemple, `<circle cx="50" cy="50" r="50" />`).

Pour SVG et MathML, les éléments qui ne peuvent pas avoir de nœud enfant peuvent utiliser une balise auto-fermante. Dans ces cas, si l'élément utilise une balise auto-fermante, il ne doit pas avoir de balise fermante en plus.

> [!NOTE]
> Si une barre oblique `/` est présente dans la balise ouvrante et directement précédée (sans espace) par une valeur d'attribut sans quotes, la barre oblique fera alors partie de la valeur de l'attribut plutôt que d'être ignorée par l'analyseur syntaxique. Ainsi, si on écrit `<img src=http://www.example.com/logo.svg/>`, cela signifiera que l'attribut `src` contiendra la valeur `http://www.example.com/logo.svg/` et l'URL ainsi construite est invalide.

## Voir aussi

- {{Glossary("Replaced elements", "Les éléments remplacés")}}
