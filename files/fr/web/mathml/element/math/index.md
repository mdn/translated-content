---
title: math
slug: Web/MathML/Element/math
tags:
  - MathML
  - MathML:Element
  - Référence MathML
translation_of: Web/MathML/Element/math
---
{{MathMLRef}}

L'élément racine de MathML est `<math>`. Tout objet représenté en MathML doit être encadré de balises `<math>`. De plus, il est interdit d'imbriquer un autre élément `<math>` à l'intérieur d'un premier. Il est toutefois possible d'avoir un nombre arbitraire d'éléments fils à l'intérieur d'un élément `<math>`.

## Attributs

En plus des attributs qui suivent, l'élément `<math>` accepte tous les attributs de l'élément {{ MathMLElement("mstyle") }}.

- class, id, style
  - : Afin d'être utilisés avec les [feuilles de style](/fr/docs/CSS).
- dir
  - : Le sens global de lecture des formules. Les valeurs possibles sont `ltr` (gauche à droite) ou `rtl` (droite à gauche).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- display

  - : Cet attribut à valeur donnée définit la façon dont le balisage MathML doit être rendu. Il peut avoir l'une des valeurs suivantes :

    - `block`, ce qui signifie que cet élément sera affiché en dehors du fragment de texte courant, comme un bloc qui pourra être positionné n'importe où sans que cela change le sens du texte ;
    - `inline`, ce qui signifie que cet élément sera affiché au sein du fragment de texte courant et qu'il ne peut pas être déplacé sans que cela change le sens de ce texte.

    La valeur par défaut, si l'attribut n'est pas présent, est `inline`.

- mode {{ deprecated_inline() }}
  - : Déprécié. L'attribut `display` doit être utilisé à la place. (Les anciennes valeurs possibles pour cet attribut était `display` - équivalent à `display="block"` et `inline`)
- overflow
  - : Définit comment l'affichage de la formule est géré si celle-ci est trop grande pour être insérée dans l'espace alloué.
    Les valeurs possible pour cet attribut sont : `linebreak` (la valeur par défaut), `scroll`, `elide`, `truncate`, `scale`.

## Exemples

![Theorem of Pythagoras](math.jpg)

### Notation HTML5

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MathML en HTML5</title>
  </head>
  <body>

  <math>
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

  </body>
</html>
```

### Notation XHTML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>MathML en XHTML</title>
</head>
<body>

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

</body>
</html>
```

**Note** : Les documents XHTML avec du MathML doivent être servis en tant que `application/xhtml+xml`. Ceci est facilement réalisable en ajoutant l'extension `.xhtml` aux fichiers locaux. Pour les serveurs Apache, il est possible de [configurer le fichier `.htaccess`](http://httpd.apache.org/docs/2.2/mod/mod_mime.html#addtype) afin que les extensions correspondent au type MIME correct. Étant donné qu'ici le MathML est utilisé au sein d'un document XML, il faut s'assurer que celui-ci est bien formé.

## Spécifications

| Spécification                                                                                                        | Statut                       | Commentaires           |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------- |
| {{ SpecName('MathML3', 'chapter2.html#interf.toplevel', 'The Top-Level math Element') }} | {{ Spec2('MathML3') }} | Spécification actuelle |
| {{ SpecName('MathML2', 'chapter7.html#interf.toplevel', 'The Top-Level math Element') }} | {{ Spec2('MathML2') }} | Spécification initiale |

## Compatibilité des navigateurs

{{Compat("mathml.elements.math")}}

## Notes relatives à Firefox

Firefox 7.0 {{ geckoRelease("7.0") }} a introduit le support de tous les attributs MathML sur l'élément racine math (c'est à dire le même comportement que l'élément {{ MathMLElement("mstyle") }}). Cependant, l'attribut `displaystyle` n'avait pas été pris en compte et a [été ajouté](https://bugzilla.mozilla.org/show_bug.cgi?id=669719) dans Firefox 8.0 {{ geckoRelease("8.0") }}.

Un moyen textuel alternatif (`alttext`) ou une référence à une image alternative utilisant les attributs `altimg`, `altimg-width`, `altimg-height` ou `altimg-valign` n'est pas encore, à l'heure actuelle, implémentée dans Firefox.

## Voir aussi

- L'élément racine HTML : {{ HTMLElement("html") }}
- L'élément racine SVG : {{ SVGElement("svg") }}
- Test MathML pour les navigateurs : en [XHTML](https://www.eyeasme.com/Joe/MathML/MathML_browser_test) et [HTML5](https://eyeasme.com/Joe/MathML/HTML5_MathML_browser_test)
