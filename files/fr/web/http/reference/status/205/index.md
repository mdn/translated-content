---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`205 Reset Content`** indique que la requête a été traitée avec succès et que le client doit réinitialiser l'affichage du document.

Cette réponse est destinée à des cas où l'utilisateur·ice reçoit un contenu permettant la saisie de données, soumet des données modifiées dans une requête, et le contenu doit être réinitialisé pour la prochaine saisie.
L'instruction «&nbsp;réinitialiser le contenu&nbsp;» peut signifier vider le contenu d'un formulaire, réinitialiser l'état d'un canevas ou rafraîchir une interface&nbsp;; l'implémentation dépend du client.

> [!NOTE]
> Dans les applications web qui utilisent le statut `205`, il est supposé que le client gère la réinitialisation du contenu après une réponse `205`.
> Cela se fait généralement via JavaScript, car la réinitialisation de contenu comme les formulaires après une réponse `205` n'est pas gérée nativement par les navigateurs.

Notez que la réponse ne doit inclure aucun contenu ni l'en-tête {{HTTPHeader("Content-Length")}} (les navigateurs peuvent rejeter les réponses qui incluent du contenu).
La réponse vide peut aussi être indiquée à l'aide de l'en-tête {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}} avec un bloc vide.

## Statut

```http
205 Reset Content
```

## Exemples

### Réinitialisation d'un formulaire après réception d'un `205 Reset Content`

Dans cet exemple, le client envoie une requête `POST` pour soumettre un formulaire avec le commentaire `Bonjour !`&nbsp;:

```http
POST /submit HTTP/1.1
Host: exemple.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Bonjour !
```

Après le traitement réussi de la soumission du formulaire, le serveur répond avec la réponse `205` suivante, indiquant que le client doit réinitialiser le formulaire.

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Spécifications

{{Specifications}}

## Voir aussi

- Le code de satut HTTP {{HTTPStatus(204, "204 No Content")}}
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
