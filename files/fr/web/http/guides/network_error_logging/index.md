---
title: Journaliser les erreurs réseau (NEL)
short-title: Journaliser les erreurs réseau
slug: Web/HTTP/Guides/Network_Error_Logging
l10n:
  sourceCommit: 4877aae5dd61ffb22ba63bd0461d200087aa3543
---

{{SeeCompatTable}}

La journalisation des erreurs réseau est un mécanisme qui peut être configuré par _[l'en-tête de réponse](/fr/docs/Glossary/Response_header)_ HTTP {{HTTPHeader("NEL")}}. Cet en-tête expérimental permet aux sites web et aux applications de s'inscrire pour recevoir des rapports sur les échecs (et, si souhaité, les réussites) des requêtes réseau depuis les navigateurs compatibles.

Les rapports sont envoyés à un groupe de rapports défini dans un en-tête {{HTTPHeader("Report-To")}}.

## Utilisation

Les applications web peuvent s'inscrire à ce comportement avec l'en-tête NEL, qui est un objet _[encodé en JSON](/fr/docs/Glossary/Response_header)_&nbsp;:

```http
NEL: { "report_to": "nel",
       "max_age": 31556952 }
```

Une origine considérée comme sécurisée par le navigateur est requise.

Les clés d'objet suivantes peuvent être définies dans l'en-tête NEL&nbsp;:

- `report_to`
  - : Le groupe de [l'API Reporting](/fr/docs/Web/API/Reporting_API) auquel envoyer les rapports d'erreurs réseau (voir ci-dessous).
- `max_age`
  - : Définit la durée de vie de la politique, en secondes (de manière similaire aux politiques HSTS, par exemple, qui sont limitées dans le temps). Le groupe de rapports référencé doit avoir une durée de vie au moins aussi longue que celle de la politique NEL.
- `include_subdomains`
  - : Si `true`, cette politique NEL est également activée pour tous les sous-domaines de l'origine, mais uniquement pour les erreurs réseau qui se produisent lors de la résolution DNS. La politique NEL n'est pas activée pour les sous-domaines si `include_subdomains` n'est pas présent, est `false`, ou pour d'autres erreurs réseau (non liées au DNS). Le groupe de rapports doit également être configuré pour inclure les sous-domaines afin que cette option ait effet.
- `success_fraction`
  - : Une valeur flottante comprise entre 0 et 1 qui définit la proportion de requêtes réseau **réussies** à signaler. La valeur par défaut est 0, de sorte qu'aucune requête réseau réussie n'est signalée si la clé n'est pas présente dans la charge utile JSON.
- `failure_fraction`
  - : Une valeur flottante comprise entre 0 et 1 qui définit la proportion de requêtes réseau **échouées** à signaler. La valeur par défaut est 1, de sorte que toutes les requêtes réseau échouées sont signalées si la clé n'est pas présente dans la charge utile JSON.

Le groupe de rapport mentionné ci-dessus est défini de la manière habituelle dans l'en-tête {{HTTPHeader("Report-To")}}, par exemple&nbsp;:

```http
Report-To: { "group": "nel",
             "max_age": 31556952,
             "endpoints": [
              { "url": "https://example.com/csp-reports" }
             ]
           }
```

## Rapports d'erreurs

Dans ces exemples, le contenu de la réponse de l'API de reporting est affiché. La clé de premier niveau **`"body"`** contient le rapport d'erreur réseau.

### Réponse HTTP 400 (Bad Request)

```json
{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 338,
    "method": "POST",
    "phase": "application",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "192.0.2.172",
    "status_code": 400,
    "type": "http.error",
    "url": "https://example.com/bad-request"
  }
}
```

### Nom DNS non résolu

Notez que la phase est définie sur `dns` dans ce rapport et qu'aucune `server_ip` n'est disponible à inclure.

```json
{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 18,
    "method": "POST",
    "phase": "dns",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "",
    "status_code": 0,
    "type": "dns.name_not_resolved",
    "url": "https://example-host.com/"
  }
}
```

Le type d'erreur réseau peut être l'une des valeurs prédéfinies suivantes de la spécification, mais les navigateurs peuvent ajouter et envoyer leurs propres types d'erreurs&nbsp;:

- `dns.unreachable`
  - : Le serveur DNS de l'utilisateur·ice est inaccessible
- `dns.name_not_resolved`
  - : Le serveur DNS de l'utilisateur·ice a répondu mais n'a pas pu résoudre une adresse IP pour l'URI demandée.
- `dns.failed`
  - : La requête au serveur DNS a échoué pour des raisons non couvertes par les erreurs précédentes (par exemple, SERVFAIL)
- `dns.address_changed`
  - : Pour des raisons de sécurité, si l'adresse IP du serveur qui a livré le rapport original est différente de l'adresse IP actuelle du serveur au moment de la génération de l'erreur, les données du rapport sont réduites pour n'inclure que les informations sur ce problème et le type est défini sur `dns.address_changed`.
- `tcp.timed_out`
  - : La connexion TCP au serveur a expiré
- `tcp.closed`
  - : La connexion TCP a été fermée par le serveur
- `tcp.reset`
  - : La connexion TCP a été réinitialisée
- `tcp.refused`
  - : La connexion TCP a été refusée par le serveur
- `tcp.aborted`
  - : La connexion TCP a été interrompue
- `tcp.address_invalid`
  - : L'adresse IP est invalide
- `tcp.address_unreachable`
  - : L'adresse IP est inaccessible
- `tcp.failed`
  - : La connexion TCP a échoué pour des raisons non couvertes par les erreurs précédentes
- `http.error`
  - : L'agent utilisateur a reçu une réponse avec succès, mais elle a un code d'état [4xx <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#status.4xx) ou [5xx <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#status.5xx)
- `http.protocol.error`
  - : La connexion a été interrompue en raison d'une erreur de protocole HTTP
- `http.response.invalid`
  - : La réponse est vide, présente une incohérence de content-length, un encodage incorrect et/ou d'autres conditions qui empêchent l'agent utilisateur de traiter la réponse
- `http.response.redirect_loop`
  - : La requête a été interrompue en raison d'une boucle de redirection détectée
- `http.failed`
  - : La connexion a échoué en raison d'erreurs dans le protocole HTTP non couvertes par les erreurs précédentes

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
