---
title: 'Element : évènement click'
slug: Web/API/Element/click_event
tags:
  - API
  - DOM
  - Element
  - Reference
  - click
translation_of: Web/API/Element/click_event
---
<div>{{APIRef}}</div>

<p>L'évènement <code><strong>click</strong></code> est déclenché à partir d'un élément lorsqu'un bouton d'un dispositif de pointage (comme celui d'une souris par exemple) est pressé puis relaché lorsque le pointeur est sur l'élément.</p>

<table class="properties">
 <tbody>
  <tr>
   <th>Se propage/remonte dans le DOM</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th>Annulable</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th>Interface</th>
   <td>{{domxref("MouseEvent")}}</td>
  </tr>
  <tr>
   <th>Propriété pour la gestion d'évènement</th>
   <td>{{domxref("GlobalEventHandlers.onclick", "onclick")}}</td>
  </tr>
 </tbody>
</table>

<p>Si le bouton est pressé sur un élément et que le pointeur est déplacé sur un autre élément, l'évènement sera déclenché sur l'ancêtre le plus près qui contient les deux éléments.</p>

<p><code>click</code> est déclenché après que les évènements {{event("mousedown")}} et {{event("mouseup")}} aient été déclenchés.</p>

<h2 id="Notes_dutilisation">Notes d'utilisation</h2>

<p>L'objet {{domxref("MouseEvent")}}, passé au gestionnaire d'évènement (lorsque l'évènement est <code>click</code>) possède une propriété {{domxref("Event.detail", "detail")}} qui indique le nombre de fois où la cible ({{domxref("Event.target", "target")}}) a été cliquée. Autrement dit, <code>detail</code> vaudra 2 pour un double-clic, 3 pour un triple-clic et ainsi de suite. Le compteur est remis à zéro après un court intervalle (dont la durée spécifique peut varier entre les navigateurs, les plateformes et les préférences de l'utilisateur dont notamment les options d'accessibilité).</p>

<h3 id="Internet_Explorer">Internet Explorer</h3>

<p>Internet Explorer 8 &amp; 9 souffrent d'un bug où les élméents avec une {{cssxref("background-color")}} calculée qui vaut <a href="/fr/docs/Web/CSS/color_value#transparent_keyword"><code>transparent</code></a> qui recouvrent d'autres éléments ne recevront pas d'évènements <code>click</code>. Les évènements <code>click</code> toucheront les éléments en dessous à la place.</p>

<p>Quelques méthodes de contournement pour ce bug :</p>

<ul>
 <li>Pour IE9 :
  <ul>
   <li>Utiliser {{cssxref("background-color")}}<code>: <a href="/en-US/docs/Web/CSS/color_value#rgba()">rgba</a>(0,0,0,0)</code></li>
   <li>Appliquer {{cssxref("opacity")}}<code>: 0</code> et une valeur explicite pour {{cssxref("background-color")}} qui ne soit pas <a href="/fr/docs/Web/CSS/color_value#transparent_keyword"><code>transparent</code></a></li>
  </ul>
 </li>
 <li>Pour IE8 et IE9 : appliquer <code><a href="http://msdn.microsoft.com/en-us/library/ms532847(v=vs.85).aspx">filter</a>: alpha(opacity=0);</code> et une valeur explicite pour {{cssxref("background-color")}} qui ne soit pas <a href="/fr/docs/Web/CSS/color_value#transparent_keyword"><code>transparent</code></a></li>
</ul>

<h3 id="Safari_Mobile">Safari Mobile</h3>

<p>Safari Mobile 7.0+ (et antérieures) <a href="https://bugs.webkit.org/show_bug.cgi?id=153887">souffre d'un bug</a> indiquant que les évènements <code>click</code> ne sont pas déclenchés sur les éléments qui ne sont généralement pas interactifs (ex. {{HTMLElement("div")}}) et qui n'ont pas de gestionnaire d'évènement directement attaché (on utilise la délégation d'évènement). Voir <a href="https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6">la documentation de Safari sur le fait de rendre les éléments cliquables</a> et <a href="https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7">la définition d'un élément cliquable</a>.</p>

<p>Méthodes de contournement connues :</p>

<ul>
 <li>Ajouter {{cssxref("cursor")}}<code>: pointer;</code> sur l'élément ou l'un des ancêtres.</li>
 <li>Ajouter un attribut <code>onclick="void(0)"</code> à l'élément ou à l'un des ancêtres (tant que ce n'est pas {{HTMLElement("body")}}).</li>
 <li>Utiliser un élément interactif (ex. {{HTMLElement("a")}}) plutôt qu'un élément généralement non-interactif (ex. {{HTMLElement("div")}}).</li>
 <li>Ne pas utiliser la délégation d'évènement pour <code>click</code>.</li>
</ul>

<p>Safari Mobile considère que les éléments suivants sont interactifs (et ne souffrent donc pas de ce bug) :</p>

<ul>
 <li>{{HTMLElement("a")}} (tant qu'il a un attribut <code>href</code>)</li>
 <li>{{HTMLElement("area")}} (tant qu'il a un attribut <code>href</code>)</li>
 <li>{{HTMLElement("button")}}</li>
 <li>{{HTMLElement("img")}}</li>
 <li>{{HTMLElement("input")}}</li>
 <li>{{HTMLElement("label")}} (tant qu'il est associé à un formulaire)</li>
 <li>{{HTMLElement("textarea")}}</li>
 <li><em>Liste à compléter.</em></li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on affiche le nombre de clics consécutifs sur un bouton HTML ({{HTMLElement("button")}}).</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;button&gt;Cliquer ici&lt;/button&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const button = document.querySelector('button');

button.addEventListener('click', event =&gt; {
  button.innerHTML = `Nombre de clics : ${event.detail}`;
});</pre>

<h3 id="Résultat">Résultat</h3>

<p>Essayez de cliquer rapidement sur le bouton pour augmenter le nombre de clic. Après une pause, le compteur sera remis à zéro.</p>

<p>{{EmbedLiveSample("Exemples")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
  </tr>
  <tr>
   <td>{{SpecName('UI Events', '#event-type-click')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#event-type-click', 'click')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Events', '#Events-eventgroupings-mouseevents-h3', 'click')}}</td>
   <td>{{Spec2('DOM2 Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.click_event")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements">Une introduction aux évènements</a></li>
 <li>D'autres évènements connexes
  <ul>
   <li><a href="/fr/docs/Web/API/Element/mouseup_event"><code>mouseup</code></a></li>
   <li><code><a href="/fr/docs/Web/API/Element/mousedown_event">mousedown</a></code></li>
   <li><a href="/fr/docs/Web/API/Element/mousemove_event"><code>mousemove</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/dblclick_event"><code>dblclick</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseout_event"><code>mouseout</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseover_event"><code>mouseover</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseenter_event"><code>mouseenter</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseleave_event"><code>mouseleave</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/contextmenu_event"><code>contextmenu</code></a></li>
  </ul>
 </li>
</ul>
