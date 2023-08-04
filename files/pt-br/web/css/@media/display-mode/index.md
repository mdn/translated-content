---
title: Modo de exibição (display-mode)
slug: Web/CSS/@media/display-mode
---

{{cssref}}

O recurso de mídia CSS {{cssxref("@media")}} do modo de exibição pode ser usado para aplicar estilos com base no modo de exibição de um aplicativo. Você pode usar para prover uma consistente experiência de usuário entre abrir um site a partir de uma URL e um ícone desktop.

Esse recurso corresponde ao membro da exibição do manifesto do aplicativo da Web. Ambos aplicam-se ao contexto de navegação de nível superior e a qualquer contexto afilhado de navegação. O recurso de consulta aplica-se independentemente de onde um manifesto de aplicativo web está presente.

## Sintaxe

O recurso `display-mode` é especificado como um valor de uma palavra chave escolhido da lista abaixo.

| Modo de exibição | Descrição                                                                                                                                                                                                                                                                                                                                                         | Modo de exibição secundário |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `fullscreen`     | Toda a área disponível da tela será usada e nada do agente-usuário (navegador) {{glossary("chrome")}} é mostrado.                                                                                                                                                                                                                                                 | `standalone`                |
| `standalone`     | A aplicação irá parecer uma aplicação independente. Isso pode incluir a aplicação ter uma janela diferente, seu próprio ícone no menu de aplicações, etc. Neste modo, o navegador não irá mostrar os controles de navegação (como barra de endereço, botão voltar, botão página inicial, etc), mas pode incluir outros elementos gráficos como a barra de status. | `minimal-ui`                |
| `minimal-ui`     | A aplicação irá parecer uma aplicação independente, mas terá um conjunto mínimo de elementos gráficos (UI) para controlar a navegação. Esses elementos podem variar de acordo com o navegador.                                                                                                                                                                    | `browser`                   |
| `browser`        | A aplicação abre numa aba ou nova janela convencional do navegador, dependendo do navegador e da plataforma.                                                                                                                                                                                                                                                      | (nenhum)                    |

## Exemplo

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

## Especificações

| Specification                                                               | Status                | Comment            |
| --------------------------------------------------------------------------- | --------------------- | ------------------ |
| {{SpecName('Manifest', '#the-display-mode-media-feature', 'display-mode')}} | {{Spec2('Manifest')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("css.at-rules.media.display-mode")}}
