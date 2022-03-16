---
title: Document.mozSyntheticDocument
slug: Web/API/Document/mozSyntheticDocument
tags:
  - API
  - DOM
  - Document
  - Propriétés
translation_of: Web/API/Document/mozSyntheticDocument
---
{{ ApiRef("DOM") }}

Indique si le document est synthétique ou non ; c'est-à-dire un document représentant une image autonome, une vidéo, un son ou analogue.

## Syntaxe

    var isSynthetic = document.mozSyntheticDocument;

En retour, `isSynthetic` est `true` (_vrai_) si le document est synthétique ; sinon, `false` (_faux_).

## Exemple

Il peut être utile, si vous avez un élément de menu contextuel que vous souhaitez uniquement afficher pour les documents synthétiques (ou, inversement, pour les documents qui ne sont pas synthétiques).

    var isSynthetic = document.mozSyntheticDocument;

    if (isSynthetic) {
      /* insert your menu item here */
    }

## Spécifications

Ne fait partie d'aucune spécification.
