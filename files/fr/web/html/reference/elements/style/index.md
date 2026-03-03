---
title: "<style> : l'élément d'information de style"
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

L'élément [HTML](/fr/docs/Web/HTML) **`<style>`** contient des informations de mise en forme pour un document ou une partie d'un document. Il contient du CSS, qui est appliqué au contenu du document contenant l'élément `<style>`.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;style&gt;", "tabbed-standard")}}

```html interactive-example
<style>
  p {
    color: #26b72b;
  }
  code {
    font-weight: bold;
  }
</style>

<p>
  Ce texte sera vert. Les styles en ligne priment sur le CSS inclus de façon
  externe.
</p>

<p style="color: blue">
  L'attribut <code>style</code> peut toutefois le remplacer.
</p>
```

```css interactive-example
p {
  color: red;
}
```

L'élément `<style>` doit être inclus dans l'élément {{HTMLElement("head")}} du document. En général, il est préférable de placer vos styles dans des feuilles de style externes et de les appliquer à l'aide d'éléments {{HTMLElement("link")}}.

Si vous incluez plusieurs éléments `<style>` et `<link>` dans votre document, ils seront appliqués au DOM dans l'ordre dans lequel ils sont inclus dans le document — assurez-vous de les inclure dans le bon ordre, pour éviter des problèmes de cascade inattendus.

De la même manière que les éléments `<link>`, les éléments `<style>` peuvent inclure des attributs `media` qui contiennent des [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries), ce qui vous permet d'appliquer sélectivement des feuilles de style internes à votre document selon des caractéristiques du média comme la largeur de la zone d'affichage (<i lang="en">viewport</i> en anglais).

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `blocking`
  - : Cet attribut indique explicitement que certaines opérations doivent être bloquées lors de la récupération des sous-ressources critiques et de l'application de la feuille de style au document. Les feuilles de style importées avec {{CSSxRef("@import")}} sont généralement considérées comme des sous-ressources critiques, tandis que {{CSSxRef("background-image")}} et les polices ne le sont pas. Les opérations à bloquer doivent être une liste, séparée par des espaces, de jetons de blocage listés ci-dessous. Actuellement, il n'y a qu'un seul jeton&nbsp;:
    - `render`&nbsp;: Le rendu du contenu à l'écran est bloqué.

    > [!NOTE]
    > Seuls les éléments `style` dans le `<head>` du document peuvent éventuellement bloquer le rendu. Par défaut, un élément `style` dans le `<head>` bloque le rendu lorsque le navigateur le découvre lors de l'analyse. Si un tel élément `style` est ajouté dynamiquement via un script, vous devez également définir `blocking = "render"` pour qu'il bloque le rendu.

- `media`
  - : Cet attribut est [une requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using) qui indique le média auquel la mise en forme doit s'appliquer. Cet attribut est optionnel, la valeur par défaut est `all`.
- `nonce`
  - : Un _nonce_ cryptographique utilisé pour inscrire les styles en ligne sur une liste blanche pour la règle [`style-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) de la CSP (_Content Security Policy_). Le serveur doit générer un nonce unique chaque fois qu'il transmet une règle de sécurité. Ce nonce ne doit pas pouvoir être deviné car sinon, il devient trivial d'outrepasser la règle de sécurité.
- `title`
  - : Cet attribut indique un ensemble [de feuilles de style alternatif](/fr/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

### Attributs obsolètes

- `type` {{Deprecated_Inline}}
  - : Cet attribut définit le langage de la feuille de style sous la forme d'un type MIME (le jeu de caractères ne doit pas être indiqué). Cet attribut est optionnel, la valeur par défaut est `text/css`.

## Exemples

### Une feuille de style simple

```html
<!doctype html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8" />
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Je suis un paragraphe de présentation.</p>
  </body>
</html>
```

#### Résultat

{{EmbedLiveSample("Une feuille de style simple", "100%", 100)}}

### Utiliser plusieurs éléments `<style>`

Dans cet exemple, on utilise deux éléments `<style>`, on peut voir comment les déclarations en conflit sont gérées — c'est le deuxième élément qui a la priorité si les [spécificités](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#spécificité) sont égales car les feuilles sont appliquées dans l'ordre.

```html
<!doctype html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8" />
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
    <p>Je suis un paragraphe de présentation.</p>
  </body>
</html>
```

#### Résultat

{{EmbedLiveSample("Utiliser plusieurs éléments `<style>`", "100%", 100)}}

### Utiliser une requête média

Dans cet exemple (basé sur le précédent), on ajoute un attribut `media` sur le deuxième élément `<style>` afin que les règles correspondantes ne soient appliquées que si la largeur de la zone d"affichage (_viewport_) est inférieure à 500 pixels.

```html
<!doctype html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8" />
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
    <p>Je suis un paragraphe de présentation.</p>
  </body>
</html>
```

#### Résultat

{{EmbedLiveSample("Utiliser une requête média", "100%", 100)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_méta-données"
          >contenu de métadonnées</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th>Interface DOM</th>
      <td>{{DOMxRef("HTMLStyleElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("link")}} qui permet d'utiliser des feuilles de style externes à un document.
- [Feuilles de style alternatives](/fr/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)
