---
title: Format Web Video Text Tracks (WebVTT)
slug: Web/API/WebVTT_API
translation_of: Web/API/WebVTT_API
---
{{DefaultAPISidebar("WebVTT")}}

Le **format Web Video Text Tracks** (**WebVTT**) est un format qui permet d'afficher des pistes de texte qui varient avec le temps (comme des sous-titres) et qui est utilisé par l'élément HTML [`<track>`](/fr/docs/Web/HTML/Element/track). L'objectif principal des fichiers WebVTT est d'ajouter un calque de texte à une vidéo (représentée en HTML par [`<video>`](/fr/docs/Web/HTML/Element/video)). WebVTT est un format texte et les données doivent être encodées en [UTF-8](/fr/docs/Glossary/UTF-8). Les espaces et les tabulations peuvent être utilisés sans distinction. Il existe également une API qui permet de représenter ces pistes et les données nécessaires à la lecture du texte au bon moment.

## Fichiers WebVTT

Le type MIME pour le format WebVTT est `text/vtt`.

Un fichier WebVTT (`.vtt`) contient des répliques qui peuvent être sur une ou plusieurs lignes, comme illustré ici&nbsp;:

```plain
WEBVTT

00:01.000 --> 00:04.000
- Never drink liquid nitrogen.

00:05.000 --> 00:09.000
- It will perforate your stomach.
- You could die.
```

## Structure WebVTT

La structure d'un fichier WebVTT se compose des éléments suivants, dont certains sont optionnels. Dans l'ordre, on a&nbsp;:

- Un marqueur optionnel pour l'ordre des octets (BOM).
- La chaîne de caractères `WEBVTT`.
- Un texte d'en-tête optionnel à droite de `WEBVTT`.

  - Il est nécessaire d'avoir au moins un espace après `WEBVTT`.
  - Ce champ peut être utilisé pour ajouter une description au fichier.
  - Ce champ peut contenir n'importe quoi à l'exception de nouvelles lignes ou de la chaîne de caractères `-->`.

- Une ligne vide, qui est équivalente à deux nouvelles lignes consécutives.
- Zéro ou plusieurs répliques ou commentaires.
- Zéro ou plusieurs lignes vides.

### Exemples

#### Exemple n°1 — le fichier WebVTT le plus simple

```plain
WEBVTT
```

#### Exemple n°2 — un fichier WebVTT basique avec un en-tête

```plain
WEBVTT - Ce fichier n'a pas de réplique.
```

#### Exemple n°3 — un exemple de fichier WebVTT usuel avec un en-tête et des répliques

```plain
WEBVTT - Ce fichier contient des répliques.

14
00:01:14.815 --> 00:01:18.114
- What?
- Where are we now?

15
00:01:18.171 --> 00:01:20.991
- This is big bat country.

16
00:01:21.058 --> 00:01:23.868
- [ Bats Screeching ]
- They won't get in your hair. They're after the bugs.
```

### Structure interne d'un fichier WebVTT

Reprenons un des exemples précédent et voyons la structure des répliques en détails.

```plain
WEBVTT

00:01.000 --> 00:04.000
- Never drink liquid nitrogen.

00:05.000 --> 00:09.000
- It will perforate your stomach.
- You could die.
```

Pour chaque réplique, on a&nbsp;:

- La première ligne qui commence avec un horodatage indiquant le moment à partir duquel le texte présenté après dans le fichier apparaît à l'écran.
- Sur la même ligne, la chaîne de caractères `-->`.
- Toujours sur cette ligne, un deuxième horodatage qui indique le moment où le texte arrête d'être affiché.
- Une ou plusieurs lignes commençant par un tiret (-), qui contiennent chacune une partie du texte à afficher.

Il est aussi possible de placer des commentaires dans un fichier `.vtt` qui peuvent aider à mémoriser les informations importantes concernant les parties du fichier. Ces commentaires doivent être sur des lignes séparées et commencer avec la chaîne de caractères `NOTE`. Nous les aborderons en détails dans la section qui suit.

Il est important de ne pas utiliser de lignes vides supplémentaires au sein d'une réplique ou entre la ligne d'horodatage et le texte de la réplique. En effet, le format WebVTT est basé sur les lignes et une ligne vide terminera la réplique.

## Commentaires WebVTT

Les commentaires sont un composant optionnel qu'on peut ajouter afin d'inclure des informations dans un fichier WebVTT. Les commentaires sont destinés aux personnes qui lisent manuellement le fichier, ils ne seront pas vus des personnes consultant la vidéo. Les commentaires peuvent contenir des sauts de ligne mais pas de lignes vides (ce qui correspond à deux sauts de ligne consécutifs). Une ligne vide indique la fin d'un commentaire.

Un commentaire ne peut pas contenir la chaîne de caractères `-->`, une esperluette (`&`), ou un chevron ouvrant (`<`). Pour utiliser ces caractères, il faudra les échapper, par exemple avec `&amp;` pour l'esperluette et `&lt;` pour le chevron ouvrant. Il est également recommandé d'utiliser l'entité pour le chevron fermant (`&gt;`) plutôt que le caractère littéral correspondant (`>`), cela permet d'éviter la confusion avec les balises.

Un commentaire se compose de trois parties&nbsp;:

- La chaîne de caractères `NOTE`.
- Un espace ou une nouvelle ligne.
- Zéro ou plusieurs caractères en dehors de ceux indiqués ci-avant.

#### Exemple n°4 — commentaire WebVTT

```plain
NOTE Voici un commentaire
```

#### Exemple n°5 — commentaire sur plusieurs lignes

```plain
NOTE
Un commentaire qui s'étend
sur plusieurs lignes.

NOTE On peut aussi écrire un commentaire
sur plusieurs lignes de cette façon.
```

#### Exemple n°6 — utilisation usuelle des commentaires

```plain
WEBVTT - Traduction d'un film que j'aime

NOTE
Cette traduction a été réalisée par Kyle afin
que certains de ses amis puissent voir le film
avec leurs parents.

1
00:02:15.000 --> 00:02:20.000
- Ta en kopp varmt te.
- Det är inte varmt.

2
00:02:20.000 --> 00:02:25.000
- Har en kopp te.
- Det smakar som te.

NOTE La traduction de cette dernière ligne
peut être à revoir.

3
00:02:25.000 --> 00:02:30.000
- Ta en kopp
```

## Mettre en forme les sous-titres WebVTT

Les sous-titres WebVTT peuvent être mis en forme en ciblant les éléments correspondants avec le pseudo-élément [`::cue`](/fr/docs/Web/CSS/::cue).

### Avec le CSS du site

```css
video::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}

video::cue(b) {
  color: peachpuff;
}
```

Avec ce fragment CSS, tous les sous-titres des éléments vidéo utilisent un dégradé linéaire de gris comme arrière-plan et une couleur de premier plan `"papayawhip"`.  De plus, les textes mis en gras avec l'élément [`<b>`](/fr/docs/Web/HTML/Element/b) auront la couleur `"peachpuff"`.

Le fragment de HTML suivant s'occupe quant à lui de gérer l'affichage du média.

```html
<video controls autoplay src="video.webm">
 <track default src="track.vtt">
</video>
```

### Au sein du fichier WebVTT

La mise en forme peut également être définie directement dans le fichier WebVTT. Dans ce cas, on insère les règles CSS dans le fichier et chaque règle est précédée d'une ligne contenant la chaîne de caractères `STYLE`, comme illustré ici&nbsp;:

```plain
WEBVTT

STYLE
::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}
/* Les blocs de style ne peuvent pas avoir de lignes vides ou "tiret tiret chevron fermant". */

NOTE On peut utiliser des blocs de commentaires entre les blocs de style.

STYLE
::cue(b) {
  color: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- Coucou <b>monde</b>.

NOTE Les blocs de style ne peuvent pas apparaître après la première réplique.
```

On peut aussi utiliser des identifiants dans le fichier WebVTT. Ces derniers pourront être utilisés pour définir un style particulier pour certaines répliques données du fichier. Dans l'exemple suivant, on veut que le texte sur la transcription soit surligné en rouge et que les autres parties soient normales. Voici ce qu'on peut faire avec CSS, où on utilise les mêmes séquences d'échappement qu'au sein des pages HTML&nbsp;:

```plain
WEBVTT

1
00:00.000 --> 00:02.000
That's an, an, that's an L!

crédit de transcription
00:04.000 --> 00:05.000
Transcrit par Célestes™
```

```css
::cue(#\31) { color: lime; }
::cue(#crédit\ de\ transcription) { color: red; }
```

Le positionnement des pistes de texte est également pris en charge en incluant les informations de positionnement après l'horodatage, comme on peut le voir dans cet exemple (voir [les paramètres des répliques](#paramètres_des_répliques) pour plus d'informations)&nbsp;:

```plain
WEBVTT

00:00:00.000 --> 00:00:04.000 position:10%,line-left align:left size:35%
Where did he go?

00:00:03.000 --> 00:00:06.500 position:90% align:right size:35%
I think he went down this lane.

00:00:04.000 --> 00:00:06.500 position:45%,line-right align:center size:35%
What are you waiting for?
```

## WebVTT cues

Une réplique (<i lang="en">cue</i> en anglais) est un bloc de sous-titre distinct qui possède un temps de début, un temps de fin et un texte. Dans l'exemple n°6, on a un en-tête, une ligne vide, puis 5 répliques séparées par des lignes vides. Une réplique possède 5 composants&nbsp;:

- Un identifiant optionnel pour la réplique, suivi d'un saut de ligne.
- L'horodatage de la réplique.
- Des paramètres optionnels pour la réplique avec au moins un espace avant le premier paramètre et entre chaque paramètre.
- Un seul saut de ligne.
- Le texte de la réplique.

### Exemples 

#### Exemple n°7 — exemple de réplique

```plain
1 - Texte défilant introductif
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
Il y a bien longtemps, dans une galaxie lointaine, très lointaine…
```

### Identifiant de réplique

L'identifiant est un nom qui identifie la réplique. Il peut être utilisé pour faire référence à la réplique depuis un script. Un identifiant ne doit pas contenir de saut de ligne ni la chaîne de caractères `-->`. Il doit se terminer avec un seul saut de ligne. Les identifiants ne sont pas nécessairement uniques, même s'il est habituel de les numéroter (par exemple, 1, 2, 3…).

#### Exemple n°8 — identifiant de réplique de l'exemple n°7

```plain
1 - Texte défilant introductif
```

#### Exemple n°9 — utilisation habituelle des identifiants

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
Voici le premier sous-titre.

2
00:00:30.739 --> 00:00:34.074
Et là le deuxième.

3
00:00:34.159 --> 00:00:35.743
Ici le troisième.
```

### Horodatage des répliques

Un horodatage d'une réplique indique le moment où la réplique est affichée sur la vidéo. Il est composé d'un temps de début et d'un temps de fin. Le temps de fin doit être supérieur au temps de début et le temps de début doit être supérieur ou égal aux temps de début précédents. Les répliques peuvent avoir des horodatages qui se chevauchent.

Si le fichier est utilisé pour des chapitres (c'est-à-dire des éléments [`<track>`](/fr/docs/Web/HTML/Element/track) dont l'attribut [`kind`](/fr/docs/Web/HTML/Element/track#attr-kind) vaut `chapters`), le fichier ne pourra pas contenir de durées qui se chevauchent.

Chaque horodatage contient cinq composants&nbsp;:

- Une heure de début.
- Au moins un espace.
- La chaîne de caractères `-->`.
- Au moins un espace.
- Une heure de fin, qui doit être supérieure à l'heure de début.

Les heures doivent être dans l'un de ces formats&nbsp;:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Où&nbsp;:

- `hh` désigne les heures

  - Sur au moins deux chiffres.
  - Qui peuvent être supérieures à deux chiffres (par exemple `9999:00:00.000`).

- `mm` désigne les minutes

  - Comprises entre `00` et `59` (inclus).

- `ss` désigne les secondes.

  - Comprises entre `00` et `59` (inclus).

- `ttt` désigne les millisecondes.

  - Comprises entre `000` et `999` (inclus).

#### Exemple n°10 — exemples d'horodatages simples

```plain
00:00:22.230 --> 00:00:24.606
00:00:30.739 --> 00:00:34.074
00:00:34.159 --> 00:00:35.743
00:00:35.827 --> 00:00:40.122
```

#### Exemple n°11 — exemples d'horodatages qui se chevauchent

```plain
00:00:00.000 --> 00:00:10.000
00:00:05.000 --> 00:01:00.000
00:00:30.000 --> 00:00:50.000
```

#### Exemple n°12 — exemples d'horodatage qui ne se chevauchent pas

```plain
00:00:00.000 --> 00:00:10.000
00:00:10.000 --> 00:01:00.581
00:01:00.581 --> 00:02:00.100
00:02:01.000 --> 00:02:01.000
```

### Paramètres des répliques

Les paramètres de réplique sont des composants optionnels utilisés afin de positionner le texte affiché sur la vidéo. Cela comprend l'affichage horizontal ou vertical du texte. Il peut y avoir zéro ou plusieurs paramètres, qui peuvent être utilisés dans n'importe quel ordre tant que chaque paramètre n'est pas utilisé plus d'une fois.

Les paramètres sont ajoutés à droite de l'horodatage, après au moins un espace après l'horodatage. Il doit y avoir au moins un espace entre chaque paramètre. Le nom d'un paramètre et la valeur associée sont séparés par deux-points (`:`). Les paramètres sont sensibles à la casse et on utilisera donc les minuscules comme indiqué ici. Il existe cinq paramètres&nbsp;:

- **`vertical`**

  - Indique que le texte sera affiché verticalement et pas horizontalement, comme pour certaines langues asiatiques.

  <table>
    <thead>
      <tr>
        <th colspan="2">Tableau 1 - valeurs pour <code>vertical</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th><code>vertical:rl</code></th>
        <td>La direction d'écriture est de droite à gauche.</td>
      </tr>
      <tr>
        <th><code>vertical:lr</code></th>
        <td>La direction d'écriture est de gauche à droite.</td>
      </tr>
    </tbody>
  </table>

- **`line`**

  - Indique l'emplacement vertical du texte ou, si le paramètre `vertical` est défini, l'emplacement horizontal du texte.
  - La valeur peut être un numéro de ligne

    - La hauteur d'une ligne est la hauteur de la première ligne de la réplique telle qu'elle apparaît sur la vidéo.
    - Les nombres positifs indiquent un placement du haut vers le bas.
    - Les nombres négatifs indiquent un placement du bas vers le haut.

  - Ou un pourcentage

    - Ce doit alors être un entier (sans partie décimale) compris entre 0 et 100.
    - Qui doit être suivi du signe pourcentage (`%`).

  <table>
    <thead>
      <tr>
        <th colspan="4">Tableau 2 - exemples pour <code>line</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> omis</th>
        <th><code>vertical:rl</code></th>
        <th><code>vertical:lr</code></th>
      </tr>
      <tr>
        <th><code>line:0</code></th>
        <td>haut</td>
        <td>droite</td>
        <td>gauche</td>
      </tr>
      <tr>
        <th><code>line:-1</code></th>
        <td>bas</td>
        <td>gauche</td>
        <td>droite</td>
      </tr>
      <tr>
        <th><code>line:0%</code></th>
        <td>haut</td>
        <td>droite</td>
        <td>gauche</td>
      </tr>
      <tr>
        <th><code>line:100%</code></th>
        <td>bas</td>
        <td>gauche</td>
        <td>droite</td>
      </tr>
    </tbody>
  </table>

- **`position`**

  - Indique l'emplacement horizontal du texte, ou, si `vertical` est utilisé, l'emplacement vertical du texte.
  - Sa valeur est un pourcentage.
  - Ce doit être un entier, sans partie décimale, compris entre 0 et 100 (inclus).
  - Qui doit être suivi du signe pourcentage (`%`).

  <table>
    <thead>
      <tr>
        <th colspan="4">Tableau 3 - exemples pour <code>position</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> omis</th>
        <th><code>vertical:rl</code></th>
        <th><code>vertical:lr</code></th>
      </tr>
      <tr>
        <th><code>position:0%</code></th>
        <td>gauche</td>
        <td>haut</td>
        <td>haut</td>
      </tr>
      <tr>
        <th><code>position:100%</code></th>
        <td>droite</td>
        <td>bas</td>
        <td>bas</td>
      </tr>
    </tbody>
  </table>

- **`size`**

  - Indique la largeur de la zone de texte, ou, si `vertical` est utilisé, la hauteur de la zone de texte.
  - Sa valeur est un pourcentage.
  - Ce doit être un entier, sans partie décimale, compris entre 0 et 100 (inclus).
  - Qui doit être suivi du signe pourcentage (`%`).

  <table>
    <thead>
      <tr>
        <th colspan="4">Tableau 4 - exemples pour <code>size</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> omis</th>
        <th><code>vertical:rl</code></th>
        <th><code>vertical:lr</code></th>
      </tr>
      <tr>
        <th><code>size:100%</code></th>
        <td>toute la largeur</td>
        <td>toute la hauteur</td>
        <td>toute la hauteur</td>
      </tr>
      <tr>
        <th><code>size:50%</code></th>
        <td>la moitié de la largeur</td>
        <td>la moitié de la hauteur</td>
        <td>la moitié de la hauteur</td>
      </tr>
    </tbody>
  </table>

- **`align`**

  - Définit l'alignement du texte. Le texte est aligné au sein de l'espace délimité par le paramètre `size` s'il est utilisé.

  <table>
    <thead>
      <tr>
        <th colspan="4">Tableau 5 - exemples pour <code>align</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> omis</th>
        <th><code>vertical:rl</code></th>
        <th><code>vertical:lr</code></th>
      </tr>
      <tr>
        <th><code>align:start</code></th>
        <td>gauche</td>
        <td>haut</td>
        <td>haut</td>
      </tr>
      <tr>
        <th><code>align:center</code></th>
        <td>centré horizontalement</td>
        <td>centré verticalement</td>
        <td>centré verticalement</td>
      </tr>
      <tr>
        <th><code>align:end</code></th>
        <td>droite</td>
        <td>bas</td>
        <td>bas</td>
      </tr>
    </tbody>
  </table>

#### Exemple n°13 — exemples de paramètres de réplique

La première ligne illustre l'absence de paramètre. La seconde ligne illustre ce qu'on pourrait faire pour afficher le texte sur un panneau ou une étiquette à l'écran. La troisième ligne pourrait être utilisée pour un titre. La dernière ligne pourrait être utilisée pour du texte d'une langue asiatique.

```plain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
```

### Charge utile (texte) d'une réplique

La charge utile d'une réplique contient l'information principale. En règle générale, il s'agit des sous-titres à afficher. Cette charge utile peut contenir des sauts de ligne mais pas de ligne vide (ce qui équivaut à deux sauts de ligne successifs). Une ligne vide indique la fin d'une réplique.

La charge utile d'une réplique ne peut pas contenir la chaîne de caractères `-->`, une esperluette (`&`), ou un chevron ouvrant (`<`). Il faudra à la place utiliser les entités correspondantes pour les échapper&nbsp;: `&amp;` pour l'esperluette et `&lt;` pour le chevron. Il est recommandé de faire de même pour le chevron fermant (c'est-à-dire d'utiliser `&gt;` plutôt que `>`) pour éviter toute confusion avec les balises. Dans le cas où le fichier WebVTT est utilisé pour des métadonnées, ces restrictions ne s'appliquent pas.

En plus des trois échappements décrits ci-avant, il existe quatre autres échappements qui sont décrits dans le tableau suivant.

<table>
  <thead>
    <tr>
      <th colspan="3">Tableau 6 - séquences d'échappement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nom</th>
      <th>Caractère</th>
      <th>Séquence d'échappement</th>
    </tr>
    <tr>
      <td>Esperluette</td>
      <td>&#x26;</td>
      <td><code>&#x26;amp;</code></td>
    </tr>
    <tr>
      <td>Chevron ouvrant</td>
      <td>&#x3C;</td>
      <td><code>&#x26;lt;</code></td>
    </tr>
    <tr>
      <td>Chevron fermant</td>
      <td>></td>
      <td><code>&#x26;gt;</code></td>
    </tr>
    <tr>
      <td>Marque gauche-à-droite</td>
      <td></td>
      <td><code>&#x26;lrm;</code></td>
    </tr>
    <tr>
      <td>Marque droite-à-gauche</td>
      <td></td>
      <td><code>&#x26;rlm;</code></td>
    </tr>
    <tr>
      <td>Espace insécable</td>
      <td><code>&nbsp;</code></td>
      <td><code>&#x26;nbsp;</code></td>
    </tr>
  </tbody>
</table>

### Balises pour les textes des répliques

Il existe plusieurs balises, telles que `<bold>`, qui peuvent être utilisées. Toutefois, si le fichier WebVTT est utilisé dans un élément [`<track>`](/fr/docs/Web/HTML/Element/track) dont l'attribut [`kind`](/fr/docs/Web/HTML/Element/track#attr-kind) vaut `chapters`, les balises ne pourront pas être utilisées.

- **Balise d'horodatage**

  - L'horodatage porté par cette balise doit être supérieur à celui du début de la réplique, supérieur aux horodatages des balises précédentes pour cette réplique, et inférieur à l'horodatage de fin. Le *texte actif* correspond au texte situé entre l'horodatage et le prochain horodatage (ou l'horodatage de fin de la réplique s'il n'y en a plus d'autres). Tout texte situé avant le *texte actif* correspondra à du *texte précédent*. Tout texte situé après le *texte actif* correspondra à du *texte futur*. Cela permet de représenter des sous-titres comme ceux utilisés au karaoké.

  #### Exemple n°14 — texte de karaoké

  ```plain
  1
  00:16.500 --> 00:18.500
  When the moon <00:17.500>hits your eye

  1
  00:00:18.500 --> 00:00:20.500
  Like a <00:19.000>big-a <00:19.500>pizza <00:20.000>pie

  1
  00:00:20.500 --> 00:00:21.500
  That's <00:00:21.000>amore
  ```

Les balises suivantes sont des balises qui sont autorisées au sein d'une réplique et pour lesquelles il faut avoir la balise ouvrante et la balise fermante (par exemple `<b>texte</b>`).

- **Balise de classe** (`<c></c>`)

  - Permet la mise en forme du texte contenu en ciblant la classe avec CSS.

  #### Exemple n°15 — balise de classe

  ```html
  <c.nomclasse>texte</c>
  ```

- **Balise d'italique** (`<i></i>`)

  - Met en italique le texte contenu.

  #### Exemple n°16 — balise d'italique

  ```html
  <i>texte</i>
  ```

- **Balise de gras** (`<b></b>`)

  - Met en gras le texte contenu.

  #### Exemple n°17 — balise de gras

  ```html
  <b>texte</b>
  ```

- **Balise de soulignement** (`<u></u>`)

  - Souligne le texte contenu

  #### Exemple n°18 — balise de soulignement

  ```html
  <u>texte</u>
  ```

- **Balise ruby** (`<ruby></ruby>`)

  - Utilisée avec les balises de texte ruby afin d'afficher les [annotations ruby](https://fr.wikipedia.org/wiki/Ruby_(linguistique)) (des caractères d'annotation situés au-dessus des autres caractères).

  ##### Exemple n°19 — balise ruby

  ```html
  <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
  ```

- **Balise de texte ruby** (`<rt></rt>`)

  - Utilisée avec les balises ruby afin d'afficher les [annotations ruby](https://fr.wikipedia.org/wiki/Ruby_(linguistique)) (des caractères d'annotation situés au-dessus des autres caractères).

  ##### Exemple n°20 — balise de texte ruby

  ```html
  <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
  ```

- **Balise de voix** (`<v></v>`)

  - Semblable à la balise de classe, permet également le ciblage à l'aide de CSS pour la mise en forme du texte.

  ##### Exemple n°21 — balise de voix

  ```html
  <v Bob>texte</v>
  ```

## Méthodes et propriétés

Les méthodes utilisées en WebVTT sont celles utilisées pour modifier la réplique ou la région, les attributs des deux interfaces étant différents. On peut les catégoriser distinctement afin de mieux comprendre les rôles respectifs de ces interfaces pour WebVTT&nbsp;:

### `VTTCue`

Les méthodes disponibles avec cette interface sont&nbsp;:

- `GetCueAsHTML()` qui permet d'obtenir le code HTML de la réplique.
- `VTTCue()`, le constructeur qui permet de créer de nouveaux objets.
- `Autokeyword()`.
- `DirectionSetting()` qui définit la direction de la légende ou du texte d'un fichier.
- `LineAlignment()` qui ajuste l'alignement de la ligne.
- `PositionAlignSetting()` qui ajuste la position du texte.

### `VTTRegion`

Les méthodes utilisées pour les régions sont&nbsp;:

- `ScrollSetting()` qui permet d'ajuster le paramètre de défilement pour tous les nœuds présents dans une région donnée.
- `VTTRegion()`, le constructeur qui permet de créer de nouveaux objets.

## Tutoriel pour l'écriture d'un fichier WebVTT

En plusieurs étapes, il est possible d'écrire un fichier WebVTT simple. Pour commencer, il suffit d'avoir un éditeur de texte et d'enregistrer le fichier en utilisant l'extension '.vtt'. Voici comment procéder&nbsp;:

1. Ouvrir un éditeur de texte.
2. La première ligne d'un fichier WebVTT est standardisée et on écrira donc ce qui suit sur la toute première ligne&nbsp;:

    ```plain
    WEBVTT
    ```

3. La deuxième ligne est vide et à la troisième ligne, on indique le moment où la première réplique doit être affichée. Ainsi, si la première réplique doit s'afficher après 1 seconde et disparaître après 5 secondes de vidéo, on écrira&nbsp;:

    ```plain
    00:01.000 --> 00:05.000
    ```

4. Su la ligne suivante, on écrit le texte correspondant (qui sera donc affiché entre la première et la cinquième seconde, incluses).
5. En répétant les étapes 3 et 4, on pourra ainsi composer un fichier WebVTT complet pour un fichier audio ou vidéo.

## Pseudo-classes CSS

Les pseudo-classes CSS permettent de classer le type d'un objet à différencier d'un autre type d'objet. Elles fonctionnent de façon similaire entre les fichiers WebVTT et les fichiers HTML.

WebVTT permet d'utiliser les fonctionnalités de localisation et les classes comme on peut le faire en HTML et CSS afin de classifier la mise en forme d'un certain type d'objet, comme on peut le voir dans cet exemple&nbsp;:

```plain
WEBVTT

04:02.500 --> 04:05.000
J'ai commencé le basket à l'âge de 13, 14 ans

04:05.001 --> 04:07.800
Sur les <i.foreignphrase><lang en>playground</lang></i>, ici à Montpellier
```

Dans l'exemple précédent, on peut voir l'utilisation d'un identifiant et d'un nom de pseudo-classe pour indiquer la langue d'une réplique et la balise `<i>` utilisée pour l'italique.

Le type de pseudo-classe est déterminé par le sélecteur utilisé et fonctionne de façon analogue à ce qu'on peut voir en HTML. Les pseudo-classes CSS suivantes peuvent être utilisées&nbsp;:

- `lang` (par exemple `p:lang(it)`)
- `link` (par exemple `a:link`)
- `nth-last-child` (par exemple `p:nth-last-child(2)`)
- `nth-child` (par exemple `p:nth-child(2)`)

Où `p` et `a` sont les balises utilisées en HTML pour représenter les paragraphes et les liens en HTML. Dans un contexte WebVTT, on pourra les remplacer dans ces exemples par des identifiants de réplique.

## Spécifications

| Spécification                                                                  |
| ------------------------------------------------------------------------------ |
| [WebVTT&nbsp;: le format Web Video Text Tracks](https://w3c.github.io/webvtt/) |

## Compatibilité des navigateurs

### Interface `VTTCue`

{{Compat("api.VTTCue", 0)}}

### Interface `TextTrack`

{{Compat("api.TextTrack", 0)}}

### Notes

Avant Firefox 50, l'énumération `AlignSetting` (correspondant aux valeurs possibles de [`VTTCue.align`](/fr/docs/Web/API/VTTCue/align)) incluait par erreur la valeur `"middle"` au lieu de `"center"`. Ceci a été corrigé.

WebVTT a été implémenté par Firefox 24 derrière la préférence `media.webvtt.enabled`, qui était désactivée par défaut. Cette fonctionnalité pouvait être activée en passant la préférence à `true`. WebVTT est activé par défaut à partir de Firefox 31 et peut être désactivé en passant la valeur de la préférence à `false`.

Avant Firefox 58, le mot-clé `REGION` créait des objets [`VTTRegion`](/fr/docs/Web/API/VTTRegion), mais qui n'étaient pas utilisés. Firefox 58 prend complètement en charge `VTTRegion` et son utilisation&nbsp;; toutefois cette fonctionnalité est désactivée par défaut derrière la préférence `media.webvtt.regions.enabled` qu'il faut passer à `true` pour l'activer avec Firefox 58. Les régions sont activées par défaut à partir de Firefox 59 (voir les bugs [1338030](https://bugzilla.mozilla.org/show_bug.cgi?id=1338030) et [1415805](https://bugzilla.mozilla.org/show_bug.cgi?id=1415805)).
