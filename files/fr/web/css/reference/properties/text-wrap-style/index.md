---
title: text-wrap-style
slug: Web/CSS/Reference/Properties/text-wrap-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-wrap-style`** contrôle la manière dont le texte à l'intérieur d'un élément est renvoyé à la ligne. Les différentes valeurs offrent des façons alternatives d'envelopper le contenu d'un élément de bloc. Elle peut également être définie et réinitialisée à l'aide de la propriété raccourcie {{CSSxRef("text-wrap")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: text-wrap-style")}}

```css interactive-example-choice
text-wrap-style: auto;
```

```css interactive-example-choice
text-wrap-style: balance;
```

```css interactive-example-choice
text-wrap-style: pretty;
```

```css interactive-example-choice
text-wrap-style: stable;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Éditez le texte dans la boîte&nbsp;:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut
        cum eum id quos est.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#example-element {
  border: 1px solid #c5c5c5;
  width: 250px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-wrap-style: auto;
text-wrap-style: balance;
text-wrap-style: pretty;
text-wrap-style: stable;

/* Valeurs globales */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

Lorsque le renvoi à la ligne est autorisé (voir {{CSSxRef("text-wrap-mode")}}), la propriété `text-wrap-style` est définie comme un mot-clé unique choisi parmi la liste des valeurs ci-dessous.

### Valeurs

- `auto`
  - : Le texte est renvoyé à la ligne de la manière la plus performante pour le navigateur et ne prend pas en compte le nombre de caractères.
- `balance`
  - : Le texte est renvoyé à la ligne de manière à équilibrer au mieux le nombre de caractères sur chaque ligne, améliorant ainsi la qualité de la mise en page et la lisibilité. Comme le comptage des caractères et leur équilibrage sur plusieurs lignes est coûteux en termes de calcul, cette valeur n'est prise en charge que pour les blocs de texte couvrant un nombre limité de lignes (six ou moins pour Chromium et dix ou moins pour Firefox).
- `pretty`
  - : Le texte est renvoyé à la ligne en utilisant un algorithme plus lent qui privilégie une meilleure mise en page plutôt que la vitesse. Cela est destiné au corps du texte où une bonne typographie est privilégiée par rapport à la performance (par exemple, lorsque le nombre de [orphelins](/fr/docs/Web/CSS/Reference/Properties/orphans) doit être réduit au minimum).
- `stable`
  - : Le texte est renvoyé à la ligne de manière à ce que, lorsque l'utilisateur·ice modifie le contenu, les lignes précédentes restent statiques plutôt que de réorganiser tout le bloc de texte.

> [!NOTE]
> Le module de [texte CSS](/fr/docs/Web/CSS/Guides/Text) définit une valeur `avoid-orphans` pour la propriété `text-wrap-style` afin d'éviter des dernières lignes excessivement courtes et d'inciter l'agent utilisateur à prendre en compte plus d'une ligne lors de la prise de décisions de retour à la ligne. Cette valeur n'est pas encore prise en charge dans aucun navigateur.

## Description

Lorsque le contenu est autorisé à se renvoyer à la ligne, ce qui est le cas par défaut, il existe plusieurs choix qui peuvent influencer la manière dont le contenu est renvoyé à la ligne.

La valeur que vous choisissez pour `text-wrap-style` dépend du nombre de lignes de texte que vous prévoyez de mettre en forme, si le texte est `contenteditable` et si vous devez privilégier l'apparence ou la performance.

Lorsque le contenu mis en forme sera limité à un petit nombre de lignes, comme les titres, les légendes et les citations, `text-wrap-style: balance` peut être ajouté pour équilibrer le nombre de caractères sur chaque ligne, améliorant ainsi la qualité de la mise en page et la lisibilité. Comme les navigateurs limitent le nombre de lignes impactées par cette propriété, l'impact de cette valeur sur les performances est négligeable.

Pour les sections de texte plus longues, `text-wrap-style: pretty` peut être utilisé. Notez que `pretty` a un effet négatif sur les performances, il ne doit donc être utilisé que pour les blocs de texte plus longs lorsque la mise en page est plus importante que la vitesse.

La valeur `stable` améliore l'expérience utilisateur lorsqu'elle est utilisée sur du contenu [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable). Cette valeur garantit que, lorsque l'utilisateur·ice modifie le texte, les lignes précédentes dans la zone en cours de modification restent stables.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Texte équilibré

Cet exemple comporte deux paragraphes, le premier utilise la valeur par défaut `auto` et le second utilise `balance`.

#### HTML

```html
<h2>Déséquilibré</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad. Impedit
  adipisci rerum modi praesentium atque aperiam vitae nesciunt consectetur
  assumenda deleniti repudiandae perferendis sed odio doloremque, aliquid natus
  laboriosam?
</p>
<h2>Équilibré</h2>
<p class="balanced">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad. Impedit
  adipisci rerum modi praesentium atque aperiam vitae nesciunt consectetur
  assumenda deleniti repudiandae perferendis sed odio doloremque, aliquid natus
  laboriosam?
</p>
```

#### CSS

```css
p {
  max-width: 60ch;
}
.balanced {
  text-wrap-style: balance;
}
```

#### Résultat

{{EmbedLiveSample("Texte équilibré", "100%",310)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-wrap")}}
- La propriété {{CSSxRef("text-wrap-mode")}}
