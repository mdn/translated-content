---
title: ":popover-open"
slug: Web/CSS/:popover-open
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:popover-open`** représente un élément [<i lang="en">popover</i>](/fr/docs/Web/API/Popover_API) (c'est-à-dire un élément avec un attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover)) qui est dans l'état ouvert. Vous pouvez l'utiliser pour appliquer un style aux éléments <i lang="en">popovers</i> uniquement lorsqu'ils sont affichés.

## Syntaxe

```css
:popover-open {
  /* ... */
}
```

## Exemples

### CSS

Par défaut, les <i lang="en">popovers</i> apparaissent au milieu de la zone d'affichage (<i lang="en">viewport</i>). Le style par défaut porté par la feuille de styles de l'agent utilisateur ressemble à ceci&nbsp;:

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

Pour surcharger les styles par défaut et faire apparaître le <i lang="en">popover</i> ailleurs, vous pouvez remplacer les styles ci-dessus par quelque chose comme&nbsp;:

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

### HTML

```html
<button popovertarget="monpopo">Afficher/masquer le popover</button>

<div id="monpopo" popover="manual">Coucou ? Caché ?</div>
```

### Résultat

{{EmbedLiveSample("","100%",150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
