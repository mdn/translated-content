---
title: "<kbd>: Элемент ввода с клавиатуры"
slug: Web/HTML/Element/kbd
---

**HTML-элемент ввода с клавиатуры** (**`<kbd>`**) указывает на то, что текст внутри элемента описывает пользовательский ввод с клавиатуры, голосовой ввод или ввод с использованием любого другого типа устройств ввода текста. По общему соглашению, {{Glossary("user agent")}} использует моноширинный шрифт для отображения содержимого элемента `<kbd>` по умолчанию, хотя это и не указывается HTML стандартом явно.

`<kbd>` можно использовать в различных комбинациях с {{HTMLElement("samp")}} (Sample Output) элементом для отображения различных форм ввода с клавиатуры или ввода, базирующегося на визуальных сигналах.

| [Content categories](/ru/docs/HTML/Content_categories) | [Flow content](/ru/docs/HTML/Content_categories#Flow_content), [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content), palpable content. |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                      | [Phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).                                                                                  |
| Tag omission                                           | {{no_tag_omission}}                                                                                                                                     |
| Permitted parents                                      | Any element that accepts [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).                                                         |
| Permitted ARIA roles                                   | Any                                                                                                                                                     |
| DOM interface                                          | {{domxref("HTMLElement")}}                                                                                                                              |

## Атрибуты

Этот элемент использует только [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

## Usage notes

Other elements can be used in tandem with `<kbd>` to represent more specific scenarios:

- Nesting a `<kbd>` element within another `<kbd>` element represents an actual key or other unit of input as a portion of a larger input. See [Representing keystrokes within an input](#representing_keystrokes_within_an_input) below.
- Nesting a `<kbd>` element inside a {{HTMLElement("samp")}} element represents input that has been echoed back to the user by the system. See [Echoed input](#echoed_input), below, for an example.
- Nesting a `<samp>` element inside a `<kbd>` element, on the other hand, represents input which is based on text presented by the system, such as the names of menus and menu items, or the names of buttons displayed on the screen. See the example under [Representing onscreen input options](#representing_onscreen_input_options) below.

> **Примечание:** You can define a custom style to override the browser's default font selection for the `<kbd>` element, although the user's preferences may potentially override your CSS.

## Examples

### Basic example

```html
<p>
  Use the command <kbd>help mycommand</kbd> to view documentation for the
  command "mycommand".
</p>
```

#### Result

{{ EmbedLiveSample('Basic_example', 350, 80) }}

### Representing keystrokes within an input

To describe an input comprised of multiple keystrokes, you can nest multiple `<kbd>` elements, with an outer `<kbd>` element representing the overall input and each individual keystroke or component of the input enclosed within its own `<kbd>`.

#### Unstyled

First, let's look at what this looks like as just plain HTML.

##### HTML

```html
<p>
  You can also create a new document using the keyboard shortcut
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd
  >.
</p>
```

This wraps the entire key sequence in an outer `<kbd>` element, then each individual key within its own, in order to denote the components of the sequence.

##### Result

The output looks like this without a style sheet applied:

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### With custom styles

We can make more sense of this by adding some CSS:

##### CSS

We add new new style for `<kbd>` elements, `"key"`, which we can apply when rendering keyboard keys:

```css
kbd.key {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

Then we update the HTML to use this class on the keys in the output to be presented:

```html
<p>
  You can also create a new document by pressing
  <kbd><kbd class="key">Ctrl</kbd>+<kbd class="key">N</kbd></kbd
  >.
</p>
```

##### Result

The result is just what we want!

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### Echoed input

Nesting a `<kbd>` element inside a {{HTMLElement("samp")}} element represents input that has been echoed back to the user by the system.

```html
<p>
  If a syntax error occurs, the tool will output the initial command you typed
  for your review:
</p>
<blockquote>
  <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
</blockquote>
```

The result looks like this:

{{EmbedLiveSample("Echoed_input", 650, 100)}}

### Representing onscreen input options

Nesting a `<samp>` element inside a `<kbd>` element represents input which is based on text presented by the system, such as the names of menus and menu items, or the names of buttons displayed on the screen.

For example, you can explain how to choose the "New Document" option in the "File" menu using HTML that looks like this:

```html
<p>
  To create a new file, choose the menu option
  <kbd
    ><kbd><samp>File</samp></kbd
    >⇒<kbd><samp>New Document</samp></kbd></kbd
  >.
</p>

<p>
  Don't forget to click the <kbd><samp>OK</samp></kbd> button to confirm once
  you've entered the name of the new file.
</p>
```

This does some interesting nesting. For the menu option description, the entire input is enclosed in a `<kbd>` element. Then, inside that, both the menu and menu item names are contained within both `<kbd>` and `<samp>`, indicating an input which is selected from a screen widget.

Similarly, the representation of the keyboard shortcut is done by enclosing the entire keyboard shortcut text inside `<kbd>`, but by also wrapping each key in its own `<kbd>` element.

You don't need to do all this wrapping; you can choose to simplify it by leaving out the external `<kbd>` element. In other words, simplifying this to just `<kbd>Ctrl</kbd>+<kbd>N</kbd>` would be perfectly valid.

Depending on your style sheet , though, you may find it useful to do this kind of nesting.

The output from this HTML looks like this:

{{EmbedLiveSample("Representing_onscreen_input_options", 650, 120)}}

## Specifications

| Specification                                                                         | Status                   | Comment                                                                         |
| ------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-kbd-element', '&lt;kbd&gt;')}}          | {{Spec2('HTML WHATWG')}} |                                                                                 |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-kbd-element', '&lt;kbd&gt;')}} | {{Spec2('HTML5 W3C')}}   | Expanded to include any user input, like voice input and individual keystrokes. |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;kbd&gt;')}}                   | {{Spec2('HTML4.01')}}    |                                                                                 |

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("code")}}

{{HTMLSidebar}}
