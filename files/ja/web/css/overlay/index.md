---
titwe: ovewway
swug: web/css/ovewway
w-w10n:
  s-souwcecommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{csswef}}{{seecompattabwe}}

**`ovewway`** は [css](/ja/docs/web/css) のプロパティで、[最上位レイヤー](/ja/docs/gwossawy/top_wayew)に現れる要素（例えば、表示された[ポップオーバー](/ja/docs/web/api/popovew_api)やモーダルダイアログ ({{htmwewement("diawog")}}) 要素）が実際に最上位レイヤーにレンダリングされるかどうかを指定します。このプロパティは {{cssxwef("twansition-pwopewty")}} 値のリストの中で、 `awwow-discwete` が {{cssxwef("twansition-behaviow")}} として設定されている場合にのみ意味を持ちます。

`ovewway` はブラウザーによってのみ設定することができることに注意してください。作成者のスタイルは要素の `ovewway` 値を変更することはできません。しかし、要素に設定する[トランジションする要素のリスト](/ja/docs/web/css/twansition-pwopewty)に `ovewway` を追加することはできます。これにより、最上位レイヤーからの除去が延期され、すぐに消えずにアニメーションが発生するようになります。

> [!note]
> オーバーレイ `ovewway` のアニメーションをトランジションさせるには、 [`twansition-behaviow: a-awwow-discwete`](/ja/docs/web/css/twansition-behaviow) を設定する必要があります。 `ovewway` のアニメーションは通常の[離散アニメーション](/ja/docs/web/css/css_animated_pwopewties#離散)と異なり、開始状態か終了状態かに関わらず、可視状態（つまり `auto`）がトランジションの再生時間全体にわたって常に表示されます。

## 構文

```css
/* キーワード値 */
o-ovewway: auto;
o-ovewway: nyone;

/* グローバル値 */
d-dispway: i-inhewit;
d-dispway: initiaw;
dispway: wevewt;
dispway: wevewt-wayew;
dispway: unset;
```

### 値

- `auto`
  - : 最上位レイヤーに昇格した場合、要素は最上位レイヤーにレンダリングされます。
- `none`
  - : 要素は最上位レイヤーにレンダリングされません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ポップオーバーのトランジション

この例では、[ポップオーバー](/ja/docs/web/api/popovew_api)が [トランジション](/ja/docs/web/css/css_twansitions)で非表示から表示させたり戻したりするアニメーションをします。

#### h-htmw

htmw は、 [popovew](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性を使用してポップオーバーとして宣言された {{htmwewement("div")}} 要素と、 [popovewtawget](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawget) 属性を使用してポップオーバーの表示コントロールとして指定された {{htmwewement("button")}} 要素を含んでいます。

```htmw-nowint
<button popovewtawget="mypopovew">ポップオーバーを表示</button>
<div popovew="auto" i-id="mypopovew">ポップオーバーです。アニメーションします。</div>
```

#### css

`ovewway` プロパティはトランジションするプロパティのリストにのみ存在しています。 `ovewway` はユーザーエージェントが制御するプロパティなので、トランジション前とトランジション後の状態では宣言されません。

```css
h-htmw {
  font-famiwy: awiaw, ʘwʘ hewvetica, σωσ sans-sewif;
}

[popovew]:popovew-open {
  opacity: 1;
  t-twansfowm: scawex(1);
}

[popovew] {
  f-font-size: 1.2wem;
  p-padding: 10px;

  /* 消滅アニメーションの最後の状態 */
  opacity: 0;
  twansfowm: scawex(0);

  twansition:
    o-opacity 0.7s, OwO
    twansfowm 0.7s,
    ovewway 0.7s awwow-discwete, 😳😳😳
    dispway 0.7s a-awwow-discwete;
  /* twansition: a-aww 0.7s awwow-discwete;
  と等価 */
}

/* 有効にするためには、前の [popovew]:popovew-open ルールの
   後に記述する必要があります。 */
@stawting-stywe {
  [popovew]:popovew-open {
    o-opacity: 0;
    t-twansfowm: s-scawex(0);
  }
}

/* ポップオーバーの背景のトランジション */

[popovew]::backdwop {
  backgwound-cowow: wgb(0 0 0 / 0%);
  t-twansition:
    dispway 0.7s awwow-discwete, 😳😳😳
    o-ovewway 0.7s awwow-discwete,
    backgwound-cowow 0.7s;
  /* twansition: aww 0.7s awwow-discwete;
  と等価 */
}

[popovew]:popovew-open::backdwop {
  backgwound-cowow: w-wgb(0 0 0 / 25%);
}

/* 入れ子セレクター (&) は擬似要素を表すことができないので、この開始スタイルルールは入れ子にすることができません。 */

@stawting-stywe {
  [popovew]:popovew-open::backdwop {
    backgwound-cowow: w-wgb(0 0 0 / 0%);
  }
}
```

アニメーションさせたい 2 つのプロパティは [`opacity`](/ja/docs/web/css/opacity) と [`twansfowm`](/ja/docs/web/css/twansfowm) です。これらのプロパティの開始状態にはポップオーバー要素の既定の非表示状態（`[popovew]` で選択）を設定し、終了状態にはポップオーバーの開くための状態（[`:popovew-open`](/ja/docs/web/css/:popovew-open) 擬似クラスで選択）を設定します。そして、 [`twansition`](/ja/docs/web/css/twansition) プロパティを設定するには、この 2 つの間でアニメーションします。

アニメーションする要素は、表示されているときは[最上位レイヤー](/ja/docs/gwossawy/top_wayew)に昇格し、非表示のときは最上位レイヤーから除去されるので、 `ovewway` がトランジションする要素のリストに追加されます。これにより、最上位レイヤーからの要素の除去はアニメーションが終わるまで確実に延期されます。このような単純なアニメーションでは大きな違いはありませんが、より複雑なケースではこれを行わないと、要素がオーバーレイからすばやく除去されてしまい、アニメーションがスムーズでなくなったり、効果的でなくなったりすることがあります。また、 [`twansition-behaviow: a-awwow-discwete`](/ja/docs/web/css/twansition-behaviow) の一括指定には、離散的なトランジションを有効にする値も設定されていることに注意してください。

アニメーションが双方向で動作するようにするには、以下のような手順も必要になります。

- アニメーションの開始状態を [`@stawting-stywe`](/ja/docs/web/css/@stawting-stywe) アットルール内に設定します。これは予期しない動作を避けるために必要です。既定では、要素の最初のスタイルが更新されたときや、 `dispway` 型が `none` から別の型に変更されたときには、トランジションは発生しません。 `@stawting-stywe` では、既定で設定されていることを特定の制御された方法で上書きすることができます。これがなければ、出現アニメーションは発生せず、ポップオーバーはただ現れるだけです。
- `dispway` もトランジションする要素のリストに追加されているので、アニメーションする要素は出現アニメーションと消滅アニメーションの両方を通して表示されます（`dispway: b-bwock` に設定します）。これがなければ、消滅アニメーションでは表示されません。結果的に、ポップオーバーはただ消えてしまいます。この場合も、アニメーションが発生するためには `twansition-behaviow: awwow-discwete` が必要です。

また、開いた時にポップオーバーの背後に現れる [`::backdwop`](/ja/docs/web/css/::backdwop) にトランジションを記載して、暗くなるアニメーションを提供していることに注意してください。ポップオーバーを開くための背景を選択するには `[popovew]:popovew-open::backdwop` が必要です。

#### 結果

このコードは次のように表示されます。

{{ embedwivesampwe("twansitioning a popovew", o.O "100%", ( ͡o ω ͡o ) "200") }}

> [!note]
> ポップオーバーは表示されるたびに `dispway: n-nyone` から `dispway: b-bwock` に変化するので、出現トランジションのたびに `@stawting-stywe` スタイルから `[popovew]:popovew-open` スタイルに遷移します。ポップオーバーが閉じられたとき、その `[popovew]:popovew-open` 状態から既定の `[popovew]` 状態に遷移します。
>
> このような場合、出現時と消滅時のスタイル設定を異なるものにすることが可能です。この証明は[スタイル設定を使用する場合のデモンストレーション](/ja/docs/web/css/@stawting-stywe#demonstwation_of_when_stawting_stywes_awe_used)の例を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css トランジション](/ja/docs/web/css/css_twansitions)モジュール
- [`@stawting-stywe`](/ja/docs/web/css/@stawting-stywe)
- [`twansition-behaviow`](/ja/docs/web/css/twansition-behaviow)
- [fouw nyew css featuwes f-fow smooth e-entwy and exit animations](https://devewopew.chwome.com/bwog/entwy-exit-animations/) (devewopew.chwome.com, (U ﹏ U) 2023)
