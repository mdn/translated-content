---
title: Autoriser les images et canevas provenant d'autres origines
slug: Web/HTML/CORS_enabled_image
tags:
  - Advanced
  - CORS
  - Canvas
  - HTML
  - Image
  - Reference
  - Security
  - Storage
  - data
translation_of: Web/HTML/CORS_enabled_image
original_slug: Web/HTML/Images_avec_le_contrôle_d_accès_HTTP
---
<p>HTML permet d'utiliser l'attribut <a href="/fr/docs/Web/HTML/Element/Img#attr-crossorigin"><code>crossorigin</code></a> sur les images. Utilisé avec un en-tête <a href="/fr/docs/Glossary/CORS">CORS</a> adéquat, les images définies par <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a> provenant d'origines étrangères pourront être utilisées au sein d'un élément <a href="/fr/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a> comme si elles avaient été chargées depuis l'origine courante.</p>

<p>Pour plus de détails sur l'attribut <code>crossorigin</code>, voir <a href="/fr/docs/Web/HTML/Attributes/crossorigin">les attributs de paramétrage du CORS</a>.</p>

<h2 id="Security_and_tainted_canvases">Canevas corrompu et sécurité</h2>

<p>Les pixels composant un canevas pouvant venir de différentes sources, notamment d'images ou de vidéos récupérées depuis des hôtes tiers, il est nécessaire de se prémunir contre certains problèmes de sécurité.</p>

<p>Dès que des données sont chargées dans le canevas depuis une autre origine sans avoir été « approuvées » par le CORS, le canevas devient <strong>corrompu</strong> (<i>tainted</i>). Dès qu'un canevas est corrompu, il n'est plus considéré comme sécurisé et toute tentative de récupérer des données depuis les données de l'image résultera en une exception.</p>

<p>Si la source du contenu tiers est un élément HTML <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a> ou SVG <a href="/fr/docs/Web/SVG/Element/svg"><code>&lt;svg&gt;</code></a>, il n'est plus permis de récupérer le contenu du canevas.</p>

<p>Si la source du contenu tiers est une image obtenue à partir d'un <a href="/fr/docs/Web/API/HTMLCanvasElement"><code>HTMLCanvasElement</code></a> ou d'une <a href="/fr/docs/Web/API/ImageBitMap"><code>ImageBitMap</code></a> et que la source de l'image ne respecte pas les règles quant à l'unicité de l'origine, il ne sera pas possible de lire le contenu du canevas.</p>

<p>Appeler l'une des méthodes suivantes sur un canevas corrompu déclenchera une erreur :</p>

<ul>
 <li><a href="/fr/docs/Web/API/CanvasRenderingContext2D/getImageData"><code>getImageData()</code></a> sur le contexte du canevas</li>
 <li><a href="/fr/docs/Web/API/HTMLCanvasElement/toBlob"><code>toBlob()</code></a> sur l'élément <a href="/fr/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a></li>
 <li><a href="/fr/docs/Web/API/HTMLCanvasElement/toDataURL"><code>toDataURL()</code></a> sur le canevas</li>
</ul>

<p>L'exception levée par de tels appels sera une exception <code>SecurityError</code>. Cette mesure protège les utilisateurs contre l'exposition de données privées via des images provenant de sites tiers sans permission.</p>

<h2 id="Storing_an_image_from_a_foreign_origin">Stocker une image provenant d'une origine tierce</h2>

<p>Dans cet exemple, on souhaite autoriser la récupération et l'enregistrement d'images provenant d'une autre origine. Pour parvenir à ce résultat, il faudra configurer le serveur et également écrire du code pour le site web.</p>

<h3 id="Web_server_configuration">Configuration serveur</h3>

<p>Pour commencer, configurons le serveur stockant les images avec un en-tête <a href="/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"><code>Access-Control-Allow-Origin</code></a> qui permet un accès multi-origines aux fichiers images.</p>

<p>Dans la suite de cet exemple, on prendra le cas d'un site est servi via <a href="https://httpd.apache.org/">Apache</a>. On pourra utiliser le fragment <a href="https://github.com/h5bp/server-configs-apache/blob/master/h5bp/cross-origin/images.conf">de configuration serveur Apache pour les images CORS</a> :</p>

<pre class="brush: xml">&lt;IfModule mod_setenvif.c&gt;
  &lt;IfModule mod_headers.c&gt;
    &lt;FilesMatch "\.(bmp|cur|gif|ico|jpe?g|png|svgz?|webp)$"&gt;
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    &lt;/FilesMatch&gt;
  &lt;/IfModule&gt;
&lt;/IfModule&gt;</pre>

<p>Pour résumer, cela permet de configurer le serveur afin de pouvoir accéder aux fichiers graphiques (ceux avec les extensions ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz", and ".webp") depuis d'autres origines, d'où qu'elles soient sur Internet.</p>

<h3 id="Implementing_the_save_feature">Implémenter l'enregistrement</h3>

<p>Maintenant que le serveur est configuré pour permettre la récupération d'image depuis plusieurs origines, on peut écrire le code qui permet à l'utilisateur d'enregistrer les images <a href="/fr/docs/Web/API/Web_Storage_API">en stockage local</a> comme si elles étaient servies depuis le même domaine que le code.</p>

<p>Pour cela, on utilise l'attribut <a href="/fr/docs/Web/HTML/Global_attributes#attr-crossorigin"><code>crossorigin</code></a> en définissant <a href="/fr/docs/Web/API/HTMLImageElement/crossOrigin"><code>crossOrigin</code></a> sur l'élément <a href="/fr/docs/Web/API/HTMLImageElement"><code>HTMLImageElement</code></a> sur lequel l'image sera chargée. Ainsi, on indique au navigateur de demander un accès multi-origine lors du téléchargement de l'image.</p>

<h4 id="Starting_the_download">Démarrer le téléchargement</h4>

<p>Voici le code qui démarre le téléchargement (déclenché par exemple lorsque l'utilisateur clique sur un bouton « Télécharger ») :</p>

<pre class="brush: js">function startDownload() {
  let imageURL = "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image;
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}</pre>

<p>Ici, l'URL de l'image à télécharger est codée en dur mais cette valeur pourrait très bien provenir d'un argument passé à la fonction. Pour démarrer le téléchargement, on crée un nouvel objet <a href="/fr/docs/Web/API/HTMLImageElement"><code>HTMLImageElement</code></a> grâce au constructeur <a href="/fr/docs/Web/API/HTMLImageElement/Image"><code>Image()</code></a>. L'image est ensuite configurée afin de permettre un téléchargement multi-origine grâce à l'attribut <code>crossOrigin</code> paramétré avec <code>"Anonymous"</code> (qui permet le téléchargement, non-authentifié, d'une image multi-origine). Un gestionnaire d'évènement est ajouté afin de réagir à l'évènement <a href="/fr/docs/Web/API/Window/load_event"><code>load</code></a> lorsque l'image a été reçue.</p>

<p>Enfin, l'attribut <a href="/fr/docs/Web/API/HTMLImageElement/src"><code>src</code></a> de l'image est défini avec l'URL de l'image à télécharger et le téléchargement démarre.</p>

<h4 id="Receiving_and_saving_the_image">Recevoir et enregistrer l'image</h4>

<p>Voici le fragment de code exécuté lorsque l'image a été téléchargée :</p>

<pre class="brush: js">function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  }
  catch(err) {
    console.log("Error: " + err);
  }
}</pre>

<p><code>imageReceived()</code> est invoquée lorsque l'évènement <code>"load"</code> est déclenché sur l'élément <code>HTMLImageElement</code> qui reçoit l'image téléchargée. Cet évènement se produit lorsque l'ensemble des données téléchargées est disponible. Cette fonction commence par créer un nouvel élément <a href="/fr/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a> qui sera utilisé afin de convertir l'image en une URL de donnée. On récupère également un accès au contexte du canevas pour dessiner en 2D (<a href="/fr/docs/Web/API/CanvasRenderingContext2D"><code>CanvasRenderingContext2D</code></a>) dans la variable <code>context</code>.</p>

<p>La taille du canevas est ajustée afin que ses dimensions correspondent à celles de l'image. L'image est ensuite dessinée dans le canevas grâce à <a href="/fr/docs/Web/API/CanvasRenderingContext2D/drawImage"><code>drawImage()</code></a>. Le canevas est alors inséré dans le document et l'image y devient visible.</p>

<p>Enfin, on enregistre l'image dans le stockage local. Pour cela, on utilise les méthodes de l'API <em>Web Storage</em> en passant par la variable globale <a href="/fr/docs/Web/API/Window/localStorage"><code>localStorage</code></a>. La méthode <a href="/fr/docs/Web/API/HTMLCanvasElement/toDataURL"><code>toDataURL()</code></a> est utilisée afin de convertir l'image en une URL de données représentant une image PNG qui est enregistrée dans l'espace local grâce à la méthode <a href="/fr/docs/Web/API/Storage/setItem"><code>setItem()</code></a>.</p>

<p>Vous pouvez <a href="https://cors-image-example.glitch.me/">essayer</a> ou <a href="https://glitch.com/edit/#!/remix/cors-image-example">adapter</a> cet exemple sur Glitch.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
  <li><a href="http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html">Utilisation d'images inter-domaines dans WebGL et Chrome 13</a></li>
  <li><a class="external" href="https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin">Spécification HTML : l'attribut <code>crossorigin</code></a></li>
  <li><a href="/fr/docs/Web/API/Web_Storage_API">L'API <em>Web Storage</em></a></li>
</ul>

<div>{{QuickLinksWithSubpages("/fr/docs/Web/HTML/")}}</div>
