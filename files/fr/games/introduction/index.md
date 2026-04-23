---
title: Introduction au développement de jeux vidéo
slug: Games/Introduction
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Le web moderne est rapidement devenu une plateforme viable non seulement pour créer des jeux époustouflants et de haute qualité, mais aussi pour les distribuer. Cet article vous présente les avantages d'utiliser le Web comme plateforme de jeu, ainsi que les technologies qui le rendent possible.

La gamme de jeux que vous pouvez créer est comparable à celle des applications de bureau et des systèmes d'exploitation natifs. Avec les technologies web modernes et un navigateur récent, il est tout à fait possible de réaliser des jeux impressionnants et haut de gamme pour le Web. Et il ne s'agit pas seulement de jeux de cartes simples ou de jeux sociaux multijoueurs qui, autrefois, étaient réalisés avec Flash®. On parle ici de jeux de tir en 3D, de RPG et bien plus encore. Grâce aux améliorations massives des performances du compilateur just-in-time de [JavaScript](/fr/docs/Web/JavaScript) et aux nouvelles API, vous pouvez créer des jeux qui s'exécutent dans le navigateur (ou sur des appareils alimentés par [HTML5](/fr/docs/Glossary/HTML5)) sans compromis.

## La plateforme HTML pour les jeux

Vous pouvez vraiment considérer le Web comme une meilleure plateforme cible pour votre jeu. Comme nous aimons le dire, «&nbsp;le Web est la plateforme&nbsp;». Regardons le cœur de la plateforme Web&nbsp;:

<table class="no-markdown standard-table">
  <thead>
    <tr>
      <th scope="col">Fonction</th>
      <th scope="col">Technologie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Audio</strong></td>
      <td><a href="/fr/docs/Web/API/Web_Audio_API">L'API Web Audio</a></td>
    </tr>
    <tr>
      <td><strong>Graphismes</strong></td>
      <td>
        <a href="/fr/docs/Web/API/WebGL_API">WebGL</a> (<a
          href="https://www.khronos.org/opengles/"
          >OpenGL ES <sup>(angl.)</sup></a
        >
        2.0)
      </td>
    </tr>
    <tr>
      <td><strong>Entrée</strong></td>
      <td>
        <a href="/fr/docs/Web/API/Touch_events">L'évènement Touch</a>,
        <a href="/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"
          >L'API Gamepad</a
        >, capteurs de périphérique, <a href="/fr/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/fr/docs/Web/API/Fullscreen_API">L'API Full Screen</a>,
        <a href="/fr/docs/Web/API/Pointer_Lock_API">L'API Pointer Lock</a>
      </td>
    </tr>
    <tr>
      <td><strong>Langage</strong></td>
      <td>
        <a href="/fr/docs/Web/JavaScript">JavaScript</a> (ou C/C++ en utilisant
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> pour
        compiler en JavaScript)
      </td>
    </tr>
    <tr>
      <td><strong>Réseau</strong></td>
      <td>
        <a href="/fr/docs/Web/API/WebRTC_API">WebRTC</a> et/ou
        <a href="/fr/docs/Web/API/WebSockets_API">WebSockets</a>
      </td>
    </tr>
    <tr>
      <td><strong>Stockage</strong></td>
      <td>
        <a href="/fr/docs/Web/API/IndexedDB_API">IndexedDB</a> ou le «&nbsp;cloud&nbsp;»
      </td>
    </tr>
    <tr>
      <td><strong>Web</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML">HTML</a>,
        <a href="/fr/docs/Web/CSS">CSS</a>,
        <a href="/fr/docs/Web/SVG">SVG</a> (et bien plus encore&nbsp;!)
      </td>
    </tr>
  </tbody>
</table>

## L'aspect commercial

En tant que développeur de jeux vidéo, que vous soyez seul ou fassiez partie d'un studio plus grand, vous voulez savoir pourquoi le Web serait pertinent pour votre prochain jeu. Nous verrons ici en quoi le Web peut vous aider.

1. La portée du Web est phénoménale&nbsp;; il est partout. Les jeux construits avec HTML fonctionnent sur les smartphones, les tablettes, les PC et les téléviseurs connectés.
2. La visibilité et la découverte sont améliorées. Vous n'êtes pas limité·e à promouvoir votre application sur le magasin d'applications de quelqu'un d'autre. Vous pouvez faire la publicité et promouvoir votre jeu partout sur le Web ainsi que sur d'autres médias, en profitant de la capacité du Web à créer des liens et à être partagé pour atteindre de nouveaux·elles utilisateur·ice·s.
3. Vous avez le contrôle là où cela compte&nbsp;: les paiements. Vous n'avez pas à céder 30% de vos revenus à quelqu'un d'autre simplement parce que votre jeu fait partie de leur écosystème. Fixez le prix que vous souhaitez et utilisez le service de paiement que vous voulez.
4. Encore plus de contrôle, vous pouvez mettre à jour votre jeu quand vous le souhaitez. Plus besoin d'attendre avec impatience une approbation pendant qu'une personne cachée dans une autre entreprise décide si votre correctif critique sera publié aujourd'hui ou demain.
5. Contrôlez votre analytique&nbsp;! Plutôt que de dépendre de quelqu'un d'autre pour décider des statistiques dont vous avez besoin, vous pouvez collecter les vôtres — ou choisir le tiers que vous préférez — pour obtenir des informations sur vos ventes et la portée de votre jeu.
6. Vous pouvez gérer la relation avec votre clientèle de façon plus directe, à votre manière. Fini les retours client filtrés par les mécanismes limités d'un magasin d'applications. Interagissez avec vos client·e·s comme vous le souhaitez, sans intermédiaire.
7. Vos joueur·euse·s peuvent jouer à votre jeu partout, à tout moment. Parce que le Web est omniprésent, vos client·e·s peuvent vérifier l'état de leur jeu sur leurs téléphones, tablettes, ordinateurs portables à la maison, ordinateurs de bureau au travail, ou tout autre appareil.

## Les technologies Web pour les développeurs de jeux vidéo

Pour les passionné·e·s de technologie, plongeons dans les API que le Web met à disposition pour les développeur·euse·s de jeux vidéo. Voici une liste complète pour vous donner un aperçu de ce que le Web peut vous offrir&nbsp;:

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
  - : Envoyer et recevoir toutes sortes de données depuis un serveur Web, comme télécharger de nouveaux niveaux de jeu et des éléments graphiques ou transmettre des informations de statut de jeu non temps réel.
- [L'API Full Screen](/fr/docs/Web/API/Fullscreen_API)
  - : Cette API simple permet à votre jeu de prendre le contrôle de tout l'écran, immergeant ainsi le joueur dans l'action.
- [L'API Gamepad](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Si vous souhaitez que vos utilisateur·ice·s puissent utiliser des manettes ou d'autres contrôleurs pour votre jeu, vous aurez besoin de cette API.
- [HTML](/fr/docs/Web/HTML) et [CSS](/fr/docs/Web/CSS)
  - : Ensemble, ces deux technologies vous permettent de construire, mettre en forme et organiser l'interface utilisateur de votre jeu. L'élément {{HTMLElement("canvas")}} fait partie de HTML et permet de réaliser des graphismes 2D.
- [HTML audio](/fr/docs/Web/HTML/Reference/Elements/audio)
  - : L'élément HTML {{HTMLElement("audio")}} permet de jouer facilement des effets sonores simples et de la musique. Si vos besoins sont plus avancés, consultez [l'API Web Audio](/fr/docs/Web/API/Web_Audio_API) pour une vraie puissance de traitement audio&nbsp;!
- [IndexedDB](/fr/docs/Web/API/IndexedDB_API)
  - : Une API de stockage de données puissante pour maintenir les données utilisateur sur leur propre ordinateur ou appareil. Une excellente façon de sauvegarder l'état du jeu et d'autres informations localement, pour éviter de devoir les télécharger à chaque fois. Utile aussi pour rendre votre jeu jouable même lorsque l'utilisateur·ice n'est pas connecté·e au Web (par exemple lors d'un long vol en avion).
- [JavaScript](/fr/docs/Web/JavaScript)
  - : JavaScript, le langage de programmation utilisé sur le Web, est extrêmement rapide dans les navigateurs modernes et ne cesse de s'améliorer. Utilisez sa puissance pour écrire le code de votre jeu, ou explorez des technologies comme [Emscripten <sup>(angl.)</sup>](https://github.com/emscripten-core/emscripten/wiki) ou [Asm.js <sup>(angl.)</sup>](http://asmjs.org/spec/latest/) pour porter facilement vos jeux existants.
- [L'API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API)
  - : L'API Pointer Lock permet de verrouiller la souris ou tout autre dispositif de pointage dans l'interface de votre jeu, de sorte qu'au lieu d'une position absolue du curseur, vous recevez des deltas de coordonnées qui vous donnent des mesures plus précises de ce que fait l'utilisateur·ice, et empêchent d'envoyer accidentellement des entrées ailleurs, ce qui pourrait faire manquer des actions importantes.
- [SVG](/fr/docs/Web/SVG) (Scalable Vector Graphics)
  - : Permet de créer des graphiques vectoriels qui s'adaptent parfaitement quelle que soit la taille ou la résolution de l'affichage de l'utilisateur·ice.
- [Tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Les tableaux typés JavaScript vous donnent accès à des données binaires brutes depuis JavaScript&nbsp;; cela vous permet de manipuler des textures GL, des données de jeu ou tout autre chose, même si ce n'est pas dans un format natif JavaScript.
- [L'API Web Audio](/fr/docs/Web/API/Web_Audio_API)
  - : Cette API pour contrôler la lecture, la synthèse et la manipulation de l'audio depuis le code JavaScript vous permet de créer des effets sonores impressionnants, de jouer et de manipuler de la musique en temps réel.
- [WebGL](/fr/docs/Web/API/WebGL_API)
  - : Permet de créer des graphismes 3D (et 2D) de haute performance, accélérés matériellement, à partir de contenu Web. Il s'agit d'une implémentation prise en charge par le Web de [OpenGL ES <sup>(angl.)</sup>](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/fr/docs/Web/API/WebRTC_API)
  - : L'API WebRTC (Real-Time Communications) vous donne le pouvoir de contrôler les données audio et vidéo, y compris la téléconférence et la transmission d'autres données d'application entre deux utilisateur·ice·s. Vous voulez que vos joueur·euse·s puissent discuter pendant qu'ils·elles explosent des monstres&nbsp;? Cette API est faite pour vous.
- [WebSockets](/fr/docs/Web/API/WebSockets_API)
  - : L'API WebSocket permet de connecter votre application ou site à un serveur pour transmettre des données en temps réel. Parfait pour les jeux multijoueurs, les services de discussion, etc.
- [Web Workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Les Workers vous donnent la possibilité de lancer des processus en arrière-plan exécutant leur propre code JavaScript, pour tirer parti des processeurs multicœurs modernes.
