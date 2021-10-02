---
title: window.requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
translation_of: Web/API/Window/requestIdleCallback
---
<div>{{APIRef}}{{SeeCompatTable}}</div>

<p>La méthode <code><strong>window.requestIdleCallback() </strong></code>mémorise une fonction qui sera appellée lorsque le navigateur n'aura plus aucune autre tâche en cours. Cela offre au développeur la possibilité de réaliser des tâches à basse priorité en arrière-plan sur le thread principal, sans impacter l'expérience utilisateur (ralentissement des animations, etc). L'ordre des appels aux fonctions est généralement premier entré, premier sorti, sauf si le timeout défini au moment de l'enregistrement est atteint avant que le navigateur n'ait eu le temps d'appeler la fonction en question.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><code>var idleCallbackId = window.requestIdleCallback(fonction[, options])</code></pre>

<h3 id="Returns">Retour de l'appel</h3>

<p>Un entier long non-signé qui peut être utilisé pour annulé l'appel à la fonction via la méthode {{domxref("window.cancelIdleCallback()")}}.</p>

<h3 id="Parameters">Paramètres</h3>

<dl>
 <dt>fonction</dt>
 <dd>La référence d'une fonction qui devrait être appellée dans un futur proche. La fonction en question recevra en argument un objet de type temps restant avec les propriétés suivantes :
 <ul>
  <li><code>timeRemaining </code>: Fonction qui retourne un {{domxref("DOMHighResTimeStamp")}} repésentant le temps restant estimé par le navigateur pour exécuter la tâche, ayant pour valeur minimale zéro. Les tâches nécessitant un temps d'exécution relativement long sont susceptibles de recourir à plusieurs appels à cette méthode s'il reste du travail à effectuer, rendant la main au navigateur peu avant que le compteur n'atteigne zéro. <code>timeRemaining()</code> retournera toujours zéro si <code>didTimeout</code> est positionné à true (i.e. la fonction n'a pas été appelée durant la période de repos du navigateur). La limite de temps est limitée à 50ms, même si le navigateur reste n'a pas d'autre tâche à exécuter pendant une durée plus longue.</li>
  <li><code>didTimeout </code>: Un booléen positionné à true si la fonction est appelée car le timeout a été atteint, et false si elle a été appelée par le navigateur durant une période de repos.</li>
 </ul>
 </dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>Objet contenant des paramètres de configuration optionnels. Les propriétés sont les suivantes :
 <ul>
  <li><code>timeout </code>: Si <code>timeout</code> est spécifié et possède une valeur positive, la fonction sera appelée au bout de au moins <code>timeout</code> millisecondes si elle n'a pas été appelée par le navigateur au préalable.</li>
 </ul>
 </dd>
</dl>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Spécification</th>
   <th>Status</th>
   <th>Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Background Tasks')}}</td>
   <td>{{Spec2('Background Tasks')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.requestIdleCallback")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>{{domxref("window.cancelIdleCallback()")}}</li>
  <li>{{domxref("IdleDeadline")}}</li>
  <li>{{domxref("window.setTimeout()")}}</li>
  <li>{{domxref("window.setInterval()")}}</li>
  <li>{{domxref("window.requestAnimationFrame")}}</li>
</ul>
