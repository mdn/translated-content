---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
tags:
  - HTTP
  - Réponse
  - Sécurité
  - en-tête
translation_of: Web/HTTP/Headers/X-Frame-Options
---
<div>{{HTTPSidebar}}</div>

<p>L'en-tête de réponse <a href="/fr/docs/Web/HTTP">HTTP</a> <strong><code>X-Frame-Options</code></strong> peut être utilisé afin d'indiquer si un navigateur devrait être autorisé à afficher une page au sein d'un élément {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} ou {{HTMLElement("object")}}. Les sites peuvent utiliser cet en-tête afin d'éviter les attaques de <em>{{interwiki("wikipedia", "clickjacking")}}</em> pour s'assurer que leur contenu ne soit pas embarqués dans d'autres sites.</p>

<p>Ce complément de sécurité est uniquement valable lorsque l'utilisateur final visite le document avec un navigateur prenant en charge <code>X-Frame-Options</code>.</p>

<div class="note">
<p><strong>Note :</strong> L'en-tête {{HTTPHeader("Content-Security-Policy")}} possède une directive <code><a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors">frame-ancestors</a></code> qui <a href="https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options">supplante</a> cet en-tête pour les navigateurs compatibles.</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'en-tête</th>
   <td>En-tête de réponse</td>
  </tr>
  <tr>
   <th scope="row"><a href="/fr/docs/Glossaire/Forbidden_header_name">Nom d'en-tête interdit</a></th>
   <td>Non</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Il existe deux directives pour <code>X-Frame-Options</code> :</p>

<pre class="syntaxbox">X-Frame-Options: deny
X-Frame-Options: sameorigin
</pre>

<h3 id="Directives">Directives</h3>

<p>Si on utilise <code>deny</code>, le chargement de la page dans une <em>frame</em> échouera sur un site tiers mais aussi sur un site de la même origine. En revanche, si on utilise <code>sameorigin</code>, on peut toujours utiliser le document dans une <em>frame</em> si celle-ci partage la même origine.</p>

<dl>
 <dt><code>deny</code></dt>
 <dd>La page ne peut pas être affichée dans une <em>frame</em>, quand bien même un site tiers tenterait de la charger.</dd>
 <dt><code>sameorigin</code></dt>
 <dd>La page ne peut être affichée que dans une <em>frame</em> avec une origine qui est la même que la page elle-même. La spécification laisse le choix au navigateur de décider si cela s'applique au niveau le plus haut, au conteneur parent ou à l'ensemble de la chaîne des <em>frames </em>potentiellement imbriquées. Il est parfois avancé que cette option n'est pas très utile à moins que l'ensemble des ancêtres partage la même origine (cf. {{bug(725490)}}). Voir aussi le tableau de compatibilité ci-après pour plus de détails sur la prise en charge de cette directive.</dd>
 <dt><code>allow-from <em>uri</em></code><em> (obsolète)</em></dt>
 <dd>Une directive obsolète qui ne fonctionne plus dans les navigateurs récents et qui ne doit donc plus être utilisée. Pour les navigateurs historiques, cette directive permettait d'indiquer une origine via une URI afin d'autoriser l'affichage du document dans les <em>frames</em> chargées depuis cette origine. Pour les anciennes versions de Firefox, on a le même problème qu'avec <code>sameorigin</code> : il n'y a pas de vérifications des différents ancêtres pour voir s'ils partagent la même origine. À la place, on utilisera la directive <code>frame-ancestors</code> de l'en-tête {{HTTPHeader("Content-Security-Policy")}}.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<div class="note">
<p><strong>Note :</strong> La balise <code>&lt;meta&gt;</code> est inutile ici ! <code>&lt;meta http-equiv="X-Frame-Options" content="deny"&gt;</code> n'aura aucun effet et mieux vaut donc ne pas l'utiliser.</p>
</div>

<h3 id="Configurer_Apache">Configurer Apache</h3>

<p>On peut configurer Apache afin d'envoyer l'en-tête <code>X-Frame-Options</code> pour toutes les pages. Dans la configuration, on ajoutera :</p>

<pre>Header always set X-Frame-Options "sameorigin"
</pre>

<p>Si on veut utiliser la valeur <code>deny</code>, on pourra utiliser ceci dans la configuration :</p>

<pre>Header set X-Frame-Options "deny"
</pre>

<h3 id="Configurer_NGINX">Configurer NGINX</h3>

<p>Avec NGINX, on pourra ajouter la ligne suivante à la configuration HTTP, serveur ou à la configuration de l'emplacement (<em>location</em>) :</p>

<pre>add_header X-Frame-Options sameorigin always;
</pre>

<h3 id="Configurer_IIS">Configurer IIS</h3>

<p>Pour IIS, on complètera le fichier <code>Web.config</code> :</p>

<pre class="brush: xml">&lt;system.webServer&gt;
  ...

  &lt;httpProtocol&gt;
    &lt;customHeaders&gt;
      &lt;add name="X-Frame-Options" value="sameorigin" /&gt;
    &lt;/customHeaders&gt;
  &lt;/httpProtocol&gt;

  ...
&lt;/system.webServer&gt;
</pre>

<h3 id="Configurer_HAProxy">Configurer HAProxy</h3>

<p>Pour HAProxy, on ajoutera la ligne suivante à la configuration du <em>front</em>, du <em>listen</em> ou du <em>backend</em> :</p>

<pre>rspadd X-Frame-Options:\ sameorigin
</pre>

<p>Dans les versions plus récentes, voici la forme équivalente :</p>

<pre>http-response set-header X-Frame-Options sameorigin
</pre>

<h3 id="Configurer_Express_Utiliser_frameguard_en_Node.js">Configurer Express / Utiliser frameguard en Node.js</h3>

<p>Si on utilise Express, on pourra utiliser le module <a href="https://helmetjs.github.io/">helmet</a> qui tire parti de <a href="https://helmetjs.github.io/docs/frameguard/">frameguard</a> afin de régler cet en-tête :</p>

<pre class="brush: js">const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: "sameorigin" }));
</pre>

<p>On pourra également utiliser <a href="https://helmetjs.github.io/docs/frameguard/">frameguard</a> directement :</p>

<pre class="brush: js">const frameguard = require('frameguard')
app.use(frameguard({ action: 'sameorigin' }))
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7034")}}</td>
   <td><em>HTTP Header Field X-Frame-Options</em></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.X-Frame-Options")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors"><code>frame-ancestors</code></a> lié à la configuration de la stratégie CSP via {{HTTPHeader("Content-Security-Policy")}}</li>
</ul>
