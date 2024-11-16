---
title: Internationalisation
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 16d1903feb387e054a502c20f35ccb12d823dedb
---

{{AddonSidebar}}

L'API [WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions) dispose d'un module pour [l'internationalisation](/fr/docs/Glossary/Internationalization) des extensions&nbsp;: [`i18n`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n). Dans cet article, nous allons explorer ses fonctionnalités et illustrer son utilisation par un exemple pratique. L'API `i18n` pour les extensions web est similaire aux bibliothèques JavaScript tierces d'internationalisation.

> [!NOTE]
> L'exemple d'extension présenté dans cet article, [`notify-link-clicks-i18n`](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n), est disponible sur GitHub. Suivez le code source pendant que vous parcourez cette page.

## Anatomie d'une extension internationalisée

Une extension internationalisée peut contenir les mêmes fonctionnalités que n'importe quelle autre extension ([scripts d'arrière-plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#scripts_darrière-plan), [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#scripts_de_contenu), etc.), mais avec du contenu supplémentaire lui permettant de basculer entre différentes locales. Les éléments ajoutés pour l'internationalisation sont résumés dans l'arborescence suivante&nbsp;:

- `répertoire-racine-de-l'extension/`
  - `_locales`
    - `en`
      - `messages.json`&nbsp;: un fichier qui contiendra les chaines de caractères en anglais
    - `fr_FR`
      - `messages.json`&nbsp;: un fichier qui contiendra les chaines de caractères en français
    - `de`
      - `messages.json`&nbsp;: un fichier qui contiendra les chaines de caractères en allemand
    - etc.
  - `manifest.json`&nbsp;: des métadonnées relatives aux locales sont ajoutées au [manifeste](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
  - `fichierJavaScript.js`&nbsp;: de la logique pour récupérer la locale du navigateur, récupérer les messages spécifiques à la locale courante, etc.
  - `mesStyles.css`&nbsp;: les règles CSS peuvent changer de comportement suivant la locale

Examinons chacune de ces fonctionnalités supplémentaires. Chacune des sections qui suit représente une étape à suivre pour l'internationalisation de votre extension.

## Fournir des chaines localisées dans `_locales`

L'internationalisation nécessite de fournir des chaines traduites pour les différentes locales qu'on souhaite prendre en charge. Pour les extensions, le répertoire `_locales`, présent à la racine de l'extension, contient un sous-répertoire pour chaque locale, nommé grâce à [l'étiquette de langue correspondante](https://fr.wikipedia.org/wiki/%C3%89tiquette_d%27identification_de_langues_IETF) et ce dernier contient un fichier `messages.json` avec les chaines de caractères traduites pour la locale correspondante.

> [!WARNING]
> Contrairement à la convention qui consiste à séparer la sous-étiquette de base et celle de la variante régionale par un tiret (par exemple `en-US` ou `fr-CA`), **il faudra utiliser un tiret bas pour le nom du répertoire sous `_locales`** (par exemple `en_US` ou `fr_CA`).

> [!NOTE]
> Vous pouvez rechercher des étiquettes de langue à l'aide de [cet outil en ligne (en anglais)](https://r12a.github.io/app-subtags/). Notez que vous devez rechercher le nom anglais de la langue.

Dans [le répertoire `_locales` de notre exemple d'extension](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales), nous avons des répertoires pour l'anglais (`en`), l'allemand (`de`), le français tel que parlé en France (`fr_FR`), le japonais (`ja`), le norvégien tel que parlé en Norvège (`nb_NO`), le néerlandais (`nl`), et le portugais brésilien (`pt_BR`). Chacun de ces répertoires contient un fichier `messages.json`.

Regardons maintenant la structure de l'un de ces fichiers ([`_locales/en/messages.json`](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/_locales/en/messages.json)):

```json
{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "Shows a notification when the user clicks on links.",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "Click notification",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

Ce fichier est du JSON standard, chaque propriété est un objet avec un nom, qui contient une propriété `message` et une propriété `description`. Tous ces éléments sont des chaines de caractères et `$URL$` est un emplacement de substitution qui sera remplacé par une sous-chaine lorsque la propriété `notificationContent` sera manipulée par l'extension. Nous verrons comment faire dans la section [Récupération des messages localisés dans le code JavaScript](#récupérer_des_messages_localisés_dans_le_code_javascript).

> [!NOTE]
> Pour plus d'informations sur le contenu des fichiers `messages.json`, voir [la référence des formats de messages localisés](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisation du manifeste

Plusieurs actions sont nécessaires pour internationaliser le manifeste (`manifest.json`) de l'extension.

### Récupérer les chaines localisées dans le manifeste

[Le manifeste de l'extension](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) contient des chaines de caractères qui seront visibles de l'utilisatrice et de l'utilisateur, comme le nom et la description de l'extension. Si vous internationalisez ces propriétés et placez les traductions appropriées dans les fichiers `messages.json`, la traduction appropriée sera affichée en fonction des paramètres de locale du navigateur.

Pour internationaliser ces propriétés, renseignez le manifeste ainsi&nbsp;:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Ces valeurs spéciales indiqueront au navigateur de rechercher la chaine localisée correspondante, plutôt que d'utiliser la même valeur statique pour toutes les locales.

Pour faire référence à un message localisé, composez la chaine de caractères en concaténant&nbsp;:

1. Deux tirets bas (`__`)
2. La chaine `MSG`
3. Un tiret bas (`_`)
4. Le nom du message visé, tel qu'il est défini dans `messages.json`
5. Deux tirets bas (`__`)

```plain
__MSG_ + messageName + __
```

Par exemple, si on souhaite utiliser le message localisé identifié par la clé `toto`, on écrira ainsi la propriété dans le manifeste&nbsp;:

```plain
"champ_de_manifeste": "__MSG_toto__"
```

### Indiquer une locale par défaut

Dans le manifeste, il est conseillé de renseigner la propriété [`default_locale`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale).

```json
"default_locale": "en"
```

Si un message n'est pas disponible dans la locale courante du navigateur, ce dernier cherchera le message dans la locale `default_locale`. Nous verrons ci-après [des informations supplémentaires importantes sur la façon dont le navigateur sélectionne les messages effectivement utilisés](#algorithme_de_sélection_de_la_chaîne_de_caractères_localisée).

## Utiliser du code CSS variant selon la locale

Il est aussi possible d'utiliser des chaines localisées au sein des fichiers CSS de l'extension. Par exemple, on pourra ainsi construire une règle CSS qui varie selon la locale&nbsp;:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Voir aussi [comment utiliser des messages prédéfinis](#messages_prédéfinis) ci-après qui permet une meilleure gestion dans certains cas.

## Récupérer des messages localisés en JavaScript

Après avoir mis en place les fichiers contenant les messages et paramétré le manifeste, voyons comment utiliser les messages localisés depuis le code JavaScript afin que l'extension utilise la bonne locale autant que possible. [L'API `i18n`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n) dispose de quatre méthodes&nbsp;:

- [`i18n.getMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
  - : Il s'agit de la méthode que vous utiliserez le plus souvent. Elle récupère un message localisé à partir de son identifiant. Nous verrons des exemples d'utilisation après.
- [`i18n.getAcceptLanguages()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages) et [`i18n.getUILanguage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
  - : Ces méthodes peuvent être utilisées pour personnaliser l'interface utilisateur en fonction de la locale (par exemple pour réordonner une liste d'options en mettant les options spécifiques aux langues préférées de l'utilisateur en premier, ou afficher des informations culturelles pertinentes uniquement pour une certaine locale, ou formater les dates affichées en respectant la locale courante du navigateur).
- [`i18n.detectLanguage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)
  - : Cette méthode peut être utilisée pour détecter la langue de contenus utilisateurs afin de le formater correctement.

Dans [l'exemple `notify-link-clicks-i18n`](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n), [le script d'arrière-plan](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) contient ces lignes&nbsp;:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

La première ligne récupère le message avec l'identifiant `notificationTitle` depuis le fichier `messages.json` le plus pertinent pour la locale courante du navigateur. La seconde ligne est similaire, mais fournit en plus une URL comme deuxième paramètre. Cette valeur sera utilisée pour remplacer l'emplacement de substitution `$URL$` dans le champ `message` du champ `notificationContent`&nbsp;:

```json
"notificationContent": {
  "message": "You clicked $URL$.",
  "description": "Tells the user which link they clicked.",
  "placeholders": {
    "url" : {
      "content" : "$1",
      "example" : "https://developer.mozilla.org"
    }
  }
}
```

La propriété `"placeholders"` définit tous les emplacements de substitution ainsi que leur origine pour le remplacement. Pour `"url"`, l'origine du contenu est `$1`, ce qui correspond à la première valeur passée dans le second paramètre de `getMessage()`. Puisque l'emplacement de substitution est appelé `"url"`, nous utilisons `$URL$` pour l'appeler dans la chaine de message (pour `"nomdemplacement"` vous utiliserez `$NOMDEMPLACEMENT$`, etc.). Si un message possède plusieurs emplacements de substitution, les valeurs à remplacer pourront être fournies sous la forme d'un tableau, passé en deuxième paramètre à [`i18n.getMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage). Ainsi, fournir le tableau `[a, b, c]` permettra de fournir des valeurs pour les emplacements de substitution dont les origines respectives sont `$1`, `$2`, et `$3`.

Par exemple, dans le fichier `en/messages.json`, la chaine originale du message `notificationContent` est

```
You clicked $URL$.
```

Si le lien sur lequel on a cliqué pointe vers `https://developer.mozilla.org`, après l'appel à [`i18n.getMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage), le contenu du deuxième paramètre sera mis à disposition via l'origine `$1`, et remplacera la sous-chaine `$URL$` tel que défini dans `"url"`. La chaine de caractères finalement obtenue sera donc&nbsp;:

```
You clicked https://developer.mozilla.org.
```

### Utilisation directe d'un emplacement de substitution

Il est possible d'insérer vos variables (`$1`, `$2`, `$3`, etc.) directement dans les chaines de message. Par exemple nous pourrions réécrire la propriété `"notificationContent"` comme ceci&nbsp;:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Cela peut sembler plus rapide et moins complexe, mais l'utilisation de `"placeholders"` est considérée comme une meilleure pratique. En effet, le nom de l'emplacement réservé (par exemple `"url"`) et l'exemple vous aideront à vous souvenir du rôle de cet emplacement. Au contraire, si vous utilisez uniquement `$1`…`$8`, après une semaine, vous aurez plus de difficultés à retrouver les correspondances.

### Substitution codée en dur

Il est également possible d'inclure des chaines statiques dans des emplacements de substitution, de sorte que la même valeur soit utilisée à chaque fois plutôt que d'obtenir la valeur d'une variable dans le code. Par exemple&nbsp;:

```json
"mdn_banner": {
  "message": "For more information on web technologies, go to $MDN$.",
  "description": "Tell the user about MDN",
  "placeholders": {
    "mdn": {
      "content": "https://developer.mozilla.org/"
    }
  }
}
```

Dans ce cas, nous plaçons une chaine statique pour la substitution plutôt que de l'obtenir à partir d'une variable comme `$1`. Cette technique peut s'avérer utile lorsque le fichier de messages est très complexe et qu'il devient nécessaire de séparer différentes valeurs afin de rendre le fichier plus lisible. De plus, ces valeurs sont alors accessibles en JavaScript.

En outre, vous pouvez utiliser ces substitutions pour spécifier les parties de la chaine que vous ne souhaitez pas traduire, telles que les noms de personne ou d'entreprise.

## Algorithme de sélection de la chaine de caractères localisée

Les locales peuvent être indiquées à l'aide d'une simple étiquette de langue comme `fr` ou `en`, ou avec en plus une sous-étiquette de région comme `en_US` ou `en_GB`. Lorsqu'on utilise l'API `i18n` afin de récupérer une chaine de caractères localisée, le navigateur utilise l'algorithme suivant&nbsp;:

1. S'il existe un fichier `messages.json` pour exactement la locale courante, et si ce fichier contient la chaine demandée, c'est celle-ci qui est renvoyée.
2. Sinon, si la locale courante est fournie avec une sous-étiquette de région (par exemple `en_US`) et qu'il existe un fichier `messages.json` pour l'étiquette de langue correspondante sans région (par exemple `en`), et si ce fichier contient la chaine, c'est celle-ci qui est renvoyée.
3. Sinon, s'il existe un fichier `messages.json` pour la locale par défaut (fournie via la propriété du manifeste `default_locale`), et que ce fichier contient la chaine, c'est celle-ci qui est renvoyée.
4. Sinon, c'est la chaine de caractères vide qui est renvoyée.

Prenons la structure d'exemple suivante&nbsp;:

- `répertoire-racine-de-l'extension/`
  - `_locales`
    - `en_GB`
      - `messages.json` avec le contenu suivant `{ "colorLocalized": { "message": "colour", "description": "Color." }, /* … */ }`
    - `en`
      - `messages.json` avec le contenu suivant `{ "colorLocalized": { "message": "color", "description": "Color." }, /* … */ }`
    - `fr`
      - `messages.json` avec le contenu suivant `{ "colorLocalized": { "message": "couleur", "description": "Color." }, /* … */}`

Supposons que `default_locale` vaille `fr`, et que la locale courante du navigateur soit `en_GB`&nbsp;:

- Si l'extension appelle `getMessage("colorLocalised")`, c'est la chaine `"colour"` qui sera renvoyée
- Si `colorLocalised` n'était pas présent dans le fichier pour `en_GB`, `getMessage("colorLocalised")` renverrait alors `"color"` (car `en` est l'étiquette de langue sans région correspondante à `en_GB`), et pas `"couleur"`.

## Messages prédéfinis

L'API `i18n` permet d'utiliser des messages prédéfinis, de la même façon que pour [récupérer les chaines localisées dans le manifeste](#récupérer_les_chaînes_localisées_dans_le_manifeste) ou [depuis le code CSS](#utiliser_du_code_css_variant_selon_la_locale). Par exemple&nbsp;:

```
__MSG_extensionName__
```

Les messages prédéfinis utilisent exactement la même syntaxe, mais avec `@@` avant le nom du message. Par exemple&nbsp;:

```
__MSG_@@ui_locale__
```

Le tableau suivant indique les différents messages prédéfinis disponibles&nbsp;:

<table>
  <thead>
    <tr>
      <th scope="col">Nom du message</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@@extension_id</code></td>
      <td>
        <p>
          L'UUID généré en interne pour l'extension. Vous pouvez utiliser cette chaine pour créer des URL pour les ressources à l'intérieur de l'extension. Même les extensions non localisées peuvent utiliser ce message.
        </p>
        <p>Vous ne pouvez pas utiliser ce message dans un fichier de manifeste.</p>
        <p>
          Notez également que cet identifiant <em>ne correspond pas</em> à l'identifiant renvoyé par <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/id"><code>runtime.id</code></a> qui peut être défini à l'aide de la clé de manifeste <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"><code>browser_specific_settings</code></a>. C'est l'UUID généré qui apparait dans l'URL du module complémentaire. Cela signifie que vous ne pouvez pas utiliser cette valeur comme paramètre <code>extensionId</code> pour <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage"><code>runtime.sendMessage()</code></a>, et que vous
          ne pouvez pas l'utiliser pour vérifier la propriété <code>id</code> d'un objet
          <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender"><code>runtime.MessageSender</code></a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>La locale courante. Cette chaine peut être utilisée afin de construire des URL variant en fonction de la locale.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        La direction du texte pour la locale courante. Cette chaine vaut <code>"ltr"</code> pour les langues écrites de gauche à droite telles que le français ou <code>"rtl"</code> pour les langues écrites de droite à gauche telles que l'arabe.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Si <code>@@bidi_dir</code> vaut <code>"ltr"</code>, alors cette chaine vaudra <code>"rtl"</code>, sinon elle vaudra <code>"ltr"</code>.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Si <code>@@bidi_dir</code> vaut <code>"ltr"</code>, alors cette chaine vaudra <code>"left"</code>, sinon elle vaudra <code>"right"</code>.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Si <code>@@bidi_dir</code> vaut <code>"ltr"</code>, alors cette chaine vaudra <code>"right"</code>, sinon elle vaudra <code>"left"</code>.
      </td>
    </tr>
  </tbody>
</table>

Ainsi, si nous revenons à l'exemple que nous avions pris pour le code CSS, il serait plus pertinent de l'écrire ainsi&nbsp;:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Grâce à cette écriture, nous pouvons stocker nos images localisées dans des répertoires qui correspondent aux différentes locales prises en charge (`en`, `de`, etc.).

Prenons un autre exemple où nous utilisons les messages prédéfinis `@@bidi_*` dans un fichier CSS&nbsp;:

```css
body {
  direction: __MSG_@@bidi_dir__;
}

div#header {
  margin-bottom: 1.05em;
  overflow: hidden;
  padding-bottom: 1.5em;
  padding-__MSG_@@bidi_start_edge__: 0;
  padding-__MSG_@@bidi_end_edge__: 1.5em;
  position: relative;
}
```

Pour les langues écrites de gauche à droite telles que le français, les déclarations CSS avec les messages prédéfinis ci-dessus se comportent ainsi&nbsp;:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Dans le cas d'une langue écrite de droite à gauche comme l'arabe, le résultat obtenu aurait été&nbsp;:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Tester votre extension

Pour tester la localisation de votre extension, utilisez [Firefox](https://www.mozilla.org/fr/firefox/new/) ou [Firefox Beta](https://www.mozilla.org/fr/firefox/channel/desktop/), car ils permettent d'installer des packs de langue.

Ensuite, pour chaque locale que vous prenez en charge et que vous voulez tester, suivez les instructions de la page [Utiliser Firefox dans une autre langue](https://support.mozilla.org/fr/kb/utiliser-firefox-dans-autre-langue) afin de changer la locale utilisée pour l'interface utilisateur de Firefox (si vous connaissez les paramètres, allez dans la section Langue et utilisez Choisir des alternatives).

Lorsque Firefox utilise la locale à tester, [installez l'extension temporairement](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). Après avoir installé votre extension, vérifiez dans la page `about:debugging` que votre extension est bien mise en place et que l'icône, le nom et la description apparaissent avec la bonne locale. Vous pouvez également vérifier les métadonnées localisées via la page `about:addons`. Finalement, utilisez les fonctionnalités de l'extension pour vérifier que les chaines localisées sont bien présentes.

Si vous souhaitez vous faire la main sur ce processus de test, vous pouvez utiliser [l'exemple d'extension `notify-link-clicks-i18n`](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n). Paramétrez Firefox pour qu'il s'affiche dans l'une des locales prise en charge (l'allemand, le néerlandais ou le japonais), chargez l'extension et allez sur un site web. Cliquez sur un lien pour voir la notification localisée indiquer le lien de l'URL.
