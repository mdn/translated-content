---
title: '<rtc> : l''élément de conteneur de texte Ruby'
slug: Web/HTML/Element/rtc
tags:
  - Element
  - HTML
  - Reference
  - Ruby
  - Web
translation_of: Web/HTML/Element/rtc
---
{{HTMLRef}}

L'élément **`<rtc>`** permet d'ajouter des notations Ruby sémantiques. Il est donc « proche » des éléments liées à la représentation Ruby comme {{HTMLElement("rb")}}, {{HTMLElement("ruby")}}. Les éléments {{HTMLElement("rb")}} peuvent être annotés pour la prononciation ({{HTMLElement("rt")}}) ou pour la sémantique ({{HTMLElement("rtc")}}).

{{EmbedInteractiveExample("pages/tabbed/rtc.html", "tabbed-standard")}}

## Attributs

Cet élément peut utiliser [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemple

### HTML

```html
<ruby>
   <rb>旧</rb> <rt>jiù</rt>
   <rb>金</rb> <rt>jīn</rt>
   <rb>山</rb> <rt>shān</rt>
   <rtc>San Francisco</rtc>
</ruby>
```

```css hidden
.info {
  padding-top: 10px;
  font-size: 36px;
}
```

### Résultat

{{EmbedLiveSample("Exemple",600,120)}}

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
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Du
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >
        ou des éléments {{HTMLElement("rt")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de fin peut être omise si l'élément est immédiatement suivi
        par un élément {{HTMLElement("rb")}},
        {{HTMLElement("rtc")}} ou {{HTMLElement("rt")}} ou s'il est
        immédiatement suivi par la balise de fermeture de l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("ruby")}}.</td>
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

| Spécification                                                                                                    | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('HTML5.3', 'textlevel-semantics.html#the-rtc-element', '&lt;rtc&gt;')}}     | {{Spec2('HTML5.3')}} |                      |
| {{SpecName('HTML5.2', 'textlevel-semantics.html#the-rtc-element', '&lt;rtc&gt;')}}     | {{Spec2('HTML5.2')}} |                      |
| {{SpecName('HTML5.1', 'textlevel-semantics.html#the-rtc-element', '&lt;rtc&gt;')}}     | {{Spec2('HTML5.1')}} |                      |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-rtc-element', '&lt;rtc&gt;')}} | {{Spec2('HTML5 W3C')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.rtc")}}

## Voir aussi

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rtc")}}
