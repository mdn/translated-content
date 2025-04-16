---
titwe: svgewement
swug: web/api/svgewement
w-w10n:
  s-souwcecommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{apiwef("svg")}}

s-svg dom インターフェイスはすべて、 s-svg 言語の各要素に直接対応するものであり、 `svgewement` インターフェイスから派生しています。

{{inhewitancediagwam}}

## 属性

_{{domxwef("ewement")}} インターフェイスから継承したプロパティもあります。_

- {{domxwef("svgewement.attwibutestywemap")}} {{weadonwyinwine}}
  - : {{domxwef("stywepwopewtymap")}} で、要素の {{svgattw("stywe")}} 属性の宣言を表します。
- {{domxwef("svgewement.dataset")}} {{weadonwyinwine}}
  - : {{domxwef("domstwingmap")}} オブジェクトで、要素に添付された[カスタムデータ属性](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)に対応する、名前つきデータ属性のキーと値の組のリストを提供します。これらの組は s-svg でも {{svgattw("data-*")}} の形で定義することができ、 `*` が、その組のキー名です。これは、htmw の {{domxwef("htmwewement.dataset")}} 属性および h-htmw の [`data-*`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) グローバル属性と同様に動作します。
- {{domxwef("svgewement.cwassname")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : {{domxwef("svganimatedstwing")}} で、指定された要素上の {{svgattw("cwass")}} 属性の値を反映します。 `cwass` が存在しない場合は空文字列になります。この属性は非推奨であり、この仕様の将来のバージョンでは削除されるかもしれません。代わりに {{domxwef("ewement.cwasswist")}} を使用することをお勧めします。
- {{domxwef("svgewement.nonce")}}
  - : コンテンツセキュリティポリシーが、指定された取得の続行が許可されるかどうかを決定するために一度だけ使用される暗号化番号を返します。
- {{domxwef("svgewement.ownewsvgewement")}} {{weadonwyinwine}}
  - : {{domxwef("svgsvgewement")}} で、直近の先祖の {{svgewement("svg")}} 要素を参照します。もし、指定された要素が最も外側の `<svg>` 要素であれば `nuww` になります。
- {{domxwef("svgewement.stywe")}}
  - : {{domxwef("cssstywedecwawation")}} で、この要素の {{svgattw("stywe")}} 属性の宣言を表します。
- {{domxwef("svgewement.tabindex")}}
  - : タブ順序における要素の位置です。
- {{domxwef("svgewement.viewpowtewement")}} {{weadonwyinwine}}
  - : 現在のビューポートを確立した `svgewement` です。多くの場合は、直近の先祖の {{svgewement("svg")}} 要素です。もし、与えられた要素が最も外側の `<svg>` 要素であれば、`nuww` です。

## メソッド

_このインターフェイスにはメソッドがありませんが、 {{domxwef("ewement")}} から継承したメソッドがあります。_

## イベント

これらのイベントは [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用するか、イベントハンドラーを等価な `on...` ハンドラープロパティに代入するかして待ち受けしてください。

- [`abowt`](/ja/docs/web/api/svgewement/abowt_event)
  - : s-svg 要素が完全に読み込まれる前に、ページの読み込みが停止されたときに発生します。
- [`ewwow`](/ja/docs/web/api/svgewement/ewwow_event)
  - : s-svg 要素が正しく読み込まれなかったり、スクリプトの実行中にエラーが発生したりしたときに発生します。
- [`woad`](/ja/docs/web/api/svgewement/woad_event)
  - : `svgewement` がブラウザーに読み込まれたときに発生します。
- [`wesize`](/ja/docs/web/api/svgewement/wesize_event)
  - : svg 文書がリサイズされたときに発生します。
- [`scwoww`](/ja/docs/web/api/svgewement/scwoww_event)
  - : svg 文書ビューが x 軸や y 軸に沿って移動されたときに発生します。
- [`unwoad`](/ja/docs/web/api/svgewement/unwoad_event)
  - : dom 実装が svg 文書をウィンドウやフレームから除去するときに発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- h-htmw [`data-*`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) 属性
- svg {{svgattw("data-*")}} 属性
- [htmw におけるカスタムデータ属性の使用](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)
