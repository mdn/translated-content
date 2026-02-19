---
title: En-tête Origin
short-title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Origin`** indique {{Glossary("origin", "l'origine")}} ([schéma](/fr/docs/Web/URI/Reference/Schemes), nom d'hôte et port) à l'origine de la requête.
Par exemple, si un agent utilisateur doit demander des ressources incluses dans une page, ou récupérées par des scripts qu'il exécute, alors l'origine de la page peut être incluse dans la requête.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Origin: null
Origin: <scheme>://<hostname>
Origin: <scheme>://<hostname>:<port>
```

## Directives

- `null`
  - : L'origine doit être protégée pour des raisons de confidentialité ou il s'agit d'une [origine opaque](/fr/docs/Glossary/Origin#origine_opaque) (les cas correspondants sont décrits dans la section [description](#description) ci-après).
- `<scheme>`
  - : Le protocole utilisé. Il s'agit généralement de HTTP ou de HTTPS.
- `<hostname>`
  - : Le nom de domaine ou l'adresse IP du serveur d'origine.
- `<port>` {{Optional_Inline}}
  - : Le numéro de port sur lequel écoute le serveur. Si aucun port n'est donné, c'est le port par défaut pour le protocole correspondant qui est utilisé (par exemple `443` pour une URL qui utiliserait le protocole HTTPS).

## Description

L'en-tête `Origin` est semblable à l'en-tête {{HTTPHeader("Referer")}}, mais ne contient pas le chemin de la ressource et peut valoir `null`.
Il est utilisé pour fournir le contexte de sécurité de la requête d'origine, sauf dans les cas où l'information de l'origine serait sensible ou superflue.

De façon générale, les agents utilisateurs ajoutent l'en-tête de requête `Origin` aux&nbsp;:

- Requêtes {{Glossary("CORS", "inter-origine")}}.
- Requêtes [de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy), sauf pour les requêtes {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} (c'est-à-dire qu'il est ajouté aux requêtes de même origine {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} et {{HTTPMethod("DELETE")}}).

Il existe quelques exceptions à ces règles&nbsp;; par exemple, si une requête {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} d'origine croisée est effectuée en [mode no-cors](/fr/docs/Web/API/Request/mode#value), l'en-tête `Origin` ne sera pas ajouté.

La valeur de l'en-tête `Origin` peut être `null` dans un certain nombre de cas, notamment (liste non exhaustive)&nbsp;:

- Les origines dont le [schéma](/fr/docs/Web/URI/Reference/Schemes) n'est pas `http`, `https`, `ftp`, `ws`, `wss` ou `gopher` (y compris `blob`, `file` et `data`).
- Les images et données multimédias d'origine croisée, y compris celles dans les éléments HTML {{HTMLElement("img")}}, {{HTMLElement("video")}} et {{HTMLElement("audio")}}.
- Les documents créés par programme à l'aide de {{DOMxRef("DOMImplementation.createDocument", "createDocument()")}}, générés à partir d'une URL `data:`, ou qui n'ont pas de contexte de navigation créateur.
- Les redirections entre origines.
- Les documents servis avec la directive `sandbox` de {{HTTPHeader("Content-Security-Policy")}} dont la valeur n'inclut pas `allow-same-origin`.
- Les {{HTMLElement("iframe", "cadres intégrés")}} avec un attribut sandbox dont la valeur n'inclut pas `allow-same-origin`.
- Les réponses qui sont des erreurs réseau.
- {{HTTPHeader("Referrer-Policy")}} défini à `no-referrer` pour les modes de requête non-`cors` (par exemple, les envois de formulaires basiques).

> [!NOTE]
> Une liste plus détaillée de ces cas avec `null` est présentée sur Stack Overflow&nbsp;: [Quand les navigateurs envoient-ils l'en-tête d'origine&nbsp;? Quand l'origine est-elle mise à nul&nbsp;? <sup>(angl.)</sup>](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

## Exemples

```http
Origin: https://developer.mozilla.org
```

```http
Origin: https://developer.mozilla.org:80
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Host")}}
- L'en-tête {{HTTPHeader("Referer")}}
- [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)
- [Quand les navigateurs envoient-ils l'en-tête d'origine&nbsp;? Quand l'origine est-elle mise à nul&nbsp;? <sup>(angl.)</sup>](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)
