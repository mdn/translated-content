---
title: Propriété CSS `text-wrap-mode`
short-title: text-wrap-mode
slug: Web/CSS/Reference/Properties/text-wrap-mode
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-wrap-mode`** contrôle si le texte à l'intérieur d'un élément est renvoyé à la ligne. Les différentes valeurs offrent des façons alternatives d'envelopper le contenu d'un élément de bloc. Elle peut également être définie et réinitialisée à l'aide de la propriété raccourcie {{CSSxRef("text-wrap")}} ou de la propriété raccourcie {{CSSxRef("white-space")}}.

> [!NOTE]
> Les propriétés {{CSSxRef("white-space-collapse")}} et `text-wrap-mode` peuvent être déclarées ensemble en utilisant la propriété raccourcie {{CSSxRef("white-space")}}.

> [!NOTE]
> Le nom de cette propriété est un espace réservé, en attendant que le CSSWG trouve un meilleur nom.

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut
        cum eum id quos est.
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

Cette propriété définit si les lignes peuvent être renvoyées à la ligne aux opportunités de retour à la ligne souple non forcées. Valeurs possibles&nbsp;:

- `wrap`
  - : Le texte est renvoyé à la ligne aux caractères appropriés (par exemple les espaces, dans les langues comme l'anglais qui utilisent des séparateurs d'espaces) pour minimiser le débordement. C'est la valeur par défaut.
- `nowrap`
  - : Le texte ne se renvoie pas à la ligne. Il débordera de son élément conteneur plutôt que de passer à une nouvelle ligne.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Renvoyer le contenu à la ligne

Le paramètre par défaut est de renvoyer le contenu à la ligne, donc la propriété `text-wrap-mode` n'est pas nécessaire. Dans cet exemple, le contenu passera à la ligne suivante pour s'adapter à la boîte, la dernière ligne étant plus longue que la boîte contenant, elle déborde.

#### HTML

```html
<div class="box">LE CSS C'EST GÉNIAL</div>
```

#### CSS

```css
.box {
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: wrap;
}
```

#### Résultat

{{EmbedLiveSample("Renvoyer le contenu à la ligne", "100%", 250)}}

### Ne pas renvoyer le contenu à la ligne

Dans cet exemple, le contenu ne passera **pas** à la ligne suivante pour s'adapter à la boîte, car il a été spécifiquement indiqué de ne pas renvoyer le contenu à la ligne avec `text-wrap-mode: nowrap;`. Le contenu est plus long que la boîte contenant, il déborde.

#### HTML

```html
<div class="box">LE CSS C'EST GÉNIAL</div>
```

#### CSS

```css
.box {
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: nowrap;
}
```

#### Résultat

{{EmbedLiveSample("Ne pas renvoyer le contenu à la ligne", "100%",100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-wrap")}}
- La propriété {{CSSxRef("text-wrap-style")}}
