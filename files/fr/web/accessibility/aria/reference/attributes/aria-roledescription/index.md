---
title: "ARIA : attribut aria-roledescription"
short-title: aria-roledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-roledescription` définit une description du rôle d'un élément, lisible par l'humain et localisée par l'auteur·ice.

## Description

Certaines technologies d'assistance (<abbr>TA</abbr>), comme les lecteurs d'écran, présentent le rôle d'un élément dans l'expérience utilisateur·ice. L'attribut `aria-roledescription` permet de définir un nom lisible par l'humain, à présenter par la TA comme rôle de l'élément.

> [!NOTE]
> Utilisez uniquement `aria-roledescription` pour clarifier le but des rôles de conteneur non interactifs et pour fournir une description plus précise à un widget.

Les utilisateur·ice·s dépendent de la présentation d'un nom de rôle connu pour comprendre le but de l'élément et, s'il s'agit d'un widget, comment interagir avec lui. Utilisez donc `aria-roledescription` uniquement pour clarifier le but des rôles de conteneur non interactifs comme `group` ou `region`, et pour fournir une description plus précise à un widget.

La propriété `aria-roledescription` remplace la façon dont les TA localisent et expriment le nom d'un rôle. Lorsque vous remplacez un nom de rôle compris par l'utilisateur·ice, cela peut nuire à sa capacité à comprendre et à interagir avec l'élément.

Évitez d'utiliser l'attribut `aria-roledescription`. Lorsqu'un cas d'utilisation semble nécessiter une description de rôle unique, les interactions peuvent souvent être décomposées en éléments plus petits ayant des rôles pertinents.

S'il n'existe aucun rôle sémantique ou widget ARIA correspondant au modèle d'interaction de votre widget, utilisez `role="application"`, fournissez un `aria-roledescription` avec un nom de rôle personnalisé, lisible et localisé, et utilisez `aria-describedby` pour fournir des instructions à l'utilisateur·ice.

Les TA peuvent personnaliser et localiser les noms des rôles ARIA. Si vous utilisez `aria-roledescription` pour modifier la présentation du nom de rôle à l'utilisateur·ice, pensez à gérer la localisation. La valeur doit être traduite lors de la localisation de la page.

Modifier la présentation du rôle à l'utilisateur·ice n'a aucun impact sur la fonctionnalité de l'élément. Par exemple, si un élément a le rôle [`region`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) ou [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), lorsque la TA propose des fonctions pour naviguer vers la région ou le bouton suivant, si vous définissez `aria-roledescription` sur «&nbsp;continent&nbsp;» ou «&nbsp;échapper&nbsp;», la TA permettra toujours ces fonctions de navigation.

Encore une fois, évitez d'utiliser `aria-roledescription`. Dans cet exemple, «&nbsp;échapper&nbsp;» n'a pas de signification pertinente pour l'utilisateur·ice, mais «&nbsp;bouton&nbsp;» avec «&nbsp;échapper&nbsp;» comme label en a une.

Lorsque vous utilisez `aria-roledescription`, assurez-vous que l'élément auquel il s'applique possède un rôle ARIA valide ou une sémantique de rôle implicite, et que la valeur n'est pas vide et contient plus que des espaces.

`aria-roledescription` est requis lors de l'utilisation de `aria-brailleroledescription`. Notez que, en général, `aria-brailleroledescription` ne doit être utilisé que dans de rares cas où `aria-roledescription` est excessivement verbeux en braille.

## Exemple

L'exemple suivant montre l'utilisation de `aria-roledescription` pour indiquer qu'un conteneur non interactif est une «&nbsp;diapositive&nbsp;» dans une application de présentation web.

```html
<div
  role="article"
  aria-roledescription="diapositive"
  id="slide"
  aria-labelledby="slideheading">
  <h1 id="slideheading">Rapport trimestriel</h1>
  <!-- contenu restant de la diapositive -->
</div>
```

Dans l'exemple précédent, un·e utilisateur·ice de lecteur d'écran pourrait entendre «&nbsp;Rapport trimestriel, diapositive&nbsp;» plutôt que le moins précis «&nbsp;Rapport trimestriel, article&nbsp;».

## Valeurs

- `<string>`
  - : Une chaîne de caractères non vide, une valeur non contrainte, contenant plus que des espaces.

## Interfaces associées

- {{DOMxRef("Element.ariaRoleDescription")}}
  - : La propriété {{DOMxRef("Element.ariaRoleDescription", "ariaRoleDescription")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-roledescription`.
- {{DOMxRef("ElementInternals.ariaRoleDescription")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaRoleDescription", "ariaRoleDescription")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-roledescription`.

## Rôles associés

Pris en charge par tous les rôles et tous les éléments de balisage de base sauf pour `role="generic"`.

## Spécifications

{{Specifications}}

## Voir aussi

- [Rôles ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)
