---
title: "Document : propriété customElementRegistry"
short-title: customElementRegistry
slug: Web/API/Document/customElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

La propriété en lecture seule **`customElementRegistry`** de l'interface {{DOMxRef("Document")}} retourne l'objet {{DOMxRef("CustomElementRegistry")}} associé à ce document, ou `null` si aucun n'a été défini.

Pour les documents associés à une fenêtre ({{DOMxRef("Window")}}) (comme le document principal d'une page), il s'agit du `CustomElementRegistry` global qui est également accessible avec la propriété {{DOMxRef("window.customElements")}}. Les documents créés de manière programmatique (par exemple, avec {{DOMxRef("DOMImplementation.createHTMLDocument()")}}) ont par défaut un registre d'éléments personnalisés `null`.

Cette propriété est également disponible sur les objets {{DOMxRef("ShadowRoot")}} avec le même nom de propriété {{DOMxRef("ShadowRoot/customElementRegistry","customElementRegistry")}}.

## Valeur

Un objet {{DOMxRef("CustomElementRegistry")}} ou `null`.

## Exemples

### Accéder au registre d'éléments personnalisés d'un document

Cet exemple montre que le `customElementRegistry` du document principal est le même registre global accessible avec {{DOMxRef("window.customElements")}}, tandis que les documents créés de manière programmatique avec {{DOMxRef("DOMImplementation.createHTMLDocument()")}} ont par défaut un registre `null`.

```js
// Le registre du document principal est le registre global :
console.log(document.customElementRegistry === window.customElements); // true (pour les documents associés à une fenêtre)

// Les documents créés de manière programmatique ont un registre nul :
const newDoc = document.implementation.createHTMLDocument("Nouveau document");
console.log(newDoc.customElementRegistry); // null
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("ShadowRoot.customElementRegistry")}}
- La propriété {{DOMxRef("Element.customElementRegistry")}}
- L'interface {{DOMxRef("CustomElementRegistry")}}
- La propriété {{DOMxRef("window.customElements")}}
- [Utiliser les éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements)
