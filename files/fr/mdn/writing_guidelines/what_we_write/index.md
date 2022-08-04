---
title: Ceci a-t-il sa place sur MDN ?
slug: MDN/Writing_guidelines/What_we_write
tags:
  - Guide
  - Guidelines
  - MDN Meta
translation_of: MDN/Guidelines/Does_this_belong_on_MDN
original_slug: MDN/Guidelines/Does_this_belong_on_MDN
---
{{MDNSidebar}}

Dans cet article, nous verrons comment décider de si un sujet ou un type de contenu doit être documenté sur MDN. Nous verrons également les autres emplacements où ce contenu pourra résider.

## La question

Si vous préparez la documentation d'un sujet, vous vous demandez peut-être si sa place est sur MDN. Vous envisagez peut-être de maintenir la documentation dans votre code source ou de publier sur le [wiki de Mozilla](https://wiki.mozilla.org/) ou dans les fichiers README d'un dépôt Git. Voyons quelles sont les meilleures options pour votre contenu.

Les deux aspects principaux qui permettent de déterminer si un contenu a sa place sur MDN sont :

- Le sujet du document (de quoi il s'agit)
- La nature du document (de quel type de document il s'agit)

Attention, toute contribution à MDN s'inscrit avec des licences open source. Celles-ci sont [décrites en détail](/fr/docs/MDN/About#copyrights_and_licenses) dans notre [page À propos de MDN](/fr/docs/MDN/About).

> **Note :** Les [Conditions d'utilisation des sites web et de communication](https://www.mozilla.org/fr/about/legal/terms/mozilla/) de Mozilla s'appliquent lorsque vous contribuez à MDN. Lisez ce document pour connaître ce qui peut et ce qui ne peut pas être publié sur les sites de Mozilla.

## Ce qui a sa place sur MDN

En général, MDN est utilisé pour documenter les technologies web open source. Cela comprend toute fonctionnalité qui peut être utilisée par les développeuses et développeurs web afin de créer des sites et des applications web. S'il s'agit d'une fonctionnalité implémentée par plusieurs navigateurs et spécifiée de façon standard ou en voie de standardisation, alors sa documentation a pleinement sa place sur MDN. S'il s'agit d'une fonctionnalité expérimentale et qui n'est pas implémentée dans plusieurs navigateurs ou qui est sujette à modification alors elle pourra être documentée mais ne sera pas forcément priorisée.

Les sujets majeurs de MDN sont les technologies web côté client :

- [HTML](/fr/docs/Web/HTML)
- [CSS](/fr/docs/Web/CSS)
- [JavaScript](/fr/docs/Web/JavaScript)
- [SVG](/fr/docs/Web/SVG)
- [Les API Web](/fr/docs/Web/API)
- [WebGL](/fr/docs/Web/API/WebGL_API)
- etc.

> **Note :** Les technologies côté serveur sont généralement documentées autre part et cette documentation n'est pas remplacée par MDN, mais il existe [quelques exceptions](/fr/docs/Learn/Server-side).

Les sujets relatifs au développement web et qui portent sur différentes technologies sont également les bienvenus sur MDN :

- [Accessibilité](/fr/docs/Web/Accessibility)
- [AJAX](/fr/docs/Web/Guide/AJAX)
- [Graphisme sur le Web](/fr/docs/Web/Guide/Graphics)
- [Applications web progressives (PWA)](/fr/docs/Web/Progressive_web_apps)
- [Jeux sur le Web](/fr/docs/Games)

> **Note :** MDN documente certaines fonctionnalités non-standard lorsqu'elles sont exposées sur le Web et que leur usage est important (comme les propriétés CSS spécifiques à WebKit par exemple). MDN documente également certaines technologies standard, hors du Web, si celles-ci s'avèrent utiles aux développeuses et développeurs web : voir [la section sur les technologies connexes au Web](/fr/docs/Related).

## Ce qui n'a pas sa place sur MDN

De façon générale, tout ce qui n'est pas décrit par un standard ouvert du Web n'appartient pas à MDN. Cette section indique quelques règles complémentaires.

### Produits Mozilla

Le contenu de MDN portait auparavant également sur les produits de Mozilla. Cette documentation a été migrée vers d'autres projets :

- [La documentation relative au développement de Firefox](https://firefox-source-docs.mozilla.org/)
- [La documentation relative aux outils de développement web (devtools) dans Firefox](https://firefox-dev.tools/)
- [La documentation des extensions pour tout ce qui a trait à la publication dans Firefox](https://extensionworkshop.com)

### Quoi d'autre ?

Voici d'autres exemples de sujets inappropriés pour MDN :

- Les technologies non exposées au web et spécifique à un navigateur en particulier.
- Les technologies qui ne sont pas relatives au Web.
- La documentation des produits Mozilla à destination des utilisatrices et utilisateurs finaux qui ont leur place [sur le site de support Mozilla](https://support.mozilla.org).
