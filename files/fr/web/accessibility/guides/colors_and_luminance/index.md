---
title: "Accessibilité : Comprendre les couleurs et la luminance"
short-title: Couleurs et luminance
slug: Web/Accessibility/Guides/Colors_and_Luminance
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Comprendre la couleur, la luminance et la saturation est important pour la conception et la lisibilité pour toutes les personnes voyantes, mais c'est essentiel pour celles ayant une vision réduite, une déficience de la perception des couleurs ou des troubles neurologiques, cognitifs ou autres.

Les recommandations d'accessibilité définissent un [contraste de couleur](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) suffisant pour les personnes voyantes avec une vision réduite, ainsi que des recommandations pour les personnes ayant une vision insensible aux couleurs, communément appelée «&nbsp;daltonisme&nbsp;». Comprendre la couleur est aussi important pour prévenir les [crises et autres réactions physiques](/fr/docs/Web/Accessibility/Guides/Seizure_disorders) chez les personnes atteintes de troubles vestibulaires ou neurologiques.

## Vue d'ensemble

Le choix des couleurs et leur utilisation est un aspect majeur de l'accessibilité. En surface, le sujet semble simple. Pourtant, il est complexe car la perception des couleurs dépend autant de la physiologie de l'œil et du traitement cérébral humain que de la lumière émise par un écran d'ordinateur.

### Environnement et perception

L'environnement compte. La perception d'une couleur dans une pièce bien éclairée sera différente de la perception de cette même couleur sur le même écran d'ordinateur dans une pièce sombre. En matière d'accessibilité, certaines combinaisons de couleurs ont plus d'impact que d'autres. La taille de la police, le [style de police <sup>(angl.)</sup>](https://www.nngroup.com/articles/glanceable-fonts/) (certaines polices sont si fines ou fantaisistes qu'elles posent des problèmes d'accessibilité à elles seules), la couleur de fond, la taille de l'espace autour du texte, voire la densité de pixels, influent sur la façon dont la couleur est restituée à l'écran.

La distance de l'utilisateur·ice à l'écran, l'environnement ambiant, la santé de ses yeux, etc., influent aussi sur la façon dont la couleur est perçue. La perception de la couleur après qu'elle a atteint les yeux dépend aussi de la santé générale. Heureusement, il existe des [requêtes médias](/fr/docs/Web/CSS/Reference/At-rules/@media) qui permettent aux développeur·euse·s de proposer des styles adaptés aux préférences utilisateur·ice·s, notamment pour le [contraste](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) et le [schéma de couleurs](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme).

Lorsque c'est pris en charge, l'interface [Ambient Light Sensor](/fr/docs/Web/API/AmbientLightSensor) retourne le niveau de lumière ambiante autour de l'appareil, permettant à une page web de détecter tout changement d'intensité lumineuse et d'ajuster le texte en conséquence. De plus, les requêtes médias ci-dessus permettent de proposer des expériences alternatives lorsque les préférences utilisateur·ice·s indiquent un niveau de contraste préféré, en ajustant automatiquement selon l'emplacement et le type d'écran utilisé.

### Luminance et perception

La couleur, le contraste et la luminance sont les concepts centraux et essentiels pour créer un contenu web accessible utilisant la couleur. La luminance est particulièrement importante&nbsp;: comprendre ce qu'elle est et comment l'utiliser permet de garantir l'accessibilité aussi bien pour les personnes daltoniennes que pour celles qui perçoivent les couleurs. Le contraste de luminance permet aux personnes daltoniennes de distinguer le clair du foncé.

La luminance doit être déterminée avant de pouvoir calculer le contraste. Lorsqu'on parle de contraste de couleur, les formules du W3C intègrent la luminance, et pas seulement les couleurs («&nbsp;teintes&nbsp;») elles-mêmes.

### Terminologie

La terminologie peut prêter à confusion car différents termes désignent parfois la même chose. «&nbsp;Luminance&nbsp;» et «&nbsp;saturation&nbsp;» sont particulièrement importants à bien distinguer. Par exemple, la «&nbsp;saturation&nbsp;» est parfois appelée «&nbsp;chroma&nbsp;». Dans d'autres contextes, «&nbsp;chroma&nbsp;» et «&nbsp;saturation&nbsp;» sont deux concepts différents. Le «&nbsp;L&nbsp;» de l'espace colorimétrique HSL est parfois appelé «&nbsp;luminosité&nbsp;», parfois «&nbsp;clarté&nbsp;». Même le nom des couleurs courantes peut prêter à débat&nbsp;: par exemple, le «&nbsp;rouge cramoisi&nbsp;» peut être décrit par la valeur hexadécimale `#990000` pour certain·e·s et `#DC143C` pour d'autres. Pour ce document, nous utiliserons la terminologie telle que définie sur la page CSS {{CSSXRef("&lt;named-color&gt;")}}.

Lorsque vous travaillez avec la couleur, il est important de savoir dans quel «&nbsp;espace colorimétrique&nbsp;» vous vous situez, car chaque espace correspond à un système de mesure différent.

En impression couleur, votre imprimante utilise probablement des cartouches cyan, magenta, jaune et noir (<abbr>CMJN</abbr>). Le modèle CMJN est soustractif&nbsp;: les quatre encres _retirent_ certaines longueurs d'onde de la lumière, ne réfléchissant que la plage étroite qui leur est associée. Le modèle RVB est additif et ajoute différentes proportions de lumières rouge, verte et bleue.

Actuellement, l'espace {{glossary("RGB", "RVB")}} domine dans le développement web. Bien que les espaces HEX, RVB et HSL aient des notations différentes, les navigateurs convertissent automatiquement les valeurs entre ces notations. Les [modules de couleurs CSS](/fr/docs/Web/CSS/Guides/Colors) fournissent d'autres espaces colorimétriques. Cependant, en raison de la domination actuelle de l'espace RVB pour mesurer la couleur à l'écran, la plupart des calculs de ce document sont supposés être en RVB, et plus précisément en sRGB.

## L'espace colorimétrique sRGB

La couleur peut être définie de nombreuses façons, comme le montre le [type de données `<color>`](/fr/docs/Web/CSS/Reference/Values/color_value), incluant RVB, RVB décimal, RVB pourcentage, HSL, HWB, LCH, Lab, et CMJN, entre autres.

Pour le numérique, la plupart des technologies reposent historiquement sur l'espace colorimétrique RVB. Le modèle RVB est étendu pour inclure l'«&nbsp;alpha&nbsp;» — RGBA — afin de spécifier l'opacité d'une couleur. D'autres méthodes de mesure de la couleur utilisent d'autres espaces colorimétriques, désormais pris en charge par les écrans et navigateurs modernes. Cependant, les mesures de couleur dans l'espace RVB prédominent, notamment dans la production vidéo.

Des technologies comme [OpenGL](https://fr.wikipedia.org/wiki/OpenGL) et [Direct3D](https://fr.wikipedia.org/wiki/Direct3D) intègrent la courbe gamma sRGB, même si certains articles sur OpenGL font référence à l'utilisation de RGBA plutôt que sRGB. WebGL utilise généralement le format RGBA&nbsp;; voir un exemple d'utilisation dans [«&nbsp;Effacer avec des couleurs&nbsp;»](/fr/docs/Web/API/WebGL_API/By_example/Clearing_with_colors).

### Valeurs de couleur CSS

Il est important de savoir qu'il existe des variations même au sein d'un même {{glossary("color space", "espace colorimétrique")}}, comme l'espace colorimétrique {{glossary("RGB", "RVB")}}. Par exemple, les variantes de l'espace colorimétrique RVB incluent **RVB**, **sRVB**, **Adobe RVB**, **Adobe Wide Gamut RVB** et **RGBA**, entre autres.

Voici des exemples de notations CSS utilisées pour définir une couleur. Dans chaque cas, la couleur d'exemple est un magenta totalement opaque&nbsp;:

```css
/* couleur nommée */
color: magenta;

/* valeur sRVB avec pourcentages */
color: rgb(100% 0% 100%);
color: rgb(100% 0% 100% / 100%);

/* par valeurs numériques sRVB */
color: rgb(255 0 255);
color: rgb(255 0 255 / 1);

/* ancienne notation rgb et rgba */
color: rgb(100%, 0%, 100%);
color: rgba(255, 0, 255, 1);

/* par valeur sRVB en hexadécimal */
color: #f0f; /* #rgb, raccourci pour #rrggbb */
color: #ff00ff; /* #rrggbb */
color: #f0ff; /* #rgba */
color: #ff00ffff; /* #rrggbbaa */

/* par représentation HSL de la valeur sRVB */
color: hsl(300 100% 50%);
color: hsl(300deg 100% 50% / 100%);

/* par représentation HWB de la valeur sRVB */
color: hwb(300deg 0% 0%);
color: hwb(300 0% 0% / 1);

/* par représentation Lab de la valeur sRVB */
color: lab(60 93.56 -60.5);
color: lab(60 93.56 -60.5 / 1);

/* représentation dans les espaces colorimétriques CIELAB */
color: oklch(0.7 0.32 328.37);
color: oklch(0.7 0.32 328.37 / 1);

/* fonction color() dans l'espace colorimétrique XYZ */
color: color(xyz-d65 0.59 0.28 0.96);
color: color(xyz-d65 0.59 0.28 0.96 / 1);
```

Le premier exemple utilise l'une des [couleurs nommées](/fr/docs/Web/CSS/Reference/Values/named-color) définies.

On peut définir les valeurs sRVB directement en pourcentage, 0% correspondant à l'absence (noir) et 100% à la valeur maximale pour cette couleur. Les valeurs sont dans l'ordre rouge, vert, bleu. On peut aussi définir les valeurs sRVB directement par un nombre de 0 à 255.

Viennent ensuite les valeurs hexadécimales. L'hexadécimal est un système de numérotation en base 16, où l'entier 0-255 est représenté par deux chiffres allant de 0 à 15, en utilisant les chiffres 0-9 et les lettres a-f pour 10-15. Ainsi, `ff` = `255`, `00` = `0` et `d5` = `200`. Le symbole `#` précède la couleur pour indiquer qu'il s'agit d'une valeur hexadécimale.

Si toutes les valeurs sont des paires de chiffres identiques, la valeur peut être représentée par un seul chiffre que le navigateur dupliquera. Ainsi, `f00` équivaut à `ff0000`. Si un quatrième groupe de chiffres est présent, cette valeur correspond au A de RGBA, le canal alpha qui définit la transparence en termes d'opacité de la couleur. Une valeur plus élevée signifie que la couleur est plus opaque et donc moins transparente. Dans les exemples ci‑dessus, la valeur alpha est `f`, `ff`, `1` et `100%` pour une opacité totale.

L'exemple montre aussi la syntaxe héritée pour [`rgb()` et `rgba()`](/fr/docs/Web/CSS/Reference/Values/color_value/rgb#exemples). La syntaxe héritée des fonctions de couleur est séparée par des virgules, avec une fonction distincte lorsque le canal alpha est inclus. Les nouvelles fonctions de couleur n'ont qu'une seule syntaxe avec des valeurs séparées par des espaces (plutôt que par des virgules), le canal alpha, s'il est présent, étant précédé d'une barre oblique. La syntaxe moderne permet de mélanger nombres et pourcentages et prend en charge le mot‑clé `none`&nbsp;; la syntaxe héritée séparée par des virgules ne le permet pas.

Les exemples suivants montrent «&nbsp;HSL&nbsp;», qui signifie _Teinte, Saturation et Luminosité_. Les valeurs de couleur HSL sont considérées par beaucoup comme plus intuitives que les valeurs RVB. La couleur produite à partir de ces réglages reste dans l'espace colorimétrique sRVB, mais {{CSSXRef("color_value/hsl", "hsl()")}} est une syntaxe intuitive pour beaucoup. La teinte est ajustée comme un angle, et il est facile de créer une interface utilisateur avec un bouton rotatif ou un contrôle circulaire pour ajuster la teinte. Notez que les couleurs HSL intègrent la _luminosité_, et non la _luminance_, ce qui est une distinction importante.

Les exemples suivants montrent «&nbsp;HWB&nbsp;», pour _Teinte, Blanchiment et Noircissement_. Avec `hsl()` et {{CSSXRef("color_value/hwb", "hwb()")}}, la première valeur peut être un {{CSSXRef("&lt;number&gt;")}} ou une {{CSSXRef("&lt;angle&gt;")}}. Si l'unité est omise, la valeur est interprétée comme des degrés (`deg`).

Il existe plusieurs autres fonctions de couleur et espaces colorimétriques. Les trois derniers exemples montrent comment représenter le magenta avec les fonctions {{CSSXRef("color_value/lab", "lab()")}}, {{CSSXRef("color_value/oklch", "oklch()")}} et {{CSSXRef("color_value/color", "color()")}}.

### Conversions

Comme indiqué précédemment, une couleur dans un même espace colorimétrique peut être exprimée de nombreuses façons. En observant l'espace RVB pour décrire la couleur «&nbsp;magenta&nbsp;», on voit qu'une même couleur peut s'exprimer en hexadécimal raccourci à trois chiffres qui correspond à une valeur hexadécimale à six chiffres, à une valeur RVB ou à une valeur RGBA exprimée en pourcentages.

Le RVB est orienté matériel, reflétant l'utilisation historique des écrans cathodiques. De nombreux·ses développeur·euse·s et designer·euse·s préfèrent l'intuitivité de la notation {{CSSXRef("color_value/hsl", "hsl()")}}. Heureusement, les navigateurs convertissent automatiquement le RVB en HSL et les outils de développement proposent souvent une conversion en un clic.

Outre les outils de développement, de nombreux utilitaires peuvent convertir le RVB en HSL pour vous et fournir à la fois la notation hexadécimale RVB et la syntaxe des fonctions CSS. Un excellent exemple est l'outil de Tom Jewett, [«&nbsp;mini color selector&nbsp;» <sup>(angl.)</sup>](https://colortutorial.design/microColorsC.html), qui propose des options HSL, RVB et hexadécimal pour vérifier le contraste directement dans le navigateur. Notez que les sélecteurs de couleur des outils de développement et cet outil fournissent tous des valeurs de contraste WCAG&nbsp;: [contraste de couleur <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/).

![Sélecteur de couleurs avec HSL et RGB et valeurs de contraste.](microcolorsc.jpg)

Comme indiqué précédemment, le [module de couleurs CSS](/fr/docs/Web/CSS/Guides/Colors) intègre d'autres espaces colorimétriques, notamment la notation fonctionnelle {{CSSXRef("color_value/lch", "lch()")}} et{{CSSXRef("color_value/oklch", "oklch()")}}, ainsi que les systèmes de coordonnées de couleur {{CSSXRef("color_value/lab", "lab()")}} et {{CSSXRef("color_value/oklab", "oklab()")}}, qui peuvent décrire n'importe quelle couleur visible. Cela dit, sRGB reste l'espace colorimétrique par défaut et préféré pour l'accessibilité en raison de sa large diffusion.

En matière d'accessibilité, les normes et recommandations sont cependant rédigées majoritairement en se basant sur l'espace colorimétrique sRGB, en particulier pour les rapports de contraste de couleur.

> [!NOTE]
> Presque tous les systèmes utilisés aujourd'hui pour afficher du contenu Web supposent un encodage sRGB. À moins qu'il ne soit certain qu'un autre espace colorimétrique sera utilisé pour traiter et afficher le contenu, les auteur·ice·s devraient envisager d'utiliser l'espace colorimétrique sRGB. Si d'autres espaces colorimétriques sont utilisés, appliquez les principes des [rapports de contraste minimum <sup>(angl.)</sup>](https://webaim.org/articles/contrast/#sc143).

### Interroger les valeurs de couleur

La méthode {{domxref('Window.getComputedStyle()')}} retourne des valeurs en utilisant l'échelle décimale RVB ou via `color(srgb...)`. Par exemple, appeler `Window.getComputedStyle()` sur un élément HTML `<div>` avec `background-color: red` retourne `rgb(255, 0, 0)`. Cependant, lors de l'utilisation de [couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors) (par exemple `background-color: rgb(from blue 255 0 0)`), `Window.getComputedStyle()` peut retourner `color(srgb 1 0 0)`. Étant lié au matériel, `Window.getComputedStyle()` mesure la couleur en termes de RVB, pas selon la perception humaine.

### Daltonisme rouge/vert

La protanopie est une déficience de la vision des couleurs où l'œil ne possède pas de cônes sensibles au rouge&nbsp;; le sRGB peut toutefois être perçu via les cônes verts, de manière plus sombre que la vision normale. Les déficiences protan (déficit en rouge) et deutan (déficit en vert) rendent la distinction entre le rouge et le vert difficile.

Les outils de développement aident à simuler ces différences directement dans le navigateur. Par exemple, l'Inspecteur d'accessibilité de Firefox permet de simuler la protanopie, la deutéranopie, la tritanopie, l'achromatopsie et la perte de contraste dans son panneau d'accessibilité.

![Extrait des outils de développement Firefox montrant la fenêtre de simulation](simulate_color_differences.jpg)

## Luminance et contraste

### Contraste

Le contraste entre les couleurs («&nbsp;teintes&nbsp;») est un élément critique, mais l'utilisation de la couleur («&nbsp;teintes&nbsp;») à elle seule ne suffit pas à rendre le contenu accessible. Comme mentionné précédemment, tout calcul de contraste doit prendre en compte la luminance.

La «&nbsp;forme&nbsp;» du texte importe aussi&nbsp;: les caractères fins sont plus difficiles à lire que les caractères épais&nbsp;; toutes les polices ont besoin d'espace pour «&nbsp;respirer&nbsp;» afin d'être perçues correctement.

### Contraste et taille de police

Les [recommandations de contraste WCAG](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan) définissent le texte «&nbsp;grand&nbsp;» comme étant un texte de `18pt` (environ `24px`) ou plus lorsque {{cssxref('font-weight')}} est `normal`, et `14pt` (environ `18,7px`) pour le texte en `gras`. Elles expliquent :

_Le texte plus grand et aux traits de caractères plus larges est plus facile à lire avec un contraste plus faible. Par conséquent, l'exigence de contraste pour les textes de grande taille est plus faible. Cela permet aux auteur·rice·s d'utiliser une gamme de couleurs plus large pour les grands textes, ce qui est utile pour la mise en page des pages, notamment les titres._

Même si un texte plus grand n'exige pas un contraste aussi élevé que le texte plus petit, augmenter la taille de la police n'est pas une solution universelle.

L'impression «&nbsp;normale&nbsp;» est généralement considérée entre 11,5pt et 12pt, équivalant à `16px` à l'écran. Un texte plus petit peut être lisible — une personne peut distinguer des lettres avec une précision d'environ 70% — mais cela n'est pas considéré comme lisible. Une taille de police de `16px` est généralement lisible pour les personnes ayant une vision normale. Une personne ayant une vision 20/40 a besoin d'une taille environ deux fois plus grande, soit environ `31px`. C'est pourquoi les recommandations WCAG exigent que les utilisateur·ice·s puissent agrandir tout texte.

Un texte trop petit est difficile à lire, mais un texte trop grand l'est aussi. Pour des personnes ayant une vision 20/20, lorsque la taille du texte dépasse environ `96px`, la vitesse de lecture diminue. De plus, lorsqu'il existe un grand écart entre la plus petite et la plus grande taille de police sur une page, le texte le plus grand devient moins lisible si les utilisateur·ice·s agrandissent le texte le plus petit de la page, puisque la plupart des navigateurs appliquent un zoom à l'ensemble du texte.

En règle générale, pour l'accessibilité, plus il y a de contraste, mieux c'est. Cela change toutefois dans le cas d'animations&nbsp;: une animation «&nbsp;moins risquée&nbsp;» signifie des images avec moins de contraste, pas davantage. Pour en savoir plus sur le contraste des couleurs dans les animations, voir [Three Flashes or Below Threshold Understanding SC 2.3.1 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html).

Notez également que les icônes doivent présenter un contraste suffisant pour être perçues. Voir la [technique WCAG 2.1 G207 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Luminance

C'est la différence de luminance entre des couleurs qui nous permet de percevoir le contraste. La luminance relative est définie dans les WCAG comme «&nbsp;la luminosité relative de n'importe quel point dans un espace colorimétrique, normalisée à 0 pour le noir le plus foncé et à 1 pour le blanc le plus clair&nbsp;».

Cette définition est exacte, mais elle peut prêter à confusion lorsqu'on la rapporte à l'espace colorimétrique RVB, dont les composantes sont des entiers entre 0 et 255. Le blanc possède une luminance relative de 100 %, le noir de 0 % (selon la plupart des sources). En appliquant la normalisation du W3C ci‑dessus, le blanc (normalisé à 1) correspondrait à `rgb(255 255 255)` et le noir (normalisé à 0) à `rgb(0 0 0)`. On peut également écrire le blanc et le noir comme `rgb(100% 100% 100%)` et `rgb(0% 0% 0%)`, ce qui peut être plus intuitif.

D'où viennent donc ces valeurs de 0 à 255&nbsp;? Historiquement, les moteurs graphiques stockaient chaque canal de couleur sur un octet, ce qui donne une plage d'entiers de 0 à 255.

La luminance des couleurs primaires diffère selon la couleur. Par exemple, le jaune a une luminance plus élevée que le bleu. Cela a été conçu ainsi «&nbsp;pour obtenir l'alignement du blanc de l'écran&nbsp;», d'après le document de la NASA, [«&nbsp;Luminance Contrast in Color Graphics&nbsp; <sup>(angl.)</sup>»](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php)

Un rapport de contraste entre deux couleurs n'a pas de sens sans tenir compte de leur composante de luminance&nbsp;: une fois la luminance déterminée, on peut calculer le rapport de contraste des couleurs.

La perception humaine accorde plus d'importance à une différence de luminance qu'à une différence de teinte. C'est essentiel, car le contraste de luminance permet de concevoir du contenu que même les personnes daltoniennes peuvent distinguer. En tenant compte de cela, vous pouvez jouer sur la luminance&nbsp;: des couleurs difficiles à percevoir en raison d'une faible luminance peuvent devenir plus lisibles si vous les placez sur un fond présentant une luminance contrastée. Une étude intéressante de la NASA sur la couleur bleue, par exemple, a noté que cette couleur, qui présente une faible luminance, peut devenir lisible si _des précautions sont prises pour obtenir un contraste de luminance adéquat_ (Extrait de l'article, [Designing with blue <sup>(angl.)</sup>](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php))

Les calculs de la luminance relative ne sont pas des opérations anodines. Heureusement, il existe des [vérificateurs de contraste et de luminance en ligne <sup>(angl.)</sup>](https://www.siegemedia.com/contrast-ratio) et des instructions expliquant comment [calculer la luminance relative <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance).

## Perception des couleurs

La couleur est notre perception de la bande étroite de lumière visible, du rouge au jaune et vert, puis au bleu. Notre sensibilité à ces différentes teintes n'est pas la même. Les cellules sensibles à la lumière dans nos [yeux <sup>(angl.)</sup>](https://www.verywellhealth.com/eye-cones-5088699), appelées cônes, sont spécialisées pour percevoir certaines couleurs plus que d'autres. Environ 65% des cônes sont _principalement_ sensibles au jaune/vert, tout en répondant aussi au rouge (nous les appellerons «&nbsp;cônes rouges&nbsp;»). 30% sont sensibles au vert, et seulement [5% sont sensibles au bleu <sup>(angl.)</sup>](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144891#sec001). Bien qu'il y ait beaucoup moins de cônes sensibles au bleu que des cônes rouges ou verts, ces cônes bleus sont très sensibles, ce qui compense partiellement leur nombre réduit.

Le bleu pur et profond est perçu différemment des autres couleurs, car les cônes sensibles au bleu ne contribuent pas à la luminance et ils sont bien moins nombreux que les cônes rouges ou verts.

![À gauche, une mosaïque de cônes en vision normale ; à droite, celle d'une personne atteinte de protanopie, qui manque les cônes rouges.](conemosaics.jpg)

À gauche se trouve la mosaïque centrale de cônes en vision normale et, à droite, celle d'une personne atteinte de protanopie, une forme de déficience de la vision des couleurs où les cônes rouges sont absents. (Illustration de Mark Fairchild, RIT, [Wikimedia Commons <sup>(angl.)</sup>](https://commons.wikimedia.org/wiki/File:ConeMosaics.jpg))

Les cônes rouges et verts se combinent pour produire la luminance, que l'on peut considérer comme la clarté/l'obscurité sans tenir compte de la teinte. À part cela, les cônes rouges, verts et bleus permettent à la vision normale de percevoir des millions de couleurs. Pour l'accessibilité, il est important de savoir que le cerveau traite la luminance séparément de la couleur (teinte et vivacité).

La luminance permet de percevoir des détails fins, notamment les contours et le texte. La teinte et la vivacité des couleurs apportent environ un tiers des informations que fournit la luminance. La compression des données d'image tire parti de ce principe. Par exemple, le [codec vidéo h.264](/fr/docs/Web/Media/Guides/Formats/Video_codecs) échantillonne la couleur à un quart de la résolution de la luminance.

Pour l'accessibilité, cela signifie que le contraste de luminance est crucial pour le texte. La couleur, entendue comme teinte et vivacité, est importante pour _distinguer_ des éléments tels que différentes lignes sur une carte ou des barres dans un graphique.

Un autre point essentiel est la couleur ou la luminance qui entoure une couleur. Une même couleur peut paraître différente selon ce qui l'entoure. Dans l'image suivante, les points jaunes et les carrés gris ont exactement la même couleur sRGB. La perception contextuelle des couleurs les fait paraître différents&nbsp;: le traitement visuel du cerveau ajuste la perception en fonction de ce qu'il interprète comme étant à l'ombre ou non.

![Un damier où des couleurs identiques paraissent différentes selon l'ombre](yellowdotcheckershadow_dlyon.png)

Les points jaunes de cette image sont des couleurs identiques sur votre écran, mais ils paraissent différents à cause du contexte. (Image&nbsp;: D.Lyon)

Notre perception du contraste, de la clarté et de la couleur est influencée par le contexte des couleurs voisines et d'autres éléments d'une image ou d'un design. Cela rend la prédiction du contraste difficile&nbsp;: il ne s'agit pas seulement d'un rapport mathématique entre deux couleurs.

En résumé, la couleur tient autant à la physiologie humaine et au traitement cérébral qu'à la mesure de la lumière émise par un écran d'ordinateur. Il est également important de comprendre que l'éclairage ambiant affecte la capacité à percevoir la couleur et le contraste. La lumière et ses mesures sont linéaires, mais la vision et la perception humaines ne le sont pas.

## Adaptation

Les transitions entre zones claires et zones sombres ne sont pas perçues de la même façon par nos yeux. Cela tient à la physiologie de l'œil. Cela influe sur la capacité d'un·e utilisateur·ice à lire du texte sur un fond. Il existe au moins deux types d'adaptation&nbsp;: l'adaptation locale et l'adaptation à l'environnement ambiant.

L'adaptation locale se produit directement sur la «&nbsp;page&nbsp;» regardée. Par exemple, si vous avez du texte bleu à l'intérieur d'une zone grise «&nbsp;mise en évidence&nbsp;», vos yeux percevront ce même texte bleu différemment selon qu'il se trouve dans un élément HTML {{HTMLElement("div")}} noir ou blanc. Ceci s'appelle l'adaptation _locale_. Cette différence dans la perception du texte intervient même si l'éclairage ambiant de la pièce ne change pas.

Les développeur·euse·s web qui cherchent à améliorer la lisibilité du texte sur un fond peuvent tirer parti des principes d'adaptation locale.

L'adaptation à l'obscurité (face à une faible luminance) est lente. Lorsque vous entrez d'un endroit ensoleillé dans une pièce sombre, vous subissez une adaptation à l'obscurité&nbsp;: il peut falloir quelques minutes pour vous habituer.

L'adaptation à la lumière est l'inverse. Passer d'une pièce sombre à une lumière solaire intense est plus rapide, mais cela peut aussi être douloureux.

Les développeur·euse·s web qui cherchent à améliorer la lisibilité du texte lorsque les conditions d'éclairage ambiant d'une pièce ont changé peuvent tirer parti de l'interface `AmbientLightSensor` et de la requête média [`prefers-contrast`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast).

## Saturation

La saturation mérite une mention particulière dans les discussions sur la couleur («&nbsp;teintes&nbsp;») et l'accessibilité. De manière générale, l'attention se porte surtout sur la luminance lorsqu'il s'agit d'assurer un contraste suffisant entre le texte et son fond ou d'évaluer le risque d'induire des crises chez les personnes sensibles aux crises photosensibles. Un aspect de la couleur («&nbsp;teintes&nbsp;»), indépendant de la luminance, mérite une attention particulière pour l'accessibilité&nbsp;: le concept de saturation. En effet, la saturation peut provoquer des crises chez les personnes photosensibles, quel que soit la luminance de la couleur. Comme indiqué pour [le cas particulier du rouge](#the_special_case_of_red), [Harding et al. 2005](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) ont noté que, _indépendamment de la luminance, une transition vers ou depuis un rouge saturé est également considérée comme un risque_.

La saturation est parfois décrite comme la «&nbsp;pureté&nbsp;» ou l'«&nbsp;intensité&nbsp;» d'une couleur. Bien que ces définitions conviennent pour les pigments d'une boîte de peinture, elles sont moins adaptées aux couleurs affichées à l'écran.

Sur un écran, les couleurs saturées correspondent à des longueurs d'onde particulières. La définition de la saturation varie selon l'espace colorimétrique, mais la saturation se mesure facilement. L'important est de connaître l'espace colorimétrique utilisé et d'être prêt·e à le convertir si nécessaire.

Les espaces colorimétriques les plus souvent considérés pour la photosensibilité sont RVB, HSL et HSV (aussi appelé HSB). L'espace HSV, qui signifie _hue_, _saturation_ et _value_, et le synonyme HSB, qui signifie _hue_, _saturation_ et _brightness_, sont représentés en CSS par [`hwb()`](/fr/docs/Web/CSS/Reference/Values/color_value/hwb) pour _hue_, _whiteness_ et _blackness_.

Il est important de savoir dans quel espace colorimétrique vous travaillez. Par exemple, les couleurs saturées ont une _luminosité_ (<i lang="en">lightness</i>) de `0.5` en HSL, tandis qu'en HWB elles ont une valeur `1`. La saturation dans l'espace RVB est généralement indiquée par une valeur RVB de `255` ou `100%` pour la couleur considérée. Par exemple, un rouge saturé de valeur hexadécimale `#ff0000` correspond à `rgb(255 0 0)` et à `hsl(0 100% 50%)`. Un autre rouge saturé de valeur hexadécimale `#ff3300` correspond à `rgb(255 51 0)` et à `hsl(12 100% 50%)`. Ce sont tous deux des rouges «&nbsp;saturés&nbsp;». Ils représentent deux «&nbsp;teintes&nbsp;» différentes mais sont tous deux considérés comme des couleurs saturées.

La saturation n'est pas l'éclat. L'éclat (<i lang="en">brightness</i>) désigne la quantité de blanc ou de noir mélangée à une couleur. On peut diminuer la saturation en ajoutant du blanc, du noir ou du gris&nbsp;; par exemple, augmenter l'éclat revient souvent à ajouter du blanc, ce qui réduit la saturation. Un exemple courant consiste à ajouter du blanc au rouge pour obtenir du rose. Le rose est alors considéré comme un rouge désaturé.

### Saturation et luminance

Il existe une perte de saturation aux extrêmes de luminance, ainsi qu'aux extrêmes du noir et du blanc. Dans l'étude de la NASA intitulée [«&nbsp;L'effet de la luminance sur la saturation&nbsp;» <sup>(angl.)</sup>](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/design_lum_1.php), les auteur·ice·s soulignent qu'il existe une perte de saturation à faibles luminances et, de même, «&nbsp;…une perte de saturation à luminances élevées&nbsp;: les couleurs convergent vers le blanc&nbsp;».

## Combinaisons de couleurs

Le contraste seul ne suffit pas pour garantir l'accessibilité. Dans le cas d'animations, certaines combinaisons de couleurs sont plus susceptibles de provoquer des crises photosensibles chez les personnes sensibles que d'autres. Par exemple, des clignotements alternés rouge-bleu posent davantage de problèmes que des clignotements alternés vert-bleu. Il a été émis l'hypothèse que cela s'explique par le fait que les cônes sensibles au «&nbsp;rouge&nbsp;», qui ont tendance à se regrouper autour de la fovéa (près du centre), sont physiquement situés différemment des cônes sensibles au «&nbsp;bleu&nbsp;», qui se trouvent vers la périphérie. Les signaux électriques provenant de l'œil vers le cerveau doivent être différenciés par ce dernier lors du traitement de l'information.

Certaine(s) couleur(s) sont plus susceptibles de [provoquer des crises épileptiques <sup>(angl.)</sup>](https://www.epilepsy.com/sites/default/files/2022-10/Epilepsia_2022_fisher_visually_sensitive_seizures.pdf). Les dynamiques cérébrales sous-jacentes peuvent être modulées par certaines combinaisons de couleurs plus que par d'autres. Par exemple, un stimulus clignotant rouge-bleu provoque une excitation corticale plus importante qu'un stimulus rouge-vert ou bleu-vert.

Certaines combinaisons de couleurs peuvent poser de sérieux problèmes sur un écran d'ordinateur ou un appareil mobile, et certaines combinaisons peuvent gêner certaines déficiences. La combinaison rouge/bleu en est un exemple.

- Ne vous fiez jamais uniquement à la teinte pour différencier des détails. Un contraste de luminance adéquat est nécessaire.
- Le canal vert d'un écran représente la majeure partie de la luminance (<i lang="en">light</i>), il contribuera donc généralement aux couleurs les plus claires.

### Travailler avec le bleu

Certaines personnes ne peuvent pas différencier toutes les couleurs. Certaines couleurs, comme le bleu pur, présentent une faible luminance. Les couleurs à faible luminance devraient être la couleur la plus sombre lorsqu'elles sont mises en contraste. Le bleu offre également une très faible résolution visuelle&nbsp;: il y a beaucoup moins de cônes sensibles au bleu, qui sont dispersés dans la vision périphérique et peu présents dans la vision centrale. L'œil humain perçoit le bleu avec une résolution inférieure à celle du vert et du rouge.

Cela conduit à quelques recommandations pour l'utilisation du bleu&nbsp;:

- Les bleus purs devraient en général être la plus sombre des deux couleurs.
- Lorsque le bleu est la couleur la plus claire des deux, ajoutez du vert pour augmenter le contraste et améliorer la lisibilité.

La nature de la lumière bleue provoque une mise au point à un emplacement différent sur la rétine par rapport au rouge&nbsp;; ainsi, un rouge pur et un bleu pur immédiatement adjacents peuvent «&nbsp;scintiller&nbsp;» lorsqu'ils sont côte à côte.

## Le cas particulier du rouge

Toutes les teintes (<i lang="en">hue</i>) ne sont pas traitées de la même façon par le cerveau. De manière générale, la physiologie et la psychologie humaines réagissent au rouge différemment des autres couleurs. Les humain·e·s répondent aux couleurs aussi bien sur le plan physiologique que psychologique. Par exemple, il a été démontré que [certaines couleurs sont plus susceptibles de provoquer des crises d'épilepsie que d'autres <sup>(angl.)</sup>](https://www.sciencedaily.com/releases/2009/09/090925092858.htm). Certains appareils proposent une [option «&nbsp;niveau de gris&nbsp;» en tant qu'option d'accessibilité <sup>(angl.)</sup>](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options) qui peut aider les personnes photosensibles. Pour reproduire ce réglage «&nbsp;niveaux de gris&nbsp;», utilisez la propriété CSS {{cssxref("filter")}} avec une fonction {{cssxref("filter-function/grayscale", "grayscale()")}} ou {{cssxref("filter-function/saturate", "saturate()")}} de type {{cssxref("&lt;filter-function&gt;")}}.

### Rouge saturé

Le «&nbsp;rouge saturé&nbsp;» est un cas particulier et dangereux, soumis à des tests spécifiques.

Le concept de saturation des couleurs est difficile à appréhender si l'on ne regarde que des nombres et de la terminologie&nbsp;: jetez un œil à l'image ci‑dessous pour illustrer la saturation d'une couleur&nbsp;:

![Saturation du rouge — Wikimedia Commons svg sauvegardé en png. Attribution : Datumizer [CC0]](320px-red_saturations.svg.png)

La même «&nbsp;couleur&nbsp;» va du moins saturé (à gauche) au plus saturé (à droite).

_Plus d'une teinte «&nbsp;rouge&nbsp;» peut être considérée comme un «&nbsp;rouge saturé&nbsp;»._ Par exemple, la couleur `#990000` (hsl(0 100% 30%)) est complètement saturée mais moins lumineuse que certaines couleurs citées ci‑dessus. De même, `#8b0000` a aussi une saturation de 100%.

Tous les rouges saturés ne sont pas forcément bien représentés dans le spectre RVB ou dans d'autres espaces couramment utilisés en développement web. Selon la page Wikipédia sur «&nbsp;<i lang="en">Shades of Red</i>&nbsp;», la couleur «&nbsp;<i lang="en">Carmine</i>&nbsp;» est un rouge saturé qui, sous forme de pigment, contient principalement de la lumière rouge de longueurs d'onde supérieures à 600nm&nbsp;; l'article précise que «&nbsp;<i lang="en">Carmine</i>&nbsp;» est proche de l'extrême du spectre. Cela la situe bien au‑delà des gammes standard (RVB et CMJN), la valeur RVB fournie n'en est qu'une approximation imparfaite.

### Clignotements de rouge saturé

Outre le fait qu'un environnement rouge puisse affecter les fonctions cognitives des personnes ayant subi un traumatisme crânien, les couleurs du spectre rouge nécessitent une attention particulière et des tests spécifiques.

Lors des essais de l'outil _d'analyse des crises photosensibles_, Gregg Vanderheiden a observé des taux de crises nettement plus élevés que prévu. Il a constaté que nous sommes beaucoup plus sensibles aux clignotements de rouge saturé. (Voir la vidéo, [«&nbsp;L'outil d'analyse des crises photosensibles&nbsp;» <sup>(angl.)</sup>](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/).)

### Clignotements et crises

Des clignotements continus alternant entre des images plus claires et plus sombres, à des fréquences supérieures à trois clignotements par seconde, ont été démontrés comme pouvant déclencher des crises photosensibles chez certaines personnes. Il a également été constaté que des motifs très réguliers et à fort contraste — par exemple des bandes parallèles blanches et noires — peuvent aussi provoquer des crises.

[Harding et al. 2005 <sup>(angl.)</sup>](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x) présentent plusieurs recommandations fondamentales&nbsp;:

1. Un, deux ou trois clignotements par seconde sont acceptables, mais une séquence de clignotements n'est pas recommandée si plus de trois clignotements surviennent en une seconde.
2. Lors de l'affichage de bandes claires et foncées, le motif ne devrait pas comporter plus de cinq paires clair‑foncé si les bandes changent de direction, oscillent, clignotent ou inversent leur contraste, ou huit paires clair‑foncé si le motif est immobile ou dérive de façon continue et régulière dans une seule direction.

Pour d'autres recommandations, voir l'article [«&nbsp;Photic- and Pattern-induced Seizures: Expert Consensus of the Epilepsy Foundation of America&nbsp;» <sup>(angl.)</sup>](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x).

## Aspects psychophysiques de la couleur

La couleur — en particulier la teinte et la saturation — peut influencer notre humeur et améliorer — ou diminuer — nos expériences interactives.

### Exemples de l'effet de la couleur au‑delà de la vision

- **La couleur peut dépendre de la culture&nbsp;:** [Étude interculturelle sur les significations affectives de la couleur <sup>(angl.)</sup>](https://journals.sagepub.com/doi/10.1177/002202217300400201)
- **La couleur affecte nos émotions&nbsp;:** [Couleur et émotion&nbsp;: effets de la teinte, de la saturation et de la luminosité <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/28612080/)
- **Des contrastes plus élevés peuvent également avoir un effet positif sur nos émotions&nbsp;:** [Variation émotionnelle en contrôlant le contraste des contenus visuels via une reconnaissance émotionnelle profonde basée sur EEG <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/32823741/)
- **Certaines couleurs peuvent affecter notre perception du temps&nbsp;:** [Couleur et perception du temps&nbsp;: preuve d'une surestimation temporelle des stimuli bleus <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/29374198/)
- **Le bleu a aussi un effet significatif sur la luminosité et l'éblouissement&nbsp;:** [Bleu, éblouissement et luminosité <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/31288107/)
- **Des lunettes teintées en rouge peuvent augmenter le sentiment de bonheur ou de joie&nbsp;:** [L'effet des lunettes teintées en rose sur le traitement affectif visuel <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/31244627/)
- **Le rouge influence notre comportement de façon significative&nbsp;:** [Comment la couleur rouge influence notre comportement <sup>(angl.)</sup>](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/), Scientific American par S. Martinez-Conde, Stephen L. Macknik
- **Environnement rouge&nbsp;:** Des études ont montré que, pour les personnes souffrant d'un traumatisme crânien, [la fonction cognitive est réduite dans un environnement rouge <sup>(angl.)</sup>](https://pubmed.ncbi.nlm.nih.gov/20649469/).

## Voir aussi

- [Accessibilité](/fr/docs/Web/Accessibility)
- [Apprendre&nbsp;: l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility)
- La propriété CSS {{CSSXRef("color")}}
- Le type de données {{CSSXRef("color_value", "&lt;color&gt;")}}
- [Accessibilité Web pour les crises et réactions physiques](/fr/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Comment la couleur rouge influence notre comportement <sup>(angl.)</sup>](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American par Susana Martinez-Conde, Stephen L. Macknik, 1er novembre 2014
- [Désaturation du rouge <sup>(angl.)</sup>](https://www.smartoptometry.app/red-desaturation/) L'œil humain est tellement «&nbsp;accordé&nbsp;» au rouge que les ophtalmologistes utilisent ce test pour évaluer l'intégrité du nerf optique.
- [Crises photiques et induites par des motifs&nbsp;: consensus d'experts <sup>(angl.)</sup>](https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1528-1167.2005.31305.x)
