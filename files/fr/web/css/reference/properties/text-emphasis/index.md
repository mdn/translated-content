---
title: text-emphasis
slug: Web/CSS/Reference/Properties/text-emphasis
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`text-emphasis`** applique des marques d'emphase au texte (sauf les espaces et les caractères de contrôle). C'est une propriété raccourcie pour {{CSSxRef("text-emphasis-style")}} et {{CSSxRef("text-emphasis-color")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: text-emphasis")}}

```css interactive-example-choice
text-emphasis: none;
```

```css interactive-example-choice
text-emphasis: filled red;
```

```css interactive-example-choice
text-emphasis: "x";
```

```css interactive-example-choice
text-emphasis: filled double-circle #ffb703;
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

La propriété `text-emphasis` est assez différente de {{CSSxRef("text-decoration")}}. La propriété `text-decoration` n'est pas héritée, et la décoration définie est appliquée à l'ensemble de l'élément. Cependant, l'emphase de texte est héritée, ce qui signifie qu'il est possible de changer les marques d'emphase pour les descendants.

La taille du symbole d'emphase, comme les symboles ruby, est d'environ 50% de la taille de la police, et `text-emphasis` peut affecter la hauteur de ligne lorsque l'interligne courant n'est pas suffisant pour les marques.

> [!NOTE]
> `text-emphasis` ne réinitialise pas la valeur de {{CSSxRef("text-emphasis-position")}}. En effet, si le style et la couleur des marques d'emphase peuvent varier dans un texte, il est extrêmement rare que leur position varie. Dans les très rares cas où cela est nécessaire, utilisez la propriété {{CSSxRef("text-emphasis-position")}}.

## Syntaxe

```css
/* Valeur initiale */
text-emphasis: none; /* Pas de marque */

/* Valeurs de type <string> */
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555;
text-emphasis: "toto"; /* À ne pas utiliser, cela pourra être considéré comme 't' uniquement */

/* Valeurs avec un(des) mot(s)-clé(s) */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Valeurs avec mots-clés, combinés à une couleur */
text-emphasis: filled sesame #555555;

/* Valeurs globales */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: revert;
text-emphasis: revert-layer;
text-emphasis: unset;
```

### Valeurs

- `none`
  - : Il n'y aura pas de marques d'emphase appliquées.
- `filled`
  - : La forme de la marque est remplie avec une couleur unie. Si aucun des mots-clés parmi `filled` ou `open` n'est présent, ce sera la valeur par défaut.
- `open`
  - : La forme de la marque est évidée.
- `dot`
  - : La forme de la marque est un petit cercle. Le cercle plein est le caractère `'•'` (`U+2022`) et celui qui est évidé est `'◦'` (`U+25E6`).
- `circle`
  - : La forme de la marque est un grand cercle. Le cercle plein est le caractère `'●'` (`U+25CF`) et celui du cercle évidé est `'○'` (`U+25CB`). Lorsqu'aucune forme n'est spécifiée, c'est la forme par défaut utilisée pour les modes d'écriture horizontaux.
- `double-circle`
  - : La forme de la marque est un double-cercle. Le double-cercle plein est le caractère `'◉'` (`U+25C9`), celui du double-cercle évidé est `'◎'` (`U+25CE`).
- `triangle`
  - : La forme de la marque est un triangle. Le triangle plein correspond au caractère `'▲'` (`U+25B2`) et celui du triangle évidé correspond à `'△'` (`U+25B3`).
- `sesame`
  - : La forme de la marque est un sésame. Le sésame plein correspond au caractère `'﹅'` (`U+FE45`) et celui du sésame évidé correspond à `'﹆'` (`U+FE46`). Lorsqu'aucune forme n'a été définie, c'est la forme par défaut qui est utilisée pour les marques d'emphase pour les modes d'écriture verticaux.
- `<string>`
  - : Affiche la chaîne de caractères donnée comme marques. Les auteur·ice·s ne doivent pas définir plus d'un _caractère_ dans `<string>`. L'agent utilisateur peut tronquer ou ignorer les chaînes de caractères comportant plus d'un groupe de graphèmes.
- `<color>`
  - : Définit la couleur utilisée pour la marque. Si aucune couleur n'est définie, la valeur utilisée par défaut sera `currentColor`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Un titre avec forme et couleur d'emphase

Cet exemple montre un titre avec des triangles utilisés pour mettre en évidence chaque caractère.

#### CSS

```css
h2 {
  text-emphasis: triangle #dd5555;
}
```

#### HTML

```html
<h2>Ceci est important&nbsp;!</h2>
```

#### Résultat

{{EmbedLiveSample("Un titre avec forme et couleur d'emphase", 500, 90)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés longues {{CSSxRef('text-emphasis-style')}}, {{CSSxRef('text-emphasis-color')}}.
- La propriété {{CSSxRef('text-emphasis-position')}} permet de définir la position des marques d'emphase.
