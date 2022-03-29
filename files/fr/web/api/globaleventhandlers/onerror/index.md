---
title: GlobalEventHandlers.onerror
slug: Web/API/GlobalEventHandlers/onerror
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
translation_of: Web/API/GlobalEventHandlers/onerror
---
{{ApiRef("HTML DOM")}}

Un [gestionnaire d'événement](/en-US/docs/Web/Guide/Events/Event_handlers) pour l'événement [`error`](/en-US/docs/Web/Events/error). Des événements d'erreur sont déclenchés vers diverses cibles et pour différents types d'erreurs:

- Lorsqu'une **erreur de runtime JavaScript** se produit (erreurs de syntaxe comprises), un évènement [`error`](/en-US/docs/Web/Events/error) utilisant l'interface {{domxref("ErrorEvent")}} est envoyé à {{domxref("window")}}, et `window.onerror()` est appelé.
- Lorsque le **chargement d'une ressource** (telle que {{HTMLElement("img")}} ou {{HTMLElement("script")}}) **échoue**, un événement [`error`](/en-US/docs/Web/Events/error) utilisant l'interface {{domxref("Event")}} est déclenché sur l'élément qui a initié le chargement, et le gestionnaire `onerror()` de l'élément est invoqué. Ces évènements d'erreur ne remontent pas à window, mais (au moins dans FireFox) ils peuvent être gérés par une unique capture {{domxref("window.addEventListener")}}.

## Syntaxe

Pour des raisons historiques, des arguments différents sont passés aux gestionnaires `window.onerror` et `element.onerror`.

### window\.onerror

```js
window.onerror = function(messageOrEvent, source, noligne, nocolonne, erreur) { ... }
```

Paramètres de la fonction&nbsp;:

- `message`&nbsp;: message d'erreur (chaîne ou objet évènement). Disponible comme `event` (sic&nbsp;!) dans le gestionnaire de HTML `onerror=""`.
- source : l'URL du script où l'erreur a été déclenchée (chaîne)
- noligne&nbsp;: le numéro de ligne où l'erreur a été déclenchée (nombre)
- nocolonne&nbsp;: le numéro de colonne où l'erreur a été déclenchée (nombre)
- erreur : un [Error Object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) (objet)

### element.onerror (et `window.addEventListener('error')`)

    element.onerror = function(event) { ... }

`element.onerror` accepte une fonction avec un argument unique de type {{domxref("Event")}}.

## Notes

Quand une erreur de syntaxe**(?)** se produit dans un script chargé à partir d'une [origine différente](/en-US/docs/Web/Security/Same-origin_policy), les détails de l'erreur de syntaxe ne sont pas rapportés, afin de prévenir la fuite d'information (voir {{bug("363897")}}). A la place, l'erreur est simplement reportée en tant que **`"Script error"`**. Ce comportement peut être surchargé par certains navigateurs en utilisant l'attribut `{{htmlattrxref("crossorigin","script")}}` de {{HTMLElement("script")}} et en faisant en sorte que le serveur envoie les entêtes de réponse [CORS](/en-US/docs/Web/HTTP/Access_control_CORS) HTTP appropriés. Un contournement consiste à isoler "Script error" et à la gérer en sachant que les détails de l'erreur ne sont visibles que la console du navigateur et non accessibles en JavaScript.

    window.onerror = function (msg, url, noLigne, noColonne, erreur) {
        var chaine = msg.toLowerCase();
        var souschaine = "script error";
        if (chaine.indexOf(souschaine) > -1){
            alert('Script Error : voir la Console du Navigateur pour les Détails');
        } else {
            var message = [
                'Message : ' + msg,
                'URL : ' + url,
                'Ligne : ' + noLigne,
                'Colonne : ' + noColonne,
                'Objet Error : ' + JSON.stringify(erreur)
            ].join(' - ');

            alert(message);
        }

        return false;
    };

Lors de l'utilisation du balisage html intégré (\<body onerror="alert('une erreur est survenue')>...), la spécification HTML requiert que les arguments passés à `onerror` soient nommés `event`, `source`, `lineno`, `colno`, `error`. Dans les navigteurs qui n'ont pas implémenté cette obligation, ils peuvent toujours être obtenus via `arguments[0]` à `arguments[2]`.

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onerror','onerror')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.GlobalEventHandlers.onerror")}}

## Voir aussi

- [Capture and report JavaScript errors with window.onerror (blog.getsentry.com, 2016)](http://blog.getsentry.com/2016/01/04/client-javascript-reporting-window-onerror.html)
- [How to catch JavaScript Errors with window.onerror (even on Chrome and Firefox) (danlimerick.wordpress.com, 2014)](https://danlimerick.wordpress.com/2014/01/18/how-to-catch-javascript-errors-with-window-onerror-even-on-chrome-and-firefox/)
