---
title: En-tête Idempotency-Key
short-title: Idempotency-Key
slug: Web/HTTP/Reference/Headers/Idempotency-Key
l10n:
  sourceCommit: 2da6c8a65715a0ce3785e88d8e293c8dc786cb49
---

{{SeeCompatTable}}

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Idempotency-Key`** peut être utilisé pour rendre les requêtes {{Glossary("idempotent", "idempotentes")}} {{HTTPMethod("POST")}} et {{HTTPMethod("PATCH")}}.

Cela permet aux clients de renvoyer des requêtes non reconnues sans avoir à se soucier du fait que la requête a déjà été reçue et traitée par le serveur.

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
Idempotency-Key: <key>
```

## Directives

- `<key>`
  - : Clé unique pour une requête particulière.
    Le format est défini par le serveur.

## Description

Les méthodes HTTP {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, et {{HTTPMethod("OPTIONS")}} sont idempotentes.
Cela signifie que vous pouvez envoyer un message avec ces méthodes autant de fois que vous le souhaitez et que l'état du serveur ne sera pas modifié, ou sera modifié de la même manière à chaque réception du message.
Par exemple, si vous envoyez plusieurs fois le même message `PUT`, il mettra à jour la même ressource sur le serveur à chaque fois, avec la même valeur.

Les méthodes {{HTTPMethod("POST")}} et {{HTTPMethod("PATCH")}} ne sont pas idempotentes, ce qui signifie que l'état du serveur peut changer à chaque réception du message.
Contrairement à un message `PUT`, si vous envoyez plusieurs fois la même requête `POST`, le serveur peut créer une nouvelle ressource pour chaque requête réussie.
De même, un `PATCH` reflète une modification par rapport à un état particulier, et cet état est modifié à chaque application du patch.

L'idempotence est importante dans les cas où un client ne reçoit pas de réponse, car cela signifie qu'il peut renvoyer la requête sans craindre d'effets secondaires.

L'en-tête HTTP `Idempotency-Key` permet à un client de rendre les requêtes `POST` et `PATCH` idempotentes en leur attribuant un identifiant unique (une clé).
Le client peut alors renvoyer la même requête plusieurs fois, et le serveur saura qu'il ne doit effectuer l'action qu'une seule fois.

### Responsabilités du client

Le JavaScript côté client doit ajouter l'en-tête `Idempotency-Key` dans les requêtes fetch pour les points de terminaison qui l'exigent, avec une clé conforme aux exigences publiées par le serveur.

Une clé unique doit être utilisée pour chaque nouvelle requête envoyée, et la même clé doit être utilisée si cette requête est renvoyée.

### Responsabilités du serveur

Les serveurs qui prennent en charge l'en-tête `Idempotency-Key` doivent documenter et publier leur prise en charge, y compris les points de terminaison qui exigent l'en-tête, ainsi que toutes les exigences concernant la clé (telles que la longueur, la méthode de calcul et l'expiration).

Notez que le serveur peut choisir de faire expirer les clés reçues au fil du temps&nbsp;; le comportement d'expiration des clés doit être défini et documenté afin que les clients puissent effectuer des requêtes conformes.

#### Empreinte d'idempotence

Une clé unique est attendue pour chaque requête.

Pour se protéger contre la réutilisation de clés par les clients pour de nouvelles requêtes, un serveur peut créer et stocker une «&nbsp;empreinte d'idempotence&nbsp;» de la requête en plus de la clé.
Il s'agit d'un hachage de tout ou partie d'une requête qui peut être comparé à d'autres requêtes utilisant la même clé.

Si l'empreinte d'idempotence est prise en charge, le serveur peut envoyer une réponse d'erreur si la même clé a une empreinte différente.

#### Traitement de la requête

Lorsqu'un serveur reçoit une requête `POST` ou `PATCH` avec un `Idempotency-Key` sur un point de terminaison qui l'exige, il doit vérifier s'il a déjà reçu une requête avec cette clé.

- Si ce n'est pas le cas, le serveur doit effectuer l'opération et répondre, puis stocker la clé.
- Si c'est le cas, il ne doit pas effectuer l'opération, mais doit répondre comme s'il l'avait fait.

Les serveurs qui utilisent une empreinte d'idempotence doivent également générer et stocker une empreinte pour chaque nouvelle requête.
Cela sera utilisé pour répondre par une erreur si une clé et une empreinte ultérieures ne correspondent pas.

Si une requête est reçue sans `Idempotency-Key` sur un point de terminaison qui l'exige, le serveur doit répondre par une erreur.

#### Réponses d'erreur du serveur

Un serveur doit fournir des réponses d'erreur dans les cas suivants&nbsp;:

- {{HTTPStatus("400", "400 Bad Request")}}&nbsp;: L'en-tête est omis pour un point de terminaison documenté comme l'exigeant.
- {{HTTPStatus("409", "409 Conflict")}}&nbsp;: Une requête avec la même clé est en cours de traitement.
- {{HTTPStatus("422", "422 Unprocessable Content")}}&nbsp;: La clé est déjà utilisée pour une autre charge utile de requête (si l'empreinte d'idempotence est prise en charge).

Dans le cas d'une réponse `409 Conflict`, les clients devront attendre avant de réessayer.
Pour toutes les autres erreurs, les clients devront modifier les requêtes avant de les renvoyer.

La spécification n'impose pas de format pour la charge utile de la réponse d'erreur, mais les erreurs doivent contenir un lien vers une documentation spécifique à l'implémentation expliquant l'erreur.
Le format de charge utile JSON décrit dans {{RFC(9457, "Problem Details for HTTP APIs")}} est une option.
Par exemple, la réponse suivante peut être utilisée pour une clé manquante&nbsp;:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/problem+json
Content-Language: fr

{
    "type": "https://developer.exemple.com/idempotency/docs",
    "title": "Idempotency-Key manquante",
    "detail": "Cette opération est idempotente et nécessite l'utilisation correcte de la clé d'idempotence.",
}
```

## Exemples

### Une requête `POST` avec une clé

Le message suivant montre une requête `POST` pour créer un·e nouvel·le utilisateur·ice.
La clé `9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d` est une valeur unique qui correspond aux exigences publiées par l'hôte (exemple.com ne prend pas en charge cet en-tête, la valeur est donc fictive).

```http
POST /api/users HTTP/1.1
Host: exemple.com
Content-Type: application/json
Idempotency-Key: 9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d

{
  "user_id": "12345",
  "name": "Sharma Chow",
  "email": "sharmac@exemple.com"
}
```

Si aucune réponse n'est reçue, le client peut renvoyer exactement la même requête en toute sécurité. Si le serveur n'a pas reçu la requête précédente, il agira sur celle-ci&nbsp;; s'il l'a déjà reçue, la seconde sera ignorée, mais le serveur répondra comme s'il avait traité la seconde normalement.

Si le client renvoie la requête trop rapidement, il peut recevoir une réponse d'erreur comme celle-ci.
Notez que seul le code de statut HTTP est imposé, le reste des informations est défini par le serveur.

```http
HTTP/1.1 409 Conflict
Content-Type: application/problem+json
Content-Language: fr

{
    "type": "https://exemple.com/idempotency/docs",
    "title": "Le serveur traite la requête précédente.",
    "detail": "Une requête avec la même clé est actuellement/en cours de traitement.",
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
