---
title: >-
  Quelle différence entre une page web, un site web, un serveur web et un moteur
  de recherche ?
slug: Learn/Common_questions/Pages_sites_servers_and_search_engines
translation_of: Learn/Common_questions/Pages_sites_servers_and_search_engines
original_slug: Apprendre/page_vs_site_vs_serveur_vs_moteur_recherche
---
Dans cet article, nous démystifions plusieurs notions liées au Web : page web, site web, serveur web et moteur de recherche. Ces termes sont souvent une source de confusion ou utilisés incorrectement : voyons leur signification.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devriez au préalable comprendre
        <a href="/fr/docs/Learn/Common_questions/How_does_the_Internet_work"
          >comment fonctionne Internet</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Être capable de décrire les différences entre une page web, un site web,
        un serveur web et un moteur de recherche.
      </td>
    </tr>
  </tbody>
</table>

## Résumé

Le Web, comme tout autre champ de connaissance, est associé à un vaste vocabulaire technique. Ne vous inquiétez pas, nous n'avons pas l'intention de vous submerger avec tout cela (si vous êtes curieux, vous pouvez consulter notre [glossaire](/fr/docs/Glossary)). Nous nous devons toutefois de clarifier dès maintenant certaines notions de base, car elles reviendront fréquemment dans vos prochaines lectures. Ces notions peuvent parfois être confondues, car elles réfèrent à des fonctions apparentées, mais néanmoins distinctes. Il arrive que les termes correspondants soient utilisés, parfois à contresens, dans certains articles de presse ou autre : ce n'est pas surprenant de se mélanger les pinceaux.

Nous approfondirons bientôt ces notions, mais vous pouvez commencer par vous familiariser avec ces définitions simples :

- Page web
  - : Un document qui peut être affiché par un navigateur web (tel que Mozilla Firefox, Google Chrome, Microsoft Internet Explorer ou Edge ou encore Safari). On parle aussi simplement de « pages ».
- Site web
  - : Un ensemble de pages web regroupées entre elles de différentes façons. On utilise également le terme « site » seul.
- Serveur web
  - : Un ordinateur qui héberge un site web sur Internet.
- Moteur de recherche
  - : Un site web qui aide à trouver des pages web (par exemple, Google, Bing, Yahoo, DuckDuckGo, Qwant, etc.). On accède aux moteurs de recherche via un navigateur web (en utilisant la barre d'adresse ou de recherche de ceux-ci) ou via une page web (par exemple [bing.com](https://www.bing.com/) ou [duckduckgo.com](https://duckduckgo.com/)).

Prenons une analogie simple avec une bibliothèque. Voici une suite d'actions qu'on peut effectuer lorsqu'on se rend dans une bibliothèque :

1.  On parcourt un index de recherche afin de trouver le titre du livre qu'on veut.
2.  On note la référence / le code du livre.
3.  On se rend à la section correspondante de la bibliothèque, on trouve le rayonnage pour la section qui contient le code, on trouve le livre spécifique via son code.

Comparons maintenant la bibliothèque avec un serveur web :

- La bibliothèque est semblable à un serveur web : elle contient plusieurs sections, de la même façon qu'un serveur web peut héberger plusieurs sites web.
- Les différentes sections (science, mathématiques, histoire, etc.) de la bibliothèque sont semblables à des sites web. Chaque section correspond à un site donné (deux sections ne contiennent pas les mêmes livres).
- Les livres de chaque section sont semblables à des pages web. Un site web peut avoir plusieurs pages web. Ainsi, la section Science (qui correspond au site web) aura plusieurs livres, l'un sur la chaleur, l'autre sur le son ou la thermodynamique, etc. (qui correspondent aux pages web). Un emplacement donné (une URL) donne accès à une page web.
- L'index pour la recherche agit comme le moteur de recherche. Chaque livre dispose de son propre emplacement dans la bibliothèque et deux livres différents ne peuvent pas avoir le même emplacement/code.

## Pédagogie active

_Aucun contenu de pédagogie active n'est disponible pour le moment. [S'il vous plaît, pensez à contribuer pour enrichir ce contenu !](/fr/docs/MDN/Contribute/Getting_started)_

## Allons plus loin

Explorons maintenant les liens qui unissent ces quatre notions et pourquoi elles sont parfois confondues.

### Page web

Une _page web_ est un document simple qui peut être affiché par un [navigateur](/fr/docs/Glossary/Browser). Ce document est écrit à l'aide du langage [HTML](/fr/docs/Glossary/HTML) (nous en reparlerons plus en profondeur dans d'[autres articles](/fr/docs/Web/HTML)) et peut inclure diverses autres ressources telles que :

- des _feuilles de style_ — qui déterminent l'apparence de la page ;
- des _scripts_ — qui ajoutent des fonctions interactives ; ou
- du _contenu multimédia_ — images, sons, vidéos.

> **Note :** Les navigateurs peuvent afficher d'autres types de documents tels que des fichiers [PDF](/fr/docs/Glossary/PDF) ou des images, mais le terme **page web** désigne spécifiquement des documents HTML. Si nous parlons d'un autre type de contenu, nous utiliserons le terme **document**.

Toutes les pages web sont associées à une adresse unique. Pour atteindre une page, il suffit d'entrer son adresse dans la barre d'adresse du navigateur :

![Exemple d'une adresse de page web dans la barre d'adresse du navigateur](web-page.jpg)

Un _site web_ est un ensemble de pages web reliées entre elles (ainsi que des ressources associées) qui partagent un nom de domaine. Chaque page d'un site fournit des liens explicites (généralement sous la forme de texte cliquable) qui permettent à l'utilisateur de naviguer entre les pages du site web.

Pour atteindre un site web, vous devez saisir son nom de domaine dans la barre d'adresse de votre navigateur. Le navigateur affichera alors la page principale, appelée _page d'accueil_, du site web.

![Example du nom de domaine d'un site web dans la barre d'adresse du navigateur](web-site.jpg)

Les termes _page web_ et _site web_ sont souvent confondus lorsqu'un site web ne comprend qu'une seule page. Un tel site pourrait être appelé un _site web à page unique_.

### Serveur web

Un _serveur web_ est un ordinateur hébergeant un ou plusieurs _sites web_. « Héberger » signifie que toutes les _pages web_ et fichiers associés sont localement enregistrés sur cet ordinateur. À la demande d'un utilisateur, le _serveur web_ transmettra la _page web_ du _site web_ hébergé au navigateur de l'utilisateur.

Attention à ne pas confondre _site web_ et _serveur web_. Par exemple, si quelqu'un dit « Mon site web ne répond pas », cela signifie en fait que le _serveur web_ ne répond pas et que, par conséquent, le _site web_ n'est pas accessible. Par ailleurs, puisqu'un serveur web peut héberger plusieurs sites web, le terme _serveur web_ n'est jamais utilisé pour désigner un site web, car cela serait une importante source de confusion. Ainsi, dans l'exemple précédent, si on dit « Mon serveur web ne répond pas », cela signifie qu'aucun site web de ce serveur n'est disponible.

### Moteur de recherche

Les moteurs de recherche sont à l'origine de beaucoup de confusion sur le Web. Un moteur de recherche est un type particulier de site web qui aide les utilisateurs à trouver les pages web d'_autres_ sites web.

Il y en a plein : [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://www.yandex.com/), [DuckDuckGo](https://duckduckgo.com/) et plusieurs autres encore. Certains sont généraux, alors que d'autres sont spécialisés pour certains sujets de recherche. Vous êtes libres d'utiliser celui qui vous convient le mieux.

Plusieurs débutants sur le Web confondent moteur de recherche et navigateur. Soyons clairs : un **_navigateur_** est un logiciel qui affiche des pages web, alors qu'un **_moteur de recherche_** est un site web qui aide les utilisateurs à trouver les pages web d'autres sites web. La confusion est due à l'affichage de la page d'accueil d'un moteur de recherche lors de l'ouverture initiale d'un navigateur. Cette façon de faire est tout de même logique, car la première chose que l'on veut faire en ouvrant un navigateur est de trouver une page à afficher. Faites attention de ne pas confondre infrastructure (par exemple, le navigateur) et service (par exemple, le moteur de recherche). Cette distinction vous sera bien utile, mais ne soyez pas trop inquiets, car même les professionnels tendent à être un peu vagues dans leur emploi de la terminologie.

Voici un exemple du navigateur Firefox affichant une boîte de recherche Google sur sa page de démarrage par défaut :

![Exemple de Firefox nightly affichant par défaut une page Google page personnalisée](search-engine.jpg)

## Étapes suivantes

- Allez plus loin : [Qu'est-ce qu'un serveur web ?](/fr/docs/Learn/Common_questions/What_is_a_web_server)
- Voyez comment des pages web sont liées pour former un site web : [Comprendre comment fonctionnent les liens sur le Web](/fr/docs/Learn/Common_questions/What_are_hyperlinks)
