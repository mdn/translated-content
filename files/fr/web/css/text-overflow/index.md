---
title: text-overflow
slug: Web/CSS/text-overflow
translation_of: Web/CSS/text-overflow
---
{{CSSRef}}

La propriété **`text-overflow`** définit la façon dont le contenu textuel qui dépasse d'une boîte est signalé pour les utilisateurs. Le texte peut être rogné (_clipping_), afficher une ellipse ('`…`', `U+2026 Horizontal Ellipsis`) ou afficher une chaîne de caractères choisie.

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

Le rognage se fera à la bordure de la boîte. Afin que le rognage se fasse plus tôt, à la limite des caractères, on peut utiliser la chaîne vide (`''`).

Cette propriété n'affecte que le contenu qui dépasse de la boîte englobante dans le sens de la progression en ligne. Par exemple, on ne parle pas ici du texte qui dépasserait vers le bas d'une boîte. Le texte peut dépasser lorsqu'on empêche le retour automatique à la ligne (par exemple avec `white-space: nowrap`) ou lorsqu'un seul mot est trop long pour tenir dans le conteneur.

Cette propriété CSS ne force pas le dépassement. Pour ce faire et afin que `text-overflow` soit appliqué, l'auteur devra ajouter des propriétés supplémentaires sur l'élément, notamment : {{cssxref("overflow")}} avec `hidden` et {{cssxref("white-space")}} avec `nowrap`.

## Syntaxe

```css
/* On gère le dépassement en fin de ligne
    - à droite en LTR,
    - à gauche en RTL */
text-overflow: clip;
text-overflow: ellipsis;
text-overflow: "…";
text-overflow: fade;
text-overflow: fade(10px);
text-overflow: fade(5%);

/* On gère le dépassement au début et
   à la fin de la ligne. La directionnalité
   n'a pas d'importance */
text-overflow: clip ellipsis;
text-overflow: "…" "…";
text-overflow: fade clip;
text-overflow: fade(10px) fade(10px);
text-overflow: fade(5%) fade(5%);

/* Valeurs globales */
text-overflow: inherit;
text-overflow: initial;
text-overflow: unset;
```

La propriété `text-overflow` peut être définie grâce à une ou deux valeurs.

Si une valeur est fournie, celle-ci indique le comportement du dépassement en fin de ligne (c'est-à-dire l'extrêmité droite pour les textes écrits de gauche à droite et l'extrêmité gauche pour les textes écrits de droite à gauche). Si deux valeurs sont fournies, la première précisera la comportement pour le dépassement à l'extrêmité gauche de la ligne et la seconde indiquera le comportement du dépassement pour l'extrêmité droite de la ligne.

Chacune des valeurs se compose :

- D'un des mots-clés : [`clip`](#clip), [`ellipsis`](#ellipsis), [`fade`](#fade)
- De la fonction [`fade()`](#fade_fun) à laquelle on passe une valeur de type {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} qui permet de contrôler la distance d'effacement
- D'[une chaîne de caractères `<string>`](#string).

### Valeurs

- `clip`
  - : La valeur par défaut de cette propriété. Ce mot-clé indique qu'on tronque le texte à la limite de [la boîte de contenu](/en-US/docs/Learn/CSS/Building_blocks/The_box_model). La troncature peut donc arriver sur le milieu d'un caractère. Pour que celle-ci soit appliquée entre deux caractères, on devra utiliser la chaîne vide (`''`) comme valeur pour cette propriété.
- `ellipsis`
  - : Ce mot-clé indique qu'on affiche une ellipse (`'…'`, `U+2026 Horizontal Ellipsis`) pour représenter le texte rogné. L'ellipse est affichée à l'intérieur de [la boîte de contenu](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) et réduit donc la quantité de texte affichée. S'il n'y a pas assez de place pour afficher l'ellipse, celle-ci est rognée.
- `fade` {{experimental_inline}}
  - : Ce mot-clé indique que le contenu qui dépasse est rogné avec un effet de dégradé en transparence. Au bout de la boîte, le contenu est totalement transparent.
- `fade( <length> | <percentage> )` {{experimental_inline}}
  - : Cette fonction permet de rogner le contenu qui dépasse et d'appliquer un effet de dégradé en transparence. Au bout de la boîte, on a une transparence totale.
    L'argument passé à la fonction détermine la distance sur laquelle cet effet est appliqué. La valeur en pourcentage est relative à la largeur de la boîte. Les valeurs inférieures à `0` sont ramenées à `0`. Les valeurs supérieures à la largeur de la boîte sont écrétées à la largeur de la boîte.
- `<string>` {{experimental_inline}}
  - : Une chaîne de caractères (type {{cssxref("&lt;string&gt;")}}) utilisée pour représentée le texte rogné. La chaîne est affichée à l'intérieur de [la boîte de contenu](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) et réduit donc la quantité de texte affichée. S'il n'y a pas assez de place pour afficher la chaîne choisie, celle-ci est rognée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Syntaxe avec une valeur

Cet exemple illustre différentes valeurs pour `text-overflow`, appliquée à un paragraphe, pour des textes écrits de gauche à droite et de droite à gauche.

#### HTML

```html

<div class="ltr">
  <h2>Left to right text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <pre>" [..]"</pre>
  <p class="overflow-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>

<div class="rtl">
  <h2>Right to left text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <pre>" [..]"</pre>
  <p class="overflow-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Les deux règles suivantes sont nécessaires pour text-overflow */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  text-overflow: " [..]";
}

body {
  display: flex;
  justify-content: space-around;
}

.ltr > p {
  direction: ltr;
}

.rtl > p {
  direction: rtl;
}
```

#### Résultat

{{EmbedLiveSample('Syntaxe_avec_une_valeur', 600, 320)}}

### Syntaxe avec deux valeurs

Cette exemple illustre la syntaxe à deux valeurs pour `text-overflow`, où on peut définir un comportement de débordement différent pour le début et la fin du texte. Pour illustrer l'effet, on doit faire défiler la ligne et le début de la ligne est donc caché.

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Les deux règles suivantes sont nécessaires pour text-overflow */
  white-space: nowrap;
  overflow: scroll;
}

.overflow-clip-clip {
  text-overflow: clip clip;
}

.overflow-clip-ellipsis {
  text-overflow: clip ellipsis;
}

.overflow-ellipsis-ellipsis {
  text-overflow: ellipsis ellipsis;
}

.overflow-ellipsis-string {
  text-overflow: ellipsis " [..]";
}
```

#### JavaScript

```js
// On fait défiler chaque paragraphe afin que le début soit également caché
const paras = document.querySelectorAll("p");

for (let para of paras) {
  para.scroll(100, 0);
}
```

#### Résultat

{{EmbedLiveSample('Syntaxe_avec_deux_valeurs', 600, 360)}}

## Spécifications

| Spécification                                                                        | État                                 | Commentaires                                                       |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------ |
| {{SpecName('CSS4 UI', '#text-overflow', 'text-overflow')}}         | {{Spec2('CSS4 UI')}}         | Ajout des valeurs `<string>` et `fade` et de la fonction `fade()`. |
| {{SpecName('CSS3 Overflow', '#text-overflow', 'text-overflow')}} | {{Spec2('CSS3 Overflow')}} | Définition initiale.                                               |

Une version précédente de cette interface avait atteint le statut de _Candidate Recommendation_. Certaines fonctionnalités devaient être retirées et n'étaient pas listées parmi les fonctionnalités à risque, la spécification a donc été déchue au niveau _Working Draft_. Cela explique pourquoi les navigateurs ont implémenté cette propriété sans préfixe bien qu'elle ne soit pas une CR.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-overflow")}}

## Voir aussi

- {{cssxref("overflow")}}
- {{cssxref("white-space")}}
