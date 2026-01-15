---
title: "ARIA : rôle complementary"
short-title: complementary
slug: Web/Accessibility/ARIA/Reference/Roles/complementary_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Le [rôle de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) `complementary` est utilisé pour désigner une section de soutien qui se rapporte au contenu principal, mais qui peut se suffire à elle-même lorsqu'elle est séparée. Ces sections sont souvent présentées sous forme de barres latérales ou de boîtes d'appel. Si possible, utilisez l'[élément HTML \<aside>](/fr/docs/Web/HTML/Reference/Elements/aside) à la place.

```html
<div role="complementary">
  <h2>Nos partenaires</h2>
  <!-- contenu de la section complémentaire -->
</div>
```

Ceci est une barre latérale contenant des liens vers les sponsors du projet.

## Description

Le rôle `complementary` est [un rôle de repère](/fr/docs/Web/Accessibility/ARIA/Guides/Techniques#rôles_de_repères). Les repères peuvent être utilisés par les technologies d'assistance pour identifier et naviguer rapidement vers de grandes sections du document. Le contenu répertorié dans un conteneur avec le rôle de repère `complementary` doit avoir du sens s'il est séparé du contenu principal du document.

> [!NOTE]
> L'utilisation de l'élément {{HTMLElement('aside')}} communiquera automatiquement qu'une section a un rôle de `complementary`. Les développeurs devraient toujours préférer utiliser le bon élément HTML sémantique plutôt que d'utiliser ARIA.

## Exemples

```html
<div role="complementary">
  <h2>Articles tendance</h2>
  <ul>
    <li>
      <a href="#">
        18 tweets qui vont vous faire ressentir toutes les émotions
      </a>
    </li>
    <li>
      <a href="#">
        Ne cherchez plus&nbsp;! J'ai trouvé les contenants à lunch parfaits.
      </a>
    </li>
    <li>
      <a href="#">Le moment est venu de décider comment appeler ces aliments</a>
    </li>
    <li>
      <a href="#">
        17 publications vraiment intéressantes que nous avons vues sur Tumblr
        cette semaine
      </a>
    </li>
    <li>
      <a href="#">
        10 astuces pour les parents que nous savons efficaces parce que nous les
        avons essayées
      </a>
    </li>
  </ul>
</div>
```

## Problèmes d'accessibilité

[Les rôles de repère](/fr/docs/Web/Accessibility/ARIA/Guides/Techniques#rôles_de_repères) sont destinés à être utilisés avec parcimonie, pour identifier de plus grandes sections globales du document. L'utilisation de trop de rôles de repère peut créer du «&nbsp;bruit&nbsp;» dans les lecteurs d'écran, rendant difficile la compréhension de la mise en page globale de la page.

## Bonnes pratiques

### Préférer HTML

L'utilisation de l'élément {{HTMLElement('aside')}} communiquera automatiquement que l'élément a un rôle complémentaire (`complementary`). Si possible, privilégiez l'utilisation de l'élément sémantique `<aside>` plutôt que le rôle `complementary`.

### Étiquetage des repères

#### Plusieurs repères

S'il y a plus d'un rôle de repère `complementary` ou élément {{HTMLElement('aside')}} dans un document, fournissez une étiquette pour chaque repère à l'aide de l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), ou, si l'élément aside a un titre suffisamment descriptif, pointez-y avec l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Cette étiquette permettra à un·e utilisateur·ice de technologie d'assistance de comprendre rapidement l'objectif de chaque repère.

```html
<aside aria-label="Note d'usage">
  <!-- contenu -->
</aside>

…

<aside id="sidebar" aria-label="Partenaires">
  <!-- contenu -->
</aside>
```

#### Descriptions redondantes

Les lecteurs d'écran annonceront le type de rôle du repère. De ce fait, vous n'avez pas besoin de décrire ce qu'est le repère dans son étiquette. Par exemple, une déclaration de `role="complementary"` avec un `aria-label="Barre latérale"` peut être annoncée de manière redondante comme, «&nbsp;barre latérale complémentaire&nbsp;».

### Avantages supplémentaires

Certaines technologies, telles que les extensions de navigateur, peuvent générer des listes de tous les rôles de repère présents sur une page, permettant aux utilisateur·ice·s ne disposant pas de lecteurs d'écran d'identifier et de naviguer rapidement vers de grandes sections du document.

- [Extension de navigateur Landmarks <sup>(angl.)</sup>](https://matatk.agrip.org.uk/landmarks/)

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('aside')}}
- [Utiliser des sections HTML et des plans](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Rôles des repères&nbsp;: Utiliser ARIA&nbsp;: rôles, états et propriétés](/fr/docs/Web/Accessibility/ARIA/Guides/Techniques#rôles_de_repères)
- [Utiliser des repères WAI-ARIA - 2013 | The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Repères accessibles | scottohara.me <sup>(angl.)</sup>](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisité | HTML5 Doctor <sup>(angl.)</sup>](https://html5doctor.com/aside-revisited/)
