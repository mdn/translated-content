---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Tipo</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Obrigatório</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Exemplo</th>
      <td>
        <pre class="brush: json">
"web_accessible_resources": [
  "images/my-image.png"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## Descrição

As vezes, você precisa empacotar recursos — por exemplo, imagens, HTML, CSS ou Javascript — com a sua extensão e fazê-la acessível para as páginas web.

Por exemplo, a [extensão de exemplo Beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) substitui uma página por uma imagem de um animal selecionado pelo usuário. As imagens foram empacotadas com a extensão. Para fazer visível a imagem selecionada, a extensão adiciona elementos [`<img>`](/pt-BR/docs/Web/HTML/Element/img) cujo atributo `src` aponta para a imagem do animal. Para que a página da web possa carregar as imagens, elas devem estar disponíveis na extensão.

With the `web_accessible_resources` key, you list all the packaged resources that you want to make available to web pages. You specify them as paths relative to the manifest.json file.

Note that content scripts don't need to be listed as web accessible resources.

If an extension wants to use {{WebExtAPIRef("webRequest")}} to redirect a public URL (e.g., HTTPS) to a page that's packaged in the extension, then the extension must list the page in the `web_accessible_resources` key.

### Using web_accessible_resources

For example, suppose your extension includes an image file at images/my-image.png, like this:

```
my-extension-files/
    manifest.json
    my-background-script.js
    images/
        my-image.png
```

To enable a web page to use an [`<img>`](/pt-BR/docs/Web/HTML/Element/img) element whose `src` attribute points to this image, you would specify `web_accessible_resources` like this:

```json
"web_accessible_resources": ["images/my-image.png"]
```

The file is then available using a URL like:

```
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` is **not** your extension's ID. This ID is randomly generated for every browser instance. This prevents websites from fingerprinting a browser by examining the extensions it has installed.

> [!NOTE]
> In Chrome, an extension's ID is fixed. When a resource is listed in `web_accessible_resources`, it is accessible as `chrome-extension://<your-extension-id>/<path/to/resource>`.

The recommended approach to obtaining the URL of the resource is to use [`runtime.getURL`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) passing the path relative to manifest.json, for example:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

This approach gives you have the correct URL regardless of the browser your extension is running on.

### Wildcards

`web_accessible_resources` entries can contain wildcards. For example, the following entry would also work to include the resource at "images/my-image.png":

```json
  "web_accessible_resources": ["images/*.png"]
```

### Security

Note that if you make a page web-accessible, any website may link or redirect to that page. The page should then treat any input (POST data, for examples) as if it came from an untrusted source, just as a normal web page should.

## Example

```json
"web_accessible_resources": ["images/my-image.png"]
```

Make the file at "images/my-image.png" web accessible.

## Compatibilidade com navegadores

{{Compat}}
