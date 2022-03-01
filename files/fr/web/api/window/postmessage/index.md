---
title: Window.postMessage
slug: Web/API/Window/postMessage
tags:
  - API
  - DOM
  - Méthode
  - Reference
  - postMessage
translation_of: Web/API/Window/postMessage
---
{{ ApiRef() }}

La méthode **`window.postMessage`** permet une communication inter-domaine en toute sécurité. Normalement, les scripts de différentes pages sont autorisés à accéder les uns aux autres si et seulement si les pages depuis lesquelles ils sont exécutés ont des URL de même [origine](/en-US/docs/Glossary/Origin), c'est-à-dire avec le même protocole (généralement `http` ou `https`), le même numéro de port (`80` étant le port par défaut pour  `http`), et le même nom d'hôte (à condition que [document.domain](/en-US/docs/DOM/document.domain) soit initialisé à la même valeur par les deux pages). `window.postMessage` fournit un mécanisme contrôlé pour contourner cette restriction d'une manière sécurisée si bien utilisée.

La méthode `window.postMessage`, quand elle est appelée, provoque l'envoi d'un [`MessageEvent`](/fr/docs/Web/API/MessageEvent) à la fenêtre ciblée une fois que tout script en attente a terminé son exécution (par exemple, les gestionnaires d'évènements restants si `window.postMessage` est appelée depuis un gestionnaire d'évènement, des timeouts en attente enregistrées auparavant, etc.) Le [`MessageEvent`](/fr/docs/Web/API/MessageEvent) est de type `message`, a une propriété `data` qui est initialisée à la valeur du premier argument passé à `window.postMessage`, une propriété `origin` correspondant à l'origine du document principal de la fenêtre appelant `window.postMessage` au moment où `window.postMessage` a été appelée, et une propriété `source` qui est la fenêtre depuis laquelle `window.postMessage` est appelée (les autres propriétés standard d'évènement sont présentes avec leurs valeurs attendues).

## Syntaxe

    otherWindow.postMessage(message, targetOrigin, [transfer]);

- `otherWindow`
  - : Une référence à une autre fenêtre ; une telle référence peut être obtenue, par exemple, _via_ la propriété `contentWindow` d'un élément `iframe`, l'objet retourné par [window.open](/fr/docs/DOM/window.open), ou par index nommé ou numérique de [window.frames](/fr/docs/Web/API/window.frames).
- `message`
  - : La donnée à envoyer à l'autre fenêtre. Elle est sérialisée en utilisant [l'algorithme de clônage structuré](/fr/docs/Web/Guide/API/DOM/The_structured_clone_algorithm). Cela signifie que vous pouvez passer sereinement une large variété d'objets de données à la fenêtre de destination sans avoir à les sérialiser vous-mêmes. \[1]
- `targetOrigin`
  - : Indique quelle doit être l'origine de `otherWindow` pour l'évènement à envoyer, soit comme la chaîne littérale `"*"` (signifiant pas de préférence) soit comme une URI. Si, au moment où l'évènement est inscrit pour être envoyé, le protocole, le nom d'hôte ou le port du document de `otherWindow` ne correspond pas à ceux contenus dans `targetOrigin`,  l'évènement ne sera pas envoyé ; il ne le sera que si les trois correspondent. Ce mécanisme permet de contrôler où les messages sont envoyés ; par exemple, si `postMessage` était utilisé pour transmettre un mot de passe, il serait absolument vital que cet argument soit une URI dont l'origine est la même que le récepteur prévu du message contenant le mot de passe, afin de prévenir l'interception du mot de passe par une tierce-partie malicieuse. **Fournissez toujours une `targetOrigin` spécifique, jamais `*`, si vous savez où le document de l'autre fenêtre est censé se trouver. Ne pas fournir une cible spécifique expose les données que vous envoyez à tout site malicieux à l'écoute.**
- `transfer` {{optional_Inline}}
  - : Séquence d'objets {{domxref("Transferable")}} qui sera transmise avec le message. La possession de ces objets est cédée à la destination et ils ne sont plus utilisables du côté de l'expéditeur.

## L'évènement envoyé

`otherWindow` peut surveiller les messages envoyés en exécutant le JavaScript suivant :

```js
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if (event.origin !== "http://example.org:8080")
    return;

  // ...
}
```

Les propriétés du message envoyé sont :

- `data`
  - : L'objet passé depuis l'autre fenêtre.
- `origin`
  - : L'[origine](/en-US/docs/Origin) de la fenêtre qui a envoyé le message au moment où `postMessage` a été appelée. Des exemples typiques d'origines sont `https://example.org` (sous-entendu port `443`), `http://example.net` (sous-entendu port `80`), et `http://example.com:8080`. Notez qu'il n'est pas garanti que cette origine soit l'origine actuelle ou future de cette fenêtre, qui peut avoir été naviguée vers une adresse différente depuis l'appel à `postMessage`.
- `source`
  - : Une référence à l'objet [`window`](/fr/docs/DOM/window) qui a envoyé le message ; vous pouvez utiliser ceci pour établir une communication dans les deux sens entre deux fenêtres ayant différentes origines.

<!---->

## Précautions de sécurité

**Si vous ne prévoyez pas de recevoir de messages depuis d'autres sites, n'ajoutez pas de gestionnaire d'évènement pour les évènements `message`.** C'est un moyen sûr d'éviter les problèmes de sécurité.

Si vous prévoyez de recevoir des messages depuis d'autres sites, **vérifiez toujours l'identité de l'expéditeur** à l'aide des propriétés `origin` et si possible `source`. Toute fenêtre (y compris, par exemple, `http://evil.example.com`) peut envoyer un message à toute autre fenêtre, et vous n'avez aucune garantie qu'un expéditeur inconnu ne va pas envoyer de message malicieux. Cependant, même si vous vérifiez l'identité, vous devriez **toujours vérifier la syntaxe du message reçu**. Dans le cas contraire, une faille de sécurité dans le site auquel vous faites confiance peut ouvrir une vulnérabilité XSS dans votre propre site.

**Spécifiez toujours explicitement une origine de destination, jamais `*`, quand vous utilisez `postMessage` pour envoyer des données à d'autres fenêtres.** Un site malicieux peut changer l'adresse de la fenêtre à votre insu, et ainsi intercepter les données envoyées à l'aide de `postMessage`.

## Exemple

```js
/*
 * Dans les scripts de la fenêtre A, avec A sur <http://example.com:8080>:
 */

var popup = window.open(...popup details...);

// Quand la popup est chargée, si pas bloquée par un bloqueur de popups:

// Ceci ne fait rien, en supposant que la fenêtre n'a pas changé d'adresse.
popup.postMessage("The user is 'bob' and the password is 'secret'",
                  "https://secure.example.net");

// Ceci va planifier l'envoi d'un message à la popup, en supposant que
// la fenêtre n'a pas changé d'adresse.
popup.postMessage("hello there!", "http://example.org");

function receiveMessage(event)
{
  // Faisons-nous confiance à l'expéditeur de ce message ?  (il pourrait être
  // différent de la fenêtre que nous avons ouverte au départ, par exemple).
  if (event.origin !== "http://example.org")
    return;

  // event.source est la popup
  // event.data est "hi there yourself!  the secret response is: rheeeeet!"
}
window.addEventListener("message", receiveMessage, false);
```

```js
/*
 * Dans les scripts de la popup, sur <http://example.org>:
 */

// Appelée quelques instants après que postMessage a été appelée
function receiveMessage(event)
{
  // Faisons-nous confiance à l'expéditeur de ce message ?
  if (event.origin !== "http://example.com:8080")
    return;

  // event.source est window.opener
  // event.data est "hello there!"

  // Supposant que vous avez vérifié l'origine du message reçu
  // (ce que vous devriez faire en toutes circonstances),
  // un moyen pratique de répondre à un message est d'appeler postMessage
  // sur event.source et fournir event.origin comme targetOrigin.
  event.source.postMessage("hi there yourself!  the secret response " +
                           "is: rheeeeet!",
                           event.origin);
}

window.addEventListener("message", receiveMessage, false);
```

### Notes

Toute fenêtre peut accéder à cette méthode sur toute autre fenêtre, à tout moment, peu importe l'adresse du document dans la fenêtre, pour y envoyer un message. Par conséquent, tout gestionnaire d'évènement utilisé pour recevoir des messages **doit** d'abord vérifier l'identité de l'expéditeur du message, en utilisant les propriétés `origin` et si possible `source`. Cela ne peut pas être minimisé : **ne pas vérifier les propriétés `origin` et si possible `source` permet des attaques inter-site.**

De même qu'avec les scripts exécutés de manière asynchrone (timeouts, evènements générés par l'utilisateur), il n'est pas possible pour l'appelant à `postMessage` de détecter quand un gestionnaire d'évènement écoutant des évènements envoyés par `postMessage` lance une exception.

La valeur de la propriété `origin` de l'évènement envoyé n'est pas affectée par la valeur actuelle de `document.domain` dans la fenêtre appelante.

Pour les noms d'hôte IDN uniquement, la valeur de la propriété `origin` n'est pas systématiquement Unicode ou punycode ; pour la plus grande compatibilité, testez à la fois les valeurs IDN et punycode quand vous utilisez cette propriété si vous attendez des messages de sites IDN. Cette valeur sera systématiquement IDN à l'avenir, mais pour l'instant vous devriez gérer à la fois les formes IDN et punycode.

La valeur de la propriété `origin` quand la fenêtre expéditrice contient une URL `javascript:` ou `data:` est l'origin du script qui a chargé cette URL.

### Utiliser window\.postMessage dans les extensions {{Non-standard_inline}}

`window.postMessage` est disponible depuis le JavaScript exécuté en code chrome (par exemple, dans les extensions et le code privilégié), mais la propriété `source` de l'évènement envoyé est toujours `null` par mesure de sécurité. (Les autres propriétés ont leurs valeurs usuelles.)

L'argument `targetOrigin` pour un message envoyé à une fenêtre située à une URL `chrome:` est actuellement mal interprété, si bien que la seule valeur qui conduit à l'envoi d'un message est `"*"`. Comme cette valeur n'est pas sûre quand la fenêtre ciblée peut être naviguée n'importe où par un site malicieux, il est recommandé de ne pas utiliser `postMessage` pour communiquer avec des pages `chrome:` pour l'instant&nbsp;; utilisez une méthode différente (comme une chaîne de requête quand la fenêtre est ouverte) pour communiquer avec des fenêtres chrome.

Enfin, poster un message à une page à une URL `file:` requiert actuellement que l'argument `targetOrigin` soit `"*"`. `file://` ne peut pas être utilisé comme restriction de sécurité&nbsp;; cette restriction pourrait être modifiée à l'avenir.

## Spécifications

| **Spécification**                                                                                                | **Status**                                   | **Comment**aire                                                           |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#dom-window-postmessage", "window.postMessage")}}             | {{Spec2('HTML WHATWG')}}             | Pas de changement depuis {{SpecName('HTML5 Web Messaging')}} |
| {{SpecName('HTML5 Web Messaging', '#dom-window-postmessage', 'window.postMessage')}} | {{Spec2('HTML5 Web Messaging')}} | Définition initiale.                                                      |

## Compatibilité des navigateurs

{{Compat("api.Window.postMessage")}}

## Voir aussi

- [Document.domain](/en-US/docs/DOM/document.domain)
- [CustomEvent](/en-US/docs/Web/API/CustomEvent)
- [Interaction entre les pages privilégiées et non privilégiées](/en-US/docs/Code_snippets/Interaction_between_privileged_and_non-privileged_pages)
