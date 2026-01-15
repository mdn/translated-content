---
title: "ARIA : rôle widget"
short-title: widget
slug: Web/Accessibility/ARIA/Reference/Roles/widget_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le [rôle abstrait](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#6._rôles_abstraits) **`widget`** est un composant interactif d'une interface utilisateur graphique (GUI).

> [!WARNING]
> Le rôle `widget` est un rôle abstrait utilisé pour l'ontologie. Il est inclus ici pour l'exhaustivité de la documentation. Il ne doit pas être utilisé par les auteurs web.

## Description

Le rôle abstrait `widget` est un rôle de superclasse pour certains éléments GUI interactifs et rôles de regroupement. `role="widget"` ne doit pas être confondu avec les rôles de widgets, tels que `option`, `menuitem` et `searchbox`.

Le rôle `widget` est un rôle de superclasse pour plusieurs rôles abstraits interactifs GUI, y compris [`command`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/command_role), [`composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`input`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/input_role), [`range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) et [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (s'il est focalisable), qui ne doivent pas être utilisés par les auteurs web.

Le rôle abstrait `widget` est également un rôle de superclasse pour certains rôles de regroupement qui peuvent être utilisés par les auteurs web, y compris [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (lorsqu'il n'est pas focalisable) et [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), qui peuvent et doivent être utilisés lorsque cela est approprié. Lorsque l'utilisateur navigue vers l'un de ces rôles non abstraits de widget, les événements clavier peuvent passer en mode de navigation d'application et transmettre les événements clavier au navigateur.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `roletype`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)
- [ARIA&nbsp;: rôle `command`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/command_role)
- [ARIA&nbsp;: rôle `composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA&nbsp;: rôle `gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA&nbsp;: rôle `input`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)
- [ARIA&nbsp;: rôle `range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA&nbsp;: rôle `row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA&nbsp;: rôle `separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [ARIA&nbsp;: rôle `tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
