---
title: Exemplos de Extensões
slug: Mozilla/Add-ons/WebExtensions/Examples
---

{{AddonSidebar}}Para ajudar a ilustrar como desenvolver extensões, nós mantemos um repositório com simples exemplos de extensões em <https://github.com/mdn/webextensions-examples>. Este artigo descreve a WebExtension APIs utilizadas neste respositório.Estes exemplos funcionam no Firefox Nightly: A maioria funciona em versões anteriores do Firefox, porém verifique a chave [strict_min_version](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) no manifest.json da extensão por certificação.Se você quiser experimentar estes exemplos, você tem três opções principais:

1. Clonar o repositório, então carregue a extensão diretamente de seu diretório de origem, usando o recurso ["Load Temporary Add-on"](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox). A extensão permanecerá carregada até você reiniciar o Firefox.
2. Clonar o repositório, então use a ferramenta linha de comando [web-ext](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext) para executar o Firefox com a extensão instalada.
3. Clonar o repositório, então vá até o diretório de [build](https://github.com/mdn/webextensions-examples/tree/master/build) (construção). Isto contém as versões construídas e assinadas de todos os exemplos, então você pode simplesmente abrir eles no Firefox (usando Arquivo/Abrir arquivo) e instalar eles permanentemente, como uma extensão que você pode instalar de [addons.mozilla.org](https://addons.mozilla.org/pt-BR/firefox/).

Se você quer contribuir com o respositório, [nos envie um pull request.](https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md)

{{WebExtAllExamples}}
