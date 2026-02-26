---
title: En-tête Early-Data
short-title: Early-Data
slug: Web/HTTP/Reference/Headers/Early-Data
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{SeeCompatTable}}

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Early-Data`** est défini par un intermédiaire pour indiquer que la requête a été transmise dans les [données précoces TLS](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3), et indique également que l'intermédiaire comprend le code d'état {{HTTPStatus("425", "425 Too Early")}}.

Si un client a récemment interagi avec un serveur, les données précoces (aussi appelées à [données (0-RTT)](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3) zéro aller-retour) permettent au client d'envoyer des données à un serveur dès le premier aller-retour d'une connexion, sans attendre la fin de [l'établissement TLS](/fr/docs/Glossary/TCP_handshake).
Cela réduit la latence pour les connexions répétées entre un client et un serveur, mais a des implications de sécurité, car les données précoces sont vulnérables aux attaques par rejeu.

L'en-tête `Early-Data` n'est **pas** défini par l'initiateur de la requête (c'est-à-dire un navigateur).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Early-Data: 1
```

## Exemples

### Une requête GET avec un en-tête `Early-Data`

Un client qui souhaite utiliser les données précoces peut envoyer des requêtes HTTP immédiatement après avoir envoyé le `ClientHello` TLS.
Envoyer une requête dans les données précoces implique que le client est prêt à réessayer une requête en réponse à un code d'état {{HTTPStatus("425", "425 Too Early")}}, donc l'en-tête `Early-Data` n'est pas inclus&nbsp;:

```http
GET /resource HTTP/1.1
Host: example.com
```

Un intermédiaire qui transmet une requête avant la fin de l'établissement TLS avec son client l'envoie avec l'en-tête `Early-Data` défini à `1`&nbsp;:

```http
GET /resource HTTP/1.1
Host: example.com
Early-Data: 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le code de statut {{HTTPStatus("425", "425 Too Early")}}
- [Attaques par rejeu sur le 0-RTT <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc8446#appendix-E.5)
