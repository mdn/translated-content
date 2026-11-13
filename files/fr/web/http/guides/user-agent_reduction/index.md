---
title: Réduction de l'agent utilisateur
slug: Web/HTTP/Guides/User-agent_reduction
l10n:
  sourceCommit: 2ab902d9eec2f5a93d1f666234371ca77e93c470
---

La **réduction de l'agent utilisateur** est une initiative largement acceptée par les navigateurs pour réduire la quantité d'informations sensibles à la vie privée fournies dans les chaînes de caractères d'agent utilisateur (<abbr>AU</abbr>).

Cet article montre les différences dans les chaînes de caractères d'agent utilisateur résultant de la réduction de l'agent utilisateur, et explique comment vous pouvez accéder à la fois aux informations AU expurgées et supplémentaires lorsque c'est nécessaire.

## Contexte

La chaîne de caractères de l'agent utilisateur (<abbr>AU</abbr>) — disponible dans l'en-tête HTTP {{HTTPHeader("User-Agent")}} et dans des fonctionnalités API associées telles que {{DOMxRef("Navigator.userAgent")}}, {{DOMxRef("Navigator.appVersion")}} et {{DOMxRef("Navigator.platform")}} — permet aux serveurs et aux pairs du réseau d'identifier l'application, le système d'exploitation, le fournisseur et/ou la version de {{Glossary("user agent", "l'agent utilisateur")}} à l'origine de la requête.

### Détection du navigateur

Théoriquement, la chaîne de caractères d'agent utilisateur est utile pour détecter le navigateur et fournir du code pour contourner les bogues spécifiques au navigateur ou le manque de prise en charge des fonctionnalités. Cependant, c'est **peu fiable** et **n'est pas recommandé**&nbsp;:

- Les futurs navigateurs corrigent les bogues et ajoutent la prise en charge de nouvelles fonctionnalités, de sorte que votre code de détection du navigateur doit être régulièrement mis à jour pour éviter d'exclure les navigateurs qui prennent réellement en charge les fonctionnalités que vous testez. La [détection des fonctionnalités](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection) est une stratégie beaucoup plus fiable.
- Vous n'avez vraiment aucune garantie que l'agent utilisateur annoncé par cette propriété est réellement celui dans lequel votre site est chargé. Les fournisseurs de navigateurs peuvent essentiellement faire ce qu'ils veulent avec la chaîne de caractères d'agent utilisateur, et historiquement, ils retournaient des valeurs fausses à partir de telles propriétés afin de ne pas être exclus de certains sites Web.
- Certains navigateurs permettent aux utilisateur·ice·s de modifier la valeur de ce champ s'ils le souhaitent (**usurpation d'agent utilisateur**).

Les stratégies suivantes sont beaucoup plus fiables pour contourner les bogues et la prise en charge différente des navigateurs&nbsp;:

- [Détection des fonctionnalités](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection)&nbsp;: Détecter la prise en charge d'une fonctionnalité, plutôt que la version du navigateur.
- [Amélioration progressive](/fr/docs/Glossary/Progressive_Enhancement)&nbsp;: Fournir une base de contenu et de fonctionnalités essentielles au plus grand nombre d'utilisateur·ice·s possible, tout en offrant la meilleure expérience possible aux navigateurs capables d'exécuter tout le code requis.

Voir également [Détection du navigateur à l'aide de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) pour plus d'informations sur les raisons pour lesquelles il est généralement déconseillé de fournir un contenu différent à différents navigateurs.

### Problèmes de confidentialité

De plus, les informations exposées dans la chaîne de caractères d'agent utilisateur ont historiquement soulevé des préoccupations en matière de [confidentialité](/fr/docs/Web/Privacy) — elles peuvent être utilisées pour identifier un agent utilisateur particulier, et peuvent donc être utilisées pour {{Glossary("fingerprinting", "l'identité numérique")}}.

Pour atténuer ces préoccupations, les [navigateurs compatibles](/fr/docs/Web/HTTP/Reference/Headers/User-Agent#compatibilité_des_navigateurs) mettent en œuvre la réduction de l'agent utilisateur, qui met à jour l'en-tête `User-agent` et les fonctionnalités API associées pour fournir un ensemble d'informations réduit.

## Modifier la chaîne de caractères de l'agent utilisateur après réduction

Dans les [navigateurs compatibles](/fr/docs/Web/HTTP/Reference/Headers/User-Agent#compatibilité_des_navigateurs), la réduction de l'agent utilisateur supprime trois informations de la chaîne de caractères d'agent utilisateur — la version exacte de la plateforme/OS, le modèle de l'appareil et la version mineure du navigateur.

Regardons un exemple pour voir à quoi cela ressemble. Auparavant, la chaîne de caractères d'agent utilisateur pour Chrome fonctionnant sur Android peut ressembler à ceci&nbsp;:

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

Après la mise à jour de la réduction de l'agent utilisateur, elle ressemble maintenant à ceci&nbsp;:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

Les sections ci-dessous fournissent plus de détails sur chacun des changements de la chaîne de caractères de l'agent utilisateur.

### Version de la plateforme/OS et modèle de l'appareil

La version de la plateforme et le modèle de l'appareil sont toujours représentés par des valeurs fixes&nbsp;:

- `Android 10; K` on Android.
- `Macintosh; Intel Mac OS X 10_15_7` on macOS.
- `Windows NT 10.0; Win64; x64` on Windows.
- `X11; CrOS x86_64 14541.0.0` on ChromeOS.
- `X11; Linux x86_64` on Linux.

### Version mineure du navigateur

Le numéro de version majeure du navigateur s'affiche correctement, mais les numéros de version mineure s'affichent toujours comme des zéros — `0.0.0`.

## Demander des informations sur l'agent utilisateur avec les indications du client

Vous avez peut-être encore du code qui repose sur des données détaillées de la chaîne de caractères de l'agent utilisateur, et qui ne peut pas être adapté pour utiliser la détection de fonctionnalités ou l'amélioration progressive. Citons par exemple la journalisation détaillée, les mesures de prévention de la fraude ou un site d'aide logicielle proposant un contenu différent en fonction du type d'appareil de l'utilisateur·ice.

Si tel est le cas, vous pouvez toujours accéder aux données détaillées de la chaîne de caractères de l'agent utilisateur à l'aide des en-têtes [`Sec-CH-UA-*`](/fr/docs/Web/HTTP/Reference/Headers#indications_client_pour_lagent_utilisateur) (également appelés **indications client de l'agent utilisateur**). Ces en-têtes offrent un moyen plus sûr et plus respectueux de la vie privée d'envoyer ces informations, car ce sont les serveurs qui doivent choisir les informations qu'ils souhaitent recevoir, plutôt que de les recevoir systématiquement par le biais de la chaîne de caractères `User-Agent`. Ils permettent également d'accéder à un éventail plus large d'informations.

Pour plus d'informations, consultez la page [Indications du client de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints).

## Accéder aux indications du client avec JavaScript

[L'API d'indications du client de l'agent utilisateur](/fr/docs/Web/API/User-Agent_Client_Hints_API) vous permet d'accéder aux informations des indications du client grâce à JavaScript. La propriété {{DOMxRef("Navigator.userAgentData")}} permet d'accéder à l'objet {{DOMxRef("NavigatorUAData")}}, qui contient des propriétés représentant les indications client à faible entropie.

Pour accéder aux indications à haute entropie comme `Sec-CH-UA-Model` et `Sec-CH-UA-Form-Factors`, vous devez utiliser la méthode {{DOMxRef("NavigatorUAData.getHighEntropyValues()")}}.

Pour plus d'informations, consultez la page [API d'indications du client de l'agent utilisateur](/fr/docs/Web/API/User-Agent_Client_Hints_API).

## Voir aussi

- L'en-tête {{HTTPHeader("User-Agent")}}
- Les propriétés API {{DOMxRef("Navigator.userAgent")}}, {{DOMxRef("Navigator.appVersion")}} et {{DOMxRef("Navigator.platform")}}
- [Les indications du client HTTP](/fr/docs/Web/HTTP/Guides/Client_hints)
- [Implémenter la détection de fonctionnalités](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [https://developer.chrome.com/docs/privacy-security/user-agent-client-hints <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) sur developer.chrome.com (2020)
