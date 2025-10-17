---
title: "ARIA : rôle link"
short-title: link
slug: Web/Accessibility/ARIA/Reference/Roles/link_role
original_slug: Web/Accessibility/ARIA/Roles/link_role
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

Un rôle ARIA `link` fournit une référence interactive à une ressource. La ressource cible peut être externe ou locale, c'est-à-dire à l'intérieur ou à l'extérieur de la page ou de l'application active.

> [!NOTE]
> Dans la mesure du possible, il est recommandé d'utiliser un élément natif {{HTMLElement("a")}} plutôt que le rôle `link`, car les éléments natifs sont plus largement pris en charge par les agents utilisateurs et les technologies d'assistance. Les éléments natifs {{HTMLElement("a")}} prennent également en charge par défaut les exigences relatives au clavier et au ciblage, sans qu'il soit nécessaire de les personnaliser.

## Description

Le rôle `link` est utilisé pour identifier un élément qui crée un lien hypertexte vers une ressource qui se trouve dans ou en dehors de l'application.

Lorsque le HTML sémantique n'est pas utilisé dans le but prévu, les fonctions interactives doivent être réimplémentées. Par exemple, lorsque `role="link"` est ajouté à un élément, la touche <kbd>TAB</kbd> doit permettre de cibler le lien et la touche <kbd>ENTRER</kbd> doit exécuter le lien lorsqu'il est ciblé.

Utilisez l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) avec une valeur à `0` pour vous assurer que le lien est dans l'ordre correct de ciblage avec la tabulation.

> [!WARNING]
> Appliquer le rôle `link` à un élément n'amènera pas les navigateurs à améliorer l'élément avec l'apparence ou les comportements standards des liens, comme le soulignement, les anneaux de ciblage, la navigation vers la cible du lien, ou les actions du menu contextuel. C'est à la responsabilité du développeur.

## Exemple

Pour recréer un lien accessible en utilisant le rôle `link` sur un élément qui n'est pas un {{HTMLElement("a")}}, vous devez vous assurer que le lien reçoit la mise au point dans le bon ordre d'onglet, que l'élément ressemble à un lien, et que le «&nbsp;lien&nbsp;» se comporte comme un lien.

```html
<span data-href="https://mozilla.org" tabindex="0" role="link">
  Un faux lien, accessible, dans un span
</span>
```

### CSS

```css
span[role="link"] {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
span[role="link"]:hover,
span[role="link"]:active,
span[role="link"]:focus {
  color: purple;
}

span[role="link"]:focus {
  background-color: palegoldenrod;
  outline: 1px dotted;
}
```

### JavaScript

```js
const fauxLiens = document.querySelectorAll('[role="link"]');

for (const lien of fauxLiens) {
  lien.addEventListener("click", navigateLink);
  lien.addEventListener("keydown", navigateLink);
}

// prend en charge les événements de clic et de clavier sur le lien
function navigateLink(e) {
  if (e.type === "click" || e.key === "Enter") {
    const ref = e.target ?? e.srcElement;
    if (ref) {
      window.open(ref.getAttribute("data-href"), "_blank");
    }
  }
}
```

Si l'élément avec `role="link"` reçoit un événement du clavier <kbd>ENTREZ</kbd>, cela exécute le lien, en allant à la page liée ou en déplaçant la vue vers la zone cible de la page.

Facultativement, <kbd>SHIFT</kbd> + <kbd>F10</kbd> ouvre un menu contextuel pour le lien.

## Bonnes pratiques

Les différents rôles sont utilisés pour définir des modèles interactifs communs. Semblable aux rôles document-structure, certains de ces rôles, y compris le rôle `link`, dupliquent la sémantique des éléments HTML natifs qui sont bien pris en charge et ne doivent pas être utilisés.

Évitez d'utiliser `link`, que nous avons inclus par souci d'exhaustivité. L'équivalent sémantique {{HTMLElement("a")}} a une interactivité accessible qui est disponible et pris en charge.

### Utilisez le HTML

Utilisez de préférence l'élément {{HTMLElement("a")}}.

> [!NOTE]
> Il n'est pas nécessaire d'inclure `role="lien"` sur un lien HTML, car l'élément `<a>`, a ce rôle par défaut.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement("a")}}
- L'élément HTML {{HTMLElement("button")}}
- L'attribut ARIA [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [Bonnes pratiques ARIA - Rôle `link` <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
