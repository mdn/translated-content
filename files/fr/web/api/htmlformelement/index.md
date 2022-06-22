---
title: form
slug: Web/API/HTMLFormElement
tags:
  - API
  - Contrôles
  - DOM
  - Formulaire
  - HTML
  - Interface
translation_of: Web/API/HTMLFormElement
---
{{APIRef("HTML DOM")}}

L'interface **`HTMLFormElement`** représente un élément  {{HTMLElement("form")}} dans le DOM ; il peut être utilisé pour accéder et, dans quelques cas, modifier l'aspect du formulaire, ainsi que pour accéder à ses éléments composants.

{{InheritanceDiagram(600,120)}}

## Propriétés

_Cette interface hérite aussi des propriétés de son parent {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.elements")}}{{ReadOnlyInline}}
  - : Un élément {{domxref("HTMLFormControlsCollection")}} regroupant les différents contrôles associés à ce formulaire.
- {{domxref("HTMLFormElement.length")}}{{ReadOnlyInline}}
  - : Une valeur de type `long` indiquant le nombre de contrôles dans le formulaire.
- {{domxref("HTMLFormElement.name")}}
  - : Une chaîne {{domxref("DOMString")}} indiquant la valeur de l'attribut HTML {{htmlattrxref("name", "form")}} pour ce formulaire et qui correspond au nom du formulaire.
- {{domxref("HTMLFormElement.method")}}
  - : Une chaîne {{domxref("DOMString")}} indiquant la valeur de l'attribut HTML {{htmlattrxref("method", "form")}} pour ce formulaire et qui correspond à la méthode HTTP utilisée pour envoyer le formulaires. Seules certaines valeurs peuvent être utilisées avec cette propriété.
- {{domxref("HTMLFormElement.target")}}
  - : Une chaîne {{domxref("DOMString")}} indiquant la valeur de l'attribut HTML {{htmlattrxref("target", "form")}} pour ce formulaire et qui indique l'emplacement où seront affichées les résultats après envoi du formulaire.
- {{domxref("HTMLFormElement.action")}}
  - : Une chaîne {{domxref("DOMString")}} indiquant la valeur de l'attribut HTML {{htmlattrxref("action", "form")}} pour ce formulaire et qui contient l'URI d'un programme traitant les informations transmises via le formulaire.
- {{domxref("HTMLFormElement.encoding")}} ou {{domxref("HTMLFormElement.enctype")}}
  - : Une chaîne {{domxref("DOMString")}} indiquant la valeur de l'attribut HTML {{htmlattrxref("enctype", "form")}} pour ce formulaire et qui correspond au type de contenu utilisé pour transmettre les données du formulaire vers le serveur. Seules certaines valeurs peuvent être utilisées pour cette propriété. Les deux noms indiqués pour la méthode sont synonymes.
- {{domxref("HTMLFormElement.acceptCharset")}}
  - : Une chaîne {{domxref("DOMString")}} indiquant la valeur de l'attribut HTML {{htmlattrxref("accept-charset", "form")}} pour ce formulaire et qui correspond au jeu de caractères / à l'encodage pris en charge par le serveur.
- {{domxref("HTMLFormElement.autocomplete")}}
  - : Une chaîne {{domxref("DOMString")}} indiquant la valeur de l'attribut HTML {{htmlattrxref("autocomplete", "form")}} pour ce formulaire et qui indique si les contrôles du formulaire sont automatiquement renseignés par le navigateur.
- {{domxref("HTMLFormElement.noValidate")}}
  - : Un booléen indiquant la valeur de l'attribut HTML {{htmlattrxref("novalidate", "form")}} pour ce formulaire et qui indique si le formulaire ne devrait pas être validé.

Les champs de saisie nommés sont ajoutés comme propriétés sur leurs formulaires associés. Ces propriétés peuvent surcharger les propriétés natives si elles utilisent le même nom ! Par exemple, un formulaire disposant d'un {{HTMLElement("&lt;input&gt;")}} nommé `action` surchargera la propriété native `action` et tout appel renverra le champ `input` plutôt que la valeur de l'attribut HTML {{htmlattrxref("action", "form")}}.

## Méthodes

_Cette interface hérite aussi des méthodes de son parent {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.submit()")}}
  - : soumet le formulaire au serveur.
- {{domxref("HTMLFormElement.reset()")}}
  - : redéfinit le formulaire à son état initial.
- {{domxref("HTMLFormElement.checkValidity()")}}
  - : renvoie `true` si les contrôles du formulaire sont soumis à des contraintes de validation et les respectent. Elle renvoie `false` si certains contrôles ne respectent pas leurs contraintes. Elle déclenche un évènement {{event("invalid")}} pour chaque contrôle qui ne respecte pas ses contraintes. De tels contrôles sont considérés invalides si l'évènement n'est pas annulé. C'est au développeur de choisir comment réagir face à la valeur `false` produite par cette méthode.
- {{domxref("HTMLFormElement.reportValidity()")}}
  - : renvoie `true` si les contrôles du formulaire respectent leurs contraintes de validation. Lorsque `false` est renvoyé, des évènements annulables {{Event("invalid")}} sont déclenchés pour chaque contrôle invalide et les problèmes de validation sont rapportés à l'utilisateur.
- {{domxref("HTMLFormElement.requestAutocomplete()")}} {{deprecated_inline}}
  - : déclenche une interface native du navigateur afin d'aider les utilisateurs à remplir les champs pour lesquels [la valeur nommée du champ à remplissage automatique](https://html.spec.whatwg.org/#autofill-field-name) ne vaut pas `off` ou `on`. Le formulaire reçoit un évènement lorsque l'utilisateur a fini d'intéragir avec l'interface, l'événement sera {{event("autocomplete")}} si les champs ont bien été remplis ou {{event("autocompleteerror")}} s'il y a eu un problème. **Cette méthode a été retirée de Chrome et Firefox — cf. {{bug(1270740)}} pour plus d'informations et les raisons associées.**

## Notes d'utilisation

### Obtention d'un objet élément de formulaire

Pour obtenir un objet `HTMLFormElement`, vous pouvez utiliser un [sélecteur CSS](/fr/docs/Web/CSS/S%C3%A9lecteurs_CSS) avec {{domxref("ParentNode.querySelector", "querySelector()")}}  ou vous pouvez obtenir une liste de tous les formulaires du document utilisant sa propriété {{domxref("Document.forms", "forms")}}.

{{domxref("Document.forms")}} renvoie un tableau des objets `HTMLFormElement` listant chacun des formulaires de la page. Vous pouvez utiliser alors l'une des syntaxes suivantes pour obtenir un formulaire individuel :

- `document.forms[index]`
  - : renvoie le formulaire à l'`index` spécifié dans le tableau du formulaire.
- `document.forms[id]`
  - : renvoie le formulaire dont l'ID (_identifiant_) est `id` .
- `document.forms[name]`
  - : renvoie le formulaire dont la valeur d'attribut de {{domxref("Element.name", "name")}} est `name`.

### Accès aux éléments du formulaire

Vous pouvez accéder à la liste des éléments contenant des données dans le formulaire en examinant la propriété {{domxref ("HTMLFormElement.elements", "elements")}}. Ceci retourne une {{domxref ("HTMLFormControlsCollection")}} listant tous les éléments d'entrée de données utilisateur du formulaire, aussi bien ceux qui sont des descendants du `<form>` que ceux déclarés membres du formulaire par leurs attributs.

### Éléments considérés comme des contrôles de formulaire

Les éléments qui sont inclus par `HTMLFormElement.elements` et  `HTMLFormElement.length` sont :

- {{HTMLElement("button")}} (_bouton_)
- {{HTMLElement("fieldset")}} (*champ*s)
- {{HTMLElement("input")}} (_entrée_) (à l'exception de ceux dont {{htmlattrxref("type", "input")}} est `"image"` omis pour des raisons historiques)
- {{HTMLElement("object")}} (_objet_)
- {{HTMLElement("output")}} (_sortie_)
- {{HTMLElement("select")}} (_sélection_)
- {{HTMLElement("textarea")}} (_zone de texte_)

## Exemples

Crée un nouvel élément de formulaire, modifie ses attributs et l'envoie :

```js
var f = document.createElement("form"); // On crée un formulaire
document.body.appendChild(f);           // On l'ajoute au corps du document
f.action = "/cgi-bin/some.cgi";         // On y ajoute des attributs action et method
f.method = "POST"
f.submit();                             // On appelle la méhtode submit pour l'envoyer
```

Extrait des informations d'un élément de formulaire et définit quelques uns de ses attributs :

```html
<form name="formA" action="/cgi-bin/test" method="post">
 <p>Appuyez sur "Info" pour les détails du formulaire, ou "Définir" pour modifier ces détails.</p>
 <p>
  <button type="button" onclick="getFormInfo();">Info</button>
  <button type="button" onclick="setFormInfo(this.form);">Set</button>
  <button type="reset">Reset</button>
 </p>

 <textarea id="form-info" rows="15" cols="20"></textarea>
</form>

<script>
  function getFormInfo(){
    // Obtenir une référence au formulaire par son nom
    var f = document.forms["formA"];
    // Les propriétés du formulaire qui nous intéressent
    var properties = [ 'elements', 'length', 'name', 'charset', 'action', 'acceptCharset', 'action', 'enctype', 'method', 'target' ];
    // Itérer sur les propriétés en les transformant en une chaîne que nous pouvons afficher à l'utilisateur
    var info = properties.reduce(function(property) { return property + ": " + f[property] }, "").join("\n");

    // Définir les <textarea> du formulaire pour en afficher les propriétés
    document.forms["formA"].elements['form-info'].value = info;
  }

  function setFormInfo(f){ //L'argument doit être une référence d'élément de formulaire.
    f.action = "a-different-url.cgi";
    f.name   = "a-different-name";
  }
</script>
```

Envoi d'un formulaire dans une nouvelle fenêtre :

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Example new-window form submission</title>
</head>
<body>

<form action="test.php" target="_blank">
  <p><label>First name: <input type="text" name="firstname"></label></p>
  <p><label>Last name: <input type="text" name="lastname"></label></p>
  <p><label><input type="password" name="pwd"></label></p>

  <fieldset>
   <legend>Pet preference</legend>
    <p><label><input type="radio" name="pet" value="cat"> Cat</label></p>
    <p><label><input type="radio" name="pet" value="dog"> Dog</label></p>
  </fieldset>

  <fieldset>
    <legend>Owned vehicles</legend>

    <p><label><input type="checkbox" name="vehicle" value="Bike">I have a bike</label></p>
    <p><label><input type="checkbox" name="vehicle" value="Car">I have a car</label></p>
  </fieldset>

  <p><button>Submit</button></p>
</form>

</body>
</html>
```

### Envoi de formulaires et téléchargement de fichiers en utilisant `XMLHttpRequest`

Vous pouvez consulter [ce paragraphe](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest#Submitting_forms_and_uploading_files) si vous souhaitez en savoir plus pour sérialiser et envoyer un formulaire grâce à l'API {{domxref("XMLHttpRequest")}}.

## Spécifications

| Spécification                                                                                            | État                             | Commentaires                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "forms.html#the-form-element", "HTMLFormElement")}} | {{Spec2('HTML WHATWG')}} | Ajout de la méthode `requestAutocomplete()`.                                                                                                                                                                                                                                                                   |
| {{SpecName('HTML5 W3C', "forms.html#the-form-element", "HTMLFormElement")}}     | {{Spec2('HTML5 W3C')}}     | Les propriétés de l'élément renvoient un élément {{domxref("HTMLFormControlsCollection")}} plutôt qu'un {{domxref("HTMLCollection")}} (changement principalement technique). Ajout de la méthode `checkValidity()`. Ajout des propriétés `autocomplete`, `noValidate` et `encoding`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-40002357', 'HTMLFormElement')}}             | {{Spec2('DOM2 HTML')}}     | Aucune modification.                                                                                                                                                                                                                                                                                           |
| {{SpecName('DOM1', 'level-one-html.html#ID-40002357', 'HTMLFormElement')}}     | {{Spec2('DOM1')}}         | Définition initiale.                                                                                                                                                                                                                                                                                           |

## Compatibilité des navigateurs

{{Compat("api.HTMLFormElement")}}

## Voir aussi

- L'élément HTML qui implémente cette interface {{HTMLElement("form")}}.
