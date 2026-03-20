---
title: "Window : méthode postMessage()"
short-title: postMessage()
slug: Web/API/Window/postMessage
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

La méthode **`postMessage()`** de l'interface {{DOMxRef("Window")}} permet de manière sécurisée la communication entre objets {{DOMxRef("Window")}} provenant de différentes origines&nbsp;; _par exemple,_ entre une page et une fenêtre pop-up qu'elle a ouverte, ou entre une page et un cadre intégré (<i lang="en">iframe</i> en anglais).

Normalement, les scripts sur différentes pages sont autorisés à s'accéder mutuellement uniquement si les pages dont ils proviennent partagent la même [origine](/fr/docs/Web/API/Location/origin) (également connue sous le nom de «&nbsp;[politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)&nbsp;»). `window.postMessage()` fournit un mécanisme contrôlé pour contourner cette restriction de manière sécurisée (si utilisé correctement).

De plus, un script accédant doit avoir obtenu au préalable l'objet window du document accédé. Cela peut se produire par des méthodes telles que {{DOMxRef("Window.open()")}} pour les fenêtres affichées par dessus (<i lang="en">popups</i> en anglais) ou [`iframe.contentWindow`](/fr/docs/Web/API/HTMLIFrameElement/contentWindow) pour les cadres intégrés.

De manière générale, une fenêtre peut obtenir une référence à une autre (_par exemple,_ avec `targetWindow = window.opener`), puis envoyer un {{DOMxRef("MessageEvent")}} à cette fenêtre avec `targetWindow.postMessage()`. La fenêtre réceptrice est alors libre de [traiter cet évènement](/fr/docs/Web/API/Document_Object_Model/Events#enregistrer_des_gestionnaires_dévènements) selon ses besoins. Les arguments passés à `window.postMessage()` (_c'est-à-dire_ le «&nbsp;message&nbsp;») sont [exposés à la fenêtre réceptrice sur l'objet de l'évènement](#the_dispatched_event).

## Syntaxe

```js-nolint
postMessage(message)
postMessage(message, targetOrigin)
postMessage(message, targetOrigin, transfer)

postMessage(message, options)
```

### Paramètres

- `message`
  - : Les données à envoyer à l'autre fenêtre. Les données sont sérialisées en utilisant le {{DOMxRef("Web_Workers_API/Structured_clone_algorithm", "algorithme de clonage structuré", "", 1)}}. Cela signifie que vous pouvez transmettre une grande variété d'objets de données en toute sécurité à la fenêtre de destination sans avoir à les sérialiser vous-même.
- `targetOrigin` {{Optional_Inline}}
  - : Définie {{Glossary("Origin", "l'origine")}} que la fenêtre réceptrice doit avoir pour recevoir l'évènement. Pour que l'évènement soit envoyé, l'origine doit correspondre exactement (y compris le schéma, le nom d'hôte et le port). Si omis, il est par défaut à `"/"`, qui est l'origine appelant la méthode. Ce mécanisme permet de contrôler où les messages sont envoyés ; par exemple, si `postMessage()` était utilisé pour transmettre un mot de passe, il serait absolument crucial que cet argument soit une URI dont l'origine est la même que celle du destinataire prévu du message contenant le mot de passe, afin d'éviter l'interception du mot de passe par un tiers malveillant. `*` peut également être fourni, ce qui signifie que le message peut être envoyé à un écouteur avec n'importe quelle origine.
    > [!NOTE]
    > Toujours fournir un `targetOrigin` spécifique, et non `*`, si vous savez où le document de l'autre fenêtre doit se trouver. Ne pas fournir de cible spécifique pourrait divulguer des données à un site malveillant.
    >
    > Parce que les URL [`data:`](/fr/docs/Web/URI/Reference/Schemes/data) ont des origines opaques, pour envoyer des messages à un contexte avec une URL `data:`, vous devez définir `"*"`.
- `transfer` {{Optional_Inline}}
  - : Un [tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) optionnel [d'objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) pour transférer la propriété. La propriété de ces objets est donnée au côté de destination et ils ne sont plus utilisables du côté de l'envoi. Ces objets transférables doivent être attachés au message&nbsp;; sinon, ils seraient déplacés mais pas réellement accessibles à la réception.
- `options` {{Optional_Inline}}
  - : Un objet optionnel contenant les propriétés suivantes&nbsp;:
    - `transfer` {{Optional_Inline}}
      - : A la même signification que le paramètre `transfer`.
    - `targetOrigin` {{Optional_Inline}}
      - : A la même signification que le paramètre `targetOrigin`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## L'évènement envoyé

Une fenêtre (`window`) peut écouter les messages envoyés en exécutant le JavaScript suivant&nbsp;:

```js
window.addEventListener("message", (event) => {
  if (event.origin !== "http://exemple.org:8080") return;

  // …
}
```

Les propriétés du message envoyé sont&nbsp;:

- `data`
  - : L'objet passé depuis l'autre fenêtre.
- `origin`
  - : {{Glossary("Origin", "L'origine")}} de la fenêtre qui a envoyé le message au moment où `postMessage` a été appelée. Cette chaîne de caractères est la concaténation du protocole et de "://", du nom d'hôte s'il existe, et de ":" suivi d'un numéro de port si un port est présent et diffère du port par défaut pour le protocole donné. Des exemples d'origines typiques sont `https://exemple.org` (sous-entendu port `443`), `http://exemple.net` (sous-entendu port `80`), et `http://exemple.com:8080`. Notez que cette origine n'est _pas_ garantie d'être l'origine actuelle ou future de cette fenêtre, qui pourrait avoir été naviguée vers un emplacement différent depuis l'appel à `postMessage`.
- `source`
  - : Une référence à l'objet {{DOMxRef("window")}} qui a envoyé le message&nbsp;; vous pouvez utiliser ceci pour établir une communication dans les deux sens entre deux fenêtres ayant différentes origines.

## Problèmes de sécurité

**Si vous ne prévoyez pas de recevoir de messages depuis d'autres sites, _n'ajoutez pas_ de gestionnaire d'évènement pour les évènements `message`.** C'est un moyen sûr d'éviter les problèmes de sécurité.

Si vous prévoyez de recevoir des messages depuis d'autres sites, **vérifiez toujours l'identité de l'expéditeur·ice** à l'aide des propriétés `origin` et si possible `source`. Toute fenêtre (y compris, par exemple, `http://evil.exemple.com`) peut envoyer un message à toute autre fenêtre, et vous n'avez aucune garantie qu'un·e expéditeur·ice inconnu·e ne va pas envoyer de message malicieux. Cependant, même si vous vérifiez l'identité, vous devriez **toujours vérifier la syntaxe du message reçu**. Dans le cas contraire, une faille de sécurité dans le site auquel vous faites confiance peut ouvrir une vulnérabilité XSS dans votre propre site.

**Définissez toujours explicitement une origine de destination, jamais `*`, quand vous utilisez `postMessage` pour envoyer des données à d'autres fenêtres.** Un site malicieux peut changer l'adresse de la fenêtre à votre insu, et ainsi intercepter les données envoyées à l'aide de `postMessage`.

### Messagerie sécurisée en mémoire partagée

Si `postMessage()` lève une exception lorsqu'il est utilisé avec des objets {{JSxRef("SharedArrayBuffer")}}, vous devez vous assurer que votre site est correctement isolé entre sites. La mémoire partagée est protégée par deux en-têtes HTTP&nbsp;:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} avec `same-origin` comme valeur (protège votre origine contre les attaquant·e·s)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} avec `require-corp` ou `credentialless` comme valeur (protège les victimes de votre origine)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Pour vérifier si l'isolation entre origines a réussi, vous pouvez tester la propriété {{DOMxRef("Window.crossOriginIsolated")}} disponible dans les contextes de fenêtre et de worker&nbsp;:

```js
const monTravailleur = new Worker("worker.js");

if (crossOriginIsolated) {
  const tampom = new SharedArrayBuffer(16);
  monTravailleur.postMessage(tampom);
} else {
  const tampom = new ArrayBuffer(16);
  monTravailleur.postMessage(tampom);
}
```

## Exemples

```js
/*
 * Dans les scripts de la fenêtre A, avec A sur <http://exemple.com:8080>:
 */

const popup = window.open(/* détails de la fenêtre affichée par dessus */);

// Quand la fenêtre affichée par dessus est chargée, si pas bloquée par un bloqueur de popups:

// Ceci ne fait rien, en supposant que la fenêtre n'a pas changé d'adresse.
popup.postMessage(
  "L'utilisateur est 'bob' et le mot de passe est 'secret'",
  "https://secure.exemple.net",
);

// Ceci va planifier l'envoi d'un message à la fenêtre affichée par dessus, en supposant que
// la fenêtre n'a pas changé d'adresse.
popup.postMessage("bonjour là-bas !", "http://exemple.org");

window.addEventListener("message", (event) => {
  // Faisons-nous confiance à l'expéditeur de ce message ? (il pourrait être
  // différent de la fenêtre que nous avons ouverte au départ, par exemple).
  if (event.origin !== "http://exemple.org") return;

  // event.source est la fenêtre affichée par dessus
  // event.data est "bonjour à vous aussi ! la réponse secrète est : rheeeeet !"
});
```

```js
/*
 * Dans les scripts de la fenêtre affichée par dessus, sur <http://exemple.org>:
 */

// Appelée quelques instants après que postMessage a été appelée
window.addEventListener("message", (event) => {
  // Faisons-nous confiance à l'expéditeur de ce message ?
  if (event.origin !== "http://exemple.com:8080") return;

  // event.source est window.opener
  // event.data est "bonjour là-bas !"

  // Supposant que vous avez vérifié l'origine du message reçu
  // (ce que vous devriez faire en toutes circonstances),
  // un moyen pratique de répondre à un message est d'appeler postMessage
  // sur event.source et fournir event.origin comme targetOrigin.
  event.source.postMessage(
    "bonjour à vous aussi !  la réponse secrète est : rheeeeet !",
    event.origin,
  );
});
```

### Notes

Toute fenêtre peut accéder à cette méthode sur toute autre fenêtre, à tout moment, peu importe l'adresse du document dans la fenêtre, pour y envoyer un message. Par conséquent, tout gestionnaire d'évènement utilisé pour recevoir des messages **doit** d'abord vérifier l'identité de l'expéditeur du message, en utilisant les propriétés `origin` et si possible `source`. Cela ne peut pas être minimisé&nbsp;: **ne pas vérifier les propriétés `origin` et si possible `source` permet des attaques inter-site.**

De même qu'avec les scripts exécutés de manière asynchrone (timeouts, evènements générés par l'utilisateur·ice), il n'est pas possible pour l'appelant à `postMessage` de détecter quand un gestionnaire d'évènement écoutant des évènements envoyés par `postMessage` lance une exception.

Après l'appel de `postMessage()`, l'objet {{DOMxRef("MessageEvent")}} sera dispatché _uniquement après que tous les contextes d'exécution en attente ont été terminés_. Par exemple, si `postMessage()` est invoqué dans un gestionnaire d'évènement, ce gestionnaire d'évènement s'exécutera jusqu'à son terme, tout comme les autres gestionnaires restants pour le même évènement, avant que le {{DOMxRef("MessageEvent")}} ne soit dispatché.

La valeur de la propriété `origin` de l'évènement envoyé n'est pas affectée par la valeur actuelle de `document.domain` dans la fenêtre appelante.

Pour les noms d'hôte IDN uniquement, la valeur de la propriété `origin` n'est pas systématiquement Unicode ou punycode&nbsp;; pour la plus grande compatibilité, testez à la fois les valeurs IDN et punycode quand vous utilisez cette propriété si vous attendez des messages de sites IDN. Cette valeur sera systématiquement IDN à l'avenir, mais pour l'instant vous devriez gérer à la fois les formes IDN et punycode.

La valeur de la propriété `origin` quand la fenêtre expéditrice contient une URL [`javascript:`](/fr/docs/Web/URI/Reference/Schemes/javascript) ou [`data:`](/fr/docs/Web/URI/Reference/Schemes/data)` est l'origin du script qui a chargé cette URL.

### Utiliser `window.postMessage()` dans les extensions {{Non-standard_Inline}}

`window.postMessage` est disponible depuis le JavaScript exécuté en code chrome (par exemple, dans les extensions et le code privilégié), mais la propriété `source` de l'évènement envoyé est toujours `null` par mesure de sécurité. (Les autres propriétés ont leurs valeurs usuelles.)

Il n'est pas possible pour les scripts de contenu ou de contexte web de définir un `targetOrigin` pour communiquer directement avec une extension (soit le script d'arrière-plan ou un script de contenu). Les scripts web ou de contenu _peuvent_ utiliser `window.postMessage` avec un `targetOrigin` de `"*"` pour diffuser à tous les auditeur·ice·s, mais cela est déconseillé, car une extension ne peut pas être certaine de l'origine de tels messages, et d'autres auditeur·ice·s (y compris ceux que vous ne contrôlez pas) peuvent écouter.

Les scripts de contenu devraient utiliser {{WebExtAPIRef("runtime.sendMessage")}} pour communiquer avec le script d'arrière-plan. Les scripts de contexte web peuvent utiliser des évènements personnalisés pour communiquer avec les scripts de contenu (avec des noms d'évènements générés aléatoirement, si nécessaire, pour éviter l'espionnage depuis la page invitée).

Enfin, poster un message à une page à une URL `file:` requiert actuellement que l'argument `targetOrigin` soit `"*"`. `file://` ne peut pas être utilisé comme restriction de sécurité&nbsp;; cette restriction pourrait être modifiée à l'avenir.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Document.domain")}}
- L'interface {{DOMxRef("CustomEvent")}}
- L'interface {{DOMxRef("BroadcastChannel")}} — Pour la communication entre origines identiques.
