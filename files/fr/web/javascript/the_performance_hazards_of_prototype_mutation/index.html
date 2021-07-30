---
title: 'Performance : les dangers liés à la modification de [[Prototype]'
slug: Web/JavaScript/The_performance_hazards_of_prototype_mutation
tags:
  - JavaScript
  - Performance
translation_of: Web/JavaScript/The_performance_hazards_of__[[Prototype]]_mutation
original_slug: Web/JavaScript/Performance_les_dangers_liés_à_la_modification_de_Prototype
---
<div>{{draft}}</div>

<p>Chaque objet JavaScript possède un prototype (que nous désignerons par la suite par <code>[[Prototype]]</code>, la notation utilisée par la spécification et les implémentations). Lorsqu'on recherche des propriétés sur un objet, on consulte d'abord cet objet puis on analyse son prototype (on « remonte la chaîne ») et ensuite le prototype de ce dernier et ainsi de suite jusqu'à trouver la propriété en question ou jusqu'à ce que la chaîne soit terminée. Cette chaîne est particulièrement utile pour émuler <a href="/fr/docs/Web/JavaScript/Héritage_et_chaîne_de_prototypes">l'héritage entre objets</a>.</p>

<p>ECMAScript 6 introduit certaines méthode pour <em>modifier</em> <code>[[Prototype]]</code>. Cette flexibilité a un coût : la dégradation significative des performances. <strong>Modifier</strong> <strong><code>[[Prototype]]</code> impacte négativement les performances pour <em>tous</em> les moteurs JavaScript modernes.</strong> Dans cet article, nous expliquerons pourquoi et nous verrons les alternatives à privilégier.</p>

<h2 id="De_l'optimisation_des_accès_aux_propriétés_dans_les_moteurs_JavaScript">De l'optimisation des accès aux propriétés dans les moteurs JavaScript</h2>

<p>Les objets sont <a href="https://fr.wikipedia.org/wiki/Table_de_hachage">des tables de hachage</a>, ainsi, en théorie (et en pratique) l'accès à une propriété se fait en temps constant. En revanche, ce « temps constant » peut se décomposer en milliers d'instructions machine. Heureusement, les objets et les propriétés sont souvent « prédictibles » et dans ces cas, la structure sous-jacente peut également être prédictible. Les compilateurs à la volée (ou <em>JIT</em> pour <em>Just In Time</em>) reposent sur ce constat pour rendre les accès plus rapides.</p>

<p>L'optimisation des moteurs s'applique grâce à l'ordre selon lequel les propriétés sont ajoutées aux objets. La plupart des propriétés ajoutées aux objets sont ajoutés dans un ordre semblable (exception faite des accès effectués sous la forme <code>obj[val]</code> où <code>val</code> est une valeur dynamique non constante).</p>

<pre>function Landmark(lat, lon, desc) {
  this.location = { lat: lat, long: lon };
  this.description = desc;
}
var lm1 = new Landmark(-90, 0, "South Pole");
var lm2 = new Landmark(-24.3756466, -128.311018, "Pitcairn Islands");</pre>

<p>Dans cet exemple, chaque <code>Landmark</code> possède les propriétés <code>location</code> et <code>description</code>, <strong>dans cet ordre.</strong> Chaque objet <code>location</code> représentant l'emplacement enregistrera la latitude puis la longitude, <strong>dans cet ordre</strong>. Le code qui suit <em>pourrait</em> supprimer une propriété mais comme c'est peu probable, les moteurs peuvent être amenés à produire du code non optimal pour ces cas de figure. Pour SpiderMonkey, le moteur JavaScript de Firefox, l'ordre spécifique des propriétés (et de certains de leurs aspects en dehors de leurs valeurs) est appelé une <em>forme</em> (le moteur V8, utilisé par Chrome, intitule ce concept <em>structure ID</em>). Si deux objets partagent la même forme, leurs propriétés seront stockées de façon identique.</p>

<p>À l'intérieur des moteurs, on retrouve donc une version C++ semblable à celle-ci (simplifiée ici) :</p>

<pre class="brush: cpp">struct Property {
  Property* prev;     // null si c'est la première propriété
  String name;        // le nom de la propriété
  unsigned int index; // l'index de la valeur dans le stockage
};
using Shape = Property*;
struct Object {
  Shape shape;
  Value* properties;
  Object* prototype;
};</pre>

<p>Avec ces exemples, voici à quoi correspondraient diverses expressions JavaScript basées sur le code ci-dessus, une fois traduites en C++ :</p>

<pre class="brush: cpp">lm1-&gt;properties[0]; // loc1.location
lm1-&gt;properties[1]; // loc1.description
lm2-&gt;properties[0].toObject()-&gt;properties[1]; // loc2.location.long</pre>

<p>Si un moteur connaît la forme d'un objet, il pourra présupposer la position des index pour toutes les propriétés de l'objet. Ainsi, quand on souhaite accéder à une propriété donnée, il suffit de quelques accès indirects par pointeur. Le code machine peut facilement vérifier si un objet a une forme donnée. Si c'est le cas, on utilisera la version rapide et sinon on utilisera la méthode lente.</p>

<h2 id="L'optimisation_naïve_des_propriétés_héritées">L'optimisation naïve des propriétés héritées</h2>

<p>La plupart des propriétés ne sont pas rattachées <em>directement</em> aux objets. Il faut souvent passer par la chaîne de prototypes. On ajoute donc quelques « sauts » via le champ <code>prototype</code> pour atterrir sur l'objet qui contient la propriété. Pour obtenir une optimisation <em>correcte</em>, il faut vérifier qu'aucun objet de la chaîne de prototypes n'a cette propriété. Autrement dit, à chaque saut, il faut vérifier la forme de l'objet.</p>

<pre class="brush: js">var d = new Date();
d.toDateString(); // Date.prototype.toDateString

function Pair(x, y) { this.x = x; this.y = y; }
Pair.prototype.sum = function() { return this.x + this.y; };

var p = new Pair(3, 7);
p.sum(); // Pair.prototype.sum</pre>

<p>Dans la plupart des cas, les moteurs utilisent cette approche rapide. Toutefois, lorsque les performances jouent un rôle déterminant, cette approche n'est pas suffisante.</p>

<h2 id="L'optimisation_intelligente_des_propriétés_héritées">L'optimisation intelligente des propriétés héritées</h2>

<p>Lors des accès prédictibles, on trouve <em>généralement</em> la propriété en un nombre constant de sauts le long de la chaîne. Les objets de chaîne n'acquièrent <em>généralement</em> pas de nouvelle propriétés et l'objet final n'est <em>généralement</em> pas affecté par une <a href="Opérateurs/L_opérateur_delete">suppression</a> de propriétés. Enfin, <strong>la modification de <strong><code>[[Prototype]]</code> est</strong> rare</strong>.  Ces hypothèses sont nécessaires pour éviter de « sauter » sur chacun des prototypes. Les différents moteurs optent pour différentes approches afin d'optimiser les propriétés héritées de façon intelligente.</p>

<dl>
 <dt>La forme de l'objet <em>final</em> qui contient la propriété héritée peut être vérifiée.</dt>
 <dd>Dans ce cas, si on teste les formes, cela implique qu'aucun prototype n'a été modifié sur la chaîne. Ainsi, lorsqu'un prototype est modifié, les formes de tous les objets situés sur le long de la chaîne doivent être changées.
 <pre class="brush: js">var obj1 = {};
var obj2 = Object.create(obj1);
var obj3 = Object.create(obj2);

// Les objets dont la forme va changer
// obj3, obj2, obj1, Object.prototype
obj3.__proto__ = {};</pre>
 </dd>
 <dt>La forme de l'objet initial peut être vérifiée.</dt>
 <dd>Chaque objet qui peut hériter d'une propriété via un prototype modifié doit être modifié afin de refléter ces changements. 
 <pre class="brush: js">var obj1 = {};
var obj2 = Object.create(obj1);
var obj3 = Object.create(obj2);

// Les objets dont la forme va changer
// obj1, obj2, obj3
obj1.__proto__ = {};</pre>
 </dd>
</dl>

<h2 id="Les_effets_néfastes_de_la_modification_de_Prototype">Les effets néfastes de la modification de <code>[[Prototype]]</code></h2>

<p>Les changements de <code>[[Prototype]]</code> impactent les performances sur deux phases : lors du changement puis par la suite. Pour commencer, <strong>modifier <code>[[Prototype]]</code> est lent</strong>, ensuite <strong>modifier <code>[[Prototype]]</code> ralentit le code qui doit interagir avec les objets dont <code>[[Prototype]]</code> a été modifié</strong>.</p>

<h3 id="Modifier_un_Prototype_prend_du_temps">Modifier un <code>[[Prototype]]</code> prend du temps</h3>

<p>Bien que la spécification représente le changement de <code>[[Prototype]]</code> comme la simple modification d'une propriété cachée, les implémentations réelles sont beaucoup plus complexes. Les tactiques précédentes utilisant les formes nécessitent d'examiner (et de modifier) plus d'un objet. Dans la pratique, l'approche qui modifiera le moins d'objets sera différente en fonction de la charge provoquée par le cas d'usage.</p>

<h3 id="Les_Prototypes_modifiés_ralentissent_le_code">Les <code>[[Prototype]]</code>s modifiés ralentissent le code</h3>

<p>Les mauvaises nouvelles ne s'arrêtent une fois la modification terminée. De nombreuses opérations utilisées pour examiner les propriétés reposent sur l'hypothèse de conservation de la chaîne de <code>[[Prototype]]</code>. Lorsque le moteur observe une modification, l'objet avec le prototype modifié « empoisonne » tout le code qui manipule cet objet. Voici un cas d'école assez désastreux :</p>

<pre class="brush: js">var obj = {};
obj.__proto__ = { x: 3 }; // modification gratuite

var arr = [obj];
for (var i = 0; i &lt; 5; i++)
  arr.push({ x: i });

function f(v, i) {
  var elt = v[i];
  var r =  elt.x &gt; 2 // non optimal
           ? elt
           : { x: elt.x + 1 };
  return r;
}
var c = f(arr, 0);
c.x; // non optimal : la valeur a des propriétés inconnues
c = f(arr, 1);
c.x; // non optimal !

var arr2 = [c];
arr2[0].x; // non optimal
</pre>

<p>Seul le code exécuté à de nombreuses reprises est optimisé et cet exemple ne déclenche pas <em>tous</em> ces comportements. En revanche pour du code « chaud », on pourrait rencontrer ces problèmes.</p>

<p>Pouvoir tracer l'utilisation d'un objet dont le prototype a été modifié, souvent parmi différents scripts, est extraordinairement complexe. Cela nécessite une analyse textuelle soignée et dépend des comportements à l'exécution. Des modifications indépendentes en apparence peuvent avoir des impacts bien plus loin et le code employé, auparavant optimal, sera alors sous-optimal et plus lent.</p>

<p>Il faudrait sinon pouvoir stocker des informations <em>cross-objet</em>.</p>

<p>Les informations <em>cross-objet</em> sont différentes des formes et on ne peut pas les vérifier simplement. Une modification apportée à cette information pourrait avoir des impacts à de nombreux emplacements, pas nécessairement évidents : dans ce cas, où vérifier que les hypothèses sont respectées ? Ainsi, plutôt que de vérifier ces hypothèses avant l'utilisation, on invalide <em>toutes</em> les hypothèses lorsqu'une modification se produit. Lorsque <code>[[Prototype]]</code> change, <em>tout</em> le code qui en dépend doit être rejeté.  L'opération <code>obj.__proto__ = ...</code> est donc lente par nature. En rejetant du code optimisé, cela rend le code beaucoup plus lent par la suite.</p>

<p>Encore pire, lorsqu'on évalue <code>obj.prop</code>, le moteur voit que l'objet a eu son <code>[[Prototype]]</code> changé et les informations précédemment enregistrées à propos de l'objet deviennent inutiles et SpiderMonkey considère que l'objet possède des caractéristiques inconnues. Ainsi, tout code qui manipule cet objet par la suite prendra l'hypothèse correspondant au pire des cas. L'optimisation des moteurs de compilation à la volée fonctionnent sur l'hypothèse que <em>l'exécution à venir est similaire à l'exécution passée</em>. Si du code observe un objet avec un <code>[[Prototype]]</code> modifié, ce code observera vraisemblablement d'autres objets. C'est pourquoi, <strong>toutes les opérations qui intéragissent avec un objet dont le <code>[[Prototype]]</code> a changé, ne peuvent pas être optimisées</strong>.</p>
