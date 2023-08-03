---
title: "@document"
slug: Web/CSS/@document
---

{{CSSRef}}{{SeeCompatTable}}

La [règle @ CSS](/fr/docs/Web/CSS/Règles_@) **`@document`** restreint les règles qu'elle contient en fonction de l'URL du document. Elle est principalement conçue pour les feuilles de style utilisateur, bien qu'elle puisse être également utilisée pour les feuilles de style d'auteur.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Syntaxe

Une règle `@document` peut définir une ou plusieurs fonctions de correspondance. Si l'une quelconque des règles s'applique à l'URL donnée, la règle prendra effet sur cette URL. Les fonctions disponibles sont :

- `url()`, qui établit une correspondance avec une URL exacte ;
- `url-prefix()`, qui établit une correspondance si l'URL du document commence par la valeur fournie ;
- `domain()`, qui établit une correspondance si l'URL du document se trouve sur le domaine indiqué (ou l'un de ses sous-domaines) ;
- `media-document()` qui caractérise le type de document : vidéo, image, plugin, tout ;
- `regexp()`, qui établit une correspondance avec si l'URL du document vérifie une [expression rationnelle](/fr-FR/docs/Web/JavaScript/Guide/Regular_Expressions). L'expression doit correspondre à l'URL entière.

Les valeurs fournies aux fonctions `url()`, `url-prefix()`, `media-document()` et `domain()` peuvent être éventuellement délimitées par des apostrophes, simples ou doubles. Les valeurs fournies à la fonction `regexp()` _doivent_ être délimitées par des apostrophes.

Les valeurs échappées fournies à la fonction `regexp()` doivent être en outre échappées pour le CSS. Par exemple, un `.` (point) correspond à n'importe quel caractère dans les expressions régulières. Pour établir une correspondance avec un point littéral, vous aurez d'abord besoin de l'échapper en utilisant les règles des expressions rationnelles (en `\.`), puis d'échapper cette chaîne en utilisant les règles CSS (en `\\.`).

> **Note :** Il existe une version préfixée de cette propriété pour Mozilla : `@-moz-document`. Cette propriété a été restreinte aux feuilles de style utilisateur ou à celles de l'agent utilisateur à partir de Firefox 59 afin d'expérimenter une méthode de réduction des risques d'injections CSS (cf. [bug Firefox 1035091](https://bugzil.la/1035091)).

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@document url("http://www.w3.org/"),
               url-prefix("http://www.w3.org/Style/"),
               domain("mozilla.org"),
               media-document("video"),
               regexp("https:.*") {
  /* Ces règles CSS s'appliquent à :
     - la page "http://www.w3.org/"
     - toute page dont l'URL commence par "http://www.w3.org/Style/"
     - toute page dont l'hôte de l'URL est "mozilla.org"
       ou finit par ".mozilla.org"
     - toute vidéo
     - toute page dont l'URL commence par "https:" */

  /* Rendre ces pages vraiment laides */
  body {
    color: purple;
    background: yellow;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Per-site user style sheet rules](http://lists.w3.org/Archives/Public/www-style/2004Aug/0135) sur la liste de diffusion www-style.
