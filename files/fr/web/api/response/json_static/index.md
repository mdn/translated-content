---
title: "Response : méthode statique json()"
short-title: json()
slug: Web/API/Response/json_static
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode statique **`json()`** de l'interface {{DOMxRef("Response")}} retourne un objet `Response` qui contient les données JSON fournies comme corps, et un en-tête HTTP {{HTTPHeader("Content-Type")}} défini à `application/json`.
Le statut de la réponse, le message de statut et des en-têtes supplémentaires peuvent aussi être définis.

Cette méthode facilite la création d'objets `Response` pour retourner des données encodées en JSON.
Par exemple, les [Service Workers](/fr/docs/Web/API/Service_Worker_API) interceptent les requêtes fetch faites par un navigateur, et peuvent utiliser `json()` pour construire une `Response` à partir de données JSON en cache à retourner au thread principal.
La méthode `json()` peut aussi être utilisée dans du code serveur pour retourner des données JSON pour des [applications monopage](/fr/docs/Glossary/SPA), ou toute autre application où une réponse JSON est attendue.

## Syntaxe

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Paramètres

- `data`
  - : Les données JSON à utiliser comme corps de la réponse.
- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les paramètres de la réponse, incluant le code de statut, le texte de statut et les en-têtes.
    Ceci est identique au paramètre options du constructeur {{DOMxRef("Response.Response", "Response()")}}.
    - `status`
      - : Le code de statut de la réponse, par exemple `200`.
    - `statusText`
      - : Le message de statut associé au code de statut.
        Pour un statut de `200` cela pourrait être `OK`.
    - `headers`
      - : Tous les en-têtes que vous souhaitez ajouter à votre réponse, contenus dans un objet {{DOMxRef("Headers")}} ou un objet littéral de paires clé/valeur de type {{JSxRef("String")}} (voir la [référence des en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)).

### Valeur de retour

Un objet {{DOMxRef("Response")}}.

### Exceptions

- `TypeError`
  - : Levée si `data` ne peut pas être converti en chaîne JSON.
    Cela peut arriver si les données sont un objet JavaScript qui possède une méthode, ou qui a une référence circulaire, ou si l'objet passé est `undefined`.

## Exemples

### Réponse avec des données JSON

Cet exemple interactif montre comment créer un objet réponse JSON, et journalise l'objet nouvellement créé pour inspection (le code de journalisation est masqué car il n'est pas pertinent).

```html hidden
<pre id="journal"></pre>
```

```js hidden
const elementJournal = document.getElementById("journal");
function log(text) {
  elementJournal.innerText += `${text}\n`;
}

async function journaliserLaReponse(reponse) {
  const texteReponse = await reponse.text();
  log(`body: ${texteReponse}`);
  reponse.headers.forEach((enTete) => log(`header: ${enTete}`));
  log(`status: ${reponse.status}`);
  log(`statusText: ${reponse.statusText}`);
  log(`type: ${reponse.type}`);
  log(`url: ${reponse.url}`);
  log(`ok: ${reponse.ok}`);
  log(`redirected: ${reponse.redirected}`);
  log(`bodyUsed: ${reponse.bodyUsed}`);
}
```

Le code ci-dessous crée un objet `Response` avec le corps JSON `{ ma: "donnée" }` et l'en-tête défini à `application/json`.

```js
const reponseJson = Response.json({ ma: "donnée" });
journaliserLaReponse(reponseJson);
```

L'objet possède les propriétés suivantes.
Notez que le corps et l'en-tête sont définis comme attendu, et que le statut par défaut est `200`.

{{EmbedLiveSample("Réponse avec des données JSON", "100%", 170)}}

### Réponse avec des données JSON et options

Cet exemple montre comment créer un objet réponse JSON avec les options `status` et `statusText`.

```html hidden
<pre id="journal"></pre>
```

```js hidden
const elementJournal = document.getElementById("journal");
function log(text) {
  elementJournal.innerText += `${text}\n`;
}

async function journaliserLaReponse(reponse) {
  const texteReponse = await reponse.text();
  log(`body: ${texteReponse}`);
  reponse.headers.forEach((enTete) => log(`header: ${enTete}`));
  log(`status: ${reponse.status}`);
  log(`statusText: ${reponse.statusText}`);
  log(`type: ${reponse.type}`);
  log(`url: ${reponse.url}`);
  log(`ok: ${reponse.ok}`);
  log(`redirected: ${reponse.redirected}`);
  log(`bodyUsed: ${reponse.bodyUsed}`);
}
```

Le code ci-dessous crée un objet `Response` avec le corps JSON `{ une: "donnée", plus: "de l'information" }` et l'en-tête défini à `application/json`.
Il définit aussi le statut à `307` et le texte de statut approprié ("Temporary Redirect").

```js
const reponseJson = Response.json(
  { une: "donnée", plus: "de l'information" },
  { status: 307, statusText: "Temporary Redirect" },
);
journaliserLaReponse(reponseJson);
```

L'objet possède les propriétés suivantes, qui sont définies comme attendu.
Notez que la propriété `ok` de la réponse est passée à `false` car la valeur du statut n'est pas comprise entre 200 et 299.

{{EmbedLiveSample("Réponse avec des données JSON et options", "100%", 170)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
