---
title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
original_slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:focus-visible`** s'applique lorsqu'un élément correspond à la pseudo-classe {{cssxref(":focus")}} et que l'{{glossary("User Agent", "agent utilisateur")}} détermine, via une heuristique, que le focus devrait être mis en évidence sur l'élément (la plupart des navigateurs affichent un contour en surbrillance par défaut).

{{InteractiveExample("Démonstration CSS&nbsp;: :focus-visible", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:focus-visible {
  outline: 2px solid crimson;
  border-radius: 3px;
}

select:focus-visible {
  border: 2px dashed crimson;
  border-radius: 3px;
  outline: none;
}
```

```html interactive-example
<form>
  <p>Quelle saveur souhaitez-vous commander ?</p>
  <label>Nom complet : <input name="firstName" type="text" /></label>
  <label
    >Saveur :
    <select name="flavor">
      <option>Cerise</option>
      <option>Thé vert</option>
      <option>Vanille et beurre salé</option>
      <option>Pépites de menthe</option>
    </select>
  </label>
</form>
```

Ce sélecteur peut être utile afin de fournir un indicateur de focus différent selon le mode de navigation de l'utilisateur (souris ou clavier).

## Syntaxe

```css
:focus-visible {
  /* ... */
}
```

## :focus contre :focus-visible

Originalement, l'agent utilisateur CSS appliquait les styles de focus uniquement sur la pseudo-classe `:focus`, stylisant la plupart des éléments en focus avec un contour de focus. Cela signifiait que tous les éléments, y compris tous les liens et boutons, avaient un contour de focus appliqué lorsqu'ils étaient en focus, ce que beaucoup trouvaient peu esthétique. En raison de cette apparence, certains auteur·ice·s ont supprimé les styles de contour de focus de l'agent utilisateur. Changer le style de focus peut diminuer l'utilisabilité, tandis que supprimer les styles de focus rend la navigation au clavier inaccessible pour les utilisateur·ice·s voyants.

Les navigateurs n'indiquent plus visiblement le focus (comme en traçant un «&nbsp;contour de focus&nbsp;») autour de chaque élément lorsqu'il a le focus. Au lieu de cela, ils utilisent une variété d'heuristiques pour fournir des indicateurs de focus uniquement lorsque cela serait le plus utile pour l'utilisateur. Par exemple, lorsqu'un bouton est cliqué à l'aide d'un dispositif de pointage, le focus n'est généralement pas indiqué visuellement, mais lorsqu'une zone de texte nécessitant une saisie utilisateur a le focus, le focus est indiqué. Bien que les styles de focus soient toujours requis lorsque les utilisateur·ice·s naviguent sur la page avec le clavier ou lorsque le focus est géré via des scripts, les styles de focus ne sont pas requis lorsque l'utilisateur·ice sait où il met le focus, par exemple lorsqu'il utilise un dispositif de pointage tel qu'une souris ou un doigt pour définir physiquement le focus sur un élément, à moins que cet élément continue d'avoir besoin de l'attention de l'utilisateur·ice.

La pseudo-classe `:focus` correspond toujours à l'élément actuellement en focus. La pseudo-classe `:focus-visible` correspond également à l'élément en focus, mais uniquement si l'utilisateur·ice doit être informé de l'emplacement actuel du focus. Parce que la pseudo-classe `:focus-visible` correspond à l'élément en focus lorsque cela est nécessaire, l'utilisation de `:focus-visible` (au lieu de la pseudo-classe `:focus`) permet aux auteur·ice·s de modifier l'apparence de l'indicateur de focus sans changer le moment où l'indicateur de focus apparaît.

Lorsque la pseudo-classe [`:focus`](/fr/docs/Web/CSS/Reference/Selectors/:focus) est utilisée, elle cible toujours l'élément actuellement en focus. Cela signifie que lorsque l'utilisateur·ice utilise un dispositif de pointage, un contour de focus visible apparaît autour de l'élément en focus, ce que certains considèrent comme intrusif. La pseudo-classe `:focus-visible` respecte le comportement d'indication de focus sélectif des agents utilisateur·ice·s tout en permettant la personnalisation de l'indicateur de focus.

## Accessibilité

### Troubles de la vision

Il faut s'assurer que l'indicateur visuel de focus puisse être vu par des personnes ayant une vision faible. Cela pourra d'autant plus bénéficier aux personnes qui consultent le document dans un endroit fortement éclairé (dehors au soleil par exemple). La recommandation [WCAG 2.1 SC 1.4.11 Non-Text Contrast <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) nécessite un contraste minimum de 3 à 1.

- Indicateurs visuels de focus accessibles&nbsp;: [Conseils sur la conception d'indicateurs utiles et utilisables <sup>(angl.)</sup>](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Troubles cognitifs

L'apparition ou la disparition d'un indicateur de focus peut être source de confusion pour les personnes souffrant de troubles cognitifs ou pour les personnes qui ne sont pas habituées à ces interfaces.

## Exemples

### Comparaison de :focus et :focus-visible

Cet exemple présente trois paires de contrôles. Chaque paire se compose d'un champ de saisie [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text) et d'un bouton.

- La première paire n'ajoute aucun style personnalisé pour les états de focus et affiche le cas par défaut.
- La deuxième paire ajoute des styles à l'aide de la pseudo-classe `:focus`.
- La troisième paire ajoute des styles à l'aide de la pseudo-classe `:focus-visible`.

#### HTML

```html
<input type="text" value="Default styles" /><br />
<button>Styles par défaut</button><br />

<input class="focus-only" type="text" value=":focus" /><br />
<button class="focus-only">:focus only</button><br />

<input class="focus-visible-only" type="text" value=":focus-visible" /><br />
<button class="focus-visible-only">:focus-visible only</button>
```

#### CSS

```css
input,
button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

Si vous cliquez sur chaque élément tour à tour, vous verrez que lorsque `:focus` est utilisé pour mettre en forme l'anneau de focus, l'agent utilisateur dessine l'anneau de focus lorsque l'utilisateur·ice clique sur le bouton. Cependant, lorsque `:focus-visible` est utilisé pour mettre en forme l'anneau de focus, l'agrent utilisateur ne dessine pas l'anneau de focus lorsque l'utilisateur·ice clique sur le bouton, comme dans le cas par défaut.

Si vous parcourez ensuite chaque élément à l'aide de la touche Tab, vous constaterez que dans les trois cas — par défaut, `:focus` et `:focus-visible` — l'agent utilisateur dessine l'anneau de focus autour du bouton lorsque l'utilisateur·ice y accède à l'aide du clavier.

Cela montre comment `:focus-visible` permet à un·e concepteur·rice de suivre la logique du navigateur pour déterminer quand un anneau de focus doit être affiché.

{{EmbedLiveSample('Comparaison_de_focus_et_focus-visible', '100%', '300')}}

### Fournir un :focus de repli

Si votre code doit fonctionner dans d'anciennes versions de navigateurs qui ne prennent pas en charge `:focus-visible`, vérifiez la prise en charge de `:focus-visible` avec {{cssxref('@supports')}} et répétez le même style de mise en évidence, mais à l'intérieur d'une règle `:focus`. Notez que même si vous ne spécifiez rien du tout pour `:focus`, les anciens navigateurs afficheront simplement le contour natif, ce qui peut être suffisant.

```html
<button class="button with-fallback" type="button">
  Bouton avec solution de repli
</button>
<button class="button without-fallback" type="button">
  Bouton sans solution de repli
</button>
```

```css
.button {
  margin: 10px;
  border: 2px solid darkgray;
  border-radius: 4px;
}

.button:focus-visible {
  /* Dessine le focus lorsque :focus-visible est pris en charge */
  outline: 3px solid deepskyblue;
  outline-offset: 3px;
}

@supports not selector(:focus-visible) {
  .button.with-fallback:focus {
    /* Solution de repli pour les navigateurs ne prenant pas en charge :focus-visible */
    outline: 3px solid deepskyblue;
    outline-offset: 3px;
  }
}
```

{{EmbedLiveSample("Fournir_un_focus_de_repli", '100%', 72)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":focus")}}
- {{cssxref(":focus-within")}}
