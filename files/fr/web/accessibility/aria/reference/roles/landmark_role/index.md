---
title: "ARIA : rôle landmark"
short-title: landmark
slug: Web/Accessibility/ARIA/Reference/Roles/landmark_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Le rôle `landmark` est une superclasse abstraite pour les valeurs de rôle ARIA pour les sections de contenu qui sont suffisamment importantes pour que les utilisateur·ice·s souhaitent probablement pouvoir y naviguer directement. Un repère (<i lang="en">landmark</i>) est une sous-section importante d'une page.

> [!NOTE]
> Le rôle `landmark` est un [rôle abstrait](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#6._rôles_abstraits). Il est inclus ici pour compléter la documentation. Il ne doit pas être utilisé par les développeur·euse·s web.

## Description

Un `landmark` est un rôle abstrait pour une section de contenu qui est suffisamment importante pour que les utilisateur·ice·s souhaitent probablement pouvoir y naviguer facilement et l'inclure dans un résumé généré dynamiquement de la page. Les repères permettent aux technologies d'assistance de naviguer et de trouver rapidement du contenu.

Pour créer un rôle de repère, définissez l'objectif du contenu en utilisant un élément sémantique tel que `<section>`, `<nav>` ou `<main>`, ou en ajoutant un rôle ARIA qui est une sous-classe du rôle `landmark`, tel que [`role="banner"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`role="complementary"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) ou [`role="region"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role). Ne pas utiliser `role="landmark"`.

Chaque rôle de repère concret possède son élément HTML sémantique correspondant&nbsp;:

| Rôle ARIA                                                                             | Élément HTML               |
| ------------------------------------------------------------------------------------- | -------------------------- |
| [`banner`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)               | {{HTMLElement('header')}}  |
| [`complementary`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) | {{HTMLElement('aside')}}   |
| [`contentinfo`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)     | {{HTMLElement('footer')}}  |
| [`form`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)                   | {{HTMLElement('form')}}    |
| [`main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)                   | {{HTMLElement('main')}}    |
| [`navigation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)       | {{HTMLElement('nav')}}     |
| [`region`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)               | {{HTMLElement('section')}} |
| [`search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)               | {{HTMLElement('search')}}  |

Une étiquette visible doit être fournie, référencée avec [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Si nécessaire, une étiquette brève et descriptive peut être fournie avec [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

Pour les utilisateur·ice·s de lecteurs d'écran, l'ajout de rôles de repère crée effectivement des «&nbsp;liens de saut&nbsp;» pour les utilisateur·ice·s de lecteurs d'écran, mais ne remplace pas la navigation dans la page car les rôles de repère ne sont pas exposés autrement.

## Bonnes pratiques

N'utilisez pas `role="landmark"`&nbsp;: utilisez plutôt les rôles de repère de sous-classe appropriés, ou les éléments HTML sémantique si possible. Bien que cela ne soit plus nécessaire, il est considéré comme une bonne pratique d'inclure de façon redondante les rôles de repère de sous-classe avec l'élément sémantique associé pour les anciens navigateurs. Cela reste préférable à l'utilisation de rôles de repère sur des éléments non sémantiques, comme {{HTMLElement('div')}}&nbsp;; mais utilisez au moins l'un des rôles ou des éléments sémantiques pour créer des repères. Sinon, votre contenu sera moins navigable pour les utilisateur·ice·s de lecteurs d'écran.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `section`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA&nbsp;: rôle `banner`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA&nbsp;: rôle `complementary`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA&nbsp;: rôle `contentinfo`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA&nbsp;: rôle `form`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA&nbsp;: rôle `main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA&nbsp;: rôle `navigation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [ARIA&nbsp;: rôle `region`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [ARIA&nbsp;: rôle `search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
- Le billet de blog [Utilisation des rôles de repères HTML pour améliorer l'accessibilité <sup>(angl.)</sup>](/fr/blog/aria-accessibility-html-landmark-roles/) sur le blog du MDN (2023)
