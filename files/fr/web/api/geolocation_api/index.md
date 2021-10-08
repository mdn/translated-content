---
title: Geolocation API (API de géolocalisation)
slug: Web/API/Geolocation_API
tags:
  - API
  - GPS
  - Geolocation
  - Géolocalisation
translation_of: Web/API/Geolocation_API
---
{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

L'API **Geolocation** (pour géolocalisation) permet à un utilisateur d'indiquer sa localisation à une application web s'il le souhaite. Pour des raisons de vie privée, l'application doit demander la permission à l'utilisateur de manipuler ces informations.

## L'objet `geolocation`

L'API [Geolocation](/fr/docs/Web/API/Geolocation) est publiée via l'objet {{domxref("navigator.geolocation")}}.

Si l'objet existe, les services de géolocalisation sont disponibles. On peut donc tester la présence de ces fonctionnalités de cette façon :

```js
if ("geolocation" in navigator) {
  /* la géolocalisation est disponible */
} else {
  /* la géolocalisation n'est pas disponible */
}
```

> **Note :** Pour Firefox 24 et les versions antérieures, `"geolocation" in navigator` renvoyait toujours `true` même si l'API était désactivée. Cela a été corrigé à partir de [Firefox 25](/en-US/docs/Mozilla/Firefox/Releases/25/Site_Compatibility) afin de respecter la spécification ({{bug(884921)}}).

### Obtenir la position actuelle

Afin d'obtenir la position actuelle de l'utilisateur, on peut appeler la méthode {{domxref("geolocation.getCurrentPosition()","getCurrentPosition()")}}. Cela initie une requête asynchrone pour détecter la position de l'utilisateur en demandant au composant matériel une position à jour. Lorsque la position est déterminée, la fonction de _callback_ est appelée. Il est possible de fournir un deuxième _callback_ afin de gérer les erreurs. Le troisième paramètre de la fonction, optionnel, est un objet d'options qui indique l'âge maximal pour la position, le temps à attendre l'exécution de la requête et si on souhaite obtenir une précision élevée pour la position.

> **Note :** Par défaut {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}} tente de répondre aussi rapidement que possible quitte à ce que le résultat soit peu précis. Cela permet de répondre rapidement (potentiellement avec des données peu précises comme l'IP ou le WiFi) plutôt que d'attendre une ou plusieurs minutes le calibrage du GPS.

```js
navigator.geolocation.getCurrentPosition(function(position) {
  faireQqc(position.coords.latitude, position.coords.longitude);
});
```

Dans l'exemple ci-avant, la fonction `faireQqc()` sera exécutée quand la localisation sera obtenue.

### Suivre l'évolution de la position

Si les données de position changent (que l'appareil ait bougé ou que des informations de géolocalisation plus précises soient disponibles), on peut définir une fonction de _callback_ qui sera appelée avec les informations mises à jour

Pour cela, on utilise la fonction {{domxref("Geolocation.watchPosition()","watchPosition()")}} qui utilise les mêmes paramètres d'entrée que {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}}. Ce _callback_ est appelé plusieurs fois, permettant au navigateur de mettre à jour la position lorsqu'on se déplace ou lorsque des données plus précises sont fournies. La fonction de rappel pour la gestion des erreurs (optionnelle) peut aussi être appelée de façon répétée.

> **Note :** On peut utiliser {{domxref("Geolocation.watchPosition()","watchPosition()")}} sans avoir d'abord appelé {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}}.

```js
var watchID = navigator.geolocation.watchPosition(function(position) {
  faireQqc(position.coords.latitude, position.coords.longitude);
});
```

La méthode {{domxref("Geolocation.watchPosition()","watchPosition()")}} renvoie un identifiant qui peut être utilisé afin de redemander la position. Cet identifiant peut également être passé à la méthode {{domxref("Geolocation.clearWatch()","clearWatch()")}} afin d'arrêter le suivi de la position.

```js
navigator.geolocation.clearWatch(watchID);
```

### Paramétrer la réponse

{{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}} et {{domxref("Geolocation.watchPosition()","watchPosition()")}} prennent en argument un _callback_ appelé en cas de succès, un deuxième _callback_ (optionnel) appelé en cas d'erreur et un troisième argument (optionnel) qui est un objet [`PositionOptions`](/fr/docs/Web/API/PositionOptions).

Un appel à {{domxref("Geolocation.watchPosition()","watchPosition")}} peut donc ressembler à :

```js
function geo_success(position) {
  do_something(position.coords.latitude, position.coords.longitude);
}

function geo_error() {
  alert("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true,
  maximumAge        : 30000,
  timeout           : 27000
};

var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
```

## Décrire une position

La position de l'utilisateur est décrite par un objet {{domxref("Position")}} qui fait référence à un objet {{domxref("Coordinates")}} via la propriété `coords`.

{{page("/fr/docs/Web/API/Position")}}

{{page("/fr/docs/Web/API/Position/coords","Coordinates")}}

## Gérer les erreurs

Le _callback_ de gestion des erreurs (s'il est passé à `getCurrentPosition()` ou `watchPosition()`) s'attend à recevoir un objet [`PositionError`](/fr/docs/Web/API/PositionError) comme premier paramètre.

```js
function errorCallback(error) {
  alert('ERROR(' + error.code + '): ' + error.message);
};
```

## Exemple interactif

```css hidden
body {
  padding: 20px;
  background-color:#ffffc9
}

button {
  margin: .5rem 0;
}
```

### HTML

```html
<button id = "find-me">Montrer ma localisation</button><br/>
<p id = "status"></p>
<a id = "map-link" target="_blank"></a>
```

### JavaScript

```js
function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
```

### Résultat

{{EmbedLiveSample('Exemple_interactif', 350, 150, "", "", "", "geolocation")}}

## Demander la permission

Pour une extension, toute utilisation des données de géolocalisation ne peut se faire qu'après avoir obtenu la permission. La fonction qui suit permet de demander la permission de façon semblable au rendu des pages web. La réponse de l'utilisateur est enregistrée dans la préférence indiquée par le paramètre `pref`. La fonction fournie dans le paramètre de `callback` sera appelée avec une valeur booléenne qui indique la réponse de l'utilisateur. Lorsque cette dernière vaut `true`, le module complémentaire pourra accéder aux données de géolocalisation.

```js
function prompt(window, pref, message, callback) {
    let branch = Components.classes["@mozilla.org/preferences-service;1"]
                           .getService(Components.interfaces.nsIPrefBranch);

    if (branch.getPrefType(pref) === branch.PREF_STRING) {
        switch (branch.getCharPref(pref)) {
        case "always":
            return callback(true);
        case "never":
            return callback(false);
        }
    }

    let done = false;

    function remember(value, result) {
        return function() {
            done = true;
            branch.setCharPref(pref, value);
            callback(result);
        }
    }

    let self = window.PopupNotifications.show(
        window.gBrowser.selectedBrowser,
        "geolocation",
        message,
        "geo-notification-icon",
        {
            label: "Share Location",
            accessKey: "S",
            callback: function(notification) {
                done = true;
                callback(true);
            }
        }, [
            {
                label: "Always Share",
                accessKey: "A",
                callback: remember("always", true)
            },
            {
                label: "Never Share",
                accessKey: "N",
                callback: remember("never", false)
            }
        ], {
            eventCallback: function(event) {
                if (event === "dismissed") {
                    if (!done) callback(false);
                    done = true;
                    window.PopupNotifications.remove(self);
                }
            },
            persistWhileVisible: true
        });
}

prompt(window,
       "extensions.foo-addon.allowGeolocation",
       "Foo Add-on wants to know your location.",
       function callback(allowed) { alert(allowed); });
```

## Compatibilité des navigateurs

{{Compat("api.Geolocation")}}

### Disponibilité

La localisation basée sur le WiFi étant généralement obtenue via un service Google, l'API de géolocalisation peut être indisponible en Chine. Vous pouvez utiliser des fournisseurs tiers tels que [Baidu](http://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) ou [Tencent](http://lbs.qq.com/tool/component-geolocation.html). Ces services se basent sur l'adresse IP de l'utilisateur ou sur une application locale afin de fournir un positionnement amélioré.

## Voir aussi

- {{domxref("navigator.geolocation")}}
- [L'API Geolocation sur w3.org](https://www.w3.org/TR/geolocation-API/)
- [Qui a déplacé ma géolocalisation ? sur le blog Hacks](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/)
