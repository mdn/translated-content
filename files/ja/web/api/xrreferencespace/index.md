---
title: XRReferenceSpace
slug: Web/API/XRReferenceSpace
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{secureContext_header}}

WebXR 機器 API の **`XRReferenceSpace`** インターフェイスは、指定された追跡の振る舞いを使用して、仮想世界内の特定の追跡対象のエンティティまたはオブジェクトの座標系を記述します。</span> 追跡の振る舞いは、選択した[参照空間型](#参照空間型)によって定義されます。 いくつかの異なる追跡の振る舞いのサポートを追加し、追跡対象オブジェクトと世界の別の場所との間のオフセット変換を記述する新しい参照空間を要求することにより、基本クラス {{domxref("XRSpace")}} を拡張します。

すべての参照空間（制限付き参照空間を除く）は、`XRReferenceSpace` タイプを使用して記述されます。 制限付き空間は、{{domxref("XRBoundedReferenceSpace")}} オブジェクトとして実装されます。 これは、ビューアーが移動するのに「安全」な境界を確立できる特別な空間です。 実世界のカメラで移動を追跡するシステムなど、ユーザーが物理的に動き回ることができる XR システムの場合、この境界は、物理的な障害によるものか、XR ハードウェアの制限によるものかにかかわらず、ユーザーが動き回ることができる領域の縁を確立します。 ユーザーが物理的および仮想的な障害物と衝突しないようにするための境界の使用の詳細については、[制限付き参照空間を使用したビューアーの保護](/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)の記事を参照してください。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`XRReferenceSpace` は {{domxref("EventTarget")}} のプロパティを継承していますが、それ以外のプロパティは定義していません。_

## インスタンスメソッド

_`XRReferenceSpace` には以下のメソッド以外に、 {{domxref("EventTarget")}} から継承したメソッドもあります。_

- {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}}
  - : メソッドを呼び出したものと同じ型（つまり、`XRReferenceSpace` または {{domxref("XRBoundedReferenceSpace")}}）の新しい参照空間オブジェクトを作成して返します。 新しい参照空間を使用して、メソッドが呼び出されたオブジェクトの参照空間から別の座標空間に座標を変換できます。 これは、レンダリング中にオブジェクトを配置したり、3D 空間でビューアーの位置や向きを変更するときに必要な変換を実行したりするのに役立ちます。

## イベント

- {{domxref("XRReferenceSpace.reset_event", "reset")}}
  - : `reset` イベントは、追跡対象オブジェクトの原点とユーザーの環境または場所の間で不連続性が発生したことをブラウザーが検出すると、 {{domxref("XRReferenceSpace")}} オブジェクトに送信されます。 これは、例えば、ユーザーが XR 機器を再調整した後や、追跡を失って回復した後に機器が原点を自動的に調整した場合に発生する可能性があります。

## 参照空間型

参照空間の種類を下表に示し、その使用例とどのインターフェイスで実装されているかについての簡単な情報を示す。

- `bounded-floor`
  - : {{domxref("XRBoundedReferenceSpace")}} で、 `local` 型と同様ですが、返されたオブジェクトの {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} によって指定された所定の境界の外にユーザーが移動することは想定されていません。
- `local`
  - : `XRReferenceSpace` で、セッションが作成された時の閲覧者の位置の近くに原点を持つ追跡空間です。正確な位置はプラットフォームと実装に依存します。ユーザーは開始位置からあまり動くことはないと思われますので、追跡はこの用途に最適化されています。 6 つの自由度 (6DoF) 追跡機能を持つ機器の場合、`local`参照空間は、環境に対して原点を安定に保とうとします。
- `local-floor`
  - : `local` 型に似た `XRReferenceSpace` で、開始位置が閲覧者が安全に立てる場所に置かれ、 y 軸の値が床面を 0 とすることを除きます。その床レベルが分からない場合、{{Glossary("user agent", "ユーザーエージェント")}}は床レベルを推定します。推定された床レベルが 0 でない場合、ブラウザーは[フィンガープリント](/ja/docs/Glossary/Fingerprinting)を避けるような方法でそれを（おそらく最も近いセンチメートルに）丸めることが期待されています。
- `unbounded`
  - : `XRReferenceSpace` で、原点から非常に長い距離を自由に移動することができる追跡空間です。閲覧者は全く追跡されません。追跡はユーザーの現在位置の安定性のために最適化されており、ネイティブの原点はその必要性に応じてドリフトすることができます。
- `viewer`
  - : `XRReferenceSpace` で、閲覧者の位置と向きを原点として追跡する追跡空間です。これはユーザーが物理的に移動できる環境で使用され、没入型、インライン型問わず {{domxref("XRSession")}} の全てのインスタンスで対応していますが、インラインセッションで最も有用です。これは、閲覧者と入力の間の距離を決定するとき、またはオフセット空間を扱うときに特に便利です。それ以外では、通常、他の参照空間型のいずれかがより頻繁に使用されます。

## 使用上の注意

## XRReferenceSpace の作成

`XRReferenceSpace` を取得する必要がある状況は2つあります。 1つ目は、シーンを設定し、{{domxref("XRSession")}} の期間中、世界に対するユーザーの視点を表す参照空間を取得する必要がある場合です。 これを行うには、{{domxref("XRSession")}} のメソッド {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} を呼び出して、取得する参照空間型を指定します。

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  // …
});
```

新しい参照空間を取得する必要があるもう1つの状況は、原点を新しい位置に移動する必要がある場合です。 これは通常、例えば、あなたのプロジェクトで、ユーザーが XR 機器を介して接続されていないキーボード、マウス、タッチパッド、ゲームコントローラーなどの入力機器を使用して環境内を移動できる場合に行われます。 原点は通常、空間内のユーザーの位置であるため、原点を変更して、ユーザーの移動と方向の変更を反映する必要があります。

ユーザーの世界のビューを移動または回転するには、その視点を表すために使用される `XRReferenceSpace` を変更する必要があります。 ただし、`XRReferenceSpace` は不変であるため、代わりに、変更された視点を表す新しい参照空間を作成する必要があります。 これは、{{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} メソッドを使用して簡単に実行できます。

```js
let offsetTransform = new XRRigidTransform(
  { x: 2, y: 0, z: 1 },
  { x: 0, y: 0, z: 0, w: 1 },
);
xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(offsetTransform);
```

これにより、`XRReferenceSpace` を新しいものに置き換えます。 その原点と向きは、新しい原点を現在の原点に対して (2, 0, 1) に配置するように調整し、前の世界の向きに対してビューアーを真上に向けるように空間を向ける単位{{Glossary("quaternion","クォータニオン")}}を指定して回転します。

### ジオメトリー

`XRReferenceSpace` のネイティブ原点は、+X が右側、+Y が上向き、+Z が「後方」またはユーザーに向かっていると見なされるように常に構成されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR の基本](/ja/docs/Web/API/WebXR_Device_API/Fundamentals)
- [WebXR の幾何学と参照空間](/ja/docs/Web/API/WebXR_Device_API/Geometry)
- [視点とビューアー: WebXR でのカメラのシミュレーション](/ja/docs/Web/API/WebXR_Device_API/Cameras)
- [ウェブの行列計算](/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [移動、向き、モーション](/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [制限付き参照空間を使用したユーザーの保護](/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
