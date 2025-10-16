---
title: contenteditable
slug: Web/HTML/Reference/Global_attributes/contenteditable
original_slug: Web/HTML/Global_attributes/contenteditable
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`contenteditable`** est un attribut à valeur contrainte qui indique si l'élément courant doit pouvoir être édité par l'utilisateur ou non. Lorsque c'est le cas, des éléments de l'interface du navigateur (ou de l'agent utilisateur) sont modifiés afin de permettre l'édition.

{{InteractiveExample("HTML Demo: contenteditable", "tabbed-shorter")}}

```html interactive-example
<blockquote contenteditable="true">
  <p>Edit this content to add your own quote</p>
</blockquote>

<cite contenteditable="true">-- Write your own name here</cite>
```

```css interactive-example
blockquote {
  background: #eee;
  border-radius: 5px;
  margin: 16px 0;
}

blockquote p {
  padding: 15px;
}

cite {
  margin: 16px 32px;
  font-weight: bold;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

[contenteditable="true"] {
  caret-color: red;
}
```

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

- [Rendre le contenu éditable](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable)
- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} et {{domxref("HTMLElement.isContentEditable")}}
- {{cssxref("caret-color")}}
- [L'évènement `input` pour l'objet DOM `HTMLElement`](/fr/docs/Web/API/Element/input_event)
