---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
---

{{ApiRef}}

HTMLFormControlsCollection は、HTML フォームコントロール要素のコレクションを表すインタフェースです。 {{domxref("HTMLCollection")}} から継承されるプロパティとメソッドの他に、追加メソッドがひとつ提供されます。

このインタフェースは {{domxref("HTMLFormElement")}} インタフェースの {{domxref("HTMLFormElement.elements","elements")}} プロパティ及び `HTMLFieldSetElement` インタフェースの `elements` プロパティで用いられます。

## メソッド

| メソッド名 & 引数                                      | 返値   | 説明                                                                                                                                                             |
| ------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `namedItem` ({{domxref("DOMString")}} name 内) | `object` | 指定した name と一致する `name` 属性または `id` 属性を持つコレクション内のノードまたはノードリストを取得。一致するノードが存在しない場合は `null` が取得される。 |

## 仕様書

- [HTML 5, Section 2.7.2.3 HTMLFormControlsCollection](http://www.w3.org/TR/html5/common-dom-interfaces.html#htmlformcontrolscollection)
