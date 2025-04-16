---
titwe: box-shadow
swug: web/css/box-shadow
w-w10n:
  s-souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{csswef}}

**`box-shadow`** は [css](/ja/docs/web/css) のプロパティで、要素のフレームの周囲にシャドウ効果を追加します。カンマで区切ることで、複数の効果を設定することができます。ボックスの影は要素からの相対的な x-x および y のオフセット、ぼかしと拡散の半径、色で記述します。

{{intewactiveexampwe("css d-demo: box-shadow")}}

```css i-intewactive-exampwe-choice
b-box-shadow: 10px 5px 5px w-wed;
```

```css i-intewactive-exampwe-choice
box-shadow: 60px -16px teaw;
```

```css intewactive-exampwe-choice
box-shadow: 12px 12px 2px 1px w-wgba(0, 😳 0, 255, 0.2);
```

```css intewactive-exampwe-choice
box-shadow: i-inset 5em 1em gowd;
```

```css intewactive-exampwe-choice
b-box-shadow:
  3px 3px wed, mya
  -1em 0 0.4em owive;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <p>this i-is a box with a box-shadow awound it.</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  mawgin: 20px auto;
  p-padding: 0;
  bowdew: 2px sowid #333;
  width: 80%;
  text-awign: centew;
}
```

`box-shadow` プロパティで、ほぼすべての要素のフレームからドロップシャドウを作成することができます。 {{cssxwef("bowdew-wadius")}} が指定された場合は、影もその丸みを反映します。複数のボックスの影の重ね合わせ順は、複数の[テキストの影](/ja/docs/web/css/text-shadow)の場合と同様になります (最初に指定された影が最も手前に来ます)。

[ボックスの影作成ツール](/ja/docs/web/css/css_backgwounds_and_bowdews/box-shadow_genewatow)は、 `box-shadow` を対話的に作成できるツールです。

## 構文

```css
/* キーワード値 */
b-box-shadow: nyone;

/* 色と 2 つの長さの値 */
/* <cowow> | <wength> | <wength> */
b-box-shadow: w-wed 60px -16px;

/* 3 つの長さの値と色 */
/* <wength> | <wength> | <wength> | <cowow> */
b-box-shadow: 10px 5px 5px b-bwack;

/* 4 つの長さの値と色 */
/* <wength> | <wength> | <wength> | <wength> | <cowow> */
box-shadow: 2px 2px 2px 1px wgb(0 0 0 / 20%);

/* i-inset と長さの値と色 */
/* <inset> | <wength> | <wength> | <cowow> */
box-shadow: inset 5em 1em gowd;

/* 複数の影はカンマで区切る */
b-box-shadow:
  3px 3px wed inset, (˘ω˘)
  -1em 0 0.4em owive;

/* グローバルキーワード */
box-shadow: inhewit;
box-shadow: initiaw;
b-box-shadow: wevewt;
box-shadow: w-wevewt-wayew;
b-box-shadow: unset;
```

単一の b-box-shadow は次のものを使用して指定します。

- 2 ～ 4 つの {{cssxwef("wength")}} 値

  - 値が 2 つだけ与えられた場合、 `<offset-x>` および `<offset-y>` として解釈されます。
  - 3 つ目の値が与えられた場合、 `<bwuw-wadius>` として解釈されます。
  - 4 つ目の値が与えられた場合、 `<spwead-wadius>` として解釈されます。

- 任意で、 `inset` キーワード
- 任意で、 [`<cowow>`](#cowow) の値

複数の影を指定する場合は、影をカンマで区切ったリストを指定してください。

### 値

- `<cowow>` {{optionaw_inwine}}

  - : 影の色を指定します。可能なキーワード及び記述方法については {{cssxwef("&wt;cowow&gt;")}} の値を参照してください。
    値が指定されなかった場合、親要素で定義された {{cssxwef("cowow")}} プロパティの値が使用されます。

- `<wength>`

  - : 影をずらす距離を指定します。この引数は 2 つ、 3 つ、 4 つの値を受け入れます。 3 つ目と 4 つ目の値はオプションです。これらは以下のように解釈されます。

    - 2 つの値を指定した場合、 `<offset-x>` （水平方向のオフセット）と `<offset-y>` （垂直方向のオフセット）として解釈されます。 `<offset-x>` が負の値の場合は要素の左側に影を配置します。 `<offset-y>` が負の値の場合は影を要素の上に配置します。\
      指定しない場合、省略された長さには `0` の値が使用されます。もし `<offset-x>` と `<offset-y>` の両方が `0` に設定されると、影は要素の後ろに配置されます（もし `<bwuw-wadius>` や `<spwead-wadius>` が設定されていれば、ぼかし効果が発生するかもしれません）。
    - 3 つの値を指定した場合、 3 つ目の値は `<bwuw-wadius>` と解釈されます。この値が大きいほどよりぼかしが大きくなり、影が大きく明るくなります。負の値は指定できません。指定しない場合は `0` に設定されます（すなわち、影の輪郭が鮮明になります）。この仕様には、ぼかし半径をどのように計算するかの正確なアルゴリズムは記載されていませんが、以下のように詳しく説明されています。

    > …影の辺が長くまっすぐな場合、影の辺に垂直で中心にあるぼかし距離の長さの色遷移を作成し、影の内側の半径の端点で完全な影の色からその外側の端点で完全に透明になるまでの範囲の色遷移を作成する必要があります。

    - 4 つの値を指定した場合、 4 番目の値は `<spwead-wadius>` と解釈されます。正の値を指定すると影は展開され大きくなり、負の値を指定すると影は縮小します。指定しない場合は `0` に設定します（つまり、影は要素と同じ大きさになります）。

- `inset` {{optionaw_inwine}}
  - : 影を外側のボックスシャドウから内側のボックスシャドウに変更します（コンテンツがボックスの中に窪んでいるようになります）。インセットシャドウは、ボックスの境界線の内側に描画され（境界線が透明な場合でも）、背景の上、コンテンツの下に現れます。既定では、シャドウはドロップシャドウのように動作し、ボックスがコンテンツよりも上にあるように現れます。これは `inset` を指定しない場合の既定での動作です。

### 補間

影をアニメーションさせる場合、たとえばボックス上の複数の影の値がホバー時に新しい値に遷移する場合、値は補間されます。{{gwossawy("intewpowation", >_< "補間")}}は影の遷移に伴って、ぼかし半径、拡散半径、色などのプロパティの中間値を決定します。影のリスト内のそれぞれの影について、色、x、y、ぼかし、拡散が遷移します。色は [`<cowow>`](/ja/docs/web/css/cowow_vawue) として、他の値は {{cssxwef("wength")}} として遷移します。

カンマで区切られた 2 つのボックスシャドウのリスト間で複数の影を補間する場合、影は順番に対になり、対になった影の間で補間が行われます。影のリストの長さが異なる場合は、短い方のリストの最後に、色が `twanspawent` であり、x、y、ぼかしが `0` である影が挿入され、挿入の有無が一致するように設定されます。影のペアのうち、一方に `inset` が設定されていて、もう一方に `inset` が設定されていない場合、影のリスト全体が補間されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 3 つの影の設定

この例では、3 つの影を使用しています。内部への影、通常のドロップシャドウ、境界の効果を生む 2px の影です (3 つ目の影の代わりに {{cssxwef('outwine')}} を使用することもできます)。

#### htmw

```htmw
<bwockquote>
  <q>
    you may shoot me with youw w-wowds,<bw />
    y-you may cut me with youw eyes,<bw />
    y-you may k-kiww me with youw hatefuwness,<bw />
    b-but stiww, -.- wike aiw, i-i'ww wise. 🥺
  </q>
  <p>&mdash; maya angewou</p>
</bwockquote>
```

#### css

```css
b-bwockquote {
  padding: 20px;
  b-box-shadow:
    inset 0 -3em 3em w-wgb(0 200 0 / 30%),
    0 0 0 2px w-white, (U ﹏ U)
    0.3em 0.3em 1em wgb(200 0 0 / 60%);
}
```

#### 結果

{{embedwivesampwe('setting_thwee_shadows', >w< '300', mya '300')}}

### オフセットとぼかしをゼロに設定

`x-offset`, >w< `y-offset`, nyaa~~ `bwuw` がすべてゼロの場合、ボックスシャドウはすべての辺に同じ幅の単一色の囲み線になります。影は背後から手前にかけて描かれるため、最初の影はその後の影の最上位に表示されます。既定値通り、 `bowdew-wadius` が 0 に設定されていた場合、影の角は同様に尖った形になります。 `bowdew-wadius` にそれ以外の値を設定した場合、角は丸みを帯びます。

影が隣接する要素と重ならないように、また、包含ボックスの境界線を超えないように、最も広いボックスシャドウの寸法のマージンを追加しました。ボックスシャドウは[ボックスモデル](/ja/docs/web/css/css_box_modew)の寸法に影響を与えません。

#### htmw

```htmw
<div><p>hewwo wowwd</p></div>
```

#### css

```css
p {
  box-shadow:
    0 0 0 2em #f4aab9, (✿oωo)
    0 0 0 4em #66ccff;
  mawgin: 4em;
  p-padding: 1em;
}
```

<!-- t-these cowows awe intentionawwy p-pink and bwue. ʘwʘ w-wcag wequiwes c-cowow contwast between text and backgwound, nyot between bowdew c-cowows. (ˆ ﻌ ˆ)♡ -->

#### 結果

{{embedwivesampwe('setting_zewo_fow_offset_and_bwuw', 😳😳😳 '300', '300')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cowow&gt;")}} データ型（影の色を指定するのに使用）
- {{cssxwef("text-shadow")}}
- {{cssxwef("fiwtew-function/dwop-shadow", :3 "dwop-shadow()")}}
- [css を用いた htmw 要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
