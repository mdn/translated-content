---
title: inherits
slug: Web/CSS/Reference/At-rules/@property/inherits
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`inherits`** de la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@property")}} contrôle si la [propriété personnalisée CSS](/fr/docs/Web/CSS/Reference/Properties/--*) enregistrée hérite ou non de sa valeur par défaut.
Ce descripteur est obligatoire&nbsp;: s'il est absent ou invalide, la règle `@property` entière est ignorée.

## Syntaxe

```css
/* La propriété personnalisée n'hérite pas de la valeur */
inherits: false;

/* La propriété personnalisée hérite de la valeur */
inherits: true;
```

### Valeurs

- `true`
  - : La propriété hérite par défaut.
- `false`
  - : La propriété n'hérite pas par défaut.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le comportement d'héritage d'une propriété personnalisée

Cet exemple montre comment définir une propriété personnalisée `--my-color` qui n'hérite pas sa valeur des éléments parents&nbsp;:

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

- Autres descripteurs de {{CSSxRef("@property")}}&nbsp;: {{CSSxRef("@property/initial-value", "initial-value")}} et {{CSSxRef("@property/syntax","syntax")}}
- [API Propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API)
- [API Peinture CSS](/fr/docs/Web/API/CSS_Painting_API)
- [API Typage de modèle d'objet CSS](/fr/docs/Web/API/CSS_Typed_OM_API)
- [API Houdini](/fr/docs/Web/API/Houdini_APIs)
