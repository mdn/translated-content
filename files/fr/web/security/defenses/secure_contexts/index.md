---
title: Contextes sécurisés (Secure Contexts)
short-title: Contextes sécurisés
slug: Web/Security/Defenses/Secure_Contexts
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Un **contexte sécurisé** (<i lang="en">secure context</i> en anglais) est une fenêtre de navigation (`Window`) ou un `Worker` pour lequel certains standards minimaux d'authentification et de confidentialité sont respectés. De nombreuses API Web et fonctionnalités ne sont accessibles que dans un contexte sécurisé. L'objectif principal des contextes sécurisés est d'empêcher les [attaquant·es de type MITM <sup>(angl.)</sup>](https://fr.wikipedia.org/wiki/Attaque_de_l%27homme_du_milieu) d'accéder à des API puissantes qui pourraient compromettre davantage la victime d'une attaque.

## Pourquoi certaines fonctionnalitées devraient être limitées ?

Certaines APIs du web peuvent donner beaucoup de pouvoir à un attaqueur, lui permettant par exemple:

- Entrer dans la vie privée d'un utilisateur.
- Avoir accès à l'ordinateur d'un utilisateur.
- Avoir accès à des données (comme l'identité de l'utilisateur).

## À quel moment un context est-il considéré comme sécurisé ?

Un contexte est considéré comme sécurisé lorsqu'il respecte certains standards minimaux d'authentification et de confidentialité définis dans la [spécification Secure Contexts <sup>(angl.)</sup>](https://w3c.github.io/webappsec-secure-contexts/). Un document particulier est considéré comme étant dans un contexte sécurisé lorsqu'il est le [document actif <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/browsers.html#active-document) d'un [contexte de navigation de premier niveau <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (c'est-à-dire une fenêtre ou un onglet) qui est lui-même sécurisé.

Par exemple, même pour un document délivré via TLS dans un élément HTML {{HTMLElement("iframe")}}, son contexte **n'est pas** considéré comme sécurisé si un de ses ancêtres n'a pas aussi été délivré via TLS.

Cependant, il est important de noter que si un contexte non sécurisé ouvre une nouvelle fenêtre (avec ou sans l'attribut [noopener](/fr/docs/Web/API/Window/open)), le fait que l'ouvreur ne soit pas sécurisé n'a aucun effet sur le statut sécurisé de la nouvelle fenêtre. En effet, la détermination du caractère sécurisé d'un document ne dépend que de son contexte de navigation de premier niveau — et non du contexte qui a servi à le créer.

Pour qu'une ressource non locale soit considérée comme sécurisée, elle doit remplir les critères suivants&nbsp;:

- Elle doit être servie via une URL `https://`.
- Les propriétés de sécurité du canal réseau utilisé pour la délivrer ne doivent pas être considérées comme obsolètes.

## Origines potentiellement dignes de confiance

Une **origine potentiellement digne de confiance** est une origine que le navigateur peut généralement considérer comme fiable pour la sécurité des données, même si, strictement parlant, elle ne remplit pas tous les critères d'un contexte sécurisé.

Les ressources servies localement, comme celles avec les URL `http://127.0.0.1`, `http://localhost` et `http://*.localhost` (par exemple, `http://dev.whatever.localhost/`), ne sont pas délivrées en HTTPS, mais peuvent être considérées comme sécurisées car elles sont sur le même appareil que le navigateur. Elles sont donc potentiellement dignes de confiance. Cela est pratique pour les développeur·euses qui testent des applications en local.

Il en va de même, en général, pour les URL `file://`.

Les URL [WebSocket](/fr/docs/Web/API/WebSockets_API) sécurisées (`"wss://"`) sont également considérées comme potentiellement dignes de confiance.

Les schémas d'URL spécifiques à un éditeur, comme `app://` ou `chrome-extension://`, ne sont pas considérés comme dignes de confiance par tous les navigateurs, mais peuvent l'être par ceux de l'éditeur concerné.

> [!NOTE]
> Firefox 84 et versions ultérieures prennent en charge les URL `http://localhost` et `http://*.localhost` comme origines dignes de confiance (ce n'était pas le cas auparavant, car `localhost` n'était pas garanti de pointer vers une adresse locale/boucle).

## Détection des fonctionnalités

Les pages peuvent utiliser la détection de fonctionnalités pour vérifier si elles sont dans un contexte sécurisé ou non, en utilisant le booléen {{DOMxRef("Window.isSecureContext")}} ou {{DOMxRef("WorkerGlobalScope.isSecureContext")}}, disponible dans l'environnement global.

```js
if (window.isSecureContext) {
  // La page est dans un contexte sécurisé, les service workers sont disponibles
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Fonctionnalités limitées aux contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) — liste des fonctionnalités disponibles uniquement dans les contextes sécurisés
- Les propriétés JavaScript {{DOMxRef("Window.isSecureContext")}} et {{DOMxRef("WorkerGlobalScope.isSecureContext")}}
- <https://permission.site> — Un site permettant de vérifier quelles permissions d'API sont contrôlées par votre navigateur, en HTTP et HTTPS
- L'en-tête HTTP [Strict-Transport-Security](/fr/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
