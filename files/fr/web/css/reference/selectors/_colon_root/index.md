---
title: Pseudo-classe CSS `:root`
short-title: :root
slug: Web/CSS/Reference/Selectors/:root
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
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

- L'élément HTML {{HTMLElement("html")}}
- La propriété DOM {{DOMxRef("Document.rootElement")}}
- La méthode DOM {{DOMxRef("Node.getRootNode()")}}
- La propriété DOM {{DOMxRef("Element.shadowRoot")}}
- L'interface {{DOMxRef("ShadowRoot")}}
