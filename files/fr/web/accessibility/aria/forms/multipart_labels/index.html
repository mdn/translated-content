---
title: Labels multi-options
slug: Web/Accessibility/ARIA/forms/Multipart_labels
tags:
  - ARAI
  - Accessibilité
  - Développement Web
  - Formulaire
translation_of: Web/Accessibility/ARIA/forms/Multipart_labels
original_slug: Accessibilité/ARIA/formulaires/Labels_multi-options
---
<h2 id="Utiliser_ARIA_avec_des_labels_comportant_des_champs">Utiliser ARIA avec des labels comportant des champs</h2>

<h3 id="Problem_2">Problème</h3>

<p>Un formulaire pose une question à un utilisateur, mais la zone de réponse est une partie de la phrase qui constitue la question. Un exemple classique que nous connaissons tous dans notre navigateur, c’est la paramètre des préférences « <code>Effacer l’historique après [x] jours</code>. » « <code>Effacer l’historique après</code> » est à la gauche de la boîte texte, « <code>x</code> » est le nombre, par exemple 21, et le mot « <code>jours</code> » suit la boîte texte, formant ainsi un phrase qu'il est facile de comprendre.</p>

<p>Si vous utilisez un lecteur d’écran, vous devez avoir remarqué que, lorsque vous allez à ce paramètre dans Firefox, il est actuellement écrit « <code>Effacer l’historique après 21 jours</code> ? », suivi par l’annonce que vous vous trouvez dans un boîte texte et qu’elle contient le nombre 21. C’est sympa, non ? Vous n’avez pas besoin de naviguer alentours pour trouver l’unité. « Jours » peut aisément être remplacé par « mois » ou « années », et dans de nombreuses boîtes de dialogues ordinaires, il n’y a aucun autre moyen de le savoir que de naviguer alentours avec les commandes d’examen de l’écran.</p>

<p>La solution se trouve dans l'attribut ARIA <code>aria-labelledby</code>. Son paramètre est une chaîne qui est la liste des identifiants des éléments HTML que vous voulez concaténer en un seul nom accessible.</p>

<p><code>aria-labelledby</code> et <code>aria-describedby</code> sont tous deux spécifiés dans l’élément de formulaire à labelliser, par exemple, un élément {{ HTMLElement("input") }}. Dans les deux cas, les liaisons d’un contrôle <code>&lt;label for&gt;</code>/<code>&lt;label&gt;</code> pouvant exister, sont neutralisées par <code>aria-labelledby</code>. Si, dans une page HTML vous fournissez <code>aria-labelledby</code>, vous devriez également fournir un <code>&lt;label for&gt;</code> afin d’également prendre en charge les anciens navigateurs qui ne prennent pas encore en charge ARIA. Avec Firefox 3, vos utilisateurs malvoyants auront automatiquement une meilleure accessibilité avec le nouvel attribut, mais les utilisateurs de navigateurs plus anciens ne seront pas pour autant laissé dans le noir.</p>

<p>Exemple :</p>

<pre class="brush: html">    &lt;input aria-labelledby="labelShutdown shutdownTime shutdownUnit" type="checkbox" /&gt;
    &lt;span id="labelShutdown"&gt;Éteindre l’ordinateur après&lt;/span&gt;
    &lt;input aria-labelledby="labelShutdown shutdownTime shutdownUnit" id="shutdownTime" type="text" value="10" /&gt;
    &lt;span id="shutdownUnit"&gt; minutes&lt;/span&gt;
</pre>

<h3 id="A_Note_for_JAWS_8_users_2">Pour les utilisateurs de JAWS 8</h3>

<p>JAWS 8.0 possède sa propre logique pour trouver les labels, ce qui lui fait systématiquement supplanter le <code>nomAccessible</code> que peut avoir une boîte texte dans un document HTML. Avec JAWS 8, je n’ai trouvé aucun moyen de lui faire accepter le label de l’exemple ci-dessus. Mais NVDA et Window-Eyes le font très bien, et Orca sur Linux n’a aucun problème non plus.</p>

<h3 id="Can_this_be_done_without_ARIA.3F_2">Peut-on faire la même chose sans ARIA ?</h3>

<p>Ben Millard fait remarquer dans un billet que  <a href="http://projectcerbera.com/blog/2008/03#day24" rel="nofollow">les contrôles peuvent être imbriqués dans des labels, comme démontré dans l'exemple ci-dessus avec HTML 4</a>, simplement en imbriquant l'élément <code>input</code> dans le <code>label</code>. Merci pour cette info, Ben ! Elle est vraiment utile et montre que certaines techniques existantes depuis des années nous échappe, même aux gourous que nous sommes. Cette technique fonctionne dans Firefox ; cependant, elle ne fonctionne actuellement pas dans de nombreux autres navigateurs, y compris IE. Donc, pour les labels comprenant des contrôles de formulaires, l'utilisation de <code>aria-labelledby</code> est encore la meilleure approche.</p>
