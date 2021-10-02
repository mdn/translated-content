---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
tags:
  - HTTP
  - Reference
  - header
translation_of: Web/HTTP/Headers/Content-Disposition
---
<div>{{HTTPSidebar}}</div>

<p>Dans une réponse HTTP régulière, l'en-tête de réponse <code>Content-Disposition</code> est un en-tête indiquant si le contenu devrait être affiché en ligne dans le navigateur, c'est-à-dire en tant que page Web, dans une page Web ou en pièce jointe qui sera téléchargé et enregistré localement.</p>

<p>Dans un corps <code>multipart / form-data</code>, l'en-tête général HTTP Content-Disposition est un en-tête qui peut être utilisé sur la sous-partie d'un corps multipart pour donner des informations sur le champ auquel il s'applique. La sous-partie est délimitée par la limite <code>boundary</code> définie dans l'en-tête {{HTTPHeader ("Content-Type")}}. Utilisé sur le corps même, <code>Content-Disposition </code>n'a aucun effet.</p>

<p>L'en-tête <code>Content-Disposition</code> est défini dans le contexte plus large des messages MIME pour le courrier électronique, mais seul un sous-ensemble des paramètres possibles s'applique aux formulaires HTTP et {{HTTPMethod ("POST")}}. Seules les données de forme de valeur, ainsi que le nom de la directive optionnelle et le nom de fichier, peuvent être utilisés dans le contexte HTTP.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">
    <table>
     <tbody>
      <tr>
       <th scope="row">Type d'en-tête</th>
       <td>{{Glossary("Response header")}} (pour le corps principal)<br>
        {{Glossary("General header")}} (pour une sous-partie d'un corps à plusieurs parties)</td>
      </tr>
      <tr>
       <th scope="row">{{Glossary("Forbidden header name")}}</th>
       <th scope="row">Non</th>
      </tr>
     </tbody>
    </table>
   </th>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="En_tant_quentête_de_réponse_pour_le_corps_principal">En tant qu'entête de réponse pour le corps principal </h3>

<p>Le premier paramètre dans le contexte HTTP est en ligne (valeur par défaut, indiquant qu'il peut être affiché à l'intérieur de la page Web ou en tant que page Web) ou pièce jointe (en indiquant qu'il devrait être téléchargé), la plupart des navigateurs présentant une boîte de dialogue "Enregistrer sous" Avec la valeur des paramètres du nom de<br>
 fichier si présent.</p>

<pre class="syntaxbox">Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"</pre>

<h3 id="En_tant_quen-tête_pour_un_corps_à_plusieurs_parties">En tant qu'en-tête pour un corps à plusieurs parties </h3>

<p>Le premier paramètre dans le contexte HTTP est toujours une donnée de forme. Les paramètres supplémentaires sont insensibles à la casse et ont des arguments, qui utilisent la syntaxe de chaîne cité après le signe '='. Les paramètres multiples sont<br>
 séparés par un point-virgule (';').</p>

<pre>Content-Disposition: form-data Content-Disposition: form-data;
name="fieldName" Content-Disposition: form-data;
name="fieldName"; filename="filename.jpg"</pre>

<h2 id="Directives">Directives</h2>

<p><code>&lt;name&gt;</code><br>
 Est suivie d'une chaîne contenant le nom du champ HTML dans la forme dont le contenu de cette sous-partie se réfère. Lorsqu'il s'agit de plusieurs fichiers dans le même champ (par exemple, l'attribut {{htmlattrxref("multiple", "input")}} d'un {{HTMLElement("input","&lt;input type=file&gt;")}} element), il peut y avoir plusieurs sous-parties portant le même nom.</p>

<p>Un <code>name</code> avec une valeur de <code>'_charset_'</code> indique que la partie n'est pas un champ HTML, mais le jeu de caractères par défaut à utiliser pour les pièces sans informations de charset explicites.</p>

<p><code>&lt;filename&gt;</code><br>
 Est suivi d'une chaîne contenant le nom d'origine du fichier transmis. Le nom de fichier est toujours facultatif et ne doit pas être utilisé aveuglément par l'application: l'information du chemin doit être rayée et la conversion aux règles du système de fichiers du serveur doit être effectuée. Ce paramètre fournit principalement des informations indicatives. Lorsqu'il est utilisé en combinaison avec <code>Content-Disposition: attachement</code>, il est utilisé comme nom de fichier par défaut pour une éventuelle boîte de dialogue "Enregistrer sous" présentée à l'utilisateur.</p>

<p><code>&lt;filename*&gt;</code><br>
 Les paramètres <code>filename</code> et <code>filename*</code> diffèrent uniquement en ce que <code>filename*</code> utilise l'encodage défini dans la RFC 5987. Lorsque <code>filename</code> et <code>filename*</code> sont présents dans une seule valeur de champ d'en-tête, <code>filename*</code> est préféré à <code>filename</code> lorsque les deux sont présents et compris.</p>

<h2 id="Exemples">Exemples</h2>

<p>Une réponse déclanchant le dialogue "Enregistrer sous":</p>

<pre class="brush: html">200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 22

&lt;HTML&gt;Enregistrez-moi !&lt;/HTML&gt;
</pre>

<p>Ce fichier HTML simple sera sauvegardé en tant que téléchargement régulier plutôt que dans le navigateur. La plupart des navigateurs proposeront de l'enregistrer sous le nom de fichier <code>cool.html</code> (par défaut).</p>

<p>Un exemple de formulaire HTML, publié à l'aide du format <code>multipart / form-data</code> qui utilise l'en-tête <code>Content-Disposition</code>:</p>

<pre>POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7578")}}</td>
   <td><br>
    Retour des valeurs à partir des formulaires: multipart / form-data</td>
  </tr>
  <tr>
   <td>{{RFC("6266")}}</td>
   <td><br>
    Utilisation du champ Header Content-Disposition dans le protocole de transfert hypertexte (HTTP)</td>
  </tr>
  <tr>
   <td>{{RFC("2183")}}</td>
   <td><br>
    Communiquer des informations de présentation dans les messages Internet: le champ de l'en-tête de disposition de contenu</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http/headers/content-disposition")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<ul>
 <li>Firefox 5 gère l'en-tête de réponse HTTP <code>Content-Disposition</code> plus efficacement si les deux paramètres du nom de fichier et du nom de fichier sont fournis. Il examine tous les noms fournis, en utilisant le paramètre * du nom de fichier, s'il est disponible, même si un paramètre de nom de fichier est inclus en premier. Auparavant, le premier paramètre correspondant serait utilisé, empêchant ainsi un nom plus approprié d'être utilisé. Voir {{bug (588781)}}.</li>
</ul>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/HTML/Forms">HTML Forms</a></li>
 <li>{{HTTPHeader("Content-Type")}} définissant la limite du corps multipartie.</li>
 <li>L'interface {{domxref("FormData")}} utilisée pour manipuler les données de formulaire à utiliser dans l'API {{domxref("XMLHttpRequest")}}.</li>
</ul>
