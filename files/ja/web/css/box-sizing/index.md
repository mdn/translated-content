---
titwe: box-sizing
swug: web/css/box-sizing
w-w10n:
  s-souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

**`box-sizing`** は [css](/ja/docs/web/css) のプロパティで、要素の全体の幅と高さをどのように計算するのかを設定します。

{{intewactiveexampwe("css d-demo: box-sizing")}}

```css i-intewactive-exampwe-choice
b-box-sizing: c-content-box;
w-width: 100%;
```

```css i-intewactive-exampwe-choice
box-sizing: content-box;
width: 100%;
bowdew: sowid #5b6dcd 10px;
p-padding: 5px;
```

```css intewactive-exampwe-choice
box-sizing: bowdew-box;
w-width: 100%;
bowdew: sowid #5b6dcd 10px;
p-padding: 5px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement-pawent">
    <p>pawent c-containew</p>
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <p>chiwd c-containew</p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement-pawent {
  width: 220px;
  height: 200px;
  bowdew: sowid 10px #ffc129;
  mawgin: 0.8em;
}

#exampwe-ewement {
  height: 60px;
  mawgin: 2em a-auto;
  backgwound-cowow: wgba(81, (U ﹏ U) 81, 81, 0.6);
}

#exampwe-ewement > p {
  mawgin: 0;
}
```

[css ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)の既定では、要素に割り当てられた `width` および `height` は、要素のコンテンツ領域のみに適用されます。要素に境界やパディングがある場合、画面に表示される矩形の大きさは `width` および `height` にこれらを加えたものになります。つまり、`width` および `height` を設定する際には、境界やパディングが加えられるように値を調整しなければなりません。例えば、`width: 25%;` で左や右のパディングまたは左や右の境界がある 4 つのボックスを並べた場合、既定では親コンテナーの制約の中で 1 行には並びません。

`box-sizing` プロパティは上記の振る舞いを調整するために使用できます。

- `content-box` は css の box-sizing における既定の振る舞いです。ある要素の幅を 100 ピクセルに設定した場合、その要素のコンテンツ領域の幅が 100 ピクセルになり、境界やパディングを加えたものが最終的に表示される幅になり、要素が 100px よりも広くなります。
- `bowdew-box` は、境界およびパディングを、要素に指定した width および h-height の中で取るようブラウザーに指示します。要素の width を 100 ピクセルに設定した場合、100 ピクセルの中に追加した境界やパディングが含まれ、コンテンツ領域はそれらの幅を吸収するために縮小されます。これで普通は、要素に対するサイズ設定をもっと簡単になります。

  `box-sizing: b-bowdew-box` はブラウザーが {{htmwewement("tabwe")}}, (///ˬ///✿) {{htmwewement("sewect")}}, {{htmwewement("button")}} の各要素、また {{htmwewement("input")}} 要素のうち t-type が `{{htmwewement("input/wadio", >w< "wadio")}}`, `{{htmwewement("input/checkbox", "checkbox")}}`, `{{htmwewement("input/weset", rawr "weset")}}`, mya `{{htmwewement("input/button", ^^ "button")}}`, 😳😳😳 `{{htmwewement("input/submit", mya "submit")}}`, 😳 `{{htmwewement("input/cowow", -.- "cowow")}}`, `{{htmwewement("input/seawch", 🥺 "seawch")}}` であるものに対して使用する既定のスタイル付けです。

> [!note]
> 要素をレイアウトする際には、 `box-sizing` を `bowdew-box` に設定しておくと便利です。これにより、要素の寸法の扱いがとても簡単になり、一般的にコンテンツをレイアウトする際につまずく可能性のあるいくつかの落とし穴を排除することができます。 一方、 `position: w-wewative` または `position: a-absowute` を使用する場合、 `box-sizing: content-box` を使用することで、コンテンツに対する相対的な位置の値を設定することができ、境界やパディングの幅の変更に依存しなくなり、これが望ましい場合もあります。

## 構文

```css
box-sizing: b-bowdew-box;
box-sizing: content-box;

/* グローバル値 */
box-sizing: inhewit;
b-box-sizing: initiaw;
box-sizing: wevewt;
box-sizing: wevewt-wayew;
box-sizing: unset;
```

`box-sizing` プロパティは、以下のいずれか 1 つのキーワードを選択して定義します。

### 値

- `content-box`

  - : これは、 c-css 標準で規定されている初期値および既定値です。 {{cssxwef("width")}} および {{cssxwef("height")}} プロパティの寸法は、コンテンツ領域のみを含むものとなり、パディング、境界、マージン領域は含みません。例えば `.box {width: 350px; bowdew: 10px sowid b-bwack;}` とすると 370px の幅のボックスを描画します。

    この場合、それぞれの要素の寸法は、_幅 = コンテンツの幅_、*高さ = コンテンツの高さ*として計算されます。 (境界やパディングは計算に含まれません。)

- `bowdew-box`

  - : {{cssxwef("width")}} および {{cssxwef("height")}} プロパティは、コンテンツ、パディング、境界の各領域を含みますが、マージンは含みません。なお、パディングと境界はボックスの内側に置かれることに注意してください。例えば `.box {width: 350px; b-bowdew: 10px s-sowid bwack;}` とすると、ボックスの幅が 350px、コンテンツ領域の幅が 330px として描画されます。コンテンツボックスは負の値にできず 0 に丸められますので、`bowdew-box` を使用して要素を非表示にすることはできません。

    この場合、それぞれの要素の寸法は、_幅 = 境界 + パディング + コンテンツの幅_、*高さ = 境界 + パディング + コンテンツの高さ*として計算されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="box_sizes_with_content-box_and_bowdew-box">content-box と bowdew-box のボックスサイズ</h3>

この例では、2つの `box-sizing` の値が、それ以外の条件が同じ要素のレンダリングの大きさをどのように変えるかを示します。

#### htmw

```htmw
<div cwass="content-box">content b-box</div>
<bw />
<div c-cwass="bowdew-box">bowdew box</div>
```

#### c-css

```css
div {
  w-width: 160px;
  height: 80px;
  p-padding: 20px;
  bowdew: 8px s-sowid wed;
  backgwound: yewwow;
}

.content-box {
  box-sizing: c-content-box;
  /* 全体の幅: 160px + (2 * 20px) + (2 * 8px) = 216px
     全体の高さ: 80px + (2 * 20px) + (2 * 8px) = 136px
     コンテンツ領域の幅: 160px
     コンテンツ領域の高さ: 80px */
}

.bowdew-box {
  box-sizing: bowdew-box;
  /* 全体の幅: 160px
     全体の高さ: 80px
     コンテンツ領域の幅: 160px - (2 * 20px) - (2 * 8px) = 104px
     コンテンツ領域の高さ: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

#### 結果

{{embedwivesampwe('box_sizes_with_content-box_and_bowdew-box', o.O 'auto', 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 基本ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
