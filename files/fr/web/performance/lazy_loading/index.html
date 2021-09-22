---
title: Le chargement différé
slug: Web/Performance/Lazy_loading
translation_of: Web/Performance/Lazy_loading
---
<p>Le <strong>chargement différé</strong> (<i lang="en">lazy loading</i> en anglais) est une stratégie d'identification des ressources non bloquantes (non critiques) afin de ne les charger qu'au moment où elles sont utiles. C'est une façon de raccourcir le <a href="/fr/docs/Web/Performance/Critical_rendering_path">chemin critique de rendu</a>, ce qui se traduit par une réduction du temps de chargement de la page.</p>

<p>Le chargement différé peut se dérouler à plusieurs moments du chargement d'une application, mais il se déroule typiquement lorsque l'internaute interagit avec la page, notamment lors du défilement de la page ou de la navigation.</p>

<h2 id="general_overview">Vue d'ensemble</h2>

<p>Au fur et à mesure de l'évolution du web, nous avons vu une grande augmentation du nombre et de la taille des ressources servie aux internautes. Entre 2011 et 2019, le poids médian des ressources est passé de <strong>~10 Ko</strong> à <strong>~40 Ko</strong> sur ordinateur et de <strong>~5 Ko</strong> à <strong>~35 Ko</strong> sur mobile. Tandis que la taille médiane des images est passée de <strong>~25 Ko</strong> à <strong>~90 Ko</strong> sur ordinateur et de <strong>~10 Ko</strong> à <strong>~85 Ko</strong> sur mobile.</p>

<p>L'une des méthodes utilisables pour s'occuper de ce problème consiste à réduire la longueur du <a href="/fr/docs/Web/Performance/Critical_rendering_path">chemin critique de rendu</a> en chargeant les ressources de façon différée lors du premier rendu de la page. Exemple concret : lorsque vous arrivez sur la page d'accueil d'une boutique en ligne disposant d'un lien vers la section « panier », il est plus optimal de ne charger ses ressources que lorsque vous naviguerez vers cette section.</p>

<h2 id="strategies">Stratégies</h2>

<p>Le chargement différé peut être appliqué sur de multiples ressources et avec de multiples stratégies.</p>

<h3 id="general">En général</h3>

<h4 id="code_splitting">Division du code</h4>

<p>Le code JavaScript, CSS et HTML peuvent être divisés en petits morceaux. Cela permet de n'envoyer que la portion de code nécessaire à l'affichage sur l'écran de l'internaute, et donc d'améliorer les temps de chargement. Le reste sera chargé sur demande. Deux systèmes sont possibles&nbsp;:</p>

<ul>
  <li>division par points d'entrée&nbsp;: séparation du code en différents points d'entrée au sein de l'application&nbsp;;</li>
  <li>division dynamique&nbsp;: séparation du code où des déclarations <a href="/fr/docs/Web/JavaScript/Reference/Statements/import"><code>import()</code></a> dynamiques sont utilisées.</li>
</ul>

<h3 id="javascript">JavaScript</h3>

<h4 id="script_de_type_module">Script de type module</h4>

<p>Toute balise <code>&lt;script&gt;</code> utilisant <code>type="module"</code> sera traitée comme un <a href="/fr/docs/Web/JavaScript/Guide/Modules">module JavaScript</a> et son chargement sera différé par défaut.</p>

<h3 id="css">CSS</h3>

<p>Par défaut, les fichiers CSS sont traités comme des ressources <a href="/fr/docs/Web/Performance/Critical_rendering_path">bloquant le rendu</a>, donc le navigateur n'affichera aucun contenu traité tant que le <a href="/fr/docs/Web/API/CSS_Object_Model">CSSOM (pour <i lang="en">CSS Object Model</i>)</a> est construit. Les fichiers CSS doivent être légers, délivrés aussi rapidement que possible, et l'utilisation des types de médias et des requêtes média est conseillé pour ne pas bloquer le rendu&nbsp;:</p>

<pre class="brush: html">&lt;link href="style.css"    rel="stylesheet" media="all"&gt;
&lt;link href="portrait.css" rel="stylesheet" media="orientation:portrait"&gt;
&lt;link href="print.css"    rel="stylesheet" media="print"&gt;
</pre>

<p>Pour cela, il est possible de réaliser certaines <a href="/fr/docs/Learn/Performance/CSS">optimisations CSS</a>.</p>

<h3 id="fonts">Polices</h3>

<p>Par défaut, les requêtes d'affichage des polices sont différées jusqu'à ce que l'arbre de rendu soit construit, ce qui peut conduire à un délai d'affichage du texte.</p>

<p>Il est possible de surcharger le comportement par défaut et de précharger les polices web en utilisant <code>&lt;link rel="preload"&gt;</code>, la <a href="/fr/docs/Web/CSS/@font-face/font-display">propriété CSS <code>font-display</code></a> et the <a href="/fr/docs/Web/API/CSS_Font_Loading_API">l'API de chargement des polices</a>.<br><br>Voir aussi <a href="/fr/docs/Web/HTML/Element/link">la documentation de l'élément <code>Link</code></a></p>

<h3 id="images_and_iframes">Images et iframes</h3>

<p>Très souvent, les pages web contiennent beaucoup d'images et cela contribue à la quantité de données chargées et donc à la vitesse de chargement de la page. La plupart de ces images sont généralement en dehors de l'écran (ces ressources sont alors considérées comme étant <a href="/fr/docs/Web/Performance/Critical_rendering_path">non critiques</a>), car elles nécessitent une interaction de l'internaute (par exemple le faire de défiler dans la page) avant de les voir.</p>

<h4 id="attribut_loading">Attribut loading</h4>

<p>L'attribut <a href="/fr/docs/Web/HTML/Element/Img#attr-loading"><code>loading</code></a> utilisé sur un élément <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a> (ou sur un élément <a href="/fr/docs/Web/HTML/Element/iframe"><code>&lt;iframe&gt;</code></a>) peut être utilisé pour demander au navigateur de différer le chargement des images et des iframes qui se situent en dehors de la zone affichée à l'écran, jusqu'à ce que la personne visitant le site ne les affiche en faisant défiler la page.</p>

<pre class="brush: html">&lt;img src="image.jpg" alt="..." loading="lazy"&gt;
&lt;iframe src="video-player.html" title="..." loading="lazy"&gt;&lt;/iframe&gt;</pre>

<p>L'événement <code>load</code> se déclenche lorsque que le contenu le plus rapide a entièrement été chargé. À ce moment-là, il est complètement possible (et même probable) que des images utilisant le chargement différé, situées dans la <a href="/fr/docs/Glossary/Visual_Viewport">zone visible de l'écran</a> n'aient pas encore été chargées.</p>

<p>Vous pouvez déterminer si une image donnée a terminé son chargement en examinant la valeur de la valeur booléenne de sa propriété <a href="/fr/docs/Web/API/HTMLImageElement/complete"><code>complete</code></a>.</p>

<h4 id="polyfill">Polyfill</h4>

<p>Pour ajouter la prise en charge de l'attribut <code>loading</code> sur les vieux navigateurs qui ne sont pas compatibles, vous pouvez utiliser le polyfill suivant&nbsp;: <a href="https://github.com/mfranzke/loading-attribute-polyfill">loading-attribute-polyfill</a></p>

<h4 id="api_intersection_observer">API Intersection Observer</h4>

<p><a href="/fr/docs/Web/API/IntersectionObserver">L'API Intersection Observers</a> permet à l'internaute de savoir si un élément suivi est entré ou est déjà dans la zone d'affichage.</p>

<h4 id="gestionnaire_d_évènements">Gestionnaires d'évènements</h4>

<p>Lorsque la compatibilité navigateur est cruciale, vous pouvez utiliser ces quelques options&nbsp;:</p>

<ul>
  <li><a href="https://github.com/w3c/IntersectionObserver">polyfill pour l'API <i lang="en">Intersection observer</i></a></li>
  <li>Utilisés en tant que solution de contournement pour le défilement, les gestionnaires de redimensionnement ou de changement d'orientation peuvent déterminer si un élément spécifique se trouve dans la zone d'affichage ou non.</li>
</ul>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th><strong>Spécification</strong></th>
      <th><strong>Statut</strong></th>
      <th><strong>Commentaires</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('HTML WHATWG', "#lazy-loading-attributes")}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css">CSS bloquant le rendu (en anglais)</a></li>
  <li><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#optimizing_loading_and_rendering">Optimiser le chargement et le rendu (en anglais)</a></li>
  <li><a href="https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video">Chargement différé des images et des vidéos (en anglais)</a></li>
</ul>
