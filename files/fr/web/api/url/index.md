---
title: URL
slug: Web/API/URL
tags:
  - API
  - References
  - URL
translation_of: Web/API/URL
---
{{ApiRef("URL API")}}

L'interface **`URL`** représente un objet qui fournit des méthodes statiques utilisées pour créer des URL d'objet.

Lors de l'utilisation d'un agent utilisateur dans lequel aucun constructeur n'a encore été implémenté, il est possible d'accéder à un objet en utilisant les propriétés {{domxref("Window.URL")}} (préfixées sur un navigateur basé sur Webkit tel que `Window.webkitURL`).

{{AvailableInWorkers}}

## Utilisation

Le constructeur prend un paramètre url et un paramètre de base facultatif à utiliser comme base si le paramètre url est une URL relative :

```js
const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

Les propriétés de l'URL peuvent être définies pour construire l'URL :

```js
url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"
```

Les URL seront encodées selon la norme RFC 3986:

```js
url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

L'interface {{domxref("URLSearchParams")}}  peut être utilisée pour construire et manipuler la chaîne de requête de l'URL.

Pour obtenir les paramètres de recherche à partir de l'URL de la fenêtre en cours :

```js
// https://some.site/?id=123
var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // 123
```

La méthode `stringifier` de l' `URL` est la propriété `href` , ainsi le constructeur peut être utilisé pour normaliser et encoder directement une URL :

```js
const response = await fetch(new URL('http://www.example.com/démonstration.html'));
```

## Constructeur

- {{domxref("URL.URL", "URL()")}} {{experimental_inline}}
  - : Crée et retourne un objet `URL`  composé des paramètres donnés.

## Propriétés

- {{domxref("URL.hash")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant un `'#'` suivi de l'identifiant du fragment de l'URL.
- {{domxref("URL.host")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant l'hôte, c'est-à-dire le _hostname (nom d'hôte)_, `':'`et le _port_ de l'URL.
- {{domxref("URL.hostname")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant le domaine de l'URL.
- {{domxref("URL.href")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant l'URL entière.

<!---->

- {{domxref("URL.origin")}} {{readonlyInline}}
  - : Retourne une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant l'origine de l'URL, c'est son schéma, son domaine et son port .

<!---->

- {{domxref("URL.password")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant le mot de passe spécifié avant le nom du domaine.

<!---->

- {{domxref("URL.pathname")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant une barre oblique initiale `'/'`suivie du chemin de l'URL.

<!---->

- {{domxref("URL.port")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant le numéro de port de l'URL.

<!---->

- {{domxref("URL.protocol")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant le schéma du protocole de l'URL, y compris le final `':'`.
- {{domxref("URL.search")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant un `'?'` suivi par les paramètres de l'URL.
- {{domxref("URL.searchParams")}}
  - : Retourne un objet {{domxref("URLSearchParams")}}  permettant d'accéder aux arguments de requête GET contenus dans l'URL.
- {{domxref("URL.username")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant le nom d'utilisateur spécifié avant le nom de domaine.

## Méthodes

L'interface `URL` implémente les méthodes définies dans _{{domxref("URLUtils")}}._

- {{domxref("URLUtils.toString()")}}
  - : Retourne une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant l'URL entière. C'est un synonyme de {{domxref("URLUtils.href")}}, mais il ne peut pas être utilisé pour modifier la valeur.
- {{domxref("URL.toJSON()")}}
  - : Retourne une {{domxref("DOMString")}}   _(chaîne de caractères)_ contenant l'URL entière. Il retourne la même chaîne que la propriété `href` .

## Méthodes statiques

- {{ domxref("URL.createObjectURL()") }}
  - : Retourne une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant un "blob URL" unique ; c'est une URL avec `blob :` son schéma suivi d'une chaîne opaque identifiant de manière unique l'objet dans le navigateur.
- {{ domxref("URL.revokeObjectURL()") }}
  - : Révoque un objet URL précédemment créé avec {{domxref ("URL.createObjectURL ()")}}.

## Spécifications

| Spécification                                                            | Statut                       | Commentaire                                                                           |
| ------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------- |
| {{SpecName('File API', '#creating-revoking', 'URL')}} | {{Spec2('File API')}} | Ajoute les méthodes statiques `URL.createObjectURL()` et ` URL.revokeObjectURL``() `. |
| {{SpecName('URL', '#api', 'API')}}                             | {{Spec2('URL')}}         | Définition initiale (implémente `URLUtils`).                                          |

## Compatibilité des navigateurs

{{Compat("api.URL")}}

## Voir aussi

- [URL API](/fr/docs/Web/API/URL_API)
- [Qu'est-ce qu'un URL ?](/fr/docs/Learn/Common_questions/What_is_a_URL)
- Propriété permettant d'obtenir un objet `URL` : {{domxref("Window.URL")}}.
- {{domxref("URLSearchParams")}}.
