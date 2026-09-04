---
title: "HTMLElement : propriété contentEditable"
short-title: contentEditable
slug: Web/API/HTMLElement/contentEditable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`contentEditable`** de l'interface {{DOMxRef("HTMLElement")}} indique si l'élément est éditable ou non.

Cet attribut énuméré peut prendre les valeurs suivantes&nbsp;:

- `"true"` indique que l'élément est `contenteditable`.
- `"false"` indique que l'élément ne peut pas être édité.
- `"plaintext-only"` indique que le texte brut de l'élément est éditable, mais la mise en forme riche est désactivée.

Vous pouvez utiliser la propriété {{DOMxRef("HTMLElement.isContentEditable")}} pour tester la valeur booléenne calculée de cette propriété.

Si l'attribut est absent ou si sa valeur est invalide, il hérite de la valeur de son élément parent&nbsp;: l'élément sera donc éditable (ou non) selon le parent.

## Valeur

Une chaîne de caractères.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.isContentEditable")}}
- L'attribut HTML universel [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable)
