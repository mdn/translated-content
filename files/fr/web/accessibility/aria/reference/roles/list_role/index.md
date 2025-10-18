---
title: "ARIA : rôle list"
short-title: list
slug: Web/Accessibility/ARIA/Reference/Roles/list_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `list` peut être utilisé pour identifier une liste d'éléments. Il est normalement utilisé en conjonction avec le rôle `listitem`, qui est utilisé pour identifier un élément de la liste.

```html
<div role="list">
  <div role="listitem">Élément 1</div>
  <div role="listitem">Élément 2</div>
  <div role="listitem">Élément 3</div>
</div>
```

## Description

N'importe quel contenu qui consiste en un conteneur externe avec une liste d'éléments à l'intérieur peut être identifié par les technologies d'assistance en utilisant les conteneurs `list` et `listitem`, respectivement. Une `list` ne peut contenir zéro ou plusieurs enfants `listitem`.

Il n'y a pas de règles strictes concernant les éléments que vous devez utiliser pour marquer la liste et les éléments de la liste, mais vous devez vous assurer que les éléments de la liste ont du sens dans le contexte d'une liste, par exemple, une liste de courses, des étapes de recette, des instructions de conduite.

> [!NOTE]
> Les meilleures pratiques dictent d'utiliser les éléments HTML sémantiques appropriés plutôt que les rôles ARIA pour marquer les listes et les éléments de liste — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} et {{HTMLElement("li")}}. Voir les [Bonnes pratiques](#bonnes_pratiques) pour un exemple complet.

### Propriétés, états et rôles WAI-ARIA associés

- rôle [`listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
  - : Un seul élément dans une liste. Les éléments avec le rôle `listitem` ne peuvent être trouvés que dans un élément avec le rôle `list`.

## Bonnes pratiques

N'utilisez `role="list"` et `role="listitem"` que si vous devez le faire — par exemple, si vous n'avez pas le contrôle sur votre code HTML mais que vous pouvez améliorer l'accessibilité de manière dynamique, après coup, grâce à JavaScript.

Contrairement aux éléments HTML {{HTMLElement("ol")}} et {{HTMLElement("ul")}}, les rôles ARIA `list` ne font pas de distinction entre les listes ordonnées et non ordonnées. Si possible, vous devez utiliser les éléments HTML sémantiques appropriés pour marquer une liste ({{HTMLElement("ol")}} et {{HTMLElement("ul")}}) et les éléments de liste ({{HTMLElement("li")}}). Par exemple, notre code ci-dessus devrait être réécrit comme suit&nbsp;:

```html
<ul>
  <li>Premier élément de liste</li>
  <li>Deuxième élément de liste</li>
  <li>Troisième élément de liste</li>
</ul>
```

ou utiliser une liste ordonnée si l'ordre des éléments de la liste est important&nbsp;:

```html
<ol>
  <li>Premier élément de liste</li>
  <li>Deuxième élément de liste</li>
  <li>Troisième élément de liste</li>
</ol>
```

> [!NOTE]
> Les rôles ARIA `list` / `listitem` ne font pas de distinction entre les listes ordonnées et non ordonnées.

Cela dit, notez que si vous utilisez les éléments HTML sémantiques `<ol>` ou `<ul>` et appliquez un rôle de [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), chaque élément enfant `<li>` hérite du rôle `presentation` car ARIA exige que les éléments `listitem` aient l'élément `list` parent. Ainsi, les éléments `<li>` ne sont pas exposés aux technologies d'assistance, mais les éléments contenus à l'intérieur de ces éléments `<li>`, y compris les listes imbriquées, sont visibles pour les technologies d'assistance.

> [!NOTE]
> Si vous marquez une liste d'éléments qui fonctionneront comme une interface à onglets, vous devez plutôt utiliser les rôles [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) et [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role).

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement("ul")}}
- L'élément HTML {{HTMLElement("ol")}}
- L'élément HTML {{HTMLElement("li")}}
- [ARIA&nbsp;: rôle listitem](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [Exemples de listes ARIA <sup>(angl.)</sup>](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — par Scott O'Hara
- [Modèle d'objet d'accessibilité <sup>(angl.)</sup>](https://wicg.github.io/aom/spec/)
- [ARIA en HTML <sup>(angl.)</sup>](https://w3c.github.io/html-aria/)
