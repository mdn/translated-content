---
title: PointerEvent.pointerType
slug: Web/API/PointerEvent/pointerType
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`pointerType`** 読み取り専用プロパティは、特定のポインタイベントを引き起こしたデバイスタイプ（マウス、ペン、またはタッチ）を示します。

## 構文

```
var pType = pointerEvent.pointerType;
```

### 戻り値

- `pType`

  - : イベントのポインタタイプ。 サポートする値は次の文字列です。

    - `"mouse"`
      - : イベントはマウスデバイスによって生成されました。
    - `"pen"`
      - : イベントはペンデバイスまたはスタイラスデバイスによって生成されました。
    - `"touch"`
      - : イベントは指などのタッチによって生成されました。

デバイスタイプがブラウザーで検出できない場合、値は空の文字列（`""`）になります。 ブラウザーが上記以外のポインタデバイスタイプをサポートしている場合は、異なるタイプのデバイスと名前が競合しないように、値に *{{glossary("Vendor Prefix","ベンダー接頭辞")}}を付ける* 必要があります。

## 例

この例は、`pointerType` プロパティの値を使用して適切なポインタタイプ処理関数を呼び出す方法を示しています。

```js
targetElement.addEventListener('pointerdown', function(event) {
  // 適切なポインタタイプのハンドラを呼び出す
  switch (event.pointerType) {
    case 'mouse':
      process_pointer_mouse(event);
      break;
    case 'pen':
      process_pointer_pen(event);
      break;
    case 'touch':
      process_pointer_touch(event);
      break;
    default:
      console.log(`pointerType ${event.pointerType} はサポートしていません`);
  }
}, false);
```

## 仕様

| 仕様                                                                                                         | 状態                                     | コメント                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Pointer Events', '#dom-pointerevent-pointertype', 'pointerType')}}     | {{Spec2('Pointer Events')}}     | 初期定義                                                                                                                                                                                       |
| {{SpecName('Pointer Events 2','#dom-pointerevent-pointertype', 'pointerType')}}     | {{Spec2('Pointer Events 2')}} | 不安定版                                                                                                                                                                                       |
| {{SpecName('CSSOM View','#extensions-to-the-mouseevent-interface', 'MouseEvent')}} | {{Spec2('CSSOM View')}}         | {{domxref("MouseEvent")}} を `long` 型から `double` 型に再定義します。 これは、`pointerType` がマウスである {{domxref("PointerEvent")}} が `double` 型になることを意味します。 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.pointerType", 2)}}
