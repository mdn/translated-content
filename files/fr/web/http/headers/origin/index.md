---
title: Origin
slug: Web/HTTP/Headers/Origin
tags:
  - Reference
translation_of: Web/HTTP/Headers/Origin
---
{{HTTPSidebar}}

L’en-tête de requête **`Origin`** indique la provenance de la requête. Il n’inclut aucune information de chemin, seulement le nom du serveur. Il est envoyé avec les requêtes {{Glossary("CORS")}}, ainsi que les requêtes {{HTTPMethod("POST")}}. Il est similaire à l’en-tête {{HTTPHeader("Referer")}}, mais, contrairement à ce dernier, il n’inclut pas le chemin complet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d’en-tête</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Origin: ""
    Origin: <scheme> "://" <hostname> [ ":" <port> ]

`Origin` peut être une chaîne vide : c’est utile, par exemple, si la source est une `data` URL.

## Directives

- \<scheme>
  - : Le protocole utilisé. Il s’agit en général du protocole HTTP ou de sa version sécurisée, HTTPS.
- \<hostname>
  - : Le nom de domaine du serveur (for virtual hosting) ou l’IP.
- \<port> {{optional_inline}}
  - : Un numéro de port TCP sur lequel le serveur écoute. Si aucun port n’est donné, le port par défaut pour le service demandé (p. ex. `80` pour une URL HTTP) est supposé.

## Exemples

    Origin: https://developer.mozilla.org

## Spécifications

| Spécification                                                            | Commentaire                                                 |
| ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| {{RFC("6454", "Origin", "7")}}                                 | Le concept de Web Origin                                    |
| {{SpecName('Fetch','#origin-header','Origin header')}} | Remplace l’en-tête `Origin` tel que défini dans la RFC6454. |

## Compatibilité des navigateurs

{{Compat("http.headers.Origin")}}

## Voir aussi

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- La [Same-origin policy](/fr/docs/Web/Security/Same-origin_policy)
