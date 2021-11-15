---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - useDocumentFonts
translation_of: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
---
<div>{{AddonSidebar()}}</div>

<p>Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} dont la valeur sous-jacente est un booléen.</p>

<p>Par défaut, bien sûr, les pages Web peuvent spécifier les polices qu'ils veulent utiliser les propriétés CSS comme <code><a href="/fr/docs/Web/CSS/font-family">font-family</a></code>. Ce paramètre permet à une extension d'indiquer à Firefox d'ignorer les polices spécifiées par la page et d'utiliser uniquement les polices système.</p>

<p>Sa valeur sous-jacente est un booléen :</p>

<ul>
 <li><code>true</code>: utilise les polices spécifiées par la page Web. C'est la valeur par défaut.</li>
 <li><code>false</code>:  utilise les polices du système.</li>
</ul>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.browserSettings.useDocumentFonts")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Définissez le paramètre sur <code>false</code>:</p>

<pre class="brush: js">function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.useDocumentFonts.set({value: false}).
  then(logResult);</pre>

<p>{{WebExtExamples}}</p>
