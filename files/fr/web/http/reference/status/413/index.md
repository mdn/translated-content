---
title: 413 Payload Too Large
slug: Web/HTTP/Reference/Status/413
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`413 Content Too Large`** indique que l'entité de la requête dépasse les limites définies par le serveur.
Le serveur peut fermer la connexion ou retourner un en-tête {{HTTPHeader("Retry-After")}}.

Avant {{RFC("9110")}}, la phrase de réponse pour ce statut était **`Payload Too Large`**.
Ce message reste largement utilisé.

## Statut

```http
413 Content Too Large
```

## Exemples

### Limite de téléversement de fichier dépassée

L'exemple suivant montre ce qu'un client peut envoyer lorsqu'un élément [`<input type="file">`](/fr/docs/Web/HTML/Reference/Elements/input/file) inclut une image lors de la soumission d'un formulaire avec `method="post"`&nbsp;:

```http
POST /upload HTTP/1.1
Host: exemple.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...(binary data)
------Boundary1234--
```

Le serveur peut rejeter le téléversement s'il existe une restriction sur la taille maximale des fichiers qu'il accepte, et le corps de la réponse inclut un champ `message` avec des informations contextuelles&nbsp;:

```http
HTTP/1.1 413 Content Too Large
Content-Type: application/json
Content-Length: 97

{
  "error": "Upload failed",
  "message": "Maximum allowed upload size is 4MB",
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Connection")}}
- L'en-tête HTTP {{HTTPHeader("Retry-After")}}
