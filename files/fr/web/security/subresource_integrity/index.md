---
title: Subresource Integrity
slug: Web/Security/Subresource_Integrity
tags:
  - Intro
  - Sécurité
translation_of: Web/Security/Subresource_Integrity
---
<p><em><strong>Subresource Integrity</strong></em> (SRI, ou « Intégrité des sous-ressources ») est une fonction de sécurité qui permet aux navigateurs de vérifier que les fichiers qu'ils vont chercher (par exemple, à partir d'un <a href="/fr/docs/Glossaire/CDN">CDN</a>) sont livrés sans manipulation inattendue. Cela fonctionne en permettant de fournir un hachage cryptographique (« <em>hash</em> ») auquel le fichier récupéré doit correspondre.</p>

<h2 id="Comment_fonctionne_le_contrôle_d'intégrité_des_sous-ressources">Comment fonctionne le contrôle d'intégrité des sous-ressources ?</h2>

<p>Utiliser un <a href="/fr/docs/Glossary/CDN">CDN</a> pour héberger des fichiers tels que les scripts et les feuilles de style qui sont partagés entre plusieurs sites permet d'améliorer les performances du site et d'économiser de la bande passante. Cependant, utiliser des CDN comporte un risque : si un attaquant prend le contrôle du CDN, il pourra injecter du contenu malveillant dans les fichiers (ou les remplacer complètement), et il pourra donc aussi potentiellement attaquer tous les sites qui récupèrent les fichiers sur ce CDN.</p>

<p>Le contrôle d'intégrité des sous-ressources vous permet d'atténuer le risque de ce genre d'attaques, en veillant à ce que les fichiers de votre application ou document Web utilisent (à partir d'un CDN ou ailleurs) aient été livrés sans modification d'un tiers ayant injecté du contenu supplémentaire dans les fichiers - et sans autre changement de toute nature ayant été faits à ces fichiers.</p>

<h2 id="Utiliser_le_SRI">Utiliser le SRI</h2>

<p>Le contrôle d'intégrité des sous-ressources s'active en spécifiant un hachage cryptographique encodé en base64 d'une ressource (fichier) que vous transmettez au navigateur au moment où il va chercher cette ressource, comme valeur de l'attribut <code><strong>integrity</strong></code> de chaque élément {{HTMLElement("script")}} ou {{HTMLElement("link")}}.</p>

<p>Une valeur de l'attribut <code><strong>integrity</strong></code> commence par au moins une chaîne, chaque chaîne comprenant un préfixe indiquant un algorithme particulier de hachage (actuellement les préfixes autorisés sont <code>sha256</code>, <code>sha384</code> et <code>sha512</code>), suivi d'un tiret, et se terminant par le hachage base64 proprement dit.</p>

<div class="note">
<p><strong>Note :</strong> Une valeur de l'attribut <code><strong>integrity</strong></code> peut contenir plusieurs hachages séparés par des espaces. Une ressource sera chargée si elle correspond à l'un de ces hachages.</p>
</div>

<p>Voici un exemple de valeur pour l'attribut <code><strong>integrity</strong></code> avec un hash sha384 encodé en base64 :</p>

<pre>sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
</pre>

<div class="note">
<p><strong>Note :</strong> Le « <em>hash</em> » est à proprement parler une <strong><em>fonction de hachage cryptographique</em></strong> formé en appliquant une fonction de hachage particulière à une certaine entrée (par exemple, un script ou un fichier de feuille de styles). Mais il est plus commun d'utiliser le mot <strong><em>hash</em></strong> pour indiquer <em>fonction de hachage cryptographique</em>, d'où son utilisation dans cet article.</p>
</div>

<h3 id="Outil_pour_générer_des_hachages_SRI">Outil pour générer des hachages SRI</h3>

<p>Vous pouvez générer des <em>hashes</em> SRI en ligne de commande avec OpenSSL en utilisant une commande de ce genre :</p>

<pre class="brush: bash">cat <strong>FILENAME.js</strong> | openssl dgst -sha384 -binary | openssl enc -base64 -A</pre>

<p>Il existe également, <strong>SRI Hash Generator</strong> : <a href="https://srihash.org/">https://srihash.org/</a> qui est un utilitaire en ligne permettant de générer des <em>hashes</em> SRI. </p>

<h2 id="Exemples">Exemples</h2>

<p>Dans les exemples suivants, supposons que <code>oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC</code> est la valeur attendue du <em>hash</em> SHA-384 d'un script <code>exemple-framework.js</code>, et qu'il existe une copie de ce script hébergée sur <code>https://exemple.com/exemple-framework.js</code>.</p>

<h3 id="Exemple_utiliser_l'élément_script_pour_le_contrôle_d'intégrité">Exemple : utiliser l'élément <code>script</code> pour le contrôle d'intégrité</h3>

<p>Vous pouvez utiliser l'élément {{HTMLElement("script")}} suivant pour dire au navigateur qu'il doit comparer le <em>hash</em> fourni avec celui du fichier et que les deux correspondent avant d'exécuter le script hébergé à <code>https://example.com/exemple-framework.js</code>.</p>

<pre class="brush: html">&lt;script src="https://exemple.com/exemple-framework.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"&gt;&lt;/script&gt;</pre>

<div class="note">
<p><strong>Note :</strong> Pour plus de détails sur l'objectif de l'attribut <code><strong>crossorigin</strong></code>, voir <a href="/fr/docs/Web/HTML/Reglages_des_attributs_CORS">les attributs CORS</a>.</p>
</div>

<h2 id="La_gestion_du_SRI_par_les_navigateurs">La gestion du SRI par les navigateurs</h2>

<p>Les navigateurs gèrent SRI en effectuant les étapes suivantes :</p>

<ol>
 <li>Lorsqu'un navigateur rencontre un élément {{HTMLElement("script")}} ou {{HTMLElement("link")}} avec un attribut <code><strong>integrity</strong></code>, avant d'exécuter le script ou avant d'appliquer les styles spécifiés par l'élément {{HTMLElement("link")}}, la navigateur doit comparer le script ou la feuille de style à la valeur donnée dans l'attribut <code><strong>integrity</strong></code>.</li>
 <li>Si le script ou la feuille de styles ne correspond pas à la valeur de l'attribut <code><strong>integrity</strong></code> qui lui est associée, alors le navigateur doit refuser d'exécuter le script ou d'appliquer la feuille de style et doit retourner une erreur indiquant que le chargement de la ressource a échoué.</li>
</ol>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Subresource Integrity')}}</td>
   <td>{{Spec2('Subresource Integrity')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('Fetch')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.csp.require-sri-for")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://frederik-braun.com/using-subresource-integrity.html">Un CDN sans risque de XSS : utiliser le contrôle d'intégrité des sous-ressources (en anglais)</a></li>
</ul>
