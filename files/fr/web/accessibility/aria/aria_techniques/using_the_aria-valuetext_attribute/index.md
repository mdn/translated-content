---
title: Utiliser l'attribut aria-valuetext
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuetext
---
<h3 id="Description">Description</h3>

<p>L’attribut <code>aria-valuetext</code> est utilisé pour définir un texte alternatif, lisible par l'homme, de la valeur <a href="/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow"><code>aria-valuenow</code></a> d’un composant à intervalle tel qu’une barre de progression, un bouton rotatif <code>spinbutton</code> ou un curseur <code>slider</code>.</p>

<p>Les développeurs <strong>DEVRAIENT</strong> uniquement définir l’attribut <code>aria-valuetext</code> lorsque la valeur retournée ne peut pas être précisément représentée sous forme de nombre.</p>

<p>Par exemple, dans le cas d'un curseur qui peut retourner les valeurs <code>petite</code>, <code>moyenne</code>et <code>grand</code>, les valeurs de <a href="/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow"><code>aria-valuenow</code></a> pourraient aller de 1 à 3, indiquant ainsi la position de chaque valeur dans l’intervalle, mais la valeur de <code>aria-valuetext</code> sera l'une des chaînes suivantes : <code>petite</code>, <code>moyenne</code> ou <code>grande</code>.</p>

<h3 id="Valeurs">Valeurs</h3>

<p>Représentation d’un nombre sous forme d'une chaîne</p>

<h3 id="Effets_possibles_sur_les_agents_utilisateurs_et_les_technologies_d’assistance">Effets possibles sur les agents utilisateurs et les technologies d’assistance</h3>

<p>Si l’attribut <code>aria-valuetext</code> est absent, les technologies d’assistance compteront uniquement sur l’attribut <a href="/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow"><code>aria-valuenow</code></a> pour la valeur courante. Si <code>aria-valuetext</code> est spécifié, les technologies d’assistance <strong>DEVRAIENT</strong> retourner cette valeur plutôt que celle de <code>aria-valuenow</code>.</p>

<div class="note"><p><strong>Note :</strong> il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.</p></div>

<h3 id="Exemples">Exemples</h3>

<h4 id="Exemple_1">Exemple 1 :</h4>

<p>L’extrait de code ci-dessous montre un curseur simple de sélection d’un jour de la semaine. La valeur du curseur est numérique, et l’attribut <code>aria-valuetext</code> est utilisé pour fournir le nom de jour. L’application actualisera programmatiquement <code>aria-valuetext</code> selon la valeur de <code>aria-valuenow</code>.</p>

<pre class="brush: html">&lt;div role="slider" aria-valuenow="1"
    aria-valuemin="1" aria-valuemax="7"
    aria-valuetext="Dimanche"&gt;
</pre>

<h4 id="Exemples_concrets">Exemples concrets :</h4>

<h3 id="Notes">Notes</h3>

<h3 id="Utilisé_avec_les_rôles_ARIA">Utilisé avec les rôles ARIA</h3>

<ul>
 <li><a href="/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_progressbar">progressbar</a> ;</li>
 <li>scrollbar ;</li>
 <li><a href="/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_slider">slider</a></li>
 <li>spinbutton.</li>
</ul>

<h3 id="Techniques_ARIA_connexes">Techniques ARIA connexes</h3>

<ul>
 <li><a href="/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow">aria-valuenow</a>.</li>
</ul>

<h3 id="Autres_ressources">Autres ressources</h3>

<ul>
 <li><a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-valuetext">Spécification WAI-ARIA pour l’attribut <code>aria-valuetext</code></a>.</li>
</ul>
