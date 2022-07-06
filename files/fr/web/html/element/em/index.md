---
title: '<em> : l''élément d''emphase'
slug: Web/HTML/Element/em
translation_of: Web/HTML/Element/em
browser-compat: html.elements.em
---
{{HTMLRef}}

L'élément [HTML](/fr/docs/Web/HTML) **`<em>`** (pour emphase) est utilisé afin de marquer un texte sur lequel on veut insister. Les éléments `<em>` peuvent être imbriqués, chaque degré d'imbrication indiquant un degré d'insistance plus élevé.

{{EmbedInteractiveExample("pages/tabbed/em.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé"
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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
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
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a
        >. Jusqu'à Gecko 1.9.2 inclus (Firefox 4), Firefox implémentait
        l'interface
        <a href="/fr/docs/Web/API/HTMLSpanElement"
          ><code>HTMLSpanElement</code></a
        >
        pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme tous les éléments HTML, cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

L'élément `<em>` est destiné aux mots dont l'accent est souligné par rapport au texte environnant, ce qui est souvent limité à un ou plusieurs mots d'une phrase et affecte le sens de la phrase elle-même.

Habituellement, cet élément est affiché avec une police italique. Cependant, il ne doit pas être utilisé pour appliquer un style italique&nbsp;; pour la mise en forme, on utilisera l'élément [`<i>`](/fr/docs/Web/HTML/Element/i) ou des styles CSS. Pour marquer le titre d'une œuvre (livre, chanson, pièce, etc.), on utilisera l'élément [`<cite>`](/fr/docs/Web/HTML/Element/cite)&nbsp;; il est aussi habituellement affiché avec une police italique, mais porte un sens différent. Enfin, on utilisera l'élément [`<strong>`](/fr/docs/Web/HTML/Element/strong) pour marquer un texte plus important que le texte qui l'entoure.

### `<i>` ou `<em>`&nbsp;?

Lorsqu'on débute en développement web, on peut être dérouté de voir plusieurs éléments qui produisent des résultats similaires. `<em>` et `<i>` sont un exemple courant, car ils mettent tous deux le texte en italique. Quelle est la différence&nbsp;? Laquelle doit-on utiliser&nbsp;?

Par défaut, le résultat visuel est le même. Cependant, la signification sémantique est différente. L'élément `<em>` représente l'accentuation de son contenu, tandis que l'élément `<i>` représente le texte qui se détache de la prose normale, comme un mot étranger, les pensées d'un personnage fictif, ou lorsque le texte fait référence à la définition d'un mot au lieu de représenter son sens sémantique. (Le titre d'une œuvre, comme le nom d'un livre ou d'un film, devrait utiliser `<cite>`.)

Cela signifie que le choix de l'option à utiliser dépend de la situation. Ni l'un ni l'autre ne sont destinés à des fins purement décoratives, c'est à cela que sert le style CSS.

Un exemple pour `<em>` pourrait être&nbsp;: «&nbsp;_Faites_-le déjà&nbsp;!&nbsp;», ou&nbsp;: «&nbsp;Nous _devions_ faire quelque chose à ce sujet&nbsp;». Une personne ou un logiciel lisant le texte prononcerait les mots en italique avec une emphase, en utilisant l'accentuation verbale.

Un exemple pour `<i>` pourrait être&nbsp;: «&nbsp;Le <i lang="en">Queen Mary</i> a pris la mer la nuit dernière&nbsp;». Ici, il n'y a pas d'accentuation ou d'importance supplémentaire sur le mot «&nbsp;Queen Mary&nbsp;». Il est simplement indiqué que l'objet en question n'est pas une reine nommée Mary, mais un navire nommé <i lang="en">Queen Mary</i>. Un autre exemple de `<i>` pourrait être&nbsp;: «&nbsp;Le mot <i lang="en">the</i> est un article&nbsp;».

## Exemple

L'élément `<em>` est souvent utilisé pour indiquer un contraste, implicite ou explicite.

```html
<p>
  Dans HTML5, ce qui était appelé contenu de <em>type bloc</em>
  est maintenant appelé contenu de <em>flux</em>.
</p>
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<i>`](/fr/docs/Web/HTML/Element/i)
