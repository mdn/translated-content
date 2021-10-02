---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
translation_of: Web/API/HTMLTableCellElement
---
<div>
<div>{{ APIRef("HTML DOM") }}</div>
</div>

<p>L'interface <strong><code>HTMLTableCellElement</code></strong> expose des méthodes et des propriétés spécifiques (s'ajoutant à celles fournies par l'interface générique {{domxref("HTMLElement")}}, également disponibles par héritage) pour l'agencement et la gestion de l'apparence des cellules de tableau dans un document HTML, qu'il s'agisse de cellules d'entête ou de données.</p>

<h2 id="Properties">Propriétés</h2>

<p><em>Hérite des propriétés de son parent, {{domxref("HTMLElement")}}.</em></p>

<dl>
 <dt>{{domxref("HTMLTableCellElement.colSpan")}}</dt>
 <dd>Renvoie un entier long positif (<code>unsigned</code> <code>long</code>) représentant le nombre de colonnes sur lesquelles doit s'étendre cette cellule. C'est une représentation de l'attribut {{htmlattrxref("colspan", "td")}}.</dd>
 <dt>{{domxref("HTMLTableCellElement.rowSpan")}}</dt>
 <dd>Renvoie un entier long positif (<code>unsigned</code> <code>long</code>) représentant le nombre de lignes sur lesquelles doit s'étendre cette cellule. C'est une représentation de l'attribut {{htmlattrxref("rowspan", "td")}}.</dd>
 <dt>{{domxref("HTMLTableCellElement.headers")}} {{readonlyInline}}</dt>
 <dd>Renvoie un objet {{domxref("DOMSettableTokenList")}} décrivant la liste des <code>id</code> des éléments {{HTMLElement("th")}} représentant les entêtes associés à la cellule. C'est une représentation de l'attribut {{htmlattrxref("headers", "td")}}.</dd>
 <dt>{{domxref("HTMLTableCellElement.cellIndex")}} {{readonlyInline}}</dt>
 <dd>Renvoie un entier long (<code>long</code>) représentant la position de la cellule dans la collection de cellules de l'élement {{HTMLElement("tr")}} auquel elle appartient. Cette propriété renvoie<code>-1</code> si la cellule n'appartient à aucun élément <code>&lt;tr&gt;.</code></dd>
 <dt>{{domxref("HTMLTableCellElement.align")}} {{obsolete_inline}}</dt>
 <dd>Renvoie un chaîne {{domxref("DOMString")}} contenant la valeur énumérée de l'attribut {{htmlattrxref("align", "td")}}. Cette propriété décrit l'alignement du contenu de la cellule compte tenu du contexte ; ses valeurs possibles sont <code>"left"</code>, <code>"right"</code>, et <code>"center"</code>.</dd>
 <dt>{{domxref("HTMLTableCellElement.bgColor")}} {{obsolete_inline}}</dt>
 <dd>Renvoie une chaîne {{domxref("DOMString")}} contenant la couleur de fond des cellules. C'est une représentation de l'attribut obsolète {{htmlattrxref("bgColor", "td")}}.</dd>
 <dt>{{domxref("HTMLTableCellElement.axis")}} {{obsolete_inline}}</dt>
 <dd>Renvoie une chaîne {{domxref("DOMString")}} contenant un nom regroupant des cellules de manière virtuelle. C'est une représentation de l'attribut obsolète {{htmlattrxref("axis", "td")}}.</dd>
 <dt>{{domxref("HTMLTableCellElement.height")}} {{obsolete_inline}}</dt>
 <dd>Renvoie une chaîne {{domxref("DOMString")}} contenant la valeur en pixels de la hauteur de l'empreinte de la cellule. C'est une représentation de l'attribut obsolète {{htmlattrxref("height", "td")}}.</dd>
 <dt>{{domxref("HTMLTableCellElement.width")}} {{obsolete_inline}}</dt>
 <dd>Renvoie une chaîne {{domxref("DOMString")}} contenant la valeur en pixels de la largeur de l'empreinte de la cellule. C'est une représentation de l'attribut obsolète {{htmlattrxref("width", "td")}}.</dd>
 <dt>{{domxref("HTMLTableCellElement.ch")}} {{obsolete_inline}}</dt>
 <dd>Renvoie une chaîne {{domxref("DOMString")}} contenant un unique caractère. Ce caractère est celui utilisé pour l'alignement de toutes les cellules d'une même colonne. Il représente l'attribut {{htmlattrxref("char", "td")}} et prend par défaut la valeur du séparateur décimal associé à la langue, par exemple <code>'.'</code> pour l'anglais, <code>ou ','</code> pour le français. Cette propriété était optionnelle et peu supportée.</dd>
 <dt>{{domxref("HTMLTableCellElement.chOff")}} {{obsolete_inline}}</dt>
 <dd>Renvoie une chaîne {{domxref("DOMString")}} contenant un entier indiquant le nombre de caractères devant être laissés à droite (pour les écritures de gauche à droite ; sinon à gauche pour les écritures de droite à gauche) du caractère défini par <code>HTMLTableCellElement.ch</code>. Cette propriété était optionnelle et peu supportée.</dd>
 <dt>{{domxref("HTMLTableCellElement.noWrap")}} {{obsolete_inline}}</dt>
 <dd>Renvoie un valeur booléenne {{domxref("Boolean")}} représentant l'attribut {{htmlattrxref("nowrap", "td")}} et indiquant si le contenu de la cellule peut être scindé en plusieurs lignes.</dd>
 <dt>{{domxref("HTMLTableCellElement.vAlign")}} {{obsolete_inline}}</dt>
 <dd>Renvoie une chaîne {{domxref("DOMString")}} contenant une valeur énumérée indiquant le type d'alignement vertical attendu du contenu de la cellule. Cette propriété représente l'attribut {{htmlattrxref("valign", "td")}} et peut prendre l'une des valeurs suivantes : <code>"top"</code>, <code>"middle"</code>, <code>"bottom"</code>, <code>ou "baseline"</code>.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<p><em>Aucune méthode spécifique ; hérite des méthodes de son parent, {{domxref("HTMLElement")}}</em>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "tabular-data.html#htmltablecellelement", "HTMLTableCellElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucune modification depuis {{SpecName("HTML5 W3C")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "tabular-data.html#htmltablecellelement", "HTMLTableCellElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Les propriétés suivantes sont devenues obsolètes : <code>align</code>, <code>axis</code>, <code>bgColor</code>, <code>height</code>, <code>width</code>, <code>ch</code>, <code>chOff</code>, <code>noWrap</code>, <code>et vAlign</code>.<br>
    La propriété <code>headers</code> est maintenant en lecture seule et renvoie un objet {{domxref("DOMSettableTokenList")}} au lieu d'une simple chaîne {{domxref("DOMString")}}.<br>
    Les propriétés <code>colspan</code> et <code>rowspan</code> renvoient maintenant des entiers long positifs (<code>unsigned long)</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-82915075', 'HTMLTableCellElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>La propriété <code>cellIndex</code> est maintenant accessible en lecture seule.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-82915075', 'HTMLTableCellElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.HTMLTableCellElement")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Éléments HTML implémentant cette interface   : {{HTMLElement("th")}} et {{HTMLElement("td")}} par héritage via {{domxref("HTMLTableHeaderCellElement")}} et {{domxref("HTMLTableDataCellElement")}}.</li>
</ul>
