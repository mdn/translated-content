---
title: Battery Status API
slug: Web/API/Battery_Status_API
translation_of: Web/API/Battery_Status_API
---
{{DefaultAPISidebar("Battery API")}}{{Obsolete_Header}}

Die **Battery Status API**, oder kurz **Battery API**, stellt Informationen über den Ladezustand der Systembatterie zur Verfügung. Diese Informationen können zur Anpassung der Ressourcennutzung verwendet werden. Wenn nur noch wenig Energie zur Verfügung steht, sollten unnötige Operationen eingestellt werden, damit die Laufzeit erhöht wird. Oder aber der Zustand gespeichert werden, damit ein Datenverlust verhindert werden kann.

Die Battery Status API erweitert {{domxref("window.navigator")}} mit einer Methode {{domxref("navigator.getBattery()")}}, die ein Promise mit einem {{domxref("BatteryManager")}} Objekt liefert, sowie einigen Nachrichten zum Überwachen des Batteriestatus.

## Beispiel

In diesem Beispiel wird der Ladezustand (Netz, ladend, etc.) und Änderungen des Batterieniveaus und der Zeit überwacht. Dies erfolgt durch Überwachen der Events: {{event("chargingchange")}}, {{event("levelchange")}} und {{event("chargingtimechange")}}, {{event("dischargingtimechange")}}.

```js
navigator.getBattery().then(function(battery) {
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
    console.log("Battery charging? "
                + (battery.charging ? "Yes" : "No"));
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
    console.log("Battery level: "
                + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', function(){
    updateChargingInfo();
  });
  function updateChargingInfo(){
    console.log("Battery charging time: "
                 + battery.chargingTime + " seconds");
  }

  battery.addEventListener('dischargingtimechange', function(){
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    console.log("Battery discharging time: "
                 + battery.dischargingTime + " seconds");
  }

});
```

Siehe auch die [Beispiel in der Spezifikation](http://www.w3.org/TR/battery-status/#examples).

## Spezifikationen

| Spezifikation                        | Status                           | Kommentar            |
| ------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("Battery API")}} | {{Spec2("Battery API")}} | Initiale Definition. |

## Browser Kompatibilität

{{Compat("api.BatteryManager")}}

## Siehe auch

- [Batterie Statusinformationen abrufen - Beispiel und Artikel](/en-US/Apps/Build/gather_and_modify_data/retrieving_battery_status_information)
- [Hacks blog post - Nutzung der Battery API](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
