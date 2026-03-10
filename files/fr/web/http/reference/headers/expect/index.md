---
title: En-tête Expect
short-title: Expect
slug: Web/HTTP/Reference/Headers/Expect
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Expect`** indique qu'il y a des attentes qui doivent être satisfaites par le serveur afin de traiter la requête complète avec succès.

Lorsqu'une requête contient un en-tête `Expect: 100-continue`, le serveur envoie une réponse {{HTTPStatus("100", "100 Continue")}} pour indiquer qu'il est prêt ou capable de recevoir le reste du contenu de la requête.
Attendre une réponse `100` peut être utile si un client anticipe une erreur probable, par exemple lors de l'envoi d'opérations modifiant l'état sans authentification préalable vérifiée.

Une réponse {{HTTPStatus("417", "417 Expectation Failed")}} est renvoyée si le serveur ne peut pas satisfaire l'attente, ou tout autre statut dans le cas contraire (par exemple, un statut [4XX](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) pour une erreur côté client, ou un statut [2XX](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) si la requête peut être résolue avec succès sans traitement supplémentaire).

Aucun des navigateurs les plus courants n'envoie l'en-tête `Expect`, mais certains clients (outils en ligne de commande) le font par défaut.

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
Expect: 100-continue
```

## Directives

Il n'existe qu'une seule attente définie&nbsp;:

- `100-continue`
  - : Informe les destinataires que le client s'apprête à envoyer un corps de message (probablement volumineux) dans cette requête et souhaite recevoir une réponse intermédiaire {{HTTPStatus("100", "100 Continue")}}.

## Exemples

### Corps de message volumineux

Un client envoie une requête avec l'en-tête `Expect` et attend la réponse du serveur avant d'envoyer le corps du message.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Le serveur vérifie les en-têtes et génère la réponse, où une {{HTTPStatus("100", "100 Continue")}} indique au client d'envoyer le corps du message&nbsp;:

```http
HTTP/1.1 100 Continue
```

Le client termine la requête en envoyant les données réelles&nbsp;:

```http
[Données vidéo comme contenu pour la requête PUT]
```

## Spécifications

{{Specifications}}

## Voir aussi

- Le code de statut {{HTTPStatus("417", "417 Expectation Failed")}}
- Le code de statut {{HTTPStatus("100", "100 Continue")}}
