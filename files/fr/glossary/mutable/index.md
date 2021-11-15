---
title: Muable
slug: Glossary/Mutable
tags:
  - Débutant
  - Glossaire
  - Variables
translation_of: Glossary/Mutable
original_slug: Glossaire/Muable
---
<p>Une variable<em> muable</em> (<em>mutable</em>) est une variable qui peut être modifiée. En {{glossary("JavaScript")}}, seuls les {{Glossary("Object","objets")}} et {{Glossary("Array","tableaux")}} (<em>arrays</em>) sont muables, pas {{Glossary("primitive", "les valeurs primitives")}}.</p>

<p>(Vous pouvez faire pointer un nom de variable vers une nouvelle valeur, mais la valeur précédente est toujours conservée en mémoire. D'où le besoin de nettoyage.)</p>

<p>Un<strong> objet muable </strong>est un objet dont l'état peut être modifié après sa création.</p>

<p>Les <strong>objets immuables (<em>immutable</em>) </strong>sont des objets dont l'état ne peut être modifié une fois l'objet créé.</p>

<p><strong>Chaînes de caractères et nombres</strong> sont <strong>immuables</strong>. Un exemple pour bien comprendre :</p>

<pre>var immutableString = "Hello";

// Dans le code ci-dessus, un nouvel objet avec une valeur chaîne de caractère est créé.

immutableString = immutableString + "World";

// Nous ajoutons "World" à la valeur existante.
</pre>

<p>En ajoutant la variable "immutableString" avec une valeur de chaîne, les événements suivants se produisent :</p>

<ol>
 <li>La valeur existante de la variable "immutableString" est récupérée</li>
 <li>"World" est ajouté à la valeur existante de "immutableString"</li>
 <li>La valeur résultante est alors allouée à un nouveau bloc de mémoire</li>
 <li>L'objet "immutableString" pointe maintenant vers le nouvel espace mémoire créé</li>
 <li>L'ancien espace mémoire est maintenant disponible pour la récupération de place (nettoyage).</li>
</ol>

<p> </p>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li>{{Interwiki("wikipedia","Objet_immuable")}} sur Wikipédia</li>
</ul>
