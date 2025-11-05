---
title: "ARIA : attribut aria-labelledby"
short-title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
l10n:
  sourceCommit: 16872c1ba8d44b5ff5f016497e52e0d4682467dc
---

L'attribut `aria-labelledby` identifie l'élément (ou les éléments) qui servent de libellé à l'élément sur lequel il est appliqué.

## Description

La propriété `aria-labelledby` permet aux auteur·ice·s de référencer d'autres éléments de la page pour définir un nom accessible. Cela est utile lors de l'utilisation d'éléments qui ne prennent pas en charge nativement l'association d'éléments pour fournir un nom accessible.

Certains éléments obtiennent leur [nom accessible <sup>(angl.)</sup>](https://w3c.github.io/accname/#dfn-accessible-name) à partir de leur contenu interne. Par exemple, le nom accessible d'un {{HTMLElement('button')}}, {{HTMLElement('a')}} ou {{HTMLElement('td')}} provient du texte entre les balises ouvrantes et fermantes. D'autres éléments, comme les champs de formulaire {{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} et {{HTMLElement('table')}} obtiennent leur nom accessible à partir du contenu d'éléments associés&nbsp;: pour ces éléments, le nom accessible provient respectivement du {{HTMLElement('label')}} avec un attribut `for`, du {{HTMLElement('legend')}} et du {{HTMLElement('caption')}}.

Tous les éléments interactifs doivent avoir un nom accessible. `aria-labelledby` peut être utilisé pour référencer un autre élément afin de définir ce nom accessible, lorsque le nom accessible d'un élément doit utiliser du contenu provenant d'ailleurs dans le DOM.

S'il n'existe aucun contenu pouvant être référencé pour créer un nom accessible, il faut utiliser l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) à la place.

Le but de `aria-labelledby` est le même que celui de `aria-label`. Il fournit à l'utilisateur·ice un nom accessible reconnaissable pour un élément interactif. Si un élément possède les deux attributs, c'est `aria-labelledby` qui sera utilisé. `aria-labelledby` a la priorité sur toutes les autres méthodes pour fournir un nom accessible, y compris `aria-label`, {{HTMLElement('label')}} et le texte interne de l'élément.

Les attributs `aria-labelledby` et [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) référencent tous deux d'autres éléments pour calculer des alternatives textuelles. `aria-labelledby` doit référencer un texte court qui fournit à l'élément un nom accessible. `aria-describedby` sert à référencer un contenu plus long qui fournit une description. S'il n'existe aucun élément dans le DOM qui fournit un libellé bref approprié pour un nom accessible d'un élément interactif, utilisez `aria-label` pour définir le nom accessible de cet élément.

> [!NOTE]
> En anglais américain, «&nbsp;labeled&nbsp;» s'écrit avec un seul «&nbsp;l&nbsp;», mais la forme «&nbsp;labelledby&nbsp;» est celle utilisée dans les API d'accessibilité.

L'exemple suivant utilise `aria-labelledby` pour fournir un nom accessible à une case à cocher en utilisant le contenu textuel d'un élément frère&nbsp;:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">J'accepte les conditions générales.</span>
```

Notez que l'utilisation de `aria-labelledby` est similaire dans cette situation à l'utilisation d'un élément HTML {{HTMLElement('label')}} avec l'attribut `for`, mais il existe des différences importantes. L'attribut `aria-labelledby` ne définit que le nom accessible. Il ne fournit pas les autres fonctionnalités de `<label>`, comme le fait que cliquer sur l'élément de libellé active l'entrée associée. Il faut ajouter ce comportement avec JavaScript.

Heureusement, l'élément HTML {{HTMLElement('input')}} avec `type="checkbox"` fonctionne nativement avec `<label>`. Lorsque cela est possible, privilégiez la solution suivante&nbsp;:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  J'accepte les conditions générales.
</label>
<p><a href="tac.html">Lire nos conditions générales</a>.</p>
```

### Avantages (et inconvénients)

1. La propriété `aria-labelledby` a la priorité la plus élevée lorsque les navigateurs calculent les noms accessibles. Sachez qu'elle remplace les autres méthodes de nommage de l'élément, y compris `aria-label`, les autres attributs de nommage et même le contenu de l'élément.

   ```html
   <button aria-label="Bleu" aria-labelledby="color">Rouge</button>
   <span id="color">Jaune</span>
   ```

   Dans cet exemple, le nom accessible est «&nbsp;Jaune&nbsp;».

2. La propriété `aria-labelledby` accepte comme valeur une liste d'identifiants séparés par des espaces, ce qui permet de combiner plusieurs éléments en un seul nom accessible. Vous pouvez inclure l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de l'élément lui-même pour référencer son propre contenu.

   ```html
   <h2 id="attr" class="article-title">13 attributs ARIA à connaître</h2>
   <p>
     Il existe plus de 50 états et propriétés ARIA, mais 13 d'entre eux sont
     essentiels…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">lire la suite</a>
   </p>
   ```

   Dans cet exemple, le nom accessible est «&nbsp;lire la suite 13 attributs ARIA à connaître&nbsp;».

3. L'ordre des valeurs de la propriété `aria-labelledby` est important. Lorsque plusieurs éléments sont référencés, le contenu de chaque élément est combiné dans l'ordre où ils sont listés dans la valeur de `aria-labelledby`. Si on écrit `aria-labelledby="attr rm13"`, le nom accessible sera «&nbsp;13 attributs ARIA à connaître lire la suite&nbsp;».

4. La propriété `aria-labelledby` ignore les identifiants répétés dans sa valeur. Si un élément est référencé plusieurs fois, seule la première occurrence est prise en compte. `aria-labelledby="attr attr rm13 rm13"` est traité comme `aria-labelledby="attr rm13"`.

5. La propriété `aria-labelledby` peut inclure le contenu d'éléments qui ne sont pas visibles. Même s'il est recommandé de fournir aux utilisateur·ice·s des technologies d'assistance le même contenu que pour les autres utilisateur·ice·s, vous pouvez inclure le contenu d'éléments avec l'attribut HTML [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden), la propriété CSS [`display: none`](/fr/docs/Web/CSS/Reference/Properties/display) et la propriété CSS [`visibility: hidden`](/fr/docs/Web/CSS/Reference/Properties/visibility) dans le nom accessible calculé.

6. La propriété `aria-labelledby` intègre la valeur des éléments de formulaire. Si la valeur référence un `<input>`, la valeur courante du contrôle de formulaire est incluse dans le nom accessible calculé, et change si la valeur est modifiée.

7. La propriété `aria-labelledby` ne peut pas être chaînée. Si un élément avec `aria-labelledby` référence un autre élément qui possède aussi `aria-labelledby`, l'attribut sur l'élément référencé est ignoré.

> [!WARNING]
> Comme le calcul du nom d'un élément avec `aria-labelledby` peut être complexe et référencer du contenu caché, il est très important de tester avec des technologies d'assistance pour s'assurer que le nom attendu est bien présenté aux utilisateur·ice·s.

## Valeurs

- Liste de références d'identifiants
  - : Liste d'un ou plusieurs identifiants séparés par des espaces, qui référencent les éléments servant de libellé à l'élément courant.

## Interfaces associées

- {{DOMxRef("Element.ariaLabelledByElements")}}
  - : La propriété `ariaLabelledByElements` fait partie de l'interface de chaque élément. Sa valeur est un tableau de sous-classes de {{DOMxRef("Element")}} qui reflètent les références d'identifiants dans l'attribut `aria-labelledby` ([avec certaines particularités](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies)).
- {{DOMxRef("ElementInternals.ariaLabelledByElements")}}
  - : La propriété `ariaLabelledByElements` fait partie de l'interface de chaque élément personnalisé. Sa valeur est un tableau de sous-classes de {{DOMxRef("Element")}} qui reflètent les références d'identifiants dans l'attribut `aria-labelledby` ([avec certaines particularités](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies)).

## Rôles associés

Utilisé dans presque tous les rôles **sauf** ceux pour lesquels l'auteur·ice ne peut pas fournir de nom accessible.

L'attribut `aria-labelledby` n'est **PAS** pris en charge dans&nbsp;:

- [`caption`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`code`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) et [`none`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`superscript`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`term`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('label')}}
- L'élément HTML {{HTMLElement('legend')}}
- L'élément HTML {{HTMLElement('caption')}}
- L'attribut ARIA [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- L'attribut ARIA [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
