---
title: :-moz-broken
slug: Web/CSS/Reference/Selectors/:-moz-broken
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}{{Deprecated_Header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) `:-moz-broken` est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui s'adapte aux éléments qui représentent des liens cassés vers des images.

> [!NOTE]
> Ce sélecteur est principalement destiné à être utilisé par les développeur·euse·s de thèmes.

## Syntaxe

```css
:-moz-broken {
  /* ... */
}
```

## Exemples

### HTML

```html
<img src="broken.jpg" alt="Cette image ne fonctionne pas. :-(" />
```

### CSS

```css
:-moz-broken {
  background: bisque;
  padding: 8px;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-classes {{CSSxRef(":-moz-loading")}}, {{CSSxRef(":-moz-suppressed")}}, {{CSSxRef(":-moz-user-disabled")}}
- [bug Firefox 11011 <sup>(angl.)</sup>](https://bugzil.la/11011)
