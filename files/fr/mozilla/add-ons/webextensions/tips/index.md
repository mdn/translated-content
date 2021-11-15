---
title: Trucs et astuces
slug: Mozilla/Add-ons/WebExtensions/Tips
tags:
  - Astuces
  - ECMAScript
  - Trucs
  - Trucs et Astuces
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Tips
---
{{AddonSidebar}}

Cette page contient divers conseils et astuces qui devraient être utiles à beaucoup de personnes développant des extensions à l'aide des API WebExtension.

## Utilisation des fonctionnalités JavaScript avancées d'ECMAScript 2015 et 2016

Firefox prend [en charge de nombreuses fonctionnalités de ECMAScript 2015](/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) hors de la boite. Cependant, plusieurs nouvelles fonctionnalités expérimentales ne sont pas disponibles sur le Web ou WebExtensions par défaut. Si vous souhaitez utiliser ces fonctionnalités, il est préférable de transférer votre code à l'aide d'un outil tel que [Babel](https://babeljs.io/).

Attention, tout ce qui se trouve en dessous de cette ligne est obsolète et a été retiré de Babel 6.

Babel fournit des transformations pour la grande majorité des fonctionnalités ES2015 et les active par défaut. Puisque Firefox supporte déjà la plupart d'entre eux, il est préférable de configurer Babel pour les ignorer. Nous vous suggérons de créer un fichier `.babelrc`, ou une section `babel` dans le fichier `package.json` de votre projet contenant les éléments suivants :

```js
{
  "env": {
    "firefox": {
      "sourceMaps": "inline",
      "blacklist": [
        "es5.properties.mutators",
        "es6.arrowFunctions",
        "es6.destructuring",
        "es6.forOf",
        "es6.parameters",
        "es6.properties.computed",
        "es6.properties.shorthand",
        "es6.spec.symbols",
        "es6.spread",
        "es6.tailCall",
        "es6.templateLiterals",
        "es6.regex.sticky",
        "es6.regex.unicode"
      ]
    }
  }
}
```

Ensuite, pour compiler un script individuel, lancez simplement :

    BABEL_ENV=firefox babel <filename>

Ou, pour compiler chaque fichier JavaScript sous le répertoire `src` et placer les fichiers compilés dans la `compilation`, en copiant les fichiers non-JavaScript dans le processus, lancez:

    BABEL_ENV=firefox babel -Dd compiled src
