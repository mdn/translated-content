---
title: "<em> : l'élément d'emphase"
slug: Web/HTML/Reference/Elements/em
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<em>`** marque le texte qui reçoit une emphase. L'élément `<em>` peut être imbriqué, chaque niveau d'imbrication indiquant un degré d'emphase plus élevé.

{{InteractiveExample("HTML Demo: &lt;em&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Sors du lit <em>maintenant</em>&nbsp;!</p>

<p>Nous <em>devons</em> faire quelque chose à ce sujet.</p>

<p>Ce n'est <em>pas</em> un exercice&nbsp;!</p>
```

```css interactive-example
em {
  /* Ajoutez vos styles ici */
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

L'élément `<em>` est destiné aux mots dont l'accent est souligné par rapport au texte environnant, ce qui est souvent limité à un ou plusieurs mots d'une phrase et affecte le sens de la phrase elle-même.

En général, cet élément est affiché en italique. Cependant, il ne doit pas être utilisé pour appliquer un style italique&nbsp;; utilisez pour cela la propriété CSS {{CSSxRef("font-style")}}. Utilisez l'élément {{HTMLElement("cite")}} pour marquer le titre d'une œuvre (livre, pièce, chanson, etc.). Utilisez l'élément {{HTMLElement("i")}} pour marquer un texte qui adopte un ton ou un registre différent, ce qui couvre de nombreuses situations courantes d'italique, comme les noms scientifiques ou les mots dans d'autres langues. Utilisez l'élément {{HTMLElement("strong")}} pour marquer un texte d'une importance supérieure au texte environnant.

### `<i>` ou `<em>` ?

Certain·e·s développeur·euse·s peuvent être dérouté·e·s par le fait que plusieurs éléments produisent apparemment des résultats visuels similaires. `<em>` et `<i>` en sont un exemple courant, car ils mettent tous deux le texte en italique. Quelle est la différence&nbsp;? Lequel doit‑on utiliser&nbsp;?

Par défaut, le rendu visuel est identique. Cependant, la signification sémantique diffère. L'élément `<em>` indique une emphase sur son contenu, tandis que l'élément `<i>` marque un texte mis à l'écart de la prose normale, comme un mot étranger, les pensées d'un personnage fictif, ou lorsque le texte se réfère à la définition d'un mot plutôt qu'à son sens sémantique. (Le titre d'une œuvre, comme le nom d'un livre ou d'un film, devrait utiliser `<cite>`.)

Cela signifie que le choix du bon élément dépend de la situation. Aucun des deux n'est destiné à un usage purement décoratif, c'est à cela que sert le style CSS.

Les exemples pour `<em>` pourraient être&nbsp;:

```html live-sample___em-example
<p>Fais-le <em>déjà</em>&nbsp;!</p>
<p>Nous avons <em>dû</em> faire quelque chose à ce sujet.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Une personne ou un logiciel lisant le texte prononcerait les mots en italique avec une emphase, en utilisant l'accentuation verbale.

Les exemples pour `<i>` pourraient être&nbsp;:

```html live-sample___i-example
<p>Le mot <i>the</i> est un article.</p>
<p>Le <i>Queen Mary</i> a pris la mer la nuit dernière.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Ici, il n'y a pas d'emphase ou d'importance supplémentaire sur le mot «&nbsp;Queen Mary&nbsp;». Cela indique simplement que l'objet en question n'est pas une reine nommée Mary, mais un navire nommé «&nbsp;Queen Mary&nbsp;».

## Exemples

L'élément `<em>` est souvent utilisé pour indiquer un contraste, implicite ou explicite.

```html
<p>
  Dans HTML, ce qui était appelé contenu de <em>type bloc</em> est maintenant
  appelé contenu de <em>flux</em>.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">emphasis</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{DOMxRef("HTMLElement")}}. Jusqu'à Gecko 1.9.2 inclus (Firefox 4), Firefox implémentait
        l'interface {{DOMxRef("HTMLSpanElement")}}
        pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("i")}}
