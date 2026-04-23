---
title: "ARIA : rôle form"
short-title: form
slug: Web/Accessibility/ARIA/Reference/Roles/form_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Le rôle `form` peut être utilisé pour identifier un groupe d'éléments sur une page qui fournissent une fonctionnalité équivalente à celle d'un formulaire HTML. Le formulaire n'est pas exposé en tant que région de repère à moins qu'il n'ait un [nom accessible](/fr/docs/Glossary/Accessible_name).

```html
<div role="form" id="contact-info" aria-label="Informations de contact">
  <!-- contenu du formulaire -->
</div>
```

Ceci est un formulaire qui collecte et enregistre les informations de contact d'un·e utilisateur·ice.

> [!WARNING]
> Utilisez un élément HTML {{HTMLElement("form")}} pour contenir vos contrôles de formulaire, plutôt que le rôle ARIA `form`, à moins que vous n'ayez une très bonne raison.
> L'élément HTML `<form>` est suffisant pour indiquer aux technologies d'assistance qu'il s'agit d'un formulaire.

## Description

Un [repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) `form` identifie une région de contenu qui contient une collection d'éléments et d'objets qui, dans leur ensemble, se combinent pour créer un formulaire lorsque aucun autre repère nommé n'est approprié (par exemple, [`main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) ou [`search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)).

> [!NOTE]
> L'utilisation de l'élément {{HTMLElement('form')}} communiquera automatiquement une section de contenu en tant que repère `form`, si elle est fournie avec un nom accessible. Les développeurs devraient toujours préférer utiliser le bon élément HTML sémantique plutôt que d'utiliser ARIA.

Utilisez l'élément HTML {{HTMLElement('form')}} si possible. L'élément `<form>` définit un repère `form` lorsqu'il a un nom accessible (par exemple, [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)). Assurez-vous d'avoir une étiquette unique sur chaque formulaire dans un document pour aider les utilisateur·ice·s à comprendre l'objectif du formulaire. Cette étiquette doit être visible pour tous les utilisateur·ice·s, pas seulement pour les utilisateur·ice·s de technologies d'assistance. Utilisez le repère `search` au lieu du repère `form` lorsque le formulaire est utilisé pour des fonctionnalités de recherche.

Utilisez le `role="form"` pour identifier une région de la page&nbsp;; ne l'utilisez pas pour identifier chaque champ de formulaire. Même si vous utilisez le repère de formulaire au lieu de `<form>`, vous êtes encouragé à utiliser des contrôles de formulaire HTML natifs comme {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}}, et {{HTMLElement('textarea')}}.

### Propriétés, états et rôles WAI-ARIA associés

Aucun état ou propriété spécifique à ce rôle.

### Interactions au clavier

Aucune interaction au clavier spécifique à ce rôle.

### Fonctionnalités JavaScript requises

- `onsubmit`
  - : Le gestionnaire d'événements onSubmit gère l'événement déclenché lorsque le formulaire est soumis. Tout ce qui n'est pas un `<form>` ne peut pas être soumis, vous devrez donc utiliser JavaScript pour créer un mécanisme de soumission de données alternatif, par exemple avec {{DOMxRef("Window/fetch", "fetch()")}}.

## Exemples

```html
<div role="form" id="send-comment" aria-label="Ajouter un commentaire">
  <label for="username">Nom d'utilisateur·ice</label>
  <input
    id="username"
    name="username"
    autocomplete="nickname"
    autocorrect="off"
    type="text" />

  <label for="email">Courriel</label>
  <input
    id="email"
    name="email"
    autocomplete="email"
    autocapitalize="off"
    autocorrect="off"
    spellcheck="false"
    type="text" />

  <label for="comment">Commentaire</label>
  <textarea id="comment" name="comment"></textarea>

  <input value="Commenter" type="submit" />
</div>
```

Il est recommandé d'utiliser `<form>` à la place.

```html
<form id="send-comment" aria-label="Ajouter un commentaire">…</form>
```

## Problèmes d'accessibilité

### Utiliser avec parcimonie

[Les rôles de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) sont destinés à identifier des sections globales plus importantes du document. L'utilisation de trop de rôles de repère peut créer du «&nbsp;bruit&nbsp;» dans les lecteurs d'écran, rendant difficile la compréhension de la mise en page globale de la page.

### Les éléments de formulaire ne sont pas des formulaires

Vous n'avez pas besoin de déclarer `role="form"` sur chaque [élément de formulaire](/fr/docs/Web/HTML/Reference/Elements#forms) (champs de saisie, zones de texte, sélecteurs, etc.). Il doit être déclaré sur l'élément HTML qui enveloppe les éléments de formulaire. Idéalement, utilisez l'élément {{HTMLElement('form')}} comme élément d'enveloppement et ne déclarez pas `role="form"`.

### Recherche

Si un formulaire est utilisé pour la recherche, vous devez utiliser la valeur plus spécialisée [`role="search"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role).

### Étiquetage des repères

Chaque élément {{HTMLElement('form')}} et rôle de formulaire qui doit être exposé en tant que repère doit avoir un nom accessible. Ce nom permettra à un·e utilisateur·ice de technologie d'assistance de comprendre rapidement l'objectif du repère de formulaire.

Utilisez un `aria-labelledby`, `aria-label` ou `title` sur le même élément qui a reçu le `role="form"` pour lui fournir un nom accessible.

#### Utilisation de `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Acheter une carte-cadeau">
  <!-- form content -->
</div>
```

#### Descriptions redondantes

Les lecteurs d'écran annonceront le type de rôle que le repère a. De ce fait, vous n'avez pas besoin de décrire ce que le repère est dans son étiquette. Par exemple, une déclaration de `role="form"` avec un `aria-label="Contact form"` peut être annoncée de manière redondante comme, "formulaire de contact form".

## Bonnes pratiques

### Préférer HTML

L'utilisation de l'élément {{HTMLElement('form')}} communiquera automatiquement que l'élément a un rôle de formulaire (`form`). Si possible, privilégiez l'utilisation de l'élément sémantique `<form>` plutôt que le rôle `form`.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('form')}}
- L'élément HTML {{HTMLElement('legend')}}
