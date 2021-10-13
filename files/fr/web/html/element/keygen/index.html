---
title: <keygen>
slug: Web/HTML/Element/Keygen
tags:
  - Déprécié
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/keygen
---
<div>{{deprecated_header}}{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;keygen&gt;</code></strong> existe afin de faciliter la génération de clés et l'envoi d'une clé publique via un formulaire HTML. Le mécanisme utilisé est conçu pour être utilisé avec les systèmes de gestion de certificats électroniques. L'élément <code>keygen</code> est prévu pour être utilisé dans un formulaire HTML avec d'autres informations permettant de construire une requête de certificat, le résultat du processus étant un certificat signé.</p>


<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("autofocus")}}</dt>
 <dd>Cet attribut booléen permet de spécifier si le contrôle doit être sélectionné lorsque la page est chargée, à moins que l'utilisateur n'outrepasse ce comportement en remplissant un autre champ. Un seul élément par document peut avoir l'attribut <code><strong>autofocus</strong></code>.</dd>
 <dt>{{htmlattrdef("challenge")}}</dt>
 <dd>Une chaîne de caractères correspondant à une requête/réponse qui est envoyée avec la clé publique. La valeur par défaut est une chaîne de caractères vide.</dd>
 <dt>{{htmlattrdef("disabled")}}</dt>
 <dd>Cet attribut booléen indique qu'il est impossible d'interagir avec le contrôle.</dd>
 <dt>{{htmlattrdef("form")}}</dt>
 <dd>L'élément form auquel cet élément est rattaché (son formulaire propriétaire). La valeur de cet attribut doit être l'identifiant (ou <code><strong>id</strong></code>) d'un élément {{HTMLElement("form")}} du même document. Si cet attribut n'est pas renseigné, l'élément doit être un descendant d'un élément {{HTMLElement("form")}}. Cet attribut permet de placer des éléments <code>&lt;keygen&gt;</code> au sein du document sans qu'ils soient présentés dans un formulaire.</dd>
 <dt>{{htmlattrdef("keytype")}}</dt>
 <dd>Le type de clé générée, la valeur par défaut est <code>RSA</code>.</dd>
 <dt>{{htmlattrdef("name")}}</dt>
 <dd>Le nom du contrôle qui en envoyé avec les données du formulaire.</dd>
</dl>

<p>L'élément se présente de cette façon :</p>

<pre class="brush: html">&lt;keygen name="<var>nom</var>" challenge="<var>chaîne de challenge</var>"
        keytype="<var>type</var>" keyparams="<var>pqg-params</var>"&gt;</pre>

<p>Le paramètre <code>keytype</code> est utilisé pour spécifier le type de clé à générer. Les valeurs autorisées sont <code>RSA</code> (qui est la valeur par défaut), <code>DSA</code> et <code>EC</code>. Les attributs <code>name</code> et <code>challenge</code> sont obligatoires. L'attribut <code>keytype</code> est facultatif pour une génération de clé RSA mais obligatoire pour une génération de clé DSA et EC. L'attribut <code>keyparams</code> est requis pour la génération de clés DSA et EC et est ignoré pour la génération de clé RSA. <code>PQG</code> est un synonyme de <code>keyparams</code>. Les variantes suivantes sont donc équivalentes : <code>keyparams="pqg-params"</code> ou <code>pqg="pqg-params"</code>.</p>

<p>Pour les clés RSA, le paramètre <code>keyparams</code> n'est pas utilisé (ignoré s'il est présent). L'utilisateur peut avoir le choix pour la force des clés RSA à générer. Actuellement, l'utilisateur peut choisir entre « <code>high</code> » (élevé) pour 2048 bits et « <code>medium</code> » (moyen) pour 1024 bits.</p>

<p>Pour les clés DSA, le paramètre <code>keyparams</code> définit les paramètres DSA PQG à utiliser pendant le processus de génération de la clé. La valeur du paramètre <code>pqg</code> est encodée en DER en suivant la structure Dss-Parms comme énoncé dans le <a href="https://datatracker.ietf.org/doc/html/rfc3279">RFC 3279</a>. L'utilisateur peut avoir le choix des tailles de clés DSA, permettant à l'utilisateur de choisir parmi les tailles de clés définies dans le standard DSA.</p>

<p>Pour les clés EC, le paramètre <code>keyparams</code> définit le nom de la courbe elliptique sur laquelle sera générée la clé. Normalement, c'est une chaîne de caractères du tableau <a class="external" href="https://mxr.mozilla.org/mozilla-central/source/security/manager/ssl/src/nsKeygenHandler.cpp?mark=179-185,187-206,208-227,229-256#177">nsKeygenHandler.cpp</a>. (Il faut noter que seulement un sous-ensemble des courbes peut être supporté par n'importe quel navigateur.) Si le paramètre <code>keyparams</code> n'est pas reconnu comme une chaîne de caractères correspondant à une courbe, une courbe est choisie selon la force de la clé choisie par l'utilisateur (faible, moyenne, élevée). La courbe <code>secp384r1</code> est utilisée pour une force élevée, la courbe <code>secp256r1</code> est utilisée pour des clés moyennes.</p>

<div class="note">
<p><strong>Note :</strong> Les détails concernant le nombre de degrés de force, les valeurs par défaut de chaque degré et les interfaces utilisateurs à utiliser pour offrir ce choix sortent du cadre de ce document.</p>
</div>

<p>L'élément <code>keygen</code> n'est valide que s'il appartient à un formulaire HTML. Il entraînera l'affichage d'une interface pour choisir la taille de clé à utiliser. L'interface peut être un menu, des boutons radio ou autre . Le navigateur offrant différents niveaux de forces pour les clés. Actuellement, deux forces sont proposées : élevée et moyenne (<code>high</code> et <code>medium</code>). Si le navigateur est configuré afin de supporter du matériel cryptographique (par exemple les « smart cards »), l'utilisateur peut avoir le choix du support sur lequel générer la clé : sur la carte ou par un logiciel puis stockée sur le disque.</p>

<p>Quand le bouton d'envoi du formulaire est activé, une paire de clés de la taille choisie est générée. La clé privée est chiffrée est stockée dans la base de clés locale.</p>

<pre class="brush: bash">PublicKeyAndChallenge ::= SEQUENCE {
   spki SubjectPublicKeyInfo,
   challenge IA5STRING
}
SignedPublicKeyAndChallenge ::= SEQUENCE {
   publicKeyAndChallenge PublicKeyAndChallenge,
   signatureAlgorithm AlgorithmIdentifier,
   signature BIT STRING
}</pre>

<p>La clé publique et la requête/réponse sont encodées en DER en tant que PublicKeyAndChallenge, puis signées avec la clé privée pour produire un SignedPublicKeyAndChallenge. Le  SignedPublicKeyAndChallenge est encodé en base64 et les données ASCII sont finalement envoyées au serveur sous forme d'une paire nom-valeur du formulaire. Le nom étant la valeur définie par l'attribut <code>name</code> de l'élément <code>keygen</code>. Si aucune chaîne de requête/réponse n'est fournie, cela sera encodé comme une IA5STRING de longueur nulle.</p>

<p>Voici un exemple d'un envoi de formulaire, tel qu'envoyé au programme CGI par le serveur HTTP :</p>

<pre class="brush: bash">   commonname=John+Doe&amp;email=doe@foo.com&amp;org=Foobar+Computing+Corp.&amp;
   orgunit=Bureau+of+Bureaucracy&amp;locality=Anytown&amp;state=California&amp;country=US&amp;
   key=MIHFMHEwXDANBgkqhkiG9w0BAQEFAANLADBIAkEAnX0TILJrOMUue%2BPtwBRE6XfV%0AWtKQbsshxk5ZhcUwcwyvcnIq9b82QhJdoACdD34rqfCAIND46fXKQUnb0mvKzQID%0AAQABFhFNb3ppbGxhSXNNeUZyaWVuZDANBgkqhkiG9w0BAQQFAANBAAKv2Eex2n%2FS%0Ar%2F7iJNroWlSzSMtTiQTEB%2BADWHGj9u1xrUrOilq%2Fo2cuQxIfZcNZkYAkWP4DubqW%0Ai0%2F%2FrgBvmco%3D</pre>
<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>, <a href="/fr/docs/Web/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_associ.C3.A9_aux_formulaires">contenu associé aux formulaires</a> (listed, submittable, resettable), contenu interactif, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td>Aucun, c'est un élément vide</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>Doit avoir une balise de début mais pas de balise de fin.</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Aucun.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLKeygenElement")}}</td>
  </tr>
 </tbody>
</table>
<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.keygen")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les discussions autour de la dépréciation/obsolescence de l'élément <code>&lt;keygen&gt;</code> :

  <ul>
   <li><a href="https://github.com/w3c/html/issues/43">L'<em>issue</em> GitHub</a></li>
   <li><a href="https://lists.w3.org/Archives/Public/public-html/2016May/0021.html">La discussion sur la liste de diffusion public-html</a></li>
  </ul>
 </li>
</ul>
