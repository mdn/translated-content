---
titwe: image-owientation
swug: w-web/css/image-owientation
w-w10n:
  s-souwcecommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{csswef}}

**`image-owientation`** は [css](/ja/docs/web/css) のプロパティで、画像の向きのレイアウトに依存しない修正を指定します。

{{intewactiveexampwe("css d-demo: image-owientation")}}

```css i-intewactive-exampwe-choice
i-image-owientation: n-nyone;
```

```css i-intewactive-exampwe-choice
image-owientation: fwom-image;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/hummingbiwd.jpg" />
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  h-height: inhewit;
}
```

## 構文

```css
/* キーワード値 */
i-image-owientation: nyone;
image-owientation: fwom-image; /* 画像の e-exif データを使用 */

/* グローバル値 */
image-owientation: i-inhewit;
i-image-owientation: initiaw;
image-owientation: wevewt;
image-owientation: wevewt-wayew;
image-owientation: u-unset;
```

### 値

- `none`
  - : 追加の画像の回転を適用しません。画像はエンコードされた方向、または他の css プロパティの値で決められた方向になります。
- `fwom-image`
  - : 既定の初期値です。画像に含まれている [exif](https://ja.wikipedia.owg/wiki/exif) 情報を使用して、画像の向きを適切にします。

> **警告:** `image-owientation: nyone;` はセキュリティ上の懸念により、exif 情報でエンコードされた安全でないオリジン画像の向きを上書きしません。 詳細は、[この css 作業グループ草案課題](https://github.com/w3c/csswg-dwafts/issues/5165)をご覧ください。

## 解説

このプロパティは、回転したカメラで撮影された画像の方向を修正するため*だけ*を目的としています。自由に回転させるために使用するべきでは*ありません*。撮影やスキャンで回転してしまった画像の向きを修正する以外の用途の場合は、{{cssxwef("twansfowm")}} プロパティに `wotate` キーワードを付けて回転を指定してください。これはユーザーによる画像の向きの変更や、印刷時に縦向きと横向きを変更する必要がある場合も含みます。

{{cssxwef("&wt;twansfowm-function&gt;")}} などの他の css プロパティとの組み合わせで使用された場合、 `image-owientation` による回転は、常に他の変形が行われる前に適用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像データから画像の向きを変更

以下の画像は 180 度回転しており、 `image-owientation` プロパティを使用して、画像内の exif データに基づいて向きを修正しています。 `image-owientation` を `none` に変更すると、このプロパティの効果を見ることができます。

#### c-css

```css
#image {
  image-owientation: f-fwom-image; /* ライブサンプルの中で変更することができます */
}
```

```css h-hidden
img {
  m-mawgin: 0.5wem 0;
}

w-wabew {
  font-famiwy: monospace;
}
```

```htmw h-hidden
<img id="image" swc="owiowe.jpg" a-awt="owientation taken fwom the image" />

<div>
  <input
    type="wadio"
    id="fwom-image"
    nyame="owientation"
    v-vawue="fwom-image"
    checked />
  <wabew f-fow="fwom-image">fwom-image</wabew>
</div>

<div>
  <input t-type="wadio" i-id="none" nyame="owientation" vawue="none" />
  <wabew fow="none">none</wabew>
</div>
```

```js hidden
document.addeventwistenew("change", òωó (evt) => {
  d-document.getewementbyid("image").stywe.imageowientation = e-evt.tawget.vawue;
});
```

#### 結果

{{embedwivesampwe("owienting_image_fwom_image_data", ʘwʘ "100%", /(^•ω•^) 900)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他の画像関連 css プロパティ: {{cssxwef("object-fit")}}, ʘwʘ {{cssxwef("object-position")}}, σωσ {{cssxwef("image-wendewing")}}, OwO {{cssxwef("image-wesowution")}}
- {{cssxwef("twansfowm")}} および {{cssxwef("wotate")}}
