---
title: "ARIA : rôle structure"
short-title: structure
slug: Web/Accessibility/ARIA/Reference/Roles/structure_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle abstrait `structure` est destiné aux éléments structurels des documents.

> [!WARNING]
> Le rôle `structure` est un [rôle abstrait](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#6._rôles_abstraits). Il est inclus ici pour des raisons de complétude de la documentation. Il ne doit pas être utilisé par les auteurs web. Utilisez HTML et les rôles de sous-classe.

## Description

`Structure` est une superclasse de [rôle abstrait](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#6._rôles_abstraits) pour les structures de documents, comme [`document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role),
[`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) et [`sectionhead`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role), qui soutiennent l'accessibilité du contenu web dynamique en aidant les technologies d'assistance à déterminer le contenu actif par rapport au contenu statique du document. Certains rôles de sous-classe, comme
[`section` role](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/section_role), sont à leur tour des superclasses d'autres rôles.

Le rôle `structure` est la superclasse de tous les rôles de structure de document, qui sont utilisés pour fournir une description structurelle pour une section de contenu. La plupart des rôles de structure ne devraient plus être utilisés car les navigateurs prennent désormais en charge les éléments HTML sémantiques ayant la même signification. Les rôles de structure sans équivalents HTML, tels que le [`presentation` role](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) qui signifie que le contenu est uniquement présentational, fournissent des informations sur la structure du document aux technologies d'assistance telles que les lecteurs d'écran, car les balises HTML natives équivalentes ne sont pas disponibles.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `roletype`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)
- [ARIA&nbsp;: rôle `generic`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [ARIA&nbsp;: rôle `presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [ARIA&nbsp;: rôle `range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA&nbsp;: rôle `section`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA&nbsp;: rôle `sectionhead`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role)
