---
title: WebGLRenderingContext.uniform[1234][fi][v]()
slug: Web/API/WebGLRenderingContext/uniform
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.uniform[1234][fi][v]()`** метод [WebGL API](/ru/docs/Web/API/WebGL_API) устанавливает значение для постоянных переменных Uniform.

> **Примечание:** Многие из описанных в этом разделе функцию имеют расширенные интерфейсы WebGL 2, которые можно найти {{domxref("WebGL2RenderingContext.uniform","WebGL2RenderingContext.uniform[1234][uif][v]()")}}.

## Синтаксис

```
gl.uniform1f (floatUniformLoc, v); // для float
gl.uniform1fv(floatUniformLoc, [v]); // для float или массива float
gl.uniform2f (vec2UniformLoc, v0, v1); // для vec2
gl.uniform2fv(vec2UniformLoc, [v0, v1]); // для vec2 или массива vec2
gl.uniform3f (vec3UniformLoc, v0, v1, v2); // для vec3
gl.uniform3fv(vec3UniformLoc, [v0, v1, v2]); // для vec3 или массива vec3
gl.uniform4f (vec4UniformLoc, v0, v1, v2, v4); // для vec4
gl.uniform4fv(vec4UniformLoc, [v0, v1, v2, v4]); // для vec4 или массива vec4

gl.uniform1i (intUniformLoc, v); // для int
gl.uniform1iv(intUniformLoc, [v]); // для int или массива int
gl.uniform2i (ivec2UniformLoc, v0, v1); // для ivec2
gl.uniform2iv(ivec2UniformLoc, [v0, v1]); // для ivec2 или массива ivec2
gl.uniform3i (ivec3UniformLoc, v0, v1, v2); // для ivec3
gl.uniform3iv(ivec3UniformLoc, [v0, v1, v2]); // для ivec3 или массива ivec3
gl.uniform4i (ivec4UniformLoc, v0, v1, v2, v4); // для ivec4
gl.uniform4iv(ivec4UniformLoc, [v0, v1, v2, v4]); // для ivec4 или массива ivec4


gl.uniform1i (sampler2DUniformLoc, v); // для sampler2D (текстуры)
gl.uniform1iv(sampler2DUniformLoc, [v]); // для sampler2D или массива sampler2D


gl.uniform1i (samplerCubeUniformLoc, v); // для samplerCube (текстуры)
gl.uniform1iv(samplerCubeUniformLoc, [v]); // для samplerCube или массива samplerCube
```

### Параметры

- location
  - : {{domxref("WebGLUniformLocation")}} объект содержащий uniform атрибут для его изменения.
- `value, v0, v1, v2, v3`

  - : Новое значение для uniform переменной. Допустимые типы:

    - Тип float {{jsxref("Number")}} для этого типа (методы с "f").
    - Последовательность чисел с плавающей точкой (пример {{jsxref("Float32Array")}} или {{jsxref("Array")}} чисел) для векторных методов с плавающей точкой (методы с "fv").
    - Тип {{jsxref("Number")}} для этого типа (методы с "i").
    - {{jsxref("Int32Array")}} вектор чисел {{jsxref("Number")}} (методы с "iv").

### Возвращаемое значение

None.

## Примеры

```js
GL.uniform1f(GL.getUniformLocation(PROGRAM, "u_time"), timeStamp / 1000.0);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("WebGLRenderingContext.uniformMatrix()")}}
