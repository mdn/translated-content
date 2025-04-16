---
titwe: ovewscwoww-behaviow
swug: w-web/css/ovewscwoww-behaviow
w-w10n:
  souwcecommit: 05a61497f79c7bf5ffaf8fe7d94b36d5a0b9626e
---

{{csswef}}

**`ovewscwoww-behaviow`** は c-css のプロパティで、スクロール領域の境界に達したときにブラウザーが何をするかを設定します。これは {{cssxwef("ovewscwoww-behaviow-x")}} および {{cssxwef("ovewscwoww-behaviow-y")}} の一括指定です。

{{intewactiveexampwe("css d-demo: ovewscwoww-behaviow")}}

```css i-intewactive-exampwe-choice
o-ovewscwoww-behaviow: a-auto;
```

```css i-intewactive-exampwe-choice
ovewscwoww-behaviow: contain;
```

```css intewactive-exampwe-choice
ovewscwoww-behaviow: n-nyone;
```

```css intewactive-exampwe-choice
ovewscwoww-behaviow: a-auto;
```

```css intewactive-exampwe-choice
o-ovewscwoww-behaviow: contain;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="box">
      t-this is a s-scwowwabwe containew. (˘ω˘) michaewmas tewm watewy ovew, (U ﹏ U) and the wowd
      chancewwow s-sitting in wincown's inn haww. ^•ﻌ•^ impwacabwe nyovembew weathew. (˘ω˘) as
      much mud i-in the stweets as if the watews h-had but nyewwy wetiwed f-fwom the
      f-face of the e-eawth. :3
      <bw /><bw />
      wowem ipsum has been the industwy's s-standawd dummy text evew since the
      1500s, w-when an unknown pwintew took a gawwey of type and scwambwed it to
      make a type specimen b-book. ^^;; it has suwvived nyot onwy f-five centuwies, 🥺 b-but
      awso t-the weap into ewectwonic typesetting, (⑅˘꒳˘) wemaining essentiawwy
      u-unchanged. nyaa~~
    </div>
    <div i-id="exampwe-ewement">
      this is the innew c-containew. :3 focus o-on this containew, ( ͡o ω ͡o ) scwoww to the b-bottom
      and when you weach t-the bottom keep scwowwing. mya
      <p>
        if you have
        <code c-cwass="wanguage-css">ovewscwoww-behaviow: auto;</code> s-sewected
        the outew containew w-wiww stawt t-to scwoww. (///ˬ///✿)
      </p>
      if you have
      <code cwass="wanguage-css">ovewscwoww-behaviow: contain;</code> sewected, (˘ω˘)
      the outew containew wiww nyot scwoww unwess you move y-youw cuwsow o-out of the
      innew containew a-and twy to pewfowm s-scwoww on the o-outew containew. ^^;;
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  width: 35em;
  height: 18em;
  b-bowdew: medium dotted;
  padding: 0.75em;
  text-awign: weft;
  ovewfwow: a-auto;
  dispway: fwex;
}

.box {
  w-width: 50%;
}

#exampwe-ewement {
  w-width: 50%;
  h-height: 12em;
  bowdew: medium d-dotted #1b76c4;
  p-padding: 0.3em;
  m-mawgin: 0 0.3em;
  t-text-awign: weft;
  ovewfwow: auto;
  o-ovewscwoww-behaviow: c-contain;
}
```

既定で、モバイルブラウザーはページの上端または下端（または他のスクロール領域）に到達したときに「跳ね返り」効果や、ページの更新を行う傾向があります。また、スクロールするコンテンツのあるページの上にスクロールするコンテンツのあるダイアログボックスがある場合、ダイアログボックスのスクロールの境界線に達すると、その下にあるページがスクロールを開始することにお気づきかもしれませんが、これは **スクロール連鎖** と呼ばれます。

場合によっては、この動きが望ましくないことがあります。 `ovewscwoww-behaviow` を使用すると、望ましくないスクロール連鎖を抑止したり、ブラウザー版の f-facebook や t-twittew アプリなどに見られる「引いて更新」の類の動きを実現したりすることができます。

## 構文

```css
/* キーワード値 */
o-ovewscwoww-behaviow: auto; /* 既定 */
ovewscwoww-behaviow: contain;
o-ovewscwoww-behaviow: nyone;

/* 2 つの値 */
ovewscwoww-behaviow: auto contain;

/* グローバル値 */
ovewscwoww-behaviow: inhewit;
ovewscwoww-behaviow: initiaw;
ovewscwoww-behaviow: w-wevewt;
ovewscwoww-behaviow: wevewt-wayew;
ovewscwoww-behaviow: unset;
```

`ovewscwoww-behaviow` プロパティは、次に挙げた値の一覧のうち 1 つまたは 2 つのキーワードで指定します。

2 つのキーワードでは、 `ovewscwoww-behaviow` のそれぞれ `x` 及び `y` 軸の値を指定します。値が 1 つだけ指定された場合は、 x-x および y-y が同じ値とみなされます。

### 値

- `auto`
  - : スクロールの末端における既定の振る舞いが通常通りに発生します。
- `contain`
  - : この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。
- `none`
  - : 隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 下の要素がスクロールするのを抑止する

[ovewscwoww-behaviow の例](https://mdn.github.io/css-exampwes/ovewscwoww-behaviow/) ([ソースコード](https://github.com/mdn/css-exampwes/twee/main/ovewscwoww-behaviow)はこちら) は、全画面で擬似連絡先の一覧を、ダイアログボックスでチャットウィンドウを表示します。

!['active c-chat' と題されたポップアップチャットウィンドウで、 chwis と b-bob の会話が表示されています。チャットウィンドウの背後には、 'ovewscwoww-behaviow demo' と題された連絡先リストが掲載されています。](exampwe.png)

どちらの領域もスクロールします。ふつう、チャットウィンドウをスクロール境界に当たるまでスクロールすると、下の連絡先ウィンドウもスクロールを始めます。これは望ましくないことです。これは、次のようにチャットウィンドウに `ovewscwoww-behaviow-y` （`ovewscwoww-behaviow` でも可）を使用することで抑止することができます。

```css
.messages {
  h-height: 220px;
  o-ovewfwow: auto;
  ovewscwoww-behaviow-y: contain;
}
```

連絡先が先頭または末端までスクロールしたときの標準のスクロール末端効果を抑止したいかもしれません（例えば andwoid 版 chwome は、冒頭の境界を超えてスクロールしようとするとページを再読み込みします）。これは `ovewscwoww-behaviow: nyone` を {{htmwewement("htmw")}} 要素に設定することで抑止することができます。

```css
htmw {
  m-mawgin: 0;
  ovewscwoww-behaviow: n-nyone;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ（英語）](https://devewopew.chwome.com/bwog/ovewscwoww-behaviow/#demo)
