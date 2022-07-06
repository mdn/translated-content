---
title: quotes
slug: Web/CSS/quotes
tags:
  - CSS
  - Propriété
  - Reference
  - Web
translation_of: Web/CSS/quotes
---
{{CSSRef}}

La propriété **`quotes`** indique la façon dont les marques de citation sont affichées.

{{EmbedInteractiveExample("pages/css/quotes.html")}}Syntaxe

```css
/* Valeur avec un mot-clé */
quotes: none;

/* Chaînes de caractères */
/* Type <string>         */
quotes: "«" "»";           /* On utilise les guillemets français
                              pour ouvrir et fermer une citation  */
quotes: "«" "»" "‹" "›";   /* On définit deux niveaux de citation */

/* Valeurs globales */
quotes: inherit;
quotes: initial;
quotes: unset;
```

### Valeurs

- `none`
  - : Les valeurs `open-quote` et `close-quote` de la propriété {{cssxref("content")}} n'entraînent aucune marque de citation.
- `[<string> <string>]+`
  - : Une ou plusieurs paires de {{cssxref("&lt;string&gt;")}} pour les valeurs `open-quote` et `close-quote`. La première paire représente les symboles utilisés pour les citations de plus haut niveau, la deuxième indique comment délimiter une citation dans une citation, la troisième paire permet d'ajouter un niveau d'imbrication supplémentaire et ainsi de suite.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p>
  <q>Bientôt le Lapin aperçut Alice qui furetait ;
  il lui cria d’un ton d’impatience :
    <q>Eh bien ! Marianne, que faites-vous ici ?
    Courez vite à la maison me chercher une paire
    de gants et un éventail ! Allons, dépêchons-nous.
    </q>
  </q>
</p>
```

### CSS

```css
q {
  quotes : "«" "»" '"' '"';
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                | État                             | Commentaires        |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("CSS3 Content", "#quotes", "quotes")}}             | {{Spec2("CSS3 Content")}} |                     |
| {{SpecName('CSS2.1', 'generate.html#quotes', 'quotes')}} | {{Spec2('CSS2.1')}}         | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.quotes")}}

## Voir aussi

- {{cssxref("content")}}
