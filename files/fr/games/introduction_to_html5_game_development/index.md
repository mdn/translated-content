---
title: Introduction au développement de jeux HTML5 (résumé)
slug: Games/Introduction_to_HTML5_Game_Development
---

{{GamesSidebar}}

## Avantages

1. Les jeux construits avec HTML5 fonctionnent sur les smartphones, les tablettes, les PC et les téléviseurs intelligents.
2. Annoncez et promouvez votre jeu sur le Web, ainsi que sur d'autres médias.
3. Paiements. Chargez ce que vous voulez et utilisez le service de traitement des paiements de votre choix.
4. Mettez à jour votre jeu quand vous le souhaitez.
5. Collectez vos propres analyses !
6. Connectez-vous plus étroitement avec vos clients,
7. Les joueurs peuvent jouer au jeu n'importe où, n'importe quand.

## Technologies Web

| **Fonction**   | Technologie                                                                                                                                                                                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audio**      | [Web Audio API](/fr/docs/Web/API/Web_Audio_API)                                                                                                                                                                                                                                                                                  |
| **Graphique**  | [WebGL](/fr/docs/Web/API/WebGL_API) ([OpenGL ES](https://www.khronos.org/opengles/) 2.0)                                                                                                                                                                                                                                         |
| **Input**      | [Événements tactiles](/fr/docs/Web/API/Touch_events), [Utiliser l'API Gamepad](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API), capteurs de l'appareil , [L'API WebRTC](/fr/docs/Web/API/WebRTC_API), [Utiliser le mode plein écran](/fr/docs/Web/API/Fullscreen_API), [Pointer Lock API](/fr/docs/Web/API/Pointer_Lock_API) |
| **Language**   | [JavaScript](/fr/docs/Web/JavaScript) (ou C/C++ utilisant [Emscripten](https://github.com/kripken/emscripten/wiki) pour compiler en JavaScript )                                                                                                                                                                                 |
| **Networking** | [WebRTC](/fr/docs/Web/API/WebRTC_API) et/ou [WebSockets](/fr/docs/Web/API/WebSockets_API)                                                                                                                                                                                                                                        |
| **Stockage**   | [IndexedDB](/fr/docs/Web/API/IndexedDB_API) ou le "cloud"                                                                                                                                                                                                                                                                        |
| **Web**        | [HTML](/fr/docs/Web/HTML), [CSS](/fr/docs/Web/CSS), [SVG](/fr/docs/Web/SVG), [Social API](/fr/docs/Social_API) ( et beaucoup plus! )                                                                                                                                                                                             |

- [API plein écran](/fr/docs/Web/API/Fullscreen_API)
  - : Gameplay en plein écran.
- [API Gamepad](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Utilisez des manettes ou d'autres contrôleurs de jeu.
- [HTML](/fr/docs/Web/HTML) et [CSS](/fr/docs/Web/CSS)
  - : Créez, stylisez et aménagez l'interface utilisateur de votre jeu.
- [Audio HTML](/fr/docs/Web/HTML/Element/audio)
  - : Jouez facilement des effets sonores et de la musique simplement.
- [IndexedDB](/fr/docs/Web/API/IndexedDB_API)
  - : Stockez les données utilisateur sur leur propre ordinateur ou appareil.
- [JavaScript](/fr/docs/Web/JavaScript)
  - : Langage de programmation Web rapide pour écrire le code de votre jeu.
    Pour porter facilement vos jeux existants [Emscripten](https://github.com/kripken/emscripten/wiki) ou [Asm.js](http://asmjs.org/spec/latest/)
- [API de verrouillage de pointeur](/fr/docs/Web/API/Pointer_Lock_API)
  - : Verrouillez la souris ou tout autre périphérique de pointage dans l'interface de votre jeu.
- [SVG](/fr/docs/Web/SVG) (Scalable Vector Graphics)
  - : Créez des graphiques vectoriels qui évoluent en douceur, quelle que soit la taille ou la résolution de l'écran de l'utilisateur.
- [Tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Accédez aux données binaires brutes depuis JavaScript; Manipulez les textures GL, les données de jeu ou tout autre chose.
- [API Web Audio](/fr/docs/Web/API/Web_Audio_API)
  - : Contrôlez la lecture, la synthèse et la manipulation de l'audio en temps réel.
- [WebGL](/fr/docs/Web/API/WebGL_API)
  - : Créez des graphiques 3D (et 2D) haute performance à accélération matérielle. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/fr/docs/Web/API/WebRTC_API)
  - : Communications en temps réel pour contrôler les données audio et vidéo, y compris la téléconférence et la transmission d'autres données d'application entre deux utilisateurs comme le chat.
- [WebSockets](/fr/docs/Web/API/WebSockets_API)
  - : Connectez votre application ou votre site à un serveur pour transmettre des données en temps réel. Parfait pour l'action de jeu multijoueur, les services de chat, etc.
- [Web Workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Créez des threads d'arrière-plan exécutant leur propre code JavaScript pour les processeurs multicœurs.
- [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest) et [File API](/fr/docs/DOM/File_API)
  - : Envoyez et recevez tout type de données que vous souhaitez à partir d'un serveur Web, comme le téléchargement de nouveaux niveaux de jeu et d'illustrations pour transmettre des informations sur l'état du jeu non en temps réel dans les deux sens.
