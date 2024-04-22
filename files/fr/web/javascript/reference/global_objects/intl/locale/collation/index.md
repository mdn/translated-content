---
title: Intl.Locale.prototype.collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
---

{{JSRef}}

La propriété **`Intl.Locale.prototype.collation`** est une propriété (à laquelle on accède via un accesseur) qui renvoie le [type de collation](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) pour l'instance de `Locale` courante. La collation est la méthode qui permet d'ordonner des chaînes de caractères en fonction des règles de la locale.

## Description

La collation est la façon dont les chaînes de caractères sont ordonnées. Elle est utilisée lorsqu'on doit trier des chaînes de caractères (des résultats de recherche, des enregistrements dans une base de donnée, etc.). Bien que cela puisse sembler trivial, la collation varie d'une région à l'autre et d'une langue à une autre. Cette propriété permet aux développeurs de connaître le type de collation pour une locale donnée.

Voici un tableau listant les types de collation possibles tels que définis dans [la spécification Unicode sur la collation](https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml).

<table class="standard-table">
  <caption>
    Les différents types de collation
  </caption>
  <thead>
    <tr>
      <th scope="col">Type de collation</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>big5han</code></td>
      <td>
        Ordre pinyin pour l'alphabet latin et ordre big5 pour les caractères CJK
        (utilisés en chinois)
      </td>
    </tr>
    <tr>
      <td><code>compat</code></td>
      <td>
        Une version précédente de l'ordre, utilisée à des fins de compatibilité
      </td>
    </tr>
    <tr>
      <td><code>dict</code></td>
      <td>Ordre à la façon d'un dictionnaire (comme utilisé en cingalais)</td>
    </tr>
    <tr>
      <td>
        <div class="warning">
          <p>
            <strong>Attention :</strong> Le type <code>direct</code> a été
            déprécié et ne doit pas être utilisé.
          </p>
        </div>
        <p><code>direct</code></p>
      </td>
      <td>Ordre des points de code binaires (utilisé en hindoux)</td>
    </tr>
    <tr>
      <td><code>ducet</code></td>
      <td>La collation Unicode par défaut pour les éléments d'un tableau</td>
    </tr>
    <tr>
      <td><code>emoji</code></td>
      <td>L'ordre recommandé pour les émojis</td>
    </tr>
    <tr>
      <td><code>eor</code></td>
      <td>Règles d'ordre européennes</td>
    </tr>
    <tr>
      <td><code>gb2312</code></td>
      <td>
        Ordre pinyin pour l'alphabet latin et ordre gb2312han pour les
        caractères CJK (utilisés en chinois)
      </td>
    </tr>
    <tr>
      <td><code>phonebk</code></td>
      <td>Ordre à la façon d'un annuaire (tel qu'en allemand)</td>
    </tr>
    <tr>
      <td><code>phonetic</code></td>
      <td>Ordre phonétique, basé sur la prononciation</td>
    </tr>
    <tr>
      <td><code>pinyin</code></td>
      <td>
        Ordre pinyin pour les caractères de l'alphabet latin et les caractères
        CJK (utilisés en chniois)
      </td>
    </tr>
    <tr>
      <td><code>reformed</code></td>
      <td>Ordre réformé (tel qu'en suédois)</td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td>
        Collation spéciale pour les chaînes de caractères utilisées pour des
        recherches
      </td>
    </tr>
    <tr>
      <td><code>searchjl</code></td>
      <td>
        Collation spéciale pour la recherche des consonnes initiales en coréen
      </td>
    </tr>
    <tr>
      <td><code>standard</code></td>
      <td>L'ordre par défaut pour chaque langue</td>
    </tr>
    <tr>
      <td><code>stroke</code></td>
      <td>
        Ordre pinyin pour l'alphabet latin et ordre de dessin (<em>stroke</em>)
        pour les caractères CJK (utilisés en chinois)
      </td>
    </tr>
    <tr>
      <td><code>trad</code></td>
      <td>Ordre traditionnel (tel qu'en espagnol)</td>
    </tr>
    <tr>
      <td><code>unihan</code></td>
      <td>
        Ordre pinyin pour l'alphabet latin et ordre Unihan radical pour les
        caractères CJK (utilisés en chinois)
      </td>
    </tr>
    <tr>
      <td><code>zhuyin</code></td>
      <td>
        <p>
          Ordre pinyin pour l'alphabet latin, ordre zhuyin pour les caractères
          Bopomofo et CJK (utilisés en chinois)
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

À l'instar des autres étiquettes, le type de collation peut être défini pour l'objet {{jsxref("Locale", "Intl.Locale")}} via la chaîne de caractères qui définit la locale ou grâce au deuxième paramètre du constructeur qui est un objet de configuration.

### Définir le type de collation via la chaîne décrivant la locale

Le premier argument passé à [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale) est une chaîne de caractères qui décrit la locale. Cette chaîne peut contenir des fragments additionnels (en plus de l'identifiant canonique de la locale). Pour cela, on ajoutera `-u` afin d'indiquer qu'on définit une extension. On ajoutera ensuite la clé identifiant cette extension, ici `-co` pour la collation. Enfin, on ajoutera la valeur souhaitée pour cette extension (dans cet exemple, `-emoji`) :

```js
let stringColl = new Intl.Locale("en-Latn-US-u-co-emoji");
console.log(stringColl.collation); // Affichera "emoji" dans la console
```

### Définir le type de collation via l'objet de configuration

Le constructeur [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale) possède un deuxième argument optionnel qui est un objet de configuration. Chaque propriété de cet objet pourra permettre de préciser une extension à la locale, y compris un type de collation. Pour définir le type de collation, on pourra utiliser une propriété `collation` sur cet objet avec une des valeurs indiquées ci-avant :

```js
let configColl = new Intl.Locale("en-Latn-US", { collation: "emoji" });
console.log(configColl.collation); // Affichera "emoji" dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
