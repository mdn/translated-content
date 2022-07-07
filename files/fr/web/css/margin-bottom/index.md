---
title: margin-bottom
slug: Web/CSS/margin-bottom
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/margin-bottom
---
{{CSSRef}}

La propriété **`margin-bottom`** définit la marge basse appliquée à un élément. On peut définir une marge négative qui rapprochera l'élément de ses voisins ou une marge positive qui l'en écartera..

{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}

Cette propriété n'a aucun effet sur les éléments en ligne (_inline_) qui ne sont pas remplacés comme {{HTMLElement("tt")}} ou {{HTMLElement("span")}}.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>     */
margin-bottom: 10px;    /* Une longueur absolue */
margin-bottom: 1em;     /* Une longueur relative à la taille du texte */
margin-bottom: 5%;      /* Une longueur relative à la
                 largeur du bloc englobant */

/* Valeurs avec un mot-clé */
margin-bottom: auto;

/* Valeurs globales*/
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: unset;
```

La valeur de cette propriété peut être le mot-clé `auto`, une longueur (`<length>`) ou un pourcentage (` <percentage``> `). Cette valeur peut être nulle, positive ou négative.

### Valeurs

- `<length>`
  - : Cette valeur définit une largeur fixée. Pour les valeurs qui peuvent être utilisées, voir la page sur le type {{cssxref("&lt;length&gt;")}}.
- `<percentage>`
  - : Une valeur en pourcentage (type {{cssxref("&lt;percentage&gt;")}} qui est relative à la **largeur** du bloc englobant.
- `auto`
  - : Voir {{cssxref("margin")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

Grâce à la feuille de style on définit la marge basse et la hauteur des différentes `div` :

```css
.box0 {
  margin-bottom:1em;
  height:3em;
}
.box1 {
  margin-bottom:-1.5em;
  height:4em;
}
.box2 {
  border:1px dashed black;
  border-width:1px 0;
  margin-bottom:2em;
}
```

On ajoute quelques règles afin de mieux visualiser les effets obtenus :

```css
.container {
  background-color:orange;
  width:320px;
  border:1px solid black;
}
div {
  width:320px;
  background-color:gold;
}
```

### HTML

```html
<div class="container">
<div class="box0">Boîte 0</div>
<div class="box1">Boîte 1</div>
<div class="box2">La marge négative de 1 m'attire vers le haut</div>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples',350,200)}}

## Spécifications

| Spécification                                                                                | État                                     | Commentaires                                    |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------- |
| {{SpecName('CSS3 Box', '#margin-bottom', 'margin-bottom')}}             | {{Spec2('CSS3 Box')}}             | Pas de modification significative.              |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'margin-bottom')}} | {{Spec2('CSS3 Transitions')}} | `margin-bottom` peut désormais être animée.     |
| {{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-bottom')}} | {{Spec2('CSS2.1')}}                 | L'effet sur les éléments en ligne est supprimé. |
| {{SpecName('CSS1', '#margin-bottom', 'margin-bottom')}}                     | {{Spec2('CSS1')}}                 | Définition initiale.                            |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.margin-bottom")}}
