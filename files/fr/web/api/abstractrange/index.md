---
title: AbstractRange
slug: Web/API/AbstractRange
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("DOM")}}

L'interface abstraite **`AbstractRange`** est la classe de base sur laquelle tous les types de plages {{Glossary("DOM")}} sont définis. Une **plage** est un objet qui indique les points de début et de fin d'une section de contenu dans le document.

> [!NOTE]
> En tant qu'interface abstraite, vous ne créez pas directement un objet de type `AbstractRange`. À la place, vous utilisez les interfaces {{DOMxRef("Range")}} ou {{DOMxRef("StaticRange")}}. Pour comprendre la différence entre ces deux interfaces et comment choisir celle qui convient à vos besoins, consultez la documentation de chaque interface.

{{InheritanceDiagram}}

## Propriétés d'instance

- {{DOMxRef("AbstractRange.collapsed", "collapsed")}} {{ReadOnlyInline}}
  - : Une valeur booléenne qui est `true` si la plage est _réduite_. Une plage réduite est une plage dont la position de début et la position de fin sont les mêmes, ce qui donne une plage de longueur zéro.
- {{DOMxRef("AbstractRange.endContainer", "endContainer")}} {{ReadOnlyInline}}
  - : L'objet {{DOMxRef("Node")}} dans lequel se trouve la fin de la plage, telle que définie par la propriété `endOffset`.
- {{DOMxRef("AbstractRange.endOffset", "endOffset")}} {{ReadOnlyInline}}
  - : Une valeur entière indiquant le décalage, en caractères, depuis le début du contenu du nœud jusqu'au dernier caractère de la plage représentée par l'objet de plage. Cette valeur doit être inférieure à la longueur du nœud `endContainer`.
- {{DOMxRef("AbstractRange.startContainer", "startContainer")}} {{ReadOnlyInline}}
  - : L'objet DOM {{DOMxRef("Node")}} dans lequel se trouve le début de la plage, telle que définie par la propriété `startOffset`.
- {{DOMxRef("AbstractRange.startOffset", "startOffset")}} {{ReadOnlyInline}}
  - : Une valeur entière indiquant le décalage, en caractères, depuis le début du contenu du nœud jusqu'au premier caractère du contenu référencé par l'objet de plage. Cette valeur doit être inférieure à la longueur du nœud indiqué dans `startContainer`.

## Méthodes d'instance

_L'interface `AbstractRange` ne fournit aucune méthode._

## Notes d'utilisation

### Types de plage

Toutes les plages de contenu au sein d'un {{DOMxRef("Document", "document")}} sont décrites à l'aide d'instances d'interfaces basées sur `AbstractRange`. Il existe deux telles interfaces&nbsp;:

- {{DOMxRef("Range")}}
  - : L'interface `Range` existe depuis longtemps et n'a été redéfinie que récemment pour être basée sur `AbstractRange`, lorsque le besoin est apparu de définir d'autres formes de données de plage. `Range` fournit des méthodes permettant de modifier les points de terminaison de la plage, ainsi que des méthodes pour comparer des plages, détecter des intersections entre des plages, et ainsi de suite.
- {{DOMxRef("StaticRange")}}
  - : L'interface `StaticRange` est une plage de base qui ne peut pas être modifiée une fois créée. Plus précisément, à mesure que l'arborescence des nœuds mute et change, la plage ne change pas. C'est utile lorsque vous devez définir une plage qui n'est utilisée qu'une seule fois, car cela évite l'impact sur les performances et les ressources de l'interface plus complexe {{DOMxRef("Range")}}.

### Contenu des éléments

Lorsque vous essayez d'accéder au contenu d'un élément, gardez à l'esprit que l'élément lui-même est un nœud, mais qu'il en va de même pour tout texte qu'il contient. Pour définir un point de terminaison de plage à l'intérieur du texte d'un élément, assurez-vous de trouver le nœud de texte à l'intérieur de l'élément&nbsp;:

```js
const elemDebut = document.querySelector("p");
const elemFin = elemDebut.querySelector("span");
const plage = document.createRange();

plage.setStart(elemDebut, 0);
plage.setEnd(elemFin, elemFin.childNodes[0].length / 2);
const contenus = plage.cloneContents();

document.body.appendChild(contenus);
```

Cet exemple crée une nouvelle plage `plage`, et définit son point de départ au troisième nœud enfant du premier élément. Le point de terminaison est défini pour être au milieu du premier enfant de la portée (<i lang="en">span</i> en anglais), puis la plage est utilisée pour copier le contenu de la plage.

### Les plages et la hiérarchie du DOM

Pour définir une plage de caractères dans un document de manière à ce qu'elle puisse s'étendre sur zéro ou plusieurs limites de nœuds, et qu'elle soit aussi résiliente que possible aux changements du DOM, vous ne pouvez pas définir le décalage des premiers et derniers caractères dans le {{Glossary("HTML")}}. Il y a plusieurs bonnes raisons à cela.

Tout d'abord, après le chargement de votre page, le navigateur ne pense pas en termes de HTML. Une fois chargée, la page est un arbre d'objets DOM {{DOMxRef("Node")}}, vous devez donc définir les emplacements de début et de fin d'une plage en termes de nœuds et de positions à l'intérieur des nœuds.

Deuxièmement, afin de prendre en charge la mutabilité de l'arbre DOM autant que possible, vous avez besoin d'un moyen de représenter les positions relatives aux nœuds dans l'arbre, plutôt que des positions globales dans l'ensemble du document. En définissant des points dans le document comme des décalages à l'intérieur d'un nœud donné, ces positions restent cohérentes avec le contenu même lorsque des nœuds sont ajoutés, supprimés ou déplacés dans l'arbre DOM (dans une certaine mesure). Il existe des limitations assez évidentes (par exemple, si un nœud est déplacé pour se trouver après le point final d'une plage, ou si le contenu d'un nœud est fortement modifié), mais c'est bien mieux que rien.

Troisièmement, utiliser des positions relatives aux nœuds pour définir les positions de début et de fin est généralement plus facile à optimiser en termes de performance. Plutôt que de devoir parcourir le DOM pour déterminer à quoi correspond votre décalage global, {{Glossary("user agent", "l'agent utilisateur")}} (navigateur) peut aller directement au nœud indiqué par la position de départ et commencer à partir de là, en avançant jusqu'à atteindre le décalage donné dans le nœud de fin.

Pour illustrer cela, considérez le HTML ci-dessous&nbsp;:

```html
<div class="conteneur">
  <div class="entete">
    <img src="..." alt="" class="logosite" />
    <h1>Le Site Ultime</h1>
  </div>
  <article>
    <section class="entree" id="entree1">
      <h2>Section 1&nbsp;: Une chose intéressante…</h2>
      <p>
        Une <em>très</em> chose intéressante s'est produite en chemin vers le
        forum…
      </p>
      <aside class="apropos">
        <h2>À propos</h2>
        <p>Une chose intéressante à partager avec vous…</p>
      </aside>
    </section>
  </article>
  <pre id="journal"></pre>
</div>
```

Après avoir chargé le HTML et construit la représentation DOM du document, l'arbre DOM résultant ressemble à ceci&nbsp;:

![Diagramme du DOM pour une page web simple](simpledom.svg)

Dans ce diagramme, les nœuds représentant les éléments HTML sont affichés en vert. Chaque ligne en dessous montre le niveau de profondeur suivant dans l'arbre DOM. Les nœuds bleus sont des nœuds de texte, contenant le texte qui s'affiche à l'écran. Le contenu de chaque élément est lié en dessous dans l'arbre, pouvant potentiellement générer une série de branches en dessous à mesure que les éléments incluent d'autres éléments et nœuds de texte.

Si vous souhaitez créer une plage qui inclut le contenu de l'élément HTML {{HTMLElement("p")}} dont le contenu est `"Une <em>très</em> chose intéressante s'est produite en chemin vers le forum…"`, vous pouvez le faire comme ceci&nbsp;:

```js
const pRange = document.createRange();
pRange.selectNodeContents(document.querySelector("#entree1 p"));
```

Comme nous souhaitons sélectionner l'intégralité du contenu de l'élément `<p>`, y compris ses descendants, cela fonctionne parfaitement.

Si nous souhaitons plutôt copier le texte «&nbsp;Une chose intéressante…&nbsp;» depuis le titre de la {{HTMLElement("section")}} (un élément HTML `{{HTMLElement("Heading_Elements", "&lt;h2&gt;")}}`) jusqu'à la fin des lettres «&nbsp;très&nbsp;» dans l'élément {{HTMLElement("em")}} à l'intérieur du paragraphe ci-dessous, le code suivant fonctionne&nbsp;:

```js
const plage = document.createRange();
const noeudDebut = document.querySelector("section h2").childNodes[0];
plage.setStart(noeudDebut, 11);

const noeudFin = document.querySelector("#entry1 p em").childNodes[0];
plage.setEnd(noeudFin, 2);

const fragment = plage.cloneContents();
```

C'est là qu'un problème intéressant se pose — nous récupérons du contenu provenant de plusieurs nœuds situés à différents niveaux de la hiérarchie DOM, puis seulement une partie de l'un d'entre eux. À quoi doit ressembler le résultat&nbsp;?

Il se trouve que la spécification DOM traite heureusement ce problème exact. Par exemple, dans ce cas, nous appelons {{DOMxRef("Range.cloneContents", "cloneContents()")}} sur la plage pour créer un nouvel objet {{DOMxRef("DocumentFragment")}} fournissant un sous-arbre DOM qui reproduit le contenu de la plage définie. Pour ce faire, `cloneContents()` construit tous les nœuds nécessaires pour préserver la structure de la plage indiquée, mais pas plus que nécessaire.

Dans cet exemple, le début de la plage définie se trouve dans le nœud de texte sous le titre de la section, ce qui signifie que le nouveau `DocumentFragment` doit contenir un `{{HTMLElement("Heading_Elements", "&lt;h2&gt;")}}` et, en dessous, un nœud de texte.

La fin de la plage se trouve sous l'élément {{HTMLElement("p")}}, donc c'est nécessaire dans le nouveau fragment. Il en est de même pour le nœud de texte contenant le mot «&nbsp;A&nbsp;», puisque c'est inclus dans la plage. Enfin, un `<em>` et un nœud de texte en dessous sont ajoutés sous le `<p>` également.

Le contenu des nœuds de texte est ensuite déterminé par les décalages dans ces nœuds de texte donnés lors de l'appel à {{DOMxRef("Range.setStart", "setStart()")}} et {{DOMxRef("Range.setEnd", "setEnd()")}}. Étant donné le décalage de 11 dans le texte du titre, ce nœud contient «&nbsp;Une chose intéressante…&nbsp;». De même, le dernier nœud de texte contient «&nbsp;très&nbsp;», étant donné la demande pour les deux premiers caractères du nœud de fin.

Le fragment de document résultant ressemble à ceci&nbsp;:

![Un DocumentFragment représentant le contenu cloné](dom-fragment.svg)

Notez surtout que le contenu de ce fragment se trouve entièrement _sous_ le parent commun des nœuds les plus élevés qu'il contient. Le parent `<section>` n'est pas nécessaire pour reproduire le contenu cloné, il n'est donc pas inclus.

## Exemples

Considérons ce fragment HTML simple.

```html
<p><strong>Ceci</strong> est un paragraphe.</p>
```

Imaginons utiliser un {{DOMxRef("Range")}} pour extraire le mot «&nbsp;paragraphe&nbsp;» de ceci. Le code pour le faire ressemble à ce qui suit&nbsp;:

```js
const noeudPara = document.querySelector("p");
const noeudTextePara = noeudPara.childNodes[1];

const plage = document.createRange();
plage.setStart(noeudTextePara, 8);
plage.setEnd(noeudTextePara, noeudTextePara.length - 1);

const fragment = plage.cloneContents();
document.body.appendChild(fragment);
```

Tout d'abord, nous obtenons des références au nœud de paragraphe lui-même ainsi qu'au _deuxième_ nœud enfant à l'intérieur du paragraphe. Le premier enfant est l'élément HTML {{HTMLElement("strong")}}. Le deuxième enfant est le nœud de texte «&nbsp; est un paragraphe.&nbsp;».

Avec la référence au nœud de texte en main, nous créons un nouvel objet `Range` en appelant {{DOMxRef("Document.createRange", "createRange()")}} sur le `Document` lui-même. Nous définissons la position de départ de la plage au sixième caractère de la chaîne de caractères du nœud de texte, et la position de fin à la longueur de la chaîne de caractères du nœud de texte moins un. Cela définit la plage pour englober le mot «&nbsp;paragraphe&nbsp;».

Nous terminons ensuite en appelant {{DOMxRef("Range.cloneContents", "cloneContents()")}} sur la `Range` pour créer un nouvel objet {{DOMxRef("DocumentFragment")}} qui contient la portion du document englobée par la plage. Après cela, nous utilisons {{DOMxRef("Node.appendChild", "appendChild()")}} pour ajouter ce fragment à la fin du corps du document, tel qu'obtenu à partir de {{DOMxRef("document.body")}}.

Le résultat ressemble à ceci&nbsp;:

{{EmbedLiveSample("Exemple", 600, 80)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
