---
title: <desc>
slug: Web/SVG/Reference/Element/desc
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

L'élément [SVG](/fr/docs/Web/SVG) **`<desc>`** fournit une description textuelle longue et accessible de tout [élément SVG conteneur](/fr/docs/Web/SVG/Reference/Element#éléments_conteneurs) ou [élément SVG graphique](/fr/docs/Web/SVG/Reference/Element#éléments_graphiques).

Le texte d'un élément `<desc>` n'est pas affiché dans le rendu graphique. Si l'élément peut être décrit par du texte visible, il est possible de référencer ce texte avec l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby). Si `aria-describedby` est utilisé, il prendra le pas sur `<desc>`.

Le texte masqué d'un élément `<desc>` peut également être concaténé avec le texte visible d'autres éléments en utilisant plusieurs ID dans la valeur de `aria-describedby`. Dans ce cas, l'élément `<desc>` doit fournir un ID pour être référencé.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

Cet élément n'inclut que les attributs universels.

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGDescElement")}}.

## Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4">
    <desc>
      Je suis un cercle, et cette description sert à montrer comment on peut me
      décrire, mais est-il vraiment nécessaire de décrire un simple cercle comme
      moi ?
    </desc>
  </circle>
</svg>
```

{{EmbedLiveSample("Exemples", 150, "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{SVGElement("title")}}
