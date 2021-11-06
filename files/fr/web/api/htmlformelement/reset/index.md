---
title: HTMLFormElement.reset()
slug: Web/API/HTMLFormElement/reset
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - Méthode
  - Reference
translation_of: Web/API/HTMLFormElement/reset
---
{{APIRef("HTML DOM")}}

La méthode **`HTMLFormElement.reset()`** restaure les valeurs par défaut des éléments du formulaire. Cette méthode fait la même chose que lorsqu'on clique sur un bouton de type `reset`.

Si un élément du formulaire (comme un bouton reset par exemple) a un `name` ou `id` valant _reset_, celui-ci remplacera la méthode reset du formulaire. Les attributs des éléments, comme `disabled`, ne sont pas réinitialisés.

## Syntaxe

    HTMLFormElement.reset()

## Exemple

    document.getElementById("myform").reset();

## Spécification
