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
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/fr/docs/Games")}}</div>

<h2 id="Avantages">Avantages</h2>

<ol>
 <li>Les jeux construits avec HTML5 fonctionnent sur les smartphones, les tablettes, les PC et les téléviseurs intelligents.</li>
 <li>Annoncez et promouvez votre jeu sur le Web, ainsi que sur d'autres médias.</li>
 <li>Paiements. Chargez ce que vous voulez et utilisez le service de traitement des paiements de votre choix.</li>
 <li>Mettez à jour votre jeu quand vous le souhaitez.</li>
 <li>Collectez vos propres analyses !</li>
 <li>Connectez-vous plus étroitement avec vos clients,</li>
 <li>Les joueurs peuvent jouer au jeu n'importe où, n'importe quand.</li>
</ol>

<h2 id="Technologies_Web">Technologies Web</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"><strong>Fonction</strong></th>
   <th scope="col">Technologie</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><strong>Audio</strong></td>
   <td><a href="/fr/docs/Web/API/Web_Audio_API">Web Audio API</a></td>
  </tr>
  <tr>
   <td><strong>Graphique</strong></td>
   <td><a href="/fr/docs/Web/API/WebGL_API">WebGL</a> (<a href="http://www.khronos.org/opengles/" title="http://www.khronos.org/opengles/">OpenGL ES</a> 2.0)</td>
  </tr>
  <tr>
   <td><strong>Input</strong></td>
   <td><a href="/fr/docs/Web/Guide/DOM/Events/Touch_events">Événements tactiles</a>, <a href="/fr/docs/Web/Guide/API/Gamepad">Utiliser l'API Gamepad</a>, capteurs de l'appareil , <a href="/fr/docs/Web/API/WebRTC_API"> L'API WebRTC</a>, <a href="/fr/docs/Web/Guide/DOM/Using_full_screen_mode">Utiliser le mode plein écran</a>, <a href="/fr/docs/WebAPI/Pointer_Lock"> Pointer Lock API</a></td>
  </tr>
  <tr>
   <td><strong>Language</strong></td>
   <td><a href="/fr/docs/JavaScript" title="/fr/docs/JavaScript">JavaScript</a> (ou C/C++  utilisant <a href="https://github.com/kripken/emscripten/wiki" title="https://github.com/kripken/emscripten/wiki">Emscripten</a> pour compiler en JavaScript )</td>
  </tr>
  <tr>
   <td><strong>Networking</strong></td>
   <td><a href="/fr/docs/WebRTC" title="/fr/docs/WebRTC">WebRTC</a> et/ou <a href="/fr/docs/Web/API/WebSockets_API"> WebSockets</a></td>
  </tr>
  <tr>
   <td><strong>Stockage</strong></td>
   <td><a href="/fr/docs/Web/API/API_IndexedDB">IndexedDB</a>  ou le  "cloud"</td>
  </tr>
  <tr>
   <td><strong>Web</strong></td>
   <td><a href="/fr/docs/Web/HTML">HTML</a>, <a href="/fr/docs/Web/CSS">CSS</a>, <a href="/fr/docs/Web/SVG">SVG</a>, <a href="/fr/docs/Social_API" title="/fr/docs/Social_API">Social API</a> ( et beaucoup plus! )</td>
  </tr>
 </tbody>
</table>

<dl>
 <dt><a href="/fr/docs/DOM/Using_fullscreen_mode" title="/fr/docs/DOM/Using_fullscreen_mode">API plein écran</a></dt>
 <dd>Gameplay en plein écran.</dd>
 <dt><a href="/fr/docs/API/Gamepad/Using_Gamepad_API" title="/fr/docs/API/Gamepad/Using_Gamepad_API">API Gamepad</a></dt>
 <dd>Utilisez des manettes ou d'autres contrôleurs de jeu.</dd>
 <dt><a href="/fr/docs/HTML" title="/fr/docs/HTML">HTML</a> et <a href="/fr/docs/CSS" title="/fr/docs/CSS">CSS</a></dt>
 <dd>Créez, stylisez et aménagez l'interface utilisateur de votre jeu.</dd>
 <dt><a href="/fr/docs/HTML/Element/audio" title="/fr/docs/HTML/Element/audio">Audio HTML</a></dt>
 <dd>Jouez facilement des effets sonores et de la musique simplement.</dd>
 <dt><a href="/fr/docs/IndexedDB" title="/fr/docs/IndexedDB">IndexedDB</a></dt>
 <dd>Stockez les données utilisateur sur leur propre ordinateur ou appareil.</dd>
 <dt><a href="/fr/docs/JavaScript" title="/fr/docs/JavaScript">JavaScript</a></dt>
 <dd>Langage de programmation Web rapide pour écrire le code de votre jeu.<br>
 Pour porter facilement vos jeux existants <a href="https://github.com/kripken/emscripten/wiki" title="https://github.com/kripken/emscripten/wiki">Emscripten</a> ou <a href="http://asmjs.org/spec/latest/" title="http://asmjs.org/spec/latest/">Asm.js</a></dd>
 <dt><a href="/fr/docs/WebAPI/Pointer_Lock" title="/fr/docs/WebAPI/Pointer_Lock">API de verrouillage de pointeur</a></dt>
 <dd>Verrouillez la souris ou tout autre périphérique de pointage dans l'interface de votre jeu.</dd>
 <dt><a href="/fr/docs/SVG" title="/fr/docs/SVG">SVG</a> (Scalable Vector Graphics)</dt>
 <dd>Créez des graphiques vectoriels qui évoluent en douceur, quelle que soit la taille ou la résolution de l'écran de l'utilisateur.</dd>
 <dt><a href="/fr/docs/JavaScript/Typed_arrays" title="/fr/docs/JavaScript/Typed_arrays">Tableaux typés</a></dt>
 <dd>Accédez aux données binaires brutes depuis JavaScript; Manipulez les textures GL, les données de jeu ou tout autre chose.</dd>
 <dt><a href="/fr/docs/Web_Audio_API" title="/fr/docs/Web_Audio_API">API Web Audio</a></dt>
 <dd>Contrôlez la lecture, la synthèse et la manipulation de l'audio en temps réel.</dd>
 <dt><a href="/fr/docs/WebGL" title="/fr/docs/WebGL">WebGL</a></dt>
 <dd>Créez des graphiques 3D (et 2D) haute performance à accélération matérielle. <a href="http://www.khronos.org/opengles/" title="http://www.khronos.org/opengles/">OpenGL ES</a> 2.0.</dd>
 <dt><a href="/fr/docs/WebRTC" title="/fr/docs/WebRTC">WebRTC</a></dt>
 <dd>Communications en temps réel pour contrôler les données audio et vidéo, y compris la téléconférence et la transmission d'autres données d'application entre deux utilisateurs comme le chat.</dd>
 <dt><a href="/fr/docs/WebSockets" title="/fr/docs/WebSockets">WebSockets</a></dt>
 <dd>Connectez votre application ou votre site à un serveur pour transmettre des données en temps réel. Parfait pour l'action de jeu multijoueur, les services de chat, etc.</dd>
 <dt><a href="/fr/docs/DOM/Using_web_workers" title="/fr/docs/DOM/Using_web_workers">Web Workers</a></dt>
 <dd>Créez des threads d'arrière-plan exécutant leur propre code JavaScript pour les processeurs multicœurs.</dd>
 <dt><a href="/fr/docs/DOM/XMLHttpRequest" title="/fr/docs/DOM/XMLHttpRequest">XMLHttpRequest</a> et <a href="/fr/docs/DOM/File_API" title="/fr/docs/DOM/File_API">File API</a></dt>
 <dd>Envoyez et recevez tout type de données que vous souhaitez à partir d'un serveur Web, comme le téléchargement de nouveaux niveaux de jeu et d'illustrations pour transmettre des informations sur l'état du jeu non en temps réel dans les deux sens.</dd>
</dl>