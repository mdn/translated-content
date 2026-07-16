---
title: Propriété CSS `text-decoration-thickness`
short-title: text-decoration-thickness
slug: Web/CSS/Reference/Properties/text-decoration-thickness
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-decoration-thickness`** définit l'épaisseur ou la largeur de la ligne de décoration utilisée sur le texte d'un élément (la ligne qui raye, souligne ou surligne le texte).

{{InteractiveExample("Démonstration CSS&nbsp;: text-decoration-thickness")}}

```css interactive-example-choice
text-decoration-line: underline;
text-decoration-thickness: 3px;
```

```css interactive-example-choice
text-decoration-line: line-through;
text-decoration-thickness: 0.4rem;
```

```css interactive-example-choice
text-decoration-line: underline overline;
text-decoration-thickness: from-font;
font-size: 2rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    La confusion m'a embrassé sur la joue, et a laissé un goût si amer
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
  text-decoration-color: red;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* Valeurs de type longueur */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* Valeurs de type pourcentage */
text-decoration-thickness: 10%;

/* Valeurs globales */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: revert;
text-decoration-thickness: revert-layer;
text-decoration-thickness: unset;
```

### Valeurs

- `auto`
  - : Le navigateur choisit l'épaisseur pour la ligne de décoration.
- `from-font`
  - : Si le fichier de la police indique une épaisseur préférée, c'est cette valeur qui est utilisée. Si le fichier ne contient pas cette information, cette valeur est synonyme de `auto`.
- {{CSSxRef("&lt;length&gt;")}}
  - : Définit l'épaisseur de la ligne de décoration de texte en tant que longueur ({{CSSxRef("&lt;length&gt;")}}), remplaçant la suggestion du fichier de police ou la valeur par défaut du navigateur.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit l'épaisseur de la ligne de décoration de texte en tant que pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) de **1em** dans la police actuelle. Un pourcentage hérite comme une valeur relative, et donc s'adapte aux changements de police. Le navigateur doit utiliser un minimum de 1 pixel de dispositif. Pour une application donnée de cette propriété, l'épaisseur est constante sur toute la boîte à laquelle elle est appliquée, même si des éléments enfants ont une taille de police différente.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Varier l'épaisseur

#### HTML

```html
<p class="thin">Voici du texte avec un soulignement rouge de 1px.</p>
<p class="thick">Voici du texte avec un soulignement rouge de 5px.</p>
<p class="shorthand">Ceci utilise la formulation raccourcie équivalente.</p>
```

#### CSS

```css
.thin {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 1px;
}

.thick {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
}

.shorthand {
  text-decoration: underline solid red 5px;
}
```

### Résultat

{{EmbedLiveSample("Varier l'épaisseur")}}

## Spécifications

{{Specifications}}

> [!NOTE]
> La propriété s'appelait auparavant `text-decoration-width`, mais a été mise à jour en 2019 pour devenir `text-decoration-thickness`.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-decoration")}}
- La propriété {{CSSxRef("text-underline-offset")}}
