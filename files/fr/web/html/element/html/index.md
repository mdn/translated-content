---
title: "<html> : l'élément de racine du document HTML"
slug: Web/HTML/Element/html
---

{{HTMLSidebar}}

L'élément HTML **`<html>`** représente la racine d'un document HTML ou XHTML. Tout autre élément du document doit être un descendant de cet élément.

## Attributs

Cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `manifest`{{deprecated_inline}}
  - : Définit l'URI d'un manifeste de ressources signifiant que les ressources devraient être mises en cache localement. Voir [Ressources hors-ligne dans Firefox](/fr/docs/Utiliser_Application_Cache) pour plus de détails.
- `version`{{deprecated_inline}}
  - : Définit la version du document HTML _Document Type Definition_ qui s'applique pour le document courant. Cet attribut n'est pas nécessaire car il est redondant avec l'information de version se trouvant dans la déclaration de type du document (_doctype_).
- `xmlns`
  - : Définit l'espace de noms XML du document. La valeur par défaut est "http\://www\.w3.org/1999/xhtml". Cet attribut est obligatoire dans un document XML et optionnel dans un document de type text/html.

## Exemples

Le DOCTYPE utilisé dans l'exemple suivant indique que le document est un document HTML5.

```html
<!doctype html>
<html lang="fr">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

## Notes

Puisque l'élément `<html>` est le premier élément dans un document, autre que les commentaires, il est désigné comme l'élément racine du document. Bien que cette balise soit implicite, ou non requise dans un document [HTML](/fr/docs/Web/HTML), il est requis dans un document [XHTML](/fr/docs/XHTML) (à la fois pour la balise ouvrante et pour la balise fermante).

## Accessibilité

L'utilisation d'un attribut [`lang`](/fr/docs/Web/HTML/Global_attributes#lang) [valide (au sens de l'IETF)](https://www.ietf.org/rfc/bcp/bcp47.txt) pour l'élément HTML permettra aux lecteurs d'écran de déterminer la langue à utiliser pour l'énonciation. La balise de langage utilisée doit correspondre à celle utilisée pour la majorité du contenu de la page. Sans cet attribut, les lecteurs d'écran utiliseront la lange paramétrée par le système d'exploitation, ce qui pourra entraîner des défauts de prononciations.

Ajouter un attribut `lang` valide au sein de l'élément HTML permet également de s'assurer que les métadonnées importantes contenue dans l'élément {{HTMLElement("head")}}, telle que le titre de la page (cf. {{HTMLElement("title")}}) sont énoncées correctement.

- [Comprendre les règles WCAG 3.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.1_—_Readable_Make_text_content_readable_and_understandable)
- _[Understanding Success Criterion 3.1.1 - W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/meaning-doc-lang-id.html)_

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un élément {{HTMLElement("head")}} suivi par un élément
        {{HTMLElement("body")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début peut être absente si le premier objet appartenant à
        l'élément <code>&#x3C;html></code> n'est pas un commentaire.<br />La
        balise de fin peut être absente si l'élément
        <code>&#x3C;html></code> n'est pas directement suivi par un commentaire
        et qu'il contient un élément {{HTMLElement("body")}} qui n'est
        ni vide ou dont la balise de début est présente.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Aucun élément, c'est la racine du document.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLHtmlElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément MathML de plus haut niveau : {{MathMLElement("math")}}
- L'élément SVG de plus haut niveau : {{SVGElement("svg")}}
