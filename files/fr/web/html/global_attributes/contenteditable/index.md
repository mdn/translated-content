---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`contenteditable`** est un attribut à valeur contrainte qui indique si l'élément courant doit pouvoir être édité par l'utilisateur ou non. Lorsque c'est le cas, des éléments de l'interface du navigateur (ou de l'agent utilisateur) sont modifiés afin de permettre l'édition.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

Les valeurs autorisées pour cet attribut sont :

- `true` ou la chaîne de caractères vide qui indiquent que l'élément est éditable
- `false` qui indique que l'élément ne peut pas être édité.

Si cet attribut n'est pas défini, sa valeur est héritée depuis son élément parent.

Cet attribut n'est pas un attribut booléen ! Cela signifie qu'une valeur explicite est nécessaire pour son fonctionnement. Toute forme telle que `<label contenteditable>Exemple</label>` n'est pas autorisée. La version correcte sera `<label contenteditable="true">Exemple</label>`.

Il est possible de modifier la couleur du symbole d'insertion grâce à la propriété CSS {{cssxref("caret-color")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rendre le contenu éditable](/fr/docs/Web/HTML/Contenu_editable)
- [Tous les attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- {{domxref("HTMLElement.contentEditable")}} et {{domxref("HTMLElement.isContentEditable")}}
- {{cssxref("caret-color")}}
- [L'évènement `input` pour l'objet DOM `HTMLElement`](/fr/docs/Web/API/HTMLElement/input_event)
