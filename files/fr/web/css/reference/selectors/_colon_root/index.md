---
title: :root
slug: Web/CSS/Reference/Selectors/:root
original_slug: Web/CSS/:root
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:root`** permet de cibler la racine de l'arbre représentant le document. Pour un document HTML, `:root` ciblera donc l'élément {{HTMLElement("html")}} et aura le même comportement que le sélecteur `html` mais [sa spécificité](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#le_poids_des_sélecteurs) sera plus forte.

```css
/* Sélectionne l'élément racine du document */
/* Pour un document HTML, c'est <html> */
:root {
  background: yellow;
}
```

## Syntaxe

```css
:root {
  /* ... */
}
```

## Exemples

`:root` peut être utile lorsqu'on déclare [des propriétés CSS personnalisées globales](/fr/docs/Web/CSS/Reference/Properties/--*) :

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

## Voir aussi

- L'élément {{HTMLElement("html")}}
- {{domxref("Document.rootElement")}}
- {{domxref("Node.getRootNode()")}}
- {{domxref("Element.shadowRoot")}}
- {{domxref("ShadowRoot")}}
