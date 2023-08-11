---
title: Les bases de WAI-ARIA
slug: Learn/Accessibility/WAI-ARIA_basics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

Après l'article précédent, il peut être difficile de créer des contrôles UI complexes impliquant du code HTML non sémantique et du contenu dynamique mis à jour par JavaScript. WAI-ARIA est une technologie qui peut aider à résoudre de tels problèmes en ajoutant une sémantique supplémentaire que les navigateurs et les technologies d'assistance peuvent reconnaître et utiliser pour informer les utilisateurs de ce qui se passe. Nous montrerons ici comment l'utiliser au niveau de base pour améliorer l'accessibilité.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">  Prerequis:</th>
      <td>
        Connaissances informatiques de base, une compréhension de base de HTML,
        CSS et JavaScript, une compréhension des
        <a href="/fr/docs/Apprendre/a11y">articles précédents du cours</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Se familiariser avec WAI-ARIA et savoir comment l'utiliser pour fournir
        une sémantique supplémentaire utile afin d'améliorer l'accessibilité, le
        cas échéant.
      </td>
    </tr>
  </tbody>
</table>

## Qu'est WAI-ARIA?

Commençons par regarder ce que WAI-ARIA est , et ce qu'il peut faire pour nous.

### Un nouvel ensemble de problèmes

Car les applications web ont commencé à devenir plus complexes et dynamiques, un nouvel ensemble de fonctionnalités d'accessibilité et de problèmes ont commencé à apparaître.

Par exemple, HTML5 a introduit un certain nombre d'éléments sémantiques pour définir des fonctionnalités de page communes ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.) Avant de les utiliser, les développeurs utilisaient simplement {{htmlelement("div")}} s avec des identifiants ou des classes, par exemple `<div class="nav">` , mais ils posaient problème, car il n'existait pas de moyen facile de trouver facilement une fonctionnalité de page spécifique telle que la navigation principale par programmation. .

La solution initiale consistait à ajouter un ou plusieurs liens cachés en haut de la page pour créer un lien vers la navigation (ou autre), par exemple:

```html
<a href="#hidden" class="hidden">Passer à la navigation</a>
```

Mais ceci n'est pas encore très précis et ne peut être utilisé que lorsque le lecteur d'écran lit en haut de la page.

Autre exemple, les applications ont commencé à comporter des commandes complexes telles que des sélecteurs de date pour choisir les dates, des curseurs pour choisir des valeurs, etc. HTML5 fournit des types spéciaux input pour rendre de tels contrôles:

```html
<input type="date" /> <input type="range" />
```

Celles-ci ne sont pas bien prises en charge sur tous les navigateurs et il est également très difficile de les nommer, ce qui les rend peu utiles pour l'intégration aux conceptions de sites Web. En conséquence, les développeurs font souvent appel à des bibliothèques JavaScript qui génèrent des contrôles tels qu'une série d'éléments {{htmlelement("div")}} s imbriqués ou d'éléments de table avec des noms de classe, qui sont ensuite stylés à l'aide de CSS et contrôlés à l'aide de JavaScript.

Le problème ici est que, visuellement, ils fonctionnent, mais que les lecteurs d'écran ne peuvent pas comprendre ce qu'ils sont, et on dit aux utilisateurs qu'ils peuvent voir une multitude d'éléments sans sémantique pour décrire ce qu'ils veulent dire.

### Entrez WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) est une spécification écrite par le W3C et définissant un ensemble d'attributs HTML supplémentaires pouvant être appliqués aux éléments pour fournir une sémantique supplémentaire et améliorer l'accessibilité en cas de manque. Trois caractéristiques principales sont définies dans la spécification:

- **Rôles** - Ceux-ci définissent ce qu'un élément est ou fait. Bon nombre de ces rôles sont des rôles de référence, qui dupliquent en grande partie la valeur sémantique des éléments structurels HTML5, par exemple role = "navigation" ({{htmlelement("nav")}}) ou `role="complementary"` ({{htmlelement("aside")}}) , mais il en existe d'autres qui décrivent différentes structures de pages, telles que `role="banner"`, `role="search"`, `role="tabgroup"`, `role="tab"`, etc., que l'on trouve couramment dans les UIs.
- **Propriétés** — Ceux-ci définissent les propriétés des éléments, qui peuvent être utilisés pour leur donner une signification supplémentaire ou une sémantique. Par exemple, `aria-required="true"` spécifie qu'une entrée de formulaire doit être renseignée pour être valide, alors que `aria-labelledby="label"` vous permet de mettre un ID sur un élément, puis de le référencer en tant qu'étiquette pour tout autre élément de la page, y compris plusieurs éléments, ce qui n'est pas possible avec `<label for="input">`. À titre d'exemple, vous pouvez utiliser `aria-labelledby` pour spécifier qu'une description de clé contenue dans un {{htmlelement("div")}} est le label de plusieurs cellules de tableau, ou vous pouvez l'utiliser comme alternative au texte alternatif d'image — spécifiez les informations existantes sur la page en tant que texte alternatif d'image, plutôt que de devoir les répéter à l'intérieur de l'attribut `alt`. Vous pouvez voir un exemple de celà à [Alternatives textuelles](/fr/docs/Apprendre/a11y/HTML?document_saved=true#Alternatives_textuelles).
- **États** — Propriétés spéciales qui définissent les conditions actuelles des éléments, telles que `aria-disabled="true"`, qui spécifient à un lecteur d'écran que l'entrée de formulaire est actuellement désactivée. Les états diffèrent des propriétés en ce que les propriétés ne changent pas tout au long du cycle de vie d'une application, alors que les états peuvent changer, généralement par programmation via JavaScript.

Un point important sur les attributs WAI-ARIA est qu'ils n'affectent en rien la page Web, à l'exception des informations exposées par les API d'accessibilité du navigateur (où les lecteurs d'écran obtiennent leurs informations). WAI-ARIA n'affecte pas la structure de la page Web, le DOM, etc., bien que les attributs puissent être utiles pour sélectionner des éléments par CSS.

> **Note :** Vous pouvez trouver une liste utile de tous les rôles ARIA et de leurs utilisations, avec des liens vers des informations supplémentaires, dans les spécifications WAI-ARIA — voir la [définition des rôles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions).
>
> La spécification contient également une liste de toutes les propriétés et de tous les états, avec des liens vers des informations complémentaires - voir [Définitions des états et des propriétés (tous les attributs aria-\*)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Où WAI-ARIA est supporté?

Ce n'est pas une question simple. Il est difficile de trouver une ressource concluante qui explicite quelles fonctionnalités de WAI-ARIA sont supportées où, parce que:

1. Il y a beaucoup de fonctionnalités dans la spécification WAI-ARIA
2. Il y a beaucoup de combinaisons de systèmes d'exploitation, navigateurs et lecteurs d'écrans à considérer

Ce dernier point est la clé: pour utiliser un lecteur d'écran, votre système d'exploitation a besoin d'un navigateur ayant les APIs d'accessibilité nécessaires, de manière à présenter l'information dont les lecteurs d'écran ont besoin pour faire leur travail. Les systèmes d'exploitation les plus populaires ont un à deux navigateurs avec les quels les lecteurs d'écrans peuvent travailler. Le Paciello Group a un article plutôt à jour fournissant des informations pour ceci — voir [Rough Guide: browsers, operating systems and screen reader support updated](https://www.paciellogroup.com/blog/2014/10/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Ensuite, vous devez vous demander si les navigateurs en question supportent les fonctionnalités ARIA et les présenter via leurs APIs, mais aussi du fait que les lecteurs d'écrans reconnaissent ou non cette information et la présentent à leurs utilisateurs d'une manière utile.

1. Browser support is generally quite good — at the time of writing, [caniuse.com](http://caniuse.com/#feat=wai-aria) stated that global browser support for WAI-ARIA was around 88%.
2. Screenreader support for ARIA features isn't quite at this level, but the most popular screenreaders are getting there. You can get an idea of support levels by looking at Powermapper's [WAI-ARIA Screen reader compatibility](http://www.powermapper.com/tests/screen-readers/aria/) article.

In this article, we won't attempt to cover every WAI-ARIA feature, and its exact support details. Instead, we will cover the most critical WAI-ARIA features for you to know about; if we don't mention any support details, you can assume that the feature is well-supported. We will clearly mention any exceptions to this.

> **Note :** Some JavaScript libraries support WAI-ARIA, meaning that when they generate UI features like complex form controls, they add ARIA attributes to improve the accessibility of those features. If you are looking for a 3rd party JavaScript solution for rapid UI development, you should definitely consider the accessibility of its UI widgets as an important factor when making your choice. Good examples are jQuery UI (see [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/), and [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### When should you use WAI-ARIA?

We talked about some of the problems that prompted WAI-ARIA to be created earlier on, but essentially, there are four main areas that WAI-ARIA is useful in:

1. **Signposts/Landmarks**: ARIA's `role` attribute values can act as landmarks that either replicate the semantics of HTML5 elements (e.g. {{htmlelement("nav")}}), or go beyond HTML5 semantics to provide signposts to different functional areas, e.g `search`, `tabgroup`, `tab`, `listbox`, etc.
2. **Dynamic content updates**: Screenreaders tend to have difficulty with reporting constantly changing content; with ARIA we can use `aria-live` to inform screenreader users when an area of content is updated, e.g. via [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest), or [DOM APIs](/fr/docs/Web/API/Document_Object_Model).
3. **Enhancing keyboard accessibility**: There are built-in HTML elements that have native keyboard accessibility; when other elements are used along with JavaScript to simulate similar interactions, keyboard accessibility and screenreader reporting suffers as a result. Where this is unavoidable, WAI-ARIA provides a means to allow other elements to receive focus (using `tabindex`).
4. **Accessibility of non-semantic controls**: When a series of nested `<div>`s along with CSS/JavaScript is used to create a complex UI-feature, or a native control is greatly enhanced/changed via JavaScript, accessibility can suffer — screenreader users will find it difficult to work out what the feature does if there are no semantics or other clues. In these situations, ARIA can help to provide what's missing with a combination of roles like `button`, `listbox`, or `tabgroup`, and properties like `aria-required` or `aria-posinset` to provide further clues as to functionality.

One thing to remember though — **you should only use WAI-ARIA when you need to!** Ideally, you should _always_ use [native HTML features](/fr/docs/Learn/Accessibility/HTML) to provide the semantics required by screenreaders to tell their users what is going on. Sometimes this isn't possible, either because you have limited control over the code, or because you are creating something complex that doesn't have an easy HTML element to implement it. In such cases, WAI-ARIA can be a valuable accessibility enhancing tool.

But again, only use it when necessary!

> **Note :** Also, try to make sure you test your site with a variety of _real_ users — non-disabled people, people using screenreaders, people using keyboard navigation, etc. They will have better insights than you about how well it works.

## Practical WAI-ARIA implementations

In the next section we'll look at the four areas in more detail, along with practical examples. Before you continue, you should get a screenreader testing setup put in place, so you can test some of the examples as you go through.

See our section on [testing screenreaders](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders) for more information.

### Signposts/Landmarks

WAI-ARIA adds the [`role` attribute](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) to browsers, which allows you to add extra semantic value to elements on your site wherever they are needed. The first major area in which this is useful is providing information for screenreaders so that their users can find common page elements. Let's look at an example — our [website-no-roles](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-no-roles) example ([see it live](http://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)) has the following structure:

```html
<header>
  <h1>...</h1>
  <nav>
    <ul>
      ...
    </ul>
    <form>
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article>...</article>
  <aside>...</aside>
</main>

<footer>...</footer>
```

If you try testing the example with a screenreader in a modern browser, you'll already get some useful information. For example, VoiceOver gives you the following:

- On the `<header>` element — "banner, 2 items" (it contains a heading and the `<nav>`).
- On the `<nav>` element — "navigation 2 items" (it contains a list and a form).
- On the `<main>` element — "main 2 items" (it contains an article and an aside).
- On the `<aside>` element — "complementary 2 items" (it contains a heading and a list).
- On the search form input — "Search query, insertion at beginning of text".
- On the `<footer>` element — "footer 1 item".

If you go to VoiceOver's landmarks menu (accessed using VoiceOver key + U and then using the cursor keys to cycle through the menu choices), you'll see that most of the elements are nicely listed so they can be accessed quickly.

![](landmarks-list.png)

However, we could do better here. the search form is a really important landmark that people will want to find, but it is not listed in the landmarks menu or treated like a notable landmark, beyond the actual input being called out as a search input (`<input type="search">`). In addition, some older browsers (most notably IE8) don't recognise the semantics of the HTML5 elements.

Let's improve it by the use of some ARIA features. first, we'll add some role attributes to our HTML structure. You can try taking a copy of our original files (see [index.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/website-no-roles/index.html) and [style.css](https://github.com/mdn/learning-area/blob/master/accessibility/aria/website-no-roles/style.css)), or navigating to our [website-aria-roles](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles) example ([see it live](http://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)), which has a structure like this:

```html
<header>
  <h1>...</h1>
  <nav role="navigation">
    <ul>
      ...
    </ul>
    <form role="search">
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article role="article">...</article>
  <aside role="complementary">...</aside>
</main>

<footer>...</footer>
```

We've also given you a bonus feature in this example — the {{htmlelement("input")}} element has been given the attribute [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label), which gives it a descriptive label to be read out by a screenreader, even though we haven't included a {{htmlelement("label")}} element. In cases like these, this is very useful — a search form like this one is a very common, easily recognised feature, and adding a visual label would spoil the page design.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Now if we use VoiceOver to look at this example, we get some improvements:

- The search form is called out as a separate item, both when browsing through the page, and in the Landmarks menu.
- The label text contained in the `aria-label` attribute is read out when the form input is highlighted.

Beyond this, the site is more likely to be accessible to users of older browsers such as IE8; it is worth including ARIA roles for that purpose. And if for some reason your site is built using just `<div>`s, you should definitely include the ARIA roles to provide these much needed semantics!

The improved semantics of the search form have shown what is made possible when ARIA goes beyond the semantics available in HTML5. You'll see a lot more about these semantics and the power of ARIA properties/attributes below, especially in the [Accessibility of non-semantic controls](#accessibility_of_non-semantic_controls) section. For now though, let's look at how ARIA can help with dynamic content updates.

### Dynamic content updates

Content loaded into the DOM can be easily accessed using a screenreader, from textual content to alternative text attached to images. Traditional static websites with largely text content are therefore easy to make accessible for people with visual impairments.

The problem is that modern web apps are often not just static text — they tend to have a lot of dynamically updating content, i.e. content that updates without the entire page reloading via a mechanism like [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest), [Fetch](/fr/docs/Web/API/Fetch_API), or [DOM APIs](/fr/docs/Web/API/Document_Object_Model). These are sometimes referred to as **live regions**.

Let's look at a quick example — see [aria-no-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-no-live.html) (also [see it running live](http://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). In this example we have a simple random quote box:

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Our JavaScript loads a JSON file via [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) containing a series of random quotes and their authors. Once that is done, we start up a [`setInterval()`](/fr/docs/Web/API/WindowTimers/setInterval) loop that loads a new random quote into the quote box every 10 seconds:

```js
var intervalID = window.setInterval(showQuote, 10000);
```

This works OK, but it is not good for accessibility — the content update is not detected by screenreaders, so their users would not know what is going on. This is a fairly trivial example, but just imagine if you were creating a complex UI with lots of constantly updating content, like a chat room, or a strategy game UI, or a live updating shopping cart display — it would be impossible to use the app in any effective way without some kind of way of alerting the user to the updates.

WAI-ARIA fortunately provides a useful mechanism to provide these alerts — the [`aria-live`](https://www.w3.org/TR/wai-aria-1.1/#aria-live) property. Applying this to an element causes screenreaders to read out the content that is updated. How urgently the content is read out depends on the attribute value:

- `off:` The default. Updates should not be announced.
- `polite`: Updates should be announced only if the user is idle.
- `assertive`: Updates should be announced to the user as soon as possible.

We'd like you to take a copy of [aria-no-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-no-live.html) and [quotes.json](https://github.com/mdn/learning-area/blob/master/accessibility/aria/quotes.json), and update your `<section>` tag as follows:

```html
<section aria-live="assertive"></section>
```

This will cause a screenreader to read out the content as it is updated.

> **Note :** Most browsers will throw a security exception if you try to do an `XMLHttpRequest` call from a `file://` URL, e.g. if you just load the file by loading it directly into the browser (via double clicking, etc.). To get it to run, you will need to upload it to a web server, for example [using GitHub](/fr/docs/Learn/Common_questions/Using_Github_pages), or a local web server like [Python's SimpleHTTPServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/).

There is an additional consideration here — only the bit of text that updates is read out. It might be nice if we always read out the heading too, so the user can remember what is being read out. To do this, we can add the [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) property to the section. Update your `<section>` tag again, like so:

```html
<section aria-live="assertive" aria-atomic="true"></section>
```

The `aria-atomic="true"` attribute tells screenreaders to read out the entire element contents as one atomic unit, not just the bits that were updated.

> **Note :** You can see the finished example at [aria-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-live.html) ([see it running live](http://mdn.github.io/learning-area/accessibility/aria/aria-live.html)).

> **Note :** The [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) property is also quite useful for controlling what gets read out when a live region is updated. You can for example only get content additions or removals read out.

### Enhancing keyboard accessibility

As discussed in a few other places in the module, one of the key strengths of HTML with respect to accessibility is the built-in keyboard accessibility of features such as buttons, form controls, and links. Generally, you are able to use the tab key to move between controls, the Enter/Return key to select or activate controls, and occasionally other controls as needed (for example the up and down cursor to move between options in a `<select>` box).

However, sometimes you will end up having to write code that either uses non-semantic elements as buttons (or other types of control), or uses focusable controls for not quite the right purpose. You might be trying to fix some bad code you've inherited, or you might be building some kind of complex widget that requires it.

In terms of making non-focusable code focusable, WAI-ARIA extends the `tabindex` attribute with some new values:

- `tabindex="0"` — as indicated above, this value allows elements that are not normally tabbable to become tabbable. This is the most useful value of `tabindex`.
- `tabindex="-1"` — this allows not normally tabbable elements to receive focus programmatically, e.g. via JavaScript, or as the target of links.

We discussed this in more detail and showed a typical implementation back in our HTML accessibility article — see [Building keyboard accessibility back in](/fr/docs/Learn/Accessibility/HTML#Building_keyboard_accessibility_back_in).

### Accessibility of non-semantic controls

This follows on from the previous section — when a series of nested `<div>`s along with CSS/JavaScript is used to create a complex UI-feature, or a native control is greatly enhanced/changed via JavaScript, not only can keyboard accessibility suffer, but screenreader users will find it difficult to work out what the feature does if there are no semantics or other clues. In such situations, ARIA can help to provide those missing semantics.

#### Form validation and error alerts

First of all, let's revisit the form example we first looked at in our CSS and JavaScript accessibility article (read [Keeping it unobtrusive](/fr/docs/Learn/Accessibility/CSS_and_JavaScript#Keeping_it_unobtrusive) for a full recap). At the end of this section we showed that we have included some ARIA attributes on the error message box that appears when there are validation errors when you try to submit the form:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](https://www.w3.org/TR/wai-aria-1.1/#alert) automatically turns the element it is applied to into a live region, so changes to it are read out; it also semantically identifies it as an alert message (important time/context sensitive information), and represents a better, more accessible way of delivering an alert to a user (modal dialogs like [`alert()`](/fr/docs/Web/API/Window/alert) calls have a number of accessibility problems; see [Popup Windows](http://webaim.org/techniques/javascript/other#popups) by WebAIM).
- An [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) value of `all` instructs the screenreader to read out the contents of the error list when any changes are made to it — i.e. when errors are added or removed. This is useful because the user will want to know what errors are left, not just what has been added or removed from the list.

We could go further with our ARIA usage, and provide some more validation help. How about indicating whether fields are required in the first place, and what range the age should be?

1. At this point, take a copy of our [form-validation.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-validation.html) and [validation.js](https://github.com/mdn/learning-area/blob/master/accessibility/css/validation.js) files, and save them in a local directory.
2. Open them both in a text editor and have a look at how the code works.
3. First of all, add a paragraph just above the opening `<form>` tag, like the one below, and mark both the form `<label>`s with an asterisk. This is normally how we mark required fields for sighted users.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. This makes visual sense, but it isn't as easy to understand for screenreader users. Fortunately, WAI-ARIA provides the [`aria-required`](https://www.w3.org/TR/wai-aria-1.1/#aria-required) attribute to give screenreaders hints that they should tell users that form inputs need to be filled in. Update the `<input>` elements like so:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. If you save the example now and test it with a screenreader, you should hear something like "Enter your name star, required, edit text".
6. It might also be useful if we give screenreader users and sighted users an idea of what the age value should be. This is often presented as a tooltip, or placeholder inside the form field perhaps. WAI-ARIA does include [`aria-valuemin`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin) and [`aria-valuemax`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax) properties to specify min and max values, but these currently don't seem very well supported; a better supported feature is the HTML5 `placeholder` attribute, which can contain a message that is shown in the input when no value is entered, and is read out by a number of screenreaders. Update your number input like this:

   ```html
   <input
     type="number"
     name="age"
     id="age"
     placeholder="Enter 1 to 150"
     aria-required="true" />
   ```

> **Note :** You can see the finished example live at [form-validation-updated.html](http://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html).

WAI-ARIA also enables some advanced form labelling techniques, beyond the classic {{htmlelement("label")}} element. We already talked about using the [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) property to provide a label where we don't want the label to be visible to sighted users (see the [Signposts/Landmarks](#signposts/landmarks) section, above). There are some other labelling techniques that use other properties such as [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby) if you want to designate a non-`<label>` element as a label or label multiple form inputs with the same label, and [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby), if you want to associate other information with a form input and have it read out as well. See [WebAIM's Advanced Form Labeling article](http://webaim.org/techniques/forms/advanced) for more details.

There are many other useful properties and states too, for indicating the status of form elements. For example, `aria-disabled="true"` can be used to indicate that a form field is disabled. Many browsers will just skip past disabled form fields, and they won't even be read out by screenreaders, but in some cases they will be perceived, so it is a good idea to include this attribute to let the screenreader know that a disabled input is in fact disabled.

If the disabled state of an input is likely to change, then it is also a good idea to indicate when it happens, and what the result is. For example, in our [form-validation-checkbox-disabled.html](http://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) demo there is a checkbox that when checked, enables another form input to allow further information be entered. We've set up a hidden live region:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

which is hidden from view using absolute positioning. When this is checked/unchecked, we update the text inside the hidden live region to tell screenreader users what the result of checking this checkbox is, as well as updating the `aria-disabled` state, and some visual indicators too:

```js
function toggleMusician(bool) {
  var instruItem = formItems[formItems.length - 1];
  if (bool) {
    instruItem.input.disabled = false;
    instruItem.label.style.color = "#000";
    instruItem.input.setAttribute("aria-disabled", "false");
    hiddenAlert.textContent =
      "Instruments played field now enabled; use it to tell us what you play.";
  } else {
    instruItem.input.disabled = true;
    instruItem.label.style.color = "#999";
    instruItem.input.setAttribute("aria-disabled", "true");
    instruItem.input.removeAttribute("aria-label");
    hiddenAlert.textContent = "Instruments played field now disabled.";
  }
}
```

#### Describing non-semantic buttons as buttons

A few times in this course already, we've mentioned the native accessibilty of (and the accessibility issues behind using other elements to fake) buttons, links, or form elements (see [UI controls](/fr/docs/Learn/Accessibility/HTML#UI_controls) in the HTML accessibility article, and [Enhancing keyboard accessibility](#enhancing_keyboard_accessibility), above). Basically, you can add keyboard accessibility back in without too much trouble in many cases, using `tabindex` and a bit of JavaScript.

But what about screenreaders? They still won't see the elements as buttons. If we test our [fake-div-buttons.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) example in a screenreader, our fake buttons will be reported using phrases like "Click me!, group", which is obviously confusing.

We can fix this using a WAI-ARIA role. Make a local copy of [fake-div-buttons.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html), and add [`role="button"`](https://www.w3.org/TR/wai-aria-1.1/#button) to each button `<div>`, for example:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Now when you try this using a screenreader, you'll have buttons be reported using phrases like "Click me!, button" — much better.

> **Note :** Don't forget however that using the correct semantic element where possible is always better. If you want to create a button, and can use a {{htmlelement("button")}} element, you should use a {{htmlelement("button")}} element!

#### Guiding users through complex widgets

There are a whole host of other [roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) that can identify non-semantic element structures as common UI features that go beyond what's available in standard HTML, for example [`combobox`](https://www.w3.org/TR/wai-aria-1.1/#combobox), [`slider`](https://www.w3.org/TR/wai-aria-1.1/#slider), [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel), [`tree`](https://www.w3.org/TR/wai-aria-1.1/#tree). You can see a number of userful examples in the [Deque university code library](https://dequeuniversity.com/library/), to give you an idea of how such controls can be made accessible.

Let's go through an example of our own. We'll return to our simple absolutely-positioned tabbed interface (see [Hiding things](/fr/docs/Learn/Accessibility/CSS_and_JavaScript#Hiding_things) in our CSS and JavaScript accessibility article), which you can find at [Tabbed info box example](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) (see [source code](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)).

This example as-is works fine in terms of keyboard accessibility — you can happily tab between the different tabs and select them to show the tab contents. It is also fairly accessible too — you can scroll through the content and use the headings to navigate , even if you can't see what is happening on screen. It is however not that obvious what the content is — a screenreader currently reports the content as a list of links, and some content with three headings. It doesn't give you any idea of what the relationship is between the content. Giving the user more clues as to the structure of the content is always good.

To improve things, we've created a new version of the example called [aria-tabbed-info-box.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-tabbed-info-box.html) ([see it running live](http://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). We've updated the structure of the tabbed interface like so:

```html
<ul role="tablist">
  <li
    class="active"
    role="tab"
    aria-selected="true"
    aria-setsize="3"
    aria-posinset="1"
    tabindex="0">
    Tab 1
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="2"
    tabindex="0">
    Tab 2
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="3"
    tabindex="0">
    Tab 3
  </li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">...</article>
  <article role="tabpanel" aria-hidden="true">...</article>
</div>
```

> **Note :** The most striking change here is that we've removed the links that were originally present in the example, and just used the list items as the tabs — this was done because it makes things less confusing for screenreader users (the links don't really take you anywhere; they just change the view), and it allows the setsize/position in set features to work better — when these were put on the links, the browser kept reporting "1 of 1" all the time, not "1 of 3", "2 of 3", etc.

The new features are as follows:

- New roles — [`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist), [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab), [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) — these identify the important areas of the tabbed interface — the container for the tabs, the tabs themselves, and the corresponding tabpanels.
- [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) — Defines which tab is currently selected. As different tabs are selected by the user, the value of this attribute on the different tabs is updated via JavaScript.
- [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) — Hides an element from being read out by a screenreader. As different tabs are selected by the user, the value of this attribute on the different tabs is updated via JavaScript.
- `tabindex="0"` — As we've removed the links, we need to give the list items this attribute to provide it with keyboard focus.
- [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize) — This property allows you to specify to screenreaders that an element is part of a series, and how many items the series has.
- [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset) — This property allows you to specify what position in a series an element is in. Along with `aria-setsize`, it provides a screenreader with enough information to tell you that you are currently on item "1 of 3", etc. In many cases, browsers should be able to infer this information from the element hierarchy, but it certainly helps to provide more clues.

In our tests, this new structure did serve to improve things overall. The tabs are now recognised as tabs (e.g. "tab" is spoken by the screenreader), the selected tab is indicated by "selected" being read out with the tab name, and the screenreader also tells you which tab number you are currently on. In addition, because of the `aria-hidden` settings (only the non-hidden tab ever has `aria-hidden="false"` set), the non-hidden content is the only one you can navigate down to, meaning the selected content is easier to find.

> **Note :** If there is anything you explicitly don't want screen readers to read out, you can give them the `aria-hidden="true"` attribute.

## Summary

This article has by no means covered all that's available in WAI-ARIA, but it should have given you enough information to understand how to use it, and know some of the most common patterns you will encounter that require it.

## Voir aussi

- [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — ARIA roles reference.
- [Definitions of States and Properties (all aria-\* attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) — properties and states reference.
- [Deque university code library](https://dequeuniversity.com/library/) — a library of really useful practical examples showing complex UI controls made accessible using WAI-ARIA features.
- [WAI-ARIA Authoring Practices](http://w3c.github.io/aria-practices/) — very detailed design patterns from the W3C, explaining how to implement different types of complex UI control whilst making them accessible using WAI-ARIA features.
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) — A W3C spec that defines, for each HTML feature, what accessibility (ARIA) semantics that feature implicitly has set on it by the browser, and what WAI-ARIA features you may set on it if extra semantics are required.

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
