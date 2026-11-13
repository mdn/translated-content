---
title: "HTMLElement : propriété editContext"
short-title: editContext
slug: Web/API/HTMLElement/editContext
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

La propriété **`editContext`** de l'interface {{DOMxRef("HTMLElement")}} permet d'obtenir ou de définir l'objet {{DOMxRef("EditContext")}} associé à un élément.

L'{{DOMxRef("EditContext API", "API EditContext", "", "nocode")}} peut être utilisée pour créer des éditeurs de texte enrichi sur le web prenant en charge des expériences de saisie avancées, comme la composition avec un {{Glossary("Input Method Editor", "éditeur de méthode d'entrée")}} (IME), le sélecteur d'émojis, ou toute autre interface de saisie spécifique à la plateforme.

## Valeur

Un objet {{DOMxRef("EditContext")}} ou `null`.

### Éléments possibles

La propriété `editContext` ne peut être définie que sur certains types d'éléments&nbsp;:

- Un de ces éléments HTML&nbsp;: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("body")}}, {{HTMLElement("div")}}, {{HTMLElement("footer")}}, `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h2&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h3&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h4&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h5&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h6&gt;")}}`, {{HTMLElement("header")}}, {{HTMLElement("main")}}, {{HTMLElement("nav")}}, {{HTMLElement("p")}}, {{HTMLElement("section")}}, ou {{HTMLElement("span")}}.
- Un [élément personnalisé](/fr/docs/Web/API/Web_components/Using_custom_elements) valide.
- Un élément {{HTMLElement("canvas")}}.

Si vous essayez de définir la propriété `editContext` sur un élément qui n'est pas dans cette liste, une exception `NotSupportedError` {{DOMxRef("DOMException")}} est levée.

### Association d'élément

Définir la propriété `editContext` d'un élément avec une instance de {{DOMxRef("EditContext")}} associe cet élément à cette instance.

L'association est exclusive&nbsp;:

- Un élément ne peut être associé qu'à une seule instance de `EditContext`.
- Une instance de `EditContext` ne peut être associée qu'à un seul élément.

Si vous essayez d'associer une instance de `EditContext` déjà associée à un autre élément, une exception {{DOMxRef("DOMException")}} est levée.

Si vous essayez d'associer une autre instance de `EditContext` à un élément déjà associé, une exception {{DOMxRef("DOMException")}} est également levée.

Pour vérifier si un élément est déjà associé à une instance de `EditContext`, utilisez la méthode {{DOMxRef("EditContext.attachedElements()")}}.

### Gestion mémoire

Une instance de `EditContext` maintient son élément associé en mémoire si elle possède d'autres références actives, même si l'élément associé est retiré du DOM.

Si vous souhaitez vous assurer que l'élément soit libéré, réinitialisez la propriété `editContext` de l'élément.

## Exemples

### Définir la propriété `editContext` d'un élément

Cet exemple montre comment définir la propriété `editContext` d'un élément `<canvas>` avec une nouvelle instance de `EditContext` afin de rendre l'élément éditable.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

### Réinitialiser la propriété `editContext` d'un élément

Cet exemple montre comment réinitialiser la propriété `editContext` d'un élément `<canvas>` éditable afin de pouvoir retirer l'élément du DOM en toute sécurité.

```html
<canvas id="editor-canvas"></canvas>
```

```js
// Créer l'EditContext et l'associer à l'élément canvas.
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

// Plus tard, réinitialiser la propriété editContext et retirer l'élément.
canvas.editContext = null;
canvas.remove();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("EditContext")}}
