---
title: 402 Payment Required
slug: Web/HTTP/Reference/Status/402
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`402 Payment Required`** est un code de statut de réponse **non standard** réservé à un usage futur.

Ce code de statut a été créé pour permettre la mise en place de systèmes de paiement numérique ou (micro)paiement et indiquerait que le contenu demandé n'est pas disponible tant que le client n'a pas effectué de paiement.
Il n'existe aucune convention d'utilisation standard et différents systèmes l'utilisent dans des contextes variés.

## Statut

```http
402 Payment Required
```

## Exemples

### Échec d'une API de paiement

Certaines API de paiement utilisent la réponse 402 comme solution générique pour les demandes de paiement échouées.
L'exemple suivant tente d'appeler une API de paiement à l'aide d'une requête POST pour initier une transaction&nbsp;:

```http
POST /merchant/transfers/payment HTTP/1.1
Host: payments.exemple.com
Content-Type: application/json
Content-Length: 402

{
  "payment_transfer": {
    "reference": "PAYMENT123456",
    "amount": "1337",
    "currency": "EUR",
    "sender_account_uri": "pan:5299920000000149;exp=2020-08;cvc=123",
    "sender": {
      "first_name": "Amelia",
      "middle_name": "Rosenburg",
      "email": "test123@sender.exemple.com"
    },
    "recipient": {
      "first_name": "Tyrone",
      "middle_name": "Johnston",
      "email": "test123@exemple.com",
      "merchant_id": "123"
    },
    "authentication_value": "ucaf:jJJLtQa+Iws8AREAEbjsA1MAAAA",
  }
}
```

Le serveur répond à la requête avec un code 402 s'il y a un problème avec la transaction, dans ce cas la carte est expirée&nbsp;:

```http
HTTP/1.1 402 Payment Required
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 175

{
  "error": {
    "code": "expired_card",
    "doc_url": "https://exemple.com/error-codes#expired-card",
    "message": "The card has expired. Verify expiration or use a different card.",
  }
}
```

## Spécifications

{{Specifications}}

## Notes de compatibilité

Ce code de statut est _réservé_ mais non défini.
Les implémentations réelles varient quant au format et au contenu de la réponse.
Aucun navigateur ne prend en charge le code 402, et une erreur s'affichera comme un code d'état générique `4xx`.

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [L'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)
