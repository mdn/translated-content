---
title: "Document : propriété location"
short-title: location
slug: Web/API/Document/location
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("DOM")}}

La propriété en lecture seule **`location`** de l'interface {{DOMxRef("Document")}} retourne un objet {{DOMxRef("Location")}}, qui contient des informations sur l'URL du document et fournit des méthodes pour modifier cette URL et charger une autre URL.

Pour récupérer uniquement l'URL sous forme de chaîne de caractères, la propriété en lecture seule {{DOMxRef("document.URL")}} peut également être utilisée.

## Valeur

Un objet {{DOMxRef("Location")}}. Si le document actuel n'est pas dans un contexte de navigation, la valeur retournée est `null`.

Bien que la propriété `location` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `Location`, vous pouvez toujours affecter directement à la propriété `location`, ce qui équivaut à affecter à sa propriété {{DOMxRef("Location/href", "href")}}. Vous pouvez également modifier l'objet `Location` en utilisant les méthodes {{DOMxRef("Location/assign", "assign()")}} et {{DOMxRef("Location/replace", "replace()")}}.

## Exemples

```js
console.log(document.location);
// Affiche un objet Location dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface de la valeur retournée, {{DOMxRef("Location")}}
- Une information similaire, mais attachée au {{Glossary("browsing context", "contexte de navigation")}}, {{DOMxRef("Window.location")}}
