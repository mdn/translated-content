---
title: Window.menubar
slug: Web/API/Window/menubar
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/menubar
---
<div>{{ APIRef() }}</div>

<p>La propriété <code><strong>Window.menubar</strong></code> renvoie l'objet <code>menubar</code>, dont la visibilité peut être vérifiée.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>objRef</em> = <em>window</em>.menubar
</pre>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple HTML complet suivant montre comment la propriété <code>visible</code> de l'objet <code>menubar</code> est utilisée.</p>

<pre class="brush:html">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Divers Tests DOM&lt;/title&gt;
  &lt;script&gt;
    var visible = window.menubar.visible;
  &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Divers Tests DOM&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'browsers.html#dom-window-menubar', 'Window.menubar')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'browsers.html#dom-window-menubar', 'Window.menubar')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.menubar")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>{{domxref("Window.locationbar")}}</li>
 <li>{{domxref("Window.personalbar")}}</li>
 <li>{{domxref("Window.scrollbars")}}</li>
 <li>{{domxref("Window.statusbar")}}</li>
 <li>{{domxref("Window.toolbar")}}</li>
</ul>
