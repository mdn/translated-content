---
title: attr()
slug: Web/CSS/attr
translation_of: Web/CSS/attr()
original_slug: Web/CSS/attr()
---
{{CSSRef}}

La fonction **`attr()`** est utilisée afin de récupérer la valeur d'un attribut d'un élément pour l'utiliser dans la feuille de style. Cette fonction peut également être utilisée sur [les pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements) auquel cas c'est la valeur correspondant à l'élément source qui est renvoyée.

```css
/* Utilisation simple */
attr(data-count);
attr(title);

/* Avec un type */
attr(src url);
attr(data-count number);
attr(data-width px);

/* Avec une valeur par défaut */
attr(data-count number, 0);
attr(src url, "");
attr(data-width px, inherit);
attr(data-something, "default");
```

> **Note :** La fonction `attr()` peut être utilisée sur n'importe quelle propriété CSS. Toutefois, en dehors de {{cssxref("content")}}, la prise en charge des navigateurs est expérimentale. Voir le tableau de compatibilité en fin d'article.

## Syntaxe

### Valeurs

- `attribute-name`
  - : Le nom de l'attribut de l'élément HTML ciblé par la déclaration CSS.
- `<type-or-unit>` {{experimental_inline}}

  - : Un mot-clé indiquant le type de valeur pour l'attribut ou l'unité dans laquelle elle est exprimée. Si la valeur `<type-or-unit>` est invalide pour l'attribut ciblé, l'expression `attr()` sera également considérée comme invalide. Si cette valeur est absente, elle vaudra `string` par défaut. La liste des valeurs valides est :

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Mot-clé</th>
          <th scope="col">Type associé</th>
          <th scope="col">Commentaires</th>
          <th scope="col">Valeur par défaut</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>string</code></td>
          <td>{{cssxref("&lt;string&gt;")}}</td>
          <td>
            La valeur de l'attribut est traitée comme une chaîne de caractères. Elle
            n'est pas réanalysée et les caractères sont utilisés tels quels (les
            échappements CSS ne sont pas transformés).
          </td>
          <td>Une chaîne vide.</td>
        </tr>
        <tr>
          <td><code>color</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;color&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme un code sur 3 ou 6 chiffres
            ou comme un mot-clé. Elle doit être une valeur
            {{cssxref("&lt;string&gt;")}} valide. Les blancs en début et
            en fin de chaîne sont supprimés.
          </td>
          <td><code>currentColor</code></td>
        </tr>
        <tr>
          <td><code>url</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;uri&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme une chaîne, utilisée dans une
            fonction <code>url()</code>.<br />Une URL relative sera résolue par
            rapport au document original et non par rapport à la feuille de style.
            Les blancs en début et en fin de chaîne sont supprimés.
          </td>
          <td>
            L'URL <code>about:invalid</code> qui pointe vers un document inexistant.
          </td>
        </tr>
        <tr>
          <td><code>integer</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;integer&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme un entier
            ({{cssxref("&lt;integer&gt;")}}). Si elle n'est pas valide (si
            ce n'est pass un entier ou s'il sort de l'intervalle autorisé par la
            propriété), ce sera la valeur par défaut qui sera utilisée.<br />Les
            blancs en début et en fin de chaîne sont supprimés.
          </td>
          <td>
            <code>0</code>, ou, si <code>0</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td><code>number</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;number&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme un nombre
            ({{cssxref("&lt;number&gt;")}}). Si elle n'est pas valide (si
            ce n'est pas un nombre ou que celui-ci sort de l'intervalle autorisé par
            la propriété), ce sera la valeur par défaut qui sera utilisée.<br />Les
            blancs en début et en fin de chaîne sont supprimés.
          </td>
          <td>
            <code>0</code>, ou, si <code>0</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td><code>length</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;length&gt;")}}</td>
          <td>
            <p>
              La valeur de l'attribut est analysée comme une longueur
              ({{cssxref("&lt;length&gt;")}}) et inclut l'unité (par
              exemple <code>12.5em</code>). Si la valeur n'est pas valide (si ce
              n'est pas une longueur ou que celle-ci sort de l'intervalle autorisé
              par la propriété), ce sera la valeur par défaut qui sera utilisée.<br />Si
              l'unité fournie est une unité relative, <code>attr()</code> calculera
              la valeur absolue correspondante. Les blancs en début et en fin de
              chaîne sont supprimés.
            </p>
          </td>
          <td>
            <code>0</code>, ou, si <code>0</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td>
            <code>em</code>, <code>ex</code>, <code>px</code>, <code>rem</code>,
            <code>vw</code>, <code>vh</code>, <code>vmin</code>, <code>vmax</code>,
            <code>mm</code>, <code>cm</code>, <code>in</code>, <code>pt</code>, or
            <code>pc</code> {{experimental_inline}}
          </td>
          <td>{{cssxref("&lt;length&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme un nombre
            ({{cssxref("&lt;number&gt;")}}) (il n'y a pas d'unité) et
            interprétée comme une longueur
            ({{cssxref("&lt;length&gt;")}}) grâce à l'unité passée comme
            argument. Si la valeur n'est pas valide (ce n'est pas un nombre ou
            celui-ci sort de l'intervalle autorisé par la propriété), ce sera la
            valeur par défaut qui sera utilisée.<br />Si l'unité indiquée est une
            unité de longueur relative, <code>attr()</code> calculera la valeur
            absolue correspondante.<br />Les blancs en début et en fin de chaîne
            sont supprimés.
          </td>
          <td>
            <code>0</code>, ou, si <code>0</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td><code>angle</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;angle&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme un angle
            ({{cssxref("&lt;angle&gt;")}}) et inclut l'unité (par exemple
            <code>30.5deg</code>). Si la valeur n'est pas valide (si ce n'est pas un
            angle ou si la valeur sort de l'intervalle autorisé par la propriété
            CSS), ce sera la valeur par défaut qui sera utilisée.<br />Les blancs en
            début et en fin de chaîne sont supprimés.
          </td>
          <td>
            <code>0deg</code>, ou, si <code>0deg</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td>
            <code>deg</code>, <code>grad</code>,
            <code>rad</code> {{experimental_inline}}
          </td>
          <td>{{cssxref("&lt;angle&gt;")}}</td>
          <td>
            <p>
              La valeur de l'attribut est analysée comme un nombre
              ({{cssxref("&lt;number&gt;")}}) (il n'y a pas d'unité) et
              est interprétée comme un angle ({{cssxref("&lt;angle&gt;")}})
              avec l'unité indiquée en paramètre. Si la vlaeur n'est pas vliade (ce
              n'est pas un nombre ou celui-ci sort de l'intervalle autorisé par la
              propriété), ce sera la valeur par défaut qui sera utilisée.<br />Les
              blancs en début et en fin de chaîne sont supprimés.
            </p>
          </td>
          <td>
            <code>0deg</code>, ou, si <code>0deg</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td><code>time</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;time&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme une durée
            ({{cssxref("&lt;time&gt;")}}) et inclut l'unité (par exemple
            <code>30.5ms</code>). Si elle n'est pas valide (la valeur n'est pas une
            durée ou n'est pas comprise dans l'intervalle autorisée), ce sera la
            valeur par défaut qui sera utilisée.<br />Les blancs en début et en fin
            de chaîne sont supprimés.
          </td>
          <td>
            <code>0s</code>, ou, si <code>0s</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td><code>s</code>, <code>ms</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;time&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme un nombre
            ({{cssxref("&lt;number&gt;")}}) sans unité (par exemple
            <code>12.5</code>) et est interprétée comme une durée
            ({{cssxref("&lt;time&gt;")}}) grâce à l'unité passée en
            paramètre. Si la valeur n'est pas valide (ce n'est pas un nombre ou
            celui-ci n'est pas compris dans l'intervalle autorisé), ce sera la
            valeur par défaut qui sera utilisée.<br />Les blancs en début et en fin
            de chaîne sont supprimés.
          </td>
          <td>
            <code>0s</code>, ou, si <code>0s</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td><code>frequency</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;frequency&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme une fréquence
            ({{cssxref("&lt;frequency&gt;")}}) et inclut l'unité (par
            exemple <code>30.5kHz</code>). Si elle n'est pas valide (ce n'est pas
            une fréquence ou celle-ci n'est pas comprise dans l'intervalle
            autorisé), ce sera la valeur par défaut qui sera utilisée. Les blancs en
            début et en fin de chaîne sont supprimés.
          </td>
          <td>
            <code>0Hz</code>, ou, si <code>0Hz</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td>
            <code>Hz</code>, <code>kHz</code> {{experimental_inline}}
          </td>
          <td>{{cssxref("&lt;frequency&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme un nombre
            ({{cssxref("&lt;number&gt;")}}) sans unité (par exemple
            <code>12.5</code>) et est interprétée comme une fréquence grâce à
            l'unité indiquée. Si la valeur n'est pas valide (ce n'est pas un nombre
            ou celui-ci n'est pas compris dans l'intervalle autorisé), ce sera la
            valeur par défaut qui sera utilisée.<br />Les blancs en début et en fin
            de chaîne sont supprimés.
          </td>
          <td>
            <code>0Hz</code>, ou, si <code>0Hz</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
        <tr>
          <td><code>%</code> {{experimental_inline}}</td>
          <td>{{cssxref("&lt;percentage&gt;")}}</td>
          <td>
            La valeur de l'attribut est analysée comme un nombre
            ({{cssxref("&lt;number&gt;")}}) sans unité (par exemple
            <code>12.5</code>) et est interprétée comme un pourcentage
            ({{cssxref("&lt;percentage&gt;")}}). Si elle n'est pas valide
            (ce n'est pas un nombre ou celui-ci n'est pas compris dans l'intervalle
            autorisé par la propriété), ce sera la valeur par défaut qui sera
            utilisée.<br />Si la valeur fournie est utilisée comme une longueur,
            <code>attr()</code> calcule la longueur absolue correspondante.<br />Les
            blancs en début et en fin de chaîne sont supprimés.
          </td>
          <td>
            <code>0%</code>, ou, si <code>0%</code> n'est pas valide, la valeur
            minimale de la propriété.
          </td>
        </tr>
      </tbody>
    </table>

- `<fallback>` {{experimental_inline}}
  - : La valeur qui sera utilisée si l'attribut est absent ou contient une valeur invalide. La valeur indiquée avec ce paramètre doit être valide et ne doit pas contenir une autre expression `attr()`. Si `attr()` n'est pas le seul composant de la valeur d'une propriété, la valeur `<fallback>` doit correspondre au type défini par `<type-or-unit>`. Si ce paramètre n'est pas utilisé, le moteur de rendu utilisera la valeur par défaut définie par `<type-or-unit>`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Utiliser la propriété `content`

#### HTML

```html
<p data-toto="coucou">world</p>
```

#### CSS

```css
[data-toto]::before {
  content: attr(data-toto) " ";
}
```

#### Résultat

{{EmbedLiveSample("Utiliser_la_propriété_content", "100%", "50")}}

### Valeur `<color>`

{{SeeCompatTable}}

#### HTML

```html
<div class="background" data-background="lime"></div>
```

#### CSS

```css
html,
body,
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background color, red);
}
```

#### Résultat

{{EmbedLiveSample("Valeur_color", "100%", "50")}}

## Spécifications

| Spécification                                                            | État                             | Commentaires                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Values", "#attr-notation", "attr()")}} | {{Spec2("CSS4 Values")}} | Aucune modification.                                                                                                                                                                                                                                                                                              |
| {{SpecName('CSS3 Values', '#attr-notation', 'attr()')}} | {{Spec2('CSS3 Values')}} | Ajout de deux paramètres optionnels. La fonction peut être utilisée sur toutes les propriétés et renvoyer des valeurs qui ne sont pas des chaînes de caractères. Ces modifications sont expérimentales et pourront être abandonnées pour la recommandation si la prise en charge des navigateurs est trop faible. |
| {{SpecName('CSS2.1', 'generate.html#x18', 'attr()')}} | {{Spec2('CSS2.1')}}         | Utilisation limitée à {{cssxref("content")}}, la fonction renvoie toujours une chaîne de caractères ({{cssxref("&lt;string&gt;")}}).                                                                                                                                                             |

## Compatibilité des navigateurs

{{Compat("css.types.attr")}}

## Voir aussi

- [Sélecteur d'attribut](/fr/docs/Web/CSS/Attribute_selectors)
- [Attributs HTML `data-*`](/fr/docs/Web/HTML/Global_attributes/data-*)
- [Attributs SVG `data-*`](/fr/docs/Web/SVG/Attribute/data-*)
