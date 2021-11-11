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
<div>{{QuickLinksWithSubpages("/fr/docs/Web/Media")}}</div>

<p>Dans ce guide, nous aborderons les types de fichiers d'images généralement pris en charge par les navigateurs web, et nous vous donnerons des indications qui vous aideront à sélectionner les formats les plus appropriés pour l'imagerie de votre site.</p>

<h2 id="common_image_file_types">Types de fichiers d'images communs</h2>

<p>Il existe de nombreux formats de fichiers d'images dans le monde. Toutefois, ceux qui sont énumérés ci-dessous sont généralement reconnus comme utilisables sur le Web, bien que <strong>BMP ne soit généralement pas recommandé</strong>, car la prise en charge par les navigateurs est potentiellement limitée ; il faut généralement l'éviter pour le contenu Web.</p>

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
   <td>Bon choix pour les animations sans perte de qualité. AVIF et WebP ont de meilleures performances mais une moins bonne couverture des navigateurs.</td>
   <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
  </tr>
  <tr>
    <th scope="row"><a href="#avif">AVIF</a></th>
    <th scope="row">AV1 Image File Format</th>
    <td><code>image/avif</code></td>
    <td><code>.avif</code></td>
    <td>Un format avec de bonnes performances et sans licence commerciale qui peut être utilisé pour les images statiques comme animées. Il offre une meilleure compression que PNG et JPEG et une meilleure profondeur de couleur. Il est préférable d'utiliser des formats alternatifs via l'élément <a href="/fr/docs/Web/HTML/Element/picture"><code>&lt;picture&gt;</code></a> pour s'adapter aux différentes prises en charge des navigateurs.</td>
    <td>Chrome, Edge, Firefox (fonctionnalités de base), Opera</td>
   </tr>
  <tr>
   <th scope="row"><a href="#gif">GIF</a></th>
   <th scope="row">Graphics Interchange Format</th>
   <td><code>image/gif</code></td>
   <td><code>.gif</code></td>
   <td>Un bon choix pour les images simples et les animations. On préfèrera toutefois PNG pour les images statiques sans pertes de compression et WebP, AVIF ou APNG pour les animations afin d'avoir de meilleures compressions.</td>
   <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
  </tr>
  <tr>
   <th scope="row"><a href="#jpeg">JPEG</a></th>
   <th scope="row">Joint Photographic Expert Group</th>
   <td><code>image/jpeg</code></td>
   <td><code>.jpg</code>, <code>.jpeg</code>, <code>.jfif</code>, <code>.pjpeg</code>, <code>.pjp</code></td>
   <td>Un bon choix pour les images compressées avec pertes. C'est le format le plus populaire et parmi les mieux pris en charge. PNG sera préférable si on préfère une meilleure fidélité à l'image et WebP/AVIF permettront d'avoir de meilleurs taux de compression.</td>
   <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
  </tr>
  <tr>
   <th scope="row"><a href="#png">PNG</a></th>
   <th scope="row">Portable Network Graphics</th>
   <td><code>image/png</code></td>
   <td><code>.png</code></td>
   <td>PNG pourra être préféré à JPEG lorsqu'on a besoin d'une meilleure précision ou de transparence. WebP/AVIF permettront d'avoir de meilleurs taux de compression mais leur prise en charge navigateur est plus faible.</td>
   <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
  </tr>
  <tr>
   <th scope="row"><a href="#svg">SVG</a></th>
   <th scope="row">Scalable Vector Graphics</th>
   <td><code>image/svg+xml</code></td>
   <td><code>.svg</code></td>
   <td>Un format d'image vectoriel idéal pour les éléments d'interface utilisateur, les icônes ou diagrammes qui nécessitent de s'afficher précisément quelle que soit l'échelle.</td>
   <td>Chrome, Edge, Firefox, Internet Explorer, Opera, Safari</td>
  </tr>
  <tr>
   <th scope="row"><a href="#webp">WebP</a></th>
   <th scope="row">Web Picture</th>
   <td><code>image/webp</code></td>
   <td><code>.webp</code></td>
   <td>Un excellent choix pour les images statiques ou animées. Les taux de compression de ce format sont meilleurs que pour PNG ou JPEG. Ce format prend également en charge de meilleures profondeurs pour les couleurs, les <i>frames</i> animées, la transparence, etc.</td>
   <td>Chrome, Edge, Firefox, Opera</td>
  </tr>
 </tbody>
</table>

<p>Les formats moins récents comme PNG, JPEG, GIF possèdent de moins bonnes performances que des formats comme WebP et AVIF mais bénéficient d'une compatibilité navigateur plus large. Les formats plus récents gagnent en popularité du fait que la part des navigateurs incompatibles diminue.</p>
</div>

<p>Le tableau qui suit indique les formats d'image qui peuvent également être utilisés sur le Web mais qui devraient être évités en raison de leur compatibilité faible ou de l'existence de meilleurs formats.</p>

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

<p>L'abréviation de chaque format renvoie à une description plus longue du format, de ses capacités et à des informations détaillées sur la compatibilité des navigateurs ; y compris les versions qui ont introduit le support et les caractéristiques spéciales spécifiques qui ont pu être introduites ultérieurement.</p>

<h2 id="image_file_type_details">Détails sur le type de fichier image</h2>

<p>Les sections suivantes donnent un bref aperçu de chacun des types de fichiers d'images pris en charge par les navigateurs web.</p>

<p>Dans les tableaux ci-dessous, le terme <strong>bits par composante</strong> fait référence au nombre de bits utilisés pour représenter chaque composante de couleur. Par exemple, une profondeur de couleur RVB de 8 indique que chacune des composantes rouge, verte et bleue est représentée par une valeur de 8 bits. <strong>La profondeur de bit</strong>, d'autre part, correspond au nombre total de bits utilisés pour représenter chaque pixel en mémoire.</p>

<h3 id="apng">APNG (Animated Portable Network Graphics)</h3>

<p>L'APNG est un format de fichier introduit pour la première fois par Mozilla qui étend le <a href="#png">PNG</a> pour ajouter le support des images animées. Conceptuellement similaire au format GIF animé qui est utilisé depuis des décennies, l'APNG est plus performant dans la mesure où il prend en charge une variété de <a href="https://fr.wikipedia.org/wiki/Profondeur_de_couleur_(informatique)">profondeur de couleur</a>, alors que le GIF animé ne supporte que des <a href="https://en.wikipedia.org/wiki/Indexed_color">couleurs indexées</a> sur 8 bits.</p>

<p>L'APNG est idéal pour les animations de base qui n'ont pas besoin d'être synchronisées avec d'autres activités ou avec une bande son, comme les indicateurs de progrès, <a href="https://fr.wikipedia.org/wiki/Indicateur_d%27activit%C3%A9">indicateur d'activité</a>, et autres séquences animées. Par exemple, l'APNG est <a href="https://developer.apple.com/stickers/">l'un des formats pris en charge lors de la création d'autocollants animés</a> pour l'application iMessage d'Apple (et l'application Messages sur iOS). Ils sont également couramment utilisés pour les parties animées des interfaces utilisateur des navigateurs web.</p>

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
   <td><a href="https://wiki.mozilla.org/APNG_Specification">wiki.mozilla.org/APNG_Specification</a></td>
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
       <td>Chaque pixel est constitué d'une seule valeur <em>D</em>-bit indiquant la luminosité du pixel en niveaux de gris.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par trois valeurs de <em>D</em>-bit indiquant le niveau des composantes de couleur rouge, verte et bleue.</td>
      </tr>
      <tr>
       <th scope="row">Couleur indexée</th>
       <td>1, 2, 4, et 8</td>
       <td>Chaque pixel est une valeur <em>D</em>-bit indiquant un index dans une palette de couleurs qui est contenue dans un morceau <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code> dans le fichier APNG ; les couleurs de la palette utilisent toutes une profondeur de 8 bits.</td>
      </tr>
      <tr>
       <th scope="row">Niveau de gris avec alpha</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par deux valeurs <em>D</em>-bit : l'intensité du pixel en niveaux de gris et un échantillon alpha, indiquant le degré d'opacification du pixel.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur avec alpha</th>
       <td>8 et 16</td>
       <td>Chaque pixel est composé de quatre composantes de couleur <em>D</em>-pixel : rouge, vert, bleu, et l'échantillon alpha indiquant le degré d'opacité du pixel.</td>
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
   <td>Gratuit et ouvert dans le cadre de la <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike license</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) version 3.0 ou plus.</td>
  </tr>
 </tbody>
</table>

<h3 id="avif">AVIF</h3>

<p>AV1 Image File Format (AVIF) est un format open-source et sans licence commerciale qui encode <dfn>des flux de bits AV1 dans un conteneur High Efficiency Image File Format (HEIF).</dfn></p>

<p><dfn>AV1 est un format d'encodage originellement conçu pour la transmission de vidéos sur Internet. Ce format bénéficie des avancées de la recherche sur l'encodage vidéo et peut bénéficier de la prise en charge matérielle des appareils. Un inconvénient est la différence de prérequis entre l'encodage vidéo / image.</dfn></p>

<p>Ce format dispose :</p>

<ul>
 <li>D'une excellente compression avec pertes par rapport à JPG et PNG pour des résultats visuels similaires (les images AVIF avec pertes pèsent environ la moitié des images JPEG).</li>
 <li>D'une meilleure compression que WebP — mediane à 50% par rapport à 30% de compression pour le même ensemble de fichiers JPG (source : <a href="https://www.ctrl.blog/entry/webp-avif-comparison.html">AVIF WebP Comparison</a> (CTRL Blog)).</li>
 <li>D'une compression sans perte.</li>
 <li>D'un stockage pour les animations/multi-images (similaire aux GIF aniimés mais avec une bien meilleure compression)</li>
 <li>D'une prise en charge de la transparence avec un canal alpha.</li>
 <li>Du <em>High Dynamic Range</em> (HDR) qui permet de stocker des images avec une plus grande largeur de contraste entre les zones les plus claires et les plus sombres.</li>
 <li>D'un spectre de couleurs (<i>gamut</i>) élargi.</li>
</ul>

<p>AVIF ne prend pas en charge l'affichage progressif et il faut donc que les fichiers soient complètement téléchargés avant de pouvoir être affichés. Cela a peu d'impact pour la plupart des fichiers AVIF qui sont plus légers que leurs équivalents JPEG ou PNG. En revanche, pour les fichiers plus volumineux, on devra considérer un format qui prend en charge le rendu progressif.</p>

<p>La prise en charge navigateur n'étant pas aussi large que pour les autres formats, il est préférable d'utiliser l'élément HTML <a href="/fr/docs/Web/HTML/Element/picture"><code>&lt;picture&gt;</code></a> pour fournir des images alternatives au format <a href="#jpeg">JPEG</a> ou <a href="#png">PNG</a>.</p>

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
    <p><a href="https://aomediacodec.github.io/av1-avif/">AV1 Image File Format (AVIF)</a></p>
   </td>
  </tr>
  <tr>
   <th scope="row">Compatibilité des navigateurs</th>
   <td>Chrome 85, Opera 71 et Firefox (via <a href="/fr/docs/Mozilla/Firefox/Experimental_features#avif_av1_image_file_format_support">une préférence</a>).
    <ul>
      <li>Pour Firefox 77 et ultérieur : <code>image.avif.enable</code> doit être passée à <code>true</code>. Firefox implémente pour le moment une prise en charge simple d'AVIF. Les fonctionnalités plus avancées comme les images animées ou les espaces de couleurs sont en cours de développement (voir <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1682995">le bug 1682995</a>).</li>
    </ul>
   </td>
  </tr>
  <tr>
   <th scope="row">Dimensions maximums </th>
   <td>2 147 483 647×2 147 483 647 pixels</td>
  </tr>
  <tr>
   <th scope="row">Modes de couleurs supportés</th>
   <td>
    <p>Voir <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &amp; Decoding Process Specification</a>, section 6.4.2 : Color config semantics.</p>

    <p>Pour résumer de façon non-exhaustive :</p>

    <ul>
     <li>Modes de couleur : YUV444, YUV422, YUV420</li>
     <li>Niveau de gris : YUV400</li>
     <li>Bits : 8/10/12 bits</li>
     <li>Prise en charge du canal alpha</li>
     <li>Prise en charge des profils ICC</li>
     <li>Prise en charge NCLX : sRGB, sRGB linéaire, Rec2020 linéaire, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3, etc.</li>
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
   <td>Pas de licence commerciale. Informations disponibles sur <a href="https://aomedia.org/license/">https://aomedia.org/license/</a> .</td>
  </tr>
 </tbody>
</table>

<h3 id="bmp">BMP (Bitmap file)</h3>

<p>Le type de fichier BMP <strong>(image Bitmap)</strong> est le plus répandu sur les ordinateurs Windows, et n'est généralement utilisé que dans des cas particuliers pour les applications et contenus web.</p>

<div class="warning">
<p><strong>Attention :</strong> Vous devriez généralement éviter d'utiliser le BMP pour le contenu des sites web, car ce n'est pas une utilisation généralement acceptée du format.</p>
</div>

<p>BMP soutient théoriquement une variété de représentations de données internes. La forme la plus simple, et la plus couramment utilisée, de fichier BMP est une image tramée non compressée, chaque pixel occupant 3 octets représentant ses composantes rouge, verte et bleue, et chaque ligne étant rembourrée avec des <code>0x00</code> octets à un multiple de 4 octets de large.</p>

<p>Bien que d'autres représentations de données soient définies dans la spécification, elles ne sont pas largement utilisées et sont souvent complètement inappliquées. Ces caractéristiques comprennent : la prise en charge de différentes profondeurs de bits, la couleur indexée, les canaux alpha et différents ordres de pixels (par défaut, BMP est écrit du coin inférieur gauche vers la droite et le haut, plutôt que du coin supérieur gauche vers la droite et le bas).</p>

<p>Théoriquement, plusieurs algorithmes de compression sont pris en charge, et les données d'image peuvent également être stockées au format <a href="#jpeg">JPEG</a> ou <a href="#png">PNG</a> dans le fichier BMP.</p>

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
   <td>Aucune spécification ; toutefois, Microsoft fournit une documentation générale sur le format à l'adresse <a href="https://docs.microsoft.com/fr/windows/desktop/gdi/bitmap-storage">docs.microsoft.com/fr/windows/desktop/gdi/bitmap-storage</a></td>
  </tr>
  <tr>
   <th scope="row">Compatibilité des navigateurs</th>
   <td>Toutes versions de Chrome, Edge, Firefox, Internet Explorer, Opera, et Safari</td>
  </tr>
  <tr>
   <th scope="row">Dimensions maximales</th>
   <td>Soit 32 767×32 767 ou 2 147 483 647×2 147 483 647 pixels, selon la version du format</td>
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
       <td>Chaque bit représente un seul pixel, qui peut être noir ou blanc.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par trois valeurs représentant les composantes de couleur rouge, verte et bleue ; chacune d'entre elles est constituée de <em>D</em> bits.</td>
      </tr>
      <tr>
       <th scope="row">Couleur indexée</th>
       <td>2, 4, et 8</td>
       <td>Chaque pixel est représenté par une valeur de 2, 4 ou 8 bits, qui sert d'index dans la table des couleurs.</td>
      </tr>
      <tr>
       <th scope="row">Niveau de gris avec alpha</th>
       <td><em>n/a</em></td>
       <td>Le BMP n'a pas de format d'échelle de gris distinct.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur avec alpha</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par quatre valeurs représentant les composantes de couleur rouge, verte, bleue et alpha ; chacune d'entre elles est constituée de <em>D</em> bits.</td>
      </tr>
     </tbody>
    </table>
   </td>
  </tr>
  <tr>
   <th scope="row">Compression</th>
   <td>Plusieurs méthodes de compression sont prises en charge, notamment les algorithmes avec ou sans perte</td>
  </tr>
  <tr>
   <th scope="row">Licence</th>
   <td>Couvert par la promesse de spécification ouverte de Microsoft ; bien que Microsoft détienne des brevets contre la BMP, elle a publié une promesse de ne pas faire valoir ses droits de brevet tant que des conditions spécifiques sont remplies. Il ne s'agit toutefois pas d'une licence. BMP est inclus dans le format Windows Metafile (<code>.wmf</code>).</td>
  </tr>
 </tbody>
</table>

<h3 id="gif">GIF (Graphics Interchange Format)</h3>

<p>En 1987, le fournisseur de services en ligne CompuServe a introduit le <strong><a href="https://fr.wikipedia.org/wiki/Graphics_Interchange_Format">"GIF"</a></strong> (<strong>Graphics Interchange Format</strong>) pour fournir un format graphique compressé que tous les membres de leur service pourront utiliser. Le GIF utilise l'algorithme <a href="https://fr.wikipedia.org/wiki/Lempel-Ziv-Welch">Lempel-Ziv-Welch (LZW)</a> pour compresser sans perte des images couleur indexés sur 8 bits. Le GIF était l'un des deux premiers formats graphiques pris en charge par <a href="/fr/docs/Glossary/HTML">HTML</a>, ainsi que <a href="#xbm">XBM</a>.</p>

<p>Chaque pixel d'un GIF est représenté par une seule valeur de 8 bits servant d'index dans une palette de couleurs de 24 bits (8 bits pour le rouge, le vert et le bleu). La longueur d'une table de couleurs est toujours une puissance de 2 (c'est-à-dire que chaque palette a 2, 4, 8, 16, 32, 64 ou 256 entrées). Pour simuler plus de 255 ou 256 couleurs, on utilise généralement la <a href="https://fr.wikipedia.org/wiki/Diffusion_d%27erreur">diffusion d'erreur(<i>dithering</i>)</a>. Il est <a href="https://gif.ski/">techniquement possible</a> de superposer plusieurs blocs d'images, chacun avec sa propre palette de couleurs, pour créer des images en couleurs réelles, mais en pratique, cela est rarement fait.</p>

<p>Les pixels sont opaques, sauf si un indice de couleur spécifique est désigné comme transparent, auquel cas les pixels colorés à cette valeur sont entièrement transparents.</p>

<p>Le GIF permet une animation simple, dans laquelle, après une première image de taille réelle, une série d'images reflétant les parties de l'image qui changent avec chaque image est fournie.</p>

<p>Le GIF est extrêmement populaire depuis des décennies, en raison de sa simplicité et de sa compatibilité. Son support d'animation a provoqué un regain de popularité à l'ère des médias sociaux, lorsque les GIF animés ont commencé à être largement utilisés pour de courtes "vidéos", des mèmes et d'autres séquences d'animation simples.</p>

<p>Une autre caractéristique populaire du GIF est la prise en charge de l'<a href="https://fr.wikipedia.org/wiki/Entrelacement_(image_matricielle)">entrelacement</a>, où les rangées de pixels sont stockées dans le désordre afin que les fichiers partiellement reçus puissent être affichés en qualité inférieure. Cela est particulièrement utile lorsque les connexions réseau sont lentes.</p>

<p>Le format GIF est un bon choix pour les images et les animations simples, bien que la conversion d'images couleur en GIF puisse entraîner des diffusions d'erreur insatisfaisantes. En règle générale, le contenu moderne devrait utiliser <a href="#png">PNG</a> pour les images fixes sans perte et indexées, et devrait envisager d'utiliser <a href="#apng">APNG</a> pour les séquences d'animation sans perte.</p>

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
   <td><a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">Spécification GIF87a</a><br>
    <a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt">Spécification GIF89a</a></td>
  </tr>
  <tr>
   <th scope="row">Compatibilité des navigateurs</th>
   <td>Toutes les versions de Chrome, Edge, Firefox, Internet Explorer, Opera, and Safari</td>
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
       <td>Le GIF n'inclut pas un format de niveaux de gris spécifique.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur</th>
       <td><em>n/a</em></td>
       <td>Le GIF ne prend pas en charge les pixels en couleurs réelles.</td>
      </tr>
      <tr>
       <th scope="row">Couleur indexée</th>
       <td>8</td>
       <td>Chaque couleur d'une palette GIF est définie par 8 bits de rouge, de vert et de bleu (24 bits au total par pixel).</td>
      </tr>
      <tr>
       <th scope="row">Niveau de gris avec alpha</th>
       <td><em>n/a</em></td>
       <td>Le GIF ne fournit pas de format de niveaux de gris spécifique.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur avec alpha</th>
       <td><em>n/a</em></td>
       <td>Le GIF ne prend pas en charge les pixels en couleurs réelles.</td>
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
   <td>Alors que le format GIF lui-même est ouvert, l'algorithme de compression LZW était couvert par des brevets jusqu'au début des années 2000. Depuis le 7 juillet 2004, tous les brevets pertinents ont expiré et le format GIF peut être utilisé librement.</td>
  </tr>
 </tbody>
</table>

<h3 id="ico">ICO (Microsoft Windows icon)</h3>

<p>Le format de fichier ICO (Microsoft Windows icon) a été conçu par Microsoft pour les icônes de bureau des systèmes Windows. Cependant, les premières versions d'Internet Explorer ont introduit la possibilité pour un site web de fournir un fichier ICO nommé <code>favicon.ico</code> dans le répertoire racine d'un site web pour spécifier un <strong><a href="/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#ajouter_des_ic%c3%b4nes_personnalis%c3%a9es_%c3%a0_un_site">favicon</a></strong> — une icône à afficher dans le menu Favoris, et d'autres endroits où une représentation iconique du site serait utile.</p>

<p>Un fichier ICO peut contenir plusieurs icônes, et commence par un répertoire contenant des détails sur chacune d'entre elles. Ce répertoire est suivi des données relatives aux icônes. Les données de chaque icône peuvent être soit une image <a href="#bmp">BMP</a> sans l'en-tête du fichier, soit une image <a href="#png">PNG</a> complète (y compris l'en-tête du fichier). Si vous utilisez des fichiers ICO, vous devez utiliser le format BMP, car la prise en charge du format PNG dans les fichiers ICO n'a été ajoutée qu'à partir de Windows Vista et pourrait ne pas être bien prise en charge.</p>

<div class="warning">
<p><strong>Attention :</strong> Les fichiers ICO ne doivent pas être utilisés dans le contenu Web. En outre, leur utilisation pour les favicons a diminué au profit de l'utilisation d'un fichier PNG et de l'élément <a href="/fr/docs/Web/HTML/Element/link"><code>&lt;link&gt;</code></a>, comme décrit dans <a href="/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#ajouter_des_ic%C3%B4nes_personnalis%C3%A9es_%C3%A0_un_site">cette section</a>.</p>
</div>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Type de MIME</th>
   <td><code>image/vnd.microsoft.icon</code> (officiel), <code>image/x-icon</code> (utilisé par Microsoft)</td>
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
   <td>Toutes les versions de Chrome, Edge, Firefox, Internet Explorer, Opera et Safari</td>
  </tr>
  <tr>
   <th scope="row">Dimensions maximales</th>
   <td>256×256 pixels</td>
  </tr>
  <tr>
   <th scope="row">Modes de couleur pris en charge</th>
   <td>
    <table class="standard-table">
     <caption>Icônes au format BMP</caption>
     <tbody>
      <tr>
       <th scope="row">Mode de couleur</th>
       <th scope="col">Bits par composante (<em>D</em>)</th>
       <th scope="col">Description</th>
      </tr>
      <tr>
       <th scope="row">Niveau de gris</th>
       <td>1</td>
       <td>Chaque bit représente un seul pixel, qui peut être noir ou blanc.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par trois valeurs représentant les composantes de couleur rouge, verte et bleue ; chacune d'entre elles est constituée de <em>D</em> bits.</td>
      </tr>
      <tr>
       <th scope="row">Couleur indexée</th>
       <td>2, 4, et 8</td>
       <td>Chaque pixel est représenté par une valeur de 2, 4 ou 8 bits, qui sert d'index dans la table des couleurs.</td>
      </tr>
      <tr>
       <th scope="row">Niveau de gris avec alpha</th>
       <td><em>n/a</em></td>
       <td>Le BMP n'a pas de format d'échelle de gris distinct.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur avec alpha</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par quatre valeurs représentant les composantes de couleur rouge, verte, bleue et alpha ; chacune d'entre elles est constituée de <em>D</em> bits.</td>
      </tr>
     </tbody>
    </table>

    <table class="standard-table">
     <caption>Icônes au format PNG</caption>
     <tbody>
      <tr>
       <th scope="row">Mode de couleur</th>
       <th scope="col">Bits par composante (<em>D</em>)</th>
       <th scope="col">Description</th>
      </tr>
      <tr>
       <th scope="row">Niveau de gris</th>
       <td>1, 2, 4, 8 et 16</td>
       <td>Chaque pixel est constitué d'une seule valeur <em>D</em>-bit indiquant la luminosité du pixel en niveaux de gris.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par trois valeurs de <em>D</em>-bit indiquant le niveau des composantes de couleur rouge, verte et bleue.</td>
      </tr>
      <tr>
       <th scope="row">Couleur indexée</th>
       <td>1, 2, 4 et 8</td>
       <td>Chaque pixel est une valeur de <em>D</em>-bit indiquant un index dans une palette de couleurs qui est contenue dans un morceau de <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code> dans le fichier APNG ; les couleurs de la palette utilisent toutes une profondeur de 8 bits.</td>
      </tr>
      <tr>
       <th scope="row">Niveau de gris avec alpha</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par deux valeurs <em>D</em>-bit : l'intensité du pixel en niveaux de gris et un échantillon alpha, indiquant le degré d'opacification du pixel.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur avec alpha</th>
       <td>8 et 16</td>
       <td>Chaque pixel est composé de quatre composantes de couleur <em>D</em>-pixel : rouge, vert, bleu, et l'échantillon alpha indiquant le degré d'opacité du pixel.</td>
      </tr>
     </tbody>
    </table>
   </td>
  </tr>
  <tr>
   <th scope="row">Compression</th>
   <td>Les icônes au format BMP utilisent presque toujours une compression sans perte, mais des méthodes avec perte sont disponibles. Les icônes au format PNG sont toujours compressées sans perte.</td>
  </tr>
  <tr>
   <th scope="row">Licence</th>
   <td>—</td>
  </tr>
 </tbody>
</table>

<h3 id="jpeg">JPEG (Joint Photographic Experts Group image)</h3>

<p>Le <a href="/fr/docs/Glossary/jpeg">JPEG</a> (typiquement prononcé "<strong>j-peg</strong>") est actuellement le format de compression avec perte le plus utilisé pour les images fixes. Il est particulièrement utile pour les photographies ; l'application de la compression avec perte au contenu nécessitant de la netteté, comme les diagrammes ou les graphiques, peut produire des résultats insatisfaisants.</p>

<p>Le JPEG est en fait un format de données pour les photos compressées, plutôt qu'un type de fichier. La spécification JFIF (JPEG <strong>F</strong>ile <strong>I</strong>nterchange <strong>F</strong>ormat) décrit le format des fichiers que nous considérons comme des images "JPEG".</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Type de MIME</th>
   <td><code>image/jpeg</code></td>
  </tr>
  <tr>
   <th scope="row">Extentions(s) de fichier(s)</th>
   <td><code>.jpg</code>, <code>.jpeg</code>, <code>.jpe</code>, <code>.jif</code>, <code>.jfif</code></td>
  </tr>
  <tr>
   <th scope="row">Spécification</th>
   <td><a href="https://jpeg.org/jpeg/">jpeg.org/jpeg/</a></td>
  </tr>
  <tr>
   <th scope="row">Compatibilité des navigateurs</th>
   <td>Toutes les versions de Chrome, Edge, Firefox, Internet Explorer, Opera et Safari</td>
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
       <td>Chaque pixel est décrit par les composantes de couleur rouge, bleue et verte, chacune d'entre elles étant composée de 8 bits.</td>
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
   <td>Sans perte; sur la base de la <a href="https://fr.wikipedia.org/wiki/Transform%C3%A9e_en_cosinus_discr%C3%A8te">transformée en cosinus discrète</a></td>
  </tr>
  <tr>
   <th scope="row">Licence</th>
   <td>Depuis le 27 octobre 2006, tous les brevets américains ont expiré.</td>
  </tr>
 </tbody>
</table>

<h3 id="png">PNG (Portable Network Graphics)</h3>

<p>Le <a href="/fr/docs/Glossary/PNG">PNG</a> (prononcé "<strong>png</strong>") utilise une compression sans perte ou avec perte afin de fournir une compression plus efficace, et prend en charge des profondeurs de couleurs plus élevées que <a href="#gif">GIF</a>, ainsi qu'une transparence alpha complète.</p>

<p>Le format PNG est largement soutenu, tous les principaux navigateurs offrant une prise en charge complète de ses fonctionnalités. Internet Explorer, qui a introduit le support PNG dans les versions 4-5, ne l'a pas entièrement pris en charge avant IE 9, et a connu de nombreux bogues tristement célèbres pendant de nombreuses années, y compris dans l'Internet Explorer 6, autrefois omniprésent. Cela a ralenti l'adoption de la PNG, mais elle est maintenant couramment utilisée, surtout lorsqu'il faut reproduire avec précision l'image source.</p>

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
       <td>3.5.1 (Presto)<br>
        15 (Blink)</td>
       <td>1</td>
      </tr>
      <tr>
       <th scope="row">Canal Alpha</th>
       <td>1</td>
       <td>12</td>
       <td>1</td>
       <td>5</td>
       <td>6 (Presto)<br>
        Toute (Blink)</td>
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
       <td>Chaque pixel est constitué d'une seule valeur <em>D</em>-bit indiquant la luminosité du pixel en niveaux de gris.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par trois valeurs de <em>D</em>-bit indiquant le niveau des composantes de couleur rouge, verte et bleue.</td>
      </tr>
      <tr>
       <th scope="row">Couleur indexée</th>
       <td>1, 2, 4 et 8</td>
       <td>Chaque pixel est une valeur de bit <em>D</em> indiquant un index dans une palette de couleurs qui est contenue dans un morceau de <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code> dans le fichier APNG ; les couleurs de la palette utilisent toutes une profondeur de 8 bits.</td>
      </tr>
      <tr>
       <th scope="row">Niveau de gris avec alpha</th>
       <td>8 et 16</td>
       <td>Chaque pixel est représenté par deux valeurs <em>D</em>-bit : l'intensité du pixel en niveaux de gris et un échantillon alpha, indiquant le degré d'opacification du pixel.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur avec alpha</th>
       <td>8 et 16</td>
       <td>Chaque pixel est composé de quatre composantes de couleur <em>D</em>-pixel : rouge, vert, bleu, et l'échantillon alpha indiquant le degré d'opacité du pixel.</td>
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
   <td>©2003 <a href="https://www.w3.org/">W3C</a>® (<a href="https://www.lcs.mit.edu/">MIT</a>, <a href="https://www.ercim.org/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Tous Droits Réservés. Les règles du W3C en matière de <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">responsabilité</a>, de <a href="https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">marque commerciale</a>, d'<a href="https://www.w3.org/Consortium/Legal/copyright-documents">utilisation des documents</a> et de <a href="https://www.w3.org/Consortium/Legal/copyright-software">licences de logiciels</a> s'appliquent. Pas de brevets porteurs de royalties connus.</td>
  </tr>
 </tbody>
</table>

<h3 id="svg">SVG (Scalable Vector Graphics)</h3>

<p>Le SVG est une base <a href="/fr/docs/Glossary/XML">XML</a> pour le format d'<a href="https://fr.wikipedia.org/wiki/Image_vectorielle">image vectorielle</a> qui spécifie le contenu d'une image comme un ensemble de commandes de dessin qui créent des formes, des lignes, appliquent des couleurs, des filtres, etc. Les fichiers SVG sont idéaux pour les diagrammes, les icônes et autres images qui peuvent être dessinés avec précision à n'importe quelle taille. En tant que tel, le SVG est populaire pour les éléments d'interface utilisateur dans la conception moderne du Web.</p>

<p>Les fichiers SVG sont des fichiers texte contenant le code source qui, une fois interprété, dessine l'image souhaitée. Par exemple, cet exemple définit une zone de dessin de taille initiale de 100 par 100 unités, contenant une ligne tracée en diagonale à travers la boîte :</p>

<pre class="brush: html">&lt;svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg"&gt;
  &lt;line x1="0" y1="80" x2="100" y2="20" stroke="black" /&gt;
&lt;/svg&gt;</pre>

<p>Le SVG peut être utilisé dans le contenu du web de deux façons :</p>

<ol>
 <li>Vous pouvez directement écrire l'élément <a href="/fr/docs/Web/HTML/Element/svg"><code>&lt;svg&gt;</code></a> dans le HTML, contenant des <a href="/fr/docs/Web/SVG/Element">éléments SVG</a> pour dessiner l'image.</li>
 <li>Vous pouvez afficher une image SVG partout où vous pouvez utiliser les autres types d'images, y compris avec les éléments <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/image"><code>&lt;image&gt;</code></a>, les propriétés <a href="/fr/docs/Web/CSS/background-image"><code>background-image</code></a> du CSS, etc.</li>
</ol>

<p>Le SVG est un choix idéal pour les images qui peuvent être représentées à l'aide d'une série de commandes de dessin, en particulier si la taille à laquelle l'image sera rendue est inconnue ou peut varier, puisque le SVG s'adaptera en douceur à la taille souhaitée. Il n'est généralement pas utile pour les images strictement bitmap ou photographiques, bien qu'il soit possible d'inclure des images bitmap dans un SVG.</p>

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
       <td>10 (Presto)<br>
        15 (Blink)</td>
       <td>3.2</td>
      </tr>
      <tr>
       <th scope="row">SVG comme image (<a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a> etc)</th>
       <td>28</td>
       <td>12</td>
       <td>4</td>
       <td>9</td>
       <td>10 (Presto)<br>
        15 (Blink)</td>
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
   <td>Les couleurs en SVG sont spécifiées à l'aide de <a href="/fr/docs/Web/CSS/color_value">syntaxe de couleur CSS</a>.</td>
  </tr>
  <tr>
   <th scope="row">Compression</th>
   <td>La source SVG peut être compressée pendant le transit en utilisant les techniques de <a href="/fr/docs/Web/HTTP/Compression">compression HTTP</a>, ou sur disque en tant que fichier <code>.svgz</code>.</td>
  </tr>
  <tr>
   <th scope="row">Licence</th>
   <td>©2018 <a href="https://www.w3.org/">W3C</a>® (<a href="https://www.lcs.mit.edu/">MIT</a>, <a href="https://www.ercim.org/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Tous Droits Réservés. Les règles du W3C en matière de <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">responsabilité</a>, de <a href="https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">marque commerciale</a>, d'<a href="https://www.w3.org/Consortium/Legal/copyright-documents">utilisation des documents</a> et de <a href="https://www.w3.org/Consortium/Legal/copyright-software">licences de logiciels</a> s'appliquent. Pas de brevets porteurs de royalties connus.</td>
  </tr>
 </tbody>
</table>

<h3 id="tiff">TIFF (Tagged Image File Format)</h3>

<p><a href="https://fr.wikipedia.org/wiki/Tagged_Image_File_Format">TIFF</a> est un format de fichier graphique matriciel qui a été créé pour stocker des photos scannées, bien qu'il puisse s'agir de n'importe quel type d'image. Il s'agit d'un format quelque peu "lourd", dans la mesure où les fichiers TIFF ont tendance à être plus volumineux que les images d'autres formats. Cela s'explique par les métadonnées souvent incluses, ainsi que par le fait que la grande majorité des fichiers TIFF ne sont pas compressés. Cependant, les méthodes de compression avec et sans perte sont toutes deux prises en charge par la spécification TIFF.</p>

<p>Chaque valeur d'un fichier TIFF est spécifiée à l'aide de sa <strong>balise</strong> (indiquant le type d'information dont il s'agit, comme la largeur de l'image) et de son <strong>type</strong> (indiquant le format dans lequel les données sont stockées), suivis de la longueur du tableau de valeurs à attribuer à cette balise (toutes les propriétés sont stockées dans des tableaux, même pour des valeurs uniques). Cela permet d'utiliser différents types de données pour les mêmes propriétés. Par exemple, la largeur d'une image, <code>ImageWidth</code>, est stockée à l'aide de la balise <code>0x0100</code> et est un tableau à une entrée. En précisant le type 3 (<code>SHORT</code>), la valeur de <code>ImageWidth</code> est stockée comme une valeur de 16 bits :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Balise</th>
   <th scope="col">Type</th>
   <th scope="col">Taille</th>
   <th scope="col">Valeur</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>0x0100</code><br>
    (<code>ImageWidth</code>)</td>
   <td><code>0x0003</code><br>
    (<code>SHORT</code>)</td>
   <td><code>0x00000001</code><br>
    (1 entée)</td>
   <td><code>0x0280</code><br>
    (640 pixels)</td>
  </tr>
 </tbody>
</table>

<p>La spécification du type 4 (<code>LONG</code>) enregistre la largeur comme une valeur de 32 bits :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Balise</th>
   <th scope="col">Type</th>
   <th scope="col">Taille</th>
   <th scope="col">Valeur</th>
  </tr>
  <tr>
   <td><code>0x0100</code><br>
    (<code>ImageWidth</code>)</td>
   <td><code>0x0004</code><br>
    (<code>LONG</code>)</td>
   <td><code>0x00000001</code><br>
    (1 entry)</td>
   <td><code>0x00000280</code><br>
    (640 pixels)</td>
  </tr>
 </thead>
</table>

<p>Un seul fichier TIFF peut contenir plusieurs images ; il peut être utilisé pour représenter des documents de plusieurs pages, par exemple (comme un document de plusieurs pages scanné ou une télécopie reçue). Toutefois, un logiciel qui lit les fichiers TIFF n'est nécessaire que pour prendre en charge la première image.</p>

<p>Le TIFF prend en charge divers espaces de couleur, et pas seulement le RGB. Il s'agit notamment de CMJN, YCbCr et autres, ce qui fait du TIFF un bon choix pour le stockage d'images destinées à la presse écrite, au cinéma ou à la télévision.</p>

<p>Il y a longtemps, certains navigateurs prenaient en charge les images TIFF dans le contenu Web ; aujourd'hui, cependant, vous devez utiliser des bibliothèques spéciales ou des modules complémentaires de navigateur pour le faire. Les fichiers TIFF ne sont donc pas utiles dans le contexte du contenu web, mais il est courant de fournir des fichiers TIFF téléchargeables lors de la distribution de photos et d'autres œuvres d'art destinées à être modifiées ou imprimées avec précision.</p>

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
   <td><a href="https://www.adobe.io/open/standards/TIFF.html">adobe.io/open/standards/TIFF.html</a></td>
  </tr>
  <tr>
   <th scope="row">Compatibilité des navigateurs</th>
   <td>Aucun navigateur n'intègre la prise en charge du TIFF ; son intérêt réside dans le fait qu'il peut être téléchargé</td>
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
       <td>Un TIFF à deux niveaux stocke 8 bits dans chaque octet, un bit par pixel. Le champ <code>PhotometricInterpretation</code> indique lequel de 0 et 1 est noir et lequel est blanc.</td>
      </tr>
      <tr>
       <th scope="row">Niveaux de gris</th>
       <td>4 et 8</td>
       <td>Chaque pixel est constitué d'une seule valeur <em>D</em>-bit indiquant la luminosité du pixel en niveaux de gris.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur</th>
       <td>8</td>
       <td>Toutes les images RVB en couleurs réelles sont stockées en utilisant 8 bits de rouge, de vert et de bleu.</td>
      </tr>
      <tr>
       <th scope="row">Couleur indexée</th>
       <td>4 et 8</td>
       <td>Chaque pixel est un index dans un enregistrement <code>ColorMap</code>, qui définit les couleurs utilisées dans l'image. La carte des couleurs répertorie toutes les valeurs de rouge, puis toutes les valeurs de vert, puis toutes les valeurs de bleu (plutôt que <code>rgb</code>, <code>rgb</code>, <code>rgb...</code>).</td>
      </tr>
      <tr>
       <th scope="row">Niveaux de gris avec alpha</th>
       <td>4 et 8</td>
       <td>L'information alpha est ajoutée en spécifiant qu'il y a plus de 3 échantillons par pixel dans le champ <code>SamplesPerPixel</code>, et en indiquant le type d'alpha (1 pour une composante alpha pré-multipliée associée, et 2 pour une alpha non associée (une couche séparée) ; cependant, les canaux alpha sont rarement utilisés dans les fichiers TIFF et peuvent ne pas être pris en charge par le logiciel de l'utilisateur.</td>
      </tr>
      <tr>
       <th scope="row">Vraie couleur avec alpha</th>
       <td>8</td>
       <td>L'information alpha est ajoutée en spécifiant qu'il y a plus de 3 échantillons par pixel dans le champ <code>SamplesPerPixel</code>, et en indiquant le type d'alpha (1 pour une composante alpha pré-multipliée associée, et 2 pour une alpha non associée (une couche séparée) ; cependant, les canaux alpha sont rarement utilisés dans les fichiers TIFF et peuvent ne pas être pris en charge par le logiciel de l'utilisateur.</td>
      </tr>
     </tbody>
    </table>
   </td>
  </tr>
  <tr>
   <th scope="row">Compression</th>
   <td>La plupart des fichiers TIFF ne sont pas compressés, mais les PackBits sans perte et la compression LZW sont pris en charge, tout comme la compression JPEG avec perte.</td>
  </tr>
  <tr>
   <th scope="row">Licence</th>
   <td>Aucune licence n'est requise (à l'exception de celles associées aux bibliothèques que vous pourriez utiliser) ; tous les brevets connus ont expiré.</td>
  </tr>
 </tbody>
</table>

<h3 id="webp">WebP</h3>

<p>Le WebP prend en charge la compression avec perte via un codage prédictif basé sur le codec vidéo VP8, et la compression sans perte qui utilise des substitutions pour la répétition des données. Les images WebP avec perte sont en moyenne 25 à 35 % plus petites que les images JPEG dont le niveau de compression est visuellement similaire. Les images WebP sans perte sont généralement 26 % plus petites que les mêmes images au format PNG.</p>

<p>WebP prend également en charge l'animation : dans un fichier WebP avec perte, les données d'image sont représentées par un flux binaire VP8, qui peut contenir plusieurs images. Le fichier WebP sans perte contient le fragment <code>ANIM</code>, qui décrit l'animation, et le fragment <code>ANMF</code>, qui représente une image d'une séquence d'animation. Le bouclage est pris en charge.</p>

<p>WebP bénéficie désormais d'un large soutien dans les dernières versions des principaux navigateurs web, bien qu'il ne bénéficie pas d'un soutien historique profond. Fournir une solution de repli au format <a href="#jpeg">JPEG</a> ou <a href="#png">PNG</a>, par exemple avec <a href="/fr/docs/Web/HTML/Element/picture">l'élément <code>&lt;picture&gt;</code></a>.</p>

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
    <p><a href="https://developers.google.com/speed/webp/docs/riff_container">Spécification des conteneurs RIFF</a> (en)<br>
     <a href="https://datatracker.ietf.org/doc/html/rfc6386">RFC 6386 - Format des données VP8 et guide de décodage</a> (en) (encodage avec perte)<br>
     <a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">Spécification du flux binaire sans perte WebP</a> (en)</p>
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
       <td>11.10 (Presto)<br>
        15 (Blink)</td>
       <td>non</td>
      </tr>
      <tr>
       <th scope="row">WebP sans perte</th>
       <td>23<br>
        25 sur Android</td>
       <td>18</td>
       <td>65</td>
       <td>non</td>
       <td>12.10 (Presto)<br>
        15 (Blink)</td>
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
   <td>WebP avec perte stocke l'image au format 8 bits Y'CbCr 4:2:0 (YUV420). WebP sans perte utilise la couleur ARGB 8 bits, chaque composant prenant 8 bits pour un total de 32 bits par pixel.</td>
  </tr>
  <tr>
   <th scope="row">Compression</th>
   <td>Sans perte (Huffman, LZ77, ou codes de cache couleur) ou avec perte (VP8).</td>
  </tr>
  <tr>
   <th scope="row">Licence</th>
   <td>Aucune licence n'est requise ; le code source est librement accessible.</td>
  </tr>
 </tbody>
</table>

<h3 id="xbm">XBM (X Window System Bitmap file)</h3>

<p>Les fichiers XBM (X Bitmap) ont été les premiers à être pris en charge sur le Web, mais ils ne sont plus utilisés et doivent être évités, car leur format peut poser des problèmes de sécurité. Les navigateurs modernes n'ont pas pris en charge les fichiers XBM depuis de nombreuses années, mais lorsqu'il s'agit de contenus plus anciens, vous pouvez en trouver encore.</p>

<p>XBM utilise un extrait de code C pour représenter le contenu de l'image sous la forme d'un tableau d'octets. Chaque image se compose de 2 à 4 directives <code>#define</code>, fournissant la largeur et la hauteur de la carte de bits (et éventuellement le hotspot, si l'image est conçue comme un curseur), suivies d'un tableau de <code>unsigned char</code>, où chaque valeur contient 8 pixels monochromes de 1 bit.</p>

<p>L'image doit être un multiple de 8 pixels de large. Par exemple, le code suivant représente une image XBM de 8 pixels sur 8 pixels, ces pixels étant disposés en damier noir et blanc :</p>

<pre class="brush: cpp">#define square8_width 8
#define square8_height 8
static unsigned char square8_bits[] = {
  0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55
};
</pre>

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

<h2 id="Choisir_un_format_dimage">Choisir un format d'image</h2>

<p>Il est probablement plus facile de choisir le format d'image le mieux adapté à vos besoins que les formats vidéo, car il existe moins d'options bénéficiant d'un large soutien et chacune d'entre elles tend à avoir un ensemble spécifique de cas d'utilisation.</p>

<h3 id="photographies">Photographies</h3>

<p>Les photographies se comportent généralement bien avec une compression avec perte (selon la configuration du codeur). Cela fait de <a href="#jpeg">JPEG</a> et <a href="#webp">WebP</a> de bons choix pour les photographies, le JPEG étant plus compatible mais le WebP offrant peut-être une meilleure compression. Pour maximiser la qualité et réduire le temps de téléchargement, envisagez de fournir à la fois une solution de repli avec WebP comme premier choix et JPEG comme second. Sinon, le JPEG est le choix le plus sûr pour la compatibilité.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Meilleurs choix</th>
   <th scope="col">Choix de secours</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>WebP et JPEG</td>
   <td>JPEG</td>
  </tr>
 </tbody>
</table>

<h3 id="icônes">Icônes</h3>

<p>Pour les images plus petites comme les icônes, utilisez un format sans perte pour éviter la perte de détails dans une image de taille limitée. Si le format WebP sans perte est idéal à cette fin, il n'est pas encore très répandu, de sorte que le format PNG est un meilleur choix, à moins que vous n'offriez une solution de repli. Si votre image contient moins de 256 couleurs, le GIF est une option, bien que le PNG comprime souvent encore plus petit avec son option de compression indexée (PNG-8).</p>

<p>Si l'icône peut être représentée par des graphiques vectoriels, il faut envisager <a href="#svg">SVG</a>, puisqu'elle s'étend sur plusieurs résolutions et tailles, ce qui est parfait pour une conception réactive. Bien que la prise en charge du SVG soit bonne, il peut être utile de proposer un PNG de secours pour les navigateurs plus anciens.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Meilleurs choix</th>
   <th scope="col">Choix de secours</th>
  </tr>
  <tr>
   <td>SVG, WebP sans perte, ou PNG</td>
   <td>PNG</td>
  </tr>
 </thead>
</table>

<h3 id="captures_décran">Captures d'écran</h3>

<p>À moins que vous ne soyez prêt à faire des compromis sur la qualité, vous devriez utiliser un format sans perte pour les captures d'écran. C'est particulièrement important si votre capture d'écran contient du texte, car le texte devient facilement flou et peu clair sous une compression avec perte.</p>

<p>Le format PNG est probablement le plus adapté, mais le format WebP sans perte est sans doute mieux compressé.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Meilleur choix</th>
   <th scope="col">Choix de secours</th>
  </tr>
  <tr>
   <td>WebP sans perte ou PNG ;<br>
    JPEG si les artefacts de compression ne sont pas un problème</td>
   <td>PNG ou JPEG ;<br>
    GIF pour les captures d'écran à faible nombre de couleurs</td>
  </tr>
 </thead>
</table>

<h3 id="diagrammes_dessins_et_diagrammes">Diagrammes, dessins et diagrammes</h3>

<p>Pour toute image pouvant être représentée par des graphiques vectoriels, le SVG est le meilleur choix. Sinon, vous devez utiliser un format sans perte comme le PNG. Si vous choisissez un format avec perte, tel que JPEG ou WebP avec perte, pesez soigneusement le niveau de compression pour éviter que le texte ou d'autres formes ne deviennent flous ou imprécis.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Meilleur choix</th>
   <th scope="col">Choix de secours</th>
  </tr>
  <tr>
   <td><a href="#svg">SVG</a></td>
   <td><a href="#png">PNG</a></td>
  </tr>
 </thead>
</table>

<h2 id="Fournir_des_solutions_de_repli_en_matière_dimage">Fournir des solutions de repli en matière d'image</h2>

<p>Alors que l'élément HTML standard <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a> ne supporte pas les retours de compatibilité pour les images, l'élément <a href="/fr/docs/Web/HTML/Element/picture"><code>&lt;picture&gt;</code></a> le fait. <code>&lt;picture&gt;</code> est utilisé comme enveloppe pour un certain nombre d'éléments <a href="/fr/docs/Web/HTML/Element/Source"><code>&lt;source&gt;</code></a>, chacun spécifiant une version de l'image dans un format différent ou sous des <a href="/fr/docs/Web/CSS/@media">conditions @media</a>, ainsi qu'un élément <code>&lt;img&gt;</code> qui définit où afficher l'image et le retour à la version par défaut ou "la plus compatible".</p>

<p>Par exemple, si vous affichez un diagramme mieux affiché avec SVG, mais que vous souhaitez offrir une solution de rechange à un PNG ou GIF du diagramme, vous feriez quelque chose comme ceci :</p>

<pre class="brush: html">&lt;picture&gt;
  &lt;source srcset="diagram.svg" type="image/svg+xml"&gt;
  &lt;source srcset="diagram.png" type="image/png"&gt;
  &lt;img src="diagram.gif" width="620" height="540"
       alt="Diagramme montrant les canaux de données"&gt;
&lt;/picture&gt;
</pre>

<p>Vous pouvez spécifier autant de <code>&lt;source&gt;</code>s que vous le souhaitez, bien qu'il vous suffise généralement de 2 ou 3.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/Media/Formats">Guide des types et formats de médias</a></li>
 <li><a href="/fr/docs/Web/Media">Technologies media Web</a></li>
 <li><a href="/fr/docs/Web/Media/Formats/Video_codecs">Guide des codecs vidéo du Web</a></li>
 <li>Les éléments <a href="/fr/docs/Glossary/HTML">HTML</a> <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/picture"><code>&lt;picture&gt;</code></a></li>
 <li>La propriété CSS <a href="/fr/docs/Web/CSS/background-image"><code>background-image</code></a></li>
 <li>Le constructeur <a href="/fr/docs/Web/API/Image"><code>Image()</code></a> et l'interface <a href="/fr/docs/Web/API/HTMLImageElement"><code>HTMLImageElement</code></a></li>
</ul>
