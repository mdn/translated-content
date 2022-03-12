---
title: Utilisation des objets FormData
slug: Web/API/FormData/Using_FormData_Objects
tags:
  - AJAX
  - Blob
  - File
  - FormData
  - Formulaires
  - XHR
  - XMLHttpRequest
translation_of: Web/API/FormData/Using_FormData_Objects
original_slug: Web/API/FormData/Utilisation_objets_FormData
---
L’objet [`FormData`](/en-US/docs/Web/API/FormData) vous permet de compiler un ensemble de paires clé/valeur à envoyer à l’aide de l’API [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest). Il est principalement destiné à l’envoi de données de formulaire, mais il peut également être utilisé indépendamment des formulaires pour transmettre des données indexées. Le format des données transmises est le même que celui qu’utiliserait la méthode {{domxref("HTMLFormElement.submit","submit()")}} du formulaire pour envoyer les données si l’encodage de ce dernier était défini sur `multipart/form-data`.

## Création intégrale d’un objet FormData

Vous pouvez construire un objet `FormData` vous-même, en créer une instance, puis y ajouter des champs en appelant la méthode {{domxref("FormData.append","append()")}}, comme suit :

```js
var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // le numéro 123456 est converti immédiatement en chaîne "123456"

// fichier HTML choisi par l'utilisateur
formData.append("userfile", fileInputElement.files[0]);

// objet JavaScript de type fichier
var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
```

> **Note :** Les champs « userfile » et « webmasterfile » contiennent tous deux un fichier. Le numéro attribué au champ « accountnum » est immédiatement converti en chaîne par la méthode [`FormData.append()`](</en/DOM/XMLHttpRequest/FormData#append()>) (la valeur du champ peut être un objet {{ domxref("Blob") }}, {{ domxref("File") }} ou une chaîne : **s’il ne s’agit ni d’un objet Blob, ni d’un objet File, la valeur est convertie en chaîne**).

Dans cet exemple, une instance `FormData` contenant les valeurs des champs « username », « accountnum », « userfile » et « webmasterfile » est créée, puis la méthode `XMLHttpRequest` [`send()`](</en/DOM/XMLHttpRequest#send()>) est utilisée pour envoyer les données du formulaire. Le champ « webmasterfile » est un objet {{domxref("Blob")}}. Un objet `Blob` représente un objet-fichier de données brutes immuables. Les Blobs représentent des données qui ne sont pas nécessairement dans un format JavaScript natif. L’interface {{ domxref("File") }} se base sur l’objet `Blob`, elle en hérite les fonctionnalités et les étend pour prendre en charge les fichiers du système de l’utilisateur. Pour construire un `Blob`, vous pouvez invoquer le {{domxref("Blob.Blob","constructeur Blob()")}}.

## Récupération d’un objet FormData dans un formulaire HTML

Pour construire un objet `FormData` contenant les données d'un élément HTML [`<form>`](/fr/docs/Web/HTML/Element/form) existant, spécifiez cet élément lors de la création de l'objet&nbsp;:

```js
var formData = new FormData(someFormElement);
```

Par exemple :

```js
var formElement = document.querySelector("form");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```

Vous pouvez également ajouter des données supplémentaires à l’objet `FormData` entre sa récupération dans un formulaire et son envoi, comme suit :

```js
var formElement = document.querySelector("form");
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);
```

Vous pouvez ainsi ajouter des données au formulaire avant de l’envoyer, pour y inclure des informations supplémentaires que les utilisateurs ne peuvent pas nécessairement modifier.

## Envoi de fichiers via un objet FormData

L’objet `FormData` vous permet également d’envoyer des fichiers. Il vous suffit d’inclure un élément HTML {{ HTMLElement("input") }} de type `file` dans votre élément {{htmlelement("form")}} :

```html
<form enctype="multipart/form-data" method="post" name="fileinfo">
  <label>Votre adresse électronique :</label>
  <input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /><br />
  <label>Étiquette du fichier personnalisé :</label>
  <input type="text" name="filelabel" size="12" maxlength="32" /><br />
  <label>Fichier à mettre de côté :</label>
  <input type="file" name="file" required />
  <input type="submit" value="Mettez le fichier de côté." />
</form>
<div></div>
```

Vous pouvez ensuite l’envoyer à l’aide du code suivant :

```js
var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {

  var oOutput = document.querySelector("div"),
      oData = new FormData(form);

  oData.append("CustomField", "Données supplémentaires");

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "stash.php", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Envoyé !";
    } else {
      oOutput.innerHTML = "Erreur " + oReq.status + " lors de la tentative d’envoi du fichier.<br \/>";
    }
  };

  oReq.send(oData);
  ev.preventDefault();
}, false);
```

> **Note :** Si vous passez une référence dans le formulaire, la méthode spécifiée dans ce dernier sera utilisée au lieu de celle définie dans l’appel de la méthode open().

Vous pouvez également ajouter un objet {{ domxref("File") }} ou {{ domxref("Blob") }} directement dans l’objet {{ domxref("FormData") }} :

```js
data.append("myfile", myBlob, "filename.txt");
```

Avec la méthode {{domxref("FormData.append","append()")}}, vous pouvez utiliser le troisième paramètre facultatif pour passer un nom de fichier dans l’en-tête `Content-Disposition` envoyé au serveur. Si aucun nom de fichier n’est spécifié (ou si le paramètre n’est pas pris en charge), le nom « blob » est utilisé.

Vous pouvez utiliser l’objet `FormData` avec jQuery si vous définissez les options appropriées :

```js
var fd = new FormData(document.querySelector("form"));
fd.append("CustomField", "Données supplémentaires");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fd,
  processData: false,  // dire à jQuery de ne pas traiter les données
  contentType: false   // dire à jQuery de ne pas définir le contentType
});
```

## Envoi de formulaires et de fichiers via AJAX *sans* objet `FormData`

Si vous voulez en savoir plus sur la sérialisation des données  et l’envoi d’un formulaire via [AJAX](/en-US/docs/AJAX) *sans* utiliser d’objets FormData, consultez [ce paragraph](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files)e.

## Voir aussi

- [Utiliser XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- {{domxref("HTMLFormElement")}}
- {{domxref("Blob")}}
- [Tableaux typés](/en-US/docs/Web/JavaScript/Typed_arrays)
