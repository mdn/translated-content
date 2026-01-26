---
title: HTMLTitleElement
slug: Web/API/HTMLTitleElement
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLTitleElement`** est implémentée par l'élément {{htmlelement("title")}} d'un document. Cet élément hérite de toutes les propriétés et méthodes de l'interface {{domxref("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTitleElement.text")}}
  - : Une chaîne de caractères représentant le texte du titre du document.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{domxref("HTMLElement")}}._

## Exemple

Ne pas confondre&nbsp;: `document.title` et `document.querySelector('title')`

Le premier n'est qu'un accesseur (<i lang="en">getter/setter</i>) pour obtenir ou définir la valeur textuelle du titre du document, tandis que le second est l'objet `HTMLTitleElement`. Ainsi, vous ne pouvez pas écrire&nbsp;: `document.title.text = "Bonjour le monde !";`

À la place, vous pouvez simplement écrire&nbsp;: `document.title = "Bonjour le monde !";` ce qui est équivalent à `document.querySelector('title').text = "Bonjour le monde !";`

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{htmlelement("title")}}.
