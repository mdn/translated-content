---
title: animation-duration
slug: Web/CSS/animation-duration
l10n:
  sourceCommit: 762f2305c59bd38ddd10a55b4909de7e07180f84
---

{{CSSRef}}

**`animation-duration`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 1 回のアニメーション周期が完了するまでの再生時間を設定します。

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-duration: auto; /* 既定値 */
animation-duration: 6s;
animation-duration: 120ms;

/* 複数のアニメーション */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;

/* グローバル値 */
animation-duration: inherit;
animation-duration: initial;
animation-duration: revert;
animation-duration: revert-layer;
animation-duration: unset;
```

### 値

- `auto` {{Experimental_Inline}}

  - : 時間ベースのアニメーションでは、 `auto` は `0s` の値と等価です（下記参照）。 [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)では、 `auto` はタイムライン全体をアニメーションで埋めます。

- `{{cssxref("&lt;time&gt;")}}`

  - : 1 回のアニメーションの周期にかかる時間。この値は、秒 (`s`) またはミリ秒 (`ms`) で指定することができます。値は正の数か 0 でなければならず、単位は必須です。

    値が指定されなかった場合、既定値である `0s` が使用され、この場合でもアニメーションは実行されます（[`animationStart`](/ja/docs/Web/API/Element/animationstart_event) と [`animationEnd`](/ja/docs/Web/API/Element/animationend_event) イベントが発生します）。長さが `0s` のときにアニメーションが表示されるかどうかは、下記で説明する [`animation-fill-mode`](/ja/docs/Web/CSS/animation-fill-mode) の値によります。

    - `animation-fill-mode` を `backwards` または `both` に設定した場合、 `animation-direction` で定義したアニメーションの最初のフレームが `animation-delay`(/ja/docs/Web/CSS/animation-delay) のカウントダウン中に表示されます。
    - `animation-fill-mode` が `forwards` または `both` に設定した場合、アニメーションの最後のフレームは `animation-delay` が経過した後に、 `animation-direction` で定義したように表示されます。
    - `animation-fill-mode` を `none` に設定すると、アニメーションは目に見える効果はありません。

> [!NOTE]
> 負の数は無効であり、宣言が無視されます。一部、初期の接頭辞付きの実装は `0s` と等価に解釈するかもしれません。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations#複数のアニメーションプロパティ値の設定) を参照してください。

> **メモ:** [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)を作成するとき、`animation-duration` の値を秒やミリ秒で指定することは実際には意味がありません。テストしたところ、スクロール進行タイムラインアニメーションには効果がないように見えましたが、ビュー進行タイムラインアニメーションでは、アニメーションがタイムラインの終わりに近づいて起こるようになるようでした。しかし、Firefox がアニメーションを正常に適用するには `animation-duration` の設定が要求されます。そのため、Firefoxでアニメーションが動作するように `animation-duration` を `1ms` に設定することをお勧めします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーション時間の設定

これは animation-duration が 0.7 秒のアニメーションです。

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### 結果

矩形の上にカーソルを当てると、アニメーションを開始します。

{{EmbedLiveSample("Setting animation duration","100%","250")}}

他の例については、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
- その他のアニメーション関連プロパティ: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
