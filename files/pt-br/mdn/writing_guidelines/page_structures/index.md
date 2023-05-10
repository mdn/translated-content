---
title: Tabelas de compatibilidade
slug: MDN/Writing_guidelines/Page_structures
original_slug: MDN/Structures/Compatibility_tables
---

{{MDNSidebar}}

A MDN possui um formato padrão para tabelas de compatibilidade para nossa documentação da Web aberta; isto é, documentação de tecnologias como DOM, HTML, CSS, JavaScript, SVG etc., compartilhadas em todos os navegadores. Este artigo é um guia de "introdução" sobre como adicionar, manter o banco de dados a partir do qual as tabelas de compatibilidade são geradas e como integrar as tabelas em artigos.

Para obter uma documentação mais avançada, bem como as alterações mais recentes nos processos e esquemas JSON usados para representar os dados, consulte o [guia do colaborador](https://github.com/mdn/browser-compat-data/blob/master/docs/contributing.md) do repositório de dados e o [guia de diretrizes de dados](https://github.com/mdn/browser-compat-data/blob/master/docs/data-guidelines.md).

Se você tiver dúvidas ou descobrir problemas, compartilhe conosco no [fórum de discussão da MDN](https://discourse.mozilla-community.org/c/mdn).

## Como acessar o repositório de dados

Os dados são armazenados em um repositório do GitHub — consulte <https://github.com/mdn/browser-compat-data>. Para acessá-lo, você precisa obter uma conta do GitHub, bifurcar (fork) o repositório de dados compatível com o navegador em sua própria conta e, em seguida, clonar seu fork na sua máquina local.

## Preparando para adicionar os dados

Antes de adicionar dados novos, verifique que o _fork_ criado tenha o mesmo conteúdo que o repositório principal. Após isso, crie uma nova _branch,_ dentro do _fork_ criado, para conter as mudanças e adições a serem realizadas, em seguida, faça um _pull_ dessa branch no clone local, para então começar a contribuir com o projeto.

Uma forma simples para ter certeza que o seu _fork_ tem o mesmo conteúdo, e está tão atualizado quanto o repositório principal, é descrita abaixo:

### Adicionando o repositório principal browser-compat-data como um controle remoto

Vá para o clone local do seu fork no seu terminal/linha de comando e adicione um controle remoto apontando para o repositório principal (upstream) assim (você só precisa fazer isso uma vez):

```bash
git remote add upstream https://github.com/mdn/browser-compat-data.git
```

Se não tiver certeza se fez isso, verifique os controles remotos que seu repositório está usando

```bash
git remote -v
```

### Atualizando seu fork com o conteúdo do controle remoto

Agora, sempre que você quiser atualizar seu fork, você pode fazer isso:

1. Certificando-se de que você está no branch master:

    ```bash
    git checkout master
    ```

2. buscando o conteúdo atualizado do repositório usando:

    ```bash
    git fetch upstream
    ```

3. faça o rebase do seu conteúdo master com o conteúdo do repositório principal:

    ```bash
    git rebase upstream/master
    ```

4. faça o push dessas atualizações de volta ao seu fork remoto usando:

    ```bash
    git push -f
    ```

### Criando um novo branch (ramo) para fazer o seu trabalho

Em seguida, vá à sua bifurcação remota (será em `https://github.com/seu-nome-de-usuario/browser-compat-data`) e crie um novo ramo para guardar suas mudanças de adição de conteúdo. Isso pode ser feito em:

1. Clicando no botão "Branch: Master".
2. Colocando um novo nome de ramo dentro do campo de texto de "Encontre ou crie seu ramo...".
3. Clicando no botão "Criar ramo _nome-do-ramo_ a partir de Master".

Por exemplo, se você quisesse adicionar informações sobre WebVR API, você criaria um ramno chamado algo como "webvr".

### Mudando para o novo branch (ramo)

Agora,volte para o seu terminal/linha de comando, e atualize seu clone local da sua bifurcação para incluir o seu novo ramo usando o seguinte comando:

```bash
git pull
```

Agora troque para o seu ramo usando:

```bash
git checkout name-of-branch
```

Agora você deveria estar pronto para adicionar seu conteúdo!

## Adicionando os dados

To add the data, you need to create a new file or files to store your compat data in. The files you need to create differ, depending on what technology you are working on:

- HTML: One file per HTML element, contained in [browser-compat-data/html/elements](https://github.com/mdn/browser-compat-data/tree/master/html/elements). The file should be called the name of the element, all in lower case, e.g. `div.json`.
- CSS: One file per CSS property or selector, contained in the appropriate directory (see [browser-compat-data/css](https://github.com/mdn/browser-compat-data/tree/master/css)). The file should be called the name of the feature, all in lower case, e.g. `background-color.json`, or `hover.json`.
- JS: One file per JS object, contained in [browser-compat-data/javascript/builtins](https://github.com/mdn/browser-compat-data/tree/master/javascript/builtins). The file should be called the exact name of the object, with the casing preserved, e.g. `Date.json` or `InternalError.json`.
- APIs: One file per interface contained in the API, put in [browser-compat-data/api](https://github.com/mdn/browser-compat-data/tree/master/api). Each file should be called the exact name of the interface, with the casing preserved, e.g. The WebVR API has `VRDisplay.json`, `VRDisplayCapabilities.json`, etc.

> **Nota:** You'll notice that the repo also contains data for [Browser Extensions](/pt-BR/Add-ons/WebExtensions) and [HTTP](/pt-BR/docs/Web/HTTP). These data sets are basically finished as they stand, but more features may need to be added in the future.

Each file you create has to follow the pattern defined in the schema contained within our repo; you can see the [detailed schema description here](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md).

### Estrutura de dados de compatibilidade básica

Let's look at an example. CSS property JSON files for example need the following basic structure:

```json
{
  "css": {
    "properties": {
      "border-width": {
        "__compat": {
          ...
        }
      }
    }
  }
}
```

You have the `css` object, inside of which is a `properties` object. Inside the `properties` object, you need one member for each of the specific features you want to define the compat data for. Each of these members has a `__compat` member, inside of which the actual data goes.

The above data is found in the [border-width.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/border-width.json) file — compare this to the [rendered border-width support table on MDN](/pt-BR/docs/Web/CSS/border-width#Browser_compatibility).

Other types of features work in the same way, but with different object names:

- CSS selectors work in basically the same way as CSS properties, except that the top-level object structure is `css.selectors` instead of `css.properties`. See [cue.json](https://github.com/mdn/browser-compat-data/blob/master/css/selectors/cue.json) for an example.
- HTML data works in basically the same way, except that the top-level object structure is `html.elements`. See `article.json` for an example.
- The top level object structure for JS built-in objects is `javascript.builtins`; see [Array.json](https://github.com/mdn/browser-compat-data/blob/master/javascript/builtins/Array.json) for an example.

In HTML, CSS, and JS pages, you'll normally only need one feature. API interfaces work slightly differently — they always have multiple sub-features (see [Sub-features](#sub-features), below).

### Estrutura básica dentro de um recurso

Inside a feature `__compat` member, you need to include the following members:

- `mdn_url`: Contains the URL of the reference page for this feature on MDN. Note that this needs to be written without the locale directory inside, e.g. `/docs/...` not `/docs/pt-BR/...` (or whatever). This is added in by the macro when the data is put on the page, for localization purposes.
- `support`: Contains members representing the browser support information for this feature in all the different browsers we want to report.
- `status`: Contains members reporting the standards track status of this feature.

The names of the browser members are defined in the schema (see [Browser identifiers](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#browser-identifiers)). You should use the full list of currently defined identifiers. If you wish to add another browser, talk to us first, as this could have a wide-ranging impact and should not be done without careful thought.

In a basic browser compat data file, you'll only need to include "version_added" inside the browser identifier members (we'll cover [Advanced cases](#advanced_cases) later on).

Inside the `status` member, you'll include three submembers:

- "experimental": This should be set to `true` if the feature is [experimental](/pt-BR/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental), or `false` otherwise.
- "standard_track": This should be set to `true` if a feature is on some kind of standards track (most commonly W3C/WHATWG, but there are also other standards efforts such as Khronos, TC39, etc.) or `false` otherwise.
- "deprecated": This should be set to `true` if the feature is [deprecated](/pt-BR/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete), or `false` otherwise.

The feature data for [border-width](/pt-BR/docs/Web/CSS/border-width#Browser_compatibility) (also see [border-width.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/border-width.json)) is shown below as an example:

```json
"__compat": {
  "mdn_url": "https://developer.mozilla.org/docs/Web/CSS/border-width",
  "support": {
    "chrome": {
      "version_added": "1"
    },
    "webview_android": {
      "version_added": "2"
    },
    "edge": {
      "version_added": true
    },
    "edge_mobile": {
      "version_added": true
    },
    "firefox": {
      "version_added": "1"
    },
    "firefox_android": {
      "version_added": "1"
    },
    "ie": {
      "version_added": "4"
    },
    "ie_mobile": {
      "version_added": "6"
    },
    "opera": {
      "version_added": "3.5"
    },
    "opera_android": {
      "version_added": "11"
    },
    "safari": {
      "version_added": "1"
    },
    "safari_ios": {
      "version_added": "3"
    }
  },
  "status": {
    "experimental": false,
    "standard_track": true,
    "deprecated": false
  }
}
```

#### Adicionando uma descrição

There is a fourth, optional, member that can go inside the compat member — `description`. This can be used to include a human-readable description of the feature. You should only include this if it is hard to see what the feature is from glancing at the data. For example, it might not be that obvious what a constructor is from looking at the data structure, so you can include a description like so:

```json
{
  "api": {
    "AbortController": {
      "__compat": {
        ...
      },
      "AbortController": {
        "__compat": {
          "mdn_url": "https://developer.mozilla.org/docs/Web/API/AbortController/AbortController",
          "description": "<code>AbortController()</code> constructor",
          "support": {
            ...
          }
        }
      }

      ... etc.
    }
  }
}
```

### Sub-recursos

In a page where the compat table has more than one row, you'll need multiple subfeatures inside each feature to define the information for each row. This can happen, for example, when you've got the basic support for a feature stored in one row, but then the feature also has a new property or value type that was addded much later in the specification's life and is only supported in a couple of browsers.

As an example, see the [compat data](https://github.com/mdn/browser-compat-data/blob/master/css/properties/background-color.json) and [corresponding MDN page](/pt-BR/docs/Web/CSS/background-color) for the `background-color` property. The basic support exists inside the `__compat` object as explained above, then you have an additional row for browsers' support for "alpha channel for hex values", which contains its own `__compat` object.

```json
{
  "css": {
    "properties": {
      "background-color": {
        "__compat": {
          ...
        },
        "alpha_ch_for_hex": {
          "__compat": {
            ...
          },
        }
      }
    }
  }
}
```

For an API, you've got the top two levels defined as `api.name-of-the-interface`, then a top-level `__compat` section to define the overall browser compatibility of the interface, then a sub-feature for each of the methods, properties, and constructors contained inside the interface. The basic structure looks like this:

```json
{
  "api": {
    "VRDisplay": {
      "__compat": {
        ...
      },
      "cancelAnimationFrame": {
        "__compat": {
          ...
        }
      },
      "capabilities": {
        "__compat": {
          ...
        }
      },

      ... etc.

    }
  }
}
```

See [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/master/api/VRDisplay.json) for a full example.

## Adicionando dados: Casos avançados

There are some advanced features that you'll want to include in browser compat data. The aim of this section is to list the most common ones, providing an example of each to show how you can implement them in your own compat data.

### Incluindo uma nota de rodapé

Often compat tables will include footnotes related to certain entries that explain useful details or strange behavior that developers will find useful. As an example, the Chrome Android entry for {{domxref("VRDisplay.capabilities")}} (see also [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/master/api/VRDisplay.json)) (at the time of writing) had a footnote "Currently supported only by Google Daydream." To include this in the capabilities data, we added a "notes" submember inside the relevant "chrome_android" submember; it would look like this:

```json
"chrome_android": {
  "version_added": true,
  "notes": "Currently supported only by Google Daydream."
}
```

### Incluindo um prefixo de fornecedor

If a feature is supported behind a vendor prefix in one or more browsers, you'll want to make that clear in the browser compat data. imagine you had a feature that was supported with a `-moz-` prefix in Firefox. To specify this in the compat data, you'd need to add a "prefix" submember inside the relevant "firefox" submember. It would look something like this:

```json
"firefox": {
  "version_added": true,
  "prefix": "-moz-"
}
```

### Incluindo preferências ou sinalizadores do navegador

Some features may be supported in a browser, but they are experimental and turned off by default. If a user wants to play with this feature they need to turn it on using a preference/flag.

To represent this in the compat data, you need to add the "flags" submember inside the relevant browser identifier submember. The value of "flags" is an array of objects each of which contains of three members:

- "type": The type of flag or pref this is. The most common value is "preference", which is set inside the browser (for example, using `about:config` in Firefox, or `chrome://flags` in Chrome), but you might also sometimes use a value of "compile_flag", which is a preference set when the browser build is compiled.
- "name": This is a string representing the name of the preference that needs to have a value set on it. For example, "Enable Experimental Web Platform Features" is a preference that exists in Chrome, found in `chrome://flags`.
- "value_to_set": This is a string representing the value that needs to be set on the preference, for example "true".

So to add a preference/flag to the Chrome support for a feature, you'd do something like this:

```json
"chrome": {
  "version_added": "50",
  "flags": [
    {
      "type": "preference",
      "name": "Enable Experimental Web Platform Features",
      "value_to_set": "true"
    }
  ]
},
```

If a feature is behind two or more flags, you can add additional objects to the "flags" array, like in this case, for example:

```json
"firefox": {
  "version_added": "57",
  "flags": [
    {
      "type": "preference",
      "name": "dom.streams.enabled",
      "value_to_set": "true"
    },
    {
      "type": "preference",
      "name": "javascript.options.streams",
      "value_to_set": "true"
    }
  ]
},
```

### Incluindo uma versão em que o suporte foi removido

Sometimes a feature will be added in a certain browser version, but then removed again as the feature is deprecated. This can be easily represented using the "version_removed" submember, which takes as its value a string representing the version number it was removed on. For example:

```json
"firefox": {
  "version_added": "35",
  "version_removed": "47",
},
```

### Incluindo vários pontos de suporte para a mesma entrada do navegador

Sometimes you'll want to add multiple support data points for the same browser inside the same feature.

As an example, the {{cssxref("text-align-last")}} property (see also [text-align-last.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/text-align-last.json)) was added to Chrome in version 35, supported behind a pref.

The support mentioned above was then removed in version 47; also in version 47, support was added for `text-align-last` enabled by default.

To include both of these data points, you can make the value of the "chrome" submember an array containing two support information objects, rather than just a single support information object:

```json
"chrome": [
  {
    "version_added": "47"
  },
  {
    "version_added": "35",
    "version_removed": "47",
    "flags": [
      {
        "type": "preference",
        "name": "Enable Experimental Web Platform Features",
        "value_to_set": "true"
      }
    ]
  }
],
```

> **Nota:** You should put the most current or important support point first in the array — this makes the data easier to read for people who just want to scan it for the latest info.

### Incluindo um nome alternativo

Occasionally browsers will support a feature under a different name to the name defined in its specification. This might be for example because a browser added experimental support for a feature early, and then the name changed before the spec stabilized.

To include such a case in the browser compat data, you can include a support information point that specifies the alternative name inside an "alternative_name" member.

> **Nota:** The alternative name might not be an exact alias — it might have differing behaviour to the standard version.

Let's look at an example. The {{cssxref("border-top-right-radius")}} property (see also [border-top-right-radius.json](https://github.com/mdn/browser-compat-data/blob/2a0cc3f6bb17aa4345441bed47a059dffd847793/css/properties/border-top-right-radius.json)) was supported in Firefox:

- From version 4 onwards with the standard name `border-top-right-radius`.
- From version 49 onwards with a `-webkit-` prefix, for browser compatibility purposes.
- From version 1 onwards with the alternative name `-moz-border-radius-topright`. Support for this alias was removed in version 12.

To represent this in the data, we used the following JSON:

```json
"firefox": [
  {
    "version_added": "4",
    "notes": "Prior to Firefox 50.0, border styles of rounded corners were always rendered as if <code>border-style</code> was solid. This has been fixed in Firefox 50.0."
  },
  {
    "prefix": "-webkit-",
    "version_added": "49",
    "notes": "From Firefox 44 to 48, the <code>-webkit-</code> prefix was available with the <code>layout.css.prefixes.webkit</code> preference. Starting with Firefox 49, the preference defaults to <code>true</code>."
  },
  {
    "alternative_name": "-moz-border-radius-topright",
    "version_added": "1",
    "version_removed": "12"
  }
],
```

## Empurrando uma mudança de volta para o repositório principal

Once you are finished with adding your compat data, you should first test it using the following commands:

- `npm run lint` — tests all the compat data to make sure the JSON is valid, and is written in the correct style, for example correct indentation, no missing commas, etc. It will print out a long list of file names and test results; if an error is found, the linter will throw an error on the file it is found in, giving you useful debugging info like line number, error message, etc.
- `npm run show-errors` — validates the JSON against the data schema, and highlights errors such as invalid browser version numbers being used.
- `npm run render dotted.path.to.feature` — allows you to preview the markup for the compat table for a data file in the repo. As an example, `npm run render css.properties.background` shows the table markup for the {{cssxref("background")}} property.

If it is looking OK, you then need to commit it and push it back up to your remote fork on GitHub. You can do this easily with terminal commands like this:

```bash
git add .
git commit -m 'adding compat data for name-of-feature'
git push
```

Now go to your remote fork (i.e. `https://github.com/your-username/browser-compat-data`) and you should see information about your push at the top of the files list (under "Your recently pushed branches"). You can create a pull request (starting the process of pushing this to the main repo) by pressing the "Compare & pull request" button, then following the simple prompts on the subsequent screen.

At this point, you just need to wait. A reviewer will review your pull request, and merge it with the main repo, OR request that you make changes. If changes are needed, make the changes and submit again until the PR is accepted.

## Inserindo os dados em páginas MDN

Once your new data has been included in the main repo, you can start dynamically generating browser compat tables based on that data on MDN pages using the \\{{Compat}} macro. This takes a single parameter, the dot notation required to walk down the JSON data and find the object representing the feature you want to generate the compat table for.

Above the macro call, to help other contributors finding their way, you should add a hidden text that is only visible in MDN contributors in edit mode:

```html
<div class="hidden">
<p>The compatibility table on this page is generated from structured data.
If you'd like to contribute to the data, please check out
<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>
and send us a pull request.</p>
</div>
```

As an example, on the {{httpheader("Accept-Charset")}} HTTP header page, the macro call looks like this: \\{{Compat("http.headers.Accept-Charset")}}. If you look at the [accept-charset.json](https://github.com/mdn/browser-compat-data/blob/master/http/headers/accept-charset.json) file in the repo, you'll see how this is reflected in the JSON data.

As another example, The compat table for the {{domxref("VRDisplay.capabilities")}} property is generated using \\{{Compat("api.VRDisplay.capabilities")}}. The macro call generates the following table (and corresponding set of notes):

---

{{Compat("api.VRDisplay.capabilities")}}

> **Nota:** The filenames often match the labels given to the interfaces inside the JSON structures, but it is not always the case. When the macro calls generate the tables, they walk through all the files until they find the relevant JSON to use, so the filenames are not critical. Saying that, you should always name them as intuitively as possible.
