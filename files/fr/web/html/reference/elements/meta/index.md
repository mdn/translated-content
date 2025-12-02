---
title: "<meta> : l'élément de métadonnées"
slug: Web/HTML/Reference/Elements/meta
original_slug: Web/HTML/Element/meta
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

L'élément [HTML](/fr/docs/Web/HTML) **`<meta>`** représente toute information de {{Glossary("Metadata","métadonnées")}} qui ne peut pas être représentée par un des autres éléments de métadonnées, tels que {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} ou {{HTMLElement("title")}}.

`<meta>` peut fournir différents types de métadonnées&nbsp;:

- Si l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) est défini, l'élément `<meta>` fournit des _métadonnées au niveau du document_ qui s'appliquent à toute la page.
- Si l'attribut [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv) est défini, l'élément `<meta>` agit comme une _directive pragma_ pour simuler des directives qui pourraient autrement être données par un en-tête HTTP.
- Si l'attribut [`charset`](#charset) est défini, l'élément `<meta>` est une _déclaration d'encodage_, indiquant l'encodage des caractères utilisé dans le document.
- Si l'attribut [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop) est défini, l'élément `<meta>` fournit des _métadonnées définies par l'utilisateur·ice_.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> L'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) possède une signification spécifique pour l'élément `<meta>`.
> L'attribut [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop) ne doit pas être utilisé sur un élément `<meta>` qui inclut un attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name), [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv) ou [`charset`](#charset).

- `charset`
  - : Cet attribut indique l'encodage des caractères pour le document. Si cet attribut est présent, sa valeur doit correspondre (quelle que soit la casse) à «&nbsp;utf-8&nbsp;», car UTF-8 est le seul encodage valide pour les documents HTML5. Les éléments `<meta>` qui déclarent un encodage doivent apparaître entièrement dans les 1024 premiers octets du document.
- [`content`](/fr/docs/Web/HTML/Reference/Attributes/content)
  - : Cet attribut fournit la valeur associée à l'attribut [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv) ou [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name), selon le contexte d'utilisation.
- [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv)
  - : Définit une directive de pragma, c'est-à-dire une instruction pour le navigateur concernant le traitement du document. Le nom de l'attribut est l'abréviation de «&nbsp;http-equivalent&nbsp;», car les valeurs autorisées correspondent aux noms d'en-têtes HTTP équivalents.
- `media`
  - : L'attribut `media` définit à quel média la couleur de thème définie dans l'attribut `content` doit s'appliquer. Sa valeur est une [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using), qui prend la valeur par défaut «&nbsp;all&nbsp;» si l'attribut est absent. Cet attribut n'est pertinent que lorsque l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) de l'élément est défini à [`theme-color`](/fr/docs/Web/HTML/Reference/Elements/meta/name/theme-color). Sinon, il n'a aucun effet et ne doit pas être inclus.
- [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name)
  - : Les attributs `name` et `content` peuvent être utilisés ensemble pour fournir des métadonnées au document sous forme de paires nom-valeur, l'attribut `name` donnant le nom de la métadonnée et l'attribut `content` sa valeur.

## Exemples

### Définir une méta description

La balise `<meta>` suivante fournit une `description` comme métadonnée pour la page web&nbsp;:

```html
<meta
  name="description"
  content="La référence HTML décrit tous les éléments et attributs HTML, y compris les attributs globaux qui s'appliquent à tous les éléments." />
```

### Définir une redirection de page

L'exemple suivant utilise `http-equiv="refresh"` pour demander au navigateur d'effectuer une redirection.
L'attribut `content="3;url=https://www.mozilla.org"` redirigera la page vers `https://www.mozilla.org` après 3 secondes&nbsp;:

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données">Contenu de métadonnées</a>. Si l'attribut <a href="/fr/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a> est utilisé&nbsp;: du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a> ou du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, cet élément est un {{Glossary("void element", "élément vide")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Étant un élément vide, la balise de début doit être présente et la balise de fin doit être absente.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        <li>
          <code>&lt;meta charset&gt;</code>, <code>&lt;meta http-equiv&gt;</code>&nbsp;: un élément {{HTMLElement("head")}}. Si l'attribut <a href="#http-equiv"><code>http-equiv</code></a> n'est pas une déclaration d'encodage, l'élément peut également être au sein d'un élément {{HTMLElement("noscript")}} lui-même contenu dans un élément {{HTMLElement("head")}}.
        </li>
        <li>
          <code>&lt;meta name&gt;</code>&nbsp;: tout élément acceptant du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données">contenu de métadonnées</a>.
        </li>
        <li>
          <code>&lt;meta itemprop&gt;</code>&nbsp;: tout élément acceptant du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données">contenu de métadonnées</a> ou du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a>.
        </li>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant <sup>(angl.)</sup></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les noms des métadonnées standard](/fr/docs/Web/HTML/Reference/Elements/meta/name)
- [Apprendre à utiliser `<meta>`](/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#métadonnées_lélément_meta)
