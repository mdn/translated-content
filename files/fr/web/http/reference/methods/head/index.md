---
title: Méthode de requête HEAD
short-title: HEAD
slug: Web/HTTP/Reference/Methods/HEAD
original_slug: Web/HTTP/Methods/HEAD
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`HEAD`** demande les métadonnées d'une ressource sous la forme des [en-têtes](/fr/docs/Web/HTTP/Reference/Headers) que le serveur aurait envoyés si la méthode {{HTTPMethod("GET")}} avait été utilisée.
Cette méthode peut être utilisée dans les cas où une URL pourrait produire un téléchargement volumineux&nbsp;: par exemple, une requête `HEAD` permet de lire l'en-tête {{HTTPHeader("Content-Length")}} pour vérifier la taille du fichier avant de le télécharger avec une requête `GET`.

Si la réponse à une requête `HEAD` indique qu'une URL en cache est désormais obsolète, la copie en cache est invalidée même si aucune requête `GET` n'a été effectuée.

> [!WARNING]
> Si une réponse à une requête `HEAD` contient un corps, celui-ci doit être ignoré.
> Tout {{Glossary("Representation header", "en-tête de représentation")}} qui décrit ce corps erroné est supposé décrire le corps de la réponse qu'une requête `GET` aurait reçu.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Non</td>
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
      <th scope="row">{{Glossary("Cacheable", "Mis en cache")}}</th>
      <td>Oui</td>
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
HEAD <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifie la ressource cible de la requête lorsqu'elle est combinée avec l'information fournie par l'en-tête {{HTTPHeader("Host")}}.
    Il s'agit d'un chemin absolu (par exemple `/chemin/vers/fichier.html`) pour les requêtes vers un serveur d'origine et d'une URL absolue pour les requêtes vers les serveurs mandataires (<i lang="en">proxies</i>) (par exemple `http://www.exemple.fr/chemin/vers/fichier.html`).
- `<query>` {{Optional_Inline}}
  - : Un fragment de requête optionnel précédé d'un point d'interrogation `?`.
    Utilisé généralement pour fournir de l'information sous la forme de paires `clé=valeur`.

## Exemples

### Récupération réussie des métadonnées d'une ressource

La commande `curl` suivante crée une requête `HEAD` pour `exemple.fr`&nbsp;:

```bash
curl --head exemple.fr
```

C'est l'équivalent d'une requête `GET`, sauf que le serveur ne doit pas inclure de corps de message dans la réponse.
Cela crée une requête HTTP qui ressemble à&nbsp;:

```http
HEAD / HTTP/1.1
Host: exemple.fr
User-Agent: curl/8.6.0
Accept: */*
```

Le serveur renvoie une réponse {{HTTPStatus("200", "200 OK")}} composée uniquement d'en-têtes.
La réponse contient donc les métadonnées qui décrivent la ressource, et non la ressource elle-même (certains [en-têtes de cache](/fr/docs/Web/HTTP/Guides/Caching) sont omis dans cet exemple pour plus de clarté)&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Wed, 04 Sep 2024 10:33:11 GMT
Content-Length: 1234567
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- La méthode {{HTTPMethod("GET")}}
