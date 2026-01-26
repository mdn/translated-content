---
title: "ARIA : rôle searchbox"
short-title: searchbox
slug: Web/Accessibility/ARIA/Reference/Roles/searchbox_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `searchbox` indique qu'un élément est un type de `textbox` destiné à spécifier des critères de recherche.

## Description

Le `searchbox` peut être utilisé à la place de [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) lorsque la zone de texte se trouve à l'intérieur d'un élément avec le rôle [`search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role). Un `searchbox` est l'équivalent sémantique de l'élément HTML {{HTMLElement('input')}} de type `search`, [`<input type="search">`](/fr/docs/Web/HTML/Reference/Elements/input/search), qui devrait être utilisé à la place si possible.

Le `searchbox` doit avoir un nom accessible. Si le rôle `searchbox` est appliqué à un élément HTML {{HTMLElement('input')}}, une {{HTMLElement('label')}} associée doit être utilisée. Sinon, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) si une étiquette visible est présente, ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) si une étiquette visible n'est pas présente.

Le lecteur d'écran annoncera «&nbsp;zone de recherche&nbsp;», «&nbsp;édition de recherche&nbsp;» ou «&nbsp;champ de recherche&nbsp;» plus le nom accessible. Cela peut être redondant si «&nbsp;recherche&nbsp;» est inclus dans l'étiquette.

## Exemples

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

Bien que ce qui précède soit valide, il est plus simple, plus concis et moins redondant pour l'utilisateur·ice de lecteur d'écran d'écrire&nbsp;:

```html
<input type="search" />
```

La section suivante est un formulaire de recherche avec une zone de recherche et un bouton, une région ARIA dynamique et un conteneur pour les résultats de recherche.

```html
<form role="search">
  <input
    type="search"
    role="searchbox"
    aria-description="les résultats de recherche apparaîtront ci-dessous"
    id="search"
    value="" />
  <label for="search">Rechercher sur ce site</label>
  <button>Soumettre la recherche</button>
</form>
<div aria-live="polite" role="region" aria-atomic="true">
  <div class="sr-only"></div>
</div>
<div id="search-results"></div>
```

Inclure `role="searchbox"` lorsque le formulaire possède le rôle `search` et que l'étiquette indique qu'il s'agit d'une recherche peut amener les technologies d'assistance à annoncer quelque chose comme «&nbsp;recherche recherche sur ce site zone de recherche&nbsp;», ce qui est redondant. L'ajout de `role="searchbox"` n'est pas nécessaire&nbsp;:

```html
<input
  type="search"
  aria-description="les résultats de recherche apparaîtront ci-dessous"
  id="search"
  value="" />
```

## Spécifications

{{Specifications}}

## Voir aussi

- [`<input type="search">`](/fr/docs/Web/HTML/Reference/Elements/input/search)
- [ARIA&nbsp;: rôle `search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
- [ARIA&nbsp;: rôle `textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
