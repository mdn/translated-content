---
title: '::part()'
slug: Web/CSS/::part
tags:
  - '::part'
  - CSS
  - Draft
  - Exp
  - NeedsBrowserCompatibility
  - NeedsExample
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::part
---
{{CSSRef}}{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::part`** représente n’importe quel élément dans un [arbre fantôme](/fr/docs/Web/Web_Components/Using_shadow_DOM) qui a un attribut {{HTMLAttrxRef("part")}} correspondant.

```css
custom-element::part(foo) {
  /* Styles à appliquer à la partie `foo` */
}
```

## Syntaxe

{{CSSSyntax}}

## Exemples

### `<tabbed-custom-element>`

#### Arbre fantôme `<tabbed-custom-element>`

```html
<style type="text/css">
  *, ::before, ::after {
    box-sizing: border-box;
  }

  :host {
    display: flex;
  }
</style>
<div part="tab active">
  Tab 1
</div>
<div part="tab">
  Tab 2
</div>
<div part="tab">
  Tab 3
</div>
```

#### Feuille de style chargée dans un arbre léger

```css
tabbed-custom-element::part(tab) {
  color: #0c0c0dcc;
  border-bottom: transparent solid 2px;
}

tabbed-custom-element::part(tab):hover {
  background-color: #0c0c0d19;
  border-color: #0c0c0d33;
}

tabbed-custom-element::part(tab):hover:active {
  background-color: #0c0c0d33;
}

tabbed-custom-element::part(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset,
    0 0 0 1px #0a84ff,
    0 0 0 4px rgba(10, 132, 255, 0.3);
}

tabbed-custom-element::part(active tab) {
  color: #0060df;
  border-color: #0a84ff !important;
}
```

## Spécifications

| Spécification                                                        | État                                    | Commentaires         |
| -------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS Shadow Parts", "#part", "::part")}} | {{Spec2("CSS Shadow Parts")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.part")}}

## Voir aussi

- L’attribut {{HTMLAttrxRef("part")}} - Utilisé pour définir des parties qui peuvent être sélectionnées par le sélecteur `::part()`
- L'attribut {{HTMLattrxref("exportparts")}} qui est utilisé pour exporter les parties d'un arbre _shadow_ imbriqué vers un arbre classique
- [Utilisation de CSS Shadow : `::part` et `::theme`](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)
