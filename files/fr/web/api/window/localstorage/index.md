---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef("Web Storage API")}}

La propriété `localStorage` vous permet d'accéder à un objet local {{domxref("Storage")}}. Le `localStorage` est similaire au [`sessionStorage`](/fr/docs/Web/API/Window.sessionStorage). La seule différence : les données stockées dans le `localStorage` n'ont pas de délai d'expiration, alors que les données stockées dans le `sessionStorage` sont nettoyées quand la session navigateur prend fin — donc quand on ferme le navigateur.

Il convient de noter que les données stockées dans `localStorage` ou `sessionStorage` **sont spécifiques au protocole de la page.**

Les clés et les valeurs **sont toujours** des chaînes de caractères (à noter que, comme pour les objets, les clés entières seront automatiquement converties en chaînes de caractères).

## Syntaxe

```js
monStockage = localStorage;
```

### Valeur

Un objet {{DOMxRef("Storage")}} qui peut être utilisé pour accéder à l'espace de stockage local de l'origine actuelle.

### Exceptions

- `SecurityError`
  - : La demande viole une décision politique, ou l'origine n'est pas [un schéma/hôte/port valide](/fr/docs/Web/Security/Same_origin_policy_for_JavaScript) (cela peut se produire si l'origine utilise le shéma `file:` ou `data:`, par exemple). Par exemple, l'utilisateur peut configurer son navigateur de manière à refuser la permission de conserver des données pour l'origine spécifiée.

## Exemple

L'extrait de code suivant accède à l'objet local {{domxref("Storage")}} du domaine courant et lui ajoute une entrée en utilisant {{domxref("Storage.setItem()")}}.

```js
localStorage.setItem("monChat", "Tom");
```

La syntaxe pour la lecture de l'article `localStorage` est la suivante :

```js
var cat = localStorage.getItem("monChat");
```

La syntaxe pour la suppression de l'élément `localStorage` est la suivante :

```js
localStorage.removeItem("monChat");
```

La syntaxe pour supprimer tous les éléments de `localStorage` est la suivante :

```js
// Effacer tous les éléments
localStorage.clear();
```

> **Note :** Se référer à l'article [Using the Web Storage API](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) pour voir un exemple complet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Using the Web Storage API](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Storage/LocalStorage")}}
- {{domxref("Window/SessionStorage")}}
- {{domxref("Window.sessionStorage")}}
