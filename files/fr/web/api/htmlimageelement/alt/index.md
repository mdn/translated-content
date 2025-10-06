---
title: "HTMLImageElement : propriété alt"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("HTML DOM")}}

La propriété **`alt`** de l'interface {{domxref("HTMLImageElement")}} fournit un texte de remplacement (alternatif) à afficher lorsque l'image spécifiée par l'élément HTML {{HTMLElement("img")}} n'est pas chargée.

Cela peut arriver en cas d'erreur, si l'utilisateur·ice a désactivé le chargement des images, ou si l'image n'a pas encore fini de se charger.

La raison la plus importante d'utiliser la propriété `alt` est de favoriser [l'accessibilité](/fr/docs/Web/Accessibility), car le texte `alt` peut être utilisé par les lecteur·ice·s d'écran et autres technologies d'assistance pour permettre aux personnes en situation de handicap de profiter pleinement de votre contenu.
Par exemple, il sera lu à voix haute ou envoyé à un dispositif braille pour soutenir les utilisateur·ice·s aveugles ou malvoyant·e·s.

> **À retenir&nbsp;:** Lorsque vous choisissez une chaîne de caractères `alt` pour vos images, imaginez ce que vous diriez en lisant la page à quelqu'un·e au téléphone, sans mentionner qu'il y a une image sur la page.

Le texte alternatif s'affiche à la place de l'image et doit pouvoir la remplacer _sans modifier le sens de la page_.

## Valeur

Une chaîne de caractères contenant le texte alternatif à afficher lorsque l'image n'est pas chargée ou à destination des dispositifs d'assistance.

L'attribut `alt` est officiellement obligatoire&nbsp;: il doit toujours être renseigné.
Si l'image ne nécessite pas de texte de remplacement (par exemple, pour une image décorative ou une icône d'information de faible importance), vous pouvez indiquer une chaîne de caractères vide (`""`).
Pour des raisons de compatibilité, les navigateurs acceptent généralement une image sans attribut `alt`, mais il est recommandé de toujours l'utiliser.

## Notes d'utilisation

La règle fondamentale pour l'attribut `alt` est que le texte alternatif de chaque image doit pouvoir remplacer l'image _sans modifier le sens de la page_. Il ne faut jamais utiliser `alt` pour un texte qui pourrait être interprété comme une légende ou un titre.
Il existe d'autres attributs et éléments prévus à cet effet.

## Exemples

Au-delà de cela, il existe des recommandations supplémentaires pour bien utiliser `alt` selon l'usage de l'image. Elles sont illustrées dans les exemples suivants.

### Images décoratives

Les images sans signification sémantique — purement décoratives ou à valeur informative très limitée — doivent avoir leur attribut `alt` défini à la chaîne de caractères vide (`""`).
C'est illustré dans l'exemple suivant.

#### HTML

Dans le HTML de cet exemple, l'élément {{HTMLElement("img")}} inclut la propriété `alt`, ce qui empêche l'image d'avoir un texte alternatif, puisqu'il s'agit d'un détail décoratif.

```html
<div class="container">
  <div class="left-margin">
    <img src="margin-flourish.svg" alt="" />
  </div>
  <div class="contents">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci
      ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
      neque libero. Vivamus consectetur rhoncus elit eget porta. Etiam pulvinar
      ex id sapien laoreet, quis aliquet odio lobortis. Nam ac mauris at risus
      laoreet cursus vitae et sapien. Etiam molestie auctor eros, ac porta risus
      scelerisque sit amet. Ut nunc neque, porta eu auctor at, tempor et arcu.
    </p>
  </div>
</div>
```

```css
body {
  margin: 0;
  padding: 0;
}

p {
  margin-block-start: 0;
  margin-block-end: 1em;
  margin-top: 0;
  margin-bottom: 1em;
}

.container {
  width: 100vh;
  height: 95vh;
  font:
    16px Arial,
    Helvetica,
    sans-serif;
}

.left-margin {
  background-color: rgb(241 240 237);
  width: 9em;
  height: 100%;
  float: left;
  margin-right: 5px;
  padding-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-margin img {
  width: 6em;
}

.contents {
  background-color: rgb(241 240 235);
  height: 100%;
  margin-left: 2em;
  padding-top: 1em;
  padding-left: 2em;
  padding-right: 1em;
}
```

#### Résultat

{{EmbedLiveSample("images_décoratives", 600, 500)}}

### Images utilisées comme boutons

Lorsque vous utilisez une image comme bouton (en l'utilisant comme unique enfant visible d'un élément HTML {{HTMLElement("a")}} représentant un lien), l'attribut `alt` doit servir à exprimer la fonction du bouton.
Autrement dit, il doit s'agir du même texte que celui que vous utiliseriez pour un bouton textuel ayant le même objectif.

Par exemple, dans l'extrait HTML ci-dessous, une barre d'outils utilisant des icônes comme libellés de liens fournit un attribut `alt` pour chacune, donnant un libellé textuel à utiliser à la place de l'icône si les icônes ne sont pas affichées ou sont volontairement désactivées.

```html
<li class="toolbar" role="toolbar">
  <a href="songs.html" role="button">
    <img src="songicon.svg" alt="Songs" />
  </a>
  <a href="albums.html" role="button">
    <img src="albumicon.svg" alt="Albums"
  /></a>
  <a href="artists.html" role="button">
    <img src="artisticon.svg" alt="Artists" />
  </a>
  <a href="playlists.html" role="button">
    <img src="playlisticon.svg" alt="Playlists" />
  </a>
</li>
```

### Images contenant des schémas ou des cartes

Lorsqu'une image présente des informations sous forme de schéma, graphique, diagramme ou carte, le texte `alt` doit fournir la même information, au moins sous forme résumée.
C'est valable que l'image soit au format bitmap comme [PNG](/fr/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) ou [JPEG](/fr/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image), ou au format vectoriel comme [SVG](/fr/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics).

- Pour une carte, le texte `alt` peut donner les indications pour se rendre à l'endroit indiqué, comme vous l'expliqueriez à l'oral.
- Pour un graphique, le texte peut décrire les éléments du graphique et leurs valeurs.
- Pour un schéma, le texte peut expliquer le concept présenté.

Gardez à l'esprit que tout texte inclus dans les schémas et graphiques au format {{Glossary("SVG")}} peut être lu par les lecteur·ice·s d'écran.
Cela peut influencer la façon dont vous rédigez le texte `alt` du schéma.

### Icônes ou logos

Les logos (par exemple, d'entreprise ou de marque) et les icônes informatives doivent utiliser le texte correspondant dans leur chaîne de caractères `alt`.
Autrement dit, si l'image est un logo d'entreprise, le texte `alt` doit être le nom de l'entreprise.
Si l'image est une icône représentant un état ou une information, le texte doit être le nom de cet état.

Par exemple, si une image est un badge affiché sur une page pour indiquer que le contenu est nouveau et a été récemment mis à jour, le texte `alt` correspondant pourrait être «&nbsp;Mis à jour récemment&nbsp;» ou même «&nbsp;Mis à jour le 27 août 2019&nbsp;».

Dans cet exemple, une image en étoile avec le mot «&nbsp;Nouveau&nbsp;!&nbsp;» est utilisée pour indiquer qu'un article porte sur une nouveauté (et probablement aussi quelque chose de supposé enthousiasmant).
L'attribut `alt` est défini à «&nbsp;Nouvelle page&nbsp;!&nbsp;» pour permettre à ce texte d'être affiché à la place de l'image si celle-ci n'est pas disponible.
Il sera également lu par les lecteur·ice·s d'écran.

#### HTML

Le code HTML suivant crée un extrait de contenu d'un site utilisant l'icône décrite.
Notez l'utilisation de l'attribut `alt` sur {{HTMLElement("img")}}, fournissant une bonne chaîne de substitution à utiliser si l'image ne se charge pas.
Notez l'utilisation de l'attribut `alt` sur {{HTMLElement("img")}}, fournissant une bonne chaîne de substitution à utiliser si l'image ne se charge pas.

```html
<div class="container">
  <img
    src="https://www.bitstampede.com/mdn-test/new-page.svg"
    alt="New Page!"
    class="page-info-badge" />
  <p class="contents">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci
    ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac neque
    libero. Vivamus consectetur rhoncus elit eget porta. Etiam pulvinar ex id
    sapien laoreet, quis aliquet odio lobortis. Nam ac mauris at risus laoreet
    cursus vitae et sapien. Etiam molestie auctor eros, ac porta risus
    scelerisque sit amet. Ut nunc neque, porta eu auctor at, tempor et arcu.
  </p>
</div>
```

#### CSS

L'élément principal du CSS ici est l'utilisation de {{cssxref("clip-path")}} et {{cssxref("shape-outside")}} pour habiller le texte autour de l'icône de façon esthétique.

```css
.container {
  max-width: 500px;
}

.page-info-badge {
  width: 9em;
  padding-right: 1em;
  float: left;
  clip-path: polygon(
    100% 0,
    100% 50%,
    90% 70%,
    80% 80%,
    70% 90%,
    50% 100%,
    0 100%,
    0 0
  );
  shape-outside: polygon(
    100% 0,
    100% 50%,
    90% 70%,
    80% 80%,
    70% 90%,
    50% 100%,
    0 100%,
    0 0
  );
}

.contents {
  margin-top: 1em;
  font:
    16px Arial,
    Helvetica,
    Verdana,
    sans-serif;
}
```

#### Résultat

{{EmbedLiveSample("icônes_ou_logos", 640, 400)}}

### Autres images

Les images montrant des objets ou des scènes doivent avoir un texte `alt` décrivant ce qui est visible sur l'image. Une photo d'une théière jaune pourrait littéralement avoir son attribut `alt` défini à «&nbsp;Une théière jaune&nbsp;».

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
