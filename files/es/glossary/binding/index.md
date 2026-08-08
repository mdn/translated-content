---
title: Binding
slug: Glossary/Binding
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

En programación, un **binding** es una asociación entre un {{glossary("identifier")}} y un valor. No todos los bindings son {{glossary("variable", "variables")}}; por ejemplo, los {{glossary("parameter", "parameters")}} de una función y el binding creado por el bloque {{jsxref("Statements/try...catch", "catch (e)")}} no son "variables" en sentido estricto. Además, algunos bindings son creados implícitamente por el lenguaje; por ejemplo, {{jsxref("this")}} y [`new.target`](/es/docs/Web/JavaScript/Reference/Operators/new.target) en JavaScript.

Un binding es {{glossary("mutable")}} si puede ser reasignado, e {{glossary("immutable")}} si no puede serlo; esto _no_ significa que el valor que contiene sea inmutable.

Un binding suele estar asociado a un {{glossary("scope")}}. Algunos lenguajes permiten recrear bindings (es decir, redeclararlos) dentro del mismo scope, mientras que otros no; en JavaScript, la posibilidad de redeclarar bindings depende de la construcción utilizada para crear el binding.

## Ver también

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
