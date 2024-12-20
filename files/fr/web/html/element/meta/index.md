---
title: "<meta> : l'élément de métadonnées du document"
slug: Web/HTML/Element/meta
l10n:
  sourceCommit: 2492742db9d7341fa74604a1b4cd97dc3c079cab
---

{{HTMLSidebar}}

L'élément HTML **`<meta>`** représente toute information de métadonnées qui ne peut pas être représentée par un des autres éléments de métadonnées ([`<base>`](/fr/docs/Web/HTML/Element/base), [`<link>`](/fr/docs/Web/HTML/Element/link), [`<script>`](/fr/docs/Web/HTML/Element/script), [`<style>`](/fr/docs/Web/HTML/Element/style) ou [`<title>`](/fr/docs/Web/HTML/Element/title)).

`<meta>` peut fournir différents types de métadonnées&nbsp;:

- Si l'attribut [`name`](#name) est défini, l'élément `<meta>` définit alors une métadonnée _du document_, s'appliquant à toute la page.
- Si l'attribut [`http-equiv`](#http-equiv) est défini, l'élément `<meta>` est une _directive de pragma_, fournissant une information équivalente à celle qui peut être indiquée par l'en-tête HTTP homonyme.
- Si l'attribut [`charset`](#charset) est défini, l'élément `<meta>` constitue _une déclaration de jeu de caractères_, et indique l'encodage des caractères du document.
- Si l'attribut [`itemprop`](/fr/docs/Web/HTML/Global_attributes/itemprop) est défini, l'élément `<meta>` fournit _une métadonnée spécifique au site_.

## Attributs

Comme tous les autres éléments, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Il faut préciser que l'attribut [`name`](#name) possède une signification spécifique pour l'élément `<meta>` et que l'attribut [`itemprop`](/fr/docs/Web/HTML/Global_attributes#itemprop) ne doit pas être utilisé quand l'un de ces attributs suivant est déjà défini&nbsp;: [`name`](#name), [`http-equiv`](#http-equiv) ou [`charset`](#charset).

- `charset`

  - : Cet attribut indique l'encodage des caractères pour le document. Si cet attribut est présent, sa valeur doit correspondre (quelle que soit la casse) à `"utf-8"`. En effet, seul UTF-8 est valide pour encoder des documents HTML depuis HTML5. Les éléments `<meta>` qui déclarent un encodage doivent apparaître complètement au sein des 1024 premiers octets du document.

- `content`
  - : Cet attribut fournit la valeur associée avec l'attribut [`http-equiv`](#http-equiv) ou l'attribut [`name`](#name) suivant le contexte utilisé.
- `http-equiv`
  - : Cet attribut définit une directive de pragma. Il est nommé `http-equiv(alent)`, car les valeurs autorisées suivantes sont les noms d'en-têtes HTTP correspondant.
    - `content-security-policy`
      - : Cette valeur permet de créer des [règles de gestion de contenu (CSP)](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) pour les ressources qui sont servies. Cela permet notamment d'indiquer les origines valides et les points d'accès aux scripts afin de protéger contre les attaques XSS.
    - `content-type`
      - : Ce champ d'attribut définit le [type MIME](/fr/docs/Web/HTTP/MIME_types) du document, suivi du jeu de caractères utilisé pour l'encodage du document. Si cette valeur est utilisée, l'attribut `content` doit valoir `"text/html; charset=utf-8"`. Cette formulation est équivalente à un élément `<meta>` ayant l'attribut [`charset`](#charset), et les mêmes restrictions s'appliquent quant à l'emplacement dans le document (1024 premiers octets).
        > [!NOTE]
        > Cette valeur peut uniquement être utilisée pour les documents servis avec le type `text/html`. Elle ne peut pas être utilisée pour les documents servis avec un type MIME XML.
    - `default-style`
      - : Le nom de [la feuille de style CSS](/fr/docs/Web/CSS) par défaut.
    - `x-ua-compatible`
      - : Si cette valeur est fournie, l'attribut `content` doit valoir `"IE=edge"`. Les agents utilisateur doivent ignorer cette directive.
    - `refresh`
      - : Ce champ définit :
        - Le nombre de secondes qu'il faudrait attendre avant de recharger la page si l'attribut [`content`](#content) contient seulement un nombre entier positif.
        - Le nombre de secondes qu'il faudrait attendre avant que la page soit redirigée vers une autre page, si l'attribut [`content`](#content) contient un nombre entier positif suivi par la chaîne de caractères '`;url=`' ainsi qu'une URL valide. Voir [la section sur l'accessibilité ci-après](#accessibilité).
- `name`
  - : Cet attribut définit le nom d'une métadonnée au niveau du document, l'attribut `content` portant alors la valeur correspondante. Voir [la page sur les noms des métadonnées standard](/fr/docs/Web/HTML/Element/meta/name) pour plus de détails à propos des noms de métadonnées standard définis dans la spécification HTML.

## Exemples

```html
<meta charset="utf-8" />

<!-- Rediriger la page après 3 secondes -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Accessibilité

Les pages utilisant `refresh` risquent d'utiliser un intervalle de temps trop court. Les personnes utilisant des outils d'assistance comme des lecteurs d'écran pourraient être incapables d'analyser le contenu de la page courante avant la redirection. La mise à jour abrupte et sans avertissement de la page peut également désorienter les personnes en situation de handicap visuel.

- [Comprendre les WCAG, règle 2.2](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Comprendre les WCAG, règle 3.2](/fr/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [Comprendre le critère de succès 2.2.1 (en anglais) sur le site du W3C expliquant WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
- [Comprendre le critère de succès 2.2.4 (en anglais) sur le site du W3C expliquant WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
- [Comprendre le critère de succès 3.2.5 (en anglais) sur le site du W3C expliquant WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th><a href="/fr/docs/Web/HTML/Content_categories">Catégories de contenu</a></th>
      <td>
        <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_méta-données">Contenu de métadonnées</a>. Si l'attribut <a href="/fr/docs/Web/HTML/Global_attributes#itemprop"><code>itemprop</code></a> est utilisé&nbsp;: du <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">contenu de flux</a> ou du <a href="/fr/docs/Web/HTML/Content_categories#contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th>Contenu autorisé</th>
      <td>Aucun, cet élément est un élément vide.</td>
    </tr>
    <tr>
      <th>Omission de balises</th>
      <td>
        Étant un élément vide, la balise de début doit être présente et la balise de fin doit être absente.
      </td>
    </tr>
    <tr>
      <th><dfn>Éléments parents autorisés</dfn></th>
      <td>
        <li>
          <code>&lt;meta charset&gt;</code>, <code>&lt;meta http-equiv&gt;</code>&nbsp;: un élément <a href="/fr/docs/Web/HTML/Element/head"><code>&lt;head&gt;</code></a>. Si l'attribut <a href="#http-equiv"><code>http-equiv</code></a> n'est pas une déclaration d'encodage, l'élément peut également être au sein d'un élément <a href="/fr/docs/Web/HTML/Element/noscript"><code>&lt;noscript&gt;</code></a> lui-même contenu dans un élément <a href="/fr/docs/Web/HTML/Element/head"><code>&lt;head&gt;</code></a>.
        </li>
        <li>
          <code>&lt;meta name&gt;</code>&nbsp;: tout élément acceptant du <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_méta-données">contenu de métadonnées</a>.
        </li>
        <li>
          <code>&lt;meta itemprop&gt;</code>&nbsp;: tout élément acceptant du <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_méta-données">contenu de métadonnées</a> ou du <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">contenu de flux</a>.
        </li>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th>Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLMetaElement"><code>HTMLMetaElement</code></<a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les noms des métadonnées standard](/fr/docs/Web/HTML/Element/meta/name)
- [Apprendre à utiliser `<meta>`](/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#métadonnées_lélément_meta)
- [La balise méta `viewport`](/fr/docs/Web/HTML/Viewport_meta_tag)
- Les autres éléments relatifs aux métadonnées&nbsp;:
  - [`<base>`](/fr/docs/Web/HTML/Element/base)
  - [`<head>`](/fr/docs/Web/HTML/Element/head)
  - [`<link>`](/fr/docs/Web/HTML/Element/link)
  - [`<style>`](/fr/docs/Web/HTML/Element/style)
  - [`<title>`](/fr/docs/Web/HTML/Element/title)
