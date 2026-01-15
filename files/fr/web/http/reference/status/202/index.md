---
title: 202 Accepted
slug: Web/HTTP/Reference/Status/202
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`202 Accepted`** indique qu'une requête a été acceptée pour traitement, mais que ce traitement n'est pas terminé ou n'a peut-être pas encore commencé.
Le traitement effectif de la requête n'est pas garanti&nbsp;; une tâche ou une action peut échouer ou être refusée lorsque le serveur tente de la traiter.

Une réponse `202` est non-engageante, ce qui signifie qu'il n'existe aucun moyen d'envoyer ultérieurement une réponse HTTP asynchrone pour indiquer le résultat du traitement.
Ce code de réponse est généralement utilisé lorsque la requête est traitée par un autre processus ou serveur, ou lorsque les requêtes sont traitées par lots.

## Statut

```http
202 Accepted
```

## Exemples

### Démarrer une tâche automatisée

Dans l'exemple suivant, nous souhaitons lancer un processus d'automatisation pour envoyer un courriel aux propriétaires de chiens concernant une tâche de ramassage&nbsp;:

```http
POST /tasks HTTP/1.1
Host: exemple.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

La réponse indique que la demande de démarrage de la tâche a été acceptée pour traitement.
Une URL est envoyée dans le corps de la réponse afin que le client puisse suivre l'évolution du statut de la tâche&nbsp;:

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "message": "Demande acceptée. Démarrage du traitement de la tâche.",
  "taskId": "123",
  "monitorUrl": "http://exemple.com/tasks/123/status"
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Accept")}}
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
