---
title: "<datalist> : l'élément de liste des données"
slug: Web/HTML/Reference/Elements/datalist
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<datalist>`** contient un ensemble d'éléments HTML {{HTMLElement("option")}} qui représentent les options permises ou recommandées à choisir dans d'autres contrôles.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;datalist&gt;", "tabbed-standard")}}

```html interactive-example
<label for="ice-cream-choice">Choisissez une saveur&nbsp;:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolat"></option>
  <option value="Noix de coco"></option>
  <option value="Menthe"></option>
  <option value="Fraise"></option>
  <option value="Vanille"></option>
</datalist>
```

```css interactive-example
label {
  display: block;
  margin-bottom: 10px;
}
```

Pour lier l'élément `<datalist>` au contrôle, on lui donne un identifiant unique via l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id), puis on ajoute l'attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list) à l'élément HTML {{HTMLElement("input")}} avec le même identifiant en valeur.
Seuls certains types de {{HTMLElement("input")}} prennent en charge ce comportement, et cela peut aussi varier selon le navigateur.

Chaque élément `<option>` doit avoir un attribut `value`, qui représente une suggestion à saisir dans le champ. Il peut aussi avoir un attribut `label`, ou, à défaut, un contenu textuel, qui pourra être affiché par le navigateur à la place de `value` (Firefox), ou en complément de `value` (Chrome et Safari, comme texte supplémentaire). Le contenu exact du menu déroulant dépend du navigateur, mais lors du clic, la valeur saisie dans le champ proviendra toujours de l'attribut `value`.

> [!NOTE]
> `<datalist>` n'est pas un remplacement de {{HTMLElement("select")}}. Un `<datalist>` ne représente pas un champ de saisie en soi&nbsp;; il s'agit d'une liste de valeurs suggérées pour un contrôle associé. Le contrôle peut toujours accepter toute valeur qui passe la validation, même si elle n'est pas dans cette liste de suggestions.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Accessibilité

Avant d'utiliser l'élément `<datalist>`, voici quelques points d'attention concernant l'accessibilité&nbsp;:

- La taille de police des options de la liste de données ne s'agrandit pas, elle reste toujours identique. Le contenu de la saisie semi-automatique ne grossit ni ne rétrécit lorsque le reste du contenu est zoomé ou dézoomé.
- Il est très difficile, voire impossible, de cibler la liste d'options avec du CSS, donc l'affichage ne peut pas être adapté pour un mode à contraste élevé.
- Certaines combinaisons lecteur d'écran/navigateur, notamment NVDA et Firefox, n'annoncent pas le contenu de la fenêtre de saisie semi-automatique.

## Exemples

### Types textuels

Les valeurs recommandées pour les types {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} et {{HTMLElement("input/number", "number")}} s'affichent dans un menu déroulant lorsque l'utilisateur·ice clique ou double-clique sur le contrôle.
En général, le côté droit du contrôle affiche aussi une flèche indiquant la présence de valeurs prédéfinies.

```html
<label for="monNavigateur"
  >Veuillez choisir un navigateur parmi ceux-ci&nbsp;:</label
>
<input list="navigateurs" id="monNavigateur" name="monNavigateur" />
<datalist id="navigateurs">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

{{EmbedLiveSample("Types textuels", 600, 40)}}

### Types date et heure

Les types {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} et {{HTMLElement("input/datetime-local", "datetime-local")}} peuvent afficher une interface permettant de sélectionner facilement une date ou une heure.
Des valeurs prédéfinies peuvent y être proposées, permettant à l'utilisateur·ice de remplir rapidement le champ.

> [!NOTE]
> Lorsque ces types ne sont pas pris en charge, un champ de type `text` classique sera affiché à la place. Ce champ reconnaîtra correctement les valeurs recommandées et les affichera dans un menu déroulant.

```html
<input type="time" list="heuresPopulaires" />
<datalist id="heuresPopulaires">
  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>
```

{{EmbedLiveSample("Types date et heure", 600, 40)}}

### Type `range`

Lorsque des attributs `value` sont présents sur les éléments `<option>` d'une liste associée à un champ {{HTMLElement("input/range", "range")}}, ils s'affichent comme une série de repères facilement sélectionnables.

```html
<label for="pourboire">Montant du pourboire&nbsp;:</label>
<input
  type="range"
  list="reperes"
  min="0"
  max="100"
  id="pourboire"
  name="pourboire" />
<datalist id="reperes">
  <option value="0" label="0%"></option>
  <option value="10" label="Pourboire minimum"></option>
  <option value="20" label="Standard"></option>
  <option value="30" label="Genereux"></option>
  <option value="50" label="Tres genereux"></option>
</datalist>
```

{{EmbedLiveSample("Type `range`", 600, 70)}}

> [!NOTE]
> L'attribut `label` est destiné à fournir des étiquettes pour les repères, comme défini dans la [spécification HTML <sup>(angl.)</sup>](<https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range)>). Cependant, la prise en charge actuelle par les navigateurs varie&nbsp;; les étiquettes peuvent ne pas s'afficher visuellement ou comme info-bulle.

### Type `color`

Le type {{HTMLElement("input/color", "color")}} peut afficher des couleurs prédéfinies dans une interface fournie par le navigateur.

```html
<label for="couleurs"
  >Choisissez une couleur (de preference une teinte rouge)&nbsp;:</label
>
<input type="color" list="couleursRouges" id="couleurs" />
<datalist id="couleursRouges">
  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>
```

{{EmbedLiveSample("Type `color`", 600, 70)}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Soit du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >
        ou entre zéro et plusieurs éléments HTML
        {{HTMLElement("option")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        N'importe quel élément qui accepte
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >du contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"
          ><code>listbox</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et plus précisément son attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list).
- L'élément {{HTMLElement("option")}}
