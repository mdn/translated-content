---
title: "<samp> : l'élément d'échantillon en sortie"
slug: Web/HTML/Element/samp
l10n:
  sourceCommit: 20f58e36e34d79bac99aa527865a754e9c29c81b
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<samp>`** est un élément qui permet de représenter un résultat produit par un programme informatique en incise dans du texte. Il est généralement affiché avec la police à chasse fixe du navigateur (par exemple en [Courier](<https://fr.wikipedia.org/wiki/Courier_(police_d'écriture)>) ou en Lucida Console).

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé">Contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune omission</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a></td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

Il est possible d'utiliser une règle CSS afin de surcharger la police par défaut utilisée par le navigateur pour les éléments `<samp>`. On rappelle ici que les préférences de l'utilisatrice ou de l'utilisateur peuvent également prendre le pas sur les feuilles de styles des documents.

Voici un exemple de règle permettant de surcharger la police par défaut pour ces éléments&nbsp;:

```css
samp {
  font-family: "Courier";
}
```

> **Note :** S'il vous faut un élément qui serve de conteneur pour une valeur produite par le site ou l'application, vous devriez utiliser [`<output>`](/fr/docs/Web/HTML/Element/output) plutôt que `<samp>`.

## Exemples

### Exemple simple

Dans cet exemple simple, un paragraphe contient une mention d'un résultat d'un programme.

#### HTML

```html
<p>
  Lorsque le traitement est terminé, l'outil affichera le texte
  <samp>Scan terminé. <em>N</em> résultats trouvés</samp>. Vous pourrez alors
  passer à l'étape suivante.
</p>
```

#### Résultat

{{EmbedLiveSample("")}}

### Sortie incluant une entrée utilisateur

Il est possible d'imbriquer un élément [`<kbd>`](/fr/docs/Web/HTML/Element/kbd) dans un bloc `<samp>` afin de représenter un fragment de texte saisi par la personne. Par exemple, si on souhaite retranscrire une session d'un terminal (sous Linux ou macOS), on pourra utiliser le code suivant.

#### HTML

```html
<pre>
<samp><span class="prompt">jeanne@internets:~$</span><kbd>md5 -s "Coucou monde"</kbd>

MD5 ("Coucou monde") = b961d9fb0ef48ff051fb67625abd0022

<span class="prompt">jeanne@internets:~$</span> <span class="cursor">█</span></samp>
</pre>
```

On notera l'utilisation de [`<span>`](/fr/docs/Web/HTML/Element/span) qui permet de personnaliser l'apparence de certaines portions du texte (comme l'invite ou le curseur). On notera également l'utilisation de `<kbd>` afin de représenter la commande saisie dans l'invite.

#### CSS

Voici la feuille de style que nous utilisons&nbsp;:

```css
.prompt {
  color: #b00;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #00b;
}
```

Cela permet simplement de colorer légèrement l'invite et le curseur. On utilise du gras pour le texte saisi au clavier.

#### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<code>`](/fr/docs/Web/HTML/Element/code)
- [`<kbd>`](/fr/docs/Web/HTML/Element/kbd)
- [`<pre>`](/fr/docs/Web/HTML/Element/pre)
- [`<output>`](/fr/docs/Web/HTML/Element/output)
