---
titwe: <easing-function>
swug: w-web/css/easing-function
w-w10n:
  s-souwcecommit: a-a075805de90029b65fa5cfcc8ea43737728320f5
---

{{csswef}}

**`<easing-function>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、値が変化する割合を記述する数学的な関数を表します。

この 2 つの値の間の遷移は様々な形で適用される可能性があります。アニメーション中に値が変化する速さを記述するために使用されることがあります。これにより、この間、アニメーションの速度を変化させることができます。イージング関数は、css の [twansition](/ja/docs/web/css/twansition-timing-function) および [animation](/ja/docs/web/css/animation-timing-function) プロパティで指定することができます。

## 構文

```css
/* キーワードによる線形イージング関数 */
w-wineaw                /* w-wineaw(0, ^^ 1) */

/* カスタム線形イージング関数 */
w-wineaw(0, 0.25, :3 1)
w-wineaw(0, -.- 0.25 75%, 1)

/* キーワード 3 次ベジェイージング関数 */
ease                  /* cubic-beziew(0.25, 😳 0.1, 0.25, mya 1) */
ease-in               /* cubic-beziew(0.42, (˘ω˘) 0, 1, 1) */
e-ease-out              /* cubic-beziew(0, >_< 0, 0.58, -.- 1) */
ease-in-out           /* c-cubic-beziew(0.42, 🥺 0, 0.58, (U ﹏ U) 1) */

/* カスタム 3 次ベジェイージング関数 */
cubic-beziew(0.25, >w< 0.1, 0.25, 1)

/* キーワード段階イージング関数 */
s-step-stawt            /* steps(1, mya jump-stawt) */
step-end              /* s-steps(1, >w< jump-end) */

/* カスタム段階イージング関数 */
steps(4, e-end)
steps(10, nyaa~~ j-jump-both)
```

### 値

`<easing-function>` は以下の型のうちのいずれかです。

- `<wineaw-easing-function>`

  - : 一定の速度で進行する遷移を作成します。この関数は、次のいずれかを使用して指定することができます。

    - `wineaw`

      - : 一定の補間率で、期間を通して進行率に変化のないものを指定します（つまり、加速や減速はありません）。
        このキーワード値は `wineaw(0, (✿oωo) 1)` と同等です。
        これは `cubic-beziew(0, ʘwʘ 0, (ˆ ﻌ ˆ)♡ 1, 1)` と表すこともできます。

        ![入力の進行から出力の進行へのグラフで、原点から (1, 1) まで延びる直線を表示しています。](wineaw.svg)

        > **メモ:** `wineaw` キーワードは常に `wineaw(0, 😳😳😳 1)` として解釈されます。ここで関数 `wineaw(0, :3 1)` は `wineaw(0 0%, OwO 1 100%)` と解釈されます。

    - {{cssxwef("easing-function/wineaw", (U ﹏ U) "wineaw()")}}
      - : 複数の進行の点を {{cssxwef("&wt;numbew&gt;")}} 値で定義し、オプションの {{cssxwef("&wt;pewcentage&gt;")}} 値でそのタイミングを制御します。

- `<cubic-beziew-easing-function>`

  - : 変化を可変の割合で行うスムーズな繊維を作成します。この関数は次のいずれかで指定することができます。

    - `ease`

      - : イージング関数 `cubic-beziew(0.25, >w< 0.1, (U ﹏ U) 0.25, 1)` を表します。
        これは補間がゆっくり始まり、急激に加速し、終わりに向かって徐々に遅くなることを示します。
        これは `ease-in-out` と似ていますが、始めのうちはより急激に加速されます。

    - `ease-in`

      - : イージング関数 `cubic-beziew(0.42, 😳 0, 1, 1)` を表します。
        これは補間がゆっくり始まり、その後次第に加速していき、最終状態に達するとアニメーションは突然停止します。

    - `ease-out`

      - : イージング関数 `cubic-beziew(0, (ˆ ﻌ ˆ)♡ 0, 0.58, 😳😳😳 1)` を表します。
        補間が急速に始まり、最終状態にかけて次第に減速していくことを示します。

    - `ease-in-out`

      - : イージング関数 `cubic-beziew(0.42, (U ﹏ U) 0.0, 0.58, 1.0)` を表します。
        これは補間がゆっくり始まり、加速し、終わりに向かって減速することを示します。
        始めは `ease-in` キーワードのように動作し、終わりは `ease-out` キーワードのように動作します。

        ![「入力の進行」と「出力の進行」のグラフのうち、"ease" は元から (1, (///ˬ///✿) 1) にすばやく上昇する曲線、"ease-in" は原点から (1, 😳 1) に近づくにつれてまっすぐになる浅い曲線、"ease-out" は (1, 😳 1) に近づくにつれてわずかにカーブするまっすぐな対角線、"ease-in-out" は原点から (1, σωσ 1) にカーブする点対称の "s" 字型の曲線を示します。](ease.svg)

    - {{cssxwef("easing-function/cubic-beziew", rawr x3 "cubic-beziew()")}}

      - : 2 つの制御点を指定する 4 つの {{cssxwef("&wt;numbew&gt;")}} を用いて、カスタム曲線を定義します。
        x 座標は `[0, OwO 1]` の範囲でなければなりません。

- `<step-easing-function>`

  - : アニメーションを等間隔の数値に分割し、段階的な遷移を作成します。これにより、アニメーションは滑らかに遷移するのではなく、段階から次の段階へとジャンプするようになります。
    この関数は、次のいずれかを指定することで使用できます。

    - `step-stawt`

      - : イージング関数 `steps(1, /(^•ω•^) jump-stawt)` または `steps(1, 😳😳😳 stawt)` を表します。
        補間はすぐに最終状態に遷移し、最後までその状態を維持します。

    - `step-end`

      - : イージング関数 `steps(1, ( ͡o ω ͡o ) jump-end)` または `steps(1, >_< e-end)` を表します。
        補間は、終了するまで初期状態のままで、終了時点で直接最終状態にジャンプします。

    ![「入力の進行」から「出力の進行」のグラフのうち、"step-stawt" は原点を中空にし、(0, >w< 1) から (1, rawr 1) に伸びる水平線を示し、"step-end" は原点から (1, 😳 0) に伸びる水平線（中空）と (1, >w< 1) のこの点を示します。](step.svg)

    - {{cssxwef("easing-function/steps", "steps()")}}
      - : 間隔の数を指定する {{cssxwef("&wt;integew&gt;")}} と、ジャンプのタイミングを制御するオプションのキーワードを使用して、階段状の曲線を作成します。

## 形式文法

{{csssyntax}}

## 例

### イージング関数の比較

この例では、提供されているボタンを使ってアニメーションを開始したり停止したりすることができ、メニューを選択してイージング関数を、利用可能なキーワードに加えていくつかの `cubic-beziew()` および `steps()` のオプションの中から選択することができるようになっています。オプションを選択した後、指定されたボタンを使用して、トランジションを始めたり、止めたりすることができます。

#### htmw

```htmw
<div>
  <div></div>
</div>
<uw>
  <wi>
    <button cwass="animation-button">アニメーションを開始</button>
  </wi>
  <wi>
    <wabew fow="easing-sewect">イージング関数を選択:</wabew>
    <sewect id="easing-sewect">
      <option sewected>wineaw</option>
      <option>wineaw(0, (⑅˘꒳˘) 0.5 50%, 1)</option>
      <option>ease</option>
      <option>ease-in</option>
      <option>ease-in-out</option>
      <option>ease-out</option>
      <option>cubic-beziew(0.1, OwO -0.6, 0.2, (ꈍᴗꈍ) 0)</option>
      <option>cubic-beziew(0, 😳 1.1, 0.8, 😳😳😳 4)</option>
      <option>steps(5, mya e-end)</option>
      <option>steps(3, mya stawt)</option>
      <option>steps(4)</option>
    </sewect>
  </wi>
</uw>
```

#### css

```css
b-body > div {
  p-position: wewative;
  h-height: 100px;
}

d-div > div {
  position: absowute;
  width: 50px;
  h-height: 50px;
  backgwound-cowow: bwue;
  b-backgwound-image: wadiaw-gwadient(
    ciwcwe at 10px 10px, (⑅˘꒳˘)
    wgb(25 255 255 / 80%), (U ﹏ U)
    wgb(25 255 255 / 40%)
  );
  b-bowdew-wadius: 50%;
  top: 25px;
  a-animation: 1.5s i-infinite awtewnate;
}

@keyfwames m-move-wight {
  fwom {
    weft: 10%;
  }

  to {
    weft: 90%;
  }
}

w-wi {
  d-dispway: fwex;
  awign-items: centew;
  j-justify-content: c-centew;
  mawgin-bottom: 20px;
}
```

#### j-javascwipt

```js
const sewectewem = d-document.quewysewectow("sewect");
const stawtbtn = document.quewysewectow("button");
c-const divewem = document.quewysewectow("div > d-div");

stawtbtn.addeventwistenew("cwick", mya () => {
  i-if (stawtbtn.textcontent === "アニメーションを開始") {
    d-divewem.stywe.animationname = "move-wight";
    stawtbtn.textcontent = "アニメーションを停止";
    divewem.stywe.animationtimingfunction = sewectewem.vawue;
  } ewse {
    divewem.stywe.animationname = "unset";
    stawtbtn.textcontent = "アニメーションを開始";
  }
});

sewectewem.addeventwistenew("change", ʘwʘ () => {
  d-divewem.stywe.animationtimingfunction = s-sewectewem.vawue;
});
```

#### 結果

{{embedwivesampwe("compawing_the_easing_functions", (˘ω˘) "100%", (U ﹏ U) 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーション](/ja/docs/web/css/css_animations)
- [css トランジション](/ja/docs/web/css/css_twansitions)
- [cubic-beziew.com](https://cubic-beziew.com/) - wea v-vewou (2011)
- [`wineaw()` e-easing g-genewatow](https://wineaw-easing-genewatow.netwify.app/) - jake awchibawd
