---
title: "ARIA : rôle search"
short-title: search
slug: Web/Accessibility/ARIA/Reference/Roles/search_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Le rôle `search` est utilisé pour identifier la fonctionnalité de recherche&nbsp;; la section de la page utilisée pour rechercher dans la page, le site ou la collection de sites.

```html
<form role="search">
  <!-- champ de recherche -->
</form>
```

## Description

Le rôle `search` est [un rôle de point de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) qui peut être ajouté à l'élément conteneur qui englobe tous les éléments qui, combinés, forment la fonctionnalité de recherche du document ou de l'application, y compris un descendant [`<input type="search">`](/fr/docs/Web/HTML/Reference/Elements/input/search). Si un document inclut plus d'une recherche, chacune doit avoir une étiquette unique, à moins qu'il ne s'agisse de la même recherche répétée, auquel cas utilisez le même nom. Il existe un [`input` de type `search`](/fr/docs/Web/HTML/Reference/Elements/input/search), bien que cela ne définisse pas un point de repère de recherche à lui seul. L'utilisation de {{HTMLElement('search')}} est une autre façon de définir un point de repère de recherche.

## Exemples

Lorsque un {{HTMLElement('form')}} est un formulaire de recherche, utilisez le rôle `search` au lieu du rôle [`form`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role).

```html
<form id="search" role="search">
  <label for="search-input">Rechercher sur ce site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Rechercher" type="submit" />
</form>
```

## Accessibilité

Les [rôles de point de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) sont destinés à être utilisés avec parcimonie, pour identifier des sections plus larges du document. L'utilisation de trop de rôles de repère peut créer du "bruit" dans les lecteurs d'écran, rendant difficile la compréhension de la mise en page globale de la page.

## Bonnes pratiques

### Préférer HTML

L'utilisation de l'élément HTML {{HTMLElement('search')}} communique automatiquement que l'élément a le rôle de `search`. Si possible, privilégiez l'utilisation de l'élément sémantique `<search>` plutôt que le rôle `search`.

Si votre `<input>` de type `search` est déjà contenu dans un élément {{HTMLElement("form")}}, envelopper le formulaire dans un autre élément `<search>` peut être un balisage inutile. Dans ce cas, l'utilisation de `role="search"` sur l'élément `<form>` lui-même est acceptable.

### Étiquetage des points de repère

#### Points de repère multiples

S'il y a plus d'un rôle de point de repère `search` dans un document, fournissez une étiquette (`aria-label`) pour chaque point de repère. Cette étiquette permettra à un·e utilisateur·ice de technologie d'assistance de comprendre rapidement le but de chaque point de repère.

```html
<form id="site-search" role="search" aria-label="Sur l'ensemble du site">
  <!-- champ de recherche -->
</form>

…

<form id="page-search" role="search" aria-label="Sur cette page">
  <!-- champ de recherche -->
</form>
```

#### Points de repère répétés

Si un rôle de point de repère `search` dans un document est répété dans un document, et que les deux points de repère ont un contenu identique, utilisez la même étiquette pour chaque point de repère. Un exemple de cela serait de répéter la recherche sur l'ensemble du site en haut et en bas de la page.

```html
<header>
  <form id="site-search-top" role="search" aria-label="Sur l'ensemble du site">
    <!-- champ de recherche -->
  </form>
</header>

…

<footer>
  <form
    id="site-search-bottom"
    role="search"
    aria-label="Sur l'ensemble du site">
    <!-- champ de recherche -->
  </form>
</footer>
```

#### Descriptions redondantes

Les lecteurs d'écran annonceront le type de rôle que le point de repère a. De ce fait, vous n'avez pas besoin de décrire ce que le point de repère est dans son étiquette. Par exemple, une déclaration de `role="search"` avec un [`aria-label="Recherche sur l'ensemble du site"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) peut être annoncée de manière redondante comme, «&nbsp;recherche sur l'ensemble du site recherche&nbsp;».

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément {{HTMLElement('form')}}
- L'élément {{HTMLElement('input')}}
- L'élément {{HTMLElement('search')}}
- [`<input type="search">`](/fr/docs/Web/HTML/Reference/Elements/input/search)
- L'[Utilisation des sections et des plans HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
