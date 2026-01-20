---
title: "<pre> : l'élément de texte préformaté"
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: d534b22334554896f3c2c83e469f9b9eb3f9188a
---

L'élément [HTML](/fr/docs/Web/HTML) **`<pre>`** représente du texte préformaté qui est présenté exactement comme écrit dans le fichier HTML. Le texte est généralement affiché avec une police non proportionnelle, ou [à chasse fixe](https://fr.wikipedia.org/wiki/Police_de_caract%C3%A8res_%C3%A0_chasse_fixe).

Les espaces à l'intérieur de cet élément sont affichés tels quels, à une exception près. Si un ou plusieurs caractères de nouvelle ligne sont inclus immédiatement après la balise ouvrante `<pre>`, le _premier_ caractère de nouvelle ligne est supprimé. Cette transformation est effectuée par l'analyseur HTML et ne s'applique pas lors de l'utilisation de {{Glossary("XHTML")}}.

Le contenu textuel des éléments `<pre>` est analysé comme du HTML, donc si vous souhaitez que votre texte reste du texte brut, certains caractères de syntaxe, comme `<`, doivent être échappés à l'aide de leur {{Glossary("character reference", "référence de caractère")}}. Voir [Échapper les caractères ambigus](#escaping_ambiguous_characters) pour plus d'informations.

Les éléments `<pre>` contiennent couramment les éléments {{HTMLElement("code")}}, {{HTMLElement("samp")}} et {{HTMLElement("kbd")}}, pour représenter respectivement du code informatique, une sortie informatique et une saisie utilisateur.

Par défaut, `<pre>` est un élément [de niveau bloc](/fr/docs/Glossary/Block-level_content), c'est-à-dire que sa valeur {{CSSxRef("display")}} par défaut est `block`.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;pre&gt;", "tabbed-standard")}}

```html interactive-example
<pre>
             S
             A
            LUT
             M
            O N
            D  E
            DONT
          JE SUIS
          LA  LAN
          G U E  É
         L O Q U E N
        TE      QUESA
       B  O  U  C  H  E
      O        P A R I S
     T I R E   ET   TIRERA
    T O U             JOURS
   AUX                  A  L
 LEM                      ANDS   - Apollinaire
</pre>
```

```css interactive-example
pre {
  font-size: 0.7rem;
  margin: 0;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `width` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Cet attribut contient le nombre _préféré_ de caractères qu'une ligne devrait avoir. Bien qu'implémenté, cet attribut n'a aucun effet visuel&nbsp;; pour obtenir cet effet, il est plutôt conseillé d'utiliser la propriété CSS {{CSSxRef("width")}}.
- `wrap` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Cet attribut est une _indication_ sur la façon de gérer le dépassement d'une ligne. Les navigateurs modernes ignorent cette indication et cet attribut n'engendre aucun effet visuel&nbsp;; pour obtenir cet effet, il faut utiliser la propriété CSS {{CSSxRef("white-space")}}.

## Accessibilité

Il est important de fournir une description alternative pour toute image ou diagramme créé avec du texte préformaté. Cette description alternative devrait décrire clairement, et de façon concise, le contenu du diagramme.

Les personnes souffrant de troubles de la vision et/ou navigant à l'aide d'outils d'assistance comme des lecteurs d'écran peuvent ne pas comprendre le diagramme si celui-ci est construit avec des lettres et symboles et lu dans le désordre.

Pour légender un tel diagramme, on pourra utiliser une combinaison d'éléments {{HTMLElement("figure")}} et {{HTMLElement("figcaption")}}, complétée par les attributs [ARIA](/fr/docs/Web/Accessibility/ARIA) `role` et [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) sur l'élément `<pre>` afin que le dessin en {{Glossary("ASCII")}} préformaté puisse être énoncé comme une image avec un texte alternatif, `<figcaption>` servant alors de légende à l'image.

### Exemple

```html
<figure>
  <pre role="img" aria-label="Vache en ASCII">
      ___________________________
  &lt; Je suis la meuhieure. &gt;
      ---------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pre>
  <figcaption id="cow-caption">
    Une vache qui dit "Je suis la meuhieure.". La vache est illustrée à l'aide
    de caractères préformatés.
  </figcaption>
</figure>
```

- [MDN Comprendre WCAG, explications de la directive 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.1_—_des_équivalents_textuels_doivent_être_fournis_pour_tout_contenu_non_textuel)
- [H86&nbsp;: Fournir des alternatives textuelles pour l'art ASCII, les émoticônes et le leetspeak | Techniques W3C pour WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## Exemples

### Exemple simple

#### HTML

```html
<p>On peut utiliser CSS pour changer la couleur d'une police.</p>
<pre>
body {
  color: red;
}
</pre>
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

### Échapper des caractères réservés

Supposons que vous vouliez montrer du code HTML dans un élément `<pre>`. Les séquences de caractères qui définissent des balises HTML valides (commençant par `<` et se terminant par `>`) ne seront pas affichées. Pour afficher les caractères de balise comme du texte, vous devez échapper (au moins) le caractère `<` à l'aide de sa référence de caractère, afin que les séquences ne définissent plus de balises valides.

En réalité, l'analyseur HTML traite la plupart des caractères comme du texte brut, sauf dans des contextes spécifiques. Par exemple, `< code` fonctionne, mais `<code` serait mal interprété&nbsp;; `&am;` fonctionne, mais `&amp;` non. Cependant, il est recommandé d'échapper tous les caractères ambigus pour éviter toute confusion, surtout si vous générez du HTML de manière programmatique et injectez le contenu du `<pre>`. Dans ce cas, voici une bonne règle à suivre pour échapper les caractères&nbsp;:

1. Commencez par écrire le contenu tel que vous souhaitez qu'il apparaisse dans le document HTML.
2. Remplacez tous les esperluettes (`&`) par `&amp;`. Faites cette étape en premier, afin que les nouveaux caractères `&` générés à l'étape suivante ne soient pas échappés.
3. Remplacez tous les caractères `<` par `&lt;`.

Cela devrait permettre d'afficher le contenu comme vous le souhaitez. Le remplacement d'autres caractères de syntaxe HTML est optionnel (comme `>` par `&gt;`, `"` par `&quot;` et `'` par `&apos;`), mais n'occasionnera aucun problème.

#### HTML

```html
<pre>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0) {
  return &quot;Nombre à un seul chiffre&quot;;
}
</pre>
```

#### Résultat

{{EmbedLiveSample("Échapper des caractères réservés")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>, contenu tangible.
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
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a>.
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
      <td>{{DOMxRef("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS {{CSSxRef("white-space")}} et {{CSSxRef("word-break")}}
- L'entrée de glossaire {{Glossary("Character reference", "Référence de caractère")}}
- Les éléments HTML associés&nbsp;: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
