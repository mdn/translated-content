---
title: "ARIA : rôle navigation"
short-title: navigation
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Le rôle `navigation` sert à identifier les principaux groupes de liens utilisés pour naviguer dans le contenu d'un site web ou d'une page.

```html
<div role="navigation" aria-label="Principal">
  <!-- liste de liens vers les principales sections du site -->
</div>
```

Il s'agit de la navigation principale d'un site web.

## Description

Le rôle `navigation` est un [rôle de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères). Les rôles de repère permettent d'identifier l'organisation et la structure d'une page web. En classant et en étiquetant les sections d'une page, l'information structurelle transmise visuellement par la mise en page est aussi représentée de façon programmatique. Les lecteurs d'écran utilisent les rôles de repère pour permettre la navigation au clavier vers les sections importantes d'une page. Comme l'élément HTML {{HTMLElement('nav')}}, les repères de navigation permettent d'identifier des groupes (par exemple des listes) de liens destinés à la navigation dans le contenu d'un site ou d'une page. Si une page comporte plusieurs repères de navigation, chacun doit avoir un label unique. Si deux repères de navigation sur une même page contiennent le même ensemble de liens, utilisez le même label pour chacun.

Il est préférable d'utiliser l'élément HTML [`<nav>`](/fr/docs/Web/HTML/Reference/Elements/nav) pour définir un repère de navigation. Si l'élément nav n'est pas utilisé, ajoutez l'attribut `role="navigation"` pour définir un repère de navigation.

> [!NOTE]
> L'utilisation de l'élément {{HTMLElement('nav')}} indique automatiquement qu'une section a le rôle `navigation`. Il est toujours préférable d'utiliser l'élément HTML sémantique approprié plutôt que d'ajouter ARIA.

### Propriétés et rôles WAI-ARIA associés

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Brève description de la fonction de la navigation, sans inclure le terme «&nbsp;navigation&nbsp;», car le lecteur d'écran annoncera à la fois le rôle et le contenu du label.

### Interactions au clavier

Aucune.

### Fonctionnalités JavaScript requises

Aucune.

## Exemples

```html
<div role="navigation" aria-label="Service client">
  <ul>
    <li><a href="#">Aide</a></li>
    <li><a href="#">Suivi de commande</a></li>
    <li><a href="#">Expédition &amp; Livraison</a></li>
    <li><a href="#">Retours</a></li>
    <li><a href="#">Contactez-nous</a></li>
    <li><a href="#">Trouver un magasin</a></li>
  </ul>
</div>
```

## Problèmes d'accessibilité

Les [rôles de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) doivent être utilisés avec parcimonie, pour identifier les grandes sections du document. Utiliser trop de rôles de repère peut créer du «&nbsp;bruit&nbsp;» pour les lecteurs d'écran, rendant la compréhension de la structure globale de la page plus difficile.

## Bonnes pratiques

### Préférez HTML

L'utilisation de l'élément {{HTMLElement('nav')}} indique automatiquement que l'élément a le rôle `navigation`. Si possible, préférez utiliser l'élément sémantique `<nav>` à la place du rôle `navigation`.

### Étiqueter les repères

#### Repères multiples

S'il y a plusieurs repères de navigation (`role="navigation"` ou {{HTMLElement('nav')}}) dans un document, fournissez un label pour chaque repère. Ce label permet à l'utilisateur·ice de technologies d'assistance de comprendre rapidement la fonction de chaque repère.

```html
<div id="main-nav" role="navigation" aria-label="Principal">
  <!-- contenu -->
</div>

…

<nav id="footer-nav" aria-label="Pied de page">
  <!-- contenu -->
</nav>
```

#### Repères répétés

Si un repère de navigation (`role="navigation"` ou {{HTMLElement('nav')}}) est répété dans un document et que les deux repères ont un contenu identique, utilisez le même label pour chaque repère. Par exemple, la navigation principale répétée en haut et en bas de la page.

```html
<header>
  <nav id="main-nav" aria-label="Principal">
    <!-- liste de liens vers les principales sections du site -->
  </nav>
</header>

…

<footer>
  <nav id="footer-nav" aria-label="Principal">
    <!-- liste de liens vers les principales sections du site -->
  </nav>
</footer>
```

#### Descriptions redondantes

Les lecteurs d'écran annoncent le type de rôle du repère. Il n'est donc pas nécessaire de décrire le type de repère dans le label. Par exemple, une déclaration `role="navigation"` avec `aria-label="Navigation principale"` peut être annoncée de façon redondante comme «&nbsp;navigation principale navigation&nbsp;».

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('nav')}}
- [Utiliser les sections et la structure HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Utiliser les repères WAI-ARIA <sup>(angl.)</sup>](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Repères accessibles <sup>(angl.)</sup>](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Navigation sémantique avec l'élément nav <sup>(angl.)</sup>](https://html5doctor.com/nav-element/)
