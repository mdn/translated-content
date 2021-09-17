---
title: API Battery Status
slug: Web/API/Battery_status_API
tags:
  - API
  - Aperçu
  - Guide
  - Obsolete
translation_of: Web/API/Battery_Status_API
---
<p>{{DefaultAPISidebar("Battery API")}}{{Obsolete_Header}}</p>

<p>L'<strong>API <em>Battery Status</em></strong>, souvent mentionnée sous le nom <strong>Battery API</strong>, fournit des informations sur le niveau de charge du système et permet d'envoyer des événements pour prévenir d'un changement du niveau de charge de la batterie. Cela peut être utilisé pour ajuster la consommation d'une application et la réduire pour réduire l'utilisation de la batterie lorsque son niveau de charge est bas ou encore de sauvegarder les données quand la batterie est bientôt vide.</p>

<p>L'API Battery Status API étend l'interface {{domxref("window.navigator")}} avec la propriété {{domxref("window.navigator.battery")}}, méthode qui renvoie une promesse, résolue par l'objet {{domxref("BatteryManager")}}. Cet objet permet d'ajouter des nouveaux événements pour superviser l'état de la batterie.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on cherche à surveiller les changements, à la fois du statut de la charge (est-ce que l'équipement est branché et se recharge ou est ce que l'équipement est alimenté par sa batterie) et des changements du niveau de charge dans le temps.</p>

<p>Cela se fait en surveillant les événements : </p>

<ul>
 <li>{{event("chargingchange")}}: changement de l'êtat de charge</li>
 <li>{{event("levelchange")}}: changement du niveau de batterie</li>
 <li>{{event("chargingtimechange")}}: évolution de l'estimation du temps de recharge</li>
 <li>{{event("dischargingtimechange")}}: évolution de l'estimation d'autonomie sur batterie</li>
</ul>

<pre class="brush: js;">navigator.getBattery().then(function(battery) {
  function updateAllBatteryInfo(){
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    console.log("Battery en charge ? "
                + (battery.charging ? "Oui" : "Non"));
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
    console.log("Niveau de batterie: "
                + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', function(){
    updateChargingInfo();
  });
  function updateChargingInfo(){
    console.log("Temps avant charge de la batterie: "
                 + battery.chargingTime + " secondes");
  }

  battery.addEventListener('dischargingtimechange', function(){
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    console.log("Autonomie sur batterie: "
                 + battery.dischargingTime + " secondes");
  }

});
</pre>

<p>Voir aussi <a href="http://www.w3.org/TR/battery-status/#examples">l'exemple de la spécification</a>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Battery API")}}</td>
   <td>{{Spec2("Battery API")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.BatteryManager")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/Apps/Build/gather_and_modify_data/retrieving_battery_status_information">Récupérer les informations relatives à la batterie - article et démonstration</a></li>
 <li><a href="http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/">Billet de blog sur Hacks - Utiliser l'API Battery (en anglais)</a></li>
</ul>
