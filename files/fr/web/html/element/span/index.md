---
title: <span>
slug: Web/HTML/Element/span
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/span
---
{{HTMLRef}}

L'élément HTML **`<span>`** est un conteneur générique en ligne (_inline_) pour les contenus phrasés. Il ne représente rien de particulier. Il peut être utilisé pour grouper des éléments afin de les mettre en forme (grâce aux attributs {{htmlattrxref("class")}} ou {{htmlattrxref("id")}} et aux règles [CSS](/fr/docs/Web/CSS)) ou parce qu'ils partagent certaines valeurs d'attribut comme {{htmlattrxref("lang")}}. Il doit uniquement être utilisé lorsqu'aucun autre élément sémantique n'est approprié. `<span>` est très proche de l'élément {{HTMLElement("div")}}, mais l'élément `<div>` est [un élément de bloc](/fr/docs/Web/HTML/Éléments_en_bloc), alors que `<span>` est [un élément en ligne](/fr/docs/Web/HTML/Éléments_en_ligne).

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### HTML

```html
<p><span>Un peu de texte</span></p>
```

### CSS

```css
p span {
  background: green;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100")}}

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
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >, ou tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{domxref("HTMLSpanElement")}} (avant HTML 5, l'interface
        était {{domxref("HTMLElement")}})
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                            | État                             | Commentaires                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-span-element', '&lt;span&gt;')}} | {{Spec2('HTML WHATWG')}} |                                                                         |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-span-element', '&lt;span&gt;')}}     | {{Spec2('HTML5 W3C')}}     | L'interface DOM est désormais {{domxref("HTMLSpanElement")}}. |
| {{SpecName('HTML4.01', 'struct/global.html#edef-SPAN', '&lt;span&gt;')}}                         | {{Spec2('HTML4.01')}}     |                                                                         |

## Compatibilité des navigateurs

{{Compat("html.elements.span")}}

## Voir aussi

- {{HTMLElement("div")}}
