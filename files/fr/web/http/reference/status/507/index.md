---
title: 507 Insufficient Storage
slug: Web/HTTP/Reference/Status/507
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`507 Insufficient Storage`** indique qu'une action n'a pas pu être effectuée car le serveur ne dispose pas d'assez d'espace de stockage disponible pour mener à bien la requête.

Ce code de statut a d'abord été utilisé dans le contexte de <i lang="en">Web Distributed Authoring and Versioning</i> ({{Glossary("WebDAV")}}), mais il s'est propagé à d'autres cas d'usage pour décrire des situations où les ressources du serveur sont épuisées.
Les causes courantes de cette erreur peuvent être des répertoires du serveur à court d'espace disponible, une mémoire vive insuffisante pour une opération, ou des limites internes atteintes (comme des limites de mémoire propres à une application, par exemple).
La requête à l'origine de cette erreur n'a pas nécessairement besoin d'inclure du contenu, car il peut s'agir d'une requête qui créerait une ressource sur le serveur si elle réussissait.

Ce problème est considéré comme temporaire, contrairement à un code {{HTTPStatus("413", "413 Content Too Large")}}, qui indique que la requête du client est trop volumineuse pour être traitée par le serveur, indépendamment des contraintes de ressources du serveur.

## Statut

```http
507 Insufficient Storage
```

## Exemples

### Réponse 507 indiquant un problème de stockage

La requête suivante tente de téléverser un fichier vers un serveur qui ne dispose pas d'assez d'espace de stockage disponible.
Le serveur répond avec un code `507` pour indiquer que ses ressources sont épuisées&nbsp;:

```http
POST /upload HTTP/1.1
Host: exemple.com
Content-Type: image/jpeg
Content-Length: 123456

[Données du fichier JPG]
```

```http
HTTP/1.1 507 Insufficient Storage
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 230

<html>
<head>
  <title>507 Insufficient Storage</title>
</head>
<body>
  <h1>Espace de stockage insuffisant</h1>
  <p>Le serveur est incapable de stocker la ressource incluse pour compléter la requête.</p>
  <p>Veuillez réessayer plus tard.</p>
</body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("413", "413 Content Too Large")}}
