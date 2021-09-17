---
title: calc
slug: Web/CSS/calc()
tags:
  - CSS
  - Fonction
  - Reference
  - Web
translation_of: Web/CSS/calc()
---
<div>{{CSSRef}}</div>

<p>La fonction <strong><code>calc()</code></strong> peut être utilisée à n'importe quel endroit où une {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}} ou {{cssxref("&lt;integer&gt;")}} est nécessaire. Grâce à <code>calc()</code>, il est possible de réaliser des calculs pour déterminer la valeur d'une propriété CSS.</p>

<pre class="brush: css no-line-numbers">/* property: calc(expression) */
width: calc(100% - 80px);
</pre>

<p>Il est aussi possible d'utiliser <code>calc()</code> dans une autre fonction <code>calc()</code> et ainsi d'imbriquer les fonctions les unes dans les autres.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Une fonction qui prend comme seul argument une expression mathématique et dont le résultat est utilisé comme valeur de retour. L'expression peut être n'importe quelle expression combinant les différents opérateurs suivants, en respectant l'ordre de priorité des opérateurs :</p>

<dl>
 <dt><code>+</code></dt>
 <dd>Addition</dd>
 <dt><code>-</code></dt>
 <dd>Soustraction</dd>
 <dt><code>*</code></dt>
 <dd>Multiplication. Au moins un des arguments doit être un {{cssxref("&lt;number&gt;")}}.</dd>
 <dt><code>/</code></dt>
 <dd>Division. Il n'est pas possible de diviser par une longueur. Ceci peut être utilisé, par exemple, pour que votre longueur soit une fraction d'une longueur existante. L'opérande droit doit être une valeur de type {{cssxref("&lt;number&gt;")}}.</dd>
</dl>

<p>L'opérande dans l'expression peut utiliser n'importe quelle syntaxe de longueur. Vous pouvez utiliser des unités différentes pour chacune des valeurs si vous le souhaitez. Vous pouvez aussi utiliser les parenthèses pour définir l'ordre des opérations.</p>

<h3 id="Notes">Notes</h3>

<ul>
 <li>Une division par zéro aboutit à une erreur qui est générée par le parseur HTML.</li>
 <li>Les opérateurs <code>+</code> et <code>-</code> <strong>doivent toujours être entouré d'espaces</strong>. Par exemple l'opérande de <code>calc(50% -8px)</code> sera interprété comme une valeur en pourcentage suivie d'une longueur négative, l'expression est invalide. L'opérande de <code>calc(50% - 8px)</code> est une valeur en pourcentage suivie d'un signe moins et d'une longueur. Et ainsi, <code>calc(8px + -50%)</code> est interprété comme une longueur suivi d'un signe plus et d'un pourcentage négatif.</li>
 <li>Les opérateurs <code>*</code> et <code>/</code> ne nécessitent pas d'espaces, mais les ajouter pour conserver la cohérence est recommandé.</li>
 <li>Les expressions mathématiques manipulant des pourcentages pour les hauteurs et largeurs de colonnes d'un tableau, de groupes de colonne, de lignes d'un tableau ou de groupes de lignes contribuant à un tableau organisé de façon automatique ou en disposition fixe pourront être traitées comme si c'était <code>auto</code> qui avait été utilisé.</li>
 <li>Il est possible d'imbriquer des fonctions <code>calc()</code>, auquel cas, les appels « internes » sont considérés comme des parenthèses.</li>
</ul>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="Positionner_un_objet_sur_l’écran_avec_une_marge">Positionner un objet sur l’écran avec une marge</h3>

<p><code>calc()</code> rend le positionnement des objets facile en définissant une marge. Dans cet exemple, le CSS crée une bannière qui s'étend sur toute la fenêtre, avec un espace de 40 pixels entre chaque bout de la bannière et les bords de la fenêtre :</p>

<pre class="brush: css">.banniere {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
</pre>

<pre class="brush: html">&lt;div class="banniere"&gt;C'est une bannière !&lt;/div&gt;</pre>

<p>{{EmbedLiveSample("Positionner_un_objet_sur_l’écran_avec_une_marge", '100%', '60')}}</p>

<h3 id="Dimensionner_automatiquement_les_champs_d’un_formulaire_pour_s’ajuster_au_conteneur">Dimensionner automatiquement les champs d’un formulaire pour s’ajuster au conteneur</h3>

<p>Un autre cas d'utilisation de <code>calc()</code> est d'aider à s'assurer que les champs d'un formulaire s'adaptent à l'espace disponible, sans s'étendre au-delà de la bordure du conteneur, tout en conservant une marge appropriée.</p>

<p>Regardons un peu le CSS :</p>

<pre class="brush: css">input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#boiteformulaire {
  width: calc(100%/6);
  border: 1px solid black;
  padding: 4px;
}
</pre>

<p>Dans ce cas, le formulaire est lui-même défini pour utiliser un sixième de la taille disponible de la fenêtre. Ensuite, pour s'assurer que les champs gardent une taille appropriée, nous utilisons <code>calc()</code> pour définir qu'ils doivent être de la largeur de leur conteneur moins 1em. Enfin, le HTML suivant utilise le CSS défini :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;div id="boiteformulaire"&gt;
  &lt;label&gt;Tapez quelque chose :&lt;/label&gt;
  &lt;input type="text"&gt;
  &lt;/div&gt;
&lt;/form&gt;
</pre>

<p>{{EmbedLiveSample("Dimensionner_automatiquement_les_champs_d’un_formulaire_pour_s’ajuster_au_conteneur", '100%', '80')}}</p>

<h3 id="Imbriquer_plusieurs_calc_grâce_aux_variables_CSS">Imbriquer plusieurs <code>calc()</code> grâce aux variables CSS</h3>

<p>Prenons la feuille de style suivante :</p>

<pre class="brush: css">.toto {
  --largeurA: 100px;
  --largeurB: calc(var(--largeurA) / 2);
  --largeurC: calc(var(--largeurB) / 2);
  width: var(--largeurC);
}</pre>

<p>Une fois que toutes les variables sont développées, <code>largeurC</code> aura la valeur <code>calc( calc( 100px / 2) / 2)</code> et sera ensuite affectée à la propriété {{cssxref("width")}} des éléments de la classe <code>toto</code>. Tous les <code>calc()</code> imbriqués, quel que soit leur nombre, seront convertis en parenthèses, la valeur sera donc calculée comme <code>calc( ( 100px / 2) / 2)</code> (soit 25px). En résumé, utiliser des <code>calc()</code> imbriqués revient à utiliser des parenthèses.</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Lorsque vous utilisez <code>calc()</code> pour définir la taille d'un texte, assurez-vous d'inclure <a href="/fr/docs/Web/CSS/length#Unités_de_longueur_relatives">une unité de longueur relative</a>. Par exemple :</p>

<pre class="brush: css">h1 {
  font-size: calc(1.5rem + 3vw);
}</pre>

<p>De cette façon, la taille du texte s'adaptera si le lecteur zoome/dézoome.</p>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">Comprendre les règles WCAG 1.4</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html"><em>Understanding Success Criterion 1.4.4 - W3C Understanding WCAG 2.0</em> (en anglais)</a></li>
</ul>

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
   <td>{{SpecName('CSS3 Values', '#calc-notation', 'calc()')}}</td>
   <td>{{Spec2('CSS3 Values')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.types.calc")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2010/06/css3-calc/" title="Firefox 4: CSS3 calc() ✩ Mozilla Hacks – the Web developer blog">Firefox 4 : CSS3 <code>calc()</code> sur Mozilla Hacks</a></li>
</ul>
