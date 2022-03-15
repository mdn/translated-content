---
title: Envoi de formulaires avec JavaScript
slug: Learn/Forms/Sending_forms_through_JavaScript
translation_of: Learn/Forms/Sending_forms_through_JavaScript
original_slug: Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript
---
{{LearnSidebar}}{{PreviousMenuNext("Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés", "Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers", "Web/Guide/HTML/Formulaires")}}

Comme dans le [précédent article](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires), les formulaires HTML peuvent envoyer une requête HTTP par déclaration. Mais des formulaires peuvent aussi préparer une requête HTTP à adresser via JavaScript. Cet article explore comment faire cela.

## Un formulaire n'est pas toujours un \<form>

Avec les [applications Web ouvertes](/fr/docs/Open_Web_apps_and_Web_standards), il est de plus en plus courant d'utiliser des [formulaires HTML](/fr/docs/Learn/Forms) autres que des formulaires à remplir par des personnes — de plus en plus de développeurs prennent le contrôle sur la transmission des données.

### Obtenir le contrôle sur la totalité de l'interface

La soumission d'un formulaire HTML standard charge l'URL où les données sont envoyées, car la fenêtre du navigateur manipule une pleine page. Éviter de charger une pleine page peut amener plus de fluidité en masquant des clignotements et des lenteurs de réseau.

De nombreuses UI modernes n'utilisent les formulaires HTML que pour recueillir des données utilisateur. Lorsque l'utilisateur veut envoyer les données, l'application prend la main et transmet les données de manière asynchrone en arrière-plan, mettant à jour uniquement les parties de l'interface utilisateur nécessitant des modifications.

L'envoi asynchrone de données arbitraires est connu sous le nom AJAX, qui signifie "Asynchronous JavaScript And XML" (XML et JavaScript asynchrones).

### Comment est-ce différent ?

[AJAX](/fr/docs/AJAX) utilise l'objet DOM {{domxref("XMLHttpRequest")}} (XHR).Il peut construire des requêtes HTTP, les envoyer et retrouver leur résultats.

> **Note :** Les techniques AJAX anciennes ne se fondaient pas forcément sur {{domxref("XMLHttpRequest")}}. Par exemple, [JSONP](http://en.wikipedia.org/wiki/JSONP) combiné à la fonction [`eval()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/eval). Cela fonctionne, mais n'est pas recommandé en raison de sérieux problèmes de sécurité. La seule raison d'en poursuivre l'utilisation est l'utilisation de navigateurs anciens qui ne prennent pas en charge {{domxref("XMLHttpRequest")}} ou [JSON](/fr/docs/Glossaire/JSON), mais ce sont vraiment des navigateurs anciens ! **Évitez ces techniques.**



Historiquement, {{domxref("XMLHttpRequest")}} a été conçu pour récupérer et envoyer du XML comme format d'échange. Cependant, [JSON](/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON) a remplacé XML et est de plus en plus courant aujourd'hui.

Mais ni XML ni JSON ne s'adaptent à l'encodage des demandes de données de formulaire. Les données de formulaire (`application/x-www-form-urlencoded`) sont constituées de listes de paires clé/valeur codées par URL. Pour la transmission de données binaires, la requête HTTP est transformée en données `multipart/form‑data`.

Si vous contrôlez le frontal (le code exécuté dans le navigateur) et l'arrière‑plan (le code exécuté sur le serveur), vous pouvez envoyer JSON/XML et les traiter comme vous le souhaitez.

Mais si vous voulez utiliser un service tiers, ce n'est pas si facile. Certains services n'acceptent que les données de formulaire. Il y a aussi des cas où il est plus simple d'utiliser les données du formulaire. Si les données sont des paires clé/valeur ou des données binaires brutes, des outils d'arrière‑plan existants peuvent les traiter sans code supplémentaire.

Comment envoyer de telles données ?

## Envoi des données de formulaire

Il y a 3 façons d'envoyer des données de formulaire, allant des techniques existantes jusqu'à l'objet {{domxref("XMLHttpRequest/FormData", "FormData")}} plus récent. Examinons-les en détail.

### Construire manuellement un XMLHttpRequest

{{domxref("XMLHttpRequest")}} est la manière la plus sûre et la plus fiable de faire des requêtes HTTP. Pour envoyer des données de formulaire avec {{domxref("XMLHttpRequest")}}, préparez les données par encodage URL et suivez les spécificités des requêtes de données de formulaire.

> **Note :** Pour en savoir plus sur `XMLHttpRequest`, ces articles pourraient vous intéresser : un article d'introduction à [AJAX](/fr/docs/Web/Guide/AJAX/Premiers_pas) et un didacticiel plus fouillé à ce propos utilisant [`XMLHttpRequest`](/fr/docs/HTML_in_XMLHttpRequest).

Reconstruisons l'exemple précédent :

```html
<button type="button" onclick="sendData({test:'ok'})">Cliquez ici !</button>
```

Comme vous pouvez le voir, le HTML n'a pas réellement changé. Mais, le JavaScript est totalement différent :

```js
function sendData(data) {
  var XHR = new XMLHttpRequest();
  var urlEncodedData = "";
  var urlEncodedDataPairs = [];
  var name;

  // Transformez l'objet data en un tableau de paires clé/valeur codées URL.
  for(name in data) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }

  // Combinez les paires en une seule chaîne de caractères et remplacez tous
  // les espaces codés en % par le caractère'+' ; cela correspond au comportement
  // des soumissions de formulaires de navigateur.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  // Définissez ce qui se passe en cas de succès de soumission de données
  XHR.addEventListener('load', function(event) {
    alert('Ouais ! Données envoyées et réponse chargée.');
  });

  // Définissez ce qui arrive en cas d'erreur
  XHR.addEventListener('error', function(event) {
    alert('Oups! Quelque chose s\'est mal passé.');
  });

  // Configurez la requête
  XHR.open('POST', 'https://example.com/cors.php');

  // Ajoutez l'en-tête HTTP requise pour requêtes POST de données de formulaire
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Finalement, envoyez les données.
  XHR.send(urlEncodedData);
}
```

Voici le résultat en direct :

{{EmbedLiveSample("Construire_manuellement_un_XMLHttpRequest", "100%", 50)}}

> **Note :** Cette utilisation de {{domxref("XMLHttpRequest")}} est assujettie à la politique « même origine » si vous voulez envoyer des données à un site web tiers. Pour les demandes d'origine croisée, vous aurez besoin d'un contrôle d'accès [CORS et HTTP](/fr/docs/HTTP/Access_control_CORS).

### Utilisation de XMLHttpRequest et de l'objet FormData

Construire manuellement une requête HTTP peut devenir fastidieux. Heureusement, une [spécification XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest/) récente fournit un moyen pratique et plus simple pour traiter les demandes de données de formulaire avec l'objet {{domxref("XMLHttpRequest/FormData", "FormData")}}.

L'objet {{domxref("XMLHttpRequest/FormData", "FormData")}} peut s'utiliser pour construire des données de formulaire pour la transmission ou pour obtenir les données des élément de formulaire de façon à gérer leur mode d'envoi. Notez que les objets {{domxref("XMLHttpRequest/FormData", "FormData")}} sont en écriture seule (« write only »), ce qui signifie que vous pouvez les modifier, mais pas récupérer leur contenu.

L'utilisation de cet objet est détaillée dans [Utiliser les objets FormData](/fr/docs/Web/API/FormData/Utilisation_objets_FormData), mais voici deux exemples :

#### Utiliser un objet FormData autonome

```html
<button type="button" onclick="sendData({test:'ok'})">Cliquez ici !</button>
```

Vous devriez être familier de cet exemple HTML.

```js
function sendData(data) {
  var XHR = new XMLHttpRequest();
  var FD  = new FormData();

  // Mettez les données dans l'objet FormData
  for(name in data) {
    FD.append(name, data[name]);
  }

  // Définissez ce qui se passe si la soumission s'est opérée avec succès
  XHR.addEventListener('load', function(event) {
    alert('Ouais ! Données envoyées et réponse chargée.');
  });

  // Definissez ce qui se passe en cas d'erreur
  XHR.addEventListener('error', function(event) {
    alert('Oups! Quelque chose s\'est mal passé.');
  });

  // Configurez la requête
  XHR.open('POST', 'https://example.com/cors.php');

  // Expédiez l'objet FormData ; les en-têtes HTTP sont automatiquement définies
  XHR.send(FD);
}
```

Voici le résultat directement :

{{EmbedLiveSample("Utiliser_un_objet_FormData_autonome", "100%", 60)}}

#### Utiliser un objet FormData lié à un élément form

Vous pouvez également lier un objet `FormData` à un élément {{HTMLElement("form")}} et  créer ainsi un `FormData` représentant les données contenues dans le formulaire.

Le HTML est classique :

```html
<form id="myForm">
  <label for="myName">Dites-moi votre nom :</label>
  <input id="myName" name="name" value="John">
  <input type="submit" value="Envoyer !">
</form>
```

Mais JavaScript sera de la forme :

```js
window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // Liez l'objet FormData et l'élément form
    var FD = new FormData(form);

    // Définissez ce qui se passe si la soumission s'est opérée avec succès
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // Definissez ce qui se passe en cas d'erreur
    XHR.addEventListener("error", function(event) {
      alert('Oups! Quelque chose s\'est mal passé.');
    });

    // Configurez la requête
    XHR.open("POST", "https://example.com/cors.php");

    // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
    XHR.send(FD);
  }

  // Accédez à l'élément form …
  var form = document.getElementById("myForm");

  // … et prenez en charge l'événement submit.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
```

Voici le résultat en direct :

{{EmbedLiveSample("Utiliser_un_objet_FormData_lié_à_un_élément_form", "100%", 70)}}

Vous pouvez même intervenir davantage dans le processus en utilisant la propriété {{domxref("HTMLFormElement.elements", "elements")}} du formulaire pour obtenir une liste de tous les éléments de données du formulaire et les gérer chacun individuellement dans le programme. Pour en savoir plus, voir l'exemple dans la {{SectionOnPage("/en-US/docs/Web/API/HTMLFormElement.elements", "Accessing the element list's contents")}}.

### Construire un DOM dans un `iframe` caché

La plus ancienne façon d'expédier des données de formulaire de manière asynchrone consiste à construire un formulaire avec l'API DOM, puis d'envoyer ses données dans un {{HTMLElement("iframe")}} caché. Pour accéder au résultat de votre envoi, il suffit de récupérer le contenu de l'élément {{HTMLElement("iframe")}}.

> **Attention :** **Évitez d'employer cette technique.** Il y a des risques concernant la sécurité avec des services tierce-partie car vous laissez ouverte la possibilité d'une [attaque par injection de script](https://fr.wikipedia.org/wiki/Cross-site_scripting). Si vous utilisez HTTPS, il reste possible de perturber la [politique de la même origine](/fr/docs/JavaScript/Same_origin_policy_for_JavaScript), ce qui peut rendre le contenu de l'élément {{HTMLElement("iframe")}} inatteignable. Toutefois, cette méthode peut être votre seule possibilité si vous devez prendre en charge des navigateurs très anciens.

Voici un exemple :

```html
<button onclick="sendData({test:'ok'})">Cliquez ici !</button>
```

```js
// Créer l'iFrame servant à envoyer les données
var iframe = document.createElement("iframe");
iframe.name = "myTarget";

// Puis, attachez l'iFrame au document principal
window.addEventListener("load", function () {
  iframe.style.display = "none";
  document.body.appendChild(iframe);
});

// Voici la fonction réellement utilisée pour expédier les données
// Elle prend un paramètre, qui est un objet chargé des paires clé/valeurs.
function sendData(data) {
  var name,
      form = document.createElement("form"),
      node = document.createElement("input");

  // Définir ce qui se passe quand la réponse est chargée
  iframe.addEventListener("load", function () {
    alert("Ouais ! Données envoyés.");
  });

  form.action = "http://www.cs.tut.fi/cgi-bin/run/~jkorpela/echo.cgi";
  form.target = iframe.name;

  for(name in data) {
    node.name  = name;
    node.value = data[name].toString();
    form.appendChild(node.cloneNode());
  }

  // Pour être envoyé, le formulaire nécessite d'être attaché au document principal.
  form.style.display = "none";
  document.body.appendChild(form);

  form.submit();

  // Une fois le formulaire envoyé, le supprimer.
  document.body.removeChild(form);
}
```

Voici le résultat en direct :

{{EmbedLiveSample('Construire_un_DOM_dans_un_iframe_caché', "100%", 50)}}



## Gestion des données binaires

Si vous utilisez un objet {{domxref("XMLHttpRequest/FormData", "FormData")}} avec un formulaire qui inclut des widgets `<input type="file">`, les données seront traitées automatiquement. Mais pour envoyer des données binaires à la main, il y a un travail supplémentaire à faire.

Il existe de nombreuses sources de données binaires sur le Web moderne : {{domxref("FileReader")}}, {{domxref("HTMLCanvasElement", "Canvas")}} et [WebRTC](/fr/docs/WebRTC/navigator.getUserMedia), par exemple. Malheureusement, certains anciens navigateurs ne peuvent pas accéder aux données binaires ou nécessitent des solutions de contournement compliquées. Ces cas hérités sont hors du champ d'application de cet article. Si vous voulez en savoir plus sur l'API FileReader, lisez [Utiliser les fichiers des applications Web](/fr/docs/Using_files_from_web_applications).

Envoyer des données binaires avec le support de {{domxref("XMLHttpRequest/FormData", "FormData")}} est direct. Utilisez la méthode append() et vous avez terminé. Si vous devez le faire à la main, c'est plus délicat.

Dans l'exemple suivant, nous utilisons l'API {{domxref("FileReader")}} pour accéder aux données binaires et ensuite nous construisons à la main la demande de données du formulaire en plusieurs parties :

```html
<form id="myForm">
  <p>
    <label for="i1">Données textuelles :</label>
    <input id="i1" name="myText" value="Quelques données textuelles">
  </p>
  <p>
    <label for="i2">Fichier de données :</label>
    <input id="i2" name="myFile" type="file">
  </p>
  <button>Envoyer !</button>
</form>
```

Comme vous pouvez le voir, le HTML est un `<form>`standard. Il n'y a rien de magique là‑dedans. La « magie » est dans le JavaScript :

```js
// Comme nous voulons avoir accès à un nœud DOM,
// nous initialisons le script au chargement de la page.
window.addEventListener('load', function () {

  // Ces variables s'utilisent pour stocker les données du formulaire
  var text = document.getElementById("i1");
  var file = {
        dom    : document.getElementById("i2"),
        binary : null
      };

  // Nous utilisons l'API de FileReader pour accéder au contenu du fichier
  var reader = new FileReader();

  // Comme FileReader est asynchrone, stockons son résulata
  // quand il a fini de lire le fichier
  reader.addEventListener("load", function () {
    file.binary = reader.result;
  });

  // Au chargement de la page, si un fichier est déjà choisi, lisons‑le
  if(file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // Sinon, lisons le fichier une fois que l'utilisateur l'a sélectionné
  file.dom.addEventListener("change", function () {
    if(reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // sendData est notre fonction principale
  function sendData() {
    // S'il y a un fichier sélectionné, attendre sa lecture
    // Sinon, retarder l'exécution de la fonction
    if(!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // Pour construire notre requête de données de formulaire en plusieurs parties
    // nous avons besoin d'une instance de XMLHttpRequest
    var XHR = new XMLHttpRequest();

    // Nous avons besoin d'un séparateur pour définir chaque partie de la requête
    var boundary = "blob";

    // Stockons le corps de la requête dans une chaîne littérale
    var data = "";

    // Ainsi, si l'utilisateur a sélectionné un fichier
    if (file.dom.files[0]) {
      // Lancer une nouvelle partie de la requête du corps
      data += "--" + boundary + "\r\n";

      // Décrivons là comme étant des données du formulaire
      data += 'content-disposition: form-data; '
      // Définissons le nom des données du formulaire
            + 'name="'         + file.dom.name          + '"; '
      // Fournissons le vrai nom du fichier
            + 'filename="'     + file.dom.files[0].name + '"\r\n';
      // et le type MIME du fichier
      data += 'Content-Type: ' + file.dom.files[0].type + '\r\n';

      // Il y a une ligne vide entre les métadonnées et les données
      data += '\r\n';

      // Ajoutons les données binaires à la requête du corps
      data += file.binary + '\r\n';
    }

    // C'est plus simple pour les données textuelles
    // Démarrons une nouvelle partie dans notre requête du corps
    data += "--" + boundary + "\r\n";

    // Disons que ce sont des données de formulaire et nommons les
    data += 'content-disposition: form-data; name="' + text.name + '"\r\n';
    // Il y a une ligne vide entre les métadonnées et les données
    data += '\r\n';

    // Ajoutons les données textuelles à la requête du corps
    data += text.value + "\r\n";

    // Ceci fait, "fermons" la requête du corps
    data += "--" + boundary + "--";

    // Définissons ce qui arrive en cas de succès pour la soumission des données
    XHR.addEventListener('load', function(event) {
      alert('Ouais ! Données expédiées et réponse chargée.');
    });

    // Définissons ce qui se passe en cas d'eerreur
    XHR.addEventListener('error', function(event) {
      alert('Oups! Quelque chose s\'est mal passé.');
    });

    // Configurons la requête
    XHR.open('POST', 'https://example.com/cors.php');

    // Ajoutons l'en-tête requise pour gèrer la requête POST des données
    // de formulaire en plusieurs parties
    XHR.setRequestHeader('Content-Type','multipart/form-data; boundary=' + boundary);

    // et finalement, expédions les données.
    XHR.send(data);
  }

  // Accéder au formulaire …
  var form = document.getElementById("myForm");

  // … pour prendre en charge l'événement soumission
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    sendData();
  });
});
```

Voici le résultat en direct :

{{EmbedLiveSample('Gestion_des_données_binaires', "100%", 150)}}

## Conclusion

Selon le navigateur, l'envoi de données de formulaire par JavaScript peut être facile ou difficile. L'objet {{domxref("XMLHttpRequest/FormData", "FormData")}} en est généralement la cause et n'hésitez pas à utiliser un « polyfill » ([prothèse d'émulation](https://fr.wikipedia.org/wiki/Polyfill)) pour cela sur les navigateurs anciens :

- [Ces primitives](https://gist.github.com/3120320) sont des « polyfills » de  `FormData` avec des {{domxref("Using_web_workers","worker")}}.
- [HTML5-formdata](https://github.com/francois2metz/html5-formdata) tente d'opérer un « polyfill » de l'objet `FormData`, mais il requiert un [File API](http://www.w3.org/TR/FileAPI/)
- [Ce « polyfill »](https://github.com/jimmywarting/FormData) fournit la plupart des nouvelles méthodes dont `FormData` dispose (entrées, clés, valeurs et prise en charge de `for...of`)



{{PreviousMenuNext("Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés", "Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers", "Web/Guide/HTML/Formulaires")}}



## Dans ce module

- [Mon premier formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML)
- [Comment structurer un formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML)
- [Les widgets natifs pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs)
- [Envoi des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires)
- [Validation des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire)
- [Comment construire des widgets personnalisés pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés)
- [Envoi de formulaires à l'aide du JavaScript](/fr/docs/Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript)
- [Formulaires HTML dans les navigateurs anciens](/fr/docs/Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers)
- [Mise en forme des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms)
- [Table de compatibilité des propriétés pour les widgets de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Property_compatibility_table_for_form_widgets)
