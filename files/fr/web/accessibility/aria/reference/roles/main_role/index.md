---
title: "ARIA : rôle main"
short-title: main
slug: Web/Accessibility/ARIA/Reference/Roles/main_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Le rôle de repère `main` est utilisé pour indiquer le contenu principal d'un document. La zone de contenu principal se compose de contenu qui est directement lié ou qui développe le sujet central d'un document, ou la fonction principale d'une application.

```html
<div id="main" role="main">
  <h1>Avocats</h1>
  <!-- contenu de la section principale -->
</div>
```

Ceci est la section principale d'un document qui traite des avocats. Les sous-sections de ce document pourraient discuter de leur histoire, des différents types, des régions où ils poussent, etc.

## Description

Le rôle `main` est un rôle de [repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) de navigation identifiant le contenu principal d'un document. Les repères peuvent être utilisés par des technologies d'assistance telles que les lecteurs d'écran pour identifier et naviguer rapidement vers de grandes sections du document.

En classifiant et en étiquetant les sections d'une page, les informations structurelles transmises visuellement par la mise en page peuvent être représentées de manière programmatique. Les lecteurs d'écran utilisent les rôles de repère pour fournir une navigation au clavier vers des sections importantes d'une page. Pour ceux qui naviguent via des rôles de repère, le rôle `main` est une alternative aux liens "passer au contenu principal".

Il ne devrait y avoir qu'un seul rôle de repère `main` par document.

L'élément {{HTMLElement("main")}} a un rôle de `main`. Les développeur·euse·s devraient utiliser le HTML sémantique — dans ce cas {{HTMLElement("main")}} — plutôt que d'utiliser l'ARIA.

### Propriétés, états et rôles ARIA associés

- [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : L'attribut `aria-owns` établit des relations dans la couche d'accessibilité qui ne sont pas présentes dans le DOM. Les documents et les applications peuvent être imbriqués dans le DOM, ce qui peut entraîner la présence de plusieurs éléments principaux en tant que descendants du DOM. Si tel est le cas, incluez `aria-owns` pour identifier la relation du principal à son ancêtre document ou application.

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou `aria-labelledby`
  - : Identifiez le nom accessible avec [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) si un en-tête visible est présent. Sinon, inclure un [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) peut être utile pour orienter les utilisateur·ice·s de technologies d'assistance, en particulier dans les applications à page unique où les changements de contenu principal se produisent sans générer d'événement de chargement de page.

## Exemple

```html
<body>
  <!-- navigation principale -->

  <div role="main">
    <h1>La Première Guerre d'Indochine</h1>
    <!-- contenu de l'article -->
  </div>

  <!-- barre latérale et pied de page -->
</body>
```

## Problèmes d'accessibilité

### Utiliser un seul rôle `main` par document

Le rôle `main` [rôle de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) ne doit être utilisé qu'une seule fois par document.

Si un document contient deux rôles `main`, par exemple lors de la mise à jour du contenu de la page déclenchée par JavaScript, la présence du rôle `main` inactif doit être supprimée de la technologie d'assistance via des techniques telles que le basculement de l'attribut [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden).

```html
<main>
  <h1>Élément `main` actif</h1>
  <!-- contenu -->
</main>

<main hidden>
  <h1>Élément `main` caché</h1>
  <!-- contenu -->
</main>
```

C'est également utile d'inclure un nom accessible pour aider à orienter les utilisateur·ice·s de technologies d'assistance, en particulier dans les applications à page unique où les changements de contenu principal se produisent sans générer d'événement de chargement de page. Cela peut être ajouté avec `aria-labelledby` s'il y a un nom approprié dans le contenu, ou `aria-label` si ce n'est pas le cas.

## Bonnes pratiques

### Préférer HTML

L'utilisation de l'élément {{HTMLElement("main")}} communiquera automatiquement que l'élément a un rôle `main`. Si possible, préférez utiliser l'élément sémantique `<main>` à la place du rôle `main`.

### Navigation par saut

La navigation par saut, également connue sous le nom de «&nbsp;_skipnav_&nbsp;», est une technique qui permet à un utilisateur·ice de technologie d'assistance de contourner rapidement de grandes sections de contenu répété (navigation principale, bannières d'information, etc.). Cela permet à l'utilisateur·ice d'accéder plus rapidement au contenu principal de la page.

Ajouter un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) à l'élément avec une déclaration de `role="main"` permet de le cibler avec un lien de navigation par saut.

```html
<body>
  <a href="#main-content">Passer au contenu principal</a>

  <!-- contenu de navigation et d'en-tête -->

  <div id="main-content" role="main">
    <!-- contenu principal de la page -->
  </div>
</body>
```

Qui sera l'équivalent de&nbsp;:

```html
<body>
  <a href="#main-content">Passer au contenu principal</a>

  <!-- contenu de navigation et d'en-tête -->

  <main id="main-content">
    <!-- contenu principal de la page -->
  </main>
</body>
```

- [WebAIM&nbsp;: Les liens «&nbsp;Passer à la navigation&nbsp;» <sup>(angl.)</sup>](https://webaim.org/techniques/skipnav/)

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement("main")}}
- [Utilisation des sections HTML et des plans <sup>(angl.)</sup>](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Utilisation des repères WAI-ARIA - 2013 | The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Repères accessibles | scottohara.me <sup>(angl.)</sup>](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [L'élément main | HTML5 Doctor <sup>(angl.)</sup>](https://html5doctor.com/the-main-element/)
