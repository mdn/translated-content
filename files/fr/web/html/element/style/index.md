---
title: "<style> : l'élément d'information de style"
slug: Web/HTML/Element/style
---

{{HTMLSidebar}}

L'élément HTML **`<style>`** contient des informations de mise en forme pour un document ou une partie d'un document. Par défaut, les instructions de mise en forme écrites dans cet élément sont écrites en [CSS](/fr/docs/Web/CSS).

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

L'élément `<style>` peut être inclus dans l'élément {{htmlelement("head")}} ou dans l'élément {{htmlelement("body")}} du document et les styles seront appliqués. Toutefois, il est recommandé de placer les styles dans l'élément `<head>` afin de clairement séparer la présentation du contenu autant que possible. La méthode idéale en ce sens consiste à utiliser des feuilles de style dans des fichiers externes et de les appliquer au document grâce à des éléments {{htmlelement("link")}}.

Si plusieurs éléments `<style>` et `<link>` sont appliqués au document, ils seront appliqués dans l'ordre dans lequel ils sont inclus dans le document. Aussi, vérifiez l'ordre afin d'éviter tout problème de cascade.

À l'instar des éléments `<link>`, les éléments `<style>` peuvent inclure des attributs `media` qui décrivent des [requêtes média](/fr/docs/Web/CSS/Requêtes_média) qui permettent d'appliquer des feuilles de styles selon certains critères provenant du média utilisé (la largeur de l'écran par exemple).

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `media`
  - : Cet attribut est [une requête média](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries) qui indique le média auquel la mise en forme doit s'appliquer. Cet attribut est optionnel, la valeur par défaut est `all`.
- `nonce`
  - : Un _nonce_ cryptographique utilisé pour inscrire les styles en ligne sur une liste blanche pour la règle [`style-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) de la CSP (_Content Security Policy_). Le serveur doit générer un nonce unique chaque fois qu'il transmet une règle de sécurité. Ce nonce ne doit pas pouvoir être deviné car sinon, il devient trivial d'outrepasser la règle de sécurité.
- `type`
  - : Cet attribut définit le langage de la feuille de style sous la forme d'un type MIME (le jeu de caractères ne doit pas être indiqué). Cet attribut est optionnel, la valeur par défaut est `text/css`.
- `title`
  - : Cet attribut indique un ensemble [de feuilles de style alternatif](/fr/docs/Web/CSS/Feuilles_de_style_alternatives).

### Attributs dépréciés ou obsolètes

- `scoped` {{non-standard_inline}} {{deprecated_inline}}
  - : Cet attribut indique que les règles de mises en forme ne s'appliquent qu'aux éléments ayant le même élément parent que l'élément courant.

## Exemples

### Une feuille de style simple

#### HTML

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Voici un paragraphe.</p>
  </body>
</html>
```

#### Résultat

{{EmbedLiveSample('Une_feuille_de_style_simple', '100%', '60')}}

### Utiliser plusieurs éléments `<style>`

Dans cet exemple, on utilise deux éléments `<style>`, on peut voir comment les déclarations en conflit sont gérées : c'est le deuxième élément qui a la priorité si les [spécificités](/fr/docs/Apprendre/CSS/Introduction_à_CSS/La_cascade_et_l_héritage#Spécificité) sont égales car les feuilles sont appliquées dans l'ordre.

#### HTML

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style>
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>Voici un paragraphe.</p>
  </body>
</html>
```

#### Résultat

{{EmbedLiveSample('Utiliser_plusieurs_éléments_style', '100%', '60')}}

### Utiliser une requête média

Dans cet exemple (basé sur le précédent), on ajoute un attribut `media` sur le deuxième élément `<style>` afin que les règles correspondantes ne soient appliquées que si la largeur de la zone d'affichage (_viewport_) est inférieure à 500 pixels.

#### HTML

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style media="all and (max-width: 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>Voici un paragraphe.</p>
  </body>
</html>
```

#### Résultat

{{EmbedLiveSample('Utiliser_une_requête_média', '100%', '60')}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_méta-données"
          >Contenu de métadonnées</a
        >.
      </td>
    </tr>
    <tr>
      <th>Contenu autorisé</th>
      <td>
        Du contenu textuel correspondant à l'attribut
        <code>type</code> (c'est-à-dire <code>text/css</code>).
      </td>
    </tr>
    <tr>
      <th>Omission de balises</th>
      <td>Les deux balises doivent être présentes.</td>
    </tr>
    <tr>
      <th>Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_méta-données"
          >contenu de métadonnées</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun</td>
    </tr>
    <tr>
      <th>Interface DOM</th>
      <td>{{domxref("HTMLStyleElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("link")}} qui permet d'utiliser des feuilles de style externes.
