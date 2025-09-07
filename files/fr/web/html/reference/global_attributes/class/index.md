---
title: class
slug: Web/HTML/Reference/Global_attributes/class
original_slug: Web/HTML/Global_attributes/class
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`class`** indique une liste de classes associées à l'élément courant. Les classes permettent de manipuler les éléments, via CSS ou JavaScript en utilisant [les sélecteurs de classe](/fr/docs/Web/CSS/Class_selectors) ou des fonctions telles que {{domxref("document.getElementsByClassName")}}.

{{InteractiveExample("HTML Demo: class", "tabbed-standard")}}

```html interactive-example
<p>Narrator: This is the beginning of the play.</p>

<p class="note editorial">Above point sounds a bit obvious. Remove/rewrite?</p>

<p>Narrator: I must warn you now folks that this beginning is very exciting.</p>

<p class="note">[Lights go up and wind blows; Caspian enters stage right]</p>
```

```css interactive-example
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  background: rgb(255, 0, 0, 0.25);
  padding: 10px;
}

.editorial:before {
  content: "Editor: ";
}
```

Bien que la spécification ne précise aucune contrainte quant aux noms utilisés pour les classes, une bonne pratique consiste à utiliser des noms qui traduisent la sémantique de l'élément plutôt que la mise en forme. Ainsi, les noms sémantiques restent pertinents même lorsque la présentation de la page évolue.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
