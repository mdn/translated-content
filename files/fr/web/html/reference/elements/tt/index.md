---
title: "<tt> : l'élément de texte de téléscripteur"
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<tt>`** crée du texte en ligne présenté avec la police monospace par défaut de {{Glossary("user agent", "l'agent utilisateur")}}. Cet élément a été conçu pour rendre du texte tel qu'il serait affiché sur un dispositif à largeur fixe, comme un téléscripteur, un écran texte ou une imprimante ligne.

Les termes **non proportionnel**, **monotype** et **monospace** sont utilisés de façon interchangeable et ont le même sens général&nbsp;: ils décrivent une police dont tous les caractères ont le même nombre de pixels en largeur.

Cependant, cet élément est obsolète. Vous devriez utiliser les éléments plus sémantiquement appropriés {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} ou {{HTMLElement("var")}} pour le texte en ligne devant être présenté en monospace, ou la balise {{HTMLElement("pre")}} pour du contenu devant être présenté comme un bloc séparé.

> [!NOTE]
> Si aucun des éléments sémantiques n'est approprié à votre cas d'utilisation (par exemple, si vous devez afficher du contenu dans une police non proportionnelle), envisagez d'utiliser l'élément {{HTMLElement("span")}}, en le stylant via CSS selon vos besoins. La propriété {{CSSxRef("font-family")}} est un bon point de départ.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

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

{{EmbedLiveSample("Exemple simple", 650, 80)}}

### Surcharger la police par défaut

Il est possible de surcharger la police par défaut utilisée pour cet élément grâce à CSS&nbsp;:

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

{{EmbedLiveSample("Surcharger la police par défaut", 650, 80)}}

## Notes d'utilisation

Par défaut, le contenu de l'élément `<tt>` est affiché avec la police à chasse fixe par défaut du navigateur. Comme vu dans l'exemple précédent, il est possible de surcharger cette police.

> [!NOTE]
> Les règles de style propres à l'utilisateur·ice sont prioritaires par rapport aux feuilles de style d'un site ou d'une application web.

Bien que cet élément n'ait pas été officiellement déprécié en HTML 4.01, son utilisation a été déconseillée pour privilégier d'autres éléments HTML ou une mise en forme via CSS. L'élément `<tt>` est désormais obsolète en HTML5.

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
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
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments sémantiques {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}} et {{HTMLElement("samp")}}
- L'élément {{HTMLElement("pre")}} pour afficher des blocs de texte préformaté
