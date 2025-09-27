---
title: Guide stylistique
slug: MDN/Writing_guidelines/Writing_style_guide
---

{{MDNSidebar}}

Afin de présenter la documentation de façon organisée, cohérente et facile à lire, le guide stylistique de MDN décrit la façon dont le texte doit être organisé, orthographié, mis en forme, etc. Il s'agit ici de règles générales plutôt que de consignes strictes. Le contenu importe plus que la forme et il n'est pas obligatoire d'apprendre ce guide avant de contribuer. Toutefois, ne soyez pas surpris⋅e si une contributrice ou un contributeur édite une de vos éditions pour respecter ce guide.

La suite de ce guide vise avant tout la documentation francophone. Elle reprend des parties du [guide stylistique anglophone](/fr/docs/MDN/Writing_guidelines/Writing_style_guide) lorsque c'est pertinent. Vous pouvez également consulter [le guide stylistique de la communauté francophone](https://github.com/mozfr/besogne/wiki/Guide-stylistique-pour-la-traduction). Si vous souhaitez contribuer au contenu en anglais, reportez-vous au [guide stylistique anglophone](/fr/docs/MDN/Writing_guidelines/Writing_style_guide).

## Règles de base

Voici quelques règles simples qui permettent de conserver une cohérence dans la documentation.

### Titres des pages

Les titres des pages sont utilisés dans les résultats des recherches et affichés dans les fils d'Ariane en haut de la page. Le titre de la page peut être différent de la partie d'URL du document. En français, il doit l'être (car le fragment d'URL est de l'anglais).

#### Titres et majuscules

Seul le premier terme d'un titre (de page ou de section) doit être en majuscule :

- **Correct** : « **U**ne nouvelle méthode pour créer des objets **J**ava**S**cript »
- **Incorrect**: « **U**ne **N**ouvelle **M**éthode pour **C**réer des **O**bjets **J**ava**S**cript »

Si vous voyez certains titres qui enfreignent cette règle, n'hésitez pas à contribuer pour les corriger.

#### Choix des titres

Contrairement au fragment d'URL de la page (court et fixé par la version anglophone), on peut choisir un titre descriptif suffisamment long.

#### Création de nouvelles pages

Le contenu francophone « suit » le contenu anglophone. Toute nouvelle page de MDN doit d'abord être créée dans sa version anglaise avant d'être traduite.

### Style et mise en forme des exemples de code

On peut traduire les noms de certaines variables pour les franciser (par exemple `toto` à la place de `foo`), mais on doit traduire les commentaires.

#### Sauts de ligne

Pour un fragment de code, on évite d'avoir une ligne trop longue qui nécessite de faire défiler horizontalement le contenu. On privilégie les ruptures de lignes naturelles :

```js
if (class.CONDITION || class.OTHER_CONDITION || class.SOME_OTHER_CONDITION
       || class.YET_ANOTHER_CONDITION ) {
  /* quelque chose */
}

var toolkitProfileService = Components.classes["@mozilla.org/toolkit/profile-service;1"]
                           .createInstance(Components.interfaces.nsIToolkitProfileService);
```

### Abréviations

> [!NOTE]
> Les abréviations sont à utiliser à bon escient et il faut bien connaître leur sens (notamment pour les abréviations de locutions latines) afin de les employer correctement. Il faut être conscient⋅e que leur usage peut être source de confusion pour les lectrices et lecteurs qui pourraient ne pas y être habitués.

#### Dans les notes et parenthèses

Les abréviations communes (_etc._, _i.e._) peuvent être utilisées dans les notes et entre parenthèses. Attention, on utilise _ex._ plutôt que _e.g._ qui est usité en anglais (ou que _p. ex._ qui est moins employé).

#### Dans le texte

- Dans le texte principal (en dehors des notes ou des parenthèses), on doit privilégier les formes développées plutôt que les abréviations.
  - **Correct** : les navigateurs web tels que Firefox peuvent être utilisés…
  - **Incorrect** : les navigateurs, ex. Firefox, peuvent être utilisés…

### Abréviations, sigles et acronymes

#### Capitalisation et usage des points

Les sigles et acronymes s'écrivent en capitales et sans point.

- **Correct** : API
- **Incorrect** : A.P.I. ; Api

#### Explication

Lors de la première mention d'un terme abrégé sur une page, on explique le sigle et/ou on crée un lien vers le [glossaire](/fr/docs/Glossary).

#### Pluriels des sigles et acronymes

Contrairement aux pratiques anglophones, on n'ajoute pas de « s » pour former le pluriel des sigles ou des acronymes.

- **Correct** : les API du Web
- **Incorrect** : les APIs du Web

### Ponctuation

#### Apostrophes et guillemets

**On n'utilise pas d'apostrophe courbe sur MDN.** L'usage des guillemets français est autorisé (mais pas obligatoire) et ceux-ci ne doivent pas servir dans du code pour délimiter des chaînes de caractères où il faut utiliser les _doubles quotes_.

### Orthographe
L'extension [Grammalecte](https://addons.mozilla.org/fr/firefox/addon/grammalecte-fr/) est recommandée pour vérifier l'orthographe et la grammaire d'un document.

### Terminologie

En cas de doute sur la formulation en français d'un terme ou d'une expression anglaise, on privilégiera l'usage (voir ainsi [Transvision](transvision.mozfr.org/) et [Wikipédia](https://fr.wikipedia.org)).
