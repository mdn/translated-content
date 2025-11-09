---
title: initial-value
slug: Web/CSS/Reference/At-rules/@property/initial-value
original_slug: Web/CSS/@property/initial-value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`initial-value`** de la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@property")}} définit la valeur initiale pour la [propriété personnalisée CSS](/fr/docs/Web/CSS/Reference/Properties/--*) enregistrée.
Ce descripteur est obligatoire sauf si la valeur du descripteur {{cssxref("@property/syntax", "syntax")}} est la syntaxe universelle (`*`).
S'il est requis mais absent ou invalide, la règle `@property` entière est ignorée.

## Syntaxe

```css
/* Définit la valeur initiale de couleur */
initial-value: rebeccapurple;

/* Définit la valeur initiale de longueur */
initial-value: 2rem;
```

### Valeurs

Une valeur qui correspond au type définit dans le descripteur {{cssxref("@property/syntax", "syntax")}}.
Par exemple, si `syntax` est `<color>`, alors la valeur de `initial-value` doit être une valeur {{cssxref("color")}} valide.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir une valeur initiale pour une propriété personnalisée

Cet exemple montre comment définir une propriété personnalisée `--my-color` avec une valeur initiale de couleur `#c0ffee`. Cette valeur initiale sera utilisée lorsque la propriété n'est pas héritée (`inherits: false`) et qu'aucune autre valeur n'est définie sur l'élément.

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

En utilisant [JavaScript](/fr/docs/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}}&nbsp;:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres descripteurs de {{cssxref("@property")}}&nbsp;: {{cssxref("@property/inherits","inherits")}} et {{cssxref("@property/syntax", "syntax")}}
- [API Propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API)
- [API Peinture CSS](/fr/docs/Web/API/CSS_Painting_API)
- [API Typage de modèle d'objet CSS](/fr/docs/Web/API/CSS_Typed_OM_API)
- [API Houdini](/fr/docs/Web/API/Houdini_APIs)
