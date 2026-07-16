---
title: "HTMLInputElement : propriété checked"
short-title: checked
slug: Web/API/HTMLInputElement/checked
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`checked`** de l'interface {{DOMxRef("HTMLInputElement")}} indique l'état actuel de sélection de l'élément&nbsp;; c'est-à-dire si le contrôle de formulaire est coché ou non.

La propriété booléenne `checked` concerne les types d'entrée `radio` (`{{HTMLElement("input/radio", "&lt;input type=\"radio\"&gt;")}}`) et `checkbox` (`{{HTMLElement("input/checkbox", "&lt;input type=\"checkbox\"&gt;")}}`).

La présence de l'attribut HTML [`checked`](/fr/docs/Web/HTML/Reference/Elements/input#checked) indique que la case à cocher est cochée par défaut. Cela n'indique pas si cette case est actuellement cochée&nbsp;: si l'état de la case change, cet attribut de contenu ne reflète pas le changement&nbsp;; seule la propriété IDL `checked` de `HTMLInputElement` est mise à jour. L'attribut `checked` est reflété par la propriété {{DOMxRef("HTMLInputElement.defaultChecked", "defaultChecked")}}.

Lorsque la propriété `checked` d'un bouton radio est à `true`, toutes les autres entrées radio ayant le même {{DOMxRef("HTMLInputElement.name", "name")}} sont à `false`. Si un bouton radio dans un groupe de boutons radio portant le même nom est {{DOMxRef("HTMLInputElement.required", "required")}}, tant qu'un bouton du groupe est `checked`, la propriété en lecture seule {{DOMxRef('ValidityState.valueMissing','valueMissing')}} de l'objet {{DOMxRef('ValidityState')}} pour chaque bouton radio du groupe sera à `false`.

La valeur d'une case à cocher n'est incluse dans les données envoyées lors de la soumission du formulaire que si `checked` est à true. La valeur de la propriété {{DOMxRef("HTMLInputElement.indeterminate")}} n'a aucun effet sur la valeur de `checked` d'une case à cocher.

## Valeur

Un booléen.

## Exemples

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.checked);
inputElement.checked = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.validity")}}
- La pseudo-classe CSS {{CSSxRef(":checked")}}
