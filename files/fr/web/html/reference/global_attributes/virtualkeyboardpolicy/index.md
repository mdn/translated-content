---
title: virtualkeyboardpolicy
slug: Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy
original_slug: Web/HTML/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 25b12ef8da856416af63a9c443e13d8f0adbca0a
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`virtualkeyboardpolicy`** est un attribut à valeur contrainte. Lorsqu'il est appliqué sur un élément qui utilise également l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable), il contrôle le comportement du clavier virtuel qui apparaît à l'écran pour les appareils comme les tablettes, téléphones tactiles ou les autres appareils où un clavier physique pourrait ne pas être disponible.

Cet attribut peut prendre l'une des valeurs suivantes&nbsp;:

- `auto`
  - : Le clavier virtuel sera automatiquement affiché lorsque l'élément recevra le focus ou sera touché.
- `""` (la chaîne de caractères vide)
  - : Synonyme de `auto`.
- `manual`
  - : L'état du clavier virtuel est découplé de la gestion du focus et du toucher sur l'élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.contentEditable`](/fr/docs/Web/API/HTMLElement/contentEditable) et [`HTMLElement.isContentEditable`](/fr/docs/Web/API/HTMLElement/isContentEditable)
- [L'API `VirtualKeyboard`](/fr/docs/Web/API/VirtualKeyboard_API)
