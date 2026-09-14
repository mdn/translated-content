---
title: Valeur garantie comme invalide
slug: Glossary/guaranteed_invalid_value
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

En CSS, la valeur garantie comme invalide est {{CSSxRef("initial")}}.

Lorsque la valeur d'une [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) est la valeur garantie comme invalide, la fonction CSS {{CSSxRef("var()")}} ne peut pas l'utiliser pour la substitution. Tenter de le faire rend la déclaration _invalide au moment du calcul de la valeur_, sauf si une valeur de repli valide est spécifiée.

## Voir aussi

- La propriété CSS {{CSSxRef("initial")}}
- La fonction CSS {{CSSxRef("var()")}}
- [Spécification CSS Custom Properties for Cascading Variables Module Level 1 <sup>(angl.)</sup>](https://drafts.csswg.org/css-variables/#guaranteed-invalid)
