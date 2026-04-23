---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

L'interface `Headers` de [l'API Fetch](/fr/docs/Web/API/Fetch_API) vous permet d'effectuer diverses actions sur [les en-têtes de requête et de réponse HTTP](/fr/docs/Web/HTTP/Reference/Headers). Ces actions incluent la récupération, la configuration, l'ajout et la suppression d'en-têtes de la liste des en-têtes de requêtes.

Vous pouvez récupérer un objet `Headers` avec les propriétés {{DOMxRef("Request.headers")}} et {{DOMxRef("Response.headers")}}, et créer un nouvel objet `Headers` en utilisant le constructeur {{DOMxRef("Headers.Headers", "Headers()")}}. Par rapport à l'utilisation d'objets simples, l'utilisation d'objets `Headers` pour envoyer des requêtes offre une certaine validation supplémentaire des entrées. Par exemple, elle normalise les noms d'en-tête en minuscules, supprime les espaces blancs en début et en fin des valeurs d'en-tête, et empêche certains en-têtes d'être définis.

> [!NOTE]
> Vous pouvez en savoir plus sur les en-têtes disponibles en lisant notre référence sur [les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers).

## Description

Un objet `Headers` a une liste d'en-têtes associée, qui est initialement vide et composée de zéro ou plusieurs paires nom/valeur. Vous pouvez ajouter à cette liste en utilisant des méthodes comme {{DOMxRef("Headers.append", "append()")}} (voir [les exemples](#examples).) Dans toutes les méthodes de cette interface, les noms d'en-tête sont comparés par séquence d'octets insensible à la casse.

Un objet implémentant `Headers` peut être utilisé directement dans une structure {{JSxRef("Statements/for...of", "for...of")}}, au lieu de {{DOMxRef("Headers.entries()", "entries()")}}&nbsp;: `for (const p of myHeaders)` est équivalent à `for (const p of myHeaders.entries())`.

### Restrictions de modification

Certains objets `Headers` ont des restrictions quant à savoir si les méthodes {{DOMxRef("Headers.set", "set()")}}, {{DOMxRef("Headers.delete", "delete()")}}, et {{DOMxRef("Headers.append", "append()")}} peuvent modifier l'en-tête. Les restrictions de modification sont définies en fonction de la manière dont l'objet `Headers` est créé.

- Pour les en-têtes créés avec le constructeur {{DOMxRef("Headers.Headers", "Headers()")}}, il n'y a aucune restriction de modification.
- Pour les en-têtes d'objets {{DOMxRef("Request")}}&nbsp;:
  - Si le {{DOMxRef("Request.mode", "mode")}} de la requête est `no-cors`, vous pouvez modifier n'importe quel nom/valeur {{Glossary("CORS-safelisted request header", "d'en-tête de requête autorisé par CORS")}}.
  - Sinon, vous pouvez modifier n'importe quel nom/valeur {{Glossary("forbidden request header", "d'en-tête de requête qui n'est pas interdit")}}.
- Pour les en-têtes d'objets {{DOMxRef("Response")}}&nbsp;:
  - Si la réponse est créée en utilisant {{DOMxRef("Response.error_static", "Response.error()")}} ou {{DOMxRef("Response.redirect_static", "Response.redirect()")}}, ou si elle provient d'un appel {{DOMxRef("Window/fetch", "fetch()")}}, les en-têtes sont immuables et ne peuvent pas être modifiés.
  - Sinon, si la réponse est créée en utilisant {{DOMxRef("Response.Response", "Response()")}} ou {{DOMxRef("Response.json_static", "Response.json()")}}, vous pouvez modifier n'importe quel nom/valeur {{Glossary("forbidden response header name", "d'en-tête de réponse qui n'est pas interdit")}}.

Toutes les méthodes <i lang="en">Headers</i> (en-têtes) lèveront une exception {{JSxRef("TypeError")}} si vous essayez de passer une référence à un nom qui n'est pas un [nom d'en-tête HTTP valide <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#concept-header-name). Les opérations de mutation lèveront un `TypeError` si l'en-tête est immuable. Dans tout autre cas d'échec, elles échouent silencieusement.

## Constructeur

- {{DOMxRef("Headers.Headers()", "Headers()")}}
  - : Crée un nouvel objet `Headers`.

## Méthodes d'instance

- {{DOMxRef("Headers.append()")}}
  - : Ajoute une nouvelle valeur à un en-tête existant dans un objet `Headers`, ou ajoute l'en-tête s'il n'existe pas déjà.
- {{DOMxRef("Headers.delete()")}}
  - : Supprime un en-tête dans un objet `Headers`.
- {{DOMxRef("Headers.entries()")}}
  - : Retourne un {{JSxRef("Iteration_protocols", "iterator")}} permettant d'accéder à toutes les paires clé/valeur contenues dans cet objet.
- {{DOMxRef("Headers.forEach()")}}
  - : Exécute une fonction fournie une fois pour chaque élément du tableau.
- {{DOMxRef("Headers.get()")}}
  - : Retourne une chaîne de caractères ({{JSxRef("String")}}) de toutes les valeurs d'un en-tête dans un objet `Headers` pour un nom donné.
- {{DOMxRef("Headers.getSetCookie()")}}
  - : Retourne un tableau contenant les valeurs de tous les en-têtes {{HTTPHeader("Set-Cookie")}} associés à une réponse.
- {{DOMxRef("Headers.has()")}}
  - : Retourne un booléen indiquant si un objet `Headers` contient un certain en-tête.
- {{DOMxRef("Headers.keys()")}}
  - : Retourne un {{JSxRef("Iteration_protocols", "iterator")}} permettant de parcourir toutes les clés des paires clé/valeur contenues dans cet objet.
- {{DOMxRef("Headers.set()")}}
  - : Définit une nouvelle valeur pour un en-tête existant dans un objet `Headers`, ou ajoute l'en-tête s'il n'existe pas déjà.
- {{DOMxRef("Headers.values()")}}
  - : Retourne un {{JSxRef("Iteration_protocols", "iterator")}} permettant de parcourir toutes les valeurs des paires clé/valeur contenues dans cet objet.

> [!NOTE]
> Pour être clair, la différence entre {{DOMxRef("Headers.set()")}} et {{DOMxRef("Headers.append()")}} est que si l'en-tête défini existe et accepte plusieurs valeurs, {{DOMxRef("Headers.set()")}} va remplacer la valeur existante par la nouvelle, tandis que {{DOMxRef("Headers.append()")}} va ajouter la nouvelle valeur à la fin des autres valeurs. Voir leurs pages dédiées pour des exemples de code.

> [!NOTE]
> Lorsque les valeurs d'en-tête sont itérées, elles sont automatiquement triées par ordre alphabétique et les valeurs des noms d'en-tête en double sont combinées.

## Exemples

Dans le fragment de code suivant, nous créons un nouvel Header en utilisant le contructeur `Headers()`, ajoutons un nouvel header à ce dernier en utilisant `append()`, puis retournons la valeur du header en utilisant `get()`&nbsp;:

```js
const monEnTete = new Headers();

monEnTete.append("Content-Type", "text/xml");
monEnTete.get("Content-Type"); // doit retourner 'text/xml'
```

La même chose peut être accomplie en passant un littéral d'objet ou un tableau de tableaux au constructeur.

```js
let mesEnTetes = new Headers({
  "Content-Type": "text/xml",
});

// ou, en utilisant un tableau de tableaux
mesEnTetes = new Headers([["Content-Type", "text/xml"]]);

mesEnTetes.get("Content-Type"); // doit retourner 'text/xml'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
