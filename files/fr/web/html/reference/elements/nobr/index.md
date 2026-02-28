---
title: "<nobr> : l'élément de non-rupture de texte"
slug: Web/HTML/Reference/Elements/nobr
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<nobr>`** empêche le texte qu'il contient d'être automatiquement renvoyé à la ligne, ce qui peut obliger l'utilisateur·ice à faire défiler horizontalement pour voir toute la largeur du texte.

> [!WARNING]
> Bien que cet élément soit largement supporté, il n'a _jamais_ été standardisé en HTML, donc il ne faut pas l'utiliser. Utilisez plutôt la propriété CSS {{CSSxRef("white-space")}} ainsi&nbsp;:

```html
<span class="nobr">Un texte long sans retour à la ligne.</span>
```

```css
.nobr {
  white-space: nowrap;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("white-space")}}
- La propriété CSS {{CSSxRef("overflow")}}
