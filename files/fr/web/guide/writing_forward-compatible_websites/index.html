---
title: Développer des sites à compatibilité descendante
slug: Web/Guide/Writing_forward-compatible_websites
tags:
  - NeedsEditorialReview
  - NeedsTechnicalReview
translation_of: Web/Guide/Writing_forward-compatible_websites
original_slug: Développement_Web/Développer_des_sites_à_compatibilité_descendante
---
<p>Cette page explique comment développer des sites qui continuent de fonctionner au fur et à mesure des mises à jour des navigateurs.</p>

<p>C'est d'autant plus important pour les intranets et autres sites non-publics; s'il n'est pas possible de voir votre site, il ne nous est pas possible de voir s'il est cassé. Il ne nous est pas toujours possible de suivre tous les sites, mais en suivre autant que possible permet d'en assurer la pérennité.</p>

<h2 id="JavaScript">JavaScript</h2>

<h3 id="Préfixez_tous_les_accès_à_des_variables_globales_dans_les_attributs_onfoo_par_“window.”">Préfixez tous les accès à des variables globales dans les attributs <code>onfoo</code> par “<code>window.</code>”</h3>

<div>Quand un attribut de gestion d'évenement (<code>onclick</code>, <code>onmouseover</code>, etc) est utilisé sur un élément HTML, toutes les résolutions de variable dans l'attribut sont d'abord résolues sur l'élément lui-même, puis sur le formulaire contenant l'élément (si c'est un élément de formulaire), puis sur <code>document</code>, puis finalement sur <code>window</code> (là où se trouvent les variables globales que vous avez définies).Par exemple, si vous avez le balisage suivant :</div>

<pre>&lt;div onclick="alert(ownerDocument)"&gt;Cliquez moi&lt;/div&gt;</pre>

<p>Alors cliquer sur le texte affichera le <code>ownerDocument</code> du <code>div</code>. Il en sera toujours ainsi, même s'il y a une <code>var ownerDocument</code> déclarée dans l'espace de visibilité global.</p>

<p>Cela signifie qu'à chaque fois que vous accédez à une variable (ou une fonction) globale dans un attribut de gestion d'évenement vous pouvez vous retrouver avec une collision de nom. Il suffit pour cela qu'une nouvelle specification ajoute une nouvelle propriété DOM aux éléments, et que cette propriété porte le même nom que votre variable ou fonction.<br>
 Si cela arrive, alors soudainement votre function ne sera plus appellée. Ceci est déjà arrivé de nombreuses fois à de multiples sites durant la phase d'évolution d'HTML5.</p>

<p>Pour éviter ce problème, qualifiez complétement vos variables globales en utilisant <code>window.</code>, comme ceci :</p>

<pre>&lt;script&gt;
  function nomLocal() {
    alert('La fonction nomLocal a été appellée.');
  }
&lt;/script&gt;
&lt;div onclick="<strong>window.</strong>nomLocal()"&gt;Cliquer ici devrait faire apparaitre un message.&lt;div&gt;
</pre>

<h3 id="Ne_concatenez_pas_les_scripts_dont_vous_n'avez_pas_le_contrôle.">Ne concatenez pas les scripts dont vous n'avez pas le contrôle.</h3>

<p>En ECMAScript, la directive "<code>use strict;</code>" s'applique sur la totalité du fichier. Ainsi, ajouter un script qui dépends d'un comportement non-strict à la suite d'un script en mode strict risque fortement de générer des erreurs.</p>

<h3 id="Demandez_aux_auteurs_des_bibliothèques_Javascript_que_vous_utilisez_de_suivre_ces_recommandations.">Demandez aux auteurs des bibliothèques Javascript que vous utilisez de suivre ces recommandations.</h3>

<p>Suggérez aux développeurs de vos bibliothèques favorites de suivre ces recommendations. S'ils ne le font pas, vous n'avez pas l'assurance que la bibliothèque continue de fonctionner dans le futur. Malheureusement, les bibliothèques suivent rarement ces conseils.</p>

<h2 id="Détection">Détection</h2>

<h3 id="Détecter_des_fonctionnalités_particulières">Détecter des fonctionnalités particulières</h3>

<p>Si vous avez l'intention d'utiliser une fonctionnalité en particulier, utilisez autant que possible la détection d'objet pour détecter cette fonctionnalité particulière. Par exemple, ne considérez pas que si dans un navigateur <code>"filter" in body.style</code> s'évalue à <code>true</code>, alors forcément ce navigateur doit être Internet Explorer et que donc cela signifie qu'il possède un objet <code>window.event</code> disponible dans les gestionnaires d'évenement. </p>

<p>De manière générale, ne considérez pas que si un navigateur supporte une certaine fonctionnalité DOM, alors il doit forcément en supporter une autre, particulièrement si elle est non standard. Ou, à l'inverse, que s'il ne supporte <em>pas</em> une autre fonctionnalité, alors il n'en supportera pas non plus une autre. Par exemple, ce n'est pas parce qu'un navigateur supporte <code>onload</code> sur les éléments scripts alors cela signifie qu'il ne supportera jamais <code>onreadystatechange</code> sur ces mêmes éléments.</p>

<p>Les comportement des navigateurs convergent de plus en plus: des fonctionnalités sont ajoutées, supprimées, des bugs sont corrigés. Tout ceci arrive regulièrement et arrivera encore.</p>

<p>Ne cherchez donc pas à détecter une fonctionnalité ou un objet pour en déduire ensuite que parce qu'elle existe (ou non) alors telle ou telle autre fonctionnalité doit alors aussi exister (ou non).</p>

<h3 id="Ne_détectez_pas_l'agent_utilisateur">Ne détectez pas l'agent utilisateur</h3>

<p>Ceci est une sous-catégorie très particulière de l'exemple précédent. Il ne faut pas penser qu'une certaine fonctionnalité (la présence ou non d'une certaine chaine de caractères dans l'agent utilisateur -UA-) implique la présence ou l'absence d'autres fonctionnalités.</p>

<h4 id="Si_vous_devez_détecter_l'agent_utilisateur_alors_ne_détectez_que_pour_les_anciennes_versions.">Si vous devez détecter l'agent utilisateur, alors ne détectez que pour les anciennes versions.</h4>

<p>Si vous devez <strong>vraiment</strong> détecter l'agent utilisateur, alors ne l'utilisez que pour cibler des versions déjà dépassées.<br>
 Tout d'abord, prévoyez toujours un chemin dans votre code pour les navigateurs que vous ne connaissez pas, ainsi que pour les versions courantes et futures des navigateurs avec lesquels vous avez testé votre site. Ensuite si ce chemin par défaut ne fonctionne pas dans certaines anciennes versions de certains navigateurs et uniquement si l'erreur ne peut pas être détectée par l'absence de fonctionnalités utilisées par votre chemin par défaut, alors il est raisonnable d'ajouter des hacks qui ne ciblent que ces anciennes versions de certains navigateurs, en recourant à la détection de l'agent utilisateur.</p>

<p>Pour les besoins de ce conseil, considérez que "version courante" signifie la dernière version du navigateur que vous avez testé. Par exemple, si vous avez testé le chemin par défaut de votre code dans Firefox Aurora mais que Firefox Beta et les dernières versions ont un bug qui font planter votre code, alors il est raisonnable de considérer le numero de version de Aurora au moment du test comme étant la "version courante", et considérer la version Beta comme une version "ancienne", même si elle n'est pas encore sortie pour le public.</p>

<h3 id="Ne_créez_pas_de_chemin_de_code_inutile_pour_une_multitude_de_navigateurs_différents">Ne créez pas de chemin de code inutile pour une multitude de navigateurs différents</h3>

<div>N'allez pas créer trop de branches de code différentes, qui s'executent en fonction de l'agent utilisateur ou de la détection de fonctionnalité si vous avez une branche de code qui fonctionne pour tous les navigateurs. Il y a de fortes chances pour que les navigateurs convergent vers un comportement commun, ce qui risque de casser les chemins alternatifs que vous auriez créés pour tel ou tel navigateur.</div>

<h2 id="Test">Test</h2>

<h3 id="Tester_dans_les_navigateurs_principaux">Tester dans les navigateurs principaux</h3>

<p>Testez votre code au moins sous Firefox, Chrome ou Safari (vu que les deux sont basés sur le même moteur WebKit), Opera et Internet Explorer. Si vous avez suivi le conseil donné précedemment à propos de l'unique branche de code pour toutes les versions de navigateurs (connues et inconnues), tester uniquement cette unique branche de code dans tous les navigateurs rends extremement probable le fait que votre code ne cassera pas dans le futur.</p>

<p>Parfois, plusieurs navigateurs implementent une certaine fonctionnalité de manière légérement différente. Si vous avez une unique branche de code qui tourne dans tous les navigateurs principaux, cela signifie que vous utilisez soit des fonctionnalités pour lesquelles les navigateurs ont un comportement identiques, ou, s'ils n'ont pas encore convergé vers un seul comportement, votre code fonctionnera quelque soit le comportement final qui sera utilisé par tous.</p>

<h2 id="Prefixes_et_fonctionnalités_propres_à_un_certain_navigateur">Prefixes et fonctionnalités propres à un certain navigateur</h2>

<h3 id="N'utilisez_pas_de_hack_pour_cibler_la_version_actuelle_ou_une_version_future_d'un_navigateur">N'utilisez pas de hack pour cibler la version actuelle ou une version future d'un navigateur</h3>

<p>Cela reviendrai à supposer que la corrélation actuelle entre plusieurs bugs implique une future corrélation entre ces mêmes bugs. Nous avons vu que cela n'était pas le cas.</p>

<p>Il est par contre acceptable de cibler d'anciennes versions du navigateur si votre hack repose sur un bug présent dans les anciennes versions et corrigé dans les versions actuelles. Une fois que le bug X a été corrigé d'un navigateur, vous pouvez savoir que toutes les versions qui avaient le bug X avaient aussi le bug Y, et vous pourrez ainsi vous servir de X pour cibler des cas particuliers pour le bug Y.</p>

<p>Dans ce cas, on considère par "actuelles" les versions les plus récentes du navigateur que vous avez testé, comme nous l'avons déjà évoqué dans le cas de la détection de l'agent utilisateur précédemment.</p>

<h3 id="Evitez_de_dépendre_de_fonctionnalités_non_standard_ultra_récentes">Evitez de dépendre de fonctionnalités non standard ultra récentes</h3>

<p>Même si la fonctionnalitée est préfixée, l'utiliser peut être dangereux : au fur et à mesure de l'évolution de la spécification, l'implémentation préfixée du navigateur peut évoluer pour se rapprocher de la spécification. De plus, une fois la fonctionnalité standardisée, les versions prefixées seront vraisemblablement supprimées.</p>

<p>Les fonctionnalités non standard, prefixées, sont fournies par les développeurs de navigateurs pour vous permettre de les expérimenter et d'offrir vos remarques en retour. Elles ne sont pas censées être déployées. Si vous choisissez de les utiliser, préparez-vous à faire des mises à jour régulières de votre site pour rester à flot avec les changements.</p>

<p>Lorsque vous utilisez des fonctionnalités ultra récentes (même standards) qui ne sont pas encore implémentées partout, assurez-vous de tester les solutions de secours. Assurez-vous de tester ce qu'il se passe dans un navigateur qui n'implémente pas la fonctionnalité que vous utilisez, plus particulierement si vous ne l'utilisez pas régulièrement lors de l'élaboration de votre site.</p>

<h3 id="N'utilisez_pas_les_versions_préfixées_des_fonctionnalités_à_moins_de_cibler_les_anciennes_versions">N'utilisez pas les versions préfixées des fonctionnalités, à moins de cibler les anciennes versions</h3>

<p>Le comportement des versions préfixées des fonctionnalités peut changer dans une future version. Néanmoins, dès lors qu'un navigateur est sorti avec une fonctionnalité non-prefixée, vous pouvez utiliser la version préfixée pour cibler les anciennes versions. Assurez-vous de toujours utiliser la version non-préfixée quand celle-ci est disponible.</p>

<p>Voici un exemple, pour un navigateur qui utilise le préfixe <code>-vnd</code> en CSS et qui a sorti une version non-prefixée de la propriété <code>rends-moi-joli</code>, avec un comportement défini pour la valeur "<code>parfois</code>" qui diffère de la valeur préfixée.</p>

<pre class="brush: html">&lt;style&gt;
  .joli-element {
    -vnd-rends-moi-joli: parfois;
    rends-moi-joli: parfois;
  }
&lt;/style&gt;
</pre>

<p>L'ordre des déclarations dans la règle précédente est important : la version non préfixée doit apparaitre en dernier.</p>

<h3 id="N'utilisez_pas_les_versions_non_préfixées_des_propriétés_CSS_ou_des_APIs_tant_qu'au_moins_un_navigateur_ne_les_ont_pas_implémentées">N'utilisez pas les versions non préfixées des propriétés CSS ou des APIs tant qu'au moins un navigateur ne les ont pas implémentées</h3>

<p>Tant que le support d'une version non préfixée d'une fonctionnalité n'est pas généralisé auprès des navigateurs, son comportement peut encore changer de manière radicale. Plus particulièrement, n'utilisez pas les versions non préfixées si aucun navigateur ne les implémente. Vous ne pouvez même pas être sûr que la syntaxe de la version finale sera la même que la syntaxe utilisée dans l'une des version préfixées.</p>

<h2 id="Hygiène_de_code">Hygiène de code</h2>

<h3 id="Evitez_les_>_manquants">Evitez les &gt; manquants</h3>

<p>Passer votre code au validateur est un bon moyen de s'assurer de cela. Mais même si votre site ne valide pas complétement, vous devriez vous assurer que tous vos caractères &gt; sont présents.<br>
 S'ils manquent, cela peut vous amener à des situations où un nom de balise est interprété comme un attribut d'une balise précédente. Cela peut sembler fonctionner pendant quelques temps, mais finira par casser si une spécification future défini un sens à cet attribut. </p>

<p>Voici un exemple qui fonctionne dans les navigateurs ne possédant pas le support du HTML5, mais est cassé dans un navigateur le supportant :</p>

<pre class="brush: html">&lt;form action="http://www.exemple.com"&gt;
  &lt;input type="submit" value="Soumettre le formulaire"
&lt;/form&gt;
</pre>

<p>à cause du &gt; manquant sur la balise <code>input</code>.</p>

<h3 id="Ne_laissez_pas_de_tests_qui_ne_fonctionnent_pas_dans_votre_code">Ne laissez pas de tests qui ne fonctionnent pas dans votre code</h3>

<p>Si vous essayez d'utiliser une propriété CSS, mais que celle-ci n'a pas d'effet, supprimez-la. Elle pourrait se mettre à avoir un effet que vous n'attendiez pas du tout dans une version future.</p>

<p>{{ languages( {"en":"en/Web_development/Writing_forward-compatible_websites" } ) }}</p>
