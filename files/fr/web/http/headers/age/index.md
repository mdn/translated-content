---
title: Age
slug: Web/HTTP/Headers/Age
translation_of: Web/HTTP/Headers/Age
---
<div>{{HTTPSidebar}}</div>

<p>L'entête HTTP {{HTTPHeader("Age")}} indique le temps en secondes pendant lequel la ressource a été stockée dans un cache proxy.</p>

<p>Sa valeur est généralement proche de zéro. Elle vaut 0 lorsque la ressource vient d'être rapatriée du serveur d'origine; autrement, sa valeur équivaut à la différence entre la date courante du proxy et la valeur de l'entête {{HTTPHeader("Date")}} inclus dans la réponse HTTP.</p>

<p> </p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'entête</th>
   <td>Entête de réponse</td>
  </tr>
  <tr>
   <th scope="row">Nom d'entête interdit</th>
   <td>non</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Age: &lt;valeur-en-secondes&gt;
</pre>

<h2 id="Directive">Directive</h2>

<dl>
 <dt>&lt;valeur-en-secondes&gt;</dt>
 <dd>
 <p>Un entier positif indiquant le temps en secondes pendant lequel la ressource a été stockée dans un cache proxy.</p>
 </dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre>Age: 24</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7234", "Age", "5.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.Age")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
 <li>{{HTTPHeader("Expires")}}</li>
</ul>
