---
title: Type de données
slug: Web/SVG/Guides/Content_type
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

SVG utilise plusieurs types de données. Cet article les liste avec leur syntaxe et une description de leur usage.

## Angle

- \<angle>
  - : Les angles peuvent être définis de deux façons. Lorsqu'ils sont utilisés dans la valeur d'une propriété dans une feuille de style, un \<angle> est défini comme suit&nbsp;:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    où `deg` indique les degrés, `grad` indique les grades et `rad` indique les radians.

    Pour les propriétés définies dans CSS2, un identifiant d'unité d'angle doit être défini. Pour les valeurs d'angle dans les propriétés spécifiques à SVG et leurs attributs de présentation correspondants, l'identifiant d'unité d'angle est optionnel. S'il n'est pas fourni, la valeur d'angle est supposée être en degrés. Dans les attributs de présentation pour toutes les propriétés, qu'elles soient définies dans SVG1.1 ou dans CSS2, l'identifiant d'angle, s'il est défini, doit être en minuscules.

    Lorsque les angles sont utilisés dans un attribut SVG, \<angle> est alors défini comme suit&nbsp;:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Les identifiants d'unité dans de telles valeurs de \<angle> doivent être en minuscules.

    Dans le DOM SVG, les valeurs de \<angle> sont représentées à l'aide des objets {{DOMxRef("SVGAngle")}} ou {{DOMxRef("SVGAnimatedAngle")}}.

## N'importe quoi

- \<anything>
  - : Le type de base \<anything> est une séquence de zéro ou plusieurs caractères. Plus précisément&nbsp;:

    ```plain
    anything ::= Char*
    ```

    où Char est tout caractère Unicode valide, à l'exception des caractères de contrôle.

## Valeur d'horloge

- \<clock-value>
  - : Les valeurs d'horloge ont la même syntaxe que dans la spécification [SMIL Animation <sup>(angl.)</sup>](https://www.w3.org/TR/smil-animation/#Timing-ClockValueSyntax). La grammaire des valeurs d'horloge est rappelée ici&nbsp;:

    ```plain
    Clock-val         ::= Full-clock-val | Partial-clock-val
                          | Timecount-val
    Full-clock-val    ::= Hours ":" Minutes ":" Seconds ("." Fraction)?
    Partial-clock-val ::= Minutes ":" Seconds ("." Fraction)?
    Timecount-val     ::= Timecount ("." Fraction)? (Metric)?
    Metric            ::= "h" | "min" | "s" | "ms"
    Hours             ::= DIGIT+; tout nombre positif
    Minutes           ::= 2DIGIT; intervalle de 00 à 59
    Seconds           ::= 2DIGIT; intervalle de 00 à 59
    Fraction          ::= DIGIT+
    Timecount         ::= DIGIT+
    2DIGIT            ::= DIGIT DIGIT
    DIGIT             ::= [0-9]
    ```

    Pour les valeurs `Timecount`, le suffixe métrique par défaut est `s` (pour secondes). Aucun espace blanc inclus n'est autorisé dans les valeurs d'horloge, bien que les caractères d'espace blanc en début et fin soient ignorés.

    Voici des exemples de valeurs d'horloge valides&nbsp;:
    - Valeurs d'horloge complètes&nbsp;:
      - `02:30:03` = 2 heures, 30 minutes et 3 secondes
      - `50:00:10.25` = 50 heures, 10 secondes et 250 millisecondes
    - Valeur d'horloge partielle&nbsp;:
      - `02:33` = 2 minutes et 33 secondes
      - `00:10.5` = 10,5 secondes = 10 secondes et 500 millisecondes
    - Valeurs Timecount&nbsp;:
      - `3.2h` = 3,2 heures = 3 heures et 12 minutes
      - `45min` = 45 minutes
      - `30s` = 30 secondes
      - `5ms` = 5 millisecondes
      - `12.467` = 12 secondes et 467 millisecondes
    - Les valeurs fractionnaires sont simplement des définitions en virgule flottante (base 10) de secondes. Ainsi&nbsp;:
      - `00.5s` = 500 millisecondes
      - `00:00.005` = 5 millisecondes

## Couleur

- \<color>
  - : Le type de base \<color> est une spécification compatible CSS2 pour une couleur dans l'espace colorimétrique sRGB. \<color> s'applique à l'utilisation de l'attribut {{SVGAttr("color")}} dans SVG et fait partie des définitions des attributs {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} et {{SVGAttr("lighting-color")}}, qui proposent aussi des spécifications de couleur optionnelles basées sur ICC.

    La définition de \<color> dans SVG est exactement la même que la définition CSS {{CSSxRef("color_value", "&lt;color&gt;")}}.

## Coordonnée

- \<coordinate>
  - : Une \<coordinate> est une longueur dans le système de coordonnées utilisateur, correspondant à la distance donnée depuis l'origine du système de coordonnées utilisateur le long de l'axe concerné (l'axe x pour les coordonnées X, l'axe y pour les coordonnées Y). Sa syntaxe est identique à celle de [\<length>](#length).

    Dans le DOM SVG, une \<coordinate> est représentée par un objet {{DOMxRef("SVGLength")}} ou {{DOMxRef("SVGAnimatedLength")}}.

## Fréquence

- \<frequency>
  - : Les valeurs de fréquence sont utilisées avec les propriétés auditives. Comme défini dans CSS2, une valeur de fréquence est un [\<number>](#number) immédiatement suivie d'un identifiant d'unité de fréquence. Les identifiants d'unité de fréquence sont&nbsp;:
    - `Hz`&nbsp;: Hertz
    - `kHz`&nbsp;: kilo Hertz

    Les valeurs de fréquence ne peuvent pas être négatives.

## FuncIRI

- \<FuncIRI>
  - : Notation fonctionnelle pour une référence. La syntaxe pour cette référence est la même que l'[URI CSS](/fr/docs/Web/CSS/Reference/Values/url_value).

## Entier

- \<integer>
  - : Un \<integer> est spécifié comme un caractère de signe optionnel (`+` ou `-`) suivi d'un ou plusieurs chiffres de `0` à `9`&nbsp;:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Si le caractère de signe n'est pas présent, le nombre n'est pas négatif.

    Sauf indication contraire pour un attribut ou une propriété particulière, l'intervalle pour un \<integer> comprend (au minimum) de `-2147483648` à `2147483647`.

    Dans le DOM SVG, un \<integer> est représenté comme un `number` ou un objet {{DOMxRef("SVGAnimatedInteger")}}.

## IRI

- \<IRI>
  - : Un **I**dentifiant de **R**essource **I**nternationalisé.

    Sur Internet, les ressources sont identifiées à l'aide d'_IRI_ (Identifiants de Ressource Internationalisés). Par exemple, un fichier SVG nommé `someDrawing.svg` situé sur `http://exemple.com` pourrait avoir l'_IRI_ suivant&nbsp;:

    ```plain
    http://exemple.com/someDrawing.svg
    ```

    Un _IRI_ peut aussi désigner un élément particulier dans un document XML en incluant un identifiant de fragment _IRI_ dans l'_IRI_. Un _IRI_ qui inclut un identifiant de fragment _IRI_ se compose d'un _IRI_ de base optionnel, suivi d'un caractère `#`, puis de l'identifiant de fragment _IRI_. Par exemple, l'_IRI_ suivant peut être utilisé pour définir l'élément dont l'identifiant est `Lamppost` dans le fichier `someDrawing.svg`&nbsp;:

    ```plain
    http://exemple.com/someDrawing.svg#Lamppost
    ```

    Les _IRI_ sont utilisés dans l'attribut {{SVGAttr("href")}}.
    Certains attributs autorisent à la fois les _IRI_ et les chaînes de texte comme contenu. Pour lever l'ambiguïté entre une chaîne de texte et un IRI relatif, la notation fonctionnelle \<FuncIRI> est utilisée. Il s'agit d'un _IRI_ délimité par une notation fonctionnelle. Remarque&nbsp;: pour des raisons historiques, les délimiteurs sont `url(` et `)`, pour la compatibilité avec les spécifications CSS. La forme _FuncIRI_ est utilisée dans les attributs de présentation.

    SVG utilise largement les références _IRI_, aussi bien absolues que relatives, vers d'autres objets. Par exemple, pour remplir un rectangle avec un dégradé linéaire, il faut d'abord définir un élément {{SVGElement("linearGradient")}} et lui donner un identifiant, comme&nbsp;:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Vous référez ensuite le dégradé linéaire comme valeur de l'attribut {{SVGAttr("fill")}} pour le rectangle, comme dans l'exemple suivant&nbsp;:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG prend en charge deux types de références _IRI_&nbsp;:
    - **références _IRI_ locales**, où la référence IRI ne contient pas de \<absoluteIRI> ou de \<relativeIRI> et ne contient donc qu'un identifiant de fragment (c.-à-d. `#<elementID>` ou `#xpointer(id<elementID>)`).
    - **références _IRI_ qui ne sont pas locales**, où la référence _IRI_ contient un \<absoluteIRI> ou un \<relativeIRI>.

    Le concept d'IRI est désormais obsolète dans SVG 2, remplacé par le type universel [URL](#url).

## Longueur

- \<length>
  - : Une longueur est une mesure de distance, donnée sous la forme d'un nombre accompagné d'une unité.
    La spécification SVG2 s'aligne sur les types de données et unités CSS {{CSSxRef("length")}} pour la syntaxe et les valeurs des attributs.
    Un identifiant d'unité de longueur doit être fourni et les valeurs des identifiants d'unité de longueur ne sont pas sensibles à la casse.
    La syntaxe suit la syntaxe CSS `<length>`&nbsp;:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Pour les propriétés spécifiques à SVG définies dans SVG1.1 et leurs attributs de présentation correspondants, les identifiants d'unité dans les valeurs sont optionnels. S'ils ne sont pas fournis, la valeur de longueur représente une distance dans le système de coordonnées utilisateur courant. Les identifiants d'unité de longueur doivent être en minuscules lorsqu'ils sont utilisés dans les attributs de présentation pour toutes les propriétés, qu'elles soient définies dans SVG ou dans CSS. Cette sensibilité à la casse est assouplie dans SVG2 pour s'aligner sur CSS.

    Notez que la définition de \<length> hors propriété autorise aussi un identifiant d'unité pourcentage (`%`).
    La signification d'une valeur de longueur en pourcentage dépend de l'attribut pour lequel la valeur de longueur en pourcentage a été définie. Deux cas courants sont&nbsp;:
    - lorsqu'une valeur de longueur en pourcentage représente un pourcentage de la largeur ou de la hauteur de la zone d'affichage (<i lang="en">viewport</i> en anglais)
    - lorsqu'une valeur de longueur en pourcentage représente un pourcentage de la largeur ou de la hauteur de la boîte englobante d'un objet donné.

    Dans le DOM SVG, les valeurs de \<length> sont représentées à l'aide des objets {{DOMxRef("SVGLength")}} ou {{DOMxRef("SVGAnimatedLength")}}.

## Liste de T

- \<list-of-Ts>
  - : (Où _T_ est un type.) Une liste consiste en une séquence de valeurs séparées. Sauf indication contraire explicite, les listes dans les attributs XML de SVG peuvent être séparées par des virgules (avec ou sans espace avant ou après la virgule), ou par des espaces.

    Les espaces dans les listes sont définis comme un ou plusieurs des caractères consécutifs suivants&nbsp;: «&nbsp;espace&nbsp;» (`U+0020`), «&nbsp;tabulation&nbsp;» (`U+0009`), «&nbsp;saut de ligne&nbsp;» (`U+000A`), «&nbsp;retour chariot&nbsp;» (`U+000D`), et «&nbsp;form-feed&nbsp;» (`U+000C`).

    Voici un modèle de grammaire EBNF décrivant la syntaxe de \<list-of-Ts>&nbsp;:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Dans le DOM SVG, les valeurs de type \<list-of-Ts> sont représentées par une interface spécifique au type _T_ concerné. Par exemple, une \<list-of-lengths> est représentée dans le DOM SVG à l'aide d'un objet {{DOMxRef("SVGLengthList")}} ou {{DOMxRef("SVGAnimatedLengthList")}}.

## Nom

- \<name>
  - : Un nom, qui est une chaîne de caractères où quelques caractères de signification syntaxique sont interdits.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* tout caractère sauf ",", "(", ")" ou l'espace blanc */
    ```

## Nombre

- \<number>
  - : Les nombres réels sont spécifiés de deux façons. Lorsqu'ils sont utilisés dans une feuille de style, un \<number> est défini comme suit&nbsp;:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Cette syntaxe est identique à la définition dans CSS (CSS2, section 4.3.1).

    Lorsqu'il est utilisé dans un attribut SVG, un \<number> est défini différemment, afin de permettre de spécifier plus simplement des nombres de grande amplitude&nbsp;:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Dans le DOM SVG, un \<number> est représenté comme une valeur flottante, {{DOMxRef("SVGNumber")}} ou {{DOMxRef("SVGAnimatedNumber")}}.

## Nombre et nombre optionnel

- \<number-optional-number>
  - : Une paire de \<number>, où le second \<number> est optionnel.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Dans le DOM SVG, un \<number-optional-number> est représenté à l'aide d'une paire d'objets {{DOMxRef("SVGAnimatedInteger")}} ou {{DOMxRef("SVGAnimatedNumber")}}.

## Valeur d'opacité

- \<opacity-value>
  - : L'opacité de la couleur ou du contenu avec lequel l'objet courant est rempli, sous la forme d'un [\<number>](#number). Toute valeur en dehors de l'intervalle `0.0` (totalement transparent) à `1.0` (totalement opaque) sera ramenée dans cet intervalle.

## Painture

- \<paint>
  - : Les valeurs des propriétés {{SVGAttr("fill")}} et {{SVGAttr("stroke")}} définissent le type de peinture à utiliser pour remplir ou tracer un élément graphique donné.
    Les options disponibles et la syntaxe pour \<paint> sont&nbsp;:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Les valeurs `context-fill` et `context-stroke` permettent d'hériter des valeurs dans les éléments {{SVGElement("marker")}} et {{SVGElement("use")}}.

## Pourcentage

- \<percentage>
  - : Les pourcentages sont définis comme un nombre suivi du caractère `%`&nbsp;:

    ```plain
    percentage ::= number "%"
    ```

    Remarquez que la définition de \<number> dépend du fait que le pourcentage soit défini dans une feuille de style ou dans un attribut qui n'est pas non plus un attribut de présentation.

    Les valeurs de pourcentage sont toujours relatives à une autre valeur (par exemple, une longueur). Chaque attribut ou propriété qui autorise les pourcentages définit également la mesure de distance de référence à laquelle le pourcentage se rapporte.

    Dans le DOM SVG, une \<percentage> est représentée à l'aide d'un objet {{DOMxRef("SVGNumber")}} ou {{DOMxRef("SVGAnimatedNumber")}}.

## Temps

- \<time>
  - : Une valeur de temps est un \<number> immédiatement suivi d'un identifiant d'unité de temps. Les identifiants d'unité de temps sont&nbsp;:
    - `ms`&nbsp;: millisecondes
    - `s`&nbsp;: secondes

## Liste de transformations

- \<transform-list>
  - : Une \<transform-list> sert à définir une liste de transformations du système de coordonnées. Une description détaillée des valeurs possibles pour une \<transform-list> est donnée dans la définition de l'attribut {{SVGAttr("transform")}}.

    Dans le DOM SVG, une valeur de \<transform-list> est représentée à l'aide d'un objet {{DOMxRef("SVGTransformList")}} ou {{DOMxRef("SVGAnimatedTransformList")}}.

## URL

- URL
  - : Un **L**ocalisateur **U**niforme de **R**essource.

    Une URL est une séquence de caractères {{Glossary("Unicode")}} constituant une adresse vers une ressource interne ou externe.

    Avant SVG 2, le type de contenu [IRI](#iri), plus limité, était utilisé à la place, car la spécification URL n'était pas encore standardisée.
