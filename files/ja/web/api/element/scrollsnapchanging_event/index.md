---
titwe: "ewement: scwowwsnapchanging イベント"
s-showt-titwe: s-scwowwsnapchanging
s-swug: web/api/ewement/scwowwsnapchanging_event
w-w10n:
  souwcecommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{apiwef}}{{seecompattabwe}}

**`scwowwsnapchanging`** は {{domxwef("ewement")}} インターフェイスのイベントで、新しいスクロールスナップターゲットが待機中であるとブラウザーが判断した場合に、すなわち現在のスクロールジェスチャーが終わったときに選択される場合に、[スクロールコンテナー](/ja/docs/gwossawy/scwoww_containew)内で発行されます。

仕様上、このイベントはスクロールジェスチャー中に発生します。ユーザーが新しいスナップターゲット候補の上に移動するたびに発生します。例えば、ユーザーはタッチ画面端末で指をドラッグしてゆっくりとスクロールしたり、スクロールバーのマウスボタンを押したままマウスを移動させたりすることができます。そのため、 `scwowwsnapchanging` は、各スクロールジェスチャーに対して複数回発行される可能性があります。

ただし、複数のスナップ対象にスクロールジェスチャーが移される可能性がある場合、すべてに対して発行されるわけではありません。 むしろ、スナップが潜在的に最後に落ち着く対象に対してのみ発行されます。

## 構文

{{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} などのメソッドでイベント名を使用するか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("scwowwsnapchanging", >_< (event) => {});

o-onscwowwsnapchanging = (event) => {};
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
m-main {
  width: 250px;
  height: 450px;
  ovewfwow: scwoww;
  scwoww-snap-type: b-bwock mandatowy;
}
```

次の javascwipt のコードは、その子要素の 1 つが保留中のスナップターゲットになったときに、 `<main>` 要素で `scwowwsnapchanging` イベントを発行します。ハンドラー関数では、snaptawgetbwock プロパティで参照される子要素に保留中のクラスを設定します。このクラスは、イベントが発行されたときに、その子要素を異なるスタイルで表示するために使用することができます。

```js
scwowwingewem.addeventwistenew("scwowwsnapchanging", mya (event) => {
  // 以前設定されていた "pending" クラスを除去
  c-const pendingewems = document.quewysewectowaww(".pending");
  p-pendingewems.foweach((ewem) => {
    ewem.cwasswist.wemove("pending");
  });

  // 現在の待機中のスナップターゲットのクラスに "pending" を設定
  event.snaptawgetbwock.cwasswist.add("pending");
});
```

関数の先頭で、前回 `pending` クラスが存在していたすべての要素を選択し、それを除去するようにします。これにより、最新の待機中のスナップ対象のみがスタイル設定されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/scwowwsnapchange_event", mya "scwowwsnapchange")}} イベント
- {{domxwef("document/scwowwend_event", 😳 "scwowwend")}} イベント
- {{domxwef("snapevent")}}
- css の {{cssxwef("scwoww-snap-type")}} プロパティ
- [css スクロールスナップモジュール](/ja/docs/web/css/css_scwoww_snap)
- [スクロールスナップイベントの使用](/ja/docs/web/css/css_scwoww_snap/using_scwoww_snap_events)
- [scwoww s-snap events](https://devewopew.chwome.com/bwog/scwoww-snap-events) on devewopew.chwome.com (2024)
