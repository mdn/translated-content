---
title: '<pre> : l''élément de texte préformaté'
slug: Web/HTML/Element/pre
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/pre
---
{{HTMLRef}}

L'élément HTML **`<pre>`** représente du texte préformaté, généralement écrit avec une police à chasse fixe. Le texte est affiché tel quel, les espaces utilisés dans le document HTML seront retranscrits.

> **Note :** Il est nécessaire d'échapper les caractères '`<`' en '`&lt;`' afin de s'assurer que le code écrit entre les éléments ne soit pas interprété de façon involontaire.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("cols")}} {{non-standard_inline}}{{deprecated_inline}}
  - : Cet attribut contient le nombre _préféré_ de caractères qu'une ligne devrait avoir. Cet attribut était un synonyme non-standard de {{htmlattrxref("width", "pre")}}. Afin d'obtenir cet effet, il est plutôt conseillé d'utiliser la propriété {{cssxref("width")}}.
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : Cet attribut contient le nombre _préféré_ de caractères qu'une ligne devrait avoir. Bien qu'implémenté, cet attribut n'a aucun effet visuel. Pour obtenir cet effet, il est plutôt conseillé d'utiliser {{cssxref("width")}}.
- {{htmlattrdef("wrap")}} {{non-standard_inline}}
  - : Cet attribut est une indication sur la façon de gérer le dépassement d'une ligne. Les navigateurs modernes ignorent cette indication et cet attribut n'engendre aucun effet visuel. Pour obtenir cet effet, il faut utiliser la propriété CSS {{cssxref("white-space")}}.

## Exemples

### HTML

```html
<pre>
body {
  color:red;
}
</pre>
```

### Résultat

{{EmbedLiveSample("Exemples","200","120")}}

## Accessibilité

Il est important de fournir une description alternative pour toute image ou diagramme créé avec du texte préformaté. Cette description alternative devrait décrire clairement, et de façon concise, le contenu du diagramme.

Les personnes souffrant de troubles de la vision et/ou naviguant à l'aide d'outils d'assistance comme des lecteurs d'écran peuvent ne pas comprendre le diagramme si celui-ci est construit avec des lettres et symboles.

Pour légender un tel diagramme, on pourra utiliser une combinaison d'éléments {{HTMLElement("figure")}} et {{HTMLElement("figcaption")}} relié via un attribut {{htmlattrxref("id")}} et les attributs [ARIA](/fr/docs/Accessibilité/ARIA) `role` et `aria-labelledby` afin que le texte soit annoncé comme une image et que l'élément `figcaption` fournisse la description alternative.

### Exemple

    <figure role="img" aria-labelledby="legende-vache">
      <pre>
      _____________
    < Oh la vache !>
      -------------
             \   ^__^
              \  (oo)\_______
                 (__)\       )\/\
                     ||----w |
                     ||     ||
      </pre>
      <figcaption id="legende-vache">
        Une vache qui dit « Oh la vache ! ». La vache est illustrée avec du texte à chasse fixe.
      </figcaption>
    </figure>

- [Comprendre les règles WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_—_Providing_text_alternatives_for_non-text_content)
- [_H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0_ (en anglais)](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                | État                             | Commentaires                                                         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-pre-element', '&lt;pre&gt;')}}         | {{Spec2('HTML WHATWG')}} | Aucune modification majure depuis {{SpecName("HTML5 W3C")}}   |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-pre-element', '&lt;pre&gt;')}} | {{Spec2('HTML5 W3C')}}     | Aucune modification majeure depuis {{SpecName("HTML4.01")}}. |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.3.4', '&lt;pre&gt;')}}                     | {{Spec2('HTML4.01')}}     | Dépréciation de l'attribut  `cols`.                                  |

## Compatibilité des navigateurs

{{Compat("html.elements.pre")}}

## Voir aussi

- Les propriétés CSS {{cssxref('white-space')}} et {{cssxref('word-break')}}
