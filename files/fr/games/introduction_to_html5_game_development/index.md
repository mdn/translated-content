---
title: Introduction au développement de jeux HTML5 (résumé)
slug: Games/Introduction_to_HTML5_Game_Development
tags:
  - Firefox OS
  - HTML5
  - Jeux
  - Mobile
translation_of: Games/Introduction_to_HTML5_Game_Development_(summary)
original_slug: Jeux/Introduction_to_HTML5_Game_Gevelopment_(summary)
---
{{GamesSidebar}}{{IncludeSubnav("/fr/docs/Games")}}

## Avantages

1.  Les jeux construits avec HTML5 fonctionnent sur les smartphones, les tablettes, les PC et les téléviseurs intelligents.
2.  Annoncez et promouvez votre jeu sur le Web, ainsi que sur d'autres médias.
3.  Paiements. Chargez ce que vous voulez et utilisez le service de traitement des paiements de votre choix.
4.  Mettez à jour votre jeu quand vous le souhaitez.
5.  Collectez vos propres analyses !
6.  Connectez-vous plus étroitement avec vos clients,
7.  Les joueurs peuvent jouer au jeu n'importe où, n'importe quand.

## Technologies Web

| **Fonction**   | Technologie                                                                                                                                                                                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audio**      | [Web Audio API](/fr/docs/Web/API/Web_Audio_API)                                                                                                                                                                                                                                                                                    |
| **Graphique**  | [WebGL](/fr/docs/Web/API/WebGL_API) ([OpenGL ES](http://www.khronos.org/opengles/ "http://www.khronos.org/opengles/") 2.0)                                                                                                                                                                                                         |
| **Input**      | [Événements tactiles](/fr/docs/Web/Guide/DOM/Events/Touch_events), [Utiliser l'API Gamepad](/fr/docs/Web/Guide/API/Gamepad), capteurs de l'appareil , [L'API WebRTC](/fr/docs/Web/API/WebRTC_API), [Utiliser le mode plein écran](/fr/docs/Web/Guide/DOM/Using_full_screen_mode), [Pointer Lock API](/fr/docs/WebAPI/Pointer_Lock) |
| **Language**   | [JavaScript](/fr/docs/JavaScript "/fr/docs/JavaScript") (ou C/C++  utilisant [Emscripten](https://github.com/kripken/emscripten/wiki "https://github.com/kripken/emscripten/wiki") pour compiler en JavaScript )                                                                                                                   |
| **Networking** | [WebRTC](/fr/docs/WebRTC "/fr/docs/WebRTC") et/ou [WebSockets](/fr/docs/Web/API/WebSockets_API)                                                                                                                                                                                                                                    |
| **Stockage**   | [IndexedDB](/fr/docs/Web/API/API_IndexedDB)  ou le "cloud"                                                                                                                                                                                                                                                                         |
| **Web**        | [HTML](/fr/docs/Web/HTML), [CSS](/fr/docs/Web/CSS), [SVG](/fr/docs/Web/SVG), [Social API](/fr/docs/Social_API "/fr/docs/Social_API") ( et beaucoup plus! )                                                                                                                                                                         |

- [API plein écran](/fr/docs/DOM/Using_fullscreen_mode "/fr/docs/DOM/Using_fullscreen_mode")
  - : Gameplay en plein écran.
- [API Gamepad](/fr/docs/API/Gamepad/Using_Gamepad_API "/fr/docs/API/Gamepad/Using_Gamepad_API")
  - : Utilisez des manettes ou d'autres contrôleurs de jeu.
- [HTML](/fr/docs/HTML "/fr/docs/HTML") et [CSS](/fr/docs/CSS "/fr/docs/CSS")
  - : Créez, stylisez et aménagez l'interface utilisateur de votre jeu.
- [Audio HTML](/fr/docs/HTML/Element/audio "/fr/docs/HTML/Element/audio")
  - : Jouez facilement des effets sonores et de la musique simplement.
- [IndexedDB](/fr/docs/IndexedDB "/fr/docs/IndexedDB")
  - : Stockez les données utilisateur sur leur propre ordinateur ou appareil.
- [JavaScript](/fr/docs/JavaScript "/fr/docs/JavaScript")
  - : Langage de programmation Web rapide pour écrire le code de votre jeu.
    Pour porter facilement vos jeux existants [Emscripten](https://github.com/kripken/emscripten/wiki "https://github.com/kripken/emscripten/wiki") ou [Asm.js](http://asmjs.org/spec/latest/ "http://asmjs.org/spec/latest/")
- [API de verrouillage de pointeur](/fr/docs/WebAPI/Pointer_Lock "/fr/docs/WebAPI/Pointer_Lock")
  - : Verrouillez la souris ou tout autre périphérique de pointage dans l'interface de votre jeu.
- [SVG](/fr/docs/SVG "/fr/docs/SVG") (Scalable Vector Graphics)
  - : Créez des graphiques vectoriels qui évoluent en douceur, quelle que soit la taille ou la résolution de l'écran de l'utilisateur.
- [Tableaux typés](/fr/docs/JavaScript/Typed_arrays "/fr/docs/JavaScript/Typed_arrays")
  - : Accédez aux données binaires brutes depuis JavaScript; Manipulez les textures GL, les données de jeu ou tout autre chose.
- [API Web Audio](/fr/docs/Web_Audio_API "/fr/docs/Web_Audio_API")
  - : Contrôlez la lecture, la synthèse et la manipulation de l'audio en temps réel.
- [WebGL](/fr/docs/WebGL "/fr/docs/WebGL")
  - : Créez des graphiques 3D (et 2D) haute performance à accélération matérielle. [OpenGL ES](http://www.khronos.org/opengles/ "http://www.khronos.org/opengles/") 2.0.
- [WebRTC](/fr/docs/WebRTC "/fr/docs/WebRTC")
  - : Communications en temps réel pour contrôler les données audio et vidéo, y compris la téléconférence et la transmission d'autres données d'application entre deux utilisateurs comme le chat.
- [WebSockets](/fr/docs/WebSockets "/fr/docs/WebSockets")
  - : Connectez votre application ou votre site à un serveur pour transmettre des données en temps réel. Parfait pour l'action de jeu multijoueur, les services de chat, etc.
- [Web Workers](/fr/docs/DOM/Using_web_workers "/fr/docs/DOM/Using_web_workers")
  - : Créez des threads d'arrière-plan exécutant leur propre code JavaScript pour les processeurs multicœurs.
- [XMLHttpRequest](/fr/docs/DOM/XMLHttpRequest "/fr/docs/DOM/XMLHttpRequest") et [File API](/fr/docs/DOM/File_API "/fr/docs/DOM/File_API")
  - : Envoyez et recevez tout type de données que vous souhaitez à partir d'un serveur Web, comme le téléchargement de nouveaux niveaux de jeu et d'illustrations pour transmettre des informations sur l'état du jeu non en temps réel dans les deux sens.
