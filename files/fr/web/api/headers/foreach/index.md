---
title: "Headers : méthode forEach()"
short-title: forEach()
slug: Web/API/Headers/forEach
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`forEach()`** de l'interface {{DOMxRef("Headers")}} exécute une fonction de rappel une fois pour chaque paire clé/valeur dans l'objet {{DOMxRef("Headers")}}.

## Syntaxe

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : Fonction à exécuter pour chaque entrée dans la carte d'objet. Elle prend les arguments suivants&nbsp;:
    - `value`
      - : Valeur de l'entrée d'en-tête actuellement visitée.
    - `key`
      - : Nom de l'entrée d'en-tête actuellement visitée.
    - `object`
      - : L'objet `Headers` en cours d'itération.
- `thisArg` {{Optional_Inline}}
  - : Valeur à utiliser comme `this` lors de l'exécution du rappel.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Description

La méthode `Headers.forEach()` exécute la fonction de rappel fournie une fois pour chaque clé des en-têtes qui existent réellement. Elle n'est pas invoquée pour les clés qui ont été supprimées. Cependant, elle est exécutée pour les clés qui sont présentes mais dont la valeur est `undefined`.

## Exemples

### Afficher le contenu de l'objet `Headers`

Le code suivant affiche une ligne pour chaque paire clé/valeur dans l'objet `mesEnTetes`.

```js
// Crée un objet Headers de test
const mesEnTetes = new Headers();
mesEnTetes.append("Content-Type", "application/json");
mesEnTetes.append("Cookie", "Ceci est un cookie de démonstration");
mesEnTetes.append("compression", "gzip");

// Affiche les paires clé/valeur
mesEnTetes.forEach((value, key) => {
  console.log(`${key} ==> ${value}`);
});
```

Le résultat est&nbsp;:

```plain
compression ==> gzip
content-type ==> application/json
cookie ==> Ceci est un cookie de démonstration
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode [`Map.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
