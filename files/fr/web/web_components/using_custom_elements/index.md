---
title: Utilisation d'éléments personnalisés
slug: Web/Web_Components/Using_custom_elements
tags:
  - Classes
  - Guide
  - Web Components
  - autonomous
  - custom elements
  - customized
translation_of: Web/Web_Components/Using_custom_elements
---
<div>{{DefaultAPISidebar("Web Components")}}</div>

<p>L'un des aspects les plus importants des composants web est la possibilité de créer des éléments personnalisés qui encapsulent bien vos fonctionnalités sur une page HTML, plutôt que de devoir se contenter d'une soupe de balises définissant des fonctionnalités personnalisées. Cet article passe en revue les bases de l'utilisation d'éléments personnalisés.</p>

<div class="note">
<p><strong>Note :</strong> Les éléments personnalisés sont pris en charge par défaut dans Chrome et Opera. Firefox en est très proche, ils sont disponibles si vous mettez les préférences dom.webcomponents.enabled et dom.webcomponents.customelements.enabled à true, leur implémentation étant prévue pour être activée par défaut dans la version 60/61. Safari ne prend en charge que les éléments personnalisés indépendants pour l'instant, et Edge travaille de même sur une implémentation.</p>
</div>

<h2 id="Vue_d'ensemble">Vue d'ensemble</h2>

<p>Le contrôleur des éléments personnalisés d'un document Web est l'objet {{domxref("CustomElementRegistry")}} ; cet objet vous permet d'enregistrer un élément personnalisé sur une page, de renvoyer des informations sur les éléments personnalisés enregistrés, etc..</p>

<p>Pour enregistrer un élément personnalisé sur la page, vous utilisez la méthode {{domxref ("CustomElementRegistry.define()")}}. Elle prend comme arguments :</p>

<ul>
 <li>une {{domxref("DOMString")}} représentant le nom que vous donnez à l'élément ; notez que les noms d'éléments personnalisés doivent comprendre un tiret ; ils ne peuvent pas être des mots simples ;</li>
 <li>un objet de classe définissant le comportement de l'élément ;</li>
 <li>facultativement, un objet d'options contenant une propriété extends, qui indique l'élément intégré dont votre élément hérite, le cas échéant.</li>
</ul>

<p>Ainsi, par exemple, la définition de notre <a href="https://mdn.github.io/web-components-examples/word-count-web-component/">élément word-count</a> personnalisé ressemble à ce qui suit :</p>

<pre class="brush: js">customElements.define('word-count', WordCount, { extends: 'p' });</pre>

<p>L'élément est appelé <code>word-count</code>, son objet de classe est <code>WordCount</code>, et il étend l'élément {{htmlelement("p")}}.</p>

<p>L'objet de classe d'un élément personnalisé est écrit en utilisant la syntaxe de classe ES 2015 standard. Par exemple, <code>WordCount</code> est structuré comme suit :</p>

<pre class="brush: js">class WordCount extends HTMLParagraphElement {
  constructor() {
    // Toujours appeler "super" d'abord dans le constructeur
    super();

    // Ecrire la fonctionnalité de l'élément ici

    ...
  }
}</pre>

<p>C'est juste un exemple simple, mais vous pouvez faire plus ici. Il est possible de définir des rappels de cycle de vie particuliers dans le constructeur, rappels qui s'exécutent à des points particuliers du cycle de vie de l'élément. Par exemple, <code>connectedCallback</code> est appelé lorsque l'élément personnalisé est connecté pour la première fois au DOM du document, tandis que <code>attributeChangedCallback</code> est appelé lorsque l'un des attributs de l'élément personnalisé est ajouté, supprimé ou modifié.</p>

<p>Vous en apprendrez plus à ce sujet dans notre section {{anch("Using the lifecycle callbacks")}} ci-dessous.</p>

<p>Il existe deux types d'éléments personnalisés :</p>

<ul>
 <li>les <strong>éléments personnalisés autonomes</strong> sont indépendants : ils n'héritent pas des éléments HTML standard ; vous les utilisez sur une page en les écrivant littéralement en tant qu'élément HTML ; par exemple <code>&lt;popup-info&gt;</code>, ou <code>document.createElement("popup-info")</code> ;</li>
 <li>les <code>éléments intégrés personnalisés</code> héritent des éléments HTML de base. Pour en créer un, vous devez spécifier quel élément ils étendent (comme indiqué dans les exemples ci-dessus), et ils sont utilisés en écrivant l'élément de base, mais en indiquant le nom de l'élément personnalisé dans l'attribut (ou la propriété) {{htmlattrxref("is" )}} ; par exemple &lt;p is="word-count"&gt; ou document.createElement("p", {is: "word-count"}).</li>
</ul>

<h2 id="Passage_en_revue_de_quelques_exemples_simples">Passage en revue de quelques exemples simples</h2>

<p>À ce stade, examinons quelques exemples plus simples pour vous montrer plus en détail comment des éléments personnalisés sont créés.</p>

<h3 id="Éléments_personnalisés_indépendants">Éléments personnalisés indépendants</h3>

<p>Jetons un coup d'oeil à un élément personnalisé indépendant : <a href="https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component">&lt;popup-info-box&gt;</a> (voir un <a href="https://mdn.github.io/web-components-examples/popup-info-box-web-component/">exemple en direct</a>). Il prend une icône d'image et une chaîne de texte, et intègre l'icône dans la page.</p>

<p>Lorsque l'icône reçoit la focalisation, elle affiche le texte dans une boîte d'information contextuelle pour fournir d'autres informations contextuelles.</p>

<p>Pour commencer, dans notre fichier JavaScript, nous définissons une classe appelée <code>PopUpInfo</code> qui étend {{domxref("HTMLElement")}}. Les éléments personnalisés indépendants étendent presque toujours <code>HTMLElement</code>.</p>

<pre class="brush: js">class PopUpInfo extends HTMLElement {
  constructor() {
    // Toujours appeler "super" d'abord dans le constructeur
    super();

    // Ecrire la fonctionnalité de l'élément ici
    ...
  }
}</pre>

<p>On y trouve la définition {{jsxref("Classes.constructor","constructor")}} de la classe, qui commence comme toujours par appeler super(), afin que la chaîne de prototype correcte soit définie.</p>

<p>Dans le constructeur, nous définissons toutes les fonctionnalités que l'élément aura lorsqu'une instance de celui-ci sera instanciée. Dans ce cas, nous attachons une racine fantôme à l'élément personnalisé, nous utilisons une manipulation DOM pour créer la structure DOM interne de l'élément - qui est ensuite attachée à la racine fantôme ; et finalement, nous attachons du CSS à la racine fantôme pour la mettre en forme.</p>

<pre class="brush: js">// Création d'une racine fantôme
var shadow = this.attachShadow({mode: 'open'});

// Création des spans
var wrapper = document.createElement('span');
wrapper.setAttribute('class','wrapper');
var icon = document.createElement('span');
icon.setAttribute('class','icon');
icon.setAttribute('tabindex', 0);
var info = document.createElement('span');
info.setAttribute('class','info');

// Prendre le contenu de l'attribut et le mettre dans le span d'info
var text = this.getAttribute('text');
info.textContent = text;

// Insérer l'icône
var imgUrl;
if(this.hasAttribute('img')) {
  imgUrl = this.getAttribute('img');
} else {
  imgUrl = 'img/default.png';
}
var img = document.createElement('img');
img.src = imgUrl;
icon.appendChild(img);

// Création du CSS à appliquer au dom fantôme
var style = document.createElement('style');

style.textContent = '.wrapper {' +
// CSS tronqué pour la concision

// Attacher les éléments créés au dom fantôme

shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);</pre>

<p>Enfin, nous enregistrons notre élément personnalisé dans le <code>CustomElementRegistry</code> à l'aide de la méthode <code>define()</code> mentionnée précédemment ; dans les paramètres, nous spécifions le nom de l'élément, puis le nom de la classe qui définit sa fonctionnalité :</p>

<pre class="brush: js">customElements.define('popup-info', PopUpInfo);</pre>

<p>Il est maintenant disponible pour utilisation dans notre page. Dans notre code HTML, nous l'utilisons comme ceci :</p>

<pre class="brush: html">&lt;popup-info img="img/alt.png" text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."&gt;</pre>

<div class="note">
<p><strong>Note :</strong> Vous pouvez voir le <a href="https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js">full JavaScript source code</a> ici.</p>
</div>

<h3 id="Eléments_intégrés_personnalisés">Eléments intégrés personnalisés</h3>

<p>Jetons maintenant un coup d'œil à un autre exemple d'élément intégré - <a href="https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component">expanding-list</a> (<a href="https://mdn.github.io/web-components-examples/expanding-list-web-component/">voir aussi en direct</a>). Cela transforme n'importe quelle liste non ordonnée en un menu déployable/refermable.</p>

<p>Tout d'abord, nous définissons la classe de notre élément, de la même manière que précédemment :</p>

<pre class="brush: js">class ExpandingList extends HTMLUListElement {
  constructor() {
    // Toujours appeler "super" d'abord dans le constructeur
    super();

    // Ecrire la fonctionnalité de l'élément ici

    ...
  }
}</pre>

<p>Nous n'expliquerons pas en détail la fonctionnalité de l'élément ici, mais vous pouvez découvrir comment elle fonctionne en regardant le code source. La seule vraie différence ici est que notre élément étend l'interface {{domxref("HTMLUListElement")}}, et non {{domxref("HTMLElement")}}. Il a donc toutes les caractéristiques d'un élément {{htmlelement ("ul")}} avec la fonctionnalité que nous définissons par dessus, plutôt que d'être un élément indépendant. C'est ce qui en fait un élément intégré personnalisé plutôt qu'un élément indépendant.</p>

<p>Ensuite, nous enregistrons l'élément en utilisant la méthode <code>define()</code> comme précédemment, sauf que cette fois, il comprend également un objet options qui détaille l'élément dont notre élément personnalisé hérite :</p>

<pre class="brush: js">customElements.define('expanding-list', ExpandingList, { extends: "ul" });</pre>

<p>L'utilisation de l'élément intégré dans un document web se présente également de façon quelque peu différente :</p>

<pre class="brush: html">&lt;ul is="expanding-list"&gt;

  ...

&lt;/ul&gt;</pre>

<p>Vous utilisez l'élément <code>&lt;ul&gt;</code> comme d'habitude, mais vous spécifiez le nom de l'élément personnalisé dans l'attribut <code>is</code>.</p>

<div class="note">
<p><strong>Note :</strong> à nouveau, vous pouvez voir le <a href="https://github.com/mdn/web-components-examples/blob/master/expanding-list-web-component/main.js">JavaScript source code</a> complet ici.</p>
</div>

<h2 id="Utilisation_des_rappels_de_cycle_de_vie">Utilisation des rappels de cycle de vie</h2>

<p>Vous pouvez définir plusieurs rappels différents dans le constructeur d'un élément personnalisé, qui se déclenchent à différents points du cycle de vie de l'élément :</p>

<ul>
 <li>connectedCallback : appelé lorsque l'élément personnalisé est connecté pour la première fois au DOM du document ;</li>
 <li>disconnectedCallback : appelé lorsque l'élément personnalisé est déconnecté du DOM du document ;</li>
 <li>adoptedCallback : appelé lorsque l'élément personnalisé est déplacé vers un nouveau document ;</li>
 <li>attributeChangedCallback : appelé lorsque l'un des attributs de l'élément personnalisé est ajouté, supprimé ou modifié.</li>
</ul>

<p>Jetons un coup d'œil à un exemple de ceux-ci en cours d'utilisation. Le code ci-dessous est tiré de notre exemple de <a href="https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks">rappels de cycle de vie</a> (<a href="https://mdn.github.io/web-components-examples/life-cycle-callbacks/">le voir s'exécuter en direct</a>). C'est un exemple trivial qui génère simplement un carré coloré de taille fixe sur la page. L'élément personnalisé ressemble à ceci :</p>

<pre class="brush: html">&lt;custom-square l="100" c="red"&gt;&lt;/custom-square&gt;</pre>

<p>Le constructeur de classe est vraiment simple - ici, nous attachons un DOM à l'élément, puis nous attachons les éléments vides {{htmlelement("div")}} et {{htmlelement("style")}} à la racine fantôme :</p>

<pre class="brush: js">var shadow = this.attachShadow({mode: 'open'});

var div = document.createElement('div');
var style = document.createElement('style');
shadow.appendChild(style);
shadow.appendChild(div);</pre>

<p>La fonction clé dans cet exemple est <code>updateStyle()</code> : elle prend un élément, récupère sa racine fantôme, retrouve son élément <code>&lt;style&gt;</code>, et ajoute {{cssxref("width")}}, {{cssxref("height")}}, et {{cssxref("background-color")}} au style.</p>

<pre class="brush: js">function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i &lt; childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {
      childNodes[i].textContent = 'div {' +
                          ' width: ' + elem.getAttribute('l') + 'px;' +
                          ' height: ' + elem.getAttribute('l') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c');
    }
  }
}</pre>

<p>Les mises à jour réelles sont toutes gérées par les rappels du cycle de vie, qui sont placés dans le constructeur. Le <code>connectedCallback()</code> s'exécute quand l'élément est ajouté au DOM : ici, nous exécutons la fonction <code>updateStyle()</code> pour nous assurer que le carré est mis en forme comme défini dans ses attributs :</p>

<pre class="brush: js">connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}</pre>

<p>Les rappels <code>disconnectedCallback()</code> et <code>adoptedCallback()</code> enregistrent des messages simples sur la console pour nous informer lorsque l'élément est supprimé du DOM ou déplacé vers une autre page :</p>

<pre class="brush: js">disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}</pre>

<p>Le rappel <code>attributeChangedCallback()</code> est exécuté chaque fois que l'un des attributs de l'élément est modifié d'une façon ou d'une autre. Comme vous pouvez le voir à partir de ses propriétés, il est possible d'agir sur les attributs individuellement, en regardant leur nom ainsi que les anciennes et nouvelles valeurs des attributs. Dans ce cas cependant, nous exécutons juste la fonction <code>updateStyle()</code> pour nous assurer à nouveau que la mise en forme du carré est mise à jour selon les nouvelles valeurs :</p>

<pre class="brush: js">attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}</pre>

<p>Notez que, pour déclencher le rappel <code>attributeChangedCallback()</code> lorsqu'un attribut change, vous devez observer les attributs. Cela est réalisé en appelant le getter <code>observedAttributes()</code> dans le constructeur, en incluant à l'intérieur une instruction return qui retourne un tableau contenant les noms des attributs que vous voulez observer :</p>

<pre class="brush: js">static get observedAttributes() {return ['w', 'l']; }</pre>

<p>Dans notre exemple, cela est mis au tout début du constructeur.</p>

<div class="note">
<p><strong>Note :</strong> vous pouvez trouver le <a href="https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js">full JavaScript source</a> .</p>
</div>
