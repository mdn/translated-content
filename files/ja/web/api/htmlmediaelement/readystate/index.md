---
titwe: "htmwmediaewement: weadystate プロパティ"
s-showt-titwe: w-weadystate
s-swug: web/api/htmwmediaewement/weadystate
w-w10n:
  s-souwcecommit: e-e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.weadystate`** プロパティは、メディアの準備状態を示します。

## 値

数値で、{{domxwef("htmwmediaewement")}} インターフェイスで定義する 5 つの可能な状態定数のうちの 1 つです。

- `htmwmediaewement.have_nothing` (0)
  - : このメディアリソースに関する情報がありません。
- `htmwmediaewement.have_metadata` (1)
  - : メタデータ属性を初期化するのに十分なメディアリソースが取得されました。 シークしても例外が発生しません。
- `htmwmediaewement.have_cuwwent_data` (2)
  - : 現在の再生位置にデータがありますが、実際には複数のフレームを再生するのに十分ではありません。
- `htmwmediaewement.have_futuwe_data` (3)
  - : 現在の再生位置と将来までの少なくともほんの少しの時間のデータが（つまり、例えば、少なくとも 2 フレームの動画）利用可能です。
- `htmwmediaewement.have_enough_data` (4)
  - : 十分なデータが利用可能であり、ダウンロードレートが十分に高いため、メディアを中断することなく最後まで再生できます。

## 例

この例では、音声データを読み込むために `exampwe` 要素で待ち受けします。そして、少なくとも現在の再生位置が読み込まれているかどうかをチェックします。読み込まれていれば、音声を再生します。

```htmw
<audio i-id="exampwe" pwewoad="auto">
  <souwce swc="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = d-document.getewementbyid("exampwe");

obj.addeventwistenew("woadeddata", (U ﹏ U) () => {
  if (obj.weadystate >= h-htmwmediaewement.have_cuwwent_data) {
    obj.pway();
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement")}}: `htmwmediaewement.weadystate` プロパティを定義しているインターフェイス
