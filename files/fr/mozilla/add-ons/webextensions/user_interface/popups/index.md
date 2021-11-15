---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
tags:
  - WebExtensions
  - interface utilisateur
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Popups
---
<div>{{AddonSidebar}}</div>

<div>
<p>Une fenêtre contextuelle est une boîte de dialogue associée à un <a href="/fr/Add-ons/WebExtensions/Browser_action">bouton de la barre d'outils</a> ou à un <a href="/fr/Add-ons/WebExtensions/Page_actions">bouton de la barre d'adresse</a>. Cette page décrit les popups en général, leur spécification, leur débogage, leur redimensionnement et leur conception, ainsi que des exemples d'utilisation..</p>

<p><img alt="" src="page_action_popup.png"></p>

<p>Lorsque l'utilisateur clique sur le bouton, la fenêtre contextuelle s'affiche. Lorsque l'utilisateur clique n'importe où en dehors de la fenêtre contextuelle, la fenêtre contextuelle est fermée. La fenêtre contextuelle peut être fermée par programmation en appelant <code><a href="/fr/docs/Web/API/Window/close">window.close()</a></code> à partir d'un script exécuté dans la fenêtre contextuelle. Cependant, vous ne pouvez pas ouvrir le menu contextuel à partir d'un JavaScript de le l'extension : il ne peut être ouvert qu'en réponse à une action de l'utilisateur.</p>

<p>Vous pouvez définir un raccourci clavier qui ouvre la fenêtre contextuelle en utilisant les raccourcis <code>"_execute_browser_action"</code> et <code>"_execute_page_action"</code>. Consultez la clé de <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands">commande</a></code> de la documentation du manifest.json.</p>

<h2 id="Spécification_dune_fenêtre_contextuelle">Spécification d'une fenêtre contextuelle</h2>

<p>Le popup est spécifié comme un fichier HTML, qui peut inclure des fichiers CSS et JavaScript, comme le fait une page Web normale. Contrairement à une page normale, le JavaScript peut utiliser toutes les <a href="/fr/Add-ons/WebExtensions/API">APIs WebExtension</a> auxquelles l'extension possède des <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a>.</p>

<p>Le fichier HTML est inclus dans la WebExtension et spécifié en partie à la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> ou <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a> par <code>"default_popup"</code> dans le manifest.json :</p>

<pre class="brush: json">  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }</pre>

<p>Vous pouvez demander au navigateur d'inclure une feuille de style dans votre fenêtre contextuelle qui la rendra compatible avec l'interface utilisateur du navigateur. Pour ce faire, ajoutez <code>"browser_style": true</code> dans la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> ou <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a>.</p>

<p>Les popups ont une politique de sécurité de contenu qui restreint les sources à partir de laquelle ils peuvent charger des ressources et interdire certaines pratiques dangereuses telles que l'utilisation <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code>. Voir la <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">politique de sécurité du contenu</a>  pour plus de détails à ce sujet.</p>

<h2 id="Déboguer_des_fenêtres_pop-up">Déboguer des fenêtres pop-up</h2>

<p>Vous pouvez déboguer la balisage et le javaScript d'un popup en utilisant le débogueur de l'extension, mais vous devrez activer la fonction désactiver de la fonction d'occlusion automatique contextuelle pour éviter que les fenêtres contextuelles ne se cache lorsque vous cliquez à l'extérieur. <a href="/fr/Add-ons/WebExtensions/Debugging#Debugging_popups">En savoir plus sur le débogage des fenêtres pop-up</a>.</p>

<h2 id="Redimensionnement_contextuel">Redimensionnement contextuel</h2>

<p>Le redimensionnement automatique des fenêtres contextuelles correspond à leur contenu.<br>
 L'algorithme pour cela peut être différent d'un navigateur à l'autre.</p>

<p>Dans Firefox, la taille est calculée juste avant que le popup ne s'affiche, et au plus, 10 fois par seconde après les mutations DOM. Pour les documents de mode strict, la taille est calculée en fonction de la taille de l'élément <code><a href="/fr/docs/Web/HTML/Element/body">&lt;body&gt;</a></code>.</p>

<p>Pour le mode quirks, c'est l'élément <code><a href="/fr/docs/Web/HTML/Element/html">&lt;html&gt;</a></code>. Firefox calcule la largeur préférée du contenu de cet élément, le renvoie à cette largeur, puis redimensionne de sorte qu'il n'y a pas de défilement vertical. Il atteindra une taille de <strong>800x600 pixels</strong> au maximum si cela correspond à l'écran de l'utilisateur. (Avant Firefox 60, c'était seulement 680px.) . Si l'utilisateur <a href="https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar">déplace le bouton du complément dans le menu</a> ou il apparaît dans le dépassement de la barre d'outils, la fenêtre apparaît dans le panneau du menu avec une largeur fixe.</p>

<p>Dans Firefox Android 57, la popup s'ouvre comme une page web dans un nouvel onglet.</p>

<h2 id="Design_de_la_popup">Design de la popup</h2>

<p>Pour plus de détails sur la façon de concevoir la page Web de votre popup pour qu'elle corresponde au style de Firefox, voir la documentation de <a href="https://design.firefox.com/photon/index.html">Photon Design System</a>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Le dépôt <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> sur GitHub contient plusieurs exemples de WebExtensions qui utilisent l'action du navigateur :</p>

<ul>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">beastify</a> utilise l'action du navigateur.</li>
</ul>
</div>
