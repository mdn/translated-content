---
title: URL
slug: Web/API/URL
---

{{ApiRef("URL API")}}

L'interface **`URL`** est utilisée afin d'analyser, de décomposer, de construire, de normaliser ou d'encoder des [URL](/fr/docs/Glossary/URL). Elle fonctionne en exposant des propriétés qui permettent de lire et de modifier les différentes composantes d'une URL.

On crée généralement un nouvel objet `URL` en fournissant l'URL sous la forme d'une chaîne de caractères à son constructeur, ou en fournissant une URL relative et une URL de base. On peut alors lire les composantes de l'URL et éventuellement la modifier.

Pour les anciens navigateurs qui n'implémenteraient pas le constructeur [`URL()`](/fr/docs/Web/API/URL/URL), il est possible d'accéder à un objet `URL` en utilisant la propriété `URL` de l'interface [`Window`](/fr/docs/Web/API/Window). Il faudra alors vérifier s'il faut utiliser un préfixe pour le navigateur concerné.

{{AvailableInWorkers}}

## Constructeur

- [`URL()`](/fr/docs/Web/API/URL/URL)
  - : Crée et renvoie un objet `URL` faisant référence à l'URL indiquée via la chaîne de caractères passée en argument qui représente une URL absolue ou via les deux chaînes de caractères passées en arguments qui représentent respectivement une URL relative et une URL de base.

## Propriétés

- [`hash`](/fr/docs/Web/API/URL/hash)
  - : Une chaîne de caractères contenant un `'#'` suivi de l'identifiant du fragment de l'URL.
- [`host`](/fr/docs/Web/API/URL/host)
  - : Une chaîne de caractères contenant le domaine (c'est-à-dire le nom d'hôte), suivi de, si un port a été indiqué, de `':'` puis du _port_ de l'URL.
- [`hostname`](/fr/docs/Web/API/URL/hostname)
  - : Une chaîne indiquant le domaine de l'URL.
- [`href`](/fr/docs/Web/API/URL/href)
  - : Une chaîne de caractères qui renvoie tout l'URL.
- [`origin`](/fr/docs/Web/API/URL/origin) {{readonlyInline}}
  - : Renvoie une chaîne de caractères contenant l'origine de l'URL, c'est-à-dire la combinaison de son schéma, de son domaine et de son port.
- [`password`](/fr/docs/Web/API/URL/password)
  - : Une chaîne de caractères contenant le mot de passe indiqué avant le nom de domaine.
- [`pathname`](/fr/docs/Web/API/URL/pathname)
  - : Une chaîne de caractères contenant une barre oblique initiale `'/'` suivie du chemin de l'URL et qui n'inclut pas la chaîne de requête ou le fragment.
- [`port`](/fr/docs/Web/API/URL/port)
  - : Une chaîne de caractères contenant le numéro de port de l'URL.
- [`protocol`](/fr/docs/Web/API/URL/protocol)
  - : Une chaîne de caractères contenant le schéma du protocole de l'URL, incluant les deux-points `':'` finaux.
- [`search`](/fr/docs/Web/API/URL/search)
  - : Une chaîne de caractères indiquant la chaîne de paramètres de l'URL. Si des paramètres sont fournis, cette chaîne les contient tous et commence par un point d'interrogation `?`.
- [`searchParams`](/fr/docs/Web/API/URL/searchParams) {{readonlyInline}}
  - : Un objet [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams) qui peut être utilisé afin d'accéder aux paramètres individuels de la requête (qui sont également visibles depuis `search`).
- [`username`](/fr/docs/Web/API/URL/username)
  - : Une chaîne de caractères contenant le nom d'utilisateur indiqué avant le nom de domaine.

## Méthodes

- [`toString()`](/fr/docs/Web/API/URL/toString)
  - : Renvoie une chaîne de caractères contenant toute l'URL. Il s'agit d'un synonyme pour [`URL.href`](/fr/docs/Web/API/URL/href), bien que ce dernier ne puisse être utilisé pour modifier la valeur.
- [`toJSON()`](/fr/docs/Web/API/URL/toJSON)
  - : Renvoie une chaîne de caractères contenant tout l'URL. Elle fournit la même chaîne de caractères que la propriété `href`.

## Méthodes statiques

- [`createObjectURL()`](/fr/docs/Web/API/URL/createObjectURL)
  - : Renvoie une chaîne de caractères contenant une URL de blob unique, c'est-à-dire une URL dont le schéma est `blob:`, suivi d'une chaîne de caractères opaque identifiant de façon unique l'objet dans le navigateur.
- [`revokeObjectURL()`](/fr/docs/Web/API/URL/revokeObjectURL)
  - : Révoque un objet `URL` précédemment créé à l'aide de [`URL.createObjectURL()`](/fr/docs/Web/API/URL/createObjectURL).

## Notes d'utilisation

Le constructeur prend un paramètre `url`, et un paramètre optionnel `base` utilisé si le paramètre `url` est une URL relative&nbsp;:

```js
const url = new URL("../chats", "http://www.example.com/chiens");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/chats"
```

Les propriétés de l'objet peuvent être utilisées pour construire l'URL&nbsp;:

```js
url.hash = "spock";
console.log(url.href); // "http://www.example.com/chats#spock"
```

Les URL sont encodées selon les règles édictées par [la RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986). Ainsi, on aura&nbsp;:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/démonstration.html"
```

L'interface [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams) peut être utilisée pour construire et manipuler le fragment de la requête.

Pour obtenir les paramètres de recherche de l'URL de la fenêtre courante, on pourra écrire&nbsp;:

```js
// https://mon.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

La méthode [`toString()`](/fr/docs/Web/API/URL/toString) de `URL` renvoie la valeur de la propriété [`href`](/fr/docs/Web/API/URL/href). On peut donc utiliser le constructeur pour normaliser et encoder une URL directement.

```js
const response = await fetch(
  new URL("http://www.example.com/démonstration.html"),
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `URL` avec la bibliothèque tierce `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [L'API URL](/fr/docs/Web/API/URL_API)
- [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn/Common_questions/What_is_a_URL)
- [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams).
