---
title: Macros
slug: conflicting/MDN/Writing_guidelines/Page_structures_978c99f4f82eae196d51ce675e5181c7
---

{{MDNSidebar}}

The [Kuma](/pt-BR/docs/Project:MDN/Kuma) platform on which MDN runs provides a powerful macro system, [KumaScript](/pt-BR/docs/MDN/Contribute/Tools/KumaScript "/pt-BR/docs/Project:MDN/Kuma/KumaScript_guide"), which makes it possible to do a wide variety of things automatically. This article provides information on how to invoke MDN's macros within articles.

The [KumaScript guide](/pt-BR/docs/MDN/Contribute/Tools/KumaScript "/pt-BR/docs/Project:MDN/Kuma/KumaScript_guide") provides an in-depth look at how to use macros on MDN, so this section is more of a brief overview.

## Como as macros são implementadas

Macros on MDN are implemented using server-executed [JavaScript](/pt-BR/docs/Web/JavaScript) code, interpreted using [Node.js](https://nodejs.org/en/). On top of that we have a number of libraries we've implemented that provide wiki-oriented services and features to let macros interact with the wiki platform and its contents. If you're interested in learning more, see the [KumaScript guide](/pt-BR/docs/MDN/Contribute/Tools/KumaScript "/pt-BR/docs/Project:MDN/Kuma/KumaScript_guide").

## Using a macro in content

To actually use a macro, you simply enclose the call to the macro in a pair of double-braces, with its parameters, if any, enclosed in parentheses; that is:

```
\{{macroname(parameter-list)}}
```

A few notes about macro calls:

- Macro names are case-sensitive, but some attempt is made to correct for common capitalization errors; you may use all lowercase even if the macro name uses caps within it, and you may capitalize a macro whose name normally starts with a lower-case letter.
- Parameters are separated by commas.
- If there are no parameters, you may leave out the parentheses entirely; `\{{macroname()}}` and `\{{macroname}}` are identical.
- Numeric parameters can be in quotes, or not. It's up to you (however, if you have a version number with multiple decimals in it, it needs to be in quotes).
- If you get errors, review your code carefully. If you still can't figure out what's going on, see [Troubleshooting KumaScript errors](/pt-BR/docs/MDN/Kuma/Troubleshooting_KumaScript_errors) for help.

Macros are heavily cached; for any set of input values (both parameters and environmental values such as the URL for which the macro was run), the results are stored and reused. This means that the macro is only actually run when the inputs change.

> **Nota:** You can force all the macros on a page to be re-evaluated by force-refreshing the page in your browser (that is, a shift-reload).

Macros can be as simple as just inserting a larger block of text or swapping in contents from another part of MDN, or as complex as building an entire index of content by searching through parts of the site, styling the output, and adding links.

You can read up on our most commonly-used macros on the [Commonly-used macros](/pt-BR/docs/MDN/Contribute/Structures/Macros/Commonly-used_macros "/pt-BR/docs/Project:MDN/Contributing/Custom_macros") page; also, there's a [complete list of all macros](/pt-BR/docs/templates) here. Most macros have documentation built into them, as comments at the top.
