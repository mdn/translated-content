---
title: En-tête Keep-Alive
short-title: Keep-Alive
slug: Web/HTTP/Reference/Headers/Keep-Alive
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} et l'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Keep-Alive`** permettent à l'émetteur d'indiquer comment une connexion peut être utilisée en termes de délai d'expiration et de nombre maximal de requêtes.

> [!NOTE]
> Pour que `Keep-Alive` ait un effet, le message doit également inclure un en-tête {{HTTPHeader("Connection", "Connection: keep-alive")}}.

HTTP/1.0 ferme la connexion après chaque interaction requête/réponse par défaut, donc les connexions persistantes en HTTP/1.0 doivent être négociées explicitement.
Certain·e·s client·e·s et serveurs peuvent souhaiter être compatibles avec les approches précédentes des connexions persistantes, et peuvent le faire avec un en-tête de requête `Connection: keep-alive`.
Des paramètres supplémentaires pour la connexion peuvent être demandés avec l'en-tête `Keep-Alive`.

> [!WARNING]
> Les champs d'en-tête spécifiques à la connexion comme {{HTTPHeader("Connection")}} et `Keep-Alive` sont interdits en [HTTP/2 <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) et [HTTP/3 <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9114.html#header-formatting).
> Chrome et Firefox les ignorent dans les réponses HTTP/2, mais Safari respecte les exigences de la spécification HTTP/2 et ne charge aucune réponse qui les contient.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "en-tête de réponse")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Keep-Alive: <parameters>
```

## Directives

- `<parameters>`
  - : Une liste de paramètres séparés par des virgules, chacun consistant en un identifiant et une valeur séparés par le signe égal (`=`).
    Les identifiants suivants sont possibles&nbsp;:
    - `timeout`
      - : Un entier qui est le temps en secondes pendant lequel l'hôte autorisera une connexion inactive à rester ouverte avant d'être fermée.
        Une connexion est inactive si aucune donnée n'est envoyée ou reçue par un hôte. Un hôte peut garder une connexion inactive ouverte plus longtemps que le nombre de secondes indiqué par `timeout`, mais il doit essayer de la conserver au moins pendant cette durée.
    - `max`
      - : Un entier qui est le nombre maximal de requêtes pouvant être envoyées sur cette connexion avant de la fermer.
        Sauf si la valeur est `0`, cette valeur est ignorée pour les connexions non pipeline, car une autre requête sera envoyée dans la réponse suivante.
        Un pipeline HTTP peut l'utiliser pour limiter la mise en file des requêtes.

## Exemples

Une réponse contenant un en-tête `Keep-Alive`&nbsp;:

```http
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=200
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(corps)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Connection")}}
- [Gestion des connexions dans HTTP/1.x](/fr/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
