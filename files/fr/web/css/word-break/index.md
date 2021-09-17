---
title: word-break
slug: Web/CSS/word-break
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/word-break
---
{{CSSRef}}

La propriété** `word-break`** est utilisée pour définir la façon dont la césure s'applique pour les endroits où le texte dépasserait de sa boîte de contenu.

{{EmbedInteractiveExample("pages/css/word-break.html")}}

## Syntaxe

```css
/* Avec un mot-clé */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* dépréciée */

/* Valeurs globales */
word-break: inherit;
word-break: initial;
word-break: unset;
```

La propriété `word-break` est définie avec un mot-clé parmi ceux décrits ci-après.

### Valeurs

- `normal`
  - : Le passage à la ligne classique est utilisé.
- `break-all`
  - : La césure peut être insérée après n'importe quel caractère (ne s'applique pas pour les textes en chinois, japonais et coréen).
- `keep-all`
  - : La césure est interdite pour les textes en chinois, japonais et coréen. Pour les autres types de texte, le comportement est le même que `normal`.
- `break-word`{{deprecated_inline}}
  - : Aura le même effet que `word-break: normal` et que `overflow-wrap: anywhere` quelle que soit la valeur de la propriété {{cssxref("overflow-wrap")}}.

> **Note :** Contrairement à `word-break: break-word` et à `overflow-wrap: break-word` (cf. {{cssxref("overflow-wrap")}}), `word-break: break-all` créera une césure à l'endroit exact où le mot aurait dépassé du conteneur (même si placer le mot entier sur sa propre ligne aurait pu éviter la césure).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="normal étroit"> Voici une Supercalifragilisticexpialidocious califragilisticexpialidocious phrase. グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉 </p>
<p class="breakAll étroit"> Voici une Supercalifragilisticexpialidocious califragilisticexpialidocious phrase. グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉 </p>
<p class="breakWord étroit"> Voici une Supercalifragilisticexpialidocious califragilisticexpialidocious phrase. グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉 </p>
<p class="keep étroit"> Voici une Supercalifragilisticexpialidocious califragilisticexpialidocious phrase.  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉</p>
```

### CSS

```css
.étroit {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keep {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}
```

### Résultat

{{EmbedLiveSample('Exemple','100%',600)}}

## Spécifications

| Spécification                                                                        | État                         | Commentaires        |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('CSS3 Text', '#word-break-property', 'word-break')}} | {{Spec2('CSS3 Text')}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.word-break")}}

## Voir aussi

- {{cssxref("word-wrap")}}
- {{cssxref("overflow-wrap")}}
