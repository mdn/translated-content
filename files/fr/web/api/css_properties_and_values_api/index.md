---
title: CSS Properties and Values API (Propriétés et valeurs)
slug: Web/API/CSS_Properties_and_Values_API
translation_of: Web/API/CSS_Properties_and_Values_API
---
{{SeeCompatTable}} L'**API Propriétés et valeurs CSS** — qui fait partie de l'ensemble d'API [CSS Houdini](/fr/docs/Web/Houdini) — sert à définir explicitement des [propriétés CSS personnalisées](/fr/docs/Web/CSS/--*), ce qui permet la vérification des types de propriétés, de leur donner des valeurs par défaut et de déterminer si une propriété peut hériter ses valeurs ou non.

## Interfaces

- {{domxref('CSS.registerProperty')}}
  - : Définit la manière dont un navigateur devrait analyser une {{cssxref('--*', 'propriété CSS personnalisée')}}. L'accès à cette interface se fait en [JavaScript](/fr/docs/Web/JavaScript) via {{domxref('CSS.registerProperty')}}.
- {{cssxref('@property')}}
  - : Définit la manière dont un navigateur devrait analyser une {{cssxref('--*', 'propriété CSS personnalisée')}}. L'accès à cette interface se fait à l'aide d'une règle [at-rule](/fr/docs/Web/CSS/At-rule) {{cssxref('@property')}} en [CSS](/fr/docs/Web/CSS).

## Exemples

L'exemple suivant utilise {{domxref('CSS.registerProperty')}} en [JavaScript](/fr/docs/Web/JavaScript) pour typer une [propriété CSS personnalisée](/fr/docs/Web/CSS/--*), `--ma-couleur` en tant que couleur et que valeur par défaut, sans lui permettre d'hériter de sa valeur :

```js
window.CSS.registerProperty({
  name: '--ma-couleur',
  syntax: '<color>',
  inherits: false,
  initialValue: '#c0ffee',
});
```

Le même enregistrement peut se faire en [CSS](/fr/docs/Web/CSS) en utilisant la règle [at-rule](/fr/docs/Web/CSS/At-rule) {{cssxref('@property')}} :

```css
@property --ma-couleur {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
```

## Spécifications

{{Specifications("api.CSS.registerProperty")}}

## Compatibilité des navigateurs

Voir les interfaces individuelles

## Voir aussi

- [API Peinture CSS](/fr/docs/Web/API/CSS_Painting_API)
- [API Typage de modèle d'objet CSS](/fr/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/fr/docs/Web/Houdini)
