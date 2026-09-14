---
title: "Headers : méthode getSetCookie()"
short-title: getSetCookie()
slug: Web/API/Headers/getSetCookie
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`getSetCookie()`** de l'interface {{DOMxRef("Headers")}} retourne un tableau contenant les valeurs de toutes les en-têtes {{HTTPHeader("Set-Cookie")}} associé à une réponse. Cela permet aux objets {{DOMxRef("Headers")}} de gérer plusieurs en-têtes `Set-Cookie`, ce qui n'était pas possible avant sa mise en œuvre.

Cette méthode est destinée à être utilisée dans des environnements serveur (par exemple Node.js). Les navigateurs empêchent le code JavaScript côté client d'accéder à l'en-tête {{HTTPHeader("Set-Cookie")}}, conformément à la spécification Fetch, qui définit `Set-Cookie` comme un [nom d'en-tête de réponse interdit <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#forbidden-response-header-name) qui [doit être filtré <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) de toute réponse exposée au code front-end.

## Syntaxe

```js-nolint
getSetCookie()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau de chaînes de caractères représentant les valeurs de toutes les en-têtes `Set-Cookie` différentes, associées à une réponse.

Si aucun en-tête `Set-Cookie` n'est défini, la méthode retourne un tableau vide (`[ ]`).

## Exemples

Comme mentionné précédemment, l'exécution de code comme suit côté client ne retourne aucun résultat — `Set-Cookie` est filtré des {{DOMxRef("Headers")}} récupérés sur le réseau.

```js
fetch("https://example.com").then((response) => {
  console.log(response.headers.getSetCookie());
  // Aucune valeur d'en-tête retournée
});
```

Cependant, ce qui suit pourrait être utilisé pour interroger plusieurs valeurs `Set-Cookie`. Cela est beaucoup plus utile côté serveur, mais cela fonctionnerait également côté client.

```js
const enTetes = new Headers({
  "Set-Cookie": "name1=value1",
});

enTetes.append("Set-Cookie", "name2=value2");

enTetes.getSetCookie();
// Retourne ["name1=value1", "name2=value2"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [HTTP](/fr/docs/Web/HTTP)
- L'en-tête {{HTTPHeader("Set-Cookie")}}
