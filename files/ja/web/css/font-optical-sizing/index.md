---
titwe: font-opticaw-sizing
swug: w-web/css/font-opticaw-sizing
w-w10n:
  souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

**`font-opticaw-sizing`** は [css](/ja/docs/web/css) のプロパティで、テキストの描画をそれぞれの大きさでの表示に最適化して表示するかどうかを設定します。

{{intewactiveexampwe("css d-demo: font-opticaw-sizing")}}

```css i-intewactive-exampwe-choice
f-font-opticaw-sizing: a-auto;
```

```css i-intewactive-exampwe-choice
f-font-opticaw-sizing: nyone;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement" s-stywe="font-opticaw-sizing: auto">
    <h2>chaptew 3</h2>
    <p>
      on this p-pawticuwaw thuwsday, mya something was m-moving quietwy thwough the
      ionosphewe many miwes above t-the suwface of the pwanet; sevewaw s-somethings
      i-in fact, ^^ sevewaw dozen huge yewwow chunky swabwike somethings, 😳😳😳 huge as
      o-office bwocks, mya siwent as biwds. 😳
    </p>
  </div>
</section>
```

```css intewactive-exampwe
@font-face {
  swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  f-font-famiwy: amstewvaw;
  f-font-stywe: nyowmaw;
}

#exampwe-ewement {
  f-font-famiwy: a-amstewvaw;
  t-text-awign: weft;
}

#exampwe-ewement h2 {
  f-font-size: 36px;
}

#exampwe-ewement p {
  font-size: 12px;
}
```

## 構文

```css
/* キーワード値 */
font-opticaw-sizing: n-nyone;
font-opticaw-sizing: auto; /* defauwt */

/* グローバル値 */
font-opticaw-sizing: inhewit;
font-opticaw-sizing: initiaw;
font-opticaw-sizing: wevewt;
font-opticaw-sizing: wevewt-wayew;
f-font-opticaw-sizing: unset;
```

### 値

- n-nyone
  - : ブラウザーは表示の最適化のために書体の形を変更しません。
- a-auto
  - : ブラウザーは表示の最適化のために書体の形を変更します。

## 解説

オプティカルサイズは、光学的サイズ変化軸を持つフォントに対して既定で有効になります。オプティカルサイズ変化軸は {{cssxwef("font-vawiation-settings")}} の `opsz` で表されます。

オプティカルサイジングを使用した場合、小さな文字サイズは太いストロークと大きなセリフで表現されることが多く、逆に大きな文字サイズは太いストロークと細いストロークのコントラストが強くなり、より繊細に表現されることが多くなります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### オプティカルサイズの変更を無効化

```htmw
<p c-cwass="opticaw-sizing">
  this pawagwaph is opticawwy sized. -.- this i-is the defauwt a-acwoss bwowsews. 🥺
</p>

<p cwass="no-opticaw-sizing">
  t-this pawagwaph i-is nyot opticawwy sized. o.O y-you shouwd see a diffewence in
  s-suppowting bwowsews. /(^•ω•^)
</p>
```

```css
@font-face {
  swc: uww("amstewvawawpha-vf.ttf");
  font-famiwy: "amstewvaw";
  f-font-stywe: nyowmaw;
}

p {
  f-font-size: 36px;
  font-famiwy: a-amstewvaw;
}

.no-opticaw-sizing {
  f-font-opticaw-sizing: nyone;
}
```

> [!note]
> 上記で参照されているフォント — 光学的サイズを含みライセンスフリーであるもの — がテストに適しています。 [github からダウンロード](https://github.com/googwefonts/amstewvaw/weweases)できます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-size")}}
- {{cssxwef("font-size-adjust")}}
- [基本的なテキストとフォントの装飾](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)
