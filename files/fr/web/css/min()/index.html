---
title: min()
slug: Web/CSS/min()
tags:
  - CSS
  - Fonction
  - Reference
translation_of: Web/CSS/min()
---
<div>{{CSSRef}}</div>

<p>La fonction CSS <code><strong>min()</strong></code> permet d'obtenir la plus petite valeurs parmi une liste d'expressions, séparées par des virgules afin d'utiliser ce minimum comme valeur d'une propriété CSS. La fonction <code>min()</code> peut être utilisée à tout endroit où une valeur de type {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}} ou {{cssxref("&lt;integer&gt;")}} est autorisée.</p>

<pre class="brush: css no-line-numbers">/* property: min(expression<code class="css plain"> [, expression]</code>) */
width: min(10vw, 4em, 80px);
</pre>

<p>Dans l'exemple précédent, la largeur mesurera au plus 80 pixels de large, sera moins large si la zone d'affichage (<em>viewport</em>) est moins large que 800 pixels ou si un <code>em</code> vaut moins que 20 pixels de large. Autrement dit, la valeur fournie <code>min()</code> est calculée comme un seuil et généralement, on aura un seuil maximal dans une expression <code>min()</code> (ce qui peut paraître contradictoire à juste titre).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La fonction <code>min()</code> prend comme arguments une ou plusieurs expressions, séparées par des virgules. Elle renvoie comme valeur le plus petit résultat des évaluations des expressions passées en arguments.</p>

<p>Les expressions passées à cette fonction peuvent utiliser des fonctions mathématiques (cf. {{CSSxRef("calc", "calc()")}}), des valeurs littérales ou d'autres expressions (ex. avec {{CSSxRef("attr", "attr()")}}). Il est nécessaire que ces expressions fournissent une valeur d'un type valide (ex. {{cssxref("&lt;length&gt;")}}).</p>

<p>Il est tout à fait possible de combiner des valeurs avec différentes unités dans les expressions passées en arguments. On peut également utiliser des parenthèses à l'intérieur des expressions afin de s'assurer de la précédence des opérateurs.</p>

<h3 id="Notes">Notes</h3>

<ul>
 <li>Les expressions mathématiques qui utilisent des pourcentages pour les hauteurs et largeurs de colonnes de tableaux, de groupes de colonnes de tableaux, pour les lignes de tableaux, pour les groupes de lignes de tableaux et pour les cellules de tableau seront considérées comme <code>auto</code> si le tableau suit une disposition automatique ou fixée.</li>
 <li>Il est possible d'imbriquer des fonctions <code>min()</code> et <code>min()</code> dans les expressions et d'utiliser les opérateurs mathématiques d'addition, soustraction, multiplication, division sans nécessairement recourir à <code>calc()</code>.</li>
</ul>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="Garantir_une_taille_maximale_pour_des_images">Garantir une taille maximale pour des images</h3>

<p><code>min()</code> permet de simplifier la définition d'une taille <strong>maximale</strong>, par exemple la largeur d'une image. Dans cet exemple, la règle CSS permet d'obtenir un logo qui s'étire sur la moitié de la fenêtre pour les fenêtres les moins larges, sans dépasser 300 pixels et sans avoir à utiliser des requêtes média.</p>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.logo {
  width: min(50vw, 300px);
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;img src="https://developer.mozilla.org/static/img/web-docs-sprite.svg" alt="MDN Web Docs" class="logo"&gt;</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample('Garantir_une_taille_minimale_pour_des_images', '100%', '110')}}</p>

<h3 id="Définir_une_taille_maximale_pour_un_champ_de_saisie_et_son_libellé">Définir une taille maximale pour un champ de saisie et son libellé</h3>

<p>La fonction <code>min()</code> peut également être utilisée pour définir la taille maximale d'un contrôle dans un formulaire et permettre de réduire le champ et le libellé associé lorsque la largeur de l'écran diminue.</p>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">input, label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
</pre>

<p>On a ici la règle qui s'applique au formulaire et qui occupe 100% de la largeur de son parent. On déclare avec <code>min()</code> que la largeur doit mesurer au plus 400 pixels ou 40% de la largeur du formulaire. Autrement dit, la taille la plus grande que pourra atteindre le champ et le libellé sera 400 pixels. La largeur la plus étroite sera nécessairement 40% (ce qui peut être tout petit sur l'affichage d'une montre par exemple).</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;form&gt;
  &lt;label&gt;Saisir quelque chose :&lt;/label&gt;
  &lt;input type="text"&gt;
&lt;/form&gt;
</pre>

<p>{{EmbedLiveSample("Définir_une_taille_maximale_pour_un_champ_de_saisie_et_son_libellé", '100%', '110')}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Lorsqu'on utilise <code>min()</code> afin de contrôler la taille du texte, il faut s'assurer que le texte puisse toujours être suffisamment grand pour être lisible. Pour cela, on peut imbriquer l'appel à <code>min()</code> dans <code><a href="/fr/docs/Web/CSS/max">max()</a></code> utilisant <a href="/fr/docs/Web/CSS/length#Unités_de_longueur_relatives">une unité de longueur relative</a> en deuxième argument afin de garantir une lisibilité minimale :</p>

<pre class="brush: css">small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}</pre>

<p>On aura ainsi une taille minimale de <code>1rem</code> et la taille du texte qui se met à l'échelle si on zoome sur la page.</p>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">Comprendre les règles 1.4 du WCAG</a> (MDN)</li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html">Comprendre le critère de réussite 1.4.4 du WCAG 2.0 (W3C)</a></li>
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
   <td>{{SpecName('CSS4 Values', '#calc-notation', 'min()')}}</td>
   <td>{{Spec2('CSS4 Values')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.types.min")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{CSSxRef("calc", "calc()")}}</li>
 <li>{{CSSxRef("clamp", "clamp()")}}</li>
 <li>{{CSSxRef("max", "max()")}}</li>
 <li><a href="/fr/docs/Apprendre/CSS/Introduction_à_CSS/Values_and_units">Valeurs et unités en CSS</a></li>
</ul>
