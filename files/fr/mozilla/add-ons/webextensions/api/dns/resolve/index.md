---
title: dns.resolve()
slug: Mozilla/Add-ons/WebExtensions/API/dns/resolve
tags:
  - API
  - Add-ons
  - DNS
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - resolve
translation_of: Mozilla/Add-ons/WebExtensions/API/dns/resolve
---
{{AddonSidebar()}}

Résout le nom d'hôte donné en un enregistrement DNS.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var resolving = browser.dns.resolve(
  hostname,    // string
  flags        // array of string
)
```

### Paramètres

- `hostname`
  - : `string`. Le nom d'hôte à résoudre.
- `flags` {{optional_inline}}

  - : `array` de `string`. Drapeaux pour modifier la façon dont le nom d'hôte est résolu. Tous les indicateurs omis sont par défaut à `false`. Vous pouvez passer zéro ou plusieurs des indicateurs suivants :

    - `"allow_name_collisions"`: autorise les résultats de collision de noms qui sont normalement filtrés.
    - `"bypass_cache"`: Supprime le cache de recherche DNS interne.
    - `"canonical_name"`: Le nom canonique de l'hôte spécifié sera interrogé.
    - `"disable_ipv4"`: Seules les adresses IPv6 seront renvoyées.
    - `"disable_ipv6"`: Seules les adresses IPv4 seront renvoyées.
    - `"disable_trr"`: n'utilisez pas le TRR (Trusted Recursive Resolver) pour résoudre le nom d'hôte. Un TRR permet la résolution des noms d'hôtes à l'aide d'un serveur [DNS-over-HTTPS](https://tools.ietf.org/html/draft-ietf-doh-dns-over-https-02) dédié.
    - `"offline"`: seuls les littéraux et les entrées mises en cache seront renvoyés.
    - `"priority_low"`: La priorité est donnée à la requête. Si "priority_medium" est également donné, la requête est prioritaire.
    - `"priority_medium"`: La priorité est donnée à la requête. Si "priority_low" est également donné, la requête est prioritaire
    - `"speculate"`: Indique que la requête est spéculative. Les demandes spéculatives renvoient des erreurs si la prélecture est désactivée par la configuration du navigateur.

### Valeur retournée

A [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promisee) qui sera remplie avec un objet `DNSRecord` object. Cet objet peut contenir les propriétés suivantes :

- `addresses`
  - : `array` of `string`. Les adresses IP associées à cet enregistrement DNS.
- `canonicalName`
  - : `string`. Le nom canonique de cet enregistrement. Ceci n'est inclus dans la réponse que si le drapeau `"canonical_name"`a été passé à  `resolve()`.
- `isTRR`
  - : `boolean`: `true` si l'enregistrement a été récupéré à l'aide d'un TRR (Trusted Recursive Resolver).

## Exemples

```js
function resolved(record) {
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("example.com");
resolving.then(resolved);

// > e.g. Array [ "73.284.240.12" ]
```

Contournez le cache et demandez le nom canonique:

```js
function resolved(record) {
  console.log(record.canonicalName);
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("developer.mozilla.org",
                                   ["bypass_cache", "canonical_name"]);
resolving.then(resolved);

// > e.g. xyz.us-west-2.elb.amazonaws.com
// > e.g. Array [ "78.18.187.134", "34.79.135.234" ]
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.dns.resolve")}}
