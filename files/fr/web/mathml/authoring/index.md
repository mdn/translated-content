---
title: Éditer du MathML
slug: Web/MathML/Authoring
tags:
  - Beginner
  - MathML
  - MathML Project
translation_of: Web/MathML/Authoring
---
Cette page explique comment écrire des formules mathématiques en utilisant le langage MathML. À l'instar du HTML, le MathML est décrit par des balises et des attributs. Le code source HTML devient lourd lorsque votre document contient des structures avancées telles que des listes ou tableaux mais heureusement il existe plusieurs générateurs de HTML à partir de notations simples, des éditeurs WYSIWYG ainsi que des systèmes de gestions de contenu (CMS) qui aide à l'écriture de page Web.

Les notations mathématiques sont encore plus complexes, avec des structures telles que les fractions, les racines carrées ou les matrices qui sont susceptibles de nécessiter leur propre balisage. Par conséquent, de bons outils d'édition MathML sont encore plus importants et nous en décrivons quelques-uns ci-dessous. En particulier, l'équipe MathML de Mozilla a développé [TeXZilla](https://github.com/fred-wang/TeXZilla/), un convertisseur Javascript de LaTeX vers MathML compatible avec Unicode, dont le but est d'être utilisé dans divers scénarios décrits ici. Bien sûr, la liste n'est pas exhaustive et vous êtes invité à jeter un œil à la [liste du W3C des logiciels MathML (en)](https://www.w3.org/Math/Software/) où vous pouvez trouver divers outils.

Notez que MathML est conçu pour être bien intégré au HTML5 et en particulier vous pouvez utiliser les concepts Web usuels tels que CSS, DOM, Javascript ou SVG. Cela ne rentre pas dans le cadre de ce document mais n'importe qui avec les connaissances de base des langages Web pourra facilement mélanger ceux-ci avec le MathML. Allez voir [nos démonstrations](/fr/docs/Mozilla/MathML_Project#sample_mathml_documents) et la [référence MathML](/fr/docs/Web/MathML) pour plus de détails.

## Utiliser MathML

#### MathML dans les pages HTML

Vous pouvez utiliser du MathML de présentation au sein des documents HTML5 :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MathML en HTML5</title>
  </head>
  <body>

    <h1>MathML en HTML5</h1>

    <p>
      Racine carrée de deux :
      <math>
        <msqrt>
          <mn>2</mn>
        </msqrt>
      </math>
    </p>

  </body>
</html>
```

Le MathML de contenu n'est pas supporté par les navigateurs. Il vous est alors recommandé de convertir votre arborescence de MathMLde contenu en du MathML de présentation avant de le publier, par exemple à l'aide de la feuille de style [ctop.xsl](https://code.google.com/p/web-xslt/source/browse/trunk/#trunk/ctop). Les outils mentionnés sur cette page génèrent du MathML de présentation.

#### Alternative pour les navigateurs sans support de MathML

Malheureusement, certains navigateurs sont incapables de rendre des équations avec MathML ou en ont seulement un support limité. Par conséquent, vous devrez utiliser un émulateur de MathML pour fournir un rendu alternatif. Si vous n'avez besoin que de constructions mathématiques basiques telles que celles utilisées dans cet article alors une simple feuille de style [mathml.css](https://github.com/fred-wang/mathml.css) devrait suffire. Pour l'utiliser, insérez cette ligne dans votre document HTML :

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

Si vous avez besoin de constructions plus complexes, vous devrez alors envisager d'utiliser la bibliothèque [MathJax](https://www.mathjax.org) comme émulateur de MathML :

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded.js"></script>
```

Notez que ces deux scripts assurent la détection des fonctionnalités des éléments [mspace](/fr/docs/Web/MathML/Element/mspace) ou [mpadded](/fr/docs/Web/MathML/Element/mpadded) (renseignez-vous sur la table de compatibilité des navigateurs au pied de cet article). Il existe également un script similaire permettant d'afficher un avertissement en haut de la page pour les navigateurs ne prenant pas bien en charge MathML et de laisser les utilisateurs choisir entre l'une des solutions de repli ci-dessus :

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

Si vous ne voulez pas utiliser ce lien vers GitHub mais plutôt intégrer ces polyfills ou d'autres dans votre propre projet, vous pourriez avoir besoin des scripts de détection pour vérifier le niveau de support MathML. Par exemple, la fonction suivante vérifie le support MathML en testant l'élément mspace (vous pouvez remplacer `mspace` par `mpadded`) :

```js
function supporteMathML () {
  let div = document.createElement("div"), box;
  div.innerHTML = "<math><mspace height='23px' width='77px'/></math>";
  document.body.appendChild(div);
  let box = div.firstChild.firstChild.getBoundingClientRect();
  document.body.removeChild(div);
  return Math.abs(box.height - 23) <= 1  && Math.abs(box.width - 77) <= 1;
}
```

Alternativement, la chaîne de caractères d'agent utilisateur suivante va permettre la détection des moteurs de rendu avec support natif de MathML (Gecko et WebKit) :

```js
var ag_ut = navigator.userAgent;
var isGecko = ag_ut.indexOf("Gecko") > -1 && ag_ut.indexOf("KHTML") === -1 && ag_ut.indexOf('Trident') === -1;
var isWebKit = ag_ut.indexOf('AppleWebKit') > -1 && ag_ut.indexOf('Chrome') === -1;
```

#### Les fontes mathématiques

Afin d'obtenir une bonne mise en page ou pour permettre différents mise en style, il est important d'avoir des fontes mathématiques disponibles. Vous pouvez ainsi fournir à vos visiteurs un lien vers les [Instructions sur les fontes de MDN](/fr/docs/Mozilla/MathML_Project/Fonts), de telle manière qu'ils puissent vérifier s'ils ont les fontes appropriées installées sur leur système ou non. Il est tout aussi bon de prévoir une alternative avec les fontes Web.

Avant Gecko 31.0, il était quelque peu fastidieux d'installer des fontes mathématiques, lisez à ce propos les [instructions pour Mozilla 2.0](/fr/docs/Mozilla/MathML_Project/FontsMozilla2.0#mathml_font_selection_with_css). Depuis Gecko 31.0, c'est beaucoup plus simple et compatible avec tout moteur de rendu Web ayant un support de MathML. Par exemple, voyez-ci une feuille de style minimale pour utiliser la fonte Latin Modern pour les textes et Latin Modern Math pour les expressions mathématiques :

```css
@namespace url('http://www.w3.org/1999/xhtml');
@namespace m url('http://www.w3.org/1998/Math/MathML');

body, m|mtext {
  font-family: Latin Modern;
}
m|math {
  font-family: Latin Modern Math;
}
```

En fin vous pouvez utiliser la règle [@font-face](/fr/docs/Web/CSS/@font-face) comme usuellement pour fournir une alternative WOFF pour les fontes Latin Modern et Latin Modern Math. Regardez ce [dépôt GitHub pour obtenir des fontes WOFF et des échantillons de feuilles de style CSS](https://github.com/fred-wang/MathFonts) à utiliser sur votre site ainsi que [sa page d'essai](http://fred-wang.github.io/MathFonts/).

#### MathML dans les documents XML (XHTML, EPUB, etc)

Si pour quelque raison vous avez besoin de MathML au sein de documents XML, soyez sûr de satisfaire aux exigences usuelles : document valide, usage d'un type MIME correct et espaces de noms MathML `"http://www.w3.org/1998/Math/MathML"` sur les racines `<math>`. Par exemple, la version XHTML de l'exemple précèdent ressemble à ceci :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN"
  "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>XHTML avec un exemple MathML</title>
  </head>
  <body>
    <h1>XHTML avec un exemple MathML</h1>

    <p>
    Racine carrée de 2 :
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <msqrt>
        <mn>2</mn>
      </msqrt>
    </math>
    </p>
  </body>
</html>
```

#### MathML dans les courriels et clients de messagerie instantanée

Les clients courriels modernes peuvent envoyer et recevoir des courriels au format HTML5 et donc y insérer des expressions MathML. Soyez sûrs dans ce cas d'avoir activé les options "envoyez en tant que HTML" et "visionner en tant que HTML". Dans Thunderbird, vous pouvez utiliser la fonctionnalité "Insérer du HTML" pour coller votre code HTML + MathML. [MathBird](http://disruptive-innovations.com/zoo/MathBird/) est une extension de Thunderbird pratique pour insérer des expressions MathML en utilisant la syntaxe d'insertion d'AsciiMath. À nouveau, la manière dont MathML est géré et la qualité du rendu de MathML [dépend des clients courriels](http://www.maths-informatique-jeux.com/blog/frederic/?post/2012/11/14/Writing-mathematics-in-emails#c121). Même si votre navigateur supporte le MathML, votre fournisseur courriel Web pourrait vous empêcher de recevoir ou d'envoyer des courriels contenant du MathML.

En théorie, les clients de messagerie instantanée basés sur Gecko peuvent intégrer un des convertisseurs tirés de Javascript de texte en MathML mentionnés ci-après et rendre les expressions MathML. Il y a par exemple une [extension InstantBird](https://addons.instantbird.org/fr/instantbird/addon/340) pour gérer les expressions LaTeX.

## Conversion depuis une syntaxe simple

Il y a de nombreuses notations simples (par exemple les syntaxes wiki ou markdown) pour générer des pages HTML. De fait, cela est aussi vrai pour MathML: par exemple les syntaxes ASCII telles qu'utilisées dans les calculatrices ou le plus puissant langage LaTeX, très populaire dans la communauté scientifique. Dans cette section, nous présenterons quelques-uns de ces outils pour convertir du texte respectant une certaine syntaxe en MathML.

- Avantages :

  - Écrire des expressions mathématiques peut ne nécessiter qu'un éditeur de texte standard.
  - De nombreux outils sont disponibles et certains sont compatibles avec le convertisseur LaTeX-to-PDF.
  - Cela donne accès à des fonctionnalités avancées de LaTeX comme les macros.

- Inconvénients :

  - Ce peut être plus difficile à utiliser : il faut apprendre la syntaxe, une erreur dans le code amène facilement à une erreur de conversion ou de rendu etc
  - L'interface n'est pas conviviale : l'on n'a accès qu'à un éditeur de code sans rendu en direct de l'expression mathématique.
  - Aucune des syntaxes n'a été standardisée, rendant la compatibilité entre convertisseurs difficile. Par exemple, le langage populaire LaTeX continue de recevoir de nouveaux paquets et tous les convertisseurs ne sont pas à jour.

### Conversion côté client

Dans un environnement web, la plus évidente méthode pour convertir un texte brut respectant une syntaxe en une arborescence DOM est d'utiliser Javascript. De fait, de nombreuses bibliothèques ont été développées pour accomplir cette tâche.

- Avantages :

  - Mise en place aisée : seulement un peu de Javascript et de CSS.
  - C'est une solution purement basée Web : tout est fait par les navigateurs et non par d'autres programmes nécessitant une installation.

- Inconvénients :

  - Cela ne fonctionnera pas si l'utilisateur a désactivé Javascript.
  - Le code MathML n'est pas présenté aux robots d'indexation (par exemple ceux des moteurs de recherche mathématique ou les agrégateurs de contenu).
  - La conversion doit être faite à chaque chargement de page, pouvant amener à un ralentissement du chargement ou à des conflits avec l'analyse HTML (par exemple "<" pour les balises)
  - Vous devez synchroniser le convertisseur Javascript avec les autres programmes Javascript sur votre page.

[TeXZilla](https://github.com/fred-wang/TeXZilla) a un élément HTML personnalisé [\<x-tex>](https://github.com/fred-wang/x-tex) pouvant être utilisé pour écrire des expressions telles que :

```html
<x-tex>\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1</x-tex>
```

Et l'obtenir automatiquement converti en MathML. C'est une technologie toujours en développement, mais qui pourra être améliorée à l'avenir au moyen des composants Web et du shadow DOM. Alternativement, vous pouvez utiliser la traditionnelle [analyse Javascript des expressions au chargement](https://github.com/fred-wang/TeXZilla/wiki/Advanced-Usages#parsing-tex-expressions-in-your-web-page) comme tous les autres outils de cette section font.

Un autre outil de conversion, simple et côté client, est [ASCIIMathML](http://www1.chapman.edu/~jipsen/mathml/asciimath.html). Il vous suffit de télécharger le script [ASCIIMathML.js](https://mathcs.chapman.edu/~jipsen/mathml/ASCIIMathML.js) et de le copier dans votre dossier de site web, puis d'ajouter une balise `<script>` sur chaque page pour charger le script ASCIIMathML. Toute expression mathématique délimitée au moyen `` ` `` (accent grave) sera automatiquement analysée et convertie en MathML:

```html
<html>
  <head>
    ...
    <script src="ASCIIMathML.js"></script>
    ...
  </head>
  <body>
    ...
    <p>Lorem `x^2 + y^2 = r^2` ipsum ...
    ...
```

[LaTeXMathML](https://math.etsu.edu/LaTeXMathML/) est un script similaire d'analyser plus de commandes LaTeX. Son installation est semblable : copiez [LaTeXMathML.js](https://math.etsu.edu/LaTeXMathML/LaTeXMathML.js) et [LaTeXMathML.standardarticle.css](https://math.etsu.edu/LaTeXMathML/LaTeXMathML.standardarticle.css) dans votre dossier, ajoutez des liens vers ces fichiers dans vos documents et les contenus LaTeX de vos pages web, si marqués par la classe "LaTeX", seront automatiquement analysés et convertis en HTML et MathML:

```html
<head>
  ...
  <script type="text/javascript" src="LaTeXMathML.js"></script>
  <link rel="stylesheet" type="text/css" href="LaTeXMathML.standardarticle.css" />
  ...
  </head>

  <body>
  ...

  <div class="LaTeX">
  \documentclass[12pt]{article}

  \begin{document}

  \title{Exemple LaTeXML}
  \maketitle

  \begin{abstract}
  Il s'agit d'un exemple de document LaTeXML.
  \end{abstract}

  \section{Première section}

    $$ \sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

  \end{document}
  </div>
  ...
```

[jqMath](https://mathscribe.com/author/jqmath.html) est un autre script pour analyser une expression utilisant une syntaxe simplifiée proche de LaTeX mais supportant en plus les caractères non-ASCII comme `√{∑↙{n=1}↖{+∞} 6/n^2} = π²` pour rendre <math><mrow><msqrt><mrow class="ma-repel-adj"><munderover><mo>∑</mo> <mrow><mi>n</mi> <mo>=</mo> <mn>1</mn> </mrow><mrow><mo>+</mo> <mi>∞</mi> </mrow></munderover><mfrac><mn>6</mn> <msup><mi>n</mi> <mn>2</mn> </msup></mfrac></mrow></msqrt><mo>=</mo> <mi>π²</mi> </mrow></math>. Son installation se fait de la même manière : copiez ses fichiers [Javascript et CSS](https://mathscribe.com/downloads/mathscribe-unix-0.4.0.zip) dans votre dossier de site web et référencez-les dans vos pages (regardez le fichier `COPY-ME.html` de l'archive zip pour lire un exemple). L'un des avantages de jqMath par rapport aux scripts précédents est qu'il ajoutera automatiquement quelques règles CSS pour faire l'affichage mathématique et rendre les formules lisibles sur des navigateurs avec un support limité de MathML.

### Programmes en ligne de commande

Un moyen alternatif est de convertir les expressions LaTeX avant de publier votre site web. Vous pouvez utiliser des programmes en ligne de commande pour générer et publier ces pages statiques sur votre serveur.

- Avantages :

  - On obtient des pages web statiques : le code source en LaTeX ne nécessite pas d'être converti à chaque chargement, le code MathML est exposé aux robots d'indexation et l'on peut ajouter le code MathML aisément sur tout serveur web.
  - Des programmes binaires peuvent s'exécuter plus vite que des programmes Javascript et être plus sophistiqués, c'est-à-dire avoir un support LaTeX plus complet ou générer d'autres formats comme l'EPUB.
  - Vous pouvez assurer la compatibilité avec d'autres outils pour générer un PDF, c'est-à-dire que vous pouvez utiliser le même fichier source.tex pour à la fois faire du LaTeX et du LaTeXML.

- Inconvénients :

  - Cela requiert d'installer des programmes sur son ordinateur, ce qui peut être plus compliqué ; et ces programmes peuvent être indisponibles sur certaines plates-formes.
  - Vous devez exécuter ces programmes sur votre ordinateur et avoir un flux de travail pour obtenir vos pages web à la fin ; cela peut s'avérer quelque peu fastidieux.
  - Les programmes binaires ne sont pas appropriés dans une extension Mozilla ou une application XUL.

[TeXZilla](https://github.com/fred-wang/TeXZilla) peut être utilisé [depuis la ligne de commande](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) et a essentiellement le même support qu'itex2MML, décrit précédemment. Toutefois, le comportement de filtre de flux n'est pas encore implémenté.

Si vous souhaitez seulement convertir de simples expressions mathématiques LaTeX, vous pourriez vouloir essayer des outils tels que [itex2MML](https://golem.ph.utexas.edu/~distler/blog/itex2MML.html) ou [Blahtex](http://gva.noekeon.org/blahtexml/). Ce dernier est souvent disponible sous les distributions Linux. Le premier a été originellement écrit par Paul Gartside au début du projet MathML de Mozilla et a été maintenu par Jacques Distler depuis. C'est un petit filtre de flux écrit en C/C++ et généré avec flex et bison ; qui a la particularité d'être très rapide. Installez simplement flex/bison de même que le compilateur classique et vous pourrez vous en servir. Sur Unix, vous pouvez télécharger itex2MML, le compiler et l'installer :

```bash
wget http://golem.ph.utexas.edu/~distler/blog/files/itexToMML.tar.gz; \
tar -xzf itexToMML.tar.gz; \
cd itex2MML/itex-src;
make
sudo make install
```

Supposons maintenant que nous avons un document HTML avec des parties en LaTeX délimitées par le symbole '$' :

```html
input.html

...
</head>
<body>
  <p>$\sqrt{a^2-3c}$</p>
  <p>$$ {\sum_{i=1}^N i} = \frac{N(N+1)}{2} $$</p>
</body>
</html>
```

Alors pour générer à partir de la page input.html la page output.html en remplaçant les expressions TeX par leurs équivalents MathML, entrez simplement :

    cat input.html | itex2MML > output.html

Il y a des outils encore plus sophistiqués pour convertir des documents arbitraires LaTeX en HTML et MathML. Par exemple [TeX4ht](https://www.tug.org/tex4ht/) est souvent inclus dans les distributions TeX et a une option pour utiliser MathML plutôt que des images PNG. Cette commande générera un document en XHTML et MathML du nom de foo.xml à partir d'un fichier source LaTeX foo.tex :

    mk4ht mzlatex foo.tex # Linux / MacOS
    mzlatex foo.tex       # Windows

Notez que [tex4ebook](https://github.com/michal-h21/tex4ebook) s'appuie sur TeX4ht pour générer des documents EPUB.

[LaTeXML](https://dlmf.nist.gov/LaTeXML/) est un autre outil qui permet de générer des documents HTML5 et EPUB. Les utilisateurs de Windows peuvent regarder ce [tutoriel vidéo](https://www.youtube.com/watch?v=Dg881w2e-lI). Étant donné un fichier LaTeX foo.tex, vous pouvez utiliser ces simples commandes :

    latexml --dest foo.xml foo.tex
    latexmlpost --dest foo.html --format=html5 foo.xml

Pour gérer le cas des navigateurs ne supportant pas MathML, vous pouvez utiliser le paramètre `--javascript` pour indiquer à LaTeXML d'inclure l'un des [scripts de substitution](#fallback_for_browsers_without_mathml_support) :

    latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
    latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback

Si votre document LaTeX est volumineux, vous pouvez vouloir le diviser en plusieurs petites pages plutôt que de tout mettre dans une seule grande page. Par exemple, ceci va diviser les pages au niveau de la `\section` :

    latexmlc --dest foo.html --splitat=section foo.tex

### Conversion côté serveur

- Avantages :

  - La conversion est faite côté serveur et le rendu MathML peut être mis en cache, ce qui est plus efficace et propre qu'une conversion côté serveur.

- Inconvénients :

  - Ce pourrait être plus difficile à mettre en œuvre puisque vous pourriez avoir besoin de droits d'administrateur sur le serveur.

[TeXZilla](https://github.com/fred-wang/TeXZilla), [LaTeXML](https://dlmf.nist.gov/LaTeXML/) et [Mathoid](https://github.com/gwicke/mathoid) peuvent être utilisés pour effectuer une conversion LaTeX vers MathML côté serveur. [Instiki](http://instiki.org/show/HomePage) et [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) sont deux moteurs de wiki qui prennent en charge la conversion LaTeX vers MathML.

## Interface graphique

### Boîte de saisie

[TeXZilla](https://github.com/fred-wang/TeXZilla) possède plusieurs interfaces, notamment une [fiche CKEditor](https://ckeditor.com/addon/texzilla) utilisé sur MDN, une [démo en ligne](https://fred-wang.github.io/TeXZilla/), un [module de Firefox](https://addons.mozilla.org/en-US/firefox/addon/texzilla/) ou encore une [application web FirefoxOS](https://marketplace.firefox.com/app/texzilla-1/). Il est également intégré à [SeaMonkey](https://www.seamonkey-project.org/) depuis la version 2.28 et à [Thunderbird](https://www.mozilla.org/thunderbird/) depuis la version 31. [Abiword](http://abisource.org/) contient un petit éditeur d'équations, basé sur itex2MML. Enfin, [Bluegriffon](http://www.bluegriffon.com/) possède un module complémentaire permettant d'insérer des formules MathML dans votre document, en utilisant une syntaxe de type ASCII/LaTeX.

![BlueGriffon](mathml-shot1.png)

### Éditeur WYSIYWG

[Firemath](https://www.firemath.info/) est une extension pour Firefox qui fournit un éditeur MathML WYSIWYG (« _what you see is what you get_ » qui signifie « _ce que vous voyez est ce que vous obtenez_ »). Un aperçu de la formule est affiché en utilisant le moteur de rendu de Mozilla. Le code MathML généré est disponible en bas. Utilisez le champ de texte pour les éléments symboliques et les boutons pour réaliser des constructions avancées. Une fois que vous avez terminé, vous pouvez enregistrer votre document en tant que page XHTML.

[LyX](https://www.lyx.org/) est un éditeur graphique LaTeX, qui dispose d'un support intégré pour l'exportation XHTML+MathML et peut être configuré pour utiliser des convertisseurs LaTeX-to-(X)HTML similaires. Vous pouvez par exemple le configurer pour [utiliser l'exportation LaTeXML HTML5/EPUB](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx).

[OpenOffice](https://www.openoffice.org/) et [LibreOffice](https://libreoffice.org/) disposent d'un éditeur d'équations (Fichier → Nouveau → Formule). Il est semi-WYSIWYG : vous saisissez la source de la formule à l'aide du panneau/clavier d'équation et un aperçu de la formule est régulièrement rafraîchi. L'éditeur utilise sa propre syntaxe "StarMath" pour la source mais le code MathML est également généré lors de l'enregistrement du document. Pour obtenir le code MathML, enregistrez le document au format mml et ouvrez-le avec n'importe quel éditeur de texte. Vous pouvez également extraire le fichier odf (qui est en fait une archive zip) et ouvrir un fichier xml appelé `content.xml`.

![Open Office Math](openoffice.png)

[Amaya](https://www.w3.org/Amaya/) est l'éditeur web du W3C, qui est capable de gérer le MathML à l'intérieur des documents XHTML. Utilisez les panneaux Éléments et Caractères spéciaux pour créer diverses constructions mathématiques avancées. Un texte simple tel que `a+2` est automatiquement analysé et le balisage MathML approprié est généré. Une fois que vous avez terminé, vous pouvez directement enregistrer votre page XHTML et l'ouvrir dans Mozilla.

## Caractère optique & Reconnaissance de l'écriture manuscrite

[Inftyreader](https://www.inftyreader.org/) est capable d'effectuer une certaine reconnaissance optique des caractères, notamment la traduction d'équations mathématiques en MathML. D'autres outils peuvent faire de la reconnaissance d'écriture, comme le [Panneau de saisie mathématique de Windows](https://docs.microsoft.com/fr-fr/windows/win32/win7devguide/handwriting-and-ink?redirectedfrom=MSDN) ou le convertisseur en ligne [Equation Web](https://webdemo.myscript.com/views/math.html).

### Informations sur le document original

- Auteur(s) : Frédéric Wang
- Autres contributeurs : Florian Scholz
- Informations sur les droits d'auteur : Certaines parties de ce contenu sont © 2010 par les contributeurs individuels de mozilla.org ; contenu disponible sous une licence Creative Commons | [Détails](https://www.mozilla.org/foundation/licensing/website-content.html).
