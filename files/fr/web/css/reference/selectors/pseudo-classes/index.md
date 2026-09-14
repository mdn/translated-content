---
title: Pseudo-classes
slug: Web/CSS/Reference/Selectors/Pseudo-classes
l10n:
  sourceCommit: c62181855c91ac0435dea5fa759a250e1dea4f8b
---

Une **_pseudo-classe_** [CSS](/fr/docs/Web/CSS) est un mot-clé ajouté à un sélecteur qui vous permet de sélectionner des éléments en fonction d'informations qui se trouvent en dehors de l'arbre de documents, telles qu'un état spécifique des éléments sélectionnés. Par exemple, la pseudo-classe {{CSSxRef(":hover")}} peut être utilisée pour mettre en forme un bouton lorsque le pointeur de l'utilisateur·ice survole le bouton.

```css
/* Tout bouton sur lequel le pointeur de l'utilisateur·ice est en survol */
button:hover {
  color: blue;
}
```

Une pseudo-classe consiste en un deux-points (`:`) suivi du nom de la pseudo-classe (par exemple, `:hover`). Une pseudo-classe fonctionnelle contient également une paire de parenthèses pour définir les arguments (par exemple, `:dir()`). L'élément auquel une pseudo-classe est attachée est défini comme un _élément d'ancrage_ (par exemple, `button` dans le cas de `button:hover`).

Les pseudo-classes vous permettent d'appliquer un style à un élément non seulement par rapport au contenu de l'arbre de documents, mais aussi par rapport à des facteurs externes tels que l'historique du navigateur ({{CSSxRef(":visited")}}, par exemple), l'état de son contenu (comme {{CSSxRef(":checked")}} sur certains éléments de formulaire) ou la position de la souris (comme {{CSSxRef(":hover")}}, qui vous indique si la souris est au-dessus d'un élément ou non).

> [!NOTE]
> Contrairement aux pseudo-classes, les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) peuvent être utilisés pour mettre en forme une _partie spécifique_ d'un élément.

## Pseudo-classes élémentaires

Ces pseudo-classes se rapportent à l'identité fondamentale des éléments.

- {{CSSxRef(":defined")}}
  - : Correspond à tout élément qui est défini.
- {{CSSxRef(":heading")}}
  - : Correspond à tout élément de titre (`<h1>`-`<h6>`).

## Pseudo-classes d'état d'affichage des éléments

Ces pseudo-classes permettent de sélectionner des éléments en fonction de leur état d'affichage.

- {{CSSxRef(":open")}}
  - : Correspond à un élément qui peut être ouvert ou fermé et qui est actuellement ouvert.
- {{CSSxRef(":popover-open")}}
  - : Correspond à un élément de fenêtre contextuelle qui est actuellement dans l'état affiché.
- {{CSSxRef(":modal")}}
  - : Correspond à un élément qui est dans un état dans lequel il exclut toute interaction avec les éléments à l'extérieur jusqu'à ce que l'interaction ait été rejetée.
- {{CSSxRef(":fullscreen")}}
  - : Correspond à un élément qui est actuellement en mode plein écran.
- {{CSSxRef(":picture-in-picture")}}
  - : Correspond à un élément qui est actuellement en mode image dans l'image.
- {{CSSxRef(":xr-overlay")}}
  - : Correspond à l'élément de superposition DOM pendant une session AR ou VR immersive.

## Pseudo-classes d'entrée de formulaire

Ces pseudo-classes se rapportent aux éléments de formulaire et permettent de sélectionner des éléments en fonction des attributs HTML et de l'état dans lequel se trouve le champ avant et après l'interaction.

- {{CSSxRef(":enabled")}}
  - : Correspond à un élément de l'interface utilisateur qui est dans un état activé.
- {{CSSxRef(":disabled")}}
  - : Correspond à un élément de l'interface utilisateur qui est dans un état désactivé.
- {{CSSxRef(":read-only")}}
  - : Correspond à tout élément qui ne peut pas être modifié par l'utilisateur·ice.
- {{CSSxRef(":read-write")}}
  - : Correspond à tout élément qui est modifiable par l'utilisateur·ice.
- {{CSSxRef(":placeholder-shown")}}
  - : Correspond à un élément de saisie qui affiche un texte d'espace réservé. Par exemple, cela correspond à l'attribut `placeholder` dans les éléments {{HTMLElement("input")}} et {{HTMLElement("textarea")}}.
- {{CSSxRef(":autofill")}}
  - : Correspond à un élément {{HTMLElement("input")}} qui a été rempli automatiquement par le navigateur.
- {{CSSxRef(":default")}}
  - : Correspond à un ou plusieurs éléments de l'interface utilisateur qui sont par défaut parmi un ensemble d'éléments.
- {{CSSxRef(":checked")}}
  - : Correspond lorsque des éléments tels que des cases à cocher et des boutons radio sont activés.
- {{CSSxRef(":indeterminate")}}
  - : Correspond à des éléments de l'interface utilisateur lorsqu'ils sont dans un état indéterminé.
- {{CSSxRef(":blank")}}
  - : Correspond à un élément de saisie utilisateur·ice qui est vide, contenant une chaîne de caractères vide ou une autre entrée nulle.
- {{CSSxRef(":valid")}}
  - : Correspond à un élément avec un contenu valide. Par exemple, un élément de saisie avec le type 'email' qui contient une adresse email correctement formée ou une valeur vide si le contrôle n'est pas requis.
- {{CSSxRef(":invalid")}}
  - : Correspond à un élément avec un contenu invalide. Par exemple, un élément de saisie avec le type 'email' avec un nom saisi.
- {{CSSxRef(":in-range")}}
  - : Correspond à des éléments avec des limitations de plage. Par exemple, un contrôle de curseur lorsque la valeur sélectionnée est dans la plage autorisée.
- {{CSSxRef(":out-of-range")}}
  - : Correspond à des éléments avec des limitations de plage. Par exemple, un contrôle de curseur lorsque la valeur sélectionnée est en dehors de la plage autorisée.
- {{CSSxRef(":required")}}
  - : Correspond lorsque un élément de formulaire est requis.
- {{CSSxRef(":optional")}}
  - : Correspond lorsque un élément de formulaire est optionnel.
- {{CSSxRef(":user-valid")}}
  - : Correspond à un élément avec une saisie correcte, mais uniquement lorsque l'utilisateur·ice a interagi avec lui.
- {{CSSxRef(":user-invalid")}}
  - : Correspond à un élément avec une saisie incorrecte, mais uniquement lorsque l'utilisateur·ice a interagi avec lui.

## Pseudo-classes linguistiques

Ces pseudo-classes reflètent la langue du document et permettent de sélectionner des éléments en fonction de la langue ou de la direction du script.

- {{CSSxRef(":dir()")}}
  - : La pseudo-classe de direction sélectionne un élément en fonction de sa direction telle que déterminée par la langue du document.
- {{CSSxRef(":lang()")}}
  - : Sélectionne un élément en fonction de sa langue de contenu.

## Pseudo-classes de liens

Ces pseudo-classes se rapportent aux liens et aux éléments ciblés dans le document actuel.

- {{CSSxRef(":any-link")}}
  - : Correspond à un élément si l'élément correspond à {{CSSxRef(":link")}} ou {{CSSxRef(":visited")}}.
- {{CSSxRef(":link")}}
  - : Correspond à des liens qui n'ont pas encore été visités.
- {{CSSxRef(":visited")}}
  - : Correspond à des liens qui ont été visités.
- {{CSSxRef(":local-link")}}
  - : Correspond à des liens dont l'URL absolue est la même que l'URL cible. Par exemple, des liens d'ancrage vers la même page.
- {{CSSxRef(":target")}}
  - : Correspond à l'élément qui est la cible de l'URL du document.
- {{CSSxRef(":scope")}}
  - : Représente des éléments qui sont un point de référence pour les sélecteurs à comparer.

> [!NOTE]
> Une pseudo-classe `:target-within`, pour correspondre aux éléments qui sont ou ont un descendant qui est la cible de l'URL du document, a été définie mais supprimée de la spécification. Utilisez `:has(:target)` à cette fin.

## Pseudo-classes d'état des ressources

Ces pseudo-classes s'appliquent aux médias qui peuvent être dans un état où ils sont décrits comme étant en lecture, comme une vidéo.

- {{CSSxRef(":playing")}}
  - : Représente un élément lisible qui est en lecture.
- {{CSSxRef(":paused")}}
  - : Représente un élément lisible qui est en pause.
- {{CSSxRef(":seeking")}}
  - : Représente un élément lisible qui recherche actuellement une position de lecture dans la ressource multimédia.
- {{CSSxRef(":buffering")}}
  - : Représente un élément lisible qui est en lecture mais qui est temporairement bloqué, car il télécharge la ressource multimédia.
- {{CSSxRef(":stalled")}}
  - : Représente un élément lisible qui est en lecture mais qui est bloqué, car il ne peut pas télécharger la ressource multimédia.
- {{CSSxRef(":muted")}}
  - : Représente un élément produisant du son qui est muet.
- {{CSSxRef(":volume-locked")}}
  - : Représente un élément produisant du son qui a son niveau de volume verrouillé par le navigateur.

## Pseudo-classes dimensionnelles temporelles

Ces pseudo-classes s'appliquent lors de la visualisation de quelque chose qui a un timing, comme une piste de sous-titres [WebVTT](/fr/docs/Web/API/WebVTT_API).

- {{CSSxRef(":current")}}
  - : Représente l'élément ou l'ancêtre de l'élément qui est affiché.
- {{CSSxRef(":past")}}
  - : Représente un élément qui se produit entièrement avant l'élément {{CSSxRef(":current")}}.
- {{CSSxRef(":future")}}
  - : Représente un élément qui se produit entièrement après l'élément {{CSSxRef(":current")}}.

## Pseudo-classes structurelles d'arbre

Ces pseudo-classes se rapportent à l'emplacement d'un élément dans l'arbre du document.

- {{CSSxRef(":root")}}
  - : Représente un élément qui est la racine du document. Dans HTML, il s'agit généralement de l'élément `<html>`.
- {{CSSxRef(":empty")}}
  - : Représente un élément sans enfants autres que des caractères d'espace blanc.
- {{CSSxRef(":nth-child()")}}
  - : Utilise la notation `An+B` pour sélectionner des éléments d'une liste d'éléments voisins.
- {{CSSxRef(":nth-last-child()")}}
  - : Utilise la notation `An+B` pour sélectionner des éléments d'une liste d'éléments voisins, en comptant à rebours depuis la fin de la liste.
- {{CSSxRef(":first-child")}}
  - : Représente un élément qui est le premier de ses voisins.
- {{CSSxRef(":last-child")}}
  - : Représente un élément qui est le dernier de ses voisins.
- {{CSSxRef(":only-child")}}
  - : Représente un élément qui n'a pas de voisins. Par exemple, un élément de liste sans d'autres éléments de liste dans cette liste.
- {{CSSxRef(":heading_function", ":heading()")}}
  - : Utilise la notation `An+B` pour sélectionner des éléments d'en-tête (`<h1>`-`<h6>`).
- {{CSSxRef(":nth-of-type()")}}
  - : Utilise la notation `An+B` pour sélectionner des éléments d'une liste d'éléments voisins qui correspondent à un certain type.
- {{CSSxRef(":nth-last-of-type()")}}
  - : Utilise la notation `An+B` pour sélectionner des éléments d'une liste d'éléments voisins qui correspondent à un certain type, en comptant à rebours depuis la fin de la liste.
- {{CSSxRef(":first-of-type")}}
  - : Représente un élément qui est le premier de ses voisins et qui correspond également à un certain sélecteur de type.
- {{CSSxRef(":last-of-type")}}
  - : Représente un élément qui est le dernier de ses voisins et qui correspond également à un certain sélecteur de type.
- {{CSSxRef(":only-of-type")}}
  - : Représente un élément qui n'a pas de voisins du type choisi.

## Pseudo-classes structurelles fantômes

Ces pseudo-classes se rapportent au DOM fantôme.

- {{CSSxRef(":host")}}
  - : Représente l'hôte de l'arbre fantôme.
- {{CSSxRef(":host_function", ":host()")}}
  - : Représente un élément qui correspond à {{CSSxRef(":host")}} et à l'un des sélecteurs de la liste fournie.
- {{CSSxRef(":host-context()")}}
  - : Sélectionne des éléments en dehors de l'arbre fantôme dans le contexte de l'hôte fantôme.
- {{CSSxRef(":has-slotted")}}
  - : Représente les éléments de slot qui ont été assignés du contenu.

## Pseudo-classes d'action utilisateur·ice

Ces pseudo-classes nécessitent une interaction de l'utilisateur·ice pour s'appliquer, comme le fait de maintenir un pointeur de souris au-dessus d'un élément.

- {{CSSxRef(":hover")}}
  - : Représente un élément lorsqu'un utilisateur·ice désigne un élément avec un dispositif de pointage, comme en maintenant le pointeur de la souris au-dessus de l'élément.
- {{CSSxRef(":active")}}
  - : Représente un élément lorsqu'il est activé par l'utilisateur·ice. Par exemple, lorsque l'élément est cliqué.
- {{CSSxRef(":focus")}}
  - : Représente un élément lorsqu'il a la sélection.
- {{CSSxRef(":focus-visible")}}
  - : Représente un élément lorsqu'il a la sélection et que l'agent utilisateur identifie que l'élément doit être visiblement sélectionné.
- {{CSSxRef(":focus-within")}}
  - : Représente un élément auquel {{CSSxRef(":focus")}} s'applique, plus tout élément qui a un descendant auquel {{CSSxRef(":focus")}} s'applique.
- {{CSSxRef(":target-current")}}
  - : Représente le pseudo-élément {{CSSxRef("::scroll-marker")}} d'un {{CSSxRef("scroll-marker-group")}} qui est actuellement défilé, en d'autres termes, le **marqueur de défilement actif**.

### Limite de correspondance des ancêtres de la couche supérieure

Lors de la définition de styles à l'aide d'un sélecteur de pseudo-classe `:hover`, `:active` ou `:focus-within`, le sélecteur correspond à un ensemble imbriqué d'éléments dans l'arborescence DOM. Si la hiérarchie inclut un élément dans la {{Glossary("top layer", "couche supérieure")}} (par exemple, une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API) ou un [`<select>` personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)), la correspondance s'arrête à cet élément de couche supérieure.

Par exemple, le code suivant présente un élément `<select>` personnalisable et une fenêtre contextuelle. Nous avons défini que chaque élément de la page ait une bordure ({{CSSxRef("border")}}) bleue épaisse en pointillés au survol.

```html live-sample___matching-boundary
<main>
  <select>
    <option>Un</option>
    <option>Deux</option>
    <option>Trois</option>
  </select>

  <div>
    <button popovertarget="mafenetre">Basculer la fenêtre contextuelle</button>
    <section id="mafenetre" popover>
      <p>Je suis une fenêtre contextuelle</p>
      <button>Je suis un bouton de fenêtre contextuelle</button>
    </section>
  </div>
</main>
```

```css hidden live-sample___matching-boundary
* {
  padding: 5px;
}
```

```css live-sample___matching-boundary
select,
::picker(select) {
  appearance: base-select;
}

:hover {
  border: 5px dashed blue;
}
```

{{EmbedLiveSample("matching-boundary", "100%", 200)}}

Notez que lorsque vous survolez l'élément `<select>` ou le bouton de basculement de la fenêtre contextuelle, tous les ancêtres de ces éléments obtiennent la bordure. Cependant, une fois que le sélecteur de `<select>` ou la fenêtre contextuelle est ouvert, le survol de l'un de ses descendants applique la bordure uniquement jusqu'à l'élément de couche supérieure lui-même (le sélecteur de `<select>` ou la fenêtre contextuelle), c'est-à-dire que la correspondance s'arrête à cet élément.

Ce comportement empêche la correspondance de la pseudo-classe de déborder d'un composant de couche supérieure vers la page environnante, ce qui peut autrement donner à l'interface utilisateur un aspect cassé.

## Pseudo-classes fonctionnelles

Ces pseudo-classes acceptent une [liste de sélecteurs](/fr/docs/Web/CSS/Reference/Selectors/Selector_list) ou une [liste de sélecteurs indulgente](/fr/docs/Web/CSS/Reference/Selectors/Selector_list#liste_de_sélecteurs_indulgente) comme paramètre.

- {{CSSxRef(":is()")}}
  - : La pseudo-classe matches-any correspond à tout élément qui correspond à l'un des sélecteurs de la liste fournie. La liste est tolérante.
- {{CSSxRef(":not()")}}
  - : La pseudo-classe de négation, ou matches-none, représente tout élément qui n'est pas représenté par son argument.
- {{CSSxRef(":where()")}}
  - : La pseudo-classe d'ajustement de spécificité correspond à tout élément qui correspond à l'un des sélecteurs de la liste fournie sans ajouter de poids de spécificité. La liste est tolérante.
- {{CSSxRef(":has()")}}
  - : La pseudo-classe relationnelle représente un élément si l'un des sélecteurs relatifs correspond lorsqu'il est ancré par rapport à l'élément attaché.

## Pseudo-classes d'état personnalisé

Ces pseudo-classes s'appliquent aux éléments personnalisés.

- {{CSSxRef(":state()")}}
  - : Correspond à des éléments personnalisés qui ont l'état personnalisé défini.

## Pseudo-classes de page

Ces pseudo-classes se rapportent aux pages d'un document imprimé et sont utilisées avec la règle @page.

- {{CSSxRef(":left")}}
  - : Représente toutes les pages de gauche d'un document imprimé.
- {{CSSxRef(":right")}}
  - : Représente toutes les pages de droite d'un document imprimé.
- {{CSSxRef(":first")}}
  - : Représente la première page d'un document imprimé.
- `:blank`
  - : Représente une page blanche dans un document imprimé.

## Pseudo-classes de transition de vue

Ces pseudo-classes se rapportent aux éléments impliqués dans une [transition de vue](/fr/docs/Web/API/View_Transition_API).

- {{CSSxRef(":active-view-transition")}}
  - : Correspond à l'élément racine d'un document lorsqu'une [transition de vue](/fr/docs/Web/API/View_Transition_API#concepts_and_usage) est en cours (_active_) et cesse de correspondre une fois la transition terminée.
- {{CSSxRef(":active-view-transition-type()")}}
  - : Correspond à l'élément racine d'un document lorsqu'une [transition de vue](/fr/docs/Web/API/View_Transition_API#concepts_and_usage) définie est en cours (_active_) et cesse de correspondre une fois la transition terminée.

## Syntaxe

```css
sélecteur:pseudo-classe {
  propriété: valeur;
}
```

Comme pour les classes régulières, vous pouvez chaîner autant de pseudo-classes que vous le souhaitez dans un sélecteur.

## Index alphabétique

Les pseudo-classes définies par un ensemble de spécifications CSS incluent les suivantes&nbsp;:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":active-view-transition")}}
- {{CSSxRef(":active-view-transition-type()")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} (saisie) {{Experimental_Inline}}
- `:blank` (page)
- {{CSSxRef(":buffering")}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}}

H

- {{CSSxRef(":has-slotted")}}
- {{CSSxRef(":has", ":has()")}}
- {{CSSxRef(":heading")}}
- {{CSSxRef(":heading_function", ":heading()")}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host()")}}
- {{CSSxRef(":host-context()")}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":in-range")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":interest-source")}}
- {{CSSxRef(":interest-target")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}

M

- {{CSSxRef(":modal")}}
- {{CSSxRef(":muted")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child()")}}
- {{CSSxRef(":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":open")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":playing")}}
- {{CSSxRef(":popover-open")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":seeking")}}
- {{CSSxRef(":stalled")}}
- {{CSSxRef(":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-after")}}
- {{CSSxRef(":target-current")}}
- {{CSSxRef(":target-before")}}

U

- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":user-valid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":volume-locked")}}

W

- {{CSSxRef(":where()")}}

X

- {{CSSxRef(":xr-overlay")}} {{Experimental_Inline}}

### Pseudo-classes non standard

Les pseudo-classes non standard avec préfixe fournisseur incluent&nbsp;:

#### préfixe `-moz-`

- {{CSSxRef(":-moz-broken")}}
- {{CSSxRef(":-moz-drag-over")}}
- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
- {{CSSxRef(":-moz-only-whitespace")}}
- {{CSSxRef(":-moz-submit-invalid")}}
- {{CSSxRef(":-moz-suppressed")}}
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef(":-moz-window-inactive")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
