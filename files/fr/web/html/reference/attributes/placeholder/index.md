---
title: "Attribut HTML : placeholder"
short-title: placeholder
slug: Web/HTML/Reference/Attributes/placeholder
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`placeholder`** définit le texte affiché dans un contrôle de formulaire lorsque celui-ci n'a pas de valeur. Le texte d'exemple doit fournir un indice bref à l'utilisateur·ice sur le type de donnée attendu dans le contrôle.

Un texte d'exemple efficace se limite à un mot ou une courte expression qui suggère le type de donnée attendu, et non une explication ou une consigne. L'attribut `placeholder` ne doit jamais être utilisé à la place d'un {{HTMLElement("label")}}. Comme le texte d'exemple n'est pas visible si la valeur du contrôle n'est pas nulle, utiliser `placeholder` à la place d'un `<label>` nuit à l'utilisabilité et à l'accessibilité.

L'attribut `placeholder` est pris en charge par les types d'entrée suivants&nbsp;: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}` et `{{HTMLElement("input/password", "password")}}`. Il est également pris en charge par l'élément {{HTMLElement("textarea")}}. L'[exemple](#exemple) ci-dessous montre l'utilisation de l'attribut `placeholder` pour indiquer le format attendu d'un champ de saisie.

> [!NOTE]
> Sauf dans les éléments {{HTMLElement("textarea")}}, l'attribut `placeholder` ne peut pas contenir de retour à la ligne (LF) ou de retour chariot (CR). Si l'un ou l'autre est inclus dans la valeur, le texte d'exemple sera tronqué.

## Problèmes d'accessibilité

Le texte d'exemple ne doit servir qu'à montrer un exemple du type de donnée à saisir dans un formulaire&nbsp;; il ne doit jamais remplacer un élément `<label>`&nbsp;: cela nuit à l'accessibilité et à l'expérience utilisateur·ice.

Le texte du `<label>` est associé visuellement et de façon programmatique à son contrôle de formulaire. Les lecteurs d'écran n'annoncent pas le contenu du texte d'exemple par défaut, mais ils annoncent le contenu du label&nbsp;: c'est le label qui informe les utilisateur·ice·s de technologies d'assistance sur la donnée attendue dans le contrôle. Les labels améliorent aussi l'expérience utilisateur·ice pour les personnes utilisant un dispositif de pointage&nbsp;: lorsqu'une personne clique, touche ou tape sur un `<label>`, la sélection est déplacée vers le contrôle associé.

Le texte d'exemple ne peut pas remplacer un label, même pour les personnes qui n'utilisent pas de technologie d'assistance. Le texte d'exemple est affiché avec un contraste de couleur plus faible que le texte par défaut d'un champ de formulaire. C'est intentionnel, afin d'éviter toute confusion entre le texte d'exemple et une valeur saisie. Cependant, ce manque de contraste peut poser problème aux personnes malvoyantes. De plus, le texte d'exemple disparaît du champ dès que l'utilisateur·ice commence à saisir du texte. Si ce texte contenait des instructions ou des exemples, leur disparition peut désorienter les personnes ayant des troubles cognitifs et rendre le formulaire inaccessible si le texte d'exemple faisait office de label.

## Exemple

### HTML

```html
<form action="/fr/docs/Web/HTML/Reference/Attributes/placeholder">
  <label for="name">Entrez votre nom&nbsp;:</label>
  <input type="text" id="name" name="name" placeholder="ex. Mike Shinoda" />
  <button type="submit">Envoyer</button>
</form>
```

### Résultat

{{EmbedLiveSample('Exemple', '150px', '150px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut global [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)
- La pseudo-classe CSS [`:placeholder-shown`](/fr/docs/Web/CSS/Reference/Selectors/:placeholder-shown)
- Le pseudo-élément CSS [`::placeholder`](/fr/docs/Web/CSS/Reference/Selectors/::placeholder)
