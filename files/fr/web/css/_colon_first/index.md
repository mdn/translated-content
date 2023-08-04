---
title: ":first"
slug: Web/CSS/:first
---

{{CSSRef}}

La pseudo-classe **`:first`**, liée à la règle @ {{cssxref("@page")}} décrit la mise en forme de la première page lors de l'impression d'un document. ( voir {{cssxref(":first-child")}} pour le premier élément d'un noeud )

```css
/* Cible le contenu de la première page */
/* lorsqu'on imprime */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

Seul un sous-ensemble restreint de propriétés peut être modifié via cette pseudo-classe :

- Les propriétés liées aux marges : {{cssxref("margin")}}
- Les propriétés liées aux lignes veuves et orphelines : {{cssxref("orphans")}} et {{cssxref("widows")}}
- Les propriétés liées aux sauts de page : {{cssxref("page-break")}}

De plus, seules [les unités absolues](/fr/docs/Web/CSS/length#unités_de_longueur_absolues) peuvent être utilisées pour les marges.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
```

### HTML

```html
<p>Première page.</p>
<p>Deuxième page.</p>
<button>Imprimer</button>
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

Appuyez sur le bouton "Imprimer!" pour imprimer l'exemple. Les mots sur la première page doivent être quelque part autour du centre, tandis que les autres pages auront leur contenu à la position par défaut.

{{EmbedLiveSample("Exemples","80%","150px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@page")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}
