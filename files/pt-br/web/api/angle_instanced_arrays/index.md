---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
---

{{APIRef("WebGL")}}

A extenção **`ANGLE_instanced_arrays`** é parte do [WebGL API](/pt-BR/docs/Web/API/WebGL_API) e permite desenhar o mesmo objeto, ou grupos de objectos semelhantes várias vezes, se eles compartilham os mesmos dados de vértice, contagem primitiva e tipo.

As extensões WebGL estão disponíveis usando o método {{domxref("WebGLRenderingContext.getExtension()")}}. Para mais informações, veja também [Usando Extenções](/pt-BR/docs/Web/API/WebGL_API/Using_Extensions) no [WebGL tutorial](/pt-BR/docs/Web/API/WebGL_API/Tutorial).

> **Nota:** **Disponibilidade:** Esta extenção só está disponível para contextos {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}. Em {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, a funcionalidade desta extenção está disponível no contexto WebGL2 por padrão e as constantes e métodos estao disponíveis sem o sufixo "`ANGLE`".
>
> Apesar do nome "ANGLE", esta extenção funciona em qualquer dispositivo se o hardware oferece suporte a ele e não apenas no Windows ao usar a biblioteca ANGLE. "ANGLE" apenas indica que essa extencão foi escrita pelos autores da biblioteca ANGLE.

## Constantes

Essa extensão expõe uma nova constante, que pode ser usada no método {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}}:

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : Retorna um {{domxref("GLint")}} descrevendo o divisor de frequência usado para renderização instanciada quando usado no {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} como parâmetro `pname`.

## Métodos

Essa extensão expõe três novos métodos.

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
  - : Se comporta de forma idêntica a {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} exceto que múltiplo instâncias do intervalo de elementos são executadas e a instância avança para cada iteração.
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
  - : Comporta-se de forma idêntica para o {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} exceto que várias instâncias do conjunto de elementos são executadas e a instância avança entre cada conjunto.
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
  - : Modifica a taxa na qual os atributos de vértice genéricos avançam ao renderizar várias instâncias de primitivos com {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}} e {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}.

## Exemplos

Habilitando a extenção:

```js
var ext = gl.getExtension("ANGLE_instanced_arrays");
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
