---
title: x-ms-acceleratorkey
slug: Web/HTML/Global_attributes/x-ms-acceleratorkey
tags:
  - Attribut
  - HTML
  - Non-standard
  - Reference
translation_of: Web/HTML/Global_attributes/x-ms-acceleratorkey
original_slug: Web/HTML/Attributs_universels/x-ms-acceleratorkey
---
{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

La propriété **`x-ms-acceleratorkey`** fournit une méthode pour déclarer si une touche d'accélération a été affectée à un élément.

> **Note :** Pour fournir un raccourci clavier pour un élément qui n'utilise pas JavaScript, on utilisera l'attribut [`accesskey`](/fr/docs/Web/HTML/Attributs_universels/accesskey).

{{Non-standard_Inline}} Cette propriété non-standard est spécifique à Internet Explorer et à Microsoft Edge.

La propriété `x-ms-acceleratorkey` permet d'indiquer sur l'arbre d'accessibilité (utilisé par les outils d'assistance tels que les lecteurs d'écran) qu'une touche d'accélération existe. Cet attribut ne fournit pas le comportement déclenché par cette touche. Il est nécessaire de fournir les gestionnaires d'évènements associés tels que `onkeypress`, `onkeydown` ou `onkeyup` afin de traiter l'utilisation de la touche dans l'application.

## Syntaxe

```html
<button x-ms-acceleratorkey="string">...</button>
```

## Valeur

Cette propriété peut être une chaîne de caractères avec le nom de la touche accélératrice :

- `"Ctrl+B"` pour indiquer la combinaison des touches

  <kbd>Ctrl</kbd>

  et

  <kbd>B</kbd>

  .

- `"J"` pour indiquer la touche

  <kbd>J</kbd>

  uniquement.

- `"Ctrl+; then K"` (cf. [FogBugz’s old keyboard mode](https://help.manuscript.com/7558/fogbugz-keyboard-shortcuts#For_Your_Server_or_non-Ocelot_Keyboard_Shortcuts)). Une approche plus compliquée mais qui ne remplace pas les raccourcis clavier fournis par le navigateur ou le système d'exploitation.

## Voir aussi

- [L'attribut universel `accesskey`](/fr/docs/Mozilla/Tech/XUL/Propri%C3%A9t%C3%A9s/accessKey)
- [La propriété CSS spécifique `-ms-accelerator`](/fr/docs/Web/CSS/-ms-accelerator)
- [Les extensions spécifiques à Microsoft](/fr/docs/Web/API/Microsoft_API_extensions)
