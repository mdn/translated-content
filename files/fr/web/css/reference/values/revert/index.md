---
title: Mot-clé CSS `revert`
short-title: revert
slug: Web/CSS/Reference/Values/revert
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Le mot-clé [CSS](/fr/docs/Web/CSS) **`revert`** remonte la valeur en cascade de la propriété de sa valeur actuelle à la valeur que la propriété aurait eue si aucun changement n'avait été apporté par le **{{Glossary("style origin", "style d'origine")}}** actuel à l'élément actuel. Ainsi, il réinitialise la propriété soit à la valeur définie par l'agent utilisateur, à la valeur définie par l'utilisateur·ice, à sa valeur héritée (si elle est héritée), ou à la valeur initiale. Il peut être appliqué à n'importe quelle propriété CSS, y compris la propriété raccourcie CSS {{CSSxRef("all")}}.

Ce mot-clé supprime de la cascade tous les styles qui ont été remplacés jusqu'à ce que le style auquel on revient soit atteint.

- Lorsqu'il est utilisé dans les styles propres à un site (l'origine de l'auteur·ice), `revert` rétablit la valeur de la propriété de la cascade au style personnalisé de l'utilisateur·ice, s'il en existe un&nbsp;; dans le cas contraire, il rétablit le style par défaut de l'agent utilisateur.
- Lorsqu'il est utilisé dans une feuille de style personnalisée de l'utilisateur·ice, ou si le style a été appliqué par l'utilisateur·ice (l'origine de l'utilisateur·ice), `revert` rétablit la valeur en cascade au style par défaut de l'agent utilisateur.
- Lorsqu'il est utilisé dans les styles par défaut de l'agent utilisateur, ce mot-clé est fonctionnellement équivalent à {{CSSxRef("unset")}}.

Le mot-clé `revert` fonctionne exactement de la même manière que {{CSSxRef("unset")}} dans de nombreux cas. La seule différence concerne les propriétés dont les valeurs sont définies par le navigateur ou par des feuilles de style personnalisées créées par les utilisateur·ice·s (définies côté navigateur).

La remontée n'affecte pas les règles appliquées aux enfants d'un élément que vous réinitialisez (mais supprime les effets d'une règle parente sur un enfant). Ainsi, si vous avez `color: green` pour toutes les sections et `all: revert` sur une section spécifique, la couleur de la section est noire. Mais si vous avez une règle pour rendre tous les paragraphes rouges, alors tous les paragraphes sont toujours rouges dans toutes les sections.

> [!NOTE]
> La remontée est simplement une valeur. Il est toujours possible de remplacer la valeur `revert` en utilisant la [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity).

> [!NOTE]
> Le mot-clé `revert` est différent et ne doit pas être confondu avec le mot-clé {{CSSxRef("initial")}}, qui utilise la [valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) définie pour chaque propriété par les spécifications CSS. En revanche, les feuilles de style de l'agent utilisateur définissent des valeurs par défaut sur la base des sélecteurs CSS.
>
> Par exemple, la [valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) pour la propriété [`display`](/fr/docs/Web/CSS/Reference/Properties/display#définition_formelle) est `inline`, tandis qu'une feuille de style normale de l'agent utilisateur définit la valeur par défaut {{CSSxRef("display")}} des {{HTMLElement("div")}} à `block`, des {{HTMLElement("table")}} à `table`, etc.

## Exemples

### `revert` et `unset`

Bien que `revert` et `unset` soient semblables, ils diffèrent pour certaines propriétés de certains éléments.

Ainsi, dans l'exemple ci-dessous, nous définissons une valeur personnalisée pour [`font-weight`](/fr/docs/Web/CSS/Reference/Properties/font-weight#définition_formelle), puis essayons de la `revert` et `unset` en ligne dans le document HTML. Le mot-clé `revert` rétablit le texte en gras, car c'est la valeur par défaut pour les en-têtes dans la plupart des navigateurs. Le mot-clé `unset` conserve le texte normal, car en tant que propriété héritée, le `font-weight` hériterait alors de sa valeur du corps.

#### HTML

```html
<h3 style="font-weight: revert; color: revert;">
  Ceci devrait avoir font-weight: bold (la valeur originale) et color: black
</h3>
<p>Juste un peu de texte</p>
<h3 style="font-weight: unset; color: unset;">
  Ceci a toujours font-weight: normal mais color: black
</h3>
<p>Juste un peu de texte</p>
```

#### CSS

```css
h3 {
  font-weight: normal;
  color: blue;
}
```

#### Résultat

{{EmbedLiveSample("`revert` et `unset`")}}

### Remonter `all`

La restauration de toutes les valeurs s'avère utile lorsque vous avez apporté plusieurs modifications de style et que vous souhaitez revenir aux valeurs par défaut du navigateur. Ainsi, dans l'exemple ci-dessus, au lieu de rétablir les propriétés `font-weight` et `color` séparément, vous pouvez simplement les réinitialiser toutes en même temps — en appliquant le mot-clé `revert` à `all`.

#### CSS

```css
h3 {
  font-weight: normal;
  color: blue;
  border-bottom: 1px solid grey;
}
```

#### HTML

```html
<h3>Un style spécifique</h3>
<p>Juste un peu de texte</p>
<h3 style="all: revert">
  Retour aux réglages par défaut pour toutes les propriétés
</h3>
<p>Juste un peu de texte</p>
```

#### Résultat

{{EmbedLiveSample("Remonter `all`")}}

### Revenir sur une propriété du parent

La restauration supprime effectivement la valeur de l'élément que vous sélectionnez à l'aide d'une règle, et cela ne s'applique qu'à cet élément. Pour illustrer cela, nous allons attribuer la couleur verte à une section et la couleur rouge à un paragraphe.

#### HTML

```html
<main>
  <section>
    <h3>Ce texte est vert foncé</h3>
    <p>Ce texte est rouge.</p>
    Ce texte est aussi vert.
  </section>
  <section class="with-revert">
    <h3>Ce texte est bleu acier</h3>
    <p>Ce texte est rouge.</p>
    Ce texte est aussi bleu acier.
  </section>
</main>
```

#### CSS

```css hidden
main {
  border: 3px solid steelblue;
}

section {
  margin: 0.5rem;
  border: 2px dashed darkgreen;
}
```

```css
main {
  color: steelblue;
}
section {
  color: darkgreen;
}
p {
  color: red;
}
section.with-revert {
  color: revert;
}
```

#### Résultat

{{EmbedLiveSample("Revenir sur une propriété du parent")}}

Remarquez comment le paragraphe est toujours rouge même si une propriété `color` pour la section a été rétablie. De plus, notez que l'en-tête et le nœud de texte simple sont tous deux `steelblue`. Le résultat de la restauration fait comme si `section { color: darkgreen; }` n'existait pas pour la section avec `color: revert` appliqué.

De plus, si ni l'agent utilisateur ni l'utilisateur·ice ne remplacent les valeurs de couleur de `<h3>` ou `<section>`, alors la couleur `steelblue` est héritée de `<main>`, car la propriété {{CSSxRef("color")}} est une propriété héritée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Utilisez le mot-clé {{CSSxRef("initial")}} pour définir une propriété à sa valeur initiale.
- Utilisez le mot-clé {{CSSxRef("inherit")}} pour que la propriété d'un élément soit la même que celle de son parent.
- Utilisez le mot-clé {{CSSxRef("revert-layer")}} pour réinitialiser une propriété à la valeur établie dans une couche de cascade précédente.
- Utilisez le mot-clé {{CSSxRef("revert-rule")}} pour réinitialiser une propriété à la valeur d'une règle de style correspondante antérieure.
- Utilisez le mot-clé {{CSSxRef("unset")}} pour définir une propriété à sa valeur héritée si elle est héritée ou à sa valeur initiale sinon.
- La propriété {{CSSxRef("all")}} permet de réinitialiser toutes les propriétés à leur état initial, hérité, rétabli ou non défini.
