---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
tags:
  - API
  - Add-ons
  - ContextType
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - contextMenus
  - menus
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
---
<div>{{AddonSidebar()}}</div>

<p>Les différents contextes dans lesquels un élément de menu peut apparaître.</p>

<h2 id="Type">Type</h2>

<p>Les valeurs de ce type sont des chaînes. L'élément est affiché lorsque le contexte donné s'applique. Les valeurs possibles sont :</p>

<dl>
 <dt>all</dt>
 <dd>La spécification de "tous" équivaut à la combinaison de tous les autres contextes, à l'exception de 'bookmark', 'tab' et 'tools_menu'.</dd>
 <dt>audio</dt>
 <dd>S'applique lorsque l'utilisateur clique sur le contexte d'un élément <a href="/fr/docs/Web/HTML/Element/audio">audio</a>.</dd>
 <dt>bookmark</dt>
 <dd>S'applique lorsque l'utilisateur clique en contexte sur un élément de signet dans la barre d'outils des signets, le menu des signets, la barre latérale des signets (&lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;B&lt;/kbd&gt;) et la fenêtre Bibliothèque (&lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;Shift&lt;/kbd&gt; + &lt;kbd&gt;B&lt;/kbd&gt;). Ces deux derniers sont supportés à partir de Firefox 66. Nécessite la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">permission d'API</a> dans le manifest.</dd>
 <dt>browser_action</dt>
 <dd>S'applique lorsque l'utilisateur clique en contexte sur l'action de votre navigateur. Le nombre maximal d'éléments pouvant être ajoutés au menu contextuel de l'action du navigateur de niveau supérieur est {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, mais vous pouvez ajouter n'importe quel nombre d'éléments aux sous-menus.</dd>
 <dt>editable</dt>
 <dd>S'applique lorsque l'utilisateur clique en contexte sur un élément modifiable, comme un <a href="/fr/docs/Web/HTML/Element/textarea">textarea</a>.</dd>
 <dt>frame</dt>
 <dd>S'applique lorsque l'utilisateur clique sur le contexte dans une <a href="/fr/docs/Web/HTML/Element/iframe">iframe</a> imbriqué.</dd>
 <dt>image</dt>
 <dd>S'applique lorsque l'utilisateur clique sur le contexte d'une image.</dd>
 <dt>link</dt>
 <dd>S'applique lorsque l'utilisateur clique en contexte sur un lien.</dd>
 <dt>page</dt>
 <dd>S'applique lorsque l'utilisateur clique sur le contexte dans la page, mais aucun des autres contextes de page ne s'applique (par exemple, le clic ne se trouve pas sur une image ou une <em>iframe</em> imbriqué ou un lien).</dd>
 <dt>page_action</dt>
 <dd>S'applique lorsque l'utilisateur clique en contexte sur l'action de votre page. Le nombre maximal d'éléments pouvant être ajoutés au menu contextuel de l'action de page de niveau supérieur est {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, mais vous pouvez ajouter n'importe quel nombre d'éléments aux sous-menus.</dd>
 <dt>password</dt>
 <dd>S'applique lorsque l'utilisateur clique en contexte sur un <a href="/fr/docs/Web/HTML/Element/input/password">élément d'entrée de mot de passe</a>.</dd>
 <dt>selection</dt>
 <dd>S'applique lorsqu'une partie de la page est sélectionnée.</dd>
 <dt>tab</dt>
 <dd>S'applique lorsque l'utilisateur clique en contexte sur un onglet (en particulier, il s'agit de l'onglet ou d'un autre élément de l'interface utilisateur permettant à l'utilisateur de passer d'un onglet de navigateur à un autre, et non à la page elle-même). Depuis Firefox 63, cliquer sur l'élément du menu d'un onglet accorde la permission <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission">activeTab</a> pour l'onglet cliqué, même si ce n'est pas l'onglet actuellement actif.</dd>
 <dt>tools_menu</dt>
 <dd>L'élément sera ajouté au menu des outils du navigateur. Notez que ceci n'est disponible que si vous accédez à <code>ContextType</code> via l'espace de nom des <code>menus</code>. Il n'est pas disponible si vous y accédez via l'espace de noms <code>contextMenus</code>.</dd>
 <dt>video</dt>
 <dd>S'applique lorsque l'utilisateur clique sur le contexte d'un élément <a href="/fr/docs/Web/HTML/Element/video">video</a>.</dd>
</dl>

<p>Notez que "launcher" n'est pas supporté.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.menus.ContextType", 10)}}</p>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API <a href="https://developer.chrome.com/extensions/contextMenus"><code>chrome.contextMenus</code></a> de chromium. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json"><code>context_menus.json</code></a> dans le code Chromium.</p>
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
