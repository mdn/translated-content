---
title: Propriété CSS `text-overflow`
short-title: text-overflow
slug: Web/CSS/Reference/Properties/text-overflow
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-overflow`** définit la façon dont le contenu débordant masqué est signalé aux utilisateur·ice·s.

{{InteractiveExample("Démonstration CSS&nbsp;: text-overflow")}}

```css interactive-example-choice
text-overflow: clip;
```

```css interactive-example-choice
text-overflow: ellipsis;
```

```css interactive-example-choice
text-overflow: "-";
```

```css interactive-example-choice
text-overflow: "";
```

```html interactive-example
<section id="default-example">
  <div id="example-element-container">
    <p id="example-element">
      «&nbsp;Y a-t-il du thé dans ce vaisseau spatial&nbsp;?&nbsp;»
      demanda-t-il.
    </p>
  </div>
</section>
```

```css interactive-example
#example-element-container {
  width: 100%;
  max-width: 18em;
}

#example-element {
  line-height: 50px;
  border: 1px solid #c5c5c5;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  padding: 0 0.5em;
  text-align: left;
}
```

## Syntaxe

```css
text-overflow: clip;
text-overflow: ellipsis ellipsis;
text-overflow: ellipsis " [..]";

/* Valeurs globales */
text-overflow: inherit;
text-overflow: initial;
text-overflow: revert;
text-overflow: revert-layer;
text-overflow: unset;
```

### Valeurs

Cette propriété est définie comme une ou deux valeurs séparées par des espaces, y compris&nbsp;:

- `clip`
  - : La valeur par défaut pour cette propriété. Ce mot-clé tronque le texte à la limite de la [zone de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction), donc le découpage peut se produire au milieu d'un caractère. Pour tronquer à la transition entre les caractères, vous pouvez définir `text-overflow` comme une chaîne de caractères vide, si c'est pris en charge par vos navigateurs cibles&nbsp;: `text-overflow: '';`.
- `ellipsis`
  - : Ce mot-clé affiche une ellipse (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) pour représenter le texte rogné. L'ellipse est affichée à l'intérieur de la [zone de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction), ce qui réduit la quantité de texte affichée. S'il n'y a pas assez de place pour afficher l'ellipse, elle est rognée.
- {{CSSxRef("&lt;string&gt;")}}
  - : La chaîne de caractères à utiliser pour représenter le texte rogné. La chaîne de caractères est affichée à l'intérieur de la [zone de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction) et réduit la quantité de texte affichée. S'il n'y a pas assez de place pour afficher la chaîne de caractères, elle est rognée.

## Description

La propriété `text-overflow` définit la façon dont le contenu débordant masqué est signalé aux utilisateur·ice·s. Il peut être tronqué, afficher une ellipse (`…`) ou afficher une chaîne de caractères personnalisée.

La propriété `text-overflow` ne force pas le débordement. Pour faire déborder le texte de son conteneur, vous devez définir d'autres propriétés CSS&nbsp;: {{CSSxRef("overflow")}} et {{CSSxRef("white-space")}}. Par exemple&nbsp;:

```css
overflow: hidden;
white-space: nowrap;
```

La propriété `text-overflow` affecte uniquement le contenu qui déborde d'un élément conteneur de bloc dans sa direction de progression _en incise_ (et non, par exemple, le texte qui déborde en bas d'une boîte).

La propriété `text-overflow` peut être définie avec une ou deux valeurs. Si une seule valeur est fournie, elle définit le comportement du débordement à la fin de la ligne (l'extrémité droite pour un texte de gauche à droite, l'extrémité gauche pour un texte de droite à gauche). Si deux valeurs sont fournies, la première définit le comportement du débordement à l'extrémité gauche de la ligne, et la seconde le définit à son extrémité droite.

### Comportement de `ellipsis` comme `clip` pour les éléments modifiables

Lorsque `text-overflow: ellipsis` est appliqué aux éléments modifiables tels que les éléments HTML {{HTMLElement("input")}} textuels, {{HTMLElement("textarea")}} et [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable), les navigateurs le considèrent généralement comme `text-overflow: clip`, tout le temps ou lorsque l'élément est sélectionné. Le comportement exact diffère selon les navigateurs&nbsp;; voir [la compatibilité des navigateurs](#compatibilité_des_navigateurs).

Ce comportement garantit que le texte peut être parcouru et modifié, même en cas de débordement. Si le texte débordant reste couvert par une ellipse, il n'est ni visible ni modifiable.

Vous pouvez voir le comportement dans l'exemple interactif suivant, auquel est appliqué ce CSS&nbsp;:

```css live-sample___ellipsis-as-clip
p[contenteditable],
input,
textarea {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```html hidden live-sample___ellipsis-as-clip
<p contenteditable>Paragraphe contenteditable. Le texte ici déborde.</p>

<hr />

<input type="text" value="Champ textuel. Le texte ici déborde." />

<hr />

<textarea>Zone de texte. Le texte ici déborde.</textarea>
```

{{EmbedLiveSample("ellipsis-as-clip", "100%", 200)}}

Sélectionnez les différents éléments et essayez de modifier leur contenu textuel.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Syntaxe avec une valeur

Cet exemple illustre différentes valeurs pour `text-overflow`, appliquée à un paragraphe, pour des textes écrits de gauche à droite et de droite à gauche.

#### HTML

```html
<div class="ltr">
  <h2>Texte de gauche à droite</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>

<div class="rtl">
  <h2>Texte de droite à gauche</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
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

{{EmbedLiveSample("Syntaxe avec une valeur", 600, 320)}}

### Syntaxe avec deux valeurs

Cette exemple illustre la syntaxe à deux valeurs pour `text-overflow`, où on peut définir un comportement de débordement différent pour le début et la fin du texte. Pour illustrer l'effet, on doit faire défiler la ligne et le début de la ligne est donc caché.

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
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

{{EmbedLiveSample("Syntaxe avec deux valeurs", 600, 360)}}

## Spécifications

{{Specifications}}

Une version précédente de cette interface a atteint le statut de <i lang="en">Candidate Recommendation</i> (Candidat à la recommandation). Comme certaines fonctionnalités non listées comme étant à risque doivent être supprimées, la spécification a été rétrogradée au niveau <i lang="en">Working Draft</i> (Brouillon de travail), expliquant pourquoi les navigateurs ont implémenté cette propriété sans préfixe, bien qu'elle ne soit pas à l'état de CR.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés CSS associées&nbsp;: {{CSSxRef("overflow")}}, {{CSSxRef("white-space")}}
- Propriétés CSS qui contrôlent les sauts de ligne dans les mots&nbsp;: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}
