---
title: Propriété CSS `text-wrap-mode`
short-title: text-wrap-mode
slug: Web/CSS/Reference/Properties/text-wrap-mode
l10n:
  sourceCommit: 7d82de65fb43700d2053f13d8344ec4a78759b2c
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-wrap-mode`** contrôle si le texte à l'intérieur d'un élément est renvoyé à la ligne.

{{InteractiveExample("Démonstration CSS&nbsp;: text-wrap-mode")}}

```css interactive-example-choice
text-wrap-mode: wrap;
```

```css interactive-example-choice
text-wrap-mode: nowrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Éditez le texte dans la boîte&nbsp;:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable>
        Vous pouvez éditer ce texte lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatem aut cum eum id quos est text.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#example-element {
  border: 1px solid #c5c5c5;
  width: 250px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-wrap-mode: wrap;
text-wrap-mode: nowrap;

/* Valeurs globales */
text-wrap-mode: inherit;
text-wrap-mode: initial;
text-wrap-mode: revert;
text-wrap-mode: revert-layer;
text-wrap-mode: unset;
```

## Valeurs

La propriété `text-wrap-mode` est définie comme l'une des valeurs de mot-clé suivantes&nbsp;:

- `wrap`
  - : Le texte est renvoyé à la ligne aux caractères appropriés (par exemple les espaces, dans les langues comme l'anglais qui utilisent des séparateurs d'espaces) pour minimiser le débordement. C'est la valeur par défaut.
- `nowrap`
  - : Le texte ne retourne pas à la ligne. Il déborde de son élément conteneur plutôt que de passer à une nouvelle ligne.

## Description

La propriété `text-wrap-mode` peut être utilisée pour contrôler le retour à la ligne du texte à l'intérieur d'un élément. Les différentes valeurs offrent des façons alternatives de retourner le contenu d'un élément bloc, en définissant si les lignes peuvent être retournées à la ligne aux opportunités de retour à la ligne souple non forcées (`wrap`), ou non (`nowrap`).

Lorsque la valeur est définie sur `nowrap`, le texte déborde plutôt que de passer à plusieurs lignes. Comme la propriété {{CSSxRef("overflow")}} a pour valeur par défaut `visible`, lorsque le contenu est plus grand que la taille en ligne du conteneur, il déborde dans la direction en ligne. Pour activer le défilement dans la direction en ligne, à l'endroit du débordement, définissez la propriété {{CSSxRef("overflow-inline")}} sur `auto` ou `scroll`. Pour garantir que le conteneur est au moins aussi large que le mot le plus long, définissez la propriété {{CSSxRef("min-inline-size")}} sur {{CSSxRef("min-content")}}.

Lorsque la valeur est définie sur `wrap`, le contenu passe à la ligne suivante si nécessaire, en se retournant à la ligne aux opportunités de coupure de mot, telles que {{HTMLElement("wbr")}} et les traits d'union, ainsi que d'autres opportunités de retour à la ligne souple spécifiques à la langue. La propriété n'empêche pas les morceaux de contenu non fractionnables de déborder dans la direction en ligne si leur taille est supérieure à la taille en ligne du conteneur.

La propriété `text-wrap-mode` fait partie de deux propriétés raccourcies. La propriété `text-wrap-mode`, ainsi que la propriété {{CSSxRef("white-space-collapse")}}, peut être déclarée en utilisant le raccourci {{CSSxRef("white-space")}}. Elle peut également être définie et réinitialisée, ainsi que la propriété {{CSSxRef("text-wrap-style")}}, en utilisant le raccourci {{CSSxRef("text-wrap")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Dans cet exemple, nous comparons l'effet des deux valeurs de la propriété `text-wrap-mode`.

#### HTML

Nous incluons deux éléments {{htmlelement("div")}} qui sont identiques sauf pour leurs noms de classe.

```html
<div class="wrap">LE CSS C'EST GÉNIAL</div>
<div class="nowrap">LE CSS C'EST GÉNIAL</div>
```

#### CSS

Nous appliquons les mêmes styles aux deux conteneurs, en limitant leur largeur.

```css
div {
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 4rem;
  box-sizing: border-box;
  border: 0.25rem solid black;
  padding: 0 4px;
  width: 14rem;
  margin: 1rem;
}
```

Nous donnons aux exemples des valeurs différentes pour la propriété `text-wrap-mode`&nbsp;:

```css
.wrap {
  text-wrap-mode: wrap;
}
.nowrap {
  text-wrap-mode: nowrap;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", 360)}}

Dans l'exemple `wrap`, le contenu passe à la ligne suivante afin de s'adapter à la boîte. «&nbsp;Génial&nbsp;» est plus large que la boîte contenant, et ne contient aucune opportunité de retour à la ligne souple, donc il déborde.

Dans l'exemple `nowrap`, le contenu ne passe **pas** à la ligne suivante, car il a été spécifiquement défini pour ne pas se retourner, donc il est tout sur une seule ligne, débordant du conteneur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-wrap")}}
- La propriété {{CSSxRef("text-wrap-style")}}
- La propriété {{CSSxRef("hyphens")}}
- La propriété {{CSSxRef("white-space")}}
- La propriété {{CSSxRef("overflow")}}
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
