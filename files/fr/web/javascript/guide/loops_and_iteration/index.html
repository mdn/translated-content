---
title: Boucles et itérations
slug: Web/JavaScript/Guide/Loops_and_iteration
tags:
  - Guide
  - JavaScript
  - Syntax
translation_of: Web/JavaScript/Guide/Loops_and_iteration
original_slug: Web/JavaScript/Guide/Boucles_et_itération
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Contr%C3%B4le_du_flux_Gestion_des_erreurs", "Web/JavaScript/Guide/Fonctions")}}</div>

<p>Les boucles permettent de répéter des actions simplement et rapidement. Ce chapitre du<a href="/fr/docs/Web/JavaScript/Guide"> guide JavaScript</a> présente les différentes instructions qu'il est possible d'utiliser en JavaScript pour effectuer des itérations.</p>

<p>Les boucles permettent de répéter des actions simplement et rapidement. Une boucle peut être vue comme une version informatique de « copier N lignes » ou de « faire X fois quelque chose ». Par exemple, en JavaScript, on pourrait traduire « Faire 5 pas vers l'est » avec cette boucle :</p>

<pre class="brush: js">for (let pas = 0; pas &lt; 5; pas++) {
  // Ceci sera exécuté 5 fois
  // À chaque éxécution, la variable "pas" augmentera de 1
  // Lorsque'elle sera arrivée à 5, le boucle se terminera.
  console.log('Faire ' + pas + ' pas vers l\'est');
}
</pre>

<p>Il y a différents types de boucles mais elles se ressemblent toutes au sens où elles répètent une action un certain nombre de fois (ce nombre peut éventuellement être zéro). Les différents types de boucles permettent d'utiliser différentes façon de commencer et de terminer une boucle. Chaque type de boucle pourra être utilisé en fonction de la situation et du problème que l'on cherche à résoudre.</p>

<p>Voici les différentes boucles fournies par JavaScript :</p>

<ul>
 <li>{{anch("Linstruction for")}}</li>
 <li>{{anch("Linstruction do...while")}}</li>
 <li>{{anch("Linstruction while")}}</li>
 <li>{{anch("Linstruction label")}}</li>
 <li>{{anch("Linstruction break")}}</li>
 <li>{{anch("Linstruction continue")}}</li>
 <li>{{anch("Linstruction for...in")}}</li>
 <li>{{anch("Linstruction for...of")}}</li>
</ul>

<h2 id="Linstruction_for">L'instruction for</h2>

<p>Une boucle {{jsxref("statements/for", "for")}} répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée. La boucle <code>for</code> JavaScript ressemble beaucoup à celle utilisée en C ou en Java. Une boucle <code>for</code> s'utilise de la façon suivante :</p>

<pre class="syntaxbox">for ([expressionInitiale]; [condition]; [expressionIncrément])
  instruction
</pre>

<p>Voici ce qui se passe quand une boucle <code>for</code> s'exécute :</p>

<ol>
 <li>L'expression initiale <code>expressionInitiale</code> est exécutée si elle est présente. Généralement, on utilise cette expression pour initialiser un ou plusieurs compteurs dont on se servira dans la boucle. Il est possible d'utiliser des expressions plus complexes si besoin. Elle peut servir à déclarer des variables.</li>
 <li>L'expression <code>condition</code> est évaluée, si elle vaut <code>true</code>, les instructions contenues dans la boucle sont exécutées. Si la valeur de <code>condition</code> est <code>false</code>, la boucle <code>for</code> se termine. Si la condition est absente, elle est considérée comme <code>true</code>.</li>
 <li>L'instruction <code>instruction</code> est exécutée. Si l'on souhaite exécuter plusieurs instructions, on utilisera un bloc d'instructions (<code>{ ... }</code>) afin de les grouper.</li>
 <li>Si elle est présente, l'expression de mise à jour<code> expressionIncrément</code> est exécutée.</li>
 <li>On retourne ensuite à l'étape 2.</li>
</ol>

<h3 id="Exemple"><strong>Exemple</strong></h3>

<p>La fonction suivante contient une instruction <code>for</code> qui compte le nombre d'options sélectionnées dans une liste déroulante (ici, un objet {{HTMLElement("select")}} permettant une sélection multiple). L'instruction <code>for</code> déclare une variable <code>i</code> et l'initialise à zéro. Elle vérifie que <code>i</code> est bien inférieur au nombre d'options et, pour chaque option, effectue un test conditionnel pour savoir si l'option est sélectionnée puis passe à l'option suivante en incrémentant la variable <code>i</code> pour chaque itération.</p>

<pre class="brush: html">&lt;form name="selectForm"&gt;
  &lt;p&gt;
    &lt;label for="typesMusique"&gt;Veuillez choisir des genres musicaux, puis cliquez :&lt;/label&gt;
    &lt;select id="typesMusique" name="typesMusique" multiple="multiple"&gt;
      &lt;option selected="selected"&gt;R&amp;B&lt;/option&gt;
      &lt;option&gt;Jazz&lt;/option&gt;
      &lt;option&gt;Blues&lt;/option&gt;
      &lt;option&gt;New Age&lt;/option&gt;
      &lt;option&gt;Classique&lt;/option&gt;
      &lt;option&gt;Opera&lt;/option&gt;
    &lt;/select&gt;
  &lt;/p&gt;
  &lt;p&gt;&lt;button id="btn" type="button"&gt;Combien sont sélectionnés ?&lt;/button&gt;&lt;/p&gt;
&lt;/form&gt;

&lt;script&gt;
function quantité(selectObject) {
  let qtéSélectionnée = 0;
  for (let i = 0; i &lt; selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      qtéSélectionnée++;
    }
  }
  return qtéSélectionnée;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  alert('Nombre d\'options choisies : ' + quantité(document.selectForm.typesMusique))
});
&lt;/script&gt;

</pre>

<h2 id="Linstruction_do...while">L'instruction <code>do...while</code></h2>

<p>L'instruction {{jsxref("statements/do...while", "do...while")}} permet de répéter un ensemble d'instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée. (<em>NdT</em> : littéralement « do...while » signifie « faire... tant que »). Une instruction <code>do...while</code> s'utilise de la façon suivante :</p>

<pre class="syntaxbox">do
  instruction
while (condition);
</pre>

<p><code>instruction</code> est exécutée au moins une fois avant que la condition soit vérifiée. Pour utiliser plusieurs instructions à cet endroit, on utilisera une instruction de bloc (<code>{ ... }</code>) pour regrouper différentes instructions. Si la <code>condition</code> est vérifiée, l'instruction est à nouveau exécutée. À la fin de chaque exécution, la condition est vérifiée. Quand la condition n'est plus vérifiée (vaut <code>false</code> ou une valeur équivalente), l'exécution de l'instruction<code> do...while</code> est stoppée et le contrôle passe à l'instruction suivante.</p>

<h3 id="Exemple_2">Exemple</h3>

<p>Dans l'exemple qui suit, la boucle <code>do</code> est exécutée au moins une fois et répétée jusqu'à ce que <code>i</code> ne soit plus inférieur à 5.</p>

<pre class="brush: js">let i = 0;
do {
  i += 1;
  console.log(i);
} while (i &lt; 5);</pre>

<h2 id="Linstruction_while">L'instruction <code>while</code></h2>

<p>Une instruction {{jsxref("statements/while", "while")}} permet d'exécuter une instruction tant qu'une condition donnée est vérifiée. Cette instruction <code>while</code> s'utilise de la façon suivante :</p>

<pre class="syntaxbox">while (condition)
  instruction
</pre>

<p>Si la condition n'est pas vérifiée, l'instruction<code> instruction</code> n'est pas exécutée et le contrôle passe directement à l'instruction suivant la boucle.</p>

<p>Le test de la condition s'effectue avant d'exécuter <code>instruction</code>. Si la condition renvoie <code>true</code> (ou une valeur équivalente), <code>instruction</code> sera exécutée et la condition sera testée à nouveau. Si la condition renvoie <code>false</code> (ou une valeur équivalente), l'exécution s'arrête et le contrôle est passé à l'instruction qui suit <code>while</code>.</p>

<p>Pour pouvoir utiliser plusieurs instructions dans la boucle, on utilisera une instruction de bloc (<code>{ ... }</code>) afin de les regrouper.</p>

<h3 id="Exemple_1">Exemple 1</h3>

<p>La boucle <code>while</code> qui suit permet d'effectuer des itérations tant que <code>n</code> est inférieur à 3 :</p>

<pre class="brush: js">let n = 0;
let x = 0;
while (n &lt; 3) {
  n++;
  x += n;
}
</pre>

<p>À chaque itération, la boucle incrémente <code>n</code> et ajoute la valeur de <code>n</code> à <code>x</code>. <code>x</code> et <code>n</code> prendront ainsi les valeurs suivantes :</p>

<ul>
 <li>Après la première itération : <code>n</code> = 1 et <code>x</code> = 1</li>
 <li>Après la deuxième itération : <code>n</code> = 2 et <code>x</code> = 3</li>
 <li>Après la troisième itération : <code>n</code> = 3 et <code>x</code> = 6</li>
</ul>

<p>Une fois la troisième itération effectuée, la condition <code>n &lt; 3</code> n'est plus vérifiée, par conséquent, la boucle se termine.</p>

<h3 id="Exemple_2_2">Exemple 2</h3>

<p>Attention à éviter les boucles infinies. Il faut bien s'assurer que la condition utilisée dans la boucle ne soit plus vérifiée à un moment donné. Si la condition est toujours vérifiée, la boucle se répétera sans jamais s'arrêter. Dans l'exemple qui suit, les instructions contenues dans la boucle <code>while</code> s'exécutent sans discontinuer car la condition est toujours vérifiée :</p>

<pre class="brush: js">while (true) {
  console.log("Coucou monde !");
}</pre>

<h2 id="Linstruction_label">L'instruction <code>label</code></h2>

<p>Un {{jsxref("statements/label","label")}} (ou étiquette) permet de fournir un identifiant pour une instruction afin d'y faire référence depuis un autre endroit dans le programme. On peut ainsi identifier une boucle grâce à un label puis utiliser les instructions <code>break</code> ou <code>continue</code> pour indiquer si le programme doit interrompre ou poursuivre l'exécution de cette boucle.</p>

<p>On utilise un label de la façon suivante :</p>

<pre class="syntaxbox">label:
  instruction
</pre>

<p>La valeur de <code><em>label</em></code> peut être n'importe quel identifiant JavaScript valide (et ne doit pas être un mot réservé pour le langage). L'<code><em>instruction</em></code> peut être n'importe quelle instruction JavaScript valide (y compris un bloc).</p>

<h3 id="Exemple_3">Exemple</h3>

<p>Dans cet exemple, on utilise un label <code>memoBoucle</code> pour identifier une boucle <code>while</code>.</p>

<pre class="brush: js">memoBoucle:
while (memo == true) {
  faireQQC();
}</pre>

<div class="note">
<p><strong>Note :</strong> Pour plus de détails sur cette instruction, voir la page de la référence JavaScript pour <a href="/fr/docs/Web/JavaScript/Reference/Instructions/label"><code>label</code></a>.</p>
</div>

<h2 id="Linstruction_break">L'instruction <code>break</code></h2>

<p>L'instruction {{jsxref("statements/break","break")}} est utilisée pour finir l'exécution d'une boucle, d'une instruction <code>switch</code>, ou avec un label.</p>

<ul>
 <li>Lorsque <code>break</code> est utilisé sans label, il provoque la fin de l'instruction <code>while</code>, <code>do-while</code>, <code>for</code>, ou <code>switch</code> dans laquelle il est inscrit (on finit l'instruction la plus imbriquée), le contrôle est ensuite passé à l'instruction suivante.</li>
 <li>Lorsque <code>break</code> est utilisé avec un label, il provoque la fin de l'instruction correspondante.</li>
</ul>

<p>La syntaxe de cette instruction possède donc deux formes :</p>

<ol>
 <li><code>break;</code></li>
 <li><code>break <em>label</em>;</code></li>
</ol>

<p>La première forme permet d'interrompre la boucle la plus imbriquée (ou le <code>switch</code>) dans laquelle on se trouve. La seconde forme interrompt l'exécution d'une instruction identifiée par un label.</p>

<h3 id="Exemple_1_2">Exemple <strong>1</strong></h3>

<p>Dans l'exemple qui suit, on itère sur un tableau grâce à une boucle jusqu'à trouver un élément dont la valeur est <code>valeurTest </code>:</p>

<pre class="brush: js">for (i = 0; i &lt; a.length; i++) {
  if (a[i] === valeurTest) {
    break;
  }
}</pre>

<h3 id="Exemple_2_3">Exemple 2</h3>

<p>Ici, on utilise <code>break</code> des deux façons : avec une instruction représentée par un label et sans.</p>

<pre class="brush: js">let x = 0;
let z = 0;
labelAnnuleBoucle: while (true) {
  console.log("Boucle externe : " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Boucle interne : " + z);
    z += 1;
    if (z === 10 &amp;&amp; x === 10) {
      break labelAnnuleBoucle;
    } else if (z === 10) {
      break;
    }
  }
}
</pre>

<h2 id="Linstruction_continue">L'instruction <code>continue</code></h2>

<p>L'instruction {{jsxref("statements/continue","continue")}} permet de reprendre une boucle <code>while</code>, <code>do-while</code>, <code>for</code>, ou une instruction <code>label</code>.</p>

<ul>
 <li>Lorsque <code>continue</code> est utilisé sans label, l'itération courante de la boucle (celle la plus imbriquée) est terminée et la boucle passe à l'exécution de la prochaine itération. À la différence de l'instruction <code>break</code>, <code>continue</code> ne stoppe pas entièrement l'exécution de la boucle. Si elle est utilisée dans une boucle <code>while</code>, l'itération reprend au niveau de la condition d'arrêt. Dans une boucle <code>for</code>, l'itération reprend au niveau de l'expression d'incrément pour la boucle.</li>
 <li>Lorsque <code>continue</code> est utilisé avec un label, il est appliqué à l'instruction de boucle correspondante.</li>
</ul>

<p>L'instruction <code>continue</code> s'utilise donc de la façon suivante :</p>

<ol>
 <li><code>continue;</code></li>
 <li><code>continue </code><em><code>label;</code></em></li>
</ol>

<h3 id="Exemple_1_3">Exemple 1</h3>

<p>Dans l'exemple qui suit, on utilise une boucle <code>while</code> avec une instruction <code>continue</code> qui est exécutée lorsque <code>i</code> vaut 3. Ici, <code>n</code> prendra donc les valeurs 1, 3, 7 et 12.</p>

<pre class="brush: js">let i = 0;
let n = 0;
while (i &lt; 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// 1, 3, 7, 12

</pre>

<h3 id="Exemple_2_4">Exemple 2</h3>

<p>Dans l'exemple suivant, on a une instruction étiquetée <code>vérifIetJ</code> qui contient une autre instruction étiquetée <code>vérifJ</code>. Si l'instruction <code>continue</code> est utilisée, le programme reprend l'exécution au début de l'instruction <code>vérifJ</code>. Chaque fois que <code>continue</code> est utilisé, <code>vérifJ</code> réitère jusqu'à ce que sa condition renvoie <code>false</code>. Lorsque c'est le cas, le reste de l'instruction <code>vérifIetJ</code> est exécuté.</p>

<p>Si <code>continue</code> utilisait l'étiquette <code>vérifIetJ</code>, le programme continuerait au début de l'instruction <code>vérifIetJ</code></p>

<pre class="brush: js">let i = 0;
let j = 8;

vérifIetJ: while (i &lt; 4) {
  console.log("i : " + i);
  i += 1;

  vérifJ: while (j &gt; 4) {
    console.log("j : "+ j);
    j -= 1;
    if ((j % 2) === 0){
      continue vérifJ;
    }
    console.log(j + " est impaire.");
   }
   console.log("i = " + i);
   console.log("j = " + j);
}</pre>

<h2 id="Linstruction_for...in">L'instruction <code>for...in</code></h2>

<p>L'instruction {{jsxref("statements/for...in","for...in")}} permet d'itérer sur l'ensemble des propriétés énumérables d'un objet. Pour chaque propriété, JavaScript exécutera l'instruction indiquée. Cette instruction s'utilise de la façon suivante :</p>

<pre class="syntaxbox">for (variable in objet) {
  instruction
}
</pre>

<h3 id="Exemple_4">Exemple</h3>

<p>La fonction suivante prend comme argument un objet et le nom de cet objet. Elle parcourt ensuite les propriétés de l'objet et renvoie une chaîne de caractères qui liste les propriétés avec leurs noms et leurs valeurs respectives :</p>

<pre class="brush: js">function afficherProps(obj, nomObj) {
  var result = "";
  for (var i in obj) {
    result += nomObj + "." + i + " = " + obj[i] + "\n";
  }
  result += "\n";
  return result;
}
</pre>

<p>Pour un objet <code>voiture</code> dont les propriétés sont <code>fabricant</code> et <code>modèle</code>, <code>result</code> serait :</p>

<pre class="brush: js">voiture.fabricant = Ford
voiture.modèle = Mustang
</pre>

<h3 id="Les_tableaux_arrays_et_for...in">Les tableaux (arrays) et <code>for...in</code></h3>

<p>Bien qu'il soit tentant d'utiliser cette instruction pour parcourir les éléments d'un objet <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array">Array</a></code> , cela peut avoir des comportements inattendus. En effet, <code>for...in</code> permet de parcourir les propriétés définies par l'utilisateur ainsi que les éléments de tableau. Ainsi, si l'on modifie un objet <code>Array</code> en lui ajoutant des propriétés et/ou des méthodes, la boucle <code>for...in</code> renverra le nom de ces nouvelles propriétés en plus des indices des éléments du tableau. C'est pourquoi, il est préférable d'utiliser une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for">for</a></code> avec les indices du tableau pour parcourir ses éléments.</p>

<h2 id="Linstruction_for...of">L'instruction <code>for...of</code></h2>

<p>L'instruction {{jsxref("statements/for...of","for...of")}} crée une boucle qui fonctionne avec <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">les objets itérables</a> (qui incluent {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, l'objet <code><a href="/fr/docs/Web/JavaScript/Reference/Fonctions/arguments">arguments</a></code>, etc.). La boucle appelle un mécanisme d'itération propre à l'objet utilisé et elle parcourt l'objet et les valeurs de ses différentes propriétés.</p>

<pre class="syntaxbox">for (<em>variable</em> of <em>objet</em>) {
  <em>instruction
</em>}</pre>

<p>Dans l'exemple suivant, on illustre la différence entre une boucle <code>for...of</code> et une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...in">for...in</a></code>.  <code>for...in</code> parcourt les noms des propriétés d'un objet alors que <code>for...of</code> parcourt les <strong>valeurs</strong> des propriétés :</p>

<pre class="brush:js">let arr = [3, 5, 7];
arr.toto = "coucou";

for (let i in arr) {
  console.log(i); // affiche 0, 1, 2, "toto" dans la console
}

for (let i of arr) {
  console.log(i); // affiche 3, 5, 7 dans la console
}
</pre>

<p>{{PreviousNext("Web/JavaScript/Guide/Contr%C3%B4le_du_flux_Gestion_des_erreurs", "Web/JavaScript/Guide/Fonctions")}}</p>
