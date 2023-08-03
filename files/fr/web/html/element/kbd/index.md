---
title: "<kbd> : l'élément de saisie clavier"
slug: Web/HTML/Element/kbd
---

{{HTMLSidebar}}

L'élément HTML **`<kbd>`** représente une plage de texte en ligne indiquant la saisie de texte par l'utilisateur à partir d'un clavier, d'une saisie vocale ou de tout autre dispositif de saisie de texte. Par convention, le {{Glossary("user agent")}} rend par défaut le contenu d'un élément `<kbd>` en utilisant sa police monospace, bien que cela ne soit pas requis par le standard HTML.

`<kbd>` peut être imbriqué dans diverses combinaisons avec {{HTMLElement("samp")}} (Sample Output) pour représenter diverses formes d'entrée ou d'entrée basées sur des repères visuels.

{{EmbedInteractiveExample("pages/tabbed/kbd.html", "tabbed-shorter")}}

## Attributs

Cet élément ne contient que [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

D'autres éléments peuvent être utilisés en association avec `<kbd>` afin de représenter certains scénarios plus spécifiques :

- Imbriquer un élément `<kbd>` dans un autre élément `<kbd>` représente une touche ou une unité de saisie au sein d'une saisie plus grande. Cf. [Représenter les frappes de touches dans une saisie](#représenter_les_frappes_de_touches_dans_une_saisie) ci-après.
- Imbriquer un élément `<kbd>` dans un élément {{HTMLElement("samp")}} permet d'indiquer que la saisie a été restituée (_echo_) à l'utilisateur. Cf. [Saisie restituée](#saisie_restituée), ci-après.
- Imbriquer un élément `<samp>` dans un élément `<kbd>` permet de représenter des saisies basées sur le texte présenté par le système (cela peut être le nom de menus, d'éléments de menu ou le nom de bouttons affichés à l'écran). Cf. [Représenter les options de saisies à l'écran](#représenter_les_options_de_saisies_à_l'écran) ci-après.

> **Note :** Il est possible de définir un style pour surcharger la mise en forme par défaut du navigateur pour l'élément `<kbd>`. À ce titre, on gardera à l'esprit que les préférences et feuilles de style de l'utilisateur peuvent surcharger la mise en forme du site.

## Exemples

### Exemple simple

```html
<p>
  Utilisez la commande <kbd>help macommande</kbd> afin de consulter la
  documentation pour la commande "macommande".
</p>
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', 350, 80)}}

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

##### Résultat

Sans mise en forme particulière, voici le résultat obtenu :

{{EmbedLiveSample("Sans_mise_en_forme", 650, 80)}}

#### Avec style

On peut alors ajouter un peu de CSS :

##### CSS

On ajoute un règle pour les les éléments `<kbd>` avec la classe `"key"` afin de représenter les touches d'un clavier :

```css
kbd.key {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

On met à jour le code HTML afin d'utiliser cette classe :

```html
<p>
  Vous pouvez également créer un nouveau document en utilisant le raccourci
  clavier
  <kbd><kbd class="key">Ctrl</kbd>+<kbd class="key">N</kbd></kbd
  >.
</p>
```

##### Résultat

{{EmbedLiveSample("Avec_style", 650, 80)}}

### Saisie restituée

En imbriquant un élément `<kbd>` dans un élément {{HTMLElement("samp")}}, on peut représenter une saisie qui est restituée à l'utilisateur (à la façon d'un écho).

#### HTML

```html
<p>
  S'il se produit une erreur de syntaxe, cet outil affichera la commande
  initialement saisie pour que vous la revoyez :
</p>
<blockquote>
  <samp><kbd>custom-git ad mon-nouveau-fichier.cpp</kbd></samp>
</blockquote>
```

#### Résultat

{{EmbedLiveSample("Saisie_restituée", 650, 100)}}

### Représenter les options de saisies à l'écran

Imbriquer un élément `<samp>` dans un élément `<kbd>` représente une saisie basée sur du texte affiché par le système (par exemple des noms de menu, d'éléments de menu, des noms de boutons affichés à l'écran, etc.).

#### HTML

Ainsi, si on souhaite expliquer comment choisir l'option "Nouveau document" dans le menu "Fichier" avec un document HTML, on pourra écrire :

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

{{EmbedLiveSample("Représenter_les_options_de_saisies_à_l'écran", 650, 120)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{domxref("HTMLElement")}}<br />Jusqu'à Gecko 1.9.2 (Firefox
        4), Firefox implémentait l'interface
        {{domxref("HTMLSpanElement")}} pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{htmlelement("code")}}
- {{htmlelement("samp")}}
