---
title: CORS_habilitar_imagens
slug: Web/HTML/CORS_enabled_image
---

The HTML specification introduces a [`crossorigin`](/pt-BR/docs/Web/HTML/Element/img#crossorigin) attribute for images that, in combination with an appropriate {{Glossary("CORS")}} header, allows images defined by the {{ HTMLElement("img") }} element that are loaded from foreign origins to be used in canvas as if they were being loaded from the current origin.

See [CORS settings attributes](/pt-BR/HTML/CORS_settings_attributes) for details on how the `crossorigin` attribute is used.

## O que é um "contaminado" canvas?

Embora você possa usar imagens sem aprovação do CORS em seu canvas, criando contaminação ao canvas. Uma vez o canvas tenhya sido "contaminado" você não pode mais "puxar" informações do canvas.Por exemplo, você pode não mais usar os métodos canvas toBlob(), toDataURL(), ou getImageData(), fazendo isto você irá lançar um erro de sergurança.

Esta proteção de usuário tem tido dados expostos por uso de informações de imagens de site web remoto sem permissão.

## Exemplo: Armazenando uma imagem de uma origem estrangeira

Você precisa ter um servidor hospedando as imagenscom o apropriado Access-Control-Allow-Origin cabeçalho. Adicionando atributos crossOrigin faz uma requisição ao cabeçalho. Você pode usar este exemplo das [Configurações Apache Server HTML5 Boilerplate](https://github.com/h5bp/server-configs-apache/blob/fc379c45f52a09dd41279dbf4e60ae281110a5b0/src/.htaccess#L36-L53) para aproximadamente responder com este cabeçalho de resposta.

```xml
<IfModule mod_setenvif.c>
    <IfModule mod_headers.c>
        <FilesMatch "\.(cur|gif|ico|jpe?g|png|svgz?|webp)$">
            SetEnvIf Origin ":" IS_CORS
            Header set Access-Control-Allow-Origin "*" env=IS_CORS
        </FilesMatch>
    </IfModule>
</IfModule>
```

Dado que está tudo classificado, você permiti salvar àquelas imagens no [Armazenamento DOM](/pt-BR/docs/Web/Guide/API/DOM/Storage)

```js
var img = new Image(),
  canvas = document.createElement("canvas"),
  ctx = canvas.getContext("2d"),
  src = "http://example.com/image"; // insert image url here

img.crossOrigin = "Anonymous";

img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  localStorage.setItem("savedImageData", canvas.toDataURL("image/png"));
};
img.src = src;
// make sure the load event fires for cached images too
if (img.complete || img.complete === undefined) {
  img.src =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  img.src = src;
}
```

## Veja também

- [Usando imagens de Cross-domínio em WebGL e Chrome 13](http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [Especificações HTML - o atributo crossorigin](http://whatwg.org/html#attr-img-crossorigin)
