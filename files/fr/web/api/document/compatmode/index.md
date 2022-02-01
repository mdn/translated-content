---
title: document.compatMode
slug: Web/API/Document/compatMode
tags:
  - API
  - DOM
  - Propriété
  - Reference
translation_of: Web/API/Document/compatMode
---
{{ ApiRef("DOM") }}

Indique si le document est affiché en mode dégradé ([Quirks mode](/fr/docs/Mode_quirks_de_Mozilla)) ou dans le respect des standards.

## Syntaxe

    mode = document.compatMode

## Valeurs

- `"BackCompat"` si le document est a ffiché en mode   "quirks" ;

<!---->

- mode
  - : est une  valeur énumérée qui peut être :

<!---->

- `"CSS1Compat"` si le document est affiché en mode "no-quirks" (aussi connu sous le nom de mode "standard") ou "limited-quirks" (mo de "proche du standard").

<!---->

> **Note :** tous ces modes sont maintenant définis dans les normes, de sorte que les anciens «standards» et «presque standards» sont absurdes et ne sont plus utilisés dans les normes.

## Exemple

    if (document.compatMode == "BackCompat") {
      // en mode Quirks
    }

## Spécifications

- [DOM: Document.compatMode](http://dom.spec.whatwg.org/#dom-document-compatmode)
