---
title: Sélecteurs CSS
slug: Learn/CSS/Building_blocks/Selectors
translation_of: Learn/CSS/Building_blocks/Selectors
original_slug: Apprendre/CSS/Building_blocks/Selectors
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}</div>

<p>Dans {{Glossary("CSS")}}, les sélecteurs sont utilisés pour cibler les éléments {{glossary("HTML")}} à mettre en forme dans nos pages web. CSS propose une grande diversité de sélecteurs, offrant ainsi une précision très fine dans la façon de cibler les éléments. Dans cet article nous explorerons en détails le fonctionnement de ces différents types.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis&nbsp;:</th>
   <td>Notions de base en l'informatique, <a href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software">logiciels de base installés</a>, <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files">savoir manipuler des fichiers</a>, connaissance de base de HTML (cf. <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Introduction à HTML</a>.) et une première idée du fonctionnement de CSS (voir <a href="/fr/docs/Learn/CSS/First_steps">premiers pas en CSS</a>.)</td>
  </tr>
  <tr>
   <th scope="row">Objectif&nbsp;:</th>
   <td>Voir dans les détails comment les sélecteurs CSS fonctionnent.</td>
  </tr>
 </tbody>
</table>

<h2 id="what_is_a_selector">Qu'est-ce qu'un sélecteur ?</h2>

<p>Vous les avez déjà rencontrés : toute règle CSS commence par un sélecteur. Un sélecteur est une expression qui indique au navigateur à quelle entité HTML s'applique la règle CSS correspondante. Le ou les éléments ciblés par le sélecteur sont le <em>sujet</em> de ce sélecteur.</p>

<p><img alt="Du code où h1 est surligné." src="selector.png"></p>

<p>Vous avez rencontré plusieurs sélecteurs dans des articles précédents, vous avez vu que les sélecteurs ont différentes façons de cibler le document HTML — on peut par exemple cibler les éléments <code>h1</code>, ou la classe <code>.special</code>.</p>

<p>En CSS, les sélecteurs sont définis dans la spécification CSS Selectors ; comme tout le reste de CSS, le bon fonctionnement des sélecteurs dépend de la prise en charge par les navigateurs. La plupart des sélecteurs que vous rencontrerez sont définis dans la <a href="https://www.w3.org/TR/selectors-3/">spécification de niveau 3 pour les sélecteurs</a>, une spécification mature, aussi la prise en charge par les navigateurs est excellente.</p>

<h2 id="selector_lists">Listes de sélecteurs</h2>

<p>Quand un groupe de déclarations CSS s'applique à plusieurs éléments distincts, on peut combiner les sélecteurs individuels en une liste. Par exemple, si j'ai le même CSS pour un <code>h1</code> et pour une classe <code>.special</code>, je pourrais écrire deux règles :</p>

<pre class="brush: css">h1 {
  color: blue;
}

.special {
  color: blue;
}</pre>

<p>ou bien une seule règle en combinant les sélecteurs, séparés par une virgule :</p>

<pre class="brush: css">h1, .special {
  color: blue;
}</pre>

<p>L'espace est valide avant ou après la virgule. Vous trouverez peut-être la version suivante plus lisible avec un sélecteur par ligne :</p>

<pre class="brush: css">h1,
.special {
  color: blue;
}</pre>

<p>Dans l'exemple live ci-dessous, essayez de combiner les sélecteurs dont les déclarations sont identiques. Le rendu visuel devrait être inchangé.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}</p>

<p>Quand on regroupe ainsi des sélecteurs, si l'un des sélecteurs est invalide la règle toute entière sera ignorée.</p>

<p>Dans l'exemple suivant, la règle avec le sélecteur de classe invalide sera ignorée, alors que le <code>h1</code> sera mis en forme comme prévu.</p>

<pre class="brush: css">h1 {
  color: blue;
}

..special {
  color: blue;
}</pre>

<p>En combinant les sélecteurs, la règle est considérée invalide et donc ignorée : ni <code>h1</code> ni les éléments de classe <code>.special</code> ne seront mis en forme.</p>

<pre class="brush: css">h1, ..special {
  color: blue;
}</pre>

<h2 id="types_of_selectors">Types de sélecteurs</h2>

<p>On peut regrouper les sélecteurs en différents groupes ; classer les sélecteurs par type vous aidera à identifier l'outil pertinent pour chaque situation. Dans les sections suivantes, nous passons en revue ces différents types de sélecteurs.</p>

<h3 id="type_class_and_id_selectors">Sélecteurs de type, de classe, et d'ID</h3>

<p>Ce groupe inclut les sélecteurs ciblant les élements HTML tels que <code>&lt;h1&gt;</code> :</p>

<pre class="brush: css">h1 { }</pre>

<p>On trouve aussi les sélecteurs ciblant une classe :</p>

<pre class="brush: css">.box { }</pre>

<p>ou un ID :</p>

<pre class="brush: css">#unique { }</pre>

<h3 id="attribute_selectors">Sélecteurs d'attribut</h3>

<p>Ce groupe de sélecteurs offre différents mécanismes pour cibler des éléments en fonction de la présence d'un attribut donné pour un élément donné :</p>

<pre class="brush: css">a[title] { }</pre>

<p>Ou même de baser la sélection sur la présence d'un attribut avec une valeur bien précise :</p>

<pre class="brush: css">a[href="https://example.com"] { }</pre>

<h3 id="pseudo-classes_and_pseudo-elements">Pseudo-classes et pseudo-éléments</h3>

<p>Ce groupe de sélecteurs inclut les pseudo-classes, qui ciblent des éléments dans un état donné. Par exemple, la pseudo-classe <code>:hover</code> sélectionne un élément seulement s'il est survolé par le pointeur de la souris :</p>

<pre class="brush: css">a:hover { }</pre>

<p>Ce groupe inclut aussi les pseudo-éléments, qui ciblent une certaine partie d'un élément plutôt que l'élément tout entier. Par exemple, <code>::first-line</code> sélectionne la première ligne d'un texte contenu dans un élément (un <code>&lt;p&gt;</code> dans l'exemple ci-dessous), comme si la première ligne du texte mis en forme était placée entre <code>&lt;span&gt;</code> et qu'après coup on appliquait un style sur cet élément.</p>

<pre class="brush: css">p::first-line { }</pre>

<h3 id="combinators">Combinateurs</h3>

<p>Dans la dernière catégorie, on combine les sélecteurs pour cibler plus finement les éléments dans nos documents. L'exemple suivant sélectionne les paragraphes enfants directs de <code>&lt;article&gt;</code> grâce au combinateur enfant (<code>&gt;</code>) :</p>

<pre class="brush: css">article &gt; p { }</pre>

<h2 id="next_steps">À faire ensuite</h2>

<p>Vous pouvez consulter ci-dessous le tableau de référence des sélecteurs avec des liens directs vers les différents types de sélecteurs dans cette section <em>Apprendre</em> ou dans d'autres rubriques de MDN ; vous pouvez aussi suivre le fil de ce cours et en apprendre plus sur les <a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">sélecteurs de type, de classe, et d'ID</a>.</p>

<p>{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}</p>

<h2 id="reference_table_of_selectors">Table de référence des sélecteurs</h2>

<p>Le tableau ci-dessous donne un aperçu des sélecteurs disponibles, ainsi que des liens vers les pages qui vous montreront comment utiliser chaque type de sélecteur. J'ai également inclus un lien vers la page MDN pour chaque sélecteur où vous pouvez vérifier les informations sur la prise en charge par les navigateurs. Pour la suite de ce cours, ou dans vos expériences CSS à venir, cette table sera votre référence quand vous rechercherez des informations sur les sélecteurs.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Sélecteur</th>
   <th scope="col">Exemple</th>
   <th scope="col">Tutoriel CSS</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Type_selectors">Sélecteur de type</a></td>
   <td><code>h1 { }</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">Sélecteurs de type</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Universal_selectors">Sélecteur universel</a></td>
   <td><code>* { }</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#the_universal_selector">The universal selector</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Class_selectors">Sélecteur de classe</a></td>
   <td><code>.box { }</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors">Class selectors</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/ID_selectors">Sélecteur d'ID</a></td>
   <td><code>#unique { }</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#id_selectors">ID selectors</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Attribute_selectors">Sélecteur d'attribut</a></td>
   <td><code>a[title] { }</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Attribute selectors</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Pseudo-classes">Pseudo-class selectors</a></td>
   <td><code>p:first-child { }</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class">Pseudo-classes</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Pseudo-elements">Pseudo-element selectors</a></td>
   <td><code>p::first-line { }</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element">Pseudo-elements</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Descendant_combinator">Sélecteur descendant</a></td>
   <td><code>article p</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators#descendant_selector">Descendant combinator</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Child_combinator">Sélecteur enfant</a></td>
   <td><code>article &gt; p</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators#child_combinator">Child combinator</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/Adjacent_sibling_combinator">Sélecteur de frère adjacent</a></td>
   <td><code>h1 + p</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators#adjacent_sibling">Adjacent sibling</a></td>
  </tr>
  <tr>
   <td><a href="/fr/docs/Web/CSS/General_sibling_combinator">Sélecteur de frère général</a></td>
   <td><code>h1 ~ p</code></td>
   <td><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators#general_sibling">General sibling</a></td>
  </tr>
 </tbody> 
</table>

<h2 id="in_this_module">Dans ce module</h2>

<ol>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Cascade and inheritance</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors">CSS selectors</a>
  <ul>
   <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">Type, class, and ID selectors</a></li>
   <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Attribute selectors</a></li>
   <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">Pseudo-classes and pseudo-elements</a></li>
   <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Combinators</a></li>
  </ul>
 </li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/The_box_model">The box model</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">Backgrounds and borders</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">Handling different text directions</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Overflowing_content">Overflowing content</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Values_and_units">Values and units</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">Sizing items in CSS</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements">Images, media, and form elements</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Styling_tables">Styling tables</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS">Debugging CSS</a></li>
 <li><a href="/fr/docs/Learn/CSS/Building_blocks/Organizing">Organizing your CSS</a></li>
</ol>
