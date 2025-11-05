---
title: src
slug: Web/CSS/Reference/At-rules/@font-face/src
original_slug: Web/CSS/@font-face/src
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`src`** pour la règle {{cssxref("@font-face")}} spécifie la ressource contenant les données de la police. Il est obligatoire pour que la règle `@font-face` soit valide.

## Syntaxe

```css
/* La valeur <url> */
src: url("https://example.com/path/to/font.woff"); /* URL absolue */
src: url("path/to/font.woff"); /* URL relative */
src: url("path/to/svgFont.svg#example"); /* Fragment identifiant la police */

/* Valeurs <font-face-name> */
src: local(font); /* Nom non entre guillemets */
src: local(some font); /* Nom contenant un espace */
src: local("font"); /* Nom entre guillemets */
src: local("some font"); /* Nom entre guillemets contenant un espace */

/* Valeurs <tech(<font-tech>)> */
src: url("path/to/fontCOLRv1.otf") tech(color-COLRv1);
src: url("path/to/fontCOLR-svg.otf") tech(color-SVG);

/* Valeurs <format(<font-format>)> */
src: url("path/to/font.woff") format("woff");
src: url("path/to/font.otf") format("opentype");

/* Ressources multiples */
src:
  url("path/to/font.woff") format("woff"),
  url("path/to/font.otf") format("opentype");

/* Ressources multiples avec format de police et technologies */
src:
  url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
  url("trickster-outline.otf") format(opentype);
```

### Valeurs

- `url()`
  - : Définit une référence externe composée d'une {{cssxref("url_value", "&lt;url&gt;")}}, suivie éventuellement d'indices via les composants `format()` et `tech()` qui précisent le format et la technologie de la police référencée par l'URL. Les composants `format()` et `tech()` sont une liste de chaînes séparées par des virgules correspondant à des [formats de police](#formats_de_police) et des technologies connus. Si un agent utilisateur ne prend pas en charge la technologie ou le format, il ignore le téléchargement de la ressource. Si aucun indice n'est fourni, la ressource est toujours téléchargée.

- `format()`
  - : Déclaration optionnelle qui suit la valeur `url()` et donne une indication à l'agent utilisateur sur le format de la police. Si la valeur n'est pas prise en charge ou invalide, le navigateur peut ne pas télécharger la ressource, ce qui permet d'économiser de la bande passante. Si elle est omise, le navigateur télécharge la ressource et détecte le format. Si vous incluez une source de police pour la rétrocompatibilité qui n'est pas dans la liste des [mots-clés définis](#syntaxe_formelle), mettez la chaîne de format entre guillemets. Les valeurs possibles sont décrites dans la section [Formats de police](#formats_de_police) ci-dessous.
- `tech()`
  - : Déclaration optionnelle qui suit la valeur `url()` et donne une indication à l'agent utilisateur sur la technologie de la police. La valeur pour `tech()` peut être l'un des mots-clés décrits dans [Technologies de police](#technologies_de_police).
- `local(<font-face-name>)`
  - : Spécifie le nom de la police si elle est disponible sur l'appareil de l'utilisateur·rice. Les guillemets autour du nom sont optionnels.

    > [!NOTE]
    > Pour les polices OpenType et TrueType, `<font-face-name>` sert à faire correspondre soit le nom Postscript, soit le nom complet de la police dans la table de noms des polices locales. Le type de nom utilisé varie selon la plateforme et la police, il est donc conseillé d'inclure les deux pour garantir la correspondance sur toutes les plateformes. Les substitutions de plateforme pour un nom donné ne doivent pas être utilisées.

    > [!NOTE]
    > Les polices disponibles localement peuvent avoir été préinstallées sur l'appareil de l'utilisateur·rice ou installées activement par celle·celui-ci.
    >
    > Alors que l'ensemble des polices préinstallées est probablement identique pour tous les utilisateur·ice·s d'un même appareil, l'ensemble des polices installées par l'utilisateur·rice ne l'est pas. En découvrant cet ensemble, un site peut donc établir une {{glossary("fingerprinting", "empreinte")}} pour l'appareil, ce qui aide le site à suivre les utilisateur·ice·s sur le web.
    >
    > Pour éviter cela, les agents utilisateurs peuvent ignorer les polices installées par l'utilisateur·rice lors de l'utilisation de `local()`.

- `<font-face-name>`
  - : Définit le nom complet ou le nom Postscript d'une fonte installée localement via la valeur `local()`, ce qui identifie de façon unique une fonte au sein d'une famille plus large. Le nom peut être entouré de guillemets. Le nom de la fonte [n'est pas sensible à la casse](https://drafts.csswg.org/css-fonts-3/#font-family-casing).

> [!NOTE]
> L'{{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}} permet d'accéder aux données des polices installées localement par l'utilisateur·rice&nbsp;: cela inclut des détails de haut niveau comme les noms, styles et familles, ainsi que les octets bruts des fichiers de police sous-jacents.

## Description

La valeur de ce descripteur est une liste priorisée, séparée par des virgules, de références externes ou de noms de fontes installées localement, où chaque ressource est spécifiée via `url()` ou `local()`.
Lorsqu'une police est nécessaire, l'{{glossary("user agent", "agent utilisateur")}} parcourt la liste des références et utilise la première qu'il peut activer avec succès.
Les polices contenant des données invalides ou les fontes locales introuvables sont ignorées et l'agent utilisateur charge la police suivante de la liste.

Si plusieurs descripteurs `src` sont définis, seule la dernière règle déclarée capable de charger une ressource est appliquée.
Si le dernier descripteur `src` peut charger une ressource et n'inclut pas de police `local()`, le navigateur peut télécharger les fichiers de police externes et ignorer la version locale même si elle est disponible sur l'appareil.

> [!NOTE]
> Les valeurs jugées invalides par le navigateur sont ignorées.
> Certains navigateurs ignorent tout le descripteur si un seul élément est invalide, même si un seul élément est incorrect.
> Cela peut affecter la conception des solutions de repli.
> Voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations.

Comme pour les autres URL en CSS, l'URL peut être relative, auquel cas elle est résolue par rapport à l'emplacement de la feuille de style contenant la règle `@font-face`. Pour les polices SVG, l'URL pointe vers un élément d'un document contenant des définitions de polices SVG. Si la référence d'élément est omise, la première police définie est utilisée par défaut. De même, les formats de conteneur de police pouvant contenir plusieurs polices ne chargent qu'une seule police pour une règle `@font-face` donnée. Les identifiants de fragment servent à indiquer quelle police charger. Si le format de conteneur n'a pas de schéma d'identifiant de fragment défini, un schéma d'indexation à partir de 1 (par exemple «&nbsp;font-collection#1&nbsp;» pour la première police, «&nbsp;font-collection#2&nbsp;» pour la seconde, etc.) est utilisé.

Si le fichier de police est un conteneur de plusieurs polices, un identifiant de fragment est inclus pour indiquer la sous-police à utiliser, comme ci-dessous&nbsp;:

```css
/* WhichFont est le nom PostScript d'une police dans le fichier de police */
src: url("collection.otc#WhichFont");
/* WhichFont est l'id d'un élément dans le fichier de police SVG */
src: url("fonts.svg#WhichFont");
```

### Formats de police

Le tableau suivant présente les mots-clés valides et leurs formats de police correspondants.
Pour vérifier si un format de police est pris en charge par un navigateur en CSS, utilisez la règle {{cssxref("@supports", "@supports")}}.

| Mot-clé             | Format de police      | Extensions courantes |
| ------------------- | --------------------- | -------------------- |
| `collection`        | OpenType Collection   | .otc, .ttc           |
| `embedded-opentype` | Embedded OpenType     | .eot                 |
| `opentype`          | OpenType              | .otf, .ttf           |
| `svg`               | Police SVG (obsolète) | .svg, .svgz          |
| `truetype`          | TrueType              | .ttf                 |
| `woff`              | WOFF 1.0              | .woff                |
| `woff2`             | WOFF 2.0              | .woff2               |

> [!NOTE]
>
> - `format(svg)` désigne les [polices SVG](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts), et `tech(color-SVG)` désigne les [polices OpenType avec table SVG](https://learn.microsoft.com/fr-fr/typography/opentype/spec/svg)<sup>(angl.)</sup> (aussi appelées polices couleur OpenType-SVG), qui sont totalement différentes.
> - Les valeurs `opentype` et `truetype` sont équivalentes, que le fichier de police utilise des courbes de Bézier cubiques (dans la table CFF/CFF2) ou des courbes de Bézier quadratiques (dans la table glyph).

Les anciennes valeurs non normalisées de `format()` ont la syntaxe équivalente suivante&nbsp;; elles sont fournies sous forme de chaîne entre guillemets pour des raisons de rétrocompatibilité&nbsp;:

| Ancienne syntaxe                | Syntaxe équivalente                 |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### Technologies de police

Le tableau suivant présente les valeurs valides pour le descripteur `tech()` et leurs technologies de police correspondantes.
Pour vérifier si une technologie de police est prise en charge par un navigateur en CSS, utilisez la règle {{cssxref("@supports", "@supports")}}.

| Mot-clé             | Description                                                                                        |
| :------------------ | :------------------------------------------------------------------------------------------------- |
| `color-cbdt`        | Tables de données bitmap couleur                                                                   |
| `color-colrv0`      | Glyphes multicolores via la table COLR version 0                                                   |
| `color-colrv1`      | Glyphes multicolores via la table COLR version 1                                                   |
| `color-sbix`        | Tables graphiques bitmap standard                                                                  |
| `color-svg`         | Tables SVG multicolores                                                                            |
| `features-aat`      | Tables TrueType `morx` et `kerx`                                                                   |
| `features-graphite` | Fonctionnalités Graphite&nbsp;: tables `Silf`, `Glat`, `Gloc`, `Feat` et `Sill`                    |
| `features-opentype` | Tables OpenType `GSUB` et `GPOS`                                                                   |
| `incremental`       | Chargement incrémental de police                                                                   |
| `palettes`          | Palettes de police via `font-palette` pour sélectionner une palette de couleurs dans la police     |
| `variations`        | Variations de police dans TrueType et OpenType pour contrôler l'axe, la graisse, les glyphes, etc. |

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{CSSSyntax}}

{{CSSSyntaxRaw(`<font-src>`)}}

## Exemples

### Spécifier les ressources de police avec url() et local()

L'exemple ci-dessous montre comment définir deux fontes avec la même famille de police. La propriété `font-family` est nommée `MainText`. La première fonte est régulière, la seconde est une version grasse de la même famille.

```css
/* Définition d'une fonte régulière */
@font-face {
  font-family: MainText;
  src:
    local("Futura-Medium"),
    url("FuturaMedium.woff") format("woff"),
    url("FuturaMedium.otf") format("opentype");
}

/* Définition d'une fonte grasse différente pour la même famille */
@font-face {
  font-family: MainText;
  src:
    local("Gill Sans Bold") /* nom complet */,
    local("GillSans-Bold") /* nom Postscript */,
    url("GillSansBold.woff") format("woff"),
    url("GillSansBold.otf") format("opentype"),
    url("GillSansBold.svg#MyFontBold"); /* Référence d'un fragment SVG par id */
  font-weight: bold;
}

/* Utilisation de la fonte régulière */
p {
  font-family: MainText, sans-serif;
}

/* La famille de police est héritée, mais la fonte grasse est utilisée */
p.bold {
  font-weight: bold;
}
```

### Définir les ressources de police avec tech() et format()

L'exemple suivant montre comment utiliser les valeurs `tech()` et `format()` pour spécifier des ressources de police.
Une police utilisant la technologie `color-colrv1` et le format `opentype` est définie avec ces valeurs. Une police couleur sera activée si l'agent utilisateur la prend en charge, et une version non couleur en `opentype` est fournie en repli.

```css
@font-face {
  font-family: "Trickster";
  src:
    url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
    url("trickster-outline.otf") format(opentype);
}

/* Utilisation de la fonte */
p {
  font-family: "Trickster", fantasy;
}
```

### Définir des solutions de repli pour les anciens navigateurs

Les navigateurs doivent utiliser une règle `@font-face` avec un seul descripteur `src` listant les sources possibles pour la police. Comme le navigateur utilise la première ressource qu'il peut charger, les éléments doivent être définis dans l'ordre de préférence.

En général, cela signifie que les fichiers locaux doivent apparaître avant les fichiers distants et que les ressources avec des contraintes `format()` ou `tech()` doivent apparaître avant celles qui n'en ont pas (sinon la version la moins contrainte serait toujours sélectionnée). Par exemple&nbsp;:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Un navigateur qui ne prend pas en charge `tech()` ci-dessus doit ignorer le premier élément et tenter de charger la seconde ressource.

Certains navigateurs n'[ignorent pas encore les éléments invalides](#compatibilité_des_navigateurs), et échouent la totalité du descripteur `src` si une valeur est invalide. Si vous travaillez avec ces navigateurs, vous pouvez spécifier plusieurs descripteurs `src` comme solutions de repli. Notez que plusieurs descripteurs `src` sont tentés dans l'ordre inverse, donc à la fin on retrouve le descripteur normal avec tous les éléments.

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src: url("MgOpenModernaBold.otf") format(opentype);
  src: url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental);
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

### Vérifier si l'agent utilisateur prend en charge une police

L'exemple suivant montre comment vérifier si l'agent utilisateur prend en charge une technologie de police avec la règle {{cssxref("@supports")}}. Le bloc CSS à l'intérieur de `@supports` sera appliqué si l'agent utilisateur prend en charge la technologie `color-COLRv1`.

```css
@supports font-tech(color-COLRv1) {
  @font-face {
    font-family: "Trickster";
    src: url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1);
  }

  .colored_text {
    font-family: "Trickster", fantasy;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@font-face", "@font-face")}}
- {{cssxref("@supports", "@supports")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- Le descripteur {{cssxref("@font-face/unicode-range", "unicode-range")}}
