---
title: font-synthesis
slug: Web/CSS/Reference/Properties/font-synthesis
l10n:
  sourceCommit: bdcf465db305b8296fa663a877ac0d56c5757777
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`font-synthesis`** permet de définir si le navigateur peut synthétiser les variantes grasses, italiques, petites capitales, indices et exposants lorsqu'elles ne sont pas définies dans la famille de polices définie.

## Propriétés constitutives

Cette propriété est une abréviation pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("font-synthesis-weight")}}
- {{CSSxRef("font-synthesis-style")}}
- {{CSSxRef("font-synthesis-small-caps")}}
- {{CSSxRef("font-synthesis-position")}} {{Experimental_Inline}}

## Syntaxe

```css
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: weight style;

/* Valeurs globales */
font-synthesis: inherit;
font-synthesis: initial;
font-synthesis: revert;
font-synthesis: revert-layer;
font-synthesis: unset;
```

### Valeurs

- `none`
  - : Indique qu'aucune variante grasse, italique ou petite capitale ne doit être synthétisée par le navigateur.
- `weight`
  - : Indique que la variante grasse manquante peut être synthétisée par le navigateur si besoin.
- `style`
  - : Indique que la variante italique peut être synthétisée par le navigateur si besoin.
- `small-caps`
  - : Indique que la variante petite capitale peut être synthétisée par le navigateur si besoin.
- `position` {{Experimental_Inline}}
  - : Indique que la variante indice ou exposant peut être synthétisée par le navigateur, si besoin, lors de l'utilisation de {{CSSxRef("font-variant-position")}}.

## Description

La plupart des polices occidentales standards incluent des variantes italiques et grasses, et certaines proposent aussi des variantes petites capitales, indices ou exposants. Cependant, beaucoup de polices n'en possèdent pas. Les polices utilisées pour le chinois, le japonais, le coréen et d'autres écritures logographiques n'incluent généralement pas ces variantes, et leur synthèse peut nuire à la lisibilité ou modifier le sens du texte. Dans ces cas, il peut être souhaitable de désactiver la synthèse de police par défaut du navigateur.

Par exemple, en utilisant la pseudo-classe [:lang()](/fr/docs/Web/CSS/Reference/Selectors/:lang), vous pouvez empêcher le navigateur de synthétiser les caractères gras et obliques pour une langue, ici l'arabe&nbsp;:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Le tableau ci-dessous montre comment une valeur de la propriété raccourcie `font-synthesis` correspond aux propriétés CSS détaillées.

| Valeur font-synthesis              | Valeur {{CSSxRef("font-synthesis-weight")}} | Valeur {{CSSxRef("font-synthesis-style")}} | Valeur {{CSSxRef("font-synthesis-small-caps")}} | Valeur {{CSSxRef("font-synthesis-position")}} |
| :--------------------------------- | :------------------------------------------ | :----------------------------------------- | :---------------------------------------------- | :-------------------------------------------- |
| `none`                             | `none`                                      | `none`                                     | `none`                                          | `none`                                        |
| `weight`                           | `auto`                                      | `none`                                     | `none`                                          | `none`                                        |
| `style`                            | `none`                                      | `auto`                                     | `none`                                          | `none`                                        |
| `small-caps`                       | `none`                                      | `none`                                     | `auto`                                          | `none`                                        |
| `position`                         | `none`                                      | `none`                                     | `none`                                          | `auto`                                        |
| `weight style`                     | `auto`                                      | `auto`                                     | `none`                                          | `none`                                        |
| `weight small-caps`                | `auto`                                      | `none`                                     | `auto`                                          | `none`                                        |
| `weight position`                  | `auto`                                      | `none`                                     | `none`                                          | `auto`                                        |
| `style small-caps`                 | `none`                                      | `auto`                                     | `auto`                                          | `none`                                        |
| `style position`                   | `none`                                      | `auto`                                     | `none`                                          | `auto`                                        |
| `weight style small-caps`          | `auto`                                      | `auto`                                     | `auto`                                          | `none`                                        |
| `weight style position`            | `auto`                                      | `auto`                                     | `none`                                          | `auto`                                        |
| `weight small-caps position`       | `auto`                                      | `none`                                     | `auto`                                          | `auto`                                        |
| `style small-caps position`        | `none`                                      | `auto`                                     | `auto`                                          | `auto`                                        |
| `weight style small-caps position` | `auto`                                      | `auto`                                     | `auto`                                          | `auto`                                        |

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver la synthèse de police

Cet exemple montre le comportement par défaut du navigateur pour la synthèse de police et le compare avec le comportement lorsque la synthèse est désactivée. Notez que l'exemple utilise deux polices importées pour illustrer ce comportement. Il se peut que vous ne puissiez pas reproduire la désactivation de la synthèse de police sur les polices disponibles par défaut sur votre système d'exploitation.

#### HTML

```html
<pre> DÉFAUT </pre>
<p class="francais">
  Cette police prend en charge le <strong>gras</strong> et l'<em>italique</em>.
</p>
<p class="chinois">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
<br />

<pre> LA SYNTHÈSE EST DÉSACTIVÉE </pre>
<p class="francais no-syn">
  Cette police prend en charge le <strong>gras</strong> et l'<em>italique</em>.
</p>
<p class="chinois no-syn">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
<br />

<pre> LA SYNTHÈSE EST ACTIVÉE </pre>
<p class="francais">
  Cette police prend en charge le <strong>gras</strong> et l'<em>italique</em>.
</p>
<p class="chinois syn">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";
@import "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap";

.francais {
  font-family: "Montserrat", sans-serif;
}
.chinois {
  font-family: "Ma Shan Zheng", cursive;
}
.no-syn {
  font-synthesis: none;
}
.syn {
  font-synthesis: style weight;
}
```

#### Résultat

{{EmbedLiveSample("Désactiver la synthèse de police", "", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-style")}}
- La propriété {{CSSxRef("font-weight")}}
- La propriété {{CSSxRef("font-variant-caps")}}
- La propriété {{CSSxRef("font-variant-position")}}
