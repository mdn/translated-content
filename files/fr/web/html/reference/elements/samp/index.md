---
title: "<samp> : l'élément d'échantillon en sortie"
slug: Web/HTML/Reference/Elements/samp
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'élément [HTML](/fr/docs/Web/HTML) **`<samp>`** est un élément qui permet de représenter un résultat produit par un programme informatique en incise dans du texte. Il est généralement affiché avec la police à chasse fixe du navigateur (par exemple en [Courier](<https://fr.wikipedia.org/wiki/Courier_(police_d'écriture)>) ou en Lucida Console).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;samp&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  J'essayais de démarrer mon ordinateur, mais j'ai reçu ce message
  hilarant&nbsp;:
</p>

<p>
  <samp>Clavier introuvable<br />Appuyez sur F1 pour continuer</samp>
</p>
```

```css interactive-example
samp {
  font-weight: bold;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Il est possible d'utiliser une règle CSS afin de surcharger la police par défaut utilisée par le navigateur pour les éléments `<samp>`. On rappelle ici que les préférences de l'utilisateur·ice peuvent également prendre le pas sur les feuilles de styles des documents.

Voici un exemple de règle permettant de surcharger la police par défaut pour ces éléments&nbsp;:

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> S'il vous faut un élément qui serve de conteneur pour une valeur produite par le site ou l'application, vous devriez utiliser {{HTMLElement("output")}} plutôt que `<samp>`.

## Exemples

### Exemple simple

Dans cet exemple simple, un paragraphe contient une mention d'un résultat d'un programme.

```html
<p>
  Lorsque le traitement est terminé, l'outil affichera le texte
  <samp>Scan terminé. <em>N</em> résultats trouvés</samp>. Vous pourrez alors
  passer à l'étape suivante.
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple simple", 650, 100)}}

### Sortie incluant une entrée utilisateur

Il est possible d'imbriquer un élément {{HTMLElement("kbd")}} dans un bloc `<samp>` afin de représenter un fragment de texte saisi par la personne. Par exemple, si on souhaite retranscrire une session d'un terminal (sous Linux ou macOS), on pourra utiliser le code suivant.

#### HTML

```html
<pre>
<samp><span class="prompt">jeanne@internets:~$</span><kbd>md5 -s "Coucou monde"</kbd>

MD5 ("Coucou monde") = b961d9fb0ef48ff051fb67625abd0022

<span class="prompt">jeanne@internets:~$</span> <span class="cursor">█</span></samp>
</pre>
```

On notera l'utilisation de {{HTMLElement("span")}} qui permet de personnaliser l'apparence de certaines portions du texte (comme l'invite ou le curseur). On notera également l'utilisation de `<kbd>` afin de représenter la commande saisie dans l'invite.

#### CSS

Voici la feuille de style que nous utilisons&nbsp;:

```css
.prompt {
  color: #bb0000;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #0000bb;
}
```

Cela permet simplement de colorer légèrement l'invite et le curseur. On utilise du gras pour le texte saisi au clavier.

#### Résultat

{{EmbedLiveSample("Sortie incluant une entrée utilisateur", 650, 120)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">Contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
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

- Éléments associés&nbsp;: {{HTMLElement("kbd")}}, {{HTMLElement("code")}}, {{HTMLElement("pre")}}
- L'élément {{HTMLElement("output")}}&nbsp;: un conteneur pour la sortie générée par un script
