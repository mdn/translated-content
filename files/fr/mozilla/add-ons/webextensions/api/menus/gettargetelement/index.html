---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
tags:
  - API
  - Méthode
  - Reference
  - WebExtensions
  - getTargetElement
  - menus
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
---
<div>{{AddonSidebar}}</div>

<p>Renvoie l'élément pour un <code>targetElementId</code> donné</p>

<p>Cette méthode est disponible pour tous les contextes de script d'extension (scripts de contenu, pages de fond et autres pages d'extension) et retourne l'élément pour un  <code>info.targetElementId</code> donnée, à condition que l'élément existe toujours dans le document où la méthode est appelée.</p>

<p>La méthode ne fonctionne que dans le document qui inclut l'élément cliqué avec le bouton droit de la souris et la méthode <code>targetElementId</code> expire lorsque l'utilisateur ouvre un autre menu contextuel.</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> <code>menus.getTargetElement</code> ne retourne l'élément demandé que s'il est appelé dans le même contexte que le document qui contient l'élément, par exemple en utilisant des scripts de contenu (comme dans l'exemple ci-dessous).</p>
</div>

<p><br>
 Une extension nécessite la permission "menus" pour utiliser cette API</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">let elem = browser.menus.getTargetElement(targetElementId);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>targetElementId</code></dt>
 <dd>La propriété de l'objet <code>{{WebExtAPIRef("menus.OnClickData")}}</code> passé au gestionnaire <code>{{WebExtAPIRef("menus.onClicked")}}</code>ou à l'événement <code>{{WebExtAPIRef("menus.onShown")}}</code>.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>L'élément auquel se réfère le paramètre <code>targetElementId</code>. Si le paramètre <code>targetElementId</code> n'est pas valide, La méthode retourne <code>null</code>.</p>

<h2 id="Exemples">Exemples</h2>

<p>L'exemple suivant utilise la méthode <code>getTargetElement</code> pour obtenir l'élément auquel se réfère la propriété <code>info.targetElementId</code> puis le supprime.</p>

<pre class="brush: js">browser.menus.create({
  title: "Remove element",
  documentUrlPatterns: ["*://*/*"],
  contexts: ["audio", "editable", "frame", "image", "link", "page", "password", "video"],
  onclick(info, tab) {
    browser.tabs.executeScript(tab.id, {
      frameId: info.frameId,
      code: `browser.menus.getTargetElement(${info.targetElementId}).remove();`,
    });
  },
});
</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>



<p>{{Compat("webextensions.api.menus.getTargetElement")}}</p>

<h2 id="voir_aussi">voir aussi</h2>

<ul>
 <li>{{WebExtAPIRef("menus.create")}}</li>
 <li>{{WebExtAPIRef("menus.OnClickData")}}</li>
</ul>
