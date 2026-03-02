---
title: font-display
slug: Web/CSS/Reference/At-rules/@font-feature-values/font-display
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le descripteur **`font-display`** pour la règle {{CSSxRef("@font-feature-values")}} définit la valeur par défaut indiquant comment une police est affichée, en fonction de son téléchargement et du moment où il a lieu. Définir une valeur pour le descripteur `font-display` dans un bloc `@font-feature-values` fixe la valeur par défaut du descripteur `font-display` pour la règle {{CSSxRef("@font-face")}} pour toutes les polices partageant la même valeur de {{CSSxRef("@font-face/font-family", "font-family")}}.

## Syntaxe

```css
/* Valeurs mot-clé */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Valeurs

- `auto`
  - : La stratégie d'affichage de la police est définie par l'agent utilisateur.
- `block`
  - : Donne à la police une courte période de blocage, généralement autour de 3 secondes, et une période de swap infinie.
- `swap`
  - : Donne à la police une période de blocage extrêmement courte et une période de swap infinie.
- `fallback`
  - : Donne à la police une période de blocage extrêmement courte et une courte période de swap.
- `optional`
  - : Donne à la police une période de blocage extrêmement courte et aucune période de swap.

## Description

Le descripteur `font-display` pour `@font-feature-values` détermine la chronologie d'affichage de la police&nbsp;; il définit une valeur par défaut de `font-display` pour `@font-face` portant le même nom de `font-family`. Lorsque `font-display` est omis dans `@font-face`, l'agent utilisateur recherche d'abord la valeur `font-display` définie via `@font-feature-values` pour la famille de polices concernée. Si aucune valeur n'est trouvée, l'agent utilisateur utilise la valeur `auto` pour `font-display`, auquel cas il détermine la stratégie d'affichage.

La chronologie d'affichage de la police repose sur un minuteur qui démarre lorsque l'agent utilisateur tente d'utiliser une police téléchargée spécifique. La chronologie est divisée en trois périodes, listées ci-dessous. Ces périodes dictent le comportement de rendu de tout élément utilisant cette police.

- Période **block** de la police&nbsp;: si la police n'est pas chargée, les éléments tentant d'utiliser la police sont rendus avec une police de secours _invisible_. Le navigateur bloque l'affichage visible du texte, réservant un espace pour le texte à afficher en se basant sur les métriques de la police de secours. Pendant la période de blocage, le texte n'est pas visible. À la fin de la période de blocage, si la police n'a pas été chargée, le texte est rendu avec la police de secours.

- Période **swap** de la police&nbsp;: la période de swap se produit après la période de blocage (s'il y en a une) si la police n'a pas encore été chargée avec succès. Les éléments tentant d'utiliser la police non encore chargée sont rendus en utilisant la police de secours disponible suivante. La police de secours auparavant invisible est peinte à l'écran. Si la police se charge avec succès durant la période de swap, le texte rendu avec la police de secours est mis à jour — ou swapped — avec la police nouvellement chargée. Cette étape déclenche une repainture.

- Période **failure** de la police&nbsp;: si la police n'est pas chargée au moment où la période de swap expire ou à la fin de la période de blocage (s'il n'y a pas de période de swap, comme dans le cas de `optional`), l'agent utilisateur considère le chargement comme ayant échoué. En conséquence, le contenu devient visible avec la police de secours.

Le descripteur `font-display` permet de définir une politique d'affichage par défaut pour toutes les règles `@font-face`, y compris celles qui ne sont pas sous le contrôle de l'auteur·e, comme les règles `@font-face` tierces. Lorsque la valeur `font-display` est définie via `@font-feature-values`, elle devient la valeur par défaut appliquée à l'ensemble de la famille de polices. Toutefois, toute valeur `font-display` définie dans des blocs `@font-face` individuels remplace cette valeur par défaut, mais uniquement pour les blocs où le descripteur est défini.

## Exemples

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Le descripteur `font-display` de cet exemple fixe la valeur par défaut `font-display` de la police "Leitura" à `swap` pour tous les blocs `@font-face`. Il peut exister plusieurs blocs `@font-face` important plusieurs fichiers de police pour une même `font-family`. Si l'un de ces blocs `@font-face` inclut un descripteur `font-display`, la valeur définie sera utilisée uniquement pour ce fichier de police spécifique. Tous les autres blocs ne contenant pas de descripteur `font-display` utiliseront `swap` par défaut, au lieu de la valeur standard `auto` de l'agent utilisateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/font-display", "font-display")}} de la règle {{CSSxRef("@font-face")}}
- Le module [de police CSS](/fr/docs/Web/CSS/Guides/Fonts)
