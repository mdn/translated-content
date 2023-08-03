---
title: padding
slug: Web/CSS/padding
---

{{CSSRef}}

La propriété **`padding`** est [une propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) qui permet de définir les différents écarts de remplissage sur les quatre côtés d'un élément (cf. [les boîtes CSS](/fr/docs/Learn/CSS/Building_blocks/The_box_model#les_propriétés_des_boîtes)). Elle synthétise {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}.

{{EmbedInteractiveExample("pages/css/padding.html")}}

La [zone de remplissage](/fr/docs/Learn/CSS/Building_blocks/The_box_model) correspond à l'espace entre le contenu de l'élément et sa bordure. Les valeurs négatives ne sont pas autorisées.

> **Note :** Le _padding_ permet de créer un espace supplémentaire à l'intérieur d'un élément. La marge ({{cssxref("margin")}}) permet quant à elle de créer un espace supplémentaire à l'extérieur de l'élément.

## Syntaxe

```css
/* On applique la même valeur aux quatre côtés */
padding: 1em;

/* vertical | horizontal */
padding: 5% 10%;

/* haut | horizontal | bas */
padding: 1em 2em 2em;

/* haut | droit | bas | gauche */
padding: 5px 1em 0 2em;

/* Valeurs globales */
padding: inherit;
padding: initial;
padding: unset;
```

Selon la quantité de valeurs utilisées, on a un effet différent. Chaque valeur peut être une longueur ([`<length>`](#length)) ou un pourcentage ([`<percentage>`](#percentage)). Les valeurs négatives ne sont pas autorisées.

- **Une valeur** applique le même écart aux 4 côtés.
- **Deux valeurs** appliquent le premier écart en haut et en bas et le second sur les côtés droit et gauche.
- **Trois valeurs** appliquent le premier écart en haut, le deuxième à droite et à gauche et le troisième en bas.
- **Quatre valeurs** appliquent le premier écart en haut, le deuxième à droite, le troisième en bas et le quatrième à gauche.

### Valeurs

Les valeurs permettent de définir une, deux, trois ou quatre valeurs pour les écarts de remplissage. On peut utiliser des valeurs de type :

- `<length>`
  - : Définit un écart fixe. Voir la page {{cssxref("&lt;length&gt;")}} sur les valeurs de ce type.
- `<percentage>`
  - : Définit un écart relatif à la **largeur** du bloc englobant. Voir la page {{cssxref("&lt;percentage&gt;")}} pour plus d'informations sur les valeurs de ce type.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<h4>Coucou le monde !</h4>
<h3>Le remplissage n'est pas le même ici.</h3>
```

### CSS

```css
h4 {
  background-color: green;
  padding: 50px 20px 20px 50px;
}

h3 {
  background-color: blue;
  padding: 400px 5%;
}
```

### Résultat

{{EmbedLiveSample('Exemples',"100%","100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [CSS : Le modèle de boîtes](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
- Les quatres propriétés détaillées synthétisées par `padding` :

  - {{cssxref("padding-top")}}
  - {{cssxref("padding-right")}}
  - {{cssxref("padding-bottom")}}
  - {{cssxref("padding-left")}}.
