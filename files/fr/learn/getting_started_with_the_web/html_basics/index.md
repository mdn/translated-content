---
title: Les bases du HTML
slug: Learn/Getting_started_with_the_web/HTML_basics
tags:
  - Apprendre
  - Bases HTML
  - Code HTML
  - Débutant
  - HTML
  - Site Web
translation_of: Learn/Getting_started_with_the_web/HTML_basics
original_slug: Apprendre/Commencer_avec_le_web/Les_bases_HTML
---
{{LearnSidebar}}
{{PreviousMenuNext("Apprendre/Commencer_avec_le_web/Gérer_les_fichiers", "Apprendre/Commencer_avec_le_web/Les_bases_CSS", "Apprendre/Commencer_avec_le_web")}}

**H**yper**T**ext **M**arkup **L**anguage (HTML) est le code utilisé pour structurer une page web et son contenu. Par exemple, le contenu de votre page pourra être structuré en un ensemble de paragraphes, une liste à puces ou avec des images et des tableaux de données. Comme le suggère le titre, cet article vous fournit les bases de compréhension du HTML et de ses fonctions.

## Qu'est-ce que HTML, réellement ?

HTML n'est pas un langage de programmation. C'est un _langage de balises_ qui définit la structure de votre contenu. HTML se compose d'une série d'**{{Glossary("element", "éléments")}}**, utilisés pour entourer, ou envelopper, les diverses parties du contenu pour les faire apparaître ou agir d'une certaine façon. Les {{Glossary("tag", "balises")}} entourantes peuvent être rendues par un mot ou une image lien hypertexte vers quelque chose d'autre, un texte en italique, une police plus grande ou plus petite, et ainsi de suite. Par exemple, avec la ligne de contenu suivante :

    Mon chat est très grincheux

Si vous souhaitez que cette ligne reste ainsi, nous indiquerons qu'il s'agit d'un paragraphe en l'entourant des balises paragraphe :

```html
<p>Mon chat est très grincheux</p>
```

### Anatomie d'un élément HTML

Regardons de plus près cet élément paragraphe :

![Diagramme décrivant la structure d'un élément HTML](chat-grincheuxl.png)

Les composants principaux de notre élément sont :

1.  **La balise ouvrante :** celle-ci se compose du nom de l'élément (ici « p »), entre deux **chevrons**. Cela indique le début de l'élément, soit l'endroit à partir duquel celui-ci prend effet. Pour notre exemple, cela indique le début du paragraphe.
2.  **La balise fermante :** ici on a également des chevrons et le nom de l'élément, auxquels on ajoute une barre oblique avant le nom de l'élément. Cela indique la fin de l'élément. Pour notre exemple, cela indique la fin du paragraphe. Oublier la balise fermante est une erreur courante de débutant et peut conduire à de curieux résultats.
3.  **Le contenu :** C'est le contenu de l'élément. Ici, c'est simplement du texte.
4.  **L'élément :** Il est composé de la balise ouvrante, de la balise fermante et du contenu.

Les éléments peuvent aussi avoir des « attributs », ce qui ressemble à :

![Diagramme explicitant un attribut](attribut-chat-grincheux.png)

Les attributs contiennent des informations supplémentaires qui portent sur l'élément et qu'on ne souhaite pas afficher avec le contenu. Dans cet exemple, l'attribut `class` permet d'utiliser un nom pour identifier l'élément et ce nom pourra être utilisé plus tard pour la mise en forme ou autre chose.

Un attribut doit toujours avoir :

1.  Un espace entre l'attribut et le nom de l'élément ou l'attribut précédent (s'il y a plusieurs attributs) ;
2.  Un nom (le nom de l'attribut), suivi d'un signe égal « = » ;
3.  Des guillemets anglais (") pour encadrer la valeur de l'attribut.

### Imbriquer des éléments

Vous pouvez placer des éléments au sein d'autres éléments, c'est ce qu'on appelle l'**imbrication**. Par exemple, si vous souhaitez montrer que votre chat est **très** grincheux, vous pouvez placer le mot « très » dans un élement {{htmlelement("strong")}}, signifiant que le mot sera fortement mis en relief :

```html example-good
<p>Mon chat est <strong>très</strong> grincheux.</p>
```

Toutefois, il faut faire attention à ce que les éléments soient bien imbriqués les uns dans les autres. Dans l'exemple précédent, on ouvre l'élément {{htmlelement("p")}}, puis l'élément {{htmlelement("strong")}}. Nous devrons donc fermer l'élément {{htmlelement("strong")}} d'abord, puis l'élement {{htmlelement("p")}}. Le code suivant est incorrect :

```html example-bad
<p>Mon chat est <strong>très grincheux.</p></strong>
```

Les éléments doivent être ouverts et fermés correctement de façon à ce qu'ils soient clairement à l'intérieur ou à l'extérieur les uns des autres. S'ils se chevauchent, le navigateur essaiera de choisir la meilleure option, qui ne sera peut-être pas ce que vous vouliez dire et pourrait conduire à des résultats inattendus. Donc ne le faites pas !

### Les éléments vides

Certains éléments n'ont pas de contenu. Ces éléments sont appelés **éléments vides**. Prenons l'élément {{htmlelement("img")}} présent dans notre fichier HTML :

```html
<img src="images/firefox-icon.png" alt="Mon image test" />
```

Cet élément contient deux attributs mais les balises ouvrante `<img>` et fermante `</img>` sont remplacées par une balise auto-fermante `<img />` et il n'y a aucun contenu interne. En effet, l'élément image n'embarque pas de contenu, son but est d'intégrer une image dans la page HTML, à l'endroit où l'élément est placé.

### Anatomie d'un document HTML

Pour l'instant, nous avons vu quelques éléments HTML de base. Pris séparément, ils ne sont pas très utiles. Regardons comment les combiner pour créer une page HTML complète. Nous allons repartir de l'exemple contenu dans le fichier `index.html` (qu'on a créé dans l'article [Gérer les fichiers](/fr/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers)) :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ma page de test</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="Mon image de test">
  </body>
</html>
```

Cet exemple contient :

- `<!DOCTYPE html>` — le _doctype_. Au début de HTML, dans les années 1991-1992, les _doctypes_ étaient utilisés pour faire référence à des ensembles de règles qu'on pouvait utiliser pour dire qu'un document était du HTML « valide » et détecter les erreurs de balisage. Cependant, ceux-ci ne sont plus utilisés aujourd'hui et sont juste présents pour s'assurer que la page puisse fonctionner y compris sur les anciens navigateurs. Pour le moment, c'est tout ce qu'il y a à savoir à propos des _doctypes_.
- `<html></html>` — l'élément `<html>`. Cet élément encadre tout le contenu de la page. Cet élément est parfois appelé l'élément racine.
- `<head></head>` — l'élément `<head>`. Cet élément est utilisé comme un container pour toutes les choses qui font partie de la page HTML mais qui ne sont pas du contenu affiché. C'est dans cet élément qu'on mettra des {{Glossary("keyword", "mots-clés")}}, une description de la page qui apparaîtra sur les moteurs de recherche, les liens vers les fichiers CSS à utiliser pour la mise en forme, les déclarations des jeux de caractères à utiliser et ainsi de suite.
- `<body></body>` — l'élément {{htmlelement("body")}}. Cet élément est celui qui contient _tout_ le contenu que vous souhaitez afficher pour qu'il soit vu par les visiteurs : cela peut être du texte, des images, des vidéos, des jeux, des pistes audio jouables, et ainsi de suite.
- `<meta charset="utf-8">` — Cet élément définit le jeu de caractères qui devrait être utilisé pour le document et indique que c'est utf-8. utf-8 regroupe l'ensemble des caractères connus utilisés dans les différents langages humains. Généralement, utf-8 permet de gérer n'importe quel texte que vous pourriez utiliser sur la page. Il n'y a pas de raison de ne pas le définir, et il permet d'éviter certains problèmes plus tard.
- `<title></title>` — L'élément {{htmlelement("title")}} définit le titre de votre page. C'est ce titre qui apparaîtra sur l'onglet lorsque la page sera chargée. C'est également ce titre qui sera utilisé pour décrire la page lorsque vous la placez dans vos marques-pages.

## Images

Regardons à nouveau l'élément image :

```html
<img src="images/firefox-icon.png" alt="Mon image de test">
```

Comme on l'a vu auparavant, cet élément permet d'intégrer une image dans la page, à l'endroit où l'élément apparaît. L'image utilisée est définie via l'attribut `src` (pour source) qui contient le chemin vers le fichier de l'image.

Nous avons aussi utilisé l'attribut `alt` (pour **alt**ernatif). Il contient un texte descriptif de l'image à l'intention des utilisateurs qui ne peuvent pas voir l'image, car :

1.  ils sont mal-voyants. Les utilisateurs handicapés visuellement utilisent souvent des outils nommés lecteurs d'écrans pour lire le texte de cet attribut ;
2.  quelque chose s'est mal passé et l'image n'a pas pu être affichée. Par exemple, modifiez volontairement le chemin dans votre attribut `src` et faites qu'il soit incorrect. Si vous enregistrez et rechargez la page, vous verrez quelque chose comme ceci à la place de l'image :

![Mon image de test]()

Le point important qu'il faut retenir est que l'attribut est utilisé pour **décrire** l'image. Le texte contenu dans cet attribut doit fournir suffisamment d'informations pour que le lecteur puisse savoir ce que l'image représente. Par exemple, le texte que j'utilise « Mon image de test » n'est pas bon du tout. Une meilleure solution serait de mettre « Le logo Firefox, qui représente un renard de feu entourant la Terre ».

Essayez d'améliorer le texte alternatif pour l'image maintenant.

> **Note :** Pour plus d'informations sur l'accessibilité, vous trouverez la section [Accessibilité de MDN](/fr/docs/Accessibilité).

## Baliser le texte

Dans cette section, nous verrons quelques-uns des éléments HTML de base pour baliser le texte.

### Les titres

Les éléments de titre permettent de définir certains textes comme des titres ou sous-titres pour le contenu. D'une certaine façon, ceux-ci fonctionnent comme pour un livre : on a le titre du livre (le plus important) puis les titres des différents chapitres et parfois des sous-titres au sein de ces chapitres. HTML contient des éléments pour 6 niveaux de titres : {{htmlelement("h1")}}–{{htmlelement("h6")}}. La plupart du temps, 3-4 niveaux suffisent amplement :

```html
<h1>Mon titre principal</h1>
<h2>Mon titre de section</h2>
<h3>Mon sous-titre</h3>
<h4>Mon sous-sous-titre</h4>
```

Vous pouvez ajouter un titre adapté à votre page avec un de ces éléments. Vous pouvez le placer au-dessus de l'élément {{htmlelement("img")}} dans votre document HTML.

### Les paragraphes

Comme expliqué auparavant, les éléments {{htmlelement("p")}} sont utilisés pour contenir des paragraphes de texte. Vous les utiliserez fréquemment pour placer du texte sur une page :

```html
<p>Voici un paragraphe</p>
```

Ici, vous pouvez ajouter le texte que vous avez choisi lorsque vous avez décidé [_à quoi ressemblera votre site web_](/fr/Apprendre/Commencer_avec_le_web/Quel_aspect_pour_votre_site). Vous pouvez placer votre texte dans un ou plusieurs paragraphes, directement sous l'élément \<img>.

### Les listes

Une grande partie du contenu sur le Web est présente sous forme de listes. HTML a donc des éléments utilisés pour représenter ces listes. Le balisage des listes contient toujours au moins deux éléments. Les types de listes utilisés fréquemment sont les listes ordonnées et les listes non-ordonnées :

1.  **Les listes non-ordonnées** sont des listes pour lesquelles l'ordre des éléments n'a pas d'importance (par exemple une liste d'emplettes). La balise utilisée pour ces listes est l'élément {{htmlelement("ul")}} (**ul** signifie <i lang="en">**u**nordered **l**ist</i> liste non-ordonnée en anglais)
2.  **Les listes ordonnées** sont des listes pour lesquelles l'ordre des éléments est important (par exemple une recette). La balise utilisée pour ces listes est l'élément {{htmlelement("ol")}} (**ol** signifie <i lang="en">**o**rdered **l**ist</i> liste ordonnée en anglais)

Chaque élément d'une liste est balisé avec un élément {{htmlelement("li")}} (**l**ist **i**tem).

Par exemple, si on souhaite modifier un paragraphe en une liste :

```html
<p>Mozilla est une communauté mondiale composée de technologues, chercheurs, bâtisseurs travaillant ensemble... </p>
```

On pourrait faire :

```html
<p>Mozilla est une communauté mondiale composée de </p>

<ul>
  <li>technologues</li>
  <li>chercheurs</li>
  <li>bâtisseurs</li>
</ul>

<p>travaillant ensemble...</p>
```

**Essayez d'ajouter une liste ordonnée ou non-ordonnée sur votre page. Vous pouvez l'ajouter après l'image.**

## Les liens

Les liens sont très importants, ce sont eux qui font que le web est une **_toile_** sur laquelle on peut naviguer de page en page. Pour créer un lien, il suffit d'utiliser l'élément {{htmlelement("a")}} (le _a_ est un raccourci pour « **a**ncre »). Pour transformer du texte en un lien, suivez ces étapes :

1.  Choisissez un texte (ici, nous travaillerons avec le texte « Manifeste Mozilla ».
2.  Encadrez le texte dans un élément \<a> :

    ```html
    <a>Manifeste Mozilla</a>
    ```

3.  Fournissez un attribut `href` pour l'élément \<a>, de cette façon :

    ```html
    <a href="">Manifeste Mozilla</a>
    ```

4.  Dans cet attribut, ajoutez le lien vers le site vers lequel vous voulez diriger les utilisateurs :

    ```html
    <a href="https://www.mozilla.org/fr/about/manifesto/">Manifeste Mozilla</a>
    ```

Attention à ne pas oublier la partie avec `https://` ou `http://` qui représente le _protocole_ utilisé, au début de l'adresse. Une fois que vous avez créé un lien, testez votre page et cliquez dessus pour vous assurer qu'il fonctionne correctement.

> **Note :** `href` peut sembler un peu étrange à première vue. Une explication sur l'origine du nom pourra vous aider à mieux vous en souvenir : href correspond à <i lang="en">**h**ypertext **ref**erence</i> en anglais, ce qui signifie « référence hypertexte » en français.

Si ce n'est pas déjà fait, vous pouvez ajouter un lien sur votre page grâce à ces informations.

## Conclusion

Si vous avez suivi les différentes instructions de cette page, vous devriez obtenir une page qui ressemble à celle-ci (vous pouvez également [la voir ici](http://mdn.github.io/beginner-html-site/)) :

![A web page screenshot showing a firefox logo, a heading saying mozilla is cool, and two paragraphs of filler text](finished-test-page-small.png)

Si vous êtes bloqué, n'hésitez pas à comparer votre travail avec [l'exemple fini disponible sur GitHub](https://github.com/mdn/beginner-html-site/blob/gh-pages/index.html).

Dans cet article, nous n'avons fait qu'effleurer la surface de HTML. Pour en apprendre plus sur HTML, vous pouvez vous rendre sur la page [Apprendre HTML](/fr/Apprendre/HTML).

{{PreviousMenuNext("Apprendre/Commencer_avec_le_web/Gérer_les_fichiers", "Apprendre/Commencer_avec_le_web/Les_bases_CSS","Apprendre/Commencer_avec_le_web")}}

## Dans ce module

- [Installer les logiciels de base](/fr/Apprendre/Commencer_avec_le_web/Installation_outils_de_base)
- [Quel aspect pour votre site Web ?](/fr/Apprendre/Commencer_avec_le_web/Quel_aspect_pour_votre_site)
- [Gérer les fichiers](/fr/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers)
- [Bases du HTML](/fr/docs/Apprendre/Commencer_avec_le_web/Les_bases_HTML)
- [Bases des CSS](/fr/docs/Apprendre/Commencer_avec_le_web/Les_bases_CSS)
- [Bases du JavaScript](/fr/docs/Apprendre/Commencer_avec_le_web/Les_bases_JavaScript)
- [Publier votre site Web](/fr/Apprendre/Commencer_avec_le_web/Publier_votre_site_web)
- [Comment fonctionne le Web](/fr/Apprendre/Commencer_avec_le_web/Le_fonctionnement_du_Web)
