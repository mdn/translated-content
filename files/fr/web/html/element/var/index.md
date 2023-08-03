---
title: "<var> : l'élément de variable"
slug: Web/HTML/Element/var
---

{{HTMLSidebar}}

L'élément HTML **`<var>`** représente une variable dans une expression mathématique ou un texte lié à la programmation. Son contenu est généralement représenté avec une version italique de la police environnante utilisée, toutefois, ce comportement peut dépendre du navigateur utilisé.

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

### Éléments associés

Voici d'autres éléments qui sont fréquemment utilisés dans les contextes où `<var>` est utilisé :

- {{HTMLElement("code")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("samp")}}

Si vous trouvez un élément `<var>` utilisé uniquement pour la mise en forme, il est préférable de remplacer celui-ci par un élément {{HTMLElement("span")}} auquel on appliquera les règles CSS souhaitées.

### Mise en forme par défaut

La plupart des navigateurs appliquent la propriété {{cssxref("font-style")}} avec la valeur `"italic"` lors de l'affichage d'un élément `<var>`. Ce comportement peut être surchargé par la feuille de style CSS du site :

```css
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

## Exemples

### Exemple simple

#### HTML

```html
<p>
  Une équation simple :
  <var>x</var> = <var>y</var> + 2
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple_simple","650","80")}}

### Surcharger la mise en forme par défaut

#### CSS

```css
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

#### HTML

```html
<p>
  Les variables <var>minSpeed</var> et <var>maxSpeed</var> contrôlent les
  vitesses minimale et maximale de l'appareil et sont exprimées en tours par
  minute.
</p>
```

#### Résultat

{{EmbedLiveSample("Surcharger_la_mise_en_forme_par_défaut","650","120")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
