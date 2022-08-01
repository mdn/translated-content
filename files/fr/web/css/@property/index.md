---
title: '@property'
slug: Web/CSS/@property
translation_of: Web/CSS/@property
browser-compat: css.at-rules.property
---
{{CSSRef}}{{SeeCompatTable}}

La règle {{cssxref("at-rule")}} [CSS](/fr/docs/Web/CSS) **`@property`** fait partie du panel d'API [CSS Houdini](/fr/docs/Web/Houdini), qui permet de définir explicitement leurs propriétés CSS personnalisées (voir {{cssxref('--*', 'CSS custom properties')}}). Cela permet la vérification des types de propriétés, de leur donner des valeurs par défaut et de déterminer si une propriété peut hériter ses valeurs ou non.

La règle `@property` permet l'enregistrement d'une propriété personnalisée directement dans une feuille de styles sans avoir à utiliser la moindre ligne de JavaScript. Une règle `@property` valide enregistre une nouvelle propriété personnalisée comme si {{domxref('CSS.registerProperty')}} avait été appelé avec les mêmes paramètres.

## Syntaxe

```css
@property --property-name {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
```

### Descripteurs

- {{cssxref("@property/syntax","syntax")}}
  - : Décrit la syntaxe autorisée de la propriété.
- {{cssxref("@property/inherits","inherits")}}
  - : Détermine si l'enregistrement de la propriété personnalisée spécifiée avec `@property` hérite ou non par défaut.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Détermine la valeur initiale de la propriété.

Une règle `@property` valide enregistre une propriété personnalisée avec comme nom de propriété la sérialisation de du préfixe de la règle.

Une règle `@property` nécessite le respecte d'une syntaxe (voir {{cssxref("@property/syntax","syntax")}}) et une description d'héritage (voir {{cssxref("@property/inherits","inherits")}}). Si l'un des deux manque, l'ensemble de la règle est invalide et celle-ci doit être ignorée. Le descripteur {{cssxref("@property/initial-value","initial-value")}} est optionnel, uniquement si la syntaxe est une définition de syntaxe universelle. Sinon, le descripteur est requis (s'il manque, l'ensemble de la règle est invalide et celle-ci doit être ignorée).

Les descripteurs inconnus ne sont pas valides et sont ignorés, mais n'invalident pas l'ensemble de la règle `@property`.

## Exemples

Ajout d'une vérification de type à la {{cssxref('--*', 'propriété personnalisée')}} `--my-color` en tant que couleur et que valeur par défaut, sans lui permettre d'hériter de sa valeur&nbsp;:

Utilisation de la règle [CSS](/en-US/docs/Web/CSS) [at-rule](/fr/docs/Web/CSS/At-rule) {{cssxref('@property')}}&nbsp;:

```css
@property --my-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
```

Équivalent avec la fonction [JavaScript](/en-US/docs/Web/JavaScript) {{domxref('CSS.registerProperty')}}&nbsp;:

```js
window.CSS.registerProperty({
  name: '--my-color',
  syntax: '<color>',
  inherits: false,
  initialValue: '#c0ffee',
});
```

## Syntaxe formelle

{{csssyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [API Propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API)
- [API Peinture CSS](/fr/docs/Web/API/CSS_Painting_API)
- [API Typage de modèle d'objet CSS](/fr/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/fr/docs/Web/Houdini)
