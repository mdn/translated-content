---
title: Libellés et noms textuels
slug: Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Il existe de nombreuses situations où un contrôle, une boîte de dialogue ou une autre fonctionnalité d'un site web doit recevoir un nom ou un libellé descriptif afin que les utilisateur·ice·s de technologies d'assistance comprennent son but et sachent comment l'utiliser. Il existe plusieurs types de problèmes dans cette catégorie, selon le contexte, chacun ayant sa propre solution. Les différents problèmes et solutions sont présentés dans les sections ci-dessous.

## Utiliser l'attribut `alt` pour décrire les éléments `area` ayant l'attribut `href`

Dans les images réactives (<i lang="en">image maps</i> en anglais), donnez à chaque élément HTML {{htmlelement("area")}} un attribut `alt` contenant un nom qui décrit la ressource vers laquelle la zone mène. Ne pas le faire rend l'image réactive difficile à utiliser pour les utilisateur·ice·s de technologies d'assistance&nbsp;: ils·elles ont besoin d'un texte alternatif pour comprendre le but de l'image.

### Exemples

L'exemple suivant montre une image réactive (tirée de [H24&nbsp;: Fournir des alternatives textuelles pour les éléments area des images réactives <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/H24.html))&nbsp;:

```html
<img
  src="welcome.gif"
  usemap="#map1"
  alt="Zones dans la bibliothèque. Sélectionnez une zone pour plus
       d'informations sur cette zone." />
<map id="map1" name="map1">
  <area shape="rect" coords="0,0,30,30" href="reference.html" alt="Référence" />
  <area
    shape="rect"
    coords="34,34,100,100"
    href="media.html"
    alt="Laboratoire audio-visuel" />
</map>
```

Consultez la [page de référence de l'élément HTML `<area>`](/fr/docs/Web/HTML/Reference/Elements/area) pour un exemple interactif en direct.

### Voir aussi

- L'élément HTML {{htmlelement("area")}}
- [H24&nbsp;: Fournir des alternatives textuelles pour les éléments area des images réactives <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Les boîtes de dialogue doivent être étiquetées

Pour tout conteneur dont le contenu agit comme une boîte de dialogue (par exemple, une boîte de dialogue modale demandant à l'utilisateur·ice de faire un choix ou de répondre à une action), donnez-lui un libellé ou un nom descriptif, afin que les utilisateur·ice·s de technologies d'assistance puissent facilement découvrir son but.

Une boîte de dialogue est généralement indiquée par un ARIA [`role="dialog"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) ou [`role="alertdialog"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)&nbsp;; vous pouvez utiliser les attributs [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) pour fournir un libellé.

### Exemples

L'exemple suivant montre une boîte de dialogue, définie comme telle avec `role="dialog"` et étiquetée à l'aide de `aria-labelledby`.

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">
    Vos informations personnelles ont été mises à jour avec succès
  </h2>
  <p id="dialog1Desc">
    Vous pouvez modifier vos informations à tout moment dans la section compte
    utilisateur.
  </p>
  <button>Fermer</button>
</div>
```

Si la boîte de dialogue n'a pas d'en-tête, vous pouvez utiliser `aria-label` pour contenir le texte du libellé&nbsp;:

```html
<div
  role="dialog"
  aria-label="Confirmation de mise à jour des informations personnelles">
  <p>
    Vos informations personnelles ont été mises à jour avec succès. Vous pouvez
    modifier vos informations à tout moment dans la section compte utilisateur.
  </p>
  <button>Fermer</button>
</div>
```

### Voir aussi

- [`role="dialog"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [`role="alertdialog"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Pratiques d'écriture de boîtes de dialogue <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Les documents doivent avoir un titre

Il est important que chaque document HTML inclue un élément {{htmlelement("title")}} qui décrit le but de la page. Une technique de navigation courante pour les utilisateur·ice·s de technologies d'assistance consiste à déduire le contenu d'une page en lisant son titre. Si le titre n'est pas disponible, ils·elles doivent parcourir la page pour en déterminer le contenu, ce qui peut être long et source de confusion.

### Exemples

Le titre de l'article de référence sur l'élément {{htmlelement("title")}} est le suivant&nbsp;:

```html
<title>
  &lt;title&gt;&nbsp;: Élément de titre du document - HTML&nbsp;: Hypertext
  Markup Language | MDN
</title>
```

Un autre exemple pourrait ressembler à ceci&nbsp;:

```html
<title>Renseignez vos informations pour vous inscrire — services monGouv</title>
```

Pour aider l'utilisateur·ice, vous pouvez mettre à jour la valeur du titre de la page pour refléter des changements d'état importants (comme des problèmes de validation de formulaire)&nbsp;:

```html
<title>
  2 erreurs — Renseignez vos informations pour vous inscrire — services monGouv
</title>
```

### Voir aussi

- L'élément HTML {{htmlelement("title")}}

## Le contenu embarqué doit être étiqueté

Assurez-vous que les éléments qui intègrent du contenu possèdent un attribut [title](/fr/docs/Web/HTML/Reference/Global_attributes/title) qui décrit le contenu embarqué. Cela inclut les éléments {{htmlelement("embed")}} et {{htmlelement("object")}}, souvent utilisés pour du contenu graphique, tout comme l'élément {{HTMLelement("img")}}. Un titre descriptif aide les utilisateur·ice·s de technologies d'assistance à comprendre ce que l'élément affiche.

## Les figures avec légende optionnelle doivent être étiquetées

Pour une meilleure accessibilité, incluez un élément {{HTMLElement("figcaption")}} dans un élément {{HTMLElement("figure")}}, même si cela reste techniquement optionnel. La légende s'ajoute à tout texte alternatif sur les images de la figure. Elle décrit le but de la figure dans le document, ce qui peut différer d'une description purement visuelle, comme celle fournie par le texte alternatif.

### Exemple

L'exemple suivant montre le code d'une figure avec une légende. L'attribut `alt` de {{htmlelement("img")}} décrit l'apparence de l'image&nbsp;; {{htmlelement("figcaption")}} la décrit d'un point de vue fonctionnel (ici, le nom latin de la fleur illustrée).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Photo en noir et blanc en gros plan de fleurs d'asclépiade" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Les éléments `fieldset` doivent être étiquetés

Les éléments fieldset doivent avoir une description textuelle, comme les autres éléments de formulaire. Utilisez l'élément {{htmlelement("legend")}} pour décrire le but d'un fieldset.

## Utiliser une légende pour étiqueter un `fieldset`

Lorsque vous regroupez un ensemble de champs de formulaire avec un élément {{htmlelement("fieldset")}}, incluez un élément {{htmlelement("legend")}} imbriqué à l'intérieur, contenant une description claire du groupe.

Les utilisateur·ice·s de technologies d'assistance trouvent cette description utile pour comprendre le but global du groupe. Sans la légende, ils·elles devraient parcourir chaque champ pour en déduire l'objectif, ce qui pourrait entraîner de la confusion.

### Exemples

```html
<form>
  <fieldset>
    <legend>Choisissez votre monstre préféré</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

Vous pouvez voir une version interactive de cet exemple sur la [page de référence de l'élément HTML `<fieldset>`](/fr/docs/Web/HTML/Reference/Elements/fieldset).

### Voir aussi

- L'élément HTML {{htmlelement("fieldset")}}
- L'élément HTML {{htmlelement("legend")}}

## Les éléments de formulaire doivent être étiquetés

Tous les éléments d'un formulaire doivent avoir un {{htmlelement("label")}} qui identifie leur but. Cela s'applique à tous les types de {{htmlelement("input")}}, ainsi qu'aux éléments {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} et {{htmlelement("meter")}}, ainsi qu'à tout élément avec le rôle ARIA [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role).

L'élément de formulaire peut être placé à l'intérieur du {{htmlelement("label")}}, auquel cas l'association est évidente. Sinon, vous pouvez associer un {{htmlelement("label")}} à un élément de formulaire en spécifiant la valeur de l'attribut `id` de l'élément comme valeur de l'attribut `for` du label.

### Exemple

```html
<label
  >J'accepte les conditions générales.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="email-opt-in" name="opt-in" />
<label for="email-opt-in"
  >Oui, je souhaite recevoir des informations sur ce produit.</label
>
```

## Les éléments de formulaire doivent avoir un libellé textuel visible

En plus d'avoir un élément HTML {{htmlelement("label")}} pour chaque élément de formulaire, ces libellés doivent être visibles, pas cachés. Les libellés visibles aident _tous_ les utilisateur·ice·s à comprendre le but d'un champ. Ne vous fiez pas au texte d'espace réservé (<i lang="en">placeholder</i> en anglais), car il disparaît dès que l'utilisateur·ice commence à saisir.

## Les éléments de type `frame` doivent être étiquetés

Les éléments frame, qu'il s'agisse de {{htmlelement("iframe")}} ou de l'ancien {{htmlelement("frame")}}, doivent avoir un titre pour décrire leur contenu. Utilisez l'attribut `title` pour étiqueter un élément frame. Sans titre, les utilisateur·ice·s de technologies d'assistance doivent naviguer dans le cadre pour comprendre son contenu, ce qui peut être difficile et source de confusion.

L'élément {{HTMLElement('frame')}} ne fait plus partie de la spécification HTML. Son support pourrait être supprimé par les navigateurs à l'avenir. De plus, il est difficile pour les lecteurs d'écran de naviguer dans des pages utilisant des frames. Pour une meilleure accessibilité et maintenance, refondez toute page utilisant des frames pour utiliser du CSS à la place.

Par bonne pratique, fournissez aussi un {{htmlelement("title")}} pour le document inclus dans le frame, avec un contenu identique à l'attribut `title` du frame (si le document vous appartient&nbsp;; sinon, essayez d'harmoniser les titres). Certains lecteurs d'écran remplacent le contenu de l'attribut `title` par celui du document inclus. Il est donc plus sûr et accessible de fournir le même titre aux deux endroits.

### Exemple

```html
<iframe
  title="MDN Web docs"
  width="300"
  height="200"
  src="https://developer.mozilla.org">
</iframe>
```

## Les titres doivent être étiquetés

Assurez-vous que vos titres contiennent du texte non vide et ne sont pas masqués (par exemple avec CSS `display:none` ou `aria-hidden=true`). Les utilisateur·ice·s de lecteurs d'écran s'appuient sur les titres pour comprendre la structure et le contenu d'un document.

Veillez aussi à n'utiliser les [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) que pour de véritables titres de section, et non comme raccourci pour mettre du texte en valeur. Les utilisateur·ice·s de lecteurs d'écran «&nbsp;parcourent&nbsp;» généralement les titres d'une page, comme les utilisateur·ice·s voyants&nbsp;; du texte non destiné à être un titre mais balisé comme tel peut prêter à confusion.

## Les titres doivent avoir un contenu textuel visible

Assurez-vous que vos titres contiennent du texte non vide et ne sont pas masqués (par exemple avec CSS `display:none` ou `aria-hidden=true`). Les utilisateur·ice·s de lecteurs d'écran s'appuient sur les titres pour comprendre la structure et le contenu d'un document. N'utilisez pas les éléments de titre pour baliser des images ou du contenu graphique.

## Utiliser l'attribut `title` pour décrire le contenu d'un `<iframe>`

Assurez-vous que les éléments HTML {{htmlelement("iframe")}} possèdent un attribut `title` décrivant le contenu du cadre. Sans titre, les utilisateur·ice·s de technologies d'assistance doivent naviguer dans le cadre pour comprendre son contenu, ce qui peut être difficile et source de confusion.

Par bonne pratique, fournissez aussi un {{htmlelement("title")}} pour le document inclus dans le cadre, avec un contenu identique à l'attribut `title` du cadre (si le document vous appartient&nbsp;; sinon, essayez d'harmoniser les titres). Certains lecteurs d'écran remplacent le contenu de l'attribut `title` par celui du document inclus. Il est donc plus sûr et accessible de fournir le même titre aux deux endroits.

## Le contenu avec images doit être étiqueté

Fournissez un texte descriptif pour toutes les images et éléments assimilés (c'est-à-dire non décoratifs). Cela inclut les images SVG, les éléments HTML {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} et {{htmlelement("area")}}, ainsi que les éléments {{htmlelement("input")}} où `type=image` et {{htmlelement("object")}} dont le type commence par `image/`. La méthode habituelle consiste à utiliser l'attribut `alt`. Veillez à ce que la description reflète ce qui est montré par l'image.

### Exemple

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Les éléments interactifs doivent être étiquetés

Si un élément est destiné à l'interaction utilisateur, il doit avoir un libellé. Les éléments interactifs incluent les liens ({{htmlelement("a")}}), les éléments de formulaire, les boutons, et tout élément ayant un gestionnaire d'événements souris ou clavier. La façon d'étiqueter dépend du type&nbsp;: pour les champs de formulaire, utilisez un {{htmlelement("label")}}&nbsp;; pour les liens, boutons et éléments cliquables, le texte de l'élément sert généralement de libellé. Si aucune autre option n'est possible, utilisez l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

## Utiliser l'attribut `label` sur les éléments `optgroup`

Dans un élément {{htmlelement("optgroup")}}, utilisez l'attribut `label` pour décrire le groupe afin que les technologies d'assistance puissent y accéder pour leurs utilisateur·ice·s.

### Exemple

Dans cet exemple, l'attribut `label` sur les éléments {{HTMLElement('optgroup')}} donne un nom de catégorie au groupe d'options.

```html
<label for="dino-select">Choisissez un dinosaure&nbsp;:</label>
<select id="dino-select">
  <optgroup label="Theropods">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropods">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

## Les barres d'outils doivent être étiquetées s'il y en a plusieurs

Si vous définissez plusieurs barres d'outils dans une application web avec le rôle ARIA `toolbar`, vous devez utiliser l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) pour étiqueter chacune afin qu'elles puissent être décrites par les technologies d'assistance. Il est recommandé d'étiqueter une barre d'outils même s'il n'y en a qu'une par page.

### Voir aussi

- [Exemple de barre d'outils ARIA W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Critères de succès WCAG associés

- [1.1.1 Contenu non textuel (A) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#non-text-content)
  - : Tout contenu non textuel présenté à l'utilisateur·ice dispose d'une alternative textuelle remplissant un but équivalent, sauf dans les situations listées dans le lien ci-dessus.
- [2.4.4 Finalité des liens (dans le contexte) (A) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#link-purpose-in-context)
  - : La finalité de chaque lien peut être déterminée à partir du texte du lien seul ou du texte du lien et de son contexte déterminé par programme, sauf si la finalité du lien serait ambiguë pour les utilisateur·ice·s en général.
- [2.4.9 Finalité des liens (lien seul) (AAA) <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#link-purpose-link-only)
  - : Un mécanisme permet d'identifier la finalité de chaque lien à partir du texte du lien seul, sauf si la finalité du lien serait ambiguë pour les utilisateur·ice·s en général.
