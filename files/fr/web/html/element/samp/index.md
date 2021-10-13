---
title: '<samp> : l''élément d''échantillon produit'
slug: Web/HTML/Element/samp
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/samp
---
{{HTMLRef}}

L'élément HTML **`<samp>`** est un élément qui permet de représenter un résultat produit par un programme informatique. Il est généralement affiché avec la police à chasse fixe du navigateur (par exemple en Courier ou en Lucida Console).

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

Il est possible d'utiliser une règle CSS afin de surcharger la police par défaut utilisée par le navigateur pour les éléments `<samp>`. On rappelle ici que les préférences de l'utilisateur peuvent également prendre le pas sur les feuilles de styles des documents.

Voici un exemple de règle permettant de surcharger la police par défaut pour ces éléments :

```css
samp {
  font-family: "Courier";
}
```

> **Note :** S'il vous faut un élément qui serve de conteneur pour une valeur produite par le site ou l'application, vous devriez utiliser {{HTMLElement("output")}} plutôt que `<samp>`.

## Exemples

### Exemple simple

#### HTML

```html
<p>
  Texte normal.
  <samp>Extrait de texte produit par un programme.</samp>
  Texte normal.
</p>
```

#### Résultat

{{EmbedLiveSample("Exemples")}}

### Sortie incluant une entrée utilisateur

Il est possible d'imbriquer un élément {{HTMLElement("kbd")}} dans un bloc `<samp>` afin de représenter un fragment de texte saisi par l'utilisateur. Par exemple, si on souhaite retranscrire une session d'un terminal (sous Linux ou macOS), on pourra utiliser le code suivant.

#### HTML

```html
<pre>
<samp><span class="prompt">jean@internets:~$</span><kbd>md5 -s "Coucou monde"</kbd>
MD5 ("Coucou monde") = b961d9fb0ef48ff051fb67625abd0022

<span class="prompt">jean@internets:~$</span> <span class="cursor">█</span></samp></pre>
```

On notera l'utilisation de {{HTMLElement("span")}} qui permet de personnaliser l'apparence de certaines portions du texte (comme l'invite ou le curseur). On notera également l'utilisation de `<kbd>` afin de représenter la commande saisie par l'utilisateur dans l'invite.

#### CSS

Voici la feuille de style que nous utilisons :

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

{{EmbedLiveSample("Sortie_incluant_une_entrée_utilisateur", 650, 120)}}

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
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
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
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
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
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
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

| Spécification                                                                                                        | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'semantics.html#the-samp-element', '&lt;samp&gt;')}}             | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-samp-element', '&lt;samp&gt;')}} | {{Spec2('HTML5 W3C')}}     |              |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;samp&gt;')}}                         | {{Spec2('HTML4.01')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.samp")}}

## Notes

On peut appliquer une règle CSS sur le sélecteur `samp` afin de remplacer la police de caractère par défaut du navigateur.

## Voir aussi

- {{HTMLElement("code")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("output")}}
