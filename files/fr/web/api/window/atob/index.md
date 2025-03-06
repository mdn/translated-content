---
title: window.atob
slug: Web/API/Window/atob
original_slug: Web/API/atob
---

{{APIRef ("HTML DOM")}}
La fonction `WindowOrWorkerGlobalScope.atob()` décode une chaîne de données qui a été codée en utilisant le codage en base 64. Vous pouvez utiliser la méthode [`btoa()`](/fr/docs/Web/API/Window/btoa) pour encoder et transmettre des données qui pourraient causer des problèmes de communication, puis les transmettre et utiliser la méthode atob() pour décoder les données . Par exemple, vous pouvez coder, transmettre et décoder des caractères de contrôle tels que les valeurs ASCII 0 à 31.

Pour une utilisation avec des chaînes Unicode ou UTF-8, voir [cette note sur l'encodage et le décodage Base64](/fr/docs/Glossary/Base64) et [cette note sur btoa()](/fr/docs/Web/API/Window/btoa#chaînes_unicode).

## Syntaxe

```js
var donneesDecodees = scope.atob(donneesEncodees);
```

### Déclenche

Déclenche une {{jsxref("DOMException")}} si la longueur de la chaîne passée en entrée n'est pas un multiple de 4.

## Exemple

```js
donneesEncodees = window.btoa("Salut, monde"); // encode une chaîne
donneesDecodees = window.atob(donneesEncodees); // décode la chaîne
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Base64 encoding and decoding](/fr/docs/Glossary/Base64)
- [Les URL de `données`](/fr/docs/Web/URI/Schemes/data)
- [`btoa()`](/fr/docs/Web/API/Window/btoa)
