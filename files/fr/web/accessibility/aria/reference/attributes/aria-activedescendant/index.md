---
title: "ARIA : attribut aria-activedescendant"
short-title: aria-activedescendant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

L'attribut `aria-activedescendant` identifie l'élément actuellement actif lorsque la sélection est sur un widget [`composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), une [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), une [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), un [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ou une [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).

## Description

La propriété `aria-activedescendant` permet de gérer la sélection pour les technologies d'assistance sur des éléments interactifs contenant plusieurs descendants sélectionnables, comme les menus, grilles ou barres d'outils. Au lieu que le lecteur d'écran déplace la sélection entre les éléments possédés, `aria-activedescendant` peut être utilisé sur un élément conteneur pour référencer l'élément actuellement actif, informant ainsi l'utilisateur·ice des technologies d'assistance de l'élément actif lors de la sélection.

Avec `aria-activedescendant`, le navigateur conserve la sélection du DOM sur l'élément conteneur ou sur un élément de saisie qui contrôle ce conteneur. Cependant, l'agent utilisateur communique les événements et états de sélection au bureau comme si l'élément référencé par `aria-activedescendant` avait la sélection.

Cet attribut n'est pertinent que sur les éléments ayant le rôle de [`composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`boîte combinée`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`zone de saisie`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`groupe`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ou [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) dont l'identifiant est référencé comme valeur de l'attribut.

L'attribut permet d'informer les technologies d'assistance de l'élément ayant la sélection, mais ne crée pas réellement la sélection. Le changement de sélection et la gestion de la valeur de l'attribut se font en JavaScript. En plus de gérer cette valeur, assurez-vous que le descendant actif est visible et affiché (ou défilé dans la vue) lors de la sélection.

Lors de la définition de la valeur de `aria-activedescendant` sur un élément ayant la sélection DOM, assurez-vous que la valeur référence un élément possédé&nbsp;: soit un descendant de l'élément ayant la sélection DOM, soit un descendant logique indiqué par l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns).

Lorsque l'élément ayant la sélection DOM est une boîte combinée, une zone de saisie ou une zone de recherche, incluez [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) pour référencer l'élément qui prend en charge `aria-activedescendant`.

La valeur de `aria-activedescendant` référence un élément possédé par l'élément contrôlé. Par exemple, dans une boîte combinée, la sélection peut rester sur la boîte combinée tandis que la valeur de `aria-activedescendant` sur cet élément référence un descendant d'une liste déroulante contrôlée par la boîte combinée.

> [!NOTE]
> L'attribut n'est pris en charge que sur quelques rôles. Par exemple, les «&nbsp;boîtes de dialogue&nbsp;» (<i lang="en">`dialog`</i>) ne prennent pas en charge `aria-activedescendant`. Lorsqu'une boîte combinée ouvre une boîte de dialogue, la sélection DOM passe de la boîte combinée à la boîte de dialogue, qui ne peut pas être référencée par cet attribut.

> [!NOTE]
> Lorsqu'un descendant d'une «&nbsp;liste déroulante&nbsp;» (<i lang="en">`listbox`</i>), d'une grille (<i lang="en">`grid`</i>) ou d'une arborescence (<i lang="en">`tree`</i>) contextuelle reçoit la sélection, la sélection DOM reste sur la boîte combinée et celle-ci possède `aria-activedescendant` défini sur une valeur qui référence l'élément sélectionné dans la fenêtre contextuelle.

## Valeurs

- Référence d'identifiant
  - : prend comme valeur l'identifiant (`id`) de l'élément actuellement sélectionné.

## Interfaces associées

- {{domxref("Element.ariaActiveDescendantElement")}}
  - : La propriété `ariaActiveDescendantElement` fait partie de l'interface de chaque élément.
    Sa valeur est une instance d'une sous-classe de {{domxref("Element")}} qui reflète la référence d'identifiant dans l'attribut `aria-activedescendant` ([avec certaines limites](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_reflétés)).
- {{domxref("ElementInternals.ariaActiveDescendantElement")}}
  - : La propriété `ariaActiveDescendantElement` fait partie de l'interface de chaque élément personnalisé.
    Sa valeur est une instance d'une sous-classe de {{domxref("Element")}} qui reflète la référence d'identifiant dans l'attribut `aria-activedescendant` ([avec certaines limites](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_reflétés)).

## Rôles associés

Pertinent uniquement comme attribut sur les éléments ayant les rôles suivants&nbsp;:

- [ARIA&nbsp;: rôle `application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [ARIA&nbsp;: rôle `combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA&nbsp;: rôle `composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA&nbsp;: rôle `group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [ARIA&nbsp;: rôle `textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

## Spécifications

{{Specifications}}
