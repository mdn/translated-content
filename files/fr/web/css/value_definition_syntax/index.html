---
title: Syntaxe de définition des valeurs
slug: Web/CSS/Value_definition_syntax
tags:
  - CSS
  - Débutant
  - Reference
translation_of: Web/CSS/Value_definition_syntax
original_slug: Web/CSS/Syntaxe_de_définition_des_valeurs
---
<div>{{CSSRef}}</div>

<p><strong>La syntaxe de définition des valeurs CSS</strong> est une grammaire formelle qui définit les règles pour créer des règles CSS valides. En plus de ces règles, il peut y avoir des contraintes sémantiques (ex. un nombre doit être positif pour une propriété donnée).</p>

<p>La syntaxe de définition décrit les valeurs qui sont permises et les interactions entre ces valeurs. Un composant peut-être un mot-clé, un littéral, une valeur d'un type donné ou une autre propriété CSS.</p>

<h2 id="Les_types_de_composants">Les types de composants</h2>

<h3 id="Les_mots-clés">Les mots-clés</h3>

<h4 id="Les_mots-clés_génériques">Les mots-clés génériques</h4>

<p>Un mot-clé avec une signification prédéfinie, qui peut apparaître littéralement, sans apostrophes ou guillemets (ex. <code>auto</code>, <code>smaller</code> ou <code>ease-in</code>).</p>

<h4 id="inherit_initial_et_unset"><code>inherit</code>, <code>initial</code> et <code>unset</code></h4>

<p>Toutes propriétés CSS acceptent les mots-clés <code>inherit</code>, <code>initial</code> et <code>unset</code> définies par la spécification CSS. Ces mots-clés ne sont pas listés dans la définition de la syntaxe et sont définies implicitement.</p>

<h3 id="Les_littéraux">Les littéraux</h3>

<p>En CSS, quelques caractères peuvent apparaître directement (ex. la barre oblique « / » ou la virgule « , ») et sont utilisés dans les définitions d'une propriété pour séparer ses composantes. La virgule est généralement utilisée pour séparer des valeurs d'une liste ou des paramètres d'une fonction. La barre oblique sépare des composantes sémantiquement différentes mais avec une syntaxe similaire. Généralement, la barre oblique est utilisée dans les propriétés raccourcies pour séparer les composants du même type mais qui sont associés aux différentes propriétés détaillées.</p>

<p>Ces deux symboles sont utilisés tels quels dans la définition d'une valeur.</p>

<h3 id="Les_types_de_donnée">Les types de donnée</h3>

<h4 id="Les_types_de_donnée_simples">Les types de donnée simples</h4>

<p>Certains types de donnée sont utilisés pour différentes propriétés et sont définis pour l'ensemble des valeurs de la spécification. Ce sont les types de donnée simples et sont représentés par leur nom encadré par des chevrons (le type <code>angle</code> est donc représenté par : {{ cssxref("&lt;angle&gt;") }}, {{cssxref("&lt;string&gt;")}}, et ainsi de suite).</p>

<h4 id="Les_types_de_donnée_non_terminaux">Les types de donnée non terminaux</h4>

<p>D'autres types de donnée, moins utilisés, sont appelés types de donné non-terminaux et sont également encadrés par des chevrons.</p>

<p>Les types de donnée non terminaux sont de deux sortes :</p>

<ul>
 <li>Les types de donnée qui utilisent le même nom qu'une propriété. Dans ce cas, le type de donnée correspond à l'ensemble des valeurs utilisé par la propriété. Ceux-ci sont généralement utilisés dans les définitions des propriétés raccourcies.</li>
 <li>Les types de donnée dont le nom de n'est pas celui d'une propriété. Ces types de donnée sont très proches des types simples. La seule différence est l'emplacement de leur définition : dans ce cas, la définition est généralement très proche de la définition de la propriété qui les utilise.</li>
</ul>

<h2 id="Les_combinateurs">Les combinateurs</h2>

<h3 id="Les_crochets">Les crochets</h3>

<p>Les crochets permettent de regrouper plusieurs entités, combinateurs et multiplicateurs pour les transformer en un seul composant. Cela permet de grouper les composants afin d' appliquer des règles de priorités (supérieures aux règles de précédence).</p>

<pre class="syntaxbox">bold [ thin &amp;&amp; &lt;length&gt; ]</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>bold thin 2vh</code></li>
 <li><code>bold 0 thin</code></li>
 <li><code>bold thin 3.5em</code></li>
</ul>

<p>Mais ne correspondra pas à :</p>

<ul>
 <li><code>thin bold 3em</code> car <code>bold</code> est juxtaposé au composant défini entre les crochets alors qu'il doit apparaître avant.</li>
</ul>

<h3 id="Juxtaposition">Juxtaposition</h3>

<p>Si on place plusieurs mots-clés, littéraux ou types de donnée les uns à la suite des autres, séparés par un ou plusieurs blancs, cela indique que tous les composants sont <strong>obligatoires et doivent apparaître dans cet ordre</strong>.</p>

<pre class="syntaxbox">bold &lt;length&gt; , thin
</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>bold 1em, thin</code></li>
 <li><code>bold 0, thin</code></li>
 <li><code>bold 2.5cm, thin</code></li>
 <li><code>bold 3vh, thin</code></li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>thin 1em, bold</code> car les entités ne sont pas dans l'ordre indiqué</li>
 <li><code>bold 1em thin</code> car les entités sont obligatoires et la virgule qui est un littéral doit être présente</li>
 <li><code>bold 0.5ms, thin</code> car les valeurs <code>ms</code> ne sont pas des valeurs du type {{cssxref("&lt;length&gt;")}}</li>
</ul>

<h3 id="Double_esperluette">Double esperluette</h3>

<p>Lorsqu'on sépare deux ou plusieurs composants par une double esperluette, cela signifie que <strong>toutes les entités sont obligatoires mais peuvent apparaître dans n'importe quel ordre</strong>.</p>

<pre class="syntaxbox">bold &amp;&amp; &lt;length&gt;
</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>bold 1em</code></li>
 <li><code>bold 0</code></li>
 <li><code>2.5cm bold</code></li>
 <li><code>3vh bold</code></li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>bold</code> car les deux composants doivent apparaître.</li>
 <li><code>bold 1em bold</code> car les deux composants doivent apparaître exactement une fois.</li>
</ul>

<div class="note">
  <p><strong>Note :</strong> La juxtaposition est prioritaire par rapport à la double esperluette. <code>bold thin &amp;&amp; &lt;length&gt;</code> est donc équivalent à <code>[ </code><code>bold thin ] &amp;&amp; &lt;length&gt;</code>. Il décrit <code>bold thin &lt;length&gt;</code> ou <code>&lt;length&gt;</code><code> bold thin</code> mais pas <code>bold &lt;length&gt;</code><code> thin</code>.</p>
</div>

<h3 id="Double_barre">Double barre</h3>

<p>Lorsque deux ou plusieurs composants sont séparés par une double barre verticale <code>||</code>. Cela signifie qu'au moins un composant doit <strong>être présent et qu'ils peuvent apparaître dans n'importe quel ordre</strong>. Généralement, ceci est utilisé pour définir les différentes valeurs d'une propriété raccourcie.</p>

<pre class="syntaxbox">&lt;'border-width'&gt; || &lt;'border-style'&gt; || &lt;'border-color'&gt;
</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>1em solid blue</code></li>
 <li><code>blue 1em</code></li>
 <li><code>solid 1px yellow</code></li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>blue yellow</code> car le composant doit apparaître au plus une fois.</li>
 <li><code>bold</code> car le mot-clé n'est pas permis pour aucune valeur de l'entité.</li>
</ul>

<div class="note">
  <p><strong>Note :</strong> La double esperluette est prioritaire par rapport à la double barre. <code>bold || thin &amp;&amp; &lt;length&gt;</code> est équivalent à <code>bold || [ thin &amp;&amp; &lt;length&gt; ]</code> qui décrit <code>bold</code>, <code>thin</code> <code>&lt;length&gt;</code>, <code>bold thin</code> <code>&lt;length&gt;</code>, ou <code>thin &lt;length&gt; bold</code> mais pas <code>&lt;length&gt;</code><code> bold thin</code> car bold, s'il est présent doit apparaître avant <code>thin &amp;&amp; &lt;length&gt;</code>.</p>
</div>

<h3 id="La_barre_verticale">La barre verticale</h3>

<p>Lorsqu'on sépare deux entités par une barre verticale. Cela signifie que les différentes options sont exclusives : <strong>seule une des options doit être présente</strong>. Généralement, cela permet de séparer différents mots-clés possible.</p>

<pre class="syntaxbox">&lt;percentage&gt; | &lt;length&gt; | left | center | right | top | bottom</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>3%</code></li>
 <li><code>0</code></li>
 <li><code>3.5em</code></li>
 <li><code>left</code></li>
 <li><code>center</code></li>
 <li><code>right</code></li>
 <li><code>top</code></li>
 <li><code>bottom</code></li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>center 3%</code> car seul un seul des composants doit être présent.</li>
 <li><code>3em 4.5em</code> car un composant doit être présent au plus une seule fois.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> La double barre verticale est prioritaire par rapport à la simple barre verticale. Ainsi <code>bold | thin || &lt;length&gt;</code> est équivalent à <code>bold | [ thin || &lt;length&gt; ]</code> qui décrit <code>bold</code>, <code>thin</code>, <code>&lt;length&gt;</code>, <code>&lt;length&gt; thin</code> ou <code>thin &lt;length&gt; </code>mais pas <code>bold &lt;length&gt;</code> car seule entité peut être présente.</p>
</div>

<h2 id="Les_multiplicateurs">Les multiplicateurs</h2>

<p>Un multiplicateur est un signe qui indique nombre de fois qu'une entité peut être répétée. Sans aucun multiplicateur, une entité doit apparaître exactement une fois.</p>

<h3 id="L'astérisque_(*)">L'astérisque (<code>*</code>)</h3>

<p>L'astérisque indique qu'une entité peut apparaître <strong>zéro, une ou plusieurs fois</strong>.</p>

<pre class="syntaxbox">bold smaller*</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>bold</code></li>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code> and so on.</li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>smaller</code> car <code>bold</code> est juxtaposé et doit apparaître avant le mot-clé <code>smaller</code>.</li>
</ul>

<h3 id="Plus_()">Plus (<code>+</code>)</h3>

<p>Le multiplicateur « plus » indique que l'entité peut apparaître <strong>une ou plusieurs fois</strong>.</p>

<pre class="syntaxbox">bold smaller+</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code> and so on.</li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>bold</code> car <code>smaller</code> doit apparaître au moins une fois</li>
 <li><code>smaller</code> car <code>bold</code> est juxtaposé et doit apparaitre avant <code>smaller</code>.</li>
</ul>

<h3 id="Le_point_d'interrogation_()">Le point d'interrogation (<code>?</code>)</h3>

<p>Le point d'interrogation indique que l'entité est optionnelle et doit apparaître<strong> zéro ou une fois</strong>.</p>

<pre class="syntaxbox">bold smaller?</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>bold</code></li>
 <li><code>bold smaller</code></li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>bold smaller smaller</code> car <code>smaller</code> doit apparaître au plus une fois</li>
 <li><code>smaller</code> car <code>bold</code> est juxtaposé et doit apparaître avant le mot-clé <code>smaller</code> s'il est présent.</li>
</ul>

<h3 id="Les_accolades_(_)">Les accolades (<code>{ }</code>)</h3>

<p>Les accolades encadrent deux entiers A et B, séparés par une virgule et indiquent que l'entité <strong>doit apparaître au moins A fois et au plus B fois</strong>.</p>

<pre class="syntaxbox">bold smaller{1,3}</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code></li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>bold</code> car <code>smaller</code> doit apparaître au moins une fois.</li>
 <li><code>bold smaller smaller smaller smaller</code> car <code>smaller</code> doit apparaître au plus trois fois.</li>
 <li><code>smaller</code> car <code>bold</code> est juxtaposé et doit apparaître avant le mot-clé <code>smaller</code>.</li>
</ul>

<h3 id="Dièse_()">Dièse (<code>#</code>)</h3>

<p>Le symbole dièse indique qu'une entité doit être répétée <strong>une ou plusieurs fois et que chaque occurrence est séparée par une virgule</strong>.</p>

<pre class="syntaxbox">bold smaller#</pre>

<p>Cet exemple pourra illustrer les valeurs suivantes :</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller, smaller</code></li>
 <li><code>bold smaller, smaller, smaller</code> and so on.</li>
</ul>

<p>Mais il ne correspondra pas à :</p>

<ul>
 <li><code>bold</code> car <code>smaller</code> doit apparaître au moins une fois.</li>
 <li><code>bold smaller smaller smaller</code> car les différentes occurrences de <code>smaller</code> doivent être séparées par des virgules.</li>
 <li><code>smaller</code> car <code>bold</code> est juxtaposé et doit apparaître avant toute occurrence du mot-clé <code>smaller</code>.</li>
</ul>

<h3 id="Point_d'exclamation_(!)">Point d'exclamation (<code>!</code>)</h3>

<p>Le multiplicateur <em>point d'exclamation</em> est utilisé après un groupe pour indiquer que celui-ci ne doit produire qu'une seule valeur. Ici, même si la grammaire des éléments du groupe indiquent que tous les composants peuvent être absents, il faut qu'il y ait au moins un composant présent.</p>

<pre class="syntaxbox">[ bold? smaller? ]!
</pre>

<p>Cet exemple correspondra aux valeurs suivantes :</p>

<ul>
 <li><code>bold</code></li>
 <li><code>smaller</code></li>
 <li><code>bold smaller</code></li>
</ul>

<p>Mais pas à :</p>

<ul>
 <li>ni <code>bold</code> ni <code>smaller</code>, car il faut au moins l'un des deux.</li>
 <li><code>smaller bold</code>, car <code>bold</code> est juxtaposé et doit apparaître avant le mot-clé <code>smaller</code>.</li>
 <li><code>bold smaller bold</code>, car <code>bold</code> et <code>smaller</code> doivent apparaître au plus une fois.</li>
</ul>

<h2 id="Récapitulatif">Récapitulatif</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Signe</th>
   <th scope="col">Nom</th>
   <th scope="col">Description</th>
   <th scope="col">Exemple</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th colspan="4">Combinateurs</th>
  </tr>
  <tr>
   <td> </td>
   <td>Juxtaposition</td>
   <td>Les composants sont obligatoires et doivent apparaître dans cet ordre.</td>
   <td><code>solid &lt;length&gt;</code></td>
  </tr>
  <tr>
   <td><code>&amp;&amp;</code></td>
   <td>Double esperluette</td>
   <td>Les composants sont obligatoires mais peuvent apparaître dans n'importe quel ordre.</td>
   <td><code>&lt;length&gt; &amp;&amp; &lt;string&gt;</code></td>
  </tr>
  <tr>
   <td><code>||</code></td>
   <td>Double barre</td>
   <td>Au moins un des composants doit être présent et ils peuvent apparaître dans n'importe quel ordre.</td>
   <td><code>&lt;'border-image-outset'&gt; || &lt;'border-image-slice'&gt;</code></td>
  </tr>
  <tr>
   <td><code>|</code></td>
   <td>Barre simple</td>
   <td>Un et un seul des composants doit être présent.</td>
   <td><code>smaller | small | normal | big | bigger</code></td>
  </tr>
  <tr>
   <td><code>[ ]</code></td>
   <td>Crochets</td>
   <td>Les composants peuvent être groupés pour avoir une priorité supérieure aux règles précédentes.</td>
   <td><code>bold [ thin &amp;&amp; &lt;length&gt; ]</code></td>
  </tr>
  <tr>
   <th colspan="4">Multiplicateurs</th>
  </tr>
  <tr>
   <td> </td>
   <td>Aucun multiplicateur</td>
   <td>Exactement 1 fois.</td>
   <td><code>solid</code></td>
  </tr>
  <tr>
   <td><code>*</code></td>
   <td>Astérisque</td>
   <td>0 ou plus.</td>
   <td><code>bold smaller*</code></td>
  </tr>
  <tr>
   <td><code>+</code></td>
   <td>Signe plus</td>
   <td>1 ou plus.</td>
   <td><code>bold smaller+</code></td>
  </tr>
  <tr>
   <td><code>?</code></td>
   <td>Point d'interrogation</td>
   <td>0 ou 1 fois (autrement dit, la valeur est optionnelle<em>)</em></td>
   <td><code>bold smaller?</code></td>
  </tr>
  <tr>
   <td><code>{A,B}</code></td>
   <td>Accolades</td>
   <td>Au moins <code>A</code> fois et au plus <code>B</code> fois.</td>
   <td><code>bold smaller{1,3}</code></td>
  </tr>
  <tr>
   <td><code>#</code></td>
   <td>Dièse</td>
   <td>1 ou plus de fois mais chaque occurrence doit être séparée d'une autre par une virgule.</td>
   <td><code>bold smaller#</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Values", "#value-defs", "Value definition syntax")}}</td>
   <td>{{Spec2('CSS3 Values')}}</td>
   <td>Ajout du multiplicateur avec le dièse.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "about.html#value-defs", "Value definition syntax")}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Ajout de la double esperluette.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#notation-for-property-values", "Value definition syntax")}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>
