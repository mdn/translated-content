---
title: "<video> : l'élément d'intégration vidéo"
slug: Web/HTML/Reference/Elements/video
original_slug: Web/HTML/Element/video
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<video>`** intègre un lecteur de média qui prend en charge la lecture vidéo dans le document. Vous pouvez également utiliser `<video>` pour le contenu audio, mais l'élément [`<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio) peut fournir une expérience utilisateur plus appropriée.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;video&gt;", "tabbed-standard")}}

```html interactive-example
<video controls width="250">
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />

  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />

  Télécharger la vidéo
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  ou
  <a href="/shared-assets/videos/flower.mp4">MP4</a>
  .
</video>
```

L'exemple précédent illustre comment utiliser l'élément `<video>` simplement, à la façon d'un élément [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img). Le chemin vers le média à afficher est fourni via l'attribut `src` et on peut inclure d'autres attributs afin de spécifier la largeur et la hauteur, la lecture automatique et/ou en boucle, les contrôles affichés, etc.

Le contenu fourni entre les balises `<video></video>` est affiché comme contenu alternatif par les navigateurs qui ne prennent pas en charge l'élément.

## Attributs

À l'instar des autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Un attribut booléen qui indique que la vidéo doit automatiquement être lancée dès qu'elle peut être jouée sans être arrêtée par le chargement des données.

    > [!NOTE]
    > Les navigateurs modernes bloquent l'audio (ou les vidéos avec une piste audio non assurée) de la lecture automatique, car les sites qui jouent automatiquement l'audio peuvent être une expérience désagréable pour les utilisateurs et les utilisatrices. Consultez notre [Guide sur la lecture automatique](/fr/docs/Web/Media/Guides/Autoplay) pour plus d'informations sur la façon d'utiliser correctement cette dernière.

    Pour désactiver la vidéo automatique, `autoplay="false"` ne fonctionnera pas&nbsp;; La vidéo sera automatiquement lue si l'attribut est présent dans le tag `<video>`. Pour supprimer la lecture automatique, l'attribut doit être complètement supprimé.

- `controls`
  - : Si cet attribut est présent, le navigateur affichera des contrôles pour permettre à l'utilisateur de contrôler la lecture de la vidéo, le volume et la mise sur pause.
- `controlslist`
  - : L'attribut `controlslist`, lorsqu'il est indiqué, aide le navigateur à choisir les contrôles à afficher pour la manipulation du média lorsque l'attribut `controls` est utilisé.

    Les valeurs autorisées pour cet attribut sont `nodownload`, `nofullscreen` et `noremoteplayback`.

    On utilisera l'attribut `disablePictureInPicture` afin de désactiver ce mode et les contrôles associés.

- [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Cet attribut à [valeur contrainte](/fr/docs/Glossary/Enumerated) permet d'indiquer si le CORS doit être utilisé pour récupérer la vidéo. [Les ressources avec le CORS activé](/fr/docs/Web/HTML/How_to/CORS_enabled_image) peuvent être réutilisées dans un élément [`<canvas>`](/fr/docs/Web/HTML/Reference/Elements/canvas) sans le _corrompre_. Les valeurs autorisées sont&nbsp;:
    - `anonymous`&nbsp;: une requête _cross-origine_ est envoyée sans information d'authentification. Autrement dit, un en-tête HTTP `Origin:` est envoyé, sans cookie, certificat X.509 ou sans authentification HTTP simple. Si le serveur ne fournit pas d'informations d'authentification au site d'origine (c'est-à-dire en n'envoyant pas l'en-tête HTTP `Access-Control-Allow-Origin:`, la vidéo sera corrompue et son utilisation sera restreinte.
    - `use-credentials`&nbsp;: une requête _cross-origine_ est envoyée avec une information d'authentification. Autrement dit, un en-tête HTTP `Origin:` est envoyé, avec un cookie, une certification ou une authentification HTTP simple. Si le serveur ne fournit pas d'informations d'authentification au site d'origine (c'est-à-dire en n'envoyant pas l'en-tête HTTP `Access-Control-Allow-Credentials:`, la vidéo sera _corrompue_ et son utilisation sera restreinte.

    Lorsque cet attribut n'est pas présent, la ressource est récupérée sans requête CORS (l'en-tête HTTP `Origin:` n'est pas envoyé) et elle ne peut pas être utilisée dans un élément [`<canvas>`](/fr/docs/Web/HTML/Reference/Elements/canvas). Si la valeur est invalide, elle sera gérée comme si le mot-clé `anonymous` était utilisé. Pour plus d'informations, consulter l'article sur [les attributs de paramétrage du CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disablepictureinpicture`
  - : Empêche le navigateur de suggérer un menu contextuel pour la superposition d'une image/vidéo ("_Picture-in-picture_") ou de demander l'activation automatique pour la superposition du média.
- `disableremoteplayback`
  - : Un attribut booléen utilisé pour désactiver la capacité de lecture à distance dans les appareils qui sont attachés à l'aide de technologies câblées (HDMI, DVI, etc.) et sans fil (Miracast, Chromecast, DLNA, AirPlay, etc.).

    Sur Safari, vous pouvez utiliser [`x-webkit-airplay="deny"` <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) comme solution.

- `height`
  - : La hauteur de la zone où afficher la vidéo, exprimée en [pixels CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-values/#px) (en valeur absolue uniquement&nbsp;; [pas de pourcentages <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Un attribut booléen, qui, lorsqu'il est présent, indique que la vidéo doit être jouée en boucle.
- `muted`
  - : Un attribut booléen qui indique s'il faut couper le son contenu dans la vidéo. Si cet attribut est utilisé, le son sera coupé au lancement de la vidéo. Sa valeur par défaut est `false`, ce qui signifie que l'audio sera lu lorsque la vidéo sera lue.
- `playsinline`
  - : Un attribut booléen qui indique que la vidéo doit être jouée en incise, c'est-à-dire au sein de la zone de lecture de l'élément. À noter&nbsp;: l'absence de cet attribut n'implique pas que la vidéo sera lancée en plein écran.
- `poster`
  - : Une URL qui contient une vignette à afficher tant que la vidéo est en cours de téléchargement. Si cet attribut n'est pas utilisé, rien n'est affiché jusqu'à ce que la première image de la vidéo soit disponible, ensuite, c'est cette image qui est affichée comme vignette sur la vidéo.
- `preload`
  - : Cet attribut à [valeur contrainte](/fr/docs/Glossary/Enumerated) est une indication destinée au navigateur sur la meilleure façon de charger la vidéo (selon l'auteur de la page). Il peut prendre l'une des valeurs suivantes :
    - `none`&nbsp;: la vidéo ne doit pas être préchargée.
    - `metadata`&nbsp;: seules les métadonnées de la vidéo (sa durée par exemple) sont récupérées.
    - `auto`&nbsp;: le fichier entier peut être téléchargé, même si l'utilisateur ne s'en sert pas.
    - la chaîne de caractères vide (`""`)&nbsp;: synonyme de la valeur `auto`.

    La valeur par défaut peut être différente selon le navigateur. La spécification conseille d'utiliser la valeur `metadata`.

    > [!NOTE]
    >
    > - L'attribut `autoplay` a la priorité sur `preload`. Si `autoplay` est défini, le navigateur doit nécessairement télécharger la vidéo pour la lancer.
    > - Cet attribut est simplement une indication, la spécification ne force pas le navigateur à respecter la valeur de cet attribut.

- `src`
  - : L'URL de la vidéo à intégrer. Cet attribut est optionnel, l'élément [`<source>`](/fr/docs/Web/HTML/Reference/Elements/source) peut également être utilisé dans l'élément `<video>` afin d'indiquer la vidéo à intégrer.
- `width`
  - : La largeur de la zone où afficher la vidéo, exprimée en [pixels CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-values/#px) (en valeur absolue uniquement&nbsp;; [pas de pourcentages <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Évènements

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Nom de l'évènement</th>
      <th scope="col">Condition de déclenchement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}} {{Deprecated_Inline}}
      </td>
      <td>
        La mémoire tampon en entrée d'un {{DOMxRef("ScriptProcessorNode")}}
        peut désormais être traité.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        Le navigateur peut lire le média mais estime que trop peu de données ont
        été chargées pour lire le média jusqu'à sa fin (il faudra vraisemblablement
        un arrêt pour un chargement en mémoire tampon).
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        Le navigateur estime qu'il peut lire le média jusqu'à sa fin, sans avoir
        à interrompre la lecture par du chargement en mémoire tampon.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("OfflineAudioContext.complete_event", "complete")}}
      </td>
      <td>
        Le rendu d'un {{DOMxRef("OfflineAudioContext")}} est terminé.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td>L'attribut <code>duration</code> a été mis à jour.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        Le média est devenu vide. Cela peut par exemple se produire lorsque le média
        a déjà été (partiellement ou complètement) chargé et que la méthode
        <a href="/fr/docs/Web/API/HTMLMediaElement/load" rel="internal"
          ><code>load()</code></a
        >
        est invoquée pour le recharger.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>La lecture a été interrompue, car la fin du média est atteinte.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.error_event", 'error')}}
      </td>
      <td>
        Une erreur s'est produite lors de la récupération des données,
        ou le type de ressource n'est pas un format pris en charge.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>La première _frame_ du média a été chargée.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>Les métadonnées ont été chargées.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
      </td>
      <td>Le navigateur a commencé à charger la ressource.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.pause_event", 'pause')}}
      </td>
      <td>La lecture a été mise en pause.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.play_event", 'play')}}
      </td>
      <td>La lecture a démarré.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.playing_event", 'playing')}}
      </td>
      <td>
        La lecture est prête à être lancée après avoir été mise en pause ou interrompue
        pour un chargement en mémoire de données.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.progress_event", 'progress')}}
      </td>
      <td>Évènement déclenché périodiquement lorsque le navigateur charge une ressource.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>La vitesse de lecture a changé.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td>Une opération de déplacement du curseur de lecture (<em>seek</em>) est terminée.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td>Une opération de déplacement du curseur de lecture (<em>seek</em>) a commencé.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>
       L'agent utilisateur tente de récupérer les données associées au média
       mais les données ne parviennent pas.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>Le chargement des données du média ont été suspendues.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td>
        Le temps décrit par l'attribut <code>currentTime</code> a été mis à jour.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
      </td>
      <td>Le volume a été modifié.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
      </td>
      <td>La lecture a été interrompue en raison d'un manque temporaire de données.</td>
    </tr>
  </tbody>
</table>

## Notes d'utilisation

Les navigateurs ne prennent pas en charge l'ensemble des formats vidéo&nbsp; vous pouvez fournir plusieurs sources grâce à des éléments [`<source>`](/fr/docs/Web/HTML/Reference/Elements/source), le navigateur utilisera la première ressource dont il connaît le format&nbsp;:

```html
<video controls>
  <source src="maVideo.mp4" type="video/mp4" />
  <source src="maVideo.webm" type="video/webm" />
  <p>
    Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
    <a href="myVideo.mp4">un lien pour télécharger la vidéo</a>.
  </p>
</video>
```

Lorsque vous utilisez des éléments [`<source>`](/fr/docs/Web/HTML/Reference/Elements/source), le navigateur tente de charger chaque source séquentiellement. Si une source échoue (par exemple, en raison d'une URL non valide ou d'un format non pris en charge), la source suivante est tentée, etc. Un événement `error` se déclenche sur l'élément `<video>` après que toutes les sources ont échoué&nbsp;; Les événements `error` ne sont pas déclenchés sur chaque élément individuel `<source>`.

Nous proposons un [Guide des types de fichiers médias substantiel et approfondi](/fr/docs/Web/Media/Guides/Formats) et le [Guide des codecs pris en charge pour la vidéo](/fr/docs/Web/Media/Guides/Formats/Video_codecs). Il y a également un guide disponible pour les [codecs audio qui peuvent être utilisés avec eux](/fr/docs/Web/Media/Guides/Formats/Audio_codecs).

Quelques notes d'utilisation&nbsp;:

- Si l'attribut `controls` n'est pas indiqué, la vidéo n'incluera pas les contrôles par défaut du navigateur et il est nécessaire de fournir ses propres contrôles en utilisant JavaScript et l'API [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement). Voir l'article [créer un lecteur vidéo multi-navigateurs](/fr/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) pour plus de détails.
- L'API `HTMLMediaElement` déclenche de nombreux [évènements](/fr/docs/Web/API/HTMLMediaElement#events) qui permettent d'avoir un contrôle précis sur l'audio et la vidéo.
- La propriété [`object-position`](/fr/docs/Web/CSS/Reference/Properties/object-position) permet d'ajuster la position de la vidéo dans le cadre du lecteur et la propriété [`object-fit`](/fr/docs/Web/CSS/Reference/Properties/object-fit) permet de contrôler l'ajustement de la taille de la vidéo dans le cadre.
- Afin de fournir des sous-titres et légendes à la vidéo, on peut utiliser du code JavaScript ainsi que des éléments [`<track>`](/fr/docs/Web/HTML/Reference/Elements/track) au format [WebVTT](/fr/docs/Web/API/WebVTT_API). Voir l'article [Ajouter des sous-titres et légendes à une vidéo HTML5](/fr/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) pour plus d'informations.
- Vous pouvez lire des fichiers audio à l'aide d'un élément `<video>`. Cela peut être utile si, par exemple, vous devez effectuer un audio avec une transcription [WebVTT](/fr/docs/Web/API/WebVTT_API), puisque l'élément [`<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio) n'autorise pas les transcriptions à l'aide de WebVTT.
- Pour tester le contenu similaire sur les navigateurs qui prennent en charge l'élément, vous pouvez remplacer `<video>` par un élément inexistant comme `<notavideo>` (_pas une vidéo_, en français).

Pour apprendre les bases concernant `<video>`, nous vous conseillons de consulter [le tutoriel sur le contenu audio et video](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Mise en forme avec CSS

L'élément `<video>` est un élément remplacé et, pour cet élément, la valeur initiale de [`display`](/fr/docs/Web/CSS/Reference/Properties/display) est `inline` mais la hauteur et la largeur du cadre sont définies par les caractéristiques de la vidéo embarquée.

On peut changer la valeur de `display` en `block` afin de simplifier le positionnement et le dimensionnement. L'article [Bases de la mise en forme d'un lecteur vidéo](/fr/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) fournit différentes techniques de mise en forme.

### Ajouter des sous-titres et d'autres pistes de texte synchronisées

Les pistes de texte synchronisées pour les sous-titres, les sous-titres codés, les titres de chapitres, etc. peuvent être ajoutées de manière déclarative en imbriquant l'élément [`<track>`](/fr/docs/Web/HTML/Reference/Elements/track).
Les pistes sont spécifiées dans le [Format de fichier de pistes de texte pour vidéos Web (WebVTT)](/fr/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (fichier `.vtt`).

Par exemple, le code HTML ci-dessous inclut le fichier « captions.vtt », qui sera utilisé pour superposer des sous-titres codés sur la vidéo si l'utilisateur active cette fonctionnalité.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Les pistes de texte synchronisées peuvent également être ajoutées par programmation à l'aide de l'[API WebVTT](/fr/docs/Web/API/WebVTT_API).

### Détecter l'ajout et la suppression de pistes

Il est possible de détecter l'ajout et la suppression de pistes d'un élément `<video>` grâce aux évènements [`addtrack`](/fr/docs/Web/API/VideoTrackList/addtrack_event) et [`removetrack`](/fr/docs/Web/API/VideoTrackList/removetrack_event). Toutefois, ces évènements ne sont pas déclenchés à même l'élément `<video>` mais sur l'objet représentant la liste des pistes associées à l'élément `<video>` grâce à l'objet [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) qui possède un type différent selon le type de piste manipulé :

- [`HTMLMediaElement.audioTracks`](/fr/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Un objet [`AudioTrackList`](/fr/docs/Web/API/AudioTrackList) qui contient l'ensemble des pistes audio associées au média. Il est possible d'ajouter un écouteur sur l'évènement `addtrack` sur cet objet afin d'être alerté lorsque de nouvelles pistes audio sont ajoutées à l'élément.
- [`HTMLMediaElement.videoTracks`](/fr/docs/Web/API/HTMLMediaElement/videoTracks)
  - : On peut ajouter un écouteur d'évènement `addtrack` à cet objet [`VideoTrackList`](/fr/docs/Web/API/VideoTrackList) afin d'être alerté lorsque des pistes vidéos sont ajoutées à l'élément.
- [`HTMLMediaElement.textTracks`](/fr/docs/Web/API/HTMLMediaElement/textTracks)
  - : On peut ajouter un écouteur d'évènement `addtrack` à cet objet [`TextTrackList`](/fr/docs/Web/API/TextTrackList) afin d'être alerté lorsque des pistes textuelles sont ajoutées à l'élément.

Le fragment de code qui suit, par exemple, permettra d'appeler une fonction donnée lorsque des pistes audio sont ajoutées ou supprimées d'un élément `<video>`&nbsp;:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

On peut aussi utiliser la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) pour gérer les évènements [`addtrack`](/fr/docs/Web/API/VideoTrackList/addtrack_event) et [`removetrack`](/fr/docs/Web/API/VideoTrackList/removetrack_event).

### Utilisation côté serveur

Si le type MIME de la vidéo n'est pas indiqué correctement sur le serveur, la vidéo peut ne pas s'afficher, le navigateur peut afficher une boîte grise avec une croix si JavaScript est activé.

Si vous utilisez Apache Web Server pour les vidéos WebM, le problème peut également être réglé en modifiant le fichier `mime.types` situé dans `/etc/apache` ou en ajoutant une directive `AddType` au fichier `httpd.conf`.

```
AddType video/webm .webm
```

Votre hébergeur Web peut fournir une interface facile aux modifications de configuration de type MIME pour les nouvelles technologies jusqu'à ce qu'une mise à jour globale se produise naturellement.

## Accessibilité

Les vidéos doivent fournir des sous-titres et retranscription qui décrivent précisément le contenu. Les sous-titres doivent permettre au visiteur malentendant de comprendre le contenu audio lorsque la vidéo est lancée. Les retranscriptions sont utilisées par les personnes qui souhaitent relire le contenu audio à un rythme différent.

Si on utilise un service de sous-titrage automatique est utilisé, il est nécessaire de vérifier que le contenu généré correspond bien au contenu audio de la vidéo.

En plus des dialogues, les sous-titres et retranscription doivent également inclure les informations permettant d'identifier la musique et les effets sonores qui communiquent des informations importantes (l'émotion et le ton entre autres)&nbsp;:

```
14
00:03:14 --> 00:03:18
[Musique rock théâtrale]

15
00:03:19 --> 00:03:21
[Murmure] Qu'est-ce que c'est au loin ?

16
00:03:22 --> 00:03:24
C'est… C'est un…

16 00:03:25 --> 00:03:32
[Bruit de choc]
[La vaisselle se brise]
```

Les sous-titres ne doivent pas masquer le sujet principal de la vidéo. Ils peuvent être positionnés grâce à [l'indication `align`](/fr/docs/Web/API/WebVTT_API#cue_settings).

- [API Web Video Text Tracks Format (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- [WebAIM : _Captions, Transcripts, and Audio Descriptions_ <sup>(angl.)</sup>](https://webaim.org/techniques/captions/)
- [Comprendre les règles WCAG 1.2 <sup>(angl.)</sup>](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [_Understanding Success Criterion 1.2.1 - W3C Understanding WCAG 2.0_ <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [_Understanding Success Criterion 1.2.2 - W3C Understanding WCAG 2.0_ <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Exemples

### Source unique

Cet exemple lit une vidéo lorsqu'il est activé, fournissant à l'utilisateur les commandes vidéo par défaut du navigateur pour contrôler la lecture.

#### HTML

```html
<!-- Exemple vidéo de base -->
<!-- « Big Buck Bunny » sous licence CC 3.0 par la fondation Blender. Hébergé par archive.org -->
<!-- Affiche provenant de peach.blender.org -->
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Désolé, votre navigateur ne prend pas en charge les vidéos intégrées, mais ne
  vous inquiétez pas, vous pouvez
  <a href="https://archive.org/details/BigBuckBunny_124">la télécharger</a>
  et la regarder avec votre lecteur vidéo préféré !
</video>
```

#### Résultat

{{EmbedLiveSample('Source unique', "", '400')}}

Jusqu'à ce que la vidéo commence à être lue, l'image fournie dans l'attribut `poster` s'affiche à sa place. Si le navigateur ne prend pas en charge la lecture vidéo, il affiche le texte de remplacement.

### Sources multiples

Cet exemple s'appuie sur le précédent et fournit trois sources différentes pour le média. Cela permet de visionner la vidéo quel que soit le codec vidéo pris en charge par le navigateur.

#### HTML

```html
<!-- Utilisation de plusieurs sources comme solutions de secours pour une balise vidéo -->
<!-- « Elephants Dream » par Orange Open Movie Project Studio, sous licence CC-3.0, hébergé par archive.org -->
<!-- Affiche hébergée par Wikimedia -->
<video
  width="620"
  controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi" />
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4" />

  Désolé, votre navigateur ne prend pas en charge les vidéos intégrées, mais ne
  vous inquiétez pas, vous pouvez
  <a
    href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    download="ed_1024_512kb.mp4">
    la télécharger en MP4
  </a>
  et la regarder avec votre lecteur vidéo préféré !
</video>
```

#### Résultat

{{EmbedLiveSample('Sources multiples', "", '400')}}

Le format AVI est essayé en premier. S'il ne peut pas être lu, le format [MP4](/fr/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) est essayé. Un message de retour s'affiche si l'élément vidéo n'est pas pris en charge, mais pas si toutes les sources échouent.

Certains types de fichiers médias vous permettent de fournir des informations plus spécifiques à l'aide du paramètre [`codecs`](/fr/docs/Web/Media/Guides/Formats/codecs_parameter) dans la chaîne de caractères de type de fichier. Par exemple, `video/webm; codecs="vp8, vorbis"` indique que le fichier est un fichier [WebM](/fr/docs/Web/Media/Guides/Formats/Containers#webm) utilisant [VP8](/fr/docs/Web/Media/Guides/Formats/Video_codecs#vp8) pour la vidéo et [Vorbis](/fr/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) pour l'audio.

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_intégré"
          >contenu intégré</a
        >. Si l'élément a un attribut
        <a href="/fr/docs/Web/HTML/Reference/Elements/video#controls"><code>controls</code></a> :
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_interactif"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <p>
          Si l'élément a un attribut
          <a href="/fr/docs/Web/HTML/Reference/Elements/video#src"><code>src</code></a> : zéro ou plusieurs
          éléments {{HTMLElement("track")}} suivi par du contenu
          transparent qui ne contient pas d'élément
          {{HTMLElement("audio")}} ou {{HTMLElement("video")}}
        </p>
        <p>
          Sinon, zéro ou plusieurs éléments {{HTMLElement("source")}}
          suivi par zéro ou plusieurs éléments {{HTMLElement("track")}},
          suivi par du contenu transparent qui ne contient pas d'élément
          {{HTMLElement("audio")}} ou {{HTMLElement("video")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_intégré"
          >contenu intégré</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/application_role">application</a></code></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLVideoElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des types et formats de médias : contenu image, audio et vidéo](/fr/docs/Web/Media/Guides/Formats)
  - [Formats de conteneurs médias (types de fichiers)](/fr/docs/Web/Media/Guides/Formats/Containers)
  - [Guide des codecs vidéo du Web](/fr/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Guide des codecs audio du Web](/fr/docs/Web/Media/Guides/Formats/Audio_codecs)

- Les propriétés CSS permettant de positionner/redimensionner le contenu&nbsp;: [`object-position`](/fr/docs/Web/CSS/Reference/Properties/object-position) et [`object-fit`](/fr/docs/Web/CSS/Reference/Properties/object-fit)
- L'élément [`<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio)
- [Utiliser les éléments `<audio>` et `<video>`](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipuler l'élément `<video>` avec `<canvas>`](/fr/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Configuration côté serveur pour les médias Ogg](/fr/docs/Web/Media/Formats/Configuring_servers_for_Ogg_media)
