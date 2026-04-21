---
title: Fragment d'une URI
short-title: Fragment
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Le **fragment** d'une URI est la dernière partie de l'URI, commençant par le caractère `#`. Il sert à identifier une partie spécifique de la ressource, comme une section d'un document ou une position dans une vidéo. Le fragment n'est pas envoyé au serveur lors de la requête de l'URI, mais il est traité par le client (comme le navigateur) après la récupération de la ressource.

## Syntaxe

```url
#fragment
```

- `fragment`
  - : Une séquence de n'importe quels caractères.
    Le format exact du fragment est défini par la ressource elle-même.

## Description

Considérez l'URL suivante&nbsp;:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`#SomewhereInTheDocument` est le _fragment_ de l'URL, qui est une ancre vers une autre partie de la ressource elle-même. Une ancre représente une sorte de «&nbsp;marque-page&nbsp;» à l'intérieur de la ressource, indiquant au navigateur où afficher le contenu situé à cet endroit. Dans un document HTML, par exemple, le navigateur fera défiler la page jusqu'à l'endroit où l'ancre est définie. Il peut s'agir de l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) d'un élément, et le navigateur fera défiler jusqu'à cet élément.
Dans un document vidéo ou audio, il peut s'agir d'un [fragment média <sup>(angl.)</sup>](https://www.w3.org/TR/media-frags/) sous la forme `#t=...`, ce qui fait démarrer la lecture à ce moment précis.

Il existe une fonctionnalité spéciale de [fragment de texte](/fr/docs/Web/URI/Reference/Fragment/Text_fragments) qui permet de créer un lien vers une partie précise d'une page web identifiée par son contenu textuel.

## Exemples

- `#syntax`
  - : Le navigateur fera défiler la page jusqu'à l'élément ayant `id="syntax"` dans le document (qui, pour cette page, est le titre [Syntaxe](#syntaxe)).
- `#:~:text=fragment`
  - : Le navigateur mettra en surbrillance le texte [`fragment`](#:~:text=fragment) dans le document.
- `#t=10,20`
  - : La vidéo ou l'audio commencera à jouer à partir de la 10<sup>e</sup> seconde.

## Spécifications

{{Specifications}}

## Voir aussi

- [URIs](/fr/docs/Web/URI)
- [Fragments de texte](/fr/docs/Web/URI/Reference/Fragment/Text_fragments)
