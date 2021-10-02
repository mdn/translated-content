---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
translation_of: Web/API/CSS_Font_Loading_API
---
<div>{{DefaultAPISidebar("CSS Font Loading API")}}{{SeeCompatTable}}</div>

<p>L'API CSS Font Loading API fournit des évènements et interfaces pour le chargement dynamique des ressources associées aux polices.</p>

<div class="note">
<p><strong>Note :</strong> cette fonctionnalité est disponible dans <a href="/fr/docs/Web/API/Web_Workers_API">l'API Web Workers</a> (<code>self.fonts</code> donne accès à {{domxref('FontFaceSet')}}).</p>
</div>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref('FontFace')}}</dt>
 <dd>Représente une police unique mise à disposition.</dd>
 <dt>{{domxref('FontFaceSet')}}</dt>
 <dd>Une interface chargeant les polices et vérifiant le statut de leur téléchargement.</dd>
 <dt>{{domxref('FontFaceSource')}}</dt>
 <dd>Un {{Glossary("mixin")}} fournissant toutes les polices utilisées dans les opérations liées aux polices, à moins qu'elles ne soient définies autrement. Cela définit la propriété {{domxref("FontFaceSources.fonts")}} disponible pour le {{domxref("Document")}} et le {{domxref("WorkerGlobalScope")}}.</dd>
 <dt>{{domxref('FontFaceSetLoadEvent')}}</dt>
 <dd>Déclenché lorsqu'un {{domxref("FontFaceSet")}} est chargé.</dd>
</dl>

<h2 id="Specifications">Spécifications</h2>

<p>{{Specifications("api.FontFace")}}</p>

<h2 id="Browser_compatibility">Compatibilité navigateur</h2>

<p>{{Compat("api.FontFace")}}</p>