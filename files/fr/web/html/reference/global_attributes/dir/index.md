---
title: "Attribut HTML universel : `dir`"
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: da275ce3eae1d8d250f1079b4643213a7a2bbb90
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`dir`** est un attribut {{Glossary("Enumerated", "énuméré")}} qui définit la _direction de texte de base_ de l'élément et isole la direction du contenu provenant du texte environnant.

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

<p lang="ar">هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p lang="ar" dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

## Valeurs

Il peut prendre les valeurs suivantes&nbsp;:

- `ltr`, qui définit une direction de base _de gauche à droite_&nbsp;;
- `rtl`, qui définit une direction de base _de droite à gauche_&nbsp;;
- `auto`, qui permet à l'agent utilisateur de déterminer la direction de base à partir du texte, en utilisant généralement le premier caractère ayant une direction forte (en ignorant `<bdi>`, `<script>`, `<style>`, `<textarea>` et les éléments avec des attributs `dir` valides). Pour {{HTMLElement("textarea")}} et {{HTMLElement("pre")}}, la direction de rendu est déterminée séparément pour chaque paragraphe de texte.

> [!NOTE]
> La valeur `auto` doit être utilisée pour des données dont la direction est inconnue, par exemple des saisies utilisateur ou des données externes.
>
> Si l'attribut [`dirname`](/fr/docs/Web/HTML/Reference/Attributes/dirname) est utilisé lors de l'envoi de données par les utilisateur·ice·s, il est possible d'afficher les données avec une direction définie plutôt que de s'appuyer sur la détection automatique.

Si la direction n'est pas définie ou n'est pas valide, elle est généralement [héritée](#héritage) de l'élément parent. Omettre `dir` n'active pas la détection automatique de la direction.

### Héritage

Si un élément ne possède pas d'attribut `dir`, il hérite généralement de la direction de son [élément parent](/fr/docs/Web/API/Node/parentElement). Si aucun élément ancêtre ne définit de direction, la direction par défaut est de gauche à droite.

Il existe des exceptions&nbsp;:

- Un élément {{HTMLElement("bdi")}} détermine sa direction à partir de son contenu, comme si `dir="auto"` est défini.
- Un élément [`<input type="tel">`](/fr/docs/Web/HTML/Reference/Elements/input/tel) utilise la direction de gauche à droite.

## Notes d'utilisation

L'algorithme bidirectionnel Unicode ({{Glossary("BiDi")}}) utilise la direction de base. Alors que les caractères fortement orientés LTR ou RTL (comme les lettres latines, hébraïques ou arabes) établissent la direction pour eux-mêmes et pour tous les caractères neutres intermédiaires (en créant des «&nbsp;portées&nbsp;» de texte), la direction de base est nécessaire dans deux situations&nbsp;:

- Les caractères neutres (comme les espaces ou la ponctuation) aux limites de portées de texte avec des directions différentes l'adoptent, notamment au tout début ou à la toute fin.
- Elle sert à ordonner les portées de texte.

Par exemple, considérez le premier paragraphe anglais dans [l'exemple interactif](#exemple_interactif). Il y a deux segments de texte&nbsp;: le texte anglais (LTR en raison des caractères latins) et le point final (qui se trouve à la fin de l'élément `p` et adopte donc la direction de base RTL). Ces segments de texte sont disposés de droite à gauche, donc le texte apparaît d'abord sur le bord droit, suivi à sa gauche par le point. De même, le premier paragraphe arabe hérite de la direction de base LTR du document HTML, donc le texte arabe RTL apparaît sur le bord gauche, suivi à sa droite par le point (avec une direction LTR). Les deux paragraphes sont typographiquement incorrects.

Même pour les documents utilisant un seul système d'écriture, il est recommandé de définir explicitement `dir` sur l'élément racine, ce qui est particulièrement important pour les systèmes RTL, car la direction de base LTR par défaut est incorrecte. L'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) déclare la langue, mais n'implique pas la direction de base.

Cet attribut peut être remplacé par les propriétés CSS {{CSSxRef("direction")}} et {{CSSxRef("unicode-bidi")}}, si une feuille CSS est active et que l'élément prend en charge ces propriétés.

Comme la direction du texte est liée sémantiquement à son contenu et non à sa présentation, il est recommandé aux développeur·euse·s web d'utiliser cet attribut plutôt que les propriétés CSS associées lorsque cela est possible. Ainsi, le texte s'affiche correctement, y compris dans un navigateur qui ne prend pas en charge le CSS ou si le CSS est désactivé.

Une image peut avoir sa propriété `dir` réglée sur `"rtl"` auquel cas les attributs HTML `title` et `alt` sont formatés et définis comme `"rtl"`.

Lorsqu'un tableau a son `dir` réglé sur `"rtl"`, l'ordre des colonnes est disposé de droite à gauche.

L'élément {{HTMLElement("bdo")}} nécessite `dir="ltr"` ou `dir="rtl"`. Sur cet élément, l'attribut remplace la direction intrinsèque des caractères au lieu de définir uniquement une direction de base.

Les navigateurs peuvent permettre aux utilisateur·ice·s de modifier la direction des éléments {{HTMLElement("input")}} et {{HTMLElement("textarea")}} afin d'aider à la rédaction de contenu.
Chrome et Safari proposent une option de direction dans le menu contextuel des champs de saisie.
Firefox utilise <kbd>Ctrl</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Maj</kbd> + <kbd>X</kbd> à l'intérieur d'un `<textarea>` pour basculer la direction du texte.
Ces fonctionnalités basculent la valeur de l'attribut `dir` entre `ltr` et `rtl`.

## Exemples

### Définir la direction au niveau du document

Définissez `dir="rtl"` sur l'élément {{HTMLElement("html")}} lorsque la page est principalement écrite dans un système d'écriture de droite à gauche, comme l'arabe ou l'hébreu. Utilisez `dir` sur un bloc de la page lorsque ce bloc nécessite une direction de base différente.

Dans ce document arabe, le paragraphe anglais nécessite `dir="ltr"` et `lang="en"`.

```html
<!doctype html>
<html dir="rtl" lang="ar">
  <head>
    <meta charset="utf-8" />
    <title>صفحة عربية</title>
  </head>
  <body>
    <p>محتوى الصفحة باللغة العربية.</p>
    <p dir="ltr" lang="en">This paragraph is in English.</p>
  </body>
</html>
```

### Définir explicitement la direction du texte

Cet exemple définit explicitement la direction de base de deux paragraphes. La direction de base affecte l'alignement par défaut et le placement de la ponctuation.

```html
<p dir="ltr" lang="en">This sentence is in English and reads left to right.</p>
<p dir="rtl" lang="ar">
  هذه الجملة باللغة العربية وتُقرأ من اليمين إلى اليسار.
</p>
```

### Texte bidirectionnel en incise

Lorsqu'une phrase en incise possède une direction de base différente de celle du texte environnant, entourez étroitement toute la phrase d'un élément avec la valeur `dir` appropriée. Cela isole également la direction de la phrase de son environnement, afin que la ponctuation et les nombres extérieurs ne soient pas considérés comme faisant partie de la phrase. Utilisez un élément sémantique existant, tel que {{HTMLElement("cite")}} pour un titre de livre, ou un {{HTMLElement("bdi")}} si aucun autre élément ne convient.

```html
<p dir="rtl" lang="ar">
  اقرأ <cite dir="ltr" lang="en">How the Grinch Stole Christmas!</cite> اليوم.
</p>
```

Notez que le point d'exclamation, qui fait partie du titre, se trouve à l'intérieur de l'élément `<cite>`. S'il se trouve à l'extérieur, il adopte la direction de base et apparaît donc sur le bord gauche du titre.

### Utiliser `dir="auto"` pour le contenu généré par les personnes

Lorsque la direction du texte n'est pas connue à l'avance, comme pour les commentaires des utilisateur·ice·s, utilisez `dir="auto"`. Le navigateur utilise le premier caractère fortement directionnel pour déterminer la direction de base de l'élément. Il s'agit d'une heuristique, et non d'une détection de la langue&nbsp;: un commentaire qui commence par un nom anglais et continue en arabe a une direction de base de gauche à droite. Utilisez une direction explicite lorsque celle-ci est connue.

Ici, les paragraphes représentent deux commentaires possibles. Les commentaires sont écrits par des personnes, donc le site ne connaît pas leur langue lors de l'affichage.

```html
<p dir="auto">This comment is in English.</p>
<p dir="auto">هذا التعليق باللغة العربية.</p>
```

L'élément {{HTMLElement("bdi")}} produit le même effet et offre une syntaxe plus concise pour l'isolation en incise, en particulier lorsqu'aucun élément sémantique ne convient.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété {{DOMxRef("HTMLElement.dir")}} qui reflète cet attribut.
- [Gérer les différentes directions de texte](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Créer des pages HTML en arabe, en hébreu et dans d'autres systèmes d'écriture de droite à gauche <sup>(angl.)</sup>](https://www.w3.org/International/tutorials/bidi-xhtml/index.en.html) sur w3.org
