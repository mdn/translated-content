---
title: initial-value
slug: Web/CSS/Reference/At-rules/@property/initial-value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`initial-value`** de la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@property")}} définit la valeur initiale pour la [propriété personnalisée CSS](/fr/docs/Web/CSS/Reference/Properties/--*) enregistrée.
Ce descripteur est obligatoire sauf si la valeur du descripteur {{CSSxRef("@property/syntax", "syntax")}} est la syntaxe universelle (`*`).
S'il est requis mais absent ou invalide, la règle `@property` entière est ignorée.

## Syntaxe

```css
/* Définit la valeur initiale de couleur */
initial-value: rebeccapurple;

/* Définit la valeur initiale de longueur */
initial-value: 2rem;
```

### Valeurs

Une valeur qui correspond au type définit dans le descripteur {{CSSxRef("@property/syntax", "syntax")}}.
Par exemple, si `syntax` est `<color>`, alors la valeur de `initial-value` doit être une valeur {{CSSxRef("color")}} valide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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

En utilisant [JavaScript](/fr/docs/Web/JavaScript) {{DOMxRef('CSS.registerProperty_static', 'CSS.registerProperty()')}}&nbsp;:

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

- Autres descripteurs de {{CSSxRef("@property")}}&nbsp;: {{CSSxRef("@property/inherits","inherits")}} et {{CSSxRef("@property/syntax", "syntax")}}
- [API Propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API)
- [API Peinture CSS](/fr/docs/Web/API/CSS_Painting_API)
- [API Typage de modèle d'objet CSS](/fr/docs/Web/API/CSS_Typed_OM_API)
- [API Houdini](/fr/docs/Web/API/Houdini_APIs)
