---
title: Upgrade
slug: Web/HTTP/Reference/Headers/Upgrade
original_slug: Web/HTTP/Headers/Upgrade
l10n:
  sourceCommit: 53b19adf7936b1830f407813c3252b35c5eb925e
---

L'en-tête HTTP **`Upgrade`**, réservé à HTTP/1.1, peut être utilisé pour basculer une connexion client/serveur déjà établie sur un autre protocole (en conservant le même protocole de transport). Un client pourra par exemple utiliser cet en-tête pour demander la mise à niveau de la connexion HTTP/1.1 en HTTP/2 ou le passage d'une connexion HTTP ou HTTPS à une connexion WebSocket.

> [!WARNING]
> HTTP/2 interdit explicitement l'usage de cet en-tête et de ce mécanisme. Il est réservé à HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td><a href="/fr/docs/Glossary/Request_header">En-tête de requête</a>, <a href="/fr/docs/Glossary/Response_header">en-tête de réponse</a>.</td>
    </tr>
    <tr>
      <th scope="row"><a href="/fr/docs/Glossary/Forbidden_header_name">Nom d'en-tête interdit</a></th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Description

L'en-tête `Upgrade` pourra être utilisé par les clients pour inviter un serveur à basculer sur l'un des protocoles indiqués dans na liste triée par ordre de préférence décroissant.

Un client pourra par exemple envoyer la requête `GET` suivante, indiquant les protocoles préférés vers lesquels basculer (ici, `exemple/1`, puis `toto/2`)&nbsp;:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: exemple/1, toto/2
```

> [!NOTE]
> L'en-tête [`Connection: upgrade`](/fr/docs/Web/HTTP/Reference/Headers/Connection) doit être présent lorsqu'`Upgrade` est envoyé.

Le serveur est libre d'ignorer la requête et répondre alors comme si l'en-tête `Upgrade` n'avait pas été envoyé (par exemple avec [un statut `200 OK`](/fr/docs/Web/HTTP/Reference/Status/200)).

Si le serveur décide de mettre à niveau la connexion, il doit&nbsp;:

1. Renvoyer une réponse avec [le statut `101 Switching Protocols`](/fr/docs/Web/HTTP/Reference/Status/101) et qui contient un en-tête `Upgrade` indiquant le(s) protocole(s) sur le(s)quel(s) basculer. Par exemple&nbsp;:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: toto/2
   Connection: Upgrade
   ```

2. Envoyer une réponse à la requête originelle _en utilisant le nouveau protocole_ (le serveur ne peut basculer sur un protocole que s'il est en mesure de répondre à la requête originelle avec celui-ci).

Un serveur pourra également envoyer cet en-tête lors d'une réponse [`426 Upgrade Required`](/fr/docs/Web/HTTP/Reference/Status/426) pour indiquer que le serveur ne traitera pas la requête avec le protocole actuel, mais pourrait le faire si le protocole était changé. Le client peut alors initier un changement de protocole comme vu ci-avant.

Pour plus de détails et d'exemples, voir [l'article sur le mécanisme de mise à niveau du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

## Syntaxe

```http
Connection: upgrade
Upgrade: protocol_name[/protocol_version]
```

Notes&nbsp;:

- L'en-tête [`Connection`](/fr/docs/Web/HTTP/Reference/Headers/Connection) doit _toujours_ être envoyé avec la valeur `upgrade` lorsque l'en-tête `Upgrade` est envoyé.
- Les protocoles indiqués en valeurs forment une liste, séparée par des virgules, et triée par ordre de préférence décroissant. La version du protocole est optionnelle. Par exemple&nbsp;:

```http
Connection: upgrade
Upgrade: un_protocole/1, exemple, un_autre_protocole/2.2
```

## Directives

Une liste de noms de protocoles (avec une version optionnelle), séparés par des virgules. La liste est triée par ordre de préférence décroissant.

## Exemples

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

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
- [`101 Switching Protocol`](/fr/docs/Web/HTTP/Reference/Status/101)
- [`426 Upgrade Required`](/fr/docs/Web/HTTP/Reference/Status/426)
- [`Connection`](/fr/docs/Web/HTTP/Reference/Headers/Connection)
