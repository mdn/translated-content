---
title: Valeur spécifiée
slug: conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa
original_slug: Web/CSS/specified_value
---

{{CSSRef}}

La **valeur définie** d'une propriété CSS est celle explicitement définie dans la feuille de style ou grâce au style de son élément parent. Elle est déterminée selon une des trois méthodes suivantes :

1. Si la feuille de style du document a une valeur définie pour la propriété, alors c'est cette valeur qui est utilisée. Par exemple, si la propriété {{cssxref("color")}} est définie à `green` alors la couleur du texte des éléments correspondants sera verte.
2. Si la feuille de style du document n'a pas de valeur définie, alors, si c'est possible, elle sera héritée de l'élément parent. Par exemple, si on a un paragraphe ({{HTMLElement("p")}}) dans un {{HTMLElement("div")}} et que le {{HTMLElement("div")}} est ciblée par une déclaration CSS où `font` vaut `Arial` et qu'il n'y a pas de règle `font` pour {{HTMLElement("p")}}, ce dernier héritera de la police Arial.
3. Si aucun des cas précédents ne s'applique, c'est la valeur initiale de la propriété CSS qui est appliquée.

## Exemples

### HTML

```html
<p>Ma couleur provient explicitement de la feuille de style CSS.</p>

<div>
  Les valeurs définies de mes propriétés utilisent les valeurs initiales (par
  défaut) car aucune n'est fournie dans la feuille de style CSS.
</div>

<div class="fun">
  <p>
    La valeur définie pour ma police n'est pas fournie explicitement dans la
    feuille de style et est donc héritée de mon parent. Toutefois, la bordure
    n'est pas une propriété héritée.
  </p>
</div>
```

### CSS

```css
.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 500, 220)}}

## Spécifications

{{Specifications}}

## Voir aussi

- [La référence CSS](/fr/docs/Web/CSS/Reference)
- [La notion de valeur initiale](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc)
- [La notion de valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing)
- [La notion de valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2)
- [La notion de valeur résolue](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)
- [La notion de valeur réelle](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
