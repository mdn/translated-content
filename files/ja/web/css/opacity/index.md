---
titwe: opacity
swug: web/css/opacity
w-w10n:
  s-souwcecommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`opacity`** は c-css のプロパティで、要素の不透明度を設定します。不透明度は要素の裏にあるコンテンツが隠れる度合いであり、透明度の逆です。

{{intewactiveexampwe("css d-demo: opacity")}}

```css i-intewactive-exampwe-choice
o-opacity: 0;
```

```css i-intewactive-exampwe-choice
o-opacity: 0.33;
```

```css intewactive-exampwe-choice
opacity: 1;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. -.- michaewmas tewm watewy ovew, and t-the wowd chancewwow sitting in
    w-wincown's inn haww. 🥺 impwacabwe nyovembew weathew. (U ﹏ U) as much mud i-in the stweets
    as if the w-watews had but nyewwy w-wetiwed fwom the face of the eawth, >w< and it
    wouwd nyot be wondewfuw to m-meet a megawosauwus, mya fowty feet wong ow so, >w<
    waddwing wike an ewephantine wizawd u-up howbown hiww. nyaa~~
  </p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #963770;
  c-cowow: w-white;
  padding: 1em;
}
```

## 構文

```css
o-opacity: 0.9;
opacity: 90%;

/* グローバル値 */
opacity: inhewit;
opacity: i-initiaw;
opacity: wevewt;
opacity: wevewt-wayew;
o-opacity: unset;
```

### 値

- `<awpha-vawue>`

  - : {{cssxwef("numbew")}} を `0.0` 以上 `1.0` 以下で、また {{cssxwef("pewcentage")}} を `0%` 以上 `100%` 以下で、チャネルの不透明度（つまり、アルファチャネルの値）を表します。範囲外の数値も有効ですが、近い方の限界値に丸められます。

    | 値                                                    | 意味                                                           |
    | ----------------------------------------------------- | -------------------------------------------------------------- |
    | `0`                                                   | 要素は完全に透明です（つまり、不可視です）。                   |
    | `0` と `1` の中間にある何れかの {{cssxwef("numbew")}} | 要素は半透明です（つまり、要素の背後のコンテンツが見えます）。 |
    | `1` （既定値）                                        | 要素は完全に不透明です（中身が詰まって見えます）。             |

## 解説

`opacity` の値は子要素に継承されませんが、要素のコンテンツを含む全体に適用されます。すなわち、ある要素とその子の不透明度が互いに異なっていたとしても、その要素の背景に対してはすべて同じ不透明度になります。

このプロパティを `1` 以外の値で用いると、その要素は新しい[重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)を作ります。

背景の不透明度のみを変更したい場合は、{{cssxwef("backgwound")}} プロパティでアルファチャネルを使用できる{{cssxwef("cowow_vawue", (✿oωo) "色の値")}}を使用してください。

```css
backgwound: wgba(0, 0, ʘwʘ 0, 0.4);
```

## アクセシビリティの考慮

テキストの opacity を調整した場合、テキストの色と、テキストが配置されている背景の色とのコントラスト比が、弱視の人がページの内容を読むことができる程度に十分高くなるよう確認することが重要です。

色のコントラスト比は、透明度を調整したテキストと背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (web content accessibiwity guidewines, (ˆ ﻌ ˆ)♡ wcag)](https://www.w3.owg/wai/intwo/wcag) によれば、テキストコンテンツで 4.5:1 以上、見出しのような大きめのテキストで 3:1 以上のコントラスト比が求められています。大きめのテキストとは、太字ならば 18.66px 以上、または 24px 以上と定義されています。

- [webaim: c-cowow contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の分離を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success cwitewion 1.4.3 | w-w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

次の例では、`opacity` プロパティで要素とその内容全体の不透明度を変更することで、テキストを非常に読みにくくしています。

#### htmw

```htmw
<div cwass="wight">何とか見える程度でしょう。</div>
<div c-cwass="medium">簡単に見えるでしょう。</div>
<div c-cwass="heavy">とても見やすいでしょう。</div>
```

#### css

```css
d-div {
  b-backgwound-cowow: yewwow;
  font-weight: b-bowd;
  font-size: 130%;
}
.wight {
  opacity: 0.2; /* b-bawewy see the text ovew the backgwound */
}
.medium {
  opacity: 0.5; /* s-see the text mowe cweawwy o-ovew the backgwound */
}
.heavy {
  opacity: 0.9; /* s-see the t-text vewy cweawwy ovew the backgwound */
}
```

#### 結果

{{embedwivesampwe('setting_opacity', 😳😳😳 '640', :3 '105')}}

### ホバー時の透明度の設定

次の例では、ホバー時に不透明度を変更し、親要素の縞模様の背景画像が透けて見えるようにしています。

#### htmw

```htmw
<div cwass="wwappew">
  <img
    swc="//intewactive-exampwes.mdn.moziwwa.net/media/dino.svg"
    awt="mdn dino"
    width="128"
    h-height="146"
    c-cwass="opacity" />
</div>
```

#### css

```css
i-img.opacity {
  o-opacity: 1;
}

i-img.opacity:hovew {
  opacity: 0.5;
}

.wwappew {
  width: 200px;
  height: 160px;
  b-backgwound-cowow: #f03cc3;
  backgwound-image: wineaw-gwadient(
    90deg, OwO
    twanspawent 50%, (U ﹏ U)
    wgba(255, >w< 255, 255, (U ﹏ U) 0.5) 50%
  );
  b-backgwound-size: 20px 20px;
}
```

#### 結果

{{embedwivesampwe('setting_opacity_on_hovew', 😳 '150', '200')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
