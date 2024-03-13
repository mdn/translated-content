---
title: transform-box
slug: Web/CSS/transform-box
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`transform-box`** définit la boîte à laquelle les propriétés {{cssxref("transform")}} et {{cssxref("transform-origin")}} font référence.

```css
/* Avec un mot-clé */
transform-box: border-box;
transform-box: fill-box;
transform-box: view-box;

/* Valeurs globales */
transform-box: inherit;
transform-box: initial;
transform-box: unset;
```

## Syntaxe

La propriété `transform-box` est définie grâce à l'un des mots-clés suivants.

### Valeurs

- `border-box`
  - : La boîte de bordure (_border_) est utilisée comme boîte de référence. La boîte de référence d'un tableau est la boîte de bordure englobante (celle qui inclue les éventuelles légendes ou titres rattachés au tableau) et non uniquement celle autour du tableau.
- `fill-box`
  - : La boîte liée à l'objet est utilisée comme boîte de référence.
- `view-box`
  - : Le plus proche _viewport_ {{Glossary("SVG")}} est utilisé comme boîte de référence. Si l'attribut {{SVGAttr("viewBox")}} est défini pour le _viewport_ de l'élément, la boîte de référence est positionnée à l'origine du système de coordonnées défini par l'attribut `viewBox` et les dimensions de la boîte de référence sont définies avec les valeurs de hauteur et largeur de l'attribut `viewBox`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### HTML

```html
<p class="premier">"I saw Mr. Hyde"</p>

<p class="deuxieme">"Quite right, Mr. Utterson"</p>
```

### CSS

```css
p {
  transform: rotate(90deg);
  transform-origin: bottom left;
  transform-box: border-box;
}

.premier {
  border: 3px black solid;
}

.deuxieme {
  border: 3px black solid;
  padding: 3em;
}
```

### Résultat

{{EmbedLiveSample("Exemple","100%","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS)
- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
