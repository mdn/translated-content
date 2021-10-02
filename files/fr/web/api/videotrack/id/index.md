---
title: VideoTrack.id
slug: Web/API/VideoTrack/id
translation_of: Web/API/VideoTrack/id
---
<p>{{APIRef("HTML DOM")}}</p>

<p>La propriété <code>id</code> contient une chaîne qui identifie de manière unique une piste représentée par {{domxref("VideoTrack")}}. Cet ID peut être utilisé avec la méthode {{domxref("VideoTrackList.getTrackById()")}} pour localiser une piste spécifique dans le media associé à l'élément media.</p>

<p>Cet ID peut aussi être utilisé comme un fragement d'URL pour charger une piste (si le media supporte les fragments de media).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>trackID</em> = <em>VideoTrack</em>.id;</pre>

<p>Valeur</p>

<p>Une {{domxref("DOMString")}} qui identifie la piste, utilisable par la suite pour l'appel de {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} sur une {{domxref("VideoTrackList")}} tel que spécifié par la propriété {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} d'un élément media.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-videotrack-id', 'VideoTrack: id')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.VideoTrack.id")}}</p>
