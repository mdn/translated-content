---
title: Compteurs CSS
slug: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
tags:
  - Avancé
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
original_slug: Web/CSS/CSS_Lists/Compteurs_CSS
---
<div>{{CSSRef}}</div>

<p>Les <strong>compteurs CSS</strong> sont des variables dont les valeurs sont incrémentées par les règles CSS et qui permettent de savoir combien de fois elles sont utilisées. Cela permet par exemple d'adapter la mise en forme du contenu en fonction de son emplacement dans le document.</p>

<p>La valeur d'un compteur peut être manipulée grâce aux propriétés {{cssxref("counter-reset")}}. {{cssxref("counter-increment")}} et on peut les afficher sur la page grâce aux fonctions <code>counter()</code> et <code>counters()</code> dans la propriété {{cssxref("content")}}.</p>

<h2 id="Utiliser_les_compteurs">Utiliser les compteurs</h2>

<h3 id="Manipuler_la_valeur_d'un_compteur">Manipuler la valeur d'un compteur</h3>

<p>Pour utiliser un compteur CSS, il faut d'abord réinitialiser sa valeur (0 par défaut) à l'aide de {{cssxref("counter-reset")}}. Pour incrémenter un compteur initialisé, on peut utiliser {{cssxref("counter-increment")}}. Attention le nom du compteur ne peut pas être <code>none</code>, <code>inherit</code> ou <code>initial</code>.</p>

<h3 id="Afficher_un_compteur">Afficher un compteur</h3>

<p>Pour ajouter un compteur au contenu d'un élément, il faut utiliser la fonction {{cssxref("counter")}} ou {{cssxref("counters")}} dans une propriété {{cssxref("content")}}.</p>

<p>La fonction <code>counter()</code> prend deux formes : <code>counter(nom)</code> ou <code>counter(nom, style)</code>. Le texte ainsi généré est celui du compteur le plus proche avec ce nom. Le contenu est mis en forme avec le style indiqué (par défaut, c'est <code>decimal</code>).</p>

<p>La fonction <code>counters()</code> prend également deux formes : <code>counters(nom, chaine)</code> ou <code>counters(nom, chaine style)</code>. Le texte généré aura la valeur de l'ensemble des compteurs présents dans la portée du pseudo-élément (du plus loin au plus proche), séparés par la chaîne de caractères passée en argument. Les compteurs sont mis en forme avec le style indiqué (par défaut, c'est <code>decimal</code>).</p>

<h3 id="Exemple_simple">Exemple simple</h3>

<p>Dans l'exemple qui suit, la feuille de style CSS préfixe chaque titre de niveau 3 avec « Section &lt;la valeur du compteur&gt; : ».</p>

<div class="note">
<p><strong>Note :</strong> La fonction {{cssxref("counter()")}} et la fonction {{cssxref("counters()")}} peuvent toutes les deux prendre un dernier argument qui correspond au style de liste utilisé (par défaut, c'est <code>decimal</code>).</p>
</div>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">body {
  counter-reset: section;                    /* On initialise le compteur à 0 */
}

h3::before {
  counter-increment: section;                /* On incrémente le compteur section */
  content: "Section " counter(section) " : "; /* On affiche le compteur */
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;h3&gt;Introduction&lt;/h3&gt;
&lt;h3&gt;Corps&lt;/h3&gt;
&lt;h3&gt;Conclusion&lt;/h3&gt;</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Utiliser_les_compteurs", 300, 150)}}</p>

<h2 id="Imbriquer_des_compteurs">Imbriquer des compteurs</h2>

<p>Un compteur CSS est particulièrement utile lorsqu'il s'agit de gérer les listes générées dynamiquement. En utilisant la fonction {{cssxref("counters","counters()")}}, on peut insérer une chaîne de caractères entre les différents niveaux des compteurs imbriqués.</p>

<h3 id="CSS_2">CSS</h3>

<pre class="brush: css">ol {
  counter-reset: section;                /* On crée une nouvelle instance du
                                            compteur section avec chaque ol */
  list-style-type: none;
}

li::before {
  counter-increment: section;            /* On incrémente uniquement cette
                                            instance du compteur */
  content: counters(section,".") " ";    /* On ajoute la valeur de toutes les
                                            instances séparées par ".". */
                                         /* Si on doit supporter &lt; IE8 il faudra
                                            faire attention à ce qu'il n'y ait
                                            aucun blanc après ',' */
}
</pre>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html">&lt;ol&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 1     --&gt;
  &lt;li&gt;item               &lt;!-- 2     --&gt;
    &lt;ol&gt;
      &lt;li&gt;item&lt;/li&gt;      &lt;!-- 2.1   --&gt;
      &lt;li&gt;item&lt;/li&gt;      &lt;!-- 2.2   --&gt;
      &lt;li&gt;item           &lt;!-- 2.3   --&gt;
        &lt;ol&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.1 --&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.2 --&gt;
        &lt;/ol&gt;
        &lt;ol&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.1 --&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.2 --&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.3 --&gt;
        &lt;/ol&gt;
      &lt;/li&gt;
      &lt;li&gt;item&lt;/li&gt;      &lt;!-- 2.4   --&gt;
    &lt;/ol&gt;
  &lt;/li&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 3     --&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 4     --&gt;
&lt;/ol&gt;
&lt;ol&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 1     --&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 2     --&gt;
&lt;/ol&gt;</pre>

<h3 id="Résultat_2">Résultat</h3>

<p>{{EmbedLiveSample("Imbriquer_des_compteurs", 250, 350)}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS3 Lists", "#auto-numbering", "CSS Counters")}}</td>
   <td>{{Spec2("CSS3 Lists")}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "generate.html#counters", "CSS Counters")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("counter-reset")}}</li>
 <li>{{cssxref("counter-set")}}</li>
 <li>{{cssxref("counter-increment")}}</li>
 <li>{{cssxref("@counter-style")}}</li>
</ul>
