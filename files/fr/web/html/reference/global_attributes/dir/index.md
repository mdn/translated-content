---
title: "Attribut HTML universel : dir"
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`dir`** est un attribut {{Glossary("Enumerated", "énuméré")}} qui permet d'indiquer la direction du texte d'un élément.

{{InteractiveExample("Démonstration HTML&nbsp;: dir", "tabbed-standard")}}

```html interactive-example
<p dir="rtl">
  Ce paragraphe est en Français mais il s'affiche incorrectement de droite à
  gauche.
</p>
<p dir="ltr">
  Ce paragraphe est en Français et s'affiche correctement de gauche à droite.
</p>

<hr />

<p>هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

Il peut prendre les valeurs suivantes&nbsp;:

- `ltr`, qui signifie _gauche à droite_ et doit être utilisé pour les langues écrites de gauche à droite (comme l'anglais)&nbsp;;
- `rtl`, qui signifie _droite à gauche_ et doit être utilisé pour les langues écrites de droite à gauche (comme l'arabe)&nbsp;;
- `auto`, qui délègue la décision à l'agent utilisateur. Il utilise un algorithme basique qui analyse les caractères à l'intérieur de l'élément jusqu'à trouver un caractère ayant une direction forte, puis applique cette direction à l'ensemble de l'élément.

> [!NOTE]
> La valeur `auto` doit être utilisée pour des données dont la direction est inconnue, par exemple des saisies utilisateur ou des données externes.

Si la valeur n'est pas spécifiée, elle est [héritée](#héritage) de l'élément parent.

Cet attribut peut être remplacé par les propriétés CSS {{CSSxRef("direction")}} et {{CSSxRef("unicode-bidi")}}, si une feuille CSS est active et que l'élément prend en charge ces propriétés.

Comme la direction du texte est liée sémantiquement à son contenu et non à sa présentation, il est recommandé aux développeur·euse·s web d'utiliser cet attribut plutôt que les propriétés CSS associées lorsque cela est possible. Ainsi, le texte s'affichera correctement, y compris dans un navigateur qui ne prend pas en charge le CSS ou si le CSS est désactivé.

## Héritage

Si un élément n'a pas d'attribut `dir`, il hérite de la valeur `dir` définie sur son [nœud parent](/fr/docs/Glossary/Node/DOM), qui peut, à son tour, l'hériter de son parent, et ainsi de suite.

## Notes d'utilisation

Une image peut avoir sa propriété `dir` réglée sur `"rtl"` auquel cas les attributs HTML `title` et `alt` seront formatés et définis comme `"rtl"`.

Lorsqu'un tableau a son `dir` réglé sur `"rtl"`, l'ordre des colonnes est disposé de droite à gauche.

Cet attribut est obligatoire pour l'élément {{HTMLElement("bdo")}} où il a une signification sémantique différente.

Cet attribut n'est _pas_ hérité par l'élément {{HTMLElement("bdi")}}. S'il n'est pas défini, sa valeur est `auto`.

Les navigateurs peuvent permettre aux utilisateur·ice·s de modifier la direction des éléments {{HTMLElement("input")}} et {{HTMLElement("textarea")}} afin d'aider à la rédaction de contenu.
Chrome et Safari proposent une option de direction dans le menu contextuel des champs de saisie.
Firefox utilise <kbd>Ctrl</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Maj</kbd> + <kbd>X</kbd> à l'intérieur d'un `<textarea>` pour basculer la direction du texte.
Ces fonctionnalités basculent la valeur de l'attribut `dir` entre `ltr` et `rtl`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété {{DOMxRef("HTMLElement.dir")}} qui reflète cet attribut.
- [Gérer les différentes directions de texte](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
