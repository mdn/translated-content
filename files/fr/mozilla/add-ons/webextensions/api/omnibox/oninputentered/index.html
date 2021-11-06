---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
  - onInputEntered
translation_of: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
---
<div>{{AddonSidebar()}}</div>

<p>Lancé lorsque l'utilisateur a sélectionné l'une des suggestions que votre extension a ajoutées à la liste déroulante de la barre d'adresse.</p>

<p>Utilisez cet événement pour gérer la sélection de l'utilisateur, généralement en ouvrant la page correspondante. L'écouteur d'événement est transmis w:</p>

<ul>
 <li>la sélection de l'utilisateur</li>
 <li>Un {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}: utilisez cette option pour déterminer si vous souhaitez ouvrir la nouvelle page dans l'onglet actuel, dans un nouvel onglet de premier plan ou dans un nouvel onglet d'arrière-plan.</li>
</ul>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.omnibox.onInputEntered.addListener(listener)
browser.omnibox.onInputEntered.removeListener(listener)
browser.omnibox.onInputEntered.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions :</p>

<dl>
 <dt><code>addListener(listener)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez d'écouter cet événement. L'argument <code>listener</code> est l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Vérifiez si <code>listener</code> est enregistré pour cet événement. Renvoie <code>true</code> s'il écoute, sinon <code>false</code>.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<p>La fonction d'écouteur recevra deux paramètres: une chaine de <code>text</code>, et un  {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.</p>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>text</code></dt>
 <dd>
 <p><code>String</code>. C'est la valeur de la propriété <code>content</code> de l'objet {{WebExtAPIRef("omnibox.SuggestResult")}} que l'utilisateur a sélectionné.</p>
 </dd>
 <dt><code>disposition</code></dt>
 <dd>
 <p>{{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}. Une {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} énumération, indiquant si l'extension doit ouvrir la page dans l'onglet en cours, dans un nouvel onglet de premier plan ou dans un nouvel onglet d'arrière-plan.</p>
 </dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.omnibox.onInputEntered")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple interprète l'entrée de l'utilisateur en tant que nom de propriété CSS et remplit la liste déroulante avec un objet {{WebExtAPIRef("omnibox.SuggestResult")}} pour chaque propriété CSS correspondant à l'entrée. La <code>description SuggestResult</code> est le nom complet de la propriété et le <code>contenu</code> est la page MDN de cette propriété.</p>

<p>L'exemple écoute également {{WebExtAPIRef("omnibox.onInputEntered")}}, et ouvre la page MDN correspondant à la sélection, conformément à l'argument   {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.</p>

<pre class="brush: js">browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property"
});

/*
Very short list of a few CSS properties.
*/
const props = [
  "animation",
  "background",
  "border",
  "box-shadow",
  "color",
  "display",
  "flex",
  "flex",
  "float",
  "font",
  "grid",
  "margin",
  "opacity",
  "overflow",
  "padding",
  "position",
  "transform",
  "transition"
];

const baseURL = "https://developer.mozilla.org/en-US/docs/Web/CSS/";

/*
Return an array of SuggestResult objects,
one for each CSS property that matches the user's input.
*/
function getMatchingProperties(input) {
  var result = [];
  for (prop of props) {
    if (prop.indexOf(input) === 0) {
      console.log(prop);
      let suggestion = {
        content: baseURL + prop,
        description: prop
      }
      result.push(suggestion);
    } else {
      if (result.length != 0) {
        return result;
      }
    }
  }
  return result;
}

browser.omnibox.onInputChanged.addListener((input, suggest) =&gt; {
  suggest(getMatchingProperties(input));
});

browser.omnibox.onInputEntered.addListener((url, disposition) =&gt; {
  switch (disposition) {
    case "currentTab":
      browser.tabs.update({url});
      break;
    case "newForegroundTab":
      browser.tabs.create({url});
      break;
    case "newBackgroundTab":
      browser.tabs.create({url, active: false});
      break;
  }
});

</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/omnibox"><code>chrome.omnibox</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
