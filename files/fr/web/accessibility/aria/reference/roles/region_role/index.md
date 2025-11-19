---
title: "ARIA : rôle region"
short-title: region
slug: Web/Accessibility/ARIA/Reference/Roles/region_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Le rôle **`region`** sert à identifier les zones d'un document jugées importantes par l'auteur·ice. Il s'agit d'un repère générique permettant d'aider à la navigation lorsqu'aucun autre rôle de repère n'est approprié.

```html
<div role="region" aria-label="Exemple">
  <!-- contenu de la région -->
</div>
```

## Description

Le rôle `region` est un [repère ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères). Il doit être réservé aux sections de contenu suffisamment importantes pour que les utilisateur·ice·s veuillent pouvoir y accéder facilement et les retrouver dans un résumé de la page. Le rôle region est un terme générique, à utiliser uniquement si la section à identifier ne correspond pas à un autre rôle de repère, comme [`banner`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), [`contentinfo`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role), [`complementary`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) ou [`navigation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role).

Chaque élément avec le rôle `region` doit inclure un label décrivant la finalité du contenu, de préférence via [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) référant à un titre visible. Si aucun titre visible n'est présent, utilisez [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

Le contenu d'un repère `region` doit avoir du sens s'il est séparé du contenu principal du document.

L'utilisation de l'élément {{HTMLElement('section')}} communique automatiquement qu'une section possède le rôle `region` si elle a un nom accessible. Il est toujours préférable d'utiliser l'élément HTML sémantique approprié, ici `<section>`, plutôt que d'utiliser ARIA.

## Propriétés, états et rôles WAI-ARIA associés

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  -&nbsp;: Utilisez cet attribut pour labelliser la région. Souvent, la valeur de `aria-labelledby` sera l'identifiant de l'élément titrant la section. Si aucun titre visible n'est présent, utilisez `aria-label`.

## Exemples

```html
<div role="region" aria-labelledby="region-heading">
  <h2 id="region-heading">
    L'attribut `id` de ce titre permet à la région d'avoir un nom accessible
  </h2>
  <!-- contenu de la région -->
</div>
```

## Problèmes d'accessibilité

À utiliser avec parcimonie&nbsp;! Les [rôles de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) sont conçus pour identifier les grandes sections du document. En utiliser trop peut créer du «&nbsp;bruit&nbsp;» pour les lecteur·ice·s d'écran, rendant la compréhension de la structure globale plus difficile.

N'utilisez le rôle `region` que si aucun autre élément de sectionnement de contenu ou rôle de repère pertinent ne s'applique. Si plusieurs régions existent sur une page, il peut être utile de revoir la structure globale du document.

## Bonnes pratiques

### Privilégier le HTML

L'utilisation de l'élément HTML {{HTMLElement('section')}} communique automatiquement que l'élément possède le rôle `region` s'il a un nom accessible. Si possible, préférez utiliser l'élément sémantique `<section>` à la place du rôle `region`.

### Labelliser les repères

S'il y a plus d'un repère `region` dans un document, fournissez un label unique à chacun. Ce label permet à l'utilisateur·ice de technologie d'assistance de comprendre rapidement la finalité de chaque repère.

```html
<div role="region" aria-labelledby="use-discretion">
  <h3 id="use-discretion">
    Veuillez utiliser le rôle `region` avec discernement
  </h3>
  <!-- contenu -->
</div>

…

<div role="region" aria-labelledby="please-reconsider">
  <h3 id="please-reconsider">
    Veuillez reconsidérer la structure de votre document
  </h3>
  <!-- contenu -->
</div>
```

Dans cet exemple, le label de la région est généré par l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

### Zones de contenu défilantes avec texte débordant

Si une zone de contenu possède `tabindex="0"`, ajoutez `role="region"` pour indiquer aux utilisateur·ice·s de lecteur d'écran qu'il s'agit d'une région générique. Cela permet aux utilisateur·ice·s clavier de faire défiler les régions avec du texte débordant.

### SVG

`role="region"` peut être déclaré sur des zones de {{SVGElement('svg')}} avec un `aria-label` pour permettre de décrire chaque section de l'image SVG.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('section')}}
- [ARIA&nbsp;: rôle `banner`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA&nbsp;: rôle `main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA&nbsp;: rôle `contentinfo`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA&nbsp;: rôle `complementary`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA&nbsp;: rôle `navigation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [Rôles de repère&nbsp;: Utiliser ARIA&nbsp;: rôles, états et propriétés](/fr/docs/Web/Accessibility/ARIA/Guides/Techniques#rôles_de_points_de_repère)
- [Utiliser les repères WAI-ARIA - 2013 | The Paciello <sup>(angl.)</sup> Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Repères accessibles | scottohara.me <sup>(angl.)</sup>](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
