---
title: '<form> : l''élément représentant un formulaire'
slug: Web/HTML/Element/Form
tags:
  - Element
  - Form Element
  - Forms
  - HTML
  - HTML Form Element
  - HTML forms
  - Reference
  - Web
translation_of: Web/HTML/Element/form
browser-compat: html.elements.form
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;form&gt;</code> </strong>représente un formulaire, c'est-à-dire une section d'un document qui contient des contrôles interactifs permettant à un utilisateur de fournir des informations.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}</div>

<p>Il est possible d'utiliser les pseudo-classes CSS <a href="/fr/docs/Web/CSS/:valid"><code>:valid</code></a> et <a href="/fr/docs/Web/CSS/:invalid"><code>:invalid</code></a> pour mettre en forme un élément <code>&lt;form&gt;</code> selon que le contenu des éléments du formulaire est valide ou non.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a> qui ne contient pas d'élément <code>&lt;form&gt;</code>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Form_Role"><code>form</code></a> si le formulaire a un <a href="https://www.w3.org/TR/accname-1.1/#dfn-accessible-name">nom accessible</a>, sinon <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">pas de rôle correspondant</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="https://w3c.github.io/aria/#search"><code>search</code></a>, <a href="https://w3c.github.io/aria/#none"><code>none</code></a>, <a href="https://w3c.github.io/aria/#presentation"><code>presentation</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLFormElement"><code>HTMLFormElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément prend en charge <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a>.</p>

<dl>
  <dt><code>accept</code> {{deprecated_inline}}</dt>
  <dd>Cet attribut indique quels types de contenus sont acceptés par le serveur. Il peut y en avoir plusieurs, séparés par des virgules.
    <div class="note">
      <p><strong>Note :</strong>Cet attribut a été retiré dans HTML5 et ne doit plus être utilisé. À la place, il faut utiliser l'attribut <a href="/fr/docs/Web/HTML/Element/Input#attr-accept"><code>accept</code></a> de l'élément <code>&lt;input type=file&gt;</code>.</p>
    </div>
  </dd>
  <dt><code>accept-charset</code></dt>
  <dd>Encodages de caractères séparés par des espaces que le serveur accepte. Le navigateur les utilise dans l'ordre dans lequel ils sont listés. La valeur par défaut signifie <a href="/fr/docs/Web/HTTP/Headers/Content-Encoding">le même encodage que celui de la page</a>.<br>
  (Dans les versions précédentes de HTML, les codages de caractères pouvaient également être délimités par des virgules).</dd>
  <dt><code>autocapitalize</code> {{non-standard_inline}}</dt>
  <dd>Cet attribut est un attribut non-standard utilisé sur iOS par Safari Mobile qui contrôle la façon dont la valeur du texte est automatiquement transcrite en majuscules lors de la saisie par l'utilisateur. Si l'attribut <code>autocapitalize</code> est défini sur un des descendants du formulaire, il surchargera la valeur de <code>autocapitalize</code> utilisée pour le formulaire. Les valeurs non-dépréciées sont disponibles pour iOS 5 et supérieurs. La valeur par défaut est <code>sentences</code>. Les valeurs possibles sont:
    <ul>
      <li><code>none</code> : La mise en majuscules est totalement désactivée</li>
      <li><code>sentences</code> : Les premières lettres des phrases sont automatiquement passées en majuscules.</li>
      <li><code>words</code> : La première lettre de chaque mot est automatiquement passée en majuscule.</li>
      <li><code>characters</code> : Tous les caractères sont automatiquement passés en majuscules.</li>
    </ul>
  </dd>
  <dt><code>autocomplete</code></dt>
  <dd>Cet attribut énuméré est utilisé pour définir le comportement du navigateur quant à l'autocomplétion des champs. Cet attribut peut être surchargé par chacun des éléments du formulaire. Il peut prendre deux valeurs :
    <ul>
      <li><code>off</code> : Le navigateur ne peut pas compléter automatiquement les entrées. (Les navigateurs ont tendance à ignorer ce point pour les formulaires de connexion suspects ; voir <a href="/fr/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields">L'attribut autocomplete et les champs de connexion</a>.)</li>
      <li><code>on</code> : Le navigateur peut compléter automatiquement les entrées.</li>
    </ul>
  </dd>
  <dt><code>name</code></dt>
  <dd>Le nom du formulaire. Il doit être unique parmi tous les formulaires d'un document, et ne doit pas être une chaîne de caractères vide.</dd>
  <dt><code>rel</code></dt>
  <dd>Crée un hyperlien ou une annotation en fonction de la valeur, voir l'attribut <a href="/fr/docs/Web/HTML/Attributes/rel"><code>rel</code></a> pour plus de détails.</dd>
</dl>

<h3 id="attributes_for_form_submission">Attributs pour l'envoi de formulaires</h3>

<p>Les attributs suivants contrôlent le comportement pendant l'envoi du formulaire.</p>

<dl>
  <dt><code>action</code></dt>
  <dd>L'URL qui traite l'envoi du formulaire. Cette valeur peut être remplacée par un attribut <a href="/fr/docs/Web/HTML/Element/Button#attr-formaction"><code>formaction</code></a> sur un <a href="/fr/docs/Web/HTML/Element/Button"><code>&lt;button&gt;</code></a>, <code><a href="/fr/docs/Web/HTML/Element/Input/submit">&lt;input type="submit"&gt;</a></code>, ou <code><a href="/fr/docs/Web/HTML/Element/Input/image">&lt;input type="image"&gt;</a></code>.</dd>
  <dt><code>enctype</code></dt>
  <dd>Lorsque la valeur de l'attribut <code>method</code> est <code>post</code>, cet attribut définit le <a href="https://fr.wikipedia.org/wiki/Type_MIME">type MIME</a> qui sera utilisé pour encoder les données envoyées au serveur. C'est un attribut énuméré qui peut prendre les valeurs suivantes :
    <ul>
      <li><code>application/x-www-form-urlencoded</code> : la valeur par défaut si l'attribut n'est pas défini</li>
      <li><code>multipart/form-data</code> : la valeur utilisée par un élément <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a> avec l'attribut <code>type="file"</code>.</li>
      <li><code>text/plain</code>, correspondant au <a href="https://fr.wikipedia.org/wiki/Type_MIME">type MIME</a> éponyme et utilisé à des fins de débogage.</li>
    </ul>
    
    <p>Cette valeur peut être remplacée par un attribut <a href="/fr/docs/Web/HTML/Element/Button#attr-formenctype"><code>formenctype</code></a> sur un <a href="/fr/docs/Web/HTML/Element/Button"><code>&lt;button&gt;</code></a>, <code><a href="/fr/docs/Web/HTML/Element/Input/submit">&lt;input type="submit"&gt;</a></code>, ou <code><a href="/fr/docs/Web/HTML/Element/Input/image">&lt;input type="image"&gt;</a></code>.</p>
  </dd>
  <dt><code>method</code></dt>
  <dd>Cet attribut définit la méthode <a href="/fr/docs/Web/HTTP">HTTP</a> qui sera utilisée pour envoyer les données au serveur. C'est un attribut énuméré qui peut prendre les valeurs suivantes :
    <ul>
      <li><code>post</code> : La méthode <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5">POST</a> ; données du formulaire envoyées comme <a href="/fr/docs/Web/API/Body">corps de la requête</a>.</li>
      <li><code>get</code> : La méthode <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3">GET</a> ; données du formulaire annexées à l'URL <code>action</code> avec un séparateur <code>?</code>. Utilisez cette méthode lorsque le formulaire <a href="/fr/docs/Glossary/Idempotent">n'a pas d'effets secondaires</a>.</li>
      <li><code>dialog</code> : Lorsque le formulaire se trouve à l'intérieur d'un <a href="/fr/docs/Web/HTML/Element/dialog"><code>&lt;dialog&gt;</code></a>, ferme la boîte de dialogue à la soumission.</li>
    </ul>

    <p>Si cet attribut n'est pas défini, la valeur par défaut utilisée est <code>get</code>. Cette valeur peut-être remplacée par un attribut <a href="/fr/docs/Web/HTML/Element/Button#attr-formmethod"><code>formmethod</code></a> sur un <a href="/fr/docs/Web/HTML/Element/Button"><code>&lt;button&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/submit"><code>&lt;input type="submit"&gt;</code></a>, ou <code><a href="/fr/docs/Web/HTML/Element/Input/image">&lt;input type="image"&gt;</a></code>.</p>
  </dd>
  <dt><code>novalidate</code></dt>
  <dd>Cet attribut booléen indique si le formulaire doit être validé au moment de sa soumission. S'il n'est pas défini, le formulaire sera validé lors de sa soumission. Il peut être surchargé par l'attribut <a href="/fr/docs/Web/HTML/Element/Button#attr-formnovalidate"><code>formnovalidate</code></a> des éléments <a href="/fr/docs/Web/HTML/Element/Button"><code>&lt;button&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a> appartenant au formulaire.</dd>
  <dt><code>target</code></dt>
  <dd>Un nom ou un mot-clé indiquant où afficher la réponse après avoir envoyé le formulaire. Dans HTML 4, c'est le nom, ou le mot-clé, d'une frame. Dans HTML5, c'est le nom, ou le mot-clé, d'un <em>contexte de navigation</em> (onglet, fenêtre, frame). Les mots-clés suivants ont un sens particulier :
    <ul>
      <li><code>_self</code> (par défaut) : Charger dans le même contexte de navigation que le contexte actuel.</li>
      <li><code>_blank</code>: Chargement dans un nouveau contexte de navigation sans nom.</li>
      <li><code>_parent</code>: Charge dans le contexte de navigation parent de celui en cours. S'il n'y a pas de parent, se comporte de la même manière que <code>_self</code>.</li>
      <li><code>_top</code>: Charger dans le contexte de navigation de niveau supérieur (c'est-à-dire le contexte de navigation qui est un ancêtre du contexte actuel et qui n'a pas de parent). S'il n'y a pas de parent, se comporte de la même manière que <code>_self</code>.</li>
    </ul>

    <p>Cette valeur peut être remplacée par un attribut <a href="/fr/docs/Web/HTML/Element/Button#attr-formtarget"><code>formtarget</code></a> sur un <a href="/fr/docs/Web/HTML/Element/Button"><code>&lt;button&gt;</code></a>, <code><a href="/fr/docs/Web/HTML/Element/Input/submit">&lt;input type="submit"&gt;</a></code>, ou <code><a href="/fr/docs/Web/HTML/Element/Input/image">&lt;input type="image"&gt;</a></code>.</p>
    <div class="note">
      <p><strong>Note :</strong>La définition de <code>target="_blank"</code> sur les éléments <code>&lt;form&gt;</code> fournit implicitement le même comportement <code>rel</code> que la définition de <a href="/fr/docs/Web/HTML/Link_types/noopener"><code>rel="noopener"</code></a> qui ne définit pas <code>window.opener</code>.</p>
    </div>
  </dd>
</dl>

<h2 id="examples">Exemples</h2>

<h3 id="html">HTML</h3>

<pre class="brush: html">&lt;!-- Formulaire simple qui enverra une requête GET --&gt;
&lt;form&gt;
  &lt;label&gt;Nom :
    &lt;input name="submitted-name" autocomplete="name"&gt;
  &lt;/label&gt;
  &lt;button&gt;Sauvegarder&lt;/button&gt;
&lt;/form&gt;

&lt;!-- Formulaire qui enverra une requête POST à l'URL actuelle --&gt;
&lt;form method="post"&gt;
  &lt;label&gt;Nom :
    &lt;input name="submitted-name" autocomplete="name"&gt;
  &lt;/label&gt;
  &lt;button&gt;Sauvegarder&lt;/button&gt;
&lt;/form&gt;

&lt;!-- Formulaire avec un ensemble de champs, une légende et une étiquette --&gt;
&lt;form method="post"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Titre&lt;/legend&gt;
    &lt;label&gt;&lt;input type="radio" name="radio"&gt;Sélectionnez-moi&lt;/label&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</pre>

<h3 id="result">Résultat</h3>

<div>{{EmbedLiveSample("examples", "100%", 130)}}</div>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Learn/Forms">Guide des formulaires HTML</a></li>
  <li>D'autres éléments qui sont utilisés lors de la création de formulaires : <a href="/fr/docs/Web/HTML/Element/Button"><code>&lt;button&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/datalist"><code>&lt;datalist&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Fieldset"><code>&lt;fieldset&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Label"><code>&lt;label&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Legend"><code>&lt;legend&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Meter"><code>&lt;meter&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Optgroup"><code>&lt;optgroup&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Option"><code>&lt;option&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/output"><code>&lt;output&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Progress"><code>&lt;progress&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a>.</li>
  <li>Obtenir une liste des éléments du formulaire : <a href="/fr/docs/Web/API/HTMLFormElement/elements"><code>HTMLFormElement.elements</code></a></li>
  <li><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Form_Role">ARIA : rôle <code>form</code></a></li>
  <li><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Search_role">ARIA : rôle <code>search</code></a></li>
 </ul>
