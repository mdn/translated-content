---
title: HTMLCanvasElement.getContext()
slug: Web/API/HTMLCanvasElement/getContext
---

{{APIRef("Canvas API")}}

O metodo **`HTMLCanvasElement.getContext()`** retorna um contexto de desenho no canvas, ou {{jsxref("null")}} se o contexto identificado não é suportado.

## Syntax

```
canvas.getContext(contextType, contextAttributes);
```

### Parametros

- contextType

  - : É um {{domxref("DOMString")}} contendo o contexto identificador definindo o contexto de desenho associado ao canvas. Os valores possiveis são:

    - `"2d"`, levando a criação de um objeto {{domxref("CanvasRenderingContext2D")}} representando uma renderização bidimensional.
    - `"webgl"` (or `"experimental-webgl"`) que criará um objeto {{domxref("WebGLRenderingContext")}} representando uma renderização tridimensional. Esse contexto está disponivel somente em browsers que implementam [WebGL](/pt-BR/docs/Web/WebGL) versão 1 (OpenGL ES 2.0).
    - `"webgl2"` que criará um objeto {{domxref("WebGL2RenderingContext")}} representando uma renderização tridimensional. Esse contexto está disponivel somente em browsers que implementam [WebGL](/pt-BR/docs/Web/WebGL) versão 2 (OpenGL ES 3.0). {{experimental_inline}}
    - `"bitmaprenderer"` que criará um {{domxref("ImageBitmapRenderingContext")}} que apenas provê a funcionalidade de substituir o conteúdo do canvas pelo de um {{domxref("ImageBitmap")}}.

    > **Nota:** O identificador "`experimental-webgl`" é usado em novas implementações do WebGL. Essas implementações ou ainda não passaram nos casos de teste, ou os drivers gráficos na plataforma ainda não estão estáveis. O [Khronos Group](https://www.khronos.org/) certifica as implementações do WebGL sob certas [regas de conformidade](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes`

  - : Você pode usar alguns atributos de contexto quando criar o seu contexto de renderização, por exemplo:

    ```js
    canvas.getContext("webgl", { antialias: false, depth: false });
    ```

    Atributos de contexto 2d:

    - **`alpha`**: Boleano que indica se o canvas contém um canal alfa. Se definido como `false`, o browser saberá que o resultado será sempre opaco, o que pode acelerar o desenho de conteudo transparente e imagens.
    - {{non-standard_inline}} (Gecko only) **`willReadFrequently`**: Boleano que indica quando uma série de operações read-back estão planejadas. Isso forçará o uso de renderização 2D no canvas via software (ao invés de utilizar GPU) o que pode salvar memoria quando {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} for chamado frequentemente. Essa opção está disponivel somente, se a flag `gfx.canvas.willReadFrequently.enable` está definida como `true` (o que, por padrão, é o caso do B2G/Firefox OS apenas).
    - {{non-standard_inline}} (Blink only) **`storage`**: String que indica qual storage é usado ("persistent" por padrão).

    Atributos de contexto WebGL:

    - **`alpha`**: Boleano que indica se o canvas contém um buffer alfa.
    - **`depth`**: Boleano que indica que o buffer do desenho tem um buffer de profundidade de pelo menos 16 bits.
    - **`stencil`**: Boleano que indica que o buffer do desenho tem um buffer de stencil de pelo menos 8 bits.
    - **`antialias`**: Boleano que indica se deve realizar o anti-aliasing ou não.
    - **`premultipliedAlpha`**: Boleano que indica se o compositor da página vai assumir que o buffer do desenho contendo cores com alfa pré-multiplicado.
    - **`preserveDrawingBuffer`**: Se o valor é `true` os buffers não serão limpos e preservarão seus valores até serem limpos ou subrescritos pelo autor.
    - **`failIfMajorPerformanceCaveat`**: Boleano que indica se um contexto será criado se a performance do sistema for baixa.

### Return value

Um {{domxref("RenderingContext")}} que pode ser:

- {{domxref("CanvasRenderingContext2D")}} para `"2d"`,
- {{domxref("WebGLRenderingContext")}} para `"webgl"` e `"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} para `"webgl2"` ou
- {{domxref("ImageBitmapRenderingContext")}} para `"bitmaprenderer"`.

Se o _contextType_ não bater com um possivel contexto de desenho, `null` é retornado.

## Examples

Dado este elemento {{HTMLElement("canvas")}}:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Você pega um contexto `2d` do canvas com o código a seguir:

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { ... }
```

Agora você tem [contexto de renderização 2d](/pt-BR/docs/Web/API/CanvasRenderingContext2D) para o canvas e você pode desenhar nele.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- A definição de interface, {{domxref("HTMLCanvasElement")}}.
- {{domxref("OffscreenCanvas.getContext()")}}
- Contextos de renderização disponiveis: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}} and {{domxref("WebGL2RenderingContext")}} and {{domxref("ImageBitmapRenderingContext")}}.
