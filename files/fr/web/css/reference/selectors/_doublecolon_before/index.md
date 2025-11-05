---
title: ::before
slug: Web/CSS/Reference/Selectors/::before
original_slug: Web/CSS/::before
l10n:
  sourceCommit: e006f2c1533c7942e5a5569f6c0e9a419ea98f46
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::before`** crée un pseudo-élément qui sera le premier enfant de l'élément ciblé. Généralement utilisé pour ajouter du contenu esthétique à un élément via la propriété CSS {{cssxref("content")}}. Par défaut, l'élément créé est de type en-ligne (<i lang="en">inline</i> en anglais).

{{InteractiveExample("Démonstration CSS&nbsp;: ::before", "tabbed-standard")}}

```css interactive-example
a {
  color: blue;
  text-decoration: none;
}

a::before {
  content: "🔗";
}

.local-link::before {
  content: url("/shared-assets/images/examples/firefox-logo.svg");
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
```

```html interactive-example
<p>
  Des ressources d'apprentissage pour les développeurs web sont disponibles
  partout sur Internet. Essayez-les !
  <a href="https://web.dev/">web.dev</a>,
  <a href="https://www.w3schools.com/">w3schools.com</a> ou le
  <a href="https://developer.mozilla.org/" class="local-link">MDN web docs</a>.
</p>
```

## Syntaxe

```css-nolint
::before {
  content: /* valeur */;
  /* propriétés */
}
```

## Description

Le pseudo-élément `::before` est un bloc en ligne (<i lang="en">inline box</i> en anglais) générée en tant qu'enfant immédiat de l'élément auquel il est associé, ou l'«&nbsp;élément d'origine&nbsp;». Il est souvent utilisé pour ajouter du contenu esthétique à un élément via la propriété {{CSSxRef("content")}}, comme des icônes, des guillemets ou d'autres décorations.

Les pseudo-éléments `::before` ne peuvent pas être appliqués aux _{{ glossary("replaced elements", "éléments remplacés")}}_ tels que {{htmlelement("img")}}, dont le contenu est déterminé par des ressources externes et n'est pas affecté par les styles du document actuel.

Un pseudo-élément `::before` avec une valeur {{cssxref("display")}} de `list-item` se comporte comme un élément de liste et peut donc générer un pseudo-élément {{cssxref("::marker")}}, tout comme un élément {{htmlelement("li")}} le fait.

Si la propriété [`content`](/fr/docs/Web/CSS/Reference/Properties/content) n'est pas spécifiée, a une valeur invalide, ou a `normal` ou `none` comme valeur, alors le pseudo-élément `::before` n'est pas rendu. Il se comporte comme si `display: none` était défini.

> [!NOTE]
> La spécification [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) a introduit la notation à double deux-points `::before` pour distinguer les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) des [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements). Les navigateurs acceptent également la notation à un seul deux-points `:before`, introduite dans CSS2.

Par défaut, les pseudo-éléments `::before` et `::after` partagent le même contexte d'empilement que leur parent. Si aucun {{cssxref("z-index")}} n'est explicitement défini, le contenu généré par le pseudo-élément `::after` apparaîtra au-dessus du contenu généré par le pseudo-élément `::before` parce que `::after` est rendu plus tard dans le flux DOM.

## Accessibilité

Il est déconseillé d'utiliser un pseudo-élément `::before` pour ajouter du contenu, car ce n'est pas toujours accessible de manière fiable aux lecteur·ice·s d'écran.

## Exemples

### Ajouter des guillemets

Un exemple d'utilisation des pseudo-éléments `::before` est de fournir des guillemets. Ici, nous utilisons à la fois `::before` et {{Cssxref("::after")}} pour insérer des caractères de citation.

#### HTML

```html
<q>Quelques guillemets</q>, dit-il, <q>sont mieux que pas du tout</q>
```

#### CSS

```css
q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('ajouter_des_guillemets', '500', '50')}}

### Exemple décoratif

On peut mettre en forme du texte ou des images avec la propriété {{CSSxRef("content")}} à peu près de quelque manière que nous le voulions&nbsp;:

#### HTML

```html
<span class="ribbon">Observez où est placée la boîte orange.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "Regardez cette boîte orange.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Résultat

{{EmbedLiveSample('exemple_décoratif', 450, 60)}}

### Liste de choses à faire

Dans cet exemple, nous allons créer une liste de choses à faire en utilisant des pseudo-éléments. Cette méthode peut souvent être utilisée pour ajouter des touches subtiles à l'interface utilisateur et améliorer l'expérience utilisateur.

#### HTML

```html
<ul>
  <li>Acheter du lait</li>
  <li>Promener le chien</li>
  <li>Faire de l'exercice</li>
  <li>Coder</li>
  <li>Jouer de la musique</li>
  <li>Se reposer</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
```

Voici le code ci-dessus en action. Notez qu'aucune icône n'est utilisée, et que la coche est en fait le `::before` qui a été stylisé en CSS. Allez-y et terminez quelques tâches.

#### Résultat

{{EmbedLiveSample('liste_de_choses_a_faire', 400, 300)}}

### Séquences d'échappement Unicode

Comme le contenu généré est CSS, et non HTML, vous **ne pouvez pas** utiliser d'entités de balisage dans les valeurs de contenu. Si vous devez utiliser un caractère spécial et que vous ne pouvez pas l'entrer littéralement dans votre chaîne de contenu CSS, utilisez une séquence d'échappement unicode. Cela consiste en un antislash suivi de la valeur unicode hexadécimale du caractère.

#### HTML

```html
<ul>
  <li>Cracker des œufs dans un bol</li>
  <li>Ajouter du lait</li>
  <li>Ajouter de la farine</li>
  <li aria-current="step">
    Mélanger soigneusement jusqu'à obtenir une pâte lisse
  </li>
  <li>Verser une louche de pâte dans une poêle plate chaude et graissée</li>
  <li>Faire frémir jusqu'à ce que le dessus de la crêpe perde son éclat</li>
  <li>La retourner et faire frémir encore quelques minutes</li>
  <li>Servir avec votre garniture préférée</li>
</ul>
```

#### CSS

```css
li {
  padding: 0.5em;
}

li[aria-current="step"] {
  font-weight: bold;
}

li[aria-current="step"]::before {
  content: "\21E8 "; /* Séquence d'échappement Unicode pour une "Flèche blanche
                        vers la droite" */
  display: inline;
}
```

#### Result

{{EmbedLiveSample('séquences_déchappement_unicode', 400, 200)}}

### Les pseudo-éléments imbriqués `::before::marker`

Le [pseudo-élément imbriqué](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#pseudo-éléments_imbriqués) `::before::marker` sélectionne le marqueur de liste {{CSSxRef("::marker")}} d'un pseudo-élément `::before` qui est lui-même un élément de liste, c'est-à-dire qu'il a sa propriété {{CSSxRef("display")}} définie sur `list-item`.

Dans cette démo, nous générons des [éléments de liste](/fr/docs/Web/HTML/Reference/Elements/li) supplémentaires avant et après un menu de navigation en liste à l'aide de `::before` et `::after` (en les définissant sur `display: list-item` afin qu'ils se comportent comme des éléments de liste). Nous utilisons ensuite `ul::before::marker` et `ul::after::marker` pour donner à leurs marqueurs de liste une couleur différente.

#### HTML

```html
<ul>
  <li><a href="#">Introduction</a></li>
  <li><a href="#">Débuter</a></li>
  <li><a href="#">Comprendre les bases</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "Début";
}

ul::after {
  content: "Fin";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('les_pseudo-éléments_imbriqués', 450, 200)}}

Bien que les puces de liste des trois éléments de navigation soient générées parce qu'il s'agit d'éléments `<li>`, «&nbsp;Début&nbsp;» et «&nbsp;Fin&nbsp;» ont été insérés via des pseudo-éléments et `::marker` est utilisé pour styliser leurs puces.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("::after")}}
- {{cssxref("content")}}
