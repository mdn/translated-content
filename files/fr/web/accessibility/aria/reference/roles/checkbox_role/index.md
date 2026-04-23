---
title: "ARIA : rôle checkbox"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
original_slug: Web/Accessibility/ARIA/Roles/checkbox_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `checkbox` est destiné aux contrôles interactifs cochables. Les éléments contenant `role="checkbox"` doivent également inclure l'attribut [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) afin d'exposer l'état de la case à cocher aux technologies d'assistance.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Se souvenir de mes préférences</label>
```

> [!NOTE]
> La première règle d'ARIA est la suivante&nbsp;: si un élément ou un attribut HTML natif possède déjà la sémantique et le comportement nécessaires, utilisez-le au lieu de détourner un élément et d'ajouter de l'ARIA. Utilisez plutôt la [case à cocher HTML `<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox) (avec un {{HTMLElement('label')}} associé), qui fournit nativement toutes les fonctionnalités requises&nbsp;:

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">Se souvenir de mes préférences</label>
```

## Description

Le contrôle de formulaire HTML natif ([`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox)) possède deux états («&nbsp;cochée&nbsp;» ou «&nbsp;non cochée&nbsp;»), avec un état [`indeterminate`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox#gérer_un_état_indéterminé) définissable via JavaScript. De même, un élément avec `role="checkbox"` peut exposer trois états via l'attribut `aria-checked`&nbsp;: `true`, `false` ou `mixed`.

Une case à cocher étant un contrôle interactif, elle doit être sélectionnée et accessible au clavier. Si le rôle est appliqué à un élément non sélectionnable, utilisez l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour y remédier. Le raccourci clavier attendu pour activer une case à cocher est la touche <kbd>Espace</kbd>.

Il incombe aux développeur·euse·s de mettre à jour dynamiquement la valeur de l'attribut `aria-checked` lorsque la case à cocher est activée.

### Tous les descendants sont présents de manière présentielle

Certains composants d'interface, lorsqu'ils sont représentés dans une API d'accessibilité de la plateforme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter des éléments sémantiques contenus dans un `checkbox`. Pour pallier cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les descendants de tout élément `checkbox`, car ce rôle ne prend pas en charge des enfants sémantiques.

Par exemple, considérons l'élément `checkbox` suivant, qui contient un titre&nbsp;:

```html
<div role="checkbox"><h6>Nom de ma case à cocher</h6></div>
```

Comme les descendants de `checkbox` sont présentiels, le code suivant est équivalent&nbsp;:

```html
<div role="checkbox"><h6 role="presentation">Nom de ma case à cocher</h6></div>
```

Du point de vue de l'utilisateur·ice d'une technologie d'assistance, le titre n'existe pas puisque les extraits précédents sont équivalents à ce qui suit dans l'[arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="checkbox">Nom de ma case à cocher</div>
```

### Rôles, états et propriétés WAI-ARIA associés

- [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : La valeur de `aria-checked` définit l'état d'une case à cocher. Cet attribut prend l'une des trois valeurs possibles&nbsp;:
    - `true`
      - : La case est cochée.
    - `false`
      - : La case n'est pas cochée.
    - `mixed`
      - : La case est partiellement cochée, ou indéterminée.

- `tabindex="0"`
  - : Permet de la rendre sélectionnable afin que l'utilisateur·ice de technologies d'assistance puisse l'atteindre par tabulation et commencer à la lire immédiatement.

### Interactions clavier

| Touche            | Fonction                 |
| ----------------- | ------------------------ |
| <kbd>Espace</kbd> | Active la case à cocher. |

### JavaScript requis

#### Gestionnaires d'événements requis

- `onclick`
  - : Gère les clics souris sur la case à cocher et sur l'étiquette associée, en modifiant la valeur de `aria-checked` et l'apparence de la case pour qu'elle paraisse cochée ou non aux utilisateur·ice·s voyant·e·s.
- `onKeyDown`
  - : Gère le cas où l'utilisateur·ice appuie sur la touche <kbd>Space</kbd>, en modifiant la valeur de `aria-checked` et l'apparence de la case pour qu'elle paraisse cochée ou non aux utilisateur·ice·s voyant·e·s.

## Exemples

L'exemple suivant crée une case à cocher non sémantique en utilisant CSS et JavaScript pour gérer son état coché/non coché.

### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Se souvenir de mes préférences</label>
```

### CSS

```css
[role="checkbox"] {
  padding: 5px;
}

[role="checkbox"]:focus {
  border: 2px solid #0198e1;
}

[aria-checked="true"]::before {
  content: "[x]";
}

[aria-checked="false"]::before {
  content: "[ ]";
}
```

### JavaScript

```js
const item = document.getElementById("chkPref");
const label = document.getElementById("chk1-label");

function changeCheckbox(code) {
  const checked = item.getAttribute("aria-checked");

  console.log(code);

  if (code && code !== "Space") {
    return;
  }
  if (checked === "true") {
    item.setAttribute("aria-checked", "false");
  } else {
    item.setAttribute("aria-checked", "true");
  }
}

item.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

label.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

item.addEventListener("click", changeCheckbox);
label.addEventListener("click", changeCheckbox);
```

{{EmbedLiveSample("exemples", 230, 250)}}

## Problèmes d'accessibilité

Quand le rôle `checkbox` est ajouté à un élément, l'agent utilisateur doit&nbsp;:

- Exposer l'élément avec un rôle `checkbox` dans l'API d'accessibilité du système d'exploitation.
- Lorsqu'une valeur `aria-checked` change, envoyer un événement d'état accessible modifié.

Les technologies d'assistance doivent&nbsp;:

- Annoncer l'élément comme une case à cocher et, facultativement, indiquer comment l'activer.

Les personnes qui implémentent des cases à cocher doivent&nbsp;:

- S'assurer que la case peut être atteinte et utilisée à la fois au clavier et à la souris.
- Maintenir l'attribut `aria-checked` à jour après les interactions.
- Fournir des styles indiquant quand la case est ciblée.

> [!NOTE]
> Les avis peuvent diverger quant à la manière dont les technologies d'assistance devraient gérer cette technique. Les informations ci-dessus représentent l'un de ces avis et peuvent évoluer.

## Bonnes pratiques

La première règle d'ARIA&nbsp;: si un élément ou un attribut HTML natif possède la sémantique et le comportement dont vous avez besoin, utilisez-le plutôt que de réinventer un composant avec des rôles, états ou propriétés ARIA. Il est donc recommandé d'utiliser la [case à cocher HTML](/fr/docs/Web/HTML/Reference/Elements/input/checkbox) native plutôt que de recréer sa fonctionnalité avec JavaScript et ARIA.

## Voir aussi

- [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA&nbsp;: rôle `radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA&nbsp;: rôle `menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA&nbsp;: rôle `menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA&nbsp;: rôle `menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA&nbsp;: rôle `switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA&nbsp;: rôle `option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
