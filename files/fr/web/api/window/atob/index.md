---
title: "Window : méthode atob()"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef ("HTML DOM")}}

La méthode **`atob()`** de l'interface {{DOMxRef("Window")}} décode une chaîne de données qui a été encodée avec le codage {{Glossary("Base64")}}. Vous pouvez utiliser la méthode {{DOMxRef("Window.btoa()")}} pour encoder et transmettre des données qui pourraient autrement poser des problèmes de communication, puis les transmettre et utiliser la méthode `atob()` pour décoder à nouveau les données. Par exemple, vous pouvez encoder, transmettre et décoder des caractères de contrôle tels que les valeurs {{Glossary("ASCII")}} de 0 à 31.

Vous pouvez également utiliser la méthode {{JSxRef("Uint8Array.fromBase64()")}}, qui crée un objet `Uint8Array` à partir d'une chaîne de caractères encodée en base64. Cela donne un tableau d'octets, qui est plus facile à manipuler qu'une chaîne de caractères contenant des octets bruts.

## Syntaxe

```js-nolint
atob(encodedData)
```

### Paramètres

- `encodedData`
  - : Une chaîne de caractères encodée en base64, utilisant l'alphabet produit par {{DOMxRef("Window.btoa()")}}.

### Valeur de retour

Une chaîne de caractères binaire contenant des octets bruts décodés à partir de `encodedData`. Les chaînes de caractères en JavaScript sont encodées en {{Glossary("UTF-16")}}, ce qui signifie que chaque caractère doit avoir un point de code inférieur à 256, représentant un octet de données.

### Exceptions

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Thrown if `encodedData` s not valid base64.

## Exemples

```js
const donneesEncodees = window.btoa("Salut, le monde"); // encode une chaîne de caractères
const donneesDecodees = window.atob(donneesEncodees); // décode la chaîne de caractères
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `atob` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#base64-utility-methods) est disponible dans [`core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js)
- [Les url `data`](/fr/docs/Web/URI/Reference/Schemes/data)
- {{DOMxRef("WorkerGlobalScope.atob()")}}&nbsp;: la même méthode, mais dans les contextes de travail.
- La méthode {{DOMxRef("Window.btoa()")}}
- La méthode {{JSxRef("Uint8Array.fromBase64()")}}
