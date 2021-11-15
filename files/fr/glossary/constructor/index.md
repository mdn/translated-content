---
title: Constructeur
slug: Glossary/Constructor
tags:
  - Glossaire
  - scripts
translation_of: Glossary/Constructor
original_slug: Glossaire/Constructeur
---
<p>Un <strong>constructeur</strong> est associé à un {{glossary("object","objet")}} d'une classe particulière qui a été instanciée. Le constructeur initialise cet objet et peut fournir un accès à ses informations privées. Le concept de constructeur peut s'appliquer à la plupart des langages de {{glossary("OOP","programmation orientée objet")}}. Dans l'essentiel, un constructeur en {{glossary("JavaScript")}} est en général déclaré lors de l'instance d'une {{glossary("Class","classe")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">// Voici un constructeur générique par défaut de la classe Default
function Default() {
}

// Voici le constructeur de classe surchargé Overloaded
// avec des arguments en paramètres
function Overloaded(arg1, arg2, ...,argN){
}
</pre>

<p>Pour appeler le constructeur d'une classe en JavaScript, utilisez un opérateur <code>new</code> pour affecter une nouvelle {{glossary("Object reference","référence d'objet")}} à une {{glossary("Variable","variable")}}.</p>

<pre class="brush: js">function Default() {
}

// Une nouvelle référence d'un objet Default affectée à
// la variable locale defaultReference
var defaultReference = new Default();
</pre>

<p> </p>

<h2 id="Pour_approfondir">Pour approfondir</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li>{{Interwiki("wikipedia", "Constructeur (programmation)", "Constructeur")}} sur Wikipédia</li>
</ul>

<h3 id="Référence_technique">Référence technique</h3>

<ul>
 <li><a href="/fr/docs/Learn/JavaScript/Objects#The_Constructor">Le constructeur en programmation JavaScript orientée objet</a> sur MDN</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_new">Opérateur new en JavaScript</a> sur MDN</li>
</ul>
