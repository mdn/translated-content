---
title: DataTransfer
slug: Web/API/DataTransfer
---

{{APIRef("HTML DOM")}}

O objeto `DataTransfer` é usado para guardar os dados que estão sendo arrastados durante uma operação de Drag e Drop (arrastar e soltar). Ele pode guardar um ou mais itens de dados, cada um de um ou mais tipos de dados. Para mais informações sobre drag e drop (arrastar e soltar), veja [Drag and Drop](/En/DragDrop/Drag_and_Drop).

Esse objeto está disponível pela propriedade `dataTransfer` de todos os eventos de drag. Ele não pode ser criado separadamente.

## Visão geral das propriedades

| Propriedades                                                      | Tipo                                                               |
| ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`dropEffect`](#dropEffect.28.29)                                 | [`String`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String) |
| [`effectAllowed`](#effectAllowed.28.29)                           | [`String`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String) |
| [`files`](#files.28.29)                                           | {{ domxref("FileList") }}                                          |
| [`mozCursor`](#mozCursor) {{ non-standard_inline() }}             | [`String`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String) |
| [`mozItemCount`](#mozItemCount.28.29) {{ non-standard_inline() }} | `unsigned long`                                                    |
| [`mozSourceNode`](#mozSourceNode) {{ non-standard_inline() }}     | {{ domxref("Node") }}                                              |
| [`mozUserCancelled`](#mozUserCancelled)                           | [`Boolean`](/pt-BR/JavaScript/Reference/Global_Objects/Boolean)    |
| [`types`](#types.28.29)                                           | [`DOMStringList`](/pt-BR/docs/Web/API/DOMStringList)               |

## Visão geral dos métodos

| `void addElement(in Element element)`                                           |
| ------------------------------------------------------------------------------- |
| `void clearData([in String type])`                                              |
| `String getData(in String type)`                                                |
| `void setData(in String type, in String data)`                                  |
| `void setDragImage(in nsIDOMElement image, in long x, in long y)`               |
| `void mozClearDataAt([in String type, in unsigned long index])`                 |
| `nsIVariant mozGetDataAt(in String type, in unsigned long index)`               |
| `void mozSetDataAt(in String type, in nsIVariant data, in unsigned long index)` |
| `StringList mozTypesAt([in unsigned long index])`                               |

## Propriedades

### dropEffect

O efeito atual que será usado, e deve sempre ser um dos possíveis valores de `effectAllowed`. Isso afetará qual cursor será exibido enquanto arrasta.

Para os eventos `dragenter` e `dragover`, o `dropEffect` será inicializado com base na ação que o usuário está solicitando. Como isso é determinado é específico da plataforma, mas, normalmente o usuário pode pressionar teclas de modificação, como a tecla alt, para ajustar qual ação é desejada. Com um manipulador de evento para os eventos `dragenter` e `dragover, o dropEffect` deverá ser modificado se a ação desejada é diferente da ação que o usuário está solicitando.

Para os eventos `dragstart`, `drag`, e `dragleave`, o `dropEffect` será inicializado como "none". Qualquer valor atribuído à `dropEffect` será definido, mas o valor não será usado para nada.

Para os eventos `drop` e `dragend`, o `dropEffect` será inicializado para a ação que foi desejada, que será o valor que o `dropEffect` tinha depois do último evento de `dragenter` ou `dragover`. Em um evento de dragend, por exemplo, se a o `dropEffect` desejado for "move", então os dados que estão sendo arrastados deverão ser removidos da origem.

Valores possíveis:

- **copy**: Uma cópia do ítem de origem é feita na nova localização.
- **move**: Um ítem é movido para a nova localização.
- **link**: Um link é estabelecido com a origem na nova localização.
- **none**: O ítem não pode ser solto.

Atribuindo qualquer outro valor não terá efeito e o valor antigo será mantido.

### effectAllowed

Especifica os efeitos que são permitidos para esse drag. Você pode definir isso no evento `dragstart` para definir os efeitos desejados para a origem. Com os eventos `dragenter` e `dragover`, o `effectAllowed` será definido para qualquer que seja o valor que foi atribuído durante o evento `dragstart`. Isso pode ser usado para determinar quais efeitos são permitidos. Atribuindo um valor para `effectAllowed` nos outros eventos, exceto `dragstart`, não terá efeito.

Valores possíveis:

- **copy**: Uma cópia do ítem de origem pode ser feita na nova localização.
- **move**: Um itém pode ser movido para a nova localização.
- **link**: Um link pode ser estabelicido com a origem na nova localização.
- **copyLink**: As operações de copy e link são permitidas.
- **copyMove**: As operações de copy e move são permitidas.
- **linkMove**: As operações de link e move são permitidas.
- **all**: Todas as operações são permitidas.
- **none**: O ítem não pode ser solto.
- **uninitialized**: O valor padrão quando o efeito não foi definido, equivalente a all.

Atribuindo qualquer outro valor não terá efeito e permanece o valor anterior.

### files

Contains a list of all the local files available on the data transfer. If the drag operation doesn't involve dragging files, this property is an empty list. An invalid index access on the {{ domxref("FileList") }} specified by this property will return `undefined`.

#### Example

These examples dump the list of files dragged into the browser window.

- (Firefox only): <http://jsfiddle.net/9C2EF/>
- (All browsers): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

### types

Guarda uma lista dos tipos de formato dos dados que estão armazenados para o primeiro ítem, na mesma ordem que os dados foram adicionados. Uma lista vazia será retornada caso nenhum dado tenha sido adicionado.

### mozCursor

O estado do cursor de drag. Isto é usado principalmente para controlar o cursor durante a guia de drag.

> **Nota:** Esse método está atualmente implementado somento no Windows.

#### Valores possíveis

- `auto`
  - : Utiliza o comportamento padrão do sistema.
- `default`
  - : Utiliza o comportamento padrão Gecko, que é definir o cursor para uma seta durante a operação de arrastar.

> **Nota:** Se você especificar qualquer valor diferente de "default", "auto" é assumido.

### mozItemCount

O número de ítens sendo arrastados.

> **Nota:** Essa propriedade é específica Gecko.

### mozSourceNode

O {{ domxref("Node") }} sobre o qual o cursor do mouse estava localizado quando o botão foi pressionado para iniciar a operação de arrastar. O valor é `null` para drags externos ou se o elmento não pode acessar o node.

> **Nota:** Essa propriedade é específica Gecko.

### mozUserCancelled

Essa propriedade é aplicada apenas no evento `dragend`, e é `true` se o usuário cancelar a operação de arrastar pressionando escape (esc). Será `false` em qualquer outro caso, incluindo se a operação de arrastar falhar por algum motivo, por exemplo devido a ação de soltar em um local inválido.

> **Nota:** Essa propriedade é específica Gecko.

## Methods

### addElement()

Set the drag source. Usually you would not change this, but it will affect which node the drag and dragend events are fired at. The default target is the node that was dragged.

```
 void addElement(
   in Element element
 );
```

###### Parameters

- `element`
  - : The element to add.

### clearData()

Remove the data associated with a given type. The type argument is optional. If the type is empty or not specified, the data associated with all types is removed. If data for the specified type does not exist, or the data transfer contains no data, this method will have no effect.

```
 void clearData(
   [optional] in String type
 );
```

###### Parameters

- `type`
  - : The type of data to remove.

### getData()

Retrieves the data for a given type, or an empty string if data for that type does not exist or the data transfer contains no data.

A security error will occur if you attempt to retrieve data during a drag that was set from a different domain, or the caller would otherwise not have access to. This data will only be available once a drop occurs during the drop event.

```
 String getData(
   in String type
 );
```

###### Parameters

- `type`
  - : The type of data to retrieve.

### setData()

Set the data for a given type. If data for the type does not exist, it is added at the end, such that the last item in the types list will be the new format. If data for the type already exists, the existing data is replaced in the same position. That is, the order of the types list is not changed when replacing data of the same type.

```
 void setData(
   in String type,
   in String data
 );
```

###### Parameters

- `type`
  - : The type of data to add.
- `data`
  - : The data to add.

### setDragImage()

Set the image to be used for dragging if a custom one is desired. Most of the time, this would not be set, as a default image is created from the node that was dragged.

If the node is an HTML img element, an HTML canvas element or a XUL image element, the image data is used. Otherwise, image should be a visible node and the drag image will be created from this. If image is null, any custom drag image is cleared and the default is used instead.

The coordinates specify the offset into the image where the mouse cursor should be. To center the image, for instance, use values that are half the width and height of the image.

```
 void setDragImage(
   in Element image,
   in long x,
   in long y
 );
```

###### Parameters

- `image`
  - : An element to use as the drag feedback image
- `x`
  - : Horizontal offset within the image.
- `y`
  - : Vertical offset within the image.

### mozClearDataAt()

Removes the data associated with the given format for an item at the specified index. The index is in the range from zero to the number of items minus one.

If the last format for the item is removed, the entire item is removed, reducing `mozItemCount` by one.

If the `format` list is empty, then the data associated with all formats is removed. If the format is not found, then this method has no effect.

> **Nota:** This method is Gecko-specific.

```
 void mozClearDataAt(
   [optional] in String type,
   in unsigned long index
 );
```

###### Parameters

- `type`
  - : The type of data to remove.
- `index`
  - : The index of the data to remove.

### mozGetDataAt()

Retrieves the data associated with the given format for an item at the specified index, or null if it does not exist. The index should be in the range from zero to the number of items minus one.

> **Nota:** This method is Gecko-specific.

```
 nsIVariant mozGetDataAt(
   [optional] in String type,
   in unsigned long index
 );
```

###### Parameters

- `type`
  - : The type of data to retrieve.
- `index`
  - : The index of the data to retrieve.

### mozSetDataAt()

A data transfer may store multiple items, each at a given zero-based index. `mozSetDataAt()` may only be called with an index argument less than `mozItemCount` in which case an existing item is modified, or equal to `mozItemCount` in which case a new item is added, and the `mozItemCount` is incremented by one.

Data should be added in order of preference, with the most specific format added first and the least specific format added last. If data of the given format already exists, it is replaced in the same position as the old data.

The data should be either a string, a primitive boolean or number type (which will be converted into a string) or an `nsISupports`.

> **Nota:** This method is Gecko-specific.

```
 void mozSetDataAt(
   [optional] in String type,
   in nsIVariant data,
   in unsigned long index
 );
```

###### Parameters

- `type`
  - : The type of data to add.
- `data`
  - : The data to add.
- `index`
  - : The index of the data to add.

### mozTypesAt()

Holds a list of the format types of the data that is stored for an item at the specified index. If the index is not in the range from 0 to the number of items minus one, an empty string list is returned.

> **Nota:** This method is Gecko-specific.

```
 nsIVariant mozTypesAt(
   in unsigned long index
 );
```

###### Parameters

- `index`
  - : The index of the data for which to retrieve the types.

## See also

[Drag and Drop](/En/DragDrop/Drag_and_Drop)
