---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
tags:
  - API
  - Add-ons
  - BrowserSetting
  - Extensions
  - Property
  - WebExtensions
  - allowPopupsForUserEvents
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
---
<div>{{AddonSidebar()}}</div>

<p>Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut etre utilisé pour activer ou désactiver la capacité des pages web d'ouvrir des popups en réponse aux actions de l'utilisateur.</p>

<p>La valeur sous-jacente  est un booléen.</p>

<p>Par défaut, les navigateurs permettent aux pages Web d'ouvrir des fenêtres contextuelles en réponse à un ensemble particulier d'événements : par exemple <a href="/fr/docs/Web/Events/click">click</a>, <a href="/fr/docs/Web/Events/mouseup">mouseup</a>, <a href="/fr/docs/Web/Events/submit">submit</a>. Si <code>allowPopupsForUserEvents</code> est défini sur <code>false</code>, aucun événement utilisateur ne pourra ouvrir des fenêtres contextuelles. Si elle est définie sur <code>true</code>, l'ensemble d'événements par défaut sera autorisé à ouvrir des fenêtres contextuelles.</p>

<p>Par exemple, supposons qu'une page web comporte un code comme celui-ci :</p>

<pre class="brush: js">window.addEventListener("click", (e) =&gt; {
  window.open("https://example.com","myPopup",'height=400,width=400');
});
</pre>

<p>Par défaut, cela ouvrira une fenêtre contextuelle. Si vos extensions définient <code>allowPopupsForUserEvents</code> à <code>false</code>, cela n'ouvrira pas la fenêtre contextuelle, et l'utilisateur sera informé que le popup était bloqué.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.browserSettings.allowPopupsForUserEvents")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Basculer le réglage :</p>

<pre class="brush: js">function toggleAllowPopup() {

  function toggle(current) {
    console.log(`Current value: ${current.value}`);
    browser.browserSettings.allowPopupsForUserEvents.set({value: !current.value});
  }

  browser.browserSettings.allowPopupsForUserEvents.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() =&gt; {
  toggleAllowPopup();
});
</pre>

<p>{{WebExtExamples}}</p>
