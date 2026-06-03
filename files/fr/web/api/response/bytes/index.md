---
title: "Response : méthode bytes()"
short-title: bytes()
slug: Web/API/Response/bytes
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`bytes()`** de l'interface {{DOMxRef("Response")}} prend le flux de la {{DOMxRef("Response", "réponse", "", 1)}} et le lit jusqu'à la fin.
Elle retourne une promesse qui est résolue avec un objet {{JSxRef("Uint8Array")}}.

## Syntaxe

```js-nolint
bytes()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse qui est résolue avec un objet {{JSxRef("Uint8Array")}}.

### Exceptions

- `AbortError` {{DOMxRef("DOMException")}}
  - : La requête a été [annulée](/fr/docs/Web/API/Fetch_API/Using_Fetch#annuler_une_requête).
- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la réponse est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur s'est produite lors du décodage du contenu du corps (par exemple, si l'en-tête HTTP {{HTTPHeader("Content-Encoding")}} est incorrect).
- {{JSxRef("RangeError")}}
  - : Levée s'il y a un problème lors de la création de l'objet `ArrayBuffer` associé (par exemple, si la taille des données est trop grande).

## Exemples

### Récupérer et décoder un fichier

Le code ci-dessous montre comment récupérer un fichier texte, retourner le corps sous forme de {{JSxRef("Uint8Array")}}, puis le décoder en une chaîne de caractères.

```js
const reponse = await fetch("https://www.exemple.com/textfile.txt");
const fichierTexte = await reponse.bytes();
const chaineDeCaracteres = new TextDecoder().decode(fichierTexte);
console.log(chaineDeCaracteres);
```

### Obtenir la signature d'un fichier image

Cet exemple montre comment utiliser `bytes()` pour lire les octets de signature de plusieurs fichiers image et identifier leur type.

#### HTML

Nous définissons d'abord un élément HTML {{HTMLElement("select")}} pour choisir le type de fichier, avec des valeurs correspondant à des fichiers spécifiques sur WikiMedia Commons à récupérer.

```html
<label for="file-select">Choisir un fichier&nbsp;:</label>

<select name="Files" id="file-select">
  <option value="">--Sélectionner un type d'image--</option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png">
    PNG
  </option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg">
    JPG
  </option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/8/8f/Example.gif">
    GIF89a
  </option>
</select>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const elementJournal = document.querySelector("#journal");
function log(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

Le code vérifie d'abord si la méthode `bytes()` est prise en charge.
Si c'est le cas, il ajoute un gestionnaire d'évènement pour [l'évènement `change`](/fr/docs/Web/API/HTMLElement/change_event) sur l'élément `<select>`.
Lorsque la valeur change, il passe la valeur de la sélection (une URL de fichier image) à la méthode `verifierSignature()` définie ci-dessous.
Si la méthode n'est pas prise en charge, il l'indique dans le journal.

```js
if ("bytes" in Response.prototype) {
  const elementSelectFichier = document.getElementById("file-select");
  elementSelectFichier.addEventListener("change", (event) => {
    try {
      verifierSignature(event.target.value);
    } catch (e) {
      log(e);
    }
  });
} else {
  log("Response.bytes() n'est pas pris en charge");
}
```

La méthode `verifierSignature()` est définie ci-dessous.
Elle récupère un fichier à l'URL donnée, utilise `response.bytes()` pour obtenir son contenu sous forme de tableau d'octets.
Les premiers octets sont ensuite comparés aux octets de signature de plusieurs types de fichiers courants.
Le nom du fichier et le type de fichier sont ensuite affichés dans le journal.

```js
async function verifierSignature(url) {
  if (url === "") return;
  log(`Fichier : ${url}`);
  const reponse = await fetch(url);
  const image = await reponse.bytes();

  // Signatures de fichiers depuis : https://en.wikipedia.org/wiki/List_of_file_signatures
  const signatureJpg = [0xff, 0xd8, 0xff, 0xe0];
  const signaturePng = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  const signatureGif89a = [0x47, 0x49, 0x46, 0x38, 0x39, 0x61];

  if (
    image
      .slice(0, signatureJpg.length)
      .every((octet, index) => octet === signatureJpg[index])
  ) {
    log(`Signature JPG : FF D8 FF E0`);
  } else if (
    image
      .slice(0, signaturePng.length)
      .every((octet, index) => octet === signaturePng[index])
  ) {
    log(`Signature PNG : 89 50 4E 47 0D 0A 1A 0A`);
  } else if (
    image
      .slice(0, signatureGif89a.length)
      .every((octet, index) => octet === signatureGif89a[index])
  ) {
    log(`Signature GIF (GIF89a) : 47 49 46 38 39 61`);
  } else {
    log("Format inconnu");
  }
}
```

#### Résultat

Choisissez un type d'image à l'aide de la liste de sélection.
Le journal doit alors afficher le nom du fichier ainsi que le type de fichier déterminé à partir de la signature du fichier.

{{EmbedLiveSample("Obtenir la signature d'un fichier image", 100, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
