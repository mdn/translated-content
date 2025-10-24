---
title: Outils pour le développement de jeux vidéo
slug: Games/Tools
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Sur cette page, vous pouvez trouver des liens vers nos articles sur les outils de développement de jeux, qui visent finalement à couvrir les frameworks, compilateurs et outils de débogage.

- [asm.js](/fr/docs/Games/Tools/asm.js)
  - : Asm.js est un sous-ensemble très limité du langage JavaScript, qui peut être considérablement optimisée et exécutée dans un moteur de compilation à l'avance (AOT), pour des performances beaucoup plus rapides que vos performances JavaScript typiques. C'est, bien sûr, idéal pour les jeux.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : Un compilateur LLVM à JavaScript&nbsp;; Avec Emscripten, vous pouvez compiler C++ et d'autres langues qui peuvent compiler à LLVMBytecode en JavaScript haute performance. Il s'agit d'un excellent outil pour le portage des applications sur le Web&nbsp;! Il y a un [tutoriel EMScripten utile <sup>(angl.)</sup>](https://github.com/emscripten-core/emscripten/wiki/Tutorial) disponible sur le wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Le profileur Firefox vous permet de déterminer les performances de votre code afin d'identifier les problèmes et d'optimiser la vitesse d'exécution de votre jeu.
- Outils pour le développement et le débogage de jeux
  - : En quoi cela diffère-t-il du débogage normal d'une application web&nbsp;? Quels sont les outils spécialisés disponibles&nbsp;? Will abordera une grande partie de ces questions dans [outils <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/index.html), mais ici, nous devrions fournir une sorte de tutoriel pratique sur les outils de débogage des jeux, avec des liens vers les ressources de Will&nbsp;:
    - Présentation des outils de base
    - [Éditeur de shader <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Outils de performance (toujours en production, estimés début 2014)

## Technologies Web

<table class="no-markdown standard-table">
  <caption>Technologies Web dans le développement de jeux et leur fonction</caption>
  <thead>
    <tr>
      <th scope="col"><strong>Fonction</strong></th>
      <th scope="col"><strong>Technologie</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Audio</strong></td>
      <td><a href="/fr/docs/Web/API/Web_Audio_API">API audio Web</a></td>
    </tr>
    <tr>
      <td><strong>Graphiques</strong></td>
      <td>
        <a href="/fr/docs/Web/API/WebGL_API">WebGL</a> (<a href="https://www.khronos.org/opengles/">OpenGL ES</a> 2.0)
      </td>
    </tr>
    <tr>
      <td><strong>Entrée</strong></td>
      <td>
        <a href="/fr/docs/Web/API/Touch_events">Événements touchés</a>,
        <a href="https://www.khronos.org/opengles/">OpenGL ES</a> 2.0)
      </td>
    </tr>
    <tr>
      <td><strong>Entrée</strong></td>
      <td>
        <a href="/fr/docs/Web/API/Touch_events">Événements touchés</a>,
        <a href="/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API">API GamePad</a>,
        capteurs de l'appareil,
        <a href="/fr/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/fr/docs/Web/API/Fullscreen_API">API plein écran</a>,
        <a href="/fr/docs/Web/API/Pointer_Lock_API">API de verrouillage du pointeur</a>
      </td>
    </tr>
    <tr>
      <td><strong>Langage</strong></td>
      <td>
        <a href="/fr/docs/Web/JavaScript">JavaScript</a> (ou C/C++ en utilisant
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> un compilateur vers JavaScript)
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
        <a href="/fr/docs/Web/SVG">SVG</a> (et bien plus encore!)
      </td>
    </tr>
  </tbody>
</table>

- [API Fetch](/fr/docs/Web/API/Fetch_API)
  - : Envoyez et recevez tout type de données depuis un serveur Web, par exemple pour télécharger de nouveaux niveaux de jeu et des illustrations, ou pour transmettre des informations sur l'état du jeu en temps différé.
- [API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
  - : Jouer en plein écran.
- [API GamePad](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Utilisez des GamePads ou d'autres contrôleurs de jeu.
- [HTML](/fr/docs/Web/HTML) et [CSS](/fr/docs/Web/CSS)
  - : Construisez, stylisez et agencez l'interface utilisateur de votre jeu.
- [Audio HTML](/fr/docs/Web/HTML/Reference/Elements/audio)
  - : Jouez facilement des effets sonores simples et de la musique.
- [Indexédb](/fr/docs/Web/API/IndexedDB_API)
  - : Stocker les données des utilisateurs sur leur propre ordinateur ou appareil.
- [Javascript](/fr/docs/Web/JavaScript)
  - : Langue de programmation Web rapide pour écrire le code de votre jeu.
    Pour porter facilement vos jeux existants [Emscripten](https://github.com/emscripten-core/emscripten/wiki) ou [Asm.js](https://asmjs.org/spec/latest/)
- [API de verrouillage du pointeur](/fr/docs/Web/API/Pointer_Lock_API)
  - : Verrouiller la souris ou un autre appareil de pointage dans l'interface de votre jeu.
- [SVG](/fr/docs/Web/SVG) (Graphiques vectoriels évolutifs)
  - : Créez des graphiques vectoriels qui s'adaptent parfaitement, quelle que soit la taille ou la résolution de l'écran de l'utilisateur.
- [Tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Accédez aux données binaires brutes depuis JavaScrip&nbsp;; manipulez les textures GL, les données de jeu ou tout autre élément.
- [API audio Web](/fr/docs/Web/API/Web_Audio_API)
  - : Contrôlez la lecture, la synthèse et la manipulation de l'audio en temps réel.
- [WebGL](/fr/docs/Web/API/WebGL_API)
  - : Créez des graphiques 3D (et 2D) à haute performance et avec l'accélération matérielle. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/fr/docs/Web/API/WebRTC_API)
  - : Communications en temps réel pour contrôler les données audio et vidéo, y compris les téléconférences et la transmission d'autres données d'application entre deux utilisateurs, comme le chat.
- [Sockets websockets](/fr/docs/Web/API/WebSockets_API)
  - : Connectez votre application ou votre site à un serveur pour transmettre des données dans les deux sens en temps réel. Parfait pour l'action de jeu multijoueur, les services de chat, etc.
- [Travailleurs du Web](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Générer des threads d'arrière-plan exécutant leur propre code JavaScript pour les processeurs multicœurs.

## Transférer des jeux natifs vers le Web

Si vous êtes un développeur natif (par exemple, vous écrivez des jeux en C++) et que vous souhaitez savoir comment porter vos jeux sur le Web, vous devriez en savoir plus sur notre outil [Emscripten](https://emscripten.org/index.html) - il s'agit d'un compilateur LLVM vers JavaScript qui prend le bytecode LLVM (généré par exemple à partir de C/C++ à l'aide de Clang ou d'un autre langage) et le compile en [asm.js](/fr/docs/Games/Tools/asm.js), qui peut être exécuté sur le Web.

Pour commencer, regardez les ressources suivantes&nbsp;:

- [À propos d'Emscripten](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html) pour une introduction, y compris les détails de haut niveau.
- [Télécharger et installer](https://emscripten.org/docs/getting_started/downloads.html) la chaîne d'outils.
- [Tutoriel Emscripten](https://emscripten.org/docs/getting_started/Tutorial.html) pour un tutoriel pour vous apprendre à commencer.
