---
title: Host
slug: Web/HTTP/Headers/Host
tags:
  - HTTP
  - Reference
  - en-tête
translation_of: Web/HTTP/Headers/Host
---
<div>{{HTTPSidebar}}</div>

<p>L'en-tête de requête <code><strong>Host</strong></code> spécifie le nom de domaine du serveur (pour de l'hébergement virtuel), et (optionnellement) le numéro du port TCP sur lequel le serveur écoute.</p>

<p>Si aucun port n'est donné, le port par défaut du service demandé sera utilisé (par exemple, "80" pour une URL HTTP).</p>

<p>Un champ d'en-tête <code>Host</code> doit être envoyé dans tous les messages de requête HTTP/1.1. Un code HTTP {{HTTPStatus("400")}} (Bad Request) sera envoyé à tout message de requette HTTP/1.1 ne contenant pas un champ d'en-tête <code>Host</code> ou qui en contient plus d'un.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'en-tête</th>
   <td>{{Glossary("Request header","En-tête de requête")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name"," Nom d'en-tête interdit ")}}</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Host: &lt;host&gt;:&lt;port&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;host&gt;</dt>
 <dd>le nom de domaine du serveur (pour de l'hébergement virtuel).</dd>
 <dt>&lt;port&gt; {{optional_inline}}</dt>
 <dd>numéro de port TCP sur lequel le serveur écoute.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre>Host: developer.mozilla.org</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7230", "Host", "5.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.Host")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPStatus("400")}}</li>
 <li>{{HTMLElement("base")}}</li>
</ul>
