---
title: Contenu audio et vidéo HTML
short-title: Audio et vidéo
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: daad50a992d56b23573fdd50517c75df176747cf
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content")}}

Maintenant que nous sommes à l'aise pour ajouter de simples images dans une page web, l'étape suivante consiste à commencer à ajouter des lecteurs vidéo et audio à vos documents HTML&nbsp;! Dans cet article, nous allons voir comment faire cela avec les éléments {{HTMLElement("video")}} et {{HTMLElement("audio")}}&nbsp;; nous terminerons ensuite en examinant comment ajouter des légendes/sous-titres à vos vidéos.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Avoir une connaissance de base en HTML, comme expliqué dans
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe de base HTML</a
        >. Les sémantiques au niveau du texte telles que <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >les titres et les paragraphes</a
        > et <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Lists"
          >les listes</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Syntaxe de base des balises <code>&lt;video&gt;</code> et <code>&lt;audio&gt;</code></li>
          <li>Attributs spécifiques aux vidéos et audios tels que <code>controls</code> et <code>muted</code>.</li>
          <li>Utilisation des éléments <code>&lt;source&gt;</code> pour fournir différentes sources vidéo ou audio.</li>
          <li>Les bases de l'utilisation des pistes textuelles telles que les légendes et les sous-titres.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Audio et vidéo sur le web

Le premier afflux de vidéos et d'audios en ligne a été rendu possible par des technologies propriétaires basées sur des plugins comme [Flash](https://fr.wikipedia.org/wiki/Adobe_Flash) et [Silverlight](https://fr.wikipedia.org/wiki/Microsoft_Silverlight). Ces deux technologies présentaient des problèmes de sécurité et d'accessibilité, et sont maintenant obsolètes, au profit de solutions HTML natives {{HTMLElement("video")}} et {{HTMLElement("audio")}} et de la disponibilité des {{Glossary("API")}} {{Glossary("JavaScript")}} pour les contrôler. Nous n'abordons pas JavaScript ici — seulement les bases qui peuvent être réalisées avec HTML.

Nous n'allons pas vous apprendre à produire des fichiers audio et vidéo — cela nécessite un ensemble de compétences complètement différent. Nous avons fourni [des fichiers audio et vidéo d'exemple ainsi que du code exemple <sup>(angl.)</sup>](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) pour vos propres expérimentations, au cas où vous ne pouvez pas obtenir les vôtres.

> [!NOTE]
> Avant de commencer ici, vous devez également savoir qu'il existe plusieurs fournisseurs de vidéos en ligne (OVP) comme [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/), et [Vimeo](https://vimeo.com/), ainsi que des fournisseurs de musique en ligne comme [Soundcloud](https://soundcloud.com/). Ces entreprises offrent un moyen pratique et facile d'héberger et de consommer des vidéos, vous n'avez donc pas à vous soucier de la consommation énorme de bande passante. Les OVP offrent généralement même du code prêt à l'emploi pour intégrer des vidéos/audio dans vos pages web&nbsp;; si vous utilisez cette voie, vous pouvez éviter certaines des difficultés que nous abordons dans cet article. Nous en discutons un peu plus de ce type de service dans l'article suivant.

### L'élément `<video>`

L'élément {{HTMLElement("video")}} vous permet d'intégrer de la vidéo très facilement. En voici un exemple&nbsp;:

```html
<video src="rabbit320.webm" controls>
  <p>
    Votre navigateur ne prend pas en charge les vidéos HTML5. Voici, à la place,
    un <a href="rabbit320.webm">lien sur la vidéo</a>.
  </p>
</video>
```

Les fonctionnalités de ce code sont&nbsp;:

- [`src`](/fr/docs/Web/HTML/Reference/Elements/video#src)
  - : De la même manière que pour l'élément {{HTMLElement("img")}}, l'attribut `src` (source) contient le chemin vers la vidéo que vous voulez intégrer. Cela fonctionne de la même manière.
- [`controls`](/fr/docs/Web/HTML/Reference/Elements/video#controls)
  - : Les utilisateur·ice·s doivent avoir un contrôle sur la lecture de la vidéo ou de l'audio. (c'est particulièrement crucial pour les gens ayant de [l'épilepsie](https://fr.wikipedia.org/wiki/Épilepsie).) Vous devez vous servir de l'attribut `controls` pour appeler l'interface de contrôle du navigateur ou construire votre propre interface en utilisant [l'API JavaScript](/fr/docs/Web/API/HTMLMediaElement) adéquat. Au minimum, l'interface doit avoir un contrôle de démarrage et d'arrêt (start/stop) du média et un pour ajuster le volume.
- Le paragraphe dans la balise `<video>`
  - : Cela peut s'appeler **solution de repli** ou contenu de secours (<i lang="en">fallback content</i>) — si le navigateur accédant à la page ne supporte pas l'élément `<video>`, cela offre un texte alternatif qui peut être ce que vous voulez&nbsp;; dans ce cas nous avons mis un lien direct au fichier vidéo, afin que l'utilisateur·ice puisse au moins y accéder sans avoir à se soucier du navigateur qu'il utilise.

La vidéo intégrée donne quelque chose comme ça&nbsp;:

![Un simple lecteur vidéo affichant la vidéo d'un petit lapin blanc](simple-video.png)

Faites un essai avec [l'exemple interactif <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (voyez aussi le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)).

## Utiliser plusieurs formats de source pour améliorer la compatibilité

Il y a un problème avec l'exemple ci-dessus. Il est possible que la vidéo ne se lise pas pour vous, car différents navigateurs prennent en charge différents formats vidéo (et audio). Heureusement, il existe des solutions pour éviter ce problème.

### Contenu d'un fichier multimédia

Tout d'abord, passons rapidement en revue la terminologie. Les formats comme OGG, WAV, MP4 et WebM sont appelés **[formats de conteneur](/fr/docs/Web/Media/Guides/Formats/Containers)**. Ils définissent une structure dans laquelle les pistes audio et/ou vidéo qui composent le média sont stockées, ainsi que des métadonnées décrivant le média, les codecs utilisés pour encoder ses pistes, et ainsi de suite.

Un fichier WebM contenant un film avec une piste vidéo principale et une piste d'angle alternative, plus de l'audio pour l'anglais et l'espagnol, en plus de l'audio pour une piste de commentaire en anglais, peut être conceptualisé comme montré dans le diagramme ci-dessous. Sont également inclus des pistes de texte contenant des sous-titres pour le film, des sous-titres en espagnol pour le film et des sous-titres en anglais pour le commentaire.

![Diagramme conceptualisant le contenu d'un fichier multimédia au niveau des pistes.](containersandtracks.png)

Les pistes audio et vidéo à l'intérieur du conteneur contiennent des données dans le format approprié pour le codec utilisé pour encoder ce média. Différents formats sont utilisés pour les pistes audio et vidéo. Chaque piste audio est encodée à l'aide d'un [codec audio](/fr/docs/Web/Media/Guides/Formats/Audio_codecs), tandis que les pistes vidéo sont encodées à l'aide d'un [codec vidéo](/fr/docs/Web/Media/Guides/Formats/Video_codecs). Comme nous l'avons mentionné précédemment, différents navigateurs prennent en charge différents formats vidéo et audio, ainsi que différents formats de conteneur (comme OGG, MP4 et WebM, qui peuvent à leur tour contenir différents types de vidéo et d'audio).

Par exemple&nbsp;:

- Un conteneur WebM contient généralement de l'audio Vorbis ou Opus avec de la vidéo VP8/VP9. C'est pris en charge dans tous les navigateurs modernes, bien que les anciennes versions puissent ne pas fonctionner.
- Un conteneur MP4 contient souvent de l'audio AAC ou MP3 avec de la vidéo H.264. C'est également pris en charge dans tous les navigateurs modernes.
- Le conteneur Ogg utilise généralement de l'audio Vorbis et de la vidéo Theora. C'est mieux pris en charge dans Firefox et Chrome, mais a été en grande partie remplacé par le format WebM de meilleure qualité.

Il existe quelques cas particuliers. Par exemple, pour certains types d'audio, les données d'un codec sont souvent stockées sans conteneur, ou avec un conteneur simplifié. Un exemple est le codec FLAC, qui est le plus souvent stocké dans des fichiers FLAC, qui ne sont que des pistes FLAC brutes.

Un autre exemple est le très populaire «&nbsp;fichier MP3&nbsp;». Un «&nbsp;fichier MP3&nbsp;» est un fichier audio encodé en utilisant la compression MPEG-1 Audio Layer III. Bien qu'il puisse inclure des métadonnées, il n'est pas encapsulé dans un conteneur MPEG ou MPEG-2 séparé. Son support généralisé dans les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} est en grande partie un témoignage de sa popularité durable.

Un lecteur audio a tendance à lire directement une piste audio, par exemple, un fichier MP3 ou Ogg. Ceux-ci n'ont pas besoin de conteneurs.

### Prise en charge des fichiers multimédias dans les navigateurs

> [!NOTE]
> Plusieurs formats populaires, tels que MP3 et MP4/H.264, sont excellents mais sont soumis à des brevets&nbsp;; c'est-à-dire qu'il existe des brevets couvrant une partie ou la totalité de la technologie sur laquelle ils sont basés. Aux États-Unis, les brevets couvraient le MP3 jusqu'en 2017, et le H.264 est soumis à des brevets jusqu'au moins 2027.
>
> En raison de ces brevets, les navigateurs qui souhaitent implémenter la prise en charge de ces codecs doivent généralement payer des frais de licence considérables. De plus, certaines personnes préfèrent éviter les logiciels restreints et n'utiliser que des formats ouverts. Pour ces raisons légales et préférentielles, les développeur·euse·s web se trouvent dans l'obligation de prendre en charge plusieurs formats afin de fournir une expérience vidéo à l'ensemble de leur audience.

Les codecs décrits dans la section précédente existent pour compresser la vidéo et l'audio en fichiers gérables, car les fichiers audio et vidéo bruts sont extrêmement volumineux. Chaque navigateur web prend en charge un assortiment de **{{Glossary("Codec", "codecs")}}**, comme Vorbis ou H.264, qui sont utilisés pour convertir l'audio et la vidéo compressés en données binaires et vice versa. Chaque codec offre ses propres avantages et inconvénients, et chaque conteneur peut également offrir ses propres caractéristiques positives et négatives influençant vos décisions sur lequel utiliser.

Les choses deviennent un peu plus compliquées, car non seulement chaque navigateur prend en charge un ensemble différent de formats de fichiers conteneurs, mais ils prennent également chacun en charge une sélection différente de codecs. Afin de maximiser la probabilité que votre site web ou votre application fonctionne sur le navigateur d'un·e utilisateur·ice, vous devez peut-être fournir chaque fichier multimédia que vous utilisez dans plusieurs formats. Si votre site et le navigateur de l'utilisateur·ice ne partagent pas un format multimédia en commun, votre média n'est pas lu.

En raison de la complexité de garantir que les médias de votre application soient lisibles sur toutes les combinaisons de navigateurs, plateformes et appareils que vous souhaitez atteindre, choisir la meilleure combinaison de codecs et de conteneurs peut être une tâche compliquée. Consultez [Choisir le bon conteneur](/fr/docs/Web/Media/Guides/Formats/Containers#choisir_le_bon_conteneur) pour obtenir de l'aide sur la sélection du format de fichier conteneur le mieux adapté à vos besoins&nbsp;; de même, consultez [Choisir un codec vidéo](/fr/docs/Web/Media/Guides/Formats/Video_codecs#choisir_un_codec_video) et [Choisir un codec audio](/fr/docs/Web/Media/Guides/Formats/Audio_codecs#choisir_un_codec_audio) pour obtenir de l'aide sur la sélection des premiers codecs multimédias à utiliser pour votre contenu et votre public cible.

Une autre chose à garder à l'esprit&nbsp;: les navigateurs mobiles peuvent prendre en charge des formats supplémentaires non pris en charge par leurs équivalents de bureau, tout comme ils peuvent ne pas prendre en charge tous les mêmes formats que la version de bureau. De plus, les navigateurs de bureau et mobiles _peuvent_ être conçus pour déléguer la gestion de la lecture multimédia (soit pour tous les médias, soit uniquement pour certains types qu'ils ne peuvent pas gérer en interne). Cela signifie que la prise en charge des médias dépend en partie des logiciels installés par l'utilisateur·ice.

Alors, comment faisons-nous cela&nbsp;? Jetez un œil à [l'exemple mis à jour <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([essayez-le en direct ici <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), également)&nbsp;:

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Votre navigateur ne prend pas en charge cette vidéo. Voici un
    <a href="rabbit320.mp4">lien vers la vidéo</a> à la place.
  </p>
</video>
```

Ici, nous avons retiré l'attribut `src` de la balise {{HTMLElement("video")}} elle-même, et avons plutôt inclus des éléments {{HTMLElement("source")}} séparés qui pointent vers leurs propres sources. Dans ce cas, le navigateur parcourt les éléments {{HTMLElement("source")}} et lit le premier pour lequel il dispose du codec nécessaire. Inclure des sources WebM et MP4 doit suffire à lire votre vidéo sur la plupart des plateformes et navigateurs de nos jours.

Chaque élément `<source>` possède également un attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/source#type). Cet attribut est optionnel, mais il est conseillé de l'inclure. L'attribut `type` contient le {{Glossary("MIME type", "type MIME")}} du fichier défini par le `<source>`, et les navigateurs peuvent utiliser le `type` pour ignorer immédiatement les vidéos qu'ils ne comprennent pas. Si `type` n'est pas inclus, les navigateurs chargent et tentent de lire chaque fichier jusqu'à ce qu'ils en trouvent un qui fonctionne, ce qui prend évidemment du temps et constitue une utilisation inutile des ressources.

Consultez notre [guide sur les types et formats multimédias](/fr/docs/Web/Media/Guides/Formats) pour obtenir de l'aide sur la sélection des meilleurs conteneurs et codecs pour vos besoins, ainsi que pour rechercher les types MIME appropriés à définir pour chacun.

### Autres fonctionnalités de `<video>`

Il y a possibilité d'inclure d'autres fonctionnalités dans une vidéo HTML5. Regardez notre troisième exemple&nbsp;:

```html
<video
  controls
  width="400"
  height="400"
  autoplay
  loop
  muted
  preload="auto"
  poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Votre navigateur ne prend pas en charge les vidéos HTML5. Voici, à la place,
    un <a href="rabbit320.mp4">lien vers la vidéo</a>.
  </p>
</video>
```

Cela produit une sortie du type suivant&nbsp;:

![Un lecteur vidéo affichant une image d'affiche avant de lire la vidéo. L'image d'affiche indique « Extra video features example. Lovely rabbit video »](poster_screenshot_updated.png)

Voici les nouvelles fonctionnalités&nbsp;:

- [`width`](/fr/docs/Web/HTML/Reference/Elements/video#width) et [height](/fr/docs/Web/HTML/Reference/Elements/video#height)
  - : Il est possible de contrôler la taille de la vidéo soit avec ces attributs, soit avec le {{Glossary("CSS")}}. Dans les deux cas, les vidéos conservent le rapport largeur‑hauteur natif — désigné sous le vocable **rapport de proportions**. Si ce dernier ne correspond pas aux tailles indiquées, la vidéo occupe tout l'espace horizontal et l'espace non rempli est de la couleur d'arrière plan unie par défaut.
- [`autoplay`](/fr/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Cet attribut permet de lancer immédiatement la lecture de l'audio ou de la vidéo pendant que le reste de la page se charge. Nous vous déconseillons d'utiliser la lecture automatique de vidéos (ou audio) sur vos sites, car les utilisateur·ice·s peuvent trouver cela vraiment ennuyeux.
- [`loop`](/fr/docs/Web/HTML/Reference/Elements/video#loop)
  - : Cet attribut permet de relancer en boucle la lecture de la vidéo (ou de l'audio). Cette façon de procéder pouvant être mal perçue, ne l'utilisez que si c'est vraiment nécessaire.
- [`muted`](/fr/docs/Web/HTML/Reference/Elements/video#muted)
  - : Cet attribut coupe le son de la vidéo par défaut.
- [`poster`](/fr/docs/Web/HTML/Reference/Elements/video#poster)
  - : Cet attribut prend comme valeur l'URL d'une image affichée avant la lecture de la vidéo. Il s'utilise en tant que logo de démarrage ou de publicité.
- [`preload`](/fr/docs/Web/HTML/Reference/Elements/video#preload)
  - : Cet attribut s'utilise pour mettre en tampon les gros fichiers. Il peut prendre 3 valeurs&nbsp;:
    - `"none"`&nbsp;: ne pas mettre le fichier dans un tampon
    - `"auto"`&nbsp;: mettre le fichier média dans un tampon
    - `"metadata"`&nbsp;: ne mettre que les métadonnées dans le tampon

Vous pouvez trouver l'exemple ci-dessus disponible pour [lecture en direct sur GitHub <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (voir aussi [le code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Notez que nous n'avons pas inclus l'attribut `autoplay` dans la version en direct — si la vidéo commence à jouer dès que la page se charge, vous ne verrez pas l'affiche&nbsp;!

### L'élément `<audio>`

L'élément {{HTMLElement("audio")}} fonctionne exactement de la même manière que l'élément {{HTMLElement("video")}}, mais avec quelques menues différences décrites plus bas. Un exemple classique ressemble à ceci&nbsp;:

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Votre navigateur ne prend pas en charge l'audio HTML5. Voici, à la place, un
    <a href="viper.mp3">lien sur l'audio</a>.
  </p>
</audio>
```

Vous pouvez voir quelque chose de ce genre dans un navigateur&nbsp;:

![Un lecteur audio simple avec un bouton de lecture, un minuteur, un contrôle du volume et une barre de progression](audio-player.png)

> [!NOTE]
> Vous pouvez [lancer la démo de l'audio en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) sur Github (voir aussi le [code source de l'interpréteur <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)).

Cela prend moins de place qu'une vidéo, et il n'y a pas de composante visuelle — il est juste nécessaire d'afficher les contrôles de lecture de l'audio. Voici les autres différences avec les vidéos HTML&nbsp;:

- L'élément {{HTMLElement("audio")}} ne prend pas en charge les attributs `width`/`height` — redisons‑le, il n'y a pas de composant visuel, il n'y donc pas lieu d'assigner une largeur ou une hauteur.
- Il ne prend pas en charge non plus l'attribut `poster` — toujours pas de composant visuel.

Excepté ce qui précède, `<audio>` accepte les mêmes fonctionnalités que `<video>` — revoyez les sections ci-dessus pour plus d'informations à ce propos.

## Afficher du texte dans une vidéo

Nous allons maintenant aborder un concept un peu plus avancé qu'il est très utile de connaître. Beaucoup de gens ne peuvent pas ou ne souhaitent pas écouter le contenu audio ou vidéo qu'ils trouvent sur le Web, du moins à certains moments. Par exemple&nbsp;:

- De nombreuses personnes souffrent de troubles auditifs (tels que la perte auditive ou la surdité) et ne peuvent donc pas entendre clairement le son, voire pas du tout.
- D'autres peuvent ne pas être en mesure d'entendre le son parce qu'elles se trouvent dans des environnements bruyants (comme un bar bondé où l'on diffuse un match).
- De même, dans des environnements où le son peut être source de distraction ou de perturbation (comme dans une bibliothèque ou lorsque votre partenaire essaie de dormir), les sous-titres peuvent s'avérer très utiles.
- Les personnes qui ne parlent pas la langue de la vidéo peuvent souhaiter disposer d'une transcription textuelle, voire d'une traduction, pour les aider à comprendre le contenu multimédia.

N'est-il pas agréable de pouvoir fournir à ces personnes une transcription des paroles prononcées dans l'audio/la vidéo&nbsp;? Eh bien, grâce à la vidéo HTML, c'est possible. Pour ce faire, nous utilisons le format de fichier [WebVTT](/fr/docs/Web/API/WebVTT_API) et l'élément {{HTMLElement("track")}}.

> [!NOTE]
> «&nbsp;Transcrire&nbsp;» signifie «&nbsp;écrire des paroles sous forme de texte&nbsp;». Le texte en résultat est une «&nbsp;transcription&nbsp;».

WebVTT est un format d'écriture de fichiers texte contenant plusieurs chaînes de caractères de texte avec des métadonnées telles que l'heure dans la vidéo à laquelle chaque chaîne de caractères de texte doit être affichée, et même des informations limitées sur le style et le positionnement. Ces chaînes de caractères de texte sont appelées **marqueurs**, et il existe plusieurs types de marqueurs utilisés à différentes fins. Les marqueurs les plus courants sont&nbsp;:

- sous-titres
  - : Traductions de contenus étrangers, destinées aux personnes qui ne comprennent pas les mots prononcés dans l'enregistrement audio.
- légendes
  - : Des transcriptions synchronisées des dialogues ou des descriptions des sons importants, afin de permettre aux personnes qui ne peuvent pas entendre le son de comprendre ce qui se passe.
- descriptions programmées
  - : Texte que le lecteur multimédia doit lire à voix haute afin de décrire les éléments visuels importants aux utilisateur·ice·s aveugles ou malvoyant·e·s.

Un fichier WebVTT type se présente généralement comme suit&nbsp;:

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
Ceci est le premier sous‑titre.

2
00:00:30.739 --> 00:00:34.074
Ceci est le deuxième.

…
```

Pour qu'il soit affiché avec la diffusion du média HTML, il faut&nbsp;:

1. Enregistrer le fichier avec l'extension `.vtt` dans un endroit sensé.
2. Lier le fichier `.vtt` avec l'élément {{HTMLElement("track")}}. `<track>` doit être placé entre les balises `<audio>` ou `<video>`, mais après tous les éléments `<source>`. Utilisez l'attribut [`kind`](/fr/docs/Web/HTML/Reference/Elements/track#kind) pour préciser si les marqueurs sont `subtitles`, `captions` ou `descriptions`. Plus loin, utilisez l'attribut [`srclang`](/fr/docs/Web/HTML/Reference/Elements/track#srclang) pour indiquer au navigateur la langue dans laquelle sont écrit les sous‑titres.

Voici un exemple&nbsp;:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track
    kind="subtitles"
    src="subtitles_es.vtt"
    srclang="es"
    label="Espagnol" />
</video>
```

Pour tester cette fonctionnalité, vous devez héberger les fichiers sur un [serveur HTTP local](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Dans le navigateur, vous pouvez voir une vidéo avec des sous-titres affichés. Pour une application complète et son code source, consultez [Ajouter des légendes et sous-titres aux vidéos HTML](/fr/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Cet exemple utilise JavaScript pour permettre aux utilisateur·ice·s de choisir entre différents sous-titres. Notez que pour activer les sous-titres, vous devez appuyer sur le bouton «&nbsp;CC&nbsp;» et sélectionner une option — Anglais, Allemand ou Espagnol.

> [!NOTE]
> Les pistes de texte vous aident également en matière de {{Glossary("SEO")}}, car les moteurs de recherche sont très performants sur le texte. Les pistes de texte permettent également aux moteurs de recherche de faire un lien direct vers un point particulier de la vidéo.

### Intégrer vos propres vidéos et audios

Pour cette tâche, pourquoi ne pas sortir dans le monde et enregistrer vos propres vidéos et audios&nbsp;? Si vous avez un téléphone, utilisez-le pour enregistrer de l'audio et de la vidéo, transférez-les sur votre ordinateur et essayez-les. Vous devez peut-être effectuer une conversion pour obtenir un WebM et un MP4 pour la vidéo, et un MP3 et un Ogg pour l'audio, mais il existe suffisamment de programmes et d'outils pour le faire sans trop de difficultés, tels que [CloudConvert <sup>(angl.)</sup>](https://cloudconvert.com/mp4-converter) (en ligne) et [Audacity <sup>(angl.)</sup>](https://sourceforge.net/projects/audacity/) (application de bureau). Nous aimerions que vous essayiez&nbsp;!

> [!NOTE]
> Si vous ne pouvez enregistrer ni vidéo ni audio, alors vous pouvez utiliser nos [fichiers audio et vidéo d'exemple <sup>(angl.)</sup>](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) pour réaliser cet exercice.

Il vous faut&nbsp;:

1. Enregistrez vos fichiers audio et vidéo dans un nouveau dossier sur votre ordinateur.
2. Créez un nouveau fichier HTML dans le même répertoire, appelé `index.html`, basé sur notre [modèle de démarrage <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).
3. Ajoutez des éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} à la page&nbsp;; faites en sorte qu'ils affichent les contrôles par défaut du navigateur.
4. Donnez à chacun des éléments {{HTMLElement("source")}} afin que les navigateurs puissent trouver le format audio qu'ils supportent le mieux et le charger. Ceux-ci doivent inclure des attributs [`type`](/fr/docs/Web/HTML/Reference/Elements/source#type).
5. Donnez à chacun d'eux un élément `<p>` de secours à l'intérieur des balises qui fournit un lien direct vers le média pour les navigateurs ne supportant pas ces éléments.
6. Donnez à l'élément `<video>` une affiche qui est affichée avant que la vidéo ne commence à être lue. Amusez-vous à créer votre propre visuel d'affiche.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final doit ressembler à ceci&nbsp;:

```html
<video controls poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Votre navigateur ne supporte pas la vidéo HTML. Voici un
    <a href="rabbit320.mp4">lien vers la vidéo</a> à la place.
  </p>
</video>

<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Votre navigateur ne supporte pas l'audio HTML. Voici un
    <a href="viper.mp3">lien vers l'audio</a> à la place.
  </p>
</audio>
```

</details>

## Résumé

Et voilà — nous espérons que vous vous êtes amusé à jouer avec la vidéo et l'audio dans les pages web&nbsp;! Ensuite, nous vous proposerons des tests que vous pourrez utiliser pour vérifier à quel point vous avez compris et retenu les informations que nous avons fournies sur la vidéo et l'audio HTML.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content")}}
