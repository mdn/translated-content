---
title: Type CSS `<url>`
short-title: <url>
slug: Web/CSS/Reference/Values/url_value
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<url>`** est un pointeur vers une ressource.

## Syntaxe

```plain
<url> = url()
```

### Valeurs

La valeur peut être une URL absolue ou relative.

- {{CSSxRef("url_function", "url()")}}
  - : La fonction `url()` accepte une URL, qui peut être écrite sous forme de chaîne de caractères entre guillemets ou sous forme de jeton URL sans guillemets.

> [!NOTE]
> Le [module sur les valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units) introduit également la fonction `src()` en tant que valeur `<url>`. Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Description

Le type de données `<url>`, écrit avec la fonction {{CSSxRef("url_function", "url()")}}, représente une `URL`, qui est un pointeur vers une ressource interne ou externe. La ressource peut être une image, une vidéo, un fichier CSS, un fichier de police, une fonctionnalité SVG, etc. L'URL peut être absolue ou relative.

```css
/* URL relative */
url("styles.css")
url("assets/icon.svg")
url("../assets/image.png")

/* URL absolue */
url("http://example.com/fonts/myFont.ttf")
url("https://example.com/images/background.jpg")

/* URL de données */
url("data:image/svg+xml,%3Csvg'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3C/svg%3E")
url("data:image/png;base64,iVBORw0KGgoAAA...")
```

### Ressources externes et CORS

La capacité d'importer des ressources externes avec la valeur `<url>` est définie par l'implémentation et souvent restreinte pour des raisons de sécurité.

Selon la propriété CSS sur laquelle une `<url>` faisant référence à des ressources externes est appliquée, la ressource peut être soumise à des restrictions de [Partage de ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS).

Certaines propriétés CSS, y compris {{CSSxRef("mask-image")}}, {{CSSxRef("filter")}}, ainsi que {{CSSxRef("clip-path")}} et quelques autres lorsqu'elles font référence à des éléments d'image {{SVGElement("svg")}}, peuvent nécessiter une validation CORS réussie lorsqu'elles provoquent la récupération de ressources externes et inter-origines en mode CORS. Si la validation CORS échoue, la ressource peut être bloquée et donc non utilisée pour le rendu.

Notez que le type de valeur `<url>` n'impose pas lui-même la validation CORS, mais les propriétés CSS individuelles le font.

Lors de l'ouverture d'un fichier HTML directement avec `file://`, les ressources peuvent échouer car les règles CORS s'appliquent localement. Les navigateurs modernes traitent `file://` comme une origine unique, ce qui signifie que les ressources croisées peuvent être bloquées. Dans ce cas, un [serveur HTTP](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) peut être hébergé pour éviter les erreurs CORS. Le comportement de sécurité des URL `file://` varie également en fonction du navigateur et des permissions de fichiers du système d'exploitation.

## Exemples

URL relative

```css
body {
  background-image: url("images/background.jpg");
}
```

URL absolue

```css
body {
  background-image: url("https://example.com/images/background.jpg");
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- La fonction {{CSSxRef("url_function", "url()")}}
