---
title: "ARIA : attribut aria-details"
short-title: aria-details
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-details
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

L'attribut global `aria-details` identifie l'élément (ou les éléments) qui fournissent des informations supplémentaires liées à l'objet.

## Description

L'attribut `aria-details` permet de fournir des informations supplémentaires ou des descriptions complexes à un objet. Il sert à informer les utilisateur·ice·s de technologies d'assistance en leur donnant un accès à un contenu plus détaillé, que ce contenu soit dans le document courant ou sous forme de lien vers une ressource externe.

D'autres propriétés HTML et WAI-ARIA ont des objectifs similaires. L'élément HTML {{HTMLElement('label')}} ainsi que les propriétés [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) et [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) servent à fournir des libellés courts pour un objet. L'attribut HTML `title` et les propriétés [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) et [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) permettent de fournir des descriptions textuelles plus longues. Cependant, lorsque des informations supplémentaires, des descriptions complexes ou un contenu navigable sont nécessaires et disponibles, il faut utiliser l'attribut `aria-details`.

L'attribut `aria-details` a un objectif similaire à l'attribut HTML `longdesc` (jamais vraiment pris en charge), qui permettait de fournir une URL vers une longue description du contenu d'un élément remplacé, mais qui a été déprécié faute de support et à cause de mauvais usages.

L'attribut `aria-details` prend comme valeur l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id), ou une liste d'`id` séparés par des espaces, des éléments contenant les informations détaillées. Lorsqu'il est présent, les technologies d'assistance informent l'utilisateur·ice de la disponibilité d'informations étendues et permettent de naviguer vers le contenu référencé.

Les éléments référencés par `aria-details` sont censés contenir plus d'informations que ce qui serait normalement fourni via [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

Les éléments référencés par `aria-details` doivent être visibles pour tou·te·s les utilisateur·ice·s. `aria-details` informe les personnes qui ne pourraient pas repérer visuellement que du contenu explicatif est disponible.

> [!NOTE]
> `aria-details` n'a aucun impact sur la description accessible.

Contrairement à `aria-describedby`, les éléments référencés par `aria-details` ne sont pas utilisés dans la description accessible et ne sont pas transformés en simple chaîne de texte pour les technologies d'assistance. Si le contenu associé n'est pas trop long et que le transformer en texte simple ne fait pas perdre d'information, préférez `aria-describedby`. Il est toutefois valide qu'un élément ait à la fois `aria-details` et une description via `aria-describedby` ou `aria-description`.

## Exemple

Pour les rôles de définition et de terme, `aria-details` serait ajouté sur l'élément [`term`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) avec l'`id` de l'élément ayant le rôle [`definition`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role).

```html
<p>
  La notation fonctionnelle <strong>cubic-bezier()</strong> définit une courbe
  de <span role="term" aria-details="bezier bezImg">Bézier</span>. Comme ces
  courbes sont continues, elles servent souvent à adoucir le début et la fin de
  la courbe et sont donc parfois appelées fonctions d'assouplissement.
</p>

<p role="definition" id="bezier">
  Une <strong>courbe de Bézier</strong> (prononcé \ ˈbe-zē-ˌā \)
  <i aria-description="Prononciation anglaise">BEH-zee-ay</i>) est une courbe
  décrite mathématiquement, utilisée en infographie et en animation. La courbe
  est définie par un ensemble de points de contrôle, au minimum deux. Les
  graphiques et animations web utilisent des courbes de Bézier cubiques, qui
  sont des courbes à quatre points de contrôle P<sub>0</sub>, P<sub>1</sub>,
  P<sub>2</sub> et P<sub>3</sub>.
</p>

<a
  href="bezierExplanation.html"
  id="bezImg"
  aria-label="Explication de la courbe de Bézier dans les fonctions d'assouplissement CSS">
  <img
    alt="Courbe de Bézier animée montrant 4 points de contrôle."
    src="bezier.gif" />
</a>
```

## Valeurs

- Liste de références d'ID
  - : Un `id` ou une liste d'`id` séparés par des espaces des éléments qui fournissent ou lient des informations supplémentaires.

## Interfaces associées

- {{domxref("Element.ariaDetailsElements")}}
  - : La propriété `ariaDetailsElements` fait partie de l'interface de chaque élément. Sa valeur est un tableau de sous-classes de {{domxref("Element")}} qui reflètent les références d'`id` dans l'attribut `aria-details` ([avec quelques particularités](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_reflétés)).
- {{domxref("ElementInternals.ariaDetailsElements")}}
  - : La propriété `ariaDetailsElements` fait partie de l'interface de chaque élément personnalisé. Sa valeur est un tableau de sous-classes de {{domxref("Element")}} qui reflètent les références d'`id` dans l'attribut `aria-details` ([avec quelques particularités](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_reflétés)).

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut HTML [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id)
- L'attribut ARIA [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- L'attribut ARIA [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- L'attribut ARIA [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- L'attribut `alt` des images ([`alt`](/fr/docs/Web/API/HTMLImageElement/alt))
- L'attribut HTML [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)
