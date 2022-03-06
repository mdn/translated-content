---
title: Contenu audio et vidéo
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
tags:
  - Article
  - Audio
  - Débutant
  - Guide
  - HTML
  - Légendes
  - Video
  - pistes (audio ou texte)
  - sous‑titres
translation_of: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
original_slug: Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

Maintenant que nous sommes à l'aise pour ajouter de simples images dans une page web, nous passons à l'étape suivante : ajouter de la vidéo et un lecteur audio à vos documents HTML. Dans cet article, nous nous contenterons de le faire avec les éléments {{htmlelement("video")}} et {{htmlelement("audio")}}. Nous terminerons en apprenant comment ajouter des légendes et des sous-titres à vos vidéos.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Compétences informatiques de base, 
        <a
          href="/fr/Apprendre/Commencer_avec_le_web/Installation_outils_de_base"
          >installation des outils de base</a
        >, bases de la
        <a href="/fr/Apprendre/Commencer_avec_le_web/G%C3%A9rer_les_fichiers"
          >manipulation des fichiers</a
        >, connaissance des fondamentaux du HTML (comme expliqué dans 
        <a href="/fr/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started"
          >Commencer avec le HTML)</a
        >
        et
        <a href="/fr/Apprendre/HTML/Multimedia_and_embedding/Images_in_HTML"
          >Images en HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Apprendre à intégrer vidéos et audios dans une page web et y ajouter des
        légendes et des sous-titres.
      </td>
    </tr>
  </tbody>
</table>

## Audio et vidéo sur le web

Les développeurs ont toujours voulu utiliser la vidéo et l'audio sur le web et ce, dès le début des années 2000, quand nous avons commencé à disposer d'une bande passante suffisamment rapide pour supporter toutes sortes de vidéos (les fichiers vidéo étant beaucoup plus lourds que du texte ou des images). Au départ, les technologies embarquées telles que HTML n'avaient pas la capacité d'intégrer de la vidéo ou de l'audio, donc, les solutions « propriétaires » (ou basées sur des greffons) comme [Flash](https://fr.wikipedia.org/wiki/Adobe_Flash) (puis, plus tard, [Silverlight](https://fr.wikipedia.org/wiki/Silverlight)) sont devenues très populaires pour gérer ce type de contenu. Ces technologies fonctionnaient bien mais avaient de nombreux inconvénients, comme une relation aléatoire avec les fonctionnalités HTML/CSS, des problèmes de sécurité et d'accessibilité.

Une solution embarquée devrait résoudre la plupart de ces problèmes. Heureusement, après quelques années, la spécification {{glossary("HTML5")}} apportait ces améliorations avec les éléments  {{htmlelement("video")}} et {{htmlelement("audio")}} et des {{Glossary("API","APIs")}}{{Glossary("JavaScript")}} flambants neufs pour les contrôler. Nous ne verrons pas JavaScript ici — nous poserons juste les fondamentaux qui peuvent être obtenus avec HTML.

Nous ne vous apprendrons pas à produire des fichiers audio ou vidéo  — cela demande des compétences totalement différentes. Nous vous conseillons ce lien Github [fichiers d'échantillons audio et vidéo et exemples de code](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content) pour votre expérience personnelle, au cas où vous ne pourriez pas y accéder par vous-même.

> **Note :** Avant de commencer, vous devez savoir qu'il existe un grand nombre de fournisseurs de vidéos en ligne {{glossary("OVP","OVPs")}} comme [YouTube](https://www.youtube.com/), [Dailymotion](http://www.dailymotion.com), et [Vimeo](https://vimeo.com/). Pour l'audio, voyez [Soundcloud](https://soundcloud.com/)  par exemple. Ces sociétés offrent un moyen simple d'héberger et de consommer de la vidéo, donc, vous n'avez pas à vous soucier de l'énorme consommation de bande passante. Ils peuvent aussi vous proposer du code "tout-prêt" pour intégrer la vidéo/audio dans vos pages web. Si vous suivez cette procédure, vous vous éviterez quelqu'unes des difficultés abordées dans cet article. Nous parlerons en détails de ces services dans l'article suivant.

### L' élément \<video>

L'élément {{htmlelement("video")}} vous permet d'intégrer de la vidéo très facilement. En voici un exemple :

```html
<video src="rabbit320.webm" controls>
  <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici, à la place, un <a href="rabbit320.webm">lien sur la vidéo</a>.</p>
</video>
```

Les fonctionnalités de ce code sont :

- {{htmlattrxref("src","video")}}
  - : De la même manière que pour l'élément {{htmlelement("img")}}, l'attribut `src` (source) contient le chemin vers la vidéo que vous voulez intégrer.  Cela fonctionne de la même manière.
- {{htmlattrxref("controls","video")}}
  - : Les utilisateurs doivent avoir un contrôle sur la lecture de la vidéo ou de l'audio. (c'est particulièrement crucial pour les gens ayant de l'[épilepsie](https://fr.wikipedia.org/wiki/%C3%89pilepsie).) Vous devez vous servir de l'attribut  `controls` pour appeler l'interface de contrôle du navigateur ou construire votre propre interface en utilisant l'[API JavaScript](/fr/docs/Web/API/HTMLMediaElement) adéquat. Au minimum, l'interface doit avoir un contrôle de démarrage et d'arrêt (start/stop) du média et un pour ajuster le volume.
- Le paragraphe dans la balise `<video>`
  - : Cela peut s'appeler solution de repli ou contenu de secours (fallback content) — si le navigateur accédant à la page ne supporte pas l'élément `<video>` , cela offre un texte alternatif qui peut être ce que vous voulez ; dans ce cas nous avons mis un lien direct au fichier vidéo, afin que l'utilisateur puisse au moins y accéder sans avoir à se soucier du navigateur qu'il utilise.

La vidéo intégrée donnerait quelque chose comme ça :

![A simple video player showing a video of a small white rabbit](simple-video.png)

Faites un essai avec [l'exemple ici](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html). (voyez aussi le [code source](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

### Gestion de différents formats

Il y a un problème avec l'exemple au-dessus que vous avez dû rencontrer si vous avez accédé au lien « exemple ici » avec un navigateur comme Safari ou Internet Explorer. La vidéo ne se lancera pas ! Ceci parce que les navigateurs acceptent des formats différents de video et d'audio.

Voyons-en rapidement la terminologie. Les formats comme le MP3, MP4 et le WebM sont appelés des [formats conteneurs](https://fr.wikipedia.org/wiki/Format_conteneur). Ils contiennent plusieurs parties qui, ensemble, donnent l'intégralité de la chanson ou de la vidéo — comme une piste audio, une piste vidéo et les métadonnées qui décrivent le média qui est lu.

Les pistes audio et vidéo sont aussi de différents formats, par exemple :

- Un conteneur WebM empaquette de l'audio Ogg Vorbis avec de la vidéo VP8/VP9. Firefox et Chrome, en particulier, assurent sa prise en charge.
- Un conteneur MP4 assemble de l'audio AAC ou MP3 en audio avec de la vidéo H.264. Internet Explorer et Safari, principalement, le prennent en charge.
- L'ancien conteneur Ogg rassemblait de l'audio Ogg Vorbis et de la vidéo Ogg Theora. Il était essentiellement pris en charge par Firefox and Chrome, mais il a été supplanté par le format WebM qui est de meilleure qualité.

Un lecteur audio peut jouer directement une piste audio, par ex. un fichier MP3 ou Ogg. Elles ne nécessitent pas de conteneur.

> **Note :** Ce n'est pas si simple, comme vous pouvez le voir dans le [tableau de compatibilité des codecs audio-vidéo](/fr/docs/Web/HTML/Supported_media_formats#Browser_compatibility). En outre, de nombreux navigateurs de plateforme mobile peuvent lire un format non pris en charge en le transférant au lecteur multimédia du système sous-jacent. Mais pour l'instant nous nous contenterons de ce qui précède.

Les formats ci-dessus ont été créés pour compresser la vidéo et l'audio dans des fichiers gérables (les fichiers vidéo et audio bruts sont très volumineux). Les navigateurs contiennent différents {{Glossary("Codec","Codecs")}}, comme Vorbis ou H.264, utilisés pour convertir le son et la vidéo compressés en binaire et inversement. Comme indiqué ci-dessus, les navigateurs ne supportent malheureusement pas tous les mêmes codecs, vous devrez donc fournir plusieurs fichiers pour chaque production de média. S'il vous manque le bon codec pour décoder le média, il ne pourra pas être lu.



> **Note :** Vous êtes peut-être surpris de l'existence d'une telle situation. Les formats **MP3** (pour l'audio) et **MP4/H.264** (pour la vidéo) sont tous deux largement pris en charge et de bonne qualité. Cependant, ils sont également grevés de brevets — les brevets américains couvrent le MP3 jusqu'en 2017 au moins et le H.264 jusqu'en 2027 au plus tôt, ce qui signifie que les navigateurs ne détenant pas de licence doivent payer d'énormes sommes d'argent pour pouvoir utiliser ces formats. En outre, beaucoup de personnes évitent, par principe, les logiciels propriétaires et leur préférent des formats ouverts. C'est pourquoi nous devons fournir plusieurs formats pour une prise en charge par différents navigateurs.
>
>

Alors, comment faire ? Jetez un coup d'œil à l'exemple qui suit, [mis à jour](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), ([essayez-le directement ici](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) aussi) :

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici, à la place, un <a href="rabbit320.mp4">lien sur la vidéo</a>.</p>
</video>
```

Ici, nous avons retiré l'attribut `src` de la balise \<video> et inclus des éléments {{htmlelement("source")}} séparés qui pointent vers des sources appropriées. Dans ce cas, le navigateur parcourra les éléments `<source>` et jouera le premier dont il peut prendre en charge le codec. Inclure des sources WebM et MP4 devraient suffire pour lire votre vidéo sur la plupart des plateformes et navigateurs de nos jours.

Chaque élément \<source> possède également un attribut de type. C'est facultatif, mais il est conseillé de les inclure — ils contiennent le type {{glossary("MIME type","MIME")}} des fichiers vidéo, et les navigateurs peuvent le lire et sauter immédiatement les vidéos qu'ils ne comprennent pas. Si le type n'est pas indiqué, le navigateur va charger et essayer de lire chaque fichier jusqu'à ce qu'il en trouve un qu'il prenne en charge, ce qui demande du temps et des ressources.



> **Note :** L'[article sur les formats média pris en charge](/fr/docs/Web/HTML/Supported_media_formats) contient quelques types {{glossary("MIME type","MIME")}} courants.

### Autres fonctionnalités de \<video>

Il y a possibilité d'inclure d'autres fonctionnalités dans une vidéo HTML5. Regardez notre troisième exemple :

```html
<video controls width="400" height="400"
       autoplay loop muted
       poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici, à la place, un <a href="rabbit320.mp4">lien à la vidéo</a>.</p>
</video>
```

Cela produit une sortie du type suivant :

![A video player showing a poster image before it plays. The poster image says HTML5 video example, OMG hell yeah!](extra-video-features.png)

Voici les nouvelles fonctionnalités :

- {{htmlattrxref("width","video")}} et {{htmlattrxref("height","video")}}
  - : Il est possible de contrôler la taille de la vidéo soit avec ces attributs, soit avec le {{Glossary("CSS")}}. Dans les deux cas, les vidéos conservent le rapport largeur‑hauteur natif — désigné sous le vocable **rapport de proportions**. Si ce dernier ne correspond pas aux tailles indiquées, la vidéo occupera tout l'espace horizontal et l'espace non rempli sera de la couleur d'arrière plan unie par défaut.
- {{htmlattrxref("autoplay","video")}}
  - : Cet attribut permet de lancer immédiatement la lecture de l'audio ou de la vidéo pendant que le reste de la page se charge. Nous vous déconseillons d'utiliser la lecture automatique de vidéos (ou audio) sur vos sites, car les utilisateurs peuvent trouver cela vraiment ennuyeux.
- {{htmlattrxref("loop","video")}}
  - : Cet attribut permet de relancer en boucle la lecture de la vidéo (ou de l'audio). Cette façon de procéder pouvant être mal perçue, ne l'utilisez que si c'est vraiment nécessaire.
- {{htmlattrxref("muted","video")}}
  - : Cet attribut coupe le son de la vidéo par défaut.
- {{htmlattrxref("poster","video")}}
  - : Cet attribut prend comme valeur l'URL d'une image affichée avant la lecture de la vidéo. Il s'utilise en tant que logo de démarrage ou de publicité.
- {{htmlattrxref("preload","video")}}

  - : Cet attribut s'utilise pour mettre en tampon les gros fichiers. Il peut prendre 3 valeurs :

    - `"none"` : ne pas mettre le fichier dans un tampon
    - `"auto"` : mettre le fichier média dans un tampon
    - `"metadata"` : ne mettre que les métadonnées dans le tampon

Vous trouverez cet exemple [prêt pour l'interprétation](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) sur Github ( voir aussi le [code source](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)). Notez que nous n'avons pas inséré l'attribut `autoplay` dans la version en direct — si la vidéo débute dès le chargement de la page, vous ne pourrez pas voir le poster !

### L'élément  \<audio>

L'élément {{htmlelement("audio")}} fonctionne exactement de la même manière que l'élément {{htmlelement("video")}}, mais avec quelques menues différences décrites plus bas. Un exemple classique ressemble à ceci :

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>Votre navigateur ne prend pas en charge l'audio HTML5. Voici, à la place, un <a href="viper.mp3">lien sur l'audio</a>.</p>
</audio>
```

Vous verrez quelque chose de ce genre dans un navigateur :

![A simple audio player with a play button, timer, volume control, and progress bar](audio-player.png)

> **Note :** Vous pouver [lancer la démo de l'audio en direct](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) sur Github (voir aussi le [code source de l'interpréteur](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Cela prend moins de place qu'une vidéo, et il n'y a pas de composante visuelle — il est juste nécessaire d'afficher les contrôles de lecture de l'audio. Voici les autres différences avec les vidéos HTML5 :

- L'élément {{htmlelement("audio")}} ne prend pas en charge les attributs `width`/`height` — redisons‑le, il n'y a pas de composant visuel, il n'y donc pas lieu d'assigner une largeur ou une hauteur.
- Il ne prend pas en charge non plus l'attribut `poster` — toujours pas de composant visuel.

Excepté ce qui précéde, `<audio>` accepte les mêmes fonctionnalités que `<video>` — revoyez les sections ci-desssus pour plus d'informations à ce propos.

## Afficher du texte dans une vidéo

Nous allons maintenant parler d'un concept un peu plus avancé vraiment utile à connaître. Beaucoup de gens ne peuvent pas ou ne veulent pas entendre le contenu audio/vidéo qu'ils trouvent sur le Web, du moins à certains moments. Par exemple :

- De nombreuses personnes sont mal‑entendantes (dures d'oreille ou sourdes), et ne peuvent donc pas entendre le son.
- D'autres ne veulent pas de son, soit parce qu'ils sont dans un environnement bruyant (comme un bar avec une foule pendant une retransmission de compétition sportive) et ne peuvent donc pas entendre, soit parce qu'ils sont dans un environnement silencieux (comme une bibliothèque) et ne veulent donc pas déranger.
- Des personnes qui ne parlent pas la langue d'une vidéo peuvent souhaiter un sous‑titrage ou une traduction pour les aider à comprendre le contenu du média.

Ne serait-il pas agréable de pouvoir fournir à ces personnes la transcription des paroles prononcés dans l'audio ou la vidéo ? Eh bien, avec des vidéos HTML5 vous le pouvez, à l'aide du format WebVTT et de l'élément {{htmlelement("track")}}.

> **Note :** « Transcrire » signifie écrire des paroles sous forme de texte, et « transcription » est l'action correspondante.

WebVTT est un format d'écriture de fichiers texte ; il contient nombre de chaînes de texte avec des métadonnées comme l'instant dans la vidéo où vous souhaitez l'affichage du texte, et même une information succinte sur le style et la position de celui‑ci. Ces chaînes textuelles sont appelées des marqueurs, les plus courants étant :

- les sous‑titres (`subtitles`)
  - : Traductions d'éléments d'une langue étrangère pour les personnes ne comprenant pas les paroles de l'audio.
- les légendes (`captions`)
  - : Transcriptions synchrones de dialogues ou de descriptions de sons significatifs, pour permettre aux personnes ne pouvant entendre le son de comprendre ce qui se passe.
- les descriptions programmées (`descriptions`)
  - : Textes convertis en audio, pour aider les personnes avec des défauts de vision.

Un fichier WebVTT typique ressemblera à :

    WEBVTT

    1
    00:00:22.230 --> 00:00:24.606
    Ceci est le premier sous‑titre.

    2
    00:00:30.739 --> 00:00:34.074
    Ceci est le deuxième.

      ...

Pour qu'il soit affiché avec la diffusion du média HTML, il faut :

1.  Enregistrer le fichier avec l'extension `.vtt` dans un endroit sensé.
2.  Lier le fichier `.vtt` avec l'élément {{htmlelement("track")}}. `<track>` doit être placé entre les balises `<audio>` ou `<video>`, mais après tous les éléments `<source>`. Utilisez l'attribut {{htmlattrxref("kind","track")}} pour préciser si les marqueurs sont  `subtitles`, `captions` ou `descriptions`. Plus loin, utilisez l'attribut {{htmlattrxref("srclang","track")}} pour indiquer au navigateur la langue dans laquelle sont écrit les sous‑titres.

Voici un exemple :

```html
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
```

Il en résultera une vidéo dont les sous-titres seront affichés un peu comme ceci :

![Video player with stand controls such as play, stop, volume, and captions on and off. The video playing shows a scene of a man holding a spear-like weapon, and a caption reads "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Pour plus de détails, lisez [Ajouter des légendes et des sous‑titres aux vidéos HTML5](/fr/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Vous [trouverez un exemple](http://iandevlin.github.io/mdn/video-player-with-captions/), écrit par Ian Devlin, accompagnant cet article sur Github (voyez le [code source](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) aussi). Cet exemple utilise un peu de JavaScript pour permettre à l'utilisateur de choisir entre différents sous‑titres. Notez que pour activer les sous‑titres, vous devez presser le bouton « CC » et selectionner une option — English, Deutsch ou Español.

> **Note :** Les pistes texte peuvent aussi vous aider avec {{glossary("SEO")}}, car les moteurs de recherche sont très performants sur le texte. Les pistes textes permettent aussi aux moteurs de recherche de faire un lien direct à un point particulier de la vidéo.

### Apprentissage interactif : intégrer vos propres vidéos et audios

Pour cet exercice, nous aimerions (idéalement) que vous partiez « dans le monde » pour enregistrer vos propres vidéos et pistes audio — la plupart des téléphones actuels vous permettent facilement de le faire, et, à condition que vous puissiez le transférer sur l'ordinateur, vous pouvez l'utiliser. Vous allez devoir convertir dans les formats adaptés, WebM et MP4 pour la vidéo,  MP3 et Ogg pour l'audio. Il y a de nombreux progammes vous permettant de faire ça sans difficulté comme [Miro Video Converter](http://www.mirovideoconverter.com/) et [Audacity](https://sourceforge.net/projects/audacity/). Nous aimerions que vous essayiez !

Si vous ne pouvez enregistrer ni vidéo ni audio, alors, n'hésitez pas à vous servir de nos [échantillons audio et vidéo](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content) pour réaliser cet exercice. Vous pouvez aussi utiliser notre échantillon-code de référence.

Il vous faudra :

1.  Préserver vos fichiers audio et vidéo dans un nouveau dossier sur votre ordinateur.
2.  Créer un nouveau fichier HTML dans le même répertoire nommé :  `index.html`.
3.  Ajouter des éléments  `<audio>` et  `<video>` dans la page; faire en sorte qu'ils affichent les contrôles par défaut du navigateur.
4.  Leur attribuer (aux deux) des éléments `<source>` que le navigateur puisse trouver le meilleur format audio et le charger. N'oubliez pas d'inclure les attributs  `type`.
5.  Donner à l'élément `<video>` une image qui sera affichée avant que la vidéo ne démarre. Amusez-vous à créer votre propre visuel de l'affiche.

En bonus, vous pouvez chercher des textes à intégrer et ajouter des légendes à vos vidéos.

## Résumé

Emballez, c'est pesé ! Nous espérons que vous avez pris plaisir avec ces pages vidéo et audio. Au chapitre suivant, nous découvrirons des manières différentes d'intégrer du contenu sur le Web en se servant de technologies comme {{htmlelement("iframe")}} et {{htmlelement("object")}}.

## Consultez aussi :

- {{htmlelement("audio")}}
- {{htmlelement("video")}}
- {{htmlelement("source")}}
- {{htmlelement("track")}}
- [Ajouter des légendes et sous-titres aux vidéos HTML5](/fr/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [Intégration Audio et Vidéo](/fr/docs/Web/Apps/Fundamentals/Audio_and_video_delivery)&nbsp;: de nombreux détails sur la manière de mettre de la vidéo et audio sur le web avec HTML et JavaScript.
- [Manipuler l'Audio et la Vidéo](/fr/docs/Web/Apps/Fundamentals/Audio_and_video_manipulation): de nombreux détails pour manipuler l'audio et la vidéo avec JavaScript (par ex. en ajoutant des filtres).
- Options automatisées pour la [traduction multimédia](http://www.inwhatlanguage.com/blog/translate-video-audio/).

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}



## Contenu du module :

- [Les images en HTML](/fr/Apprendre/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Contenu audio et vidéo](/fr/Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video)
- [From \<object> to \<iframe> — other embedding technologies](/fr/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Ajouter des images vectorielles à une page Web](/fr/Apprendre/HTML/Comment/Ajouter_des_images_vectorielles_%C3%A0_une_page_web)
- [Ajouter des images "responsive" à une page Web](/fr/Apprendre/HTML/Comment/Ajouter_des_images_adaptatives_%C3%A0_une_page_web)
- [Mozilla splash page](/fr/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)



<!---->
