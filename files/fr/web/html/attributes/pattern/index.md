---
title: 'Attribut HTML : pattern'
slug: Web/HTML/Attributes/pattern
tags:
  - Attribute
  - Attributes
  - Constraint Validation API
  - HTML
  - Reference
translation_of: Web/HTML/Attributes/pattern
original_slug: Web/HTML/Attributs/pattern
---
<div>{{HTMLSidebar}}</div>

<p>L'attribut <strong><code>pattern</code></strong> indique une <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions">expression rationnelle</a> que doit respecter la valeur du contrôle du formulaire. Si une valeur non nulle (qui n'est pas <code>null</code>) ne respecte pas les contraintes portées par <code>pattern</code>, la propriété <a href="/fr/docs/Web/API/ValidityState/patternMismatch"><code>patternMismatch</code></a> en lecture seule, rattachée à l'objet <a href="/fr/docs/Web/API/ValidityState"><code>ValidityState</code></a>, vaudra <code>true</code>.</p>

<p>L'attribut <code>pattern</code> peut être utilisé pour les champs de type <a href="/fr/docs/Web/HTML/Element/Input/text"><code>text</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/tel"><code>tel</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/email"><code>email</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/url"><code>url</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/password"><code>password</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/search"><code>search</code></a>.</p>

<p>La valeur de cet attribut doit être une expression rationnelle JavaScript valide (voir la documentation de <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a> et <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions">le guide sur les expressions rationnelles</a>). Le marqueur (<em>flag</em>) <code>'u'</code> pour être utilisé afin d'indiquer que l'expression rationnelle est une séquence de codets Unicode et non ASCII. On n'utilisera pas de barres obliques (<em>slashes</em>) autour du texte du motif de l'expression rationnelle.</p>

<p>Si le motif n'est pas indiqué ou est invalide, aucune expression rationnelle ne sera appliquée et l'attribut sera ignoré.</p>

<div class="note">
  <p><strong>Note :</strong>On pourra utiliser l'attribut <a href="/fr/docs/Web/HTML/Element/Input#attr-title"><code>title</code></a> afin de fournir aux utilisateurs des explications quant aux règles à respecter pour que la valeur soit valide. Attention, on ne doit pas utiliser uniquement cet attribut pour fournir ces explications. Voir ci-après quant à l'utilisabilité.</p>
</div>

<p>Certains types d'<code>&lt;input&gt;</code> qui prennent en charge l'attribut <code>pattern</code> (notamment <a href="/fr/docs/Web/HTML/Element/Input/email"><code>email</code></a> et <a href="/fr/docs/Web/HTML/Element/Input/url"><code>url</code></a>) ont des contraintes particulières qui doivent également être respectées. Si l'attribut <code>pattern</code> n'est pas présent et que la valeur saisie ne respecte pas la syntaxe attendue pour ce type de champ, la propriété en lecture seule <a href="/fr/docs/Web/API/ValidityState/typeMismatch"><code>typeMismatch</code></a> vaudra <code>true</code>.</p>

<h3 id="usability">Utilisabilité</h3>

<p>Lorsqu'on utilise l'attribut <code>pattern</code>, il est nécessaire de fournir une description du format attendu avec un texte visible près du contrôle. On pourra en plus utiliser l'attribut <a href="/fr/docs/Web/HTML/Global_attributes/title"><code>title</code></a> afin de fournir une description. Les agents utilisateurs peuvent utiliser la valeur de <code>title</code> lors de la validation des contraintes afin d'indiquer à l'utilisateur que le motif n'est pas respecté. Certains navigateurs pourront afficher une bulle d'information et certains outils d'assistance pourront énoncer le contenu de <code>title</code> à voix haute lorsque le focus arrive sur le contrôle. Toutefois, l'utilisation seule de cet attribut ne suffit pas pour fournir une accessibilité suffisante.</p>

<h3 id="constraint_validation">Validation des contraintes</h3>

<p>Si la valeur du champ n'est pas la chaîne vide et que la valeur ne respecte pas l'expression rationnelle, on aura une incohérence, portée par <a href="/fr/docs/Web/API/ValidityState/patternMismatch"><code>patternMismatch</code></a>.<br>
 L'expression rationnelle indiquée doit correspondre pour toute la chaîne (depuis son début jusqu'à la fin. Autrement dit, c'est comme si on enveloppait l'expression entre <code>^(?:</code> et <code>)$</code> afin d'indiquer que c'est toute la chaîne qui est considérée (et pas une de ses sous-partie).</p>

<h2 id="examples">Exemples</h2>

<h3 id="Exemple 1">Exemple 1</h3>
<p>Avec le fragment de code HTML suivant :</p>

<pre class="brush: html">&lt;p&gt;
 &lt;label&gt;Veuillez saisir votre numéro de téléphone au format (123)456-7890
  (&lt;input name="tel1" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit area code" size="2"/&gt;)-
   &lt;input name="tel2" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit prefix" size="2"/&gt; -
   &lt;input name="tel3" type="tel" pattern="[0-9]{4}" placeholder="####" aria-label="4-digit number" size="3"/&gt;
 &lt;/label&gt;
&lt;/p&gt;</pre>

<p>Ici, nous avons 3 sections pour un numéro de téléphone nord-américain avec une étiquette implicite englobant les trois composants du numéro de téléphone, s'attendant respectivement à 3 chiffres, 3 chiffres et 4 chiffres, comme défini par l'attribut <a href="pattern"><code>pattern</code></a> défini sur chacun.</p>

<p>Si les valeurs saisies sont trop longues ou trop courtes ou si elles contiennent des caractères qui ne sont pas des chiffres, la valeur de l'attribut <code>patternMismatch</code> sera <code>true</code>. On aura également l'activation de la pseudo-classe CSS <a href="/fr/docs/Web/CSS/:invalid"><code>:invalid</code></a>.</p>

<pre class="brush: css">input:invalid {
  border: red solid 3px;
}</pre>

<div>{{EmbedLiveSample("Exemple_1", 300, 80)}}</div>

<p>En utilisant les attributs <a href="/fr/docs/Web/HTML/Attributes/minlength"><code>minlength</code></a> et <a href="/fr/docs/Web/HTML/Attributes/maxlength"><code>maxlength</code></a> à la place, on aurait eu les propriétés <a href="/fr/docs/Web/API/validityState/tooLong"><code>validityState.tooLong</code></a> ou <a href="/fr/docs/Web/API/validityState/tooShort"><code>validityState.tooShort</code></a> qui auraient valu <code>true</code>.</p>

<h3 id="specifying_a_pattern">Indiquer un motif</h3>

<p>On pourra utiliser l'attribut <a href="/fr/docs/Web/HTML/Element/Input#attr-pattern"><code>pattern</code></a> afin d'indiquer une expression rationnelle qui devra être respectée par la valeur saisie pour que celle-ci soit considérée comme valide (voir <a href="/fr/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression">ce guide sur la validation avec les expressions rationnelles</a> pour une introduction).</p>

<p>L'exemple qui suit permet de restreindre les valeurs saisies entre 4 et 8 caractères qui doivent également être des lettres minuscules.</p>

<pre class="brush: html">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="uname"&gt;Veuillez choisir un nom d'utilisateur : &lt;/label&gt;
    &lt;input type="text" id="uname" name="name" required size="45"
           pattern="[a-z]{4,8}" title="4 à 8 lettres en minuscules"&gt;
    &lt;span class="validity"&gt;&lt;/span&gt;
    &lt;p&gt;Les noms d'utilisateurs doivent être en minuscules et contenir 4 à 8 caractères.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button&gt;Envoyer&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<pre class="brush: css hidden">div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}</pre>

<p>Cela donne le résultat suivant :</p>

<div>{{EmbedLiveSample('specifying_a_pattern', '', 130)}}</div>

<h2 id="accessibility_concerns">Accessibilité</h2>

<p>Lorsqu'un contrôle dispose de l'attribut <code>pattern</code>, l'attribut <code>title</code>, s'il est utilisé, doit décrire le motif souhaité. Attention, reposer uniquement sur l'attribut <code>title</code> pour fournir une aide visuelle n'est pas souhaitable, car la plupart des agents utilisateurs n'exposent pas cet attribut de façon accessible. Certains navigateurs affichent une bulle d'information lorsqu'on survole l'élément avec un pointeur mais cela laisse de côté les utilisateurs qui naviguent avec le clavier ou ceux qui utilisent une interface tactile. Il faut donc inclure au moins autrement des informations sur la façon de saisir des valeurs qui respectent les contraintes.</p>

<p>L'attribut <code>title</code> est utilisé par certains navigateurs pour écrire les messages d'erreur. Attention toutefois, car les navigateurs affichent également le contenu de cet attribut au survol de l'élément y compris lorsqu'il n'y a pas d'erreur. La formulation doit être choisie avec précaution pour ne pas induire l'utilisateur en erreur.</p>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'forms.html#attr-input-pattern', 'l\'attribut pattern')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'forms.html#attr-input-pattern', 'l\'attribut pattern')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#attr-input-pattern', 'l\'attribut pattern')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.attributes.pattern")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">Les contraintes de validation</a></li>
  <li><a href="/fr/docs/Learn/Forms/Form_validation">La validation des données de formulaires</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions">Les expressions rationnelles (ou expressions régulières / <em>regexp</em>)</a></li>
</ul>
