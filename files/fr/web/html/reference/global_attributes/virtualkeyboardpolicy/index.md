---
title: "Attribut HTML universel : `virtualkeyboardpolicy`"
short-title: virtualkeyboardpolicy
slug: Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

{{SeeCompatTable}}

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`virtualkeyboardpolicy`** est un attribut énuméré. Lorsqu'il est défini sur un élément dont le contenu est éditable (par exemple un élément {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}, ou un élément ayant l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) défini), il contrôle le comportement du clavier virtuel affiché à l'écran sur des appareils comme les tablettes, les téléphones mobiles ou d'autres dispositifs où un clavier matériel peut ne pas être disponible.

L'attribut doit prendre l'une des valeurs suivantes&nbsp;:

- `auto` ou une _chaîne de caractères vide_, ce qui affiche automatiquement le clavier virtuel lorsque l'élément reçoit la sélection ou est tapé.
- `manual`, ce qui découple la sélection et le tap de l'élément de l'état du clavier virtuel.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- Les propriétés API {{DOMxRef("HTMLElement.contentEditable")}} et {{DOMxRef("HTMLElement.isContentEditable")}}
- {{DOMxRef("VirtualKeyboard_API", "L'API VirtualKeyboard", "", "nocode")}}
