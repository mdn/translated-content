---
title: BaseAudioContext.createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createBuffer
translation_of: Web/API/BaseAudioContext/createBuffer
---
{{APIRef("API Web Audio")}}

La méthode `createBuffer()` de l'interface {{domxref("BaseAudioContext")}} est utilisée pour créer un nouvel objet {{domxref("AudioBuffer")}} vide, qui peut ensuite être rempli.

Pour plus de détails sur les tampons audio, consultez la page de référence {{domxref ("AudioBuffer")}}.

> **Note :** `createBuffer()` permettait de prendre des données compressées et de restituer des échantillons décodés, mais cette possibilité a été supprimée de la spécification, du fait que tout le décodage était effectué dans le thread principal, donc `createBuffer()` bloquait l'exécution du reste du code. La méthode asynchrone `decodeAudioData()` fait la même chose - prend l'audio compressé, par exemple, un fichier MP3, et vous renvoie directement un {{domxref("AudioBuffer")}} que vous pouvez ensuite faire jouer via {{domxref("AudioBufferSourceNode")}}. Pour des utilisations simples comme la lecture d'un fichier MP3, `decodeAudioData()` est ce que vous devriez utiliser.

## Syntaxe

    var tampon = baseAudioContext.createBuffer(nbDeCanaux, longueur, frequenceDEchantillonnage);

### Paramètres

> **Note :** pour une explication en profondeur de la façon dont les tampons audio fonctionnent, ainsi que de leur signification, lire [Les concepts de base de la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) de notre guide des concepts de base.

- nbDeCanaux
  - : Un nombre entier représentant le nombre de canaux que ce tampon doit avoir. Les implémentations doivent prendre en charge un minimum de 1 canal et un maximum de 32 canaux.
- longueur
  - : Un entier représentant la taille du tampon dans les trames d'échantillons.
- frequenceDEchantillonnage
  - : La fréquence d'échantillonnage des données audio linéaires en trames d'échantillons par seconde. Une implémentation doit supporter des fréquences d'échantillonnage comprises au minimum dans la plage 22050 et 96000.

### Retourne

Un {{domxref("AudioBuffer")}}.

## Exemples

Tout d'abord, deux exemples triviaux simples pour aider à expliquer comment les paramètres sont utilisés :

```js
var ctxAudio = new AudioContext();
var tampon = ctxAudio.createBuffer(2, 22050, 44100);
```

Si vous utilisez cet appel, vous obtiendrez un tampon stéréo (deux canaux), qui, lorsque relu avec un `AudioContext` fonctionnant à 44100Hz (très courant, la plupart des cartes son normales fonctionnent à cette fréquence), durera 0,5 seconde : 22050 trames / 44100 Hz = 0,5 seconde.

```js
var ctxAudio = new AudioContext();
var tampon = ctxAudio.createBuffer(1, 22050, 22050);
```

Si vous utilisez cet appel, vous obtiendrez un tampon mono (un canal), qui, lorsqu'il sera relu avec un `AudioContext` fonctionnant à 44100Hz, sera automatiquement \*rééchantillonné\* à 44100Hz (et produira donc 44100 trames), et durera 1,0 seconde : 44100 images / 44100Hz = 1 seconde.

> **Note :** le rééchantillonnage audio est très similaire au redimensionnement d'une image : supposons que vous ayez une image 16 x 16, mais que vous vouliez qu'elle remplisse une zone 32x32: vous la redimensionnez (rééchantillonnez). Le résultat aura une qualité moindre (il pourra être flou ou bizarre, selon l'algorithme de redimensionnement), mais cela fonctionnera, et l'image redimensionnée prendra moins de place. L'audio rééchantillonné est exactement la même chose - vous économisez de l'espace, mais en pratique, vous ne pourrez pas reproduire correctement le contenu haute fréquence (les sons aigus).

Examinons maintenant un exemple de `createBuffer()` plus complexe, dans lequel nous créons un tampon de deux secondes, le remplissons de bruit blanc, puis le reproduisons via {{domxref("AudioBufferSourceNode")}}. Le commentaire devrait clairement faire comprendre ce qui se passe. Vous pouvez également exécuter le code en direct ou regarder le source.

```js
var ctxAudio = new (window.AudioContext || window.webkitAudioContext)();

// Création d'un tampon stéréo vide de trois secondes à la fréquence d'échantillonnage de l'AudioContext
var monArrayBuffer = ctxAudio.createBuffer(2, ctxAudio.sampleRate * 3, ctxAudio.sampleRate);

// Remplissage du tampon avec du bruit blanc ;
// simplement des valeurs aléatoires entre -1,0 et 1,0
for (var canal = 0; canal < monArrayBuffer.numberOfChannels; canal++) {
  // Cela nous donne le ArrayBuffer qui contient effectivement les données
  var donneesCourantes = monArrayBuffer.getChannelData(canal);
  for (var i = 0; i < monArrayBuffer.length; i++) {
    // Math.random() est dans [0; 1,0]
    // l'audio doit se trouver dans [-1,0; 1,0]
    donneesCourantes[i] = Math.random() * 2 - 1;
  }
}

// Récupération d'un AudioBufferSourceNode.
// C'est l'AudioNode à utiliser quand nous voulons lire un AudioBuffer
var source = ctxAudio.createBufferSource();
// Définir le tampon dans l'AudioBufferSourceNode
source.buffer = monArrayBuffer;
// Connecter l'AudioBufferSourceNode à la destination,
// de sorte que nous puissions entendre le son
source.connect(ctxAudio.destination);
// Démarrer la lecture de la source
source.start();
```

## Spécifications

| Spécification                                                                                                    | Statut                               | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#dom-baseaudiocontext-createbuffer', 'createBuffer()')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.BaseAudioContext.createBuffer")}}

## Voir aussi

- [Utilisation de l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
