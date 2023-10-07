---
title: Locale-specific message reference
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
---

{{AddonSidebar()}}

Chaque extension internationalisée a au moins un fichier nommé `messages.json` qui fournit des chaînes spécifiques aux paramètres régionaux. Cette page décrit le format des fichiers `messages.json`.

> **Note :** Pour plus d'informations sur l'internationalisation de vos extensions, consultez notre guide [i18n](/fr/Add-ons/WebExtensions/WebExtension_i18n).

## Exemple messages.json

Le code suivant montre un exemple de fichier `messages.json file`, tiré de notre extension [d'exemple notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n). Seuls les champs "_name_" et "message" ont obligatoires.

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

## Placement

Vos fichiers `messages.json` doivent être placés dans des répertoires nommés d'après les paramètres régionaux que chacun supporte — `en`, `de`, `ja`, etc. Ceux-ci doivent être placés dans un répertoire appelé `_locales`, à l'intérieur de la racine de votre extension.

## Détails des membres

Cette section décrit chaque membre qui peut apparaître dans un fichier `messages.json`.

### name

Chaque membre de niveau supérieur est nommé d'après le nom de la chaîne de message que vous localisez, par exemple `"extensionName"` ou `"notificationContent"` dans l'exemple ci-dessus. Chaque nom est insensible à la casse et agit comme une clé vous permettant de récupérer le texte du message localisé.

Le nom peut inclure les caractères suivants :

- A-Z
- a-z
- 0-9
- \_ (underscore)
- @

> **Note :** Vous ne devez pas définir les noms commençant par @@. Ces noms sont réservés aux [messages prédéfinis](/fr/Add-ons/WebExtensions/Internationalization#Predefined_messages).

### message

Au moins, cette propriété doit être définie pour chaque chaîne. Le membre `"message"` contient une chaîne localisée qui peut contenir [placeholders](#placeholders). Vous pouvez utiliser :

- _$placeholder_name$_ (case insensitive) pour insérer un espace réservé particulier (par exemple $URL$ dans l'exemple ci-dessus) dans votre chaîne.
- `$1`, `$2`, `$3`, etc. pour insérer directement les valeurs obtenues à partir d'un {{WebExtAPIRef("i18n.getMessage()")}} appel dans votre chaîne.

Autres points à noter :

- Tout nombre de signes dollar consécutifs apparaissant dans les chaînes est remplacé par le même nombre de signes dollar moins un. donc, $$ > $, $$$ > $$, etc.
- Lorsque le fichier de paramètres régionaux est lu, les jetons correspondant à `/\$([a-z0-9_@]+)\$/i` sont remplacés par la valeur correspondante de l'objet "placeholders" de la chaîne. Ces substitutions se produisent avant le traitement des `/\$\d/` jetons dans le message.
- Lorsqu'une chaîne locale est utilisée, les jetons correspondant à `/\$\d+/` sont remplacés par les remplacements passés à {{WebExtAPIRef("i18n.getMessage()")}}.
- `getMessage()` ne traitera pas les appels avec plus de 9 placeholders/substitutions.

### description

{{optional_inline}}

Le membre `"description"` doit contenir une description du contenu de la chaîne de message, destinée à fournir un traducteur pour aider à créer la meilleure traduction possible de la chaîne.

### placeholders

{{optional_inline}}

Le membre `"placeholders"` définit une ou plusieurs sous-chaînes à utiliser dans le message — celles-ci peuvent être utilisées pour coder en dur les éléments que vous ne voulez pas traduire, ou vous référer à des variables.

Chaque définition de sous-chaîne d'espace réservé possède un certain nombre de valeurs :

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### Nom placeholder

Le nom de l'espace réservé est utilisé pour représenter l'espace réservé dans la chaîne de substitution (par exemple `"url"` devient `$url$`). Il est insensible à la casse et peut contenir les mêmes caractères qu'une chaîne de message [name](#name).

#### contenu

L'élément "contenu" définit le contenu de l'espace réservé. Cela peut être une chaîne codée en dur, telle que "My placeholder", mais elle peut également inclure des valeurs obtenues à partir d'un appel {{WebExtAPIRef("i18n.getMessage()")}}. Cette propriété est obligatoire Pour plus d'informations, voir [Récupération des chaînes de messages à partir de Javascript](/fr/Add-ons/WebExtensions/Internationalization#Retrieving_message_strings_from_JavaScript).

#### Exemple

{{optional_inline}}

L'élément optionnel "exemple" est là encore destiné à aider les traducteurs en leur montrant un exemple de la façon dont l'espace réservé apparaîtrait aux utilisateurs finaux, leur permettant de faire le meilleur choix lors de la localisation du fichier.
