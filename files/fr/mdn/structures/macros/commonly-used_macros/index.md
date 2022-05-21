---
title: Macros usuelles
slug: MDN/Structures/Macros/Commonly-used_macros
translation_of: MDN/Structures/Macros/Commonly-used_macros
---
{{MDNSidebar}}

Cette page énumère les différentes macros utilisées sur MDN. Pour plus d'informations sur leur utilisation, voir [Utiliser les macros](/fr/docs/MDN/Structures/Macros).

Voir la page [Autres macros](/fr/docs/MDN/Structures/Macros/Other) pour plus d'informations quant aux macros moins usitées ou uniquement utilisées dans certains contextes ou qui sont dépréciées.

## Liens

MDN fournit plusieurs macros pour former des liens entre les pages de référence, le glossaire, etc.

> **Attention :** Toutes les macros de lien devraient être remplacées dans le contenu en français par des liens écrit en Markdown. En effet, on souhaite réduire l'utilisation des macros «&nbsp;simples&nbsp;» qui peuvent être facilement remplacées par du HTML/Markdown.

### Liens vers le glossaire

La macro [`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs) crée un lien vers la page d'un terme du [glossaire](/fr/docs/Glossary). Elle prend un argument obligatoire et un autre optionnel&nbsp;:

1. Le nom du terme (par exemple `"HTML"`)&nbsp;: `\{{Glossary("HTML")}}`
2. Un paramètre optionnel indiquant le texte à afficher à la place du terme&nbsp;: `\{{Glossary("CSS", "Cascading Style Sheets")}}`

> **Attention :** Pour remplacer cette macro, on écrira plutôt&nbsp;: `[le texte à afficher](/fr/docs/Glossary/MonTerme)`.

### Liens vers des pages de référence

D'autres macros permettent de créer des liens vers des pages des différentes références de MDN&nbsp;: JavaScript, CSS, éléments HTML, SVG, etc.

Elles utilisent généralement un premier paramètre indiquant le nom de l'élément vers lequel lier. La plupart utilisent un deuxième argument qui permet de modifier le texte affiché.

<table class="standard-table">
  <thead>
    <tr>
      <th>Macro</th>
      <th>Pointe vers une page située sous</th>
      <th>À remplacer par</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/cssxref.ejs">CSSxRef</a>
      </td>
      <td>
        <a href="/fr/docs/Web/CSS/Reference">La référence CSS</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> devra être remplacé par <code>[`cursor`](/fr/docs/Web/CSS/cursor)</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/DOMxRef.ejs">DOMxRef</a>
      </td>
      <td><a href="/fr/docs/Web/API">La référence du DOM</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> devra être remplacé par <code>[`Document`](/fr/docs/Web/API/Document)</code>.
        S'il y a un deuxième paramètre&nbsp;: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> devra être remplacé par <code>[`getElementsByName()`](/fr/docs/Web/API/Document/getElementsByName)</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTMLElement.ejs">HTMLElement</a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element">Référence des éléments HTML</a> (/Web/HTML/Element)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> devra être remplacé par <code>[`&lt;select&gt;`](/fr/docs/Web/HTML/Element/select)</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/htmlattrxref.ejs"
          >HTMLAttrxRef</a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Global_attributes">Attribut HTML universel si aucun nom d'élément n'est indiqué</a> ou attribut d'un élément si le nom de ce dernier est fourni.
      </td>
      <td>
        <code>\{{HTMLAttrxRef("lang")}}</code> devra être remplacé par <code>[`lang`](/fr/docs/Web/HTML/Global_attributes/lang)</code>.
        <code>\{{HTMLAttrxRef("type","input")}}</code> devra être remplacé par <code>[`type`](/fr/docs/Web/HTML/Element/input#attr-type)</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/jsxref.ejs">JSxRef</a>
      </td>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference">Référence JavaScript</a> (/Web/JavaScript/Reference).
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> devra être remplacé par <code>[`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/SVGAttr.ejs">SVGAttr</a>
      </td>
      <td>
        <a href="/fr/docs/Web/SVG/Attribute">Référence des attributs SVG</a> (/Web/SVG/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> devra être remplacé par <code>[`d`](/fr/docs/Web/SVG/Attribute/d)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/yari/tree/main/kumascript/macros/SVGElement.ejs">SVGElement</a>
      </td>
      <td>
        <a href="/fr/docs/Web/SVG/Attribute">Référence des éléments SVG</a> (/Web/SVG/Element).
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> devra être remplacé par <code>[`&lt;view&gt;`](/fr/docs/Web/SVG/Element/view)</code>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPHeader.ejs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/fr/docs/Web/HTTP/Headers">Référence des en-têtes HTTP</a> (/Web/HTTP/Headers).
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> devra être remplacé par <code>[`ACCEPT`](/fr/docs/Web/HTTP/Headers/ACCEPT)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPMethod.ejs">HTTPMethod</a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTTP/Methods">Référence des méthodes de requête HTTP</a> (/Web/HTTP/Methods).
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> devra être remplacé par <code>[`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPStatus.ejs">HTTPStatus</a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTTP/Status">Référence des codes de statut HTTP</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> devra être remplacé par <code>[`404`](/fr/docs/Web/HTTP/Status/404)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/event.ejs">Event</a>.
      </td>
      <td>
        <a href="/fr/docs/Web/Events">Référence des évènements</a> (/Web/Events)
      </td>
      <td>
        <div class="note">
          <p>
            <strong>Note :</strong> Cette macro n'est plus particulièrement utile, car les évènements sont désormais placés sous leur élément DOM associé. <code>\{{DOMxRef("Document.wheel_event")}}</code> devrait être remplacé par 
            <code>[`Document.wheel_event`](/fr/docs/Web/API/Document/wheel_event)</code>
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

### Liens vers des rapports de bogue

La macro [`bug`](https://github.com/mdn/yari/blob/main/kumascript/macros/bug.ejs) permet de créer un lien vers un bogue de bugzilla.mozilla.org avec la syntaxe `\{{Bug(123456)}}`. Un tel appel devrait être remplacé par `[bogue Mozilla 123456](https://bugzilla.mozilla.org/show_bug.cgi?id=123456)`.

La macro [`WebkitBug`](https://github.com/mdn/yari/blob/main/kumascript/macros/WebkitBug.ejs) fournit un lien vers la base de bogues de WebKit. Un tel lien devrait être remplacé par `[bogue WebKit 7890](https://bugs.webkit.org/show_bug.cgi?id=7890)`.

### Navigation entre les pages de chapitre d'un guide

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs), et [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) permettent d'afficher des contrôles de navigation pour des articles qui forment une série.

Pour les deux premières macros, le seul paramètre nécessaire est l'emplacement de l'article cible.

Pour la macro [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs), le premier paramètre correspond à la cible de l'article précédent dans la série et le deuxième paramètre correspond à la cible du prochain article.

## Exemples de code

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) permet d'embarquer le résultat d'un exemple de code de la page (voir [les exemples intégrés](/fr/docs/MDN/Structures/Live_samples)).
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) crée un lien vers une page contenant le résultat d'un exemple de code de la page (voir [les exemples intégrés](/fr/docs/MDN/Structures/Live_samples)).
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) permet d'embarquer des exemples interactifs depuis des pages GitHub (voir [exemples interactifs depuis GitHub](/fr/docs/MDN/Structures/Code_examples#github_live_samples)).

## Barres latérales de navigation

Pour chaque grand ensemble de pages, on a des macros qui aident à la navigation sous la forme d'une barre à gauche. Elles permettent généralement de remonter à la page racine de la référence/du guide/du tutoriel et placent l'article dans la catégorie correspondante au sein de cette barre.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) génère la barre latérale pour les pages de la référence CSS.
- [`HTMLRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLRef.ejs) génère la barre latérale pour les pages de la référence HTML.
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) génère la barre latérale pour les pages des références des API web.

## Mise en forme

### Indicateurs en ligne pour les documentations d'API

[`optional_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/optional_inline.ejs) et [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) sont utilisées dans les documentations d'API pour décrire la liste des propriétés d'un objet ou les paramètres d'une fonction.

#### Syntaxe

`\{{Optional_Inline}}`

ou

`\{{ReadOnlyInline}}`.

#### Exemples

- `isCustomObject` {{ReadOnlyInline}}
  - : Un booléen qui indique, s'il vaut `true`, que l'objet est spécifique.
- `parameterX` {{Optional_Inline}}
  - : Bla bla bla…

## Indicateurs de statut et de compatibilité

### Indicateurs en ligne sans paramètre

#### Non-standard

[`non-standard_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) insère une marque sur la ligne, indiquant que l'API n'a pas été standardisée et n'est pas en voie de standardisation.

##### Syntaxe

`\{{Non-standard_Inline}}`

##### Exemples

- Icône&nbsp;: {{Non-standard_Inline}}

#### Expérimental

[`experimental_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) insère une marque sur la ligne, indiquant que l'API n'est pas largement implémentée et peut évoluer.

##### Syntaxe

`\{{Experimental_Inline}}`

##### Exemples

- Icône&nbsp;: {{Experimental_Inline}}

#### Dépréciation

[`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) insère une marque sur la ligne, indiquant que l'API ne devrait pas être utilisée, car elle a officiellement été dépréciée ou supprimée.

##### Syntaxe

`\{{Deprecated_Inline}}`

##### Exemples

- Icône&nbsp;: {{Deprecated_Inline}}

### Indicateurs pour les pages ou les sections

Les macros qui suivent possèdent la même sémantique que les équivalents en ligne abordés avant. Ces macros doivent être placées directement après le préambule de la page. On peut aussi les utiliser pour marquer une section donnée d'une page.

- [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs). Exemple&nbsp;: `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) devrait être utilisée sur les pages documentant [des fonctionnalités expérimentales](/fr/docs/MDN/Guidelines/Conventions_definitions#experimental). Exemple&nbsp;: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs). Exemple&nbsp;: `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`secureContext_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs) devrait être utilisée sur les pages principales des interfaces ou d'aperçu des API, mais pas sur les sous-pages décrivant les méthodes ou les propriétés. Exemple&nbsp;: `\{{SecureContext_Header}}` {{SecureContext_Header}}

### Indiquer qu'une fonctionnalité est disponible pour les <i lang="en">web workers</i>

La macro [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) insère une note localisée qui indique qu'une fonctionnalité est disponible dans le contexte d'un [<i lang="en">web worker</i>](/fr/docs/Web/API/Web_Workers_API). L'argument `notservice` peut être utilisé afin d'indiquer qu'une fonctionnalité est disponible pour les <i lang="en">web workers</i> mais pas pour les <i lang="en">service workers</i>.

##### Syntaxe

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("notservice")}}
```

##### Exemples

{{AvailableInWorkers}}
{{AvailableInWorkers("notservice")}}
