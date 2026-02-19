---
title: "Response : méthode arrayBuffer()"
short-title: arrayBuffer()
slug: Web/API/Response/arrayBuffer
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`arrayBuffer()`** de l'interface {{DOMxRef("Response")}} prend le flux de la {{DOMxRef("Response", "réponse", "", 1)}} et le lit jusqu'à la fin. Elle retourne une promesse qui est résolue avec un objet {{JSxRef("ArrayBuffer")}}.

## Syntaxe

```js-nolint
arrayBuffer()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse qui est résolue avec un objet {{JSxRef("ArrayBuffer")}}.

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

### Jouer de la musique

Dans notre [exemple de récupération d'un tableau tampon <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer), il y a un bouton «&nbsp;Exécuter&nbsp;». Lorsqu'il est pressé, la fonction `getData()` est exécutée. Notez que le fichier audio complet sera téléchargé avant d'être joué. Si vous souhaitez lire un fichier ogg pendant le téléchargement (en streaming), utilisez {{DOMxRef("HTMLAudioElement")}}&nbsp;:

```js
new Audio("music.ogg").play();
```

Dans `getData()`, nous créons une nouvelle requête avec le constructeur {{DOMxRef("Request.Request","Request()")}}, puis nous l'utilisons pour récupérer une piste musicale OGG. Nous utilisons également {{DOMxRef("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource")}} pour créer une source de tampon audio. Lorsque la récupération est réussie, nous lisons un {{JSxRef("ArrayBuffer")}} à partir de la réponse avec `arrayBuffer()`, nous décodons les données audio avec {{DOMxRef("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}, nous définissons les données décodées comme tampon de la source audio (`source.buffer`), puis nous connectons la source à la {{DOMxRef("BaseAudioContext/destination", "AudioContext.destination")}}.

Une fois que `getData()` a terminé, nous lançons la lecture de la source audio avec `start(0)`, puis nous désactivons le bouton de lecture pour éviter qu'il soit cliqué à nouveau pendant la lecture (cela provoquerait une erreur).

```js
function obtenirDonnees() {
  const contexteAudio = new AudioContext();

  return fetch("viper.ogg")
    .then((reponse) => {
      if (!reponse.ok) {
        throw new Error(`Erreur HTTP, statut = ${reponse.status}`);
      }
      return reponse.arrayBuffer();
    })
    .then((tampon) => contexteAudio.decodeAudioData(tampon))
    .then((donneesDecodees) => {
      const source = new AudioBufferSourceNode(contexteAudio);
      source.buffer = donneesDecodees;
      source.connect(contexteAudio.destination);
      return source;
    });
}

// connecter les boutons pour arrêter et jouer l'audio

play.onclick = () => {
  obtenirDonnees().then((source) => {
    source.start(0);
    play.setAttribute("disabled", "disabled");
  });
};
```

### Lire des fichiers

Le constructeur {{DOMxRef("Response.Response","Response()")}} accepte des {{DOMxRef("File")}} et des {{DOMxRef("Blob")}}, il peut donc être utilisé pour lire un {{DOMxRef("File")}} dans d'autres formats.

```html
<input type="file" />
```

```js
function lireFichier(fichier) {
  return new Response(fichier).arrayBuffer();
}

document
  .querySelector("input[type=file]")
  .addEventListener("change", (event) => {
    const fichier = event.target.files[0];
    const tampon = lireFichier(fichier);
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
