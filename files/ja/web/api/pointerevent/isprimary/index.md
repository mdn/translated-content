---
title: PointerEvent.isPrimary
slug: Web/API/PointerEvent/isPrimary
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`isPrimary`** 読み取り専用プロパティは、イベントを作成したポインタデバイスが*プライマリ*ポインタであるかどうかを示します。 イベントの発生原因となったポインタがプライマリデバイスの場合は `true` を返し、それ以外の場合は `false` を返します。

マルチポインタのシナリオ（複数のタッチ点をサポートするタッチ画面など）では、このプロパティを使用して、各ポインタタイプのアクティブポインタのセットから*マスタポインタ*を識別します。 プライマリポインタのみが*互換性マウスイベント*を生成します。 単一のポインタによる相互作用のみを希望する作成者は、非プライマリポインタを無視することによってそれを達成することができます。

マウスデバイスを表すポインタの場合、ポインタはプライマリと見なされます。 ペン入力を表す他のアクティブポインタが存在しないときに、その {{event("pointerdown")}} イベントが送出された場合、ペン入力を表すポインタはプライマリペン入力と見なされます。 タッチ入力を表す他のアクティブポインタが存在しないときに、その {{event("pointerdown")}} イベントが送出された場合、タッチ入力を表すポインタはプライマリタッチ入力と見なされます。

2 つ以上のポインタデバイスタイプが同時に使用されている場合、複数のポインタ（各 {{domxref("PointerEvent.pointerType", "pointerType")}} に 1 つ）がプライマリと見なされます。 例えば、タッチ接触とマウスカーソルが同時に動かされると、両方ともプライマリと見なされるポインタが生成されます。 複数のプライマリポインタがある場合、これらのポインタはすべて*互換性マウスイベント*を生成します（ポインタ、マウス、およびタッチの相互作用の詳細については、{{domxref("Pointer events")}} を参照）。

## 構文

```
var isPrimary = pointerEvent.isPrimary;
```

### 戻り値

- `isPrimary`
  - : このイベントのポインタがプライマリポインタの場合は `true` を返し、そうでない場合は `false` を返します。

## 例

この例は、`isPrimary` の値を使用して適切な処理関数を呼び出す方法を示しています。

```js
target.addEventListener('pointerdown', function(event) {
   if (event.isPrimary)
     process_primary_pointer(event);
   else
     process_secondary_pointer(event);
 }, false);
```

## 仕様

| 仕様                                                                                                 | 状態                                     | コメント |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#widl-PointerEvent-isPrimary', 'isPrimary')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-PointerEvent-isPrimary', 'isPrimary')}} | {{Spec2('Pointer Events')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.isPrimary")}}
