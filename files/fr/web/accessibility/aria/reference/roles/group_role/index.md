---
title: "ARIA : rôle group"
short-title: group
slug: Web/Accessibility/ARIA/Reference/Roles/group_role
original_slug: Web/Accessibility/ARIA/Roles/group_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `group` identifie un ensemble d'objets d'interface utilisateur qui n'est pas destiné à être inclus dans un résumé de page ou une table des matières par les technologies d'assistance.

## Description

Le rôle `group`, le plus étroitement lié à l'élément HTML {{HTMLElement('fieldset')}}, il est utilisé pour identifier un ensemble d'objets d'interface utilisateur qui, par rapport à [`region`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role), n'est pas destiné à être inclus dans le résumé ou la table des matières de la page.

Le rôle `group` doit être utilisé pour former une collection logique d'éléments ayant une fonctionnalité connexe, comme les enfants d'un widget [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) formant une collection de frères et sœurs dans une hiérarchie, ou une collection d'éléments ayant le même conteneur dans un [`directory`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role).

Lorsqu'un `group` est utilisé dans le contexte d'une [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role), limitez les enfants du `group` aux éléments [`listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role). Dans ce cas, il est recommandé d'utiliser plusieurs listes ordonnées ou non ordonnées, {{HTMLElement('ol')}} ou {{HTMLElement('ul')}}, avec des enfants {{HTMLElement('li')}} imbriqués.

Lorsqu'il est utilisé dans le contexte d'une [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), les seuls enfants autorisés sont les éléments {{HTMLElement('option')}}. Dans ce cas, il est recommandé d'utiliser {{HTMLElement('select')}}, {{HTMLElement('option')}} et {{HTMLElement('optgroup')}} à la place.

Les éléments `group` peuvent être imbriqués.

Le rôle `group` ne doit pas être utilisé pour des sections majeures et perceptibles d'une page. Si une section est suffisamment significative pour être incluse dans la table des matières de la page, utilisez le rôle `region` ou un rôle de [point de repère standard](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères).

Lorsqu'un rôle est ajouté à un élément, le navigateur enverra un événement de groupe accessible aux produits de technologie d'assistance, qui pourront alors en informer l'utilisateur·ice.

## Exemples

L'exemple de code HTML ci-dessous utilise le rôle `group` avec une vue `tree`&nbsp;:

```html
<div id="tree1" role="tree" tabindex="-1">
  <div
    id="animals"
    class="groupHeader"
    role="presentation"
    aria-owns="animalGroup"
    aria-expanded="true">
    <img role="presentation" tabindex="-1" src="images/treeExpanded.gif" />
    <span role="treeitem" tabindex="0">Animaux</span>
  </div>
  <div id="animalGroup" role="group">
    <div id="birds" role="treeitem">
      <span tabindex="-1">Oiseaux</span>
    </div>
    <div
      id="cats"
      class="groupHeader"
      role="presentation"
      aria-owns="catGroup"
      aria-expanded="false">
      <img role="presentation" tabindex="-1" src="images/treeContracted.gif" />
      <span role="treeitem" tabindex="0">Chats</span>
    </div>
    <div id="catGroup" role="group">
      <div id="siamese" role="treeitem">
        <span tabindex="-1">Siamois</span>
      </div>
      <div id="tabby" role="treeitem">
        <span tabindex="-1">Tabby</span>
      </div>
    </div>
  </div>
</div>
```

L'exemple suivant utilise le rôle `group` avec un menu déroulant [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) contenant des [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)&nbsp;:

```html
<div role="menu">
  <ul role="group">
    <li role="menuitem">Boîte de réception</li>
    <li role="menuitem">Archive</li>
    <li role="menuitem">Corbeille</li>
  </ul>
  <ul role="group">
    <li role="menuitem">Dossier personnalisé 1</li>
    <li role="menuitem">Dossier personnalisé 2</li>
    <li role="menuitem">Dossier personnalisé 3</li>
  </ul>
  <ul role="group">
    <li role="menuitem">Nouveau dossier</li>
  </ul>
</div>
```

Ce menu pourrait être construit en utilisant les éléments {{HTMLElement('select')}} et {{HTMLElement('option')}}. Dans ce cas, le rôle `group` serait le plus similaire à l'élément {{HTMLElement('optgroup')}}.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('fieldset')}}
- [ARIA&nbsp;: rôle `section`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA&nbsp;: rôle `row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA&nbsp;: rôle `select`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [ARIA&nbsp;: rôle `toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
