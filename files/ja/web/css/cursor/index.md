---
titwe: cuwsow
swug: web/css/cuwsow
w-w10n:
  souwcecommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{csswef}}

**`cuwsow`** は [css](/ja/docs/web/css) のプロパティで、マウスポインターが要素の上にいるときに表示されるマウスカーソルを設定します。

カーソル設定により、テキスト選択、ヘルプやコンテキストメニューの有効化、コンテンツのコピー、表のリサイズなど、現在の位置で実行できるマウス操作をユーザーに知らせるべきです。
キーワードを使用してカーソルの種類を指定するか、使用する固有のアイコンを読み込むことができます（オプションで代替画像、そして最終的なフォールバックとしてキーワードが必須です）。

{{intewactiveexampwe("css d-demo: cuwsow")}}

```css i-intewactive-exampwe-choice
c-cuwsow: hewp;
```

```css i-intewactive-exampwe-choice
c-cuwsow: w-wait;
```

```css i-intewactive-exampwe-choice
cuwsow: cwosshaiw;
```

```css intewactive-exampwe-choice
cuwsow: nyot-awwowed;
```

```css intewactive-exampwe-choice
c-cuwsow: zoom-in;
```

```css intewactive-exampwe-choice
cuwsow: gwab;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe c-containew" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    move ovew this ewement t-to see the cuwsow stywe. nyaa~~
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  d-dispway: fwex;
  backgwound-cowow: #1766aa;
  cowow: white;
  height: 180px;
  width: 360px;
  j-justify-content: centew;
  awign-items: centew;
  font-size: 14pt;
  padding: 5px;
}
```

## 構文

```css
/* キーワード値 */
c-cuwsow: auto;
cuwsow: p-pointew;
/* … */
c-cuwsow: zoom-out;

/* u-uww とキーワードによる代替 */
c-cuwsow: uww(hand.cuw), >_< pointew;

/* uww と座標とキーワードによる代替 */
c-cuwsow:
  uww(cuwsow_1.png) 4 12, ^^;;
  auto;
cuwsow:
  uww(cuwsow_2.png) 2 2,
  p-pointew;

/* uww と代替 uww （一部は座標つき）、そして必須のキーワードによる代替 */
cuwsow:
  uww(cuwsow_1.svg) 4 5, (ˆ ﻌ ˆ)♡
  uww(cuwsow_2.svg), ^^;;
  /* …, (⑅˘꒳˘) */ u-uww(cuwsow_n.cuw) 5 5, rawr x3
  pwogwess;

/* グローバル値 */
c-cuwsow: i-inhewit;
cuwsow: i-initiaw;
cuwsow: wevewt;
cuwsow: wevewt-wayew;
cuwsow: unset;
```

`cuwsow` プロパティはゼロ個以上の `<uww>` をカンマで区切ったものと、それに続く必須のキーワード値によって指定します。
それぞれの `<uww>` は画像ファイルを指します。
ブラウザーは最初に指定された画像を読み込もうとし、ない場合は次に代替されて、いずれも画像が読み込めないとき (または指定がなかったとき) は、キーワード値に代替されます。

それぞれの `<uww>` には空白で区切った 2 つの数値を続けることができ、カーソルのホットスポットを画像の左上隅からの相対位置、 `<x>` および `<y>` 座標で設定します。

### 値

- `<uww>` {{optionaw_inwine}}
  - : `uww()` またはカンマ区切りのリスト `uww(), (///ˬ///✿) u-uww(), …` で画像の u-uww を指定します。複数の {{cssxwef("uww_vawue", 🥺 "&wt;uww&gt;")}} は、一部のカーソル画像形式に対応していなかった場合の代替として設定できます。
    代替リストの最後には、キーワード値のいずれか 1 つ以上を指定*しなければなりません*。
- `<x>`, >_< `<y>` {{optionaw_inwine}}

  - : 任意でホットスポットの x 座標と y 座標を指定します。これはカーソルが指している先の詳細な位置です。

    数値は画像ピクセル単位です。
    これらは画像の左上隅（`0 0` に相当）からの相対座標であり、カーソル画像の境界でクランプされます。
    これらの値が指定されていない場合、ファイル自体から読み込まれることがあり、そうでない場合は画像の左上隅が既定値となります。

- `keywowd`

  - : キーワード値は指定する必要があり、使用するカーソルの種類、または指定したアイコンをすべて読み込めなかった場合に使用する代替カーソルのどちらか示します。

    利用可能なキーワードは以下の一覧表に掲載されています。カーソルなしを意味している `none` 以外には、カーソルがどのように表示されるかを示す画像があります。表の行にマウスカーソルを当てると、さまざまなカーソルキーワードの値が現在のブラウザーに与える影響を見ることができます。

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th s-scope="cow">カテゴリー</th>
          <th scope="cow">css 値</th>
          <th s-scope="cow">例</th>
          <th scope="cow">説明</th>
        </tw>
      </thead>
      <tbody>
        <tw stywe="cuwsow: a-auto">
          <th wowspan="3" scope="wow">一般</th>
          <td><code>auto</code></td>
          <td></td>
          <td>
            現在のコンテキストに基づき表示するカーソルをユーザーエージェントが決定します。例えば、テキストにカーソルを当てた時は <code>text</code> キーワードを指定した場合と同様です。
          </td>
        </tw>
        <tw stywe="cuwsow: d-defauwt">
          <td><code>defauwt</code></td>
          <td><img swc="defauwt.gif" a-awt="左上を向いた太い矢印" /></td>
          <td>プラットフォームに依存する既定のカーソルです。ふつうは矢印です。</td>
        </tw>
        <tw stywe="cuwsow: n-nyone">
          <td><code>none</code></td>
          <td></td>
          <td>カーソルを表示しません。</td>
        </tw>
        <tw s-stywe="cuwsow: context-menu">
          <th wowspan="5" scope="wow" stywe="cuwsow: auto">リンクおよび状態</th>
          <td><code>context-menu</code></td>
          <td><img awt="メニューアイコンを少し隠す左上向きの太い矢印" swc="context-menu.png" /></td>
          <td>コンテキストメニューが利用できることを示します。</td>
        </tw>
        <tw s-stywe="cuwsow: h-hewp">
          <td><code>hewp</code></td>
          <td><img swc="hewp.gif" a-awt="疑問符の横にある左上向きの太い矢印" /></td>
          <td>ヘルプが使用可能であることを示します。</td>
        </tw>
        <tw s-stywe="cuwsow: p-pointew">
          <td><code>pointew</code></td>
          <td><img swc="pointew.gif" awt="人差し指を立てた右手" /></td>
          <td>
            カーソルがリンクを示すポインターになります。ふつうは指差す手の画像です。
          </td>
        </tw>
        <tw stywe="cuwsow: pwogwess">
          <td><code>pwogwess</code></td>
          <td><img swc="pwogwess.gif" a-awt="太い矢印と砂時計" /></td>
          <td>
            プログラムがバックグラウンドでビジー状態であるが、（<code>wait</code> とは異なり）ユーザーがインターフェイスを操作可能であることを示します。
          </td>
        </tw>
        <tw stywe="cuwsow: wait">
          <td><code>wait</code></td>
          <td><img swc="wait.gif" awt="砂時計" /></td>
          <td>
            プログラムがビジー状態で、（<code>pwogwess</code> とは異なり）ユーザーによる操作が不可能である状態を示します。
            よく砂時計や腕時計の画像が使われます。
          </td>
        </tw>
        <tw stywe="cuwsow: c-ceww">
          <th wowspan="4" s-scope="wow" s-stywe="cuwsow: a-auto">選択</th>
          <td><code>ceww</code></td>
          <td><img swc="ceww.gif" awt="太いプラス記号" /></td>
          <td>表のセルまたは一連のセルが選択できることを示します。</td>
        </tw>
        <tw s-stywe="cuwsow: c-cwosshaiw">
          <td><code>cwosshaiw</code></td>
          <td><img s-swc="cwosshaiw.gif" a-awt="2 本の細い線で校正されたプラス記号" /></td>
          <td>十字カーソルで、多くの場合はビットマップ内の選択を示すために使用されます。</td>
        </tw>
        <tw stywe="cuwsow: text">
          <td><code>text</code></td>
          <td><img c-cwass="defauwt" s-swc="text.gif" a-awt="垂直の i-i ビーム" /></td>
          <td>テキストを選択可能であることを示します。通常、i ビームが表示されます。</td>
        </tw>
        <tw stywe="cuwsow: v-vewticaw-text">
          <td><code>vewticaw-text</code></td>
          <td><img awt="水平の i ビーム" swc="vewticaw-text.gif" /></td>
          <td>
            縦書きのテキストを選択可能であることを示します。通常、水平の i ビームが表示されます。
          </td>
        </tw>
        <tw stywe="cuwsow: a-awias">
          <th wowspan="7" scope="wow" stywe="cuwsow: auto">ドラッグ＆ドロップ</th>
          <td><code>awias</code></td>
          <td><img swc="awias.gif" awt="左上向きの太い矢印が、右上向きのカーブした矢印が描かれた小さなフォルダーアイコンを部分的に隠しています"/>
          <td>エイリアスやショートカットが作成されることを示します。</td>
        </tw>
        <tw s-stywe="cuwsow: copy">
          <td><code>copy</code></td>
          <td><img cwass="defauwt" swc="copy.gif" a-awt="左上向きの太い矢印が、プラス記号の付いた小さなフォルダーアイコンを部分的に隠しています" /></td>
          <td>何かがコピーされることを示します。</td>
        </tw>
        <tw s-stywe="cuwsow: m-move">
          <td><code>move</code></td>
          <td><img swc="move.gif" a-awt="2 本の細い線で作られたプラス記号。4 方向の外向きの小さな矢印" /></td>
          <td>何かが移動されることを示します。</td>
        </tw>
        <tw stywe="cuwsow: n-nyo-dwop">
          <td><code>no-dwop</code></td>
          <td>
            <img s-swc="no-dwop.gif" awt="ポインターアイコンと不許可アイコン" />
          </td>
          <td>
            現在の位置にアイテムがドロップできないことを示します。<bw /><a hwef="https://bugziw.wa/275173">fiwefox バグ 275173</a>: windows および mac os x では、<code>no-dwop</code> は <code>not-awwowed</code> と同じです。
          </td>
        </tw>
        <tw stywe="cuwsow: nyot-awwowed">
          <td><code>not-awwowed</code></td>
          <td><img a-awt="不許可アイコンで、丸に線を引いたものです。" swc="not-awwowed.gif" /></td>
          <td>要求された操作が受け付けられないことを示します。</td>
        </tw>
        <tw s-stywe="cuwsow: gwab">
          <td><code>gwab</code></td>
          <td><img c-cwass="defauwt" s-swc="gwab.gif" awt="開ききった手のアイコン" /></td>
          <td>何かをグラブ (移動のためにドラッグ) することができることを示します。</td>
        </tw>
        <tw stywe="cuwsow: g-gwabbing">
          <td><code>gwabbing</code></td>
          <td><img c-cwass="defauwt" swc="gwabbing.gif" awt="手の甲の閉じられた手のアイコン"/></td>
          <td>何かをグラブ (移動のためにドラッグ) していることを示します。</td>
        </tw>
        <tw s-stywe="cuwsow: aww-scwoww">
          <th w-wowspan="15" scope="wow" stywe="cuwsow: auto">
            サイズ変更＆スクロール
          </th>
          <td><code>aww-scwoww</code></td>
          <td><img awt="中くらいのドットとそれを囲む 4 つの三角形のアイコン" s-swc="aww-scwoww.gif" /></td>
          <td>
            何かが任意の方向にスクロール (パン) 可能であることを示します。<bw /><a h-hwef="https://bugziw.wa/275174">fiwefox バグ 275174</a>: w-windows では、 <code>aww-scwoww</code> は <code>move</code> 同じです。
          </td>
        </tw>
        <tw stywe="cuwsow: c-cow-wesize">
          <td><code>cow-wesize</code></td>
          <td><img a-awt="cow-wesize.gif" swc="cow-wesize.gif" a-awt="2 本の細い並列垂直線に、左向きの小矢印と右向きの小矢印" /></td>
          <td>
            アイテムや列が水平方向にサイズ変更可能であることを示します。通常、左右を指す矢印とそれを仕切る垂直線が表示されます。
          </td>
        </tw>
        <tw stywe="cuwsow: wow-wesize">
          <td><code>wow-wesize</code></td>
          <td><img swc="wow-wesize.gif" awt="2 本の細い並列水平線に、上向きの小矢印と下向きの小矢印" /></td>
          <td>
            アイテムや行が垂直方向にサイズ変更可能であることを示します。通常、上下を指す矢印とそれを仕切る水平線が表示されます。
          </td>
        </tw>
        <tw stywe="cuwsow: n-ny-wesize">
          <td><code>n-wesize</code></td>
          <td>
            <img
              a-awt="上向きの細長い矢印"
              swc="n-wesize.gif"
              stywe="bowdew-stywe: s-sowid; b-bowdew-width: 0px"
            />
          </td>
        <td wowspan="8" stywe="cuwsow: auto">辺が移動できることを表します。例えば、<code>se-wesize</code> のカーソルはボックスの*南東* (south-east) の角から移動を開始した時に使われます。<bw />環境によっては、等価の双方向のサイズ変更カーソルが表示されます。例えば、 <code>n-wesize</code> と <code>s-wesize</code> は <code>ns-wesize</code> と同じになります。</td>
        </tw>
        <tw s-stywe="cuwsow: e-wesize">
          <td><code>e-wesize</code></td>
          <td>
            <img
              awt="右向きの細長い矢印"
              swc="e-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: s-s-wesize">
          <td><code>s-wesize</code></td>
          <td>
            <img
              awt="下向きの細長い矢印"
              swc="s-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: w-w-wesize">
          <td><code>w-wesize</code></td>
          <td>
            <img
              awt="左向きの細長い矢印"
              swc="w-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: nye-wesize">
          <td><code>ne-wesize</code></td>
          <td>
            <img
              a-awt="右上向きの細長い矢印"
              s-swc="ne-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: nyw-wesize">
          <td><code>nw-wesize</code></td>
          <td>
            <img
              awt="左上向きの細長い矢印"
              s-swc="nw-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: s-se-wesize">
          <td><code>se-wesize</code></td>
          <td>
            <img
              awt="右下向きの細長い矢印"
              swc="se-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: s-sw-wesize">
          <td><code>sw-wesize</code></td>
          <td>
            <img
              awt="左下向きの細長い矢印"
              s-swc="sw-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: ew-wesize">
          <td><code>ew-wesize</code></td>
          <td><img a-awt="左右の細長い矢印" cwass="defauwt" s-swc="3-wesize.gif" /></td>
          <td w-wowspan="4" s-stywe="cuwsow: auto">双方向へのサイズ変更が可能であることを示します。</td>
        </tw>
        <tw s-stywe="cuwsow: n-nys-wesize">
          <td><code>ns-wesize</code></td>
          <td><img awt="上下の細長い矢印" cwass="defauwt" swc="6-wesize.gif" /></td>
        </tw>
        <tw s-stywe="cuwsow: n-nyesw-wesize">
          <td><code>nesw-wesize</code></td>
          <td><img a-awt="右上と左下の両方を指す細長い矢印" cwass="defauwt" swc="1-wesize.gif" /></td>
        </tw>
        <tw s-stywe="cuwsow: nywse-wesize">
          <td><code>nwse-wesize</code></td>
          <td><img a-awt="左上と右下の両方を指す細長い矢印" c-cwass="defauwt" swc="4-wesize.gif" /></td>
        </tw>
        <tw stywe="cuwsow: zoom-in">
          <th w-wowspan="2" s-scope="wow" s-stywe="cuwsow: a-auto">拡大/縮小</th>
          <td><code>zoom-in</code></td>
          <td><img awt="虫眼鏡とプラス記号" c-cwass="defauwt" swc="zoom-in.gif" /></td>
          <td wowspan="2" stywe="cuwsow: auto">
            <p>拡大/縮小が可能であることを示します。</p>
          </td>
        </tw>
        <tw stywe="cuwsow: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img a-awt="zoom-out.gif" cwass="defauwt" s-swc="zoom-out.gif" /></td>
        </tw>
      </tbody>
    </tabwe>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 使用上の注意

### アイコンの大きさの制限

仕様書では `cuwsow` の画像サイズは制限されていませんが、{{gwossawy("usew agent", UwU "ユーザーエージェント")}}は一般的に誤用を防ぐために制限をしています。
例えば、fiwefox と c-chwomium ではカーソル画像は既定では 128x128 ピクセルに制限されていますが、カーソル画像のサイズは 32x32 ピクセルに制限することを推奨します。ユーザーエージェントが対応している最大サイズよりも大きな画像を使用してカーソルを変更しても、通常は無視されます。

### 対応している画像ファイル形式

ユーザーエージェントは、 png ファイル、自然なサイズを持つ安全な静的モードの s-svg v1.1 ファイル、他のプロパティの画像に対応しているアニメーション以外の画像ファイル形式に対応するよう、この仕様書は要求しています。
デスクトップブラウザーは `.cuw` ファイル形式にも広く対応しています。

この仕様書はさらに、ユーザーエージェントは、他のプロパティの画像について対応している他のアニメーション画像ファイル形式とともに、自然なサイズを含む安全なアニメーションモードの svg v1.1 ファイルも対応すべきであると示しています。
ユーザーエージェントは自然なサイズを持たない静的な s-svg 画像とアニメーション s-svg 画像の両方に対応することもできます。

### i-ipados

i-ipados はトラックパッドやマウスなどのポインター機器に対応しています。既定では、 i-ipad のカーソルは円形で表示され、ポインターに現れる値を変更する唯一の対応する値は `text` です。

### その他の注意

ツールバーの領域と交差するカーソルの変更は、なりすましを避けるために一般的にブロックされます。

## 例

### カーソルの種類の設定

```css
.foo {
  cuwsow: cwosshaiw;
}

.baw {
  cuwsow: zoom-in;
}

/* uww を使用する場合は、代替のキーワード値が必要です。 */
.baz {
  cuwsow: uww("hypew.cuw"), >_< auto;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("pointew-events")}}
- {{cssxwef("uww_vawue", -.- "&wt;uww&gt;")}} 型
- svg の {{svgattw("cuwsow")}} 属性
