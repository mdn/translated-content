---
title: Chargement progressif
slug: Web/Progressive_web_apps/Loading
tags:
  - Chargement
translation_of: Web/Progressive_web_apps/Loading
original_slug: Web/Progressive_web_apps/Chargement
---
<div>{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}</div>

<p>Dans les articles précédents, nous avons abordé les APIs qui nous aident à faire de notre exemple <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> une Progressive Web App: <a href="en-US/docs/Web/Progressive_web_apps/Offline_Service_workers">Service Workers</a>, <a href="/fr/docs/Web/Progressive_web_apps/Installable_PWAs">Manifestes Web</a>, <a href="/fr/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push">Notifications et Push</a>. Dans cet article, nous irons encore plus loin et améliorerons la performance de l'application en téléchargeant progessivement ses ressources.</p>

<h2 id="Première_visualisation_signifiante">Première visualisation signifiante</h2>

<p>Il est important de fournir quelque chose qui ait du sens pour l'utilisateur dès que possible  — plus il attend que la page se charge, plus il y a de chances qu'il s'en aille plutôt que d'attendre que tout soit fini. Nous devrions être capable de lui montrer au moins une vue basique de la page qu'il veut voir avec des emplacements où du contenu supplémentaire sera chargé à un moment donné.</p>

<p>Ceci peut être réalisé grâce au chargement progressif — également appelé <a href="https://en.wikipedia.org/wiki/Lazy_loading">Lazy loading</a>. Tout ceci consiste en retardant autant que possible le plus de ressources que possible (HTML, CSS, JavaScript), et ne charger immédiatement que celles qui sont réellement nécessaire pour la toute première expérience.</p>

<h2 id="Mise_en_paquet_versus_éclatement">Mise en paquet versus éclatement</h2>

<p>De nombreux visiteurs ne naviguerons pas sur la totalité des pages d'un site web bien que l'approche habituelle consiste à mettre dans un paquet toutes les fonctionnalités que nous avons dans un seul gros fichier. Un fichier <code>bundle.js</code> peut peser plusieurs megaoctets et un unique paquet <code>style.css</code> peut tout contenir, depuis les définitions de base des structures CSS à tous les styles possibles de toutes les versions d'un site: mobile, tablette, ordinateur de bureau, pour l'impression, etc.</p>

<p>Il est plus rapide de télécharger toutes les informations sous la forme d'un unique fichier plutôt que beaucoup de petits, mais si l'utilisateur n'a pas besoin de tout au tout début, nous pourrions ne télécharger que ce qui est crucial puis gérer les autres ressources quand elles sont nécessaires.</p>

<h2 id="Render-blocking_resources">Render-blocking resources</h2>

<p>Créer des paquets est un problème car le navigateur doit charger le HTML, le CSS et le JavaScript avant qu'il ne puisse afficher le rendu du résultat à l'écran. Pendant les quelques secondes séparant l'accès l'initial au site web et la fin du téléchargement, l'utilisateur voit une page blanche ce qui est une mauvaise expérience.</p>

<p>Pour corriger ça, nous pouvons, par exemple, ajouter <code>defer</code> aux fichiers JavaScript:</p>

<pre class="brush: html">&lt;script src="app.js" defer&gt;&lt;/script&gt;
</pre>

<p>Ils seront téléchargés et exécutés <em>après</em> que le document lui-même a été analys"si bien qu'il ne bloquera pas le rendu de la structure HTML. Nous pouvons également éclater les fichiers css et leur ajouter des types de media:</p>

<pre class="brush: html">&lt;link rel="stylesheet" href="style.css"&gt;
&lt;link rel="stylesheet" href="print.css" media="print"&gt;
</pre>

<p>Ceci indiquera le navigateur de ne les télécharger que si la condition est remplie.</p>

<p>Dans notre application de démonstration js13kPWA, le CSS est suffisamment simple pour tout laisser dans un seul fichier sans règle spécifique sur la façon de les charger. Nous pourrions même aller plus loin et déplacer tout ce qui se trouve dans <code>style.css</code> dans la balise <code>&lt;style&gt;</code> dans le <code>&lt;head&gt;</code> de <code>index.html</code> — ceci améliorerait encore plus la performance mais pour la lisibilité de l'exemple, nous nous passerons aussi de cette approche.</p>

<h2 id="Images">Images</h2>

<p>En plus du JavaScript et du CSS, les sites web contiendront certainement un certain nombre d'images. Quand vous incluez des éléments {{htmlelement("img")}} dans votre HTML, chaque image référencée est alors recherchée et téléchargée lors de l'accès initial au site web. Il n'est pas inhabituel d'avoir des mégaoctets de données d'images à télécharger avant d'annoncer que le site est prêt, mais ceci, une nouvelle fois, crée une mauvaise perception de performance. Nous n'avons pas besoin de toutes les images dans la meilleure qualité possible au tout début de la consultation du site.</p>

<p>Ceci peut être optimisé. Tout d'abord, vous devriez utiliser des outils ou des services tels que <a href="https://tinypng.com/">TinyPNG</a> qui réduit la taille de fichier de vos images sans trop en altérer la qualité. Si vous avez dépassé ce stade, vous pouvez alors commencer à penser à optimiser le chargement des images en utilisant JavaScript. Nous expliquerons cela plus loin.</p>

<h3 id="Image_conteneur">Image conteneur</h3>

<p>Plutôt que d'avoir toutes les captures d'écran des jeux référencés dans les attributs <code>src</code> des éléments <code>&lt;img&gt;</code>, ce qui forcera le navigateur à les télécharger automatiquement, nous pouvons le faire de manière sélective via JavaScript. L'application js13kPWA utilise à la place une image conteneur qui est petite et légère tandis que les chemins d'accès définitifs vers les images cibles sont stockées dans les attributs <code>data-src</code>:</p>

<pre class="brush: html">&lt;img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'&gt;
</pre>

<p>Ces images seront téléchargées via JavaScript <em>après</em> que le site aura fini de construire la structure HTML. L'image conteneur est dimensionnée de la même façon que les images originales le sont, si bien qu'elle occupera le même espace et n'obligera pas le navigateur à redessiner l'agencement quand les images sont téléchargées.</p>

<h3 id="Chargement_via_JavaScript">Chargement via JavaScript</h3>

<p>Le fichier <code>app.js</code> traite les attributs <code>data-src</code> comme ceci:</p>

<pre class="brush: js">let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) =&gt; {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () =&gt; {
    image.removeAttribute('data-src');
  };
};</pre>

<p>La variable <code>imagesToLoad</code> contient des références à toutes les images, tandis que la fonction <code>loadImages</code> déplace le chemin d'accès de <code>data-src</code> à <code>src</code>. Quand toutes les images sont effectivement téléchargées, nous supprimons leur attribut <code>data-src</code> attendu qu'ls ne sont désormais plus nécessaires. Ensuite, nous bouclons sur chacune des images et nous la chargeons:</p>

<pre class="brush: js">imagesToLoad.forEach((img) =&gt; {
  loadImages(img);
});</pre>

<h3 id="Flou_en_CSS">Flou en CSS</h3>

<p>Pour rendre le processus visuellement plus attractif, le conteneur est flouté via CSS.</p>

<p><img alt="Screenshot of placeholder images in the js13kPWA app." src="js13kpwa-placeholders.png"></p>

<p>Nous générons les images avec un flou au début si bien qu'une transition vers la version précise peut être réalkisée:</p>

<pre class="brush: css">article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}</pre>

<p>Ceci supprimera l'effet de flou en une demie seconde, ce qui paraît assez bien pour l'effet de "chargement".</p>

<h2 id="Chargement_à_la_demande">Chargement à la demande</h2>

<p>Le mécanisme de chargement des images présenté dans la section précédente fonctionne correctement — il charge les imges après que la structure HTML a été générée et applique un joli effet de transition au processus. Le problème est qu'il télécharge toujours<em> toutes</em> les images en une fois, même si l'utilisateur ne verra que les deux ou trois premières au chargement de la page.</p>

<p>Ce problème peut être résolu avec la nouvelle <a href="/fr/docs/Web/API/Intersection_Observer_API">API Intersection Observer</a> — en l'utilisant, nous pouvons nous assurer que les images ne seront téléchargées que lorsqu'elles apparaissent dans le viewport.</p>

<h3 id="Intersection_Observer">Intersection Observer</h3>

<p>Ceci est une amélioration progressive à l'exemple fonctionnel précédent — <a href="/fr/docs/Web/API/Intersection_Observer_API">Intersection Observer</a> téléchargera les images cibles seulement quand l'utilisateur fait défiler la page vers le bas, provoquant leur affichage dans le viewport.</p>

<p>Voici à quoi le code correspondant ressemble:</p>

<pre class="brush: js">if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) =&gt; {
    items.forEach((item) =&gt; {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) =&gt; {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) =&gt; {
    loadImages(img);
  });
}</pre>

<p>Si l'objet {{domxref("IntersectionObserver")}} est pris en charge, l'application en crée une nouvelle instance. La fonction passée en paramètre gère le cas où un ou plusieurs objets ont une intersection avec l'observer (i.e. apparaît à l'intérieur du viewport). Nous pouvons itérer sur chaque cas et réagir en conséquence — quand l'image est visible, nous chargeons l'image correcte et nous arrêtons de l'observer vu que nous n'avons désormais plus le faire.</p>

<p>Répétons notre avertissement précédent concernant l'amélioration progressive — le code est écrit de telle sorte que l'application fonctionnera que l'Intersection Observer soit pris en charge ou pas. S'il ne l'est pas, nous chargeons simplement les images en utilisant une approche plus basique présentée précédemment.</p>

<h2 id="Améliorations">Améliorations</h2>

<p>Rappelez-vous qu'il y a de nombreuses façons d'optimiser les temps de chargement et cet exemple explore seulement l'une d'elles. Vous pourriez essayer de blinder davantage votre application en lui permettant de fonctionner sans JavaScript — soit en utilisant {{htmlelement("noscript")}} pour afficher l'image avec le <code>src</code> final déjà renseigné ou en enrobant les balises <code>&lt;img&gt;</code> avec des éléments {{htmlelement("a")}} pointant vers les images cibles de telle sorte que l'utilisateur puisse cliquer pour y accéder quand il le souhaite.</p>

<p>Nous ne le ferons pas car l'application elle-même dépend de JavaScript — sans lui, la liste des jeux ne sera même pas chargée et le code du Service Worker ne s'exécutera pas.</p>

<p>Nous pourrions réécrire le processus de chargement  pour charger non seulement les images mais aussi les éléments complets composés des descriptions complètes et des liens. Cela fonctionnerait comme un défilement infini — charger les éléments de la liste seulement quand l'utilisateur fait défiler la page vers le bas. De cette façon, la structure HTML initiale sera minimale, le temps de chargement encore plus court et nous aurions des bénéfices de performance encore meilleurs.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>Moins de fichiers à charger initialement, de plus petits fichiers répartis en modules, l'utilisation de conteneurs de placement et le chargement de davantage de contenu à la demande — ceci aidera à obtenir des temps de chargement initiaux plus rapides, ce qui profite au créateur de l'application et offre une expérience plus fluide à l'utilisateur.</p>

<p>Rappelez-vous de ce que nous avons dit concernant l'approche d'amélioration progressive — offrir un produit utilisable quel que soit l'appareil ou la plateforme, mais s'assurer d'enrichir l'expérience pour ceux qui utilisent des navigateurs modernes.</p>

<h2 id="Dernières_réflexions">Dernières réflexions</h2>

<p>C'est fini pour ces séries de tutoriels — nous avons examiné le <a href="https://github.com/mdn/pwa-examples/tree/master/js13kpwa">code source code de l'exemple d'application js13kPWA</a> et nous avons appris à utiliser les fonctionnalités progressives des applications web en commençant par une <a href="/fr/docs/Web/Progressive_web_apps/Introduction">Introduction</a>, <a href="/fr/docs/Web/Progressive_web_apps/App_structure">la structure des PWA, </a><a href="/fr/docs/Web/Progressive_web_apps/Offline_Service_workers">la disponibilité en mode déconnectégrâce aux Service Workers</a>, <a href="/fr/docs/Web/Progressive_web_apps/Installable_PWAs">les PWAs installable</a> et finalement les notifications. Nous avons également expliqué le mode push avec l'aide du <a href="https://serviceworke.rs/">Service Worker Cookbook</a>. Et dans cet article, nous avons abordé le concept de chargement progressif incluant un exemple intéressant utilisant l'<a href="/fr/docs/Web/API/Intersection_Observer_API">API ntersection Observer</a>.</p>

<p>N'hésitez pas à faire des essais avec le code, à améliorer votre application existante avec des des fonctionnalités PWA ou à bâtir quelque chose d'entièrement nouveau de vous même. Les PWAs amènent un énorme avantage sur les applications web classiques.</p>

<p>{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}</p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}</p>
