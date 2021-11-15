---
title: Signature (fonctions)
slug: Glossary/Signature/Function
tags:
  - Glossaire
  - Java
  - JavaScript
  - Programmation
translation_of: Glossary/Signature/Function
original_slug: Glossaire/Signature/Fonction
---
<p>Une<strong> signature de fonction</strong> (ou signature de <em>type</em>, ou signature de <em>méthode</em>) définit les entrées et sorties des {{Glossary("Function", "fonctions")}} et des {{Glossary("Method", "méthodes")}}.</p>

<p>Une signature peut comporter :</p>

<ul>
 <li>Des {{Glossary("Parameter", "paramètres")}} et leurs {{Glossary("Type", "types")}}</li>
 <li>une valeur et un type de retour</li>
 <li>des {{Glossary("Exception", "exceptions")}} susceptibles d'être déclenchées ou reçues</li>
 <li>des informations sur la disponibilité de la méthode dans un programme {{Glossary("OOP", "orienté objet")}} (telles que les mots-clés <code>public</code>, <code>static</code>, ou <code>prototype</code>).</li>
</ul>

<h2 id="En_détail">En détail</h2>

<h3 id="Signatures_en_JavaScript">Signatures en JavaScript</h3>

<p>{{Glossary("JavaScript")}} est un langage à <em>typage faible et </em><em>dynamique</em>. Cela signifie que vous n'avez pas à déclarer le type d'une variable à l'avance. Il sera déterminé automatiquement pendant le traitement du programme. Une signature en JavaScript peut vous apporter certaines informations sur la méthode :</p>

<pre class="brush: js">MonObjet.prototype.maFonction(valeur)</pre>

<ul>
 <li>La méthode est installée sur un {{Glossary("Object","objet")}} appelé <code>MonObjet</code>.</li>
 <li>La méthode est installée sur le <code>prototype</code> de <code>MonObjet</code> (c'est par conséquent une {{Glossary("Method","méthode")}} d'instance) par opposition à une {{Glossary("Method","méthode")}} statique.</li>
 <li>Le nom de la méthode est <code>maFonction</code><code>.</code></li>
 <li>La méthode accepte un paramètre appelé <code>valeur</code> et n'est pas définie.</li>
</ul>

<h3 id="Signatures_en_Java">Signatures en Java</h3>

<p>En {{Glossary("Java")}}, les signatures servent à identifier les méthodes et les classes au niveau du code de la machine virtuelle. Vous devez déclarer les types des variables dans votre code Java afin de pouvoir l'exécuter. Java est à <em>typage fort</em> et vérifiera que chaque paramètre est correct au moment de la compilation.</p>

<pre class="brush: java">public static void main(String[] args)</pre>

<ul>
 <li>Le mot-clé <code>public</code> est un modificateur d'accessibilité et indique que cette méthode peut être appelée par n'importe quel objet.</li>
 <li>Le mot-clé <code>static</code> indique qu'il s'agit d'une méthode de classe, et pas de son opposé, à savoir une méthode d'instance.</li>
 <li>Le mot-clé <code>void</code> indique que cette méthode n'a pas de valeur de retour.</li>
 <li>Le nom de la méthode est <code>main</code>.</li>
 <li>La méthode accepte un paramètre de type tableau de chaînes. Il est nommé <code>args.</code></li>
</ul>

<h2 id="Pour_approfondir"><code>Pour approfondir</code></h2>

<h3 id="Culture_générale"><code>Culture générale</code></h3>

<ul>
 <li>{{Interwiki("wikipedia", "Signature de type#Java", "Signatures de type interne en Java")}} sur Wikipédia</li>
</ul>
