---
title: "ARIA : attribut aria-placeholder"
short-title: aria-placeholder
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-placeholder` définit une courte indication (un mot ou une phrase brève) destinée à aider l'utilisateur·ice lors de la saisie de données quand un contrôle de formulaire n'a pas de valeur. L'indication peut être une valeur d'exemple ou une brève description du format attendu.

## Description

Un texte d'indication («&nbsp;placeholder&nbsp;») apparaît dans le contrôle de formulaire lorsqu'aucune valeur n'est définie. L'attribut HTML [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder) permet de fournir une valeur d'exemple ou une brève description du format attendu pour plusieurs types d'éléments HTML {{HTMLElement("input")}} et {{HTMLElement("textarea")}}.

Si vous créez une zone de saisie (`textbox`) avec un autre élément, l'attribut `placeholder` n'est pas pris en charge. C'est là que `aria-placeholder` intervient. L'attribut `aria-placeholder` peut être utilisé pour définir une courte indication afin d'aider l'utilisateur·ice à comprendre le type de données attendu lorsque le contrôle de formulaire non sémantique n'a pas de valeur.

```html
<span id="date-of-birth">Date de naissance</span>
<div
  contenteditable
  role="textbox"
  aria-labelledby="date-of-birth"
  aria-placeholder="JJ-MM-AAAA">
  JJ-MM-AAAA
</div>
```

L'indication doit être affichée à l'utilisateur·ice chaque fois que la valeur du contrôle est vide, y compris lorsqu'une valeur est supprimée.

> [!NOTE]
> ARIA ne modifie que l'arbre d'accessibilité d'un élément et donc la façon dont les technologies d'assistance présentent le contenu aux utilisateur·ice·s. ARIA ne change rien à la fonction ou au comportement des éléments. Lorsque vous n'utilisez pas les éléments HTML sémantiques pour leur usage et leur fonctionnalité par défaut, vous devez utiliser JavaScript pour gérer le comportement.

L'attribut `aria-placeholder` s'utilise en complément d'un label, jamais à la place. Ils ont des objectifs et des fonctionnalités différentes. Un label explique le type d'information attendu. Le texte d'indication fournit un exemple ou une aide sur la valeur attendue.

> [!WARNING]
> Utiliser une indication à la place d'un label visible nuit à l'accessibilité et à l'utilisabilité pour de nombreux utilisateur·ice·s, y compris les personnes âgées et celles ayant des troubles cognitifs, moteurs, de la motricité fine ou de la vision. Les labels sont préférables&nbsp;: ils sont toujours visibles et offrent une zone de sélection plus grande pour accéder au contrôle. Les indications présentent plusieurs inconvénients&nbsp;: elles disparaissent dès qu'une valeur est saisie (même un espace), elles peuvent induire en erreur en laissant penser que la valeur est pré-remplie, et la couleur par défaut manque de contraste.

> [!NOTE]
> Les indications ne doivent servir qu'à montrer un exemple du type de données à saisir dans un formulaire&nbsp;; elles ne remplacent jamais un label approprié.

## Valeurs

- `<string>`
  - : Mot ou courte phrase à afficher dans un contrôle lorsque celui-ci n'a pas de valeur.

## Interfaces associées

- {{DOMxRef("Element.ariaPlaceholder")}}
  - : La propriété {{DOMxRef("Element.ariaPlaceholder", "ariaPlaceholder")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-placeholder`.
- {{DOMxRef("ElementInternals.ariaPlaceholder")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaPlaceholder", "ariaPlaceholder")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-placeholder`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Hérité dans les rôles&nbsp;:

- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut HTML [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder)
- L'attribut ARIA [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- L'attribut ARIA [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
