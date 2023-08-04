---
title: "<tt> : l'élément de texte de téléscripteur (obsolète)"
slug: Web/HTML/Element/tt
---

{{deprecated_header}}{{HTMLSidebar}}

L'élément HTML **`<tt>`** (pour _Teletype Text_) crée un élément en ligne, écrit dans la police à chasse fixe par défaut du navigateur. Cet élément a été conçu pour mettre en forme du texte comme s'il apparaissait sur un affichage à largeur fixe tel qu'un téléscripteur.

Cet élément est désormais obsolète et un élément {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} ou {{HTMLElement("var")}} pourra être utilisé à la place s'il faut afficher du texte en incise avec une police à chasse fixe. On pourra utiliser l'élément {{HTMLElement("pre")}} pour afficher un bloc de contenu préformaté (également généralement affiché dans une police à chasse fixe).

> **Note :** Si aucun de ces éléments ne correspond à la sémantique portée par votre contenu (lorsque, par exemple, il ne s'agit que d'un effet de mise en forme), vous pouvez utiliser un élément {{HTMLElement("span")}} mis en forme avec CSS (par exemple la propriété {{cssxref("font-family")}}).

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### Exemple simple

Cet exemple utilise `<tt>` afin d'afficher le texte affiché et saisi dans un terminal.

```html
<p>
  Veuillez saisir la commande telnet suivante :
  <code>set localecho</code><br />
  Le client telnet devrait alors afficher :
  <tt>Local Echo is on</tt>
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple_simple", 650, 80)}}

### Surcharger la police par défaut

Il est possible de surcharger la police par défaut utilisée pour cet élément grâce à CSS :

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier", monospace;
}
```

#### HTML

```html
<p>
  Veuillez saisir la commande telnet suivante :
  <code>set localecho</code><br />
  Le client telnet devrait alors afficher :
  <tt>Local Echo is on</tt>
</p>
```

#### Résultat

{{EmbedLiveSample("Surcharger_la_police_par_défaut", 650, 80)}}

## Notes d'utilisation

Par défaut, le contenu de l'élément `<tt>` est affiché avec la police à chasse fixe par défaut du navigateur. Comme vu dans l'exemple précédent, il est possible de surcharger cette police.

> **Note :** Les règles de style propres à l'utilisateur sont prioritaires par rapport aux feuilles de style d'un site ou d'une application web.

Bien que cet élément n'ait pas été officiellement déprécié en HTML 4.01, son utilisation a été déconseillée pour privilégier d'autres éléments HTML ou une mise en forme via CSS. L'élément `<tt>` est désormais obsolète en HTML5.

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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("code")}}
- {{HTMLElement("var")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("pre")}}
