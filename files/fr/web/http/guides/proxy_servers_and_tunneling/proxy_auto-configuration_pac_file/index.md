---
title: Fichier de configuration automatique du mandataire (PAC)
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

Un **fichier de configuration automatique du mandataire (PAC)** est une fonction JavaScript qui détermine si les requêtes du navigateur web (HTTP, HTTPS et FTP) vont directement à la destination ou sont transmises à un serveur mandataire web. La fonction JavaScript contenue dans le fichier PAC définit la fonction&nbsp;:

## Syntaxe

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Paramètres

- `url`
  - : L'URL à laquelle on accède. Les composants de chemin et de requête des URL `https://` sont supprimés. Dans Chrome (versions 52 à 73), vous pouvez désactiver cela en définissant `PacHttpsUrlStrippingEnabled` sur `false` dans la politique ou en lançant avec l'option de ligne de commande `--unsafe-pac-url` (dans Chrome 74, seule l'option fonctionne, et à partir de 75, il n'y a aucun moyen de désactiver la suppression du chemin&nbsp;; à partir de Chrome 81, la suppression du chemin ne s'applique pas aux URL HTTP, mais il y a un intérêt à changer ce comportement pour correspondre à HTTPS)&nbsp;; dans Firefox, la préférence est `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Le nom d'hôte extrait de l'URL. Cela n'est fourni que pour plus de commodité&nbsp;; il s'agit de la même chaîne de caractères que celle située entre `://` et le premier `:` ou `/` qui suit. Le numéro de port n'est pas inclus dans ce paramètre. Il peut être extrait de l'URL si nécessaire.

## Description

Retourne une chaîne de caractères décrivant la configuration. Le format de cette chaîne de caractères est défini dans la section **format de la valeur de retour** ci-dessous.

### Format de la valeur de retour

- La fonction JavaScript retourne une seule chaîne de caractères
- Si la chaîne de caractères est nulle, aucun mandataire ne doit être utilisé
- La chaîne de caractères peut contenir un nombre quelconque des éléments suivants, séparés par un point-virgule&nbsp;:

<!---->

- `DIRECT`
  - : Les connexions doivent être établies directement, sans aucun mandataire
- `PROXY host:port`
  - : Le mandataire défini doit être utilisé
- `SOCKS host:port`
  - : Le serveur SOCKS défini doit être utilisé

Les versions récentes de Firefox prennent également en charge&nbsp;:

- `HTTP host:port`
  - : Le mandataire HTTP défini doit être utilisé
- `HTTPS host:port`
  - : Le mandataire HTTPS défini doit être utilisé
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Le serveur SOCKS défini (avec la version SOCKS définie) doit être utilisé

Si plusieurs paramètres sont séparés par des points-virgules, le paramètre le plus à gauche est utilisé, jusqu'à ce que Firefox ne parvienne pas à établir la connexion au mandataire. Dans ce cas, la valeur suivante est utilisée, etc.

Le navigateur réessaie automatiquement un mandataire précédemment non réactif après 30 minutes. Les tentatives supplémentaires continuent à partir d'une heure, en ajoutant toujours 30 minutes au temps écoulé entre les tentatives.

Si tous les mandataires sont en panne, et qu'il n'y a pas d'option DIRECT définie, le navigateur demande si les mandataires doivent être temporairement ignorés, et tente des connexions directes. Après 20 minutes, le navigateur demande si les mandataires doivent être réessayés, demandant à nouveau après 40 minutes supplémentaires. Les requêtes continuent, en ajoutant toujours 20 minutes au temps écoulé entre les requêtes.

#### Exemples

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Le mandataire principal est w3proxy:8080&nbsp;; si celui-ci tombe en panne, commencez à utiliser mozilla:8081 jusqu'à ce que le mandataire principal soit de nouveau opérationnel.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Idem que ci-dessus, mais si les deux mandataires tombent en panne, commencez automatiquement à établir des connexions directes. (Dans le premier exemple ci-dessus, Netscape demande la confirmation de l'utilisateur·ice pour établir des connexions directes&nbsp;; dans ce cas, il n'y a pas d'intervention de l'utilisateur·ice.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Utilise SOCKS si le mandataire principal tombe en panne.

Le fichier de configuration automatique doit être enregistré dans un fichier avec une extension de nom de fichier .pac&nbsp;: `proxy.pac`.

Et le type MIME doit être défini sur `application/x-ns-proxy-autoconfig`.

Ensuite, vous devez configurer votre serveur pour faire correspondre l'extension de nom de fichier `.pac` au type MIME.

> [!NOTE]
>
> - La fonction JavaScript doit toujours être enregistrée dans un fichier à part, mais ne doit pas être intégrée dans un fichier HTML ou tout autre fichier.
> - Les exemples à la fin de ce document sont complets. Il n'y a pas de syntaxe supplémentaire nécessaire pour les enregistrer dans un fichier et les utiliser. (Bien sûr, les JavaScripts doivent être modifiés pour refléter le nom de domaine et/ou les sous-réseaux de votre site.)

## Fonctions et environnement prédéfinis

Ces fonctions peuvent être utilisées pour créer le fichier PAC&nbsp;:

- Nom d'hôte basé sur les conditions
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Fonctions utilitaires associées
  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- URL/nom d'hôte basé sur les conditions
  - [`shExpMatch()`](#shexpmatch)

- Conditions basées sur le temps
  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Utilitaire de journalisation
  - [`alert()`](#alert)

- Il y avait un tableau associatif (objet) déjà défini, car à l'époque le code JavaScript ne pouvait pas le définir lui-même&nbsp;:
  - `ProxyConfig.bindings` {{Deprecated_Inline}}

> [!NOTE]
> pactester (qui fait partie du paquet [pacparser <sup>(angl.)</sup>](https://github.com/manugarg/pacparser)) est utilisé pour tester les exemples de syntaxe suivants.
>
> - Le fichier PAC est nommé `proxy.pac`
> - Ligne de commande&nbsp;: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (passe le paramètre `host` `www.mozilla.org` et le paramètre `url` `https://www.mozilla.org`)

### `isPlainHostName()`

#### Syntaxe

```js-nolint
isPlainHostName(host)
```

#### Paramètres

- `host`
  - : Le nom d'hôte figurant dans l'URL (sans le numéro de port).

#### Description

Vrai si et seulement s'il n'y a pas de nom de domaine dans le nom d'hôte (pas de points).

#### Exemples

```js
isPlainHostName("www.mozilla.org"); // false
isPlainHostName("www"); // true
```

### `dnsDomainIs()`

#### Syntaxe

```js-nolint
dnsDomainIs(host, domain)
```

#### Paramètres

- `host`
  - : Est le nom de l'hôte depuis l'URL.
- `domain`
  - : Est le nom de domaine contre lequel tester le nom d'hôte.

#### Description

Retourne vrai si et seulement si le domaine du nom d'hôte correspond.

#### Exemples

```js-nolint
dnsDomainIs("www.mozilla.org", ".mozilla.org") // true
dnsDomainIs("www", ".mozilla.org") // false
```

### `localHostOrDomainIs()`

#### Syntaxe

```js-nolint
localHostOrDomainIs(host, hostDom)
```

#### Paramètres

- `host`
  - : Le nom d'hôte depuis l'URL.
- `hostDom`
  - : Nom d'hôte entièrement qualifié à tester.

#### Description

Est vrai si et seulement si le nom d'hôte correspond _exactement_ au nom d'hôte défini, ou s'il n'y a pas de partie de nom de domaine dans le nom d'hôte, mais que le nom d'hôte non qualifié correspond.

#### Exemples

```js-nolint
localHostOrDomainIs("www.mozilla.org", "www.mozilla.org") // true (correspondance exacte)
localHostOrDomainIs("www", "www.mozilla.org") // true (correspondance du nom d'hôte, domaine non défini)
localHostOrDomainIs("www.google.com", "www.mozilla.org") // false (non correspondance du nom de domaine)
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org") // false (non correspondance du nom d'hôte)
```

### `isResolvable()`

#### Syntaxe

```js-nolint
isResolvable(host)
```

#### Paramètres

- `host`
  - : Le nom d'hôte depuis l'URL.

Essaie de résoudre le nom d'hôte. Retourne vrai si cela réussit.

#### Exemples

```js-nolint
isResolvable("www.mozilla.org") // true
```

### `isInNet()`

#### Syntaxe

```js-nolint
isInNet(host, pattern, mask)
```

#### Paramètres

- `host`
  - : Un nom d'hôte DNS ou une adresse IP. Si un nom d'hôte est passé, il est résolu en une adresse IP par cette fonction.
- `pattern`
  - : Un modèle d'adresse IP au format séparé par des points.
- `mask`
  - : Masque pour le modèle d'adresse IP indiquant quelles parties de l'adresse IP doivent être comparées. 0 signifie ignorer, 255 signifie correspondre.

Retourne vrai si et seulement si l'adresse IP de l'hôte correspond au modèle d'adresse IP défini.

La spécification du modèle et du masque se fait de la même manière que pour la configuration SOCKS.

#### Exemples

```js
function FindProxyForURL(url, host) {
  alert(isInNet(host, "192.0.2.172", "255.255.255.255"));
  // "PAC-alert: true"
}
```

### `dnsResolve()`

#### Syntaxe

```js-nolint
dnsResolve(host)
```

#### Paramètres

- `host`
  - : Le nom d'hôte à résoudre.

Résout le nom d'hôte DNS donné en une adresse IP et le retourne sous forme de chaîne de caractères au format séparé par des points.

#### Exemple

```js
dnsResolve("www.mozilla.org"); // retourne la chaîne de caractères "104.16.41.2"
```

### `convert_addr()`

#### Syntaxe

```js-nolint
convert_addr(ipaddr)
```

#### Paramètres

- `ipaddr`
  - : Toute adresse au format séparé par des points, telle qu'une adresse IP ou un masque.

Concatène les quatre octets séparés par des points en un mot de 4 octets et le convertit en décimal.

#### Exemple

```js
convert_addr("192.0.2.172"); // retourne le nombre décimal 1745889538
```

### `myIpAddress()`

#### Syntaxe

```js-nolint
myIpAddress()
```

#### Paramètres

(aucun)

#### Valeur de retour

Retourne l'adresse IP du serveur de la machine sur laquelle Firefox s'exécute, sous forme de chaîne de caractères au format séparé par des points. Pour être plus utile, il essaie plusieurs alternatives avant de revenir à l'adresse de bouclage (comme `127.0.0.1`).

#### Exemple

```js-nolint
myIpAddress()
```

### `dnsDomainLevels()`

#### Syntaxe

```js-nolint
dnsDomainLevels(host)
```

#### Paramètres

- `host`
  - : Le nom d'hôte depuis l'URL.

Retourne le nombre (entier) de niveaux de domaine DNS (nombre de points) dans le nom d'hôte.

#### Exemples

```js-nolint
dnsDomainLevels("www") // 0
dnsDomainLevels("mozilla.org") // 1
dnsDomainLevels("www.mozilla.org"); // 2
```

### `shExpMatch()`

#### Syntaxe

```js-nolint
shExpMatch(str, shExp)
```

#### Paramètres

- `str`
  - : Toute chaîne de caractères à comparer (par exemple, l'URL ou le nom d'hôte).
- `shExp`
  - : Une expression shell à comparer.

Retourne `true` si la chaîne de caractères correspond à l'expression shell glob définie.

La prise en charge de la syntaxe des expressions glob particulières varie selon les navigateurs&nbsp;:
`*` (correspond à un nombre quelconque de caractères) et `?` (correspond à un caractère) sont toujours pris en charge, tandis que `[characters]` et `[^characters]` sont en outre pris en charge par certaines implémentations (y compris Firefox).

> [!NOTE]
> Si elles sont prises en charge par le client, les expressions régulières JavaScript offrent généralement un moyen plus puissant et cohérent de faire correspondre des modèles dans les URL (et autres chaînes de caractères).

#### Exemples

```js
shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // retourne true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // retourne false
```

### `weekdayRange()`

#### Syntaxe

```js-nolint
weekdayRange(wd1, wd2)
weekdayRange(wd1, wd2, gmt)
```

> [!NOTE]
> (Avant Firefox 49) `wd1` (<i lang="en">weekday</i> en anglais) doit être inférieur à `wd2` (<i lang="en">weekday</i> en anglais) si vous voulez que la fonction évalue ces paramètres comme une plage. Voir l'avertissement ci-dessous.

#### Paramètres

- `wd1` et `wd2`
  - : L'une des chaînes de caractères de jours de la semaine ordonnées&nbsp;: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- `gmt`
  - : Est soit la chaîne de caractères «&nbsp;GMT&nbsp;», soit omis.

Seul le premier paramètre est obligatoire. Le deuxième, le troisième ou les deux peuvent être omis.

Si un seul paramètre est présent, la fonction retourne une valeur de true le jour de la semaine que représente le paramètre. Si la chaîne de caractères «&nbsp;GMT&nbsp;» est définie comme deuxième paramètre, les heures sont prises en GMT. Sinon, elles sont supposées être dans le fuseau horaire local.

Si **wd1** et **wd2** sont tous deux définis, la condition est vraie si le jour de la semaine actuel se situe entre ces deux jours de la semaine _ordonnés_. Les limites sont inclusives, _mais les limites sont ordonnées_. Si le paramètre «&nbsp;GMT&nbsp;» est défini, les heures sont prises en GMT. Sinon, le fuseau horaire local est utilisé.

> [!WARNING]
> _L'ordre des jours importe_.
> Avant Firefox 49, `weekdayRange("SUN", "SAT")` évalue toujours à `true`.
> Maintenant `weekdayRange("WED", "SUN")` ne s'évalue à `true` que si le jour actuel est mercredi ou dimanche.

#### Exemples

```js-nolint
weekdayRange("MON", "FRI") // retourne true du lundi au vendredi (fuseau horaire local)
weekdayRange("MON", "FRI", "GMT") // retourne true du lundi au vendredi (fuseau horaire GMT)
weekdayRange("SAT") // retourne true le samedi (heure locale)
weekdayRange("SAT", "GMT") // retourne true le samedi (heure GMT)
weekdayRange("FRI", "MON") // retourne true uniquement le vendredi et le lundi (remarque, l'ordre importe !)
```

### `dateRange()`

#### Syntaxe

```js-nolint
dateRange(dayOrMonthOrYear)
dateRange(dayOrMonthOrYear, gmt)  // l'ambiguïté est résolue en assumant que l'année est supérieure à 31
dateRange(day1, day2)
dateRange(day1, day2, gmt)
dateRange(month1, month2)
dateRange(month1, month2, gmt)
dateRange(year1, year2)
dateRange(year1, year2, gmt)
dateRange(day1, month1, day2, month2)
dateRange(day1, month1, day2, month2, gmt)
dateRange(month1, year1, month2, year2)
dateRange(month1, year1, month2, year2, gmt)
dateRange(day1, month1, year1, day2, month2, year2)
dateRange(day1, month1, year1, day2, month2, year2, gmt)
```

> [!NOTE]
> (Avant Firefox 49) `day1` doit être inférieur à `day2`, `month1` doit être inférieur à `month2` et `year1` doit être inférieur à `year2` si vous voulez que la fonction évalue ces paramètres comme une plage. Voir l'avertissement ci-dessous.

#### Paramètres

- `day`
  - : Est le jour ordonné du mois compris entre 1 et 31 (en tant qu'entier).
- `month`
  - : Est l'une des chaînes de caractères de mois ordonnées&nbsp;: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- `year`
  - : Est le nombre entier de l'année complète ordonnée. Par exemple, 2016 (**et non** 16).
- `gmt`
  - : Est soit la chaîne de caractères «&nbsp;GMT&nbsp;», ce qui fait que la comparaison de l'heure se fait dans le fuseau horaire GMT, soit est omis. Si elle n'est pas définie, les heures sont prises dans le fuseau horaire local.

Si une seule valeur est définie (pour chaque catégorie&nbsp;: jour, mois, année), la fonction retourne une valeur vraie uniquement pour les jours correspondant à cette spécification. Si les deux valeurs sont définies, le résultat est vrai entre ces moments, y compris les limites, _mais les limites sont ordonnées_.

> [!WARNING]
> **L'ordre des jours, des mois et des années est important**. Avant Firefox 49, `dateRange("JAN", "DEC")` retourne toujours `true`. Maintenant, `dateRange("DEC", "JAN")` ne retourne vrai que si le mois en cours est décembre ou janvier.

#### Exemples

```js-nolint
dateRange(1) // retourne true le premier jour de chaque mois, fuseau horaire local
dateRange(1, "GMT") // retourne true le premier jour de chaque mois, fuseau horaire GMT
dateRange(1, 15) // retourne true sur la première moitié de chaque mois
dateRange(24, "DEC");// retourne true le 24 décembre de chaque année
dateRange("JAN", "MAR"); // retourne true sur le premier trimestre de l'année

dateRange(1, "JUN", 15, "AUG");
// retourne true du 1er juin au 15 août, chaque année
// (y compris le 1er juin et le 15 août)

dateRange(1, "JUN", 1995, 15, "AUG", 1995);
// retourne true du 1er juin 1995 au 15 août de la même année

dateRange("OCT", 1995, "MAR", 1996);
// retourne true d'octobre 1995 à mars 1996
// (y compris tout le mois d'octobre 1995 et mars 1996)

dateRange(1995);
// retourne true pendant toute l'année 1995

dateRange(1995, 1997);
// retourne true du début de l'année 1995 jusqu'à la fin de l'année 1997
```

### `timeRange()`

#### Syntaxe

```js-nolint
// La plage complète des extensions est analogue à dateRange.
timeRange(hour1, min1, sec1, hour2, min2, sec2)
timeRange(hour1, min1, sec1, hour2, min2, sec2, gmt)
```

> [!NOTE]
> (Avant Firefox 49) la catégorie `hour1`, `min1`, `sec1` doit être inférieure à la catégorie `hour2`, `min2`, `sec2` si vous voulez que la fonction évalue ces paramètres comme une plage. Voir l'avertissement ci-dessous.

#### Paramètres

- `hour`
  - : L'heure de 0 à 23. (0 est minuit, 23 est 23 heures.)
- `min`
  - : Les minutes de 0 à 59.
- `sec`
  - : Les secondes de 0 à 59.
- `gmt`
  - : Soit la chaîne de caractères «&nbsp;GMT&nbsp;» pour le fuseau horaire GMT, soit non définie, pour le fuseau horaire local.

Si une seule valeur est définie (pour chaque catégorie&nbsp;: heure, minute, seconde), la fonction retourne une valeur true uniquement aux moments correspondant à cette spécification. Si les deux valeurs sont définies, le résultat est true entre ces moments, y compris les limites, _mais les limites sont ordonnées_.

> [!WARNING]
> **L'ordre des heures, minutes et secondes est important**. Avant Firefox 49, `timeRange(0, 23)` est toujours évalué à true. Maintenant, `timeRange(23, 0)` n'est évalué à `true` que si l'heure actuelle est 23h00 ou minuit.

#### Exemples

```js-nolint
timeRange(12); // retourne true de midi à 13 heures
timeRange(12, 13) // retourne true de midi à 13 heures
timeRange(12, "GMT") // retourne true de midi à 13 heures, dans le fuseau horaire GMT
timeRange(9, 17) // retourne true de 9 heures à 17 heures
timeRange(8, 30, 17, 0) // retourne true de 8:30 à 17:00
timeRange(0, 0, 0, 0, 0, 30) // retourne true entre minuit et 30 secondes après minuit
```

### `alert()`

#### Syntaxe

```js-nolint
alert(message)
```

#### Paramètres

- `message`
  - : La chaîne de caractères à enregistrer

Enregistre le message dans la console du navigateur.

#### Exemples

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // journalise le nom d'hôte et son adresse IP
alert("Erreur : ne doit pas atteindre cette clause.") // journalise un message
```

## Exemple 1

### Utiliser le mandataire pour tout sauf les hôtes locaux

> [!NOTE]
> Comme tous les exemples qui suivent sont très spécifiques, ils n'ont pas été testés.

Tous les hôtes qui ne sont pas entièrement qualifiés, ou ceux qui sont dans le domaine local, sont connectés directement. Tout le reste passe par `w3proxy.mozilla.org:8080`. Si le mandataire tombe en panne, les connexions deviennent automatiquement directes&nbsp;:

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

> [!NOTE]
> Il s'agit du fichier de configuration automatique le plus simple et le plus efficace dans les cas où il n'y a qu'un seul mandataire.

## Exemple 2

### Comme ci-dessus, mais utilise le mandataire pour les serveurs locaux qui sont en dehors du pare-feu

Si certains hôtes (comme le serveur Web principal) appartiennent au domaine local mais se trouvent en dehors du pare-feu et ne sont accessibles qu'avec le serveur mandataire, ces exceptions peuvent être gérées à l'aide de la fonction `localHostOrDomainIs()`&nbsp;:

```js
function FindProxyForURL(url, host) {
  if (
    (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) &&
    !localHostOrDomainIs(host, "www.mozilla.org") &&
    !localHostOrDomainIs(host, "merchant.mozilla.org")
  ) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

L'exemple ci-dessus utilise le mandataire pour toutes les requêtes, à l'exception des hôtes locaux du domaine mozilla.org, à l'exception toutefois des hôtes `www.mozilla.org` et `merchant.mozilla.org`, qui passent par le mandataire.

> [!NOTE]
> L'ordre des exceptions ci-dessus est déterminé par des raisons d'efficacité&nbsp;: les fonctions `localHostOrDomainIs()` ne sont exécutées que pour les URL appartenant au domaine local, et non pour toutes les URL. Veillez à bien placer les parenthèses autour de l'expression _`or`_ avant l'expression _`and`_ afin d'obtenir le comportement efficace mentionné ci-dessus.

## Exemple 3

### Utiliser le mandataire uniquement si l'hôte ne peut pas être résolu

Cet exemple fonctionne dans un environnement où le serveur DNS interne est configuré de manière à ne pouvoir résoudre que les noms d'hôtes internes, et l'objectif est d'utiliser un mandataire uniquement pour les hôtes qui ne sont pas résolubles&nbsp;:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

L'exemple ci-dessus nécessite de consulter le DNS à chaque fois&nbsp;; il peut être regroupé intelligemment avec d'autres règles afin que le DNS ne soit consulté que si les autres règles ne donnent pas de résultat&nbsp;:

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".example.com") ||
    isResolvable(host)
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

## Exemple 4

### Décisions basées sur le sous-réseau

Dans cet exemple, tous les hôtes d'un sous-réseau donné sont connectés directement, les autres passent par le mandataire&nbsp;:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

Là encore, l'utilisation du serveur DNS ci-dessus peut être minimisée en ajoutant des règles redondantes au début&nbsp;:

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".example.com") ||
    isInNet(host, "192.0.2.0", "255.255.0.0")
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

## Exemple 5

### Équilibrage de charge/routage basé sur des modèles d'URL

Cet exemple est plus complexe. Il y a quatre (4) serveurs mandataires&nbsp;; l'un d'entre eux sert de serveur d'appoint pour tous les autres, de sorte que si l'un des trois restants tombe en panne, le quatrième prend le relais. De plus, les trois serveurs mandataires restants se partagent la charge en fonction de modèles d'URL, ce qui rend leur mise en cache plus efficace (il n'y a qu'une seule copie de chaque document sur les trois serveurs, au lieu d'une copie sur chacun d'entre eux). La charge est répartie comme suit&nbsp;:

| Mandataire | Objectif                  |
| ---------- | ------------------------- |
| #1         | Domaine `.com`            |
| #2         | Domaine `.edu`            |
| #3         | toues les autres domaines |
| #4         | serveur d'appoint         |

Il est préférable que tous les accès locaux soient directs. Tous les serveurs mandataires fonctionnent sur le port 8080 (ce n'est pas obligatoire, vous pouvez changer de port, mais n'oubliez pas de modifier vos configurations des deux côtés). Notez que les chaînes de caractères peuvent être concaténées à l'aide de l'opérateur **`+`** en JavaScript.

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".example.com")) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.com")) {
    return "PROXY proxy1.example.com:8080; PROXY proxy4.example.com:8080";
  } else if (shExpMatch(host, "*.edu")) {
    return "PROXY proxy2.example.com:8080; PROXY proxy4.example.com:8080";
  }
  return "PROXY proxy3.example.com:8080; PROXY proxy4.example.com:8080";
}
```

## Exemple 6

### Définir un mandataire pour un protocole spécifique

La plupart des fonctionnalités standard de JavaScript sont disponibles pour être utilisées dans la fonction `FindProxyForURL()`. Par exemple, pour définir différents mandataires en fonction du protocole, la fonction {{JSxRef("String.prototype.startsWith()", "startsWith()")}} peut être utilisée&nbsp;:

```js
function FindProxyForURL(url, host) {
  if (url.startsWith("http:")) {
    return "PROXY http-proxy.example.com:8080";
  } else if (url.startsWith("ftp:")) {
    return "PROXY ftp-proxy.example.com:8080";
  } else if (url.startsWith("gopher:")) {
    return "PROXY gopher-proxy.example.com:8080";
  } else if (url.startsWith("https:") || url.startsWith("snews:")) {
    return "PROXY security-proxy.example.com:8080";
  }
  return "DIRECT";
}
```

> [!NOTE]
> La même chose peut être accomplie en utilisant la fonction [`shExpMatch()`](#shexpmatch) décrite précédemment.

Par exemple&nbsp;:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.example.com:8080";
}
```

> [!NOTE]
> Le fichier de configuration automatique peut être généré par un script CGI. C'est utile, par exemple, lorsque l'on souhaite que le fichier de configuration automatique se comporte différemment en fonction de l'adresse IP du client (la variable d'environnement `REMOTE_ADDR` dans CGI).
>
> L'utilisation des fonctions `isInNet()`, `isResolvable()` et `dnsResolve()` doit être soigneusement considérée, car elles nécessitent de consulter le serveur DNS. Toutes les autres fonctions liées à la configuration automatique ne sont que des fonctions de correspondance de chaînes de caractères qui ne nécessitent pas l'utilisation d'un serveur DNS. Si un mandataire est utilisé, le mandataire effectue sa recherche DNS, ce qui double l'impact sur le serveur DNS. La plupart du temps, ces fonctions ne sont pas nécessaires pour obtenir le résultat souhaité.

## Historique et mise en œuvre

La configuration automatique du mandataire a été introduite dans Netscape Navigator 2.0 à la fin des années 1990, en même temps que JavaScript. La publication du code source de Netscape a finalement conduit à Firefox lui-même.

La mise en œuvre la plus «&nbsp;originale&nbsp;» de PAC et de ses bibliothèques JavaScript est, par conséquent, `nsProxyAutoConfig.js` que l'on trouve dans les premières versions de Firefox. Ces utilitaires se retrouvent dans de nombreux autres systèmes open source, y compris [Chromium <sup>(angl.)</sup>](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox a ensuite intégré le fichier dans [`ProxyAutoConfig.cpp` <sup>(angl.)</sup>](https://searchfox.org/firefox-main/source/netwerk/base/ProxyAutoConfig.cpp) en tant que littéral de chaîne de caractères C++. Pour l'extraire dans son propre fichier, il suffit de copier le morceau dans JavaScript avec une directive `console.log` pour l'afficher.

Microsoft a généralement développé sa propre mise en œuvre. Il y avait [certains problèmes avec leurs bibliothèque <sup>(angl.)</sup>s](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), mais la plupart sont désormais résolus. Ils ont défini [certaines nouvelles fonctions suffixées «&nbsp;Ex&nbsp;» <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) autour des parties de gestion des adresses pour prendre en charge IPv6. La fonctionnalité est prise en charge par Chromium, mais pas encore par Firefox ([bugzilla #558253 <sup>(angl.)</sup>](https://bugzil.la/558253)).

## Voir aussi

- L'entrée du glossaire {{Glossary("Proxy server", "Serveur mandataire")}}
- [Les types MIME (types de médias IANA)](/fr/docs/Web/HTTP/Guides/MIME_types)
- [Configuration automatique du serveur HTTP mandataire dans les navigateurs web <sup>(angl.)</sup>](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
