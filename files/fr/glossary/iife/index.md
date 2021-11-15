---
title: IIFE
slug: Glossary/IIFE
tags:
  - Glossaire
  - JavaScript
  - Programmation
translation_of: Glossary/IIFE
original_slug: Glossaire/IIFE
---
<p><strong>IIFE </strong>(Immediately Invoked Function Expression) <em>(Expression de fonction invoquée immédiatement)</em> est une {{glossary("Function","fonction")}} {{glossary("JavaScript")}} qui est exécutée dès qu'elle est définie.</p>

<p>C'est un modèle de conception qui est également connu sous le nom de {{glossary("Self-Executing Anonymous Function","Fonction anonyme auto-exécutable")}} et contient deux parties principales. La première est la fonction anonyme avec portée lexicale incluse dans le {{jsxref("Operators/Grouping", "groupement opérateur")}}<code>()</code>. Cela empêche l'accès aux variables dans l'expression idiomatique IIFE ainsi que la pollution de la portée globale.</p>

<p>La deuxième partie crée la fonction immédiatement exécutable<code> ()</code>, à travers laquelle le moteur JavaScript interprétera directement la fonction.</p>

<h2 id="Exemples">Exemples</h2>

<p>La fonction devient une expression de fonction qui est immédiatement exécutée. La variable dans l'expression ne peut pas être atteinte de l'extérieur.</p>

<pre class="brush: js">(function () {
    var aName = "Barry";
})();
// Le nom de la variable n'est pas accessible depuis le périmètre externe
aName // lancement "Exception ReferenceError: aName n'est pas défini"</pre>

<p>Affecter l'IIFE à une variable ne la stocke pas mais reçoit son résultat.</p>

<pre class="brush: js">var result = (function () {
    var name = "Barry";
    return name;
})();
// Crée immédiatement la sortie: 
result; // "Barry"</pre>

<h2 id="Pour_approfondir">Pour approfondir</h2>

<h3 id="Apprendre_sur_ce_sujet">Apprendre sur ce sujet</h3>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Une_r%C3%A9introduction_%C3%A0_JavaScript#Les_fonctions">Exemple rapide</a> (à la fin de la section "Les fonctions", juste avant "Les objets personnalisés")</li>
</ul>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li><a href="https://fr.wikipedia.org/wiki/JavaScript#Expressions_de_fonctions_imm%C3%A9diatement_invoqu%C3%A9es">Immediately-invoked function expression (IIFE)</a> sur Wikipédia</li>
</ul>
