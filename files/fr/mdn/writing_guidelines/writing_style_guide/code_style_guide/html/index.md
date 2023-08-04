---
title: Lignes directrices pour le HTML
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
---

{{MDNSidebar}}

Les directives suivantes couvrent la manière d'écrire du HTML pour les exemples de code MDN.

## Dans cet article

- [Doctype et méta-données](#doctype_and_metadata)

  - [Doctype](#doctype)
  - [Langue du document](#document_language)
  - [Jeu de caractères du document](#document_characterset)
  - [Méta-balise Viewport](#viewport_meta_tag)

- [Style général de codage des balises](#general_markup_coding_style)

  - [Utiliser les minuscules](#use_lowercase)
  - [Barre oblique de fermeture (slash)](#trailing_slashes)
  - [Guillemets des attributs](#quoting_attributes)
  - [Utiliser les guillemets doubles](#use_double_quotes)
  - [Attributs booléens](#boolean_attributes)
  - [Noms de classes et d'ID](#class_and_id_names)
  - [Références des entités](#entity_references)

## Doctype et méta-données

> **Note :** Les directives de cette section ne s'appliquent que lorsque vous devez montrer un document HTML complet. La plupart du temps, vous n'aurez pas besoin de le faire ; un extrait est généralement suffisant pour démontrer une fonctionnalité. Lorsque vous utilisez la macro [EmbedLiveSample](/fr/docs/MDN/Structures/Code_examples#traditional_live_samples), il suffit d'inclure l'extrait HTML ; il sera automatiquement inséré dans un document HTML complet lors de son affichage.

### Doctype

Vous devez utiliser le doctype HTML5. Il est court, facile à retenir et rétrocompatible :

```html example-good
<!doctype html>
```

### Langue du document

Définissez la langue du document à l'aide de l'attribut [`lang`](/fr/docs/Web/HTML/Global_attributes#lang) de votre élément [`<html>`](/fr/docs/Web/HTML/Element/html) :

```html example-good
<html lang="fr"></html>
```

C'est bon pour l'accessibilité et les moteurs de recherche, cela aide à localiser le contenu et cela rappelle aux gens d'utiliser les meilleures pratiques.

### Jeu de caractères du document

Vous devez également définir le jeu de caractères de votre document comme suit :

```html example-good
<meta charset="utf-8" />
```

Utilisez UTF-8 à moins que vous n'ayez une très bonne raison de ne pas le faire ; il couvrira vos besoins en caractères à peu près indépendamment de la langue que vous utilisez dans votre document. En outre, vous devriez toujours spécifier le jeu de caractères le plus tôt possible dans le bloc [`<head>`](/fr/docs/Web/HTML/Element/head) de votre HTML (dans le premier kilooctet), car cela vous protège contre une [vulnérabilité de sécurité d'Internet Explorer](http://support.microsoft.com/kb/928847).

### Méta-balise Viewport

Enfin, vous devez toujours ajouter la métabalise viewport dans votre HTML [`<head>`](/fr/docs/Web/HTML/Element/head), pour donner à l'exemple une meilleure chance de fonctionner sur les appareils mobiles. Vous devez inclure au moins les éléments suivants dans votre document, que vous pourrez modifier ultérieurement en fonction des besoins :

```html example-good
<meta name="viewport" content="width=device-width" />
```

Voir [Zones d'affichage sur mobiles](/fr/docs/Web/CSS/Viewport_concepts#mobile_viewports) pour plus de détails.

## Style général de codage des balises

### Utiliser les minuscules

Utilisez les minuscules pour tous les noms d'éléments et les noms/valeurs d'attributs, car elles sont plus nettes et vous permettent d'écrire plus rapidement les balises :

C'est bien :

```html example-good
<p class="nice">Ça a l'air sympa et soigné</p>
```

Ce n'est pas très bon :

```html-nolint example-bad
<P CLASS="WHOA-THERE">Pourquoi mon balisage crie-t-il ?</P>
```

### Barre oblique de fermeture (slash)

N'incluez pas les barres obliques de fin de style XHTML pour les éléments vides, car elles sont inutiles et ralentissent le processus. Elles peuvent également casser les anciens navigateurs si vous ne faites pas attention (bien que, d'après ce dont nous nous souvenons, cela n'a pas été un problème depuis Netscape 4).

C'est bon :

```html example-good
<input type="text" />
<hr />
```

Les barres obliques ne sont pas nécessaires :

```html example-bad
<input type="text" />
<hr />
```

### Guillemets des attributs

Vous devez mettre toutes les valeurs d'attribut entre guillemets. Il est tentant d'omettre les guillemets puisque HTML5 le permet, mais le balisage est plus net et plus facile à lire si vous les incluez. Par exemple, ceci est mieux :

```html example-good
<img
  src="images/logo.jpg"
  alt="Une icône de globe circulaire"
  class="no-border" />
```

que ça :

```html example-bad
<img src=images/logo.jpg alt=Une icône de globe circulaire class=no-border>
```

Cela peut également causer des problèmes - dans l'exemple ci-dessus, l'attribut `alt` sera interprété comme plusieurs attributs, car il n'y a pas de guillemets pour spécifier que "Une icône de globe circulaire" est une valeur d'attribut unique.

### Utiliser les guillemets doubles

Utilisez des guillemets doubles pour le HTML, et non des guillemets simples :

```html example-good
<p class="important">Yes</p>
```

```html-nolint example-bad
<p class='important'>Nope</p>
```

### Attributs booléens

N'écrivez pas les attributs booléens en entier ; vous pouvez simplement écrire le nom de l'attribut pour le définir. Par exemple, vous pouvez écrire :

```html example-good
required
```

Ceci est parfaitement compréhensible et fonctionne bien ; la version plus longue avec la valeur est acceptée mais n'est pas nécessaire :

```html example-bad
required="required"
```

### Noms de classes et d'ID

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

N'utilisez pas inutilement les références d'entités - utilisez le caractère littéral chaque fois que cela est possible (vous devrez toujours échapper les caractères comme les crochets et les guillemets).

Par exemple, vous pourriez simplement écrire

```html example-good
<p>© 2018 Me</p>
```

Au lieu de

```html example-bad
<p>&copy; 2018 Me</p>
```

Cela ne pose aucun problème tant que vous déclarez un jeu de caractères UTF-8.

## De bons exemples HTML sur MDN

Vous pouvez trouver de bons extraits HTML, concis et significatifs, en haut des [pages de référence HTML](/fr/docs/Web/HTML/Reference) - nos exemples interactifs sont généralement rédigés de manière à suivre ces directives, mais sachez qu'ils peuvent différer à certains endroits car ils ont pour la plupart été rédigés avant la nouvelle rédaction des directives.
