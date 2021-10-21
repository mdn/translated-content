---
title: Fonctions et classes disponibles dans les Web Workers
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
translation_of: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
original_slug: Web/API/Worker/Functions_and_classes_available_to_workers
---
En plus de l'ensemble des fonctions standard [JavaScript](/en-US/docs/Web/JavaScript) (telles que {{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Object", "Object")}}, {{jsxref("Global_Objects/JSON", "JSON")}} etc), des fonctions du DOM restent disponibles pour les workers. Cet article en fournit la liste.

**Les workers s'exécutent dans un contexte global, {{domxref("DedicatedWorkerGlobalScope")}} différent du contexte de la fenêtre courante**. Par défaut les méthodes et propriétés de {{domxref("Window")}} ne leur sont pas disponibles, mais {{domxref("DedicatedWorkerGlobalScope")}}, comme `Window`, implémente {{domxref("WindowTimers")}} et {{domxref("WindowBase64")}}.

## Comparaison des propriétés et méthodes des différents types de workers

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Fonctions</td>
      <td class="header">Workers dédiés</td>
      <td class="header">Workers partagés</td>
      <td class="header">Service workers</td>
      <td class="header">Chrome workers {{Non-standard_inline}}</td>
      <td class="header">En dehors des  workers</td>
    </tr>
    <tr>
      <td>{{domxref("WindowBase64.atob", "atob()")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>{{domxref("WindowBase64.btoa", "btoa()")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>
        {{domxref("WindowTimers.clearInterval", "clearInterval()")}}
      </td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>
        {{domxref("WindowTimers.clearTimeout", "clearTimeout()")}}
      </td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>
        {{domxref("Window.dump()", "dump()")}}
        {{non-standard_inline}}
      </td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>
        {{domxref("WindowTimers.setInterval", "setInterval()")}}
      </td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>
        {{domxref("WindowTimers.setTimeout", "setTimeout()")}}
      </td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>
        {{domxref("WorkerGlobalScope.importScripts", "importScripts()")}}
      </td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>non</td>
    </tr>
    <tr>
      <td>
        {{domxref("WorkerGlobalScope.close", "close()")}}
        {{non-standard_inline}}
      </td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, sur {{domxref("WorkerGlobalScope")}}</td>
      <td>oui, mais sans effet</td>
      <td>Inconnu</td>
      <td>non</td>
    </tr>
    <tr>
      <td>
        {{domxref("DedicatedWorkerGlobalScope.postMessage", "postMessage()")}}
      </td>
      <td>oui, sur {{domxref("DedicatedWorkerGlobalScope")}}</td>
      <td>non</td>
      <td>non</td>
      <td>Inconnu</td>
      <td>non</td>
    </tr>
  </tbody>
</table>

## APIs disponibles dans les workers

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Fonction</td>
      <td class="header">Fonctionnalité</td>
      <td class="header">Support dans Gecko (Firefox)</td>
      <td class="header">Support dans IE</td>
      <td class="header">Support dans Blink (Chrome et Opera)</td>
      <td class="header">Support dans WebKit (Safari)</td>
    </tr>
    <tr>
      <td><code>XMLHttpRequest</code></td>
      <td>
        Crée et retourne un nouvel objet
        {{domxref("XMLHttpRequest")}}; il imite le comportement du
        constructeur standard <code>XMLHttpRequest()</code>. Remarquez que les
        attributs <code>responseXML</code> et <code>channel</code> de
        <code>XMLHttpRequest</code> retourne toujours <code>null</code>.
      </td>
      <td>
        <p>Basique : {{CompatGeckoDesktop("1.9.1")}}</p>
        <p>
          {{domxref("XMLHttpRequest.response", "response")}}
          et
          {{domxref("XMLHttpRequest.responseType", "responseType")}}
          sont disponibles depuis {{CompatGeckoDesktop("10")}}
        </p>
        <p>
          {{domxref("XMLHttpRequest.timeout", "timeout")}} et
          {{domxref("XMLHttpRequest.ontimeout", "ontimeout")}}
          sont disponibles depuis {{CompatGeckoDesktop("13")}}
        </p>
      </td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatVersionUnknown}}</td>
    </tr>
    <tr>
      <td><code>Worker</code></td>
      <td>
        Crée un nouveau {{ domxref("Worker") }}. Oui, les workers
        peuvent engendrer des workers supplémentaires.
      </td>
      <td>{{CompatGeckoDesktop("1.9.1")}}</td>
      <td>10.0</td>
      <td>
        {{CompatNo}} Voir
        <a href="http://code.google.com/p/chromium/issues/detail?id=31666"
          >crbug.com/31666</a
        >
      </td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>{{ domxref("URL") }}</td>
      <td>
        Les workers peuvent utiliser les méthodes statiques
        <a href="/en-US/docs/DOM/window.URL.createObjectURL"
          >URL.createObjectURL</a
        >
        et
        <a href="/en-US/docs/DOM/window.URL.revokeObjectURL"
          >URL.revokeObjectURL</a
        >
        avec les objets {{domxref("Blob")}} accessibles au worker.<br />Les
        workers peuvent aussi créer une nouvelle URL en utilisant le
        constructeur {{domxref("URL.URL", "URL()")}} et appeler
        n'importe quelle méthode normale sur l'objet retourné.
      </td>
      <td>
        {{CompatGeckoDesktop(21)}} et
        {{CompatGeckoDesktop(26)}} pour le constructeur URL()
      </td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>
        {{domxref("TextEncoder")}} and
        {{domxref("TextDecoder")}}
      </td>
      <td>
        Crée et retourne un nouveau {{domxref("TextEncoder")}}, ou
        respectivement {{domxref("TextDecoder")}}, permettant
        d'encoder ou de décoder des chaînes de caractère dans un encodage
        spécifique.
      </td>
      <td>{{CompatGeckoDesktop(20)}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>{{domxref("WorkerNavigator")}}</td>
      <td>
        Le sous-ensemble de l'interface {{domxref("Navigator")}}
        disponible aux workers.
      </td>
      <td>
        Implémentation basique {{CompatVersionUnknown}}<br />{{domxref("NavigatorID.appCodeName", "appCodeName")}},
        {{domxref("NavigatorID.product", "product")}},
        {{domxref("NavigatorID.taintEnabled", "taintEnabled()")}}:
        {{CompatGeckoDesktop(28)}}<br />{{domxref("WorkerNavigator.onLine", "onLine")}}:
        {{CompatGeckoDesktop(29)}}<br />{{domxref("NavigatorLanguage")}}:
        {{CompatNo}}
      </td>
      <td>
        {{domxref("NavigatorID.appName", "appName")}},
        {{domxref("NavigatorID.appVersion", "appName")}},
        {{domxref("WorkerNavigator.onLine", "onLine")}},
        {{domxref("NavigatorID.platform", "platform")}},
        {{domxref("NavigatorID.userAgent", "userAgent")}}:
        10.0<br />Autre : {{CompatNo}}
      </td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatVersionUnknown}}</td>
    </tr>
    <tr>
      <td>{{domxref("WorkerLocation")}}</td>
      <td>
        Le sous-ensemble de l'interface {{domxref("Location")}}
        disponible aux workers.
      </td>
      <td>{{CompatGeckoDesktop(1.9.2)}}</td>
      <td>10.0</td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatVersionUnknown}}</td>
    </tr>
    <tr>
      <td>{{domxref("WorkerGlobalScope")}}</td>
      <td>
        Le contexte global des workers. Cet objet définit
        <a href="#workerscope">les fonctions spécifiques aux workers</a>.
      </td>
      <td>{{CompatVersionUnknown}}</td>
      <td>10.0</td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatVersionUnknown}}</td>
    </tr>
    <tr>
      <td>{{domxref("ImageData")}}</td>
      <td>
        Les données en pixels sous-jacentes à une zone d'un élément
        {{domxref("canvas")}}. Manipuler de telles données peut être une
        tâche complexe qu'il est plus approprié de déléguer à un web worker.
      </td>
      <td>{{CompatGeckoDesktop(25)}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>{{domxref("FileReaderSync")}}</td>
      <td>
        Cette API permet la lecture synchrone d'objets {{domxref("Blob")}}
        et {{domxref("File")}}. C'est une API qui fonctionne uniquement au
        sein des workers.
      </td>
      <td>{{CompatGeckoDesktop(8)}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>{{domxref("IndexedDB_API", "IndexedDB")}}</td>
      <td>
        Une base de données pour stocker des enregistrements contenant des
        valeurs simples et des objets hiérarchiques.
      </td>
      <td>{{CompatGeckoDesktop(37)}}</td>
      <td>10.0</td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>{{domxref("WebSocket")}}</td>
      <td>
        Crée et retourne un nouvel objet {{domxref("WebSocket")}}; Il
        imite le comportement d'un constructeur
        <code>WebSocket()</code> standard.
      </td>
      <td>{{CompatGeckoDesktop(36)}}</td>
      <td>11.0</td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatVersionUnknown}}</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/API/Data_Store_API">Data Store API</a></td>
      <td>
        Un mécanisme de stockage puissant et flexible pour de multiples
        applications Firefox OS qui ont l'habitude de stocker et d'échanger des
        données entre elles de manière rapide, efficace et sécurisée.
      </td>
      <td>
        Seulement dans les applications internes (certifiées) de Firefox OS,
        deuis v1.0.1.
      </td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
          >Promises</a
        >
      </td>
      <td>
        Les objets JavaScript qui vous permettent d'écrire des fonctions
        asynchrones.
      </td>
      <td>{{CompatGeckoDesktop(28)}}</td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatVersionUnknown}}</td>
      <td>{{CompatVersionUnknown}}</td>
    </tr>
  </tbody>
</table>

## Voir aussi

- [Utilisation des web workers](/fr/docs/Utilisation_des_web_workers)
- {{ domxref("Worker") }}
