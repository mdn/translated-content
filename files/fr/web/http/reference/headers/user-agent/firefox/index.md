---
title: Référence de la chaîne de caractères d'agent utilisateur de Firefox
short-title: Chaîne de caractères d'agent utilisateur de Firefox
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 0bd99260a605fec40b453f2e6178f15b0b2a6c03
---

Ce document décrit la chaîne de caractères d'agent utilisateur utilisée dans Firefox 4 et les versions ultérieures, ainsi que dans les applications basées sur Gecko 2.0 et les versions ultérieures. Pour une répartition des modifications apportées à la chaîne de caractères dans Gecko 2.0, voir [la chaîne de caractères d'agent utilisateur finale pour Firefox 4 <sup>(angl.)</sup>](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (article de blog). Voir également ce document sur [la détection de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) et cet [article de blog Hacks <sup>(angl.)</sup>](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## Forme générale

La chaîne de caractères d'agent utilisateur de Firefox elle-même se décompose en quatre composants&nbsp;:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` est le jeton général qui indique que le navigateur est compatible avec Mozilla, et il est commun à presque tous les navigateurs aujourd'hui.
- `platform` décrit la plateforme native sur laquelle le navigateur s'exécute (par exemple, Windows, Mac, Linux ou Android), et si c'est un téléphone mobile ou non. Les téléphones Firefox OS indiquent `Mobile`&nbsp;; le web est la plateforme. Notez que `platform` peut se composer de plusieurs jetons séparés par des `;`. Voir ci-dessous pour plus de détails et d'exemples.

<!-- -->

- `rv:gecko-version` indique la version de publication de Gecko (par exemple `17.0`).
- `Gecko/gecko-trail` indique que le navigateur est basé sur Gecko.
- Sur ordinateur, `gecko-trail` est la chaîne de caractères fixe `20100101`.
- `Firefox/firefox-version` indique que le navigateur est Firefox, et fournit la version (par exemple `17.0`).
- À partir de Firefox 10 sur mobile, `gecko-trail` est identique à `firefox-version`.

> [!NOTE]
> La manière recommandée de détecter les navigateurs basés sur Gecko (si vous _devez_ détecter le moteur du navigateur au lieu d'utiliser la détection de fonctionnalités) est de vérifier la présence des chaînes de caractères `Gecko` et `rv:`, car certains autres navigateurs incluent un jeton `like Gecko`.

Pour d'autres produits basés sur Gecko, la chaîne de caractères peut prendre l'une des deux formes, les jetons ayant la même signification sauf indication contraire ci-dessous&nbsp;:

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail app-name/app-version`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version app-name/app-version`

- `app-name/app-version` indique le nom et la version de l'application. Par exemple, cela peut être `Camino/2.1.1`, ou `SeaMonkey/2.7.1`.
- `Firefox/firefox-version` est un jeton de compatibilité optionnel que certains navigateurs basés sur Gecko peuvent choisir d'incorporer, afin d'obtenir une compatibilité maximale avec les sites Web qui s'attendent à Firefox. `firefox-version` représente généralement la version équivalente de Firefox correspondant à la version de Gecko donnée. Certains navigateurs basés sur Gecko peuvent ne pas choisir d'utiliser ce jeton&nbsp;; pour cette raison, les détecteurs doivent rechercher Gecko — et non Firefox&nbsp;!

## Indicateurs pour mobile et tablette

La partie `platform` de la chaîne de caractères de l'agent utilisateur indique si Firefox s'exécute sur un appareil de taille téléphone ou tablette. Lorsque Firefox s'exécute sur un appareil ayant le facteur de forme téléphone, il y a un jeton `Mobile;` dans la partie `platform` de la chaîne de caractères de l'agent utilisateur. Lorsque Firefox s'exécute sur un appareil tablette, il y a à la place un jeton `Tablet;` dans la partie `platform` de la chaîne de caractères de l'agent utilisateur. Par exemple&nbsp;:

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> Les numéros de version ne sont pas pertinents. Évitez de déduire des informations basées sur ceux-ci.

La manière recommandée de cibler le contenu en fonction du facteur de forme d'un appareil est d'utiliser les requêtes média CSS. Cependant, si vous utilisez la détection de l'agent utilisateur pour cibler le contenu en fonction du facteur de forme d'un appareil, veuillez rechercher **Mobi** (pour inclure Opera Mobile, qui utilise «&nbsp;Mobi&nbsp;») pour le facteur de forme téléphone et ne **pas** supposer de corrélation entre «&nbsp;Android&nbsp;» et le facteur de forme de l'appareil. De cette manière, votre code fonctionne si/lorsque Firefox est disponible sur d'autres systèmes d'exploitation pour téléphones/tablettes ou si Android est utilisé pour les ordinateurs portables. De plus, veuillez utiliser la détection tactile pour trouver les appareils tactiles plutôt que de rechercher «&nbsp;Mobi&nbsp;» ou «&nbsp;Tablet&nbsp;», car il peut y avoir des appareils tactiles qui ne sont pas des tablettes.

> [!NOTE]
> Les appareils Firefox OS s'identifient sans indication de système d'exploitation&nbsp;; par exemple&nbsp;: «&nbsp;Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0&nbsp;». Le Web est la plateforme.

## Windows

Les agents utilisateurs de Windows présentent les variantes suivantes, où _x.y_ correspond à la version de Windows NT (par exemple, Windows NT 6.1).

| Version de Windows             | Chaîne de caractères d'agent utilisateur Gecko                                    |
| ------------------------------ | --------------------------------------------------------------------------------- |
| Windows NT avec processeur x86 | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT avec processeur x64 | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Un processeur aarch64 est signalé comme x86_64 sur Windows 11 et comme x86 sur Windows 10 (car ce système ne prend pas en charge l'émulation de x64).
> Consultez [Bugzilla #1763310](https://bugzil.la/1763310).

## macOS

Ici, _x.y_ correspond à la version de macOS (par exemple, macOS 10.15). À partir de Firefox 87, Firefox limite le numéro de version de macOS signalé à 10.15, si bien que macOS 11.0 Big Sur et les versions ultérieures sont signalés comme «&nbsp;10.15&nbsp;» dans la chaîne de caractères d'agent utilisateur. Les Mac à processeur ARM sont signalés comme «&nbsp;Intel&nbsp;» dans la chaîne de caractères d'agent utilisateur.

| Version de Mac OS X                 | Chaîne de caractères d'agent utilisateur Gecko                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X sur x86, x86_64 ou aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X sur PowerPC                | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux est une plateforme plus diversifiée. Votre distribution Linux peut inclure une extension qui modifie votre agent utilisateur. Quelques exemples courants figurent ci-dessous.

| Version de Linux                       | Chaîne de caractères d'agent utilisateur Gecko                       |
| -------------------------------------- | -------------------------------------------------------------------- |
| Ordinateur Linux sur processeur i686   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Ordinateur Linux sur processeur x86_64 | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Dans Firefox 127.0 et les versions ultérieures, x86 32 bits est désormais signalé comme x86_64 dans le User-Agent de Firefox, {{DOMxRef("navigator.platform")}} et {{DOMxRef("navigator.oscpu")}} (consultez les [notes de version de Firefox 127.0](https://www.firefox.com/fr/firefox/127.0/releasenotes/)).

## Firefox pour Android

Firefox pour Android inclut la version d'Android dans le jeton _platform_. Pour améliorer l'interopérabilité, lorsque le navigateur s'exécute sur une version antérieure à 4, il signale la version 4.4. Les versions 4 et ultérieures d'Android signalent leur numéro de version exact. Notez que la même version de Gecko, avec les mêmes fonctionnalités, est fournie pour toutes les versions d'Android.

| Facteur de forme | Chaîne de caractères d'agent utilisateur Gecko                     |
| ---------------- | ------------------------------------------------------------------ |
| Téléphone        | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablette         | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus pour Android

Depuis la version 1, Focus repose sur Android WebView et utilise le format de chaîne de caractères d'agent utilisateur suivant&nbsp;:

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Les versions pour tablette sur WebView reprennent les versions mobiles, mais ne contiennent pas le jeton `Mobile`.

À partir de la version 6, vous pouvez choisir d'utiliser une version de Focus pour Android basée sur GeckoView au moyen d'une préférence masquée&nbsp;: elle utilise une chaîne de caractères d'agent utilisateur GeckoView pour annoncer sa compatibilité avec Gecko.

| Version de Focus (moteur de rendu) | Chaîne de caractères d'agent utilisateur                                                                                               |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView mobile)               | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView tablette)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                    | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

L'agent utilisateur de Klar est identique à celui de [Focus](#focus_pour_ios).

## Firefox pour iOS

Firefox pour iOS utilise la chaîne de caractères d'agent utilisateur Mobile Safari par défaut, avec un jeton **FxiOS/\<version>** supplémentaire sur iPod et iPhone, comme [Chrome pour iOS s'identifie <sup>(angl.)</sup>](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md).

| Facteur de forme | Chaîne de caractères d'agent utilisateur de Firefox pour iOS                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod             | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone           | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad             | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Sur iPad, la chaîne de caractères d'agent utilisateur apparaît comme celle de Safari. Pour différents problèmes liés à l'absence de `FxiOS` sur iOS, consultez [mozilla-mobile/firefox-ios#6620 <sup>(angl.)</sup>](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Focus pour iOS

La version 7 de Focus pour iOS utilise une chaîne de caractères d'agent utilisateur au format suivant&nbsp;:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Note&nbsp;: cet agent utilisateur provient d'un simulateur d'iPhone XR et peut différer sur l'appareil.

## Voir aussi

- Recommandations pour [détecter la chaîne de caractères d'agent utilisateur afin d'assurer la compatibilité entre navigateurs](/fr/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- La propriété API [`navigator.userAgent`](/fr/docs/Web/API/Window/navigator)
