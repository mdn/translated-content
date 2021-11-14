---
title: Créer de belles boîtes
slug: Learn/CSS/Howto/create_fancy_boxes
translation_of: Learn/CSS/Howto/create_fancy_boxes
original_slug: Apprendre/CSS/Comment/Créer_de_belles_boîtes
---
<p>Les boîtes CSS sont des blocs de base pour la construction des pages web. Créer des boîtes agréables à regarder est un défi complexe et intéressant. C'est un défi intéressant parce qu'on peut implémenter une idée de concept, de design, grâce à du code qui fonctionne. C'est un défi complexe car CSS possède à la fois plein de contraintes et de libertés. Dans cet article, nous allons voir de quoi il en retourne en dessinant quelques belles boîtes.</p>

<p>Avant d'attaquer la partie pratique, nous vous recommandons de lire <a href="/fr/docs/Learn/CSS/Building_blocks/The_box_model">l'article qui explique le fonctionnement du modèle de boîte CSS</a>. Bien que ce ne soit pas strictement nécessaire, il peut également être judicieux que de lire <a href="/fr/docs/conflicting/Learn/CSS/CSS_layout/Introduction">les bases de la disposition en CSS</a>.</p>

<p>D'un point de vue technique, créer de belles boîtes devient beaucoup plus simple quand on connaît les propriétés de bordure (<code>border-*</code>) et d'arrière-plan (<code>background-*</code>) et les règles qui permettent de les appliquer sur une boîte donnée. Mais au delà de cet aspect technique, il s'agit aussi de laisser libre cours à votre créativité. Cela ne se fera pas en un jour et certains développeurs web passent beaucoup temps sur ces sujets.</p>

<p>Nous allons voir beaucoup d'exemples mais tout ces exemples n'utiliseront qu'un seul fragment de HTML, aussi simple que celui-ci :</p>

<pre class="brush: html">&lt;div class="joli"&gt;Coucou ! Je veux être joli.&lt;/div&gt;</pre>

<p>Effectivement, c'est très léger comme HTML. Que peut-on faire avec ça ?</p>

<ul>
 <li>Modifier les propriétés liées au modèle de boîte : {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("border")}}, etc.</li>
 <li>Modifier les propriétés liées à son arrière-plan : {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-position")}}, {{cssxref("background-size")}}, etc.</li>
 <li>Jouer sur les pseudo-éléments : {{cssxref("::before")}} et {{cssxref("::after")}}</li>
 <li>Manipuler d'autres propriétés comme : {{cssxref("box-shadow")}}, {{cssxref("transform")}}, {{cssxref("outline")}}, etc.</li>
</ul>

<p>En fait, ce n'est pas tant le HTML que le CSS qui va fournir ici plein de possibilités. Allons-y.</p>

<h2 id="Jouer_avec_le_modèle_de_boîte">Jouer avec le modèle de boîte</h2>

<p>Le modèle de boîte, seul, permet de ne créer que des effets basiques : ajouter des bordures, créer des rectangles, etc. Ça commence à devenir intéressant quand on joue sur les propriétés avec des valeurs négatives pour <code>padding</code> et/ou <code>margin</code> ou quand on utilise un <code>border-radius</code> supérieur à la taille de la boîte.</p>

<h3 id="Créer_des_cercles">Créer des cercles</h3>

<pre class="brush: html hidden">&lt;div class="joli"&gt;Coucou ! Je veux être joli.&lt;/div&gt;</pre>

<p>Voici un exemple à la fois simple et sympa. La propriété {{cssxref("border-radius")}} est utilisée pour arrondir les angles d'une boîte. Que se passe-t-il lorsque la taille du rayon pour l'arrondi est en fait supérieure ou égale à la taille de la boîte ?</p>

<pre class="brush: css">.joli {
  /* Mieux vaut centrer le texte dans un
     cercle. */
  text-align : center;

  /* On fait attention à ce que le texte
     ne touche pas la bordure. On placera
     donc le texte avec un remplissage, ce
     qui donnera une meilleure impression
     pour le cercle. */
  padding : 1em;

  /* La bordure marquera le cercle. On
     pourrait également utiliser un arrière-
     plan car celui-ci aurait été contenu
     par border-radius */
  border : 0.5em solid black;

  /* Assurons-nous que la boîte soit carrée
     pour obtenir un cercle bien rond plutôt
     qu'une ellipse ;) */
  width  : 4em;
  height : 4em;

  /* Enfin, transformons le carré en cercle */
  border-radius: 100%;
}</pre>

<p>Et voilà comment on obtient un cercle :</p>

<p>{{EmbedLiveSample('Créer_des_cercles', '100%', '120')}}</p>

<h2 id="Les_arrière-plans">Les arrière-plans</h2>

<p>Lorsqu'on parle de boîtes plutôt jolies, les propriétés primordiales sont <a href="/fr/docs/conflicting/Web/CSS/CSS_Backgrounds_and_Borders">les propriétés <code>background-*</code></a>. Quand on manipule ces propriétés, on peut alors voir la boîte CSS comme une toile blanche qu'on pourrait peindre.</p>

<p>Avant d'aborder des exemples pratiques, revenons sur deux choses à savoir sur les arrière-plans :</p>

<ul>
 <li>On peut définir <a href="/fr/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds">plusieurs arrière-plans</a> pour une boîte. Ceux-ci s'empileront les uns sur les autres comme des couches.</li>
 <li>Les arrière-plans peuvent être des couleurs unies ou des images. Les couleurs remplissent toute la surface mais les images peuvent être mises à l'échelle et positionnées sur la boîte.</li>
</ul>

<pre class="brush: html hidden">&lt;div class="joli"&gt;Coucou ! Je veux être joli.&lt;/div&gt;</pre>

<p>Passons à la manipulation :</p>

<pre class="brush: css">.joli {
  padding : 1em;
  width: 100%;
  height: 200px;
  box-sizing: border-box;

  /* La couche la plus basse sera
     peinte avec un gris clair uni */
  background-color: #E4E4D9;

  /* Ensuite on applique des gradients
     linéaires les uns sur les autres
     pour créer un effet de bandes colorées.
     Comme vous pouvez le voir, les gradients
     sont considérés et manipulés comme des
     images */
  background-image: linear-gradient(175deg, rgba(0,0,0,0) 95%, #8da389 95%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 95%, #8da389 95%),
                    linear-gradient(175deg, rgba(0,0,0,0) 90%, #b4b07f 90%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 92%, #b4b07f 92%),
                    linear-gradient(175deg, rgba(0,0,0,0) 85%, #c5a68e 85%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 89%, #c5a68e 89%),
                    linear-gradient(175deg, rgba(0,0,0,0) 80%, #ba9499 80%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 86%, #ba9499 86%),
                    linear-gradient(175deg, rgba(0,0,0,0) 75%, #9f8fa4 75%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 83%, #9f8fa4 83%),
                    linear-gradient(175deg, rgba(0,0,0,0) 70%, #74a6ae 70%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 80%, #74a6ae 80%);
}</pre>

<p>{{EmbedLiveSample('Les_arrière-plans', '100%', '200')}}</p>

<div class="note">
<p><strong>Note :</strong> Les gradients peuvent être utilisés pour créer une myriade d'effets. Vous pouvez par exemple consulter <a href="https://lea.verou.me/css3patterns/">les excellents motifs CSS de Lea Verou</a>. Attention cependant, en termes de performance, les gradients peuvent avoir un impact non négligeable. Si vous souhaitez explorer les gradients, n'hésitez pas à lire <a href="/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients">notre article dédié</a>.</p>
</div>

<h2 id="Les_pseudo-éléments">Les pseudo-éléments</h2>

<p>Lorsqu'on met en forme une boîte, on aurait parfois envie d'avoir plus de boîtes pour composer une mise en forme plus complexe et plus belle. La plupart du temps, cela peut nous amener à polluer le DOM en ajoutant des éléments HTML supplémentaires, uniquement pour la mise en forme. Bien que ce soit parfois nécessaire, c'est considéré comme une mauvaise pratique. Pour éviter cela, on peut utiliser <a href="/fr/docs/Web/CSS/Pseudo-elements">les pseudo-éléments CSS</a>.</p>

<h3 id="Un_nuage">Un nuage</h3>

<pre class="brush: html hidden">&lt;div class="joli"&gt;Coucou ! Je veux être joli.&lt;/div&gt;</pre>

<p>Voici un exemple qui illustre comment transformer la boîte en nuage :</p>

<pre class="brush: css">.joli {
  text-align: center;

  /* On utilise la même astuce que pour
     cercles vus avant */
  box-sizing: border-box;
  width     : 150px;
  height    : 150px;
  padding   : 80px 1em 0 1em;

  /* On fait de la place pour les « oreilles »
     du nuage */
  margin    : 0 100px;

  position: relative;

  background-color: #A4C9CF;

  /* Enfin, le cercle n'est pas tout à fait complet
     car on veut que la base soit plate.
     Vous pouvez adapter ici comme bon vous semble
     si vous souhaitez que la base ne soit pas
     linéaire */
  border-radius: 100% 100% 0 0;
}

/* Voici les styles qu'on appliquera aux deux
   pseudo-éléments ::before et ::after. */
.joli::before,
.joli::after {
  /* Cette déclaration est nécessaire pour afficher
     les pseudo-éléments même si leur valeur est la
     chaîne vide */
  content: '';

  /* On positionne les pseudo-éléments à droite et à
     gauche de la boîte mais toujours en bas */
  position: absolute;
  bottom  : 0;

  /* On s'assure que les pseudo-éléments passent sous
     le contenu qu'il y aurait. */
  z-index : -1;

  background-color: #A4C9CF;
  border-radius: 100%;
}

.joli::before {
  /* Voici la taille pour l'oreille gauche
     du nuage */
  width  : 125px;
  height : 125px;

  /* On la décale un peu à gauche */
  left    : -80px;

  /* Pour que le bas du nuage reste droit, il
     faut s'assurer que le coin en bas à gauche
     soit bien un angle droit. */
  border-bottom-right-radius: 0;
}

.joli::after {
  /* Voici la taille pour l'oreille droite */
  width  : 100px;
  height : 100px;

  /* On la décale un peu à droite */
  right   : -60px;

 /* Pour que le bas du nuage reste droit, il
    faut s'assurer que le coin en bas à droite
    soit bien un angle droit. */
  border-bottom-left-radius: 0;
}</pre>

<p>{{EmbedLiveSample('Un_nuage', '100%', '160') }}</p>

<h3 id="Une_citation">Une citation</h3>

<p>Pour prendre un exemple plus concret d'utilisation des pseudo-éléments : la mise en forme des éléments HTML {{HTMLElement('blockquote')}}. Prenons un exemple avec un fragment HTML différent, qui nous permettra en outre d'aborder les aspects de localisation :</p>

<pre class="brush: html">&lt;blockquote&gt;People who think they know everything are a great annoyance to those of us who do. &lt;i&gt;Isaac Asimov&lt;/i&gt;&lt;/blockquote&gt;
&lt;blockquote lang="fr"&gt;L'intelligence, c'est comme les parachutes, quand on n'en a pas, on s'écrase. &lt;i&gt;Pierre Desproges&lt;/i&gt;&lt;/blockquote&gt;</pre>

<p>Voici la feuille de style que nous allons utiliser :</p>

<pre class="brush: css">blockquote {
  min-height: 5em;
  padding   : 1em 4em;
  font      : 1em/150% sans-serif;
  position  : relative;
  background-color: lightgoldenrodyellow;
}

blockquote::before,
blockquote::after {
  position: absolute;
  height  : 3rem;
  font    : 6rem/100% Georgia, "Times New Roman", Times, serif;
}

blockquote::before {
  content: '“';
  top    : 0.3rem;
  left   : 0.9rem;
}

blockquote::after {
  content: '”';
  bottom : 0.3rem;
  right  : 0.8rem;
}

blockquote:lang(fr)::before {
  content: '«';
  top    : -1.5rem;
  left   : 0.5rem;
}

blockquote:lang(fr)::after {
  content: '»';
  bottom : 2.6rem;
  right  : 0.5rem
}

blockquote i {
  display   : block;
  font-size : 0.8em;
  margin-top: 1rem;
  text-style: italic;
  text-align: right;
}</pre>

<p>{{EmbedLiveSample('Une_citation', '100%', '300')}}</p>

<h2 id="Assemblage">Assemblage</h2>

<p>En fusionnant tout ces aspects, il est possible de créer des effets somptueux. Au fur et à mesure, cela s'équilibrera entre un défi technique et un défi créatif. Pour conclure, par exemple, on peut créer des illusions d'optique :</p>

<pre class="brush: html hidden">&lt;div class="joli"&gt;Coucou ! Je veux être joli.&lt;/div&gt;</pre>

<p>Nous allons ici créer un effet d'ombre portée. La propriété {{cssxref("box-shadow")}} permet d'obtenir un effet basique mais en manipulant les pseudo-éléments et la propriété {{cssxref("transform")}}, on peut obtenir un résultat plus naturel.</p>

<pre class="brush: css">.joli {
  position: relative;
  background-color: #FFC;
  padding: 2rem;
  text-align: center;
  max-width: 200px;
}

.joli::before {
  content: "";

  position : absolute;
  z-index  : -1;
  bottom   : 15px;
  right    : 5px;
  width    : 50%;
  top      : 80%;
  max-width: 200px;

  box-shadow: 0px 13px 10px black;
  transform: rotate(4deg);
}</pre>

<p>{{EmbedLiveSample("Assemblage", '100%', '100')}}</p>

<h2 id="La_suite">La suite</h2>

<p>Pour de nombreux cas, on utilisera des couleurs et des images d'arrière-plans pour composer de belles boîtes. Nous vous invitons donc <a href="/fr/docs/Apprendre/CSS/Comment/Gérer_les_couleurs_et_les_images">à approfondir la gestion des couleurs et des images</a>. Par ailleurs, rien ne sert de créer de belles boîtes si celles-ci ne font pas partie d'une disposition bien organisée. Aussi, si vous ne l'avez pas encore lu, nous vous conseillons de parcourir <a href="/fr/docs/conflicting/Learn/CSS/CSS_layout/Introduction">les bases de la disposition</a>.</p>
