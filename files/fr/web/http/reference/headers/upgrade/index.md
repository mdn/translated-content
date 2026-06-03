---
title: En-tête Upgrade
short-title: Upgrade
slug: Web/HTTP/Reference/Headers/Upgrade
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} et {{Glossary("response header", "de réponse")}} HTTP **`Upgrade`** peuvent être utilisés pour basculer une connexion client/serveur déjà établie sur un autre protocole (en conservant le même protocole de transport). Par exemple, un client peut utiliser cet en-tête pour mettre à niveau une connexion HTTP/1.1 vers HTTP/2, ou une connexion HTTP(S) vers une connexion WebSocket.

> [!WARNING]
> HTTP/2 interdit explicitement l'usage de cet en-tête et de ce mécanisme. Il est réservé à HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
       {{Glossary("request header", "En-tête de requête")}},
       {{Glossary("response header", "en-tête de réponse")}}
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
Upgrade: <protocol>[/<protocol_version>]
Upgrade: <protocol>[/<protocol_version>], …, <protocolN>[/<protocol_versionN>]
```

## Directives

- `<protocol>`
  - : Les protocoles sont listés, séparés par des virgules, par ordre de préférence décroissant.
- `<protocol_version>` {{Optional_Inline}}
  - : Une version de protocole optionnelle peut être fournie, précédée d'une `/` (barre oblique).

## Description

L'en-tête `Upgrade` peut être utilisé par les clients pour inviter un serveur à basculer sur l'un des protocoles indiqués dans na liste triée par ordre de préférence décroissant.
Un client peut par exemple envoyer la requête `GET` suivante, indiquant les protocoles préférés vers lesquels basculer (ici, `exemple/1`, puis `toto/2`)&nbsp;:

```http
GET /index.html HTTP/1.1
Host: www.exemple.com
Connection: upgrade
Upgrade: exemple/1, toto/2
```

> [!NOTE]
> L'en-tête {{HTTPHeader("Connection")}} avec le type `Upgrade` doit _toujours_ être envoyé avec l'en-tête `Upgrade`.

Le serveur est libre d'ignorer la requête et répondre alors comme si l'en-tête `Upgrade` n'a pas été envoyé (par exemple avec un statut {{HTTPStatus(200, "200 OK")}}).
Si le serveur décide de mettre à niveau la connexion, il doit&nbsp;:

1. Renvoyer une réponse avec le statut {{HTTPStatus(101, "101 Switching Protocols")}} et qui contient un en-tête `Upgrade` indiquant le(s) protocole(s) sur le(s)quel(s) basculer. Par exemple&nbsp;:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: toto/2
   Connection: Upgrade
   ```

2. Envoyer une réponse à la requête originelle _en utilisant le nouveau protocole_ (le serveur ne peut basculer sur un protocole que s'il est en mesure de répondre à la requête originelle avec celui-ci).

Un serveur peut également envoyer cet en-tête lors d'une réponse {{HTTPStatus("426")}} `Upgrade Required` pour indiquer que le serveur ne traitera pas la requête avec le protocole actuel, mais peut le faire si le protocole est changé. Le client peut alors initier un changement de protocole comme vu ci-avant.

Pour plus de détails et d'exemples, voir [l'article sur le mécanisme de mise à niveau du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

## Exemples

### L'en-tête `Upgrade` avec plusieurs protocoles

La requête suivante liste plusieurs protocoles par ordre de préférence décroissant&nbsp;:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Passer à `WebSocket`

Ceci est une combinaison courante d'en-têtes utilisée pour commencer à mettre à niveau une connexion HTTP vers WebSockets.
Voir [Passer à une connexion WebSocket](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#basculer_sur_une_connexion_websocket) pour plus d'informations.

```http
Connection: Upgrade
Upgrade: websocket
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Mécanisme de mise à niveau du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- Le code de statut {{HTTPStatus(101, "101 Switching Protocols")}}
- Le code de statut {{HTTPStatus(426, "426 Upgrade Required")}}
- L'en-tête {{HTTPHeader("Connection")}}
