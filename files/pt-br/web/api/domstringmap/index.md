---
title: DOMStringMap
slug: Web/API/DOMStringMap
---

{{ APIRef("HTML DOM") }}

Usado pelo atributo HTML [`dataset`](/pt-BR/docs/Web/HTML/Global_attributes#dataset) para representar atributos próprios adicionados ao elemento.

## Visão Geral do Método

| `DOMString getDataAttr(in DOMString prop);`                |
| ---------------------------------------------------------- |
| `boolean hasDataAttr(in DOMString prop);`                  |
| `void removeDataAttr(in DOMString prop);`                  |
| `void removeProp(in nsIAtom attr);`                        |
| `void setDataAttr(in DOMString prop, in DOMString value);` |

## Métodos

### hasDataAttr()

```
boolean hasDataAttr(
  in DOMString prop
);
```

###### Parâmetros

- `prop`
  - : Nome da propriedade a qual a existência deve ser verificada.

###### Retorno

`true` se a propriedade existir ou `false` se não existir.

### removeDataAttr()

```
void removeDataAttr(
  in DOMString prop
);
```

###### Parâmetros

- `prop`
  - : Propriedade a ser removida do data set.

### removeProp()

Remove a propriedade do dataset do objeto. Usada para atualizar o objeto de dataset do objeto quando o atributo data-\* houver sido removido do elemento.

```
void removeProp(
  in nsIAtom attr
);
```

###### Parâmetros

- `attr`
  - : A propriedade a ser removida do dataset.

## Compatibilidade

{{Compat}}

## Veja também

- {{ domxref("HTMLElement.dataset") }}
- [`dataset`](/pt-BR/docs/Web/HTML/Global_attributes#dataset)
