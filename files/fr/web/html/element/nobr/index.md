---
title: "<nobr> : l'élément de non-rupture de texte (obsolète)"
slug: Web/HTML/Element/nobr
---

{{HTMLSidebar}}{{deprecated_header}}{{non-standard_header}}

L'élément HTML **`<nobr>`** évite qu'un texte soit coupé par un retour à la ligne automatique ; il est donc affiché sur une seule ligne. Il peut être alors nécessaire d'utiliser les barres de défilement pour lire le texte en intégralité.

> **Attention :** Cet élément n'est pas standard en HTML et ne doit donc pas être utilisé. **C'est la propriété CSS {{cssxref("white-space")}} doit être utilisée à la place**, de cette manière :

```html
<span style="white-space: nowrap">Un texte long sans retour à la ligne.</span>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("white-space")}}
- {{cssxref("overflow")}}
