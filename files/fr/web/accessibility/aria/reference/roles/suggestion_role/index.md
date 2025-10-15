---
title: "ARIA : rôle suggestion"
short-title: suggestion
slug: Web/Accessibility/ARIA/Reference/Roles/suggestion_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `suggestion` désigne sémantiquement un changement proposé unique dans un document modifiable. Cela doit être utilisé sur un élément qui enveloppe un élément avec un rôle `insertion`, et un avec un rôle `deletion`.

## Exemples

Lorsque vous avez un changement de contenu qui implique une insertion _et_ une suppression, il n'y a aucun moyen pour un·e utilisateur·ice de lecteur d'écran de déterminer si les deux sont liés ou non. C'est le travail du `role="suggestion"`, qui doit être défini sur un élément enveloppant les deux comme suit&nbsp;:

```html
<p>
  L'animal de compagnie de Freida est un
  <span role="suggestion">
    <span role="deletion">chat noir appelé Luna</span>
    <span role="insertion">T. Rex violet appelé Tiny</span></span
  >.
</p>
```

On peut même fournir une boîte d'information indiquant qui a fait la suggestion et quand, et l'associer à la suggestion via [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)&nbsp;:

```html
<p>
  L'animal de compagnie de Freida est un
  <span role="suggestion" aria-details="comment-source">
    <span role="deletion">chat noir appelé Luna</span>
    <span role="insertion">T. Rex violet appelé Tiny</span></span
  >.
</p>

<div id="comment-source">
  Suggéré par Chris,
  <time datetime="2019-03-30T19:29">30 mars 2019, 19:29</time>
</div>
```

Les navigateurs ont tendance à fournir une barre noire par défaut pour les suppressions, et un soulignement noir pour les insertions lorsqu'on utilise les éléments HTML qui exposent implicitement ces rôles. Mais lorsque vous utilisez des rôles ARIA explicites pour modifier des éléments HTML, comme des div, il faudra utiliser du CSS pour personnaliser le style visuel de ces suppressions et insertions.

## Bonnes pratiques

### Préférer le HTML

L'utilisation des éléments {{HTMLElement('ins')}} et {{HTMLElement('del')}} communique automatiquement qu'une section possède le rôle `insertion` ou `deletion`. Si possible, privilégiez l'utilisation des éléments HTML.

## Spécifications

Fait partie de WAI-ARIA&nbsp;1.3, qui est encore en cours de rédaction.
