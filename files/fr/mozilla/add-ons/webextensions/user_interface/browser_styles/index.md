---
title: Styles des navigateurs
slug: Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles
---

{{AddonSidebar}}

Certains composants de l'interface utilisateur - les [fenêtres contextuelles](/fr/Add-ons/WebExtensions/user_interface/Popups), [fenêtres latérales](/fr/Add-ons/WebExtensions/user_interface/Sidebars), et les [pages d'options](/fr/Add-ons/WebExtensions/user_interface/Options_pages) du navigateur et de la page - sont spécifiés par votre extension de la même manière :

1. créer un fichier HTML définissant la structure de l'élément d'interface utilisateur
2. ajoutez une clé manifest.json ([`browser_action`](/fr/Add-ons/WebExtensions/manifest.json/browser_action), [`page_action`](/fr/Add-ons/WebExtensions/manifest.json/page_action), [`sidebar_action`](/fr/Add-ons/WebExtensions/manifest.json/sidebar_action), ou [`options_ui`](/fr/Add-ons/WebExtensions/manifest.json/options_ui)) pointant vers ce fichier HTML.

L'un des défis de cette approche est de styliser l'élément de telle sorte qu'il s'intègre au style du navigateur.
Pour aider à cela, les clés manifest.json keys incluent une propriété optionnelle supplémentaire : `browser_style`.
Si cela est inclus et défini sur `true`, votre document obtiendra une ou plusieurs feuilles de style supplémentaires qui le rendront cohérent avec l'interface utilisateur du navigateur et avec d'autres extensions utilisant la propriété `browser_style`.

Lorsque vous envisagez d'utiliser le `browser_style: true`, vous devez tester votre extension avec différents thèmes (intégrés ou AMO) pour vous assurer que l'interface d'extension se comporte comme vous l'attendez..

> **Attention :** Quand `browser_style: true` est inclus dans le manifest de votre extension web, la sélection de texte dans l'interface utilisateur de votre extension est désactivée sauf dans les contrôles de saisie. Si cela pose un problème, incluez plutôt browser_style:false.

> **Note :** **Google Chrome** et **Opera** utilisent `chrome_style` au lieu de `browser_style`, donc si vous souhaitez les prendre en charge, vous devez ajouter les deux clés.

Dans Firefox, la feuille de style peut être vue sur `chrome://browser/content/extension.css`. La feuille de style peut être vue sur `chrome://browser/content/extension-mac.css` est également incluse sur OS X.

La plupart des styles sont automatiquement appliqués, mais certains éléments nécessitent que vous ajoutiez la classe `browser-style` non standard pour obtenir leur style, comme indiqué dans le tableau ci-dessous :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Element/button">&#x3C;button></a></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;button class="browser-style">Click me&#x3C;/button>{{non-standard_inline}}</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            ><a href="/fr/docs/Web/HTML/Element/select">&#x3C;select></a></code
          >
        </p>
      </td>
      <td>
        <pre class="brush: html">
&#x3C;select class="browser-style" name="select">
  &#x3C;option value="value1">Value 1&#x3C;/option>
  &#x3C;option value="value2" selected>Value 2&#x3C;/option>
  &#x3C;option value="value3">Value 3&#x3C;/option>
&#x3C;/select></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Element/textarea"
            >&#x3C;textarea></a
          ></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;textarea class="browser-style">Write here&#x3C;/textarea></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        Parent d'un
        <code><a href="/fr/docs/Web/HTML/Element/input">&#x3C;input></a></code>
      </td>
      <td>
        <pre class="brush: html">
&#x3C;div class="browser-style">
  &#x3C;input type="radio" id="op1" name="choices" value="op1">
  &#x3C;label for="op1">Option 1&#x3C;/label>

&#x3C;input type="radio" id="op2" name="choices" value="op2">
&#x3C;label for="op2">Option 2&#x3C;/label>
&#x3C;/div></pre
        >

</td>
</tr>

  </tbody>
</table>

> **Note :** Voir le [bug Firefox 1465256](https://bugzil.la/1465256) pour la suppression de cette exigence inutile.

## Compatibilité des navigateurs

{{Compat}}

## Composants du panneau Firefox

> **Attention :** Cette fonctionnalité est non standard et ne fonctionne que dans Firefox.

La feuille de style `chrome://browser/content/extension.css` contient également les styles des composants du panneau Firefox.

L'[ancien guide de style de Firefox](https://firefoxux.github.io/StyleGuide/#/navigation) documente l'utilisation appropriée.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header</td>
      <td>
        <pre class="brush: html">
&#x3C;header class="panel-section panel-section-header">
  &#x3C;div class="icon-section-header">&#x3C;img src="image.svg"/>&#x3C;/div>
  &#x3C;div class="text-section-header">Header&#x3C;/div>
&#x3C;/header></pre
        >
      </td>
    </tr>
    <tr>
      <td>Footer</td>
      <td>
        <pre class="brush: html">
&#x3C;footer class="panel-section panel-section-footer">
  &#x3C;button class="panel-section-footer-button">Cancel&#x3C;/button>
  &#x3C;div class="panel-section-footer-separator">&#x3C;/div>
  &#x3C;button class="panel-section-footer-button default">Confirm&#x3C;/button>
&#x3C;/footer></pre
        >
      </td>
    </tr>
    <tr>
      <td>Tabs</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-tabs">
  &#x3C;button class="panel-section-tabs-button selected">Tab&#x3C;/button>
  &#x3C;div class="panel-section-tabs-separator">&#x3C;/div>
  &#x3C;button class="panel-section-tabs-button">Tab&#x3C;/button>
  &#x3C;div class="panel-section-tabs-separator">&#x3C;/div>
  &#x3C;button class="panel-section-tabs-button">Tab&#x3C;/button>
&#x3C;/div></pre
        >
      </td>
    </tr>
    <tr>
      <td>Form</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-formElements">
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="name01">Label:&#x3C;/label>
    &#x3C;input type="text" value="Name" id="name01" />
  &#x3C;/div>
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="picker01">Label:&#x3C;/label>
    &#x3C;select id="picker01">
      &#x3C;option value="value1" selected="true">Dropdown&#x3C;/option>
      &#x3C;option value="value2">List Item&#x3C;/option>
      &#x3C;option value="value3">List Item&#x3C;/option>
    &#x3C;/select>
  &#x3C;/div>
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="placeholder01">Label:&#x3C;/label>
    &#x3C;input type="text" placeholder="Placeholder" id="placeholder01" />
    &#x3C;button name="expander" class="expander">&#x3C;/button>
  &#x3C;/div>
&#x3C;/div></pre
        >
      </td>
    </tr>
    <tr>
      <td>Menu</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-list">
  &#x3C;div class="panel-list-item">
    &#x3C;div class="icon">&#x3C;/div>
    &#x3C;div class="text">List Item&#x3C;/div>
    &#x3C;div class="text-shortcut">Ctrl-L&#x3C;/div>
  &#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-section-separator">&#x3C;/div>

&#x3C;div class="panel-list-item disabled">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">Disabled List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-section-separator">&#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>
&#x3C;/div></pre
        >

</td>
</tr>

  </tbody>
</table>

### Exemple

#### HTML

```html
<header class="panel-section panel-section-header">
  <div class="icon-section-header"><!-- An image goes here. --></div>
  <div class="text-section-header">Header</div>
</header>

<div class="panel-section panel-section-list">
  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut">Ctrl-L</div>
  </div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-section-separator"></div>

  <div class="panel-list-item disabled">
    <div class="icon"></div>
    <div class="text">Disabled List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-section-separator"></div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>
</div>

<footer class="panel-section panel-section-footer">
  <button class="panel-section-footer-button">Cancel</button>
  <div class="panel-section-footer-separator"></div>
  <button class="panel-section-footer-button default">Confirm</button>
</footer>
```

```css hidden
/* Global */
html,
body {
  background: white;
  box-sizing: border-box;
  color: #222426;
  cursor: default;
  display: flex;
  flex-direction: column;
  font: caption;
  margin: 0;
  padding: 0;
  -moz-user-select: none;
}

body * {
  box-sizing: border-box;
  text-align: start;
}

button.panel-section-footer-button,
button.panel-section-tabs-button {
  color: inherit;
  background-color: unset;
  font: inherit;
  text-shadow: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
}

/* Panel Section */
.panel-section {
  display: flex;
  flex-direction: row;
}

.panel-section-separator {
  background-color: rgba(0, 0, 0, 0.15);
  min-height: 1px;
}

/* Panel Section - Header */
.panel-section-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 16px;
}

.panel-section-header > .icon-section-header {
  background-position: center center;
  background-repeat: no-repeat;
  height: 32px;
  margin-right: 16px;
  position: relative;
  width: 32px;
}

.panel-section-header > .text-section-header {
  align-self: center;
  font-size: 1.385em;
  font-weight: lighter;
}

/* Panel Section - List */
.panel-section-list {
  flex-direction: column;
  padding: 4px 0;
}

.panel-list-item {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  padding: 0 16px;
}

.panel-list-item:not(.disabled):hover {
  background-color: rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.panel-list-item:not(.disabled):hover:active {
  background-color: rgba(0, 0, 0, 0.1);
}

.panel-list-item.disabled {
  color: #999;
}

.panel-list-item > .icon {
  flex-grow: 0;
  flex-shrink: 0;
}

.panel-list-item > .text {
  flex-grow: 10;
}

.panel-list-item > .text-shortcut {
  color: #808080;
  font-family: "Lucida Grande", caption;
  font-size: 0.847em;
  justify-content: flex-end;
}

.panel-section-list .panel-section-separator {
  margin: 4px 0;
}

/* Panel Section - Footer */
.panel-section-footer {
  background-color: rgba(0, 0, 0, 0.06);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  color: #1a1a1a;
  display: flex;
  flex-direction: row;
  height: 41px;
  margin-top: -1px;
  padding: 0;
}

.panel-section-footer-button {
  flex: 1 1 auto;
  height: 100%;
  margin: 0 -1px;
  padding: 12px;
  text-align: center;
}

.panel-section-footer-button > .text-shortcut {
  color: #808080;
  font-family: "Lucida Grande", caption;
  font-size: 0.847em;
}

.panel-section-footer-button:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.panel-section-footer-button:hover:active {
  background-color: rgba(0, 0, 0, 0.1);
}

.panel-section-footer-button.default {
  background-color: #0996f8;
  box-shadow: 0 1px 0 #0670cc inset;
  color: #fff;
}

.panel-section-footer-button.default:hover {
  background-color: #0670cc;
  box-shadow: 0 1px 0 #005bab inset;
}

.panel-section-footer-button.default:hover:active {
  background-color: #005bab;
  box-shadow: 0 1px 0 #004480 inset;
}

.panel-section-footer-separator {
  background-color: rgba(0, 0, 0, 0.1);
  width: 1px;
  z-index: 99;
}
```

```css
/* Example specific – not part of chrome://browser/content/extension.css */
body {
  background: #fcfcfc;
  background-clip: padding-box;
  border: 1px solid rgba(24, 26, 27, 0.2);
  box-shadow:
    0 3px 5px rgba(24, 26, 27, 0.1),
    0 0 7px rgba(24, 26, 27, 0.1);
  box-sizing: content-box;
  margin: 2em auto 0.5em;
  width: 384px;
}

html {
  min-height: 100vh;
}

html > body {
  margin: auto;
}

.icon-section-header {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48Y2lyY2xlIGZpbGw9IiMzNjM5NTkiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjwvc3ZnPg==");
}
```

#### Resultat

{{EmbedLiveSample("Exemple","640","360")}}
