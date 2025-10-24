---
title: "ARIA : rôle banner"
short-title: banner
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
original_slug: Web/Accessibility/ARIA/Roles/banner_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Le rôle `banner` sert à définir un en-tête global du site, qui comprend généralement un logo, le nom de l'entreprise, une fonction de recherche et éventuellement la navigation globale ou un slogan. Il est généralement situé en haut de la page.

Par défaut, l'élément HTML {{HTMLElement("header")}} a une signification identique à celle du repère `banner`, sauf s'il est un descendant de {{HTMLElement("aside")}}, {{HTMLElement("article")}}, {{HTMLElement("main")}}, {{HTMLElement("nav")}} ou {{HTMLElement("section")}}, auquel cas {{HTMLElement("header")}} expose un rôle [`generic`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) et non l'équivalent de la bannière du site.

### Description

Un rôle de repère `banner` remplace le rôle ARIA implicite de l'élément conteneur sur lequel il est appliqué. Il doit être réservé au contenu répétitif au niveau du site qui se trouve généralement en haut de chaque page.

La bannière comprend généralement des éléments tels qu'un logo ou une identité d'entreprise, ou éventuellement un outil de recherche spécifique au site, et est généralement ce que votre équipe marketing appellerait l'en-tête ou la bannière supérieure du site. Si la technique de l'élément [`header`](/fr/docs/Web/HTML/Reference/Elements/header) n'est pas utilisée pour cette bannière, une déclaration de `role="banner"` doit être utilisée pour définir un repère de bannière pour les technologies d'assistance.

Les technologies d'assistance peuvent identifier l'élément `header` d'une page comme la `banner` s'il est un descendant de l'élément [`body`](/fr/docs/Web/HTML/Reference/Elements/body), et non imbriqué dans une sous-section `article`, `aside`, `main`, `nav` ou `section`.

Chaque page peut avoir un repère `banner`, mais chaque page ne devrait généralement être limitée qu'à un seul élément avec le rôle de bannière. Dans le cas d'une page contenant des rôles `document` et/ou `application` imbriqués, chaque rôle `document` ou `application` imbriqué peut également avoir un repère `banner`. Si une page inclut plus d'un repère `banner`, chacun doit avoir un nom accessible unique.

### Rôles ARIA associés, états et propriétés

Aucun.

### Interactions au clavier

Aucune.

### Fonctionnalités JavaScript nécessaires

Aucune.

## Exemples

Voici une fausse bannière avec un lien de saut vers la navigation, un logo, un titre et un sous-titre. Comme il s'agit de l'en-tête principal du site, nous avons ajouté le rôle de repère `banner` à l'élément conteneur.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent"
    >Passer au contenu principal</a
  >
  <img src="images/w3c.png" alt="Logo W3C" />
  <h1>Repères ARIA</h1>
  <p>Identification des sous-sections de la page pour une navigation facile</p>
  <nav>…</nav>
</div>
```

Nous aurions également pu écrire ce qui précède avec l'élément HTML `header`&nbsp;:

```html
<header>
  <a href="#main" id="skipToMain" class="skiptocontent"
    >Passer au contenu principal</a
  >
  <img src="images/w3c.png" alt="Logo W3C" />
  <h1>Repères ARIA</h1>
  <p>Identification des sous-sections de la page pour une navigation facile</p>
  <nav>…</nav>
</header>
```

## Bonnes pratiques

L'utilisation de l'élément HTML {{HTMLElement('header')}} communique automatiquement que l'élément a le rôle de `banner`. Si possible, privilégiez l'utilisation de l'élément sémantique `<header>` plutôt que le rôle `banner`.

Il est préférable d'utiliser l'élément `header` et de s'assurer qu'il n'est pas un descendant d'une sous-section de la page. Cependant, il arrive parfois que vous n'ayez pas accès au HTML sous-jacent. Dans ce cas, vous pouvez ajouter le rôle de `banner` à l'élément de la page qui doit être exposé comme une `banner` avec JavaScript. Identifier la bannière de la page de cette manière contribuera à améliorer l'accessibilité du site.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('header')}}
- [Exemple de repères WC3 <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
