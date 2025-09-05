---
title: <video>
slug: Web/HTML/Reference/Elements/video
original_slug: Web/HTML/Element/video
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<video>`** intègre un lecteur multimédia qui prend en charge la lecture vidéo dans le document. Vous pouvez également utiliser `<video>` pour le contenu audio, mais l'élément [`<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio) peut fournir une expérience utilisateur plus appropriée.

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

| Nom                                                                                       | Condition de déclenchement                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}}{{Deprecated_Inline}} | La mémoire tampon en entrée d'un {{DOMxRef("ScriptProcessorNode")}} peut désormais être traité.                                                                                                                                     |
| {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}                                  | Le navigateur peut lire le média mais estime que trop peu de données ont été chargées pour lire le média jusqu'à sa fin (il faudra vraisemblablement un arrêt pour un chargement en mémoire tampon).                                |
| {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}                    | Le navigateur estime qu'il peut lire le média jusqu'à sa fin, sans avoir à interrompre la lecture par du chargement en mémoire tampon.                                                                                              |
| {{domxref("OfflineAudioContext.complete_event", "complete")}}                             | Le rendu d'un {{DOMxRef("OfflineAudioContext")}} est terminé.                                                                                                                                                                       |
| {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}                    | L'attribut `duration` a été mis à jour.                                                                                                                                                                                             |
| {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}                                  | Le média est devenu vide. Cela peut par exemple se produire lorsque le média a déjà été (partiellement ou complètement) chargé et que la méthode [`load()`](/fr/docs/Web/API/HTMLMediaElement/load) est invoquée pour le recharger. |
| {{domxref("HTMLMediaElement.ended_event", 'ended')}}                                      | La lecture a été interrompue car la fin du média est atteinte.                                                                                                                                                                      |
| {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}                            | La première _frame_ du média a été chargée.                                                                                                                                                                                         |
| {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}                    | Les métadonnées ont été chargées.                                                                                                                                                                                                   |
| {{domxref("HTMLMediaElement.pause_event", 'pause')}}                                      | La lecture a été mise en pause.                                                                                                                                                                                                     |
| {{domxref("HTMLMediaElement.play_event", 'play')}}                                        | La lecture a démarré.                                                                                                                                                                                                               |
| {{domxref("HTMLMediaElement.playing_event", 'playing ')}}                                 | La lecture est prête à être lancée après avoir été mise en pause ou interrompue pour un chargement en mémoire de données.                                                                                                           |
| {{domxref("HTMLMediaElement.progress_event", 'progress')}}                                | Évènement déclenché périodiquement lorsque le navigateur charge une ressource.                                                                                                                                                      |
| {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}                            | La vitesse de lecture a changé.                                                                                                                                                                                                     |
| {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}                                    | Une opération de déplacement du curseur de lecture (_seek_) est terminée.                                                                                                                                                           |
| {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}                                  | L'agent utilisateur tente de récupérer les données associées au média mais les données ne parviennent pas.                                                                                                                          |
| {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}                                  | L'agent utilisateur tente de récupérer les données associées au média mais les données ne parviennent pas.                                                                                                                          |
| {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}                                  | Le chargement des données du média ont été suspendues.                                                                                                                                                                              |
| {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}                            | Le temps décrit par l'attribut `currentTime` a été mis à jour.                                                                                                                                                                      |
| {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}                        | Le volume a été modifié.                                                                                                                                                                                                            |
| {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}                                  | La lecture a été interrompue en raison d'un manque temporaire de données.                                                                                                                                                           |

## Notes d'utilisation

### Mise en forme avec CSS

L'élément `<video>` est un élément remplacé et, pour cet élément, la valeur initiale de {{cssxref("display")}} est `inline` mais la hauteur et la largeur du cadre sont définies par les caractéristiques de la vidéo embarquée.

On peut changer la valeur de `display` en `block` afin de simplifier le positionnement et le dimensionnement. L'article [Bases de la mise en forme d'un lecteur vidéo](/fr/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) fournit différentes techniques de mise en forme.

### Détecter l'ajout et la suppression de pistes

Il est possible de détecter l'ajout et la suppression de pistes d'un élément `<video>` grâce aux évènements [`addtrack`](/fr/docs/Web/API/VideoTrackList/addtrack_event) et [`removetrack`](/fr/docs/Web/API/VideoTrackList/removetrack_event). Toutefois, ces évènements ne sont pas déclenchés à même l'élément `<video>` mais sur l'objet représentant la liste des pistes associées à l'élément `<video>` grâce à l'objet {{domxref("HTMLMediaElement")}} qui possède un type différent selon le type de piste manipulé :

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Un objet {{domxref("AudioTrackList")}} qui contient l'ensemble des pistes audio associées au média. Il est possible d'ajouter un écouteur sur l'évènement `addtrack` sur cet objet afin d'être alerté lorsque de nouvelles pistes audio sont ajoutées à l'élément.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : On peut ajouter un écouteur d'évènement `addtrack` à cet objet {{domxref("VideoTrackList")}} afin d'être alerté lorsque des pistes vidéos sont ajoutées à l'élément.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : On peut ajouter un écouteur d'évènement `addtrack` à cet objet {{domxref("TextTrackList")}} afin d'être alerté lorsque des pistes textuelles sont ajoutées à l'élément.

Le fragment de code qui suit, par exemple, permettra d'appeler une fonction donnée lorsque des pistes audio sont ajoutées ou supprimées d'un élément `<video>` :

```js
var elem = document.querySelector("video");

elem.audioTrackList.onaddtrack = function (event) {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = function (event) {
  trackEditor.removeTrack(event.track);
};
```

On peut aussi utiliser la méthode {{domxref("EventTarget.addEventListener", "addEventListener()")}} pour gérer les évènements [`addtrack`](/fr/docs/Web/API/VideoTrackList/addtrack_event) et [`removetrack`](/fr/docs/Web/API/VideoTrackList/removetrack_event).

## Exemples

### Exemples simples

```html
<!-- Un exemple simple -->
<video src="fichiervideo.webm" autoplay poster="vignette.jpg">
  Votre navigateur ne permet pas de lire les vidéos. Mais vous pouvez toujours
  <a href="fichiervideo.webm">la télécharger</a> !
</video>

<!-- Une vidéo avec des sous-titres -->
<video src="toto.webm">
  <track kind="subtitles" src="toto.en.vtt" srclang="en" label="Anglais" />
  <track kind="subtitles" src="toto.sv.vtt" srclang="sv" label="Suédois" />
</video>
```

Dans le premier exemple, la vidéo est lancée dès que possible. Avant que la vidéo ne soit lancée, la vignette utilisée sera le fichier `"vignette.jpg"`.

Dans le deuxième exemple, l'utilisateur peut choisir parmi deux pistes de sous-titres.

### Utiliser plusieurs sources

Dans cet exemple, trois sources différentes pour la vidéo sont fournies. La première source utilisée est WebM, si son format n'est pas lisible pour le navigateur, c'est le fichier MP4 qui sera utilisé et si celui-ci n'est pas lisible non plus, ce sera le fichier OGG qui sera exploité.

```html
<video
  width="480"
  controls
  poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif">
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
    type="video/webm" />
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
    type="video/mp4" />
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
    type="video/ogg" />
  Votre navigateur ne permet pas de lire les vidéos HTML5.
</video>
```

## Utilisation côté serveur

Si le type MIME de la vidéo n'est pas indiqué correctement sur le serveur, la vidéo peut ne pas s'afficher, le navigateur peut afficher un boîte grise avec une croix si JavaScript est activé.

Si vous utilisez Apache pour servir des vidéos Ogg Theora, vous pouvez ajouter les extensions utilisées pour les fichiers en face du type MIME. Pour cela, il faut éditer le fichier de configuration `mime.types` (situé dans le dossier `/etc/apache` ) ou utiliser la directive de configuration `AddType` dans le fichier `httpd.conf`.

```
AddType video/ogg .ogm
AddType video/ogg .ogv
AddType video/ogg .ogg
```

Pour les vidéos WebM, le problème peut également être réglé en modifiant le fichier `mime.types` situé dans `/etc/apache` ou en ajoutant une directive `AddType` au fichier `httpd.conf`.

```
AddType video/webm .webm
```

## Accessibilité

Les vidéos doivent fournir des sous-titres et retranscription qui décrivent précisément le contenu. Les sous-titres doivent permettre au visiteur malentendant de comprendre le contenu audio lorsque la vidéo est lancée. Les retranscriptions sont utilisées par les personnes qui souhaitent relire le contenu audio à un rythme différent.

Si on utilise un service de sous-titrage automatique est utilisé, il est nécessaire de vérifier que le contenu généré correspond bien au contenu audio de la vidéo.

En plus des dialogues, les sous-titres et retranscription doivent également inclure les informations permettant d'identifier la musique et les effets sonores qui communiquent des informations importantes (l'émotion et le ton entre autres) :

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

- [Sous-titres et légendes - _Plugins_](/fr/docs/Glossary/Plugin)
- [API Web Video Text Tracks Format (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- [WebAIM : _Captions, Transcripts, and Audio Descriptions_ (en anglais)](https://webaim.org/techniques/captions/)
- [Comprendre les règles WCAG 1.2](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [_Understanding Success Criterion 1.2.1 - W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [_Understanding Success Criterion 1.2.2 - W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_intégré"
          >contenu intégré</a
        >. Si l'élément a un attribut
        <a href="/fr/docs/Web/HTML/Element/video#controls"><code>controls</code></a> :
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_interactif"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <p>
          Si l'élément a un attribut
          <a href="/fr/docs/Web/HTML/Element/video#src"><code>src</code></a> : zéro ou plusieurs
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_intégré"
          >contenu intégré</a
        >.
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

- [Les formats pris en charge par `<audio>` et `<video>`](/fr/docs/Web/Media/Formats)
- {{htmlelement("audio")}}
- Les propriétés CSS permettant de positionner/redimensionner le contenu : {{cssxref("object-position")}} and {{cssxref("object-fit")}}
- [Utiliser les éléments `<audio>` et `<video>`](/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Manipuler l'élément `<video>` avec `<canvas>`](/fr/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Configuration côté serveur pour les média Ogg](/fr/docs/Web/Media/Formats/Configuring_servers_for_Ogg_media)
