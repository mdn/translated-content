---
title: DOMQuad
slug: Web/API/DOMQuad
tags:
  - API
  - Coordonnées
  - DOM
  - Géométrie
  - Interfaces
  - Quadrilatère
  - dimensions
translation_of: Web/API/DOMQuad
---
<p>{{SeeCompatTable}}{{APIRef("Geometry Interfaces")}}</p>

<p>Un <code>DOMQuad</code> est une collection de 4 <code>DOMPoint</code> définissant les coins d'un quadrilatère arbitraire. Renvoyer des <code>DOMQuad</code> permet à <code>getBoxQuads()</code> de retourner des informations précises, même lorsque des transformations 2D ou 3D arbitraires sont présentes. Il possède un attribut <code>bounds</code> pratique qui retourne un <code>DOMRectReadOnly</code> pour les cas où vous voulez juste un rectangle de délimitation aligné sur l'axe.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("DOMQuad.DOMQuad()")}}</dt>
 <dd>Crée un nouvel objet <code>DOMQuad</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>p1,p2,p3,p4 {{readonlyinline}}</dt>
 <dd>sont des objets {{domxref("DOMPoint")}} pour chacun des 4 coins de l'objet<code> DOMQuad</code>.</dd>
</dl>

<h2 id="Méthode">Méthode</h2>

<dl>
 <dt>{{domxref("DOMQuad.fromRect()")}}</dt>
 <dd>Renvoie un nouvel objet <code>DOMQuad</code> basé sur l'ensemble de coordonnées fournit.</dd>
 <dt>{{domxref("DOMQuad.fromQuad()")}}</dt>
 <dd>Renvoie un nouvel objet <code>DOMQuad</code> basé sur l'ensemble de coordonnées fournit.</dd>
 <dt>{{domxref("DOMQuad.getBounds()")}}</dt>
 <dd>Renvoie un objet {{domxref("DOMRect")}} avec les coordonnées et les dimensions de l'objet <code>DOMQuad</code>.</dd>
 <dt>{{domxref("DOMQuad.toJSON()")}}</dt>
 <dd>Renvoie une représentation JSON de l'objet <code>DOMQuad</code>.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Geometry Interfaces','#DOMQuad','DOMQuad')}}</td>
   <td>{{Spec2('Geometry Interfaces')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DOMQuad")}}</p>
