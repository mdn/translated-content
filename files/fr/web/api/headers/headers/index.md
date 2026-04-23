---
title: "Headers : constructeur Headers()"
short-title: Headers()
slug: Web/API/Headers/Headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Le constructeur **`Headers()`** crée un nouvel objet {{DOMxRef("Headers")}}.

## Syntaxe

```js-nolint
new Headers()
new Headers(init)
```

### Paramètres

- `init` {{Optional_Inline}}
  - : Un objet contenant tous les [en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) que vous souhaitez pré-remplir dans votre objet `Headers`. Il peut s'agir d'un simple littéral d'objet avec des valeurs {{JSxRef("String")}}, d'un tableau de paires clé-valeur, où chaque paire est un tableau de chaînes de 2 éléments&nbsp;; ou d'un objet `Headers` existant. Dans le dernier cas, le nouvel objet `Headers` copie ses données de l'objet `Headers` existant.

## Exemples

Créer un objet `Headers` vide est simple&nbsp;:

```js
const mesEnTetes = new Headers(); // Actuellement vide
```

Vous pouvez ajouter un en-tête à cet objet en utilisant {{DOMxRef("Headers.append")}}&nbsp;:

```js
mesEnTetes.append("Content-Type", "image/jpeg");
mesEnTetes.get("Content-Type"); // Retourne 'image/jpeg'
```

Vous pouvez également ajouter les en-têtes souhaités lors de la création de l'objet `Headers`. Dans l'extrait suivant, nous créons un nouvel objet {{DOMxRef("Headers")}}, en ajoutant certains en-têtes en passant un objet init au constructeur&nbsp;:

```js
const enTetesHTTP = {
  "Content-Type": "image/jpeg",
  "X-My-Custom-Header": "Les licornes sont magiques",
};
const mesEnTetes = new Headers(enTetesHTTP);
```

Vous pouvez maintenant créer un autre objet `Headers`, en lui passant le premier objet `Headers` comme objet init&nbsp;:

```js
const secondObjetEnTetes = new Headers(mesEnTetes);
secondObjetEnTetes.get("Content-Type"); // Retourne 'image/jpeg' — il hérite du premier objet Headers
```

Vous pouvez également ajouter les en-têtes souhaités lors de la création de l'objet `Headers` en utilisant un tableau bidimensionnel pour ajouter plusieurs en-têtes avec les mêmes valeurs. Dans l'extrait suivant, nous créons un nouvel objet {{DOMxRef("Headers")}} avec plusieurs en-têtes `Set-Cookie` en passant un tableau init au constructeur&nbsp;:

```js
const enTetes = [
  ["Set-Cookie", "greeting=hello"],
  ["Set-Cookie", "name=world"],
];
const mesEnTetes = new Headers(enTetes);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
