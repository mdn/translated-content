---
title: contentScripts.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
tags:
  - API
  - Extensions
  - NeedsTranslation
  - Reference
  - RegisteredContentScript
  - TopicStub
  - Type
  - contentScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
---
<div>{{AddonSidebar()}}</div>

<p>Un <code>RegisteredContentScript</code> est renvoyé par un appel à  {{WebExtAPIRef("contentScripts.register()")}} et représente les scripts de contenu enregistrés dans cet appel.</p>

<p>Il définit une seule fonction {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister()", "unregister()")}}, qui peut être utilisée pour annuler l'enregistrement des scripts de contenu.</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> Si cet objet est détruit (par exemple parce qu'il est hors de portée), les scripts de contenu seront automatiquement désinscrits. Vous devriez donc garder une référence à cet objet aussi longtemps que vous voulez que les scripts de contenu restent enregistrés.</p>
</div>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister","unregister()")}}</dt>
 <dd>Annule l'inscription des scripts de contenu représentés par cet objet.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.contentScripts.RegisteredContentScript", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Ce code permet de basculer un script de contenu enregistré sur un clic d'action du navigateur :</p>

<pre class="brush: js">var registered = null;

async function register() {

  registered = await browser.contentScripts.register({
    matches: ["*://*.org/*"],
    js: [{
      code: "document.body.innerHTML = '&lt;h1&gt;This page has been eaten&lt;h1&gt;'"
    }],
    runAt: "document_idle"
  });

}

function toggle() {
  if (registered) {
    registered.unregister();
    registered = null;
  } else {
    register();
  }
}

browser.browserAction.onClicked.addListener(toggle);

</pre>

<p>{{WebExtExamples}}</p>
