---
title: "XMLHttpRequest : méthode getAllResponseHeaders()"
short-title: getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
l10n:
  sourceCommit: 99b2676da42700bafbb3189449a30b00e727e2c5
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La méthode **`getAllResponseHeaders()`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne tous les en-têtes de réponse, séparés par un {{Glossary("CRLF")}}, sous forme de chaîne de caractères, ou `null` si aucune réponse n'a été reçue.

Si une erreur réseau se produit, une chaîne de caractères vide est retournée.

> [!NOTE]
> Pour les requêtes multipart, cela retourne les en-têtes de la partie _actuelle_ de la requête, et non du canal d'origine.

## Syntaxe

```js-nolint
getAllResponseHeaders()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant tous les en-têtes de la réponse (sauf ceux dont le nom de champ est `Set-Cookie`) séparés par un {{Glossary("CRLF")}}, ou `null` si aucune réponse n'a été reçue. Si une erreur réseau se produit, une chaîne de caractères vide est retournée.

Un exemple de ce à quoi ressemble une chaîne de caractères d'en-tête brute&nbsp;:

```http
date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n
```

Chaque ligne se termine par des caractères de retour chariot et de saut de ligne (`\r\n`). Ce sont essentiellement des délimiteurs séparant chacun des en-têtes.

> [!NOTE]
> Dans les navigateurs modernes, les noms des en-têtes sont retournés en minuscules, conformément à la dernière spécification.

## Exemples

Cet exemple examine les en-têtes dans l'évènement {{DOMxRef("XMLHttpRequest/readystatechange_event", "readystatechange")}} de la requête. Le code montre comment obtenir la chaîne de caractères d'en-têtes brute, ainsi que comment la convertir en un tableau d'en-têtes individuels, puis comment prendre ce tableau et créer une correspondance entre les noms d'en-têtes et leurs valeurs.

```js
const requete = new XMLHttpRequest();
requete.open("GET", "toto.txt", true);
requete.send();

requete.onreadystatechange = () => {
  if (requete.readyState === requete.HEADERS_RECEIVED) {
    // Obtient la chaîne de caractères d'en-têtes brute
    const enTetes = requete.getAllResponseHeaders();

    // Convertit la chaîne de caractères d'en-têtes en un tableau
    // d'en-têtes individuels
    const tab = enTetes.trim().split(/[\r\n]+/);

    // Crée une correspondance entre les noms d'en-têtes et leurs valeurs
    const correspondanceEnTetes = {};
    tab.forEach((ligne) => {
      const parties = ligne.split(": ");
      const enTete = parties.shift();
      const valeur = parties.join(": ");
      correspondanceEnTetes[enTete] = valeur;
    });
  }
};
```

Une fois cela fait, vous pouvez, par exemple&nbsp;:

```js
const typeContenu = correspondanceEnTetes["content-type"];
```

Cela obtient la valeur de l'en-tête {{HTTPHeader("Content-Type")}} dans la variable `typeContenu`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Définir les en-têtes de requête&nbsp;: {{DOMxRef("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
