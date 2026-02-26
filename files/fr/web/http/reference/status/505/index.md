---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Reference/Status/505
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`505 HTTP Version Not Supported`** indique que la version HTTP utilisée dans la requête n'est pas prise en charge par le serveur.

Il est courant de voir cette erreur lorsqu'une ligne de requête est mal formée, comme `GET /chemin vers la ressource HTTP/1.1` ou avec `\n` pour terminer la ligne de requête au lieu de `\r\n`.
Par exemple, des intermédiaires comme les répartiteurs de charge peuvent ne pas gérer les lignes de requête d'une requête transmise, comme illustré dans l'exemple ci-dessous.

## Statut

```http
505 HTTP Version Not Supported
```

## Exemples

### Un 505 dû à une ligne de requête mal formée

Dans l'exemple suivant, un client demande `exemple.com/dog%20trainers`, mais en raison d'une configuration incorrecte du répartiteur de charge, la {{Glossary("Percent-encoding", "encodage pourcentage")}} dans l'URL n'est pas correctement traitée.
Dans ce cas, le serveur d'origine voit `trainers` au lieu de la version HTTP, et une réponse `505` est retournée à la place.
Un identifiant de requête est inclus dans le corps de la réponse pour illustrer une méthode pouvant aider les administrateur·ice·s de serveur à identifier la cause du problème&nbsp;:

```http
GET /dog trainers HTTP/1.1
Host: exemple.com
```

```http
HTTP/1.1 505 HTTP Version Not Supported
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>505 HTTP Version Not Supported</title>
</head>
<body>
  <h1>505 Version HTTP non prise en charge</h1>
  <p>Si ce problème persiste, veuillez <a href="https://exemple.com/support">contacter le support</a>.</p>
  <p>Les journaux du serveur contiennent des détails sur cette erreur avec l'identifiant de requête&nbsp;: ABC-123.</p>
</body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Upgrade")}}
