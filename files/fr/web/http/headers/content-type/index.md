---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
tags:
  - HTTP
  - Reference
  - en-tête
translation_of: Web/HTTP/Headers/Content-Type
---
{{HTTPSidebar}}

L'en-tête **`Content-Type`** sert à indiquer le type MIME de la ressource.

Dans les réponses, un en-tête `Content-Type` indique au client le type de contenu réellement renvoyé. Il peut arriver que les navigateurs cherchent à détecter le type MIME du contenu en l'inspectant plutôt qu'en respectant la valeur de cet en-tête. Pour empêcher ce comportement, on peut paramétrer l'en-tête {{HTTPHeader("X-Content-Type-Options")}} avec la valeur `nosniff`.

Dans les requêtes, (telles que {{HTTPMethod("POST")}} ou {{HTTPMethod("PUT")}}), le client indique au serveur quel type de données a réellement été envoyé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>En-tête d'entité</td>
    </tr>
    <tr>
      <th scope="row">Nom d'en-tête interdit</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">En-tête de réponse simple pour le CORS</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Content-Type: text/html; charset=utf-8
    Content-Type: multipart/form-data; boundary=something

## Directives

- `media-type`
  - : Le [type MIME](/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types) de la ressource ou des données.
- `charset`
  - : L'encodage utilisé pour les caractères des données.
- `boundary`
  - : Pour les entités fragmentées (_multipart_), la directive `boundary` est nécessaire. Elle ne se termine pas par un espace et est composée de 1 à 70 caractères qui proviennent d'un ensemble de caractères connus pour ne pas être transformés/modifiés par les différents composants au travers desquels transitent les emails. Cette directive est utilisée afin d'encapsuler les limites des différents fragments d'un message fragmenté.

## Exemples

### `Content-Type` dans les formulaires HTML

Dans une requête {{HTTPMethod("POST")}}, qui vient d'une soumission d'un formulaire HTML, le `Content-Type` de la requête est précisé par l'attribut `enctype` de l'élément {{HTMLElement("form")}}.

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="du texte">
  <input type="file" name="monFichier">
  <button type="submit">Envoyer</button>
</form>
```

La requête ressemble à peu près à ceci (les en-têtes moins intéressants ont été ici volontairement omis) :

    POST /toto HTTP/1.1
    Content-Length: 68137
    Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575
    Content-Disposition: form-data; name="description"

    ---------------------------974767299852498929531610575

    du texte par ici

    ---------------------------974767299852498929531610575
    Content-Disposition: form-data; name="monFichier"; filename="toto.txt"
    Content-Type: text/plain

    (contenu du fichier envoyé en ligne toto.txt)

    ---------------------------974767299852498929531610575

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7233", "Content-Type in multipart", "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests        |
| {{RFC("7231", "Content-Type", "3.1.1.5")}}             | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité selon les navigateurs

{{Compat("http/headers/content-type")}}

## Voir aussi

- {{HTTPHeader("Accept")}} et {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPHeader("X-Content-Type-Options")}}
