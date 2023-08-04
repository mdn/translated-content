---
title: Internationalization
slug: Mozilla/Add-ons/WebExtensions/Internationalization
---

{{AddonSidebar}}

L'API [WebExtensions](/fr/Add-ons/WebExtensions) dispose d'un module assez pratique pour l'internationalisation des extensions — [i18n](/fr/Add-ons/WebExtensions/API/i18n). Dans cet article, nous allons explorer ses fonctionnalités et fournir un exemple pratique de son fonctionnement. Le système i18n pour les extensions construites à l'aide des APIs WebExtension est similaire aux bibliothèques JavaScript courantes pour i18n telles que [i18n.js](http://i18njs.com/).

> **Note :** L'exemple d'extension présenté dans cet article — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) — est disponible sur GitHub. Suivez avec le code source que vous parcourez les sections ci-dessous.

## Anatomie d'une extension internationnalisée

Une extension internationnalisée peut contenir les mêmes caractéristiques que n'importe quelle autre extension — [scripts d'arrière-plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts), [scripts de contenu](/fr/Add-ons/WebExtensions/Content_scripts), etc. — mais elle a également des parties supplémentaires pour lui permettre de basculer entre différentes locales. Ceux-ci sont résumés dans l'arborescence suivante :

- extension-root-directory/

  - \_locales

    - en

      - messages.json

        - English messages (strings)

    - de

      - messages.json

        - German messages (strings)

    - etc.

  - manifest.json

    - locale-dependent metadata

  - myJavascript.js

    - JavaScript for retrieving browser locale, locale-specific messages, etc.

  - myStyles.css

    - locale-dependent CSS

Examinons chacune des nouvelles fonctionnalités à tour de rôle — chacune des sections ci-dessous représente une étape à suivre lors de l'internationalisation de votre extension.

## Fourniture de chaînes localisées dans \_locales

Vous pouvez rechercher des sous-étiquettes de langue à l'aide de l'outil de *Recherche*r de la [page de recherche sous-étiquette de langue](http://r12a.github.io/apps/subtags/). Notez que vous devez rechercher le nom anglais de la langue.

Chaque système i18n nécessite la fourniture de chaînes traduites dans tous les différents environnements que vous souhaitez prendre en charge. Dans les extensions, elles sont contenues dans un répertoire appelé `_locales`, placé dans la racine de l'extension. Chaque environnement local a ses chaînes (appelées messages) contenues dans un fichier appelé `messages.json`, qui est placé dans un sous-répertoire de `_locales`, nommé en utilisant la sous-étiquette de langue pour la langue de ce local.

Notez que si la sous-étiquette inclut une langue de base plus une variante régionale, la langue et la variante sont classiquement séparées en utilisant un trait d'union: par exemple, "en-US". Cependant, dans les répertoires sous `_locales`, **le séparateur doit être un trait de soulignement** : "en_US".

[Par exemple, dans notre exemple d'application](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n/_locales) nous avons des répertoires pour "en" (anglais), "de" (allemand), "nl" (néerlandais), et "ja" (Japonais). Chaque d'entre eux a un fichier `messages.json` à l'intérieur.

Regardons maintenant la structure de l'un de ces fichiers ([\_locales/en/messages.json](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/_locales/en/messages.json)):

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

Ce fichier est un JSON standard — chacun de ses membres est un objet avec un nom, qui contient un `message` et une `description`. Tous ces éléments sont des chaînes ; `$URL$` est un espace réservé, qui est remplacé par une sous-chaîne au moment où le membre `notificationContent` est appelé par l'extension. Vous apprendrez à le faire dans la section [Récupération des chaînes de messages de JavaScript](#récupération_des_chaînes_de_messages_de_javascript).

> **Note :** Vous pouvez trouver beaucoup plus d'informations sur le contenu des fichiers `messages.json` dans notre [référence spécifique aux paramètres régionaux](/fr/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationaliser manifest.json

Il y a plusieurs tâches à accomplir pour internationaliser votre manifest.json.

### Récupération des chaînes localisées dans le manifest

Votre [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/manifest.json) inclut des chaînes qui sont affichées à l'utilisateur, telles que le nom et la description de l'extension. Si vous internationalisez ces chaînes et en mettez les traductions appropriées dans messages.json, la traduction correcte de la chaine sera affichée à l'utilisateur, en fonction des paramètres régionaux actuels, comme cela.

Pour internationaliser les chaînes, spécifiez-les comme ceci :

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Ici, nous récupérons des chaînes de message en fonction des paramètres régionaux du navigateur, plutôt que d'inclure uniquement des chaînes statiques.

Pour appeler une chaîne de message comme celle-ci, vous devez le spécifier comme ceci :

1. Deux underscores, suivi de
2. La chaîne "MSG", suivi de
3. Un trait de soulignement, suivi de
4. Le nom du message que vous souhaitez appeler tel que défini dans `messages.json`, suivi de
5. Deux underscores

   ```
   __MSG_ + messageName + __
   ```

### Spécification d'un paramètre régional par défaut

Un autre champ que vous devez spécifier dans votre fichier manifest.json est [default_locale](/fr/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Cela spécifie un paramètre régional par défaut à utiliser si l'extension n'inclut pas de chaîne localisée pour les paramètres régionaux actuels du navigateur. Toutes les chaînes de message qui ne sont pas disponibles dans les paramètres régionaux du navigateur proviennent des paramètres régionaux par défaut. Il y a d'autres détails à connaître en termes de la façon dont le navigateur sélectionne les chaînes — voir [Sélection de chaîne localisée](#sélection_de_chaîne_localisée).

## CSS dépendant des paramètres régionaux

Notez que vous pouvez également récupérer des chaînes localisées à partir de fichiers CSS dans l'extension. Par exemple, vous pouvez créer une règle CSS dépendante des paramètres régionaux, comme ceci :

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Ceci est utile, bien que vous fassiez mieux de gérer une telle situation en utilisant [Messages prédéfinis](#messages_prédéfinis).

## Récupération des chaînes de messages de JavaScript

Donc, vous avez configuré vos chaînes de message et votre manifest. Maintenant, Il vous suffit de commencer à appeler vos chaînes de message à partir de JavaScript pour que votre extension puisse parler le plus possible la bonne langue. L' [API i18n](/fr/Add-ons/WebExtensions/API/i18n) est assez simple, contenant seulement quatre méthodes principales :

- Vous utiliserez probablement {{WebExtAPIRef("i18n.getMessage()")}} le plus souvent — c'est la méthode que vous utilisez pour récupérer une chaîne de langue spécifique, comme mentionné ci-dessus. Nous verrons des exemples d'utilisation spécifiques ci-dessous.
- Les méthodes {{WebExtAPIRef("i18n.getAcceptLanguages()")}} et {{WebExtAPIRef("i18n.getUILanguage()")}} peuvent être utilisées si vous avez besoin de personnaliser l'interface utilisateur en fonction des paramètres régionaux — peut-être que vous souhaitez pour afficher les préférences spécifiques aux langues préférées des utilisateurs plus haut dans une liste de préférences, ou afficher des informations culturelles pertinentes uniquement pour une certaine langue, ou formater les dates affichées de manière appropriée selon les paramètres régionaux du navigateur.
- La méthode {{WebExtAPIRef("i18n.detectLanguage()")}} peut être utilisée pour détecter la langue du contenu soumis par l'utilisateur et la formater de manière appropriée.

Dans notre exemple [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n), le [script d'arrière plan](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/background-script.js) contient les lignes suivantes :

```js
var title = browser.i18n.getMessage("notificationTitle");
var content = browser.i18n.getMessage("notificationContent", message.url);
```

La première récupère juste le `message` du champ `notificationTitle` du fichier `messages.json` le plus approprié pour les paramètres régionaux actuels du navigateur. Le second est similaire, mais il est passé une URL en tant que deuxième paramètre. Ce qui donne? C'est ainsi que vous spécifiez le contenu pour remplacer l'espace réservé `$URL$` que nous voyons dans le champ `message` du champ `notificationContent` :

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

Le membre `"placeholders"` définit tous les espaces réservés et d'où ils sont extraits. L'espace réservé `"url"` spécifie que son contenu est pris à partir de $1, qui est la première valeur donnée dans le second paramètre de `getMessage()`. Puisque l'espace réservé est appelé `"url"`, nous utilisons `$URL$` pour l'appeler dans la chaîne de message (pour `"name"` vous utiliserez `$NAME$`, etc.) Si vous avez plusieurs espaces réservés, vous pouvez les fournir à l'intérieur un tableau qui est donné à {{WebExtAPIRef("i18n.getMessage()")}} en tant que deuxième paramètre — `[a, b, c]`sera disponible en `$1`, `$2`, et `$3`, et ainsi de suite, à l'intérieur des `messages.json`.

Parcourons un exemple: la chaîne originale du message `notificationContent` dans le fichier `en/messages.json` est

```
You clicked $URL$.
```

Disons que le lien a été cliqué sur `https://developer.mozilla.org`. Après l'appel {{WebExtAPIRef("i18n.getMessage()")}} , le contenu du deuxième paramètre est mis à disposition dans messages.json sous la forme `$1`, qui remplace l'espace réservé `$URL$` tel qu'il est défini dans l'espace réservé `"url"`. Donc, la chaîne de message final est

```
You clicked https://developer.mozilla.org.
```

### Utilisation de l'espace réservé direct

Il est possible d'insérer vos variables (`$1`, `$2`, `$3`, etc.) directement dans les chaînes de message, par exemple nous pourrions réécrire le membre `"notificationContent"` comme ceci :

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Cela peut sembler plus rapide et moins complexe, mais l'inverse (en utilisant `"placeholders"`) est considéré comme la meilleure pratique. En effet, avoir le nom de l'espace réservé (par exemple `"url"`) et l'exemple vous aide à vous souvenir de l'espace réservé pour l'espace réservé — une semaine après avoir écrit votre code, vous oublierez probablement ce que `$1` – `$8`, plus susceptibles de savoir à quoi correspondent les noms de vos espaces réservés.

### Substitution codée en dur

Il est également possible d'inclure des chaînes codées en dur dans des espaces réservés, de sorte que la même valeur soit utilisée à chaque fois, au lieu d'obtenir la valeur d'une variable dans votre code. Par exemple :

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

Dans ce cas, nous ne faisons que coder en dur le contenu de l'espace réservé, plutôt que de l'obtenir à partir d'une valeur de variable comme `$1`. Cela peut parfois être utile lorsque votre fichier de message est très complexe et que vous souhaitez séparer différentes valeurs pour rendre les chaînes plus lisibles dans le fichier. De plus, ces valeurs peuvent être accédées par programmation.

En outre, vous pouvez utiliser ces substitutions pour spécifier les parties de la chaîne que vous ne souhaitez pas traduire, telles que les noms de personne ou d'entreprise.

## Sélection de chaîne localisée

Les paramètres régionaux peuvent être spécifiés en utilisant uniquement un code de langue, comme `fr` ou `en`, ou ils peuvent être qualifiés avec un code de région, comme `en_US` ou `en_GB`, qui décrit une variante régionale du même langage de base. Lorsque vous demandez au système i18n une chaîne, il sélectionne une chaîne en utilisant l'algorithme suivant:

1. S'il existe un fichier `messages.json` pour l'environnement local actuel exact et qu'il contient la chaîne, renvoyez-le.
2. Sinon, si l'environnement local actuel est qualifié avec une région (par exemple `en_US`) et qu'il existe un fichier `messages.json` pour la version sans région de cet environnement local (par exemple `en`), et que ce fichier contient la chaîne, renvoyez-le.
3. Sinon, s'il existe un fichier `messages.json` pour l'argument `default_locale` défini dans `manifest.json`, et qu'il contient la chaîne, renvoyez-le.
4. Sinon, renvoyez une chaîne vide.

Prenons l'exemple suivant :

- extension-root-directory/

  - \_locales

    - en_GB

      - messages.json

        - `{ "colorLocalised": { "message": "colour", "description": "Color." }, ... }`

      en

      - messages.json

        - `{ "colorLocalised": { "message": "color", "description": "Color." }, ... }`

    - fr

      - messages.json

        - `{ "colorLocalised": { "message": "couleur", "description": "Color." }, ...}`

Supposons que `default_locale` soit défini sur `fr`, et que les paramètres régionaux actuels du navigateur soient `en_GB` :

- Si l'extension appelle `getMessage("colorLocalised")`, elle retournera "couleur".
- Si "colorLocalised" n'était pas présent dans `en_GB`, alors `getMessage("colorLocalised")`, retournerait "color", pas "couleur".

## Messages prédéfinis

Le module i18n nous fournit des messages prédéfinis, que nous pouvons appeler de la manière que nous l'avons vu précédemment dans [Récupération des chaînes localisées dans le manifest](#récupération_des_chaînes_localisées_dans_le_manifest). Par exemple :

```
__MSG_extensionName__
```

Les messages prédéfinis utilisent exactement la même syntaxe, sauf avec `@@` avant le nom du message, par exemple

```
__MSG_@@ui_locale__
```

Le tableau suivant montre les différents messages prédéfinis disponibles :

<table class="standard-table">
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
          L'UUID généré en interne de l'extension. Vous pouvez utiliser cette
          chaîne pour créer des URL pour les ressources à l'intérieur de
          l'extension. Même les extensions non localisées peuvent utiliser ce
          message.
        </p>
        <p>Vous ne pouvez pas utiliser ce message dans un fichier manifest.</p>
        <p>
          Notez également que cet ID n'est pas l'ID de module complémentaire
          renvoyé par {{WebExtAPIRef("runtime.id")}}. Il peut être
          défini à l'aide de la clé
          <a href="/fr/Add-ons/WebExtensions/manifest.json/applications"
            >applications</a
          >
          dans le fichier manifest.json. C'est l'UUID généré qui apparaît dans
          l'URL de l'add-on. Cela signifie que vous ne pouvez pas utiliser cette
          valeur comme paramètre <code>extensionId</code> pour
          {{WebExtAPIRef("runtime.sendMessage()")}}, et que vous
          ne pouvez pas l'utiliser pour vérifier la propriété id d'un objet
          {{WebExtAPIRef("runtime.MessageSender")}}.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Les paramètres régionaux actuels vous pouvez utiliser cette chaîne pour
        créer des URL spécifiques aux paramètres régionaux.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        La direction du texte pour les paramètres régionaux actuels, soit "ltr"
        pour les langues de gauche à droite telles que l'anglais ou "rtl" pour
        les langues de droite à gauche telles que l'arabe.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Si le <code>@@bidi_dir</code> est "ltr", alors il s'agit de "rtl";
        sinon, c'est "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Si le <code>@@bidi_dir</code> est "ltr", alors c'est "gauche"; sinon,
        c'est "droite".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Si le <code>@@bidi_dir</code> est "ltr", alors c'est "droite"; sinon,
        c'est "gauche".
      </td>
    </tr>
  </tbody>
</table>

Pour en revenir à notre exemple, il serait plus logique de l'écrire comme ceci :

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Maintenant, nous pouvons simplement stocker nos images locales spécifiques dans des répertoires qui correspondent aux différentes locales que nous soutenons — en, de, etc. — ce qui est beaucoup plus logique.

Regardons un exemple d'utilisation des messages `@@bidi_*` dans un fichier CSS :

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

Pour les langues de gauche à droite telles que l'anglais, les déclarations CSS impliquant les messages prédéfinis ci-dessus se traduiraient par les lignes de code définitives suivantes :

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Pour une langue de droite à gauche comme l'arabe, vous obtiendrez :

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Tester votre extension

Depuis Firefox 45, vous pouvez installer temporairement des extensions à partir du disque — voir [Chargement depuis le disque](/fr/Add-ons/WebExtensions/Packaging_and_installation#Loading_from_disk). Pour ce faire, puis essayez de tester notre extension [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n). Accédez à l'un de vos sites Web préférés et cliquez sur un lien pour voir si une notification s'affiche indiquant l'URL du lien cliqué.

Ensuite, changez les paramètres régionaux de Firefox en un supporté dans l'extension que vous voulez tester.

1. Ouvrez "about:config" dans Firefox, et recherchez la préférence `intl.locale.requested` (gardez à l'esprit qu'avant Firefox 59, cette préférence s'appellait `general.useragent.locale`).
2. Double-cliquez sur la préférence (ou appuyez sur Retour/Entrée) pour le sélectionner, entrez le code de langue pour les paramètres régionaux que vous voulez tester, puis cliquez sur "OK" (ou appuyez sur Retour/Entrée). Par exemple, dans notre exemple d'extension, "en" (anglais), "de" (allemand), "nl" (néérlandais), et "ja" (Japonais) sont pris en charge.
3. Recherchez `intl.locale.matchOS` et double-cliquez sur la préférence pour qu'elle soit définie sur `false`.
4. Redémarrez votre navigateur pour terminer la modification.

> **Note :** Cela fonctionne pour modifier les paramètres régionaux du navigateur, même si vous n'avez pas installé le [pack de language](/fr/firefox/language-tools/) pour cette langue. Vous obtiendrez simplement l'interface du navigateur dans votre langue par défaut si c'est le cas.

Chargez l'extension temporairement à partir du disque, puis testez vos nouveaux paramètres régionaux:

- Visitez à nouveau "about:addons" — vous devriez maintenant voir l'extension listée, avec son icône, plus son nom et sa description dans la langue choisie.
- Testez votre extension à nouveau. Dans notre exemple, vous allez sur un autre site Web et cliquez sur un lien, pour voir si la notification apparaît maintenant dans la langue choisie.

{{EmbedYouTube("R7--fp5pPGg")}}
