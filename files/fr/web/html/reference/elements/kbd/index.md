---
title: "<kbd> : l'élément de saisie clavier"
slug: Web/HTML/Reference/Elements/kbd
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

L'élément [HTML](/fr/docs/Web/HTML) **`<kbd>`** représente une portion de texte en ligne désignant une saisie de texte de l'utilisateur·ice à partir d'un clavier, d'une commande vocale ou de tout autre dispositif de saisie de texte. Par convention, {{Glossary("user agent", "l'agent utilisateur")}} affiche le contenu d'un élément `<kbd>` en utilisant sa police monospace par défaut, bien que cela ne soit pas imposé par la norme HTML.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;kbd&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Veuillez appuyer sur <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>R</kbd> pour
  réactualiser une page MDN.
</p>
```

```css interactive-example
kbd {
  background-color: #eeeeee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow:
    0 1px 1px rgb(0 0 0 / 0.2),
    0 2px 0 0 rgb(255 255 255 / 0.7) inset;
  color: #333333;
  display: inline-block;
  font-size: 0.85em;
  font-weight: bold;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}
```

`<kbd>` peut être imbriqué de différentes façons avec l'élément HTML {{HTMLElement("samp")}} (résultat d'exemple) pour représenter diverses formes de saisie ou de sortie selon les indices visuels.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

D'autres éléments peuvent être utilisés en association avec `<kbd>` afin de représenter certains scénarios plus spécifiques&nbsp;:

- Imbriquer un élément `<kbd>` dans un autre élément `<kbd>` représente une touche ou une unité de saisie au sein d'une saisie plus grande. Cf. [Représenter les frappes de touches dans une saisie](#représenter_les_frappes_de_touches_dans_une_saisie) ci-après.
- Imbriquer un élément `<kbd>` dans un élément {{HTMLElement("samp")}} permet d'indiquer que la saisie a été restituée (_echo_) à l'utilisateur·ice. Cf. [Saisie restituée](#saisie_restituée), ci-après.
- Imbriquer un élément `<samp>` dans un élément `<kbd>` permet de représenter des saisies basées sur le texte présenté par le système (cela peut être le nom de menus, d'éléments de menu ou le nom de bouttons affichés à l'écran). Cf. [Représenter les options de saisies à l'écran](#représenter_les_options_de_saisies_à_lécran) ci-après.

> [!NOTE]
> Il est possible de définir un style pour surcharger la mise en forme par défaut du navigateur pour l'élément `<kbd>`. À ce titre, on gardera à l'esprit que les préférences et feuilles de style de l'utilisateur·ice peuvent surcharger la mise en forme du site.

## Exemples

### Exemple simple

```html
<p>
  Utilisez la commande <kbd>help macommande</kbd> afin de consulter la
  documentation pour la commande "macommande".
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple simple", 350, 80)}}

### Représenter les frappes de touches dans une saisie

Afin de décrire une saisie constituée de plusieurs touches, on imbriquera plusieurs élément `<kbd>` dans un élément `<kbd>` englobant qui représente la saisie dans son ensemble. Chaque frappe clavier qui le constitue sera représentée par son propre élément `<kbd>`.

#### Sans mise en forme

Commençons par analyser le code HTML.

##### HTML

```html
<p>
  Vous pouvez également créer un nouveau document en utilisant le raccourci
  clavier
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd
  >.
</p>
```

On voit ici que l'ensemble de la combinaison de touches est contenue dans un élément `<kbd>` et que chaque touche possèe son propre élément.

> [!NOTE]
> Il n'est pas nécessaire d'imbriquer tous ces éléments&nbsp;; vous pouvez choisir de simplifier en omettant l'élément `<kbd>` externe. En d'autres termes, simplifier ceci en `<kbd>Ctrl</kbd>+<kbd>N</kbd>` serait parfaitement valide.
>
> Cependant, selon votre feuille de style, il peut être utile d'utiliser ce type d'imbrication.

##### Résultat

Sans mise en forme particulière, voici le résultat obtenu&nbsp;:

{{EmbedLiveSample("Sans mise en forme", 650, 80)}}

#### Avec mise en forme

On peut alors ajouter un peu de CSS&nbsp;:

##### CSS

On ajoute un règle pour les les éléments `<kbd>` avec la classe `"key"` afin de représenter les touches d'un clavier&nbsp;:

```css
kbd > kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

On met à jour le code HTML afin d'utiliser cette classe&nbsp;:

```html
<p>
  Vous pouvez également créer un nouveau document en utilisant le raccourci
  clavier <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd
  >.
</p>
```

##### Résultat

{{EmbedLiveSample("Avec mise en forme", 650, 80)}}

### Saisie restituée

En imbriquant un élément `<kbd>` dans un élément {{HTMLElement("samp")}}, on peut représenter une saisie qui est restituée à l'utilisateur·ice (à la façon d'un écho).

#### HTML

```html
<p>
  S'il se produit une erreur de syntaxe, cet outil affichera la commande
  initialement saisie pour que vous la revoyez&nbsp;:
</p>
<blockquote>
  <samp><kbd>custom-git ad mon-nouveau-fichier.cpp</kbd></samp>
</blockquote>
```

#### Résultat

{{EmbedLiveSample("Saisie restituée", 650, 100)}}

### Représenter les options de saisies à l'écran

Imbriquer un élément `<samp>` dans un élément `<kbd>` représente une saisie basée sur du texte affiché par le système (par exemple des noms de menu, d'éléments de menu, des noms de boutons affichés à l'écran, etc.).

#### HTML

Ainsi, si on souhaite expliquer comment choisir l'option "Nouveau document" dans le menu "Fichier" avec un document HTML, on pourra écrire&nbsp;:

```html
<p>
  Pour créer un nouveau fichier, sélectionner l'option
  <kbd
    ><kbd><samp>Fichier</samp></kbd
    >⇒<kbd><samp>Nouveau document</samp></kbd></kbd
  >
  dans le menu.
</p>

<p>
  N'oubliez pas de cliquer sur le bouton
  <kbd><samp>OK</samp></kbd> afin de confirmer que vous avez saisi le nom du
  nouveau fichier.
</p>
```

On voit ici différentes imbrications. La description de l'option du menu est incluse dans un élément `<kbd>` qui contient le menu et le nom de l'élément du menu dans des éléments `<kbd>` et `<samp>`, indiquant que la saisie se fera par l'intermédiaire de quelque chose présenté à l'écran.

#### Résultat

{{EmbedLiveSample("Représenter les options de saisies à l'écran", 650, 120)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("code")}}
