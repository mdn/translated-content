---
title: "Request : propriété keepalive"
short-title: keepalive
slug: Web/API/Request/keepalive
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`keepalive`** de l'interface {{DOMxRef("Request")}} contient le paramètre `keepalive` de la requête (`true` ou `false`), qui indique si le navigateur va maintenir la requête associée active si la page qui l'a initiée est déchargée avant que la requête soit terminée.

Cela permet à une requête {{DOMxRef('Window.fetch','fetch()')}} d'envoyer, par exemple, des données d'analyse à la fin d'une session même si l'utilisateur·ice quitte ou ferme la page.
Cela présente certains avantages par rapport à l'utilisation de {{DOMxRef("Navigator.sendBeacon()")}} pour le même objectif, notamment la possibilité d'utiliser des méthodes HTTP autres que {{HTTPMethod("POST")}}, de personnaliser les propriétés de la requête, et d'accéder à la réponse du serveur via la résolution de la promesse ({{JSxRef("Promise")}}).

## Valeur

Une valeur booléenne indiquant le statut `keepalive` de la requête.

## Exemples

### Créer une requête avec `keepalive`

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} avec `keepalive` défini à `true`, puis nous enregistrons la valeur `keepalive` de la requête dans une variable&nbsp;:

```js
const options = {
  keepalive: true,
};

const maRequete = new Request("flaurs.jpg", options);
let monKeepAlive = maRequete.keepalive; // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
