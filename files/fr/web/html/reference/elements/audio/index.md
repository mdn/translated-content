---
title: "<audio> : l'élément audio embarqué"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: b0c2ce683687410406fa7ccdef391ff1d41503bb
---

L'élément [HTML](/fr/docs/Web/HTML) **`<audio>`** est utilisé pour intégrer du contenu sonore dans des documents. Il peut contenir une ou plusieurs sources audio, représentées à l'aide de l'attribut `src` ou de l'élément {{HTMLElement("source")}}&nbsp;: le navigateur choisira la plus appropriée.
Il peut aussi être la destination de médias diffusés en continu, en utilisant {{DOMxRef("MediaStream")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;audio&gt;", "tabbed-standard")}}

```html interactive-example
<figure>
  <figcaption>Écoutez le T-Rex&nbsp;:</figcaption>
  <audio controls src="/shared-assets/audio/t-rex-roar.mp3"></audio>
  <a href="/shared-assets/audio/t-rex-roar.mp3"> Télécharger l'audio </a>
</figure>
```

```css interactive-example
figure {
  margin: 0;
}
```

L'exemple qui précède illustre le fonctionnement simple de l'élément `<audio>`.
De façon similaire à l'élément {{HTMLElement("img")}}, on inclut un chemin vers la ressource à intégrer dans l'attribut `src`&nbsp;; on peut ajouter d'autres attributs pour indiquer, par exemple, si l'on souhaite la lecture automatique, la lecture en boucle, l'affichage des contrôles audio par défaut du navigateur, etc.

Le contenu présent à l'intérieur des balises `<audio></audio>` est affiché comme contenu de repli dans les navigateurs qui ne prennent pas en charge l'élément.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Un attribut booléen&nbsp;: si défini, l'audio commencera automatiquement la lecture dès qu'il le peut, sans attendre la fin du téléchargement du fichier audio.

    > [!NOTE]
    > Les sites qui lancent automatiquement de l'audio (ou des vidéos avec une piste audio) peuvent être désagréables pour les utilisateur·ices et doivent donc être évités dans la mesure du possible.
    > Si vous devez proposer une fonctionnalité de lecture automatique, rendez-la optionnelle (l'utilisateur·ice doit l'activer explicitement).
    > Cependant, cela peut être utile lors de la création d'éléments médias dont la source sera définie ultérieurement, sous le contrôle de l'utilisateur·ice.
    > Consultez notre [guide sur la lecture automatique](/fr/docs/Web/Media/Guides/Autoplay) pour obtenir des informations supplémentaires sur la manière d'utiliser correctement la fonction _autoplay_.

- `controls`
  - : Si cet attribut est présent, le navigateur affichera des contrôles permettant à l'utilisateur·ice de contrôler la lecture audio, y compris le volume, la navigation et la mise en pause/reprise de la lecture.

- `controlslist`
  - : L'attribut [`controlslist` <sup>(angl.)</sup>](https://wicg.github.io/controls-list/explainer.html), si l'attribut `controlslist` est défini, aide le navigateur à déterminer quels contrôles afficher pour l'élément `audio` chaque fois que le navigateur affiche ses propres contrôles (c'est-à-dire si l'attribut `controls` est défini).

    Les valeurs autorisées sont `nodownload`, `nofullscreen` et `noremoteplayback`.

- [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Cet attribut [enumerated](/fr/docs/Glossary/Enumerated) indique s'il faut utiliser CORS pour récupérer le fichier audio associé. Les [ressources compatibles CORS](/fr/docs/Web/HTML/How_to/CORS_enabled_image) peuvent être réutilisées dans l'élément {{HTMLElement("canvas")}} sans être _contaminées_. Les valeurs autorisées sont&nbsp;:
    - `anonymous`
      - : Envoie une requête cross-origin sans information d'identification. Autrement dit, il envoie l'en-tête HTTP `Origin:` sans cookie, certificat X.509 ou authentification HTTP Basic. Si le serveur ne fournit pas d'identifiants au site d'origine (en ne définissant pas l'en-tête HTTP `Access-Control-Allow-Origin:`), la ressource sera _contaminées_ et son utilisation sera restreinte.
    - `use-credentials`
      - : Envoie une requête cross-origin avec information d'identification. Autrement dit, il envoie l'en-tête HTTP `Origin:` avec un cookie, un certificat ou une authentification HTTP Basic. Si le serveur ne fournit pas d'identifiants au site d'origine (via l'en-tête HTTP `Access-Control-Allow-Credentials:`), la ressource sera _contaminées_ et son utilisation sera restreinte.

    Si l'attribut n'est pas présent, la ressource est récupérée sans requête CORS (c'est-à-dire sans envoyer l'en-tête HTTP `Origin:`), ce qui empêche son utilisation non contaminée dans les éléments {{HTMLElement('canvas')}}. Si la valeur est invalide, elle est traitée comme si le mot-clé énuméré **anonymous** était utilisé. Voir [attributs de configuration CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour plus d'informations.

- `disableremoteplayback`
  - : Un attribut booléen utilisé pour désactiver la capacité de lecture à distance sur les appareils connectés via des technologies filaires (HDMI, DVI, etc.) ou sans fil (Miracast, Chromecast, DLNA, AirPlay, etc.). Voir la [spécification de l'API Remote Playback <sup>(angl.)</sup>](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute) pour plus d'informations.

    Avec Safari, vous pouvez utiliser [`x-webkit-airplay="deny"` <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) comme solution de repli.

- `loop`
  - : Un attribut booléen&nbsp;: s'il est défini, la lecture recommence automatiquement depuis le début lorsque la fin est atteinte.
- `muted`
  - : Un attribut booléen qui indique si l'audio sera initialement coupé. Sa valeur par défaut est `false`.
- `preload`
  - : Cet attribut {{Glossary("enumerated", "énuméré")}} sert à donner une indication au navigateur sur ce que l'auteur·ice pense être la meilleure expérience utilisateur. Il peut prendre l'une des valeurs suivantes&nbsp;:
    - `none`&nbsp;: Indique que l'audio ne doit pas être préchargé.
    - `metadata`&nbsp;: Indique que seules les métadonnées audio (par exemple, la durée) sont récupérées.
    - `auto`&nbsp;: Indique que l'ensemble du fichier audio peut être téléchargé, même si l'utilisateur·ice n'est pas censé·e l'utiliser.
    - _chaîne de caractères vide_&nbsp;: Synonyme de la valeur `auto`.

    La valeur par défaut varie selon le navigateur. La spécification recommande de la définir à `metadata`.

    > [!NOTE]
    >
    > - L'attribut `autoplay` a priorité sur `preload`. Si `autoplay` est défini, le navigateur devra évidemment commencer à télécharger l'audio pour la lecture.
    > - Le navigateur n'est pas obligé par la spécification de suivre la valeur de cet attribut&nbsp;; il s'agit d'une simple indication.

- `src`
  - : L'URL de l'audio à intégrer. Cela est soumis aux [contrôles d'accès HTTP](/fr/docs/Web/HTTP/Guides/CORS). Cet attribut est optionnel&nbsp;; vous pouvez à la place utiliser l'élément {{HTMLElement("source")}} à l'intérieur du bloc audio pour définir l'audio à intégrer.

## Évènements

- {{DOMxRef("ScriptProcessorNode/audioprocess_event", "audioprocess")}} {{Deprecated_Inline}}
  - : La mémoire tampon en entrée d'un {{DOMxRef("ScriptProcessorNode")}} est prête à être traitée.
- {{DOMxRef("HTMLMediaElement.canplay_event", 'canplay')}}
  - : Le navigateur peut lire le média, mais estime que trop peu de données ont été chargées pour lire le média jusqu'à la fin sans devoir s'arrêter pour un chargement en mémoire tampon.
- {{DOMxRef("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : Le navigateur estime qu'il peut lire le média jusqu'à la fin sans s'arrêter pour un chargement en mémoire tampon.
- {{DOMxRef("OfflineAudioContext/complete_event", "complete")}}
  - : Le rendu d'un objet {{DOMxRef("OfflineAudioContext")}} est terminé.
- {{DOMxRef("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : L'attribut `duration` a été mis à jour.
- {{DOMxRef("HTMLMediaElement.emptied_event", 'emptied')}}
  - : Le média est devenu vide&nbsp;; par exemple, cet évènement est envoyé si le média a déjà été chargé (ou partiellement chargé) et que la méthode {{DOMxRef("HTMLMediaElement.load")}} est appelée pour le recharger.
- {{DOMxRef("HTMLMediaElement.ended_event", 'ended')}}
  - : La lecture a été interrompue car la fin du média a été atteinte.
- {{DOMxRef("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : La première image (<i lang="en">frame</i> en anglais) du média a été chargée.
- {{DOMxRef("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : Les métadonnées ont été chargées.
- {{DOMxRef("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : Déclenché lorsque le navigateur commence à charger la ressource.
- {{DOMxRef("HTMLMediaElement.pause_event", 'pause')}}
  - : La lecture a été mise en pause.
- {{DOMxRef("HTMLMediaElement.play_event", 'play')}}
  - : La lecture a commencé.
- {{DOMxRef("HTMLMediaElement.playing_event", 'playing')}}
  - : La lecture est prête à démarrer après avoir été mise en pause ou retardée par manque de données.
- {{DOMxRef("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : La vitesse de lecture a changé.
- {{DOMxRef("HTMLMediaElement.seeked_event", 'seeked')}}
  - : Une opération de déplacement du curseur de lecture (<i lang="en">seek</i> en anglais) est terminée.
- {{DOMxRef("HTMLMediaElement.seeking_event", 'seeking')}}
  - : Une opération de déplacement du curseur de lecture (<i lang="en">seek</i> en anglais) a commencé.
- {{DOMxRef("HTMLMediaElement.stalled_event", 'stalled')}}
  - : L'agent utilisateur tente de récupérer les données du média, mais les données n'arrivent pas comme prévu.
- {{DOMxRef("HTMLMediaElement.suspend_event", 'suspend')}}
  - : Le chargement des données du média a été suspendu.
- {{DOMxRef("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : Le temps indiqué par l'attribut `currentTime` a été mis à jour.
- {{DOMxRef("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : Le volume a changé.
- {{DOMxRef("HTMLMediaElement.waiting_event", 'waiting')}}
  - : La lecture a été interrompue en raison d'un manque temporaire de données.

## Notes d'utilisation

Les navigateurs ne prennent pas tous en charge les mêmes [types de fichiers](/fr/docs/Web/Media/Formats/Containers) et [codecs audio](/fr/docs/Web/Media/Formats/Audio_codecs)&nbsp;; vous pouvez fournir plusieurs sources à l'intérieur d'éléments {{HTMLElement("source")}} imbriqués, et le navigateur utilisera alors la première qu'il comprend&nbsp;:

```html
<audio controls>
  <source src="monAudio.mp3" type="audio/mpeg" />
  <source src="monAudio.ogg" type="audio/ogg" />
  <p>
    Télécharger l'audio
    <a href="monAudio.mp3" download="monAudio.mp3">MP3</a> ou
    <a href="monAudio.ogg" download="monAudio.ogg">OGG</a>.
  </p>
</audio>
```

La source audio peut être définie sur n'importe quelle [URL](/fr/docs/Web/URI) valide, y compris des URL HTTP(S) et des [URLs de données](/fr/docs/Web/URI/Reference/Schemes/data). Lorsque vous utilisez des URL HTTP(S), sachez que le comportement de mise en cache du navigateur influera sur la fréquence à laquelle le fichier est demandé au serveur. Les URLs de données intègrent directement les données audio dans le HTML, ce qui peut être utile pour de petits fichiers audio mais n'est pas recommandé pour les fichiers volumineux car cela augmente la taille du fichier HTML.

Lorsque vous utilisez des éléments {{HTMLElement("source")}}, le navigateur tente de charger chaque source séquentiellement. Si une source échoue (par exemple, à cause d'une URL invalide ou d'un format non pris en charge), la suivante est essayée, et ainsi de suite. Un évènement `error` est déclenché sur l'élément `<audio>` après l'échec de toutes les sources&nbsp;; les évènements `error` ne sont pas déclenchés sur chaque élément `<source>` individuellement.

Vous pouvez également utiliser l'[API Web Audio](/fr/docs/Web/API/Web_Audio_API) pour générer et manipuler directement des flux audio à partir du code JavaScript, plutôt que de diffuser des fichiers audio préexistants. Vous pouvez définir [`srcObject`](/fr/docs/Web/API/HTMLMediaElement/srcObject) en JavaScript sur un objet {{DOMxRef("MediaStream")}}. Cela est couramment utilisé pour des flux audio en direct ou du traitement audio en temps réel.

```js
const audioElement = document.querySelector("audio");
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    audioElement.srcObject = stream;
  })
  .catch((error) => {
    console.error("Erreur lors de l'accès au microphone", error);
  });
```

Notez que les sources `MediaStream` présentent des limitations&nbsp;: elles ne sont pas consultables et ne prennent en charge qu'un ensemble limité de codecs.

Nous proposons un [guide substantiel et complet des types de fichiers médias](/fr/docs/Web/Media/Guides/Formats) et des [codecs audio qui peuvent être utilisés en leur sein](/fr/docs/Web/Media/Formats/Audio_codecs). Est également disponible [un guide des codecs supportés pour la vidéo](/fr/docs/Web/Media/Formats/Video_codecs).

Autres notes d'utilisation&nbsp;:

- Si vous ne définissez pas l'attribut `controls`, le lecteur audio n'inclura pas les contrôles par défaut du navigateur. Vous pouvez toutefois créer vos propres contrôles personnalisés en utilisant JavaScript et l'API {{DOMxRef("HTMLMediaElement")}}.
- Pour permettre un contrôle précis de votre contenu audio, les `HTMLMediaElement` déclenchent de nombreux [évènements](/fr/docs/Web/API/HTMLMediaElement#évènements) différents. Cela fournit également un moyen de surveiller le processus de récupération de l'audio afin que vous puissiez surveiller les erreurs ou détecter quand suffisamment de ressources sont disponibles pour commencer à les lire ou à les manipuler.
- Les éléments `<audio>` ne peuvent pas avoir de sous-titres ou de légendes associés de la même manière que les éléments `<video>`. Voir [WebVTT et Audio <sup>(angl.)</sup>](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) par Ian Devlin pour des informations utiles et des solutions de contournement.
- Pour tester le contenu de repli sur des navigateurs qui prennent en charge l'élément, vous pouvez remplacer `<audio>` par un élément inexistant comme `<notanaudio>`.

Une bonne source générale d'informations sur l'utilisation de `<audio>` en HTML est le tutoriel [Contenu vidéo et audio](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Mise en forme avec CSS

L'élément `<audio>` n'a pas d'affichage visuel intrinsèque, sauf si l'attribut `controls` est défini, auquel cas les contrôles par défaut du navigateur sont affichés.

Les contrôles par défaut ont une valeur {{CSSxRef("display")}} de `inline` par défaut, et il est souvent conseillé de la définir à `block` pour améliorer le contrôle du positionnement et de la mise en page, sauf si vous souhaitez l'intégrer dans un bloc de texte ou similaire.

Vous pouvez mettre en forme les contrôles par défaut avec des propriétés qui affectent le bloc comme une seule unité, par exemple vous pouvez leur donner une {{CSSxRef("border")}} et une {{CSSxRef("border-radius")}}, {{CSSxRef("padding")}}, {{CSSxRef("margin")}}, etc. Il n'est cependant pas possible de mettre en forme les composants individuels à l'intérieur du lecteur audio (par exemple, changer la taille des boutons ou des icônes, changer la police, etc.), et les contrôles diffèrent selon les navigateurs.

Pour obtenir une apparence cohérente sur tous les navigateurs, il faut créer des contrôles personnalisés&nbsp;; ceux-ci peuvent être balisés et mis en forme comme vous le souhaitez, puis reliés à leurs fonctionnalités via JavaScript et l'API {{DOMxRef("HTMLMediaElement")}}.

[Les bases de la mise en forme des lecteurs vidéo](/fr/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) présente quelques techniques utiles de mise en forme — il est rédigé dans le contexte de `<video>`, mais la plupart s'appliquent aussi à `<audio>`.

### Détecter l'ajout et la suppression de pistes

Vous pouvez détecter quand des pistes sont ajoutées à ou supprimées d'un élément `<audio>` en utilisant les évènements {{DOMxRef("AudioTrackList/addtrack_event", "addtrack")}} et {{DOMxRef("AudioTrackList/removetrack_event", "removetrack")}}. Cependant, ces évènements ne sont pas envoyés directement à l'élément `<audio>` lui-même. Ils sont envoyés à l'objet liste de pistes à l'intérieur du {{DOMxRef("HTMLMediaElement")}} de l'élément `<audio>`, qui correspond au type de piste ajouté à l'élément&nbsp;:

- {{DOMxRef("HTMLMediaElement.audioTracks")}}
  - : Un objet {{DOMxRef("AudioTrackList")}} contenant toutes les pistes audio de l'élément média. Vous pouvez ajouter un écouteur `addtrack` à cet objet pour être averti·e lorsque de nouvelles pistes audio sont ajoutées à l'élément.
- {{DOMxRef("HTMLMediaElement.videoTracks")}}
  - : Ajoutez un écouteur `addtrack` à cet objet {{DOMxRef("VideoTrackList")}} pour être informé·e lorsque des pistes vidéo sont ajoutées à l'élément.
- {{DOMxRef("HTMLMediaElement.textTracks")}}
  - : Ajoutez un écouteur d'évènement `addtrack` à cet objet {{DOMxRef("TextTrackList")}} pour être averti·e lorsque de nouvelles pistes de texte sont ajoutées à l'élément.

> [!NOTE]
> Même s'il s'agit d'un élément `<audio>`, il possède toujours des listes de pistes vidéo et de texte, et peut en fait être utilisé pour présenter de la vidéo, bien que les implications pour l'interface utilisateur puissent être particulières.

Par exemple, pour détecter quand des pistes audio sont ajoutées à ou supprimées d'un élément `<audio>`, vous pouvez utiliser un code comme celui-ci&nbsp;:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Ce code surveille l'ajout et la suppression de pistes audio sur l'élément, et appelle une fonction hypothétique sur un éditeur de pistes pour enregistrer et retirer la piste de la liste des pistes disponibles de l'éditeur.

Vous pouvez aussi utiliser {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} pour écouter les évènements {{DOMxRef("AudioTrackList/addtrack_event", "addtrack")}} et {{DOMxRef("AudioTrackList/removetrack_event", "removetrack")}}.

## Accessibilité

Les éléments audio contenant des dialogues parlés doivent fournir des sous-titres et des transcriptions qui décrivent précisément le contenu. Les sous-titres, qui sont spécifiés à l'aide de [WebVTT](/fr/docs/Web/API/WebVTT_API), ils permettent aux personnes souffrant de troubles auditifs ou ne pouvant pas utiliser le son de l'appareil de lire le fichier. Les transcriptions permettent aux personnes ayant besoin de plus de temps pour lire le contenu d'utiliser un format plus adéquat.

Si un service de sous-titre automatique est utilisé, il est nécessaire de vérifier le contenu généré afin de s'assurer qu'il correspond correctement à la source audio.

L'élément `<audio>` ne prend pas directement en charge le WebVTT. Vous devrez trouver une bibliothèque ou un framework qui vous offre cette capacité, ou écrire le code pour afficher les sous-titres vous-même. Une option consiste à lire votre audio à l'aide d'un élément {{HTMLElement("video")}}, qui prend en charge WebVTT.

En plus des dialogues parlés, les sous-titres et les transcriptions doivent également identifier la musique et les effets sonores qui communiquent des informations importantes. Cela inclut l'émotion et le ton. Par exemple, dans le WebVTT ci-dessous, notez l'utilisation de crochets pour donner un ton et un aperçu émotionnel au spectateur&nbsp;; cela peut aider à établir l'ambiance autrement fournie par la musique, les sons non verbaux et les effets sonores cruciaux, et ainsi de suite.

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

- [Format des pistes de texte vidéo Web (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- [WebAIM&nbsp;: Sous-titres, transcriptions et descriptions audio <sup>(angl.)</sup>](https://webaim.org/techniques/captions/)
- [MDN Explications du critère WCAG, explications du critère 1.2](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.2_—_fournir_des_alternatives_textuelles_aux_médias_temporels)
- [Comprendre le critère de succès 1.2.1 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Comprendre le critère de succès 1.2.2 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Exemples

### Utilisation simple

L'exemple suivant montre l'utilisation basique de l'élément `<audio>` pour lire un fichier OGG. Il sera lu automatiquement grâce à l'attribut `autoplay` — si la page y est autorisée — et inclut également un contenu de repli.

```html
<!-- Simple lecture audio -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Télécharger l'audio OGG</a>.
</audio>
```

Pour savoir quand l'autoplay fonctionne, comment obtenir la permission d'utiliser l'autoplay, et comment et quand il est approprié d'utiliser l'autoplay, consultez notre [guide sur l'autoplay](/fr/docs/Web/Media/Autoplay_guide).

### Utilisation de l'élément `<source>`

Cet exemple précise quelle piste audio intégrer en utilisant l'attribut `src` sur un élément `<source>` imbriqué plutôt que directement sur l'élément `<audio>`. Il est toujours utile d'inclure le type MIME du fichier à l'intérieur de l'attribut `type`, car le navigateur est capable de dire instantanément s'il peut lire ce fichier, et de ne pas perdre de temps dessus dans le cas contraire.

```html
<audio controls>
  <source src="toto.wav" type="audio/wav" />
  <a href="toto.wav" download="toto.wav">Télécharger l'audio WAV</a>.
</audio>
```

### Utilisation de plusieurs éléments `<source>`

Dans l'exemple qui suit, le navigateur essaiera de jouer le premier fichier correspondant au premier élément (celui avec le codec Opus)&nbsp;: s'il peut le lire, il n'interprète pas les suivants&nbsp;; s'il ne peut pas le lire, il tente de lire le deuxième puis, si ce n'est toujours pas possible, le troisième (au format MP3)&nbsp;:

```html
<audio controls>
  <source src="toto.opus" type="audio/ogg; codecs=opus" />
  <source src="toto.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="toto.mp3" type="audio/mpeg" />
</audio>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >, contenu phrasé, contenu intégré. Si l'attribut <a href="#controls"><code>controls</code></a> est
        utilisé&nbsp;: contenu interactif et contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Si l'élément possède un attribut <a href="#src"><code>src</code></a>&nbsp;:
        zéro ou plusieurs éléments {{HTMLElement("track")}} suivis par du contenu transparent ne contenant pas d'éléments média <code>&lt;audio&gt;</code> ou {{HTMLElement("video")}}.<br />
        Sinon&nbsp;: zéro ou plusieurs éléments {{HTMLElement("source")}} suivis de zéro ou plusieurs éléments {{HTMLElement("track")}} suivis par du contenu transparent ne contenant pas d'éléments média <code>&lt;audio&gt;</code> ou {{HTMLElement("video")}}.
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
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Technologies média Web](/fr/docs/Web/Media)
  - [Formats des conteneurs médias (types de fichiers)](/fr/docs/Web/Media/Formats/Containers)
  - [Guide des codecs audio utilisés sur le web](/fr/docs/Web/Media/Formats/Audio_codecs)
- L'[API Web Audio](/fr/docs/Web/API/Web_Audio_API)
- L'interface {{DOMxRef("HTMLAudioElement")}}
- L'élément {{HTMLElement("source")}}
- L'élément {{HTMLElement("video")}}
- [Apprendre&nbsp;: Contenu vidéo et audio](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Les bases de l'audio multi-navigateur](/fr/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
