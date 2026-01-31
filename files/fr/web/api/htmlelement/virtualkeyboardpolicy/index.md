---
title: "HTMLElement : propriété virtualKeyboardPolicy"
short-title: virtualKeyboardPolicy
slug: Web/API/HTMLElement/virtualKeyboardPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

La propriété **`virtualKeyboardPolicy`** de l'interface {{DOMxRef("HTMLElement")}} permet d'obtenir et de définir une chaîne de caractères indiquant le comportement du clavier virtuel à l'écran sur les appareils tels que les tablettes, téléphones mobiles ou autres dispositifs où un clavier matériel peut ne pas être disponible, si le contenu de l'élément est éditable (par exemple, s'il s'agit d'un élément HTML {{HTMLElement("input")}}, {{HTMLElement("textarea")}} ou d'un élément avec l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) défini).

Elle reflète la valeur de l'attribut HTML universel [`virtualkeyboardpolicy`](/fr/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy).

## Valeur

Une valeur énumérée&nbsp;; les valeurs possibles sont&nbsp;:

- `"auto"` ou une chaîne vide (`""`)
  - : Le navigateur affiche automatiquement le clavier virtuel lorsque l'utilisateur·ice appuie ou sélectionne l'élément.
- `"manual"`
  - : Le navigateur n'affiche pas automatiquement le clavier virtuel&nbsp;: l'affichage/masquage du clavier virtuel est géré manuellement par le script.

## Exemples

L'exemple suivant montre comment contrôler le comportement du clavier virtuel à l'écran via un script&nbsp;:

```js
const element = document.querySelector("input");

// le comportement du clavier virtuel à l'écran sera contrôlé manuellement par le script
element.virtualKeyboardPolicy = "manual";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`virtualkeyboardpolicy`](/fr/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy)
