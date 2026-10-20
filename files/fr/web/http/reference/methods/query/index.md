---
title: Méthode de requête QUERY
short-title: QUERY
slug: Web/HTTP/Reference/Methods/QUERY
l10n:
  sourceCommit: 2a973f388561148f5a8001e572dac8143c5a5914
---

La méthode HTTP `QUERY` initie une requête côté serveur. Elle demande que la ressource cible traite le contenu de la requête de manière sûre et idempotente, en renvoyant le résultat dans la réponse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sûre")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotente")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Mise en cache")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisé dans les <a href="/fr/docs/Learn_web_development/Extensions/Forms">formulaires HTML</a>
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
QUERY <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifie la ressource cible qui traite la requête lorsqu'elle est combinée avec les informations fournies dans l'en-tête {{HTTPHeader("Host")}}.
    Il s'agit d'un chemin absolu (par exemple, `/path/to/resource`) dans les requêtes à un serveur d'origine, et d'une URL absolue dans les requêtes aux mandataires (par exemple, `https://example.com/path/to/resource`).
- `<query>` {{Optional_Inline}}
  - : Une composante de requête URI optionnelle précédée d'un point d'interrogation (`?`).
    Cela aide à identifier la ressource interrogée&nbsp;; le contenu de la requête et son type de média définissent la requête réelle.

## Description

La méthode `QUERY` demande à la ressource cible d'exécuter une opération de requête dans son propre périmètre et de retourner le résultat. Cela contraste avec {{HTTPMethod("GET")}}, qui demande une représentation de la ressource identifiée par l'URI cible.
Le contenu de la requête et son {{HTTPHeader("Content-Type")}} définissent la requête&nbsp;; la ressource cible détermine sur quoi la requête est exécutée, par exemple une table de base de données, un index de recherche ou une collection exposée par une API.

Comme la requête transite dans le contenu de la requête plutôt que dans l'URI, elle n'est pas limitée par les contraintes de longueur et d'encodage qui s'appliquent à une composante de requête URI.
Elle est également moins largement exposée qu'une requête dans l'URI&nbsp;; voir [Considérations de sécurité](#considérations_de_sécurité) pour plus de détails.

`QUERY` n'est pas un remplacement de `GET` dans tous les cas.
Lorsque la requête est suffisamment petite pour tenir dans l'URI, `GET` reste un bon choix&nbsp;: il produit une URL qui peut être mise en favori, liée et mise en cache sans travail supplémentaire.
`QUERY` est particulièrement utile lorsque l'URI devient impraticable, par exemple pour des requêtes volumineuses ou structurées comme une instruction SQL ou une expression JSONPath, ou pour des requêtes qui ne doivent pas être exposées dans l'URI.

En transportant du contenu, `QUERY` ressemble à {{HTTPMethod("POST")}}, mais contrairement à `POST`, elle est explicitement {{Glossary("Safe/HTTP", "sûre")}} et {{Glossary("Idempotent", "idempotente")}}.
Un client ne demande ni n'attend aucun changement de la ressource cible&nbsp;; vous pouvez donc réessayer les requêtes `QUERY` après une défaillance de connexion sans craindre d'effets supplémentaires.

### Découvrir la prise en charge

Une ressource annonce la prise en charge de `QUERY` comme pour toute autre méthode, par la méthode {{HTTPMethod("OPTIONS")}} et l'en-tête de réponse {{HTTPHeader("Allow")}}.

Un client peut interroger une ressource pour connaître ses options comme ceci&nbsp;:

```http
OPTIONS /contacts HTTP/1.1
Host: example.org
```

La ressource peut répondre ainsi pour indiquer qu'elle accepte les requêtes `QUERY`&nbsp;:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
```

Un client peut envoyer la requête `QUERY` sans savoir si elle est prise en charge.
Le serveur la traite soit normalement, soit répond avec {{HTTPStatus(405, "405 Method Not Allowed")}}, accompagné d'un en-tête `Allow` listant les méthodes qu'il prend en charge.

Les _formats_ de requête acceptés par une ressource sont annoncés séparément, par l'en-tête de réponse {{HTTPHeader("Accept-Query")}}.
Le client peut lire les formats acceptés à partir de l'en-tête `Accept-Query`.

Par exemple, une ressource peut annoncer les formats qu'elle accepte ainsi&nbsp;:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
Accept-Query: application/x-www-form-urlencoded, application/sql
```

Un client peut alors envoyer une requête `QUERY` dans l'un de ces formats&nbsp;:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/sql
Accept: application/json

SELECT surname, email FROM contacts LIMIT 10
```

Alternativement, le client peut envoyer la requête `QUERY` avec le format souhaité et lire les types de médias pris en charge à partir de l'en-tête {{HTTPHeader("Accept")}} de la réponse {{HTTPStatus(415, "415 Unsupported Media Type")}} résultante.

### Types de médias et réponses d'erreur

Un serveur doit rejeter une requête `QUERY` dont le {{HTTPHeader("Content-Type")}} est manquant ou incohérent avec le contenu de la requête.
Les serveurs ne peuvent pas deviner le type de média à partir du contenu lui-même. La réponse dépend de la manière dont la requête est mal formée&nbsp;:

- {{HTTPStatus(400, "400 Bad Request")}}&nbsp;: La requête ne contient aucune information sur le type de média, ou le type de média déclaré est incohérent avec le contenu réel.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}&nbsp;: Le type de média n'est pas pris en charge par la ressource. Cela inclut les cas où le type est compris en général mais n'a aucun sens en tant que requête pour cette ressource.
- {{HTTPStatus(422, "422 Unprocessable Content")}}&nbsp;: Le type de média est compris, et le contenu correspond à ce type, mais la requête elle-même ne peut pas être traitée — par exemple, une requête SQL syntaxiquement valide faisant référence à une table qui n'existe pas.
- {{HTTPStatus(406, "406 Not Acceptable")}}&nbsp;: Le client a demandé un type de média de réponse avec {{HTTPHeader("Accept")}} que la ressource ne peut pas produire.

### Ressources équivalentes

La _ressource équivalente_ d'une requête `QUERY` est une ressource qui répond à `GET` et représente la requête `QUERY`, y compris sa cible et son contenu.
Son objectif est de permettre à un client de répéter la même requête plus tard avec une simple requête `GET`, sans retourner le contenu de la requête.
En effet, c'est la ressource à laquelle `QUERY` s'adresse, avec le contenu de la requête intégré dans son identité.

La ressource équivalente existe toujours conceptuellement, mais les serveurs ne sont pas obligés de lui attribuer un URI.
Lorsqu'un serveur la représente à un URI, une réponse réussie à une requête `QUERY` peut y faire référence, ainsi qu'à une copie stockée du résultat, au moyen de deux en-têtes différents&nbsp;:

- {{HTTPHeader("Content-Location")}}&nbsp;: Identifie une ressource contenant **le résultat de la requête vient d'être effectuée**.
  Un `GET` vers cet URI récupère à nouveau les mêmes résultats.
- {{HTTPHeader("Location")}}&nbsp;: Identifie la ressource équivalente, qui **relance la même requête**.
  Un `GET` vers cet URI répète l'opération sur les données actuelles sans retourner le contenu de la requête&nbsp;; par conséquent, le résultat peut différer de la réponse originale.

Aucune de ces ressources n'est garantie d'être permanente.
Si une requête ultérieure vers l'une d'elles échoue, le client peut revenir à la répétition de la requête `QUERY` originale avec son contenu initial.

Comme ces URI représentent une requête, un serveur traitant un contenu de requête sensible doit les générer sans intégrer de partie sensible du contenu.
Si ce n'est pas le cas, la requête est retournée dans une URI, perdant ainsi l'avantage de confidentialité décrit dans [Considérations de sécurité](#considérations_de_sécurité).

### Redirection

Un serveur peut répondre à une requête `QUERY` de manière indirecte en redirigeant le client.
Avec {{HTTPStatus(301, "301 Moved Permanently")}}, {{HTTPStatus(308, "308 Permanent Redirect")}}, {{HTTPStatus(302, "302 Found")}} ou {{HTTPStatus(307, "307 Temporary Redirect")}}, le client est censé envoyer une requête `QUERY` similaire à l'URI indiqué dans {{HTTPHeader("Location")}}.
Historiquement, les clients suivant une redirection {{HTTPStatus(301)}} ou {{HTTPStatus(302)}} ont été autorisés à transformer une requête `POST` en requête `GET`.
Cela ne s'applique **pas** à `QUERY`&nbsp;: pour les quatre codes de statut ci-dessus, la requête redirigée reste une requête `QUERY` avec le même contenu.

Une réponse {{HTTPStatus(303, "303 See Other")}} signifie que la requête peut plutôt être satisfaite par un simple `GET` vers l'URI indiqué dans `Location`.
Le `303` lui-même n'inclut pas de résultat de requête, permettant au serveur de retourner une ressource équivalente sans calculer la réponse en incise.

### Requêtes conditionnelles

A représentation sélectionnée d'une requête `QUERY` est la même que celle d'un `GET` vers sa ressource équivalente.
Une requête `QUERY` conditionnelle se comporte donc comme prévu&nbsp;: les résultats de la requête sont retournés uniquement si la condition dans des en-têtes tels que {{HTTPHeader("If-None-Match")}} ou {{HTTPHeader("If-Modified-Since")}} est remplie&nbsp;; un {{HTTPStatus("304", "304 Not Modified")}} est retourné sinon.
Cela permet à un client de relancer une requête coûteuse tout en évitant le coût de transfert d'un résultat inchangé.

### Mise en cache

Les réponses à une requête `QUERY` sont {{Glossary("cacheable", "mises en cache")}}, mais la clé de cache doit intégrer le contenu de la requête et ses métadonnées associées, car l'URI de la requête seule n'identifie plus la requête.
Un cache doit donc lire l'intégralité du contenu de la requête avant de pouvoir faire correspondre une réponse stockée, ce qui rend la mise en cache des requêtes `QUERY` plus complexe que celle des requêtes `GET`.
Les serveurs dont les réponses dépendent du contenu de la requête l'indiquent avec l'en-tête {{HTTPHeader("Vary")}}.
`Vary` indique aux caches que la réponse dépend de plus que de l'URI. Dans l'exemple suivant, une réponse stockée ne peut être réutilisée que pour une requête dont les valeurs des champs d'en-tête listés correspondent.

```http
Vary: Accept-Query, Content-Encoding, Content-Type
```

Pour améliorer leur taux de réussite, les caches peuvent normaliser les différences sémantiquement insignifiantes dans le contenu de la requête avant de dériver la clé, comme la suppression d'un encodage de contenu.
Cette normalisation n'est sûre que si elle correspond à la manière dont la ressource elle-même interprète le contenu.
Un cache qui normalise de manière incorrecte, ou d'une manière qui diffère sensiblement de la ressource, peut traiter deux requêtes comme équivalentes alors qu'elles ne le sont pas et servir la mauvaise réponse.
Un client qui doit empêcher la normalisation peut envoyer {{HTTPHeader("Cache-Control")}} avec la directive `no-transform`, bien que la directive ne soit que consultative.

Lorsqu'une réponse fournit un en-tête `Location` identifiant une ressource équivalente, les clients peuvent passer à `GET` pour les requêtes ultérieures et se fier à la mise en cache ordinaire des `GET` à la place.

### Considérations de sécurité

`QUERY` transporte ses données d'entrée dans le contenu de la requête plutôt que dans l'URI.
Une URI est plus susceptible d'être enregistrée ou autrement traitée par des intermédiaires que le contenu de la requête, donc déplacer une requête hors de l'URI réduit sa diffusion.
Pour cette raison, `QUERY` doit être privilégié par rapport à `GET` pour les requêtes confidentielles.

Cet avantage ne tient que si le reste de l'échange le préserve&nbsp;; notez les contraintes sur les [URI de ressources équivalentes](#ressources_équivalentes) et la [normalisation du cache](#mise_en_cache) décrites ci-dessus.

## Exemples

### Interroger une collection

La requête suivante interroge une collection de contacts.
Le contenu de la requête sélectionne trois champs, limite la réponse à dix résultats et filtre les contacts par adresse courriel&nbsp;:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Accept: application/json

select=surname,givenName,email&limit=10&email=%2A%40example.%2A
```

Une réponse réussie inclut le résultat de la requête dans le contenu de la réponse&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "surname": "Smith",
    "givenName": "Sandra",
    "email": "smith@example.org"
  },
  {
    "surname": "Biche",
    "givenName": "Jean",
    "email": "jean.biche@example.com"
  }
]
```

### Réutiliser un résultat et répéter une requête

Un serveur peut retourner à la fois {{HTTPHeader("Content-Location")}} et {{HTTPHeader("Location")}} avec le résultat, offrant deux ressources différentes adressables par `GET`&nbsp;: une copie stockée de ce résultat, et la [ressource équivalente](#ressources_équivalentes), qui relance la requête&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Location: /contacts/stored-results/17
Location: /contacts/stored-queries/42
Last-Modified: Sat, 25 Aug 2012 23:34:45 GMT

[
  {
    "surname": "Smith",
    "givenName": "Sandra",
    "email": "smith@example.org"
  },
  {
    "surname": "Biche",
    "givenName": "Jean",
    "email": "jean.biche@example.com"
  }
]
```

Un `GET` de l'URI `Content-Location` retourne le résultat stocké de cette requête particulière, inchangé&nbsp;:

```http
GET /contacts/stored-results/17 HTTP/1.1
Host: example.org
Accept: application/json
```

Un `GET` de l'URI `Location` relance la requête, de sorte que le résultat reflète les données actuelles.
Ici, un contact a été supprimé depuis la requête originale, et la réponse comporte un {{HTTPHeader("ETag")}} à utiliser dans les requêtes conditionnelles ultérieures&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Last-Modified: Sun, 17 Nov 2024 16:12:01 GMT
ETag: "42-1"

[
  {
    "surname": "Smith",
    "givenName": "Sandra",
    "email": "smith@example.org"
  }
]
```

Une requête `GET` conditionnelle ultérieure envoyant `If-None-Match: "42-1"` retourne {{HTTPStatus(304, "304 Not Modified")}} si le résultat est inchangé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

La compatibilité des navigateurs n'est pas pertinente pour cette méthode.
Les navigateurs n'ont pas de support d'intégration spécifique pour `QUERY`&nbsp;: elle n'est pas envoyée pour les actions initiées par l'utilisateur·ice comme les envois de formulaires HTML, et les navigateurs ne l'envoient pas automatiquement en réponse à d'autres en-têtes ou mécanismes.

Les développeur·euse·s peuvent émettre une requête `QUERY` en utilisant [`fetch()`](/fr/docs/Web/API/Window/fetch).
Notez que comme `QUERY` n'est pas l'une des méthodes CORS considérées comme sûres, les requêtes inter-origines déclenchent une requête [CORS](/fr/docs/Web/HTTP/Guides/CORS) préliminaire {{HTTPMethod("OPTIONS")}}, de la même manière que pour les autres méthodes non simples.

## Voir aussi

- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- L'en-tête {{HTTPHeader("Accept-Query")}}
- Les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("POST")}}
- L'en-tête {{HTTPHeader("Content-Type")}}
- Les en-têtes {{HTTPHeader("Content-Location")}} et {{HTTPHeader("Location")}}
- L'en-tête {{HTTPHeader("Allow")}}
- L'en-tête {{HTTPHeader("Vary")}}
- Le code de statut {{HTTPStatus(415, "415 Unsupported Media Type")}}
