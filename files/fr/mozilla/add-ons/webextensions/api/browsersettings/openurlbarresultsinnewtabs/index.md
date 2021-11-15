---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - openUrlbarResultsInNewTabs
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
---
<div>{{AddonSidebar()}}</div>

<p>Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jacente est un booléen.</p>

<p>Quand l'utilisateur facalise la barre d'adresse et commence à taper, le navigateur propose des suggestions de saisie semi-automatique : une liste déroulante de pages web basée sur l'entrée incomplète de l'utilisateur et son historique de navigation.</p>

<p>Si la valeur est <code>true</code>, alors lorsque l'utiliseur sélectionne l'un des éléments, l'élément est ouvert dans un nouvel onglet. Si la valeur est <code>false</code> (valeur par défaut) l'élément est ouvert dans l'onglet en cours.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.browserSettings.openUrlbarResultsInNewTabs")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Définit le paramètre à <code>true</code>:</p>

<pre class="brush: js">function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openUrlbarResultsInNewTabs.set({value: true}).
  then(logResult);</pre>

<p>{{WebExtExamples}}</p>
