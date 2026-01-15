---
title: SVG en tant qu'image
slug: Web/SVG/Guides/SVG_as_an_image
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Vous pouvez utiliser SVG comme format d'image dans HTML, CSS, certains éléments SVG et via l'API Canvas.
Cette page liste les fonctionnalités où vous pouvez fournir du SVG comme source d'image.

## Fonctionnalités prenant en charge SVG

Les navigateurs prennent en charge les images SVG dans&nbsp;:

- les éléments HTML {{HTMLElement("img")}} ou {{SVGElement("svg")}}
- la propriété CSS {{CSSxRef("background-image")}}
- la propriété CSS {{CSSxRef("list-style-image")}}
- la propriété CSS {{CSSxRef("content")}}
- l'élément SVG {{SVGElement("image")}}
- l'élément SVG {{SVGElement("feImage")}}
- Canvas [`drawImage`](/fr/docs/Web/API/Canvas_API/Tutorial/Using_images#dessin_dimages)

## Restrictions

Pour des raisons de sécurité, certains navigateurs appliquent des restrictions au contenu SVG lorsqu'il est utilisé en tant qu'image.
Plus précisément, les limitations suivantes peuvent s'appliquer&nbsp;:

- [JavaScript](/fr/docs/Web/JavaScript) est désactivé.
- Les ressources externes (par exemple images, feuilles de style) ne peuvent pas être chargées, mais elles peuvent être utilisées si elles sont intégrées via des [URL `data:`](/fr/docs/Web/URI/Reference/Schemes/data).
- Les styles de liens {{CSSxRef(":visited")}} ne sont pas rendus.
- La mise en forme des widgets natifs à la plateforme (basée sur le thème du système d'exploitation) est désactivée.

Notez que les restrictions ci-dessus sont spécifiques au contexte d'image&nbsp;; elles ne s'appliquent pas lorsque le contenu SVG est affiché directement, ou lorsqu'il est embarqué en tant que document via les éléments {{HTMLElement("iframe")}}, {{HTMLElement("object")}} ou {{HTMLElement("embed")}}.

## Spécifications

{{Specifications}}
