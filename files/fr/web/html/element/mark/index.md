---
title: '<mark> : l''élément de marquage du texte'
slug: Web/HTML/Element/mark
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/mark
---
{{HTMLRef}}

L'élément HTML **`<mark>`** représente un texte marqué ou surligné à cause de sa pertinence dans le contexte. Il peut par exemple être utilisé afin d'indiquer les correspondances d'un mot-clé recherché au sein d'un document.

{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## **Notes d'utilisation**

- Au sein d'une citation ({{HTMLElement("q")}}) ou dans un autre bloc ({{HTMLElement("blockquote")}}), le texte surligné marque généralement du texte référencé en dehors de la citation ou qui est indiqué pour demander une attention particulière bien que l'auteur ne considère pas ce texte comme important.
- Au sein du texte principal, le texte surligné marque du texte d'une pertinence partiulière pour l'utilisateur (par exemple lorsqu'il recherche un terme en particulier).
- `<mark>` ne doit pas être utilisé pour de la coloration syntaxique, c'est l'élément {{HTMLElement("span")}} qui devra être utilisé.
- `<mark>` ne doit pas être confondu avec {{HTMLElement("strong")}}. L'élément {{HTMLElement("strong")}} est utilisé afin d'indiquer des fragments de texte _importants_ alors que `<mark>` est utilisé afin d'indiquer des fragments de texte _pertinents_.

## Exemples

### Exemple simple

#### HTML

```html
<p>
  L'élément &lt;mark&gt; est utilisé pour
  <mark>mettre en avant</mark>
  du texte pertinent dans le contexte.
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple_simple","100%","100%")}}

### Identifier des passages

Dans cet exemple, on utilise `<mark>` pour marquer les résultats d'une recherche dans un passage.

#### HTML

```html
<p>It is a dark time for the Rebellion. Although the Death
Star has been destroyed, <mark class="match">Imperial</mark>
troops have driven the Rebel forces from their hidden base and
pursued them across the galaxy.</p>

<p>Evading the dreaded <mark class="match">Imperial</mark>
Starfleet, a group of freedom fighters led by Luke Skywalker
has established a new secret base on the remote ice world of
Hoth.</p>
```

#### Résultat

{{EmbedLiveSample("Identifier_des_passages", 650, 130)}}

## Accessibilité

Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément `mark`. On peut le rendre annonçable via la propriété CSS {{cssxref("content")}} et grâce aux pseudo-éléments {{cssxref("::before")}} et {{cssxref("::after")}}.

    mark::before,
    mark::after {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    mark::before {
      content: " [Début du marquage]";
    }

    mark::after {
      content: " [Fin du marquage] ";
    }

Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été marqué.

- [_Short note on making your mark (more accessible) | The Paciello Group_ (en anglais)](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [_Tweaking Text Level Styles | Adrian Roselli_ (en anglais)](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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
        Tout élément qui accepte
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >du contenu phrasé</a
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

| Spécification                                                                                                        | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-mark-element','&lt;mark&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-mark-element', '&lt;mark&gt;')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.mark")}}
