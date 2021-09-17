---
title: 'CSP: sandbox'
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
tags:
  - CSP
  - Content-Securityè-Policy
  - Directive
  - HTTP
  - Sandbox
  - Security
  - Sécurité
translation_of: Web/HTTP/Headers/Content-Security-Policy/sandbox
---
<div>{{HTTPSidebar}}</div>

<p>La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) <code><strong>sandbox</strong></code> active un bac à sable (<em>sandbox</em>) pour les ressources demandées similaire à l'attribut {{htmlattrxref("sandbox", "iframe")}} des éléments {{HTMLElement("iframe")}}. Elle applique des restrictions aux actions d'une page, dont le fait d'empêcher les fenêtres intruses (<em>popups</em>) et l'exécution de greffons et de scripts et de créer une contrainte de même origine.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Version de CSP</th>
   <td>1.1 / 2</td>
  </tr>
  <tr>
   <th scope="row">Type de directive</th>
   <td>{{Glossary("Document directive")}}</td>
  </tr>
  <tr>
   <th colspan="2" scope="row">Cette directive n'est pas supportée dans l'élément {{HTMLElement("meta")}} ou par l'en-tête {{HTTPHeader("Content-Security-policy-Report-Only")}}.</th>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox &lt;valeur&gt;;
</pre>

<p>Où <code>&lt;valeur&gt;</code> peut optionnellement être une valeur parmi :</p>

<dl>
 <dt><code>allow-downloads-without-user-activation</code> {{experimental_inline}}</dt>
 <dd>Autorise les téléchargements sans action de l'utilisateur.</dd>
</dl>

<dl>
 <dt><code>allow-forms</code></dt>
 <dd>Autorise la soumission de de formulaires. Si ce mot-clé n'est pas spécifié, cette opération est interdite.</dd>
 <dt><code>allow-modals</code></dt>
 <dd>Autorise la page à ouvrir des fenêtres modales.</dd>
 <dt><code>allow-orientation-lock</code></dt>
 <dd>Autorise la page à désactiver la possibilité de verrouiller l'orientation de l'écran.</dd>
 <dt><code>allow-pointer-lock</code></dt>
 <dd>Autorise la page à utiliser l'<a href="/en-US/docs/WebAPI/Pointer_Lock">API Pointer Lock</a>.</dd>
 <dt><code>allow-popups</code></dt>
 <dd>Autorise les fenêtres intruses (comme avec <code>window.open</code>, <code>target="_blank"</code>, <code>showModalDialog</code>). Si ce mot-clé n'est pas utilisée, cette fonctionnalité échouera en silence.</dd>
 <dt><code>allow-popups-to-escape-sandbox</code></dt>
 <dd>Autorise un document cloisonné dans une bac à sable à ouvrir de nouvelles fenêtres sans les contraindre à appliquer les mêmes règles. Cela permettra, par exemple, à une publicité externe d'être sainement cloisonnée sans imposer les mêmes restrictions sur une page d'accueil.</dd>
 <dt><code>allow-presentation</code></dt>
 <dd>Autorise les pages embarquantes à avoir contrôle sur la possibilité pour l'iframe de démarrer une session de présentation ou non.</dd>
 <dt><code>allow-same-origin</code></dt>
 <dd>Autorise le contenu à être traité comme étant de son origine normale. Si ce mot-clé n'est pas utilisé, les contenu embarqués seront traités comme étant d'une origine unique.</dd>
 <dt><code>allow-scripts</code></dt>
 <dd>Autorise la page à exécuter des scripts (mais non créer des fenêtres intruses). Si ce mot-clé n'est pas utilisée, cette opération n'est pas permise.</dd>
 <dt><code>allow-storage-access-by-user-activation</code> {{experimental_inline}}</dt>
 <dd>Laisse les requêtes de ressources accéder à l'espace de stockage du parent avec l'<a href="/en-US/docs/Web/API/Storage_Access_API">API Storage Access</a>.</dd>
 <dt><code>allow-top-navigation</code></dt>
 <dd>Autorise la page à charger du contenu au niveau supérieur de contexte navigationnel. Si ce mot-clé n'est pas utilisé, cette opération n'est pas permise.</dd>
 <dt><code>allow-top-navigation-by-user-activation</code></dt>
 <dd>Laisse la ressource naviguer jusqu'au niveau supérieur de contexte navigationnel, mais seulement si initié par une aciton de l'utilisateur.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: bash">Content-Security-Policy: sandbox allow-scripts;</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{specName("CSP 3.0", "#directive-sandbox", "sandbox")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>Inchangé.</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-sandbox", "sandbox")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.sandbox")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{htmlattrxref("sandbox", "iframe")}} attribute on {{HTMLElement("iframe")}} elements</li>
</ul>
