---
title: <object>
slug: Web/HTML/Element/object
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/object
---
{{HTMLRef}}

L'élément HTML **`<object>`** représente une ressource externe qui peut être interprétée comme une image, un contexte de navigation imbriqué ou une ressource à traiter comme un _plugin_.

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("data")}}
  - : L'adresse de la ressource, une URL valide. Au moins un attribut **`data`** et un attribut **`type`** doivent être définis.
- {{htmlattrdef("form")}} {{HTMLVersionInline(5)}}
  - : L'élément de formulaire éventuel auquel l'élément est associé. La valeur de cet attribut doit être l'identifiant d'un élément  {{HTMLElement("form")}} du même document.
- {{htmlattrdef("height")}}
  - : La hauteur de la ressource à afficher, exprimée en pixels [CSS](/fr/docs/Web/CSS) (uniquement en valeur absolue).
- {{htmlattrdef("name")}}
  - : Le nom du contexte de navigation valide (HTML5) ou du contrôle associé à l'élément (HTML 4).
- {{htmlattrdef("type")}}
  - : Le type MIME de la ressource définie par  **`data`**. Au moins un attribut **`data`** et un attribut **`type`** doivent être définis.
- {{htmlattrdef("typemustmatch")}} {{HTMLVersionInline(5)}}
  - : Cet attribut booléen indique si l'attribut `type` doit correspondre [au type MIME](/fr/docs/Glossaire/Type_MIME) de la ressource afin que celle-ci puisse être utilisée.
- {{htmlattrdef("usemap")}}
  - : Une référence à l'élément {{HTMLElement("map")}}. La valeur de cet attribut doit être un '#' suivi de la valeur d'un attribut {{htmlattrxref("name", "map")}} d'un élément {{HTMLElement('map')}}.
- {{htmlattrdef("width")}}
  - : La largeur de la ressource à afficher, exprimée en pixels CSS (uniquement en valeur absolue).

### Attributs obsolètes

- {{htmlattrdef("archive")}} {{HTMLVersionInline(4)}} seulement ; {{deprecated_inline}}
  - : Une liste d'URIs séparés par des espaces, pointant vers des archives de resources pour l'objet.
- {{htmlattrdef("border")}} {{deprecated_inline}}
  - : La largeur de la bordure autour de l'objet, exprimée en pixels.
- {{htmlattrdef("classid")}} {{HTMLVersionInline(4)}} seulement ; {{deprecated_inline}}
  - : L'URI de l'implémentation de l'objet. Cet attribut peut être utilisé avec (ou en remplacement de) l'attribut **`data`**.
- {{htmlattrdef("codebase")}} {{HTMLVersionInline(4)}} seulement ; {{deprecated_inline}}
  - : Le chemin absolu de base servant à résoudre les URIs relatifs spécifiés par **`classid`**, **`data`**, ou **`archive`**. S'il n'est pas renseigné, l'URI de base considéré sera celui du document.
- {{htmlattrdef("codetype")}} {{HTMLVersionInline(4)}} seulement ; {{deprecated_inline}}
  - : Le type de contenu des données spécifiés par **`classid`**.

<!---->

- {{htmlattrdef("declare")}} {{HTMLVersionInline(4)}} seulement ; {{deprecated_inline}}
  - : Si cet attribut booléen est présent, l'élément sera seulement une déclaration. L'objet devra donc être instancié par un élément  `<object>` dans la suite du document. En HTML5, il faut répéter l'élément \<object> complètement chaque fois que la ressource est ré-utilisée.

<!---->

- {{htmlattrdef("standby")}} {{HTMLVersionInline(4)}} seulement ; {{deprecated_inline}}
  - : Un message que le navigateur peut afficher pendant le chargement de l'implémentation et des données liées à l'objet.
- {{htmlattrdef("tabindex")}} {{HTMLVersionInline(4)}} seulement ; {{deprecated_inline}}
  - : La position de l'élément dans la navigation par onglets au sein de l'élément courant.

## Exemples

### HTML

```html
<object data="https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf" type="application/pdf"
        width="500" height="500" typemustmatch>
  <p>Vous n'avez pas de plugin PDF mais vous pouvez <a href="https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf">télécharger le fichier.</a></p>
</object>

<!-- Un exemple avec Flash -->
<!--
<object data="animation.swf" type="application/x-shockwave-flash">
  <param name="param11" value="valeurConf">
</object>
-->
```

### Résultat

{{EmbedLiveSample("Exemples","520","520")}}

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
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >,
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_int.C3.A9gr.C3.A9"
          >contenu intégré</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >. Si l'élément a un attribut <strong>usemap</strong> il fait aussi
        partie de la catégorie de
        <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_interactif"
          >contenu interactif</a
        >,
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_associ.C3.A9_aux_formulaires"
          >contenu listé pour les formulaires (<em>listed</em>), contenu pouvant
          être envoyé par un formulaire (<em>submittable</em>)</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        Zéro ou plusieurs éléments {{HTMLElement("param")}} suivis par
        du
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Mod.C3.A8le_de_contenu_transparent"
          >contenu transparent.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balise</dfn></th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>Tout élément acceptant du contenu intégré.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        {{ARIARole("application")}}, {{ARIARole("document")}},
        {{ARIARole("image")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLObjectElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                            | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'embedded-content.html#the-object-element', '&lt;object&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#the-object-element', '&lt;object&gt;')}} | {{Spec2('HTML5 W3C')}}     |              |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.3', '&lt;object&gt;')}}                         | {{Spec2('HTML4.01')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.object")}}

## Voir aussi

- {{HTMLElement("param")}}
- {{HTMLElement("applet")}} {{deprecated_inline}}
- {{HTMLElement("embed")}}
