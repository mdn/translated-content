---
title: Commentaires
slug: Web/CSS/Comments
tags:
  - CSS
  - Débutant
  - Reference
translation_of: Web/CSS/Comments
---
<div>{{CSSRef}}</div>

<p>Les commentaires sont utilisés afin d'ajouter des notes explicatives ou pour empêcher le navigateur d'interpréter certaines parties de la feuille de style. Les commentaires n'ont donc aucun impact sur la disposition d'un document.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>On peut utiliser des commentaires à chaque endroit où un blanc est autorisé.</p>

<pre class="syntaxbox">/* Commentaire */
</pre>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: css">/* Commentaire sur une ligne */

/*
Commentaire
sur plusieurs
lignes
*/


/* Le commentaire qui suit permet
   de désactiver une règle */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
</pre>

<h2 id="Notes">Notes</h2>

<p>La syntaxe des commentaires avec <code>/* */</code> est utilisée pour étaler un commentaire sur une ou plusieurs lignes. On ne peut pas utiliser d'autres moyens pour les commentaires dans une feuille de style externe. Lorsqu'on utilise l'élément {{HTMLElement("style")}}, on peut utiliser les commentaires HTML <code>&lt;!-- --&gt;</code> pour masquer du CSS sur des navigateurs plus anciens mais cela n'est pas une méthode recommandée.</p>

<p>À l'instar des autres langages de programmation programmation qui utilisent <code>/* */</code> pour les commentaires, il est impossible de les imbriquer. Autrement dit, la première apparition de <code>*/</code> suivant un <code>/*</code>, ferme le commentaire.</p>

<h2 id="Spécifications">Spécifications</h2>

<ul>
 <li>
  <div><a href="/fr/docs/Web/CSS/Reference">La référence CSS</a></div>
 </li>
</ul>
