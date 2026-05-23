---
title: Propriété CSS `speak-as`
short-title: speak-as
slug: Web/CSS/Reference/Properties/speak-as
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`speak-as`** est utilisée pour définir comment le contenu [HTML](/fr/docs/Web/HTML) est prononcé. Les un à trois termes clés énumérés déterminent la manière dont les éléments et le texte sont rendus par les technologies auditives, telles que les {{Glossary("screen reader", "lecteurs d'écran")}} et les assistants numériques.

Cette propriété s'applique à tout le contenu, y compris les pseudo-éléments, à l'exception des pseudo-éléments {{CSSxRef("::marker")}} construits par un {{CSSxRef("@counter-style")}} avec un descripteur [`speak-as`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/speak-as) défini, qui prend le pas sur toute valeur héritée de la propriété `speak-as`.

## Syntaxe

```css
/* syntaxe à valeur unique */
speak-as: normal;
speak-as: spell-out;
speak-as: literal-punctuation;
speak-as: digits;
speak-as: no-punctuation;

/* syntaxe à valeurs multiples */
speak-as: spell-out literal-punctuation;
speak-as: spell-out no-punctuation;
speak-as: digits literal-punctuation;
speak-as: digits no-punctuation;
speak-as: spell-out digits literal-punctuation;
speak-as: spell-out digits no-punctuation;
```

### Valeurs

- `normal`
  - : Règles de prononciation normales avec la ponctuation remplacée par des pauses. Par exemple, «&nbsp;Bonjour, le monde&nbsp;!&nbsp;» serait prononcé comme «&nbsp;Bonjour (pause) le monde (pause)&nbsp;». C'est la valeur par défaut.
- `spell-out`
  - : Le contenu est épelé lettre par lettre. Par exemple, «&nbsp;rôle&nbsp;» serait prononcé comme «&nbsp;r&nbsp;» «&nbsp;o&nbsp;» «&nbsp;l&nbsp;» «&nbsp;e&nbsp;».
- `literal-punctuation`
  - : Les signes de ponctuation sont prononcés littéralement. Par exemple, «&nbsp;Bonjour, le monde&nbsp;!&nbsp;» serait prononcé comme «&nbsp;Bonjour virgule le monde point d'exclamation&nbsp;».
- `digits`
  - : Les nombres sont prononcés chiffre par chiffre. Par exemple, «&nbsp;31&nbsp;» serait prononcé comme «&nbsp;trois un&nbsp;».
- `no-punctuation`
  - : Le contenu est prononcé normalement sans aucune ponctuation. Par exemple, «&nbsp;Bonjour, le monde&nbsp;!&nbsp;» serait prononcé comme «&nbsp;Bonjour&nbsp;» «&nbsp;le monde&nbsp;».

> [!NOTE]
> Le support de la propriété `speak-as` est limité et implémenté de manière incohérente dans différentes technologies d'assistance, telles que les lecteurs d'écran ou les synthétiseurs vocaux. Pour garantir que toute information critique dépendant de la prononciation reste conviviale et accessible à un large public, ne vous fiez pas uniquement à cette propriété CSS pour définir comment ce contenu est présenté oralement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p class="normal">Bonjour, le monde&nbsp;! Je suis 25.</p>
<p class="spell-out">Bonjour, le monde&nbsp;! Je suis 25.</p>
<p class="literal-punctuation">Bonjour, le monde&nbsp;! Je suis 25.</p>
<p class="no-punctuation">Bonjour, le monde&nbsp;! Je suis 25.</p>
<p class="digits">Bonjour, le monde&nbsp;! Je suis 25.</p>
<p class="multi">Bonjour, le monde&nbsp;! Je suis 25.</p>
```

### CSS

```css
.normal {
  speak-as: normal;
}

.spell-out {
  speak-as: spell-out;
}

.literal-punctuation {
  speak-as: literal-punctuation;
}

.no-punctuation {
  speak-as: no-punctuation;
}

.digits {
  speak-as: digits;
}
.multi {
  speak-as: literal-punctuation digits;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@counter-style/speak-as", "speak-as")}} de la règle {{CSSxRef("@counter-style")}}
- Le module [des mises en forme de compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- [L'API Web Speech](/fr/docs/Web/API/Web_Speech_API)
