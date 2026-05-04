---
title: Propriété CSS `text-underline-position`
short-title: text-underline-position
slug: Web/CSS/Reference/Properties/text-underline-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-underline-position`** définit la position du soulignement utilisé lorsque la propriété {{CSSxRef("text-decoration")}} prend la valeur `underline`.

{{InteractiveExample("Démonstration CSS&nbsp;: text-underline-position")}}

```css interactive-example-choice
text-underline-position: auto;
```

```css interactive-example-choice
text-underline-position: under;
```

```html interactive-example
<section id="default-example">
  <p>
    <span class="transition-all" id="example-element"
      >C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></span
    >
    est la formule chimique de la caféine.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-decoration-line: underline;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;

/* Avec plusieurs mots-clés */
text-underline-position: under left;
text-underline-position: right under;

/* Valeurs globales */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: revert;
text-underline-position: revert-layer;
text-underline-position: unset;
```

### Valeurs

- `auto`
  - : {{Glossary("user agent", "L'agent utilisateur")}} utilise son propre algorithme pour placer la ligne au niveau ou sous la {{Glossary("Baseline/Typography", "ligne de base alphabétique")}}.
- `from-font`
  - : Si le fichier de police contient des informations sur une position préférée, utiliser cette valeur. Si le fichier de police n'inclut pas cette information, se comporter comme si `auto` était défini, le navigateur choisissant une position appropriée.
- `under`
  - : Force la ligne à être placée sous la ligne de base alphabétique, à une position où elle ne traversera aucun jambage. Ceci est utile pour garantir la lisibilité des formules chimiques et mathématiques, qui utilisent largement des indices.
- `left`
  - : En modes d'écriture verticale, ce mot-clé force la ligne à être placée du côté _gauche_ du texte. En modes d'écriture horizontale, il est synonyme de `auto`.
- `right`
  - : En modes d'écriture verticale, ce mot-clé force la ligne à être placée du côté _droit_ du texte. En modes d'écriture horizontale, il est synonyme de `auto`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Un exemple simple

Nous créons deux paragraphes d'exemple&nbsp;:

```html
<p class="horizontal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam onsectetur ac
  turpis vel laoreet. Nullam volutpat pharetra lorem, sit amet feugiat tortor
  volutpat quis. Nam eget sodales quam. Aliquam accumsan tellus ac erat posuere.
</p>

<p class="vertical">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam onsectetur ac
  turpis vel laoreet. Nullam volutpat pharetra lorem, sit amet feugiat tortor
  volutpat quis. Nam eget sodales quam. Aliquam accumsan tellus ac erat posuere.
</p>
```

Notre CSS ressemble à ceci&nbsp;:

```css
p {
  font-size: 1.5rem;
  text-transform: capitalize;
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.horizontal {
  text-underline-position: under;
}

.vertical {
  writing-mode: vertical-rl;
  text-underline-position: left;
}
```

Dans cet exemple, nous définissons les deux paragraphes pour avoir un soulignement épais. Dans le texte horizontal, nous utilisons `text-underline-position: under;` pour placer le soulignement sous tous les jambages.

Dans le texte avec un {{CSSxRef("writing-mode")}} vertical défini, nous pouvons ensuite utiliser les valeurs `left` ou `right` pour faire apparaître le soulignement à gauche ou à droite du texte selon les besoins.

L'exemple en direct ressemble à ceci&nbsp;:

{{EmbedLiveSample("Un exemple simple", "100%", 600)}}

### Définir `text-underline-position` de manière globale

Parce que la propriété `text-underline-position` est héritée et n'est pas réinitialisée par la propriété raccourcie {{CSSxRef("text-decoration")}}, il peut être approprié de définir sa valeur au niveau global. Par exemple, la valeur `under` peut être appropriée pour un document contenant de nombreuses formules chimiques et mathématiques, qui utilisent largement des indices.

```css
:root {
  text-underline-position: under;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-decoration")}} est une propriété raccourcie pour définir la plupart des propriétés de décoration de texte, y compris {{CSSxRef("text-decoration-line")}}, {{CSSxRef("text-decoration-color")}}, et {{CSSxRef("text-decoration-style")}}. Cependant, elle ne définit pas `text-underline-position`.
