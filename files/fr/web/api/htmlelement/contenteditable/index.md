---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Référence(2)
  - contenteditable
translation_of: Web/API/HTMLElement/contentEditable
---
{{APIRef("HTML DOM")}}

La propriété **`HTMLElement.contentEditable`** est utilisée pour indiquer si un élément HTML est ou non éditable. Cet attribut peut avoir 3 valeurs&nbsp;:

- `"true"` _(vrai)_ indique que l'élément est éditable.
- `"false"` _(faux)_ indique que l'élément ne sera pas éditable.
- `"inherit"`  _(hérité)_ indique que l'élément héritera de l'état editable de son parent.

Vous pouvez utiliser la propriété {{domxref("HTMLElement.isContentEditable")}} pour tester la valeur de la propriété {{domxref("Boolean")}}.

## Syntaxe

    editable = element.contentEditable
    element.contentEditable = "true"

## Spécifications

| Specification                                                                                                | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('HTML WHATWG', 'interaction.html#contenteditable', 'contenteditable')}} | {{Spec2('HTML WHATWG')}} | Definition initiale |

## Compatibilité des navigateurs

{{Compat("api.HTMLElement.contentEditable")}}

Dans Internet Explorer, le `contentable` ne peut pas être appliqué aux {{htmlelement("table")}}, {{htmlelement("col")}}, {{htmlelement("colgroup")}}, {{htmlelement("tbody")}}, {{htmlelement("td")}}, {{htmlelement("tfoot")}}, {{htmlelement("th")}}, {{htmlelement("thead")}} et {{htmlelement("tr")}} directement. Un élément {{htmlelement("span")}} ou {{htmlelement("div")}} modifiable au niveau du contenu peut être placé à l'intérieur de chaque cellule du tableau.

## Voir aussi

- [Contenu editable](/fr/docs/Web/HTML/Contenu_editable)
- {{domxref("HTMLElement.isContentEditable")}}
- L'attribut global [contenteditable](/fr/docs/Web/HTML/Attributs_universels/contenteditable) .
