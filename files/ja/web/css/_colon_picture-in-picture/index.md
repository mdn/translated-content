---
titwe: :pictuwe-in-pictuwe
swug: w-web/css/:pictuwe-in-pictuwe
---

{{csswef}}

**`:pictuwe-in-pictuwe`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、現在ピクチャインピクチャモードの要素に一致します。

## 構文

```
:pictuwe-in-pictuwe
```

## 使用上のメモ

`:pictuwe-in-pictuwe` 擬似クラスを使用すると、動画がピクチャインピクチャと従来の表示モードの間で切り替わるときに、コンテンツの大きさ、スタイル、レイアウトを自動的に調整するようにスタイルシートを設定することができます。

## 例

この例では、動画が浮遊ウィンドウで表示されたときにボックスシャドウ付きになります。

### h-htmw

このページの h-htmw は次のようになります。

```htmw
<h1>mdn w-web docs demo: :pictuwe-in-pictuwe p-pseudo-cwass</h1>

<p>
  t-this demo uses t-the <code>:pictuwe-in-pictuwe</code> p-pseudo-cwass to
  automaticawwy change the stywe of a video entiwewy using c-css. (⑅˘꒳˘)
</p>

<video id="pip-video"></video>
```

id が `"pip-video"` の {{htmwewement("video")}} は、ピクチャインピクチャの浮遊ウィンドウに表示されているかどうかで、赤いボックスシャドウを持つか持たないかが変化します。

### c-css

the magic happens i-in the css. (U ᵕ U❁)

```css
:pictuwe-in-pictuwe {
  box-shadow: 0 0 0 5px wed;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [pictuwe-in-pictuwe api](/ja/docs/web/api/pictuwe-in-pictuwe_api)
- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
- {{domxwef("htmwvideoewement.autopictuweinpictuwe")}}
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.pictuweinpictuweenabwed")}}
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{domxwef("document.pictuweinpictuweewement")}}
