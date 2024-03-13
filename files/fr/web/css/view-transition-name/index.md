---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: c1ccc5843f5a7702f5cc69d4bf37db0aadc808ac
---

{{CSSRef}}{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`view-transition-name`** fournit un nom d'identification (une valeur [`<custom-ident>`](/fr/docs/Web/CSS/custom-ident)) à l'élément ciblé pour qu'il participe à une [transition de vue](/fr/docs/Web/API/View_Transitions_API) différente de la transition racine, ou ne suive pas la transition de vue si c'est la valeur `none` qui est utilisée.

## Syntaxe

```css
/* Exemples de valeurs <custom-ident> */
view-transition-name: header;
view-transition-name: figure-caption;

/* Valeurs avec un mot-clé */
view-transition-name: none;
```

### Valeurs

- [`<custom-ident>`](/fr/docs/Web/CSS/custom-ident)
  - : Un nom distinct et unique qui indique que l'élément ciblé participera à une [transition de vue](/fr/docs/Web/API/View_Transitions_API) séparée de la transition de vue racine. L'identifiant doit être unique. Si deux éléments affichés ont la même valeur `view-transition-name` au même moment, la promesse exposée par [`ViewTransition.ready`](/fr/docs/Web/API/ViewTransition/ready) échouera et la transition sera ignorée.
- `none`
  - : L'élément cible ne participera pas à la transition de vue.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

```css
figcaption {
  view-transition-name: figure-caption;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API <i lang="en">View Transitions</i>](/fr/docs/Web/API/View_Transitions_API)
- [Des transitions simples et fluides avec l'API <i lang="en">View Transitions</i> (en anglais)](https://developer.chrome.com/docs/web-platform/view-transitions/)
