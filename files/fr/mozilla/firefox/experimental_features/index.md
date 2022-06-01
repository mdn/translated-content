---
title: Fonctionnalités expérimentales dans Firefox
slug: Mozilla/Firefox/Experimental_features
tags:
  - Experimental
  - Firefox
  - Preferences
  - features
translation_of: Mozilla/Firefox/Experimental_features
---
{{FirefoxSidebar}}

Cette page détaille les fonctionnalités expérimentales ou partiellement implémentées présentes dans Firefox. Cela inclut les fonctionnalités concernées par les standards web très récents ou en cours de construction. Les informations de cette page permettent de savoir quelles versions contiennent ces fonctionnalités, si elles sont activées par défaut et la _préférence_ qui peut être utilisée pour les activer ou les désactiver. Cela vous permet de tester les fonctionnalités avant leur sortie « générale ».

Les nouvelles fonctionnalités sont d'abord introduites dans [Firefox Nightly](https://nightly.mozilla.org/) où elles sont activées par défaut la plupart du temps. Elles passent ensuite sur la version [Firefox Developer Edition](https://www.mozilla.org/fr/firefox/developer/) puis enfin dans la version finale (_release_). Lorsqu'une fonctionnalité est activée par défaut dans une version _release_, elle n'est plus considérée comme expérimentale et devrait être retiré de cette liste.

Les fonctionnalités expérimentales peuvent être activées ou désactivées via [l'éditeur de configuration Firefox](https://support.mozilla.org/fr/kb/about-config-editor-firefox) (accessible en saisissant `about:config` dans la barre d'adresse de Firefox) en modifiant la ou les _préférence(s)_ indiquées ci-après.

## HTML

### L'élément \<dialog>

L'élément HTML [`<dialog>`](/fr/docs/Web/HTML/Element/dialog) et les API du DOM associées permettent de créer des boîtes de dialogue modales en HTML. L'implémentation actuelle manque de finesse mais permet les fonctionnalités de base. Voir [le bug 840640](https://bugzilla.mozilla.org/show_bug.cgi?id=840640) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>53</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>53</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>53</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>53</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>dom.dialog_element.enabled</code></th>
    </tr>
  </tbody>
</table>

### Attribut global inputmode

L'implémentation de l'attribut global [`inputmode`](/fr/docs/Web/HTML/Global_attributes/inputmode) a été mise à jour afin de suivre la spécification WHATWG ([le bug 1509527](https://bugzilla.mozilla.org/show_bug.cgi?id=1509527)), mais d'autres changements sont encore nécessaires (par exemple, le rendre disponible pour le contenu `contenteditable`), voir [le bug 1205133](https://bugzilla.mozilla.org/show_bug.cgi?id=1205133) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>75</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>75</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>75</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>75</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>dom.forms.inputmode</code></th>
    </tr>
  </tbody>
</table>

### Attribut inert

La propriété [`HTMLElement.inert`](/fr/docs/Web/API/HTMLElement/inert) de [`HTMLElement`](/fr/docs/Web/API/HTMLElement) est un booléen qui, lorsqu'il est présent, peut permettre au navigateur d'ignorer l'élément pour les technologies d'assistance, la recherche sur la page et la sélection de texte. Pour plus de détails sur cette fonctionnalité, voir [le bug 1655722](https://bugzilla.mozilla.org/show_bug.cgi?id=1655722).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>html5.inert.enabled</code></th>
    </tr>
  </tbody>
</table>

### Disposition pour les champs input de type search

La mise en forme des éléments `input type="search"` a été mise à jour. Il y a désormais une icône qui apparaît après une saisie pour permettre d'effacer le champ. Ce comportement permet de rejoindre celui des autres navigateurs. Voir [le bug 558594](https://bugzilla.mozilla.org/show_bug.cgi?id=558594) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.forms.input-type-search.enabled</code></th>
    </tr>
  </tbody>
</table>

## CSS

### Affichage des caractères de contrôle (rectangle avec valeur hexadécimale)

Cette fonctionnalité affiche les caractères de contrôle (catégorie Unicode Cc) autres que _tab_ (`U+0009`), _saut de ligne_ (`U+000A`), _saut de page_ (`U+000C`) et _retour chariot_ (`U+000D`) sous la forme d'un rectangle avec leur valeur hexadécimale à l'intérieur lorsque ces caractères sont inattendus. Voir [le bug 1099557](https://bugzilla.mozilla.org/show_bug.cgi?id=1099557) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>43</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>43</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>43</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>43</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>layout.css.control-characters.enabled</code> ou
        <code>layout.css.control-characters.visible</code>
      </th>
    </tr>
  </tbody>
</table>

### Propriété initial-letter

La propriété CSS [`initial-letter`](/fr/docs/Web/CSS/initial-letter) fait partie du module de spécification [CSS3 Inline](https://drafts.csswg.org/css-inline/) et permet d'indiquer l'élévation (entre autres) des lettres initiales. Voir [le bug 1223880](https://bugzilla.mozilla.org/show_bug.cgi?id=1223880) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>50</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>50</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>50</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>50</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.css.initial-letter.enabled</code></th>
    </tr>
  </tbody>
</table>

### Propriété aspect-ratio

La propriété CSS [`aspect-ratio`](/fr/docs/Web/CSS/aspect-ratio) est décrite dans le module de spécification [CSS4 Sizing](https://drafts.csswg.org/css-sizing-4/) et permet de créer des boîtes qui respectent des proportions (_aspect ratio_ en anglais) données. Voir [le bug 1639963](https://bugzilla.mozilla.org/show_bug.cgi?id=1639963) et [le bug 1646096](https://bugzilla.mozilla.org/show_bug.cgi?id=1646096) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>81</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.css.aspect-ratio.enabled</code></th>
    </tr>
  </tbody>
</table>

### Descripteur size-adjust

Le descripteur CSS [`@font-face/size-adjust`](/fr/docs/Web/CSS/@font-face/size-adjust) est décrit dans le module de spécification [CSS5 Fonts](https://drafts.csswg.org/css-fonts-5/) et définit un facteur de multiplication pour les contours des glyphes et les métriques associées à la police. Cela facilite l'harmonisation lorsqu'on utilise plusieurs polices qui sont affichées avec le même corps. Voir [le bug 1698495](https://bugzilla.mozilla.org/show_bug.cgi?id=1698495) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>89</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>89</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>89</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>89</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.css.size-adjust.enabled</code></th>
    </tr>
  </tbody>
</table>

### Nombres seuls pour les proportions dans les requêtes média

Il s'agit ici de la prise en charge permettant d'utiliser un seul nombre ([`number`](/fr/docs/Web/CSS/number)) pour exprimer le [ratio](/fr/docs/Web/CSS/ratio) lors de la définition d'une [requête média](/fr/docs/Web/CSS/Media_Queries). Voir [le bug 1565562](https://bugzilla.mozilla.org/show_bug.cgi?id=1565562) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>70</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>70</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>70</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>70</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.css.aspect-ratio-number.enabled</code></th>
    </tr>
  </tbody>
</table>

### Propriété backdrop-filter

La propriété [`backdrop-filter`](/fr/docs/Web/CSS/backdrop-filter) permet d'appliquer des effets de filtre à la zone située derrière un élément. Voir [le bug 1178765](https://bugzilla.mozilla.org/show_bug.cgi?id=1178765) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>70</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>70</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>70</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>70</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.css.backdrop-filter.enabled</code></th>
    </tr>
  </tbody>
</table>

### Grilles : disposition en maçonnerie

Cette fonctionnalité ajoute la prise en charge pour [les dispositions « en maçonnerie »](/fr/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) basées sur les grilles où un axe est organisé avec une disposition donnée et où l'autre suit une disposition de grille normale. Cela permet aux développeuses et développeurs de créer plus facilement des dispositions pour des galeries. Voir [le bug 1607954](https://bugzilla.mozilla.org/show_bug.cgi?id=1607954) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>77</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>77</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>77</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>77</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>layout.css.grid-template-masonry-value.enabled</code>
      </th>
    </tr>
  </tbody>
</table>

### Caractéristique média prefers-contrast

La caractéristique média [`prefers-contrast`](/fr/docs/Web/CSS/@media/prefers-contrast) est utilisée afin de déterminer si une utilisatrice ou un utilisateur indiqué une préférence pour un contraste élevé ou non. Voir [le bug 1506364](https://bugzilla.mozilla.org/show_bug.cgi?id=1506364) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>80</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>80</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>80</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>80</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <p><code>layout.css.prefers-contrast.enabled</code></p>
      </th>
    </tr>
  </tbody>
</table>

### Propriété math-style

La propriété [`math-style`](/fr/docs/Web/CSS/math-style) indique si les équations MathML doivent être affichées avec une hauteur normale ou compacte. Voir [le bug 1665975](https://bugzilla.mozilla.org/show_bug.cgi?id=1665975) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>83</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>83</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>83</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>83</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.css.math-style.enabled</code></th>
    </tr>
  </tbody>
</table>

## JavaScript

### Méthode at() pour l'indexation relative

La méthode `at()` qui permet d'utiliser une indexation relative a été ajoutée aux objets [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) et [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray). L'utilisation d'un entier positif comme argument renverra l'élément situé à cet index tandis qu'un entier négatif permettra de récupérer un élément à partir de la fin du tableau ou de la chaîne. Ainsi `1` fournira le deuxième élément tandis que `-1` renverra le dernier élément. Voir [`Array.prototype.at()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at), [`String.prototype.at()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/at) et [`TypedArray.prototype.at()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/at) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>85</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>85</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>85</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>85</td>
      <td>Non</td>
    </tr>
  </tbody>
</table>

### Champs de classe privés

Voir la page [sur les champs de classe privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_class_fields) pour plus d'informations.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Noms des préférences</th>
      <th colspan="2">
        <code
          >javascript.options.experimental.private_fields<br />javascript.options.experimental.private_methods</code
        >
      </th>
    </tr>
  </tbody>
</table>

## Fonctionnalités des API Web

### Graphismes : Canvas, WebGL, WebGPU

#### CanvasRenderingContext2D.createConicGradient()

L'interface [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D) rattachée à l'API [`Canvas`](/fr/docs/Web/API/Canvas_API) fournit désormais une méthode [`createConicGradient()`](/fr/docs/Web/API/CanvasRenderingContext2D/createConicGradient). Celle-ci renvoie une valeur [`CanvasGradient`](/fr/docs/Web/API/CanvasGradient) à la façon des méthodes existantes pour les [dégradés linéaires](/fr/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) et [radiaux](/fr/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) mais pour les dégradés coniques. Voir [le bug 1627014](https://bugzilla.mozilla.org/show_bug.cgi?id=1627014) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>86</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>86</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>86</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>86</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>canvas.createConicGradient.enabled</code></th>
    </tr>
  </tbody>
</table>

#### Interface OffscreenCanvas

L'interface [`OffscreenCanvas`](/fr/docs/Web/API/OffscreenCanvas) fournit un canevas dont le rendu est effectué en dehors de l'écran. Il est disponible dans les contextes de la fenêtre et des [workers](/fr/docs/Web/API/Web_Workers_API). Voir [le bug 1390089](https://bugzilla.mozilla.org/show_bug.cgi?id=1390089) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>44</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>44</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>44</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>44</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>gfx.offscreencanvas.enabled</code></th>
    </tr>
  </tbody>
</table>

#### API Hit Regions

Déterminer si les coordonnées de la souris sont situées dans une région donnée d'un canevas est un problème courant. L'API Hit Regions permet de définir une zone du canevas et fournit d'autres outils pour exposer le contenu interactif d'un canevas aux outils d'accessibilité.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>30</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>30</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>30</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>30</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>canvas.hitregions.enabled</code></th>
    </tr>
  </tbody>
</table>

#### WebGPU API

Cette nouvelle API fournit une prise en charge bas niveau pour les calculs et le rendu graphique en utilisant le GPU de l'appareil. [La spécification](https://gpuweb.github.io/gpuweb/) est toujours en cours d'écriture. Voir [le bug 1602129](https://bugzilla.mozilla.org/show_bug.cgi?id=1602129) pour l'état de l'implémentation pour cette API.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>73</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>73</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>73</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>73</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>dom.webgpu.enabled</code></th>
    </tr>
  </tbody>
</table>

### API HTML DOM

#### Méthode setSinkId() pour HTMLMediaElement

[`HTMLMediaElement.setSinkId()`](/fr/docs/Web/API/HTMLMediaElement/setSinkId) permet de définir l'identifiant d'un « sink » d'un appareil de sortie audio sur un [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) ce qui permet de modifier l'endroit où l'audio sort. Voir [le bug 934425](https://bugzilla.mozilla.org/show_bug.cgi?id=934425) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>64</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>64</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>64</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>64</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>media.setsinkid.enabled</code></th>
    </tr>
  </tbody>
</table>

#### Propriétés audioTracks et videoTracks pour HTMLMediaElement

Cette fonctionnalité ajoute les propriétés [`HTMLMediaElement.audioTracks`](/fr/docs/Web/API/HTMLMediaElement/audioTracks) et [`HTMLMediaElement.videoTracks`](/fr/docs/Web/API/HTMLMediaElement/videoTracks) aux éléments HTML qui sont des médias. Toutefois, comme Firefox ne prend actuellement pas en charge les pistes audio et vidéo multiples, les cas d'usage de ces propriétés ne fonctionnent pas et elles sont donc désactivées par défaut. Voir [le bug 1057233](https://bugzilla.mozilla.org/show_bug.cgi?id=1057233) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>33</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>33</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>33</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>33</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>media.track.enabled</code></th>
    </tr>
  </tbody>
</table>

### DOM

#### ClipboardItem

L'interface [`ClipboardItem`](/fr/docs/Web/API/ClipboardItem), rattachée à l'API [`Clipboard API`](/fr/docs/Web/API/Clipboard_API) est désormais prise en charge et [`Clipboard.write()`](/fr/docs/Web/API/Clipboard/write) accepte une série d'[éléments de presse-papier (`ClipboardItem`)](/fr/docs/Web/API/ClipboardItem) plutôt que l'implémentation précédente avec des objets [DataTransfer](/fr/docs/Web/API/DataTransfer). Elle est disponible avec la préférence `dom.events.asyncClipboard.clipboardItem` qui était précédemment intitulée `dom.events.asyncClipboard.dataTransfer`. Voir [le bug 1619947](https://bugzilla.mozilla.org/show_bug.cgi?id=1619947) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>87</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>87</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>87</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>87</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code><strong>dom.events.asyncClipboard.clipboardItem</strong></code>
      </th>
    </tr>
  </tbody>
</table>

#### API HTML Sanitizer

L'API [`HTML Sanitizer`](/fr/docs/Web/API/HTML_Sanitizer_API) permet aux développeuses et développeurs de prendre en entrée des chaînes de caractères HTML non sécurisées et de les nettoyer afin de pouvoir les insérer dans le DOM d'un document. Les éléments par défaut pour chaque propriété de configuration sont toujours en cours d'étude. Pour cette raison, le paramètre de configuration n'a pas été implémenté. Voir [la documentation du constructeur](/fr/docs/Web/API/Sanitizer/sanitizer) pour plus d'informations et [le bug 1673309](https://bugzilla.mozilla.org/show_bug.cgi?id=1673309) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>84</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>84</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>84</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>84</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code><strong>dom.security.sanitizer.enabled</strong></code>
      </th>
    </tr>
  </tbody>
</table>

#### Propriété autoplayPolicy pour Document

La propriété [`autoplayPolicy`](/fr/docs/Web/API/Document/autoplayPolicy), rattachée à [`document`](/fr/docs/Web/API/Document), renvoie une chaîne de caractères indiquant la façon dont le navigateur gère les requêtes pour la lecture automatique des médias (déclenchée avec l'utilisation de la propriété [`autoplay`](/fr/docs/Web/API/HTMLMediaElement/autoplay) ou via le déclenchement de la lecture depuis du code JavaScript). La spécification de cette API est en cours d'écriture. La valeur de cette propriété évolue selon les actions de l'utilisateur, leurs préférences/configurations et de l'état du navigateur. Les valeurs possibles sont `allowed` (la lecture automatique est possible), `allowed-muted` (la lecture automatique est possible mais sans audio), et `disallowed` (la lecture automatique n'est pas possible). Voir [le bug 1506289](https://bugzilla.mozilla.org/show_bug.cgi?id=1506289) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>66</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>66</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>66</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>66</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>dom.media.autoplay.autoplay-policy-api</code></th>
    </tr>
  </tbody>
</table>

#### Méthodes convertPointFromNode(), convertRectFromNode(), et convertQuadFromNode() pour GeometryUtils

Les méthodes `convertPointFromNode()`, `convertRectFromNode()`, et ``convertQuadFromNode() effectuent la correspondance entre un point, un rectangle ou un quadrilatère donné et le [`Node`](/fr/docs/Web/API/Node) depuis lequel ils sont appelés vers un autre nœud. Voir [le bug 918189](https://bugzilla.mozilla.org/show_bug.cgi?id=918189) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>31</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>31</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>31</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>31</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.css.getBoxQuads.enabled</code></th>
    </tr>
  </tbody>
</table>

#### Méthode getBoxQuads() pour GeometryUtils

La méthode `getBoxQuads()` pour `GeometryUtils` renvoie les boîtes CSS d'un objet [`Node`](/fr/docs/Web/API/Node) relatif à un autre nœud ou à la zone d'affichage. Voir [le bug 917755](https://bugzilla.mozilla.org/show_bug.cgi?id=917755) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>31</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>31</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>31</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>31</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>layout.css.convertFromNode.enable</code></th>
    </tr>
  </tbody>
</table>

### API Payment Request

#### Gestion de la méthode de paiement principale

L'API [Payment Request](/fr/docs/Web/API/Payment_Request_API) permet de gérer les paiements au sein de contenu ou d'application web. En raison d'un bug lors des tests de l'interface utilisateur, il a été décidé de suspendre la sortie de cette API tant que des discussions sont en cours sur des changements potentiels à cette API. Le travail est en cours. Voir [le bug 1318984](https://bugzilla.mozilla.org/show_bug.cgi?id=1318984) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>55</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>55</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>55</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>55</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>dom.payments.request.enabled</code> et
        <code>dom.payments.request.supportedRegions</code>
      </th>
    </tr>
  </tbody>
</table>

#### API Basic Card

Il s'agit d'étendre l'API [Payment Request](/fr/docs/Web/API/Payment_Request_API) avec des dictionnaires définissant les structures de données qui décrivent les types de cartes de paiement et les réponses de paiement. Voir [`BasicCardRequest`](/fr/docs/Web/API/BasicCardRequest) et [`BasicCardResponse`](/fr/docs/Web/API/BasicCardResponse).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>56</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>56</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>56</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>56</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>dom.payments.request.enabled</code> and<br /><code
          >dom.payments.request.supportedRegions</code
        >
      </th>
    </tr>
  </tbody>
</table>

### API Visual Viewport

L'API [Visual Viewport](/fr/docs/Web/API/Visual_Viewport_API) (qu'on peut traduire en « zone d'affichage visuelle ») donne accès à des informations décrivant la position de [la zone d'affichage visuelle](/fr/docs/Glossary/visual_viewport) relative au document et à la zone de contenu de la fenêtre. Elle contient également des évènements pour surveiller les évolutions. Voir [le bug 1550390](https://bugzilla.mozilla.org/show_bug.cgi?id=1550390) pour plus de détails. Il n'est pas prévu de fournir cette API sur la version pour ordinateur de bureau, voir [le bug 1551302](https://bugzilla.mozilla.org/show_bug.cgi?id=1551302) si besoin.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>63</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>63</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>63</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>63</td>
      <td>À partir de Firefox 68, sur Android uniquement</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>dom.visualviewport.enabled</code></th>
    </tr>
  </tbody>
</table>

### Constructeur pour les feuilles de style

Cette fonctionnalité ajoute un constructeur pour l'interface [`CSSStyleSheet`](/fr/docs/Web/API/CSSStyleSheet) et d'autres modifications permettant de créer de nouvelles feuilles de style sans avoir à ajouter la feuille au HTML. Cela permet de créer des feuilles de style réutilisables beaucoup plus facilement afin de les utiliser avec [Shadow DOM](/fr/docs/Web/Web_Components/Using_shadow_DOM). L'implémentation actuelle n'est pas encore terminée. Voir [le bug 1520690](https://bugzilla.mozilla.org/show_bug.cgi?id=1520690) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>73</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>73</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>73</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>73</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>layout.css.constructable-stylesheets.enabled</code>
      </th>
    </tr>
  </tbody>
</table>

### WebRTC et média

Les fonctionnalités expérimentales qui suivent incluent celles relatives aux API suivantes [WebRTC](/fr/docs/Web/API/WebRTC_API), [Web Audio](/fr/docs/Web/API/Web_Audio_API), [Media Source Extensions](/fr/docs/Web/API/Media_Source_Extensions_API), [Encrypted Media Extensions](/fr/docs/Web/API/Encrypted_Media_Extensions_API), et [Media Capture and Streams](/fr/docs/Web/API/Media_Streams_API).

#### Méthodes asynchrones pour l'ajout et le retrait sur SourceBuffer

Cette fonctionnalité ajoute les méthodes [`appendBufferAsync()`](/fr/docs/Web/API/SourceBuffer/appendBufferAsync) et [`removeAsync()`](/fr/docs/Web/API/SourceBuffer/removeAsync) qui fonctionnent avec des promesses et permettent d'ajouter et de retirer des tampons de source média à l'interface [`SourceBuffer`](/fr/docs/Web/API/SourceBuffer). Voir [le bug 1280613](https://bugzilla.mozilla.org/show_bug.cgi?id=1280613) et [le bug 778617](https://bugzilla.mozilla.org/show_bug.cgi?id=778617) pour plus d'informations.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>62</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>62</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>62</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>62</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>media.mediasource.experimental.enabled</code></th>
    </tr>
  </tbody>
</table>

#### Prise en charge du format AVIF (AV1 Image File)

Avec cette fonctionnalité, Firefox prend en charge le format [AV1 Image File (AVIF)](/fr/docs/Web/Media/Formats/Image_types#avif). Il s'agit d'un format d'image tirant parti des algorithmes de compression vidéo AV1 pour réduire la taille des images. Voir [le bug 1443863](https://bugzilla.mozilla.org/show_bug.cgi?id=1443863) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>77</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>77</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>77</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>77</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>image.avif.enabled</code></th>
    </tr>
  </tbody>
</table>

#### Prise en charge d'AV1 pour Firefox sur Android

Cette fonctionnalité permet à Firefox sur Android d'utiliser [le format AV1](/fr/docs/Web/Media/Formats/Video_codecs#av1). Cette fonctionnalité est disponible pour les versions _nightly_ pour Firefox sur Android à partir de la version 81. Elle est activée par défaut.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>81</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">—</th>
    </tr>
  </tbody>
</table>

## Sécurité et confidentialité

#### Block plain text requests from Flash on encrypted pages

Afin d'atténuer le risque d'attaque de l'homme du milieu (MitM) pour le contenu Flash sur les pages chiffrées, une préférence a été ajoutée afin de traiter `OBJECT_SUBREQUEST` comme du contenu actif. Voir [le bug 1190623](https://bugzilla.mozilla.org/show_bug.cgi?id=1190623) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>59</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>59</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>59</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>59</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>security.mixed_content.block_object_subrequest</code>
      </th>
    </tr>
  </tbody>
</table>

#### Indication des pages non-sécurisées

Les deux préférences suivantes permettent d'ajouter un libellé « Non-sécurisé » dans la barre d'adresse à côté de l'icône de cadenas lorsqu'une page est chargée de façon non-sécurisée (via [HTTP](/fr/docs/Glossary/HTTP) plutôt qu'avec [HTTPS](/fr/docs/Glossary/https)). Voir [le bug 1335970](https://bugzilla.mozilla.org/show_bug.cgi?id=1335970) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>60</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>60</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>60</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>60</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>security.insecure_connection_text.enabled</code> pour la
        navigation en mode normale,
        <code>security.insecure_connection_text.pbmode.enabled</code> pour la
        navigation en mode privé
      </th>
    </tr>
  </tbody>
</table>

#### Mise à niveau pour les médias chargés avec une sécurité mixte

Lorsque la préférence correspondante est activée, Firefox passe les requêtes des contenus média HTTP en HTTPS pour les pages sécurisées. L'objectif est d'éviter des conditions de contenu mixte où du contenu serait chargé de façon sécurisée tandis qu'un autre contenu serait chargé de façon non-sécurisée. Si la bascule en HTTPS échoue (par exemple si l'hôte qui sert le média ne prend pas en charge HTTPS), le média n'est pas chargé. Voir [le bug 1435733](https://bugzilla.mozilla.org/show_bug.cgi?id=1435733)pour plus de détails.

Cela modifie également l'avertissement de la console : si la mise à niveau réussit, un message indiquant que la requête a été mise à niveau est affiché plutôt qu'un avertissement.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>84</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>60</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>60</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>60</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>security.mixed_content.upgrade_display_content</code>
      </th>
    </tr>
  </tbody>
</table>

#### En-tête Feature-Policy

[Feature-Policy](/fr/docs/Web/HTTP/Feature_Policy) est un en-tête HTTP qui permet de choisir l'activation, la désactivation ou certaines des fonctionnalités et API dans le navigateur. Cet en-tête est similaire au CSP mais permet de contrôler des fonctionnalités plutôt que des traits liés à la sécurité.

> **Note :**
>
> L'en-tête `Feature-Policy` a été renommé en `Permissions-Policy` dans la spécification. Cet article sera mis à jour afin de refléter ce changement.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>65</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>65</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>65</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>65</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>dom.security.featurePolicy.header.enabled</code>
      </th>
    </tr>
  </tbody>
</table>

## Outils de développement

#### Sélecteur pour le contexte d'exécution

Cette fonctionnalité affiche un bouton sur la ligne de commande de la console qui permet de changer le contexte dans lequel l'expression saisie est exécutée. Voir [le bug 1605154](https://bugzilla.mozilla.org/show_bug.cgi?id=1605154) et [le bug 1605153](https://bugzilla.mozilla.org/show_bug.cgi?id=1605153) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>75</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>75</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>75</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>75</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2"><code>devtools.webconsole.input.context</code></th>
    </tr>
  </tbody>
</table>

#### Prise en charge des gestes mobiles en vue adaptative

Les gestes à la souris peuvent être utilisés pour simuler des gestes tactiles sur mobiles comme le défilement, le zoom en pinçant, l'appui long ou l'appui double. Voir [le bug 1621781](https://bugzilla.mozilla.org/show_bug.cgi?id=1621781), [le bug 1245183](https://bugzilla.mozilla.org/show_bug.cgi?id=1245183), et [le bug 1401304](https://bugzilla.mozilla.org/show_bug.cgi?id=1401304) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>76<sup>[1]</sup></td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>76<sup>[1]</sup></td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>76<sup>[1]</sup></td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>76<sup>[1]</sup></td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">n/a</th>
    </tr>
  </tbody>
</table>

\[1] La prise en charge pour le geste de double toucher a été ajouté avec Firefox 76. Les autres gestes ont été ajoutés avec Firefox 79.

#### Évènements émis par le serveur dans le moniteur réseau

Cette fonctionnalité permet au moniteur réseau d'afficher des informations sur [les évènements émis par le serveur](/fr/docs/Web/API/Server-sent_events). Voir [le bug 1405706](https://bugzilla.mozilla.org/show_bug.cgi?id=1405706) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>80</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>80</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>80</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>80</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>devtools.netmonitor.features.serverSentEvents</code>
      </th>
    </tr>
  </tbody>
</table>

#### Bulles d'informations pour la compatibilité CSS des navigateurs

La vue pour les règles CSS peut afficher des bulles d'informations pour la compatibilité des navigateurs pour les propriétés qui ont des problèmes connus. Pour plus d'informations, voir : [Examiner et éditer le HTML > Avertissements de compatibilité navigateur](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#browser_compat_warnings).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>81</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code
          >devtools.inspector.ruleview.inline-compatibility-warning.enabled</code
        >
      </th>
    </tr>
  </tbody>
</table>

## Interface utilisateur (UI)

#### Zoom (version bureau)

Cette fonctionnalité permet, pour les ordinateurs de bureau, un zoom doux avec le geste de pincement sans qu'il y ait de redessin de l'écran, à la façon des appareils mobiles. Voir [le bug 1245183](https://bugzilla.mozilla.org/show_bug.cgi?id=1245183) et [le bug 1620055](https://bugzilla.mozilla.org/show_bug.cgi?id=1620055) pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Ajouté dans la version</th>
      <th scope="col">Activé par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nightly</th>
      <td>42</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Developer Edition</th>
      <td>42</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>42</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Release</th>
      <td>42</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Nom de la préférence</th>
      <th colspan="2">
        <code>apz.allow_zooming</code> et pour Windows :
        <code>apz.windows.use_direct_manipulation</code>
      </th>
    </tr>
  </tbody>
</table>

## Voir aussi

- [Les notes de version pour Firefox destinées aux développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://nightly.mozilla.org/)
- [Firefox Developer Edition](https://www.mozilla.org/fr/firefox/developer/)
