---
title: x-ms-format-detection
slug: Web/HTML/Global_attributes/x-ms-format-detection
tags:
  - Attribut
  - HTML
  - Non-standard
  - Reference
translation_of: Web/HTML/Global_attributes/x-ms-format-detection
original_slug: Web/HTML/Attributs_universels/x-ms-format-detection
---
{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

L'attribut **`x-ms-format-detection`** détermine si le format de la donnée dans le contenu est détectée automatiquement et, lorsqu'elle est trouvée, est convertie en un lien sur lequel on peut cliquer.

> **Note :** Les liens créés grâce à la détection de format n'apparaissent pas dans le DOM.

{{Non-standard_inline}}Cette propriété est spécifique à Internet Explorer et à Microsoft Edge.

## Syntaxe

```html
<html x-ms-format-detection="none">
```

## Valeurs

Cet attribut peut prendre une chaîne de caractères parmi les suivantes comme valeur :

- `all`
  - : Tous les formats de donnée pris en charge sont détectés.
- `none`
  - : La détection de format est désactivée.
- `phone`
  - : Seuls les numéros de téléphone sont détectés.

> **Note :** Les liens créés via la détection de format n'auront pas d'impact sur le contenu ou sur la disposition du DOM.

## Exemples

Pour désactiver la détection automatique sous certaines conditions, on pourra par exemple utiliser JavaScript afin d'ajouter `x-ms-format-detection` sur les éléments qu'on soit sur un mobile (détection activée) ou sur un ordinateur de bureau (détection désactivée) :

```js
if (window.matchMedia('(min-width: 1024px)').matches) {
    var e = document.getElementsByClassName("phone");
    for (i = 0; i < e.length; i++)
        e[i].setAttribute("x-ms-format-detection", "none");
}
```

Dans cet exemple, les numéros de téléphone conservent la mise en forme tant que la zone d'affichage (_viewport_) est moins large que 1024 pixels.

## Voir aussi

- [Les extensions spécifiques à Microsoft](/fr/docs/Web/API/Microsoft_Extensions)
