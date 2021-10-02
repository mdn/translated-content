---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
tags:
  - API
  - DOM
  - Interface
  - Reference
translation_of: Web/API/NamedNodeMap
---
<div>{{APIRef("DOM")}}</div>

<p>L'interface <code><strong>NamedNodeMap</strong></code> représente une collection d'objets {{domxref("Attr")}}. Les objets de cette collection n'ont pas d'ordre particulier (contrairement à {{domxref("NodeList")}}) mais on peut y accéder grâce à un index (comme pour un tableau).</p>

<p>Un objet <code>NamedNodeMap</code> est <em>vivant</em> et sera automatiquement mis à jour si des modifications sont apportées à son contenu (que cela provienne d'une source interne ou externe).</p>

<div class="note">
<p><strong>Note :</strong> Bien qu'intitulée <code>NamedNodeMap</code>, cette interface ne manipule pas d'objets {{domxref("Node")}} mais des objets {{domxref("Attr")}}. Ces derniers étaient à l'origine (et le sont toujours pour certaines implémentations) une classe spécialisée de {{domxref("Node")}}.</p>
</div>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Cette interface n'hérite d'aucune propriété.</em></p>

<dl>
 <dt>{{domxref("NamedNodeMap.length")}} {{ReadOnlyInline}}</dt>
 <dd>Cette propriété renvoie le nombre d'objets contenus dans la <em>map</em>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Cette interface n'hérite d'aucune méthode.</em></p>

<dl>
 <dt>{{domxref("NamedNodeMap.getNamedItem()")}}</dt>
 <dd>Cette méthode renvoie un objet {{domxref("Attr")}} qui correspond au nom indiqué.</dd>
 <dt>{{domxref("NamedNodeMap.setNamedItem()")}}</dt>
 <dd>Cette méthode remplace ou ajoute l'objet {{domxref("Attr")}} identifié dans la collection par le nom indiqué.</dd>
 <dt>{{domxref("NamedNodeMap.removeNamedItem()")}}</dt>
 <dd>Cette méthode retire l'objet {{domxref("Attr")}} de la collection à partir du nom indiqué.</dd>
 <dt>{{domxref("NamedNodeMap.item()")}}</dt>
 <dd>Cette méthode renvoie l'objet {{domxref("Attr")}} à l'index indiqué (ou <code>null</code> si l'index est supérieur ou égal au nombre de nœuds.</dd>
 <dt>{{domxref("NamedNodeMap.getNamedItemNS()")}}</dt>
 <dd>Cette méthode renvoie un objet {{domxref("Attr")}} identifié par un espace de noms et un nom local associé.</dd>
 <dt>{{domxref("NamedNodeMap.setNamedItemNS()")}}</dt>
 <dd>Cette méthode remplace ou ajoute un objet {{domxref("Attr")}} identifié par un espace de noms et un nom local associé.</dd>
 <dt>{{domxref("NamedNodeMap.removeNamedItemNS()")}}</dt>
 <dd>Cette méthode retire l'objet {{domxref("Attr")}} de la collection à partir d'un espace de noms et d'un nom local associé.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#interface-namednodemap', 'NamedNodeMap')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Interagit avec {{domxref("Attr")}} plutôt qu'avec {{domxref("Node")}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-1780488922', 'NamedNodeMap')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>Aucune modification depuis {{SpecName('DOM2 Core')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-1780488922', 'NamedNodeMap')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>Ajout des méthodes <code>getNamedItemNS()</code>, <code>setNamedItemNS()</code> et <code>removeNamedItemNS()</code></td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'core.html#ID-1780488922', 'NamedNodeMap')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.NamedNodeMap")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Element.attributes")}}</li>
 <li>{{domxref("Attr")}}</li>
 <li>{{domxref("NodeList")}}</li>
</ul>
