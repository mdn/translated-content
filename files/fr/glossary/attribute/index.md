---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Un **attribut** étend un [élément](/fr/docs/Glossary/Element) HTML ou XML, changeant son comportement ou ajoutant des métadonnées.

Un attribut prend toujours la forme `nom="valeur"`, c'est-à-dire l'identifiant de l'attribut suivi de la valeur associée.

On voit parfois des attributs sans signe égal ni valeur. Il s'agit d'un raccourci pour la chaine vide en HTML, ou pour le nom de l'attribut en XML.

```html
<input required />
<!-- est égal à -->
<input required="" />
<!-- ou en XML -->
<input required="required" />
```

## Réflexion d'un attribut

Les attributs peuvent être _réfléchis_ dans une propriété spécifique de l'interface du [DOM](/fr/docs/Glossary/DOM) correspondante. Cela signifie que la valeur de l'attribut peut être lue en accédant à la propriété et peut être modifiée en définissant la propriété sur une nouvelle valeur.

Par exemple, l'attribut `placeholder` ci-dessous est réfléchi dans [`HTMLInputElement.placeholder`](/fr/docs/Web/API/HTMLInputElement#placeholder).

Considérons le fragment HTML suivant&nbsp;:

```html
<input placeholder="Placeholder initial" />
```

On peut vérifier la réflexion entre [`HTMLInputElement.placeholder`](/fr/docs/Web/API/HTMLInputElement#placeholder) et l'attribut avec le code JavaScript suivant&nbsp;:

```js
const input = document.querySelector("input");
const attr = input.getAttributeNode("placeholder");
console.log(attr.value); // Affiche `Placeholder initial`
console.log(input.placeholder); // Affiche la même valeur que `attr.value`

// Modifier la valeur de placeholder va aussi changer la valeur de l'attribut réfléchi.
input.placeholder = "Placeholder modifié";
console.log(attr.value); // Affiche `Placeholder modifié`
```

## Voir aussi

- [Liste des attributs HTML](/fr/docs/Web/HTML/Reference/Attributes)
- [Les attributs universels en HTML](/fr/docs/Web/HTML/Reference/Global_attributes)
