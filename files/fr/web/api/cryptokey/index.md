---
title: CryptoKey
slug: Web/API/CryptoKey
tags:
  - API
  - Interface
  - Reference
  - Web Crypto API
translation_of: Web/API/CryptoKey
---
<p>{{APIRef("Web Crypto API")}}</p>

<p>L'interface <strong><code>CryptoKey</code></strong> représente une {{glossary("clef")}} cryptographique dérivé d'un algorithme de clef spécifique.</p>

<p>Un objet <code>CryptoKey</code> peut être obtenu en utilisant : {{domxref("SubtleCrypto.generateKey()")}}, {{domxref("SubtleCrypto.deriveKey()")}} ou {{domxref("SubtleCrypto.importKey()")}}</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Cette interface n'hérite d'aucune propriété.</em></p>

<dl>
 <dt>{{domxref("CryptoKey.type")}}</dt>
 <dd>Retourne  une énumération de valeurs représentant un type de clef, une clef secrète (pour un algorithme symétriques), une clef publique ou privée (pour un algorithme asymétrique)</dd>
 <dt>{{domxref("CryptoKey.extractable")}}</dt>
 <dd>Retourne un {{jsxref("booléen")}} indiquant si l'information peut être extraite de l'application ou non.</dd>
 <dt>{{domxref("CryptoKey.algorithm")}}</dt>
 <dd>Retourne un objet opaque représentant  un chiffre particulier avec lequel la clé doit être utilisée avec.</dd>
 <dt>{{domxref("CryptoKey.usages")}}</dt>
 <dd>Retourne un tableau contenant une énumération de valeurs indiquant quel est la clé qui peut être utilisée.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Cette interface n'hérite et n'implémente aucune méthode.</em></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{ SpecName('Web Crypto API', '#dfn-CryptoKey', 'CryptoKey') }}</td>
   <td>{{ Spec2('Web Crypto API') }}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.CryptoKey")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Web_Crypto_API">Web Crypto API</a></li>
  <li><a href="/fr/docs/Web/Security">Sécurité du Web</a></li>
  <li><a href="/fr/docs/Web/Privacy">Vie privée, autorisations et sécurité de l'information</a></li>
  <li>{{domxref("Crypto")}} et {{domxref("Crypto.subtle")}}.</li>
 </ul>
