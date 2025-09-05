---
title: 408 Request Timeout
slug: Web/HTTP/Reference/Status/408
original_slug: Web/HTTP/Status/408
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de réponse HTTP **`408 Request Timeout`** est [une erreur côté client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) qui indique que le serveur souhaiterait clôturer cette connexion inutilisée. Un `408` est envoyé sur une connexion inactive par certains serveurs, _même sans aucune demande précédente par le client_.

Un serveur doit envoyer l'en-tête [`Connection: close`](/fr/docs/Web/HTTP/Reference/Headers/Connection) en réponse, puisque `408` implique que le serveur a décidé de fermer la connexion plutôt que de continuer à attendre.

Cette réponse est de plus en plus utilisée depuis que certains navigateurs, comme Chrome, Firefox 27+ ou IE9, utilisent le mécanisme HTTP de pré-connexion qui permet d'accélérer la navigation.

> [!NOTE]
> Certains serveurs ferment purement et simplement la connexion, sans renvoyer ce message.

## Statut

```
408 Request Timeout
```

## Exemples

### Délai d'expiration dans la soumission d'un formulaire

L'exemple suivant montre ce qu'un client peut envoyer lorsqu'un élément `<input type="file">` utilise une image sur la soumission de formulaire avec `method="post"`&nbsp;:

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...(binary data)
------Boundary1234--
```

Si les données ne sont pas reçues en totalité en raison de problèmes de réseau ou de latence, le serveur peut mettre fin à la connexion.
Les clients peuvent répéter la demande et une nouvelle connexion sera utilisée&nbsp;:

```http
HTTP/1.1 408 Request Timeout
Content-Type: text/html

<html>
<head>
    <title>408 Request Timeout</title>
</head>
<body>
    <h1>408 Request Timeout</h1>
    <p>Failed to process request in time. Please try again.</p>
</body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les [codes de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [`Connection`](/fr/docs/Web/HTTP/Reference/Headers/Connection)
- [`X-DNS-Prefetch-Control`](/fr/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)
