---
title: Attr
slug: Web/API/Attr
tags:
  - API
  - Attribut
  - DOM
translation_of: Web/API/Attr
---
<div>{{APIRef("DOM")}}</div>

<p>Ce type représente un attribut d'un élément DOM comme un objet. Dans la plupart des méthodes DOM, vous auriez probablement récupéré l'attribut directement comme une chaîne (par exemple, {{domxref ("element.getAttribute()")}}, mais certaines fonctions (par exemple, {{domxref ("element.getAttributeNode()" )}}) ou des moyens d'itération donnent des types Attr.</p>

<div class="warning">
<p><strong>Attention :</strong> À partir de Gecko 7.0 {{geckoRelease ("7.0")}}, ceux qui vont être retirés afficheront des messages d'avertissement dans la console. Vous devriez modifier votre code en conséquence. Voir {{anch("Propriétés et méthodes dépréciées")}} pour une liste complète.</p>
</div>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("Attr.name", "name")}} {{readOnlyInline}}</dt>
 <dd>Le nom de l'attribut.</dd>
 <dt>{{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}</dt>
 <dd>Une {{domxref("DOMString","Chaîne de caractères")}} représentant l'URI de l'espace nom de l'attribut ou <code>null</code> s'il n'y a pas d'espace nom.</dd>
 <dt>{{domxref("Attr.localName", "localName")}} {{readOnlyInline}}</dt>
 <dd>Une {{domxref("DOMString","Chaîne de caractères")}} représentant la partie locale du nom qualifié de l'attribut.</dd>
 <dt>{{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}</dt>
 <dd>Une {{domxref("DOMString","Chaîne de caractères")}} représentant  le préfixe de l'espace nom de l'attribut, ou <code>null</code> si aucun préfixe n'est spécifié.</dd>
 <dt>{{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}</dt>
 <dd>L'élément contenant l'attribut.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> DOM Niveau 4 a supprimé cette propriété . L'hypothèse était que puisque nous obtenons un objet Attr d'un {{domxref("Element")}}, nous devrions déjà connaître les éléments associés.<br>
 Comme cela n'est pas vrai quand les objets <code>Attr</code>  sont retournés par {{domxref("Document.evaluate")}}, le DOM Living Standard a réintroduit la propriété.</p>

<p>Gecko affiche une note de dépréciation à partir de Gecko 7.0 {{geckoRelease("7.0")}}. Cette note a été supprimée dans Gecko 49.0 {{geckoRelease("49.0")}}.</p>
</div>

<dl>
 <dt>{{domxref("Attr.specified", "specified")}} {{readOnlyInline}}</dt>
 <dd>Cette propriété renvoie toujours la valeur <code>true</code>. À l'origine, elle renvoyait true si l'attribut était explicitement spécifié dans le code source ou par un script, et <code>false</code> si sa valeur provenait de la valeur par défaut définie dans la DTD du document.</dd>
 <dt>{{domxref("Attr.value", "Value")}}</dt>
 <dd>La valeur de l'attribut.</dd>
</dl>

<div class="note">
<p><strong>Note:</strong> DOM Niveau 3 a défini <code>namespaceURI</code>, <code>localName</code> et <code>prefix</code> sur l'interface {{domxref("Node")}}. Dans DOM4 ils ont été déplacés vers <code>Attr</code>.</p>

<p>Cette modification est implémentée dans Chrome depuis la version 46.0 et Firefox à partir de la version 48.0.</p>
</div>

<h2 id="Propriétés_et_méthodes_dépréciées">Propriétés et méthodes dépréciées</h2>

<p>Les propriétés suivantes ont été dépréciées. Si elle est disponible, la méthode ou propriété de remplacement appropriée est fournie.</p>

<dl>
 <dt><code>attributes</code></dt>
 <dd>Cette propriété retourne désormais toujours <code>NULL</code>.</dd>
 <dt><code>childNodes </code> {{obsolete_inline(14)}}</dt>
 <dd>Cette propriété retourne désormais toujours <code>un</code> {{domxref("NodeList")}}  vide.</dd>
 <dt><code>firstChild </code> {{obsolete_inline(14)}}</dt>
 <dd>Cette propriété retourne désormais toujours <code>NULL</code>.</dd>
 <dt><code>isId</code> {{readOnlyInline}}</dt>
 <dd>Indique si l'attribut est un "attribut ID". Un "attribut ID" étant un attribut dont la valeur devrait être unique dans un document DOM. En HTML DOM, "id" est le seul attribut ID, mais les documents XML peuvent en définir d'autres. Qu'un attribut soit unique ou non est souvent déterminé par  un {{Glossary("DTD")}}  ou une autre description de schéma.</dd>
 <dt><code>lastChild </code> {{obsolete_inline(14)}}</dt>
 <dd>Cette propriété retourne désormais toujours <code>NULL</code>.</dd>
 <dt><code>nextSibling</code></dt>
 <dd>Cette propriété retourne désormais toujours <code>NULL</code>.</dd>
 <dt><code>nodeName</code></dt>
 <dd>Utilisez {{domxref("Attr.name")}} à la place.</dd>
 <dt><code>nodeType</code></dt>
 <dd>Cette propriété retourne toujours 2. (<code>ATTRIBUTE_NODE</code>).</dd>
 <dt><code>nodeValue</code></dt>
 <dd>Utilisez {{domxref("Attr.value")}} à la place.</dd>
 <dt><code>ownerDocument</code></dt>
 <dd>Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.</dd>
 <dt><code>parentNode</code></dt>
 <dd>Cette propriété retourne désormais toujours NULL.</dd>
 <dt><code>previousSibling</code></dt>
 <dd>Cette propriété retourne désormais toujours NULL.</dd>
 <dt><code>schemaTypeInfo</code> {{obsolete_inline}} {{readOnlyInline}}</dt>
 <dd>Les informations de type associées à cet attribut. Bien que l'information de type contenue dans cet attribut soit garantie après le chargement du document ou l'appel de {{domxref("Document.normalizeDocument")}}, cette propriété peut ne pas être fiable si le nœud a été déplacé.</dd>
 <dt><code>specified</code></dt>
 <dd>Cette propriété retourne désormais toujours true.</dd>
 <dt><code>textContent</code></dt>
 <dd>Utilisez {{domxref ("Attr.value")}} à la place.</dd>
</dl>

<p><br>
 Les méthodes suivantes ont été dépréciées:</p>

<dl>
 <dt><code>appendChild() </code> {{obsolete_inline(14)}}</dt>
 <dd>Modifiez à la place la valeur de {{domxref ("Attr.value")}}.</dd>
 <dt><code>cloneNode()</code></dt>
 <dd>Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.</dd>
 <dt><code>createAttribute()</code></dt>
 <dd>Utilisez {{domxref("Attr.setAttribute()")}} à la place.</dd>
 <dt><code>createAttributeNS()</code></dt>
 <dd>Utilisez {{domxref("Attr.setAttributeNS()")}} à la place.</dd>
 <dt><code>getAttributeNode()</code></dt>
 <dd>Utilisez {{domxref("Attr.getAttribute()")}} à la place.</dd>
 <dt><code>getAttributeNodeNS()</code></dt>
 <dd>Utilisez {{domxref("Attr.getAttributeNS()")}} à la place.</dd>
 <dt><code>hasAttributes() </code>{{obsolete_inline("21.0")}}</dt>
 <dd>Cette méthode retourne désormais toujours false.</dd>
 <dt><code>hasChildNodes()</code></dt>
 <dd>Cette méthode retourne désormais toujours false.</dd>
 <dt><code>insertBefore()</code></dt>
 <dd>Modifiez à la place la valeur de {{domxref ("Attr.value")}}.</dd>
 <dt><code>isSupported()</code></dt>
 <dd>Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.</dd>
 <dt><code>isEqualNode()</code></dt>
 <dd>Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.</dd>
 <dt><code>normalize()</code></dt>
 <dd>Vous n'auriez pas dû l'utiliser en premier lieu, donc cela ne devrait pas vous ennuyer qu'il soit retiré.</dd>
 <dt><code>removeAttributeNode()</code></dt>
 <dd>Utilisez {{domxref("Attr.removeAttribute()")}} à la place.</dd>
 <dt><code>removeChild() </code> {{obsolete_inline(14)}}</dt>
 <dd>Modifiez à la place la valeur de {{domxref("Attr.value")}}.</dd>
 <dt><code>replaceChild() </code> {{obsolete_inline(14)}}</dt>
 <dd>Modifiez à la place la valeur de {{domxref("Attr.value")}}.</dd>
 <dt><code>setAttributeNode()</code></dt>
 <dd>Utilisez {{domxref("Attr.setAttribute()")}} à la place.</dd>
 <dt><code>setAttributeNodeNS()</code></dt>
 <dd>Utilisez {{domxref("Attr.setAttributeNS()")}} à la place.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("DOM WHATWG", "#interface-attr", "Attr")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td>Ajoute la propriété <code>ownerElement</code> property</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#interface-attr", "Attr")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td>A déplacé les <code>namespaceURI</code>, <code>prefix</code> et <code>localName</code> de {{domxref("Node")}} vers cet API et supprimé <code>ownerElement</code>, <code>schemaTypeInfo</code> et <code>isId</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM3 Core", "core.html#ID-637646024", "Attr")}}</td>
   <td>{{Spec2("DOM3 Core")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Attr")}}</p>
