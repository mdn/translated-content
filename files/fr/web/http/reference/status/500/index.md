---
title: 500 Internal Server Error
slug: Web/HTTP/Reference/Status/500
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`500 Internal Server Error`** indique que le serveur a rencontré une condition inattendue qui l'a empêché de satisfaire la requête.
Cette erreur est une réponse générique «&nbsp;passe-partout&nbsp;» aux problèmes du serveur, indiquant que le serveur ne trouve pas de [erreur 5XX](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) plus appropriée à retourner.

Si vous êtes un·e visiteur·euse et voyez des erreurs `500` sur une page web, ces problèmes nécessitent une investigation par les propriétaires ou administrateur·ice·s du serveur.
Il existe de nombreuses causes possibles d'erreurs `500`, notamment&nbsp;: une configuration incorrecte du serveur, des problèmes de mémoire (OOM), des exceptions non gérées, des permissions de fichiers incorrectes ou d'autres facteurs complexes.
Les administrateur·ice·s de serveur peuvent consigner de manière proactive les occurrences de réponses d'erreur serveur, comme le code d'état `500`, avec des détails sur les requêtes à l'origine, afin d'améliorer la stabilité d'un service à l'avenir.

## Statut

```http
500 Internal Server Error
```

## Exemples

### Réponse d'erreur serveur 500

La requête suivante tente d'obtenir une page web, mais reçoit en retour une réponse 500.
Le corps de la réponse contient une page décrivant l'état du serveur avec un lien vers une page d'assistance pour les visiteur·euse·s.
Un identifiant est inclus dans le corps de la réponse pour illustrer une méthode pouvant aider les administrateur·ice·s de serveur à identifier la cause du problème&nbsp;:

```http
GET /highlights HTTP/1.1
Host: exemple.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 500 Internal Server Error
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="fr">
<head>
  <title>500 Internal Server Error</title>
</head>
<body>
  <h1>Erreur interne du serveur</h1>
  <p>Le serveur n'a pas pu traiter votre requête. Veuillez réessayer plus tard.</p>
  <p>Si ce problème persiste, veuillez <a href="https://exemple.com/support">contacter le support</a>.</p>
  <p>Les journaux du serveur contiennent des détails sur cette erreur avec l'identifiant de requête&nbsp;: ABC-123.</p>
</body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
