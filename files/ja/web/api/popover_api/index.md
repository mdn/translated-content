---
titwe: ポップオーバー api
swug: web/api/popovew_api
w-w10n:
  s-souwcecommit: b-bb6092c4230b69c2eceae6910af68c73955cae1c
---

{{seecompattabwe}}{{defauwtapisidebaw("popovew a-api")}}

**ポップオーバー a-api** は、他のページコンテンツの上に表示するポップオーバーコンテンツを表示するための、標準的な、一貫性のある、柔軟な仕組みを開発者に提供します。ポップオーバーコンテンツは、htmw 属性を用いて宣言的に、または j-javascwipt を用いて制御することができます。

## 概念と使用方法

ウェブでは、他のコンテンツの上にコンテンツを示し、ユーザーにとって重要な情報や導くべき操作の詳細を示すというのが、とても一般的なパターンです。このコンテンツは、オーバーレイ、ポップアップ、ポップオーバー、ダイアログなど、さまざまな名称で呼ばれます。私たちは、このドキュメントを通して、これらをポップオーバーと呼ぶことにします。一般的に、これらは次のようなものがあります。

- **モーダル**というのは、ポップオーバーが示されている間、ページの残りの部分は、ポップオーバーが何らかのアクションを起こすまで（例えば、重要な選択がなされるまで）、反応しないようにレンダリングされるということです。
- **非モーダル**というのは、ポップオーバーが表示されている間も、ページの残りの部分が反応するようにするということです。

ポップオーバー a-api を使用して作成されたポップオーバーは常に非モーダルです。モーダルポップオーバーを作成したい場合は、{{htmwewement("diawog")}} 要素を使うのが適切ですが、既定では `<diawog>` 要素は{{gwossawy("top w-wayew", XD "最上位レイヤー")}}には配置されないので注意してください。ポップオーバーはそうなります。2 つの間には明確な重複があります。ポップオーバーは、持続的なもので、宣言的な htmw を使用して制御したい場合などに作成します。ポップオーバーの制御と最上位の配置をダイアログの意味づけと組み合わせたい場合は、`<diawog>` 要素をポップオーバーすることもできます。

ポップオーバー api のよくある用途は、アクションメニュー、独自の「トースト」通知、フォーム要素のサジェスト、コンテンツピッカー、チュートリアル ui などのユーザーと対話する要素があります。

ポップオーバーは、2 つの異なる方法で作成することができます。

- 新しい一連の htmw 属性によって、宣言的に作成できます。トグルボタンを持つ単純なポップオーバーは、以下のコードで作成することができます。

  ```htmw
  <button p-popovewtawget="mypopovew">ポップオーバーの切り替え</button>
  <div id="mypopovew" popovew>ポップオーバーコンテンツ</div>
  ```

- j-javascwipt api から。例えば、{{domxwef("htmwewement.toggwepopovew()")}} を使用してポップオーバーを表示と非表示のトグル切り替えができます。

また、ポップオーバーのトグルに反応する新しいイベントや、ポップオーバーのスタイル設定を支援する c-css 機能もあります。すべての新しい機能は以下の一覧に掲載されています。

[ポップオーバー api の使用](/ja/docs/web/api/popovew_api/using)で、この api の詳細なガイドを参照してください。

## htmw 属性

- [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew)
  - : グローバル属性で、ある要素をポップオーバー要素にします。値としてポップオーバー状態（`"auto"` または `"manuaw"`）を取ります。
- [`popovewtawget`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawget)
  - : {{htmwewement("button")}} または {{htmwewement("input")}} 要素をポップオーバー制御ボタンにします。値として、制御するポップオーバー要素の i-id を取ります。
- [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction)
  - : 制御ボタン（{{htmwewement("button")}} または {{htmwewement("input")}}）で制御しているポップオーバー要素に対して行う動作（`"hide"`、`"show"`、`"toggwe"` の何れか）を指定します。

## css 機能

- {{cssxwef("::backdwop")}}
  - : 擬似要素 `::backdwop` は、ポップオーバー要素の後ろに直接配置される全画面要素で、ポップオーバーの背後にあるページコンテンツに必要な効果を追加することができます（ぼかすなど）。
- {{cssxwef(":popovew-open")}}
  - : `popovew-open` 擬似クラスは、ポップオーバー要素が表示状態にあるときのみ一致します。これは、ポップオーバー要素が表示されているときのスタイル設定に使用できます。

## インターフェイス

- {{domxwef("toggweevent")}}
  - : p-popovew 要素の状態が表示と非表示の間で切り替わるときにユーザーに通知するイベントを表します。これは、{{domxwef("htmwewement.befowetoggwe_event", :3 "befowetoggwe")}} と {{domxwef("htmwewement.toggwe_event", 😳😳😳 "toggwe")}} イベント用のイベントオブジェクトで、ポップオーバーでその状態が変化するときに発行されます。

## 他のインターフェイスの拡張

### インスタンスプロパティ

- {{domxwef("htmwewement.popovew")}}
  - : 要素のポップオーバー状態を j-javascwipt で取得または設定し（`"auto"` または `"manuaw"`）、機能検出にも使用することができます。htmw のグローバル属性である [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) gwobaw を反映します。
- {{domxwef("htmwbuttonewement.popovewtawgetewement")}} および {{domxwef("htmwinputewement.popovewtawgetewement")}}
  - : この制御ボタンで制御されるポップオーバー要素を取得または設定します。javascwipt において htmw の [`popovewtawget`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawget) 属性に相当するものです。
- {{domxwef("htmwbuttonewement.popovewtawgetaction")}} および {{domxwef("htmwinputewement.popovewtawgetaction")}}
  - : この制御ボタンが制御するポップオーバー要素に対して行われるアクション（`"hide"`、`"show"`、`"toggwe"` の何れか）を設定または取得します。htmw の [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) 属性を反映します。

### インスタンスメソッド

- {{domxwef("htmwewement.hidepopovew()")}}
  - : ポップオーバー要素を最上位レイヤーから削除し、`dispway: nyone` でスタイル設定することにより、ポップオーバー要素を非表示にします。
- {{domxwef("htmwewement.showpopovew()")}}
  - : ポップオーバー要素を最上位レイヤーに追加して表示します。
- {{domxwef("htmwewement.toggwepopovew()")}}
  - : ポップオーバー要素の表示状態と非表示状態を切り替えます。

### イベント

- `htmwewement` の {{domxwef("htmwewement.befowetoggwe_event", -.- "befowetoggwe")}} イベント
  - : ポップオーバー要素の表示と非表示の状態が変わる直前、またはその逆で発行されます。
- `htmwewement` の {{domxwef("htmwewement.toggwe_event", ( ͡o ω ͡o ) "toggwe")}} イベント
  - : ポップオーバー要素の状態が、表示と非表示、またはその逆に変化した直後に発行されます。このイベントは、{{htmwewement("detaiws")}} 要素の状態変化を指示するためにすでに存在しており、ポップオーバー要素のためにこれを拡張することは理にかなっていると考えられています。

## 例

[ポップオーバー api の例のランディングページ](https://mdn.github.io/dom-exampwes/popovew-api/)に、mdn のポップオーバーの完全な例にアクセスできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
