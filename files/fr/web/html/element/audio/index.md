---
title: "<audio> : l'élément audio embarqué"
slug: Web/HTML/Element/audio
---

{{HTMLSidebar}}

L'élément HTML **`<audio>`** est utilisé afin d'intégrer un contenu sonore dans un document. Il peut contenir une ou plusieurs sources audio représentées avec l'attribut `src` ou l'élément [`<source>`](/fr/docs/Web/HTML/Element/Source) : le navigateur choisira celle qui convient le mieux. Il peut également être la destination de médias diffusés en continu, en utilisant un [`MediaStream`](/fr/docs/Web/API/MediaStream).

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

L'exemple qui précède illustre le fonctionnement simple d'un élément `<audio>`, à la façon de ce qui peut être fait pour une image avec l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img) : on inclut un chemin vers la ressource grâce à l'attribut `src` et on peut ajouter d'autres attributs afin de fournir d'autres informations : lecture automatique, lecture en boucle, utilisation des contrôles par défaut du navigateur, etc.

Le contenu présent à l'intérieur des balises `<audio></audio>` est affiché comme contenu alternatif lorsque le navigateur ne prend pas en charge l'élément.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`autoplay`**

  - : Un attribut booléen : s'il est spécifié, l'audio commencera automatiquement la lecture dès qu'il pourra le faire, sans attendre la fin du téléchargement de l'ensemble du fichier audio.

    > **Note :** Les sites qui diffusent automatiquement de l'audio (ou des vidéos avec une piste audio) peuvent s'avérer désagréables pour les utilisateurs et doivent donc être évités dans la mesure du possible. Si vous devez offrir une fonctionnalité de lecture automatique, vous devez la soumettre au choix de l'utilisateur. Cependant, cela peut être utile lors de la création d'éléments médias dont la source sera définie ultérieurement, sous le contrôle de l'utilisateur. Consultez notre [guide sur la lecture automatique](/fr/docs/Web/Media/Autoplay_guide) pour obtenir des informations supplémentaires sur la manière d'utiliser correctement la fonction _autoplay_.

- **`controls`**
  - : Si l'attribut est présent, le navigateur affichera des contrôles pour que l'utilisateur puisse gérer la lecture, le volume, et le déplacement du curseur de lecture.
- **`crossorigin`**

  - : Cet attribut à valeur contrainte indique comment le CORS doit être utilisé afin de récupérer la ressource. [Les ressources utilisant le CORS](/fr/docs/Web/HTML/CORS_enabled_image) peuvent être réutilisées dans un élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) sans corrompre celui-ci. Les valeurs autorisées pour cet attribut sont :

    - `anonymous`
      - : Une requête multi-origine est envoyée sans information d'authentification. Autrement dit, l'en-tête HTTP [`Origin`](/fr/docs/Web/HTTP/Headers/Origin) est envoyé sans cookie, certificat X.509 ou sans authentification HTTP. Si le serveur ne fournit pas d'information d'authentification au site d'origine (sans indiquer l'en-tête [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)), la ressource sera corrompue (_tainted_) et son utilisation sera restreinte.
    - `use-credentials`
      - : Une requête multi-origine est envoyée avec une information d'authentification (c'est-à-dire avec un en-tête HTTP `Origin:` qui contient un cookie, un certificat ou effectuant une authentification HTTP).

    Lorsque cet attribut n'est pas présent, la ressource est récupérée sans requête CORS et empêche ainsi d'utiliser la ressource dans un [`<canvas>`](/fr/docs/Web/HTML/Element/canvas). Si la valeur fournie est invalide, elle sera considérée comme `anonymous`. Voir [Paramétrage des attributs relatifs au CORS](/fr/docs/Web/HTML/Attributes/crossorigin) pour plus d'informations.

- **`disableRemotePlayback`** {{experimental_inline}}

  - : Un attribut booléen utilisé pour désactiver la capacité de lecture à distance dans les appareils qui sont connectés à l'aide de câbles (HDMI, DVI, etc.) et sans fil (Miracast, Chromecast, DLNA, AirPlay, etc.). Voir [cette proposition de spécification](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) pour plus d'informations.

    > **Note :** Dans Safari, vous pouvez utiliser [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) comme solution de repli.

- **`loop`**
  - : Un attribut booléen. S'il est renseigné, la lecture du fichier se fera en boucle.
- **`muted`**
  - : Un attribut booléen, indiquant si le son de l'élément audio est initialement coupé. Sa valeur par défaut est `false`.
- **`preload`**

  - : Cet attribut indique au navigateur ce que l'auteur du code html pense de l'utilisation optimale de cet élément. Il accepte uniquement les valeurs suivantes :

    - `none` : Indique que l'élément audio ne devrait pas être mis en cache
    - `metadata` : Indique que seules les méta-données (comme la durée) sont préchargées
    - `auto` : Indique que tout le fichier peut être téléchargé, même s'il n'est pas certain que l'utilisateur le lira
    - `""` (chaîne de caractères vide) : Un synonyme de `auto`

    La valeur par défaut peut varier d'un navigateur à l'autre. Les spécifications recommandent la valeur `metadata`.

    > **Note :**
    >
    > - L'attribut `autoplay` a la priorité sur `preload`. Si `autoplay` est spécifié, le navigateur devrait évidemment commencer à télécharger l'audio pour le lire.
    > - La spécification n'oblige pas le navigateur à suivre la valeur de cet attribut ; il s'agit d'une simple indication.

- **`src`**
  - : L'URL du fichier audio à intégrer. Cet élément est soumis aux [contrôles d'accès HTTP](/fr/docs/Web/HTTP/CORS). Cet attribut est facultatif ; vous pouvez utiliser l'élément [`<source>`](/fr/docs/Web/HTML/Element/Source) dans le bloc audio pour spécifier l'audio à intégrer.

## Évènements

| Nom de l'évènement                                                         | Condition du déclenchement                                                                                                                                                                                                          |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [audioprocess](/fr/docs/Web/Reference/Events/audioprocess)                 | La mémoire tampon en entrée d'un [`ScriptProcessorNode`](/fr/docs/Web/API/ScriptProcessorNode) peut désormais être traité.                                                                                                          |
| [`canplay`](/fr/docs/Web/API/HTMLMediaElement/canplay_event)               | Le navigateur peut lire le média mais estime que trop peu de données ont été chargées pour lire le média jusqu'à sa fin (il faudra vraisemblablement un arrêt pour un chargement en mémoire tampon).                                |
| [`canplaythrough`](/fr/docs/Web/API/HTMLMediaElement/canplaythrough_event) | Le navigateur estime qu'il peut lire le média jusqu'à sa fin, sans avoir à interrompre la lecture par du chargement en mémoire tampon.                                                                                              |
| [complete](/fr/docs/Web/Reference/Events/complete)                         | Le rendu d'un [`OfflineAudioContext`](/fr/docs/Web/API/OfflineAudioContext) est terminé.                                                                                                                                            |
| [`durationchange`](/fr/docs/Web/API/HTMLMediaElement/durationchange_event) | L'attribut `duration` a été mis à jour.                                                                                                                                                                                             |
| [`emptied`](/fr/docs/Web/API/HTMLMediaElement/emptied_event)               | Le média est devenu vide. Cela peut par exemple se produire lorsque le média a déjà été (partiellement ou complètement) chargé et que la méthode [`load()`](/fr/docs/Web/API/HTMLMediaElement/load) est invoquée pour le recharger. |
| [`ended`](/fr/docs/Web/API/HTMLMediaElement/ended_event)                   | La lecture a été interrompue car la fin du média est atteinte.                                                                                                                                                                      |
| [`loadeddata`](/fr/docs/Web/API/HTMLMediaElement/loadeddata_event)         | La première _frame_ du média a été chargée.                                                                                                                                                                                         |
| [`loadedmetadata`](/fr/docs/Web/API/HTMLMediaElement/loadedmetadata_event) | Les métadonnées ont été chargées.                                                                                                                                                                                                   |
| [`pause`](/fr/docs/Web/API/HTMLMediaElement/pause_event)                   | La lecture a été mise en pause.                                                                                                                                                                                                     |
| [`play`](/fr/docs/Web/API/HTMLMediaElement/play_event)                     | La lecture a démarré.                                                                                                                                                                                                               |
| [`playing`](/fr/docs/Web/API/HTMLMediaElement/playing_event)               | La lecture est prête à être lancée après avoir été mise en pause ou interrompue pour un chargement en mémoire de données.                                                                                                           |
| [`ratechange`](/fr/docs/Web/API/HTMLMediaElement/ratechange_event)         | La vitesse de lecture a changé.                                                                                                                                                                                                     |
| [`seeked`](/fr/docs/Web/API/HTMLMediaElement/seeked_event)                 | Une opération de déplacement du curseur de lecture (_seek_) est terminée.                                                                                                                                                           |
| [`seeking`](/fr/docs/Web/API/HTMLMediaElement/seeking_event)               | Une opération de déplacement du curseur de lecture (_seek_) a été initiée.                                                                                                                                                          |
| [`stalled`](/fr/docs/Web/API/HTMLMediaElement/stalled_event)               | L'agent utilisateur tente de récupérer les données associées au média mais les données ne parviennent pas.                                                                                                                          |
| [`suspend`](/fr/docs/Web/API/HTMLMediaElement/suspend_event)               | Le chargement des données du média ont été suspendues.                                                                                                                                                                              |
| [`timeupdate`](/fr/docs/Web/API/HTMLMediaElement/timeupdate_event)         | Le temps décrit par l'attribut `currentTime` a été mis à jour.                                                                                                                                                                      |
| [`volumechange`](/fr/docs/Web/API/HTMLMediaElement/volumechange_event)     | Le volume a été modifié.                                                                                                                                                                                                            |
| [`waiting`](/fr/docs/Web/API/HTMLMediaElement/waiting_event)               | La lecture a été interrompue en raison d'un manque temporaire de données.                                                                                                                                                           |

## Notes d'utilisation

Les navigateurs ne prennent pas tous en charge les mêmes [types de fichiers](/fr/docs/Web/Media/Formats/Containers) et [codecs audio](/fr/docs/Web/Media/Formats/Audio_codecs) ; vous pouvez fournir plusieurs sources à l'intérieur d'éléments [`<source>`](/fr/docs/Web/HTML/Element/Source) imbriqués, et le navigateur utilisera alors le premier qu'il comprend :

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Votre navigateur ne prend pas en charge l'audio HTML5. Voici un
    <a href="myAudio.mp3">lien vers le fichier audio</a> à la place.
  </p>
</audio>
```

Nous proposons un [guide substantiel et complet des types de fichiers médias](/fr/docs/Web/Media/Formats) et des [codecs audio qui peuvent être utilisés en leur sein](/fr/docs/Web/Media/Formats/Audio_codecs). Est également disponible [un guide des codecs supportés pour la vidéo](/fr/docs/Web/Media/Formats/Video_codecs).

Autres notes d'utilisation :

- Si vous ne spécifiez pas l'attribut `controls`, le lecteur audio n'inclura pas les contrôles par défaut du navigateur. Vous pouvez toutefois créer vos propres contrôles personnalisés en utilisant JavaScript et l'API [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement).
- Pour permettre un contrôle précis de votre contenu audio, les `HTMLMediaElement` retournent de nombreux [événements](/fr/docs/Web/API/HTMLMediaElement#events) différents. Cela fournit également un moyen de surveiller le processus de récupération de l'audio afin que vous puissiez surveiller les erreurs ou détecter quand suffisamment de ressources sont disponibles pour commencer à les lire ou à les manipuler.
- Vous pouvez également utiliser l'API [Web Audio](/fr/docs/Web/API/Web_Audio_API) pour générer et manipuler directement des flux audio à partir du code JavaScript plutôt que de diffuser des fichiers audio préexistants.
- Les éléments `<audio>` ne peuvent pas avoir de sous-titres ou de légendes associés de la même manière que les éléments `<video>`. Voir [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio) (en) par Ian Devlin pour des informations utiles et des solutions de contournement.

Une bonne source générale d'informations sur l'utilisation de `<audio>` est le tutoriel sur le [contenu vidéo et audio](/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content).

### Mise en forme avec CSS

L'élément `<audio>` n'a aucun affichage intrinsèque en dehors des contrôles par défaut du navigateur qui sont affichés lorsque l'attribut booléen `controls` est présent.

Les contrôles par défaut sont affichés avec [`display`](/fr/docs/Web/CSS/display) qui vaut `inline` par défaut et il est possible de changer cette valeur en `block` dans une feuille de style afin de pouvoir placer le contrôle au sein de la disposition, à moins de vouloir le placer en incise.

Les contrôles par défaut peuvent être mis en forme grâce à des propriétés qui influent sur l'ensemble du bloc. On peut ainsi utiliser [`border`](/fr/docs/Web/CSS/border), [`border-radius`](/fr/docs/Web/CSS/border-radius), [`padding`](/fr/docs/Web/CSS/padding), [`margin`](/fr/docs/Web/CSS/margin), etc. Toutefois, il n'est pas possible de mettre en forme chacun des composants individuel du contrôle (on ne peut pas, par exemple, modifier la taille d'un des boutons ou leurs icones). Chaque navigateur peut avoir des contrôles par défaut qui soient différents.

Pour obtenir un aspect identique dans les différents navigateurs, il vous faudra créer vos propres contrôles afin de les baliser et de les mettre en forme à votre convenance puis d'utiliser JavaScript et l'API [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) pour manipuler les différentes fonctionnalités.

[Le guide sur la mise en forme des lecteurs vidéo](/fr/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Video_player_styling_basics) fournit quelques techniques utiles, bien qu'écrit à propos de l'élément `<video>`, certains concepts peuvent tout à fait s'appliquer aux éléments `<audio>`.

### Détecter l'ajout et la suppression de pistes

Il est aussi possible de détecter lorsque des pistes sont ajoutées et supprimées sur un élément `<audio>` en écoutant les évènements [`addtrack`](/fr/docs/Web/API/AudioTrackList/addtrack_event) et [`removetrack`](/fr/docs/Web/API/AudioTrackList/removetrack_event). Toutefois, ces évènements ne sont pas directement envoyés sur l'élément `<audio>` mais sur l'objet représentant la liste de pistes de l'élément `<audio>` et rattaché à l'élément [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement).

- [`HTMLMediaElement.audioTracks`](/fr/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Un objet [`AudioTrackList`](/fr/docs/Web/API/AudioTrackList) contenant l'ensemble des pistes audio associées à l'élément. Un écouteur `addtrack` peut être associé à l'objet afin d'alerter lorsque de nouvelles pistes audio sont ajoutées à l'élément.
- [`HTMLMediaElement.videoTracks`](/fr/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Un écouteur `addtrack` peut être ajouté à cet objet [`VideoTrackList`](/fr/docs/Web/API/VideoTrackList) afin d'alerter lorsque de nouvelles pistes vidéo sont ajoutées à l'élément.
- [`HTMLMediaElement.textTracks`](/fr/docs/Web/API/HTMLMediaElement/textTracks)
  - : Un écouteur `addtrack` peut être ajouté à cet objet [`TextTrackList`](/fr/docs/Web/API/TextTrackList) afin d'alerter lorsque de nouvelles pistes de texte sont ajoutées à l'élément.

> **Note :** Bien qu'on parle ici d'un élément `<audio>`, il est possible qu'un tel élément possède des pistes vidéo et des pistes texte bien que la cohérence des interfaces puisse être mise à mal.

Ainsi, on pourra utiliser un fragment de code analogue à celui qui suit pour détecter si de nouvelles pistes sont ajoutées ou supprimées d'un élément `<audio>` :

```js
let elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = function (event) {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = function (event) {
  trackEditor.removeTrack(event.track);
};
```

Ce code permet de surveiller lorsque de nouvelles pistes audio sont ajoutées et supprimées. Lorsque c'est le cas, une fonction (non décrite ici) est invoquée afin de mettre à jour l'éditeur présenté à l'utilisateur avec la liste des pistes disponibles.

Il est aussi possible d'utiliser [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) afin d'écouter les évènements [`addtrack`](/fr/docs/Web/API/AudioTrackList/addtrack_event) et [`removetrack`](/fr/docs/Web/API/AudioTrackList/removetrack_event).

## Exemples

### Utilisation simple

```html
<!-- Simple lecture audio -->
<audio src="AudioTest.ogg" autoplay>
  Votre navigateur ne supporte pas l'élément <code>audio</code>.
</audio>
```

Pour savoir quand l'autoplay fonctionne, comment obtenir la permission d'utiliser l'autoplay, et comment et quand il est approprié d'utiliser l'autoplay, consultez notre [guide sur l'autoplay](/fr/docs/Web/Media/Autoplay_guide).

### Utilisation de l'élément `<source>`

Cet exemple précise quelle piste audio intégrer en utilisant l'attribut `src` sur un élément `<source>` imbriqué plutôt que directement sur l'élément `<audio>`. Il est toujours utile d'inclure le type MIME du fichier à l'intérieur de l'attribut `type`, car le navigateur est capable de dire instantanément s'il peut lire ce fichier, et de ne pas perdre de temps dessus dans le cas contraire.

```html
<audio controls="controls">
  <source src="toto.wav" type="audio/wav" />
  Votre navigateur ne prend pas en charge l'élément <code>audio</code>.
</audio>
```

### Utilisation de plusieurs éléments `<source>`

Dans l'exemple qui suit, le navigateur essaiera de jouer le premier fichier correspondant au premier élément (celui avec le codec Opus) : s'il peut le lire, il n'interprète pas les suivants ; s'il ne peut pas le lire, il tente de lire le deuxième puis, si ce n'est toujours pas possible, le troisième (au format MP3) :

```html
<audio controls="">
  <source src="toto.opus" type="audio/ogg; codecs=opus" />
  <source src="toto.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="toto.mp3" type="audio/mpeg" />
</audio>
```

## Accessibilité

Les éléments audio contenant des dialogues parlés doivent fournir des sous-titres et des transcriptions qui décrivent précisément le contenu. Les sous-titres, qui sont spécifiés à l'aide de [WebVTT](/fr/docs/Web/API/WebVTT_API), ils permettent aux personnes souffrant de troubles auditifs ou ne pouvant pas utiliser le son de l'appareil de lire le fichier. Les transcriptions permettent aux personnes ayant besoin de plus de temps pour lire le contenu d'utiliser un format plus adéquat.

Si un service de sous-titre automatique est utilisé, il est nécessaire de vérifier le contenu généré afin de s'assurer qu'il correspond correctement à la source audio.

L'élément `<audio>` ne prend pas directement en charge le WebVTT. Vous devrez trouver une bibliothèque ou un framework qui vous offre cette capacité, ou écrire le code pour afficher les sous-titres vous-même. Une option consiste à lire votre audio à l'aide d'un élément [`<video>`](/fr/docs/Web/HTML/Element/video), qui prend en charge WebVTT.

En plus des dialogues parlés, les sous-titres et les transcriptions doivent également identifier la musique et les effets sonores qui communiquent des informations importantes. Cela inclut l'émotion et le ton. Par exemple, dans le WebVTT ci-dessous, notez l'utilisation de crochets pour donner un ton et un aperçu émotionnel au spectateur ; cela peut aider à établir l'ambiance autrement fournie par la musique, les sons non verbaux et les effets sonores cruciaux, et ainsi de suite.

```
1
00:00:00 --> 00:00:45
[Musique avec des trompettes sonnantes]

2
00:00:46 --> 00:00:51
Elle est où la poulette ?

16
00:00:52 --> 00:01:02
[sur un ton énervé] Vous rendez la poulette ou c'est plus vous qui donnez à manger aux lapins ?
```

Une autre bonne pratique consiste à fournir du contenu comme un lien de téléchargement comme méthode alternative pour les personnes qui utilisent un navigateur qui ne prend pas en charge `<audio>`&nbsp;:

```html
<audio controls>
  <source src="monAudio.mp3" type="audio/mpeg" />
  <source src="monAudio.ogg" type="audio/ogg" />
  <p>
    Votre navigateur ne prend pas charge l'audio HTML. Voici
    <a href="monAudio.mp3">un lien de téléchargement</a> à la place.
  </p>
</audio>
```

- [Sous-titrage sur le web](/fr/docs/Plugins/Flash_to_HTML5/Video/Subtitles_captions)
- [Web Video Text Tracks Format (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/) (en anglais)
- [Comprendre les règles WCAG 1.2](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) (en anglais)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html) (en anglais)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/Guide/HTML/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >contenu intégré</a
        >. Si l'attribut <a href="#attr-controls"><code>controls</code></a> est
        utilisé :
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >
        et
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Si l'élément possède un attribut
        <a href="#attr-src"><code>src</code></a> : zéro ou plusieurs éléments
        <a href="/fr/docs/Web/HTML/Element/track"><code>&#x3C;track></code></a
        >, suivis par du contenu transparent ne contenant pas d'éléments média,
        c'est-à-dire des éléments qui ne soient pas
        <a href="/fr/docs/Web/HTML/Element/audio"><code>&#x3C;audio></code></a>
        ou
        <a href="/fr/docs/Web/HTML/Element/video"><code>&#x3C;video></code></a
        >. Sinon : zéro ou plusieurs éléments
        <a href="/fr/docs/Web/HTML/Element/Source"
          ><code>&#x3C;source></code></a
        >
        suivis par un élément
        <a href="/fr/docs/Web/HTML/Element/track"><code>&#x3C;track></code></a
        >, suivi par du contenu transparent ne contenant pas d'éléments média
        (ni
        <a href="/fr/docs/Web/HTML/Element/audio"><code>&#x3C;audio></code></a>
        ni
        <a href="/fr/docs/Web/HTML/Element/video"><code>&#x3C;video></code></a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du contenu intégré.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#application"
          ><code>application</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLAudioElement"
          ><code>HTMLAudioElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Technologies media Web](/fr/docs/Web/Media)

  - [Formats des conteneurs medias (types de fichiers)](/fr/docs/Web/Media/Formats/Containers)
  - [Guide des codecs audio utilisés sur le web](/fr/docs/Web/Media/Formats/Audio_codecs)

- L'API [Web Audio](/fr/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/fr/docs/Web/API/HTMLAudioElement)
- L'élément [`<source>`](/fr/docs/Web/HTML/Element/Source)
- L'élément [`<video>`](/fr/docs/Web/HTML/Element/video)
- [Apprentissage : Contenu vidéo et audio](/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Les bases de l'audio multi-navigateur](/fr/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics)
