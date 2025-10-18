---
title: Méthode de requête PATCH
short-title: PATCH
slug: Web/HTTP/Reference/Methods/PATCH
original_slug: Web/HTTP/Methods/PATCH
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`PATCH`** applique des modifications partielles à une ressource.

`PATCH` est en quelque sorte analogue au concept de « mise à jour » que l'on trouve dans {{Glossary("CRUD")}} (en général, HTTP est différent de {{Glossary("CRUD")}}, et il ne faut pas les confondre).

Par rapport à {{HTTPMethod("PUT")}}, un `PATCH` sert d'instructions pour modifier une ressource, tandis que `PUT` représente un remplacement complet de la ressource.
Une requête `PUT` est toujours {{Glossary("idempotent", "idempotente")}} (répéter la même requête plusieurs fois résulte en la ressource restant dans le même état), alors qu'une requête `PATCH` n'est pas toujours idempotente.
Par exemple, si une ressource inclut un compteur auto-incrémenté, une requête `PUT` écrasera le compteur (puisqu'elle remplace toute la ressource), mais une requête `PATCH` peut ne pas le faire.

Comme {{HTTPMethod("POST")}}, une requête `PATCH` peut potentiellement avoir des effets secondaires sur d'autres ressources.

Un serveur peut indiquer la prise en charge de `PATCH` en l'ajoutant à la liste dans l'en-tête {{HTTPHeader("Allow")}} ou {{HTTPHeader("Access-Control-Allow-Methods")}} (pour [CORS](/fr/docs/Web/HTTP/Guides/CORS)).
Une autre indication implicite que `PATCH` est pris en charge est l'en-tête {{HTTPHeader("Accept-Patch")}} (généralement après une requête {{HTTPMethod("OPTIONS")}} sur une ressource), qui liste les types de médias que le serveur peut comprendre dans une requête `PATCH` pour une ressource.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Peut-être</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sûre")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotente")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Mis en cache")}}</th>
      <td>Seulement si des informations de fraîcheur sont incluses</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans <a href="/fr/docs/Learn_web_development/Extensions/Forms">les formulaires HTML</a>
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
PATCH <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifie la ressource cible de la requête, combinée avec l'information fournie dans l'en-tête {{HTTPHeader("Host")}}.
    Il s'agit d'un chemin absolu (par exemple, `/chemin/vers/fichier.html`) pour les requêtes vers un serveur d'origine, et d'une URL absolue pour les requêtes vers un proxy (par exemple, `http://www.exemple.fr/chemin/vers/fichier.html`).
- `<query>` {{Optional_Inline}}
  - : Un composant de requête optionnel précédé d'un point d'interrogation `?`.
    Souvent utilisé pour transmettre des informations d'identification sous forme de paires `clé=valeur`.

## Exemples

### Modification réussie d'une ressource

Supposons qu'il existe une ressource sur le serveur représentant un utilisateur avec un identifiant numérique `123` au format suivant&nbsp;:

```json
{
  "firstName": "Exemple",
  "LastName": "Utilisateur",
  "userId": 123,
  "signupDate": "2024-09-09T21:48:58Z",
  "status": "actif",
  "registeredDevice": {
    "id": 1,
    "name": "personnel",
    "manufacturer": {
      "name": "Matériel corp"
    }
  }
}
```

Au lieu d'envoyer un objet JSON pour écraser entièrement une ressource, un `PATCH` ne modifie que certaines parties de la ressource.
Cette requête met à jour le champ `status`&nbsp;:

```http
PATCH /users/123 HTTP/1.1
Host: exemple.fr
Content-Type: application/json
Content-Length: 27
Authorization: Bearer ABC123

{
  "status": "suspendu"
}
```

L'interpretation et l'authentification de la requête `PATCH` dépendent de l'implémentation.
Le succès peut être indiqué par n'importe quel [code de réponse réussi](/fr/docs/Web/HTTP/Reference/Status#successful_responses).
Dans cet exemple, un {{HTTPStatus("204", "204 No Content")}} est utilisé car il n'est pas nécessaire de transmettre un corps avec des informations supplémentaires sur l'opération.
Un en-tête {{HTTPHeader("ETag")}} est fourni pour que l'appelant puisse effectuer une [requête conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests) ultérieurement&nbsp;:

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Le navigateur n'utilise pas la méthode `PATCH` pour les actions initiées par l'utilisateur·ice, donc la « compatibilité navigateur » ne s'applique pas.
Les développeur·euse·s peuvent utiliser cette méthode via {{DOMxRef("Window.fetch", "fetch()")}}.

## Voir aussi

- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("204")}}
- Les en-têtes {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} - spécifie les formats de document patch acceptés par le serveur
- [Générateur JSON Patch <sup>(angl.)</sup>](https://jsoning.com/jsonpatch/)
