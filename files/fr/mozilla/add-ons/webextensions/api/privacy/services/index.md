---
title: privacy.services
slug: Mozilla/Add-ons/WebExtensions/API/privacy/services
tags:
  - API
  - Add-ons
  - Extensions
  - Privacy
  - Property
  - Reference
  - Services
translation_of: Mozilla/Add-ons/WebExtensions/API/privacy/services
---
<div>{{AddonSidebar}}
<p>La propriété {{WebExtAPIRef("privacy.services")}} contient des paramètres liés à la vie privée contrôlant les services offerts par le navigateur ou par des tiers. Chaque propriété est un objet  {{WebExtAPIRef("types.BrowserSetting")}}.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>passwordSavingEnabled</code></dt>
 <dd>Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur contenue est un booléen. Si il est défini à <code>true</code>, le gestionnaire de mot de passe du navigateur proposera de stocker des mots de passe lorsque l'utilisateur les entrera. La valeur par défaut est : <code>true</code>.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.privacy.services", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Désactivation, si possible, du gestionnaire de mot de passe.</p>

<pre class="brush: js">function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

  var getting = browser.privacy.services.passwordSavingEnabled.get({});
  getting.then((got) =&gt; {
    console.log(got.value);
    if ((got.levelOfControl === "controlled_by_this_extension") ||
        (got.levelOfControl === "controllable_by_this_extension")) {
      var setting = browser.privacy.services.passwordSavingEnabled.set({
        value: false
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set passwordSavingEnabled");
    }
  });</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/privacy"><code>chrome.privacy</code></a>.</p>
</div>
</div>
