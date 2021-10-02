---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
translation_of: Web/API/VRDisplayCapabilities
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>L'interface <strong><code>VRDisplayCapabilities</code></strong> de <a href="/en-US/docs/Web/API/WebVR_API">WebVR API</a> décrit les capacités d'un appareil {{domxref("VRDisplay")}} — ses fonctionalités peuvent être utilisée pour tester les capacités de l'appareil, par exemple il peut retourner de l'information sur la position.</p>

<p>Cet interface est accessible à partir de la propriété {{domxref("VRDisplay.capabilities")}}.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("VRDisplayCapabilities.canPresent")}} {{readonlyInline}}</dt>
 <dd>Retourne un objet {{domxref("Boolean")}} qui décrit si l'écran RV est capable de présenter du contenu (e.g. en utilisant un visiocasque).</dd>
 <dt>{{domxref("VRDisplayCapabilities.hasExternalDisplay")}} {{readonlyInline}}</dt>
 <dd>Retourne un objet {{domxref("Boolean")}} indiquant si l'écran RV est séparé de l'écran primaire de l'appareil.</dd>
 <dt>{{domxref("VRDisplayCapabilities.hasOrientation")}} {{readonlyInline}}</dt>
 <dd>Retourne un objet {{domxref("Boolean")}} indiquant si l'écran RV peut suivre le mouvement de l'appareil et retourne de l'information sur l'orientation.</dd>
 <dt>{{domxref("VRDisplayCapabilities.hasPosition")}} {{readonlyInline}}</dt>
 <dd>Retourne un objet {{domxref("Boolean")}} indiquant si l'écran RV peut suivre le mouvement de l'appareil et retourne de l'information sur l'orientation.</dd>
 <dt>{{domxref("VRDisplayCapabilities.maxLayers")}} {{readonlyInline}}</dt>
 <dd>Retourne un nombre indiquant le nombre maximal de {{domxref("VRLayer")}}s que l'écran RV peut présenter en même temps (e.g. la longueur maximale du tableau que {{domxref("Display.requestPresent()")}} peut accepter.)</dd>
</dl>

<h2 id="Examples">Exemples</h2>

<pre>TBD.</pre>

<h2 id="Specifications">Spécifications</h2>

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
      <td>{{SpecName('WebVR', '#interface-vrdisplaycapabilities', 'VRDisplayCapabilities')}}</td>
      <td>{{Spec2('WebVR')}}</td>
      <td>Définition initiale</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité avec les navigateurs</h2>

<p>{{Compat("api.VRDisplayCapabilities")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/WebVR_API">Page d'accueil de l'API WebVR</a>.</li>
  <li><a href="https://mixedreality.mozilla.org/">https://mixedreality.mozilla.org/</a> — démos, téléchargements et autres ressources de l'équipe Mozilla VR.</li>
</ul>
