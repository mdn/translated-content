---
title: :not
slug: Web/CSS/Reference/Selectors/:not
original_slug: Web/CSS/:not
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:not()`** représente les éléments qui ne correspondent pas à une liste de sélecteurs. Comme elle empêche la sélection d'éléments spécifiques, elle est connue sous le nom de _pseudo-classe de négation_.

{{InteractiveExample("Démonstration CSS&nbsp;: :not", "tabbed-shorter")}}

```css interactive-example
p:not(.irrelevant) {
  font-weight: bold;
}

p > strong,
p > b.important {
  color: crimson;
}

p > :not(strong, b.important) {
  color: darkmagenta;
}
```

```html interactive-example
<p>
  <b>Mars</b> est l'une des planètes les plus semblables à la Terre. Une journée
  sur <b>Mars</b> est presque identique à une journée terrestre, à seulement
  <strong>37 minutes</strong> près.
</p>

<p class="irrelevant">
  Le Jet <del>Momentum</del> Propulsion Laboratory de la
  <b class="important">NASA</b> conçoit actuellement des concepts de mission
  permettant de résister aux températures extrêmes et à la pression
  atmosphérique de <b>Vénus</b>.
</p>
```

La pseudo-classe `:not()` présente un certain nombre de [particularités, astuces et résultats inattendus](#description) que vous devez connaître avant de l'utiliser.

## Syntaxe

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

### Paramètres

La pseudo-classe `:not()` nécessite une [liste de sélecteurs](/fr/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), une liste séparée par des virgules d'un ou plusieurs sélecteurs, comme argument. La liste ne doit pas contenir de [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), mais tout autre sélecteur simple, composé ou complexe est autorisé.

## Description

Il existe plusieurs effets et résultats inhabituels lors de l'utilisation de `:not()` que vous devez garder à l'esprit lorsque vous l'utilisez&nbsp;:

- Des sélecteurs inutiles peuvent être écrits en utilisant cette pseudo-classe. Par exemple, `:not(*)` correspond à tout élément qui n'est pas un élément, ce qui est évidemment absurde, donc la règle qui l'accompagne ne sera jamais appliquée.
- Cette pseudo-classe peut augmenter la [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) d'une règle. Par exemple, `#foo:not(#bar)` correspondra au même élément que le plus simple `#foo`, mais a la spécificité plus élevée de deux sélecteurs `id`.
- La spécificité de la pseudo-classe `:not()` est remplacée par la spécificité du sélecteur le plus spécifique dans son argument de sélecteurs séparés par des virgules ; fournissant la même spécificité que si elle avait été écrite [`:not(:is(argument))`](/fr/docs/Web/CSS/Reference/Selectors/:is).
- `:not(.foo)` correspondra à tout ce qui n'est pas `.foo`, _y compris {{HTMLElement("html")}} et {{HTMLElement("body")}}_.
- Ce sélecteur correspondra à tout ce qui n'est pas un X. Cela peut être surprenant lorsqu'il est utilisé avec des [combinators descendants](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator), car il existe plusieurs chemins pour sélectionner un élément cible. Par exemple, `body :not(table) a` s'appliquera toujours aux liens à l'intérieur d'une {{HTMLElement("table")}}, puisque {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, etc. peuvent tous correspondre à la partie `:not(table)` du sélecteur. Pour éviter cela, vous pouvez utiliser `body a:not(table a)` à la place, qui ne s'appliquera qu'aux liens qui ne sont pas des descendants d'un tableau.
- Vous pouvez nier plusieurs sélecteurs en même temps. Exemple&nbsp;: `:not(.foo, .bar)` est équivalent à `:not(.foo):not(.bar)`.
- Si un sélecteur passé à la pseudo-classe `:not()` est invalide ou non pris en charge par le navigateur, toute la règle sera invalidée. Le moyen efficace de contourner ce comportement est d'utiliser la pseudo-classe [`:is()`](/fr/docs/Web/CSS/Reference/Selectors/:is), qui accepte une liste de sélecteurs tolérante. Par exemple, `:not(.foo, :invalid-pseudo-class)` invalidera toute la règle, mais `:not(:is(.foo, :invalid-pseudo-class))` correspondra à tout élément (_y compris {{HTMLElement("html")}} et {{HTMLElement("body")}}_) qui n'est pas `.foo`.

## Exemples

### Utilisation de :not() avec des sélecteurs valides

#### HTML

```html
<p>Je suis un paragraphe.</p>
<p class="classy">Je suis tellement beau&nbsp;!</p>
<div>Je ne suis PAS un paragraphe.</div>
<h2>
  <span class="un">le premier dans un h2</span>
  <span class="deux">le deuxième dans un h2</span>
</h2>
```

#### CSS

```css
.classy {
  text-shadow: 2px 2px 3px gold;
}

/* l'élément <p> qui n'a pas de classe `.classy` */
p:not(.classy) {
  color: green;
}

/* Éléments qui ne sont pas des éléments <p> */
body :not(p) {
  text-decoration: underline;
}

/* Éléments qui ne sont pas des <div> ou `.classy` */
body :not(div):not(.classy) {
  font-weight: bold;
}

/* Éléments qui ne sont pas des <div> ou `.classy` */
body :not(div, .classy) {
  text-decoration: overline underline;
}

/* Éléments à l'intérieur d'un <h2> qui ne sont pas un
<span> avec une classe de `.un` */
h2 :not(span.un) {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('utilisation_de_not_avec_des_sélecteurs_valides', '100%', 200)}}

### Utilisation de :not() avec des sélecteurs invalides

Cet exemple montre l'utilisation de `:not()` avec des sélecteurs invalides et comment éviter l'invalidation.

#### HTML

```html
<p class="toto">Je suis un paragraphe avec .toto</p>
<p class="tata">Je suis un paragraphe avec .tata</p>
<div>Je suis un div sans classe</div>
<div class="toto">Je suis un div avec .toto</div>
<div class="tata">Je suis un div avec .tata</div>
<div class="toto tata">Je suis un div avec .toto et .tata</div>
```

#### CSS

```css
/* Règle invalide, ne fait rien */
p:not(.toto, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}

/* Sélectionner tous les éléments <p> sans la classe `toto` */
p:not(:is(.toto, :invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentColor;
}

/* Sélectionner tous les éléments <div> sans la classe `toto` ou `tata` */
div:not(.toto, .tata) {
  color: red;
  font-style: italic;
}

/* Sélectionner tous les éléments <div> sans la classe `toto` ou `tata` */
div:not(:is(.toto, .tata)) {
  border-bottom: dotted thin currentColor;
}
```

#### Résultat

{{EmbedLiveSample('utilisation_de_not_avec_des_sélecteurs_invalides', '100%', 200)}}

La règle `p:not(.toto, :invalid-pseudo-class)` est invalide car elle contient un sélecteur invalide. La pseudo-classe `:is()` accepte une liste de sélecteurs tolérante, donc la règle `:is(.toto, :invalid-pseudo-class)` est valide et équivalente à `:is(.toto)`. Ainsi, la règle `p:not(:is(.toto, :invalid-pseudo-class))` est valide et équivalente à `p:not(.toto)`.

Si `:invalid-pseudo-class` était un sélecteur valide, les deux premières règles ci-dessus seraient toujours équivalentes (les deux dernières règles le montrent). L'utilisation de `:is()` rend la règle plus robuste.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les [Pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Apprendre&nbsp;: Pseudo-classes et pseudo-éléments](/fr/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- Autres pseudo-classes CSS fonctionnelles&nbsp;:
  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}

- [Comment :not() enchaîne plusieurs sélecteurs](/fr/blog/css-not-pseudo-multiple-selectors/) sur le blog MDN (2023)
