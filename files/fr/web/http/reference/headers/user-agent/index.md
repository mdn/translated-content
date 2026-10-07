---
title: En-tête User-Agent
short-title: User-Agent
slug: Web/HTTP/Reference/Headers/User-Agent
l10n:
  sourceCommit: 0b852c3f5c46b69a57d23e860a833f6830951793
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`User-Agent`** est une chaîne de caractères caractéristique qui permet aux serveurs et aux pairs du réseau d'identifier l'application, le système d'exploitation, le fournisseur et/ou la version de {{Glossary("user agent", "l'agent utilisateur")}} effectuant la requête.

> [!WARNING]
> Voir [Détecter le navigateur en utilisant l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) pour les raisons pour lesquelles il est généralement déconseillé de fournir un contenu différent à différents navigateurs.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
User-Agent: <product> / <product-version> <comment>
```

Format commun pour les navigateurs web&nbsp;:

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### Directives

- `<product>`
  - : Un identifiant de produit — son nom ou son nom de code de développement.
- `<product-version>`
  - : Le numéro de version du produit.
- `<comment>`
  - : Un ou plusieurs commentaires contenant plus de détails. Par exemple, des informations sur les sous-produits.

## Réduction de `User-Agent`

L'information exposée dans l'en-tête `User-Agent` a historiquement soulevé des préoccupations en matière de [confidentialité](/fr/docs/Web/Privacy) — elle peut être utilisée pour identifier un agent utilisateur particulier, et peut donc être utilisée pour le {{Glossary("fingerprinting")}}. Pour atténuer ces préoccupations, les [navigateurs compatibles](#compatibilité_des_navigateurs) fournissent un ensemble réduit d'informations dans leur en-tête `User-Agent`, ainsi que dans les fonctionnalités API associées telles que {{DOMxRef("Navigator.userAgent")}}, {{DOMxRef("Navigator.appVersion")}} et {{DOMxRef("Navigator.platform")}}.

Par exemple, alors qu'auparavant la chaîne de caractères `User-Agent` pour Chrome fonctionnant sur Android pouvait ressembler à ceci&nbsp;:

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

Après la mise à jour de la réduction de l'en-tête `User-Agent`, elle ressemble maintenant à ceci&nbsp;:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

- La version de la plateforme est toujours une valeur fixe, dans ce cas, `Android 10`.
- Le modèle de l'appareil est toujours une valeur fixe, dans ce cas, `K`.
- Le numéro de version majeure de Chrome s'affiche correctement, mais les numéros de version mineure sont toujours affichés comme des zéros — `0.0.0`.

Les serveurs qui ont besoin de plus d'informations peuvent les demander avec les [indications d'agent utilisateur du client](/fr/docs/Web/HTTP/Guides/Client_hints). Après la connexion initiale, le serveur peut envoyer un en-tête de réponse {{HTTPHeader("Accept-CH")}} détaillant les éléments de données qu'il souhaite, et le client peut ensuite retourner les données avec les en-têtes [`Sec-CH-UA-*`](/fr/docs/Web/HTTP/Reference/Headers#indications_client_de_lagent_utilisateur). Ces informations peuvent également être accessibles par [l'API User-Agent Client Hints](/fr/docs/Web/API/User-Agent_Client_Hints_API).

Pour plus d'informations détaillées, y compris un guide pour récupérer des informations supplémentaires si nécessaire, consultez [la réduction de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/User-agent_reduction). Vous pouvez également trouver des exemple de chaîne de caractères de `User-Agent` réduit dans la section suivante.

## Chaîne de caractères d'agent utilisateur pour Firefox

Pour en savoir plus sur les chaînes de caractères d'agent utilisateur basées sur Firefox et Gecko, consultez la [référence des chaînes de caractères d'agent utilisateur de Firefox](/fr/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox). La chaîne de caractères d'agent utilisateur de Firefox se décompose en 4 composants&nbsp;:

```plain
Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version
```

1. `Mozilla/5.0` est le jeton général qui indique que le navigateur est compatible avec Mozilla. Pour des raisons historiques, presque tous les navigateurs l'envoient aujourd'hui.
2. **_platform_** décrit la plateforme native sur laquelle le navigateur s'exécute (Windows, Mac, Linux, Android, etc.) et indique s'il s'agit d'un téléphone mobile. Notez que **_platform_** peut se composer de plusieurs jetons séparés par `;`. Consultez les détails et exemples ci-dessous.
3. **rv:_gecko-version_** indique la version de Gecko (par exemple «&nbsp;17.0&nbsp;»). Dans les navigateurs récents, **_gecko-version_** est identique à **_firefox-version_**.
4. **_Gecko/gecko-trail_** indique que le navigateur repose sur Gecko. (Sur ordinateur, **_gecko-trail_** est toujours la suite fixe `20100101`.)
5. **_Firefox/firefox-version_** indique que le navigateur est Firefox et fournit sa version (par exemple «&nbsp;17.0&nbsp;»).

Exemples sur ordinateur&nbsp;:

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0

Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chaîne de caractères d'agent utilisateur pour Chrome

La chaîne de caractères d'agent utilisateur de Chrome (ou des moteurs basés sur Chromium/Blink) est similaire à celle de Firefox. Pour des raisons de compatibilité, elle ajoute des chaînes de caractères comme `KHTML, like Gecko` et `Safari`. Elle ajoute `"CriOS/<version>"` sur iPhone.

Exemples sur ordinateur&nbsp;:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
```

Exemple sur téléphone Android&nbsp;:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

## Chaîne de caractères d'agent utilisateur pour Opera

Le navigateur Opera repose également sur le moteur Blink, ce qui explique pourquoi sa suite de caractères d'agent utilisateur ressemble presque à celle de Chrome, mais ajoute `"OPR/<version>"` sur ordinateur et Android, et `"OPT/<version>"` sur iPhone. Pour les versions préliminaires, Opera inclut également une description de l'édition du navigateur entre parenthèses, par exemple `(Edition developer)`.

Exemples sur ordinateur&nbsp;:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 OPR/124.0.0.0 (Edition developer)

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 OPR/124.0.0.0 (Edition developer)
```

Exemple sur téléphone Android&nbsp;:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 OPR/92.0.0.0
```

## Chaîne de caractères d'agent utilisateur pour Microsoft Edge

Le navigateur Edge repose également sur le moteur Blink. Il ajoute `"Edg/<version>"` sur les plateformes pour ordinateur, `"EdgA/<version>"` sur Android et `"EdgiOS/<version>"` sur iPhone.

Exemples sur ordinateur&nbsp;:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0
```

Exemple sur téléphone Android&nbsp;:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36 EdgA/141.0.0.0
```

## Chaîne de caractères d'agent utilisateur pour Safari

Safari repose sur le moteur WebKit, mais sa suite de caractères d'agent utilisateur ressemble également à celle des navigateurs basés sur Blink. Elle comprend généralement `Version/xxx` avant la version de compilation réelle du moteur pour indiquer la version du navigateur, qui diffère de celle des navigateurs basés sur Blink. Dans le cas de Safari sur iPhone (Mobile), la suite comprend également `Mobile`.

> [!NOTE]
> À la date de rédaction, les navigateurs pour iPhone qui ne sont pas d'Apple (comme Firefox, Chrome et Edge) reposent toujours sur WebKit. Leurs suites de caractères d'agent utilisateur ressemblent donc à celle de Safari.

Exemple sur ordinateur&nbsp;:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15
```

Exemple sur iPhone&nbsp;:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1
```

## Exemples avant la réduction de l'agent utilisateur

Cette section présente des exemples de suites de caractères d'agent utilisateur d'anciennes versions de navigateurs, avant l'introduction de la réduction de l'agent utilisateur&nbsp;:

Google Chrome&nbsp;:

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

Microsoft Edge&nbsp;:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

Opera&nbsp;:

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Les anciennes versions d'Opera basées sur Presto utilisent une structure de ce type&nbsp;:

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00

Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Chaînes de caractères d'agent utilisateur des robots d'exploration et des robots

### Exemples

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Chaînes de caractères d'agent utilisateur des bibliothèques et des outils réseau

### Exemples

```plain
curl/7.64.1
```

```plain
PostmanRuntime/7.26.5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Détecter l'agent utilisateur, historique et liste de vérification <sup>(angl.)</sup>](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Référence des suites de caractères d'agent utilisateur de Firefox](/fr/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
- [Détecter le navigateur à l'aide de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [Indications du client](/fr/docs/Web/HTTP/Guides/Client_hints)
