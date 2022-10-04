---
title: KumaScript
slug: MDN/Tools/KumaScript
tags:
  - Guide
  - Kuma
  - KumaScript
  - MDN Meta
  - NeedsContent
  - NeedsTranslation
  - Site-wide
  - Tools
  - TopicStub
translation_of: MDN/Tools/KumaScript
---
{{MDNSidebar}}

## Overview

On the [Kuma](/pt-BR/docs/MDN/Kuma) platform that powers MDN, the template system for automating aspects of content on the wiki is called [KumaScript](https://github.com/mdn/kumascript). KumaScript is powered by server-side JavaScript, implemented using [Node.js](https://nodejs.org/en/). This article provides basic information on how to use KumaScript.

For a detailed overview and Q\&A of KumaScript, watch the MDN dev team's [KumaScript Fireside Chat](https://vreplay.mozilla.com/replay/showRecordDetails.html?sortBy=date&viewCount=1&currentPage=1&groupBy=combo&roomFilter=&usernameFilter=&searchFilter=&usernameFullFilter=&myManager=-1&adminManager=0&webCast=0&command=&recId=1082&auxMessage=&auxMessage1=&lang=en&langChanged=&tenantFilter=&securityTab=) (the meeting starts at 10 minutes into the video). KumaScript replaced DekiScript, which was the template language for MindTouch, the previous platform used by MDN.

### What is KumaScript?

- A way to reuse and localize content that appears repeatedly between documents (e.g., compatibility labels, section navigation, warning banners).
- A way to build documents out of content pulled from other documents.
- A way to fetch and include content from other web sites and services (e.g., Bugzilla).

### What KumaScript is not

- KumaScript does not support interactive scripting of the kind that can accept form submissions.
- KumaScript does not have access to a database, files, or any other way to store information persistently.
- KumaScript does not support site personalization based on the user currently logged in.
- KumaScript does not have access to user information, only to the content and metadata of a wiki page being viewed.

## Basics

KumaScript is used on MDN in [embedded JavaScript templates](https://github.com/visionmedia/ejs). These templates can be invoked in document content by any MDN author, through the use of macros.

A script in KumaScript is a _template_, and each template is a file in [the macros directory of the KumaScript repository](https://github.com/mdn/kumascript/tree/master/macros) on Github. A [template](https://github.com/mdn/kumascript/blob/master/macros/hello.ejs) looks like this:

```
<% for (var i = 0; i < $0; i++) { %>
Hello #<%= i %>
<% } %>
```

Invoking a template is done with a _macro_, which can be used anywhere in any wiki content. A macro looks like this:

```
\{{ hello("3") }}
```

The output of the macro looks like this:

```
Hello #0
Hello #1
Hello #2
```

### Macro syntax

KumaScript templates are invoked in document content with macros, like this:

```
\{{ templateName("arg0", "arg1", ..., "argN") }}
```

Macro syntax consists of these rules:

- Macros start and end with `\{{</code> and <code>\}}` characters.
- The first part of the macro is the name of a template. The lowercase value of this name should match the lowercase value of one of the filenames under [the macros directory of KumaScript](https://github.com/mdn/kumascript/tree/master/macros).
- A template can accept parameters, and this parameter list starts and ends with parentheses.
- All non-numeric parameters must be in quotes. Numbers can be left unquoted.

#### Using JSON as a macro parameter

As a semi-experimental feature (not guaranteed to work), you can supply a JSON object for the first and only parameter, like so:

```
\{{ templateName({ "Alpha":"one", "Beta":["a","b","c"], "Foo":"http:\/\/mozilla.org\/" }) }}
```

The data from this macro is available in template code as an object in the `$0` argument (e.g., `$0.Alpha`, `$0.Beta`, `$0.Foo`). This also allows you to express complex data structures in macro parameters that are hard or impossible to do with a simple list of parameters.

Note that this parameter style is very picky — it must adhere to [JSON syntax](http://json.org/) exactly, which has some requirements about escaping characters that are easy to miss (e.g., all forward slashes are escaped). When in doubt, [try running your JSON through a validator](http://jsonlint.com/).

#### How to write "\\{{" in text</h4>

<p>Since the character sequence "<code>\{{</code>" is used to indicate the start of a macro, this can be troublesome if you actually just want to use "<code>\{{</code>" and "<code>}}" in a page. It will probably produce `DocumentParsingError` messages.In this case, you can escape the first brace with a backslash, like so: `\\{`

### Template syntax

Each KumaScript template is a file under [the macros directory of KumaScript](https://github.com/mdn/kumascript/tree/master/macros). You create and edit these files as you would the files of any open-source project on GitHub (see [the KumaScript README](https://github.com/mdn/kumascript) for more information).

KumaScript templates are processed by an [embedded JavaScript template engine](https://github.com/visionmedia/ejs) with a few simple rules:

- Within a template, the parameters passed in from the macro are available as the variables `$0`, `$1`, `$2`, and so on. The entire list of parameters is also available in a template as the variable `arguments`.
- Most text is treated as output and included in the output stream.
- JavaScript variables and expressions can be inserted into the output stream with these blocks:

  - `<%= expr %>` — the value of a JavaScript expression is escaped for HTML before being included in output (e.g., characters like `<` and `>` are turned into `&lt;` and `&gt;`).
  - `<%- expr %>` — the value of a JavaScript expression is included in output without any escaping. (Use this if you want to dynamically build markup or use the results of another template that may include markup.)
  - It is an error to include semicolons inside these blocks.

- Anything inside a `<% %>` block is interpreted as JavaScript. This can include loops, conditionals, etc.
- Nothing inside a `<% %>` block can ever contribute to the output stream. But, you can transition from JS mode to output mode using `<% %>`—for example:

  ```
  <% for (var i = 0; i < $0; i++) { %>
  Hello #<%= i %>
  <% } %>
  ```

  Note how the JavaScript code is contained in `<% ... %>`, and output happens in the space between `%> ... <%`. The `for` loop in JS can begin with one `<% %>` block, transition to output mode, and finish up in a second `<% %>` JS block.

- For more details on EJS syntax, [check out the upstream module documentation](https://github.com/visionmedia/ejs).

### Tips

You can see a list of macros and how they are used on MDN on the [macros dashboard](/en-US/dashboards/macros).

## Advanced Features

Beyond the basics, the KumaScript system offers some advanced features.

### Environment variables

When the wiki makes a call to the KumaScript service, it passes along some context on the current document that KumaScript makes available to templates as variables:

- `env.path`
  - : The path to the current wiki document
- `env.url`
  - : The full URL to the current wiki document
- `env.id`
  - : A short, unique ID for the current wiki document
- `env.files`
  - : An array of the files attached to the current wiki document; each object in the array is as described under [File objects](#file_objects) below
- `env.review_tags`
  - : An array of the review tags on the article ("technical", "editorial", etc.)
- `env.locale`
  - : The locale of the current wiki document
- `env.title`
  - : The title of the current wiki document
- `env.slug`
  - : The URL slug of the current wiki document
- `env.tags`
  - : An array list of tag names for the current wiki document
- `env.modified`
  - : Last modified timestamp for the current wiki document
- `env.cache_control`
  - : `Cache-Control` header sent in the request for the current wiki document, useful in deciding whether to invalidate caches

#### File objects

Each file object has the following fields:

- `title`
  - : The attachment's title
- `description`
  - : A textual description of the current revision of the file
- `filename`
  - : The file's name
- `size`
  - : The size of the file in bytes
- `author`
  - : The username of the person who uploaded the file
- `mime`
  - : The MIME type of the file
- `url`
  - : The URL at which the file can be found

#### Working with tag lists

The `env.tags` and `env.review_tags` variables return arrays of tags. You can work with these in many ways, of course, but here are a couple of suggestions.

##### Looking to see if a specific tag is set

You can look to see if a specific tag exists on a page like this:

```js
if (env.tags.indexOf("tag") != −1) {
  // The page has the tag "tag"
}
```

##### Iterating over all the tags on a page

You can also iterate over all the tags on a page, like this:

```js
env.tag.forEach(function(tag) {
  // do whatever you need to do, such as:
  if (tag.indexOf("a") == 0) {
    // this tag starts with "a" - woohoo!
  }
});
```

### APIs and Modules

KumaScript offers some built-in methods and APIs for KumaScript macros. Macros can also use `module.exports` to export new API methods.

API changes require updating the KumaScript engine or macros via a pull request to the [KumaScript repository](https://github.com/mdn/kumascript).

#### Built-in methods

This manually-maintained documentation is likely to fall out of date with the code. With that in mind, [you can always check out the latest state of built-in APIs in the KumaScript source](https://github.com/mdn/kumascript/blob/master/lib/kumascript/api.js#L175). But here is a selection of useful methods exposed to templates:

- `md5(string)`
  - : Returns an MD5 hex digest of the given string.
- `template("name", ["arg0", "arg1", ..., "argN"])`

  - : Executes and returns the result of the named template with the given list of parameters.

    Example: `<%- template("warning", ["foo", "bar", "baz"]) %>`.

    Example using the `domxref` macro: `<%- template("domxref", ["Event.bubbles", "bubbles"]) %>`.

    This is a JavaScript function. So, if one of the parameters is an arg variable like $2, do not put it in quotes. Like this: `<%- template("warning", [$1, $2, "baz"]) %>`. If you need to call another template from within a block of code, do not use `<%` ... `%>`. Example: `myvar = "<li>" + template("LXRSearch", ["ident", "i", $1]) + "</li>";`

- `require(name)`

  - : Loads another template as a module; any output is ignored. Anything assigned to `module.exports` in the template is returned.

    Used in templates like so: `<% var my_module = require('MyModule'); %>`.

- `cacheFn(key, timeout, function_to_cache)`
  - : Using the given key and cache entry lifetime, cache the results of the given function. Honors the value of `env.cache_control` to invalidate cache on `no-cache`, which can be sent by a logged-in user hitting shift-refresh.
- `request`
  - : Access to [`mikeal/request`](https://github.com/mikeal/request), a library for making HTTP requests. Using this module in KumaScript templates is not yet very friendly, so you may want to wrap usage in module APIs that simplify things.
- `log.debug(string)`
  - : Outputs a debug message into the script log on the page (i.e. the big red box that usually displays errors).

#### Built-in API modules

There's only one API built in at the moment, in the `kuma` namespace. You can see the most up to date list of methods under `kuma` from [the KumaScript source code](https://github.com/mdn/kumascript/blob/master/lib/kumascript/api.js#L74), but here are a few:

- `kuma.inspect(object)`
  - : Renders any JS object as a string, handy for use with `log.debug()`. See also: [node.js `util.inspect()`](http://nodejs.org/api/util.html#util_util_inspect_object_options).

<!---->

- `kuma.htmlEscape(string)`
  - : Escapes the characters `&, <, >, "` to `&amp, &lt;, &gt;, &quot;`, respectively.
- `kuma.url`
  - : See also: [node.js `url` module](http://nodejs.org/api/url.html).
- `kuma.fetchFeed(url)`
  - : Fetch an RSS feed and parse it into a JS object. See also: [`InsertFeedLinkList`](https://github.com/mdn/kumascript/blob/master/macros/InsertFeedLinkList.ejs)

#### Creating modules

Using the built-in `require()` method, you can load a template as a module to share common variables and methods between templates. A module can be defined in a template like this:

```
<%
module.exports = {
    add: function (a, b) {
        return a + b;
    }
}
%>
```

Assuming this template is saved under <https://github.com/mdn/kumascript/tree/master/macros> as `MathLib.ejs`, you can use it in another template like so:

```
<%
var math_lib = require("MathLib");
%>
The result of 2 + 2 = <%= math_lib.add(2, 2) %>
```

And, the output of this template will be:

```
The result of 2 + 2 = 4
```

#### Auto-loaded modules

There are a set of modules editable as wiki templates that are automatically loaded and made available to every template. This set is defined in the configuration file for the KumaScript service - any changes to this requires an IT bug to edit configuration and a restart of the service.

For the most part, these attempt to provide stand-ins for legacy DekiScript features to ease template migration. But, going forward, these can be used to share common variables and methods between templates:

- `mdn.*` - [MDN-Common](https://github.com/mdn/kumascript/blob/master/macros/MDN-Common.ejs)
- `Page.*` - [DekiScript-Page](https://github.com/mdn/kumascript/blob/master/macros/DekiScript-Page.ejs)
- `String.*` - [DekiScript-String](https://github.com/mdn/kumascript/blob/master/macros/DekiScript-String.ejs)
- `Uri.*` - [DekiScript-Uri](https://github.com/mdn/kumascript/blob/master/macros/DekiScript-Uri.ejs)
- `Web.*` - [DekiScript-Web](https://github.com/mdn/kumascript/blob/master/macros/DekiScript-Web.ejs)
- `Wiki.*` - [DekiScript-Wiki](https://github.com/mdn/kumascript/blob/master/macros/DekiScript-Wiki.ejs)

**Note:** You might notice that the DekiScript modules use a built-in method named `buildAPI()`, like so:

```
<% module.exports = buildAPI({
    StartsWith: function (str, sub_str) {
        return (''+str).indexOf(sub_str) === 0;
    }
}); %>
```

The reason for this is because DekiScript is case-insensitive when it comes to references to API methods, whereas JavaScript is strict about uppercase and lowercase in references. So, `buildAPI()` is a hack to try to cover common case variations in DekiScript calls found in legacy templates.

> **Nota:** With that in mind, please do not use `buildAPI()` in new modules.

## Tips and caveats

### Debugging

A useful tip when debugging. You can use the `log.debug()` method to output text to the scripting messages area at the top of the page that's running your template. Note that you need to be really sure to remove these when you're done debugging, as they're visible to all users! To use it, just do something like this:

```
<%- log.debug("Some text goes here"); %>
```

You can, of course, create more complex output using script code if it's helpful.

### Caching

KumaScript templates are heavily cached to improve performance. For the most part, this works great to serve up content that doesn't change very often. But, as a logged-in user, you have two options to force a page to be regenerated, in case you notice issues with scripting:

- Hit Refresh in your browser. This causes KumaScript to invalidate its cache for the content on the current page by issuing a request with a `Cache-Control: max-age=0` header.
- Hit Shift-Refresh in your browser. This causes KumaScript to invalidate cache for the current page, as well as for any templates or content used by the current page by issuing a request with a `Cache-Control: no-cache` header.

### Using search keywords to open template pages

When using templates, it's common to open the template's code in a browser window to review the comments at the top, which are used to document the template, its parameters, and how to use it properly. To quickly access templates, you can create a Firefox [search keyword](http://kb.mozillazine.org/Using_keyword_searches), which gives you a shortcut you can type in the URL box to get to a template more easily.

To create a search keyword, open the bookmarks window by choosing "Show all bookmarks" in the Bookmarks menu, or by pressing <kbd>Control</kbd>-<kbd>Shift</kbd>-<kbd>B</kbd> (<kbd>Command</kbd>-<kbd>Shift</kbd>-<kbd>B</kbd> on Mac). Then from the utility ("Gear") menu in the Library window that appears, choose "New Bookmark...".

This causes the bookmark editing dialog to appear. Fill that out as follows:

- Name
  - : A suitable name for your search keyword; "Open MDN Template" is a good one.
- Location

  - :&#x20;

    <https://github.com/mdn/kumascript/blob/master/macros/%s>

- Tags {{optional_inline}}
  - : A list of tags used to organize your bookmarks; these are entirely optional and what (if any) tags you use is up to you.
- Keyword
  - : The shortcut text you wish to use to access the template. Ideally, this should be something short and quick to type, such as simply "t" or "mdnt".
- Description {{optional_inline}}
  - : A suitable description explaining what the search keyword does.

The resulting dialog looks something like this:

![](https://mdn.mozillademos.org/files/14432/Screen%20Shot%202016-11-28%20at%203.08.39%20PM.png)

Then click the "Add" button to save your new search keyword. From then on, typing your keyword, then a space, then the name of a macro will open that macro in your current tab. So if you used "t" as the keyword, typing <kbd>t ListSubpages</kbd> will show you the page at {{TemplateLink("ListSubpages")}}.

## Cookbook

This section will list examples of common patterns for templates used on MDN, including samples of legacy DekiScript templates and their new KumaScript equivalents.

### Force templates used on a page to be reloaded

It bears repeating: To force templates used on a page to be reloaded after editing, hit Shift-Reload. Just using Reload by itself will cause the page contents to be regenerated, but using cached templates and included content. A Shift-Reload is necessary to invalidate caches beyond just the content of the page itself.

### Recovering from "Unknown Error"

Sometimes, you'll see a scripting message like this when you load a page:

```
Kumascript service failed unexpectedly: <class 'httplib.BadStatusLine'>
```

This is probably a temporary failure of the KumaScript service. If you Refresh the page, the error may disappear. If that doesn't work, try a Shift-Refresh. If, after a few tries, the error persists - [file an IT bug](https://bugzilla.mozilla.org/enter_bug.cgi?product=mozilla.org&format=itrequest) for Mozilla Developer Network to ask for an investigation.

### Broken wiki.languages() macros

On some pages, you'll see a scripting error like this:

```
Syntax error at line 436, column 461: Expected valid JSON object as the parameter of the preceding macro but...
```

If you edit the page, you'll probably see a macro like this at the bottom of the page:

```
\{{ wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", ... }) }}
```

To fix the problem, just delete the macro. Or, replace the curly braces on either side with HTML comments `<!-- -->` to preserve the information, like so:

```
<!-- wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", ... }) -->
```

Because Kuma supports localization differently, these macros aren't actually needed any more. But, they've been left intact in case we need to revisit the relationships between localized pages. Unfortunately, it seems like migration has failed to convert some of them properly.

### Finding the Current Page's Language

In KumaScript, the locale of the current document is exposed as an environment variable:

```
var lang = env.locale;
```

The `env.locale` variable should be reliable and defined for every document.

### Reading the contents of a page attachment

You can read the contents of an attached file by using the `mdn.getFileContent()` function, like this:

```
<%
  var contents = mdn.getFileContent(fileUrl);
  ... do stuff with the contents ...
%>
```

or

```
<%-mdn.getFileContent(fileObject)%>
```

In other words, you may specify either the URL of the file to read or as a file object. The file objects for a page can be accessed through the array `env.files`. So, for example, to embed the contents of the first file attached to the article, you can do this:

```
<%-mdn.getFileContent(env.files[0])%>
```

> **Nota:** You probably don't want to try to embed the contents of a non-text file this way, as the raw contents would be injected as text. This is meant to let you access the contents of text attachments.

If the file isn't found, an empty string is returned. There is currently no way to tell the difference between an empty file and a nonexistent one. But if you're putting empty files on the wiki, you're doing it wrong.

### Localizing template content

Templates are not translated like wiki pages, rather any single template might be used for any number of locales.

So the main way to output content tailored to the current document locale is to pivot on the value of `env.locale`. There are many ways to do this, but a few patterns are common in the conversion of legacy DekiScript templates:

#### If/else blocks in KumaScript

The KumaScript equivalent of this can be achieved with simple if/else blocks, like so:

```
<% if ("fr" == env.locale) { %>
<%- template("CSSRef") %> « <a title="Référence_CSS/Extensions_Mozilla" href="/fr/docs/Référence_CSS/Extensions_Mozilla">Référence CSS:Extensions Mozilla</a>
<% } else if ("ja" == env.locale) { %>
<%- template("CSSRef") %> « <a title="CSS_Reference/Mozilla_Extensions" href="/ja/docs/CSS_Reference/Mozilla_Extensions">CSS リファレンス:Mozilla 拡張仕様</a>
<% } else if ("pl" == env.locale) { %>
<%- template("CSSRef") %> « <a title="Dokumentacja_CSS/Rozszerzenia_Mozilli" href="/pl/docs/Dokumentacja_CSS/Rozszerzenia_Mozilli">Dokumentacja CSS:Rozszerzenia Mozilli</a>
<% } else if ("de" == env.locale) { %>
<%- template("CSSRef") %> « <a title="CSS_Referenz/Mozilla_CSS_Erweiterungen" href="/de/docs/CSS_Referenz/Mozilla_CSS_Erweiterungen">CSS Referenz: Mozilla Erweiterungen</a>
<% } else { %>
<%- template("CSSRef") %> « <a title="CSS_Reference/Mozilla_Extensions" href="/en-US/docs/CSS_Reference/Mozilla_Extensions">CSS Reference:Mozilla Extensions</a>
<% } %>
```

Depending on what text editor is your favorite, you may be able to copy & paste from the browser-based editor and attack this pattern with a series of search/replace regexes to get you most of the way there.

My favorite editor is MacVim, and a series of regexes like this does the bulk of the work with just a little manual clean up following:

```
%s#<span#^M<span#g
%s#<span lang="\(.*\)" .*>#<% } else if ("\1" == env.locale) { %>#g
%s#<span class="script">template.Cssxref(#<%- template("Cssxref", [#
%s#)</span> </span>#]) %>
```

Your mileage may vary, and patterns change slightly from template to template. That's why the migration script was unable to just handle this automatically, after all.

#### String variables and switch

Rather than switch between full chunks of markup, you can define a set of strings, switch them based on locale, and then use them to fill in placeholders in a single chunk of markup:

```
<%
var s_title = 'Firefox for Developers';
switch (env.locale) {
    case 'de':
        s_title = "Firefox für Entwickler";
        break;
    case 'fr':
        s_title = "Firefox pour les développeurs";
        break;
    case 'es':
        s_title = "Firefox para desarrolladores";
        break;
};
%>
<span class="title"><%= s_title %></span>
```

#### Use `mdn.localString()`

A recent addition to the `MDN:Common` module is `mdn.localString()`, used like this:

```
<%
var s_title = mdn.localString({
  "en-US": "Firefox for Developers",
  "de": "Firefox für Entwickler",
  "es": "Firefox para desarrolladores"
});
%>
<span class="title"><%= s_title %></span>
```

This is more concise than the switch statement, and may be a better choice where a single string is concerned. However, if many strings need to be translated (e.g., as in [CSSRef](https://github.com/mdn/kumascript/blob/master/macros/CSSRef.ejs)), a switch statement might help keep all the strings grouped by locale and more easily translated that way.

When the object does not have the appropriate locale, the value of "en-US" is used as the initial value.

## See also

- [Getting started with Kuma](http://kuma.readthedocs.io/en/latest/)
- [KumaScript reference](https://github.com/mdn/kumascript)
- [Kuma wiki](https://wiki.mozilla.org/MDN/Kuma)
