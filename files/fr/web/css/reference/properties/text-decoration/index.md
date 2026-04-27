---
title: Propriété CSS `text-decoration`
short-title: text-decoration
slug: Web/CSS/Reference/Properties/text-decoration
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`text-decoration`** définit l'apparence des lignes décoratives sur le texte. C'est une propriété raccourcie pour {{CSSxRef("text-decoration-line")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-decoration-style")}}, et la plus récente {{CSSxRef("text-decoration-thickness")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: text-decoration")}}

```css interactive-example-choice
text-decoration: underline;
```

```css interactive-example-choice
text-decoration: underline dotted;
```

```css interactive-example-choice
text-decoration: underline dotted red;
```

```css interactive-example-choice
text-decoration: green wavy underline;
```

```css interactive-example-choice
text-decoration: underline overline #ff3028;
```

```html interactive-example
<section id="default-example">
  <p>
    Je préférerais de loin être
    <span class="transition-all" id="example-element"
      >heureux que d'avoir raison</span
    >
    chaque jour.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

Ces décorations se propagent sur les différents éléments enfants. Cela signifie qu'il n'est pas possible de désactiver la décoration d'un élément descendant pour lequel un ancêtre est décoré. Par exemple, avec ce fragment de HTML `<p>Ce texte a <em>des mots mis en avant</em> dedans.</p>`, et cette règle CSS `p { text-decoration: underline; }`, on aura tout le paragraphe souligné, même si on applique la règle `em { text-decoration: none; }`, cela n'aurait aucun impact. En revanche, ajouter la règle `em { text-decoration: overline; }` entraînerait un cumul des décorations pour «&nbsp;des mots mis en avant&nbsp;».

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("text-decoration-color")}}
- {{CSSxRef("text-decoration-line")}}
- {{CSSxRef("text-decoration-style")}}
- {{CSSxRef("text-decoration-thickness")}}

## Syntaxe

```css
/* Valeurs avec mots-clés */
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* Valeurs globales */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: revert-layer;
text-decoration: unset;
```

La propriété `text-decoration` est définie comme une ou plusieurs valeurs séparées par des espaces représentant les différentes propriétés longues de text-decoration.

### Valeurs

- {{CSSxRef("text-decoration-line")}}
  - : Définit le type de décoration utilisée, comme `underline` ou `line-through`.
- {{CSSxRef("text-decoration-color")}}
  - : Définit la couleur de la décoration.
- {{CSSxRef("text-decoration-style")}}
  - : Définit le style de la ligne utilisée pour la décoration, comme `solid`, `wavy` ou `dashed`.
- {{CSSxRef("text-decoration-thickness")}}
  - : Définit l'épaisseur de la ligne utilisée pour la décoration.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Démonstration des valeurs de `text-decoration`

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

### HTML

```html
<p class="under">Ce texte a une ligne en dessous.</p>
<p class="over">Ce texte a une ligne au dessus.</p>
<p class="line">Ce texte est barré d'une ligne.</p>
<p>
  Ce <a class="plain" href="#">lien ne sera pas souligné</a>, comme les liens le
  sont normalement. Attention à ces décorations sur les ancres cars le
  soulignement sert souvent d'indication pour un hyperlien.
</p>
<p class="underover">Ce texte a des lignes en dessous et au dessus.</p>
<p class="thick">
  Ce texte a une ligne en dessous très épaisse et violette dans les navigateurs
  compatibles.
</p>
<p class="blink">Ce texte peut clignoter selon le navigateur utilisé.</p>
```

#### Résultat

{{EmbedLiveSample("Exemples", "auto", 520)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés individuelles de `text-decoration` sont {{CSSxRef("text-decoration-line")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-decoration-style")}} et {{CSSxRef("text-decoration-thickness")}}.
- Les propriétés {{CSSxRef("text-decoration-skip-ink")}}, {{CSSxRef("text-underline-offset")}} et {{CSSxRef("text-underline-position")}} affectent également la décoration du texte, mais ne sont pas incluses dans la propriété raccourcie.
- La propriété {{CSSxRef("list-style")}} contrôle l'apparence des éléments dans les listes HTML {{HTMLElement("ol")}} et {{HTMLElement("ul")}}.
- L'attribut SVG {{SVGAttr("text-decoration")}}
