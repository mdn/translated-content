---
title: En-tête Content-Type
short-title: Content-Type
slug: Web/HTTP/Reference/Headers/Content-Type
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L' HTTP **`Content-Type`** est utilisé pour indiquer le {{Glossary("MIME type", "type de média")}} original d'une ressource avant qu'un encodage de contenu ne soit appliqué.

Dans les réponses, l'en-tête `Content-Type` informe le client du type de média des données retournées.
Dans les requêtes telles que {{HTTPMethod("POST")}} ou {{HTTPMethod("PUT")}}, le client utilise l'en-tête `Content-Type` pour définir le type de contenu envoyé au serveur.
Si une implémentation ou une configuration serveur est stricte concernant la gestion du type de contenu, une réponse d'erreur client {{HTTPStatus("415")}} peut être retournée.

L'en-tête `Content-Type` diffère de {{HTTPHeader("Content-Encoding")}} en ce que `Content-Encoding` aide le destinataire à comprendre comment décoder les données vers leur forme originale.

> [!NOTE]
> Cette valeur peut être ignorée si les navigateurs effectuent de la [détection MIME](/fr/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) (ou de la détection de contenu) sur les réponses.
> Pour empêcher les navigateurs d'utiliser le MIME sniffing, définissez la valeur de l'en-tête {{HTTPHeader("X-Content-Type-Options")}} à `nosniff`.
> Consultez [Vérification du type MIME](/fr/docs/Web/Security/Practical_implementation_guides/MIME_types) pour plus de détails.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Representation header", "En-tête de représentation")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé pour le CORS")}}
      </th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête autorisé pour le CORS")}}
      </th>
      <td>
        Oui*
      </td>
    </tr>
  </tbody>
</table>

\* Les valeurs ne peuvent pas contenir un [octet d'en-tête de requête non sécurisé pour le CORS <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte)&nbsp;: `"():<>?@[\]{},`, supprimer `0x7F`, et les caractères de contrôle `0x00` à `0x19` sauf Tabulation `0x09`.
La valeur doit aussi avoir un type de média analysé (en ignorant les paramètres) qui soit `application/x-www-form-urlencoded`, `multipart/form-data` ou `text/plain`.

## Syntaxe

```plain
Content-Type: <media-type>
```

Par exemple&nbsp;:

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=ExampleBoundaryString
```

## Directives

- `<media-type>`
  - : Le [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types) de la ressource ou des données.
    Peut contenir les paramètres suivants&nbsp;:
    - **`charset`**&nbsp;: Indique le standard {{Glossary("character encoding", "d'encodage des caractères")}} utilisé.
      La valeur n'est pas sensible à la casse, mais la forme minuscule est préférée.
    - **`boundary`**&nbsp;: Pour les entités fragmentées (_multipart_), le paramètre `boundary` est requis.
      Il sert à délimiter les différentes parties du message.
      La valeur est composée de 1 à 70 caractères (ne se terminant pas par un espace) connus pour être robustes dans le contexte de différents systèmes (par exemple, les passerelles email).
      Souvent, la limite d'en-tête est précédée de deux tirets dans le corps de la requête, et la limite finale a deux tirets ajoutés à la fin.

## Exemples

### Diffuser les ressources avec le bon type de contenu

Dans les deux exemples de réponses suivants, les ressources JavaScript et CSS sont diffusées avec `text/javascript` pour JavaScript et `text/css` pour CSS.
Le type de contenu correct pour ces ressources aide le navigateur à les traiter de façon plus sécurisée et avec de meilleures performances.
Voir [Configurer correctement les types MIME du serveur](/fr/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types) pour plus d'informations.

```http
HTTP/1.1 200
content-encoding: br
content-type: text/javascript; charset=utf-8
vary: Accept-Encoding
date: Fri, 21 Jun 2024 14:02:25 GMT
content-length: 2978

const videoPlayer=document.getElementById...
```

```http
HTTP/3 200
server: nginx
date: Wed, 24 Jul 2024 16:53:02 GMT
content-type: text/css
vary: Accept-Encoding
content-encoding: br

.super-container{clear:both;max-width:100%}...
```

### `Content-Type` dans les formulaires `multipart`

Dans une requête {{HTTPMethod("POST")}} issue de la soumission d'un formulaire HTML, le `Content-Type` de la requête est précisé par l'attribut `enctype` de l'élément HTML {{HTMLElement("form")}}.

```html
<form action="/toto" method="post" enctype="multipart/form-data">
  <input
    type="text"
    name="description"
    value="Description de la valeur du champ" />
  <input type="file" name="monFichier" />
  <button type="submit">Envoyer</button>
</form>
```

La requête ressemble à peu près à l'exemple suivant, certains en-têtes ayant été omis pour plus de clarté.
Dans la requête, une limite `ExampleBoundaryString` est utilisée à titre d'exemple, mais en pratique, le navigateur génère une chaîne plus proche de `---------------------------1003363413119651595289485765`.

```http
POST /toto HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=ExampleBoundaryString

--ExampleBoundaryString
Content-Disposition: form-data; name="description"

Description input value
--ExampleBoundaryString
Content-Disposition: form-data; name="monFichier"; filename="toto.txt"
Content-Type: text/plain

[contenu du fichier toto.txt choisi par l'utilisateur·ice]
--ExampleBoundaryString--
```

### `Content-Type` dans les soumissions de formulaires encodés dans l'URL

Quand les formulaires ne comportent pas de téléversement de fichiers et utilisent des champs simples, les formulaires encodés dans l'URL peuvent être plus pratiques, car les données du formulaire sont incluses dans le corps de la requête&nbsp;:

```html
<form action="/submit" method="post">
  <label for="comment">Commentaire&nbsp;:</label>
  <input type="text" id="comment" name="comment" value="Bonjour !" />
  <button type="submit">Enoyver</button>
</form>
```

```http
POST /submit HTTP/1.1
Host: exemple.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Bonjour%20!
```

### `Content-Type` dans une API REST utilisant JSON

De nombreuses API {{Glossary("REST")}} utilisent `application/json` comme type de contenu, ce qui est pratique pour la communication entre machines ou l'interaction programmée.
L'exemple suivant montre une réponse {{HTTPStatus("201", "201 Created")}} illustrant le résultat d'une requête réussie&nbsp;:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "Nouvel utilisateur créé",
  "user": {
    "id": 123,
    "firstName": "Sandra",
    "lastName": "Smith",
    "email": "s.smith@exemple.com"
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les en-têtes {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
- L'en-tête {{HTTPHeader("Vary")}}
- L'en-tête {{HTTPHeader("Content-Encoding")}}
- L'en-tête {{HTTPHeader("Content-Disposition")}}
- Le code de statut {{HTTPStatus("206", "206 Partial Content")}}
- L'en-tête {{HTTPHeader("X-Content-Type-Options")}}
