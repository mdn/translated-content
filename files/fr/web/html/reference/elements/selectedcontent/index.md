---
title: "<selectedcontent> : l'élément d'affichage de l'option sélectionnée"
slug: Web/HTML/Reference/Elements/selectedcontent
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{SeeCompatTable}}

L'élément [HTML](/fr/docs/Web/HTML) **`<selectedcontent>`** s'utilise à l'intérieur d'un élément {{HTMLElement("select")}} pour afficher le contenu de son {{HTMLElement("option")}} actuellement sélectionné dans son premier enfant {{HTMLElement("button")}}. Cela permet de mettre en forme toutes les parties d'un élément `<select>`, appelé «&nbsp;[sélecteurs personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)&nbsp;».

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Description

Vous utilisez l'élément `<selectedcontent>` comme seul enfant d'un élément {{HTMLElement("button")}}, qui doit être le premier enfant de l'élément {{HTMLElement("select")}}. Tout élément {{HTMLElement("option")}}, seul autre enfant valide de `<select>`, doit venir après le `<button>` et le `<selectedcontent>` imbriqué.

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option></option>
  ...
</select>
```

### Fonctionnement interne de `<selectedcontent>`

L'élément `<selectedcontent>` contient un clone du contenu de l'élément {{HTMLElement("option")}} actuellement sélectionné. Le navigateur affiche ce clone en utilisant {{DOMxRef("Node.cloneNode", "cloneNode()")}}. Lorsque l'élément `<option>` sélectionné change, par exemple lors d'un évènement [`change`](/fr/docs/Web/API/HTMLElement/change_event), le contenu de `<selectedcontent>` est remplacé par un clone du nouvel `<option>` sélectionné. Il est important d'être conscient·e de ce comportement, surtout avec du contenu dynamique.

> [!WARNING]
> Comme le navigateur met à jour `<selectedcontent>` uniquement lorsque l'élément `<option>` sélectionné change, toute modification dynamique du contenu de l'élément `<option>` sélectionné après le rendu du `<select>` ne sera pas clonée dans `<selectedcontent>`. Vous devrez mettre à jour `<selectedcontent>` manuellement. Faites attention si vous utilisez l'un des frameworks JavaScript populaires où les éléments `<option>` sont mis à jour dynamiquement après le rendu initial — le résultat peut ne pas correspondre à ce que vous attendez dans `<selectedcontent>`.

### Inertie de `<selectedcontent>`

Par défaut, tout `<button>` à l'intérieur d'un élément `<select>` est [inerte](/fr/docs/Web/HTML/Reference/Global_attributes/inert). Par conséquent, tout le contenu de ce bouton — y compris `<selectedcontent>` — est aussi inerte.
Cela signifie que les utilisateur·ice·s ne peuvent pas interagir avec ou sélectionner le contenu de `<selectedcontent>`.

### Mise en forme du contenu de l'option sélectionnée avec CSS

Vous pouvez cibler le contenu de l'élément `<option>` actuellement sélectionné et définir sa présentation dans le bouton du sélecteur. La mise en forme du bouton n'affecte pas la mise en forme du contenu de l'élément `<option>` cloné. Cela vous permet de personnaliser l'apparence de l'option sélectionnée dans le bouton, indépendamment de son apparence dans la liste déroulante.

Par exemple, vos éléments `<option>` peuvent contenir des icônes, des images ou même des vidéos qui s'affichent correctement dans la liste déroulante, mais qui pourraient faire augmenter la taille du `<button>` du sélecteur, le rendre désordonné et affecter la présentation environnante. En ciblant le contenu à l'intérieur de `<selectedcontent>`, vous pouvez masquer des éléments comme des images dans le bouton, sans affecter leur affichage dans la liste déroulante, comme le montre l'extrait suivant&nbsp;:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> Si les éléments `<button>` et/ou `<selectedcontent>` ne sont pas inclus dans `<select>`, le navigateur crée un `<button>` implicite pour afficher le contenu de l'élément `<option>` sélectionné. Ce bouton de secours ne peut pas être ciblé avec CSS via les sélecteurs de type `button` ou `selectedcontent`.

## Exemples

Vous pouvez consulter un exemple complet incluant l'élément `<selectedcontent>` dans notre guide [Sélecteurs personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select).

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
       Aucune.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Reflète le contenu de l'élément {{HTMLElement("option")}} sélectionné.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune, les balises ouvrante et fermante sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("button")}} qui est le premier enfant d'un élément {{HTMLElement("select")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        Pas de rôle correspondant
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        Aucun <code>role</code> autorisé
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLSelectedContentElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("select")}}
- L'élément {{HTMLElement("option")}}
- L'élément {{HTMLElement("optgroup")}}
- [Sélecteurs personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)
