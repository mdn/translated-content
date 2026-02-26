---
title: "HTMLBaseElement : propriété href"
short-title: href
slug: Web/API/HTMLBaseElement/href
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

La propriété **`href`** de l'interface {{DOMxRef("HTMLBaseElement")}} contient une chaîne de caractères qui est l'URL à utiliser comme base pour les [URL relatives](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#url_absolues_et_url_relatives).

Elle reflète l'attribut `href` de l'élément HTML {{HTMLElement("base")}}.

## Valeur de retour

Une chaîne de caractères qui contient une URL, ou la chaîne vide (`""`) si l'élément `<base>` correspondant n'inclut pas l'attribut `href`.

## Exemples

### HTML avec URL de base

Cet exemple montre que l'attribut `href` dans `<base>` est reflété dans la propriété `href` de `HTMLBaseElement`.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

```css hidden
#log {
  height: 20px;
}
```

#### HTML

```html
<base href="https://developer.mozilla.org/example" />
```

#### JavaScript

```js
const base = document.getElementsByTagName("base")[0];
log(`base.href="${base.href}"`);
```

#### Résultat

{{EmbedLiveSample('HTML avec URL de base', 100, 50)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
