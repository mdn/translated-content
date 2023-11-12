---
title: Envoyer des formulaires avec JavaScript
slug: Learn/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: d9026c37acaf22da682206c381686fe8a4666f16
---

{{LearnSidebar}}

Les formulaires HTML peuvent envoyer des requêtes [HTTP](/fr/docs/Web/HTTP) de façon déclarative. Il est aussi possible d'utiliser les formulaires afin de préparer des requêtes HTTP qu'on enverra avec JavaScript, par exemple avec `XMLHttpRequest` ou `Fetch`. Dans cet article, nous verrons en quoi consiste cette approche.

## Un formulaire parfois détourné

Avec les applications progressives et/ou basées sur un <i lang="en">framework</i>, il est fréquent d'utiliser [les formulaires HTML](/fr/docs/Learn/Forms) afin d'envoyer des données sans charger un nouveau document lorsque les données de la réponse sont reçues. Voyons d'abord pourquoi une nouvelle approche est nécessaire.

### Maîtriser l'interface générale

Lorsqu'on utilise un envoi de formulaire HTML standard, comme décrit dans l'article précédent, le navigateur charge l'URL où les données ont été envoyées et navigue donc vers une autre page, avec un chargement complet. Éviter un tel chargement permet une meilleure expérience en évitant des requêtes sur le réseau ainsi que des problèmes visuels de clignotement à l'affichage (<i lang="en">flickering</i>).

Une interface utilisateur moderne utilisera généralement des formulaires HTML pour récupérer des données saisies par la personne, pas nécessairement pour les envoyer. Lorsque la personne soumet le formulaire, l'application prend le contrôle et transmet les données en arrière-plan, de façon asynchrone, mettant uniquement à jour les éléments de l'interface qui le nécessitent.

L'envoi de données arbitraires de façon asynchrone est généralement désigné par l'acronyme [AJAX](/fr/docs/Web/Guide/AJAX), qui signifie **<i lang="en">Asynchronous JavaScript And XML</i>** en anglais (qu'on pourrait traduire par «&nbsp;JavaScript et XML asynchrones&nbsp;»).

### En quoi est-ce différent&nbsp;?

L'objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) (souvent abrégé en XHR) fourni par le DOM permet de construire des requêtes HTTP, de les envoyer et d'en utiliser le résultat. À l'origine, [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) fut conçu pour échanger des données au format XML, mais il permet désormais aussi d'échanger des données [JSON](/fr/docs/Glossary/JSON). Toutefois, ni XML ni JSON ne sont des formats appropriés pour l'encodage des données de formulaire dans une requête HTTP. Les données de formulaire, décrite avec le type (`application/x-www-form-urlencoded`), prennent la forme d'une liste de paires clé/valeur encodées en URL. Pour la transmission de données binaires, la requête HTTP utilise le type `multipart/form-data`.

> **Note :** Désormais, c'est [l'API <i lang="en">Fetch</i>](/fr/docs/Web/API/Fetch_API) qui est utilisée à la place de XHR, en raison de ses avantages. La plupart du code présenté dans cet article pourrait être réécrit pour utiliser <i lang="en">Fetch</i> à la place de XHR.

Si vous contrôlez la partie cliente (celle exécutée dans le navigateur) et la partie serveur, vous pouvez échanger du JSON et du XML et les traiter comme bon vous semble. Cependant, si vous utilisez un service tiers, vous devez envoyer les données dans un format bien défini.

Comment donc envoyer de telles données&nbsp;? Nous allons voir différentes techniques par la suite.

## Envoyer les données d'un formulaire

Il existe trois méthodes pour envoyer les données d'un formulaire&nbsp;:

- Construire un objet `XMLHttpRequest` manuellement
- Utiliser un objet `FormData` autonome
- Utiliser un objet `FormData` rattaché à un élément `<form>`

Voyons chacune en détails par la suite.

### Construire une requête XHR manuellement

[`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) une façon fiable pour construire des requêtes HTTP. Pour envoyer des données de formulaire avec [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest), on prépare les données en les encodant en URL et on respecte les contraintes propres aux requêtes d'envoi des données de formulaires. Prenons un exemple.

#### HTML

```html
<button>Cliquez ici !</button>
```

#### JavaScript

```js
const btn = document.querySelector("button");

function sendData(data) {
  console.log("Envoi des données en cours");

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  // On transforme l'objet des données en un tableau
  // de paires clé/valeur encodées en URL.
  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    );
  }

  // On combine les paires en une seule chaîne de caractères
  // et on remplace les espaces encodés par le caractère +
  // afin de correspondre au comportement des navigateurs
  // pour les envois de formulaires.
  const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // On définit ce qui se produit lorsque
  // les données sont bien envoyées
  XHR.addEventListener("load", (event) => {
    alert("Les données ont été envoyées et la réponse chargée.");
  });

  // On définit ce qui se produit en cas
  // d'erreur
  XHR.addEventListener("error", (event) => {
    alert("Une erreur est survenue.");
  });

  // On prépare la requête
  XHR.open("POST", "https://example.com/cors.php");

  // On ajoute l'en-tête HTTP nécessaire pour le format
  // des données de formulaires
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Pour finir, on envoie les données.
  XHR.send(urlEncodedData);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
```

#### Résultat

{{EmbedLiveSample("", "100%", 50)}}

> **Note :** Cette utilisation de [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) est sujette aux [règles de même origine (<i lang="en">same-origin policy</i>)](/fr/docs/Glossary/Same-origin_policy). Si vous souhaitez effectuer des requêtes entre différentes origines, vous devrez paramétrer [le contrôle d'accès CORS](/fr/docs/Web/HTTP/CORS).

### Utiliser `XMLHttpRequest` et `FormData`

Construire une requête HTTP manuellement peut s'avérer laborieux. Heureusement, [la spécification de l'API `XMLHttpRequest`](https://www.w3.org/TR/XMLHttpRequest/) fournit une méthode pour gérer les requêtes transmettant les données d'un formulaire avec l'objet [`FormData`](/fr/docs/Web/API/FormData).

On peut utiliser un objet [`FormData`](/fr/docs/Web/API/FormData) pour construire des données de formulaire à transmettre ou pour obtenir les données provenant d'un formulaire afin de gérer leur envoi.

L'article [Utiliser les objets `FormData`](/fr/docs/Web/API/FormData/Using_FormData_Objects) couvre ce sujet en particulier, mais voici deux exemples&nbsp;:

#### Construire un objet `FormData` autonome

##### HTML

```html
<button>Cliquez ici !</button>
```

##### JavaScript

```js
const btn = document.querySelector("button");

function sendData(data) {
  const XHR = new XMLHttpRequest();
  const FD = new FormData();

  // On inscrit les données dans l'objet FormData
  for (const [name, value] of Object.entries(data)) {
    FD.append(name, value);
  }

  // On définit ce qui se produit lorsque
  // les données sont bien envoyées
  XHR.addEventListener("load", (event) => {
    alert("Les données ont été envoyées et la réponse chargée.");
  });

  // On définit ce qui se produit en cas
  // d'erreur
  XHR.addEventListener("error", (event) => {
    alert("Une erreur est survenue.");
  });

  // On prépare la requête
  XHR.open("POST", "https://example.com/cors.php");

  // On envoie l'objet FormData : les en-têtes HTTP sont
  // paramétrés automatiquement
  XHR.send(FD);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
```

##### Résultat

{{EmbedLiveSample("", "100%", 50)}}

#### Utiliser un objet `FormData` couplé à un élément `<form>`

Il est aussi possible de rattacher un objet `FormData` à un élément [`<form>`](/fr/docs/Web/HTML/Element/Form). On obtient ainsi un objet `FormData` qui représente les données contenues dans le formulaire.

##### HTML

```html
<form id="monFormulaire">
  <label for="monNom">Indiquez votre nom :</label>
  <input id="monNom" name="name" value="Dominique" />
  <input type="submit" value="Envoyer !" />
</form>
```

##### JavaScript

C'est le code JavaScript qui intercepte le formulaire&nbsp;:

```js
window.addEventListener("load", () => {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // on crée l'objet FormData en le rattachant
    // à l'élément de formulaire
    const FD = new FormData(form);

    // On définit ce qui se produit lorsque
    // les données sont bien envoyées
    XHR.addEventListener("load", (event) => {
      alert(event.target.responseText);
    });

    // On définit ce qui se produit en cas
    // d'erreur
    XHR.addEventListener("error", (event) => {
      alert("Une erreur est survenue.");
    });

    // On prépare la requête
    XHR.open("POST", "https://example.com/cors.php");

    // On envoie les données avec ce qui a été
    // fourni dans le formulaire
    XHR.send(FD);
  }

  // On récupère une référence au formulaire HTML
  const form = document.getElementById("monFormulaire");

  // On ajoute un gestionnaire d'évènement 'submit'
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    sendData();
  });
});
```

##### Résultat

{{EmbedLiveSample("", "100%", 50)}}

Il est possible d'aller encore plus loin en utilisant la propriété [`elements`](/fr/docs/Web/API/HTMLFormElement/elements) afin d'obtenir la liste complète des éléments de données du formulaire pour les gérer individuellement. Pour en savoir plus à ce sujet, consultez l'exemple [Accéder aux contrôles d'un formulaire](/fr/docs/Web/API/HTMLFormElement/elements#accéder_aux_contrôles_du_formulaire).

## Gérer les données binaires

Si vous utilisez un objet [`FormData`](/fr/docs/Web/API/FormData) pour un formulaire qui inclut des contrôles `<input type="file">`, les données seront traitées automatiquement. En revanche, si on les traite manuellement, il y aura un travail supplémentaire à accomplir.

Il existe de nombreuses sources fournissant des données binaires, comme [`FileReader`](/fr/docs/Web/API/FileReader), [`Canvas`](/fr/docs/Web/API/HTMLCanvasElement), et [WebRTC](/fr/docs/Web/API/Navigator/getUserMedia). Toutefois, certains navigateurs historiques ne peuvent pas accéder aux données binaires ou nécessitent des contournements compliqués. Pour en savoir plus sur l'API `FileReader`, voir [Utiliser les fichiers depuis les applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications).

La méthode la plus simple pour envoyer des données binaires à l'aide de [`FormData`](/fr/docs/Web/API/FormData) est d'utiliser la méthode `append()` illustrée avant. Refaire tout à la main sera plus compliqué.

Dans l'exemple qui suit, on utilise l'API [`FileReader`](/fr/docs/Web/API/FileReader) afin d'accéder aux données binaires, puis on construit les données composites du formulaire manuellement.

### HTML

```html
<form id="leFormulaire">
  <p>
    <label for="leTexte">Données texte :</label>
    <input id="leTexte" name="monTexte" value="Des données texte" type="text" />
  </p>
  <p>
    <label for="leFichier">Données fichier :</label>
    <input id="leFichier" name="monFichier" type="file" />
  </p>
  <button>Envoyer !</button>
</form>
```

Comme on peut le voir, le fragment HTML reprend un formulaire classique. La logique intéressante a lieu dans le code JavaScript.

### JavaScript

```js
// On souhaite accéder aux nœuds du DOM,
// on initialise donc le script au chargement
// de la page
window.addEventListener("load", () => {
  // On utilisera ces variables pour stocker
  // les données du formulaire
  const text = document.getElementById("leTexte");
  const file = {
    dom: document.getElementById("leFichier"),
    binary: null,
  };

  // On utilise l'API FileReader pour lire le contenu
  // du fichier
  const reader = new FileReader();

  // FileReader est asynchrone, on stocke le résultat
  // lorsque la lecture du fichier est terminée.
  reader.addEventListener("load", () => {
    file.binary = reader.result;
  });

  // Au chargement de la page, si un fichier est
  // déjà sélectionné, on le lit.
  if (file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // Si ce n'est pas le cas, on attend que la personne
  // sélectionne un fichier.
  file.dom.addEventListener("change", () => {
    if (reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // sendData est la fonction principale
  function sendData() {
    // S'il y a un fichier sélectionné, on attend qu'il ait été lu
    // Sinon, on retarde l'exécution de la fonction
    if (!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // Pour construire la requête de formulaire multi-parties
    // il nous faut une instance XMLHttpRequest
    const XHR = new XMLHttpRequest();

    // Il nous faut un séparateur pour définir chaque partie
    // de la requête
    const boundary = "blob";

    // On stocke le corps de la requête dans une chaîne de
    // caractères
    let data = "";

    // Si un fichier a été sélectionné :
    if (file.dom.files[0]) {
      // On commence un nouveau fragment dans le corps de
      // la requête
      data += `--${boundary}\r\n`;

      // On le décrit comme données de formulaire
      data +=
        "content-disposition: form-data; " +
        // On indique le nom des données du formulaire
        `name="${file.dom.name}"; ` +
        // On fournit le nom effectif du fichier
        `filename="${file.dom.files[0].name}"\r\n`;
      // Ainsi que le type MIME du fichier
      data += `Content-Type: ${file.dom.files[0].type}\r\n`;

      // Il y a un saut de ligne entre les métadonnées
      // et les données
      data += "\r\n";

      // On concatène les données binaires au corps de la
      // requête
      data += file.binary + "\r\n";
    }

    // Pour les données texte, c'est plus simple :
    // on commence un nouveau fragment dans le corps
    // de la requête.
    data += `--${boundary}\r\n`;

    // On indique qu'il s'agit de données de formulaire et on
    // précise un nom
    data += `content-disposition: form-data; name="${text.name}"\r\n`;
    // Il y a un saut de ligne entre les métadonnées
    // et les données
    data += "\r\n";

    // On ajoute les données texte au corps de la requête
    data += text.value + "\r\n";

    // Et lorsque c'est terminé, on ferme le corps de la requête
    data += `--${boundary}--`;

    // On définit ce qui se produit en cas de réussite
    XHR.addEventListener("load", (event) => {
      alert("Les données ont bien été envoyées et la réponse chargée.");
    });

    // On définit ce qui se passe en cas d'échec
    XHR.addEventListener("error", (event) => {
      alert("Une erreur est survenue.");
    });

    // On prépare la requête
    XHR.open("POST", "https://example.com/cors.php");

    // On ajoute l'en-tête HTTP pour le format des données
    XHR.setRequestHeader(
      "Content-Type",
      `multipart/form-data; boundary=${boundary}`,
    );

    // On envoie les données
    XHR.send(data);
  }

  // On récupère l'élément du formulaire
  const form = document.getElementById("leFormulaire");

  // On ajoute un gestionnaire d'évènement 'submit'
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
  });
});
```

### Résultat

{{EmbedLiveSample("", "100%", 150)}}

## Conclusion

Selon le navigateur et le type de données que vous avez à gérer, envoyer les données d'un formulaire avec JavaScript pourra s'avérer simple ou délicat. Cela passera généralement par l'utilisation d'un objet [`FormData`](/fr/docs/Web/API/FormData).

## Voir aussi

### Parcours d'apprentissage

- [Un premier formulaire HTML](/fr/docs/Learn/Forms/Your_first_form)
- [Comment structurer un formulaire HTML](/fr/docs/Learn/Forms/How_to_structure_a_web_form)
- [Les contrôles de formulaire natifs](/fr/docs/Learn/Forms/Basic_native_form_controls)
- [Les champs de saisie HTML5](/fr/docs/Learn/Forms/HTML5_input_types)
- [Les autres contrôles de formulaire](/fr/docs/Learn/Forms/Other_form_controls)
- [Les pseudo-classes relatives à l'interface utilisateur](/fr/docs/Learn/Forms/UI_pseudo-classes)
- [Mettre en forme les formulaires HTML](/fr/docs/Learn/Forms/Styling_web_forms)
- [La validation des données d'un formulaire](/fr/docs/Learn/Forms/Form_validation)
- [Envoyer les données d'un formulaire](/fr/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Sujets avancés

- **Envoyer des formulaires avec JavaScript**
- [Construire des contrôles de formulaire spécifiques](/fr/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Les formulaires HTML dans les navigateurs historiques](/fr/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Mise en forme avancée des formulaires HTML](/fr/docs/Learn/Forms/Advanced_form_styling)
- [Tableau de compatibilité des propriétés pour les contrôles de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
