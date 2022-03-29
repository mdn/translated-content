---
title: Falsy (Valeurs de type fausses)
slug: Glossary/Falsy
tags:
  - Booléen
  - Encodage
  - Faux
  - Glossaire
  - Valeurs fausses
translation_of: Glossary/Falsy
original_slug: Glossaire/Falsy
---
Les valeurs fausses (**falsy**) sont des valeurs évaluées comme fausses quand elles sont évaluées dans un contexte {{Glossary("Boolean","booléen")}}.

{{Glossary("JavaScript")}} utilise le type {{Glossary("Type_Conversion", "contrainte")}} dans les contextes Booléens comme les {{Glossary("Conditional", "conditions")}} et les {{Glossary("Loop", "boucles")}}.

## Exemples

Exemples de valeurs _fausses_ en Javascript (qui sont traduites par false (_faux_) et, par ce fait, court-circuitent le bloc **if**) :

```js
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all) [1]
```

\[1] `document.all` a été utilisé par le passé pour détecter le navigateur et la [spécification HTML définit une infraction délibérée](http://www.whatwg.org/specs/web-apps/current-work/multipage/obsolete.html#dom-document-all) aux standards ECMAScript afin de garder une compatibilité ascendante (`if (document.all) { // Code Internet Explorer ici (Sauf IE11) }` ou en utilisant `document.all` sans vérifier s'il existe d'abord : `document.all.foo`).

Parfois écrit falsey, bien qu'en anglais, transformer un mot en adjectif avec un _-y_ fait disparaître tout e final (noise => noisy, ice => icy, shine => shiny) .

## En apprendre plus

- {{Glossary("Truthy")}}
- {{Glossary("Boolean")}}
