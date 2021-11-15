---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
tags:
  - API
  - Extensions
  - Reference
  - RegisteredUserScript
  - Type
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
---
<p>{{AddonSidebar()}}</p>

<p>Un RegisteredUserScript est retourné par un appel à {{WebExtAPIRef("userScripts.register","userScripts.register()")}} et représente les scripts utilisateur enregistrés dans cet appel.</p>

<p>L'objet définit une méthode unique, {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}, qui peut être utilisée pour désinscrire les scripts utilisateur.</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> Si cet objet est détruit (par exemple parce qu'il sort du champ d'application), les scripts associés seront automatiquement désenregistrés, vous devez donc conserver une référence à cet objet aussi longtemps que vous voulez que les scripts de contenu restent enregistrés.</p>
</div>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}</dt>
 <dd>Désenregistre les scripts utilisateurs représentés par cet objet.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.userScripts.RegisteredUserScript", 10)}}</p>
