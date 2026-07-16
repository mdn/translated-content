---
title: Pseudo-classe CSS `:-moz-loading`
short-title: :-moz-loading
slug: Web/CSS/Reference/Selectors/:-moz-loading
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_Header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-loading`** est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui correspond aux éléments qui ne peuvent être affichés, car ils n'ont pas été chargés (par exemple les images qui n'ont pas encore été transférées sur le réseau). On notera que les images _en cours de chargement_ (le fichier est arrivé et est en train d'être traité pour affichage par le navigateur) ne sont pas ciblées par cette pseudo-classse.

> [!NOTE]
> Cette pseudo-classe est principalement destinée aux développeur·euse·s de thèmes.

## Syntaxe

```css
:-moz-loading {
  /* ... */
}
```

## Exemples

```css
img:-moz-loading {
  background: url("loading-animation.gif") center no-repeat;
}
```

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Voir aussi

- Les pseudo-classes {{CSSxRef(":-moz-broken")}}, {{CSSxRef(":-moz-suppressed")}}, {{CSSxRef(":-moz-user-disabled")}}
