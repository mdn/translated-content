---
title: Fonction CSS `element()`
short-title: element()
slug: Web/CSS/Reference/Values/element
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`element()`** est une valeur générée à partir d'un élément HTML quelconque. Cette image est dynamique, ce qui signifie que si l'élément HTML est modifié, les propriétés CSS utilisant la valeur résultante sont automatiquement mises à jour.

Un scénario particulièrement utile pour utiliser cette fonction serait de rendre une image dans un élément HTML {{HTMLElement("canvas")}}, puis de l'utiliser comme arrière-plan.

Pour les navigateurs basés sur Gecko, vous pouvez utiliser la méthode non standard {{DOMxRef("document.mozSetImageElement()")}} pour modifier l'élément utilisé comme arrière-plan pour un élément CSS donné.

## Syntaxe

```css
element(id)
```

où&nbsp;:

- _id_
  - : L'identifiant de l'élément à utiliser comme arrière-plan, défini à l'aide de l'attribut HTML #_id_ sur l'élément.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Ces exemples fonctionnent dans les versions de Firefox qui prennent en charge `-moz-element()`.

### Un exemple quelque peu réaliste

Cet exemple utilise un {{HTMLElement("div")}} caché comme arrière-plan. L'élément d'arrière-plan utilise un dégradé, mais inclut également du texte qui est rendu comme partie de l'arrière-plan.

#### HTML

```html
<div id="boite-cible">
  <p>
    Cet élément utilise l'élément #mon-arriere-plan comme image de fond&nbsp;!
  </p>
</div>

<div id="conteneur-arriere-plan">
  <div id="mon-arriere-plan">
    <p>Et voici un texte inscrit sur l'arrière-plan.</p>
  </div>
</div>
```

#### CSS

```css
#boite-cible {
  width: 400px;
  height: 400px;
  background: -moz-element(#mon-arriere-plan) no-repeat;
}

#conteneur-arriere-plan {
  overflow: hidden;
  height: 0;
}

#mon-arriere-plan {
  width: 1024px;
  height: 1024px;
  background-image: linear-gradient(to right, red, orange, yellow, white);
}

#mon-arriere-plan p {
  transform-origin: 0 0;
  rotate: 45deg;
  color: white;
}
```

{{EmbedLiveSample("Un exemple quelque peu réaliste")}}

L'élément HTML {{HTMLElement("div")}} avec l'ID «&nbsp;mon-arriere-plan&nbsp;» est utilisé comme arrière-plan pour le contenu, y compris le paragraphe «&nbsp;Cette boîte utilise l'élément avec l'ID #mon-arriere-plan comme arrière-plan&nbsp;!&nbsp;».

### Aperçu de la page

Cet [exemple basé sur Vincent De Oliveira <sup>(angl.)</sup>](https://iamvdo.me/en/blog/css-element-function) crée un aperçu du `<div id="css-source">` à l'intérieur du `<div id="css-result">`.

#### HTML

```html
<div id="css-source">
  <h1>Aperçu de la page</h1>
</div>
<div id="css-result"></div>
```

#### CSS

```css
#css-result {
  background: -moz-element(#css-source) no-repeat;
  width: 256px;
  height: 32px;
  background-size: 80%;
  border: dashed;
}
```

#### Résultat

{{EmbedLiveSample("Aperçu de la page")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("image/image", "image()")}}
- La fonction {{CSSxRef("image/image-set", "image-set()")}}
- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- Le type de donnée {{CSSxRef("&lt;gradient&gt;")}}
- La fonction {{CSSxRef("cross-fade()")}}
- La méthode API {{DOMxRef("document.mozSetImageElement()")}} {{Non-standard_Inline}}
