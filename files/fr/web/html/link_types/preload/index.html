---
title: 'Types de liens : preload'
slug: Web/HTML/Link_types/preload
browser-compat: html.elements.link.rel.preload
translation_of: 'Web/HTML/Link_types/preload'
---
<div>{{HTMLSidebar}}</div>

<p>La valeur <code>preload</code> de l'attribut {{htmlattrxref("rel", "link")}} de l'élément {{htmlelement("link")}} permet de déclarer des requêtes à récupérer dans la partie {{htmlelement("head")}} du HTML de la page, en spécifiant les ressources dont votre page va avoir besoin dans peu de temps, et qu'il serait souhaitable de charger le plus tôt possible, avant que le rendu de la page par le navigateur ne commence. Cela permet de s'assurer que les ressources sont disponibles plus tôt et qu'elles auront moins de chances de bloquer le rendu de la page, ce qui améliore les performances.</p>


<h2 id="the_basics">Les bases</h2>

<p>Pour charger un fichier CSS permettant de styler une page, on utilise le plus souvent l'élément <code>&lt;link&gt;</code> de la manière suivante&nbsp;:</p>

<pre class="brush: html">&lt;link rel="stylesheet" href="styles/main.css"&gt;</pre>

<p>Ici, nous allons utiliser la valeur <code>preload</code> sur l'attribut <code>rel</code>, ce qui transformera l'élément <code>&lt;link&gt;</code> en outil de préchargement utilisable pour n'importe quelle ressource. Nous devrons aussi indiquer&nbsp;:</p>

<ul>
  <li>le chemin de la ressource dans l'attribut {{htmlattrxref("href", "link")}}&nbsp;;</li>
  <li>le type de ressource dans l'attribut {{htmlattrxref("as", "link")}}&nbsp;;</li>
</ul>

<p>Voici un exemple simple (voir nos <a href="https://github.com/mdn/html-examples/tree/master/link-rel-preload/js-and-css">fichiers JS et CSS d'exemple</a> et le <a href="https://mdn.github.io/html-examples/link-rel-preload/js-and-css/">résultat obtenu</a>)&nbsp;:</p>

<pre class="brush: html">&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;title&gt;Exemple de préchargement JS et CSS&lt;/title&gt;

  &lt;link rel="preload" href="style.css" as="style"&gt;
  &lt;link rel="preload" href="main.js" as="script"&gt;

  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;h1&gt;Balles rebondissantes&lt;/h1&gt;
  &lt;canvas&gt;&lt;/canvas&gt;

  &lt;script src="main.js" defer&gt;&lt;/script&gt;
&lt;/body&gt;</pre>

<p>Dans l'exemple ci-dessus, nous préchargeons nos fichiers CSS et JavaScript afin qu'ils puissent être disponibles dès qu'ils sont nécessaires pour le rendu de la page. Cet exemple est trivial, car le navigateur va probablement découvrir en même temps les balises de préchargement, le <code>&lt;link rel="stylesheet"&gt;</code> et le <code>&lt;script&gt;</code>, mais le bénéfice sera bien plus visible si les ressources sont plus nombreuses, plus lourdes et chargées à différents endroits. Par exemple&nbsp;:</p>

<ul>
  <li>les ressources qui sont chargées depuis un fichier CSS, comme certaines polices et images&nbsp;;</li>
  <li>les ressources inclues par des fichiers JavaScript, comme des fichiers JSON, d'autres scripts importés ou des services web&nbsp;;</li>
  <li>les fichiers image et vidéos plus importants.</li>
</ul>

<p><code>preload</code> dispose aussi d'autres avantages. L'utilisation de l'attribut <code>as</code> pour spécifier le type de contenu à précharger permet au navigateur de&nbsp;:</p>

<ul>
  <li>prioriser les ressources se chargeant avec davantage de précision&nbsp;;</li>
  <li>les stocker dans le cache pour de futures requêtes, ce qui permet de réutiliser les ressources si c'est pertinent&nbsp;;</li>
  <li>appliquer la bonne <a href="/fr/docs/Web/HTTP/CSP">stratégie de sécurité du contenu</a> aux ressources&nbsp;;</li>
  <li>mettre en place les bons en-têtes de requêtes {{HTTPHeader("Accept")}} pour les ressources.</li>
</ul>

<h3 id="what_types_of_content_can_be_preloaded">Quels types de contenu peuvent être préchargés&nbsp;?</h3>

<p>De nombreux différents types de contenu peuvent être préchargés. Les valeurs possibles de l'attribut <code>as</code> sont les suivantes&nbsp;:</p>

<ul>
  <li><code>audio</code>&nbsp;: fichier audio, typiquement intégré avec l'élément {{htmlelement("audio")}}&nbsp;;</li>
  <li><code>document</code>&nbsp;: un document HTML destiné à être embarqué dans une {{htmlelement("frame")}} ou dans une {{htmlelement("iframe")}}&nbsp;;</li>
  <li><code>embed</code>&nbsp;: une ressource à embarquer dans un élément {{htmlelement("embed")}}&nbsp;;</li>
  <li><code>fetch</code>&nbsp;: une ressource accessible via une requête <code>fetch</code> ou <code>XHR</code>, comme un <code>ArrayBuffer</code> ou un fichier JSON&nbsp;;</li>
  <li><code>font</code>&nbsp;: un fichier de police&nbsp;;</li>
  <li><code>image</code>&nbsp;: un fichier image&nbsp;;</li>
  <li><code>object</code>&nbsp;: une ressource à embarquer à l'intérieur d'un élément {{htmlelement("object")}}&nbsp;;</li>
  <li><code>script</code>&nbsp;: un fichier JavaScript&nbsp;;</li>
  <li><code>style</code>&nbsp;: une feuille de styles CSS&nbsp;;</li>
  <li><code>track</code>&nbsp;: un fichier WebVTT&nbsp;;</li>
  <li><code>worker</code>&nbsp;: un <i lang="en">web worker</i> JavaScript ou un <i lang="en">worker</i> partagé&nbsp;;</li>
  <li><code>video</code>&nbsp;: un fichier vidéo, typiquement intégré avec l'élément {{htmlelement("video")}}.</li>
</ul>

<div class="note">
  <p><strong>Note :</strong> le préchargement de l'élément <code>video</code> est inclut dans la spécification <i lang="en">Preload</i> mais n'est pas encore implémenté par les navigateurs.</p>
</div>

<div class="note">
<p><strong>Note :</strong> pour davantage de détails sur ces valeurs et sur la façon dont la spécification <i lang="en">Preload</i> prévoit de les traiter, consultez <a href="https://w3c.github.io/preload/#link-element-extensions"><i lang="en">link element extensions</i> (en anglais)</a>. Notez également que la liste complète des valeurs acceptées par l'attribut <code>as</code> est déterminé par la spécification <i lang="en">Fetch</i> — voir la spécification <a href="https://fetch.spec.whatwg.org/#concept-request-destination"><i lang="en">request destinations</i> (en anglais)</a>.</p>
</div>

<h2 id="including_a_mime_type">Inclure un type MIME</h2>

<p>Les éléments <code>&lt;link&gt;</code> peuvent accepter un attribut {{htmlattrxref("type", "link")}}, contenant le type MIME de la ressource vers laquelle pointe le document. Ceci est tout spécialement utile lorsque l'on effectue un préchargement des ressources – le navigateur utilisera alors l'attribut <code>type</code> pour vérifier s'il prend en charge la ressource et la télécharger si c'est le cas, ou l'ignorer dans le cas contraire.</p>

<p>Vous pouvez voir un exemple de ce fonctionnement dans notre vidéo d'exemple (voir le <a href="https://github.com/mdn/html-examples/tree/master/link-rel-preload/video">code source complet</a> ou la <a href="https://mdn.github.io/html-examples/link-rel-preload/video/">version exécutable en direct</a>), utilisant le bout de code proposé ci-dessous. À noter que si ce code ne lancera pas de préchargement effectif sur aucun navigateur – le préchargement des vidéos n'est encore implémenté sur aucun navigateur&nbsp;– cela permet d'illustrer le fonctionnement général du préchargement.</p>

<pre class="brush: html">&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;title&gt;Exemple de préchargement de vidéo&lt;/title&gt;

  &lt;link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;video controls&gt;
    &lt;source src="sintel-short.mp4" type="video/mp4"&gt;
    &lt;source src="sintel-short.webm" type="video/webm"&gt;
    &lt;p&gt;Votre navigateur ne prend pas en charge les vidéos HTML5. Voici un &lt;a href="sintel-short.mp4"&gt;lien vers le fichier vidéo en remplacement&lt;/a&gt;.&lt;/p&gt;
  &lt;/video&gt;
&lt;/body&gt;</pre>

<p>Le code de l'exemple ci-dessus permet le préchargement de la <code>video/mp4</code> uniquement sur les navigateurs qui prennent en charge cette fonctionnalité et pour les personnes ayant un navigateur prenant en charge le format <code>video/mp4</code> (car ce format est le premier élément {{htmlelement("source")}} spécifié). Cela devrait rendre le lecteur vidéo plus ergonomique et plus <a href="/fr/docs/Learn/CSS/CSS_layout/Responsive_Design"><i lang="en">responsive</i></a> pour ces personnes.</p>

<p>Concernant les personnes disposant d'un navigateur prenant en charge tout aussi bien les formats <code>video/mp4</code> et <code>video/webm</code> support, il est important de noter que si un élément <code>&lt;link rel="preload" href="sintel-short.webm" as="video" type="video/webm"&gt;</code> est aussi spécifié, alors <strong>les deux formats <code>video/mp4</code> et <code>video/webm</code> seront préchargés</strong> — même si un seul d'entre eux est utilisé.</p>

<p>En conclusion, il est déconseillé de précharger de multiple formats pour la même ressource. La bonne pratique est plutôt de précharger uniquement le type de média qu'utilise la majorité des personnes qui visitent votre site. C'est pourquoi le code fourni en exemple ne précharge pas la vidéo au format <code>video/webm</code>.</p>

<p>Cependant, l'absence de préchargement n'empêche pas la vidéo <code>video/webm</code> d'être utilisée par les personnes qui en ont besoin : pour les navigateurs qui ne prennent pas en charge le format <code>video/mp4</code> mais qui prennent en charge le format <code>video/webm</code> alors le code de l'exemple permettra toujours d'utiliser la vidéo au format <code>video/webm</code> — cela évitera simplement de précharger inutilement une ressource pour la plupart des navigateurs.</p>

<h2 id="cors-enabled_fetches">Récupération de l'activation du <i lang="en">CORS</i></h2>

<p>Lors du préchargement des ressources analysées par des fonctions activant le&nbsp;<a href="/fr/docs/Web/HTTP/CORS">CORS</a> (partage des ressources entre origines multiples), comme par exemple <code><a href="/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch()</a></code>, <code><a href="/fr/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code> ou <a href="/fr/docs/Web/CSS/@font-face">fonts</a>), une attention particulière doit être portée à la mise en place de l'attribut {{htmlattrxref("crossorigin","link")}} sur l'élément <code><a href="/fr/docs/Web/HTML/Element/link">&lt;link&gt;</a></code>. L'attribut à besoin d'être mis en place pour faire correspondre le <i lang="en">CORS</i> de la ressource et le mode d'identification, même s'il ne s'agit pas d'une ressource ayant une origine différente de celle de la page.</p>

<p>Comme mentionné ci-dessus, un cas de figure intéressant est celui qui s'applique aux fichiers de polices. Pour plusieurs raisons, celles-ci doivent être analysées en utilisant le mode anonyme du <i lang="en">CORS</i> (voir cet article en anglais&nbsp;: <a href="https://drafts.csswg.org/css-fonts/#font-fetching-requirements"><i lang="en">Font fetching requirements</i></a>).</p>

<p>Voici un cas d'utilisation. Vous trouverez <a href="https://github.com/mdn/html-examples/tree/master/link-rel-preload/fonts">le code source complet sur GitHub</a> ainsi qu'une <a href="https://mdn.github.io/html-examples/link-rel-preload/fonts/">démonstration</a>&nbsp;:</p>

<pre class="brush: html">&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;title&gt;Exemple de préchargement de police Web&lt;/title&gt;

  &lt;link rel="preload" href="fonts/cicle_fina-webfont.woff2" as="font" type="font/woff2" crossorigin&gt;
  &lt;link rel="preload" href="fonts/zantroke-webfont.woff2" as="font" type="font/woff2" crossorigin&gt;

  &lt;link href="style.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
  …
&lt;/body&gt;</pre>

<p>En plus de fournir un type MIME avec l'attribut <code>type</code>, ce code utilise un attribut <code>crossorigin</code> afin de s'assurer que le préchargement du <i lang="en">CORS</i> correspond à la requête de chargement de la police.</p>

<h2 id="including_media">Inclure des médias</h2>

<p>Une autre belle fonctionnalité de l'élément <code>&lt;link&gt;</code> concerne leur capacité à accepter les attributs {{htmlattrxref("media", "link")}}. Il peut accepter les requêtes de <a href="/fr/docs/Web/CSS/@media#media_types">types de médias</a> ou encore des <a href="/fr/docs/Web/CSS/Media_Queries/Using_media_queries"><i lang="en">media queries</i></a> complètes, ce qui vous permet de faire du préchargement <i lang="en">responsive</i>&nbsp;!</p>

<p>Voici un exemple. Vous pouvez consulter son <a href="https://github.com/mdn/html-examples/tree/master/link-rel-preload/media">code source sur GitHub</a> ou étudier un <a href="https://mdn.github.io/html-examples/link-rel-preload/media/">exemple de démonstration</a>&nbsp;:</p>

<pre class="brush: html">&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;title&gt;Exemple de préchargement responsive&lt;/title&gt;

  &lt;link rel="preload" href="bg-image-narrow.png" as="image" media="(max-width: 600px)"&gt;
  &lt;link rel="preload" href="bg-image-wide.png" as="image" media="(min-width: 601px)"&gt;

  &lt;link rel="stylesheet" href="main.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Mon site&lt;/h1&gt;
  &lt;/header&gt;

  &lt;script&gt;
    var mediaQueryList = window.matchMedia("(max-width: 600px)");
    var header = document.querySelector('header');

    if (mediaQueryList.matches) {
      header.style.backgroundImage = 'url(bg-image-narrow.png)';
    } else {
      header.style.backgroundImage = 'url(bg-image-wide.png)';
    }
  &lt;/script&gt;
&lt;/body&gt;</pre>

<p>Dans cet exemple nous incluons les attributs <code>media</code> dans notre élément <code>&lt;link&gt;</code> pour qu'une image plus fine soit préchargée si la personne visitant le site dispose d'un écran plus petit, et pour qu'une image plus large soit chargée sur les écrans plus larges. Pour cela, nous utilisons {{domxref("Window.matchMedia")}} et {{domxref("MediaQueryList")}} (consultez la page <a href="/fr/docs/Web/CSS/Media_Queries/Testing_media_queries">Tester les requêtes média en JavaScript</a> pour en savoir plus).</p>

<p>Cela augmente les chances que la police sera disponible lors du rendu de la page, et diminue les risques de <i lang="en">FOUT</i> (pour <i lang="en">flash of unstyled text</i>, soit «&nbsp;flash de texte sans mis en forme&nbsp;» en français).</p>

<p>Il sera dommage de limiter le préchargement aux images, voyez plus loin&nbsp;! On pourrait imaginer de précharger l'affichage d'un diagramme SVG si le visiteur se trouve sur un petit écran avec une bande passante ou une disponibilité CPU plus limitée, ou encore de précharger des morceaux de JavaScript complexes utilisés pour faire fonctionner une modélisation 3D interactive uniquement si les ressources du visiteur sont suffisantes.</p>

<h2 id="scripting_and_preloads">Scripts et préchargement</h2>

<p>Une autre fonctionnalité notable est la possibilité d'exécuter le préchargement à l'aide d'un script. Par exemple, voici la création d'une instance {{domxref("HTMLLinkElement")}} qui est ensuite attachée au <i lang="en">DOM</i>&nbsp;:</p>

<pre class="brush: js">var preloadLink = document.createElement(&quot;link&quot;);
preloadLink.href = &quot;myscript.js&quot;;
preloadLink.rel = &quot;preload&quot;;
preloadLink.as = &quot;script&quot;;
document.head.appendChild(preloadLink);
</pre>

<p>Cela signifie que le navigateur va précharger le fichier <code>myscript.js</code>, mais ne va pas réellement l'utiliser directement. Pour l'utiliser, vous pouvez faire ceci&nbsp;:</p>

<pre class="brush: js">var preloadedScript = document.createElement(&quot;script&quot;);
preloadedScript.src = &quot;myscript.js&quot;;
document.body.appendChild(preloadedScript);
</pre>

<p>C'est utile lorsque vous voulez précharger un script mais repousser son exécution au moment exact où vous en avez réellement besoin.</p>

<h2 id="other_resource_preloading_mechanisms">Autres ressources concernant les mécanismes de préchargement</h2>

<p>D'autres fonctionnalités de préchargement sont disponibles, mais sachez qu'aucune d'entre elle n'est aussi adaptée à l'objectif recherché que <code>&lt;link rel="preload"&gt;</code>. En voici la liste&nbsp;:</p>

<ul>
  <li><code>&lt;link rel="prefetch"&gt;</code> est pris en charge depuis quelque temps par les navigateurs, mais est destinée à la récupération préalable des ressources qui vont être utilisées lors de la <strong><em>prochaine</em></strong> page visitée/chargée (par exemple lorsque vous vous rendrez sur une autre page du site). C'est une bonne chose, mais ce n'est pas utile pour la page en cours de chargement&nbsp;! Par ailleurs, les navigateurs donnent une priorité plus faible à <code>prefetch</code> qu'à <code>preload</code> — la page courante est prioritaire par rapport à la page suivante. Consultez la <a href="/fr/docs/Web/HTTP/Link_prefetching_FAQ">FAQ sur le préchargement des liens</a> pour plus de détails&nbsp;;</li>
  <li><code>&lt;link rel="prerender"&gt;</code> effectue le rendu une page spécifiée en arrière-plan, ce qui permet d'accélerer son chargement si la personne visitant le site se rend sur cette page par la suite. Du fait du gaspillage potentiel de bande passante pour les visiteurs (on charge des éléments sans savoir si on en aura besoin), Chrome traite l'instruction <code>prerender</code> comme une instruction <a href="https://developers.google.com/web/updates/2018/07/nostate-prefetch">NoState prefetch</a>&nbsp;;</li>
  <li><code>&lt;link rel="subresource"&gt;</code> {{non-standard_inline}} était pris en charge par Chrome il y a quelques temps et était destiné à gérer la même chose que <code>preload</code>, mais il y avait un problème&nbsp;: il n'y avait aucun moyen de définir une priorité sur les éléments à charger (<code>as</code> n'existait pas encore), donc toutes les ressources étaient chargées avec la même priorité (la plus faible)&nbsp;;</li>
  <li>Il y a un grand nombre de scripts de chargements de ressources disponibles un peu partout, mais aucun ne peut avoir la puissance d'une file de priorisation gérée directement par le navigateur. De plus, ces scripts sont sujets à des problèmes de performances similaires.</li>
</ul>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>
    <a href="https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/"><i lang="en">Preload: What Is It Good For?</i></a> par Yoav Weiss (en anglais)
  </li>
</ul>
