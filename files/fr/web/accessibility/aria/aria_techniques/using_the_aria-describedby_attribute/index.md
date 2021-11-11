---
title: Utiliser l'attribut aria-describedby
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
tags:
  - ARIA
  - Accessibility
  - Attribute
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-describedby
---
<p>L'attribut <a href="https://www.w3.org/TR/wai-aria/#aria-describedby"><code>aria-describedby</code></a> est utilisé pour indiquer les identifiants des éléments qui décrivent l'objet. Il est utilisé pour établir une relation entre des composants ou des groupes et un texte les décrivant. Il est similaire à <a href="/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a> où un label décrit la nature d'un objet, tandis qu'une description fournit plus d'informations pouvant être utiles à l'utilisateur.</p>

<p>L'attribut <code>aria-describedby</code> n'est pas uniquement utilisé pour des éléments de formulaire ; il peut également être utilisé pour associer un texte statique avec des composants graphiques, des groupes d'éléments, des panneaux, des zones possédant un titre, des définitions, etc. La section <a href="#examples">Exemples</a> ci-dessous fournit plus d'informations sur l'utilisation de cet attribut dans ces cas précis.</p>

<p>Cet attribut peut être utilisé avec n'importe quel élément de formulaire HTML ; il n'est pas limité aux éléments auxquels un rôle ARIA a été assigné.</p>

<h2 id="value">Valeur</h2>

<p>La valeur de cet attribut est une liste d'identifiants d'éléments, séparés par des espaces</p>

<h2 id="possible_effects_on_user_agents_and_assistive_technology">Effets possibles sur les agents utilisateurs et les technologies d'assistance</h2>

<div class="note">
  <p><strong>Note :</strong> il existe plusieurs points de vue sur la façon dont les technologies d'assistance devraient traiter cette technique. L'information fournie ci-dessus est l'une de ces opinions et n'est pas normative.</p>
</div>

<h2 id="examples">Exemples</h2>

<h3 id="example_1_application_landmark_descriptions">Exemple 1 : Descriptions des points de repère (landmarks) d'une application</h3>

<p>Dans l'exemple ci-dessous, un paragraphe d'introduction décrit une application de calendrier. <code>aria-describedby</code> est utilisé pour associer le paragraphe avec le conteneur de l'application.</p>

<pre class="brush: html">
&lt;div role="applicaton" aria-labelledby="calendar" aria-describedby="info"&gt;
    &lt;h1 id="calendar"&gt;Calendrier&lt;h1&gt;
    &lt;p id="info"&gt;
        Ce calendrier affiche les prévisions de match du Racing Métro.
    &lt;/p&gt;
    &lt;div role="grid"&gt;
        …
    &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="example_2_a_close_button">Exemple 2 : Un bouton de fermeture</h3>

<p>Dans l'exemple ci-dessous, un lien qui fonctionne comme le bouton <code>Fermer</code> d'une boîte de dialogue est décrit ailleurs dans le document. L'attribut <code>aria-describedby</code> est utilisé pour associer la description au lien.</p>

<pre class="brush: html">
&lt;button aria-label="Fermer" aria-describedby="descriptionClose"
    onclick="myDialog.close()"&gt;X&lt;/button&gt;
…

&lt;div id="descriptionClose"&gt;
  La fermeture de cette fenêtre entraînera la perte des
  informations saisies et vous renverra vers la page
  principale.
&lt;/div&gt;
</pre>

<h2 id="notes">Notes</h2>

<ul>
 <li>L'attribut <code>aria-describedby</code> n'est pas destiné à référencer les descriptions d'une ressource externe. Comme il s'agit d'un identifiant, il doit référencer un élément du DOM du document courant.</li>
</ul>

<h2 id="used_by_aria_roles">Utilisé par les rôles ARIA</h2>

<p>Tous les éléments de balisage de base.</p>

<h2 id="related_aria_techniques">Techniques ARIA connexes</h2>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">Utiliser l'attribut <code>aria-labelledby</code></a></li>
</ul>

<h2 id="compatibility">Compatibilité</h2>

<p>À faire : ajouter les informations de prise en charge pour les combinaisons les plus courantes d'agents utilisateurs et de produits de technologies d'assistance.</p>

<h2 id="additional_resources">Autres ressources</h2>

<ul>
 <li><a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby">Spécification WAI-ARIA de <code>aria-describedby</code></a></li>
</ul>
