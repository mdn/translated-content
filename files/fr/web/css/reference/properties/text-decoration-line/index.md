---
title: Propriété CSS `text-decoration-line`
short-title: text-decoration-line
slug: Web/CSS/Reference/Properties/text-decoration-line
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-decoration-line`** permet de définir le type de décoration appliquée au texte d'un élément, comme un soulignement ou une ligne au-dessus du texte.

{{InteractiveExample("Démonstration CSS&nbsp;: text-decoration-line")}}

```css interactive-example-choice
text-decoration-line: none;
```

```css interactive-example-choice
text-decoration-line: underline;
```

```css interactive-example-choice
text-decoration-line: overline;
```

```css interactive-example-choice
text-decoration-line: line-through;
```

```css interactive-example-choice
text-decoration-line: grammar-error;
```

```css interactive-example-choice
text-decoration-line: spelling-error;
```

```css interactive-example-choice
text-decoration-line: underline overline;
```

```css interactive-example-choice
text-decoration-line: underline line-through;
```

```html interactive-example
<section id="default-example">
  <p>
    Je préfère être
    <span class="transition-all" id="example-element"
      >heureux que d'avoir raison</span
    >
    n'importe quel jour.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

Lors de la définition de plusieurs propriétés de décoration de ligne en même temps, il peut être plus pratique d'utiliser la propriété raccourcie {{CSSxRef("text-decoration")}} à la place.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;
text-decoration-line: spelling-error;
text-decoration-line: grammar-error;

/* Valeurs avec plusieurs mots-clés */
text-decoration-line: underline overline; /* On a deux décorations pour la ligne */
text-decoration-line: overline underline line-through; /* On a plusieurs décorations */

/* Valeurs globales */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: revert-layer;
text-decoration-line: unset;
```

La propriété `text-decoration-line` est définie comme `none`, ou **une ou plusieurs** valeurs séparées par des espaces à partir de la liste ci-dessous.

### Valeurs

Cette propriété peut avoir une ou plusieurs valeurs séparées par des espaces. Si aucune valeur n'est fournie, il n'y a pas de décoration ajoutée :

- `none`
  - : Aucune ligne ne décore le texte.
- `underline`
  - : Chaque ligne de texte est soulignée.
- `overline`
  - : Une ligne est dessinée au-dessus de chaque ligne de texte.
- `line-through`
  - : Une ligne est dessinée au milieu de chaque ligne de texte.
- `blink` {{Deprecated_Inline}}
  - : Le texte clignote (alterne entre visible et invisible). Les agents utilisateurs conformes peuvent ne pas suivre cette directive. Cette valeur est **obsolète** au profit des [animations CSS](/fr/docs/Web/CSS/Reference/Properties/animation).
- `spelling-error`
  - : Chaque ligne de texte utilise la méthode des agents utilisateurs pour mettre en évidence les erreurs d'orthographe, ce qui est une ligne pointillée rouge dans la plupart des navigateurs.
- `grammar-error`
  - : Chaque ligne de texte utilise la méthode des agents utilisateurs pour mettre en évidence les erreurs de grammaire, ce qui est une ligne pointillée verte dans la plupart des navigateurs.

> [!NOTE]
> Lors de l'utilisation des valeurs `spelling-error` et `grammar-error`, le navigateur ignore les autres propriétés dans le raccourci {{CSSxRef("text-decoration")}} (comme {{CSSxRef("text-underline-position")}}, `color` ou `stroke`).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

```html
<p class="wavy">Voici un texte souligné avec une vaguelette rouge.</p>
<p class="both">Ce texte a des lignes à la fois au-dessus et en dessous.</p>
```

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

.both {
  text-decoration-line: underline overline;
}
```

{{EmbedLiveSample("Exemple simple", , 90)}}

### Exemple d'erreurs

Dans cet exemple, le premier paragraphe contient une faute d'orthographe et utilise le style du navigateur pour les erreurs d'orthographe sur le mot mal orthographié. Le deuxième paragraphe utilise le style du navigateur pour les erreurs de grammaire. Il n'y a aucun changement de style dans les navigateurs qui ne prennent pas en charge ces valeurs de `text-decoration-line`.

<!-- cSpell:ignore speling -->

```html
<p>Ce texte contient une <span class="spelling">fote</span> d'orthographe.</p>
<p class="grammar">Ce texte contient des erreur grammaticales.</p>
```

```css
.spelling {
  text-decoration-line: spelling-error;
}

.grammar {
  text-decoration-line: grammar-error;
}
```

{{EmbedLiveSample("Exemple d'erreurs", , 90)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Lors de la définition de plusieurs propriétés de décoration de ligne en même temps, il peut être plus pratique d'utiliser la propriété raccourcie {{CSSxRef("text-decoration")}}, qui inclut également&nbsp;:
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-thickness")}}
- La propriété {{CSSxRef("text-underline-offset")}}
- Le pseudo-élément {{CSSxRef("::spelling-error")}}
- Le pseudo-élément {{CSSxRef("::grammar-error")}}
