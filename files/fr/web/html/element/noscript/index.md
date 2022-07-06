---
title: <noscript>
slug: Web/HTML/Element/noscript
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/noscript
---
{{HTMLRef}}

L'élément HTML **`<noscript>`** définit un fragment HTML qui doit être affiché si les fonctionnalités de script ne sont pas prises en charge ou si elles sont désactivées.

## Attributs

On peut uniquement utiliser [les attributs universels](/fr/docs/Web/HTML/Attributs_universels) sur cet élément.

## Exemples

### HTML

```html
<noscript>
  <!-- Un lien vers un site externe -->
  <a href="http://www.mozilla.com/">Un autre site</a>
</noscript>
<p>Elle est où la poulette ?</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","200")}}

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
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_m%C3%A9ta-donn%C3%A9es"
          >Contenu de métadonnées</a
        >,
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras%C3%A9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Lorsque les fonctionnalités de script sont désactivées et que l'élément
        est un descendant d'un élément {{HTMLElement("head")}} : zéro
        ou plusieurs éléments {{HTMLElement("link")}},
        {{HTMLElement("style")}},{{HTMLElement("meta")}}.<br />Lorsque
        les fonctionnalités de script sont désactivées et que cet élément n'est
        pas un descendant d'un élément {{HTMLElement("head")}} : du
        <a
          href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu#Modèle_de_contenu_transparent"
          >contenu transparent</a
        >
        mais sans élément <code>&#x3C;noscript></code> parmi les descendants.<br />Sinon
        : du contenu de flux ou du
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras%C3%A9"
          >contenu phrasé</a
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
        <p>
          Tout élément qui accepte du
          <a
            href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras%C3%A9"
            >contenu phrasé</a
          >
          et qui n'a pas d'ancêtre qui soit un élément
          <code>&#x3C;noscript></code> ; ou, s'il s'agit d'un document HTML, un
          élément {{HTMLElement("head")}} (sans ancêtre
          <code>&#x3C;noscript></code>).
        </p>
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
| {{SpecName('HTML WHATWG', 'scripting.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'scripting-1.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML5 W3C')}}     |              |
| {{SpecName('HTML4.01', 'interact/scripts.html#h-18.3.1', '&lt;noscript&gt;')}}             | {{Spec2('HTML4.01')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.noscript")}}
