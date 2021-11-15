---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
tags:
  - API
  - Add-ons
  - Devtools.inspectedWindows
  - Extensions
  - Reference
  - WebExtensions
  - eval
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval
---
<div>{{AddonSidebar()}}</div>

<p>Exécute JavaScript dans la fenêtre à laquelle les devtools sont attachés.</p>

<p>C'est un peu comme utiliser {{WebExtAPIRef("tabs.executeScript()")}} pour joindre un script de contenu, mais avec deux différences principales:</p>

<p>Tout d'abord, le JavaScript peut utiliser un ensemble de <a href="#Helpers">commandes spéciales que les navigateurs fournissent généralement dans leur implémentation de console devtools </a>: par exemple, en utilisant "$0" pour designer l'élément actuellement sélectionné dans l'inspecteur.</p>

<p>Deuxièmement, le JavaScript que vous exécutez peut voir les modifications apportées à la page par des scripts que la page a chargés. Cela contraste avec les scripts de contenu, qui voient la page <a href="/fr/Add-ons/WebExtensions/Content_scripts#DOM_access">telle qu'elle existerait si aucun script de page n'était pas chargé</a>. Cependant, notez que l'isolement fourni par les scripts de contenu est une fonction de sécurité délibérée, destinée à rendre plus difficile la confusion ou la subversion des WebExtensions par des pages web malveillantes ou simplement non coopératives en redéfinissant les fonctions et les propriétés du DOM. Cela signifie que vous devez être très prudent si vous renoncez à cette protection en utilisant eval(), et devrait utiliser les scripts de contenu, sauf si vous devez utiliser eval().</p>

<p>Le script est évalué par défaut dans le cadre principal de la page. Le script doit évaluer une valeur qui peut être représentée comme JSON (ce qui signifie que, par exemple, il peut ne pas évaluer une fonction ou un objet contenant des fonctions). Par défaut, le script ne voit pas les scripts de contenu attachés à la page.</p>

<p>Vous ne pouvez pas appeler eval() sur les fenêtres de navigateur privilégiées telles que "about: addons".</p>

<p>Vous pouvez éventuellement fournir un paramètre d'options, qui comprend des options pour évaluer le script dans une image différente ou dans le contexte des scripts de contenu attachés. Notez que Firefox ne supporte pas encore le paramètre d'options.</p>

<p>La fonction eval() renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui résout le résultat évalué du script ou une erreur.</p>

<h2 id="Aides">Aides</h2>

<p>Le script accède à un certain nombre d'objets qui aident le script injecté à interagir avec les outils du développeur. Les assistants suivants sont actuellement pris en charge:</p>

<dl>
 <dt><code>$0</code></dt>
 <dd>Contient une référence à l'élément actuellement sélectionné dans l'inspecteur Devtools.</dd>
 <dt><code>inspect()</code></dt>
 <dd>Etant donné un objet, s'il s'agit d'un élément DOM dans la page, sélectionnez-le dans l'inspecteur devtools, sinon il crée un aperçu de l'objet dans la webconsole.</dd>
</dl>

<p><a href="#Examples">Voir quelques exemples.</a></p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var evaluating = browser.devtools.inspectedWindow.eval(
  expression,       // string
  options           // object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>expression</code></dt>
 <dd><code>string</code>. L'expression JavaScript à évaluer. La chaîne doit évaluer un objet qui peut être représenté comme JSON, ou une exception sera lancée. Par exemple, l'expression ne doit pas évaluer une fonction.</dd>
 <dt><code>options</code>{{optional_inline}}</dt>
 <dd><p><code>object</code>. Options pour la fonction  (Notez que Firefox ne supporte pas encore cette option), comme suit :</p>
 <dl>
  <dt><code>frameURL</code>{{optional_inline}}</dt>
  <dd><code>string</code>. L'URL du cadre dans lequel à évaluer l'expression. Si cela est supprimé, l'expression est évaluée dans la trame principale de la fenêtre.</dd>
  <dt><code>useContentScriptContext</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. Si c'est vrai, évaluez l'expression dans le contexte des scripts de contenu que cette extension a attachée à la page. Si vous définissez cette option, vous devez d'abord attacher certains scripts de contenu à la page ou une erreur Devtools sera lancée.</dd>
  <dt><code>contextSecurityOrigin</code> {{optional_inline}}</dt>
  <dd><code>string</code>. Evaluez l'expression dans le contexte d'un script de contenu attaché par une extension différente, dont l'origine correspond à la valeur donnée ici. Ces remplacements sont <code>useContentScriptContext</code>.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un tableau contenant deux éléments.</p>

<p>Si aucune erreur n'est survenue, l'élément 0 contiendra le résultat de l'évaluation de l'expression et l'élément 1 sera indéfini.</p>

<p>Si une erreur s'est produite, l'élément 0 sera indéfini et l'élément 1 contiendra un objet donnant des détails sur l'erreur. Deux types différents d'erreurs sont distingués :</p>

<ul>
 <li>Des erreurs rencontrées lors de l'évaluation du JavaScript (par exemple, des erreurs de syntaxe dans l'expression). Dans ce cas, l'élément 1 contiendra :
  <ul>
   <li>Une propriété boolean isException, définie sur true</li>
   <li>Une valeur de propriété de chaîne, en donnant plus de détails.</li>
  </ul>
 </li>
 <li>D'autres erreurs (par exemple, une expression qui évalue sur un objet qui ne peut pas être représenté comme JSON). Dans ce cas, l'élément 1 contiendra:
  <ul>
   <li>Une propriété booléenne isError, définie sur true</li>
   <li>Un code de propriété de chaîne contenant un code d'erreur.</li>
  </ul>
 </li>
</ul>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("webextensions.api.devtools.inspectedWindow.eval")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Ceci teste si jQuery est défini dans la fenêtre inspectée et enregistre le résultat. Notez que cela ne fonctionnerait pas dans un script de contenu, car même si jQuery était défini, le script de contenu ne le verrait pas.</p>

<pre class="brush: js">function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  console.log(result);
  if (result[0] !== undefined) {
    console.log(`jQuery: ${result[0]}`);
  } else if (result[1]) {
    handleError(result[1]);
  }
}

const checkjQuery = "typeof jQuery != 'undefined'";

evalButton.addEventListener("click", () =&gt; {
  browser.devtools.inspectedWindow.eval(checkjQuery)
    .then(handleResult);
});</pre>

<h3 id="Exemples_d'aide">Exemples d'aide</h3>

<p>Cela utilise l'aide de <code>$0</code> pour définir la couleur d'arrière-plan de l'élément, actuellement sélectionné dans l'inspecteur :</p>

<pre class="brush: js">const evalButton = document.querySelector("#reddinate");
const evalString = "$0.style.backgroundColor = 'red'";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

evalButton.addEventListener("click", () =&gt; {
  browser.devtools.inspectedWindow.eval(evalString)
    .then(handleResult);
});
</pre>

<p>Cela utilise l'assistant l'inspection() pour sélectionner le premier élément &lt;h1&gt; dans la page:</p>

<pre class="brush: js">const inspectButton = document.querySelector("#inspect");
const inspectString = "inspect(document.querySelector('h1'))";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

inspectButton.addEventListener("click", () =&gt; {
  browser.devtools.inspectedWindow.eval(inspectString)
    .then(handleResult);
});
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/devtools"><code>chrome.devtools</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
</pre>
</div>
