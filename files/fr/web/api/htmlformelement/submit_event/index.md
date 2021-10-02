---
title: submit
slug: Web/API/HTMLFormElement/submit_event
translation_of: Web/API/HTMLFormElement/submit_event
original_slug: Web/API/HTMLFormElement/submit_event_
---
<p>L’événement <code>submit</code> est émis lorsqu’un formulaire est soumis au serveur.</p>

<p>Notez que l’événement <code>submit</code> se déclenche <strong>uniquement</strong> sur <a href="/fr-FR/docs/Web/HTML/Element/form">l’élement form</a>, et pas sur les éléments <a href="/fr-FR/docs/Web/HTML/Element/button">button</a> ou <a href="/fr/docs/Web/HTML/Element/Input/submit">input submit</a>. (Les formulaires sont soumis, pas les boutons.)</p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#form-submission-algorithm">HTML5</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("Event")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bouillonne</dt>
 <dd style="margin: 0 0 0 120px;">Oui (bien que spécifié comme un événement simple qui ne bouillonne pas)</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">Oui</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">Élément</dd>
 <dt style="float: left; text-align: right; width: 120px;">Action par défaut</dt>
 <dd style="margin: 0 0 0 120px;">Variable (envoie le contenu du formulaire au serveur)</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Propriété</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>La cible de l’évènement (la cible la plus haute dans l’arbre DOM).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>Le type de l’évènement.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Si l’évènement bouillonne normalement ou non.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Si l’évènement est annulable ou non.</td>
  </tr>
 </tbody>
</table>
