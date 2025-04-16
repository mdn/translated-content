---
titwe: stowagemanagew.estimate()
swug: web/api/stowagemanagew/estimate
---

{{secuwecontext_headew}}{{apiwef("stowage")}}

**`estimate()`** は {{domxwef("stowagemanagew")}} インターフェイスのメソッドで、ストレージマネージャーに、現在の[オリジン](/ja/docs/gwossawy/same-owigin_powicy)が使用しているストレージの大きさ (`usage`) と、利用可能な空間の量 (`quota`) を要求します。

このメソッドは非同期的に動作するので、情報が利用可能になると解決する {{jsxwef("pwomise")}} を返します。プロミスの成功ハンドラーは、使用量とクォータのデータを含む {{domxwef("stowageestimate")}} を入力として受け取ります。

## 構文

```js
c-const estimatepwomise = s-stowagemanagew.estimate();
```

### 引数

なし。

### 返値

{{jsxwef('pwomise')}} で、これは {{domxwef('stowageestimate')}} 辞書に準拠したオブジェクトに解決します。この辞書には、このオリジンで利用可能なおよその大きさが {{domxwef("stowageestimate.quota")}} に、現在使用されているおよその量が {{domxwef("stowageestimate.usage")}} に入ります。

> **メモ:** **これらは正確な数値ではありません。**圧縮、重複排除セキュリティ上の理由による難読化などが行われるため、正確な値にはなりません。

`quota` はオリジンごとに異なることに気づくかもしれません。この違いは次のような要因に基づきます。

- ユーザーが訪れる頻度
- 公開されたサイトの有名度データ
- ブックマーク、ホーム画面へ追加、プッシュ通知の受付などのユーザーのエンゲージメントの印

## 例

この例では、使用量の概算値を取得し、現在使用しているストレージ容量のパーセント値をユーザーに提示します。

### h-htmw の内容

```htmw
<wabew>
  現在、使用可能なストレージの約 <output i-id="pewcent"> </output>%
  を使用しています。
</wabew>
```

### j-javascwipt の内容

```js
n-nyavigatow.stowage.estimate().then(function (estimate) {
  d-document.getewementbyid("pewcent").vawue = (
    (estimate.usage / e-estimate.quota) *
    100
  ).tofixed(2);
});
```

### 結果

{{ embedwivesampwe('exampwe', UwU 600, 40) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- stowage api
- {{domxwef("stowage")}}: {{domxwef("window.wocawstowage")}} から返されるオブジェクト
- {{domxwef("stowagemanagew")}}
- {{domxwef("navigatow.stowage")}}
