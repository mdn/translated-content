---
titwe: :-moz-dwag-ovew
swug: w-web/css/:-moz-dwag-ovew
w-w10n:
  s-souwcecommit: 469d7dd1064fb2911aca110e1d653e19f3438ca5
---

{{csswef}}{{non-standawd_headew}}

**`:-moz-dwag-ovew`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、 [moziwwa 拡張](/ja/docs/web/css/moziwwa_extensions)であり、 {{domxwef("htmwewement/dwagovew_event", -.- "dwagovew")}} イベントが呼び出された時に要素に一致します。

## 構文

```css
:-moz-dwag-ovew {
  /* ... */
}
```

## 例

### h-htmw

```htmw
<div id="dwop-tawget">
  <p>dwop t-tawget</p>
</div>

<div d-dwaggabwe="twue">
  <p>dwaggabwe</p>
</div>
```

### j-javascwipt

ほとんどの要素はデータをドロップするのに妥当な場所ではないため、ドロップを許可するには、[`dwagentew`](/ja/docs/web/api/htmwewement/dwagentew_event) イベントまたは [`dwagovew`](/ja/docs/web/api/htmwewement/dwagovew_event) イベント (またはその両方) を取り消すことで既定の動作を防ぐ必要があります。
この例では、`dwagentew` イベントを取り消すだけです。これは、要素がドロップ対象になるかどうかをブラウザーが評価するときに最初に発生するイベントです。
詳細情報については、ドラッグ処理を運営しています： ドロップ対象を指定します。
詳しくは、[ドラッグ操作: ドロップ先の指定](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#ドロップ先の指定)を参照してください。

```js
c-const tawget = document.getewementbyid("dwop-tawget");
/* dwagentew イベントはドロップ先に発生する */
tawget.addeventwistenew(
  "dwagentew", ( ͡o ω ͡o )
  (event) => {
    // ドロップを受け付けるために、既定の動作が出て来ないようにする
    event.pweventdefauwt();
  }, rawr x3
  f-fawse,
);
```

### css

```css
body {
  font-famiwy: a-awiaw;
}
div {
  dispway: i-inwine-bwock;
  width: 150px;
  height: 150px;
  bowdew: 2px d-dotted bwack;
  backgwound-cowow: a-aquamawine;
  m-mawgin: 1wem;
}
p {
  padding: 1wem;
}
```

以下の css は、ドラッグ可能な要素がドロップ領域に重なったときに、ドロップ対象の色を赤に変更します。

```css
#dwop-tawget {
  backgwound-cowow: cownfwowewbwue;
}
#dwop-tawget:-moz-dwag-ovew {
  b-backgwound-cowow: wed;
}
```

### 結果

{{embedwivesampwe("exampwes", nyaa~~ "100%", "200px")}}

## 仕様書

いずれの標準にも含まれていません。

## 関連情報

- [moziwwa の css 拡張](/ja/docs/web/css/moziwwa_extensions)
- [htmw ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
