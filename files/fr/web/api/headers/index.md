---
title: Headers
slug: Web/API/Headers
---

{{APIRef("Fetch API")}}

L'interface `Headers` de l'API Fetch vous permet d'effectuer diverses actions sur les en-têtes de requête et de réponse HTTP. Ces actions incluent la récupération, la configuration, l'ajout et la suppression. Un objet `Headers` a une liste `Headers` associée qui est vide lors de l'initialisation et qui est constituée de zéro ou plusieurs paires de noms et de valeurs. Vous pouvez en ajouter via les méthodes comme{{domxref("Headers.append","append()")}} (voir la section [Exemples](#exemples).) Dans toutes les méthodes de cette interface, les noms des `Headers` sont reliés à une séquence d'octets sensible à la case.

Pour des raisons de sécurité, les `Headers` ci-dessous peuvent être controlés uniquement par l'User Agent : {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} et {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.

Un objet `Headers` a aussi une garde associée, qui prend la valeur `immutable`, `request`, `request-no-cors`, `reponse`, or `none`. Cela affecte si les méthodes {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, et {{domxref("Headers.append","append()")}} vont modifier le `Header`. Pour plus d'informations voir {{Glossary("Guard")}}.

Vous pouvez récuperer un objet `Header` via les propriétés {{domxref("Request.headers")}} et {{domxref("Response.headers")}} et créer un nouvel objet `Header` en utilisant le constructeur {{domxref("Headers.Headers()")}}.

Un objet implémentant `Headers` peut directement être utilisé dans une structure {{jsxref("Statements/for...of", "for...of")}}, au lieu de{{domxref('Headers.entries()', 'entries()')}}: `for (var p of myHeaders)` est équivalent à `for (var p of myHeaders.entries())`.

> **Note :** Vous pouvez trouver plus d'informations à propos des Headers disponibles en lisant la page suivante : [HTTP headers](/fr/docs/Web/HTTP/Headers).

## Constructeur

- {{domxref("Headers.Headers()", "Headers()")}}
  - : Crée un nouvel objet `Headers`.

## Méthodes

- {{domxref("Headers.append()")}}
  - : Ajoute une nouvelle valeur à un Header existant dans un objet `Headers`, ou ajoute le header s'il n'existe pas déjà.
- {{domxref("Headers.delete()")}}
  - : Supprime un header dans un objet `Headers`.
- {{domxref("Headers.entries()")}}
  - : Retourne un {{jsxref("Iteration_protocols","iterator")}} permettant d'acceder à toutes les paires clef/valeur contenue dans cet objet.
- {{domxref("Headers.forEach()")}}
  - : Exécute une fonction fournie une fois pour chaque élément du tableau.
- {{domxref("Headers.get()")}}
  - : Retourne une séquence {{domxref("ByteString")}} de toutes les valeurs d'un Header dans un objet `Headers` avec un nom donné.
- {{domxref("Headers.has()")}}
  - : Retourne un booléen indiquant si un objet `Headers` contient un certain header.
- {{domxref("Headers.keys()")}}
  - : Retourne un {{jsxref("Iteration_protocols", "iterator")}} permettant de parcourir toutes les clefs des paires clef/valeur contenues dans cet objet.
- {{domxref("Headers.set()")}}
  - : Définti une nouvelle valeur pour un header existant dans un objet `Headers`, ou ajoute le header s'il n'existe pas déjà.
- {{domxref("Headers.values()")}}
  - : Retourne un {{jsxref("Iteration_protocols", "iterator")}} permettant de parcourir toutes les valeurs des paires clefs/valeur contenues dans cet objet.

> **Note :** Pour être clair, la différence entre {{domxref("Headers.set()")}} et {{domxref("Headers.append()")}} est que si le header spécifié existe et accepte plusieurs valeurs, {{domxref("Headers.set()")}} va remplacer la valeur existante par la nouvelle, tandis que {{domxref("Headers.append()")}} va ajouter la nouvelle valeur à la fin des autres valeurs. Voir leurs pages dédiées pour des exemples de code.

> **Note :** Toutes les méthodes Headers vont retourner `TypeError` si vous essayez de passer dans une réfférenceun nom qui n'est pas un [nom de Header HTTP valide](https://fetch.spec.whatwg.org/#concept-header-name). Les opérations de mutation vont retourner `TypeError` si le header a un {{Glossary("Guard")}} immuable. Dans tous les autres cas, les erreurs sont silencieuses.

> **Note :** Lorsque les valeurs d'en-tête sont itérées, elles sont automatiquement triées par ordre lexicographique et les valeurs des noms d'en-tête en double sont combinées.

### Méthodes obsolètes

- {{domxref("Headers.getAll()")}}
  - : Utilisée pour retourner un array de toutes les valeurs d'un header dans un objet `Headers` avec un nom donné. Cette méthode est maintenant supprimée des standards, et {{domxref("Headers.get()")}} retourne maintenant toutes les valeurs d'un nom donné au lieu du premier seulement.

## Exemples

Dans le fragment de code suivant, nous créons un nouvel Header en utilisant le contructeur `Headers()`, ajoutons un nouvel header à ce dernier en utilisant `append()`, puis retournons la valeur du header en utilisant `get()` :

```js
var monHeader = new Headers();

monHeader.append("Content-Type", "text/xml");
monHeader.get("Content-Type"); // doit retourner 'text/xml'
```

La même chose peut être accomplie en passant par un array d'array un littéral d'objet au constructeur.

```js
var mesHeaders = new Headers({
  "Content-Type": "text/xml",
});

// ou, en utilisant un array d'array
mesHeaders = new Headers([["Content-Type", "text/xml"]]);

mesHeaders.get("Content-Type"); // doit retourner 'text/xml'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [API ServiceWorker](/fr/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/fr/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/fr/docs/Web/HTTP)
