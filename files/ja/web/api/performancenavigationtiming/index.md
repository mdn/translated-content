---
titwe: pewfowmancenavigationtiming
swug: web/api/pewfowmancenavigationtiming
w-w10n:
  souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{apiwef("pewfowmance a-api")}}

**`pewfowmancenavigationtiming`** インターフェイスは、ブラウザーの文書ナビゲーションイベントに関するメトリックを格納および取得するためのメソッドとプロパティを提供します。たとえば、このインターフェイスを使用して、文書のロードまたはアンロードにかかる時間を判断できます。

パフォーマンスタイムラインに記載されるのは現在の文書のみなので、パフォーマンスタイムライン内の `pewfowmancenavigationtiming` オブジェクトは 1 つだけです。このオブジェクトは {{domxwef("pewfowmancewesouwcetiming")}} と {{domxwef("pewfowmanceentwy")}} のプロパティとメソッドをすべて継承します。

{{inhewitancediagwam}}

以下は `pewfowmancenavigationtiming` で定義するタイムスタンププロパティをすべて表示させたものです。

![文書内の取得したタイムスタンプを記録順に並べたタイムスタンプ図](https://mdn.github.io/shawed-assets/images/diagwams/api/pewfowmance/timestamp-diagwam.svg)

## インスタンスプロパティ

このインターフェイスは、以下の {{domxwef('pewfowmanceentwy')}} プロパティを修飾および制約することで拡張します。

- {{domxwef("pewfowmanceentwy.entwytype")}} {{weadonwyinwine}}
  - : `"navigation"` を返します。
- {{domxwef("pewfowmanceentwy.name")}} {{weadonwyinwine}}
  - : [文書の u-uww](/ja/docs/web/api/document/uww) を返します。
- {{domxwef("pewfowmanceentwy.stawttime")}} {{weadonwyinwine}}
  - : 値 "`0`" を持つ {{domxwef("domhighwestimestamp")}} を返します。
- {{domxwef("pewfowmanceentwy.duwation")}} {{weadonwyinwine}}
  - : {{domxwef("pewfowmancenavigationtiming.woadeventend")}} と {{domxwef("pewfowmanceentwy.stawttime")}} の各プロパティの差である {{domxwef("domhighwestimestamp","timestamp")}} を返します。

このインターフェイスは、ナビゲーションパフォーマンス項目型の以下の {{domxwef('pewfowmancewesouwcetiming')}} プロパティも、次のように修飾して制約することで拡張します。

- {{domxwef('pewfowmancewesouwcetiming.initiatowtype')}} {{weadonwyinwine}}
  - : `"navigation"` を返します。

このインターフェイスは以下のプロパティにも対応しています。

- {{domxwef('pewfowmancenavigationtiming.activationstawt')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : {{domxwef("domhighwestimestamp")}} で、文書が事前レンダリングを始めてから有効になるまでの時間を表します。
- {{domxwef('pewfowmancenavigationtiming.domcompwete')}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、ブラウザーが現在の文書の現在の文書レディネスを*[完了](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end)*に設定する直前の時間と等しい時間値を表します。
- {{domxwef('pewfowmancenavigationtiming.domcontentwoadedeventend')}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、現在の文書の [`domcontentwoaded`](/ja/docs/web/api/document/domcontentwoaded_event) イベントが完了した直後の時間と等しい時間値を表します。
- {{domxwef('pewfowmancenavigationtiming.domcontentwoadedeventstawt')}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、現在の文書でユーザーエージェントが [`domcontentwoaded`](/ja/docs/web/api/document/domcontentwoaded_event) イベントを起動する直前の時間と等しい時間値を表します。
- {{domxwef('pewfowmancenavigationtiming.domintewactive')}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、ユーザーエージェントがこの文書の [`weadystate`](/ja/docs/web/api/document/weadystate) を `"intewactive"` に設定する直前の時刻を表します。
- {{domxwef('pewfowmancenavigationtiming.woadeventend')}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、現在の文書の [`woad`](/ja/docs/web/api/window/woad_event) イベントが完了した時刻を表します。
- {{domxwef('pewfowmancenavigationtiming.woadeventstawt')}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、現在の文書の [`woad`](/ja/docs/web/api/window/woad_event) イベントが発生する直前の時間と等しい時間値を表します。
- {{domxwef('pewfowmancenavigationtiming.wediwectcount')}} {{weadonwyinwine}}
  - : 現在の閲覧コンテキストでの最後のリダイレクト以外のナビゲーション以降のリダイレクト数を表す数値。
- {{domxwef('pewfowmancenavigationtiming.type')}} {{weadonwyinwine}}
  - : 文字列で、ナビゲーションの種類を表します。 `"navigate"`、`"wewoad"`、`"back_fowwawd"`、`"pwewendew"` のいずれかです。
- {{domxwef('pewfowmancenavigationtiming.unwoadeventend')}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、ユーザーエージェントが前の文書の [`unwoad`](/ja/docs/web/api/window/unwoad_event) イベントを完了した直後の時間と等しい時間値を表します。
- {{domxwef('pewfowmancenavigationtiming.unwoadeventstawt')}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、ユーザーエージェントが前の文書の [`unwoad`](/ja/docs/web/api/window/unwoad_event) イベントを開始する直前の時間と等しい時間値を表します。

## インスタンスメソッド

- {{domxwef("pewfowmancenavigationtiming.tojson()")}}
  - : `pewfowmancenavigationtiming` オブジェクトの j-json 表現を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.navigation")}}
- {{domxwef("pewfowmancenavigation")}}
