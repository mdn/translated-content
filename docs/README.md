# General guidelines for MDN translated content

In this README you can find a collection of general guidelines for translating
MDN content, which apply to every locale.

For guidelines relating to specific locales, we have locale-specific docs in
subdirectories:

- [Russian translation guide / Участие в переводе](ru/translation-guide.md)
- [Simplified Chinese Guide / 简体中文翻译指南](zh-cn/translation-guide.md)
- [Traditional Chinese Guide / 正體中文翻譯指南](zh-tw/translation-guide.md)

If you want to add a guide to document some specific guidelines for your locale
and it does not already appear here, you are welcome to add one, or
[talk to the locale teams](https://github.com/mdn/translated-content/blob/docs-readme/README.md)
about it. Similarly, if you can think of a good general guideline that you'd
like to add here, feel free to create an issue to talk about it.

## Translating heading IDs

Our article headings are nearly always given IDs, so that we can automatically
generate in-article navigation, identify code blocks to create live samples,
and other reasons too. When translating headings, you don't need to translate
the ID too; the rest of the slug is not translated, so this keeps it all
consistent.

For example:

```html
<h2 id="tutorials">Tutorials</h2>
```

in the `fr` locale would be

```html
<h2 id="tutorials">Tutoriels</h2>
```

We generally advise that you write all IDs in lower-case. The platform
automatically converts them at render time anyway, but keeping them lower-case
means that there is less chance of a manually-created anchor link not working
because of the conversion.

## Translating code blocks

When translating code blocks, it is fine to translate comments, strings,
variable names, and output representations.

However, don't translate actual code terms such as syntax. The example needs
to still work after you are finished with it.

Also, when considering translating examples, bear in mind that some examples
will link to a live version or source code on a separate repo. You might also
want to consider creating a translated version of the external code examples
to link to from your translated page.

## Line breaks in HTML source

In some of the article source code, you may find line breaks in the block-level
elements that aren't strictly necessary, for example:

```html
<p>The
  <code><strong>HTMLCanvasElement</strong></code><strong><code>.transferControlToOffscreen()</code></strong>
  method transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main
  thread or on a worker.</p>

<pre
  class="brush: js">OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()</pre>
```

Generally we don't use line breaks like this in our source code, so you are
free to remove them if you want to, and don't add them in when creating new
translations. However, don't spend too much time trying to remove these, as
they don't make any difference to the final rendered result.
