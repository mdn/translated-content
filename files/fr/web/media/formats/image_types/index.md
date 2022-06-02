---
title: Guide des types et formats de fichiers d'images
slug: Web/Media/Formats/Image_types
tags:
  - APNG
  - BMP
  - Bitmap
  - Diagrams
  - File
  - File Types
  - Filetype
  - Graphics
  - Guide
  - ICO
  - Icons
  - Image
  - Images
  - JPEG
  - JPG
  - Media
  - PNG
  - Photos
  - SVG
  - WebP
  - gif
  - icon
translation_of: Web/Media/Formats/Image_types
original_slug: Web/Media/Formats/Types_des_images
---
{{QuickLinksWithSubpages("/fr/docs/Web/Media")}}

Dans ce guide, nous aborderons les types de fichiers d'images généralement pris en charge par les navigateurs web, et nous vous donnerons des indications qui vous aideront à sélectionner les formats les plus appropriés pour l'imagerie de votre site.

## Types de fichiers d'images communs

Il existe de nombreux formats de fichiers d'images dans le monde. Toutefois, ceux qui sont énumérés ci-dessous sont généralement reconnus comme utilisables sur le Web, bien que **BMP ne soit généralement pas recommandé**, car la prise en charge par les navigateurs est potentiellement limitée ; il faut généralement l'éviter pour le contenu Web.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Abréviation</th>
      <th scope="row">Format du fichier (en)</th>
      <th scope="col">Type de MIME</th>
      <th scope="col">Extention(s) du fichier</th>
      <th scope="col">Résumé</th>
      <th scope="col">Prise en charge navigateur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#apng">APNG</a></th>
      <th scope="row">Animated Portable Network Graphics</th>
      <td><code>image/apng</code></td>
      <td><code>.apng</code></td>
      <td>
        Bon choix pour les animations sans perte de qualité. AVIF et WebP ont de
        meilleures performances mais une moins bonne couverture des navigateurs.
      </td>
      <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#avif">AVIF</a></th>
      <th scope="row">AV1 Image File Format</th>
      <td><code>image/avif</code></td>
      <td><code>.avif</code></td>
      <td>
        Un format avec de bonnes performances et sans licence commerciale qui
        peut être utilisé pour les images statiques comme animées. Il offre une
        meilleure compression que PNG et JPEG et une meilleure profondeur de
        couleur. Il est préférable d'utiliser des formats alternatifs via
        l'élément
        <a href="/fr/docs/Web/HTML/Element/picture"
          ><code>&#x3C;picture></code></a
        >
        pour s'adapter aux différentes prises en charge des navigateurs.
      </td>
      <td>Chrome, Edge, Firefox (fonctionnalités de base), Opera</td>
    </tr>
    <tr>
      <th scope="row"><a href="#gif">GIF</a></th>
      <th scope="row">Graphics Interchange Format</th>
      <td><code>image/gif</code></td>
      <td><code>.gif</code></td>
      <td>
        Un bon choix pour les images simples et les animations. On préfèrera
        toutefois PNG pour les images statiques sans pertes de compression et
        WebP, AVIF ou APNG pour les animations afin d'avoir de meilleures
        compressions.
      </td>
      <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#jpeg">JPEG</a></th>
      <th scope="row">Joint Photographic Expert Group</th>
      <td><code>image/jpeg</code></td>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jfif</code>,
        <code>.pjpeg</code>, <code>.pjp</code>
      </td>
      <td>
        Un bon choix pour les images compressées avec pertes. C'est le format le
        plus populaire et parmi les mieux pris en charge. PNG sera préférable si
        on préfère une meilleure fidélité à l'image et WebP/AVIF permettront
        d'avoir de meilleurs taux de compression.
      </td>
      <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#png">PNG</a></th>
      <th scope="row">Portable Network Graphics</th>
      <td><code>image/png</code></td>
      <td><code>.png</code></td>
      <td>
        PNG pourra être préféré à JPEG lorsqu'on a besoin d'une meilleure
        précision ou de transparence. WebP/AVIF permettront d'avoir de meilleurs
        taux de compression mais leur prise en charge navigateur est plus
        faible.
      </td>
      <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#svg">SVG</a></th>
      <th scope="row">Scalable Vector Graphics</th>
      <td><code>image/svg+xml</code></td>
      <td><code>.svg</code></td>
      <td>
        Un format d'image vectoriel idéal pour les éléments d'interface
        utilisateur, les icônes ou diagrammes qui nécessitent de s'afficher
        précisément quelle que soit l'échelle.
      </td>
      <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp">WebP</a></th>
      <th scope="row">Web Picture</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Un excellent choix pour les images statiques ou animées. Les taux de
        compression de ce format sont meilleurs que pour PNG ou JPEG. Ce format
        prend également en charge de meilleures profondeurs pour les couleurs,
        les <i>frames</i> animées, la transparence, etc.
      </td>
      <td>Chrome, Edge, Firefox, Opera</td>
    </tr>
  </tbody>
</table>

Les formats moins récents comme PNG, JPEG, GIF possèdent de moins bonnes performances que des formats comme WebP et AVIF mais bénéficient d'une compatibilité navigateur plus large. Les formats plus récents gagnent en popularité du fait que la part des navigateurs incompatibles diminue.

Le tableau qui suit indique les formats d'image qui peuvent également être utilisés sur le Web mais qui devraient être évités en raison de leur compatibilité faible ou de l'existence de meilleurs formats.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Abréviation</th>
      <th scope="row">Format de fichier</th>
      <th scope="col">Type MIME</th>
      <th scope="col">Extension(s)</th>
      <th scope="col">Prise en charge navigateur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#bmp">BMP</a></th>
      <th scope="row">Bitmap</th>
      <td><code>image/bmp</code></td>
      <td><code>.bmp</code></td>
      <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#ico">ICO</a></th>
      <th scope="row">Microsoft Icon</th>
      <td><code>image/x-icon</code></td>
      <td><code>.ico</code>, <code>.cur</code></td>
      <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#tiff">TIFF</a></th>
      <th scope="row">Tagged Image File Format</th>
      <td><code>image/tiff</code></td>
      <td><code>.tif</code>, <code>.tiff</code></td>
      <td>Aucune prise en charge native, addons nécessaires</td>
    </tr>
  </tbody>
</table>

L'abréviation de chaque format renvoie à une description plus longue du format, de ses capacités et à des informations détaillées sur la compatibilité des navigateurs ; y compris les versions qui ont introduit le support et les caractéristiques spéciales spécifiques qui ont pu être introduites ultérieurement.

## Détails sur le type de fichier image

Les sections suivantes donnent un bref aperçu de chacun des types de fichiers d'images pris en charge par les navigateurs web.

Dans les tableaux ci-dessous, le terme **bits par composante** fait référence au nombre de bits utilisés pour représenter chaque composante de couleur. Par exemple, une profondeur de couleur RVB de 8 indique que chacune des composantes rouge, verte et bleue est représentée par une valeur de 8 bits. **La profondeur de bit**, d'autre part, correspond au nombre total de bits utilisés pour représenter chaque pixel en mémoire.

### APNG (Animated Portable Network Graphics)

L'APNG est un format de fichier introduit pour la première fois par Mozilla qui étend le [PNG](#png) pour ajouter le support des images animées. Conceptuellement similaire au format GIF animé qui est utilisé depuis des décennies, l'APNG est plus performant dans la mesure où il prend en charge une variété de [profondeur de couleur](<https://fr.wikipedia.org/wiki/Profondeur_de_couleur_(informatique)>), alors que le GIF animé ne supporte que des [couleurs indexées](https://en.wikipedia.org/wiki/Indexed_color) sur 8 bits.

L'APNG est idéal pour les animations de base qui n'ont pas besoin d'être synchronisées avec d'autres activités ou avec une bande son, comme les indicateurs de progrès, [indicateur d'activité](https://fr.wikipedia.org/wiki/Indicateur_d%27activit%C3%A9), et autres séquences animées. Par exemple, l'APNG est [l'un des formats pris en charge lors de la création d'autocollants animés](https://developer.apple.com/stickers/) pour l'application iMessage d'Apple (et l'application Messages sur iOS). Ils sont également couramment utilisés pour les parties animées des interfaces utilisateur des navigateurs web.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/apng</code></td>
    </tr>
    <tr>
      <th scope="row">Extention(s) de fichier(s)</th>
      <td><code>.apng</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td>
        <a href="https://wiki.mozilla.org/APNG_Specification"
          >wiki.mozilla.org/APNG_Specification</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>Chrome 59, Edge 12, Firefox 3, Opera 46, Safari 8</td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>2 147 483 647×2 147 483 647 pixels</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur supportés</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Mode de couleur</th>
              <th scope="col">Bits par composante (<em>D</em>)</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Niveau de gris</th>
              <td>1, 2, 4, 8, et 16</td>
              <td>
                Chaque pixel est constitué d'une seule valeur <em>D</em>-bit
                indiquant la luminosité du pixel en niveaux de gris.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par trois valeurs de <em>D</em>-bit
                indiquant le niveau des composantes de couleur rouge, verte et
                bleue.
              </td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td>1, 2, 4, et 8</td>
              <td>
                Chaque pixel est une valeur <em>D</em>-bit indiquant un index
                dans une palette de couleurs qui est contenue dans un morceau
                <code
                  ><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code
                >
                dans le fichier APNG ; les couleurs de la palette utilisent
                toutes une profondeur de 8 bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Niveau de gris avec alpha</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par deux valeurs <em>D</em>-bit :
                l'intensité du pixel en niveaux de gris et un échantillon alpha,
                indiquant le degré d'opacification du pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est composé de quatre composantes de couleur
                <em>D</em>-pixel : rouge, vert, bleu, et l'échantillon alpha
                indiquant le degré d'opacité du pixel.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>Sans perte</td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        Gratuit et ouvert dans le cadre de la
        <a href="https://creativecommons.org/licenses/by-sa/3.0/"
          >Creative Commons Attribution-ShareAlike license</a
        >
        (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)
        version 3.0 ou plus.
      </td>
    </tr>
  </tbody>
</table>

### AVIF

AV1 Image File Format (AVIF) est un format open-source et sans licence commerciale qui encode _des flux de bits AV1 dans un conteneur High Efficiency Image File Format (HEIF)._

_AV1 est un format d'encodage originellement conçu pour la transmission de vidéos sur Internet. Ce format bénéficie des avancées de la recherche sur l'encodage vidéo et peut bénéficier de la prise en charge matérielle des appareils. Un inconvénient est la différence de prérequis entre l'encodage vidéo / image._

Ce format dispose :

- D'une excellente compression avec pertes par rapport à JPG et PNG pour des résultats visuels similaires (les images AVIF avec pertes pèsent environ la moitié des images JPEG).
- D'une meilleure compression que WebP — mediane à 50% par rapport à 30% de compression pour le même ensemble de fichiers JPG (source : [AVIF WebP Comparison](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- D'une compression sans perte.
- D'un stockage pour les animations/multi-images (similaire aux GIF aniimés mais avec une bien meilleure compression)
- D'une prise en charge de la transparence avec un canal alpha.
- Du _High Dynamic Range_ (HDR) qui permet de stocker des images avec une plus grande largeur de contraste entre les zones les plus claires et les plus sombres.
- D'un spectre de couleurs (_gamut_) élargi.

AVIF ne prend pas en charge l'affichage progressif et il faut donc que les fichiers soient complètement téléchargés avant de pouvoir être affichés. Cela a peu d'impact pour la plupart des fichiers AVIF qui sont plus légers que leurs équivalents JPEG ou PNG. En revanche, pour les fichiers plus volumineux, on devra considérer un format qui prend en charge le rendu progressif.

La prise en charge navigateur n'étant pas aussi large que pour les autres formats, il est préférable d'utiliser l'élément HTML [`<picture>`](/fr/docs/Web/HTML/Element/picture) pour fournir des images alternatives au format [JPEG](#jpeg) ou [PNG](#png).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type MIME</th>
      <td><code>image/avif</code></td>
    </tr>
    <tr>
      <th scope="row">Extension</th>
      <td><code>.avif</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td>
        <p>
          <a href="https://aomediacodec.github.io/av1-avif/"
            >AV1 Image File Format (AVIF)</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>
        Chrome 85, Opera 71 et Firefox (via
        <a
          href="/fr/docs/Mozilla/Firefox/Experimental_features#avif_av1_image_file_format_support"
          >une préférence</a
        >).
        <ul>
          <li>
            Pour Firefox 77 et ultérieur : <code>image.avif.enable</code> doit
            être passée à <code>true</code>. Firefox implémente pour le moment
            une prise en charge simple d'AVIF. Les fonctionnalités plus avancées
            comme les images animées ou les espaces de couleurs sont en cours de
            développement (voir
            <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1682995"
              >le bug 1682995</a
            >).
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximums</th>
      <td>2 147 483 647×2 147 483 647 pixels</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleurs supportés</th>
      <td>
        <p>
          Voir
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf"
            >AV1 Bitstream &#x26; Decoding Process Specification</a
          >, section 6.4.2 : Color config semantics.
        </p>
        <p>Pour résumer de façon non-exhaustive :</p>
        <ul>
          <li>Modes de couleur : YUV444, YUV422, YUV420</li>
          <li>Niveau de gris : YUV400</li>
          <li>Bits : 8/10/12 bits</li>
          <li>Prise en charge du canal alpha</li>
          <li>Prise en charge des profils ICC</li>
          <li>
            Prise en charge NCLX : sRGB, sRGB linéaire, Rec2020 linéaire, PQ
            Rec2020, HLG Rec2020, PQ P3, HLG P3, etc.
          </li>
          <li>Prise en charge des tuiles</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>Avec ou sans perte.</td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        Pas de licence commerciale. Informations disponibles sur
        <a href="https://aomedia.org/license/">https://aomedia.org/license/</a>
        .
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap file)

Le type de fichier BMP **(image Bitmap)** est le plus répandu sur les ordinateurs Windows, et n'est généralement utilisé que dans des cas particuliers pour les applications et contenus web.

> **Attention :** Vous devriez généralement éviter d'utiliser le BMP pour le contenu des sites web, car ce n'est pas une utilisation généralement acceptée du format.

BMP soutient théoriquement une variété de représentations de données internes. La forme la plus simple, et la plus couramment utilisée, de fichier BMP est une image tramée non compressée, chaque pixel occupant 3 octets représentant ses composantes rouge, verte et bleue, et chaque ligne étant rembourrée avec des `0x00` octets à un multiple de 4 octets de large.

Bien que d'autres représentations de données soient définies dans la spécification, elles ne sont pas largement utilisées et sont souvent complètement inappliquées. Ces caractéristiques comprennent : la prise en charge de différentes profondeurs de bits, la couleur indexée, les canaux alpha et différents ordres de pixels (par défaut, BMP est écrit du coin inférieur gauche vers la droite et le haut, plutôt que du coin supérieur gauche vers la droite et le bas).

Théoriquement, plusieurs algorithmes de compression sont pris en charge, et les données d'image peuvent également être stockées au format [JPEG](#jpeg) ou [PNG](#png) dans le fichier BMP.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/bmp</code></td>
    </tr>
    <tr>
      <th scope="row">Extension(s) de fichier(s)</th>
      <td><code>.bmp</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td>
        Aucune spécification ; toutefois, Microsoft fournit une documentation
        générale sur le format à l'adresse
        <a
          href="https://docs.microsoft.com/fr/windows/desktop/gdi/bitmap-storage"
          >docs.microsoft.com/fr/windows/desktop/gdi/bitmap-storage</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>
        Toutes versions de Chrome, Edge, Firefox, Internet Explorer, Opera, et
        Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>
        Soit 32 767×32 767 ou 2 147 483 647×2 147 483 647 pixels, selon la
        version du format
      </td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur supportés</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Mode de couleur</th>
              <th scope="col">Bits par composante (<em>D</em>)</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Niveau de gris</th>
              <td>1</td>
              <td>
                Chaque bit représente un seul pixel, qui peut être noir ou
                blanc.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par trois valeurs représentant les
                composantes de couleur rouge, verte et bleue ; chacune d'entre
                elles est constituée de <em>D</em> bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td>2, 4, et 8</td>
              <td>
                Chaque pixel est représenté par une valeur de 2, 4 ou 8 bits,
                qui sert d'index dans la table des couleurs.
              </td>
            </tr>
            <tr>
              <th scope="row">Niveau de gris avec alpha</th>
              <td><em>n/a</em></td>
              <td>Le BMP n'a pas de format d'échelle de gris distinct.</td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par quatre valeurs représentant les
                composantes de couleur rouge, verte, bleue et alpha ; chacune
                d'entre elles est constituée de <em>D</em> bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Plusieurs méthodes de compression sont prises en charge, notamment les
        algorithmes avec ou sans perte
      </td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        Couvert par la promesse de spécification ouverte de Microsoft ; bien que
        Microsoft détienne des brevets contre la BMP, elle a publié une promesse
        de ne pas faire valoir ses droits de brevet tant que des conditions
        spécifiques sont remplies. Il ne s'agit toutefois pas d'une licence. BMP
        est inclus dans le format Windows Metafile (<code>.wmf</code>).
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

En 1987, le fournisseur de services en ligne CompuServe a introduit le **["GIF"](https://fr.wikipedia.org/wiki/Graphics_Interchange_Format)** (**Graphics Interchange Format**) pour fournir un format graphique compressé que tous les membres de leur service pourront utiliser. Le GIF utilise l'algorithme [Lempel-Ziv-Welch (LZW)](https://fr.wikipedia.org/wiki/Lempel-Ziv-Welch) pour compresser sans perte des images couleur indexés sur 8 bits. Le GIF était l'un des deux premiers formats graphiques pris en charge par [HTML](/fr/docs/Glossary/HTML), ainsi que [XBM](#xbm).

Chaque pixel d'un GIF est représenté par une seule valeur de 8 bits servant d'index dans une palette de couleurs de 24 bits (8 bits pour le rouge, le vert et le bleu). La longueur d'une table de couleurs est toujours une puissance de 2 (c'est-à-dire que chaque palette a 2, 4, 8, 16, 32, 64 ou 256 entrées). Pour simuler plus de 255 ou 256 couleurs, on utilise généralement la [diffusion d'erreur(_dithering_)](https://fr.wikipedia.org/wiki/Diffusion_d%27erreur). Il est [techniquement possible](https://gif.ski/) de superposer plusieurs blocs d'images, chacun avec sa propre palette de couleurs, pour créer des images en couleurs réelles, mais en pratique, cela est rarement fait.

Les pixels sont opaques, sauf si un indice de couleur spécifique est désigné comme transparent, auquel cas les pixels colorés à cette valeur sont entièrement transparents.

Le GIF permet une animation simple, dans laquelle, après une première image de taille réelle, une série d'images reflétant les parties de l'image qui changent avec chaque image est fournie.

Le GIF est extrêmement populaire depuis des décennies, en raison de sa simplicité et de sa compatibilité. Son support d'animation a provoqué un regain de popularité à l'ère des médias sociaux, lorsque les GIF animés ont commencé à être largement utilisés pour de courtes "vidéos", des mèmes et d'autres séquences d'animation simples.

Une autre caractéristique populaire du GIF est la prise en charge de l'[entrelacement](<https://fr.wikipedia.org/wiki/Entrelacement_(image_matricielle)>), où les rangées de pixels sont stockées dans le désordre afin que les fichiers partiellement reçus puissent être affichés en qualité inférieure. Cela est particulièrement utile lorsque les connexions réseau sont lentes.

Le format GIF est un bon choix pour les images et les animations simples, bien que la conversion d'images couleur en GIF puisse entraîner des diffusions d'erreur insatisfaisantes. En règle générale, le contenu moderne devrait utiliser [PNG](#png) pour les images fixes sans perte et indexées, et devrait envisager d'utiliser [APNG](#apng) pour les séquences d'animation sans perte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/gif</code></td>
    </tr>
    <tr>
      <th scope="row">Extention(s) du fichier(s)</th>
      <td><code>.gif</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td>
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt"
          >Spécification GIF87a</a
        ><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt"
          >Spécification GIF89a</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>
        Toutes les versions de Chrome, Edge, Firefox, Internet Explorer, Opera,
        and Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>65 536×65 536 pixels</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur pris en charge</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Mode couleur</th>
              <th scope="col">Bits par composante (<em>D</em>)</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Niveau de gris</th>
              <td><em>n/a</em></td>
              <td>
                Le GIF n'inclut pas un format de niveaux de gris spécifique.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td><em>n/a</em></td>
              <td>
                Le GIF ne prend pas en charge les pixels en couleurs réelles.
              </td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td>8</td>
              <td>
                Chaque couleur d'une palette GIF est définie par 8 bits de
                rouge, de vert et de bleu (24 bits au total par pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Niveau de gris avec alpha</th>
              <td><em>n/a</em></td>
              <td>
                Le GIF ne fournit pas de format de niveaux de gris spécifique.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td><em>n/a</em></td>
              <td>
                Le GIF ne prend pas en charge les pixels en couleurs réelles.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>Sans perte (LZW)</td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        Alors que le format GIF lui-même est ouvert, l'algorithme de compression
        LZW était couvert par des brevets jusqu'au début des années 2000. Depuis
        le 7 juillet 2004, tous les brevets pertinents ont expiré et le format
        GIF peut être utilisé librement.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows icon)

Le format de fichier ICO (Microsoft Windows icon) a été conçu par Microsoft pour les icônes de bureau des systèmes Windows. Cependant, les premières versions d'Internet Explorer ont introduit la possibilité pour un site web de fournir un fichier ICO nommé `favicon.ico` dans le répertoire racine d'un site web pour spécifier un **[favicon](/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#ajouter_des_ic%c3%b4nes_personnalis%c3%a9es_%c3%a0_un_site)** — une icône à afficher dans le menu Favoris, et d'autres endroits où une représentation iconique du site serait utile.

Un fichier ICO peut contenir plusieurs icônes, et commence par un répertoire contenant des détails sur chacune d'entre elles. Ce répertoire est suivi des données relatives aux icônes. Les données de chaque icône peuvent être soit une image [BMP](#bmp) sans l'en-tête du fichier, soit une image [PNG](#png) complète (y compris l'en-tête du fichier). Si vous utilisez des fichiers ICO, vous devez utiliser le format BMP, car la prise en charge du format PNG dans les fichiers ICO n'a été ajoutée qu'à partir de Windows Vista et pourrait ne pas être bien prise en charge.

> **Attention :** Les fichiers ICO ne doivent pas être utilisés dans le contenu Web. En outre, leur utilisation pour les favicons a diminué au profit de l'utilisation d'un fichier PNG et de l'élément [`<link>`](/fr/docs/Web/HTML/Element/link), comme décrit dans [cette section](/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#ajouter_des_ic%C3%B4nes_personnalis%C3%A9es_%C3%A0_un_site).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td>
        <code>image/vnd.microsoft.icon</code> (officiel),
        <code>image/x-icon</code> (utilisé par Microsoft)
      </td>
    </tr>
    <tr>
      <th scope="row">Extention(s) de fichier(s)</th>
      <td><code>.ico</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>
        Toutes les versions de Chrome, Edge, Firefox, Internet Explorer, Opera
        et Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>256×256 pixels</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur pris en charge</th>
      <td>
        <table class="standard-table">
          <caption>
            Icônes au format BMP
          </caption>
          <tbody>
            <tr>
              <th scope="row">Mode de couleur</th>
              <th scope="col">Bits par composante (<em>D</em>)</th>
              <th scope="col">Description</th>
            </tr>
            <tr>
              <th scope="row">Niveau de gris</th>
              <td>1</td>
              <td>
                Chaque bit représente un seul pixel, qui peut être noir ou
                blanc.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par trois valeurs représentant les
                composantes de couleur rouge, verte et bleue ; chacune d'entre
                elles est constituée de <em>D</em> bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td>2, 4, et 8</td>
              <td>
                Chaque pixel est représenté par une valeur de 2, 4 ou 8 bits,
                qui sert d'index dans la table des couleurs.
              </td>
            </tr>
            <tr>
              <th scope="row">Niveau de gris avec alpha</th>
              <td><em>n/a</em></td>
              <td>Le BMP n'a pas de format d'échelle de gris distinct.</td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par quatre valeurs représentant les
                composantes de couleur rouge, verte, bleue et alpha ; chacune
                d'entre elles est constituée de <em>D</em> bits.
              </td>
            </tr>
          </tbody>
        </table>
        <table class="standard-table">
          <caption>
            Icônes au format PNG
          </caption>
          <tbody>
            <tr>
              <th scope="row">Mode de couleur</th>
              <th scope="col">Bits par composante (<em>D</em>)</th>
              <th scope="col">Description</th>
            </tr>
            <tr>
              <th scope="row">Niveau de gris</th>
              <td>1, 2, 4, 8 et 16</td>
              <td>
                Chaque pixel est constitué d'une seule valeur <em>D</em>-bit
                indiquant la luminosité du pixel en niveaux de gris.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par trois valeurs de <em>D</em>-bit
                indiquant le niveau des composantes de couleur rouge, verte et
                bleue.
              </td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td>1, 2, 4 et 8</td>
              <td>
                Chaque pixel est une valeur de <em>D</em>-bit indiquant un index
                dans une palette de couleurs qui est contenue dans un morceau de
                <code
                  ><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code
                >
                dans le fichier APNG ; les couleurs de la palette utilisent
                toutes une profondeur de 8 bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Niveau de gris avec alpha</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par deux valeurs <em>D</em>-bit :
                l'intensité du pixel en niveaux de gris et un échantillon alpha,
                indiquant le degré d'opacification du pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est composé de quatre composantes de couleur
                <em>D</em>-pixel : rouge, vert, bleu, et l'échantillon alpha
                indiquant le degré d'opacité du pixel.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Les icônes au format BMP utilisent presque toujours une compression sans
        perte, mais des méthodes avec perte sont disponibles. Les icônes au
        format PNG sont toujours compressées sans perte.
      </td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group image)

Le [JPEG](/fr/docs/Glossary/jpeg) (typiquement prononcé "**j-peg**") est actuellement le format de compression avec perte le plus utilisé pour les images fixes. Il est particulièrement utile pour les photographies ; l'application de la compression avec perte au contenu nécessitant de la netteté, comme les diagrammes ou les graphiques, peut produire des résultats insatisfaisants.

Le JPEG est en fait un format de données pour les photos compressées, plutôt qu'un type de fichier. La spécification JFIF (JPEG **F**ile **I**nterchange **F**ormat) décrit le format des fichiers que nous considérons comme des images "JPEG".

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <th scope="row">Extentions(s) de fichier(s)</th>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jpe</code>,
        <code>.jif</code>, <code>.jfif</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td><a href="https://jpeg.org/jpeg/">jpeg.org/jpeg/</a></td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>
        Toutes les versions de Chrome, Edge, Firefox, Internet Explorer, Opera
        et Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>65 535×65 535 pixels</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur pris en charge</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Mode de couleur</th>
              <th scope="col">Bits par composante (<em>D</em>)</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Niveau de gris</th>
              <td><em>n/a</em></td>
              <td>Le JPEG n'a pas de mode d'échelle de gris distinct.</td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td>8</td>
              <td>
                Chaque pixel est décrit par les composantes de couleur rouge,
                bleue et verte, chacune d'entre elles étant composée de 8 bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td><em>n/a</em></td>
              <td>Le JPEG n'offre pas de mode couleur indexé.</td>
            </tr>
            <tr>
              <th scope="row">Niveau de gris avec alpha</th>
              <td><em>n/a</em></td>
              <td>Le JPEG ne prend pas en charge un canal alpha.</td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td><em>n/a</em></td>
              <td>Le JPEG ne prend pas en charge un canal alpha.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Sans perte; sur la base de la
        <a
          href="https://fr.wikipedia.org/wiki/Transform%C3%A9e_en_cosinus_discr%C3%A8te"
          >transformée en cosinus discrète</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        Depuis le 27 octobre 2006, tous les brevets américains ont expiré.
      </td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Le [PNG](/fr/docs/Glossary/PNG) (prononcé "**png**") utilise une compression sans perte ou avec perte afin de fournir une compression plus efficace, et prend en charge des profondeurs de couleurs plus élevées que [GIF](#gif), ainsi qu'une transparence alpha complète.

Le format PNG est largement soutenu, tous les principaux navigateurs offrant une prise en charge complète de ses fonctionnalités. Internet Explorer, qui a introduit le support PNG dans les versions 4-5, ne l'a pas entièrement pris en charge avant IE 9, et a connu de nombreux bogues tristement célèbres pendant de nombreuses années, y compris dans l'Internet Explorer 6, autrefois omniprésent. Cela a ralenti l'adoption de la PNG, mais elle est maintenant couramment utilisée, surtout lorsqu'il faut reproduire avec précision l'image source.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/png</code></td>
    </tr>
    <tr>
      <th scope="row">Extension(s) de fichier(s)</th>
      <td><code>.png</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td><a href="https://www.w3.org/TR/PNG">w3.org/TR/PNG</a></td>
    </tr>
    <tr>
      <th scope="row">Comptabilité des navigateurs</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Fonctionnalité</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Support de base</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>3.5.1 (Presto)<br />15 (Blink)</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Canal Alpha</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>6 (Presto)<br />Toute (Blink)</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Correction gamma</th>
              <td>non</td>
              <td>oui</td>
              <td>1</td>
              <td>8</td>
              <td>1</td>
              <td>cassé</td>
            </tr>
            <tr>
              <th scope="row">Correction des couleurs</th>
              <td>non</td>
              <td>oui</td>
              <td>3</td>
              <td>9</td>
              <td>non</td>
              <td>non</td>
            </tr>
            <tr>
              <th scope="row">Entrelacement</th>
              <td>non</td>
              <td>?</td>
              <td>1</td>
              <td>cassé</td>
              <td>3.5.1</td>
              <td>non</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>2 147 483 647×2 147 483 647 pixels</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur pris en charge</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Mode de couleur</th>
              <th scope="col">Bits par composante (<em>D</em>)</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Niveau de gris</th>
              <td>1, 2, 4, 8 et 16</td>
              <td>
                Chaque pixel est constitué d'une seule valeur <em>D</em>-bit
                indiquant la luminosité du pixel en niveaux de gris.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par trois valeurs de <em>D</em>-bit
                indiquant le niveau des composantes de couleur rouge, verte et
                bleue.
              </td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td>1, 2, 4 et 8</td>
              <td>
                Chaque pixel est une valeur de bit <em>D</em> indiquant un index
                dans une palette de couleurs qui est contenue dans un morceau de
                <code
                  ><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code
                >
                dans le fichier APNG ; les couleurs de la palette utilisent
                toutes une profondeur de 8 bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Niveau de gris avec alpha</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est représenté par deux valeurs <em>D</em>-bit :
                l'intensité du pixel en niveaux de gris et un échantillon alpha,
                indiquant le degré d'opacification du pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td>8 et 16</td>
              <td>
                Chaque pixel est composé de quatre composantes de couleur
                <em>D</em>-pixel : rouge, vert, bleu, et l'échantillon alpha
                indiquant le degré d'opacité du pixel.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>Couleur sans perte, éventuellement indexée comme le GIF</td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a>® (<a
          href="https://www.lcs.mit.edu/"
          >MIT</a
        >, <a href="https://www.ercim.org/">ERCIM</a>,
        <a href="https://www.keio.ac.jp/">Keio</a>), Tous Droits Réservés. Les
        règles du W3C en matière de
        <a
          href="https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer"
          >responsabilité</a
        >, de
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks"
          >marque commerciale</a
        >, d'<a href="https://www.w3.org/Consortium/Legal/copyright-documents"
          >utilisation des documents</a
        >
        et de
        <a href="https://www.w3.org/Consortium/Legal/copyright-software"
          >licences de logiciels</a
        >
        s'appliquent. Pas de brevets porteurs de royalties connus.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

Le SVG est une base [XML](/fr/docs/Glossary/XML) pour le format d'[image vectorielle](https://fr.wikipedia.org/wiki/Image_vectorielle) qui spécifie le contenu d'une image comme un ensemble de commandes de dessin qui créent des formes, des lignes, appliquent des couleurs, des filtres, etc. Les fichiers SVG sont idéaux pour les diagrammes, les icônes et autres images qui peuvent être dessinés avec précision à n'importe quelle taille. En tant que tel, le SVG est populaire pour les éléments d'interface utilisateur dans la conception moderne du Web.

Les fichiers SVG sont des fichiers texte contenant le code source qui, une fois interprété, dessine l'image souhaitée. Par exemple, cet exemple définit une zone de dessin de taille initiale de 100 par 100 unités, contenant une ligne tracée en diagonale à travers la boîte :

```html
<svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

Le SVG peut être utilisé dans le contenu du web de deux façons :

1. Vous pouvez directement écrire l'élément [`<svg>`](/fr/docs/Web/HTML/Element/svg) dans le HTML, contenant des [éléments SVG](/fr/docs/Web/SVG/Element) pour dessiner l'image.
2. Vous pouvez afficher une image SVG partout où vous pouvez utiliser les autres types d'images, y compris avec les éléments [`<img>`](/fr/docs/Web/HTML/Element/Img) et [`<image>`](/fr/docs/Web/HTML/Element/image), les propriétés [`background-image`](/fr/docs/Web/CSS/background-image) du CSS, etc.

Le SVG est un choix idéal pour les images qui peuvent être représentées à l'aide d'une série de commandes de dessin, en particulier si la taille à laquelle l'image sera rendue est inconnue ou peut varier, puisque le SVG s'adaptera en douceur à la taille souhaitée. Il n'est généralement pas utile pour les images strictement bitmap ou photographiques, bien qu'il soit possible d'inclure des images bitmap dans un SVG.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/svg+xml</code></td>
    </tr>
    <tr>
      <th scope="row">Extension(s) de fichier(s)</th>
      <td><code>.svg</code></td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td><a href="https://www.w3.org/TR/SVG2">w3.org/TR/SVG2</a></td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Fonctionnalité</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Le support du SVG</th>
              <td>4</td>
              <td>12</td>
              <td>3</td>
              <td>9</td>
              <td>10 (Presto)<br />15 (Blink)</td>
              <td>3.2</td>
            </tr>
            <tr>
              <th scope="row">
                SVG comme image (<a href="/fr/docs/Web/HTML/Element/Img"
                  ><code>&#x3C;img></code></a
                >
                etc)
              </th>
              <td>28</td>
              <td>12</td>
              <td>4</td>
              <td>9</td>
              <td>10 (Presto)<br />15 (Blink)</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>Illimité</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur pris en charge</th>
      <td>
        Les couleurs en SVG sont spécifiées à l'aide de
        <a href="/fr/docs/Web/CSS/color_value">syntaxe de couleur CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        La source SVG peut être compressée pendant le transit en utilisant les
        techniques de
        <a href="/fr/docs/Web/HTTP/Compression">compression HTTP</a>, ou sur
        disque en tant que fichier <code>.svgz</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a>® (<a
          href="https://www.lcs.mit.edu/"
          >MIT</a
        >, <a href="https://www.ercim.org/">ERCIM</a>,
        <a href="https://www.keio.ac.jp/">Keio</a>,
        <a href="https://ev.buaa.edu.cn/">Beihang</a>), Tous Droits Réservés.
        Les règles du W3C en matière de
        <a
          href="https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer"
          >responsabilité</a
        >, de
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks"
          >marque commerciale</a
        >, d'<a href="https://www.w3.org/Consortium/Legal/copyright-documents"
          >utilisation des documents</a
        >
        et de
        <a href="https://www.w3.org/Consortium/Legal/copyright-software"
          >licences de logiciels</a
        >
        s'appliquent. Pas de brevets porteurs de royalties connus.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://fr.wikipedia.org/wiki/Tagged_Image_File_Format) est un format de fichier graphique matriciel qui a été créé pour stocker des photos scannées, bien qu'il puisse s'agir de n'importe quel type d'image. Il s'agit d'un format quelque peu "lourd", dans la mesure où les fichiers TIFF ont tendance à être plus volumineux que les images d'autres formats. Cela s'explique par les métadonnées souvent incluses, ainsi que par le fait que la grande majorité des fichiers TIFF ne sont pas compressés. Cependant, les méthodes de compression avec et sans perte sont toutes deux prises en charge par la spécification TIFF.

Chaque valeur d'un fichier TIFF est spécifiée à l'aide de sa **balise** (indiquant le type d'information dont il s'agit, comme la largeur de l'image) et de son **type** (indiquant le format dans lequel les données sont stockées), suivis de la longueur du tableau de valeurs à attribuer à cette balise (toutes les propriétés sont stockées dans des tableaux, même pour des valeurs uniques). Cela permet d'utiliser différents types de données pour les mêmes propriétés. Par exemple, la largeur d'une image, `ImageWidth`, est stockée à l'aide de la balise `0x0100` et est un tableau à une entrée. En précisant le type 3 (`SHORT`), la valeur de `ImageWidth` est stockée comme une valeur de 16 bits :

| Balise                  | Type               | Taille                 | Valeur                |
| ----------------------- | ------------------ | ---------------------- | --------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 entée) | `0x0280` (640 pixels) |

La spécification du type 4 (`LONG`) enregistre la largeur comme une valeur de 32 bits :

| Balise                  | Type              | Taille                 | Valeur                    |
| ----------------------- | ----------------- | ---------------------- | ------------------------- |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 entry) | `0x00000280` (640 pixels) |

Un seul fichier TIFF peut contenir plusieurs images ; il peut être utilisé pour représenter des documents de plusieurs pages, par exemple (comme un document de plusieurs pages scanné ou une télécopie reçue). Toutefois, un logiciel qui lit les fichiers TIFF n'est nécessaire que pour prendre en charge la première image.

Le TIFF prend en charge divers espaces de couleur, et pas seulement le RGB. Il s'agit notamment de CMJN, YCbCr et autres, ce qui fait du TIFF un bon choix pour le stockage d'images destinées à la presse écrite, au cinéma ou à la télévision.

Il y a longtemps, certains navigateurs prenaient en charge les images TIFF dans le contenu Web ; aujourd'hui, cependant, vous devez utiliser des bibliothèques spéciales ou des modules complémentaires de navigateur pour le faire. Les fichiers TIFF ne sont donc pas utiles dans le contexte du contenu web, mais il est courant de fournir des fichiers TIFF téléchargeables lors de la distribution de photos et d'autres œuvres d'art destinées à être modifiées ou imprimées avec précision.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <th scope="row">Extension(s) de fichier(s)</th>
      <td><code>.tif</code>, <code>.tiff</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td>
        <a href="https://www.adobe.io/open/standards/TIFF.html"
          >adobe.io/open/standards/TIFF.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>
        Aucun navigateur n'intègre la prise en charge du TIFF ; son intérêt
        réside dans le fait qu'il peut être téléchargé
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>4 294 967 295×4 294 967 295 pixels (théoriquement)</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur pris en charge</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Mode de couleur</th>
              <th scope="col">Bits par composante (<em>D</em>)</th>
              <th scope="col">Description</th>
            </tr>
            <tr>
              <th scope="row">Bilevel</th>
              <td>1</td>
              <td>
                Un TIFF à deux niveaux stocke 8 bits dans chaque octet, un bit
                par pixel. Le champ
                <code>PhotometricInterpretation</code> indique lequel de 0 et 1
                est noir et lequel est blanc.
              </td>
            </tr>
            <tr>
              <th scope="row">Niveaux de gris</th>
              <td>4 et 8</td>
              <td>
                Chaque pixel est constitué d'une seule valeur <em>D</em>-bit
                indiquant la luminosité du pixel en niveaux de gris.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td>8</td>
              <td>
                Toutes les images RVB en couleurs réelles sont stockées en
                utilisant 8 bits de rouge, de vert et de bleu.
              </td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td>4 et 8</td>
              <td>
                Chaque pixel est un index dans un enregistrement
                <code>ColorMap</code>, qui définit les couleurs utilisées dans
                l'image. La carte des couleurs répertorie toutes les valeurs de
                rouge, puis toutes les valeurs de vert, puis toutes les valeurs
                de bleu (plutôt que <code>rgb</code>, <code>rgb</code>,
                <code>rgb...</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Niveaux de gris avec alpha</th>
              <td>4 et 8</td>
              <td>
                L'information alpha est ajoutée en spécifiant qu'il y a plus de
                3 échantillons par pixel dans le champ
                <code>SamplesPerPixel</code>, et en indiquant le type d'alpha (1
                pour une composante alpha pré-multipliée associée, et 2 pour une
                alpha non associée (une couche séparée) ; cependant, les canaux
                alpha sont rarement utilisés dans les fichiers TIFF et peuvent
                ne pas être pris en charge par le logiciel de l'utilisateur.
              </td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td>8</td>
              <td>
                L'information alpha est ajoutée en spécifiant qu'il y a plus de
                3 échantillons par pixel dans le champ
                <code>SamplesPerPixel</code>, et en indiquant le type d'alpha (1
                pour une composante alpha pré-multipliée associée, et 2 pour une
                alpha non associée (une couche séparée) ; cependant, les canaux
                alpha sont rarement utilisés dans les fichiers TIFF et peuvent
                ne pas être pris en charge par le logiciel de l'utilisateur.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        La plupart des fichiers TIFF ne sont pas compressés, mais les PackBits
        sans perte et la compression LZW sont pris en charge, tout comme la
        compression JPEG avec perte.
      </td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        Aucune licence n'est requise (à l'exception de celles associées aux
        bibliothèques que vous pourriez utiliser) ; tous les brevets connus ont
        expiré.
      </td>
    </tr>
  </tbody>
</table>

### WebP

Le WebP prend en charge la compression avec perte via un codage prédictif basé sur le codec vidéo VP8, et la compression sans perte qui utilise des substitutions pour la répétition des données. Les images WebP avec perte sont en moyenne 25 à 35 % plus petites que les images JPEG dont le niveau de compression est visuellement similaire. Les images WebP sans perte sont généralement 26 % plus petites que les mêmes images au format PNG.

WebP prend également en charge l'animation : dans un fichier WebP avec perte, les données d'image sont représentées par un flux binaire VP8, qui peut contenir plusieurs images. Le fichier WebP sans perte contient le fragment `ANIM`, qui décrit l'animation, et le fragment `ANMF`, qui représente une image d'une séquence d'animation. Le bouclage est pris en charge.

WebP bénéficie désormais d'un large soutien dans les dernières versions des principaux navigateurs web, bien qu'il ne bénéficie pas d'un soutien historique profond. Fournir une solution de repli au format [JPEG](#jpeg) ou [PNG](#png), par exemple avec [l'élément `<picture>`](/fr/docs/Web/HTML/Element/picture).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/webp</code></td>
    </tr>
    <tr>
      <th scope="row">Extention(s) de fichier(s)</th>
      <td><code>.webp</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td>
        <p>
          <a href="https://developers.google.com/speed/webp/docs/riff_container"
            >Spécification des conteneurs RIFF</a
          >
          (en)<br /><a href="https://datatracker.ietf.org/doc/html/rfc6386"
            >RFC 6386 - Format des données VP8 et guide de décodage</a
          >
          (en) (encodage avec perte)<br /><a
            href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
            >Spécification du flux binaire sans perte WebP</a
          >
          (en)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Supprt de WebP avec perte</th>
              <td>17</td>
              <td>18</td>
              <td>65</td>
              <td>non</td>
              <td>11.10 (Presto)<br />15 (Blink)</td>
              <td>non</td>
            </tr>
            <tr>
              <th scope="row">WebP sans perte</th>
              <td>23<br />25 sur Android</td>
              <td>18</td>
              <td>65</td>
              <td>non</td>
              <td>12.10 (Presto)<br />15 (Blink)</td>
              <td>non</td>
            </tr>
            <tr>
              <th scope="row">Animation</th>
              <td>32</td>
              <td>18</td>
              <td>65</td>
              <td>non</td>
              <td>19 (Blink)</td>
              <td>non</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>16 383×16 383 pixels</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur pris en charge</th>
      <td>
        WebP avec perte stocke l'image au format 8 bits Y'CbCr 4:2:0 (YUV420).
        WebP sans perte utilise la couleur ARGB 8 bits, chaque composant prenant
        8 bits pour un total de 32 bits par pixel.
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Sans perte (Huffman, LZ77, ou codes de cache couleur) ou avec perte
        (VP8).
      </td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>
        Aucune licence n'est requise ; le code source est librement accessible.
      </td>
    </tr>
  </tbody>
</table>

### XBM (X Window System Bitmap file)

Les fichiers XBM (X Bitmap) ont été les premiers à être pris en charge sur le Web, mais ils ne sont plus utilisés et doivent être évités, car leur format peut poser des problèmes de sécurité. Les navigateurs modernes n'ont pas pris en charge les fichiers XBM depuis de nombreuses années, mais lorsqu'il s'agit de contenus plus anciens, vous pouvez en trouver encore.

XBM utilise un extrait de code C pour représenter le contenu de l'image sous la forme d'un tableau d'octets. Chaque image se compose de 2 à 4 directives `#define`, fournissant la largeur et la hauteur de la carte de bits (et éventuellement le hotspot, si l'image est conçue comme un curseur), suivies d'un tableau de `unsigned char`, où chaque valeur contient 8 pixels monochromes de 1 bit.

L'image doit être un multiple de 8 pixels de large. Par exemple, le code suivant représente une image XBM de 8 pixels sur 8 pixels, ces pixels étant disposés en damier noir et blanc :

```cpp
#define square8_width 8
#define square8_height 8
static unsigned char square8_bits[] = {
  0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55
};
```

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type de MIME</th>
      <td><code>image/xbm</code>, <code>image-xbitmap</code></td>
    </tr>
    <tr>
      <th scope="row">Extension(s) de fichier(s)</th>
      <td><code>.xbm</code></td>
    </tr>
    <tr>
      <th scope="row">Spécification</th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Compatibilité des navigateurs</th>
      <td>Firefox 1 à 3.5, Internet Explorer 1 à 5</td>
    </tr>
    <tr>
      <th scope="row">Dimensions maximales</th>
      <td>Illimitée</td>
    </tr>
    <tr>
      <th scope="row">Modes de couleur pris en charge</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Mode de couleur</th>
              <th scope="col">Bits par composantes</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Niveaux de gris</th>
              <td>1</td>
              <td>Chaque octet contient huit pixels de 1 bit.</td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Couleur indexée</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Niveaux de gris avec alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Vraie couleur avec alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>Sans pertes</td>
    </tr>
    <tr>
      <th scope="row">Licence</th>
      <td>Open source</td>
    </tr>
  </tbody>
</table>

## Choisir un format d'image

Il est probablement plus facile de choisir le format d'image le mieux adapté à vos besoins que les formats vidéo, car il existe moins d'options bénéficiant d'un large soutien et chacune d'entre elles tend à avoir un ensemble spécifique de cas d'utilisation.

### Photographies

Les photographies se comportent généralement bien avec une compression avec perte (selon la configuration du codeur). Cela fait de [JPEG](#jpeg) et [WebP](#webp) de bons choix pour les photographies, le JPEG étant plus compatible mais le WebP offrant peut-être une meilleure compression. Pour maximiser la qualité et réduire le temps de téléchargement, envisagez de fournir à la fois une solution de repli avec WebP comme premier choix et JPEG comme second. Sinon, le JPEG est le choix le plus sûr pour la compatibilité.

| Meilleurs choix | Choix de secours |
| --------------- | ---------------- |
| WebP et JPEG    | JPEG             |

### Icônes

Pour les images plus petites comme les icônes, utilisez un format sans perte pour éviter la perte de détails dans une image de taille limitée. Si le format WebP sans perte est idéal à cette fin, il n'est pas encore très répandu, de sorte que le format PNG est un meilleur choix, à moins que vous n'offriez une solution de repli. Si votre image contient moins de 256 couleurs, le GIF est une option, bien que le PNG comprime souvent encore plus petit avec son option de compression indexée (PNG-8).

Si l'icône peut être représentée par des graphiques vectoriels, il faut envisager [SVG](#svg), puisqu'elle s'étend sur plusieurs résolutions et tailles, ce qui est parfait pour une conception réactive. Bien que la prise en charge du SVG soit bonne, il peut être utile de proposer un PNG de secours pour les navigateurs plus anciens.

| Meilleurs choix              | Choix de secours |
| ---------------------------- | ---------------- |
| SVG, WebP sans perte, ou PNG | PNG              |

### Captures d'écran

À moins que vous ne soyez prêt à faire des compromis sur la qualité, vous devriez utiliser un format sans perte pour les captures d'écran. C'est particulièrement important si votre capture d'écran contient du texte, car le texte devient facilement flou et peu clair sous une compression avec perte.

Le format PNG est probablement le plus adapté, mais le format WebP sans perte est sans doute mieux compressé.

| Meilleur choix                                                                        | Choix de secours                                                        |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| WebP sans perte ou PNG ; JPEG si les artefacts de compression ne sont pas un problème | PNG ou JPEG ; GIF pour les captures d'écran à faible nombre de couleurs |

### Diagrammes, dessins et diagrammes

Pour toute image pouvant être représentée par des graphiques vectoriels, le SVG est le meilleur choix. Sinon, vous devez utiliser un format sans perte comme le PNG. Si vous choisissez un format avec perte, tel que JPEG ou WebP avec perte, pesez soigneusement le niveau de compression pour éviter que le texte ou d'autres formes ne deviennent flous ou imprécis.

| Meilleur choix | Choix de secours |
| -------------- | ---------------- |
| [SVG](#svg)    | [PNG](#png)      |

## Fournir des solutions de repli en matière d'image

Alors que l'élément HTML standard [`<img>`](/fr/docs/Web/HTML/Element/Img) ne supporte pas les retours de compatibilité pour les images, l'élément [`<picture>`](/fr/docs/Web/HTML/Element/picture) le fait. `<picture>` est utilisé comme enveloppe pour un certain nombre d'éléments [`<source>`](/fr/docs/Web/HTML/Element/Source), chacun spécifiant une version de l'image dans un format différent ou sous des [conditions @media](/fr/docs/Web/CSS/@media), ainsi qu'un élément `<img>` qui définit où afficher l'image et le retour à la version par défaut ou "la plus compatible".

Par exemple, si vous affichez un diagramme mieux affiché avec SVG, mais que vous souhaitez offrir une solution de rechange à un PNG ou GIF du diagramme, vous feriez quelque chose comme ceci :

```html
<picture>
  <source srcset="diagram.svg" type="image/svg+xml">
  <source srcset="diagram.png" type="image/png">
  <img src="diagram.gif" width="620" height="540"
       alt="Diagramme montrant les canaux de données">
</picture>
```

Vous pouvez spécifier autant de `<source>`s que vous le souhaitez, bien qu'il vous suffise généralement de 2 ou 3.

## Voir aussi

- [Guide des types et formats de médias](/fr/docs/Web/Media/Formats)
- [Technologies media Web](/fr/docs/Web/Media)
- [Guide des codecs vidéo du Web](/fr/docs/Web/Media/Formats/Video_codecs)
- Les éléments [HTML](/fr/docs/Glossary/HTML) [`<img>`](/fr/docs/Web/HTML/Element/Img) et [`<picture>`](/fr/docs/Web/HTML/Element/picture)
- La propriété CSS [`background-image`](/fr/docs/Web/CSS/background-image)
- Le constructeur [`Image()`](/fr/docs/Web/API/Image) et l'interface [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement)
