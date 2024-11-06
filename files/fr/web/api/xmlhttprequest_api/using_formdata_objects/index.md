---
title: Utilisation des objets FormData
slug: Web/API/XMLHttpRequest_API/Using_FormData_Objects
l10n:
  sourceCommit: 2024a508694208f0316c484fb41e2c5823deae88
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

L'objet [`FormData`](/fr/docs/Web/API/FormData) vous permet de compiler un ensemble de paires clé/valeur à envoyer à l'aide de l'API [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest). Il est principalement destiné à l'envoi de données de formulaire, mais il peut également être utilisé indépendamment des formulaires pour transmettre des données indexées. Le format des données transmises est le même que celui utilisé par la méthode [`submit()`](/fr/docs/Web/API/HTMLFormElement/submit) du formulaire pour envoyer les données lorsque l'encodage de ce dernier est défini sur `multipart/form-data`.

## Créer un objet `FormData` de toutes pièces

Vous pouvez construire un objet `FormData` vous-même, créer une instance, puis y ajouter des champs en appelant la méthode [`append()`](/fr/docs/Web/API/FormData/append), comme suit&nbsp;:

```js
const formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // le numéro 123456 est converti immédiatement en chaîne "123456"

// fichier HTML choisi par l'utilisateur
formData.append("userfile", fileInputElement.files[0]);

// objet JavaScript de type fichier
const content = '<q id="a"><span id="b">hey!</span></q>'; // le corps du nouveau fichier…
const blob = new Blob([content], { type: "text/xml" });

formData.append("webmasterfile", blob);

const request = new XMLHttpRequest();
request.open("POST", "https://example.com/submitform.php");
request.send(formData);
```

> [!NOTE]
> Les champs «&nbsp;userfile&nbsp;» et «&nbsp;webmasterfile&nbsp;» contiennent tous deux un fichier. Le numéro attribué au champ «&nbsp;accountnum&nbsp;» est immédiatement converti en chaîne par la méthode [`FormData.append()`](/fr/docs/Web/API/FormData/append) (la valeur du champ peut être un objet [`Blob`](/fr/docs/Web/API/Blob), [`File`](/fr/docs/Web/API/File) ou une chaîne&nbsp;: **s'il ne s'agit ni d'un objet `Blob`, ni d'un objet `File`, la valeur est convertie en chaîne**).

Dans cet exemple, une instance `FormData` contenant les valeurs des champs «&nbsp;username&nbsp;», «&nbsp;accountnum&nbsp;», «&nbsp;userfile&nbsp;» et «&nbsp;webmasterfile&nbsp;» est créée, puis la méthode [`XMLHttpRequest.send()`](/fr/docs/Web/API/XMLHttpRequest/send) est utilisée pour envoyer les données du formulaire. Le champ «&nbsp;webmasterfile&nbsp;» est un objet [`Blob`](/fr/docs/Web/API/Blob). Un objet `Blob` représente un objet-fichier de données brutes immuables. Les blobs représentent des données qui ne sont pas nécessairement dans un format JavaScript natif. L'interface [`File`](/fr/docs/Web/API/File) se base sur l'objet `Blob`, elle en hérite les fonctionnalités et les étend pour prendre en charge les fichiers du système d'exploitation. Pour construire un `Blob`, vous pouvez invoquer [le constructeur `Blob()`](/fr/docs/Web/API/Blob/Blob).

## Récupération d'un objet `FormData` dans un formulaire HTML

Pour construire un objet `FormData` contenant les données d'un élément HTML [`<form>`](/fr/docs/Web/HTML/Element/form) existant, spécifiez cet élément lors de la création de l'objet&nbsp;:

```js
const formData = new FormData(unElementDeFormulaire);
```

Par exemple&nbsp;:

```js
const formElement = document.querySelector("form");
const request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```

Vous pouvez également ajouter des données supplémentaires à l'objet `FormData` entre la récupération depuis le formulaire et son envoi, comme suit&nbsp;:

```js
const formElement = document.querySelector("form");
const formData = new FormData(formElement);
const request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);
```

Vous pouvez ainsi ajouter des données au formulaire avant de l'envoyer, pour y inclure des informations supplémentaires que les utilisatrices et utilisateurs ne peuvent pas nécessairement modifier.

## Envoi de fichiers via un objet `FormData`

L'objet `FormData` vous permet également d'envoyer des fichiers. Il vous suffit d'inclure un élément HTML [`<input>`](/fr/docs/Web/HTML/Element/input) de type `file` dans votre élément [`<form>`](/fr/docs/Web/HTML/Element/form)&nbsp;:

```html
<form enctype="multipart/form-data" method="post" name="fileinfo">
  <p>
    <label
      >Votre adresse électronique :
      <input
        type="email"
        autocomplete="on"
        name="userid"
        placeholder="email"
        required
        size="32"
        maxlength="64" />
    </label>
  </p>
  <p>
    <label
      >Nom personnalisé pour le fichier&nbsp;:
      <input type="text" name="filelabel" size="12" maxlength="32" />
    </label>
  </p>
  <p>
    <label
      >Fichier à téléverser :
      <input type="file" name="file" required />
    </label>
  </p>
  <p>
    <input type="submit" value="Envoyer le fichier !" />
  </p>
</form>
<div id="output"></div>
```

Vous pouvez ensuite l'envoyer à l'aide du code suivant&nbsp;:

```js
const form = document.forms.namedItem("fileinfo");
form.addEventListener(
  "submit",
  (event) => {
    const output = document.querySelector("#output");
    const formData = new FormData(form);

    formData.append("CustomField", "Des données supplémentaires");

    const request = new XMLHttpRequest();
    request.open("POST", "stash.php", true);
    request.onload = (progress) => {
      output.innerHTML =
        request.status === 200
          ? "Fichier téléversé !"
          : `Erreur ${request.status} lors de la tentative de téléversement du fichier.<br />`;
    };

    request.send(formData);
    event.preventDefault();
  },
  false,
);
```

> [!NOTE]
> Si vous passez une référence dans le formulaire, [la méthode HTTP spécifiée](/fr/docs/Web/HTTP/Methods) dans ce dernier sera utilisée au lieu de celle définie dans l'appel de la méthode `open()`.

> [!WARNING]
> Lors de l'utilisation de `FormData` pour envoyer des requêtes POST à l'aide de [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) ou de [l'API <i lang="en">Fetch</i>](/fr/docs/Web/API/Fetch_API) pour du contenu de type `multipart/form-data` (par exemple pour téléverser des fichiers ou des blobs vers le serveur), _il ne faut pas indiquer de façon explicite_ l'en-tête [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) sur la requête. Si vous le faites, cela empêchera le navigateur de renseigner l'en-tête `Content-Type` avec l'expression de limite qui sera utilisée pour délimiter les champs du formulaire dans le corps de la requête.

Vous pouvez également ajouter un objet [`File`](/fr/docs/Web/API/File) ou [`Blob`](/fr/docs/Web/API/Blob) directement dans l'objet [`FormData`](/fr/docs/Web/API/FormData)&nbsp;:

```js
data.append("monfichier", monBlob, "nomFichier.txt");
```

Avec la méthode [`FormData.append()`](/fr/docs/Web/API/FormData/append), vous pouvez utiliser le troisième paramètre facultatif pour passer un nom de fichier dans l'en-tête `Content-Disposition` envoyé au serveur. Si aucun nom de fichier n'est spécifié (ou si le paramètre n'est pas pris en charge), le nom «&nbsp;blob&nbsp;» est utilisé.

## Utiliser un évènement `formdata`

L'évènement [`formdata`](/fr/docs/Web/API/HTMLFormElement/formdata_event), apparu après [`FormData`](/fr/docs/Web/API/FormData), est déclenché sur un objet [`HTMLFormElement`](/fr/docs/Web/API/HTMLFormElement) après que la liste des données du formulaire a été construite. Cela se produit nativement lors de l'envoi du formulaire, mais peut aussi être déclenché par l'appel au constructeur [`FormData()`](/fr/docs/Web/API/FormData/FormData).

On peut ainsi récupérer un objet [`FormData`](/fr/docs/Web/API/FormData) dès le déclenchement de l'évènement `formdata`, plutôt que de l'assembler soi-même.

Dans [cette démo sur `formdata`](https://long-impatiens.glitch.me/), on fait référence au formulaire dans le code JavaScript&nbsp;:

```js
const formElem = document.querySelector("form");
```

Dans le gestionnaire d'évènement pour [l'évènement `submit`](/fr/docs/Web/API/HTMLFormElement/submit_event), on utilise [`preventDefault`](/fr/docs/Web/API/Event/preventDefault) afin d'interrompre l'envoi normal du formulaire, puis on invoque le constructeur [`FormData()`](/fr/docs/Web/API/FormData/FormData) afin de déclencher l'évènement `formdata`&nbsp;:

```js
formElem.addEventListener("submit", (e) => {
  // lors de l'envoi du formulaire, on empêche l'envoi
  // normal
  e.preventDefault();

  // on construit un objet FormData qui déclenche
  // l'évènement formdata
  new FormData(formElem);
});
```

Lorsque l'évènement `formdata` se déclenche, on peut accéder à l'objet [`FormData`](/fr/docs/Web/API/FormData) en utilisant [`FormDataEvent.formData`](/fr/docs/Web/API/FormDataEvent/formData). On peut alors le manipuler comme bon nous semble (ici, nous l'envoyons au serveur à l'aide de [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)).

```js
formElem.addEventListener("formdata", (e) => {
  console.log("formdata déclenché");

  // On récupère les données du formulaire depuis
  // l'objet représentant l'évènement
  const data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // On envoie les données via XHR
  const request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

## Points d'attention

L'objet `FormData` n'inclut pas les données du formulaire pour les champs ou ensembles de champs ([`<fieldset>`](/fr/docs/Web/HTML/Element/fieldset)) qui sont désactivés.

## Voir aussi

- [Utiliser `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`HTMLFormElement`](/fr/docs/Web/API/HTMLFormElement)
- [`Blob`](/fr/docs/Web/API/Blob)
- [Tableaux typés JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
