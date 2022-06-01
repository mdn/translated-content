---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/contenteditable
original_slug: Web/HTML/Attributs_universels/contenteditable
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

| Spécification                                                                                                                                                                | État                             | Commentaires                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{SpecName("HTML Editing", "contentEditable.html#contenteditable", "contenteditable")}}                                                         | {{Spec2("HTML Editing")}} | Ajout de `"events"`, `"caret"`, `"typing"`, `"plaintext-only"`.                                                 |
| {{SpecName("HTML WHATWG", "editing.html#attr-contenteditable", "contenteditable")}}                                                             | {{Spec2("HTML WHATWG")}} | Aucune modification depuis la dernière dérivation, {{SpecName("HTML5.2")}}                             |
| {{SpecName("HTML5.2", "editing.html#making-document-regions-editable-the-contenteditable-content-attribute", "contenteditable")}} | {{Spec2("HTML5.2")}}     | Dérivation de {{SpecName("HTML WHATWG")}}, aucune modification depuis {{SpecName("HTML5.1")}} |
| {{SpecName("HTML5.1", "editing.html#making-document-regions-editable-the-contenteditable-content-attribute", "contenteditable")}} | {{Spec2("HTML5.1")}}     | Dérivation de {{SpecName("HTML WHATWG")}}, aucune modification depuis {{SpecName("HTML5 W3C")}} |
| {{SpecName("HTML5 W3C", "editing.html#attr-contenteditable", "contenteditable")}}                                                                 | {{Spec2("HTML5 W3C")}}     | Dérivation de {{SpecName("HTML WHATWG")}}, définition initiale.                                        |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.contenteditable")}}

## Voir aussi

- [Rendre le contenu éditable](/fr/docs/Web/HTML/Contenu_editable)
- [Tous les attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- {{domxref("HTMLElement.contentEditable")}} et {{domxref("HTMLElement.isContentEditable")}}
- {{cssxref("caret-color")}}
- [L'évènement `input` pour l'objet DOM `HTMLElement`](/fr/docs/Web/API/HTMLElement/input_event)
