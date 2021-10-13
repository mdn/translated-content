---
title: <select>
slug: Web/HTML/Element/select
tags:
  - Element
  - Formulaires
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/select
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;select&gt;</code></strong> représente un contrôle qui fournit une liste d'options parmi lesquelles l'utilisateur pourra choisir.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}</div>

<p>L'exemple ci-avant illustre une utilisation simple de <code>&lt;select&gt;</code> où l'attribut <code>id</code> peut être associé à un élément {{htmlelement("label")}} qui permettra d'avoir un libellé accessible pour ce champ et où un attribut <code>name</code> représente le nom de la donnée qui sera envoyée au serveur. Chaque option est définie grâce à un élément {{htmlelement("option")}} qui se situe à l'intérieur de l'élément <code>&lt;select&gt;</code>.</p>

<p>Chaque élément <code>&lt;option&gt;</code> doit avoir un attribut <code>value</code> qui contient la valeur qui sera envoyée au serveur lorsque l'option est sélectionnée. Si aucune valeur n'est fournie, la valeur par défaut sera le texte contenu dans l'élément. Il est possible d'inclure un attribut <code>selected</code> sur un élément <code>&lt;option&gt;</code> afin que cette option soit sélectionnée par défaut au chargement de la page.</p>

<p>L'élément <code>&lt;select&gt;</code> possède certains attributs spécifiques dont <code>multiple</code> qui permet de choisir plusieurs options simultanément et <code>size</code> qui indique le nombre d'options affichées en même temps. Cet élément accepte également divers attributs qui sont utilisés pour les champs de formulaire tels que <code>required</code>, <code>disabled</code>, <code>autofocus</code>, etc.</p>

<p>Il est possible de regrouper plusieurs éléments <code>&lt;option&gt;</code> à l'intérieur d'éléments {{htmlelement("optgroup")}} afin de créer des groupes d'options distincts.</p>

<p>Pour plus d'exemples, voir <a href="/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs#Contenu_déroulant">les contrôles natifs pour les formulaires</a>.</p>

<h2 id="Attributs">Attributs</h2>

<p>Comme tous les autres éléments HTML, celui-ci inclut <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("autocomplete")}}</dt>
 <dd>Une chaîne de caractères qui fournit une indication à l'agent utilisateur pour les fonctionnalités d'autocomplétion. Voir <a href="/fr/docs/Web/HTML/Attributs/autocomplete">la page sur l'attribut <code>autocomplete</code></a> pour une liste des valeurs utilisables et de leurs impacts sur l'autocomplétion.</dd>
 <dt>{{htmlattrdef("autofocus")}}</dt>
 <dd>Cet attribut booléen permet d'indiquer si ce contrôle du formulaire devrait recevoir le focus au chargement de la page. Pour un même document, seul un élément de formulaire peut avoir l'attribut <code>autofocus</code> activé.</dd>
 <dt>{{htmlattrdef("disabled")}}</dt>
 <dd>Cet attribut booléen indique que l'utilisateur ne peut pas intéragir avec le contrôle. Si cet attribut n'est pas utilisé, le contrôle héritera de l'état paramétré selon son conteneur (par exemple, via son élément parent {{HTMLElement("fieldset")}}. Si aucun élément parent n'a l'attribut <code>disabled</code> activé, le contrôle sera actif.</dd>
 <dt>{{htmlattrdef("form")}}</dt>
 <dd>Cet attribut sert de référence au formulaire auquel est associé cet élément. Si cet attribut est utilisé, sa valeur doit être l'identifiant d'un élément {{HTMLElement("form")}} du même document. Cet attribut permet de placer des éléments n'importe où dans le document et pas nécessairement comme descendants d'un formulaire.</dd>
 <dt>{{htmlattrdef("multiple")}}</dt>
 <dd>Cet attribut booléen indique qu'on peut sélectionner plusieurs options parmi celles offertes dans le contrôle. Par défaut, si cet attribut n'est pas utilisé, seule une option peut être sélectionnée.</dd>
 <dt>{{htmlattrdef("name")}}</dt>
 <dd>Le nom associé au contrôle.</dd>
 <dt>{{htmlattrdef("required")}}</dt>
 <dd>Un attribut booléen qui indique qu'une option dont la valeur est une chaîne de caractères non-vide doit être sélectionnée.</dd>
 <dt>{{htmlattrdef("size")}}</dt>
 <dd>Si le contrôle est affichée comme une liste déroulante, cet attribut indique le nombre de lignes qui doivent être visibles à l'écran en même temps. On notera que les navigateurs ne sont pas obligés de présenter un élément <code>&lt;select</code><code>&gt;</code> sous la forme d'une liste déroulante. La valeur par défaut de cet attribut est 0 (cf. notes de compatibilité ci-après).</dd>
</dl>

<h2 id="Mise_en_forme_avec_CSS">Mise en forme avec CSS</h2>

<p>Il est communément admis que l'élément <code>&lt;select&gt;</code> est difficilement mis en forme avec CSS. Certains aspects de l'élément, <a href="/fr/docs/Apprendre/CSS/Introduction_à_CSS/Le_modèle_de_boîte">son modèle de boîte</a>, <a href="/fr/docs/Web/CSS/CSS_Fonts">la police utilisée</a> ou encore l'apparence ({{cssxref("appearance")}}), peuvent être modifiés.</p>

<p>Toutefois, ces propriétés peuvent fournir des résultats incohérents entre les différents navigateurs et il peut être difficile d'aligner différents contrôles sur une colonne.Aussi, si la structure interne de cet élément est trop complexe, on pourra créer un tel contrôle en utilisant des éléments non sémantiques, du code JavaScript et WAI-ARIA afin de décrire la sémantique du contrôle.</p>

<p>Pour plus d'informations sur la mise en forme de <code>&lt;select&gt;</code> :</p>

<ul>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML">Mettre en forme les formulaires HTML</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms">Mise en forme avancée des formulaires HTML</a></li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_basique">Exemple basique</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;!-- C'est la deuxième valeur --&gt;
&lt;!-- qui sera initialement sélectionnée --&gt;
&lt;select id="monselect"&gt;
  &lt;option value="valeur1"&gt;Valeur 1&lt;/option&gt;
  &lt;option value="valeur2" selected&gt;Valeur 2&lt;/option&gt;
  &lt;option value="valeur3"&gt;Valeur 3&lt;/option&gt;
&lt;/select&gt;
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple_basique","100%","150")}}</p>

<h3 id="Exemple_multi-selection">Exemple multi-selection</h3>

<p>L'exemple qui suit est légèrement plus complexe et illustre certaines fonctionnalités qui peuvent être utilisées avec un élément <code>&lt;select&gt;</code> :</p>

<pre class="brush: html">&lt;label&gt;Veuillez choisir un ou plusieurs animaux :
  &lt;select name="pets" multiple size="4"&gt;
    &lt;optgroup label="Animaux à 4-jambes"&gt;
      &lt;option value="Chien"&gt;Chien&lt;/option&gt;
      &lt;option value="chat"&gt;Chat&lt;/option&gt;
      &lt;option value="hamster" disabled&gt;Hamster&lt;/option&gt;
    &lt;/optgroup&gt;
    &lt;optgroup label="Animaux volants"&gt;
      &lt;option value="perroquet"&gt;Perroquet&lt;/option&gt;
      &lt;option value="macaw"&gt;Macaw&lt;/option&gt;
      &lt;option value="albatros"&gt;Albatros&lt;/option&gt;
    &lt;/optgroup&gt;
  &lt;/select&gt;
&lt;/label&gt;
</pre>

<p>Cet exemple n'est pas disponible de façon interactive (le moteur de MDN supprime l'attribut <code>multiple</code> lors de l'affichage de la page) mais vous pouvez voir <a href="https://mdn.github.io/learning-area/html/forms/select-example/select-multiple.html">l'exemple sur GitHub</a>.</p>

<p>Vous pourrez voir que :</p>

<ul>
 <li>Plusieurs options peuvent être sélectionnées grâce à l'attribut <code>multiple</code>.</li>
 <li>L'attribut <code>size</code> permet d'afficher uniquement 4 lignes simultanément et qu'il faut faire défiler le contenu.</li>
 <li>Les éléments <code>&lt;optgroup&gt;</code> ont été utilisés pour diviser les choix en différents groupes. Cela applique un effet simplement visuel (avec le nom en gras et les options indentées).</li>
 <li>Le choix "Hamster" est présent avec l'attribut <code>disabled</code> et ne peut donc pas être sélectionné.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Sur un ordinateur de bureau, on pourra maintenir les touches <kbd>Ctrl</kbd>, <kbd>Command</kbd>, ou <kbd>Shift</kbd> en cliquant afin de sélectionner/déselectionner plusieurs options.</p>
</div>

<h3 id="Sélectionner_plusieurs_options">Sélectionner plusieurs options</h3>

<p>Sur un ordinateur de bureau, il existe différentes façons de sélectionner plusieurs options pour un élément <code>&lt;select&gt;</code> utilisant un attribut <code>multiple</code>.</p>

<p>Pour les personnes qui utilisent la souris, il est possible de maintenir les touches <kbd>Ctrl</kbd>, <kbd>Command</kbd> ou <kbd>Shift</kbd> (selon le système d'exploitation utilisé) et de cliquer sur les différentes options afin de les sélectionner/déselectionner.</p>

<div class="warning">
<p><strong>Attention :</strong> Les moyens décrits ci-après pour sélectionner des options qui ne sont pas contigües semblent ne fonctionner qu'avec Firefox. On notera également que sur macOS, les raccourcis <kbd>Ctrl</kbd> + <kbd>Bas</kbd> et <kbd>Ctrl</kbd> + <kbd>Haut</kbd> sont utilisées par défaut par le système d'exploitation et qu'il faut les désactiver si on souhaite qu'ils fonctionnent dans le navigateurs.</p>
</div>

<p>Les utilisateurs du clavier pourront sélectionner des options contigües de la façon suivante :</p>

<ul>
 <li>Placer le focus sur l'élément <code>&lt;select&gt;</code> (avec la touche <kbd>Tab</kbd> par exemple).</li>
 <li>Sélectionner une option en haut ou en bas de l'intervalle en se déplaçant avec les touches <kbd>Haut</kbd> et <kbd>Bas</kbd>.</li>
 <li>Maintenir la touche <kbd>Shift</kbd> puis utiliser les touches <kbd>Haut</kbd> et <kbd>Bas</kbd> pour augmenter ou réduire le nombre d'options sélectionnées.</li>
</ul>

<p>Les utilisateurs du clavier pourront sélectionner des options non-contigües de la façon suivante :</p>

<ul>
 <li>Placer le focus sur l'élément <code>&lt;select&gt;</code> (avec la touche <kbd>Tab</kbd> par exemple).</li>
 <li>Maintenir la touche <kbd>Ctrl</kbd> puis utiliser les touches <kbd>Haut</kbd> et <kbd>Bas</kbd> pour modifier le focus sur l'option qu'on souhaite choisir ou rejeter. L'option avec le focus sera entourée par un contour en pointillé.</li>
 <li>Appuyer sur <kbd>Espace</kbd> pour sélectionner/déselectionner les options avec le focus et ainsi de suite pour les différentes options.</li>
</ul>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">contenu phrasé</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_interactif">contenu interactif</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_associé_aux_formulaires">contenu de formulaire</a> (listé, étiquetable, réinitialisable, qui peut être envoyé).</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td>Zéro ou plusieurs éléments {{HTMLElement("option")}} ou {{HTMLElement("optgroup")}}.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisé</th>
   <td>{{ARIARole("menu")}}</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLSelectElement")}}</td>
  </tr>
 </tbody>
</table>

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
   <td>{{SpecName('HTML WHATWG', 'forms.html#the-select-element', '&lt;select&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#the-select-element', '&lt;select&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'interact/forms.html#h-17.6', '&lt;select&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.select")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les autres éléments relatifs aux formulaires : {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("option")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}</li>
 <li>Les évènements déclenchés par <code>&lt;select&gt;</code> : <code><a href="/fr/docs/Web/Events/input">input</a></code>, <code><a href="/fr/docs/Web/Events/change">change</a></code></li>
</ul>
