---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
translation_of: Web/API/SpeechSynthesisUtterance
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p>L'interface <strong><code>SpeechSynthesisUtterance</code></strong> de l'<a href="/en-US/docs/Web/API/Web_Speech_API">API Web Speech</a> représente une requète de synthèse vocale. Elle contient le contenu du service permettant de définir la façon dont elle sera lu (langue, hauteur et volume).</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()")}}</dt>
 <dd>Retourne une nouvelle instance de l'objet <code>SpeechSynthesisUtterance</code>.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em><code>SpeechSynthesisUtterance</code> hérite également des propriétés de son interface parente, {{domxref("EventTarget")}}.</em></p>

<dl>
 <dt>{{domxref("SpeechSynthesisUtterance.lang")}}</dt>
 <dd>Gets and sets the language of the utterance.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.pitch")}}</dt>
 <dd>Gets and sets the pitch at which the utterance will be spoken at.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.rate")}}</dt>
 <dd>Gets and sets the speed at which the utterance will be spoken at.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.text")}}</dt>
 <dd>Gets and sets the text that will be synthesised when the utterance is spoken.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.voice")}}</dt>
 <dd>Gets and sets the voice that will be used to speak the utterance.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.volume")}}</dt>
 <dd>Gets and sets the volume that the utterance will be spoken at.</dd>
</dl>

<h3 id="Event_handlers">Event handlers</h3>

<dl>
 <dt>{{domxref("SpeechSynthesisUtterance.onboundary")}}</dt>
 <dd>Fired when the spoken utterance reaches a word or sentence boundary.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onend")}}</dt>
 <dd>Fired when the utterance has finished being spoken.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onerror")}}</dt>
 <dd>Fired when an error occurs that prevents the utterance from being succesfully spoken.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onmark")}}</dt>
 <dd>Fired when the spoken utterance reaches a named SSML "mark" tag.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onpause")}}</dt>
 <dd>Fired when the utterance is paused part way through.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onresume")}}</dt>
 <dd>Fired when a paused utterance is resumed.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.onstart")}}</dt>
 <dd>Fired when the utterance has begun to be spoken.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>Dans notre exemple basique de <a href="https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis">démonstration de synthèse vocale</a>, nous commençons par récupérer une référence du controller SpeechSynthesis en utilisant <code>window.speechSynthesis</code>.<br>
 Après avoir définit les variables nécessaires, nous récupérons une liste des voix disponibles en utilisant {{domxref("SpeechSynthesis.getVoices()")}} puis nous alimentons un menu avec celle-ci.<br>
 L'utilisateur pourra ensuite choisir la voix qu'il souhaite.<br>
 <br>
 À l'intérieur du handler <code>inputForm.onsubmit</code> :</p>

<ul>
 <li>Nous stoppons la soumission du formulaire avec <a href="/en-US/docs/Web/API/Event/preventDefault">preventDefault()</a>;</li>
 <li>Nous utilisons le constructeur {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "constructor")}} pour créer une nouvelle instance contenant le texte de l'{{htmlelement("input")}};</li>
 <li>Nous positionnons {{domxref("SpeechSynthesisUtterance.voice","voice")}} sur la voix sélectionnée dans le {{htmlelement("select")}};</li>
 <li>Nous démarrons la synthèse vocale via la méthode {{domxref("SpeechSynthesis.speak()")}}</li>
</ul>

<pre class="brush: js">var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

var voices = synth.getVoices();

for(i = 0; i &lt; voices.length ; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  option.setAttribute('data-lang', voices[i].lang);
  option.setAttribute('data-name', voices[i].name);
  voiceSelect.appendChild(option);
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i &lt; voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
}</pre>

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
      <td>{{SpecName('Web Speech API', '#utterance-attributes', 'SpeechSynthesisUtterance')}}</td>
      <td>{{Spec2('Web Speech API')}}</td>
      <td></td>
    </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.SpeechSynthesisUtterance")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
