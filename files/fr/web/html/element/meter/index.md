---
title: <meter>
slug: Web/HTML/Element/meter
---

{{HTMLSidebar}}

L'élément HTML **`<meter>`** représente une valeur scalaire dans un intervalle donné ou une valeur fractionnaire.

{{EmbedInteractiveExample("pages/tabbed/meter.html", "tabbed-shorter")}}

## Attributs

Comme pour les autres éléments HTML, cet élément inclut également [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `form`
  - : Cet attribut contient l'attribut **`id`** de l'élément {{HTMLElement("form")}} auquel celui-ci est rattaché. Par défaut, il est à l'élément {{HTMLElement("form")}} qui est son plus proche ancêtre.
- `high`
  - : Cet attribut représente la valeur minimale à partir de laquelle la mesure est considérée comme haute. Si cet attribut est défini, il doit s'agir d'un nombre à virgule compris entre les valeurs des attributs **`min`** et **`max`**. Si l'attribut **`low`** est aussi défini, il doit être plus grand que celui-ci.
- `low`
  - : Cet attribut représente la valeur maximale à partir de laquelle la mesure est considérée comme basse. Si cet attribut est défini, il doit s'agir d'un nombre à virgule compris entre les valeurs des attributs **`min`** et **`max`**. Si l'attribut **`high`** est aussi défini, il doit être plus petit que celui-ci.
- `max`
  - : Cet attribut représente la valeur maximale que peut prendre la mesure. Il doit s'agir d'un nombre à virgule; s'il est invalide ou si l'attribut n'est pas défini, sa valeur par défaut est 1.0. Il doit être strictement plus grand que la valeur de l'attribut **`min`**.
- `min`
  - : Cet attribut représente la valeur minimale que peut prendre la mesure. Il doit s'agir d'un nombre à virgule; s'il est invalide ou si l'attribut n'est pas défini, sa valeur par défaut est 0.0. Il doit être strictement plus petit que la valeur de l'attribut **`max`**.
- `optimum`
  - : Cet attribut représente la valeur idéale pour la mesure. Si cet attribut est défini, il doit s'agir d'un nombre à virgule compris entre les valeurs des attributs **`min`** et **`max`**. Si la valeur de **`optimum`** est inférieure à **`low`**, s'il est défini, cela signifie que les valeurs les plus petites sont meilleures; si sa valeur est supérieure à **`high`**, s'il est défini, cela signifie que les valeurs les plus grandes sont meilleures; enfin, s'il est compris entre **`low`** et **`high`**, cela signifie que les extrêmes ne sont pas les meilleures grandeurs.
- `value`

  - : Cette attribut représente la valeur courante de la mesure. Cet attribut est obligatoire.

    > **Note :** il est recommandé aux auteurs de dupliquer les valeurs des attributs **`min`,** **`max`** et **`value`** dans le contenu de cet élément de façon à permettre aux navigateurs ne supportant pas l'élément {{ HTMLElement("meter") }} de transmettre ces informations aux utilisateurs. Par exemple :
    >
    > ```html
    > Utilisation de l'espace de stockage:
    > <meter value="6" max="8">6 blocs utilisés (sur un total de 8)</meter>
    > ```
    >
    > Il n'y a pas de moyen sémantique de décrire l'unité de l'attribut **`value`**, néanmoins l'attribut global **`title`** peut être utilisé pour cela.

## Exemples

### Exemple simple

#### HTML

```html
<p>
  Chauffez le four à <meter min="100" max="250" value="180">180 degrés</meter>.
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple_simple", 300, 60)}}

### Utilisation de `high` et `low`

On remarquera ici que l'attribut `min` est absent (ce qui est autorisé), la valeur minimale sera alors 0.

#### HTML

```html
<p>
  Il a eu
  <meter low="69" high="80" max="100" value="84">B</meter>
  à son examen.
</p>
```

#### Résultat

{{EmbedLiveSample("Utilisation_de_high_et_low", 300, 60)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >, contenu étiquetable
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >
        ne possédant pas d'élément <code>&#x3C;meter></code> parmi ses
        descendants.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLMeterElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("progress")}}
