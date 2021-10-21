---
title: Valeur spécifiée
slug: Web/CSS/specified_value
tags:
  - CSS
  - Cascade
  - Reference
translation_of: Web/CSS/specified_value
original_slug: Web/CSS/Valeur_spécifiée
---
{{CSSRef}}

La **valeur définie** d'une propriété CSS est celle explicitement définie dans la feuille de style ou grâce au style de son élément parent. Elle est déterminée selon une des trois méthodes suivantes :

1.  Si la feuille de style du document a une valeur définie pour la propriété, alors c'est cette valeur qui est utilisée. Par exemple, si la propriété {{cssxref("color")}} est définie à `green` alors la couleur du texte des éléments correspondants sera verte.
2.  Si la feuille de style du document n'a pas de valeur définie, alors, si c'est possible, elle sera héritée de l'élément parent. Par exemple, si on a un paragraphe ({{HTMLElement("p")}}) dans un {{HTMLElement("div")}} et que le {{HTMLElement("div")}} est ciblée par une déclaration CSS où `font` vaut `Arial` et qu'il n'y a pas de règle `font` pour {{HTMLElement("p")}}, ce dernier héritera de la police Arial.
3.  Si aucun des cas précédents ne s'applique, c'est la valeur initiale de la propriété CSS qui est appliquée.

## Exemples

### HTML

```html
<p>Ma couleur provient explicitement de la feuille de style CSS.</p>

<div>Les valeurs définies de mes propriétés utilisent
    les valeurs initiales (par défaut) car aucune n'est fournie
    dans la feuille de style CSS.</div>

<div class="fun">
  <p>La valeur définie pour ma police n'est pas fournie explicitement
     dans la feuille de style et est donc héritée de mon parent.
     Toutefois, la bordure n'est pas une propriété héritée.</p>
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

| Spécification                                                                                    | Statut                   | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ------------------------ | -------------------- |
| {{SpecName("CSS2.2", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.2")}} |                      |
| {{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.1")}} | Définition initiale. |

## Voir aussi

- [La référence CSS](/fr/docs/Web/CSS/Reference)
- [La notion de valeur initiale](/fr/docs/Web/CSS/Valeur_initiale)
- [La notion de valeur calculée](/fr/docs/Web/CSS/Valeur_calculée)
- [La notion de valeur utilisée](/fr/docs/Web/CSS/Valeur_utilisée)
- [La notion de valeur résolue](/fr/docs/Web/CSS/valeur_r%C3%A9solue)
- [La notion de valeur réelle](/fr/docs/Web/CSS/valeur_reelle)
