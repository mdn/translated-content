---
title: "Attribut HTML universel : popover"
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`popover`** permet de désigner un élément qui sera affiché par-dessus le contenu actuel.

## Valeur

L'attribut `popover` peut prendre l'un des valeurs suivantes&nbsp;:

- `"auto"`
  - : Les fenêtres contextuelles [`auto`](/fr/docs/Web/API/Popover_API/Using#létat_automatique_et_la_fermeture_légère) peuvent être «&nbsp;fermée de façon légère&nbsp;» — cela signifie que vous pouvez masquer la fenêtre contextuelle en cliquant en dehors de celle-ci ou en appuyant sur la touche <kbd>Esc</kbd>. L'affichage d'une fenêtre contextuelle `auto` fermera généralement les autres popovers `auto` déjà affichés, sauf s'ils sont imbriqués.

    > [!NOTE]
    > Définir une valeur vide pour `popover` — `popover` ou `popover=""` — équivaut à définir `popover="auto"`.

- `"hint"`
  - : Les fenêtres contextuelles [`hint`](/fr/docs/Web/API/Popover_API/Using#utiliser_létat_«_hint_»_des_fenêtres_contextuelles) ne ferment pas les popovers `auto` lorsqu'elles sont affichées, mais fermeront les autres popovers `hint`.
    Elles peuvent être fermées de manière légère et répondront aux demandes de fermeture.

- `"manual"`
  - : Les fenêtres contextuelles [`manual`](/fr/docs/Web/API/Popover_API/Using#létat_manuel_des_fenêtres_contextuelles) ne peuvent pas être «&nbsp;fermées de façon légère&nbsp;» et ne se ferment pas automatiquement. Les popovers doivent être affichés et fermés explicitement à l'aide de boutons déclaratifs `show`/`hide`/`toggle` ou de JavaScript. Plusieurs popovers `manual` indépendants peuvent être affichés simultanément.

## Description

Les éléments de fenêtres contextuelles sont masqués avec `display: none` jusqu'à ce qu'ils soient ouverts avec un élément déclencheur/de contrôle (c'est-à-dire un `<button>` ou `<input type="button">` avec un attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)) ou un appel à la méthode {{DOMxRef("HTMLElement.showPopover()")}}.

Lorsqu'ils sont ouverts, les éléments de fenêtres contextuelles apparaissent au-dessus de tous les autres éléments dans la {{Glossary("top layer", "couche supérieure")}}, et ne sont pas influencés par la {{CSSxRef('position')}} ou le débordement ({{CSSxRef('overflow')}}) des éléments parents.

Les fenêtres contextuelles ayant l'état [`auto`](/fr/docs/Web/API/Popover_API/Using#létat_automatique_et_la_fermeture_légère) peuvent être affichées et masquées à l'aide des contrôles associés (désignés par l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)) et peuvent être «&nbsp;fermées de façon légère&nbsp;» en cliquant en dehors de la zone de la fenêtre contextuelle, en ouvrant une autre fenêtre contextuelle ou en utilisant des mécanismes spécifiques au navigateur tels que la touche <kbd>Esc</kbd>.

En général, une seule fenêtre contextuelle `auto` peut être affichée à l'écran à la fois — afficher une deuxième fenêtre contextuelle alors qu'une autre est déjà affichée masquera la première. L'exception à cette règle est lorsque vous avez des fenêtres contextuelles `auto` imbriquées. Voir [Fenêtres contextuelles imbriquées](/fr/docs/Web/API/Popover_API/Using#fenêtres_contextuelles_imbriquées) pour plus de détails.

Elles peuvent également être contrôlées à l'aide de JavaScript, par exemple la méthode {{DOMxRef("HTMLElement.togglePopover()")}} peut être utilisée pour basculer une fenêtre contextuelle entre affichée et masquée.

En revanche, les fenêtres contextuelles [`manual`](/fr/docs/Web/API/Popover_API/Using#létat_manuel_des_fenêtres_contextuelles) doivent être affichées et masquées manuellement — elles ne ferment pas automatiquement les autres fenêtres contextuelles lorsqu'elles sont affichées et ne peuvent pas être fermées de manière légère. Cela permet des cas d'utilisation où vous souhaitez afficher plusieurs fenêtres contextuelles en même temps.

Les fenêtres contextuelles [`hint`](/fr/docs/Web/API/Popover_API/Using#utiliser_létat_«_hint_»_des_fenêtres_contextuelles) ne ferment pas les fenêtres contextuelles `auto` lorsqu'elles sont affichées, mais fermeront les autres fenêtres contextuelles `hint`. Elles peuvent être fermées de manière légère et répondront aux demandes de fermeture.

En général, les fenêtres contextuelles `hint` sont affichées et masquées en réponse à des évènements JavaScript autres que les clics, tels que [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)/[`mouseout`](/fr/docs/Web/API/Element/mouseout_event) et [`focus`](/fr/docs/Web/API/Element/focus_event)/[`blur`](/fr/docs/Web/API/Element/blur_event). Cliquer sur un bouton pour ouvrir une fenêtre contextuelle `hint` ferait fermer légèrement une fenêtre contextuelle `auto` ouverte.

Pour des informations détaillées sur l'utilisation, voir la page de destination de {{DOMxRef("Popover API", "l'API Popover", "", "nocode")}}.

## Exemples

### Faire d'un élément une fenêtre contextuelle

Le code suivant rend un bouton qui, lorsqu'il est activé, ouvrira un élément de fenêtre contextuelle. Ce comportement peut être réalisé uniquement avec HTML.

```html
<button popovertarget="my-popover">Ouvrir la fenêtre contextuelle</button>

<div popover id="my-popover">Bonjour à tous&nbsp;!</div>
```

{{EmbedLiveSample('basic_example_of_popover', 600, 100)}}

### Imbriquer des fenêtres contextuelles

Dans cet exemple, un bouton ouvre une fenêtre contextuelle qui contient des fenêtres contextuelles imbriquées supplémentaires. Les fenêtres contextuelles imbriquées peuvent être ouvertes sans fermer la fenêtre contextuelle du menu d'origine.

#### HTML

Dans la première partie du HTML, nous créons un {{HTMLElement("button")}} qui ouvrira la fenêtre contextuelle principale, qui est un menu contenant quelques options.

```html
<header>
  <button popovertarget="menu">Ouvrir le menu</button>
</header>
<main>
  <!--  Le contenu de la page va ici  -->
</main>
```

Dans la deuxième partie du HTML, nous créons la fenêtre contextuelle du menu qui est ouverte par le bouton que nous avons créé dans le bloc de code précédent. Cette fenêtre contextuelle du menu contient une liste non ordonnée d'éléments de menu, chacun avec un bouton d'information qui ouvre une fenêtre contextuelle imbriquée. La fenêtre contextuelle du menu utilise `popover="auto"`, ce qui signifie qu'elle ne sera pas fermée lorsque les fenêtres contextuelles imbriquées seront ouvertes.

```html
<!-- menu contextuel -->
<div id="menu" popover="auto">
  <ul>
    <li>
      <a href="#">Nouveau contenu</a><button popovertarget="new-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Ouvrir le contenu</a
      ><button popovertarget="open-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Enregistrer le contenu</a
      ><button popovertarget="save-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Fermer le contenu</a
      ><button popovertarget="close-info">ⓘ</button>
    </li>
  </ul>
</div>
```

Dans la dernière partie du HTML, nous créons les fenêtres contextuelles d'information pour chaque élément du menu. Chaque fenêtre contextuelle inclut `popover="hint"`, ce qui signifie qu'elle ne fermera pas la fenêtre contextuelle du menu d'origine mais fermera les autres fenêtres contextuelles d'information ouvertes.

```html
<!-- info popovers -->
<div id="new-info" class="info-popover" popover="hint">
  Ceci est une information sur la
  <strong>création d'un nouveau</strong> contenu.
</div>
<div id="open-info" class="info-popover" popover="hint">
  Ceci est une information sur l'<strong>ouverture d'un contenu existant</strong
  >.
</div>
<div id="save-info" class="info-popover" popover="hint">
  Ceci est une information sur
  <strong>l'enregistrement du contenu actuel</strong>.
</div>
<div id="close-info" class="info-popover" popover="hint">
  Ceci est une information sur <strong>la fermeture du contenu actuel</strong>.
</div>
```

#### CSS

```css hidden
header {
  display: flex;
  justify-content: center;
}
header button {
  margin: 0.4rem auto;
}
```

Nous avons utilisé [le positionnement par ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/) pour positionner la fenêtre contextuelle du menu sous le `<button>` et [la grille](/fr/docs/Web/CSS/Guides/Grid_layout) pour disposer les éléments du menu et les boutons d'information.

```css
#menu {
  margin: 0;
  margin-top: 0.4rem;
  inset: auto;
  position-area: bottom;
}
#menu ul {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.4rem;
  padding: 0.4rem;
}
#menu li {
  grid-column: span 2;
  display: grid;
  grid: inherit;
  grid-template-columns: subgrid;
  gap: 1.4rem;
}
li [popovertarget] {
  cursor: pointer;
  font-size: 1.2rem;
}
li button {
  border: none;
  padding: 0;
  background-color: inherit;
}
```

Ici, nous avons utilisé le positionnement par ancre pour faire apparaître les fenêtres contextuelles d'information à droite de leurs boutons d'information respectifs.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Résultat

Cliquez sur le bouton _Ouvrir le menu_, puis cliquez sur les icônes d'information (ⓘ) à côté des options du menu pour ouvrir les fenêtres contextuelles d'information.

{{EmbedLiveSample('popover_hint', 600, 250)}}

> [!NOTE]
> Voir [la page listant des exemples d'utilisation de l'API <i lang="en">Popover</i> <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/) pour accéder à l'ensemble des exemples MDN sur ce sujet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Popover API", "L'API Popover", "", "nocode")}}
- L'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)
- L'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
- Le pseudo-élément CSS {{CSSxRef("::backdrop")}}
- La pseudo-classe CSS {{CSSxRef(":popover-open")}}
