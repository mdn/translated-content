---
title: Animation de textures en WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
tags:
  - Media
  - Tutoriel
  - Video
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Animation_de_textures_en_WebGL
---
<p>{{WebGLSidebar("Tutorial") }} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>

<p>Dans cette démonstration, nous construisons sur l'exemple précédent en remplaçant nos textures statiques par les images d'un fichier vidéo mp4 en cours de lecture. C'est en fait assez facile à faire, mais c'est amusant à regarder, alors commençons. Un code similaire peut être réalisé pour utiliser n'importe quel type de données (comme un {{HTMLElement ("canvas")}}) comme source pour vos textures..</p>

<h2 id="Accéder_à_la_vidéo">Accéder à la vidéo</h2>

<p>La première étape consiste à créer l'élément {{HTMLElement("video")}} que nous utiliserons pour récupérer les images vidéo :</p>

<pre class="brush: js">// sera mis à true quand la vidéo pourra être copiée dans la texture
var copierVideo = false;

function configurerVideo(url) {
  const video = document.createElement('video');

  var playing = false;
  var timeupdate = false;

  video.autoplay = true;
  video.muted = true;
  video.loop = true;

  <code>// </code>Le fait d'attendre ces 2 évènements assure<code>
  // </code>qu'il y a des données dans la vidéo

  video.addEventListener('playing', function() {
     playing = true;
     verifierPret();
  }, true);

  video.addEventListener('timeupdate', function() {
     timeupdate = true;
     verifierPret();
  }, true);

  video.src = url;
  video.play();

  function verifierPret() {
    if (playing &amp;&amp; timeupdate) {
      copierVideo = true;
    }
  }

  return video;
}
</pre>

<p>D'abord, nous créons un élément vidéo. Nous le mettons en lecture automatique, nous coupons le son et nous faisons tourner la vidéo en boucle. Nous configurons ensuite 2 événements pour voir que la vidéo est en cours de lecture et que le temps a été mis à jour. Nous avons besoin de ces deux vérifications, car c'est une erreur que d'essayer de télécharger sur WebGL une vidéo qui n'a pas encore de données disponibles. La vérification de ces deux événements garantit que des données sont disponibles et que l'on peut démarrer en toute sécurité le chargement de la vidéo dans une texture WebGL. Dans le code ci-dessus, nous vérifions si nous avons reçu ces deux événements et si c'est le cas, nous mettons une variable globale, <code>copierVideo</code>, à true pour nous dire qu'il est possible de commencer à copier la vidéo dans une texture.</p>

<p>Et enfin, nous définissons l'attribut <code>src</code> pour commencer, et nous appelons <code>play</code> pour démarrer le chargement et la lecture de la vidéo.</p>

<h2 id="Utilisation_des_images_vidéo_comme_texture">Utilisation des images vidéo comme texture</h2>

<p>La prochaine modification porte sur <code>initTexture()</code>, qui devient beaucoup plus simple, car elle n'a plus besoin de charger un fichier image. A la place, tout ce qu'elle fait est de créer un objet texture vide, d'y mettre un unique pixel et de définir son filtrage pour une utilisation ultérieure :</p>

<pre class="brush: js">function initTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

<code>  // </code>Parce que la vidéo doit être téléchargée depuis sur Internet,<code>
  // </code>cela peut prendre un certain temps jusqu'à ce qu'elle soit prête, donc<code>
  // </code>mettre un seul pixel dans la texture, de façon à ce que nous puissions<code>
  // </code>l'utiliser immédiatement.
  const niveau = 0;
  const formatInterne = gl.RGBA;
  const largeur = 1;
  const hauteur = 1;
  const bordure = 0;
  const formatSrc = gl.RGBA;
  const typeSrc = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]);  // bleu opaque
  gl.texImage2D(gl.TEXTURE_2D, niveau, formatInterne,
                largeur, hauteur, bordure, formatSrc, typeSrc,
                pixel);

  // Désactiver mips et définir l'emballage comme accroché au bord afin qu'il
  // fonctionne indépendamment des dimensions de la vidéo.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  return texture;
}
</pre>

<div>Voici à quoi ressemble la fonction <code>mettreAJourTexture()</code> ; c'est là où le vrai travail est fait :</div>

<pre class="brush: js">function mettreAJourTexture(gl, texture, video) {
  const niveau = 0;
  const formatInterne = gl.RGBA;
  const formatSrc = gl.RGBA;
  const typeSrc = gl.UNSIGNED_BYTE;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, niveau, formatInterne,
                formatSrc, typeSrc, video);
}
</pre>

<p>Vous avez déjà vu ce code. Il est presque identique à la fonction onload de l'image dans l'exemple précédent, sauf quand nous appellons <code>texImage2D()</code>, au lieu de passer un objet <code>Image</code>, nous passons l'élément {{HTMLElement ("video")}}. WebGL sait comment extraire l'image en cours et l'utiliser comme texture.</p>

<p>Si <code>copierVideo</code> est true, alors <code>mettreAJourTexture()</code> est appelé à chaque fois juste avant que nous appellions la fonction <code>dessinerScene()</code>.</p>

<pre class="brush: js">  var alors = 0;

  // Dessiner la scène répétitivement
  function dessiner(maintenant) {
    maintenant *= 0.001;  // convertir en seconds
    const ecartTemps = maintenant - alors;
    alors = maintenant;

    if (copierVideo) {
      <code>mettreAJour</code>Texture(gl, texture, video);
    }

    dessinerScene(gl, programInfo, buffers, texture, ecartTemps);

    requestAnimationFrame(dessiner);
  }
  requestAnimationFrame(dessiner);
</pre>

<p>C'est tout pour ce qu'il y a à faire pour cela !</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample8/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8">Voir le code complet</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample8/">Ouvrir cette démo dans une nouvelle page</a></p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/Using_HTML5_audio_and_video">Utilisation de l'audio et de la video dans Firefox</a></li>
</ul>

<p>{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>
