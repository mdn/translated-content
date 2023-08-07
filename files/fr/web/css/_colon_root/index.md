---
title: ":root"
slug: Web/CSS/:root
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:root`** permet de cibler la racine de l'arbre représentant le document. Pour un document HTML, `:root` ciblera donc l'élément {{HTMLElement("html")}} et aura le même comportement que le sélecteur `html` mais [sa spécificité](/fr/Apprendre/CSS/Introduction_à_CSS/La_cascade_et_l_héritage#Le_poids_des_sélecteurs) sera plus forte.

```css
/* Sélectionne l'élément racine du document */
/* Pour un document HTML, c'est <html> */
:root {
  background: yellow;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

`:root` peut être utile lorsqu'on déclare [des propriétés CSS personnalisées globales](/fr/docs/Web/CSS/--*) :

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
