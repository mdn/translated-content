---
title: Guide pour rédiger des exemples de code HTML
short-title: Exemples HTML
slug: MDN/Writing_guidelines/Code_style_guide/HTML
original_slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

Les consignes suivantes expliquent comment rédiger des exemples de code HTML pour MDN Web Docs.

## Lignes directrices générales pour les exemples de code HTML

### Choisir un format

Les opinions sur l'indentation correcte, les espaces et la longueur des lignes ont toujours été controversées. Les discussions sur ces sujets détournent de la création et de la maintenance du contenu.

Sur MDN Web Docs, nous utilisons [Prettier <sup>(angl.)</sup>](https://prettier.io/) comme formateur de code pour garder un style cohérent (et éviter les discussions hors sujet). Vous pouvez consulter notre [fichier de configuration <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/.prettierrc.json) pour connaître les règles actuelles, et lire la [documentation de Prettier <sup>(angl.)</sup>](https://prettier.io/docs/index.html).

Prettier formate tout le code et maintient un style cohérent. Cependant, il existe quelques règles supplémentaires à suivre.

## Document HTML complet

> [!NOTE]
> Les consignes de cette section s'appliquent uniquement lorsque vous devez montrer un document HTML complet. Lorsque vous utilisez la macro [EmbedLiveSample](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples#exemples_interactifs), il suffit d'inclure l'extrait HTML&nbsp;; il sera automatiquement inséré dans un document HTML complet lors de son affichage.

### Doctype

Vous devez utiliser le {{Glossary("Doctype", "doctype")}} HTML5.

```html example-good
<!doctype html>
```

### Langue du document

Définissez la langue du document à l'aide de l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes#lang) de votre élément {{HTMLElement("html")}}&nbsp;:

```html example-good
<html lang="fr"></html>
```

C'est bon pour l'accessibilité et les moteurs de recherche, cela aide à localiser le contenu et cela rappelle aux gens d'utiliser les meilleures pratiques.

### Jeu de caractères du document

Vous devez également définir le jeu de caractères de votre document comme suit :

```html example-good
<meta charset="utf-8" />
```

Utilisez UTF-8 à moins que vous n'ayez une très bonne raison de ne pas le faire&nbsp;; il couvrira vos besoins en caractères à peu près indépendamment de la langue que vous utilisez dans votre document.

### Méta-balise Viewport

Enfin, vous devez toujours ajouter la métabalise viewport dans votre HTML {{HTMLElement("head")}}, pour donner à l'exemple une meilleure chance de fonctionner sur les appareils mobiles. Vous devez inclure au moins les éléments suivants dans votre document, que vous pourrez modifier ultérieurement en fonction des besoins&nbsp;:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Voir [`<meta name="viewport">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport) pour plus de détails.

## Attributs

Vous devez mettre toutes les valeurs d'attribut entre guillemets. Il est tentant d'omettre les guillemets puisque HTML5 le permet, mais le balisage est plus net et plus facile à lire si vous les incluez. Par exemple, ceci est mieux&nbsp;:

```html example-good
<img
  src="images/logo.jpg"
  alt="Une icône de globe circulaire"
  class="no-border" />
```

…que ça&nbsp;:

```html example-bad
<img src=images/logo.jpg alt=Une icône de globe circulaire class=no-border>
```

Cela peut également causer des problèmes - dans l'exemple ci-dessus, l'attribut `alt` sera interprété comme plusieurs attributs, car il n'y a pas de guillemets pour spécifier que "Une icône de globe circulaire" est une valeur d'attribut unique.

## Attributs booléens

N'écrivez pas les attributs booléens en entier ; vous pouvez simplement écrire le nom de l'attribut pour le définir. Par exemple, vous pouvez écrire&nbsp;:

```html example-good
required
```

Ceci est parfaitement compréhensible et fonctionne bien ; la version plus longue avec la valeur est acceptée mais n'est pas nécessaire&nbsp;:

```html example-bad
required="required"
```

## Convention de casse sur MDN

Utilisez les minuscules pour toutes les constructions insensibles à la casse, y compris la déclaration doctype, les noms d'éléments et les noms/valeurs d'attributs. Cela crée une apparence cohérente et permet d'écrire le balisage plus rapidement.

```html example-good
<p class="nice">Ça a l'air sympa et soigné</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Pourquoi mon balisage crie-t-il&nbsp;?</P>
```

## Noms de classes et d'ID

Utilisez des noms de classe/ID sémantiques et séparez les mots multiples par des traits d'union. N'utilisez pas de camelCase.

Bon :

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

Mauvais :

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

### Références des entités

N'utilisez pas inutilement les références d'entités — utilisez le caractère littéral chaque fois que cela est possible (vous devrez toujours échapper les caractères comme les crochets et les guillemets).

Par exemple, vous pourriez simplement écrire&nbsp;:

```html example-good
<p>© 2018 Me</p>
```

Au lieu de&nbsp;:

```html example-bad
<p>&copy; 2018 Me</p>
```

Cela ne pose aucun problème tant que vous déclarez un jeu de caractères UTF-8.

## Éléments HTML

Il existe quelques règles pour rédiger à propos des éléments HTML sur MDN Web Docs. Les respecter permet d'obtenir des descriptions cohérentes des éléments et de leurs composants, et garantit aussi un lien correct vers la documentation détaillée.

- **Noms d'éléments**&nbsp;: Utilisez la macro [`HTMLElement` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs), qui crée un lien vers la page MDN Web Docs de cet élément. Par exemple, écrire `\{{HTMLElement("title")}}` produit «&nbsp;{{HTMLElement("title")}}&nbsp;».
  Si vous ne souhaitez pas créer de lien, **entourez le nom de chevrons** et utilisez le style «&nbsp;Code en ligne&nbsp;» (par exemple, `<title>`).
- **Noms d'attributs**&nbsp;: Utilisez le style «&nbsp;Code en ligne&nbsp;» pour mettre les noms d'attributs en police à chasse fixe.
  De plus, mettez-les en **gras** lorsqu'ils sont mentionnés dans une explication de leur fonction ou lors de leur première utilisation sur la page.
- **Valeurs d'attributs**&nbsp;: Utilisez le style «&nbsp;Code en ligne&nbsp;» pour appliquer `<code>` aux valeurs d'attributs, et n'utilisez pas de guillemets autour des valeurs de type chaîne de caractères, sauf si la syntaxe d'un exemple de code l'exige. Par exemple&nbsp;: «&nbsp;Lorsque l'attribut `type` d'un élément `<input>` vaut `email` ou `tel` …&nbsp;».
