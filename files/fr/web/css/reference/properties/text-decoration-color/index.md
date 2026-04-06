---
title: text-decoration-color
slug: Web/CSS/Reference/Properties/text-decoration-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-decoration-color`** définit la couleur des décorations ajoutées au texte par {{CSSxRef("text-decoration-line")}}.

La couleur s'applique aux décorations, telles que les soulignements, les lignes au-dessus, les lignes barrées et les lignes ondulées utilisées pour marquer les fautes d'orthographe, dans le cadre de la valeur de la propriété.

{{InteractiveExample("Démonstration CSS&nbsp;: text-decoration-color")}}

```css interactive-example-choice
text-decoration-color: red;
```

```css interactive-example-choice
text-decoration-color: #21ff21;
```

```css interactive-example-choice
text-decoration-color: rgb(255 90 255);
```

```css interactive-example-choice
text-decoration-color: hsl(70 100% 40%);
```

```css interactive-example-choice
text-decoration-color: currentColor;
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

#example-element {
  text-decoration-line: underline;
}
```

CSS ne fournit pas de mécanisme spécifique pour définir une couleur unique pour chaque type de ligne. Cet effet peut néanmoins être obtenu en imbriquant des éléments, en appliquant un type de ligne différent à chaque élément (avec la propriété {{CSSxRef("text-decoration-line")}}), et en définissant la couleur de la ligne (avec `text-decoration-color`) pour chaque élément.

## Syntaxe

```css
/* Valeurs de type <color> */
text-decoration-color: currentColor;
text-decoration-color: red;
text-decoration-color: #00ff00;
text-decoration-color: rgb(255 128 128 / 50%);
text-decoration-color: transparent;

/* Valeurs globales */
text-decoration-color: inherit;
text-decoration-color: initial;
text-decoration-color: revert;
text-decoration-color: revert-layer;
text-decoration-color: unset;
```

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la décoration de ligne.

## Accessibilité

Il est important de s'assurer que le ratio de contraste entre la couleur du texte, le fond sur lequel le texte est placé et la ligne de décoration du texte est suffisamment élevé pour que les personnes ayant des déficiences visuelles puissent lire le contenu de la page. Le ratio de contraste des couleurs est déterminé en comparant la luminosité des valeurs de couleur du texte et du fond.

La couleur seule ne doit pas être utilisée pour transmettre une signification. Par exemple, le changement de couleur du texte et de `text-decoration-color` seul ne suffit pas à indiquer qu'un lien a la sélection.

- [WebAIM&nbsp;: Vérificateur de contraste des couleurs <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [Comprendre le WCAG sur le MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.3 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

```html
<p>
  Ce paragraphe contient <s>du texte erroné</s> à l'intérieur que je veux mettre
  en évidence.
</p>
```

```css
p {
  text-decoration-line: underline;
  text-decoration-color: cyan;
}

s {
  text-decoration-line: line-through;
  text-decoration-color: red;
  text-decoration-style: wavy;
}
```

{{EmbedLiveSample("Exemple simple")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Lors de la définition de plusieurs propriétés de décoration de ligne en même temps, il peut être plus pratique d'utiliser la propriété raccourcie {{CSSxRef("text-decoration")}}.
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Autres propriétés liées à la couleur&nbsp;: {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}} et {{CSSxRef("column-rule-color")}}
