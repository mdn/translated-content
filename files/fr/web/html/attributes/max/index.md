---
title: 'Attribut HTML : max'
slug: Web/HTML/Attributes/max
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - max
  - Reference
translation_of: Web/HTML/Attributes/max
---
<p>{{HTMLSidebar}}</p>

<p>L'attribut <strong><code>max</code></strong> définit la valeur maximale acceptable et valide pour le champ de saisie contenant l'attribut. Si la <a href="/fr/docs/Web/HTML/Element/Input#attr-value"><code>valeur</code></a> de l'élément est supérieure à cette valeur, l'élément échoue à <a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">la validation des contraintes</a>. Cette valeur doit être supérieure ou égale à la valeur de l'attribut <a href="min"><code>min</code></a>. Si l'attribut <code>max</code> est présent mais n'est pas spécifié ou est invalide, aucune valeur <code>max</code> n'est appliquée. Si l'attribut <code>max</code> est valide et qu'une valeur non vide est supérieure au maximum autorisé par l'attribut <code>max</code>, la validation des contraintes empêchera la soumission du formulaire.</p>

<p>Valable pour les types de saisie numérique, y compris les <a href="/fr/docs/Web/HTML/Element/Input/date"><code>date</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/month"><code>month</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/week"><code>week</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/time"><code>time</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/datetime-local"><code>datetime-local</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/number"><code>number</code></a> et <a href="/fr/docs/Web/HTML/Element/Input/range"><code>range</code></a>, ainsi que les deux éléments <a href="/fr/docs/Web/HTML/Element/Progress"><code>&lt;progress&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/Meter"><code>&lt;meter&gt;</code></a>, l'attribut <code>max</code> est un nombre qui spécifie la valeur la plus positive qu'un contrôle de formulaire doit considérer comme valide.</p>

<p>Si la valeur dépasse la valeur maximale autorisée, l'attribut JavaScript <a href="/fr/docs/Web/API/validityState/rangeOverflow"><code>validityState.rangeOverflow</code></a> sera vrai, et le contrôle sera assorti des pseudo-classes <a href="/fr/docs/Web/CSS/:out-of-range"><code>:out-of-range</code></a> et <a href="/fr/docs/Web/CSS/:invalid"><code>:invalid</code></a>.</p>

<h3 id="syntax">Syntaxe</h3>

<table class="standard-table">
  <caption>Syntaxe pour les valeurs <code>max</code> par <code>type</code> de saisie.</caption>
  <thead>
    <tr>
      <th>Type de saisie</th>
      <th>Syntaxe</th>
      <th>Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/date"><code>date</code></a></td>
      <td><pre class="brush: html">yyyy-mm-dd</pre></td>
      <td><pre class="brush: html">&lt;input type="date" max="2019-12-25" step="1"&gt;</pre></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/month"><code>month</code></a></td>
      <td><pre class="brush: html">yyyy-mm</pre></td>
      <td><pre class="brush: html">&lt;input type="month" max="2019-12" step="12"&gt;</pre></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/week"><code>week</code></a></td>
      <td><pre class="brush: html">yyyy-W##</pre></td>
      <td><pre class="brush: html">&lt;input type="week" max="2019-W23" step=""&gt;</pre></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/time"><code>time</code></a></td>
      <td><pre class="brush: html">hh:mm</pre></td>
      <td><pre class="brush: html">&lt;input type="time" max="17:00" step="900"&gt;</pre></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/datetime-local"><code>datetime-local</code></a></td>
      <td><code>yyyy-mm-ddThh:mm</code></td>
      <td><pre class="brush: html">&lt;input type="datetime-local" max="2019-12-25T23:59"&gt;</pre></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/number"><code>number</code></a></td>
      <td><a href="/fr/docs/Web/CSS/number">&lt;number&gt;</a></td>
      <td><pre class="brush: html">&lt;input type="number" min="0" step="5" max="100"&gt;</pre></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Input/range"><code>range</code></a></td>
      <td><a href="/fr/docs/Web/CSS/number">&lt;number&gt;</a></td>
      <td><pre class="brush: html">&lt;input type="range" min="60" step="5" max="100"&gt;</pre></td>
    </tr>
  </tbody>
</table>

<div class="note">
  <p><strong>Note :</strong>Lorsque les données saisies par l'utilisateur ne respectent pas la valeur maximale fixée, la valeur est considérée comme invalide dans la validation des contraintes et correspondra aux pseudo-classes <a href="/fr/docs/Web/CSS/:invalid"><code>:invalid</code></a> et <a href="/fr/docs/Web/CSS/:out-of-range"><code>:out-of-range</code></a>.</p>
</div>

<p>Voir la <a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">validation côté client</a> et <a href="/fr/docs/Web/API/ValidityState/rangeOverflow"><code>rangeOverflow</code></a> pour plus d'informations.</p>

<p>Pour l'élément <a href="/fr/docs/Web/HTML/Element/Progress"><code>&lt;progress&gt;</code></a>, l'attribut <code>max</code> décrit la quantité de travail que nécessite la tâche indiquée par l'élément <code>progress</code>. S'il est présent, il doit avoir une valeur supérieure à zéro et être un nombre à virgule flottante valide. Pour l'élément <a href="/fr/docs/Web/HTML/Element/Meter"><code>&lt;meter&gt;</code></a>, l'attribut <code>max</code> définit la limite numérique supérieure de la plage mesurée. Celle-ci doit être supérieure à la valeur minimale (<a href="/fr/docs/Web/HTML/Attributes/min">code>min</code></a> attribut), si elle est spécifiée. Dans les deux cas, si elle est omise, la valeur est égale à 1 par défaut.</p>

<table class="standard-table">
  <caption>Syntaxe des valeurs <code>max</code> pour les autres éléments</caption>
  <thead>
    <tr>
      <th>Type d'entrée</th>
      <th>Syntaxe</th>
      <th>Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Progress"><code>&lt;progress&gt;</code></a></td>
      <td><a href="/fr/docs/Web/CSS/number">&lt;number&gt;</a></td>
      <td><code>&lt;progress id="file" max="100" value="70"&gt; 70% &lt;/progress&gt;</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/HTML/Element/Meter"><code>&lt;meter&gt;</code></a></td>
      <td><a href="/fr/docs/Web/CSS/number">&lt;number&gt;</a></td>
      <td><code>&lt;meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"&gt; à 40/100&lt;/meter&gt;</code></td>
    </tr>
  </tbody>
</table>

<h2 id="accessibility_concerns">Accessibilité</h2>

<p>Fournissez des instructions pour aider les utilisateurs à comprendre comment remplir le formulaire et utiliser les contrôles individuels du formulaire. Indiquez toute entrée obligatoire et facultative, les formats de données et toute autre information pertinente. Lorsque vous utilisez l'attribut <code>max</code>, assurez-vous que cette exigence maximale est comprise par l'utilisateur. Fournir des instructions dans le <a href="/fr/docs/Web/HTML/Element/Label"><code>&lt;label&gt;</code></a> peut être suffisant. Si vous fournissez des instructions en dehors des étiquettes, ce qui permet un positionnement et une conception plus flexibles, envisagez d'utiliser <a href="/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute"><code>aria-labelledby</code></a> ou <a href="/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute"><code>aria-describedby</code></a>.</p>

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
      <td>{{SpecName('HTML WHATWG', 'input.html#the-min-and-max-attributes', 'max attribute')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'input.html#the-min-and-max-attributes', 'max attribute')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'forms.html#the-progress-element', 'progress element')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'forms.html#the-progress-element', 'progress element')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'forms.html#the-meter-element', 'meter element')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'forms.html#the-meter-element', 'meter element')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.attributes.max")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>L'attribut <a href="/fr/docs/Web/HTML/Attributes/step"><code>step</code></a></li>
  <li>L'attribut <a href="/fr/docs/Web/HTML/Attributes/min"><code>min</code></a></li>
  <li>Les autres attributs de mesure : <a href="/fr/docs/Web/HTML/Element/Meter#attr-low"><code>low</code></a>, <a href="/fr/docs/Web/HTML/Element/Meter#attr-high"><code>high</code></a>, <a href="/fr/docs/Web/HTML/Element/Meter#attr-optimum"><code>optimum</code></a></li>
  <li><a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">Validation des contraintes</a></li>
  <li>L'API <a href="/fr/docs/Web/API/Constraint_validation">Constraint validation</a></li>
  <li>L'attribut JavaScript <a href="/fr/docs/Web/API/validityState/rangeOverflow"><code>validityState.rangeOverflow</code></a></li>
  <li><a href="/fr/docs/Web/CSS/:out-of-range"><code>:out-of-range</code></a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a></li>
  <li>Les valeurs de l'attribut type <a href="/fr/docs/Web/HTML/Element/Input/date"><code>date</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/month"><code>month</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/week"><code>week</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/time"><code>time</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/datetime-local"><code>datetime-local</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/number"><code>number</code></a> et <a href="/fr/docs/Web/HTML/Element/Input/range"><code>range</code></a>, et l'élement <a href="/fr/docs/Web/HTML/Element/Meter"><code>&lt;meter&gt;</code></a></li>
</ul>
