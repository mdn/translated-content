---
title: "ARIA : attribut aria-description"
short-title: aria-description
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-description
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

L'attribut global `aria-description` définit une valeur textuelle qui décrit ou annote l'élément courant.

> [!NOTE]
> `aria-description` est encore à l'état de brouillon dans la spécification W3C ARIA 1.3. Pour l'instant, continuez d'utiliser [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), qui est pris en charge depuis ARIA 1.1.

## Description

L'attribut global `aria-description` permet au développeur ou à la développeuse de décrire ou d'annoter l'élément courant afin de fournir un contexte supplémentaire aux utilisateur·ice·s de technologies d'assistance.

```html
<div
  role="application"
  aria-label="calendrier"
  aria-description="Calendrier des matchs des Boston Red Sox saison 2021">
  <h1>Red Sox 2021</h1>
  <div role="grid">…</div>
</div>
```

L'attribut `aria-description` est similaire à [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) : les deux fournissent une chaîne de texte associée à l'élément, mais un libellé doit être court et concis, tandis qu'une description peut être plus longue car elle vise à fournir davantage de contexte et d'informations.

Les propriétés `aria-description` et `aria-describedby` ont le même objectif&nbsp;: fournir à l'utilisateur·ice un texte descriptif supplémentaire pour l'objet sur lequel elles sont définies. Si un texte descriptif est disponible dans le DOM, utilisez plutôt [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

La propriété `aria-description` ne doit être utilisée que si fournir une description visible n'est pas l'expérience utilisateur souhaitée. L'attribut `aria-describedby` prend comme valeur une liste d'`id` des éléments contenant le texte descriptif de l'objet. `aria-description` s'utilise lorsqu'aucun texte descriptif approprié ne peut être associé à l'objet par référence d'`id`. Si les deux attributs sont présents, `aria-describedby` prévaut pour définir la propriété {{Glossary("Accessible_description", "description accessible")}}.

Le contenu de la description, qu'il soit défini par `aria-description` ou `aria-describedby`, doit être du texte simple. Si le contenu est très long, possède une sémantique particulière ou une structure de navigation, utilisez plutôt [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

## Valeurs

- `<string>`
  - : La valeur est une chaîne de caractères, de type libre, destinée à être transmise à l'utilisateur·ice de technologies d'assistance.

## Interfaces associées

- {{DOMxRef("Element.ariaDescription")}}
  - : La propriété {{DOMxRef("Element.ariaDescription", "ariaDescription")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-description`, qui définit une valeur textuelle décrivant ou annotant l'élément courant.

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut global HTML [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)
- L'attribut ARIA [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- L'attribut ARIA [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
