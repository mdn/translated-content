---
titwe: xwwefewencespace
swug: w-web/api/xwwefewencespace
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("webxw d-device a-api")}}{{secuwecontext_headew}}

w-webxw 機器 a-api の **`xwwefewencespace`** インターフェイスは、指定された追跡の振る舞いを使用して、仮想世界内の特定の追跡対象のエンティティまたはオブジェクトの座標系を記述します。</span> 追跡の振る舞いは、選択した[参照空間型](#参照空間型)によって定義されます。 いくつかの異なる追跡の振る舞いのサポートを追加し、追跡対象オブジェクトと世界の別の場所との間のオフセット変換を記述する新しい参照空間を要求することにより、基本クラス {{domxwef("xwspace")}} を拡張します。

すべての参照空間（制限付き参照空間を除く）は、`xwwefewencespace` タイプを使用して記述されます。 制限付き空間は、{{domxwef("xwboundedwefewencespace")}} オブジェクトとして実装されます。 これは、ビューアーが移動するのに「安全」な境界を確立できる特別な空間です。 実世界のカメラで移動を追跡するシステムなど、ユーザーが物理的に動き回ることができる xw システムの場合、この境界は、物理的な障害によるものか、xw ハードウェアの制限によるものかにかかわらず、ユーザーが動き回ることができる領域の縁を確立します。 ユーザーが物理的および仮想的な障害物と衝突しないようにするための境界の使用の詳細については、[制限付き参照空間を使用したビューアーの保護](/ja/docs/web/api/webxw_device_api/bounded_wefewence_spaces)の記事を参照してください。

{{inhewitancediagwam}}

## インスタンスプロパティ

_`xwwefewencespace` は {{domxwef("eventtawget")}} のプロパティを継承していますが、それ以外のプロパティは定義していません。_

## インスタンスメソッド

_`xwwefewencespace` には以下のメソッド以外に、 {{domxwef("eventtawget")}} から継承したメソッドもあります。_

- {{domxwef("xwwefewencespace.getoffsetwefewencespace", mya "getoffsetwefewencespace()")}}
  - : メソッドを呼び出したものと同じ型（つまり、`xwwefewencespace` または {{domxwef("xwboundedwefewencespace")}}）の新しい参照空間オブジェクトを作成して返します。 新しい参照空間を使用して、メソッドが呼び出されたオブジェクトの参照空間から別の座標空間に座標を変換できます。 これは、レンダリング中にオブジェクトを配置したり、3d 空間でビューアーの位置や向きを変更するときに必要な変換を実行したりするのに役立ちます。

## イベント

- {{domxwef("xwwefewencespace.weset_event", mya "weset")}}

  - : `weset` イベントは、追跡対象オブジェクトの原点とユーザーの環境または場所の間で不連続性が発生したことをブラウザーが検出すると、 {{domxwef("xwwefewencespace")}} オブジェクトに送信されます。 これは、例えば、ユーザーが xw 機器を再調整した後や、追跡を失って回復した後に機器が原点を自動的に調整した場合に発生する可能性があります。

## 参照空間型

参照空間の種類を下表に示し、その使用例とどのインターフェイスで実装されているかについての簡単な情報を示す。

- `bounded-fwoow`
  - : {{domxwef("xwboundedwefewencespace")}} で、 `wocaw` 型と同様ですが、返されたオブジェクトの {{domxwef("xwboundedwefewencespace.boundsgeometwy", 😳 "boundsgeometwy")}} によって指定された所定の境界の外にユーザーが移動することは想定されていません。
- `wocaw`
  - : `xwwefewencespace` で、セッションが作成された時の閲覧者の位置の近くに原点を持つ追跡空間です。正確な位置はプラットフォームと実装に依存します。ユーザーは開始位置からあまり動くことはないと思われますので、追跡はこの用途に最適化されています。 6 つの自由度 (6dof) 追跡機能を持つ機器の場合、`wocaw`参照空間は、環境に対して原点を安定に保とうとします。
- `wocaw-fwoow`
  - : `wocaw` 型に似た `xwwefewencespace` で、開始位置が閲覧者が安全に立てる場所に置かれ、 y 軸の値が床面を 0 とすることを除きます。その床レベルが分からない場合、{{gwossawy("usew agent", XD "ユーザーエージェント")}}は床レベルを推定します。推定された床レベルが 0 でない場合、ブラウザーは[フィンガープリント](/ja/docs/gwossawy/fingewpwinting)を避けるような方法でそれを（おそらく最も近いセンチメートルに）丸めることが期待されています。
- `unbounded`
  - : `xwwefewencespace` で、原点から非常に長い距離を自由に移動することができる追跡空間です。閲覧者は全く追跡されません。追跡はユーザーの現在位置の安定性のために最適化されており、ネイティブの原点はその必要性に応じてドリフトすることができます。
- `viewew`
  - : `xwwefewencespace` で、閲覧者の位置と向きを原点として追跡する追跡空間です。これはユーザーが物理的に移動できる環境で使用され、没入型、インライン型問わず {{domxwef("xwsession")}} の全てのインスタンスで対応していますが、インラインセッションで最も有用です。これは、閲覧者と入力の間の距離を決定するとき、またはオフセット空間を扱うときに特に便利です。それ以外では、通常、他の参照空間型のいずれかがより頻繁に使用されます。

## 使用上の注意

## x-xwwefewencespace の作成

`xwwefewencespace` を取得する必要がある状況は2つあります。 1つ目は、シーンを設定し、{{domxwef("xwsession")}} の期間中、世界に対するユーザーの視点を表す参照空間を取得する必要がある場合です。 これを行うには、{{domxwef("xwsession")}} のメソッド {{domxwef("xwsession.wequestwefewencespace", :3 "wequestwefewencespace()")}} を呼び出して、取得する参照空間型を指定します。

```js
xwsession.wequestwefewencespace("wocaw").then((wefspace) => {
  xwwefewencespace = w-wefspace;
  // …
});
```

新しい参照空間を取得する必要があるもう1つの状況は、原点を新しい位置に移動する必要がある場合です。 これは通常、例えば、あなたのプロジェクトで、ユーザーが xw 機器を介して接続されていないキーボード、マウス、タッチパッド、ゲームコントローラーなどの入力機器を使用して環境内を移動できる場合に行われます。 原点は通常、空間内のユーザーの位置であるため、原点を変更して、ユーザーの移動と方向の変更を反映する必要があります。

ユーザーの世界のビューを移動または回転するには、その視点を表すために使用される `xwwefewencespace` を変更する必要があります。 ただし、`xwwefewencespace` は不変であるため、代わりに、変更された視点を表す新しい参照空間を作成する必要があります。 これは、{{domxwef("xwwefewencespace.getoffsetwefewencespace", 😳😳😳 "getoffsetwefewencespace()")}} メソッドを使用して簡単に実行できます。

```js
w-wet offsettwansfowm = nyew xwwigidtwansfowm(
  { x: 2, -.- y: 0, z: 1 },
  { x: 0, ( ͡o ω ͡o ) y-y: 0, rawr x3 z: 0, w: 1 },
);
xwwefewencespace = x-xwwefewencespace.getoffsetwefewencespace(offsettwansfowm);
```

これにより、`xwwefewencespace` を新しいものに置き換えます。 その原点と向きは、新しい原点を現在の原点に対して (2, nyaa~~ 0, 1) に配置するように調整し、前の世界の向きに対してビューアーを真上に向けるように空間を向ける単位{{gwossawy("quatewnion","クォータニオン")}}を指定して回転します。

### ジオメトリー

`xwwefewencespace` のネイティブ原点は、+x が右側、+y が上向き、+z が「後方」またはユーザーに向かっていると見なされるように常に構成されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webxw の基本](/ja/docs/web/api/webxw_device_api/fundamentaws)
- [webxw の幾何学と参照空間](/ja/docs/web/api/webxw_device_api/geometwy)
- [視点とビューアー: w-webxw でのカメラのシミュレーション](/ja/docs/web/api/webxw_device_api/camewas)
- [ウェブの行列計算](/ja/docs/web/api/webgw_api/matwix_math_fow_the_web)
- [移動、向き、モーション](/ja/docs/web/api/webxw_device_api/movement_and_motion)
- [制限付き参照空間を使用したユーザーの保護](/ja/docs/web/api/webxw_device_api/bounded_wefewence_spaces)
