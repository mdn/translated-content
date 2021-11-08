---
title: Utiliser le shadow DOM
slug: Web/Web_Components/Using_shadow_DOM
tags:
  - API
  - DOM
  - Guide
  - Web Components
  - shadow dom
translation_of: Web/Web_Components/Using_shadow_DOM
---
<div>{{DefaultAPISidebar("Web Components")}}</div>

<p>Un aspect important des composants web est l'encapsulation — être capable de garder la structure de balisage, le style et le comportement cachés et séparés du reste de code de la page tel que différentes parties n'entrent pas en conflit et que le code puisse rester agréable et propre. L'API Shadow DOM est un moyen d'y parvenir, fournissant une manière d'associer à un élément un DOM séparé et caché. Cet article couvre les bases de l'utilisation du DOM fantôme.</p>

<div class="note">
  <p><strong>Note :</strong> L'API Shadow DOM est supportée par défaut dans Firefox (63 et suivants), Chrome, Opera, et Safari. Le nouveau Edge basé sur Chromium (75 et suivants) le supportent aussi; le vieux Edge ne le supporte.</p>
</div>

<h2 id="high-level_view">Vue de haut niveau</h2>

<p>Cet article suppose que vous êtes déjà familier avec le concept de <a href="/fr/docs/Web/API/Document_Object_Model/Introduction">DOM (Document Object Model)</a> — une structure arborescente de nœuds connectés représentant les différents éléments et chaines de textes apparaissant dans un document balisé (généralement un document HTML dans le cas de documents web). Par exemple, considérez le fragment HTML suivant :</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Simple exemple de DOM&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;section&gt;
      &lt;img src="dinosaur.png" alt="Un tyrannosaurus Rex rouge : un dinosaure bipède se tenant debout comme un humain, avec de petits bras et une large gueule à nombreuses dents tranchantes."&gt;
      &lt;p&gt;Nous ajouterons ici un lien vers la &lt;a href="https://www.mozilla.org/"&gt;page d'accueil de Mozilla&lt;/a&gt;&lt;/p&gt;
    &lt;/section&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>Ce fragment produit la structure DOM suivante :</p>

<p><img src="dom-screenshot.png"></p>

<p>Le DOM fantôme permet à des arbres DOM cachés d'être associés à des éléments de l'arbre DOM principal — cet arbre DOM fantôme s'ouvre avec une racine fantôme placée sous n'importe quel élément voulu, de la même manière que dans le DOM normal.</p>

<p><img alt="Version SVG du diagramme montrant l'interaction entre le document, la racine fantôme et l'hôte fantôme." src="shadowdom.svg"></p>

<p>Il y a quelques termes de la terminologie du DOM fantôme que vous devez connaitre :</p>

<ul>
  <li><strong>Hôte fantôme</strong> : le nœud du DOM principal auquel le DOM fantôme est associé.</li>
  <li><strong>Arbre fantôme</strong> : l'arbre DOM au sein du DOM fantôme.</li>
  <li><strong>Frontière fantôme</strong> : la limite où le DOM fantôme se termine et où le DOM principal commence.</li>
  <li><strong>Racine fantôme</strong> : le nœud racine de l'arbre fantôme.</li>
</ul>

<p>Vous pouvez affecter les nœuds du DOM fantôme exactement de la même manière que pour les nœuds du DOM principal — par exemple en leur ajoutant des éléments enfants ou en leur définissant des attributs, en stylisant des nœuds individuels au moyen de <code>element.style.propriete</code>, ou en ajoutant du style à l'arbre DOM fantôme entier via une balise <a href="/fr/docs/Web/HTML/Element/style"><code>&lt;style&gt;</code></a>. La différence est que le code au sein du DOM fantôme ne peut affecter aucun élément en dehors de son arbre, permettant de mettre en œuvre une encapsulation très commode.</p>

<p>Notez que le DOM fantôme n'est pas une nouvelle chose du tout — les navigateurs l'ont utilisé depuis longtemps pour encapsuler la structure interne d'un élément. Pensez par exemple à un élément <a href="/fr/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>, avec les contrôles par défaut du navigateur apparents. Tout ce que vous voyez dans le DOM est l'élément <code>&lt;video&gt;</code>, mais il contient plusieurs boutons et autres contrôles au sein de son DOM fantôme. La spécification du DOM fantôme a été conçue de telle manière que vous êtes autorisés à manipuler le DOM fantôme de vos propres éléments personnalisés.</p>

<h2 id="basic_usage">Usage basique</h2>

<p>Vous pouvez associer une racine fantôme à tout élément en utilisant la méthode <a href="/fr/docs/Web/API/Element/attachShadow"><code>Element.attachShadow()</code></a>. Elle prend en paramètres un objet d'options contenant une option — <code>mode</code> — ayant pour valeur <code>open</code> (ouvert) ou <code>closed</code> (fermé) :</p>

<pre class="brush: js">let fantome = element.attachShadow({mode: 'open'});
let fantome = element.attachShadow({mode: 'closed'});</pre>

<p><code>open</code> signifie que vous pouvez accéder au DOM fantôme en utilisant du JavaScript écrit dans le contexte de la page principale, par exemple en utilisant la propriété <a href="/fr/docs/Web/API/ShadowRoot"><code>Element.shadowRoot</code></a> :</p>

<pre class="brush: js">let monDomFantome = monElementPerso.shadowRoot;</pre>

<p>Si vous associez une racine fantôme à un élément personnalisé avec la propriété <code>mode</code> définie à <code>closed</code>, vous ne serez pas autorisé à accéder au DOM fantôme depuis l'extérieur — <code>monElementPerso.shadowRoot</code> retournera <code>null</code>. C'est le cas avec les éléments natifs contenant des DOM fantômes tels que <code>&lt;video&gt;</code>.</p>

<div class="note">
  <p><strong>Note :</strong> Comme montre <a href="https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af">cet article de blog</a> <small>(en anglais)</small>, il est actuellement assez simple de pénétrer les DOM fantômes fermés, et les cacher complètement n'en vaut souvent pas la peine.</p>
</div>

<p>Si vous voulez associer un DOM fantôme à un élément personnalisé en tant que partie de son constructeur (de loin la plus utile application du DOM fantôme), vous devriez utiliser quelque instruction comme :</p>

<pre class="brush: js">let shadow = this.attachShadow({mode: 'open'});</pre>

<p>Lorsque vous avez associé un DOM fantôme à un élément, le manipuler consiste seulement à utiliser les API du DOM telles que vous les utilisez pour manipuler le DOM principal :</p>

<pre class="brush: js">let paragraph = document.createElement('p');
shadow.appendChild(paragraph);
// etc.</pre>

<h2 id="working_through_a_simple_example">Démonstration au travers d'un exemple simple</h2>

<p>Maintenant, visitons un exemple simple pour faire une démonstration du DOM fantôme en action au sein d'un élément personnalisé — <code><a href="https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component">&lt;popup-info-box&gt;</a></code> (en voir aussi un <a href="https://mdn.github.io/web-components-examples/popup-info-box-web-component/">exemple dynamique</a>). Il prend une icône et une chaîne de caractères et intègre l'image dans la page. Quand l'icône obtient l'attention (<code>:focus</code>), le texte s'affiche dans une fenêtre indépendante pour fournir plus d'informations contextuelles. Pour commencer, nous définissons dans notre fichier JavaScript une classe appelée <code>PopUpInfo</code>, qui étend <code>HTMLElement</code> :</p>

<pre class="brush: js">class PopUpInfo extends HTMLElement {
  constructor() {
    // Toujours appeler super en premier dans le constructeur
    super();

    // Écrire les fonctionnalités de l'élément ici

    ...
  }
}</pre>

<p>Au sein de la définition de la classe, nous créons le constructeur de l'élément, qui définit toutes les fonctionnalités que l'élément aura lorsqu'une instance est créée.</p>

<h3 id="creating_the_shadow_root">Créer la racine fantôme</h3>

<p>Nous associons d'abord une racine fantôme à l'élément personnalisé :</p>

<pre class="brush: js">// Créer une racine fantôme
let fantome = this.attachShadow({mode: 'open'});</pre>

<h3 id="creating_the_shadow_dom_structure">Créer la structure du DOM fantôme</h3>

<p class="brush: js">Ensuite, nous utilisons des outils de manipulation du DOM pour créer la structure interne du DOM fantôme de notre élément :</p>

<pre class="brush: js">// Créer les &lt;span&gt;
let wrapper = document.createElement('span');
wrapper.setAttribute('class','wrapper');
let icon = document.createElement('span');
icon.setAttribute('class','icon');
icon.setAttribute('tabindex', 0);
let info = document.createElement('span');
info.setAttribute('class','info');

// Prendre le contenu de l'attribut et le placer à l'intérieur du span info
let text = this.getAttribute('text');
info.textContent = text;

// Insérer l'icône
let imgUrl;
if(this.hasAttribute('img')) {
  imgUrl = this.getAttribute('img');
} else {
  imgUrl = 'img/default.png';
}
let img = document.createElement('img');
img.src = imgUrl;
icon.appendChild(img);</pre>

<h3 id="styling_the_shadow_dom">Styliser le DOM fantôme</h3>

<p class="brush: js">Après cela, nous créons un élément <a href="/fr/docs/Web/HTML/Element/style"><code>&lt;style&gt;</code></a> et nous ajoutons du CSS pour personnaliser notre arbre DOM :</p>

<pre class="brush: js">// Créer quelque CSS à appliquer au dom fantôme
let style = document.createElement('style');

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}`;</pre>

<h3 id="attaching_the_shadow_dom_to_the_shadow_root">Associer le DOM fantôme à la racine fantôme</h3>

<p>L'étape finale est d'associer tous les éléments créés à la racine fantôme :</p>

<pre class="brush: js">// Associer les éléments créés au dom fantôme
shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);</pre>

<h3 id="using_our_custom_element">Utiliser notre élément personnalisé</h3>

<p>Une fois que la classe est définie, utiliser l'élément est aussi simple que de le définir, et l'ajouter sur la page, comme expliqué dans <a href="/fr/docs/Web/Web_Components/Using_custom_elements">Utiliser les éléments personnalisés</a> :</p>

<pre class="brush: js">// Définit le nouvel élément
customElements.define('popup-info', PopUpInfo);</pre>

<pre class="brush: html">&lt;popup-info img="img/alt.png" text="Le code de validation de votre carte (CVC) est un élément de sécurité
  supplémentaire. Il s'agit des 3 ou 4 derniers chiffres figurant au dos de votre carte."&gt;</pre>

<h3 id="internal_versus_external_styles">Styles internes ou styles externes</h3>

<p>Dans l'exemple précédent, nous appliquons du style au DOM fantôme en utilisant l'élément <a href="/fr/docs/Web/HTML/Element/style"><code>&lt;style&gt;</code></a>, mais il est parfaitement possible de le faire en référençant une feuille de style externe avec un élément <a href="/fr/docs/Web/HTML/Element/link"><code>&lt;link&gt;</code></a> si vous le préférez.</p>

<p>Par exemple, regardez ce code tiré de l'exemple <a href="https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/">popup-info-box-external-stylesheet</a> (voir le <a href="https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js">code source</a>) :</p>

<pre class="brush: js">// Appliquer les styles externes au dom fantôme
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'style.css');

// Associer l'élément créé au dom fantôme
shadow.appendChild(linkElem);</pre>

<p>Notez que les éléments <a href="/fr/docs/Web/HTML/Element/link"><code>&lt;link&gt;</code></a> ne bloquent pas la peinture de la racine fantôme, donc il pourrait y avoir une latence où le contenu serait sans style (FOUC) pendant que la feuille de style se charge.</p>

<p>De nombreux navigateurs modernes implantent une optimisation pour les balises <a href="/fr/docs/Web/HTML/Element/style"><code>&lt;style&gt;</code></a> clonées depuis un nœud commun ou qui ont des contenus identiques à fin de leur permettre de partager une unique liste de retour. Avec cette optimisation, la performance des styles externes et internes doivent être similaires.</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/Web_Components/Using_custom_elements">Utiliser les éléments personnalisés</a></li>
  <li><a href="/fr/docs/Web/Web_Components/Using_templates_and_slots">Utiliser les modèles (templates) et les emplacements (slots)</a></li>
</ul>
