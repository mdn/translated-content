---
title: Guide stylistique
slug: MDN/Writing_guidelines/Writing_style_guide
---

{{MDNSidebar}}

Afin de présenter la documentation de façon organisée, cohérente et facile à lire, le guide stylistique de MDN décrit la façon dont le texte doit être organisé, orthographié, mis en forme, etc. Il s'agit ici de règles générales plutôt que de consignes strictes. Le contenu importe plus que la forme et il n'y a pas d'obligation à apprendre ce guide avant de contribuer. Toutefois, ne soyez pas surpris⋅e si une contributrice ou un contributeur édite une de vos éditions pour respecter ce guide.

La suite de ce guide vise avant tout la documentation francophone. Elle reprend des parties du [guide stylistique anglophone](/fr/docs/MDN/Guidelines/Writing_style_guide) lorsque c'est pertinent. Vous pouvez également consulter [le guide stylistique de la communauté francophone](https://github.com/mozfr/besogne/wiki/Guide-stylistique-pour-la-traduction). Si vous souhaitez contribuer au contenu en anglais, rapportez vous au [guide stylistique anglophone](/fr/docs/MDN/Guidelines/Writing_style_guide).

## Règles de base

Voici quelques règles simples qui permettent de conserver une cohérence dans la documentation.

### Titres des pages

Les titres des pages sont utilisés dans les résultats des recherches et affichés dans les fils d'Ariane en haut de la page. Le titre de la page pourra être différent de la partie d'URL du document. En français, il devra l'être (car le fragment d'URL sera anglophone).

#### Titres et capitales

Seul le premier terme d'un titre (de page ou de section) devra être en capitale :

- **Correct** : « Une nouvelle méthode pour créer des objets JavaScript »
- **Incorrect**: « Une Nouvelle Méthode pour Créer des Objets JavaScript »

Si vous voyez certains titres qui enfreignent cette règle, n'hésitez pas à contribuer pour les corriger.

#### Choix des titres

Contrairement au fragment d'URL de la page (court et fixé par la version anglophone), on pourra choisir un titre descriptif suffisamment long.

#### Création de nouvelles pages

Le contenu francophone « suit » le contenu anglophone. Toute nouvelle page de MDN devra d'abord être créée avec sa version anglaise avant d'être traduite.

### Style et mise en forme des exemples de code

On pourra traduire les noms de certaines variables pour les franciser (par exemple `toto` à la place de `foo`) et on traduira les commentaires

#### Sauts de ligne

Pour un fragment de code, on évitera d'avoir une ligne trop longue qui nécessite de faire défiler le contenu horizontal. On privilégiera les ruptures de lignes naturelles :

```js
if (class.CONDITION || class.OTHER_CONDITION || class.SOME_OTHER_CONDITION
       || class.YET_ANOTHER_CONDITION ) {
  /* quelque chose */
}

var toolkitProfileService = Components.classes["@mozilla.org/toolkit/profile-service;1"]
                           .createInstance(Components.interfaces.nsIToolkitProfileService);
```

### Abréviations

> **Note :** les abréviations sont à utiliser à bon escient et il faudra bien connaître leur sens (notamment pour les abrévations latines) afin de les utiliser correctement. Il faut être conscient que leur usage peut être source de confusion pour les lectrices et lecteurs qui pourraient ne pas y être habitués.

#### Dans les notes et parenthèses

Les abréviations communes (etc., i.e.) pourront être utilisées dans les notes et entre parenthèses. Attention, on utilisera ex. plutôt que e.g. qui est usité en anglais (ou que p. ex. qui est moins usité).

#### Dans le texte

- Dans le texte principal (en dehors des notes ou des parenthèses), on privilégiera les formes développées plutôt que les abréviations.

  - **Correct** : les navigateurs web tels que Firefox peuvent être utilisés…
  - **Incorrect** : les navigateurs, ex. Firefox, peuvent être utilisés…

### Acronymes et abréviations

#### Capitalisation et usage des points

Les acronymes seront écrits en capitales et sans point.

- **Correct** : API
- **Incorrect** : A.P.I. ; Api

#### Explication

Lors de la première mention d'un terme abrégé sur une page, on expliquera l'acronyme et/ou on liera vers le [glossaire](/fr/docs/Glossary).

#### Pluriels des acronymes

Contrairement aux pratiques anglophones, on n'apportera pas de s pour les formes plurielles des acronymes.

- **Correct** : les API du Web
- **Incorrect** : les APIs du Web

### Ponctuation

#### Apostrophes et guillemets

**On n'utilisera pas d'apostrophe courbe sur MDN.** L'usage des guillemets français est autorisé (mais pas obligatoire) et ceux-ci ne doivent pas servir dans du code pour délimiter des chaînes de caractères où il faudra utiliser les doubles quotes.

### Orthographe

On recommandera l'utilisation de [Grammalecte](https://addons.mozilla.org/fr/firefox/addon/grammalecte-fr/) pour vérifier l'orthographe d'un document.

### Terminologie

En cas de doute sur la formulation en français d'un terme ou d'une expression anglaise, on privilégiera l'usage, [Transvision](transvision.mozfr.org/), [Wikipédia](https://fr.wikipedia.org).
