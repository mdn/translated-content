---
title: "ARIA : rôle listitem"
short-title: listitem
slug: Web/Accessibility/ARIA/Reference/Roles/listitem_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `listitem` peut être utilisé pour identifier un élément à l'intérieur d'une liste d'éléments. Il est normalement utilisé en conjonction avec le rôle [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role), qui est utilisé pour identifier un conteneur de liste.

```html
<section role="list">
  <div role="listitem">Élément de liste 1</div>
  <div role="listitem">Élément de liste 2</div>
  <div role="listitem">Élément de liste 3</div>
</section>
```

## Description

Tout contenu qui consiste en un conteneur externe avec une liste d'éléments à l'intérieur peut être identifié par les technologies d'assistance en utilisant respectivement les conteneurs `list` et `listitem`.

Il n'y a pas de règles strictes concernant les éléments que vous devez utiliser pour marquer la liste et les éléments de liste, mais vous devez vous assurer que les éléments de liste ont du sens dans le contexte d'une liste, par exemple, une liste de courses, des étapes de recette, des instructions de conduite.

> [!NOTE]
> Si possible dans votre travail, vous devez utiliser les éléments HTML sémantiques appropriés pour marquer une liste et ses éléments de liste — {{HTMLElement("ul")}}/{{HTMLElement("ol")}} et {{HTMLElement("li")}}. Voir [Meilleures pratiques](#best_practices) pour un exemple complet.

### Propriétés, états et rôles WAI-ARIA associés

- [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Une liste d'éléments. Les éléments avec le rôle `list` doivent avoir un ou plusieurs éléments avec le rôle `listitem` comme enfants, un ou plusieurs éléments avec le rôle de `group` qui ont un ou plusieurs éléments avec le rôle `listitem` comme enfants.
- [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Une collection d'objets connexes, limitée aux éléments de liste lorsqu'ils sont imbriqués dans une liste, pas assez importants pour avoir leur propre place dans la table des matières d'une page.

## Bonnes pratiques

N'utilisez `role="list"` et `role="listitem"` que si vous devez le faire — par exemple, si vous n'avez pas le contrôle sur votre HTML mais que vous êtes en mesure d'améliorer l'accessibilité de manière dynamique après coup avec JavaScript.

Si possible, vous devez utiliser les éléments HTML sémantiques appropriés pour marquer une liste et ses éléments de liste — {{HTMLElement("ol")}}, {{HTMLElement("ul")}} et {{HTMLElement("li")}}. Par exemple, notre exemple ci-dessus devrait être réécrit comme suit&nbsp;:

```html
<ul>
  <li>Élément de liste 1</li>
  <li>Élément de liste 2</li>
  <li>Élément de liste 3</li>
</ul>
```

ou utilisez une liste ordonnée si l'ordre des éléments de la liste est important&nbsp;:

```html
<ol>
  <li>Élément de liste 1</li>
  <li>Élément de liste 2</li>
  <li>Élément de liste 3</li>
</ol>
```

> [!NOTE]
> Les rôles ARIA `list` / `listitem` ne font pas de distinction entre les listes ordonnées et non ordonnées.

> [!NOTE]
> Le style d'une liste avec `list-style: none;` en CSS supprime la sémantique de liste. L'ajout de `role="listitem"` renvoie la sémantique.

> [!NOTE]
> Si vous marquez une liste d'éléments qui fonctionneront comme une interface à onglets, vous devez plutôt utiliser les rôles [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) et [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role).

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('li')}}
- L'élément HTML {{HTMLElement('ul')}}
- L'élément HTML {{HTMLElement('ol')}}
- [ARIA&nbsp;: rôle `list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA&nbsp;: rôle `group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- Le [Modèle d'Objet d'Accessibilité <sup>(angl.)</sup>](https://wicg.github.io/aom/spec/)
- [ARIA dans HTML <sup>(angl.)</sup>](https://w3c.github.io/html-aria/)
- [Exemples de listes ARIA <sup>(angl.)</sup>](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — par Scott O'Hara
