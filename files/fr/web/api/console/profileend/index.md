---
title: Console.profileEnd()
slug: Web/API/Console/profileEnd
tags:
  - API
  - DOM
  - Méthodes
  - Profils
translation_of: Web/API/Console/profileEnd
---
<p>{{APIRef("Console API")}}{{Non-standard_header}}</p>

<div class="warning">
<p><strong>Attention :</strong> L'appel de cet API immédiatement après <code>console.profile()</code> peut l'empêcher de fonctionner. Pour contourner ce problème, appelez-le par un  <code>setTimeout</code> avec un délai d'au-moins 5 ms. Voir <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1173588">bug #1173588</a>.</p>
</div>

<p>La méthode <code>profileEnd</code>  arrête l'enregistrement d'un profil lancé précédemment avec {{domxref("Console.profile()")}}.</p>

<p>Vous pouvez éventuellement insérer un argument pour nommer le profil. Cela vous permet d'arrêter uniquement ce profil si vous avez enregistré plusieurs profils.</p>

<ul>
 <li>Si <code>Console.profileEnd()</code> reçoit un nom de profil qui correspond au nom d'un profil en cours d'enregistrement, ce profil est arrêté.</li>
 <li>Si <code>Console.profileEnd()</code> reçoit un nom de profil qui ne correspond pas au nom d'un profil en cours d'enregistrement, aucune modification n'est apportée.</li>
 <li>Si <code>Console.profileEnd()</code> ne reçoit pas un nom de profil, le dernier profil démarré est arrêté.</li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">console.profileEnd(<em>profileName</em>);
</pre>

<h2 id="Paramètres">Paramètres</h2>

<dl>
 <dt><code>profileName</code></dt>
 <dd>Le nom à donner au profil. Ce paramètre est facultatif.</dd>
</dl>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Console.profileEnd")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Console.profile()")}}</li>
</ul>
