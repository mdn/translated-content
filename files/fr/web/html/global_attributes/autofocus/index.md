---
title: autofocus
slug: Web/HTML/Global_attributes/autofocus
browser-compat: html.global_attributes.autofocus
translation_of: 'Web/HTML/Global_attributes/autofocus'
---
<p>{{HTMLSidebar("Global_attributes")}}</p>

<p><a href="/fr/docs/Web/HTML/Global_attributes">L'attribut global</a> <strong><code>autofocus</code></strong> est un attribut booléen indiquant qu'un élément devrait recevoir le focus au chargement de la page ou lorsque l'élément {{HTMLElement("dialog")}} dont il fait éventuellement partie est affiché.</p>

<pre class="brush: html">&lt;input name="q" autofocus&gt;</pre>

<p>L'attribut <code>autofocus</code> ne devrait pas être placé sur plus d'un élément au sein du document. S'il est placé sur plusieurs éléments, c'est le premier qui recevra le focus.</p>

<div class="note">
  <p><strong>Note :</strong> L'attribut <code>autofocus</code> s'applique à tous les éléments, et pas seulement aux contrôles de formulaires. Par exemple, il peut être utilisé sur une zone <a href="/fr/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a>.</p>
</div>

<h2 id="accessibility_considerations">Remarques sur l'accessibilité de la fonctionnalité</h2>

<p>Le fait de placer automatiquement le focus sur un élément de formulaire peut poser des difficultés aux personnes utilisant des technologies d'assistance telles que les lecteurs d'écrans et les personnes portant un handicap cognitif. Lorsque l'attribut <code>autofocus</code> est assigné, les lecteurs d'écrans vont « téléporter » le visiteur sur l'élément de formulaire sans pouvoir l'avertir au préalable.</p>

<p>Concernant l'accessibilité, l'attribut <code>autofocus</code> doit être utilisé avec précaution. Placer automatiquement le focus sur un élément de formulaire peut déclencher un défilement intempestif de la page lors de son chargement. Le focus peut aussi déclencher l'ouverture intempestive du clavier virtuel sur les appareils tactiles. Enfin, il faut noter que comme les lecteurs d'écrans annoncent le libellé d'un élément de formulaire recevant le focus, aucun autre élément placé avant le libellé ne sera lu par l'outil d'assistance. D'ailleurs, les personnes utilisant un appareil disposant d'un petit écran perdront également le contexte fourni par les éléments situés au-dessus de l'élément de formulaire recevant le focus.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

