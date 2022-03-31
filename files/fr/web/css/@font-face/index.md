---
title: '@font-face'
slug: Web/CSS/@font-face
tags:
  - CSS
  - Reference
  - Règle @
translation_of: Web/CSS/@font-face
---
{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/R%C3%A8gles_@) **`@font-face`** permet de définir les polices d'écriture à utiliser pour afficher le texte de pages web. Cette police peut être chargée depuis un serveur distant ou depuis l'ordinateur de l'utilisateur. Si la fonction `local()` est utilisée, elle indique à l'agent utilisateur de prendre en compte une police présente sur le poste de l'utilisateur.

En permettant aux auteurs de fournir leurs propres polices, il n'est plus nécessaire de dépendre uniquement des polices qui sont installées sur les postes des utilisateurs.

Il est courant d'utiliser les deux formes `url()` et `local()` afin de pouvoir utiliser une police locale si elle est disponible ou d'en télécharger une autre au cas où.

La règle `@font-face` peut être utilisée au niveau global d'une feuille de style et également au sein d'un groupe lié à [une règle @ conditionnelle](/fr/docs/Web/CSS/Règles_@).

```css
@font-face {
 font-family: "Open Sans";
 src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
        url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

## Syntaxe

### Descripteurs

- {{cssxref("@font-face/font-display", "font-display")}}
  - : Ce descripteur détermine la façon dont une fonte est affichée selon qu'elle a été téléchargée et/ou si elle est prête à être utilisée.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Ce descripteur définit un nom qui sera utilisé pour désigner cette police dans les différentes règles associées.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Une valeur {{cssxref("font-stretch")}}. Depuis Firefox 61 et pour les navigateurs récents, il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une fonte, par exemple : `font-stretch: 50% 200%;`.
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Une valeur {{cssxref("font-style")}}. Depuis Firefox 61 et pour les navigateurs récents, il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une fonte, par exemple : `font-style: oblique 20deg 50deg;`.
- {{cssxref("@font-face/font-variant", "font-variant")}}
  - : Une valeur {{cssxref("font-variant")}}.
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Une valeur {{cssxref("font-weight")}}. Depuis Firefox 61 et pour les navigateurs récents, il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une fonte, par exemple : `font-weight: 100 400;`.
- {{cssxref("font-feature-settings", "font-feature-settings")}}
  - : Ce descripteur permet d'avoir un contrôle avancé sur les fonctionnalités typographiques relatives aux fontes OpenType.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ce descripteur permet d'avoir un contrôle de bas niveau sur les variations des polices OpenType et TrueType en indiquant les nom des axes et des fonctionnalités à faire varier.
- {{cssxref("@font-face/src", "src")}}

  - : Indique la ressource qui contient les données pour la police d'écriture. Cela peut être une URL vers un fichier distant ou le nom d'une police de caractères présente sur l'ordinateur de l'utilisateur.

    On peut fournir une indication de format au navigateur (afin que celui-ci sélectionne celui qui lui convient le mieux) sous la forme d'une fonction `format()` qui contient le type comme argument :

    ```css
    src: url(ideal-sans-serif.woff) format("woff"),
         url(basic-sans-serif.ttf) format("truetype");
    ```

    Les types utilisables sont : `"woff"`, `"woff2"`, `"truetype"`, `"opentype"`, `"embedded-opentype"` et `"svg"`.

- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : L'intervalle des points de code Unicode pour lesquels la règle  `@font-face` s'applique.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Police distante

#### CSS

```css
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("/static/styles/libs/font-awesome/fonts/fontawesome-webfont.fdf491ce5ff5.woff");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

#### HTML

```html
<p> Et voici Bitstream Vera Serif Bold.</p>
```

#### Résultat

{{EmbedLiveSample("Police_distante")}}

### Police locale

Ici, l'agent utilisateur tente d'utiliser la police Helvetica Neue Bold ou HelveticaNeue-Bold si elle existe sur l'ordinateur de l'utilisateur. Sinon, il utilise la police distante MgOpenModernaBold.ttf.

#### CSS

```css
@font-face {
  font-family: MaHelvetica;
  src: local("Helvetica Neue Bold"),
       local("HelveticaNeue-Bold"),
       url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

#### HTML

```html
<p> Et voici Ma Helvetica.</p>
```

#### Résultat

{{EmbedLiveSample("Police_locale")}}

## Types MIME associés aux polices

Voici, selon les différents formats de police, les types MIME associés :

- TrueType
  - : `font/ttf`
- OpenType
  - : `font/otf`
- Web Open File Format
  - : `font/woff`
- Web Open File Format 2
  - : `font/woff2`

## Notes

- Les restrictions d'origine (même domaine) s'appliquent également sur les polices web sauf si [les contrôles d'accès HTTP](/fr/docs/HTTP/Access_control_CORS) sont paramétrés afin de lever cette restriction.
- `@font-face` ne peut pas être déclaré au sein d'un sélecteur CSS. Ainsi l'exemple suivant ne fonctionnera pas :

  ```css example-bad
  .nomClasse {
    @font-face {
      font-family: MyHelvetica;
      src: local("Helvetica Neue Bold"),
           local("HelveticaNeue-Bold"),
           url(MgOpenModernaBold.ttf;
      font-weight: bold;
    }
  }
  ```

## Spécifications

| Spécification                                                                    | État                             | Commentaires                                                                |
| -------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------- |
| {{SpecName('WOFF2.0', '', 'WOFF2 font format')}}                 | {{Spec2('WOFF2.0')}}     | Spécification du format de police avec un nouvel algorithme de compression. |
| {{SpecName('WOFF1.0', '', 'WOFF font format')}}                 | {{Spec2('WOFF1.0')}}     | Spécification du format de police.                                          |
| {{SpecName('CSS3 Fonts', '#font-face-rule', '@font-face')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale.                                                        |

## Compatibilité des navigateurs

{{Compat("css.at-rules.font-face")}}

## Voir aussi

- [À propos de WOFF](/fr/docs/Web/Guide/WOFF)
- [Le générateur de règles `@font-face` par Everythingfonts](https://everythingfonts.com/font-face)
- [Le générateur de règles @font-face par FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator)
- [Des polices obtenues avec `@font-face` (en anglais, sur hacks.mozilla.org)](http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Une bibliothèque de polices ouvertes (_Open Font Library_)](http://openfontlibrary.org/)
- [Où puis-je utiliser WOFF ? (en anglais sur caniuse.com)](http://caniuse.com/woff)
- [Où puis-je utiliser les polices SVG ?](http://caniuse.com/svg-fonts)
