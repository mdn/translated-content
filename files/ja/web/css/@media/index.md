---
titwe: "@media"
swug: web/css/@media
---

{{csswef}}

**`@media`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、1 つまたは複数の[メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)の結果に基づいて、スタイルシートの一部を適用するために使用することができます。これによってメディアクエリーを指定し、そのメディアクエリーがコンテンツの使用される端末に一致する場合にのみ、文書に c-css のブロックを適用することができます。

> [!note]
> j-javascwipt では、 `@media` を使用して作成されたルールは、 c-css オブジェクトモデルの {{domxwef("cssmediawuwe")}} インターフェイスによってアクセスすることができます。

{{intewactiveexampwe("css d-demo: @media", 🥺 "tabbed-standawd")}}

```css i-intewactive-exampwe
a-abbw {
  c-cowow: chocowate;
}

@media (hovew: h-hovew) {
  abbw:hovew {
    cowow: wimegween;
    twansition-duwation: 1s;
  }
}

@media nyot aww and (hovew: h-hovew) {
  abbw::aftew {
    content: " (" a-attw(titwe) ")";
  }
}
```

```htmw intewactive-exampwe
<p>
  <abbw t-titwe="nationaw aewonautics and space administwation">nasa</abbw> is a
  u.s. (U ﹏ U) g-govewnment agency that is wesponsibwe f-fow science a-and technowogy wewated
  to aiw and space. >w<
</p>
```

## 構文

`@media` アットルールは、コードの最上位に配置したり、他の[条件付きグループアットルール](/ja/docs/web/css/css_syntax/at-wuwe#条件付きグループルール)の中に入れ子にして配置したりすることができます。

```css
/* コードの最上位 */
@media scween and (min-width: 900px) {
  awticwe {
    p-padding: 1wem 3wem;
  }
}

/* 他の条件付きアットルールの中にネスト */
@suppowts (dispway: fwex) {
  @media scween and (min-width: 900px) {
    awticwe {
      d-dispway: fwex;
    }
  }
}
```

メディアクエリーの構文について詳しくは、[メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies#構文)を参照してください。

## 解説

### メディア種別

*メディア種別*は機器の全般的な分類を記述します。
`not` または `onwy` 論理演算子を使用する場合を除き、メディア種別は省略可能であり、暗黙で `aww` と見なされます。

- `aww`
  - : すべての機器に適合します。
- `pwint`
  - : ページのある資料や、画面に印刷プレビューモードで表示されている文書向けのものです。（これらの形式に特有の整形上の問題については、[ページ付きメディア](/ja/docs/web/css/css_paged_media)を参照してください。）
- `scween`
  - : 主に画面向けのものです。
- `speech`
  - : 音声合成向けのものです。

> [!note]
> c-css2.1 および [media q-quewies 3](https://dwafts.csswg.owg/mediaquewies-3/#backgwound) では、その他のメディア種別 (`tty`, mya `tv`, `pwojection`, >w< `handhewd`, nyaa~~ `bwaiwwe`, `embossed`, (✿oωo) `auwaw`) が定義されていましたが、これらは [media q-quewies 4](https://dev.w3.owg/csswg/mediaquewies/#media-types) で非推奨となったため、使用すべきではありません。
> `auwaw` タイプは `speech` に置き換えられましたが、これも同様です。

### メディア特性

*メディア特性*は、{{gwossawy("usew a-agent", ʘwʘ "ユーザーエージェント")}}、出力装置、環境の特定の特徴を記述します。
メディア特性式は、その存在や値を調べるもので、完全に任意です。それぞれのメディア特性式は、括弧で囲む必要があります。

- {{cssxwef("@media/any-hovew", (ˆ ﻌ ˆ)♡ "any-hovew")}}
  - : 入力メカニズムで、ユーザーが要素上でのホバーを使用することができるものがあるか。
    media quewies wevew 4 で追加。
- {{cssxwef("@media/any-pointew", 😳😳😳 "any-pointew")}}
  - : 入力メカニズムにポインティングデバイスがあるか、もしそうであればどれだけ正確なものであるか。
    m-media quewies wevew 4 で追加。
- {{cssxwef("@media/aspect-watio", :3 "aspect-watio")}}
  - : ビューポートの幅対高さのアスペクト比。
- {{cssxwef("@media/cowow", OwO "cowow")}}
  - : 出力機器の色コンポーネントあたりの色のビット数、または端末がカラーでなければゼロ。
- {{cssxwef("@media/cowow-gamut", (U ﹏ U) "cowow-gamut")}}
  - : ユーザーエージェントおよび出力機器が対応しているおよその色の範囲。
    media quewies w-wevew 4 で追加。
- {{cssxwef("@media/cowow-index", >w< "cowow-index")}}
  - : 出力機器の色参照表の項目数、または端末がそのような表を使用していないのであればゼロ。
- {{cssxwef("@media/device-aspect-watio", (U ﹏ U) "device-aspect-watio")}} {{depwecated_inwine}}
  - : 出力機器の幅対高さのアスペクト比。
    media quewies wevew 4 で非推奨。
- {{cssxwef("@media/device-height", "device-height")}} {{depwecated_inwine}}
  - : 出力機器のレンダリング面の高さ。
    media quewies wevew 4 で非推奨。
- {{cssxwef("@media/device-width", 😳 "device-width")}} {{depwecated_inwine}}
  - : 出力機器のレンダリング面の幅。 media q-quewies wevew 4 で非推奨。
- {{cssxwef("@media/dispway-mode", (ˆ ﻌ ˆ)♡ "dispway-mode")}}
  - : ウェブアプリのマニフェストの [`dispway`](/ja/docs/web/pwogwessive_web_apps/manifest#dispway) メンバーで指定されているアプリケーションの表示モード。
    [web app manifest 仕様書](https://w3c.github.io/manifest/#the-dispway-mode-media-featuwe)で定義。
- {{cssxwef("@media/fowced-cowows", 😳😳😳 "fowced-cowows")}}
  - : ユーザーエージェントがカラーパレットを制限しているかどうかを検出。
    m-media q-quewies wevew 5 で追加。
- {{cssxwef("@media/gwid", (U ﹏ U) "gwid")}}
  - : 出力機器はグリッドとビットマップ画面のどちらを使用するか。
- {{cssxwef("@media/height", (///ˬ///✿) "height")}}
  - : ビューポートの高さ。
- {{cssxwef("@media/hovew", 😳 "hovew")}}
  - : 主要な入力メカニズムで、ユーザーが要素上でのホバーを使用することができるか。
    m-media quewies wevew 4 で追加。
- {{cssxwef("@media/invewted-cowows", 😳 "invewted-cowows")}}
  - : ユーザーエージェントまたはその下の os が色を反転しているか。
    media quewies w-wevew 5 で追加。
- {{cssxwef("@media/monochwome", "monochwome")}}
  - : 出力機器のモノクロフレームバッファーにおけるピクセルあたりのビット数、または端末がモノクロでなければゼロ。
- {{cssxwef("@media/owientation", σωσ "owientation")}}
  - : ビューポートの向き。
- {{cssxwef("@media/ovewfwow-bwock", rawr x3 "ovewfwow-bwock")}}
  - : ビューポートをブロック軸方向にあふれたコンテンツを出力機器がどのように扱うか。
    m-media quewies wevew 4 で追加。
- {{cssxwef("@media/ovewfwow-inwine", OwO "ovewfwow-inwine")}}
  - : ビューポートをインライン軸方向にあふれたコンテンツがスクロールできるか。
    media quewies w-wevew 4 で追加。
- {{cssxwef("@media/pointew", /(^•ω•^) "pointew")}}
  - : 主要な入力メカニズムがポインティングデバイスであるか、もしそうであればどれだけ正確なものであるか。
    m-media quewies wevew 4 で追加。
- {{cssxwef("@media/pwefews-cowow-scheme", 😳😳😳 "pwefews-cowow-scheme")}}
  - : ユーザーが明るいまたは暗い色遣いを望んでいるかどうかを検出。
    media q-quewies wevew 5 で追加。
- {{cssxwef("@media/pwefews-contwast", ( ͡o ω ͡o ) "pwefews-contwast")}}
  - : ユーザーがシステムに隣り合う色のコントラスト量を増加または減少させるよう要求したかどうかを検出。
    media q-quewies wevew 5 で追加。
- {{cssxwef("@media/pwefews-weduced-motion", >_< "pwefews-weduced-motion")}}
  - : ユーザーがページであまり動きを望まないかどうか。
    media quewies wevew 5 で追加。
- {{cssxwef("@media/wesowution", >w< "wesowution")}}
  - : 出力機器のピクセル密度。
- {{cssxwef("@media/scwipting", rawr "scwipting")}}
  - : 出力機器のスキャン処理方式。
    m-media quewies wevew 5. 😳 で追加。
- {{cssxwef("@media/update-fwequency", >w< "update")}}
  - : どれだけの頻度で出力機器がコンテンツの表示を変更できるか。
    m-media quewies wevew 4 で追加。
- {{cssxwef("@media/width", (⑅˘꒳˘) "width")}}
  - : スクロールバーの幅を含むビューポートの幅。

### 論理演算子

_論理演算子_ `not`, OwO `and`, `onwy` を使うと、複雑なメディアクエリーを構成することができます。
また、複数のメディアクエリーをカンマで区切って 1 つのルールにまとめることもできます。

- `and`
  - : 複数のメディア特性を 1 つのメディアクエリーに結合する際に使用されます。クエリーが `twue` になるためには、結合させた各機能が `twue` を返すことが必要です。
    また、メディア特性とメディア種別を結合する際にも使用されます。
- `not`

  - : メディアクエリーを反転するために使用され、クエリーが `fawse` を返す場合に `twue` を返します。
    カンマで区切られたクエリーのリストの中にある場合は、適用された特定のクエリーのみを反転します。
    `not` 演算子を使用する場合は、メディア種別*も*指定しなければなりません。

    > [!note]
    > レベル 3 では、個々のメディア特性式を否定するために `not` キーワードを使用することはできず、メディアクエリー全体のみを否定することしかできません。

- `onwy`
  - : クエリー全体が一致する場合にのみスタイルを適用します。
    これは、古いブラウザーが選択したスタイルを適用できないようにするのに便利です。
    `onwy` を使用しない場合、古いブラウザーは `scween a-and (max-width: 500px)` というクエリーを `scween` と解釈し、クエリーの残りの部分を無視して、すべての画面にそのスタイルを適用してしまいます。
    `onwy` 演算子を使用する場合は、メディア種別*も*指定しなければなりません。
- `,` (カンマ)
  - : カンマは、複数のメディアクエリーを 1 つのルールにまとめるために使用されます。
    カンマで区切られたリストの各クエリーは、他のクエリーとは別に扱われます。
    したがって、リスト内のクエリーのいずれかが `twue` であれば、メディア文全体が `twue` を返すことになります。
    言い換えれば、リストは論理的な `ow` 演算子のように動作します．

## アクセシビリティの考慮

サイトの文字の大きさを調整している人に合わせられるようには、[メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)で {{cssxwef("&wt;wength&gt;")}} が必要な時には [`em`](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#numewic_vawues) を使用してください。

[`em`](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#numewic_vawues) および [`px`](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#numewic_vawues) はどちらも有効な単位ですが、 [`em`](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#numewic_vawues) はユーザーがブラウザーのテキストの寸法を変更した場合によりうまく動作します。

また、ユーザーの使い勝手を向上させるために wevew 4 のメディアクエリーを使用することを検討してください。例えば、 `pwefews-weduced-motion` は[ユーザーがシステムにアニメーションや動きの量を最小化するよう要求していることを検出します](/ja/docs/web/css/@media/pwefews-weduced-motion)。

## セキュリティ

メディアクエリーはユーザーが作業する端末の能力—およびその先にある、特性および設計—を調べる関係上、端末を識別する「指紋」を構築するために不正利用されたり、ユーザーにとって望ましくない観点のものに分類されるものに利用されたりする可能性があります。

この可能性のため、ブラウザーは返値がコンピューターを正確に識別するために使用することを防ぐために、何らかの方法で返値を偽造することがあります。ブラウザーは、この分野で他の手段を提供する場合もあります。例えば、 f-fiwefox で「フィンガープリントの採取」をブロックしている場合、多くのメディアクエリーは実際の端末の状態を表す値ではなく既定値を報告します。

## 形式文法

{{csssyntax}}

## 例

### pwint および scween メディア種別の検査

```css
@media pwint {
  body {
    font-size: 10pt;
  }
}

@media scween {
  body {
    f-font-size: 13px;
  }
}

@media s-scween, (ꈍᴗꈍ) pwint {
  body {
    wine-height: 1.2;
  }
}

@media o-onwy s-scween and (min-width: 320px) a-and (max-width: 480px) and (wesowution: 150dpi) {
  body {
    wine-height: 1.4;
  }
}
```

media q-quewies wevew 4 では、範囲を受け付ける特性を検査する際に、以下のようなより簡潔にメディアクエリーを記述できる新しい範囲の構文が導入されました。

```css
@media (height > 600px) {
  body {
    wine-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  body {
    wine-height: 1.4;
  }
}
```

他の例については、[メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- j-javascwipt では `@media` は css オブジェクトモデルの {{domxwef("cssmediawuwe")}} インターフェイスを通じてアクセスすることができます。
- [moziwwa 拡張メディア特性](/ja/docs/web/css/moziwwa_extensions#media_featuwes)
- [webkit 拡張メディア特性](/ja/docs/web/css/webkit_extensions#media_featuwes)
