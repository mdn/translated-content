---
title: "Warning: String.x é depreciado; use String.prototype.x em vez disso"
slug: conflicting/Web/JavaScript/Reference/Deprecated_and_obsolete_features
---

{{jsSidebar("Errors")}}

O aviso de JavaScript sobre strings genéricas ocorre em versões do Firefox anteriores à 68.
As strings genéricas foram removidos a partir do Firefox 68, e estas mensagens de aviso são obsoletas.

## Message

```
Warning: String.charAt            is deprecated; use String.prototype.charAt            instead
Warning: String.charCodeAt        is deprecated; use String.prototype.charCodeAt        instead
Warning: String.concat            is deprecated; use String.prototype.concat            instead
Warning: String.contains          is deprecated; use String.prototype.contains          instead
Warning: String.endsWith          is deprecated; use String.prototype.endsWith          instead
Warning: String.includes          is deprecated; use String.prototype.includes          instead
Warning: String.indexOf           is deprecated; use String.prototype.indexOf           instead
Warning: String.lastIndexOf       is deprecated; use String.prototype.lastIndexOf       instead
Warning: String.localeCompare     is deprecated; use String.prototype.localeCompare     instead
Warning: String.match             is deprecated; use String.prototype.match             instead
Warning: String.normalize         is deprecated; use String.prototype.normalize         instead
Warning: String.replace           is deprecated; use String.prototype.replace           instead
Warning: String.search            is deprecated; use String.prototype.search            instead
Warning: String.slice             is deprecated; use String.prototype.slice             instead
Warning: String.split             is deprecated; use String.prototype.split             instead
Warning: String.startsWith        is deprecated; use String.prototype.startsWith        instead
Warning: String.substr            is deprecated; use String.prototype.substr            instead
Warning: String.substring         is deprecated; use String.prototype.substring         instead
Warning: String.toLocaleLowerCase is deprecated; use String.prototype.toLocaleLowerCase instead
Warning: String.toLocaleUpperCase is deprecated; use String.prototype.toLocaleUpperCase instead
Warning: String.toLowerCase       is deprecated; use String.prototype.toLowerCase       instead
Warning: String.toUpperCase       is deprecated; use String.prototype.toUpperCase       instead
Warning: String.trim              is deprecated; use String.prototype.trim              instead
Warning: String.trimLeft          is deprecated; use String.prototype.trimLeft          instead
Warning: String.trimRight         is deprecated; use String.prototype.trimRight         instead
```

## Tipo de erro

Aviso. A execução JavaScript não será interrompida.

## O que ocorreu errado?

Os métodos genéricos não standard {{jsxref("String")}} são depreciados e têm sido
removido em Firefox 68 e posteriores. As strings genéricas fornecem `String' exemplo
métodos sobre o objeto "String" permitindo que os métodos "String" sejam
aplicado a qualquer objecto.

## Exemplos

### Sintaxe depreciada

```js example-bad
const num = 15;
String.replace(num, /5/, "2");
```

### Sintaxe padrão

```js example-good
const num = 15;
String(num).replace(/5/, "2");
```

## Veja também

- {{jsxref("String")}}
