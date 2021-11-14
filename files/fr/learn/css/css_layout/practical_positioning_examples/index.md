---
title: Exemples pratiques de positionnement
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
translation_of: Learn/CSS/CSS_layout/Practical_positioning_examples
original_slug: Apprendre/CSS/CSS_layout/Exemples_pratiques_de_positionnement
---
<div>{{LearnSidebar}}</div>

<p>Cet article illustre comment construire quelques exemples concrets de ce qu'on peut réaliser avec le positionnement.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis&nbsp;:</th>
   <td>Les fondamentaux en HTML (étudier <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Une introduction au HTML</a>), et une idée du fonctionnement du CSS (étudier <a href="/fr/docs/Learn/CSS/First_steps">Une introduction à CSS</a>.)</td>
  </tr>
  <tr>
   <th scope="row">Objectif&nbsp;:</th>
   <td>Avoir une idée des aspects pratiques du positionnement</td>
  </tr>
 </tbody>
</table>

<h2 id="Une_boîte_dinformation_à_onglets">Une boîte d'information à onglets</h2>

<p>Le premier exemple que nous allons examiner est une boîte d'information à onglets classique - une méthode courante utilisée lorsqu'on souhaite regrouper beaucoup d'informations dans une petite zone. Cela inclut les applications gourmandes en informations comme les jeux de stratégie/guerre, les versions mobiles de sites web où l'écran est étroit et l'espace limité, et les boîtes d'information compactes où on peut mettre à disposition de nombreuses informations sans qu'elles remplissent toute l'interface utilisateur. Notre exemple ressemblera à ceci une fois que nous aurons terminé&nbsp;:</p>

<p><img alt="" src="tabbed-info-box.png"></p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez voir l'exemple fini en démonstration sur la page <a href="https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html">info-box.html</a> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html">code source</a>). N'hésitez pas à le consulter pour avoir une idée du résultat que vous allez construire.</p>
</div>

<p>On pourrait se demander&nbsp;: «&nbsp;pourquoi ne pas créer des onglets séparés sous forme de pages web séparées, et faire en sorte que ces onglets permettent de cliquer sur les pages séparées pour créer cet effet&nbsp;?&nbsp;». Ce code serait en effet plus simple, mais dans ce cas, chaque «&nbsp;page&nbsp;» séparée serait en fait une nouvelle page web, ce qui rendrait plus difficile la sauvegarde des informations entre les vues, et intégrerait cette fonctionnalité dans un design d'interface plus large. De plus, les applications dites «&nbsp;à page unique&nbsp;» (<i lang="en">Single Page Apps</i>) deviennent très populaires, en particulier pour les interfaces web mobiles, parce que le fait que tout soit servi dans un seul fichier réduit le nombre de requêtes HTTP nécessaires pour voir tout le contenu, ce qui améliore les performances.</p>

<div class="note">
<p><strong>Note :</strong> Il arrive même que pour certains sites, ce soit une seule page qui soit chargée et que son contenu soit modifié dynamiquement grâce à des fonctionnalités JavaScript telles que <a href="/fr/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a>. Pour le moment, nous garderons des choses simples. Il y aura un peu de JavaScript en fin d'article, mais la juste dose nécessaire pour faire fonctionner cet exemple.</p>
</div>

<p>Pour commencer, effectuez une copie locale du fichier HTML de départ — <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box-start.html">info-box-start.html</a>. Enregistrez ce fichier dans un endroit approprié sur votre ordinateur et ouvrez-le dans votre éditeur de texte. Examinons le HTML contenu dans le corps de cette page :</p>

<pre class="brush: html">
&lt;section class="info-box"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#" class="active"&gt;Onglet 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Onglet 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Onglet 3&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;div class="panels"&gt;
    &lt;article class="active-panel"&gt;
      &lt;h2&gt;Premier onglet&lt;/h2&gt;

      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt metus. Donec ultrices, urna maximus consequat aliquet, dui neque eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor urna. Nulla facilisi.&lt;/p&gt;
    &lt;/article&gt;
    &lt;article&gt;
      &lt;h2&gt;Deuxième onglet&lt;/h2&gt;

      &lt;p&gt;Cet onglet ne contient pas de Lorem Ipsum, mais bon c'est aussi peu intéressant que les autres onglets.&lt;/p&gt;
    &lt;/article&gt;
    &lt;article&gt;
      &lt;h2&gt;Troisième onglet&lt;/h2&gt;

      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Et voici une liste ordonnée&nbsp;!&lt;/p&gt;

      &lt;ol&gt;
        &lt;li&gt;dui neque eleifend lorem, a auctor libero turpis at sem.&lt;/li&gt;
        &lt;li&gt;Aliquam ut porttitor urna.&lt;/li&gt;
        &lt;li&gt;Nulla facilisi&lt;/li&gt;
      &lt;/ol&gt;
    &lt;/article&gt;
  &lt;/div&gt;
&lt;/section&gt;
</pre>

<p>Nous avons un élément <a href="/fr/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a>  avec une <code>class</code>  <code>info-box</code>, qui contient un élément <a href="/fr/docs/Web/HTML/Element/ul"><code>&lt;ul&gt;</code></a> et un élément <a href="/fr/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a>. La liste non ordonnée contient trois éléments de liste avec des liens à l'intérieur, qui deviendront les véritables onglets sur lesquels il faudra cliquer pour afficher nos panneaux de contenu. L'élément <code>div</code> contient trois éléments <a href="/fr/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a>, qui constitueront les panneaux de contenu correspondant à chaque onglet. Chaque panneau contient un échantillon de contenu.</p>

<p>L'idée ici est que nous allons donner aux onglets l'aspect d'un menu de navigation horizontal standard, et que nous allons donner aux panneaux l'aspect d'être superposés en utilisant un positionnement absolu. Nous vous donnerons également un peu de JavaScript à inclure dans votre page pour afficher le panneau correspondant lorsqu'on clique sur un des onglets, et nous donnerons un style à l'onglet lui-même. Vous n'aurez pas besoin de comprendre le JavaScript lui-même à ce stade, mais vous devriez penser à apprendre <a href="/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics">quelques bases de JavaScript</a> dès que possible - plus les fonctionnalités de votre interface utilisateur deviendront complexes, plus il est probable que vous aurez besoin de JavaScript pour implémenter les fonctionnalités souhaitées.</p>

<h3 id="Configuration_générale">Configuration générale</h3>

<p>Pour commencer, ajoutez ce qui suit entre les balises ouvrantes et fermantes <a href="/fr/docs/Web/HTML/Element/style"><code>&lt;style&gt;</code></a> :</p>

<pre class="brush: css">
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</pre>

<p>Il s'agit uniquement d'une configuration générale pour définir une police sans serif sur notre page, utiliser le modèle <code>border-box</code> <a href="/fr/docs/Web/CSS/box-sizing"><code>box-sizing</code></a>, pour surcharger la marge par défaut de <a href="/fr/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a>.</p>

<p>Ensuite, ajoutez ce qui suit en dessous de votre CSS précédent :</p>

<pre class="brush: css">
.info-box {
  width: 450px;
  height: 400px;
  margin: 0 auto;
}
</pre>

<p>Cela définit une largeur et une hauteur spécifiques sur le contenu, et le centre sur l'écran en utilisant l'ancienne astuce <code>margin: 0 auto</code>. Précédemment dans le cours, nous avons déconseillé de définir une hauteur fixe sur les conteneurs de contenu si possible. Nous dérogeons à cette règle ici, car nous avons un contenu fixe dans les onglets. De plus, il serait déconcertant d'avoir des onglets différents avec différentes hauteurs.</p>

<h3 id="Mettre_en_forme_les_onglets">Mettre en forme les onglets</h3>

<p>On souhaite que nos onglets ressemblent à des onglets. Autrement dit, on veut avoir un menu de navigation horizontal et, au lieu d'avoir différentes pages web depuis ce menu, obtenir l'affichage des différents panneaux sur la même page. Pour commencer, ajoutez la règle à la fin de votre CSS afin de retirer les valeurs par défaut de <a href="/fr/docs/Web/CSS/padding-left"><code>padding-left</code></a> et <a href="/fr/docs/Web/CSS/margin-top"><code>margin-top</code></a> pour la liste non-ordonnée&nbsp;:</p>

<pre class="brush: css">
.info-box ul {
  padding-left: 0;
  margin-top: 0;
}</pre>

<div class="note">
  <p><strong>Note :</strong> On utilise ici un sélecteur de descendants avec <code>.info-box</code> au début du sélecteur et pour tout cet exemple afin qu'on puisse insérer cette fonctionnalité dans une page possédant déjà un autre contenu, sans risquer de causer des interférences avec le style déjà existant.</p>
</div>

<p>Ensuite, mettons en forme les onglets horizontaux. Les éléments de la liste ont un flottement à gauche afin qu'ils soient sur une même ligne. Leur propriété <a href="/fr/docs/Web/CSS/list-style-type"><code>list-style-type</code></a> est placée à <code>none</code> afin de ne plus avoir les puces et <a href="/fr/docs/Web/CSS/width"><code>width</code></a> vaut <code>150px</code> afin qu'il y ait suffisamment de place au sein de la boîte pour afficher ces éléments. Les éléments <a href="/fr/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code></a> ont <a href="/fr/docs/Web/CSS/display"><code>display</code></a> avec la valeur <code>inline-block</code> afin qu'ils s'inscrivent dans une ligne mais qu'ils puissent tout de même être mis en forme pour des boutons d'onglet en utilisant d'autres propriétés.</p>

<p>Ajoutez le fragment de CSS qui suit&nbsp;:</p>

<pre class="brush: css">
.info-box li {
  float: left;
  list-style-type: none;
  width: 150px;
}

.info-box li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  line-height: 3;
  background-color: red;
  color: black;
  text-align: center;
}
</pre>

<p>Pour finir avec cette section, mettons en forme les liens selon leur état. Toute d'abord, gérons les états <code>:focus</code> et <code>:hover</code> afin que les onglets aient un aspect différent lorsqu'ils ont le focus ou qu'on les survole afin que la personne qui utilise le site ait un retour visuel. Deuxièmement, ajoutons une règle qui applique la même mise en forme lorsqu'un attribut <code>class</code> avec la valeur <code>active</code> est présent dessus. Nous appliquerons cette valeur à l'aide de JavaScript lorsqu'un clic aura lieu sur l'onglet. Ajoutez le CSS qui suit après les autres règles déjà écrites&nbsp;:</p>

<pre class="brush: css">
.info-box li a:focus, .info-box li a:hover {
  background-color: #a60000;
  color: white;
}

.info-box li a.active {
  background-color: #a60000;
  color: white;
}
</pre>

<h3 id="Mettre_en_forme_les_panneaux">Mettre en forme les panneaux</h3>

<p>La suite consiste à mettre en forme les panneaux de contenu. Allons-y&nbsp;!</p>

<p>Pour commencer, ajoutez la règle suivante qui met en forme le conteneur <code>.panels</code> <a href="/fr/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a>. Ici, on définit une hauteur fixe avec <a href="/fr/docs/Web/CSS/height"><code>height</code></a> afin de s'assurer que les panneaux s'inscriront correctement dans la boîte d'informations. On définit <a href="/fr/docs/Web/CSS/position"><code>position</code></a> <code>relative</code> sur l'élément <a href="/fr/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a> comme contexte de positionnement afin que les éléments enfants y soient relatifs (plutôt que relatifs à l'élément <a href="/fr/docs/Web/HTML/Element/html"><code>&lt;html&gt;</code></a>) pour la mise en forme. Enfin, on utilise <a href="/fr/docs/Web/CSS/clear"><code>clear</code></a> pour annuler le flottement défini plus haut afin qu'il n'y ait pas d'interférence avec le reste de la disposition.</p>

<pre class="brush: css">
.info-box .panels {
  height: 352px;
  position: relative;
  clear: both;
}
</pre>

<p>Dans cette section, nous allons mettre en forme les éléments <a href="/fr/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a> qui forment les panneaux. La première règle va fixer <a href="/fr/docs/Web/CSS/position"><code>position</code></a> absolue pour les panneaux avant de les placer dans le coin supérieur gauche de leur conteneur <a href="/fr/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a> avec <a href="/fr/docs/Web/CSS/top"><code>top</code></a> et <a href="/fr/docs/Web/CSS/left"><code>left</code></a>. C'est la clé de cette disposition&nbsp;: ainsi, les panneaux sont superposés les uns sur les autres. Cette règle fournit également la même hauteur que le conteneur et ajoute un peu de remplissage autour du contenu, une couleur pour le texte (<a href="/fr/docs/Web/CSS/color"><code>color</code></a>), ainsi qu'une couleur d'arrière-plan (<a href="/fr/docs/Web/CSS/background-color"><code>background-color</code></a>).</p>

<p>La deuxième règle ajoutée indique qu'un panneau avec une classe (<code>class</code>) valant <code>active-panel</code> aura une valeur de <a href="/fr/docs/Web/CSS/z-index"><code>z-index</code></a> à 1&nbsp;: il sera alors placé par-dessus les autres panneaux (par défaut les éléments positionnés ont un <code>z-index</code> qui vaut 0, ce qui les place en dessous). Là aussi, nous ajouterons cette classe au document à l'aide de JavaScript.</p>

<pre class="brush: css">
.info-box article {
  position: absolute;
  top: 0;
  left: 0;
  height: 352px;
  padding: 10px;
  color: white;
  background-color: #a60000;
}

.info-box .active-panel {
  z-index: 1;
}
</pre>

<h3 id="Ajouter_notre_JavaScript">Ajouter notre JavaScript</h3>

<p>La dernière étape permettant d'avoir un résultat fonctionnel consiste à ajouter du JavaScript. Placez les lignes suivantes (sans modification) entre les balises ouvrantes et fermantes <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> (elles se situent après le contenu HTML)&nbsp;:</p>

<pre class="brush: js">
let tabs = document.querySelectorAll('.info-box li a');
let panels = document.querySelectorAll('.info-box article');

for(let i = 0; i &lt; tabs.length; i++) {
  let tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(let i = 0; i &lt; tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(let i = 0; i &lt; panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}
</pre>

<p>Ce code effectue les actions suivantes&nbsp;:</p>

<ul>
 <li>Tout d'abord, on garde une référence pour tous les onglets et tous les panneaux dans deux variables intitulées <code>tabs</code> et <code>panels</code> afin qu'on puisse facilement les manipuler par la suite.</li>
 <li>Ensuite, on utilise une boucle <code>for</code> pour parcourir l'ensemble des onglets et, pour chaque, on exécute une fonction intitulée <code>setTabHandler()</code> qui met en place les fonctionnalités à utiliser lors d'un clic. Lorsque cette fonction est exécutée, elle reçoit une référence de l'onglet concerné ainsi qu'un indice <code>i</code> qui identifie la position de l'onglet dans le tableau <code>tabs</code>.</li>
 <li>Dans la fonction <code>setTabHandler()</code>, l'onglet se voit affecter un gestionnaire d'évènement <code>onclick</code>. Ainsi dès qu'on clique sur un onglet, on a&nbsp;:
  <ul>
   <li>Une boucle <code>for</code> qui est utilisée afin de parcourir tous les onglets pour retirer les classes qui seraient présentes sur eux.</li>
   <li>Une classe (<code>class</code>) <code>active</code> qui est appliquée sur l'onglet sur lequel on a cliqué (nous avons vu plus haut que cette classe était associée à une règle CSS qui définit <a href="/fr/docs/Web/CSS/color"><code>color</code></a> et <a href="/fr/docs/Web/CSS/background-color"><code>background-color</code></a> sur l'onglet afin que celles-ci correspondent aux couleurs du panneau.</li>
   <li>Une boucle <code>for</code> qui parcourt tous les panneaux afin de retirer toute classe qui serait présente sur eux.</li>
   <li>Une classe <code>active-panel</code> qui est appliquée sur le panneau correspondant à l'onglet. Cela permet d'appliquer la règle CSS vue plus haut qui définit <a href="/fr/docs/Web/CSS/z-index"><code>z-index</code></a> à 1, afin de faire apparaître ce panneau par-dessus les autres.</li>
  </ul>
 </li>
</ul>

<p>Et voilà pour le premier exemple. Gardez le code actuel sous la main, nous allons le modifier pour construire le deuxième exemple.</p>

<h2 id="Une_boîte_d'information_à_onglets_avec_une_position_fixe">Une boîte d'information à onglets avec une position fixe</h2>

<p>Dans ce deuxième exemple, nous repartirons du premier exemple (notre boîte d'information à onglets) et nous l'ajouterons dans le contexte d'une page web complète. De plus, nous l'ajouterons avec une position fixe afin qu'elle reste à la même position dans la fenêtre du navigateur. Ainsi, quand le contenu principal défilera, la boîte d'information restera au même endroit à l'écran. Le résultat final ressemblera à&nbsp;:</p>

<p><img alt="" src="fixed-info-box.png"></p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez voir l'exemple fini en démonstration sur la page <a href="https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html">fixed-info-box.html</a> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/fixed-info-box.html">code source</a>). N'hésitez pas à le consulter pour avoir une idée du résultat que vous allez construire.</p>
</div>

<p>Comme point de départ, vous pouvez utiliser l'exemple construit dans la première section de cet article ou enregistrer sur votre ordinateur le fichier <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html">info-box.html</a> depuis le dépôt GitHub.</p>

<h3 id="Ajouts_au_HTML">Ajouts au HTML</h3>

<p>Tout d'abord, il nous faut compléter le HTML afin de représenter le contenu principal du site web. Ajoutez la section  (<a href="/fr/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a>) suivante juste après la balise ouvrante <a href="/fr/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a> et avant la section existante&nbsp;:</p>

<pre class="brush: html">
&lt;section class="fake-content"&gt;
  &lt;h1&gt;Faux contenu&lt;/h1&gt;
  &lt;p&gt;Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.&lt;/p&gt;
  &lt;p&gt;Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.&lt;/p&gt;
  &lt;p&gt;Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.&lt;/p&gt;
  &lt;p&gt;Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.&lt;/p&gt;
  &lt;p&gt;Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.&lt;/p&gt;
  &lt;p&gt;Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.&lt;/p&gt;
  &lt;p&gt;Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.&lt;/p&gt;
  &lt;p&gt;Du contenu imaginaire. Le contenu principal de votre page web se situerait probablement ici.&lt;/p&gt;
&lt;/section&gt;
</pre>

<div class="note">
<p><strong>Note :</strong> N'hésitez pas à changer ce contenu imaginaire par du contenu concret si vous le souhaitez.</p>
</div>

<h3 id="Modifications_au_CSS_existant">Modifications au CSS existant</h3>

<p>Ensuite, adaptons le code CSS existant afin que la boîte d'information soit placée et positionnée. On change la règle ciblant <code>.info-box</code> afin de se débarrasser de <code>margin: 0 auto;</code> (on ne veut plus que la boîte soit centrée) et d'ajouter <a href="/fr/docs/Web/CSS/position"><code>position</code></a><code>: fixed;</code> avant de l'attacher au haut de la zone d'affichage du navigateur avec <a href="/fr/docs/Web/CSS/top"><code>top</code></a>.</p>

<p>Voici ce à quoi ça devrait ressembler&nbsp;:</p>

<pre class="brush: css">
.info-box {
  width: 450px;
  height: 400px;
  position: fixed;
  top: 0;
}
</pre>

<h3 id="Mettre_en_forme_le_contenu_principal">Mettre en forme le contenu principal</h3>

<p>Il nous reste alors à mettre en forme le contenu principal. Ajoutez la règle suivante à la suite de votre CSS existant&nbsp;:</p>

<pre class="brush: css">
.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}
</pre>

<p>Pour commencer, on utilise la même couleur de texte et d'arrière-plan avec <a href="/fr/docs/Web/CSS/background-color"><code>background-color</code></a>, <a href="/fr/docs/Web/CSS/color"><code>color</code></a>, et le même remplissage (<a href="/fr/docs/Web/CSS/padding"><code>padding</code></a>) que pour les panneaux de la boîte d'information. On applique ensuite une marge à gauche suffisante (<a href="/fr/docs/Web/CSS/margin-left"><code>margin-left</code></a>) pour décaler le contenu à droite afin de créer suffisamment d'espace pour la boîte d'information pour que celle-ci ne recouvre pas le reste.</p>

<p>Et voici la fin de ce deuxième exemple, espérons que le troisième vous sera tout aussi utile.</p>

<h2 id="Un_panneau_glissant_masqué">Un panneau glissant masqué</h2>

<p>Le dernier exemple que nous verrons ici est un panneau qui apparaît/disparaît en «&nbsp;glissant&nbsp;» de l'écran après avoir appuyé sur une icône. Comme mentionné plus haut, il s'agit d'un geste commun pour des dispositions mobiles où l'espace à l'écran est restreint et où on ne veut pas le gaspiller en montrant constamment un menu ou un panneau d'information à la place du contenu utile.</p>

<p>Voilà ce à quoi ressemblera notre exemple terminé&nbsp;:</p>

<p><img alt="" src="hidden-sliding-panel.png"></p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez voir l'exemple fini en démonstration sur la page <a href="https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html">hidden-info-panel.html</a> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel.html">code source</a>). N'hésitez pas à le consulter pour avoir une idée du résultat que vous allez construire.</p>
</div>

<p>Pour commencer, enregistrez le fichier <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html">hidden-info-panel-start.html</a> sur votre ordinateur. Celui-ci ne repart pas de l'exemple précédent et il faut donc utiliser un nouveau fichier. Voyons déjà ce que contient le code HTML de ce fichier&nbsp;:</p>

<pre class="brush: html">
&lt;label for="toggle"&gt;❔&lt;/label&gt;
&lt;input type="checkbox" id="toggle"&gt;
&lt;aside&gt;

  ...

&lt;/aside&gt;
</pre>

<p>Pour commencer, nous avons un élément <a href="/fr/docs/Web/HTML/Element/Label"><code>&lt;label&gt;</code></a> et un élément <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a>. Les éléments <code>&lt;label&gt;</code> sont généralement utilisés afin d'associer un libellé avec un élément de formulaire à des fins d'accessibilité (permettant par exemple à quelqu'un qui utilise un lecteur d'écran de connaître la description du contenu attendu dans ce champ de formulaire). Ici, ce libellé est associé avec la case à cocher <code>&lt;input&gt;</code> grâce aux attributs <code>for</code> et <code>id</code>.</p>

<div class="note">
<p><strong>Note :</strong> Nous avons utilisé un point d'interrogation dans notre HTML afin que celui-ci serve d'icône pour accéder à l'information&nbsp;: il représente le bouton qu'on utilisera pour afficher/masquer le panneau.</p>
</div>

<p>Ici, nous allons utiliser ces éléments pour un but légèrement différent. Un effet de bord sympathique des éléments <code>&lt;label&gt;</code> est que lorsqu'on clique sur eux, cela permet de cocher la case à cocher correspondante (comme si on avait cliqué sur la case en question). Cela a ainsi permis la fameuse <a href="https://css-tricks.com/the-checkbox-hack/">bidouille de la case à cocher</a> qui permet, sans utiliser JavaScript, de contrôler un élément en activant un bouton. L'élément que nous contrôlerons ici est l'élément <a href="/fr/docs/Web/HTML/Element/aside"><code>&lt;aside&gt;</code></a> qui suit les deux autres (nous avons laissé son contenu de côté pour des raisons de concision).</p>

<p>Dans les sections qui suivent, nous expliquerons comment cela fonctionne.</p>

<h3 id="Mettre_en_forme_les_éléments_de_formulaire">Mettre en forme les éléments de formulaire</h3>

<p>Commençons par les éléments de formulaire&nbsp;: ajoutez le CSS qui suit entre les balises <a href="/fr/docs/Web/HTML/Element/style"><code>&lt;style&gt;</code></a>&nbsp;:</p>

<pre class="brush: css">
label[for="toggle"] {
  font-size: 3rem;
  position: absolute;
  top: 4px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
</pre>

<p>La première règle met en forme <code>&lt;label&gt;</code>, on y trouve&nbsp;:</p>

<ul>
 <li>Une taille de police (<a href="/fr/docs/Web/CSS/font-size"><code>font-size</code></a>) élevée afin que l'icône soit bien visible.</li>
 <li>Une <a href="/fr/docs/Web/CSS/position"><code>position</code></a> <code>absolute</code> avec des définitions pour <a href="/fr/docs/Web/CSS/top"><code>top</code></a> et <a href="/fr/docs/Web/CSS/right"><code>right</code></a> qui permettent de positionner l'icône dans le coin supérieur droit.</li>
 <li>Une définition de <a href="/fr/docs/Web/CSS/z-index"><code>z-index</code></a> à 1 afin que, lorsque le panneau d'information est montré, il ne recouvre pas l'icône mais que celle-ci soit toujours affichée afin de pouvoir l'utiliser pour masquer le panneau d'information.</li>
 <li>Une propriété <a href="/fr/docs/Web/CSS/cursor"><code>cursor</code></a> pour changer le curseur de la souris au survol de l'icône afin que le curseur prenne la forme d'une main (la même que celle utilisée par défaut au survol des liens). Cela fournit une indication visuelle supplémentaire comme quoi l'icône fait quelque chose d'intéressant.</li>
</ul>

<p>La deuxième règle applique <a href="/fr/docs/Web/CSS/position"><code>position</code></a> <code>absolute</code> sur la case à cocher <code>&lt;input&gt;</code> et la masquer en haut de l'écran, car on ne veut pas l'afficher sur l'interface utilisateur.</p>

<h3 id="Mettre_en_forme_le_panneau">Mettre en forme le panneau</h3>

<p>Il est désormais temps de mettre en forme le panneau à proprement parler. Ajoutez la règle suivante à la fin de votre CSS&nbsp;:</p>

<pre class="brush: css">
aside {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s all;
}
</pre>

<p>Il y a plusieurs déclarations ici, voyons-les au fur et à mesure&nbsp;:</p>

<ul>
 <li>Tout d'abord, on applique une couleur d'arrière-plan et pour le texte avec <a href="/fr/docs/Web/CSS/background-color"><code>background-color</code></a> et <a href="/fr/docs/Web/CSS/color"><code>color</code></a>.</li>
 <li>Ensuite, on définit une largeur (<a href="/fr/docs/Web/CSS/width"><code>width</code></a>) fixe sur le panneau et on définit la hauteur (<a href="/fr/docs/Web/CSS/height"><code>height</code></a>) afin que celle-ci occupe la hauteur de toute la zone d'affichage.</li>
 <li>On ajoute également du remplissage (<a href="/fr/docs/Web/CSS/padding"><code>padding</code></a>) horizontal pour espacer légèrement.</li>
 <li>Ensuite, on utilise <a href="/fr/docs/Web/CSS/position"><code>position</code></a><code>: fixed;</code> sur le panneau afin qu'il apparaisse toujours à la même place, même s'il y a du contenu à faire défiler sur la page. On le colle en haut (<a href="/fr/docs/Web/CSS/top"><code>top</code></a>) de la zone d'affichage et on le positionne afin que, par défaut, il soit situé à droite (<a href="/fr/docs/Web/CSS/right"><code>right</code></a>) et en dehors de l'écran.</li>
 <li>Enfin, on applique une <a href="/fr/docs/Web/CSS/transition"><code>transition</code></a> sur l'élément. Les transitions permettent de réaliser des changements d'état de façon progressive plutôt que d'avoir un passage abrupt entre «&nbsp;actif&nbsp;» et «&nbsp;inactif&nbsp;». Ici, on veut que le panneau glisse progressivement pour apparaître à l'écran quand la case à cocher est cochée. Autrement dit, quand on clique sur l'icône du point d'interrogation (cela déclenche la bidouille qui coche la case), on veut que le panneau transitionne délicatement pour apparaître à l'écran.</li>
</ul>

<h3 id="Définir_l'état_coché">Définir l'état coché</h3>

<p>Voici le dernier fragment de CSS à ajouter, là encore à la fin&nbsp;:</p>

<pre class="brush: css">
input[type=checkbox]:checked + aside {
  right: 0px;
}
</pre>

<p>Le sélecteur utilisé ici est plutôt complexe&nbsp;: on sélectionne l'élément <code>&lt;aside&gt;</code> adjacent à l'élément <code>&lt;input&gt;</code>, uniquement lorsque ce dernier est coché (grâce à la pseudo-classe <a href="/fr/docs/Web/CSS/:checked"><code>:checked</code></a>). Lorsque c'est le cas, on définit la propriété <a href="/fr/docs/Web/CSS/right"><code>right</code></a> de l'élément <code>&lt;aside&gt;</code> à <code>0px</code>, ce qui fait que le panneau apparaît à l'écran (progressivement grâce à la transition). Cliquer sur le libellé à nouveau permettra de décocher la case et de masquer le panneau à nouveau.</p>

<p>Et voilà, une astuce sans JavaScript pour créer un interrupteur. Cela fonctionnera à partir de IE9 (les transitions fonctionneront à partir de IE10). Ce n'est pas totalement idéal&nbsp;: les éléments de formulaire n'ont pas été conçus pour ça&nbsp;; l'accessibilité n'est pas au rendez-vous non plus&nbsp;: le libellé ne peut pas recevoir le focus par défaut et on utilise des éléments de formulaire de façon non sémantique, ce qui pourrait causer des problèmes avec les lecteurs d'écran. Pour affiner cela, utiliser du JavaScript avec un lien ou un bouton serait sans doute plus approprié. Quoi qu'il en soit, cela permet d'avoir un exemple fonctionnel avec quelques astuces pour expérimenter.</p>

<h2 id="Résumé">Résumé</h2>

<p>Et voici pour notre étude sur le positionnement. Vous devriez désormais avoir une idée des mécanismes de base et une compréhension nécessaire pour appliquer ces notions afin de construire des interfaces utilisateurs. Pas d'inquiétude si vous n'avez pas tout compris immédiatement, le positionnement est un sujet plutôt avancé et il est toujours possible de revenir sur ces articles afin d'aider à la compréhension par la suite. Le prochain sujet que nous aborderons portera sur les boîtes flexibles, aussi appelées <i lang="en">flexbox</i>.</p>

<h2 id="Dans_ce_module">Dans ce module</h2>

<ul>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Introduction">Introduction aux dispositions CSS</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Normal_Flow">Flux normal</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Flexbox">Boîtes flexibles (flexbox)</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Grids">Grilles CSS</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Floats">Flottements</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Positioning">Positionnement</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">Disposition à plusieurs colonnes</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Responsive_Design">Conception adaptative (<i lang="en">responsive design</i>)</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Media_queries">Guide sur les requêtes de média (<i lang="en">media queries</i>)</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">Méthodes de disposition historiques</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">Prendre en charge les anciens navigateurs</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension">Évaluation pour la compréhension des fondamentaux des dispositions CSS</a></li>
</ul>
