---
title: Valeur d'attribut HTML `<meta name="responsive-embedded-sizing">`
short-title: responsive-embedded-sizing
slug: Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing
l10n:
  sourceCommit: 04c41175b160dc00b1a1b8e4e13b2183d89fdf1a
---

{{SeeCompatTable}}

La valeur **`responsive-embedded-sizing`** pour l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) d'un élément HTML {{HTMLElement("meta")}} permet à un document intégré dans un {{HTMLElement("iframe")}} de partager ses informations de taille avec le document parent. La frame peut alors être dimensionnée par rapport à la taille de mise en page de son document contenu en utilisant la propriété CSS {{CSSxRef("frame-sizing")}}.

## Description

Pour des raisons de sécurité et de confidentialité, les éléments HTML {{HTMLElement("iframe")}} n'exposent pas par défaut d'informations au document parent sur la taille du contenu dans le document qu'ils intègrent.

Pour activer le dimensionnement réactif des éléments HTML {{HTMLElement("iframe")}} en fonction de leur contenu, la balise `<meta name="responsive-embedded-sizing">` peut être incluse dans un document intégré pour lui permettre de partager ses informations de taille avec le document parent.

La propriété CSS {{CSSxRef("frame-sizing")}} peut alors être définie sur l'élément HTML {{HTMLElement("iframe")}} pour qu'il adopte la même taille horizontale ou verticale que la taille réelle du contenu du document intégré (appelée **taille intrinsèque de mise en page interne** dans la spécification, mais abrégée en «&nbsp;taille de mise en page&nbsp;» dans notre documentation). Cela permet au contenu de l'élément HTML {{HTMLElement("iframe")}} de s'intégrer parfaitement dans l'élément parent et d'éviter les barres de défilement inutiles.

Pour redimensionner dynamiquement un `<iframe>` au fur et à mesure que le document intégré change de taille de mise en page, vous pouvez appeler la méthode {{DOMxRef("Window.requestResize()")}} depuis le document intégré pour qu'il signale une taille mise à jour.

## Exemples

Voir les pages {{CSSxRef("frame-sizing")}} et {{DOMxRef("Window.requestResize()")}} pour des exemples complets.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode API {{DOMxRef("Window.requestResize()")}}
- La propriété CSS {{CSSxRef("frame-sizing")}}
- Le module [de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
