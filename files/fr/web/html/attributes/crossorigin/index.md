---
title: 'Attribut HTML : crossorigin'
slug: Web/HTML/Attributes/crossorigin
tags:
  - Advanced
  - Attribute
  - CORS
  - HTML
  - NeedsContent
  - Reference
  - Security
translation_of: Web/HTML/Attributes/crossorigin
original_slug: Web/HTML/Reglages_des_attributs_CORS
---
{{HTMLSidebar}}

L'attribut **`crossorigin`**, valable sur les éléments [`<audio>`](/fr/docs/Web/HTML/Element/audio), [`<img>`](/fr/docs/Web/HTML/Element/Img), [`<link>`](/fr/docs/Web/HTML/Element/link), [`<script>`](/fr/docs/Web/HTML/Element/script) et [`<video>`](/fr/docs/Web/HTML/Element/video), fournit la prise en charge de [CORS](/en-US/docs/Web/HTTP/CORS), définissant la manière dont l'élément traite les demandes d'origine croisée, permettant ainsi la configuration des demandes CORS pour les données extraites de l'élément. Selon l'élément, l'attribut peut être un attribut de paramètres CORS.

L'attribut de contenu `crossorigin` sur les éléments médias est un attribut de paramétrage CORS.

Ces attributs sont énumérés, et ont les valeurs possibles suivantes :

| Mot-clé           | Description                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Les requêtes CORS pour cet élément auront le marqueur d'authentification (_credentials flag_) avec la valeur `'same-origin'`.           |
| `use-credentials` | Les requêtes CORS pour cet élément auront le marqueur d'authentification (_credentials flag_) avec la valeur `'include'`.               |
| `""`              | Utiliser la chaîne vide (`crossorigin=""`) ou l'attribut seul (`crossorigin`) sera équivalent à l'utilisation de la valeur `anonymous`. |

Par défaut (quand l'attribut n'est pas spécifié), le CORS n'est pas du tout utilisé. Le mot-clé « anonymous » signifie que, lorsqu'il n'y a pas la même origine, il n'y aura ni échange d**'informations d'authentification de l'utilisateur** via des cookies, ni des certificats TLS côté client ou des authentifications HTTP comme détaillé dans la [section terminologique de la spécification CORS](https://www.w3.org/TR/cors/#user-credentials).

Un mot-clé invalide ou une chaîne de caractères vide seront interprétés comme le mot-clé `anonymous`.

> **Note :** Avant Firefox 83, l'attribut `crossorigin` n'était pas pris en charge pour `rel="icon"` ; il existe également [un bug sur Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645).

## Exemples

### Utiliser `crossorigin` avec l'élément `script`

On peut utiliser l'élément [`<script>`](/fr/docs/Web/HTML/Element/script) afin d'indiquer au navigateur d'exécuter un script (ici, `https://exemple.com/framework-exemple.js`) sans envoyer les informations d'authentification de l'utilisateur.

```html
<script src="https://exemple.com/framework-exemple.js" crossorigin="anonymous"></script>
```

### Utiliser des informations d'authentification avec un manifeste

La valeur `use-credentials` doit être utilisée lorsqu'on récupère un [manifeste](/fr/docs/Web/Manifest) nécessitant des informations d'authentification, y compris lorsque le fichier provient de la même origine :

```html
<link rel="manifest" href="/app.manifest" crossorigin="use-credentials">
```

## Spécifications

| Spécification                                                                                                                            | Statut                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'infrastructure.html#cors-settings-attributes', 'CORS settings attributes')}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML WHATWG', 'embedded-content.html#attr-img-crossorigin', 'crossorigin')}}                     | {{Spec2('HTML WHATWG')}} |

## Compatibilité des navigateurs

### Pour l'élément script

{{Compat("html.elements.script.crossorigin")}}

### Pour l'élément video

{{Compat("html.elements.video.crossorigin")}}

### Pour l'élément link

{{Compat("html.elements.link.crossorigin")}}

## Voir aussi

- [Partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/CORS)
- [L'attribut HTML `rel`](/fr/docs/Web/HTML/Attributes/rel)
