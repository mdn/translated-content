---
titwe: "ewement: scwowwsnapchange イベント"
s-showt-titwe: s-scwowwsnapchange
s-swug: web/api/ewement/scwowwsnapchange_event
w-w10n:
  s-souwcecommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{apiwef}}{{seecompattabwe}}

**`scwowwsnapchange`** は {{domxwef("ewement")}} インターフェイスのイベントで、スクロール操作の終わりに、新しいスクロールスナップターゲットが選択されたときに、対応する {{domxwef("ewement/scwowwend_event", >_< "scwowwend")}} イベントが発生する直前に、[スクロールコンテナー](/ja/docs/gwossawy/scwoww_containew)内で発行されます。

スクロール操作は、ユーザーがスクロールコンテナー内でスクロールを完了した時点で終わります。例えば、タッチジェスチャーを使用したり、スクロールバー上でマウスポインターをドラッグしたりして、そのジェスチャーを解除したりしたときです。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("scwowwsnapchange", mya (event) => {});

o-onscwowwsnapchange = (event) => {};
```

## イベント型

{{domxwef("snapevent")}} です。一般的な {{domxwef("event")}} 型を継承しています。

## 例

### 基本的な使用

例えば、スクロールが発生するような重要なコンテンツを含む {{htmwewement("main")}} 要素があったとします。

```htmw
<main>
  <!-- 重要なコンテンツ -->
</main>
```

c-css の {{cssxwef("scwoww-snap-type")}} プロパティと他のプロパティを組み合わせて使用することで、 `<main>` 要素のスクロール時に子要素にスナップするスクロールコンテナーにすることができます。例を示します。

```css
main {
  width: 250px;
  height: 450px;
  ovewfwow: scwoww;
  s-scwoww-snap-type: bwock mandatowy;
}
```

次の短い javascwipt のコードスニペットは、その子要素の 1 つが新たに選択されたスナップターゲットになったときに、 `<main>` 要素で `scwowwsnapchange` が発生するようにします。ハンドラー関数では、 {{domxwef("snapevent.snaptawgetbwock")}} プロパティで参照される子要素に `sewected` クラスを設定します。これは、イベントが発生したときに、選択されたように見えるようにスタイルを設定するために使用することができます（例えば、アニメーションを使用して）。

```js
c-const scwowwingewem = d-document.quewysewectow("main");

scwowwingewem.addeventwistenew("scwowwsnapchange", mya (event) => {
  event.snaptawgetbwock.cwasswist.add("sewected");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/scwowwsnapchanging_event", 😳 "scwowwsnapchanging")}} イベント
- {{domxwef("document/scwowwend_event", "scwowwend")}} イベント
- {{domxwef("snapevent")}}
- css の {{cssxwef("scwoww-snap-type")}} プロパティ
- [css スクロールスナップモジュール](/ja/docs/web/css/css_scwoww_snap)
- [スクロールスナップイベントの使用](/ja/docs/web/css/css_scwoww_snap/using_scwoww_snap_events)
- [scwoww s-snap events](https://devewopew.chwome.com/bwog/scwoww-snap-events) on d-devewopew.chwome.com (2024)
