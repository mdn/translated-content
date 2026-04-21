---
title: "Attribut HTML universel : `tabindex`"
short-title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`tabindex`** permet aux développeur·euse·s de créer des éléments HTML sélectionnables, de permettre ou d'empêcher leur sélection séquentielle (généralement avec la touche <kbd>Tab</kbd>, d'où le nom) et de déterminer leur ordre relatif pour la navigation séquentielle.

{{InteractiveExample("Démonstrations HTML&nbsp;: tabindex", "tabbed-standard")}}

```html interactive-example
<p>
  Cliquez n'importe où dans ce panneau, puis essayez de naviguer dans les
  éléments à l'aide de la touche <kbd>Tab</kbd>.
</p>

<label>Premier dans l'ordre de tabulation&nbsp;:<input type="text" /></label>

<div tabindex="0">Peut avoir la sélection grâce à tabindex.</div>

<div>Pas de sélection&nbsp;: pas de tabindex.</div>

<label>Troisième dans l'ordre de tabulation&nbsp;:<input type="text" /></label>
```

```css interactive-example
p {
  font-style: italic;
  font-weight: bold;
}

div,
label {
  display: block;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

div:focus {
  font-weight: bold;
}
```

Il accepte un entier comme valeur, avec des résultats différents selon la valeur de l'entier&nbsp;:

> [!NOTE]
> Si un élément HTML est affiché et possède l'attribut `tabindex` avec une valeur entière valide, l'élément peut être sélectionné avec JavaScript (en appelant la méthode [`focus()`](/fr/docs/Web/API/HTMLElement/focus)) ou visuellement en cliquant avec la souris. La valeur particulière de `tabindex` contrôle si l'élément est `tabbable` (c'est-à-dire accessible par navigation séquentielle au clavier, généralement avec la touche <kbd>Tab</kbd>).

- Une _valeur négative_ (la valeur négative exacte n'a pas d'importance, généralement `tabindex="-1"`) signifie que l'élément n'est pas accessible par navigation séquentielle au clavier.

  > [!NOTE]
  > `tabindex="-1"` peut être utile pour les éléments qui ne doivent pas être accessibles directement avec la touche <kbd>Tab</kbd>, mais qui doivent recevoir la sélection au clavier. Des exemples incluent une fenêtre modale hors écran qui doit être sélectionnée lorsqu'elle devient visible, ou un message d'erreur de soumission de formulaire qui doit être immédiatement sélectionné lors de la soumission d'un formulaire erroné.

- `tabindex="0"` signifie que l'élément doit être accessible dans la navigation séquentielle au clavier, après toute valeur positive de `tabindex`. L'ordre de navigation de sélection de ces éléments est défini par leur ordre dans le code source du document.
- Une _valeur positive_ signifie que l'élément doit être accessible dans la navigation séquentielle au clavier, avec son ordre défini par la valeur du nombre. Ainsi, `tabindex="4"` est sélectionné avant `tabindex="5"` et `tabindex="0"`, mais après `tabindex="3"`. Si plusieurs éléments partagent la même valeur positive de `tabindex`, leur ordre relatif entre eux suit leur position dans le code source du document. La valeur maximale pour `tabindex` est 32767.
- Si l'attribut `tabindex` est inclus sans valeur définie, le fait que l'élément soit sélectionnable est déterminé par l'agent utilisateur.

  > [!WARNING]
  > Il est recommandé d'utiliser uniquement les valeurs `0` et `-1` pour `tabindex`. Évitez d'utiliser des valeurs de `tabindex` supérieures à `0` et des propriétés CSS qui peuvent changer l'ordre des éléments HTML sélectionnables ([Ordre des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)). Cela rend difficile la navigation et l'utilisation du contenu de la page pour les personnes qui dépendent du clavier ou des technologies d'assistance. Il vaut mieux écrire le document avec les éléments dans une séquence logique.

Certains éléments HTML sélectionnables ont une valeur par défaut de `tabindex` à `0` définie en interne par [l'agent utilisateur](/fr/docs/Glossary/User_agent). Ces éléments sont un {{HTMLElement("a")}} ou {{HTMLElement("area")}} avec l'attribut `href`, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{Deprecated_Inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, et l'élément SVG {{SVGElement("a")}}, ou un élément {{HTMLElement("summary")}} qui fournit un résumé pour un élément {{HTMLElement("details")}}. Les développeur·euse·s ne doivent pas ajouter l'attribut `tabindex` à ces éléments sauf si cela modifie le comportement par défaut (par exemple, inclure une valeur négative retirera l'élément de l'ordre de navigation de sélection).

> [!WARNING]
> Il ne faut pas utiliser l'attribut `tabindex` sur l'élément {{HTMLElement("dialog")}}.

## Problèmes d'accessibilité

Il faut éviter d'utiliser l'attribut `tabindex` avec du contenu [non-interactif](/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif) si on souhaite uniquement rendre cet élément accessible au clavier (par exemple en voulant utiliser un élément {{HTMLElement("div")}} plutôt qu'un élément {{HTMLElement("button")}}).

Les composants rendus interactifs par cette méthode ne feront pas partie de [l'arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#api_daccessibilité) et ne pourront pas être analysés par les technologies d'assistance. Le contenu devrait être décrit sémantiquement avec des éléments interactifs ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.). En effet, ces éléments disposent nativement de rôles et d'états qui peuvent être utilisées par les API d'accessibilité (il faut sinon les gérer via [ARIA](/fr/docs/Web/Accessibility/ARIA)).

- [Utiliser l'attribut `tabindex` | Vispero <sup>(angl.)</sup>](https://vispero.com/resources/using-the-tabindex-attribute/)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété {{DOMxRef("HTMLElement.tabIndex")}} qui reflète cet attribut
- Problèmes d'accessibilité avec `tabindex`&nbsp;: voir [Ne pas utiliser tabindex supérieur à 0 <sup>(angl.)</sup>](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) par Adrian Roselli
- L'entrée de glossaire {{Glossary("Reading order", "Ordre de lecture")}}
