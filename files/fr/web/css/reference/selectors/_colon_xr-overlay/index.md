---
title: Pseudo-classe CSS `:xr-overlay`
short-title: :xr-overlay
slug: Web/CSS/Reference/Selectors/:xr-overlay
l10n:
  sourceCommit: 8bc4a2b996edcb9bae1769200bbc7b29ed5d7097
---

{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:xr-overlay`** correspond à l'élément de superposition DOM lorsqu'une page web est affichée dans un environnement <abbr title="Augmented Reality" lang="en">AR</abbr> ou <abbr title="Virtual Reality" lang="en">VR</abbr> immersif.

## Syntaxe

```css
:xr-overlay {
  /* ... */
}
```

## Description

La pseudo-classe `:xr-overlay` correspond à l'élément de superposition pendant toute la durée d'une session immersive utilisant une superposition DOM.

L'élément de superposition est une racine d'arrière-plan. Tout effet {{CSSxRef("backdrop-filter")}} appliqué à l'élément de superposition DOM ou à ses descendants ne modifie pas l'image de la caméra AR (le cas échéant) ni le contenu rendu dans le {{DOMxRef("XRWebGLLayer")}} de la session immersive.

L'élément de superposition lui-même est un [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) en raison de sa {{CSSxRef("position")}} fixe. Les contextes d'empilement des ancêtres de l'élément de superposition, le cas échéant, ne sont pas peints sur l'affichage de la session immersive.

> [!NOTE]
> Dans un système à plusieurs écrans, les contextes d'empilement des ancêtres ou des arbres voisins de l'élément superposé peuvent s'afficher sur des écrans distincts.

## Exemples

### Utilisation simple

Dans cet exemple, nous définissons la superposition comme étant noire semi-transparente, permettant au contenu derrière la superposition d'être partiellement visible. Pour garantir un contraste suffisant entre le contenu et son arrière-plan, nous définissons la couleur ({{CSSxRef("color")}}) sur `white`.

```css
:xr-overlay {
  background-color: rgba(0 0 0 / 0.5);
  color: white;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":modal")}}
- La pseudo-classe {{CSSxRef(":fullscreen")}}
- La pseudo-classe {{CSSxRef(":picture-in-picture")}}
- [Les pseudo-classes CSS](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Les fondamentaux de l'API WebXR](/fr/docs/Web/API/WebXR_Device_API/Fundamentals)
- La propriété {{DOMxRef("XRSession.domOverlayState")}}
