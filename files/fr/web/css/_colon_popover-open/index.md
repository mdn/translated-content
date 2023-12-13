---
title: ":popover-open"
slug: Web/CSS/:popover-open
l10n:
  sourceCommit: 44cf523714
---

{{CSSRef}}

La [pseudo-class](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:popover-open`** représente un élément {{domxref("Popover API", "popover", "", "nocode")}} (c'est-à-dire un élément avec un attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover)) qui est dans l'état ouvert. Vous pouvez l'utiliser pour appliquer un style aux éléments de popover uniquement lorsqu'ils sont affichés.

## Syntaxe

```css
:popover-open {
  /* ... */
}
```

## Exemples

Par défaut, les popovers apparaissent au milieu du viewport. Le style par défaut est défini comme ceci dans la feuille de style UA :

```css
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
```

Pour surcharger les styles par défaut et faire apparaître le popover ailleurs sur votre viewport, vous devez remplacer les styles ci-dessus par quelque chose comme ceci :

```css
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
