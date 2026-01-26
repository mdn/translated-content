---
title: 503 Service Unavailable
slug: Web/HTTP/Reference/Status/503
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`503 Service Unavailable`** indique que le serveur n'est pas prêt à traiter la requête.

Les causes courantes sont un serveur en maintenance ou en surcharge.
Pendant la maintenance, les administrateur·ice·s de serveur peuvent temporairement rediriger tout le trafic vers une page `503`, ou cela peut se produire automatiquement lors de mises à jour logicielles.
En cas de surcharge, certaines applications côté serveur rejettent les requêtes avec un statut `503` lorsque des seuils de ressources comme la mémoire, le processeur ou le nombre de connexions sont atteints.
Le rejet des requêtes entrantes crée une pression qui empêche l'épuisement des ressources de calcul du serveur, évitant ainsi des défaillances plus graves.
Si les requêtes de certains clients sont limitées en raison de la {{Glossary("Rate_limit", "limitation de débit")}}, la réponse appropriée est {{HTTPStatus("429", "429 Too Many Requests")}}.

Cette réponse doit être utilisée pour des conditions temporaires et l'en-tête HTTP {{HTTPHeader("Retry-After")}} doit, si possible, contenir le temps estimé avant la reprise du service.

Une page conviviale expliquant le problème doit être envoyée avec cette réponse.

> [!NOTE]
> Les en-têtes relatifs au cache envoyés avec cette réponse nécessitent une attention particulière&nbsp;; un code `503` indique un problème temporaire et ces réponses ne doivent généralement pas être mises en cache, car les clients pourraient recevoir des pages d'erreur obsolètes après la résolution du problème.

## Statut

```http
503 Service Unavailable
```

## Exemples

### Réponse d'erreur serveur 503

La requête suivante tente d'obtenir une page web, mais reçoit en retour une réponse `503`.
Le corps de la réponse contient une page décrivant l'état du serveur avec un lien vers une page d'assistance pour les visiteurs.
Un identifiant est inclus dans le corps de la réponse pour illustrer une méthode pouvant aider les administrateur·ice·s de serveur à identifier la cause du problème&nbsp;:

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 503 Service Unavailable
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="fr">
<head>
  <title>503 Service Unavailable</title>
</head>
<body>
  <h1>503 Service indisponible</h1>
  <p>Le serveur n'a pas pu traiter votre requête. Veuillez réessayer plus tard.</p>
  <p>Si ce problème persiste, veuillez <a href="https://example.com/support">contacter le support</a>.</p>
  <p>Les journaux du serveur contiennent des détails sur cette erreur avec l'identifiant de requête&nbsp;: ABC-123.</p>
</body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Retry-After")}}
