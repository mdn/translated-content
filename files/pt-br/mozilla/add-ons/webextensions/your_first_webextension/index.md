---
title: Sua primeira extensão
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---

{{AddonSidebar}}

Neste artigo vamos percorrer, do início ao fim, os passos necessários para a criação de uma extensão para o Firefox. A extensão apenas adicionará uma borda vermelha em todas as páginas carregadas em "mozilla.org" ou qualquer um de seus subdomínios.

O código fonte para este exemplo está no GitHub: <https://github.com/mdn/webextensions-examples/tree/master/borderify>.

Para começar, você precisará do Firefox versão 45 ou posterior.

## Construindo a Extensão

Crie uma nova pasta dando o nome de "borderify" e navegue para dentro dela.

```bash
mkdir borderify
cd borderify
```

### manifest.json

Dentro dessa pasta crie um novo arquivo chamado "manifest.json" e coloque o seguinte conteúdo no arquivo:

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adiciona uma borda vermelha a todas as páginas da Web correspondentes a mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- As primeiras tres chaves: [`manifest_version`](/pt-BR/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/pt-BR/Add-ons/WebExtensions/manifest.json/name), e [`version`](/pt-BR/Add-ons/WebExtensions/manifest.json/version), são obrigatórias e contém os metadados básicos sobre a extensão.
- [`description`](/pt-BR/Add-ons/WebExtensions/manifest.json/description) é opcional contudo é recomendada pois aparece no gerenciador de complementos.
- [`icons`](/pt-BR/Add-ons/WebExtensions/manifest.json/icons) é opcional porém recomendada pois define os ícones que aparecem no gerenciador de complementos.

A chave mais interessante aqui é [`content_scripts`](/pt-BR/Add-ons/WebExtensions/manifest.json/content_scripts), que diz ao Firefox para carregar um script em páginas da Web cujo URL corresponde a um padrão específico. Nesse caso, pedimos ao Firefox para carregar um script chamado "borderify.js" em todas as páginas HTTP ou HTTPS oriundas de "mozilla.org" ou em qualquer um de seus subdomínios.

- [Saiba mais sobre scripts de conteúdo.](/pt-BR/Add-ons/WebExtensions/Content_scripts)
- [Saiba mais sobre padrões de correspondência](/pt-BR/Add-ons/WebExtensions/Match_patterns).

> **Aviso:** [Em algumas situações, você precisa especificar uma ID para sua extensão](/pt-BR/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID). Se você precisar especificar um ID de extensão, inclua a chave [`applications`](/pt-BR/Add-ons/WebExtensions/manifest.json/applications) no `manifest.json` e configure sua propriedade `id`:
>
> ```json
> "applications": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

A extensão deve ter um ícone. Ele será mostrado ao lado da listagem de extensões no Gerenciador de Extensões. Nosso manifest.json indica que teríamos um ícone localizado na pasta "icons/border-48.png".

Crie o diretório "icons" diretamente sob o diretório "borderify". Salve um ícone chamado "border-48.png". Você pode usar o icone [do nosso exemplo](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png), que foi retirado a coleção de ícone do Google Material Design, e é utilizado sob os termos da licença [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/).

Se você escolher criar seu próprio ícone, deve ser 48x48 pixels formato .PNG e também deve criar um ícone de 96x96 pixels também .PNG, para telas de alta resolução, e se você fizer isso será especificado como a propriedade 96 do objeto icons em manifest.json:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Como alternativa, você pode criar um ícone em formato SVG e ele será dimensionado corretamente.

- [Saiba mais sobre como especificar ícones.](/pt-BR/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Finalmente, crie um arquivo chamado "borderify.js" diretamente dentro do diretório "borderify" com o seguinte conteúdo:

```js
document.body.style.border = "5px solid red";
```

Este script será carregado nas páginas que correspondem ao padrão especificado na chave `content_scripts` do manifest.json. O script tem acesso direto ao documento, igual aos scripts carregados pela própria página.

- [Saiba mais sobre scripts de conteúdo.](/pt-BR/Add-ons/WebExtensions/Content_scripts)

## Testando

Primeiro, verifique se você está com os arquivos corretos nos lugares certos:

```
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Instalando

Acesse a área de Debugging do Firefox digitando diretamente na barra de endereço: "about:debugging", clique na opção "Este Firefox", em seguida clique em "Carregar extensão temporária", então selecione qualquer arquivo da sua pasta de extensões.

A Extensão agora será instalada e ficará assim até que você reinicie o Firefox.

Como alternativa, você pode executar a extensão a partir da linha de comando usando a ferramenta [web-ext](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext).

### Testando

Agora visite uma página em "mozilla.org" e você deve ver uma borda vermelha em volta da página:

![Border displayed on mozilla.org](border_on_mozilla_org.png)

> **Nota:** Não tente acessar addons.mozilla.org! Os scripts de conteúdo são bloqueados nesse domínio.

Experimente um pouco. Edite o script de conteúdo para alterar a cor da borda ou faça outra coisa com o conteúdo da página. Salve o script de conteúdo e, em seguida, recarregue os arquivos da extensão clicando no botão "Reload" em about:debugging. Você poderá ver as mudanças imediatamente:

- [Saiba mais sobre o carregamento de extensões](/pt-BR/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

## Empacotando e publicando

Para que outras pessoas usem seu complemento, você precisa compactá-lo e enviá-lo para a Mozilla para assinatura. Para saber mais sobre isso, consulte ["Publicando sua Extensão"](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension).

## Próximos passos

Agora você tem uma idéia do processo de desenvolvimento de um WebExtension para o Firefox, que tal:

- [Anatomia de uma Extensão](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Criar uma Extensão mais complexa](/pt-BR/Add-ons/WebExtensions/Your_second_WebExtension)
- [Saber mais sobre JavaScript APIs disponíveis para Extensões.](/pt-BR/Add-ons/WebExtensions/API)
