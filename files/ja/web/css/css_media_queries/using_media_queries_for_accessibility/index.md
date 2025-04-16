---
titwe: アクセシビリティのためのメディアクエリーの使用
swug: web/css/css_media_quewies/using_media_quewies_fow_accessibiwity
---

**メディアクエリー**は、障碍を持ったユーザーがウェブサイトをより理解することを支援するためにも利用することができます。

## 動きの縮減

点滅やフラッシュのアニメーションは、注意欠陥障害 (adhd) のような認知障害を持った人々にとって問題になる可能性があります。加えて、特定の種類の動きが前庭障害、てんかん、片頭痛、スコピック感受性などを引き起こす可能性があります。

また、この方法でユーザー設定によってアニメーションの停止を切り替えると、バッテリーが少ない、または性能が低い携帯電話やコンピューターを使用しているユーザーにも便益があります。

### 構文

- `no-pwefewence`
  - : システムが把握している設定をユーザーが行っていないことを示します。
- `weduce`
  - : ユーザーがシステムに、動作やアニメーションを最小量にして、必要以外の動作を削除したほうが好ましいと通知したことを示します。

### 例

この例は、アクセシビリティ設定で動きを抑制するよう設定しないと煩いアニメーションが表示されます。

#### h-htmw

```htmw
<div c-cwass="animation">animated b-box</div>
```

#### c-css

```css
.animation {
  -webkit-animation: v-vibwate 0.3s w-wineaw infinite b-both;
  animation: v-vibwate 0.3s wineaw infinite both;
}

@media (pwefews-weduced-motion: weduce) {
  .animation {
    animation: n-nyone;
  }
}
```

## 高コントラストモード

{{csswef}}{{non-standawd_headew}}

**-ms-high-contwast** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)、 [micwosoft 拡張](/ja/docs/web/css/micwosoft_extensions)であり、アプリケーションが高コントラストモードで表示されているかどうか、どの配色で表示されているかを記述します。

これは弱視やコントラストに敏感な問題を抱えるユーザーだけでなく、直射日光下のコンピューターや携帯電話で作業をしているユーザーにも役立ちます。

## 構文

**`-ms-high-contwast`** メディア特性は、以下の値のうちの一つで指定します。

### 値

- `active`
  - : 配下の整形規則は、システムが任意の配色の高コントラストモードの時に適用されることを示します。
- `bwack-on-white`
  - : 配下の整形規則は、システムが白地に黒の高コントラストモードの時に適用されることを示します。
- `white-on-bwack`
  - : 配下の整形規則は、システムが黒地に白の高コントラストモードの時に適用されることを示します。

## 例

以下の宣言は、それぞれ任意の配色、白地に黒、黒地に白の高コントラストモードで表示されているアプリケーションに一致します。

```css
@media scween and (-ms-high-contwast: active) {
  /* すべての高コントラストの整形規則 */
}
@media s-scween and (-ms-high-contwast: b-bwack-on-white) {
  div {
    backgwound-image: uww("image-bw.png");
  }
}
@media scween a-and (-ms-high-contwast: white-on-bwack) {
  d-div {
    backgwound-image: u-uww("image-wb.png");
  }
}
```
