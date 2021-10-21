---
title: Le modèle de boîte
slug: Learn/CSS/Building_blocks/The_box_model
translation_of: Learn/CSS/Building_blocks/The_box_model
original_slug: Apprendre/CSS/Building_blocks/Le_modele_de_boite
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}</div>

<p>En CSS, tout élément est inclus dans une boîte ("<em>box</em>" en anglais). Comprendre le fonctionnement de ces boîtes est essentiel pour maîtriser la mise en page CSS ainsi que le positionement des éléments d'une page HTML. Dans cette leçon, nous verrons en détails le <em>Modèle de Boîtes CSS</em> - son fonctionnement ainsi que sa terminologie - pour vous permettre de réaliser des mises en pages plus complexes.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis&nbsp;:</th>
   <td>Compétences informatique basiques, <a href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Logiciels de base installés</a>, connaissance simple en <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files">manipulation de fichiers</a>, les bases du HTML (voir <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Introduction au HTML</a>), et une esquisse du fonctionnement du CSS (voir <a href="/fr/docs/Learn/CSS/First_steps">premiers pas en CSS</a>).</td>
  </tr>
  <tr>
   <th scope="row">Objectif&nbsp;:</th>
   <td>Apprendre les principes du Modèle de Boîte en CSS, ce qui constitue le Modèle de Boîte et comment passer au modèle alternatif.</td>
  </tr>
 </tbody>
</table>

<h2 id="block_and_inline_boxes">Les boîtes en ligne et boîte de bloc</h2>

<p>En CSS, il existe deux type de boîtes : les boîtes <strong>en bloc</strong> ("<em>block boxes</em>" en anglais) et les boîtes <strong>en ligne</strong> (<em>"inline boxes"</em> en anglais ou également « boîtes en incise » en français). Ces deux qualifications renvoient au comportement de la boîte au sein de la page et vis-à-vis des autres boîtes :</p>

<p>Si une boîte est définie en bloc, elle suivra alors les règles suivantes :</p>

<ul>
 <li>La boîte s'étend en largeur pour remplir totalement l'espace offert par son conteneur. Dans la plupart des cas, la boîte devient alors aussi large que son conteneur, occupant 100% de l'espace disponible.</li>
 <li>La boîte occupe sa propre nouvelle ligne et créé un retour à la ligne, faisant ainsi passer les éléments suivants à la ligne d'après.</li>
 <li>Les propriétés de largeur (<a href="/fr/docs/Web/CSS/width"><code>width</code></a>) et de hauteur (<a href="/fr/docs/Web/CSS/height"><code>height</code></a>) sont toujours respectées.</li>
 <li>Les propriétés <a href="/fr/docs/Web/CSS/padding"><code>padding</code></a>, <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a> et <a href="/fr/docs/Web/CSS/border"><code>border</code></a> — correspondantes respectivement aux écarts de <i lang="en">padding</i>, à la marge et à la bordure de la boîte — auront pour effet de repousser les autres éléments.</li>
</ul>

<p>À moins que l'on ne décide de changer le type de positionnement de la boîte en "en ligne", certains éléments tels que les titres (<code>&lt;h1&gt;</code>,<code>&lt;h2&gt;</code>, etc.) et les paragraphes (<code>&lt;p&gt;</code>) utilisent le mode "bloc" comme propriété de positionnement extérieur par défaut.</p>

<p>Si une boîte est positionnée en ligne, alors :</p>

<ul>
 <li>La boîte ne crée pas de retour à la ligne, les autres éléments se suivent donc en ligne.</li>
 <li>Les propriétés de largeur (<a href="/fr/docs/Web/CSS/width"><code>width</code></a>) et de hauteur (<a href="/fr/docs/Web/CSS/height"><code>height</code></a>) ne s'appliquent pas.</li>
 <li>Le <i lang="en">padding</i>, les marges et les bordures verticales (en haut et en bas) seront appliquées mais ne provoqueront pas de déplacement des éléments alentours.</li>
 <li>Le <i lang="en">padding</i>, les marges et les bordures horizontales (à gauche et à droite) seront appliquées et provoqueront le déplacement des éléments alentours.</li>
</ul>

<p>Les éléments <code>&lt;a&gt;</code>, utilisés pour les liens, ou encore <code>&lt;span&gt;</code>, <code>&lt;em&gt;</code> et <code>&lt;strong&gt;</code> sont tous des éléments qui s'affichent "en ligne" par défaut.</p>

<p>Le type de boîte appliqué à un élément est défini par la valeur de la propriété <a href="/fr/docs/Web/CSS/display"><code>display</code></a> tel que <code>block</code> ou <code>inline</code>, et se réfère à la valeur extérieure de positionnement (ou "<em>display</em>" en anglais).</p>

<h2 id="aside_inner_and_outer_display_types">Aparté : les positionnements intérieurs et extérieurs</h2>

<p>Au point où nous en sommes, il faut aborder la différence entre les propriétés de positionnement <strong>intérieurs</strong> ("<em>inner dipslay</em>") et <strong>extérieurs</strong> ("<em>outer display</em>"). Comme nous l'avons évoqué, les boîtes en CSS possèdent un type de positionnement <em>extérieur</em> qui détermine si la boîte est "en ligne" ou bien "en bloc".</p>

<p>Cependant, les boîtes ont aussi un type de positionnement intérieur, qui décrit le comportement de mise en page des éléments contenus dans la boîte. Par défaut, les éléments contenus dans la boîte sont affichés dans la <strong><a href="/fr/docs/Learn/CSS/CSS_layout/Normal_Flow">disposition normale</a></strong>, ce qui signifie qu'ils se comportent exactement comme n'importe quel autre élément "en bloc" ou "en ligne" (comme décrit auparavant).</p>

<p>Ce type de positionnement intérieur peut naturellement être modifié, en utilisant la valeur <code>flex</code> de la propriété <code>display</code>. Ainsi, si on donne la propriété <code>display: flex;</code> à un élément, son type de positionnement extérieur est "en bloc" (<code>block</code>), mais son type de positionnement intérieur est modifié en <code>flex</code>. Tout élément directement enfant de cette boîte se voit alors changé en élément flex, et sera mis en page selon les règles précisées dans les spécifications de <a href="/fr/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a>, dont on reparlera plus tard.</p>

<div class="note">
<p><strong>Note :</strong> Pour en apprendre d'avantage sur les valeurs prises par la propriété display, et le comportement des boîtes dans une mise en page en bloc ou en ligne, jettez un coup d'oeil au guide MDN sur la <a href="/fr/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow">Disposition en ligne et en bloc</a>.</p>
</div>

<p>Lorsque vous en apprendrez plus sur la mise en page en CSS, vous découvrirez une variété d'autres valeurs de positionnement intérieur pour une boîte, tel que <code>flex</code>, ou encore <code><a href="/fr/docs/Learn/CSS/CSS_layout/Grids">grid</a></code>.</p>

<p>Les dispositions "en ligne" et "en bloc" demeurent néanmoins le comportement par défaut des éléments sur le Web — ce qui, comme nous l'avons vu, est appelé la <strong>disposition normale</strong> ("<em>normal flow</em>" en anglais), puisque sans instructions supplémentaires de notre part, c'est ainsi que les boîtes sont mises en page.</p>

<h2 id="examples_of_different_display_types">Exemples de quelques types de positionnement</h2>

<p>Lançons nous à présent dans la pratique et étudions quelques exemples. Vous trouverez ci-dessous trois éléments HTML différents, mais qui sont tous en postionnement extérieur "en bloc" (<code>block</code>). Le premier est un paragraphe, possèdant une bordure ajoutée en CSS. Le navigateur va alors disposer l'élément comme une boîte "en bloc" lors de sa phase de rendu : le paragraphe occupe alors sa propre nouvelle ligne et s'étend en largeur pour occuper tout l'espace disponible.</p>

<p>Le deuxième élément est une liste, qui est disposée selon la règle <code>display: flex;</code>. Ceci définit une mise en page "flex" pour tous les éléments contenus dans la liste, bien que la liste en elle-même est en disposition "en bloc" — c'est pourquoi elle s'étend en largeur sur une nouvelle ligne, exactement comme le premier paragraphe.</p>

<p>Juste en dessous, se trouve un autre paragraphe, diposé en bloc comme le précédent, dans lequel sont insérés deux éléments <code>&lt;span&gt;</code>. Ces deux éléments sont par défaut disposés "en ligne". Cependant, on a ajouté à l'un des deux <code>&lt;span&gt;</code> une classe CSS nommée "block" qui lui attribue la propriété <code>display: block;</code>, ce qui explique la différence de mise en page observée.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1050)}}</p>

<p>Nous avons dans cet exemple le comportement typique d'un élément en ligne (<code>inline</code>), observant chacune des règles énoncées plus haut : l'élément <code>&lt;span&gt;</code> du premier paragraphe ne force pas de retour à la ligne et se place à la suite - <em>en ligne</em> donc - des autres éléments.</p>

<p>Nous avons en suite un élément <code>&lt;ul&gt;</code> dont la propriété de positionnement est <code>display: inline-flex;</code>, ce qui fait du <code>&lt;ul&gt;</code> une boîte en ligne, contenant des éléments de liste (<code>&lt;li&gt;</code>) dipsosés en "flex".</p>

<p>Pour finir, nous avons deux paragraphes, tous deux définis en <code>display: inline;</code>. Le texte dans ces paragraphes, tout comme les éléments de listes, sont disposés sur la même ligne sans retour à la ligne pour chaque élément, contrairement à une disposition en bloc.</p>

<p><strong>Dans cet exemple, nous vous invitons à passer de <code>display: inline;</code> à <code>display: block;</code> ou encore de <code>display: inline-flex;</code> à <code>display: flex;</code> pour observer les modifications apportées par ces modes de positionnement.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1000)}}</p>

<p>Vous rencontrerez des mises en page de type "flex" plus tard dans ces lessons, pas d'inquiétude si ce type de positionnement n'est pas maîtrisé. L'important est ici de se souvenir que c'est la valeur de la propriété <code>display</code> qui permet de modifier l'affichage extérieur (en ligne ou en bloc), ce qui définit l'interaction de la boîte par rapport à son environnement dans la mise en page.</p>

<p>Pour le reste de la leçon, nous ne parlerons plus que du <strong>type de positionnement extérieur</strong>.</p>

<h2 id="what_is_the_css_box_model">Qu'est-ce que le modèle de boîte CSS ?</h2>

<p>Le modèle de boîte que nous allons voir s'applique totalement aux boîtes en bloc, mais les boîtes en ligne ne reprennent que certains aspects — le modèle est alors simplifié ! Ce modèle définit comment chaque composant de la boîte, à savoir la <em>marge</em>, la <em>bordure</em>, le <em>padding</em> (remplissage intérieur) et le contenu, fonctionnent ensemble pour former l'aspect final rendu à l'écran. Pour ajouter un soupçon de complexité, il est aussi possible de passer du modèle standard à un modèle alternatif.</p>

<h3 id="parts_of_a_box">Les composants d'une boîte</h3>

<p>Lorsque l'on crée une boîte en bloc, on se retrouve avec les composants suivant :</p>

<ul>
 <li><strong>La boîte de contenu&nbsp;</strong>: Il s'agit de la zone où sont affichés les éléments contenus par notre boîte, qui peut être dimensionnée en utilisant les propriétés CSS <a href="/fr/docs/Web/CSS/width"><code>width</code></a> et <a href="/fr/docs/Web/CSS/height"><code>height</code></a>.</li>
 <li><strong>La boîte de <i lang="en">padding</i></strong> <strong>(marge intérieure)&nbsp;</strong>: Le <i lang="en">padding</i> (ou remplissage en français) est une zone vierge qui se présente comme un espacement encadrant le contenu; sa taille peut être contrôlée sur chaque côté en utilisant la propriété <a href="/fr/docs/Web/CSS/padding"><code>padding</code></a> et ses autres propriétés connexes.</li>
 <li><strong>La boîte de bordure&nbsp;</strong>: La bordure englobe le contenu et le <i lang="en">padding</i> pour former une bordure. Sa taille et son style sont paramétrés par la propriété <a href="/fr/docs/Web/CSS/border"><code>border</code></a> et ses propriétés sous-jacentes.</li>
 <li><strong>La boîte de marge&nbsp;</strong>: La marge est la couche la plus à l'extérieur, englobant le contenu, le <i lang="en">padding</i> et la bordure. Comme le <i lang="en">padding</i>, il s'agit d'une zone vierge d'espacement mais qui est cette fois située à l'extérieur de l'élément, séparant l'élément des autres éléments de la page. sa taille peut être contrôlée sur chaque côté en utilisant la propriété <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a> et ses autres propriétés connexes.</li>
</ul>

<p>Le schéma ci-dessous montre la structure de ces différentes couches:</p>

<p><img alt="Diagramme du modèle de boîte" src="box-model.png"></p>

<h3 id="the_standard_css_box_model">Le modèle de boîte CSS standard</h3>

<p>Dans le modèle standard, lorsque vous spécifiez les propriétés de largeur (<code>width</code>) et de hauteur (<code>height</code>), celles-ci définissent alors la hauteur et la largeur de la boîte de contenu (la boîte la plus à l'intérieur donc). La taille du <i lang="en">padding</i> et de la bordure (s'ils existent) s'ajoutent à la largeur et à la hauteur définies dans <code>width</code> et <code>height</code> pour obtenir les dimensions totales occupées par la boîte. La marge étant extérieure, elle ne rentre pas dans le compte. Ce principe est illustré dans l'exemple ci-dessous.</p>

<p>En prenant une boîte définie avec les valeurs suivantes de <code>width</code>, <code>height</code>, <code>margin</code>, <code>border</code> et <code>padding</code> :</p>

<pre class="brush: css">.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
</pre>

<p>L'espace occupé par notre boîte dans le modèle standard vaut alors 410px (350 + 25 + 25 + 5 + 5), et la hauteur, 210px (150 + 25 + 25 + 5 + 5), en ajoutant bien les valeurs de <code>padding</code> et de <code>border</code> (deux fois, car ces marges sont présentes aux deux extrêmités de la largeur et de la longeur), aux valeurs de <code>width</code> et de <code>height</code>.</p>

<p><img alt="Illustration de la taille de la boîte lorsqu'on utilise le modèle de boîte standard." src="standard-box-model.png"></p>

<div class="note">
<p><strong>Note :</strong> La marge n'est pas comptabilisée dans la taille totale de la boîte — car bien qu'elle affecte l'espace que la boîte va prendre en définitive dans la page, il ne s'agit que de l'espace extérieur à la boîte. La zone couverte par la boîte s'arrête donc à la bordure et ne s'étend pas à la marge.</p>
</div>

<h3 id="the_alternative_css_box_model">Le modèle de boîte CSS alternatif</h3>

<p>À ce stade, vous pourriez penser qu'il n'est pas très commode d'avoir à ajouter constamment les dimensions de la bordure et du <i lang="en">padding</i> aux dimensions du conteneur pour obtenir les dimensions totales de la boîte, et vous n'auriez pas tort ! Pour cela, le CSS possède un modèle de boîte alternatif introduit peu de temps après le modèle standard. En utilisant ce modèle, les paramètres width et height définissent la largeur et la hauteur <strong>totale</strong> de la boîte en comprenant le contenu, le <i lang="en">padding</i> et la bordure. Ainsi, pour obtenir la taille du contenu, il faut retirer aux dimensions la taille du <i lang="en">padding</i> et de la bordure. En reprenant l'exemple précédent avec ce modèle, on obtiendrait les dimensions suivantes : largeur = 350px, hauteur = 150px.</p>

<p><img alt="Illustration de la taille de la boîte lorsqu'on utilise le modèle de boîte alternatif." src="alternate-box-model.png"></p>

<p>Le navigateur utilise le modèle standard par défaut. Pour utiliser le modèle alternatif, il faut définir la propriété <code>box-sizing: border-box;</code> sur notre boîte. Cela revient à demander au navigateur de considérer la <strong>boîte de la bordure</strong> comme la zone d'effet de <code>width</code> et <code>height</code>, et non la boîte du contenu comme dans le modèle standard !</p>

<pre class="brush: css">.box {
  box-sizing: border-box;
} </pre>

<p>Si vous désirez utiliser le modèle alternatif sur tous vos éléments — ce qui est un choix répandu parmi certains cercles de développeurs — vous pouvez le faire simplement à l'aide des quelques instructions ci-dessous, en utilisant <code>box-sizing</code> sur l'élément <code>&lt;html&gt;</code> et en utilisant l'effet cascade du CSS en paramétrant tous les autres éléments sur la valeur héritée du parent (<code>inherit</code>). Si vous tenez à comprendre le raisonnement derrière ce code, regardez du côté de <a href="https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/">l'article des Astuces CSS sur box-sizing</a>.</p>

<pre class="brush: css">html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}</pre>

<div class="note">
<p><strong>Note :</strong> Pour l'anecdote, le navigateur Internet Explorer utilisait historiquement le modèle alternatif par defaut — sans pour autant fournir un moyen de passer à l'autre modèle !</p>
</div>

<h2 id="playing_with_box_models">Manipuler les modèles de boîte</h2>

<p>Dans l'exemple ci-dessous, se trouvent deux boîtes. Ces deux boîtes possèdent la classe <code>.box</code> qui leur confère les mêmes valeurs pour les propriétés <code>width</code>, <code>height</code>, <code>margin</code>, <code>border</code> et <code>padding</code>. La seule différence est que la seconde boîte utilise le modèle alternatif.</p>

<p><strong>Pouvez-vous modifier les dimensions de la seconde boîte (en lui ajoutant le CSS dans la classe <code>.alternate</code>) pour lui permettre d'avoir la même hauteur et largeur finale que l'autre boîte ?</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1000)}}</p>

<div class="note">
<p><strong>Note :</strong> vous pouvez trouver une solution <a href="https://github.com/mdn/css-examples/blob/master/learn/solutions.md#the-box-model">ici</a>.</p>
</div>

<h3 id="use_browser_devtools_to_view_the_box_model">Utiliser les outils de développement pour voir le modèle de boîte</h3>

<p>Les <a href="/fr/docs/Learn/Common_questions/What_are_browser_developer_tools">outils de développement</a> de votre navigateur peuvent vous permettre d'apréhender les concepts de boîte bien plus facilement. Si vous inspectez un élément dans les DevTools de Firefox (clic droit &gt; Examiner l'élément), vous pouvez avoir accès à toutes les propriétés des différentes couches de la boîte (contenu, <i lang="en">padding</i>, bordure et marge) dans l'interface graphique interactive montrée ci-dessous. Inspecter un élément ainsi, c'est s'assurer qu'il possède bien la taille que l'on désire !</p>

<p><img alt="Inspecter le modèle de boîte d'un élément grâce aux outils de développement de Firefox" src="box-model-devtools.png"></p>

<h2 id="margins_padding_and_borders">Marges, remplissages (paddings), et bordures</h2>

<p>Nous avons déjà rencontré ensemble les propriétés <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>, <a href="/fr/docs/Web/CSS/padding"><code>padding</code></a> et <a href="/fr/docs/Web/CSS/border"><code>border</code></a>, ainsi que leurs effets dans les exemples précédents. Mais ces propriétés sont des <strong>raccourcis</strong> qui nous permettent de définir ces règles pour les quatre côtés de la boîte d'un seul coup. Ces raccourcis ont donc aussi leurs propriétés équivalentes permettant de régler séparément chaque côté pour plus de personalisation.</p>

<p>Regardons de plus près ces nouvelles propriétés.</p>

<h3 id="Margin">Les marges</h3>

<p>La marge est une zone d'espacement invisible qui encadre votre boîte (une marge extérieure). La marge repousse les éléments alentours de la boîte. On peut de plus lui donner une valeur numérique positive ou bien même négative ! Lorsque cette valeur est négative, cela peut cependant engendrer des superpositions entre votre boîte et d'autres éléments. Que vous utilisiez le modèle alternatif ou standard, la marge est toujours décomptée en surplus de la taille totale de la boîte et est ajoutée après que celle-ci a été calculée.</p>

<p>On peut fixer les quatre marges d'une boîte d'un seul coup à l'aide de la propriété <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>, ou bien régler chaque côté individuellement avec les propriétés équivalentes suivantes :</p>

<ul>
 <li><a href="/fr/docs/Web/CSS/margin-top"><code>margin-top</code></a></li>
 <li><a href="/fr/docs/Web/CSS/margin-right"><code>margin-right</code></a></li>
 <li><a href="/fr/docs/Web/CSS/margin-bottom"><code>margin-bottom</code></a></li>
 <li><a href="/fr/docs/Web/CSS/margin-left"><code>margin-left</code></a></li>
</ul>

<p><strong>Dans l'exemple ci-dessous, tentez donc de modifier les valeurs de <code>margin</code> pour voir comment la boîte est repoussée et évolue à cause des espaces créés ou supprimés (si la marge est négative) par vos soins.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 700)}}</p>

<h4 id="margin_collapsing">La fusion des marges</h4>

<p>Le concept de fusion entre les marges est important à maîtriser pour la mise en page. Si deux éléments de votre page ont des marges qui se touchent, alors ces marges fusionnent pour ne faire plus qu'une seule marge qui aura pour taille la plus grande des deux tailles des marges initiaux.</p>

<p>Dans l'exemple ci-dessous, nous avons deux paragraphes. Le paragraphe du haut a un <code>margin-bottom</code> de 50 pixels. Le second paragraphe a un <code>margin-top</code> de 30 pixels. Puisque ces deux marges se touchent, elles fusionnent ensemble, et ainsi la marge finale entre les deux paragraphes est de 50 pixels et non 80, la somme des deux marges.</p>

<p><strong>Vous pouvez tester cette propriété par vous-même en modifiant la propriété <code>margin-top</code> du deuxième paragraphe à 0 dans l'exemple ci-dessous. La marge visible entre les deux paragraphes demeure inchangée — elle conserve sa taille de 50 pixels qui provient de la propriété <code>margin-bottom</code> du premier paragraphe.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 700)}}</p>

<p>Il existe quelques règles qui contrôlent la fusion ou non des marges. Pour plus d'informations, référez vous à la page détaillée <a href="/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">Maîtriser la fusion des marges</a>. Si vous ne devez retenir qu'une chose, c'est que les marges peuvent fusionner, et que si vos marges ne correspondent pas à vos attentes, c'est certainement ce phénomène qui est derrière.</p>

<h3 id="borders">Les bordures</h3>

<p>La bordure se situe entre la marge et le remplissage (<i lang="en">padding</i>) d'une boîte. Si vous utilisez le modèle standard de boîte, la taille de la bordure s'ajoute à la largeur (<code>width</code>) et la hauteur (<code>height</code>) de la boîte. Si vous utilisez le modèle de boîte alternatif, alors la taille de la bordure rend la taille disponible pour le contenu plus petite puisqu'elle utilise une partie de la largeur et de la hauteur disponible.</p>

<p>Pour agir sur le style d'une bordure, il existe de nombreuses propriétés qui permettent de régler le style, la taille et la couleur pour chacun des quatre côtés de la bordure.</p>

<p>Vous pouvez naturellement fixer la forme taille et couleur des quatre côtés en une seule fois, par le biais de la propriété <code>border</code>.</p>

<p>Pour régler ces propriétés individuellement pour chacun des côtés, vous pouvez utiliser :</p>

<ul>
 <li><a href="/fr/docs/Web/CSS/border-top"><code>border-top</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-right"><code>border-right</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-bottom"><code>border-bottom</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-left"><code>border-left</code></a></li>
</ul>

<p>Pour modifier la taille, le style ou la couleur de tous les côtés en même temps, utilisez les propriétés suivantes :</p>

<ul>
 <li><a href="/fr/docs/Web/CSS/border-width"><code>border-width</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-style"><code>border-style</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-color"><code>border-color</code></a></li>
</ul>

<p>Pour modifier la taille, le style ou la couleur d'un seul coté à la fois, vous pouvez faire l'usage de ces propriétés :</p>

<ul>
 <li><a href="/fr/docs/Web/CSS/border-top-width"><code>border-top-width</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-top-style"><code>border-top-style</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-top-color"><code>border-top-color</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-right-width"><code>border-right-width</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-right-style"><code>border-right-style</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-right-color"><code>border-right-color</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-bottom-width"><code>border-bottom-width</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-bottom-style"><code>border-bottom-style</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-bottom-color"><code>border-bottom-color</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-left-width"><code>border-left-width</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-left-style"><code>border-left-style</code></a></li>
 <li><a href="/fr/docs/Web/CSS/border-left-color"><code>border-left-color</code></a></li>
</ul>

<p><strong>Dans l'exemple ci-dessous, nous avons utilisé différentes propriétés, qu'elles soient des raccourcis ou bien les propriétés précises, pour créer une bordure. Amusez-vous à modifier les valeurs de ces différentes propriétés pour vérifier que vous comprenez bien comment elles s'organisent. Les pages MDN pour les propriétés des bordures (données ci-dessus) documentent les différents styles que vous pouvez appliquer à vos pages. N'hésitez pas à les consulter.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 700)}}</p>

<h3 id="padding">Le padding (remplissage)</h3>

<p>Le <i lang="en">padding</i> (ou remplissage) se situe entre la bordure et le contenu. Contrairement aux marges, on ne peut attribuer une valeur numérique négative à un <i lang="en">padding</i>, la valeur ne peut être que 0 ou bien une valeur positive. Si vous avez défini un arrière-plan à votre élément, celui-ci continuera de s'afficher dans la <i lang="en">padding</i>, et c'est pourquoi cette propriété est souvent utilisée pour repousser le contenu de la bordure.</p>

<p>On peut une fois de plus configurer le <i lang="en">padding</i> pour tous les côtés à la fois à l'aide de la propriété <a href="/fr/docs/Web/CSS/padding"><code>padding</code></a>, ou bien chaque côté indépendament des autres en utilisant les variantes plus précises suivantes :</p>

<ul>
 <li><a href="/fr/docs/Web/CSS/padding-top"><code>padding-top</code></a></li>
 <li><a href="/fr/docs/Web/CSS/padding-right"><code>padding-right</code></a></li>
 <li><a href="/fr/docs/Web/CSS/padding-bottom"><code>padding-bottom</code></a></li>
 <li><a href="/fr/docs/Web/CSS/padding-left"><code>padding-left</code></a></li>
</ul>

<p><strong>Si vous modifiez les valeurs du <i lang="en">padding</i> sur la classe <code>.box</code> de l'exemple ci-dessous, vous pouvez observer comment l'emplacement du texte est impacté par les marges intérieures.</strong></p>

<p><strong>Tentez aussi de modifier la valeur du <i lang="en">padding</i> dans la classe <code>.container</code>, cela aura pour effet d'espacer le conteneur et la boîte. Le <i lang="en">padding</i> peut être modifié sur tout élément pour permettre d'espacer le contenu de la bordure.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 600)}}</p>

<h2 id="the_box_model_and_inline_boxes">Le modèle de boîte et la disposition en ligne</h2>

<p>Toutes les règles énoncées plus haut s'appliquent totalement aux boîtes positionnées en bloc. Mais qu'en est-il des boîtes positionnées en ligne, comme l'élément <code>&lt;span&gt;</code> par exemple ?</p>

<p>Dans l'exemple ci-après, nous avons un élément <code>&lt;span&gt;</code> inclus dans un paragraphe auquel on a défini les propriétés <code>width</code>, <code>height</code>, <code>margin</code>, <code>border</code> et <code>padding</code>. Vous pouvez alors observer que les paramètres <code>width</code> et <code>height</code> sont totalement ignorés. Les propriétés de <code>margin</code>, <code>padding</code> et <code>border</code> sont quant à elles appliquées, mais n'ont pas modifié l'espacement avec les autres éléments de la page, se superposant ainsi avec les mots environnants dans le paragraphe.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 600)}}</p>

<h2 id="using_display_inline-block">le positionnement display: inline-block</h2>

<p>Il existe une valeur spéciale pour la propriété <code>display</code>, qui constitue un compromis entre la disposition en ligne et la disposition en bloc, une sorte d'entre-deux qui combine ces deux dispositions. Cet état peut-être utile dans les situations où l'on désire utiliser les propriétés <code>width</code> et <code>height</code>, et éviter les superpositions (voir l'exemple précédent), tout en conservant la disposition dans une même ligne (i.e. sans créer de nouvelle ligne, comme le ferait une disposition en bloc).</p>

<p>C'est la solution apportée par la disposition <code>display: inline-block;</code> qui emprunte des règles des deux dispositions pour satisfaire ces motivations :</p>

<ul>
 <li>La hauteur (<code>height</code>) et la largeur (<code>width</code>) seront appliqués sur l'élément (et non ignorés).</li>
 <li>Les propriétés <code>padding</code>, <code>margin</code> et <code>border</code> repousseront bien les éléments alentours.</li>
</ul>

<p>Cette disposition suit alors ces règles, tout en conservant un positionnement sur la même ligne, sans retour à la ligne, ni affichage sur sa propre nouvelle ligne. L'élément peut même devenir plus grand que son conteneur si les propriétés <code>width</code> et <code>height</code> le définissent ainsi.</p>

<p><strong>Dans cet exemple, nous avons ajouté la propriété <code>display: inline-block;</code> à notre élément <code>&lt;span&gt;</code>. Changez donc la valeur en <code>display: block;</code> ou bien tentez même de supprimer cette ligne pour observer l'utilité de cette nouvelle disposition.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 700)}}</p>

<p>Ceci peut-être très utile dans certains cas comme lorsque l'on veut élargir la zone cliquable d'un lien en aggrandissant le <code>padding</code>. l'élément <code>&lt;a&gt;</code> est par défaut "en ligne", comme un <code>&lt;span&gt;</code>, mais vous pouvez alors utiliser <code>display: inline-block;</code> pour permettre au <i lang="en">padding</i> d'être ajouté correctement sur la page, améliorant l'accessibilité du lien pour l'utilisateur.</p>

<p>Vous pouvez rencontrer cette astuce sur bon nombre de menus de navigation dans les sites web. Par exemple, la barre de navigation ci-dessous est affichée en une seule ligne en utilisant la disposition flexbox et nous avons ajouté un <i lang="en">padding</i> aux liens <code>&lt;a&gt;</code> pour pouvoir modifier la couleur de fond (<code>background-color</code>) au survol du curseur. Le <i lang="en">padding</i> semble se superposer sur la bordure de l'élément <code>&lt;ul&gt;</code>. Ceci est dû au fait que <code>&lt;a&gt;</code> est un élément en ligne.</p>

<p><strong>Ajoutez la propriété <code>display: inline-block;</code> en utilisant le sélecteur <code>.links-list a</code> pour voir le respect du <i lang="en">padding</i> régler ce problème.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 600)}}</p>

<h2 id="summary">Résumé</h2>

<p>À présent vous connaissez tout ce dont vous avez besoin pour comprendre le modèle des boîtes en CSS. N'hésitez pas à revenir jetter un coup d'oeil à ce cours si vous rencontrez encore des problèmes de mise en page : beaucoup de solutions se trouvent ici !</p>

<p>Dans la leçon suivante, ce sont les arrières-plans et les bordures qui capteront notre attention, afin de rendre votre mise en page plus attrayante.</p>

<p>{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}</p>

<h2 id="in_this_module">Dans ce module</h2>

<ol>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Cascade et héritage</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors">Sélecteurs CSS</a>
   <ul>
    <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">Sélecteurs de classe, de type et d'identifiant</a></li>
    <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Sélecteurs d'attribut</a></li>
    <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">Pseudo-classes et pseudo-éléments</a></li>
    <li><a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Combinateurs</a></li>
   </ul>
  </li>
  <li>Le modèle de boîte</li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">Arrières-plans et bordures</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">Gérer la directionnalité du texte</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Overflowing_content">Le dépassement du contenu</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Values_and_units">Valeurs et unités</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">Dimensionnement des objets en CSS</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements">Images, médias, et formulaires</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Styling_tables">Mettre en forme les tableaux</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS">Déboguer CSS</a></li>
  <li><a href="/fr/docs/Learn/CSS/Building_blocks/Organizing">Organiser son code CSS</a></li>
 </ol>
