---
title: Éléments de sélection personnalisables
short-title: Sélecteurs personnalisables
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 9b29c967bcaa7c35e0954fd366a9b2670af864b2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

Cet article explique comment créer des éléments HTML {{HTMLElement("select")}} entièrement personnalisés en utilisant des fonctionnalités expérimentales des navigateurs. Cela inclut un contrôle total sur la mise en forme du bouton de sélection, du menu déroulant, de l'icône de flèche, de la coche de sélection actuelle et de chaque élément HTML {{HTMLElement("option")}} individuellement.

> [!WARNING]
> Les fonctionnalités CSS et HTML présentées dans cet article sont actuellement prises en charge par un nombre limité de navigateurs&nbsp;; consultez les tableaux de compatibilité sur les pages de référence de chaque fonctionnalité pour plus de détails. Certains frameworks JavaScript bloquent ces fonctionnalités&nbsp;; dans d'autres, elles provoquent des échecs d'hydratation lorsque le rendu côté serveur (SSR) est activé.

## Contexte

Il a toujours été difficile de personnaliser l'apparence et le comportement des éléments `<select>` car ils contiennent des éléments internes mis en forme au niveau du système d'exploitation, qui ne peuvent pas être ciblés avec du CSS. Cela inclut le menu déroulant, l'icône de flèche, etc.

Auparavant, la meilleure option disponible — en dehors de l'utilisation d'une bibliothèque JavaScript personnalisée — consistait à définir la propriété CSS {{CSSxRef("appearance")}} à la valeur `none` sur l'élément `<select>` pour supprimer une partie de la mise en forme du système d'exploitation, puis à utiliser du CSS pour personnaliser les parties pouvant l'être. Cette technique est expliquée dans [Mise en forme avancée des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

Les éléments `<select>` personnalisables apportent une solution à ces problèmes. Ils permettent de créer des exemples comme celui ci-dessous, en utilisant uniquement HTML et CSS, qui sont entièrement personnalisés dans les navigateurs compatibles. Cela inclut la disposition du `<select>` et du menu déroulant, le jeu de couleurs, les icônes, la police, les transitions, le positionnement, les marqueurs pour indiquer l'icône sélectionnée, et plus encore.

{{EmbedLiveSample("full-render", "100%", 410)}}

De plus, ils offrent une amélioration progressive par-dessus la fonctionnalité existante en revenant à des sélecteurs «&nbsp;classiques&nbsp;» dans les navigateurs non compatibles.

Vous découvrirez comment construire cet exemple dans les sections ci-dessous.

## Quelles fonctionnalités composent un élément de sélection personnalisable ?

Vous pouvez créer des éléments `<select>` personnalisables en utilisant les fonctionnalités HTML et CSS suivantes&nbsp;:

- Les éléments classiques {{HTMLElement("select")}}, {{HTMLElement("option")}} et {{HTMLElement("optgroup")}}. Ils fonctionnent comme dans les sélecteurs «&nbsp;classiques&nbsp;», mais acceptent des types de contenu supplémentaires.
- Un élément {{HTMLElement("button")}} inclus comme premier enfant dans l'élément `<select>`, ce qui n'était pas autorisé dans les sélecteurs «&nbsp;classiques&nbsp;». Lorsqu'il est présent, il remplace le rendu par défaut du «&nbsp;bouton&nbsp;» du `<select>` fermé. On l'appelle généralement le **bouton de sélection** (c'est le bouton à presser pour ouvrir la liste déroulante).
  > [!NOTE]
  > Le bouton de sélection est [inerte](/fr/docs/Web/HTML/Reference/Global_attributes/inert) par défaut afin que, si des enfants interactifs (par exemple, des liens ou des boutons) sont inclus à l'intérieur, il soit toujours traité comme un seul bouton pour les interactions — par exemple, les éléments enfants ne seront pas sélectionnables ni cliquables.
- L'élément {{HTMLElement("selectedcontent")}} peut être inclus en option dans le premier enfant `<button>` de l'élément `<select>` pour afficher la valeur actuellement sélectionnée à l'intérieur du `<select>` fermé.
  Celui-ci contient un clone du contenu de l'élément `<option>` actuellement sélectionné (créé en interne avec {{DOMxRef("Node.cloneNode", "cloneNode()")}}).
- Le pseudo-élément {{CSSxRef("::picker()", "::picker(select)")}} cible l'ensemble du contenu du sélecteur. Cela inclut tous les éléments à l'intérieur de l'élément `<select>`, sauf le premier enfant `<button>`.
- La valeur de propriété {{CSSxRef("appearance")}} `base-select` permet à l'élément `<select>` et au pseudo-élément `::picker(select)` d'adopter les styles et le comportement par défaut définis par le navigateur pour les sélecteurs personnalisables.
- La pseudo-classe {{CSSxRef(":open")}} cible le bouton de sélection lorsque le sélecteur (`::picker(select)`) est ouvert.
- Le pseudo-élément {{CSSxRef("::picker-icon")}} cible l'icône à l'intérieur du bouton de sélection — la flèche qui pointe vers le bas lorsque le sélecteur est fermé.
- La pseudo-classe {{CSSxRef(":checked")}} cible l'élément `<option>` actuellement sélectionné.
- Le pseudo-élément {{CSSxRef("::checkmark")}} cible la coche placée à l'intérieur de l'élément `<option>` actuellement sélectionné pour fournir une indication visuelle de celui qui est sélectionné.

De plus, l'élément `<select>` et son sélecteur déroulant ont automatiquement les comportements suivants&nbsp;:

- Ils possèdent une relation invocateur/popover, comme défini par la [API Popover](/fr/docs/Web/API/Popover_API), ce qui permet de sélectionner le sélecteur lorsqu'il est ouvert via la pseudo-classe {{CSSxRef(":popover-open")}}. Voir [Utiliser l'API Popover](/fr/docs/Web/API/Popover_API/Using) pour plus de détails sur le comportement du popover.
- Ils possèdent une référence d'ancrage implicite, ce qui signifie que le sélecteur est automatiquement associé à l'élément `<select>` via le [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning). Les styles par défaut du navigateur positionnent le sélecteur par rapport au bouton (l'ancre) et vous pouvez personnaliser cette position comme expliqué dans [Positionner des éléments par rapport à leur ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#positionner_des_éléments_par_rapport_à_leur_ancre). Les styles par défaut du navigateur définissent également des solutions de repli de position qui repositionnent le sélecteur s'il risque de déborder de la zone d'affichage. Les solutions de repli sont expliquées dans [Gérer le débordement&nbsp;: solutions de repli et masquage conditionnel](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

> [!NOTE]
> Vous pouvez vérifier la compatibilité navigateur des `<select>` personnalisables en consultant les tableaux de compatibilité sur les pages de référence des fonctionnalités associées comme {{HTMLElement("selectedcontent")}}, {{CSSxRef("::picker()", "::picker(select)")}} et {{CSSxRef("::checkmark")}}.

Voyons toutes ces fonctionnalités en action à travers l'exemple présenté en haut de la page.

## Marquage d'un sélecteur personnalisable

Notre exemple est un menu {{HTMLElement("select")}} typique qui vous permet de choisir un personnage. Le balisage est le suivant&nbsp;:

```html live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
<form>
  <p>
    <label for="pet-select">Sélectionnez un personnage&nbsp;:</label>
    <select id="pet-select">
      <button>
        <selectedcontent></selectedcontent>
      </button>

      <option value="">Veuillez sélectionner un personnage</option>
      <option value="gustave">
        <span class="icon" aria-hidden="true">🦾</span
        ><span class="option-label">Gustave</span>
      </option>
      <option value="lune">
        <span class="icon" aria-hidden="true">🌙</span
        ><span class="option-label">Lune</span>
      </option>
      <option value="maelle">
        <span class="icon" aria-hidden="true">🤺</span
        ><span class="option-label">Maelle</span>
      </option>
      <option value="sciel">
        <span class="icon" aria-hidden="true">🃏</span
        ><span class="option-label">Sciel</span>
      </option>
      <option value="esquie">
        <span class="icon" aria-hidden="true">🧸</span
        ><span class="option-label">Esquie</span>
      </option>
      <option value="verso">
        <span class="icon" aria-hidden="true">⚔️</span
        ><span class="option-label">Verso</span>
      </option>
      <option value="monoco">
        <span class="icon" aria-hidden="true">🦶🏻</span
        ><span class="option-label">Monoco</span>
      </option>
    </select>
  </p>
</form>
```

> [!NOTE]
> L'attribut [`aria-hidden="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) est inclus sur les icônes afin qu'elles soient masquées pour les technologies d'assistance, évitant que les valeurs d'option soient annoncées deux fois (par exemple, «&nbsp;chat chat&nbsp;»).

Le balisage d'exemple est presque identique au balisage «&nbsp;classique&nbsp;» de `<select>`, avec les différences suivantes&nbsp;:

- La structure `<button><selectedcontent></selectedcontent></button>` représente le bouton de sélection {{HTMLElement("button")}}.
  Ajouter l'élément HTML {{HTMLElement("selectedcontent")}} fait que le navigateur clone l'option ({{HTMLElement("option")}}) actuellement sélectionné à l'intérieur du bouton, ce qui vous permet ensuite [d'appliquer des styles personnalisés](#ajuster_la_mise_en_forme_du_contenu_de_loption_sélectionnée_à_lintérieur_du_bouton_de_sélection). Si cette structure n'est pas incluse dans votre balisage, le navigateur reviendra à l'affichage du texte de l'option sélectionnée dans le bouton par défaut, et vous ne pourrez pas le mettre en forme aussi facilement.
  > [!NOTE]
  > Vous _pouvez_ inclure n'importe quel contenu dans le `<button>` pour afficher ce que vous voulez dans le `<select>` fermé, mais faites attention en le faisant. Ce que vous incluez peut modifier la valeur accessible exposée aux technologies d'assistance pour l'élément `<select>`.
- Le reste du contenu du `<select>` représente le sélecteur déroulant, qui est généralement limité aux éléments `<option>` représentant les différents choix du sélecteur. Vous pouvez inclure d'autres contenus dans le sélecteur, mais cela n'est pas recommandé.
- Traditionnellement, les éléments `<option>` ne pouvaient contenir que du texte, mais dans un sélecteur personnalisable vous pouvez inclure d'autres structures de balisage comme des images, d'autres éléments sémantiques de niveau texte non interactifs, et plus encore. Vous pouvez même utiliser les pseudo-éléments CSS {{CSSxRef("::before")}} et {{CSSxRef("::after")}} pour inclure d'autres contenus, bien que cela ne soit pas inclus dans la valeur soumise. Dans notre exemple, chaque `<option>` contient deux éléments HTML {{HTMLElement("span")}} contenant respectivement une icône et un libellé, permettant à chacun d'être mis en forme et positionné indépendamment.

  > [!NOTE]
  > Comme le contenu d'un `<option>` peut contenir des sous-arbres DOM à plusieurs niveaux, et pas seulement des nœuds de texte, il existe des règles concernant la façon dont le navigateur doit extraire la [valeur actuelle du `<select>`](/fr/docs/Web/API/HTMLSelectElement/value) via JavaScript. La valeur de la propriété {{DOMxRef("Node.textContent", "textContent")}} de l'élément `<option>` sélectionné est récupérée, {{JSxRef("String.prototype.trim", "trim()")}} est appliqué dessus, et le résultat est défini comme valeur du `<select>`.

Cette conception permet aux navigateurs non compatibles de revenir à une expérience `<select>` classique. La structure `<button><selectedcontent></selectedcontent></button>` sera complètement ignorée, et les contenus non textuels des `<option>` seront supprimés pour ne laisser que les nœuds de texte, mais le résultat restera fonctionnel.

## Activation du rendu personnalisé du sélecteur

Pour activer la fonctionnalité de sélecteur personnalisable et les styles de base minimaux du navigateur (et supprimer la mise en forme fournie par le système d'exploitation), votre élément `<select>` et son sélecteur déroulant (représenté par le pseudo-élément `::picker(select)`) doivent tous deux avoir une valeur {{CSSxRef("appearance")}} de `base-select` définie&nbsp;:

```css live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select,
::picker(select) {
  appearance: base-select;
}
```

```css hidden live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: 100%;
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
}

h2 {
  font-size: 1.2rem;
}

p {
  display: flex;
  gap: 10px;
}

label {
  width: fit-content;
  align-self: center;
}

select {
  flex: 1;
}
```

Vous pouvez choisir d'activer uniquement l'élément `<select>` pour la nouvelle fonctionnalité, en laissant le sélecteur avec la mise en forme par défaut du système d'exploitation, mais dans la plupart des cas, vous souhaiterez activer les deux. Il n'est pas possible d'activer le sélecteur sans activer l'élément `<select>`.

Une fois cela fait, le rendu du `<select>` est très basique&nbsp;:

{{EmbedLiveSample("plain-render", "100%", 240)}}

Vous êtes maintenant libre de mettre en forme cet élément comme vous le souhaitez. Pour commencer, l'élément `<select>` possède des valeurs personnalisées de {{CSSxRef("border")}}, {{CSSxRef("background")}} (qui changent avec {{CSSxRef(":hover")}} ou {{CSSxRef(":focus")}}), et {{CSSxRef("padding")}}, ainsi qu'une {{CSSxRef("transition")}} pour que le changement de fond s'anime en douceur&nbsp;:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
  transition: 0.4s;
}

select:hover,
select:focus {
  background: #dddddd;
}
```

## Mise en forme de l'icône du sélecteur

Pour mettre en forme l'icône à l'intérieur du bouton de sélection — la flèche qui pointe vers le bas lorsque le sélecteur est fermé — vous pouvez la cibler avec le pseudo-élément CSS {{CSSxRef("::picker-icon")}}. Le code suivant donne à l'icône une couleur ({{CSSxRef("color")}}) personnalisée et une `transition` pour que les changements de sa propriété {{CSSxRef("rotate")}} soient animés en douceur&nbsp;:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Ensuite, `::picker-icon` est combiné avec la pseudo-classe CSS {{CSSxRef(":open")}} — qui cible le bouton de sélection uniquement lorsque le sélecteur déroulant est ouvert — pour donner à l'icône une valeur de `rotate` de `180deg` lorsque le `<select>` est ouvert.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Voyons le résultat jusqu'ici — notez comment la flèche du sélecteur pivote en douceur sur 180 degrés lorsque le `<select>` s'ouvre et se ferme&nbsp;:

{{EmbedLiveSample("second-render", "100%", 250)}}

## Mise en forme du sélecteur déroulant

Le sélecteur déroulant peut être ciblé à l'aide du pseudo-élément CSS {{CSSxRef("::picker()", "::picker(select)")}}. Comme mentionné précédemment, le sélecteur contient tout ce qui se trouve à l'intérieur de l'élément `<select>`, à l'exception du bouton et de `<selectedcontent>`. Dans notre exemple, cela signifie tous les éléments `<option>` et leur contenu.

Tout d'abord, la bordure ({{CSSxRef("border")}}) noire par défaut du sélecteur est supprimée&nbsp;:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> L'argument passé au pseudo-élément `::picker()` représente le type d'élément dont vous souhaitez cibler le sélecteur — dans ce cas, les éléments `<select>`. Si vous souhaitez cibler le sélecteur d'un seul élément `<select>` plutôt que tous, vous pouvez combiner le pseudo-élément `::picker()` avec un autre sélecteur. Par exemple, notre `<select>` d'exemple possède un identifiant `pet-select`, donc son sélecteur peut être ciblé exclusivement avec `#pet-select::picker(select) { ... }`.

Maintenant, les éléments `<option>` sont mis en forme. Ils sont disposés avec [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout), tous alignés au début du conteneur flexible et un {{CSSxRef("gap")}} de `20px` est ajouté entre chaque. Chaque `<option>` reçoit également la même {{CSSxRef("border")}}, {{CSSxRef("background")}}, {{CSSxRef("padding")}} et {{CSSxRef("transition")}} que le `<select>`, pour garantir une apparence cohérente&nbsp;:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
  transition: 0.4s;
}
```

> [!NOTE]
> Les éléments `<option>` personnalisables d'un élément `<select>` ont `display: flex` défini par défaut, mais il est inclus dans notre feuille de style pour clarifier ce qui se passe.

Ensuite, une combinaison des pseudo-classes {{CSSxRef(":first-of-type")}}, {{CSSxRef(":last-of-type")}}, et {{CSSxRef(":not()")}} est utilisée pour définir un {{CSSxRef("border-radius")}} approprié sur les éléments `<option>` du haut et du bas, et pour supprimer la {{CSSxRef("border-bottom")}} de tous les éléments `<option>` — sauf le dernier afin que les bordures ne soient pas désordonnées et doublées. On applique aussi le même `border-radius` au conteneur externe `::picker(select)` pour éviter d'obtenir une boîte blanche carrée autour des options si l'on décide de définir une couleur de fond différente sur la page.

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

::picker(select) {
  border-radius: 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

Ensuite, une couleur de `background` différente est appliquée aux éléments `<option>` d'indice impair en utilisant {{CSSxRef(":nth-of-type()", ":nth-of-type(odd)")}} pour implémenter un rayage zébré, et une couleur de `background` différente est appliquée aux éléments `<option>` lors de la sélection et du survol, afin de fournir un repère visuel utile pendant la sélection&nbsp;:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Enfin pour cette section, une valeur plus grande de {{CSSxRef("font-size")}} est appliquée aux icônes des `<option>` (contenues dans des éléments `<span>` de classe `icon`) pour les agrandir, et la propriété {{CSSxRef("text-box")}} est utilisée pour supprimer certains espaces gênants au début et à la fin du bloc des emojis d'icônes, afin qu'ils s'alignent mieux avec les libellés&nbsp;:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Notre exemple s'affiche maintenant ainsi&nbsp;:

{{EmbedLiveSample("third-render", "100%", 370)}}

## Ajuster la mise en forme du contenu de l'option sélectionnée à l'intérieur du bouton de sélection

Si vous sélectionnez une option de personnages dans les derniers exemples interactifs, vous remarquez un problème — les icônes des personnages font augmenter la hauteur du bouton de sélection, ce qui déplace aussi la position de l'icône du sélecteur, et il n'y a pas d'espace entre l'icône de l'option et le libellé.

Cela peut être résolu en masquant l'icône lorsqu'elle est contenue à l'intérieur de `<selectedcontent>`, qui représente le contenu de l'option (`<option>`) sélectionné tel qu'il apparaît à l'intérieur du bouton de sélection. Dans notre exemple, elle est masquée en utilisant {{CSSxRef("display", "display: none")}}&nbsp;:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

Cela n'affecte pas la mise en forme du contenu des `<option>` tel qu'il apparaît à l'intérieur du sélecteur déroulant.

## Mise en forme de l'option actuellement sélectionnée

Pour mettre en forme l'élément `<option>` actuellement sélectionné tel qu'il apparaît à l'intérieur du sélecteur déroulant, vous pouvez le cibler à l'aide de la pseudo‑classe {{CSSxRef(":checked")}}. Celle‑ci permet de définir la propriété {{CSSxRef("font-weight")}} de l'option (`<option>`) sélectionné sur `bold`&nbsp;:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Mise en forme de la coche de la sélection actuelle

Vous avez probablement remarqué que lorsque vous ouvrez le sélecteur pour effectuer une sélection, l'option (`<option>`) actuellement sélectionné possède une coche à son extrémité `inline-start`. Cette coche peut être ciblée à l'aide du pseudo‑élément {{CSSxRef("::checkmark")}}. Par exemple, vous pouvez vouloir masquer cette coche (par exemple via `display: none`).

Vous pouvez aussi choisir de faire quelque chose d'un peu plus intéressant — précédemment, les éléments `<option>` étaient disposés horizontalement à l'aide de boîtes flexibles, les éléments flexibles étant alignés au début de la ligne. Dans la règle ci‑dessous, la coche est déplacée du début de la ligne vers la fin en lui attribuant une valeur {{CSSxRef("order")}} supérieure à `0`, et en l'alignant en fin de ligne à l'aide d'une valeur `auto` de {{CSSxRef("margin-left")}} (voir [Alignement et marges automatiques](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignement_et_marges_automatiques)).

Enfin, la valeur de la propriété CSS {{CSSxRef("content")}} est définie sur un emoji différent, afin d'afficher une icône différente.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> Les pseudo-éléments CSS `::checkmark` et `::picker-icon` ne sont pas inclus dans l'arbre d'accessibilité, donc tout contenu ({{CSSxRef("content")}}) généré appliqué sur eux ne sera pas annoncé par les technologies d'assistance. Veillez toutefois à ce que toute nouvelle icône que vous définissez ait un sens visuel pour son usage.

Vérifions à nouveau le rendu de l'exemple. L'état mis à jour après les trois dernières sections est le suivant&nbsp;:

{{EmbedLiveSample("fourth-render", "100%", 410)}}

## Animer le sélecteur en utilisant les états de la fenêtre contextuelle

Le bouton de sélection `button` de l'élément `<select>` personnalisable et son sélecteur déroulant sont automatiquement configurés dans une relation invocateur/fenêtre contextuelle, comme décrit dans [Utiliser l'API Popover](/fr/docs/Web/API/Popover_API/Using). Cela apporte de nombreux avantages aux éléments `<select>`&nbsp;; notre exemple profite de la possibilité d'animer la transition entre les états masqué et affiché de la fenêtre contextuelle à l'aide de transitions. La pseudo‑classe CSS {{CSSxRef(":popover-open")}} représente les fenêtres contextuelles à l'état affiché.

La technique est présentée rapidement dans cette section — lisez [Animer les fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#animating_popovers) pour une description plus détaillée.

Tout d'abord, le sélecteur est ciblé avec `::picker(select)`, et reçoit une valeur {{CSSxRef("opacity")}} de `0` et une `transition` de `all 0.4s allow-discrete`. Cela provoque l'animation de toutes les propriétés qui changent de valeur lorsque l'état de la fenêtre contextuelle passe de masqué à affiché.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

La liste des propriétés animées inclut `opacity`, mais elle comporte aussi deux propriétés discrètes dont les valeurs sont définies par les styles par défaut du navigateur&nbsp;:

- {{CSSxRef("display")}}
  - : La valeur de `display` passe de `none` à `block` lorsque la fenêtre contextuelle passe de l'état masqué à l'état affiché. Cela doit être animé pour que les autres transitions restent visibles.
- {{CSSxRef("overlay")}}
  - : La valeur de `overlay` passe de `none` à `auto` lorsque la fenêtre contextuelle passe de l'état masqué à l'état affiché, pour la promouvoir vers la {{Glossary("top layer", "couche supérieure")}}, puis la remettre en arrière lorsqu'elle est masquée pour la supprimer. Cela doit être animé afin que la suppression de la fenêtre contextuelle du top layer soit différée jusqu'à la fin de la transition, garantissant que la transition reste visible.

> [!NOTE]
> La valeur [`allow-discrete`](/fr/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) est nécessaire pour activer l'animation des propriétés discrètes.

Ensuite, le sélecteur est ciblé dans l'état affiché à l'aide de `::picker(select):popover-open` et reçoit une valeur d'`opacity` de `1` — c'est l'état final de la transition&nbsp;:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Enfin, comme le sélecteur est en cours de transition alors qu'il passe de `display: none` à une valeur de `display` qui le rend visible, l'état de départ de la transition doit être défini à l'intérieur d'un bloc {{CSSxRef("@starting-style")}}&nbsp;:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

Ces règles fonctionnent ensemble pour faire apparaître et disparaître en fondu le sélecteur lorsque le `<select>` est ouvert et fermé.

## Positionner le sélecteur en utilisant une ancre

Le bouton de sélection et le sélecteur déroulant d'un élément `<select>` personnalisable possèdent une référence d'ancre implicite, et le sélecteur est automatiquement associé au bouton via [le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning). Cela signifie qu'il n'est pas nécessaire d'établir une association explicite à l'aide des propriétés {{CSSxRef("anchor-name")}} et {{CSSxRef("position-anchor")}}.

De plus, [les styles par défaut du navigateur fournissent une position par défaut](/fr/docs/Web/CSS/Reference/Selectors/::picker#positionnement_par_ancre_du_sélecteur), que vous pouvez personnaliser comme expliqué dans [Positionner des éléments par rapport à leur ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#positionner_des_éléments_par_rapport_à_leur_ancre).

Dans notre démonstration, la position du sélecteur est définie par rapport à son ancre en utilisant la fonction CSS {{CSSxRef("anchor()")}} dans les valeurs des propriétés CSS {{CSSxRef("top")}} et {{CSSxRef("left")}}&nbsp;:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

Le résultat est que le bord supérieur du sélecteur est toujours positionné 1 pixel sous le bord inférieur du bouton de sélection, et que le bord gauche du sélecteur est toujours positionné `10%` de la largeur du bouton de sélection à partir de son bord gauche.

> [!NOTE]
> Si vous souhaitez supprimer la référence d'ancre implicite afin d'empêcher le sélecteur d'être ancré à l'élément `<select>`, vous pouvez le faire en définissant la propriété `position-anchor` du sélecteur sur un nom d'ancre qui n'existe pas dans le document courant, par exemple `--not-an-anchor-name`. Voir aussi [supprimer une association d'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#supprimer_une_association_dancre).

## Résultat final

Après les deux dernières sections, l'état final mis à jour de notre `<select>` s'affiche ainsi&nbsp;:

{{EmbedLiveSample("full-render", "100%", 410)}}

## Personnaliser d'autres fonctionnalités classiques

Les sections précédentes ont couvert toutes les nouvelles fonctionnalités disponibles pour les sélecteurs personnalisables, et montré comment elles interagissent avec les sélecteurs classiques à ligne unique et des fonctionnalités modernes connexes comme les fenêtres contextuelles et le positionnement par ancre. Certaines fonctionnalités de l'élément `<select>` non mentionnées ci‑dessus sont présentées ci‑dessous, ainsi que leur comportement actuel avec les sélecteurs personnalisables&nbsp;:

- [`<select multiple>`](/fr/docs/Web/HTML/Reference/Attributes/multiple)
  - : Il n'existe actuellement aucune prise en charge définie pour l'attribut `multiple` sur les éléments `<select>` personnalisables, mais cela fera l'objet de travaux à l'avenir.
- {{HTMLElement("optgroup")}}
  - : Le style par défaut des éléments `<optgroup>` est le même que pour les sélecteurs `<select>` classiques — en gras et avec un retrait inférieur aux options contenues. Veillez à mettre en forme les éléments `<optgroup>` pour qu'ils s'intègrent au design global, et gardez à l'esprit qu'ils se comporteront comme des conteneurs dans le HTML conventionnel. Dans les sélecteurs personnalisables, l'élément HTML {{HTMLElement("legend")}} est autorisé comme enfant de `<optgroup>` pour fournir un libellé facile à cibler et à mettre en forme. Il remplace tout texte défini dans l'attribut `label` de `<optgroup>` et possède la même sémantique.

## Prochaine étape

Dans le prochain article de ce module, nous explorerons les différentes [pseudo‑classes d'interface utilisateur](/fr/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) disponibles dans les navigateurs modernes pour mettre en forme les formulaires dans différents états.

## Voir aussi

- Les élément HTML {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("selectedcontent")}}
- La propriété CSS {{CSSxRef("appearance")}}
- Les pseudo-éléments CSS {{CSSxRef("::picker()", "::picker(select)")}}, {{CSSxRef("::picker-icon")}}, {{CSSxRef("::checkmark")}}
- Les pseudo-classes CSS {{CSSxRef(":open")}}, {{CSSxRef(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
