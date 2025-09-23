---
title: "ARIA : rôle heading"
short-title: heading
slug: Web/Accessibility/ARIA/Reference/Roles/heading_role
l10n:
  sourceCommit: 4550055f1afc5fb084d33f6e5a7910b7066e20c7
---

Le rôle `heading` définit cet élément comme un en-tête d'une page ou d'une section, avec l'attribut [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) fournissant une structure supplémentaire.

## Description

Le rôle `heading` indique aux technologies d'assistance que cet élément doit être traité comme un en-tête. Les lecteurs d'écran liraient le texte et indiqueraient qu'il est formaté comme un en-tête. De plus, le niveau indique aux technologies d'assistance quelle partie de la structure de la page cet en-tête représente. Un en-tête de niveau 1, indiqué par `aria-level="1"`, indique généralement l'en-tête principal d'une page, un en-tête de niveau 2, défini par `aria-level="2"`, la première sous-section, un niveau 3 est une sous-section de cela, et ainsi de suite.

```html
<div role="heading" aria-level="1">Ceci est un en-tête principal de page</div>
```

Ceci définit le texte dans le `<div>` comme étant l'en-tête principal de la page, indiqué par le niveau 1 via l'attribut `aria-level`. Optez plutôt pour l'utilisation de l'élément {{HTMLElement("Heading_Elements", "h1")}} (à travers {{HTMLElement("Heading_Elements", "h6")}}).

```html
<h1>Ceci est un en-tête principal de page</h1>
```

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : L'attribut `aria-level` spécifie le niveau de l'en-tête dans la structure du document. Cet attribut est requis&nbsp;: les auteurs doivent indiquer le niveau d'imbrication approprié pour garantir que les éléments ayant un rôle d'en-tête sont organisés dans un plan logique. Si l'attribut est erronément omis, les navigateurs utiliseront une [valeur de secours de 2 <sup>(angl.)</sup>](https://w3c.github.io/aria/#authorErrorDefaultValuesTable).

### Interactions au clavier

Ce rôle ne nécessite pas de navigation au clavier spéciale. Comme pour tout en-tête, lui donner un ID garantit qu'il peut être référencé à partir de liens d'ancrage, le rendant accessible via le clavier.

### Fonctionnalités JavaScript requises

- Gestionnaires d'événements requis
  - : Aucun.
- Changer les valeurs des attributs
  - : Généralement pas nécessaire, sauf si le contenu est inséré dynamiquement. Dans ce cas, les nouveaux en-têtes ont besoin d'attributs `aria-level` dont les valeurs sont cohérentes avec le reste de la structure du document.

> [!NOTE]
> Au lieu d'utiliser un `<div>` ou un `<span>` avec un rôle `heading` et `aria-level`, envisagez d'utiliser des éléments natifs {{HTMLElement("Heading_Elements", "h1")}} à travers {{HTMLElement("Heading_Elements", "h6")}} à la place pour indiquer que ce texte est un en-tête, et quelle partie de la structure il représente.

## Exemples

L'exemple suivant montre une structure de page typique.

```html
<div id="container">
  <div role="heading" aria-level="1">L'en-tête principal de la page</div>
  <p>Cet article traite de la structure d'une page.</p>
  <div role="heading" aria-level="2">Introduction</div>
  <p>Un texte d'introduction.</p>
  <div role="heading" aria-level="2">Chapitre 1</div>
  <p>Texte</p>
  <div role="heading" aria-level="3">Chapitre 1.1</div>
  <p>Plus de texte dans une sous-section.</p>
</div>
```

Cependant, vous devriez plutôt faire&nbsp;:

```html
<div id="container">
  <h1>L'en-tête principal de la page</h1>
  <p>Cet article traite de la structure d'une page.</p>
  <h2>Introduction</h2>
  <p>Un texte d'introduction.</p>
  <h2>Chapitre 1</h2>
  <p>Texte</p>
  <h3>Chapitre 1.1</h3>
  <p>Plus de texte dans une sous-section.</p>
</div>
```

## Problèmes d'accessibilité

> [!WARNING]
> Utiliser [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) masquera le contenu de votre en-tête pour les technologies d'assistance, lisant l'étiquette au lieu de l'en-tête.

Si vous devez utiliser le rôle `heading` et l'attribut [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), ne dépassez pas le niveau 6 afin de rester cohérent avec HTML. Bien qu'en théorie vous puissiez aller plus haut, et que certains lecteurs d'écran puissent le prendre en charge, les résultats peuvent être imprévisibles avec d'autres combinaisons de navigateurs et de lecteurs d'écran.

## Bonnes pratiques

La meilleure façon d'utiliser ce rôle est de **ne pas l'utiliser du tout**, et d'utiliser plutôt les balises d'en-tête natives {{HTMLElement("Heading_Elements", "h1")}} à travers {{HTMLElement("Heading_Elements", "h6")}} comme montré dans l'exemple ci-dessus. Le rôle `heading` et l'attribut `aria-level` ne devraient être utilisés que pour adapter l'accessibilité sur du code hérité que vous ne pouvez pas modifier en profondeur.

Au lieu d'utiliser le rôle ARIA `heading`, utilisez l'élément HTML sémantique&nbsp;:

| Élément HTML                              | rôle `heading`                        |
| ----------------------------------------- | ------------------------------------- |
| {{HTMLElement("Heading_Elements", "h1")}} | `<div role="heading" aria-level="1">` |
| {{HTMLElement("Heading_Elements", "h2")}} | `<div role="heading" aria-level="2">` |
| {{HTMLElement("Heading_Elements", "h3")}} | `<div role="heading" aria-level="3">` |
| {{HTMLElement("Heading_Elements", "h4")}} | `<div role="heading" aria-level="4">` |
| {{HTMLElement("Heading_Elements", "h5")}} | `<div role="heading" aria-level="5">` |
| {{HTMLElement("Heading_Elements", "h6")}} | `<div role="heading" aria-level="6">` |

### Avantages supplémentaires

Aucun.

## Spécifications

{{Specifications}}

## Ordre de priorité

Le rôle d'en-tête remplace la signification sémantique native de l'élément pour lequel il est utilisé. L'attribut `aria-level`, en plus, détermine quel niveau d'en-tête est exposé.

## Voir aussi

- [`<h1>` à `<h6>`&nbsp;: Les éléments de titre de section HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
