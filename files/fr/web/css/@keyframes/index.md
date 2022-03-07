---
title: '@keyframes'
slug: Web/CSS/@keyframes
tags:
  - CSS
  - Reference
  - Règle @
translation_of: Web/CSS/@keyframes
---
{{CSSRef}}

La [règle](/fr/docs/Web/CSS/R%C3%A8gles_@) **`@keyframes`** permet aux auteurs de définir les étapes qui composent la séquence d'une animation CSS. Cela permet de contrôler une animation plus finement que ce qu'on pourrait obtenir avec [les transitions](/fr/docs/Web/CSS/CSS_Transitions).

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

Il est possible de manipuler la règle @ `@keyframes` via JavaScript et le CSSOM, notamment avec l'interface {{domxref("CSSKeyframesRule")}}.

Afin d'utiliser ces règles, on créera une règle `@keyframes` avec un nom pour chaque étape et on utilisera ce nom avec la propriété {{cssxref("animation-name")}} afin qu'une animation corresponde à la liste des étapes qui la composent. Chaque règle `@keyframes` contient une liste de sélecteurs d'étapes dont chacun contient le pourcentage d'avancement de l'animation auquel il correspond ainsi que les informations de styles qui correspondent à cette étape..

Les étapes peuvent être listées dans n'importe quel ordre. Elles seront enchaînées dans l'ordre indiqué par le pourcentage d'avancement.

### Validité de la liste des étapes

Si une liste d'étapes ne spécifie pas le début (`0%`/`from`) ou la fin (`100%`/`to`) d'une animation, le navigateur va utiliser les styles de l'élement définis par ailleurs. C'est assez pratique pour animer un élément depuis et vers son état initial.

Si les étapes décrivent des propriétés qui ne peuvent pas être animées, elles seront ignorées mais les autres propriétés seront bien animées.

### Résolution des doublons

Si plusieurs règles `@keyframes` existent avec le même nom, c'est la dernière qui est utilisée. Les règles `@keyframes` ne forment pas de cascade et il n'y a donc pas de dérivation entre les différentes règles qui porteraient le même nom.

Si, au sein d'une même règle, deux étapes décrivent le même pourcentage d'avancement, c'est la dernière qui est utilisée pour décrire ce moment de l'animation. Il n'y a aucune cascade qui composerait différentes étapes décrivant le même avancement.

### Gestion des propriétés absentes

Si des propriétés ne sont pas définies à chaque étape, elles sont interpolées si possible. Si ces propriétés ne peuvent pas être interpolées, elles sont retirées de l'animation :

```css
@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
```

Ici, la propriété {{cssxref("top")}} est animée en passant par les étapes `0%`, `30%` et `100%`. Quant à {{cssxref("left")}}, elle est animée aux étapes `0%`, `68%` , `72%` et `100%`.

Seules les propriétés qui sont définies sur les étapes de début (`0%`) et de fin (`100%`) seront animées. Toutes les propriétés qui ne sont pas incluses dans les descriptions de ces étapes conserveront leurs valeurs de départ au cours de l'animation.

### `!important` dans une étape

Les déclarations qui utilisent `!important` dans une description d'étape sont ignorées

```css
@keyframes important1 {
  from { margin-top: 50px; }
  50%  { margin-top: 150px !important; } /* ignorée */
  to   { margin-top: 100px; }
}

@keyframes important2 {
  from { margin-top: 50px;
         margin-bottom: 100px; }
  to   { margin-top: 150px !important; /* ignorée */
         margin-bottom: 50px; }
}
```

## Syntaxe

### Valeurs

- `<identifier>`
  - : Un nom ({{cssxref("custom-ident")}}) qui permet d'identifier la liste d'étapes. Cela doit être [un identifiant valide selon la syntaxe CSS](/fr/docs/Web/CSS/custom-ident).
- `from`
  - : Indique le point de départ de l'animation (correspond à un avancement de `0%`).
- `to`
  - : Indique la fin de l'animation (correspond à un avancement de `100%`).
- {{cssxref("&lt;percentage&gt;")}}
  - : Le pourcentage d'avancement de l'animation auquel l'étape décrite s'applique.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
  animation-duration: 25s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }
  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### HTML

```html
<p>
  Le Chat grimaça en apercevant Alice. Elle trouva qu’il
  avait l’air bon enfant, et cependant il avait de
  très longues griffes et une grande rangée de dents ;
  aussi comprit-elle qu’il fallait le traiter avec
  respect.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","500","300")}}

### Plus d'exemples ?

Regardez [Utiliser les animations CSS](/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS) pour de plus amples exemples.

## Spécifications

| Spécification                                                                    | État                                 | Commentaires         |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Animations', '#keyframes', '@keyframes')}} | {{Spec2('CSS3 Animations')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.keyframes")}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS)
- {{domxref("AnimationEvent")}}
