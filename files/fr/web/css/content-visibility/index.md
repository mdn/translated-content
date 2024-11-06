---
title: content-visibility
slug: Web/CSS/content-visibility
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`content-visibility`** détermine si un élément affiche son contenu ou non, tout en forçant un solide jeu de restrictions permettant aux agents utilisateurs de potentiellement omettre de larges pans de la mise en page et du travail de rendu jusqu'au moment où le contenu doit être affiché. Fondamentalement, cela permet à l'agent utilisateur d'éviter le travail de rendu d'un élément (comprenant sa mise en page et sa peinture) tant qu'il n'y en a pas besoin — ce qui accélère la vitesse de chargement de la page initiale.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Valeurs globales */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: unset;
```

### Valeurs

- `visible`
  - : Aucun effet. Les contenus de l'élément sont disposés et rendus normalement.
- `hidden`
  - : L'élément n'affiche pas son contenu. Les contenus de l'élément ne doivent pas être accessibles aux fonctionnalités de l'agent utilisateur telles que la recherche au sein de la page, la navigation par ordre de tabulation, etc., et il n'est pas possible de les sélectionner ou d'y placer le focus. Cela est similaire à l'utilisation de `display: none` sur ces contenus.
- `auto`
  - : L'élément suit les restrictions de mise en page, de style et de peinture. Si l'élément n'est pas pertinent pour l'utilisateur, cela évite également son contenu. Contrairement à la valeur `hidden`, le contenu évité doit toujours être disponible normalement pour les fonctionnalités de l'agent utilisateur telles que la recherche au sein de la page, la navigation par ordre de tabulation, etc., et il est possible de les sélectionner ou d'y placer le focus.

## Définition formelle

{{cssinfo}}

## Accessibilité

Les titres et les autres contenus seront supprimés par `content-visibility` s'ils sont considérés comme s'affichant en dehors de l'écran. Cela signifie que les utilisateurs de lecteurs d'écrans pourraient perdre le bénéfice d'avoir une page complète disponible à des fins de vocalisation.

Pour plus d'informations, consultez l'article [Content-visibility and Accessible Semantics](https://marcysutton.com/content-visibility-accessible-semantics) (en anglais).

## Exemples

### Utilisation de la valeur auto pour réduire les coûts de rendu des pages longues

L'exemple suivant montre l'utilisation de la valeur `auto` pour éviter la peinture et le rendu des sections situées en dehors de l'écran. Cela aide à la fois le chargement et les interactions sur la page, car le contenu situé en dehors de la fenêtre d'affichage n'est pas rendu.

```html
<style>
section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}

<section>...
<section>...
<section>...
<section>...
...
```

### Utilisation de la valeur hidden pour gérer la visibilité manuellement

L'exemple suivant montre qu'il est possible de gérer la visibilité à l'aide d'un script. La valeur ajoutée de l'utilisation de `content-visibility: hidden` par exemple à la place de `display: none` est que le contenu rendu masqué avec `content-visibility` préservera l'état de son rendu. Cela signifie que si le contenu est à nouveau affiché, il sera rendu plus rapidement qu'en modifiant la propriété `display`.

```html
<style>
.hidden {
  content-visibility: hidden;
  /* lorsqu'il est masqué, nous voulons que la taille de l'élément soit la même que si celui-ci avait un élément enfant de 0x500 pixels */
  contain-intrinsic-size: 0 500px;
}
.visible {
  content-visibility: visible;
  /* ceci est ajouté afin d'éviter tout décalage de mise en page lors de la bascule entre .hidden et .visible */
  contain: style layout paint;
}

<div class=hidden>...
<div class=visible>...
<div class=hidden>...
<div class=hidden>...
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [content-visibility : la nouvelle propriété CSS qui améliore vos performances de rendu](https://web.dev/content-visibility/) (en anglais) (web.dev)
