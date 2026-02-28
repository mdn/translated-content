---
title: Carte de sources (Source map)
slug: Glossary/Source_map
l10n:
  sourceCommit: 7d4f930455a349e3c73836500add3d4840c76f5d
---

Une **carte de sources** (<i lang="en">source map</i> en anglais) est un fichier au format {{Glossary("JSON")}} qui fait le lien entre le code minifié ou transformé reçu par le navigateur et sa forme originale non modifiée, permettant de reconstituer et d'utiliser le code original lors du débogage.

Le code exécuté par le navigateur est souvent transformé d'une manière ou d'une autre par rapport à la source créée par le·la développeur·euse. Plusieurs raisons expliquent cela&nbsp;:

- Rendre la livraison du code depuis le serveur plus efficace en combinant et en minifiant les fichiers sources.
- Prendre en charge les anciens navigateurs en transformant les fonctionnalités modernes en équivalents plus anciens.
- Utiliser des langages non pris en charge par les navigateurs, comme {{Glossary("TypeScript")}} ou [Sass <sup>(angl.)</sup>](https://sass-lang.com/).

Dans ces situations, il est plus intuitif de déboguer la source originale que le code transformé téléchargé par le navigateur.
Les navigateurs détectent une source map via l'en-tête HTTP {{HTTPHeader("SourceMap")}} d'une ressource, ou une annotation `sourceMappingURL` dans le code généré.

## Exemples

Par exemple, considérons cette syntaxe SCSS de Sass&nbsp;:

```scss
ul {
  list-style: none;
  li {
    display: inline;
  }
}
```

Lors du processus de construction, le SCSS est transformé en CSS.
Un fichier source map `index.css.map` est généré et lié depuis le CSS par un commentaire à la fin&nbsp;:

```css
ul {
  list-style: none;
}
ul li {
  display: inline;
}

/*# sourceMappingURL=index.css.map */
```

Ce fichier map contient non seulement les correspondances entre le SCSS original et le CSS généré, mais aussi le code source SCSS original sous forme encodée. Il est ignoré par l'analyseur CSS du navigateur mais utilisé par les outils de développement du navigateur&nbsp;:

```json
{
  "version": 3,
  "sourceRoot": "",
  "sources": ["index.scss"],
  "names": [],
  "mappings": "AAAA;EACC;;AACA;EACC",
  "file": "index.css"
}
```

La carte de sources permet aux outils de développement du navigateur de faire le lien avec des lignes spécifiques du fichier SCSS original et d'afficher le code source&nbsp;:

![Outils de développement Firefox focalisés sur l'élément li dans l'inspecteur DOM. Le panneau de styles montre le CSS transformé sans imbrication et un lien vers la troisième ligne du fichier index.scss.](inspector.png)

![Outils de développement Firefox avec le fichier index.scss ouvert dans l'éditeur de styles. L'éditeur est focalisé sur la troisième ligne du code source au format SCSS avec imbrication.](style-editor.png)

## Voir aussi

- [Spécification du format source map <sup>(angl.)</sup>](https://tc39.es/ecma426/2024/)
- L'en-tête de réponse HTTP {{HTTPHeader("SourceMap")}}
- [Outils de développement Firefox&nbsp;: utiliser une carte de sources <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
