---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
tags:
  - API
  - Add-ons
  - CertificateInfo
  - Extensions
  - Reference
  - Type
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
---
<div>{{AddonSidebar()}}</div>

<p>Un objet décrivant un seul <a href="https://tools.ietf.org/html/rfc5280">certificat X.509</a>.</p>

<p>L'objet {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} retourné par l'objet {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API inclut une propriété de  <code>certificats</code> qui est un tableau de ces objets.</p>

<h2 id="Type">Type</h2>

<p>Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :</p>

<dl>
 <dt><code>fingerprint</code></dt>
 <dd><p><code>Object</code>. Un objet avec les propriétés suivantes :</p>
 <dl>
  <dt><code>sha1</code></dt>
  <dd><code>String</code>. SHA-1 hash de l'encodage DER du certificat.</dd>
  <dt><code>sha256</code></dt>
  <dd><code>String</code>. SHA-256 hash de l'encodage DER du certificat.</dd>
 </dl>
 </dd>
 <dt><code>isBuiltInRoot</code></dt>
 <dd>
 <p><code>Boolean</code>. <code>true</code> si le certificat est l'une des racines de confiance installées dans le navigateur, sinon <code>false</code>.</p>
 </dd>
 <dt><code>issuer</code></dt>
 <dd><p><code>String</code>. Nom de l'organisation qui a délivré ce certificat, représenté par un nom distinctif et formaté sous la forme d'une liste de noms distinctifs relatifs séparés par des virgules, chacun de la forme "type=value".</p>
 <p>Par exemple: "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US".</p></dd>
 <dt><code>rawDER</code></dt>
 <dd><code>Array</code> de <code>Number</code>. Si <a href="/fr/Add-ons/WebExtensions/API/webRequest/getSecurityInfo"><code>webRequest.getSecurityInfo()</code></a> a été appelé avec l'option <code>rawDER</code> présent et mis à <code>true</code>, ceci contiendra l'encodage DER du certificat.</dd>
 <dt><code>serialNumber</code></dt>
 <dd><code>String</code>. Le <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.2">numéro de série</a> du certificat.</dd>
 <dt><code>subject</code></dt>
 <dd><p><code>String</code>. Nom de l'organisation qui a délivré ce certificat, représenté par un nom distinctif et formaté sous la forme d'une liste de noms distinctifs relatifs séparés par des virgules, chacun de la forme "type=value".</p>
 <p>Par exemple: "CN=*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US".</p></dd>
 <dt><code>subjectPublicKeyInfoDigest</code></dt>
 <dd>
 <p><code>Object</code>. Un objet contenant les propriétés suivantes :</p>

 <dl>
  <dt><code>sha256</code></dt>
  <dd><code>String</code>. Base64 encodé SHA-256 hash de l'<a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.7">information de clé publique</a> codée DER.</dd>
 </dl>
 </dd>
 <dt><code>validity</code></dt>
 <dd>
 <p><code>Object</code>. Période de validité du certificat. Un objet contenant les propriétés suivantes :</p>

 <dl>
  <dt><code>start</code></dt>
  <dd><code>Number</code>. Le début de la période de validité du certificat, en <a href="https://en.wikipedia.org/wiki/Unix_time" rel="noopener">millisecondes depuis l'époque</a>.</dd>
  <dt><code>end</code></dt>
  <dd><code>Number</code>. La fin de la période de validité du certificat, en <a href="https://en.wikipedia.org/wiki/Unix_time" rel="noopener">millisecondes depuis l'époque</a>.</dd>
 </dl>
 </dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.webRequest.CertificateInfo", 10)}}</p>

<p>{{WebExtExamples}}</p>
