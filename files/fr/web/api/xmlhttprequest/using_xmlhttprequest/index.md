---
title: Utiliser XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
tags:
  - AJAX
  - File API
  - FormData
  - JXON
  - Progression
  - Téléchargement
  - XML
  - XMLHttpRequest
  - upload
translation_of: Web/API/XMLHttpRequest/Using_XMLHttpRequest
original_slug: Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest
---
[`XMLHttpRequest`](/en-US/docs/DOM/XMLHttpRequest) permet d'envoyer des requêtes HTTP de manière très simple.  Il suffit de créer une instance de l'objet, d'ouvrir une URL, et d'envoyer la requête.  Le [status HTTP](/en-US/docs/HTTP/HTTP_response_codes) du résultat, tout comme le contenu de la réponse, sont disponibles dans l'objet de la requête quand la transaction est terminée. Cette page présente quelques-uns des cas d'utilisation communs et même un peu obscurs pour cet objet JavaScript puissant.

```js
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "yourFile.txt", true);
oReq.send();
```

## Types de requêtes

Une demande faite via XMLHttpRequest peut récupérer les données dans l'une des deux façons, de manière asynchrone ou synchrone. Le type de demande est dictée par l'argument optionnel async (le troisième argument) qui est mis sur la méthode [open()](</en-US/docs/DOM/XMLHttpRequest#open()>) XMLHttpRequest (). Si cet argument est true ou non spécifié, l'objet XMLHttpRequest est traitée de manière asynchrone, sinon le processus est effectué de façon synchrone. Une discussion détaillée et des démonstrations de ces deux types de demandes peuvent être trouvés sur la page des [requêtes synchrones et asynchrones](/en-US/docs/DOM/XMLHttpRequest/Synchronous_and_Asynchronous_Requests). En général, vous devriez rarement, voire jamais, utiliser requêtes synchrones.

> **Note :** A partir de Gecko 30.0 {{ geckoRelease("30.0") }}, les requêtes synchrones sur le processus principal ont été dépréciées en raison de l'effet négatif sur l'expérience utilisateur.

## Gérer les réponses

Il existe plusieurs types [d'attributs de réponse](http://www.w3.org/TR/XMLHttpRequest2/#response) définies par la spécification W3C pour XMLHttpRequest. Ceci indique que le client faisant l'objet XMLHttpRequest des informations importantes sur l'état de la réponse. Certains cas où, traitant de types de réponse non-texte peuvent impliquer une certaine manipulation et l'analyse comme indiqué dans les sections suivantes.

### Analyser et manipuler la propriété `responseXML`

Si vous utilisez `XMLHttpRequest` pour obtenir le contenu d'un fichier XML distant, la propriété `responseXML` sera un objet DOM contenant le document XML parsé, qui peut être difficile à manipuler et analyser. Il y a quatre moyens principaux d'analyser ce document XML&nbsp;:

1.  Utiliser [XPath](/en-US/docs/XPath) pour localiser des parties.
2.  Utiliser [JXON](/en-US/docs/JXON) pour le convertir en Objet structuré JavaScript.
3.  Manuellement [parser et serializer le XML](/en-US/docs/Parsing_and_serializing_XML) en chaînes de caractères ou en objets.
4.  Utiliser [XMLSerializer](/en-US/docs/XMLSerializer) pour serializer **le DOM en chaînes ou en fichiers.**
5.  [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) peut être utilisé si vous connaissez à l'avance le contenu du document XML. Vous pouvez supprimer les sauts de ligne si vous utilisez `RegExp` en prenant en compte ces sauts. Toutefois, cette méthode est un «&nbsp;dernier recours&nbsp;», car si le code XML change légèrement, la méthode échouera probablement.

### Analyser et manipuler une propriété `responseText` contenant un document HTML

> **Note :** La spécification W3C [XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html)  autorise le HTML a être parsé via la propritété `XMLHttpRequest.responseXML`. Lisez l'article à propos du [HTML dans XMLHttpRequest](/en-US/docs/HTML_in_XMLHttpRequest) pour plus de détails.

Si vous utilisez `XMLHttpRequest` pour récupérer le contenu d'une page HTML distante, la propriété `responseText` est une chaîne de caractères contenant une "soupe" de tous les tags HTML, qui peut être difficile à manipuler et à analyser. Il y a trois moyens principaux d'analyser cette soupe de HTML :

1.  Utiliser la propriété `XMLHttpRequest.responseXML`.
2.  Injecter le contenu dans le body d'un [fragment de document](/en-US/docs/Web/API/DocumentFragment) via `fragment.body.innerHTML` et traverser le DOM du fragment.
3.  [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) peut être utilisé si vous connaissez à l'avance le contenu du document XML. Vous pouvez supprimer les sauts de ligne si vous utilisez `RegExp` en prenant en compte ces sauts. Toutefois, cette méthode est un «&nbsp;dernier recours&nbsp;», car si le code XML change légèrement, la méthode échouera probablement.

## Gérer les données binaires

Bien que `XMLHttpRequest` est le plus souvent utilisé pour envoyer et recevoir des données textuelles, on peut l'utiliser pour envoyer et recevoir du contenu binaire.Il existe plusieurs méthodes éprouvées pour contraindre la réponse d'un XMLHttpRequest en l'envoi de données binaires. Celles-ci impliquent d'utiliser la méthode .overrideMimeType() sur l'objet XMLHttpRequest, ce qui est une solution viable.

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
// récupérer les données non traitées comme une chaîne binaire
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

La Spécification XMLHttpRequest Niveau 2 ajoute de nouveaux [attributs responseType](http://www.w3.org/TR/XMLHttpRequest2/#the-responsetype-attribute) qui permettent d'envoyer et de recevoir des données binaires plus facilement.

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
oReq.onload = function(e) {
  var arraybuffer = oReq.response; // n'est pas responseText
  /* ... */
}
oReq.send();
```

Pour plus d'exemples, jettez un oeil à la page [Envoyer et recevoir des données binaires](/en-US/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data)

## Surveiller la progression

`XMLHttpRequest` fournit la possibilité d'écouter différents évènements qui peuvent se produire pendant que la requête est traitée. Cela inclu des notifications de progression périodiques, des notifications d'erreur, ainsi de suite.

Le support des évènements de progression DOM de `XMLHttpRequest` suit l'API web [de spécifications des évènements de progression](http://dev.w3.org/2006/webapi/progress/Progress.html): ils implémentent l'interface {{domxref("ProgressEvent")}}.

```js
var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress, false);
oReq.addEventListener("load", transferComplete, false);
oReq.addEventListener("error", transferFailed, false);
oReq.addEventListener("abort", transferCanceled, false);

oReq.open();

// ...

// progression des transferts depuis le serveur jusqu'au client (téléchargement)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    // ...
     } else {
    // Impossible de calculer la progression puisque la taille totale est inconnue
  }
}

function transferComplete(evt) {
  alert("Le transfert est terminé.");
}

function transferFailed(evt) {
  alert("Une erreur est survenue pendant le transfert du fichier.");
}

function transferCanceled(evt) {
  alert("Le transfert a été annulé par l'utilisateur.");
}
```

Les lignes 3-6 ajoutent des écouteurs pour les différents évènements lancés pendant la transfert de données d'une `XMLHttpRequest`.

> **Note :** Vous devez ajouter les écouteurs avant d'appeler `open()` sur la requête. Sinon, les évènements de progression ne seront pas lancés.

Le gestionnaire de progression, spécifié par la fonction `updateProgress()` dans cet exemple, reçoit le nombre total de bytes à transférer ainsi que le nombre de bytes déjà transférés dans les champs `total` et `loaded`.  Cependant, si le champ `lengthComputable` est false, la taille totale est inconnue et sera zéro.

Les évènements de progression sont disponibles pour l'envoi et la réception de données. Les évènements de téléchargement sont lancés sur l'objet `XMLHttpRequest` lui-même, comme montré dans l'exemple ci-dessus. Les évènements d'envoi (upload) sont lancés sur l'objet `XMLHttpRequest.upload`, comme montré ci-dessous:

```js
var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress, false);
oReq.upload.addEventListener("load", transferComplete, false);
oReq.upload.addEventListener("error", transferFailed, false);
oReq.upload.addEventListener("abort", transferCanceled, false);

oReq.open();
```

> **Note :** Les évènements de progression ne sont pas disponibles sur le protocole `file:`.

> **Note :** Actuellement, il y a encore des bugs ouverts pour les évènements de progression qui affectent la version 25 de Firefox sur [OS X](https://bugzilla.mozilla.org/show_bug.cgi?id=908375) et [Linux](https://bugzilla.mozilla.org/show_bug.cgi?id=786953).

> **Note :** A partir de {{Gecko("9.0")}}, les évènements de progression peuvent désormais être assurément présents pour chaque morceau de données reçu, y compris le dernier morceau dans les cas où le dernier paquet est reçu et la connexion fermée avant que l'évènement ne soit lancé. Dans ce cas, l'évènement de progression est automatiquement lancé quand l'évènement load se produit pour ce paquet. Cela vous permet de surveiller fiablement la progression grâce à son évènement.

> **Note :** Dans {{Gecko("12.0")}}, si votre évènement de progression est appelé avec un `responseType` "moz-blob", la valeur de la réponse est un {{domxref("Blob")}} contenant les données reçues jusqu'à présent.

Une fonction peut aussi être appelée peu importe le status de fin de la requête (`abort`, `load`, ou `error`) en utilisant l'évènement `loadend`&nbsp;:

```js
req.addEventListener("loadend", loadEnd, false);

function loadEnd(e) {
  alert("Le transfert est terminé (même si l'on ne sait pas si ça a fonctionné ou pas).");
}
```

Notez qu'il n'y a pas moyen d'être certain des informations reçues dans l'évènement  `loadend` event comme la condition qui a causé la fin de l'opération; toutefois, vous pouvez utiliser cet évènement pour gérer les tâches qui doivent être exécutées dans tous les cas une fois un transfert terminé.

## Envoyer des formulaires et uploader des fichiers

Les instances de `XMLHttpRequest` peuvent être utilisées pour envoyer des formulaires de deux façons :

- n'utiliser rien de plus qu'AJAX
- utiliser l'API [`FormData`](/en-US/docs/DOM/XMLHttpRequest/FormData)

La **seconde solution** (utiliser l'API [`FormData`](/en-US/docs/DOM/XMLHttpRequest/FormData)) est la plus simple et la plus rapide, mais a le désavantage que les données collectées ne peuvent pas être [chainifiées](/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify).
La **première solution** est plutôt la plus complexe, mais se prête à être plus flexible et puissante.

### Rien de plus que `XMLHttpRequest`

Envoyer des formulaires sans l'API [`FormData`](/en-US/docs/DOM/XMLHttpRequest/FormData) ne demande rien de plus, si ce n'est l'API [`FileReader`](/en-US/docs/DOM/FileReader), mais seulement **si vous voulez envoyer un fichier ou plus**.

#### Une brève introduction au méthodes de submission

Un élément HTML {{ HTMLElement("form") }} peut être envoyé de quatre manières :

- en utilisant la méthode `POST` et en configurant son attribut `enctype` sur `application/x-www-form-urlencoded` (par défaut);
- en utilisant la méthode `POST` et en configurant son attribut `enctype` sur `text/plain`;
- en utilisant la méthode `POST` et en configurant son attribut `enctype` sur `multipart/form-data`;
- en utilisant la méthode `GET` (dans ce cas, l'attribut `enctype` sera ignoré).

Maintenant, considérons qu'on envoie un formulaire contenant seulement deux champs, nommées `foo` et `baz`. Si vous utilisez la méthode `POST`, le serveur va recevoir une chaîne similaire à l'un des trois suivantes, en fonction de l'encodage que vous utilisez :

- Méthode: `POST`; Encodage: `application/x-www-form-urlencoded` (par défaut):

      Content-Type: application/x-www-form-urlencoded

      foo=bar&baz=The+first+line.&#37;0D%0AThe+second+line.%0D%0A

- Méthode: `POST`; Encodage: `text/plain`:

      Content-Type: text/plain

      foo=bar
      baz=The first line.
      The second line.

- Méthode: `POST`; Encodage: `multipart/form-data`:

      Content-Type: multipart/form-data; boundary=---------------------------314911788813839

      -----------------------------314911788813839
      Content-Disposition: form-data; name="foo"

      bar
      -----------------------------314911788813839
      Content-Disposition: form-data; name="baz"

      The first line.
      The second line.

      -----------------------------314911788813839--

Si vous utilisez la méthode `GET` à la place, une chaîne comme celle-ci sera simplement ajoutée à l'URL :

    ?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.

#### Un petit framework vanilla

Tout celà est fait automatiquement par le serveur quand vous envoyez un {{ HTMLElement("form") }}. Mais si vous voulez faire la même chose en utilisant JavaScript vous devez _tout_ dire à l'interprète. Pour celà, la manière d'envoyer des formulaires en *pure* AJAX est trop compliquée pour être expliquée ici. Pour cette raison, nous avons posté un **framework complet (mais tout de même didactique)**, qui est capable d'utiliser les quatres méthodes de *submit* , et aussi de **transférer des fichiers**:

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Sending forms with pure AJAX &ndash; MDN</title>
<script type="text/javascript">

"use strict";

/*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#sendAsBinary()
\*/

if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function(sData) {
    var nBytes = sData.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    /* send as ArrayBufferView...: */
       this.send(ui8Data);
    /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
  };
}

/*\
|*|
|*|  :: AJAX Form Submit Framework ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntax:
|*|
|*| AJAXSubmit(HTMLFormElement);
\*/

var AJAXSubmit = (function () {

  function ajaxSuccess () {
    /* console.log("AJAXSubmit - Success!"); */
    alert(this.responseText);
    /* you can get the serialized data through the "submittedData" custom property: */
    /* alert(JSON.stringify(this.submittedData)); */
  }

  function submitData (oData) {
    /* the AJAX request... */
    var oAjaxReq = new XMLHttpRequest();
    oAjaxReq.submittedData = oData;
    oAjaxReq.onload = ajaxSuccess;
    if (oData.technique === 0) {
      /* method is GET */
      oAjaxReq.open("get", oData.receiver.replace(/(?:\?.*)?$/, oData.segments.length > 0 ? "?" + oData.segments.join("&") : ""), true);
      oAjaxReq.send(null);
      else {
      /* method is POST */
      oAjaxReq.open("post", oData.
      if (oData.technique === 3) {
        /* enctype is multipart/form-data */
        var sBoundary = "---------------------------" + Date.now().toString(16);
        oAjaxR
      oAjaxR
      } else {
        /* enctype is application/x-www-form-urlencoded or text/plain
        oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
           oAjaxReq.send(oData.segments.join(oData.technique === 2 ? "\r\n" : "&"));
      }
    }
  }

  function processStatus (oData) {
    if (oData.status > 0) { return; }
    /* the form is now totally serialized! do something before sending it to the server... */
    /* doSomething(oData); */
    /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
    submitData (oData);
  }

  function pushSegment (oFREvt) {
    this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
    this.owner.status--;
    processStatus(this.owner);
  }

  function plainEscape (sText) {
    /* how should I treat a text/plain form encoding? what characters are not allowed? this is what I suppose...: */
    /* "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2" */
    return sText.replace(/[\s\=\\]/g, "\\$&");
  }

  function SubmitRequest (oTarget) {
    var nFile, sFieldType, oField, oSegmReq, oFile, bIsPost = oTarget.method.toLowerCase() === "post";
    /* console.log("AJAXSubmit - Serializing form..."); */
    this.contentType = bIsPost && oTarget.enctype ? oTarget.enctype : "application\/x-www-form-urlencoded";
    this.technique = bIsPost ? this.contentType === "multipart\/form-data" ? 3 : this.contentType === "text\/plain" ? 2 : 1 : 0;
    this.receiver = oTarget.action;
    this.status = 0;
    this.segments = [];
    var fFilter = this.technique === 2 ? plainEscape : escape;
    for (var nItem = 0; nItem < oTarget.elements.length; nItem++) {
      oField = oTarget.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE" && oField.files.length > 0) {
        if (this.technique === 3) {
          /* enctype is multipart/form-data */
          for (nFile = 0; nFile < oField.files.length; nFile++) {
            oFile = oField.files[nFile];
            oSegmReq = new FileReader();
            /* (custom properties:) */
            oSegmReq.segmentIdx = this.segments.length;
            oSegmReq.owner = this;
            /* (end of custom properties) */
            oSegmReq.onload = pushSegment;
            this.segments.push("Content-Disposition: form-data; name=\"" + oField.name + "\"; filename=\""+ oFile.name + "\"\r\nContent-Type: " + oFile.type + "\r\n\r\n");
            this.status++;
            oSegmReq.readAsBinaryString(oFile);
          }
          else {
             /* enctype is application/x-www-form-urlencoded or text/plain or method is GET: files will not be sent! */
          for (nFile = 0; nFile < oField.files.length; this.segments.push(fFilter(oField.name) + "=" + fFilter(oField.files[nFile++].name)));
        }
        else if ((sFieldTyp
        /* field type is no
        this.segments.push(
          this.technique === 3 ? /* enctype is multipart/form-data */
            "Content-Disposition: form-data; name=\"" + oField
            * enctype is application/x-www-form-urlencoded or
               fFilter(oField.name) + "=" + fFilter(oField.value)
        );
      }
    }
    processStatus(this);
  }

  return function (oFormElement) {
    if (!oFormElement.action) { return; }
    new SubmitRequest(oFormElement);
  };

})();

</script>
</head>
<body>

<h1>Sending forms with pure AJAX</h1>

<h2>Using the GET method</h2>

<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h2>Using the POST method</h2>
<h3>Enctype: application/x-www-form-urlencoded (default)</h3>

<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: text/plain</h3>

<form action="register.php" method="post" enctype="text/plain" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      Your name: <input type="text" name="user" />
    </p>
    <p>
      Your message:<br />
      <textarea name="message" cols="40" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: multipart/form-data</h3>

<form action="register.php" method="post" enctype="multipart/form-data" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Upload example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" /><br />
      Sex:
      <input id="sex_male" type="radio" name="sex" value="male" /> <label for="sex_male">Male</label>
      <input id="sex_female" type="radio" name="sex" value="female" /> <label for="sex_female">Female</label><br />
      Password: <input type="password" name="secret" /><br />
      What do you prefer:
      <select name="image_type">
        <option>Books</option>
        <option>Cinema</option>
        <option>TV</option>
      </select>
    </p>
    <p>
      Post your photos:
      <input type="file" multiple name="photos[]">
    </p>
    <p>
      <input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" /> <label for="vehicle_bike">I have a bike</label><br />
      <input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" /> <label for="vehicle_car">I have a car</label>
    </p>
    <p>
      Describe yourself:<br />
      <textarea name="description" cols="50" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

</body>
</html>
```

Pour le tester, créez une page nommée **register.php** (qui est l'attribut `action` des formulaires d'exemple) et mettez y ce contenu *minimaliste*:

```php
<?php
/* register.php */

header("Content-type: text/plain");

/*
NOTE: You should never use `print_r()` in production scripts, or
otherwise output client-submitted data without sanitizing it first.
Failing to sanitize can lead to cross-site scripting vulnerabilities.
*/

echo ":: data received via GET ::\n\n";
print_r($_GET);

echo "\n\n:: Data received via POST ::\n\n";
print_r($_POST);

echo "\n\n:: Data received as \"raw\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

echo "\n\n:: Files received ::\n\n";
print_r($_FILES);
```

La syntaxe de ce script est la suivante:

    AJAXSubmit(myForm);

> **Note :** Ce framework utilise l'API [`FileReader`](/en-US/docs/DOM/FileReader) pour transmettre les fichiers uploadés. C'est une API récente qui n'est pas implémentée dans IE9 ou inférieur. Pour cette raison, l'upload via AJAX uniquement **est une technique expérimentale**. Si vous n'avez pas besoin de transférer des fichiers binaires, ce framework fonctionne bien dans la majorité des navigateurs.

> **Note :** La meilleure façon d'envoyer du contenu binaire est de passer par [ArrayBuffers](/en-US/docs/JavaScript/Typed_arrays/ArrayBuffer) ou [Blobs](/en-US/docs/DOM/Blob) en conjonction avec la méthode [`send()`](/en-US/docs/DOM/XMLHttpRequest#send%28%29) et possiblement avec la méthode [`readAsArrayBuffer()`](</en-US/docs/DOM/FileReader#readAsArrayBuffer()>) de l'API [`FileReader`](/en-US/docs/DOM/FileReader). Mais dans la mesure où le but de ce script est de fonctionner avec des données [chaînifiable](/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify), nous avons utilisé la méthode [`sendAsBinary()`](/en-US/docs/DOM/XMLHttpRequest#sendAsBinary%28%29) en conjonction avec la méthode [`readAsBinaryString()`](/en-US/docs/DOM/FileReader#readAsBinaryString%28%29) de l'API [`FileReader`](/en-US/docs/DOM/FileReader). Du coup, le script ci-dessous n'a de sens que quand vous voulez transférer de petits fichiers. Si vous n'avez pas l'intention de transférer des données binaires, songez plutôt à utilisez l'API [`FormData`](/en-US/docs/DOM/XMLHttpRequest/FormData).

> **Note :** La méthode non-standard `sendAsBinary` est dépréciée à partir de Gecko 31 et sera prochainement supprimée. La méthode standard `send(Blob data)` peut être utilisée à la place.

### Utiliser les objets FormData

Le constructeur de [`FormData`](/en-US/docs/DOM/XMLHttpRequest/FormData) vous permet de compiler des paires de clé/valeur à envoyer via `XMLHttpRequest`. Il est principalement prévu pour être utilisé dans l'envoi de formulaires, mais il peut être utilisé indépendemment des formulaires dans le but de transmettre des données associées. Les données transmises sont de même format que la méthode `submit()` d'un formulaire utiliserait pour envoyer les données si l'encodage du formulaire était configuré à "multipart/form-data". Les objets FormData peuvent être utilisés de nombreuses manières avec XMLHttpRequest. Pour des exemples et des explications sur la manière d'utiliser FormData avec une XMLHttpRequest, jettez un oeil sur la page [Utiliser les Objets FormData](/en-US/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects). Pour des raisons didactiques seulement, nous postons ici **une** **traduction** **[du précédent exemple](#A_little_vanilla_framework) transformé pour utiliser l'API `FormData`**. Notez la brièveté du code :

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Sending forms with FormData &ndash; MDN</title>
<script type="text/javascript">
"use strict";

function ajaxSuccess () {
  alert(this.responseText);
}

function AJAXSubmit (oFormElement) {
  if (!oFormElement.action) { return; }
  var oReq = new XMLHttpRequest();
  oReq.onload = ajaxSuccess;
  if (oFormElement.method.toLowerCase() === "post") {
    oReq.open("post", oFormElement.action);
    oReq.send(new FormData(oFormElement));
  } else {
    var oField, sFieldType, nFile, sSearch = "";
    for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
      oField = oFormElement.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" && oField.hasAttribute("type") ?
      oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE") {
        for (nFile = 0; nFile < oField.files.length;
            sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
      } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
        sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
      }
    }
    oReq.open("get", oFormElement.action.replace(/(?:\?.*)?$/, sSearch.replace(/^&/, "?")), true);
    oReq.send(null);
  }
}
</script>
</head>
<body>

<h1>Sending forms with FormData</h1>

<h2>Using the GET method</h2>

<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h2>Using the POST method</h2>
<h3>Enctype: application/x-www-form-urlencoded (default)</h3>

<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: text/plain</h3>

<p>The text/plain encoding is not supported by the FormData API.</p>

<h3>Enctype: multipart/form-data</h3>

<form action="register.php" method="post" enctype="multipart/form-data" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Upload example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" /><br />
      Sex:
      <input id="sex_male" type="radio" name="sex" value="male" /> <label for="sex_male">Male</label>
      <input id="sex_female" type="radio" name="sex" value="female" /> <label for="sex_female">Female</label><br />
      Password: <input type="password" name="secret" /><br />
      What do you prefer:
      <select name="image_type">
        <option>Books</option>
        <option>Cinema</option>
        <option>TV</option>
      </select>
    </p>
    <p>
      Post your photos:
      <input type="file" multiple name="photos[]">
    </p>
    <p>
      <input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" /> <label for="vehicle_bike">I have a bike</label><br />
      <input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" /> <label for="vehicle_car">I have a car</label>
    </p>
    <p>
      Describe yourself:<br />
      <textarea name="description" cols="50" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

</body>
</html>
```

> **Note :** Comme déjà dit, les objets **{{domxref("FormData")}} ne sont pas des objets [chainifiables](/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify)**. Si vous voulez chainifier les données soumises, utilisez [l'exemple précédent en *pure*-AJAX](#A_little_vanilla_framework). Notez également que, bien que dans cet exemple il y a quelques champs `file` {{ HTMLElement("input") }}, **quand vous soumettez un formulaire via l'API `FormData` vous n'avez pas besoin d'utiliser l'API [`FileReader`](/en-US/docs/DOM/FileReader) également**&nbsp;: les fichiers sont automatiquement chargés et transférés.

## Récupérer la date de modification

```js
function getHeaderTime () {
  alert(this.getResponseHeader("Last-Modified"));  /* Une chaine valide GMTString ou null */
}

var oReq = new XMLHttpRequest();
oReq.open("HEAD" /* utilisez HEAD seulement si vous ne voulez que les headers ! */, "mapage.html", true);
oReq.onload = getHeaderTime;
oReq.send();
```

### Faire quelque chose quand la date de dernière modification change

Créons deux fonctions:

```js
function getHeaderTime () {

  var
    nLastVisit = parseFloat(window.localStorage.getItem('lm_' + this.filepath)),
    nLastModif = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
    window.localStorage.setItem('lm_' + this.filepath, Date.now());
    isFinite(nLastVisit) && this.callback(nLastModif, nLastVisit);
  }

}

function ifHasChanged(sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.open("HEAD" /* utilisons HEAD - nous ne voulons que les Headers ! */, sURL, true);
  oReq.callback = fCallback;
  oReq.filepath = sURL;
  oReq.onload = getHeaderTime;
  oReq.send();
}
```

Test:

```js
/* Testons le fichier "mapage.html"... */

ifHasChanged("mapage.html", function (nModif, nVisit) {
  alert("La page '" + this.filepath + "' a été changée le " + (new Date(nModif)).toLocaleString() + "!");
});
```

Si vous voulez savoir **si la _page courante_ a changée**, lisez l'article à propos de la propriété [`document.lastModified`](/en-US/docs/Web/API/document.lastModified).

## Cross-site XMLHttpRequest

Les navigateurs récents supportent les requêtes cross-site en implémentant le Standard [Access Control for Cross-Site Requests](/en-US/docs/HTTP_access_control) (Web Application Working Group).  Tant que le serveur est configuré pour autoriser les requêtes depuis l'origine de votre web application, `XMLHttpRequest` fonctionnera. Sinon, une exception `INVALID_ACCESS_ERR` sera lancée.

## Contourner le cache

Une approche cross-browser pour contourner le cache est d'ajouter le timestamp à l'URL, en étant sûr d'inclure un "?" ou un "&" selon les cas. Par exemple :

    http://foo.com/bar.html -> http://foo.com/bar.html?12345
    http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345

Comme le cache local est indexé selon les URL, celà permet à toutes les requêtes d'être uniques, et du coup de contourner le cache.

Vous pouvez automatiquement ajuster les URL en utilisant le code suivant :

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime(), true);
oReq.send(null);
```

## Sécurité

{{fx_minversion_note(3, "Les versions de Firefox avant Firefox 3 autorisaient à mettre les préférences <code>capability.policy.&lt;policyname&gt;.XMLHttpRequest.open&lt;/policyname&gt;</code> à <code>allAccess</code> pour donner l'accès cross-sites à des sites spécifiques. Cela n'est plus possible.")}}

{{fx_minversion_note(5, "Les versions de Firefox avant Firefox 5 pouvaient utiliser <code>netscape.security.PrivilegeManager.enablePrivilege(\"UniversalBrowserRead\");</code> pour demander un accès cross-site. Ce n'est plus supporté, me^me si cela ne produit aucun avertissement et que la demande de permission est toujours présente.")}}

La manière recommandée d'activer les requêtes intersites est d'utiliser l'en-tête HTTP `Access-Control-Allow-Origin` dans la réponse du `XMLHttpRequest`.

### XMLHttpRequests stoppées

Si vous vous retrouvez avec une `XMLHttpRequest` ayant `status=0` et `statusText=null`, cela signifie que la requête n'a pas été autorisée à être effectuée. Elle a été [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Une cause probable est lorsque [l'origine `XMLHttpRequest`](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (lors de la création de l'objet `XMLHttpRequest`) a changé quand l'objet `XMLHttpRequest` est déjà `open()`. Ce cas peut se produire par exemple lorsque l'on a une `XMLHttpRequest` qui est lancée sur un évènement `onunload` d'une fenêtre&nbsp;: l'objet `XMLHttpRequest` est en fait créé lorsque la fenêtre sur le point de se fermer est toujours là, et la demande est envoyée (c'est-à-dire `open()`) lorsque cette fenêtre a perdu son focus et une autre fenêtre a potentiellement pris le focus. La manière d'éviter ce problème est de fixer un écouteur sur l'évènement `activate` de la nouvelle fenêtre qui se lance quand l'ancienne fenêtre a son évènement `unload` lancé.

## Utiliser XMLHttpRequest depuis un module JavaScript / un composant XPCOM

Instancier une `XMLHttpRequest` depuis un [module JavaScript](/en-US/docs/JavaScript_code_modules/Using) ou un composant XPCOM fonctionne un peu différemment; on ne peut pas l'instancier via le constructeur `XMLHttpRequest()`. Le constructeur n'est pas défini dans le composant et le code retourne une erreur. Le meilleur moyen de fixer le problème est d'utiliser le constructeur du composant XPCOM.

```js
const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1", "nsIXMLHttpRequest");
```

Malheureusement dans les versions de Gecko avant Gecko 16 il y a un bug : les requêtes créées ainsi peuvent être annulées sans raison. Si votre code doit marcher sur Gecko 15 ou moins, vous pouvez utiliser le constructeur XMLHttpRequest depuis le DOM caché de la fenêtre comme ceci :

```js
const { XMLHttpRequest } = Components.classes["@mozilla.org/appshell/appShellService;1"]
                                     .getService(Components.interfaces.nsIAppShellService)
                                     .hiddenDOMWindow;
var oReq = new XMLHttpRequest();
```

## Voir aussi

1.  [MDN AJAX introduction](/en-US/docs/AJAX/Getting_Started)
2.  [HTTP access control](/en-US/docs/HTTP_access_control)
3.  [How to check the security state of an XMLHTTPRequest over SSL](/en-US/docs/How_to_check_the_security_state_of_an_XMLHTTPRequest_over_SSL)
4.  [XMLHttpRequest - REST and the Rich User Experience](http://www.peej.co.uk/articles/rich-user-experience.html)
5.  [Microsoft documentation](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmobjxmlhttprequest.asp)
6.  [Apple developers' reference](http://developer.apple.com/internet/webcontent/xmlhttpreq.html)
7.  ["Using the XMLHttpRequest Object" (jibbering.com)](http://jibbering.com/2002/4/httprequest.html)
8.  [The XMLHttpRequest Object: W3C Specification](http://www.w3.org/TR/XMLHttpRequest/)
9.  [Web Progress Events specification](http://dev.w3.org/2006/webapi/progress/Progress.html)
10. [XMLHttpRequest (Référence Web API)](/fr/docs/Web/API/XMLHttpRequest)
