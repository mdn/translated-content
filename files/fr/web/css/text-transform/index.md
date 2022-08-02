---
title: text-transform
slug: Web/CSS/text-transform
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-transform
---
{{CSSRef}}

La propriété **`text-transform`** définit la façon d'utiliser les lettres capitales pour le texte d'un élément. Cela permet que le texte soit écrit uniquement en majuscules, minuscules ou que chaque mot commence par une capitale. Cela permet également d'améliorer la lisibilité pour les textes avec des annotations [Ruby](/fr/docs/Web/HTML/Element/ruby).

{{EmbedInteractiveExample("pages/css/text-transform.html")}}

La propriété `text-transform` gère les différences liées aux langues, par exemple :

- Pour les langues turques comme le turc (tr), l'azéri (az), le tatar de Crimée (crh), le tatar de Volga (tt) et le bachkir (ba), il existe deux sortes de i, avec et sans le point. Les majuscules correspondantes sont également différentes : `i`/`İ` et `ı`/`I`.
- En allemand (de), le `ß` devient `SS` en majuscule.
- En néerlandais (nl), le digraphe `ij` devient `IJ`, y compris avec `text-transform: capitalize` qui ne met que la première lettre de chaque mot en majuscule.
- En grec (el), les voyelles perdent leur accent lorsque tout le mot est écrit en capitales (`ά`/`Α`) à l'exception du eta disjonctif (`ή`/`Ή`). Les diphtongues avec un accent sur la première voyelle perde l'accent et récupère un tréma sur la seconde voyelle (`άι`/`ΑΪ`). La lettre sigma a deux formes minuscules : `σ` et `ς`. `ς` est utilisée uniquement lorsque c'est la dernière lettre du mot. Lorsque l'agent utilisateur applique `text-transform: lowercase` à un sigma majuscule (`Σ`), il doit choisir l'une des deux formes selon le contexte.
- En gaëlique (ga), une lettre qui préfixe un mot doit rester en minuscule lorsqu'on capitalise toutes les lettres. Ainsi, en appliquant `text-transform: uppercase` à `ar aon tslí`, on obtiendra `AR AON tSLÍ` et non `AR AON TSLÍ`. Dans certains cas, un trait d'union peut être retiré lors du passage en majuscules : `an t-uisce` deviendra `AN tUISCE` (le trait-d'union sera bien réinséré avec `text-transform: lowercase`)

La langue d'un document HTML est définie par l'attribut XML `xml:lang`, qui a la priorité sur l'attribut global [`lang`](/fr/docs/Web/HTML/Global_attributes/lang).

Le support de ces différents cas peut varier d'un navigateur à un autre. Pour plus de détails, [voir le tableau de compatibilité des navigateurs](#compat).

## Syntaxe

```css
/* Avec un mot-clé */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;

/* Valeurs globales */
text-transform: inherit;
text-transform: initial;
text-transform: unset;
```

### Valeurs

- `capitalize`

  - : En utilisant ce mot-clé, la première lettre de chaque mot sera affichée en capitale. Les autres caractères ne seront pas modifiés et conserveront ainsi la forme originale, contenue dans le texte de l'élément. Ici, une lettre peut être n'importe quel caractère Unicode qui fait partie des catégories génériques Lettre. Cela exclue donc les symboles de ponctuations qui peuvent être utilisés en début de mot.

    > **Note :** Le mot-clé capitalize n'était pas complètement spécifié avec CSS 1 et CSS 2.1. Il y avait certaines différences entre les navigateurs : Firefox considèrait que - et \_ étaient des lettres ; Webkit et Gecko considéraient que les symboles lettrés comme ⓐ étaient de vraies lettres ; Internet Explorer 9 était le plus proche de la définition donnée par CSS2 mais il y avait certains cas étranges. Grâce à CSS Text Level 3, ces ambiguités sont levées. Dans le tableau, la ligne capitalize traduit le support de cette spécification.

- `uppercase`
  - : En utilisant ce mot-clé, tous les caractères seront écrits en capitales.
- `lowercase`
  - : En utilisant ce mot-clé, tous les caractères seront écrits en minuscules.
- `none`
  - : Ce mot-clé empêche les modifications liées à la casse des caractères.
- `full-width` {{experimental_inline}}
  - : Ce mot-clé force l'écriture de chaque caractère dans un carré, ce qui permet de les aligner avec des scripts d'Asie Orientale (par exemple du chinois ou du japonais).
- `full-size-kana`
  - : Cette valeur est généralement utilisée pour [les annotations Ruby](/fr/docs/Web/HTML/Element/ruby). Ce mot-clé convertit les caractères Kana de petite taille en leur équivalent de grande taille. Cela permet de compenser les problèmes de lisibilité des tailles de police généralement utilisées pour le Ruby.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<code>none :</code>
<p class="sans_effet">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit
</p>

<code>capitalize :</code>
<p class="cap">
  (Voici) “un” –rapide– -test- ⓙkl
</p>

</code> uppercase :</code>
<p class="majuscules">
  Cependant d'Artagnan voulut d'abord se rendre compte de
  la physionomie de l'impertinent qui se moquait de lui.
</p>

<code>full-width :</code>
<p class="mix">
  ABCDEF</br>
  最初に彼を嘲
</p>

<code>full-size-kana :</code>
<p class="full-size-kana">ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
```

### CSS

```css
p.sans_effet {
  text-transform: none;
}

p.cap {
  text-transform: capitalize;
}

p.majuscules {
  text-transform: uppercase;
}

p.mix {
  text-transform: full-width;
}

p.full-size-kana {
  text-transform: full-size-kana;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","500")}}

## Accessibilité

De grandes portions de texte utilisant `text-transform` avec la valeur `uppercase` peuvent être difficilement lisibles par les personnes dyslexiques ou souffrant de problèmes cognitifs.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Spécifications

| Spécification                                                                        | État                         | Commentaires                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Text', '#text-transform', 'text-transform')}} | {{Spec2('CSS3 Text')}} | Par rapport à {{SpecName('CSS2.1', 'text.html#caps-prop', 'text-transform')}}, la spécification s'étend aux caractères Unicode des catégories générales Nombre et Lettre. Le comportement de `capitalize` est modifié pour ignorer les éventuels symboles ou caractères de ponctuations utilisés. Les mots-clés `full-width` et `full-size-kana` sont ajoutés afin de pouvoir mélanger harmonieusement les caractères alphabétiques et les caractères idéographiques. |
| {{SpecName('CSS2.1', 'text.html#caps-prop', 'text-transform')}} | {{Spec2('CSS2.1')}}     | Par rapport à {{SpecName('CSS1', '#text-transform', 'text-transform')}}, étend la spécifications aux lettres non latines et aux scripts bicaméraux.                                                                                                                                                                                                                                                                                                                     |
| {{SpecName('CSS1', '#text-transform', 'text-transform')}}         | {{Spec2('CSS1')}}     | Définition initiale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-transform")}}

## Voir aussi

- {{cssxref("font-variant")}}
