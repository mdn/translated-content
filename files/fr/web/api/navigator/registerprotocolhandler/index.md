---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
translation_of: Web/API/Navigator/registerProtocolHandler
browser-compat: api.Navigator.registerProtocolHandler
---
{{APIRef("HTML DOM")}}{{securecontext_header}}

La méthode **`registerProtocolHandler()`**, rattachée à l'interface **[`Navigator`](/fr/docs/Web/API/Navigator)**, permet aux sites de déclarer leur capacité à gérer certains schémas d'URL particuliers (autrement dit les protocoles).

Ainsi, cette API permettra aux sites de webmail d'ouvrir les URL `mailto:`, ou aux sites VoIP d'ouvrir des URL `tel:`.

## Syntaxe

```js
registerProtocolHandler(schema, url)
registerProtocolHandler(schema, url, titre)
```

> **Note :** La version avec l'argument déprécié `titre` est recommandée pour des raisons de compatibilité. Voir les informations sur les paramètres ci-après.

### Paramètres

- `schema`

  - : Une chaîne de caractères contenant [les schémas autorisés](#schémas_autorisés) pour le protocole que le site souhaite gérer. On peut ainsi, par exemple, gérer les liens vers des messages SMS en passant le schéma `"sms"`.

- `url`

  - : Une chaîne de caractères qui contient l'URL du gestionnaire.
    **Cette URL doit inclure `%s`**, comme emplacement à remplacer avec l'URL [échappée](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) à gérer.

    > **Note :** L'URL du gestionnaire doit également utiliser le schéma `https`. Les anciens navigateurs prenaient aussi en charge `http`.

- `titre` {{deprecated_inline}}

  - : Un titre, lisible par un humain, pour le gestionnaire.
    **Cette valeur sera affichée à l'utilisatrice ou à l'utilisateur**, par exemple pour lui demander «&nbsp;Autorisez-vous ce site à gérer les liens \[schema]&nbsp;?&nbsp;» ou pour lister les gestionnaires enregistrés dans les paramètres du navigateur.

    > **Note :** Le titre a été retiré de la spécification en raison des risques d'usurpation.
    > Ce paramètre `titre` devrait toujours être défini, car certains navigateurs **le considèrent obligatoire** (voir [le tableau de compatibilité qui suit](#compatibilité_des_navigateurs)).
    > Les navigateurs qui implémentent la spécification à jour accepteront probablement ce paramètre supplémentaire en l'ignorant.

### Exceptions

- [`SecurityError`](/fr/docs/Web/API/DOMException#noms_derreur)
  - : L'agent utilisateur a bloqué l'enregistrement. Cela peut se produire si&nbsp;:

    - Le schéma enregistré (le protocole) est invalide, par exemple parce qu'il est déjà géré par le navigateur (`https:`, `about:`, etc.)
    - [L'origine](/fr/docs/Glossary/Origin) de l'URL du gestionnaire ne correspond pas à l'origine de la page qui utilise cette API.
    - Cette fonction doit être appelée depuis un contexte sécurisé pour le navigateur.
    - Le navigateur requiert que l'URL du gestionnaire soit communiquée via HTTPS.

- [`SyntaxError`](/fr/docs/Web/API/DOMException#noms_derreur)
  - : L'emplacement de substitution marqué par `%s` est absent de l'URL de gestion.

## Schémas autorisés

Pour des raisons de sécurité, `registerProtocolHandler()` restreint les schémas qui peuvent être enregistrés.

Un **schéma personnalisé** (<i lang="en">custom scheme</i>) peut être enregistré tant que&nbsp;:

- Le nom du schéma personnalisé commence par `web+`
- Le nom du schéma personnalisé inclut au moins une lettre après le préfixe `web+`
- Le nom du schéma personnalisé ne contient que des lettres ASCII en minuscules.

On peut voir un [exemple](#exemple) après avec `web+burger`, qui obéit à ces contraintes.

Le schéma peut aussi être l'une des valeurs suivantes&nbsp;:

- `bitcoin`
- `ftp`
- `ftps`
- `geo`
- `im`
- `irc`
- `ircs`
- `magnet`
- `mailto`
- `matrix`
- `mms`
- `news`
- `nntp`
- `openpgp4fpr`
- `sftp`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tel`
- `urn`
- `webcal`
- `wtai`
- `xmpp`

<!-- Cette liste devrait correspondre à : https://html.spec.whatwg.org/multipage/system-state.html#safelisted-scheme -->

## Exemple

Si votre site est `burgers.example.com`, vous pouvez enregistrer un gestionnaire de protocole afin qu'il puisse gérer les liens `web+burger:`, de cette façon&nbsp;:

```js
navigator.registerProtocolHandler("web+burger",
                                  "https://burgers.example.com/?burger=%s",
                                  "Gestionnaire de burger");
                                  // L'argument du titre est inclus
                                  // pour des raisons de compatibilité
```

Cette instruction crée un gestionnaire qui permet que des liens `web+burger:` envoie les utilisatrices et utilisateurs vers votre site, en insérant l'URL du burger demandée dans l'emplacement indiqué par `%s`.

Ce script devra être exécuté depuis la même origine que l'URL du gestionnaire (c'est-à-dire depuis une page située sous `https://burgers.example.com`). L'URL du gestionnaire devra être avec `http` ou `https`.

La personne recevra une notification indiquant que le code a demandé à enregistrer le gestionnaire de protocole afin qu'elle puisse décide ou non d'autoriser cet enregistrement. Voir la capture d'écran ci-après pour un exemple avec `google.co.uk`&nbsp;:

![Une notification de navigateur qui demande "Add Burger handler (www.google.co.uk) as an application for burger links?", et qui fournit un bouton "Add Application" et un autre de fermeture pour ignorer la requête.](protocolregister.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestionnaires de protocoles web](/fr/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers)
- [Améliorer le Web fédéré avec RegisterProtocolHandler (en anglais)](https://blog.mozilla.com/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) (Mozilla Webdev)
