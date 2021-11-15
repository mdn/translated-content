---
title: Interagir avec le presse-papier
slug: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
tags:
  - Add-ons
  - Clip
  - Clipboard
  - Cut
  - Editing
  - Extensions
  - Text
  - WebExtensions
  - coller
  - copier
  - copy
  - couper
  - paste
translation_of: Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
original_slug: Mozilla/Add-ons/WebExtensions/interagir_avec_le_presse_papier
---
<div>{{AddonSidebar}}</div>

<p>ll y a deux façons dont les extensions de navigateur peuvent interagir avec le presse-papiers système : la méthode {{domxref("Document.execCommand()")}}  et l'asynchrone moderne de l'<a href="/fr/docs/Web/API/Clipboard_API">API Presse-papiers</a>.</p>

<p>La méthode {{domxref("Document.execCommand()")}} peut être utilisée, en spécifiant la commande désirée :</p>

<ul>
 <li><code>document.execCommand("copy")</code></li>
 <li><code>document.execCommand("cut")</code></li>
 <li><code>document.execCommand("paste")</code></li>
</ul>

<p>L'API Presse-papiers fournit un accès asynchrone pour lire et écrire directement le contenu du presse-papiers. Par exemple, pour lire le texte du presse-papiers :</p>

<pre class="brush: js">navigator.clipboard.readText().then(text =&gt; outputElem.innerText = text);</pre>

<p>Ceci demande le contenu du presse-papiers et, lorsque la réponse est reçue, stocke le texte du presse-papiers dans le {{domxref("Node.innerText", "innerText")}} d'un élément.</p>

<div class="note">
<p><strong>Note:</strong> Les méthodes asynchrones de l'API Clipboard sont un ajout récent à la spécification et peuvent ne pas être entièrement implémentées dans tous les navigateurs. Assurez-vous de passer en revue les tableaux de compatibilité pour chaque méthode avant de les utiliser, afin de vous assurer que le support est suffisamment large pour vos besoins.</p>
</div>

<h2 id="Ecrire_dans_le_presse-papiers">Ecrire dans le presse-papiers</h2>

<p>Il y a deux façons d'écrire dans le presse-papiers. Vous pouvez utiliser les actions {{domxref("Document.execCommand", "document.execCommand()")}} pour déclencher les actions "couper" et "copier", qui remplace le contenu actuel du presse-papiers par les données actuellement sélectionnées. L'autre option est d'utiliser la méthode {{domxref("Clipboard.writeText()")}} ou {{domxref("Clipboard.write()")}} de l'API Presse-papiers pour remplacer le contenu du presse-papiers par des données spécifiques.</p>

<h3 id="Utiliser_execCommand()">Utiliser execCommand()</h3>

<p>Les commandes {{domxref("Document.execCommand", "document.execCommand()")}} de la méthode <code>"couper"</code> et <code>"copier"</code> peuvent être utilisées pour remplacer le contenu actuel du presse-papiers par le matériel sélectionné. Ces commandes peuvent être utilisées sans permission spéciale si vous les utilisez dans un gestionnaire d'événements de courte durée pour une action utilisateur (par exemple, un gestionnaire de clics).</p>

<p>Par exemple, supposons que vous ayez un popup qui inclut le HTML suivant :</p>

<pre class="brush: html">&lt;input id="input" type="text"/&gt;
&lt;button id="copy"&gt;Copy&lt;/button&gt;
</pre>

<p>Pour que le bouton <code>"copier"</code> copie le contenu de l'élément {{HTMLElement("input")}}, vous pouvez utiliser du code comme ceci :</p>

<pre class="brush: js">function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);</pre>

<p>Parce que l'appel <code>execCommand()</code> se trouve à l'intérieur d'un gestionnaire d'événements click, vous n'avez pas besoin de permissions spéciales ici.</p>

<p>Cependant, disons que vous déclenchez plutôt la copie à partir d'une alarme  :</p>

<pre class="brush: js">function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

browser.alarms.create({
  delayInMinutes: 0.1
});

browser.alarms.onAlarm.addListener(copy);</pre>

<p>Selon le navigateur, cela peut ne pas fonctionner. Sur Firefox, cela ne fonctionnera pas, et vous verrez un message comme celui-ci dans votre console :</p>

<pre>document.execCommand(‘cut’/‘copy’) was denied because it was not called from inside a short running user-generated event handler.</pre>

<p>Pour activer ce cas d'utilisation, vous devez demander <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions">permission</a> <code>"clipboardWrite"</code>. Alors :  <code>"clipboardWrite"</code> vous permet d'écrire dans le presse-papiers en dehors d'un gestionnaire d'événements de courte durée pour une action utilisateur.</p>

<h3 id="Utilisation_de_l'API_Presse-papiers">Utilisation de l'API Presse-papiers</h3>

<p>L'API Presse-papiers ajoute une plus grande flexibilité, en ce sens que vous n'êtes pas limité à copier simplement la sélection courante dans le presse-papiers, mais vous pouvez spécifier directement quelles informations placer dans le presse-papiers.</p>

<p>L'utilisation de l'API nécessite que vous ayez les permissons de l'API <code>"clipboard-write"</code>. Vous pouvez vérifier cette permission en utilisant {{domxref("Permissions.query", "navigator.permissions.query()")}}:</p>

<pre class="brush: js">navigator.permissions.query({name: "clipboard-write"}).then(result =&gt; {
  if (result.state == "granted" || result.state == "prompt") {
    /* write to the clipboard now */
  }
});
</pre>

<p>Cette fonction prend une chaîne de caractères comme entrée et met à jour le presse-papiers pour contenir cette chaîne :</p>

<pre class="brush: js">function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}
</pre>

<div class="blockIndicator note">
<p><strong>Note :</strong> Le nom de la permission <code>clipboard-write</code> n'est pas supporté actuellement dans Firefox - seulement les navigateurs Chromium.</p>
</div>

<h3 id="***Considérations_spécifiques_du_navigateur">***Considérations spécifiques du navigateur</h3>

<p>Le presse-papiers et les autres API impliquées ici évoluent rapidement, de sorte qu'il y a des variations entre les navigateurs quant à leur mode de fonctionnement.</p>

<p>Dans Chrome:</p>

<ul>
 <li>Vous pouvez écrire dans le presse-papiers comme ceci dans tous les contextes d'exécution - pages d'arrière-plan, scripts de contenu, pages d'options et popups.</li>
 <li>Vous n'avez pas besoin de <code>"clipboardWrite"</code>, même pour écrire dans le presse-papiers en dehors d'un gestionnaire d'événements généré par l'utilisateur.</li>
</ul>

<p>Dans Firefox:</p>

<ul>
 <li>Vous pouvez écrire dans le presse-papiers comme ceci dans tous les contextes d'exécution <em>à l'exception des pages d'arrière-plan</em>. Dans Firefox, vous ne pouvez pas sélectionner du texte ou mettre au point un champ de saisie dans les pages d'arrière-plan, de sorte que vous ne pouvez pas écrire dans le presse-papiers à partir d'une page d'arrière-plan.</li>
 <li>A partir de la version 57, vous pouvez copier des images dans le presse-papiers à l'aide de l'API <code><a href="/fr/Add-ons/WebExtensions/API/clipboard/setImageData">clipboard.setImageData()</a></code>.</li>
 <li>Le support de l'API Clipboard {{domxref("Clipboard.writeText", "navigator.clipboard.writeText()")}} a été ajouté dans Firefox 63.</li>
 <li>Lors de l'utilisation de scripts de contenu, l'API Clipboard n'est disponible que pour les pages HTTPS. Comme solution de contournement, utilisez la messagerie entre vos scripts de contenu et le script d'arrière-plan.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> L'API <code>execCommand('copy')</code> n'est pas supporté dans <strong>Safari</strong></p>
</div>



<h2 id="Lecture_à_partir_du_presse-papiers">Lecture à partir du presse-papiers</h2>

<p>La méthode <code>execCommand()</code> fournit la commande <code>"coller"</code>, qui vous permet de coller le contenu actuel du presse-papiers au point d'insertion dans un contrôle modifiable. Vous pouvez gagner en flexibilité en utilisant les méthodes {{domxref("Clipboard.read()")}} et {{domxref("Clipboard.readText()")}}.</p>

<h3 id="Utilisation_de_execCommand()">Utilisation de execCommand()</h3>

<p>Tout d'abord, vous devez avoir la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions">permission</a> <code>"clipboardRead"</code> établie pour votre extension. C'est le cas même si vous utilisez la commande <code>"coller"</code> à partir d'un gestionnaire d'événements généré par l'utilisateur tel que {{event("click")}} ou {{event("keypress")}}.</p>

<p>Considérez le HTML qui inclut quelque chose comme ceci :</p>

<pre class="brush: html">&lt;textarea id="output"&gt;&lt;/textarea&gt;
&lt;button id="paste"&gt;Paste&lt;/button&gt;
</pre>

<p>Pour définir le contenu de l'élément {{HTMLElement("textarea")}} avec l'ID <code>"output"</code> du presse-papiers lorsque l'utilisateur clique sur le {{HTMLElement("button")}} <code>"coller"</code>, vous pouvez utiliser du code comme ceci :</p>

<pre class="brush: js">function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);</pre>

<h3 id="Utilisation_de_l'API_Presse-papiers_2">Utilisation de l'API Presse-papiers</h3>

<p>Les méthodes {{domxref("Clipboard.readText", "navigator.clipboard.readText()")}} et {{domxref("Clipboard.read", "navigator.clipboard.read()")}} de l'API Presse-papiers vous permettent de lire du texte arbitraire ou des données binaires à partir du presse-papiers. Cela vous permet d'accéder aux données du presse-papiers sans simplement les coller dans un élément modifiable.</p>

<p>Une fois que vous avez la permission <code>"clipboard-read"</code> de l'<a href="/fr/docs/Web/API/Permissions_API">API permissions</a>, vous pouvez lire facilement à partir du presse-papiers :</p>

<pre class="brush: js">navigator.clipboard.readText().then(clipText =&gt;
  document.getElementById("outbox").innerText = clipText);</pre>

<p>Cet extrait de code récupère le texte du presse-papiers et remplace le contenu actuel de l'élément par l'ID <code>"outbox"</code> avec ce texte.</p>

<h3 id="Considérations_spécifiques_au_navigateur">Considérations spécifiques au navigateur</h3>

<p>Firefox supporte la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions">permission</a> <code>"clipboardRead" à partir de la version</code> 54, mais ne supporte pas que le collage dans les élements en <a href="/fr/docs/Web/Guide/HTML/Editable_content">mode édition de contenu</a>, qui pour les scripts de contenu ne fonctionne qu'avec un {{HTMLElement("textarea")}}. Pour les scripts d'arrière-plan, n'importe quel élément peut être mis en mode contenu modifiable.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Clipboard_API">Clipboard API</a></li>
 <li><a href="/fr/docs/Web/API/Permissions_API">Permissions API</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Editable_content">Making content editable</a></li>
 <li>{{htmlattrxref("contenteditable")}}</li>
</ul>
