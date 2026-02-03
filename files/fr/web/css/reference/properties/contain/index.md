---
title: contain
slug: Web/CSS/Reference/Properties/contain
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`contain`** indique qu'un élément et son contenu sont, autant que possible, indépendants du reste de l'arbre du document.
Le compartimentation permet d'isoler une sous‑section du DOM, offrant des bénéfices de performance en limitant les calculs de mise en page, de style, de peinture, de taille, ou toute combinaison de ceux‑ci, à un sous‑arbre du DOM plutôt qu'à la page entière. Le compartimentation peut aussi être utilisé pour limiter la portée des compteurs CSS et des guillemets.

{{InteractiveExample("Démonstration CSS&nbsp;: contain")}}

```css interactive-example-choice
contain: none;
```

```css interactive-example-choice
contain: size;
```

```css interactive-example-choice
contain: layout;
```

```css interactive-example-choice
contain: paint;
```

```css interactive-example-choice
contain: strict;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="card" id="example-element">
    <h2>Élément avec '<code>contain</code>'</h2>
    <p>
      Le poisson rouge est une espèce de poisson domestique connue pour ses
      couleurs vives et ses motifs.
    </p>
    <div class="fixed"><p>Fixé 4px à droite</p></div>
  </div>
</section>
```

```css interactive-example
h2 {
  margin-top: 0;
}

#default-example {
  text-align: left;
  padding: 4px;
  font-size: 16px;
}

.card {
  text-align: left;
  border: 3px dotted;
  padding: 20px;
  margin: 10px;
  width: 85%;
  min-height: 150px;
}

.fixed {
  position: fixed;
  border: 3px dotted;
  right: 4px;
  padding: 4px;
  margin: 4px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: inline-size;
contain: layout;
contain: style;
contain: paint;

/* Valeurs avec plusieurs mots-clés */
contain: size paint;
contain: size layout paint;
contain: inline-size layout;

/* Valeurs globales */
contain: inherit;
contain: initial;
contain: revert;
contain: revert-layer;
contain: unset;
```

### Valeurs

La propriété `contain` peut prendre l'une des valeurs suivantes&nbsp;:

- Le mot-clé `none` **ou**
- Un ou plusieurs des mots-clés séparés par des espaces `size` (ou `inline-size`), `layout`, `style` et `paint`, dans n'importe quel ordre **ou**
- L'une des valeurs raccourcies `strict` ou `content`

Les mots-clés ont les significations suivantes&nbsp;:

- `none`
  - : L'élément est affiché normalement, aucune compartimentation n'est appliquée.
- `strict`
  - : Toutes les règles possibles de compartimentation à l'exception de `style` sont appliquées. Cela correspond à `contain: size layout paint`.
- `content`
  - : Toutes les règles de compartimentation, à l'exception de celles pour `size` et `style`, sont appliquées à l'élément. Cela est équivalent à `contain: layout paint`.
- `size`
  - : Cette valeur indique que l'élément peut être dimensionné sans avoir à examiner les éléments descendants pour les modifications de la taille. Cette valeur ne peut pas être combinée avec `inline-size`.
- `inline-size`
  - : La compartimentation de la taille en ligne est appliquée à l'élément. La taille en ligne de l'élément peut être calculée isolément, en ignorant les éléments enfants. Cette valeur ne peut pas être combinée avec `size`.
- `layout`
  - : Cette valeur indique qu'aucun élément en dehors de l'élément, ne peut impacter sa disposition interne et réciproquement.
- `style`
  - : Cette valeur indique que les propriétés ayant un effet sur un élément et ses descendants voire plus sont bien limitées à l'élément englobant.
- `paint`
  - : Cette valeur indique que les éléments descendants de l'élément ne sont pas affichés en dehors de ses limites. Si un élément est en dehors de l'écran ou n'est pas visible, cette valeur assure que les éléments descendants ne sont pas visibles non plus.

## Description

Il existe quatre types de compartimentation CSS&nbsp;: taille, mise en page, style et peinture, qui s'appliquent à l'élément englobant.
La propriété est une liste de mots-clés séparés par des espaces, choisie parmi un sous-ensemble des cinq valeurs standard ou l'une des deux valeurs raccourcies.
Les modifications des propriétés compartimentées à l'intérieur de l'élément ne se propagent pas en dehors de cet élément vers le reste de la page.
Le principal avantage de la compartimentation est que le navigateur n'a pas à recalculer ni à réafficher aussi souvent le DOM ou la mise en page, ce qui entraîne de modestes gains de performance pour le rendu des pages statiques et des gains plus importants pour les applications dynamiques.

L'utilisation de la propriété `contain` est utile sur les pages comportant des groupes d'éléments censés être indépendants, car elle peut empêcher l'intérieur d'un élément d'avoir des effets secondaires en dehors de sa boîte de délimitation.

> [!NOTE]
> L'utilisation des valeurs `layout`, `paint`, `strict` ou `content` pour cette propriété crée&nbsp;:
>
> 1. Un nouveau [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) (pour les descendants dont la propriété {{CSSxRef("position")}} est `absolute` ou `fixed`).
> 2. Un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).
> 3. Un nouveau [contexte de formatage de blocs](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Compartimentation de peinture

L'exemple suivant montre comment utiliser `contain: paint` pour empêcher les descendants d'un élément de peindre en dehors de ses limites.

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  margin: 10px;
  font-size: 20px;
}

.contain-paint {
  contain: paint;
}
```

```html
<div class="contain-paint">
  <p>Ce texte sera rogné aux limites de la boîte.</p>
</div>
<div>
  <p>Ce texte ne sera pas rogné aux limites de la boîte.</p>
</div>
```

{{EmbedLiveSample("Compartimentation de peinture", "100%", 280)}}

### Compartimentation de mise en page

L'exemple ci‑dessous montre comment les éléments se comportent avec et sans la compartimentation de mise en page.

```html
<div class="card contain-layout">
  <h2>Carte 1</h2>
  <div class="fixed"><p>Boîte fixe 1</p></div>
  <div class="float"><p>Boîte flottante 1</p></div>
</div>
<div class="card">
  <h2>Carte 2</h2>
  <div class="fixed"><p>Boîte fixe 2</p></div>
  <div class="float"><p>Boîte flottante 2</p></div>
</div>
<div class="card">
  <h2>Carte 3</h2>
  <!-- ... -->
</div>
```

```css hidden
p {
  margin: 4px;
  padding: 4px;
}

h2 {
  margin-bottom: 4px;
  padding: 10px;
}

div {
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 gray;
  padding: 6px;
  margin: 6px;
}
```

```css
.card {
  width: 70%;
  height: 90px;
}

.fixed {
  position: fixed;
  right: 10px;
  top: 10px;
  background: coral;
}

.float {
  float: left;
  margin: 10px;
  background: aquamarine;
}

.contain-layout {
  contain: layout;
}
```

La première carte utilise la compartimentation, ce qui isole sa mise en page du reste de la page.
On peut réutiliser cette carte à d'autres endroits de la page sans se préoccuper du recalcul de la mise en page des autres éléments.
Si des éléments flottants chevauchent les limites de la carte, les éléments du reste de la page ne sont pas affectés.
Lorsque le navigateur recalcule le sous‑arbre de l'élément englobant, seul cet élément est recalculé. Rien à l'extérieur de l'élément compartimenté n'a besoin d'être recalculé.
De plus, la boîte fixe utilise la carte comme conteneur de mise en page pour se positionner.

La deuxième et la troisième carte n'ont pas de compartimentation.
Le contexte de mise en page de la boîte fixe dans la deuxième carte est l'élément racine, de sorte que la boîte fixe est positionnée dans le coin supérieur droit de la page.
Un flottant chevauche les limites de la deuxième carte, provoquant un décalage de mise en page inattendu sur la troisième carte, visible dans le positionnement de l'élément HTML `<h2>`.
Lorsque le recalcul a lieu, il n'est pas limité à un conteneur.
Cela affecte les performances et perturbe le reste de la mise en page.

{{EmbedLiveSample("Compartimentation de mise en page", "100%", 350)}}

### Compartimentation de style

La compartimentation de style limite la portée des [compteurs](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) et des [guillemets](/fr/docs/Web/CSS/Reference/Properties/quotes) à l'élément compartimenté.
Pour les compteurs CSS, les propriétés {{CSSxRef("counter-increment")}} et {{CSSxRef("counter-set")}} sont limitées à l'élément comme si celui‑ci était à la racine du document.

#### Compartimentation et compteurs

L'exemple ci‑dessous montre comment les compteurs fonctionnent lorsque la compartimentation de style est appliquée&nbsp;:

```html
<ul>
  <li>Élément A</li>
  <li>Élément B</li>
  <li class="container">Élément C</li>
  <li>Élément D</li>
  <li>Élément E</li>
</ul>
```

```css
body {
  counter-reset: list-items;
}

li::before {
  counter-increment: list-items;
  content: counter(list-items) " : ";
}

.container {
  contain: style;
}
```

Sans compartimentation, le compteur s'incrémente de 1 à 5 pour chaque élément de la liste.
La compartimentation de style fait en sorte que la propriété {{CSSxRef("counter-increment")}} est limitée au sous‑arbre de l'élément et que le compteur recommence à 1&nbsp;:

{{EmbedLiveSample("Compartimentation et compteurs", "100%", 140)}}

#### Compartimentation et guillemets

Les guillemets CSS sont également concernés, car les valeurs {{CSSxRef("content")}} relatives aux guillemets sont limitées à l'élément&nbsp;:

```html
<!-- Avec la compartimentation de style -->
<span class="ouverture-citation">
  extérieur
  <span class="style-conteneur">
    <span class="ouverture-citation">intérieur</span>
  </span>
</span>
<span class="fermeture-citation">fermer</span>
<br />
<!-- Sans compartimentation -->
<span class="ouverture-citation">
  extérieur
  <span>
    <span class="ouverture-citation">intérieur</span>
  </span>
</span>
<span class="fermeture-citation">fermer</span>
```

```css
body {
  quotes: "[" "]" "‹" "›";
}
.ouverture-citation::before {
  content: open-quote;
}

.fermeture-citation::after {
  content: close-quote;
}

.style-conteneur {
  contain: style;
}
```

En raison de la compartimentation, le premier guillemet de fermeture ignore le `span` interne et utilise à la place le guillemet de fermeture du `span` externe&nbsp;:

{{EmbedLiveSample("Compartimentation et guillemets", "100%", 40)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment)
- [Requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- La propriété {{CSSxRef("content-visibility")}}
- La propriété {{CSSxRef("position")}}
