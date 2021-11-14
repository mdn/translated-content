---
title: Cascade et héritage
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
tags:
  - Apprendre
  - CSS
  - Cascade
  - Débutant
  - Héritage
  - Règles
  - ordre dans le source
  - spécificité
translation_of: Learn/CSS/Building_blocks/Cascade_and_inheritance
original_slug: Apprendre/CSS/Building_blocks/Cascade_et_heritage
---
<div>{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}</div>

<p>Le but de cette leçon est de développer votre compréhension des concepts les plus fondamentaux du CSS — la cascade, la spécificité et l'héritage — qui contrôlent la manière dont le CSS est appliqué au HTML et la manière dont les conflits sont résolus.</p>

<p>Bien que cette leçon puisse sembler moins pertinente dans l'immédiat et un peu plus académique que d'autres parties du cours, la compréhension de ces éléments vous épargnera bien des soucis plus tard ! Nous vous conseillons de parcourir attentivement cette section et de vérifier que vous avez bien compris les concepts avant de passer à la suite.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis :</th>
   <td>Maîtrise élémentaire de l'informatique, <a href="/fr/docs/Apprendre/Commencer_avec_le_web/Installation_outils_de_base">suite logicielle de base installée</a>, compétences élémentaires pour <a href="/fr/docs/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers">travailler avec des fichiers</a>, connaissance de base du HTML  (cf. <a href="/fr/docs/Apprendre/HTML/Introduction_à_HTML">Introduction à HTML</a>), et une idée de <a href="/fr/docs/Learn/CSS/First_steps/How_CSS_works">Comment fonctionne CSS</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objectif :</th>
   <td>Découvrir la cascade et la spécificité, et comment l'héritage fonctionne en CSS.</td>
  </tr>
 </tbody>
</table>

<h2 id="Règles_contradictoires">Règles contradictoires</h2>

<p>CSS est l'acronyme de <strong>Cascading Style Sheets</strong>, qu'on peut traduire par <em>feuilles de style en cascade</em> et la compréhension de ce premier mot <em>cascading</em> est cruciale — la façon dont la cascade se comporte est la clé de la compréhension du CSS.</p>

<p>À un moment donné, vous travaillerez sur un projet et vous constaterez que le CSS que vous pensiez appliquer à un élément ne fonctionne pas. En général, le problème est que vous avez créé deux règles qui pourraient potentiellement s'appliquer au même élément. La <strong>cascade</strong>, et le concept étroitement lié de spécificité, sont des mécanismes qui contrôlent quelle règle s'applique lorsqu'il y a un tel conflit. La règle qui régit votre élément n'est peut-être pas celle à laquelle vous vous attendiez, vous devez donc comprendre comment ces mécanismes fonctionnent.</p>

<p>Le concept d'<strong>héritage</strong> est aussi à garder en tête dans ces situations : certaines propriétés CSS par défaut héritent de la valeur donnée à l'élément parent de l'élément courant, d'autres non. Cela peut être à l'origine de comportements inattendus.</p>

<p>Commençons par examiner rapidement les éléments clés dont il est question, puis examinons chacun d'eux à tour de rôle et voyons comment ils interagissent entre eux et avec votre CSS. Cela peut sembler être un ensemble de concepts difficiles à comprendre. Cependant, à mesure que vous vous entraînerez à écrire des CSS, la façon dont ils fonctionnent deviendra plus évidente pour vous.</p>

<h3 id="La_cascade">La cascade</h3>

<p>À un niveau élémentaire, la <strong>cascade</strong> des styles signifie que l'ordre d'apparition des règles dans le CSS a une importance ; quand deux règles applicables ont la même spécificité, c'est la dernière déclarée qui sera utilisée pour la mise en forme.</p>

<p>Dans l'exemple ci-dessous deux règles pourraient s'appliquer à <code>h1</code>. Au final <code>h1</code> est coloré en bleu — ces règles ont les mêmes sélecteurs, elles ont donc la même spécificité ; dans ce cas, c'est la règle écrite en dernier dans le CSS qui l'emporte.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 400)}} </p>

<h3 id="Spécificité">Spécificité</h3>

<p>Quand des règles avec des sélecteurs différents s'appliquent sur un même élément, le navigateur choisit la règle qui a la plus grande spécificité. La spécificité mesure essentiellement combien la sélection est précise :</p>

<ul>
 <li>Un sélecteur d'élément est peu spécifique — il cible tous les éléments d'un type donné dans la page — son score est donc faible ;</li>
 <li>Un sélecteur de classe est plus spécifique — dans la page, il ne cible que les éléments dont l'attribut <code>class</code> a la valeur choisie — son score est plus important.</li>
</ul>

<p>Voyons cela sur un exemple. Ci-dessous, on retrouve deux règles qui pourraient s'appliquer à <code>h1</code>. Au final <code>h1</code> est coloré en rouge — le sélecteur de classe donne une plus grande spécificité à sa règle, et du coup c'est cette règle qui est choisie même si elle apparaît plus tôt dans le CSS.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 500)}} </p>

<p>Nous expliquerons le score de spécificité et d'autres points reliés un peu plus loin.</p>

<h3 id="Héritage">Héritage</h3>

<p>L'héritage est lui aussi à comprendre dans ce contexte — certaines valeurs pour une propriété CSS se transmettent des éléments parents vers leurs enfants, d'autres non.</p>

<p>Par exemple, si vous fixez une <code>color</code> et une <code>font-family</code> pour un élément, tout élément contenu dans le premier sera mis en forme avec la même couleur et la même police, à moins qu'on lui ait appliqué directement des règles.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 550)}} </p>

<p>Certaines propriétés ne se transmettent pas — par exemple si vous attribuez un {{cssxref("width")}} de 50% à un élément, aucun de ses descendants n'aura une largeur diminuée de moitié par rapport à celle de son parent. Si c'était le cas, l'usage de CSS serait particulièrement frustrant !</p>

<div class="note">
<p><strong>Note :</strong> Sur MDN, dans les pages de référence des propriétés CSS, vous trouverez des encarts d'information technique, le plus souvent au pied de la section de spécifications, dans lesquels sont listés nombre de données sur la propriété, notamment si elle est héritée ou non. Voir la <a href="/fr/docs/Web/CSS/color#Specifications">section des spécifications de la propriété color</a>, par exemple.</p>
</div>

<h2 id="Comprendre_comment_ces_concepts_se_combinent">Comprendre comment ces concepts se combinent</h2>

<p>Ces trois concepts combinés permettent de décider dans tous les cas quelle règle CSS s'applique à quel élément ; dans les sections ci-dessous nous les verrons en action, ensemble. Cela peut parfois sembler compliqué, mais avec l'expérience les choses vous sembleront plus claires, et de toute façon, si vous oubliez, vous pourrez toujours retrouver tous les détails ici !</p>

<h2 id="Comprendre_lhéritage">Comprendre l'héritage</h2>

<p>Commençons par l'héritage. Dans l'exemple ci-dessous nous avons un  {{HTMLElement("ul")}}, contenant plusieurs niveaux de listes imbriquées. Nous avons spécifié une bordure, un remplissage (<code>padding</code>) et une couleur de police pour la <code>&lt;ul&gt;</code> extérieure.</p>

<p>La couleur est transmise aux enfants directs, et aussi enfants indirects — les <code>&lt;li&gt;</code> de la première liste, et ceux de la première liste de deuxième niveau. Nous avons ensuite ajouté une classe <code>special</code> à la seconde liste imbriquée et nous lui appliquons une autre couleur. Cette dernière est transmise aux descendants.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 700)}} </p>

<p>Les propriétés telles que largeur (comme mentionnée plus haut), marges, remplissage, et bordures ne se transmettent pas par héritage. Si les bordures se transmettaient aux enfants de la liste, on obtiendrait un effet étrange !</p>

<p>Dans la plupart des cas, le sens commun permet de comprendre quelles propriétés sont héritées par défaut et quelles propriétés ne se transmettent pas.</p>

<h3 id="Contrôler_lhéritage">Contrôler l'héritage</h3>

<p>CSS propose quatre valeurs spéciales universelles pour contrôler l'héritage. Ces valeurs sont applicables à toute propriété CSS.</p>

<dl>
 <dt>{{cssxref("inherit")}}</dt>
 <dd>La propriété correspondante prend la valeur définie dans l'élément parent. Dans les faits, cela "active l'héritage".</dd>
 <dt>{{cssxref("initial")}}</dt>
 <dd>La propriété correspondante prend la valeur par défaut définie dans la feuille de style du navigateur. Si aucune valeur n'est définie par défaut dans le navigateur et que la propriété est transmise par héritage la propriété est redéfinie à <code>inherit</code>.</dd>
 <dt>{{cssxref("unset")}}</dt>
 <dd>Redéfinit la propriété à sa valeur naturelle : si la propriété est transmise par héritage, le comportement est le même que  <code>inherit</code>, sinon il est identique à <code>initial</code>.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Il existe aussi la valeur {{cssxref("revert")}}, dont le support par les navigateurs est limité.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Voir {{SectionOnPage("/en-US/docs/Web/CSS/Cascade", "Origin of CSS declarations")}} pour plus d'informations sur chacune de ces valeurs et comment elles fonctionnent.</p>
</div>

<p>Voyons maintenant comment les valeurs universelles fonctionnent sur un exemple : une liste de liens. Dans l'exemple live ci-dessous, vous pourrez manipuler CSS et observer directement les effets de vos modifications. Jouer avec le code est vraiment le meilleur moyen pour progresser en HTML et CSS.</p>

<p>Par exemple :</p>

<ol>
 <li>Le deuxième item de la liste est dans la classe <code>my-class-1</code>. Cela définit la couleur de l'élément <code>&lt;a&gt;</code> qu'il contient à <code>inherit</code>. Si vous supprimez cette règle, quelle est la couleur du lien ?</li>
 <li>Comprenez vous pourquoi les troisième et quatrième liens sont de la couleur qu'ils sont ? Dans la négative, relisez la description des valeurs spéciales ci-dessus.</li>
 <li>Quels liens changeront de couleur si on redéfinit la couleur de l'élément  <code>&lt;a&gt;</code> — par exemple <code>a { color: red; }</code> ?</li>
</ol>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 700)}} </p>

<h3 id="Réinitialiser_la_valeur_de_toutes_les_propriétés">Réinitialiser la valeur de toutes les propriétés</h3>

<p>En CSS, la propriété raccourci <code>all</code> peut être utilisée pour appliquer l'une des valeurs d'héritage à (presque) toutes les propriétés d'un coup. Elle peut prendre n'importe laquelle des valeurs d'héritage (<code>inherit</code>, <code>initial</code>, <code>unset</code>, ou <code>revert</code>). C'est un moyen pratique d'annuler les modifications apportées aux styles pour revenir à un point de départ connu avant de commencer de nouvelles modifications.</p>

<p>Dans l'exemple ci-dessous, nous avons deux blocs de citations. Pour le premier, un style est appliqué à l'élément <code>&lt;blockquote&gt;</code> lui-même, le second <code>&lt;blockquote&gt;</code> appartient à une classe qui définit la valeur de <code>all</code> à <code>unset</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 700)}} </p>

<p>Essayez de donner à <code>all</code> l'une des autres valeurs possibles et observez les changements.</p>

<h2 id="Comprendre_la_cascade">Comprendre la cascade</h2>

<p>Nous comprenons maintenant pourquoi un paragraphe imbriqué profondément dans la structure du code HTML a la même couleur que le <code>&lt;body&gt;</code>, et à partir des parties précédentes, nous comprenons comment changer la mise en forme d'un élément où qu'il soit dans le document — que ce soit par un sélecteur de type ou en créant une classe. Nous allons maintenant examiner comment la cascade détermine la règle CSS qui s'applique quand plusieurs règles ciblent le même élément.</p>

<p>Il y a trois facteurs à prendre en compte, listés ci-dessous par ordre décroissant d'importance. Les premiers critères prennent le dessus sur ceux qui viennent après :</p>

<ol>
 <li><strong>Importance</strong></li>
 <li><strong>Spécificité</strong></li>
 <li><strong>Ordre d'apparition dans le source</strong></li>
</ol>

<p>Passons les en revue en partant de la fin, pour voir comment les navigateurs déterminent quel CSS doit être appliqué.</p>

<h3 id="Ordre_dapparition_dans_le_source">Ordre d'apparition dans le source </h3>

<p>Nous avons déjà vu comment l'ordre d'apparition dans le source compte dans la cascade. Si deux règles avec le même poids s'appliquent alors celle qui vient en dernier dans le CSS l'emporte. L'intuition est la suivante : plus on avance dans le CSS plus on s'approche de l'élément ciblé ; quand une règle le sélectionne, elle écrase la précédente jusqu'à la dernière règle rencontrée dans le source qui l'emporte et met en forme l'élément..</p>

<h3 id="Spécificité_2">Spécificité</h3>

<p>L'ordre des règles dans le source est important. On rencontre pourtant des situations où deux règles ciblent le même élément mais c'est la première écrite dans le source qui s'applique. C'est que la première règle a une <strong>spécificité</strong> plus élevée —  elle est plus spécifique, elle est donc choisie par le navigateur pour mettre en forme l'élément.</p>

<p>Comme nous l'avons vu plus haut dans cette leçon, un sélecteur de classe a plus de poids qu'un sélecteur d'élément, de sorte que les propriétés définies sur la classe remplaceront celles appliquées directement à l'élément.</p>

<p>Un point important à noter : dans la cascade, on pourrait penser qu'une règle postérieure écrase une règle antérieure. En fait, ce n'est pas la règle toute entière qui est écrasée, mais seulement les propriétés communes aux deux règles qui sont redéfinies par la dernière version rencontrée.</p>

<p>Ce comportement permet d'éviter la répétition dans votre CSS. Une pratique courante consiste à définir des styles génériques pour les éléments de base, puis à créer des classes pour les cas particuiers. Par exemple, dans la feuille de style ci-dessous, nous avons défini des styles génériques pour les titres de niveau 2, puis créé des classes qui ne modifient que certaines des propriétés et valeurs. Les valeurs définies initialement sont appliquées à tous les titres, puis les valeurs plus spécifiques sont appliquées seulement aux titres avec l'attribut classe.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 700)}} </p>

<p>Voyons maintenant comment le navigateur calcule la spécificité. Nous savons déjà qu'un sélecteur d'élément a une faible spécificité et peut être écrasé par une classe. Essentiellement, une valeur en points est attribuée à différents types de sélecteurs, et leur addition donne le poids de ce sélecteur particulier, qui peut ensuite être évalué par rapport à d'autres correspondances potentielles.</p>

<p>Le score de spécificité d'un sélecteur est codé par quatre valeurs (ou composants) différentes, qui peuvent être considérées comme des milliers, des centaines, des dizaines et des unités — quatre chiffres simples dans quatre colonnes :</p>

<ol>
 <li><strong>Milliers </strong>: ajouter 1 dans cette colonne si la déclaration apparaît dans un  {{htmlattrxref("style")}} , (style inline). De telles déclarations n'ont pas de sélecteurs, leur spécificité est toujours simplement 1000.</li>
 <li><strong>Centaines </strong>: ajouter 1 dans cette colonne pour chaque sélecteur d'ID contenu à l'intérieur du sélecteur global.</li>
 <li><strong>Dizaines </strong>: ajouter 1 dans cette colonne pour chaque sélecteur de classe, d'attribut ou de pseudo-classe contenu à l'intérieur du sélecteur global.</li>
 <li><strong>Unités </strong>: ajouter 1 dans cette colonne pour chaque sélecteur d'élément ou pseudo-élément contenu à l'intérieur du sélecteur global.</li>
</ol>

<div class="note">
<p><strong>Note :</strong> Le sélecteur  universel (<code>*</code>), les combinateurs (<code>+</code>, <code>&gt;</code>, <code>~</code>, ' '), et la pseudo-class de négation (<code>:not</code>) n'affectent en rien la spécificité.</p>
</div>

<p>Le tableau suivant montre quelques exemples isolés pour vous mettre dans l'ambiance. Assurez-vous de comprendre dans chaque cas la spécificité annoncée. Nous n'avons pas encore couvert les sélecteurs en détail, mais vous pouvez trouver les informations à propos de chaque sélecteur sur la <a href="/fr/docs/Web/CSS/CSS_Selectors">référence MDN des sélecteurs</a>.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Sélecteur</th>
   <th scope="col">Milliers</th>
   <th scope="col">Centaines</th>
   <th scope="col">Dizaines</th>
   <th scope="col">Unités</th>
   <th scope="col">Spécificité</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>h1</code></td>
   <td>0</td>
   <td>0</td>
   <td>0</td>
   <td>1</td>
   <td>0001</td>
  </tr>
  <tr>
   <td><code>h1 + p::first-letter</code></td>
   <td>0</td>
   <td>0</td>
   <td>0</td>
   <td>3</td>
   <td>0003</td>
  </tr>
  <tr>
   <td><code>li &gt; a[href*="fr"] &gt; .inline-warning</code></td>
   <td>0</td>
   <td>0</td>
   <td>2</td>
   <td>2</td>
   <td>0022</td>
  </tr>
  <tr>
   <td><code>#identifiant</code></td>
   <td>0</td>
   <td>1</td>
   <td>0</td>
   <td>0</td>
   <td>0100</td>
  </tr>
  <tr>
   <td>pas de sélecteurs, la règle est déclarée dans l'attribut {{htmlattrxref("style")}} d'un élément </td>
   <td>1</td>
   <td>0</td>
   <td>0</td>
   <td>0</td>
   <td>1000</td>
  </tr>
 </tbody>
</table>

<p>Avant de continuer, regardons un exemple en action.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 700)}} </p>

<p>Alors qu'est-ce qui se passe ici ? Tout d'abord, nous ne sommes intéressés que par les sept premières règles de cet exemple, et comme vous le remarquerez, nous avons inclus leurs valeurs de spécificité dans un commentaire avant chacune.</p>

<ul>
 <li>Les deux premiers sélecteurs se disputent le style de la couleur d'arrière-plan du lien — le deux gagne et rend la couleur d'arrière-plan bleue car il a un sélecteur d'ID supplémentaire : sa spécificité est de 201 contre 101 pour le sélecteur un.</li>
 <li>Les sélecteurs trois et quatre se disputent le style de la couleur du texte du lien — le quatre gagne et rend le texte blanc car bien qu'il ait un sélecteur d'élément en moins, le sélecteur manquant est remplacé par un sélecteur de classe, qui vaut dix au lieu de un. La spécificité gagnante est donc de 113 contre 104.</li>
 <li>Les sélecteurs cinq, six et sept se disputent le style de la bordure du lien en survol. Le six perd clairement devant le cinq avec une spécificité de 23 contre 24 — il a un sélecteur d'éléments en moins dans la chaîne. Le sept, cependant, bat à la fois cinq et six — il a le même nombre de sous-sélecteurs dans la chaîne que cinq, mais un sélectecur d'élément a été échangé contre un sélecteur de classe. La spécificité gagnante est donc de 33 contre 23 et 24.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Cet exemple est simplificateur. En fait, chaque type de sélecteur voit sa spécificité comptée à un niveau qui lui est propre, qui ne peut pas être dépassé par des sélecteurs d'un type avec une spécificité moindre. Par exemple, un <em>million</em> de sélecteurs de <strong>class</strong> combinés ne prendront jamais le dessus sur <em>un</em> sélecteur d'<strong>id</strong>.</p>

<p>Une manière plus précise d'évaluer la spécificité serait de noter individuellement les niveaux de spécificité en commençant par le plus élevé et en passant au plus bas si nécessaire. Ce n'est que lorsqu'il existe un lien entre les scores des sélecteurs au sein d'un niveau de spécificité que vous devez évaluer le niveau suivant ; sinon, vous pouvez ignorer les sélecteurs de niveau de spécificité inférieur car ils ne peuvent jamais écraser les niveaux de spécificité supérieurs.</p>
</div>

<h3 id="!important">!important</h3>

<p>Vous pouvez annuler tous les calculs ci-dessus à l'aide de la valeur CSS spéciale  <code>!important</code> mais vous devez être très prudent avec son utilisation. Ce mot-clé est utilisé pour donner la plus grande spécificité à la propriété à laquelle il s'applique, remplaçant ainsi les règles normales de la cascade.</p>

<p>Jetez un œil à cet exemple : nous avons deux paragraphes, dont l'un a un ID.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 700)}} </p>

<p>Regardons ça d'un peu plus près pour mieux comprendre — si vous avez du mal à suivre, supprimez telle ou telle déclaration pour voir ce qui se passe.</p>

<ol>
 <li>Vous verrez que les valeurs de couleur et de remplissage de la troisième règle ont été appliquées, mais pas la couleur d'arrière-plan. Pourquoi ? On pourrait penser que les trois déclarations s'appliquent, puisque la règle en question, venant plus tard dans le code source, prend le dessus sur les règles antérieures.</li>
 <li>Mais rappelez vous, les sélecteurs de classe sont plus spécifiques !</li>
 <li>Les deux éléments sont dans la classe <code>better</code>, mais le deuxième a aussi l'{{htmlattrxref("id")}}  <code>winning</code>. Étant donné que les ID ont une spécificité encore plus élevée que les classes (sur une page, pour une ID donnée, il y a un seul élément,  alors qu'on peut trouver de nombreux éléments dans la même classe — les sélecteurs d'ID sont donc très spécifiques dans ce qu'ils ciblent), le deuxième élément aura une couleur d'arrière-plan rouge et une bordure noire de 1 px ; pour le premier élément, la couleur d'arrière-plan sera grise, sans bordure, comme spécifié par la classe.</li>
 <li>Le deuxième élément a un arrière-plan rouge, mais pas de bordure. Pourquoi ? En raison de la déclaration <code>!important</code> dans la deuxième règle — écrit après  <code>border: none</code>,  ce mot-clé signifie que cette déclaration l'emporte sur le <code>border</code> définie dans la règle précédente, même si l'ID a une spécificité plus élevée.</li>
</ol>

<div class="note">
<p><strong>Note :</strong> La seule façon de dépasser cette déclaration  <code>!important</code> serait d'ajouter un <code>!important</code> dans une déclaration de même<em> spécificité</em> apparaissant plus bas dans l'ordre du source, ou avec une spécificité plus grande.</p>
</div>

<p>Il est utile de connaître  <code>!important</code> , ne serait-ce que pour le reconnaître dans le code des autres. <strong>Cependant, nous vous recommandons fortement de ne jamais l'utiliser, sauf en dernier recours.</strong> <code>!important</code> modifie le fonctionnement normal de la cascade, de sorte qu'il peut être très difficile de résoudre les problèmes de débogage CSS, en particulier dans une grande feuille de style.</p>

<p>Lorsque vous travaillez sur un CMS où vous ne pouvez pas modifier les modules CSS de base et que vous souhaitez malgré tout remplacer un style, vous serez peut être amené à utiliser <code>!important</code>. Mais vraiment, si vous pouvez l'éviter, ne l'utilisez pas.</p>

<h2 id="Où_sont_écrites_les_règles_CSS">Où sont écrites les règles CSS</h2>

<p>Enfin, il est également utile de noter que l'importance d'une déclaration CSS dépend de la feuille de style dans laquelle elle est spécifiée — il est possible pour les utilisateurs de définir des feuilles de style personnalisées pour remplacer les styles du développeur, par exemple si un utilisateur est malvoyant, il peut vouloir doubler la taille de la police sur toutes les pages web visitées afin de faciliter la lecture.</p>

<h2 id="En_résumé">En résumé</h2>

<p>Les déclarations en conflit seront appliquées dans l'ordre suivant, les déclarations ultérieures remplaçant les déclarations antérieures :</p>

<ol>
 <li>Déclarations dans les feuilles de style de l'agent utilisateur (par exemple, les styles par défaut du navigateur, utilisés lorsqu'aucun autre style n'est défini).</li>
 <li>Déclarations normales dans les feuilles de style utilisateur (styles personnalisés définis par un utilisateur).</li>
 <li>Déclarations normales dans les feuilles de style d'auteur (ce sont les styles définis par nous, les développeurs web).</li>
 <li>Déclarations <code>!important</code> dans les feuilles de style d'auteur.</li>
 <li>Déclarations <code>!important</code> dans les feuilles de style utilisateur.</li>
</ol>

<p>Il est logique que les feuilles de style des développeurs web remplacent les feuilles de style utilisateur, de sorte que la conception peut être conservée comme prévu, mais parfois, les utilisateurs ont de bonnes raisons de remplacer les styles des développeur web, comme mentionné ci-dessus — cela peut être réalisé en utilisant <code>!important</code> dans leurs règles.</p>

<h2 id="Activité_jouer_dans_la_cascade">Activité : jouer dans la cascade</h2>

<p>Dans cette activité, nous vous engageons à tenter l'expérience suivante : écrire une règle redéfinissant les couleurs de police et de fond pour les liens par défaut. La contrainte est de réinitialiser la couleur d'arrière-plan en blanc sans utiliser de valeur <code>&lt;color&gt;</code>. Vous pouvez par contre utiliser l'une des valeurs spéciales que nous avons examinées dans la section {{anch("Contrôler_lhéritage")}} dans une nouvelle règle.</p>

<p>Si vous faites une erreur, vous pouvez toujours remettre à zéro l'exemple live à l'aide du bouton <kbd>Reset</kbd>. Si vous êtes vraiment coincé, <a href="https://github.com/mdn/css-examples/blob/master/learn/solutions.md#the-cascade">jetez un coup d'œil à la solution ici</a>.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/cascade/task.html", '100%', 700)}}</p>

<h2 id="À_suivre">À suivre</h2>

<p>Si vous avez compris cet article, alors, bravo — vous commencez à appréhender les mécanismes fondamentaux de CSS. L'étape suivante est une étude détaillée des sélecteurs.</p>

<p>Si la cascade, la spécificité et l'héritage gardent encore de leur mystère, pas de panique ! C'est vraiment le point le plus compliqué qu'on ait abordé depuis le début de ce cours, et même les web developers professionnels s'y cassent parfois les dents. Notre avis : poursuivez le cours et revenez régulièrement lire cet article, continuez à y réfléchir.</p>

<p>En particulier quand vous rencontrez des comportements étranges où vos règles de style ne s'appliquent pas, revenez ici. Ce pourrait être un problème de spécificité.</p>

<p>{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}</p>

<h2 id="Dans_ce_cours">Dans ce cours</h2>

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
