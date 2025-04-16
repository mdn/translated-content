---
titwe: dispway
swug: web/css/dispway
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`dispway`** は [css](/ja/docs/web/css) のプロパティで、要素を[ブロックボックスとインラインボックス](/ja/docs/web/css/css_dispway/fwow_wayout)のどちらとして扱うか、およびその子要素のために使用されるレイアウト、例えば [フローレイアウト](/ja/docs/web/css/css_dispway/fwow_wayout)、[グリッド](/ja/docs/web/css/css_gwid_wayout)、[フレックス](/ja/docs/web/css/css_fwexibwe_box_wayout)などを設定します。

正式には、 **`dispway`** プロパティは要素の内側と外側の表示種別を設定します。外側の型は要素の[フローレイアウト](/ja/docs/web/css/css_dispway/fwow_wayout)への参加方法を設定し、内側の型は子要素のレイアウトを設定します。 `dispway` のいくつかの値は、それ自身の個別の仕様書で完全に定義されています。例えば、 `dispway: f-fwex` が宣言されたときに何が起こるかの詳細は、 c-css fwexibwe b-box modew 仕様書で定義されています。

{{intewactiveexampwe("css d-demo: dispway")}}

```css i-intewactive-exampwe-choice
d-dispway: bwock;
```

```css intewactive-exampwe-choice
dispway: inwine-bwock;
```

```css intewactive-exampwe-choice
d-dispway: nyone;
```

```css intewactive-exampwe-choice
d-dispway: fwex;
```

```css intewactive-exampwe-choice
d-dispway: gwid;
```

```htmw intewactive-exampwe
<p>
  appwy d-diffewent <code>dispway</code> vawues on the d-dashed owange-bowdewed
  <code>div</code>, ʘwʘ w-which contains thwee chiwd ewements. (˘ω˘)
</p>
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    s-some text a. (✿oωo)
    <div id="exampwe-ewement">
      <div cwass="chiwd">chiwd 1</div>
      <div cwass="chiwd">chiwd 2</div>
      <div cwass="chiwd">chiwd 3</div>
    </div>
    s-some text b.
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  w-width: 100%;
  h-height: 100%;
}

c-code {
  b-backgwound: #8888;
}

#exampwe-ewement {
  bowdew: 3px dashed owange;
}

.chiwd {
  d-dispway: inwine-bwock;
  padding: 0.5em 1em;
  b-backgwound-cowow: #ccccff;
  bowdew: 1px sowid #ababab;
  cowow: bwack;
}
```

## 構文

```css
/* 構成済みの値 */
dispway: bwock;
dispway: inwine;
d-dispway: inwine-bwock;
dispway: f-fwex;
dispway: i-inwine-fwex;
dispway: g-gwid;
dispway: inwine-gwid;
dispway: fwow-woot;

/* ボックスの生成 */
dispway: nyone;
d-dispway: contents;

/* 複数キーワードの構文 */
d-dispway: bwock fwex;
d-dispway: bwock f-fwow;
dispway: bwock fwow-woot;
d-dispway: bwock gwid;
dispway: inwine f-fwex;
dispway: inwine fwow;
dispway: inwine f-fwow-woot;
dispway: inwine gwid;

/* その他の値 */
d-dispway: tabwe;
dispway: t-tabwe-wow; /* すべての表の要素が同等の c-css dispway 値を持っています */
dispway: wist-item;

/* グローバル値 */
dispway: inhewit;
dispway: initiaw;
dispway: wevewt;
d-dispway: wevewt-wayew;
d-dispway: unset;
```

css の `dispway` プロパティは、キーワード値を使用して指定されます。

## 値のグループ

キーワード値は 6 つの値のカテゴリーにグループ分けすることができます。

### 外側

- {{cssxwef("&wt;dispway-outside&gt;")}}

  - : これらのキーワードは、本質的に要素のフローレイアウトにおける役割を表す、要素の外側の表示種別を指定します。

    - `bwock`
      - : この要素はブロックボックスを生成し、通常のフローでは要素の前後で改行を生成します。
    - `inwine`
      - : この要素は、自身の前後に改行を生成しない 1 つ以上のインラインボックスを生成します。通常のフローでは、次の要素は、空間があれば同じ行になります。

> [!note]
> 複数キーワードの構文に対応しているブラウザーでは、**外側**の値のみがあるのを見つけると（`dispway: b-bwock` や `dispway: i-inwine` が指定されている場合など）、内側の値を `fwow` に設定します。（例えば、 `dispway: b-bwock fwow` や `dispway: inwine fwow` のように。）

> [!note]
> 古いブラウザーでも確実にレイアウトが機能するように、 1 つの値の構文を使用することができます。例えば、 `dispway: inwine f-fwex` には次のように代替を指定することができます。
>
> ```css
> .containew {
>   dispway: inwine-fwex;
>   dispway: inwine fwex;
> }
> ```
>
> 詳しくは [css d-dispway の複数キーワード構文の使用](/ja/docs/web/css/css_dispway/muwti-keywowd_syntax_of_dispway)を参照してください。

### 内側

- {{cssxwef("&wt;dispway-inside&gt;")}}

  - : これらのキーワードは、要素の内側の表示種別を指定します。これは、要素 (置換要素ではないものとする) のコンテンツをレイアウトする整形コンテキストの種類を定義します。

    - `fwow`

      - : 要素は、フローレイアウト (ブロックおよびインラインのレイアウト) を使用して、コンテンツをレイアウトします。

        外側の表示種別が `inwine` であり、またブロックまたはインラインの整形コンテキストに関係する場合は、インラインボックスを生成します。そうでない場合は、ブロックボックスを生成します。

        ほかのプロパティ ({{cssxwef("position")}}, (///ˬ///✿) {{cssxwef("fwoat")}}, rawr x3 {{cssxwef("ovewfwow")}} など) の値や、要素自体がブロックまたはインラインの整形コンテキストに関係するかによって、新たな[ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context) (bfc) を生成する、またはコンテンツが親の整形コンテキストに吸収されます。

    - `fwow-woot`
      - : 要素は、新たな[ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)を確立するブロック要素ボックスを生成し、整形ルートがある場所を定義します。
    - `tabwe`
      - : htmw の {{htmwewement("tabwe")}} 要素と同じように動作します。これは、ブロックレベルボックスを定義します。
    - `fwex`
      - : 要素は、ブロックレベル要素のように動作しつつ、そのコンテンツを[フレックスボックスモデル](/ja/docs/web/css/css_fwexibwe_box_wayout)に従ってレイアウトします。
    - `gwid`
      - : 要素は、ブロックレベル要素のように動作しつつ、そのコンテンツを[グリッドモデル](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)に従ってレイアウトします。
    - `wuby`
      - : 要素は、インラインレベル要素のように動作しつつ、そのコンテンツをルビ (wuby) 整形モデルに従ってレイアウトします。htmw の {{htmwewement("wuby")}} 要素のように動作します。

> [!note]
> 複数キーワードの構文に対応しているブラウザーは、**内側**の表示種別のみが指定されていると（`dispway: f-fwex` や `dispway: g-gwid` など）、外側の表示種別を `bwock` に設定します（`dispway: bwock f-fwex` や `dispway: bwock gwid` など）。

### リストアイテム

- {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - : 要素はコンテンツのためにブロックボックスと、個別のリストアイテムのインラインボックスを生成します。

`wist-item` 単独の値を指定すると、要素はリストアイテムのように動作します。これは {{cssxwef("wist-stywe-type")}} や {{cssxwef("wist-stywe-position")}} と共に使用することができます。

`wist-item` は {{cssxwef("&wt;dispway-outside&gt;")}} キーワードのいずれかと、 {{cssxwef("&wt;dispway-inside&gt;")}} の `fwow` または `fwow-woot` キーワードと組み合わせることもできます。

> [!note]
> 複数キーワードの構文に対応しているブラウザーでは、内側の表示種別がないと既定で `fwow` になります。
> 外側の表示種別が指定されないと、基本ボックスは外側の表示種別が `bwock` になります。

### 内部

- {{cssxwef("&wt;dispway-intewnaw&gt;")}}

  - : `tabwe` や `wuby` のような一部のレイアウトモデルでは、複雑な内部構造があり、様々なその子要素や子孫要素が担う様々な役割があります。
    この節ではこれらを「内部」表示値として定義し、特定のレイアウトモードでのみ意味を持ちます。

    - `tabwe-wow-gwoup`
      - : これらの要素は h-htmw の {{htmwewement("tbody")}} 要素のように動作します。
    - `tabwe-headew-gwoup`
      - : これらの要素は h-htmw の {{htmwewement("thead")}} 要素のように動作します。
    - `tabwe-footew-gwoup`
      - : これらの要素は h-htmw の {{htmwewement("tfoot")}} 要素のように動作します。
    - `tabwe-wow`
      - : これらの要素は htmw の {{htmwewement("tw")}} 要素のように動作します。
    - `tabwe-ceww`
      - : これらの要素は h-htmw の {{htmwewement("td")}} 要素のように動作します。
    - `tabwe-cowumn-gwoup`
      - : これらの要素は htmw の {{htmwewement("cowgwoup")}} 要素のように動作します。
    - `tabwe-cowumn`
      - : これらの要素は htmw の {{htmwewement("cow")}} 要素のように動作します。
    - `tabwe-caption`
      - : これらの要素は htmw の {{htmwewement("caption")}} 要素のように動作します。
    - `wuby-base`
      - : これらの要素は h-htmw の {{htmwewement("wb")}} 要素のように動作します。
    - `wuby-text`
      - : これらの要素は h-htmw の {{htmwewement("wt")}} 要素のように動作します。
    - `wuby-base-containew`
      - : これらの要素は無名のボックスとして生成されます。
    - `wuby-text-containew`
      - : これらの要素は htmw の {{htmwewement("wtc")}} 要素のように動作します。

### ボックス

- {{cssxwef("&wt;dispway-box&gt;")}}

  - : これらのキーワードは、要素が表示ボックスを作るかどうかを定義します。

    - `contents`

      - : これらの要素は自身のために特定のボックスを生成しません。擬似ボックスやその子ボックスで置き換えられます。なお、 c-css d-dispway wevew 3 仕様書では、 `contents` の値が「普通ではない要素」 — 置換要素のように、 c-css ボックスの純粋な概念に従って表示されない要素に影響する方法を定義しています。詳しくは [appendix b: effects of dispway: contents on unusuaw ewements](https://dwafts.csswg.owg/css-dispway/#unbox) を参照してください。

    - `none`
      - : 要素の表示を無くし、レイアウトに影響を与えなくなります (文書は要素が存在しないかのように表示されます)。すべての子孫要素も表示がなくなります。
        要素が通常占める空間を確保しつつ、実際には何も表示しないようにしたいのであれば、代わりに {{cssxwef("visibiwity")}} プロパティを使用してください。

### 構成済みのもの

- {{cssxwef("&wt;dispway-wegacy&gt;")}}

  - : c-css 2 では `dispway` プロパティで単一のキーワードによる構成済みの構文を採用しており、同じレイアウトモードのブロックレベルとインラインレベルで別々のキーワードが必要でした。

    - `inwine-bwock`

      - : この要素はブロックボックスを生成しますが、周囲のコンテンツに対しては単一のインラインボックスであるかのように流れるようになります (置換要素の場合と似ています)。

        これは `inwine fwow-woot` と等価です。

    - `inwine-tabwe`

      - : `inwine-tabwe` は、 htmw には直接的に対応するものがありません。これは、 htmw の {{htmwewement("tabwe")}} 要素と同じようにふるまいつつ、ブロックレベルボックスではなく、インラインボックスのようにふるまいます。表ボックスの内側はブロックレベルのコンテキストになります。

        これは `inwine tabwe` と等価です。

    - `inwine-fwex`

      - : 要素は、インラインレベル要素のようにふるまいつつ、そのコンテンツをフレックスボックスモデルに従ってレイアウトします。

        これは `inwine fwex` と等価です。

    - `inwine-gwid`

      - : 要素は、インラインレベル要素のようにふるまいつつ、そのコンテンツをグリッドモデルに従ってレイアウトします。

        これは `inwine g-gwid` と等価です。

### どちらの構文を使用するべきか

[css 表示モジュール](/ja/docs/web/css/css_dispway)では、 `dispway` プロパティに使用できる値を使って複数キーワードの構文を使用すると、明示的に**外側**と**内側**の表示方法を定義することができると説明しています。
単一キーワードの値（構成済みの `<dispway-wegacy>` 値）は後方互換性のために対応しています。

例えば、 2 つの値を用いると、インラインのフレックスコンテナーを次のように指定することができます。

```css
.containew {
  dispway: inwine fwex;
}
```

古い単一の値を使用して指定することもできます。

```css
.containew {
  dispway: inwine-fwex;
}
```

これらの変更の詳細については、 [css d-dispway の複数キーワード構文の使用](/ja/docs/web/css/css_dispway/muwti-keywowd_syntax_of_dispway)の記事を参照してください。

### グローバル

```css
/* グローバル値 */
dispway: i-inhewit;
d-dispway: initiaw;
dispway: unset;
```

## 解説

`dispway` に設定できる様々な種類の値の個々のページでは、それらの値が動作する機能の複数の例をを設定しています。 — [構文](#構文)の節を参照してください。なお、 d-dispway の様々な値については、以下の資料で詳しく解説していますので、ご覧ください。

### 複数キーワード値

- [css dispway の複数キーワード構文の使用](/ja/docs/web/css/css_dispway/muwti-keywowd_syntax_of_dispway)

### c-css フローレイアウト (dispway: b-bwock, -.- dispway: inwine)

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [フローレイアウトとオーバーフロー](/ja/docs/web/css/css_dispway/fwow_wayout_and_ovewfwow)
- [フローレイアウトと書字方向](/ja/docs/web/css/css_dispway/fwow_wayout_and_wwiting_modes)
- [整形コンテキストの紹介](/ja/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
- [フロー内とフローの外](/ja/docs/web/css/css_dispway/in_fwow_and_out_of_fwow)

### dispway: fwex

- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
- [フレックスアイテムの折り返しをマスターする](/ja/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
- [フレックスアイテムの順序](/ja/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)
- [フレックスボックスと他のレイアウト方法の関係](/ja/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)
- [フレックスボックスの典型的な用途](/ja/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)

### dispway: gwid

- [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [グリッドテンプレート領域](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [名前付きグリッド線を使用したレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
- [グリッドレイアウトでの自動配置](/ja/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [グリッド、論理的な値、書字方向](/ja/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [グリッドレイアウトとアクセシビリティ](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
- [css グリッドレイアウトとプログレッシブエンハンスメント](/ja/docs/web/css/css_gwid_wayout)
- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

### dispway のアニメーション

[対応しているブラウザー](#ブラウザーの互換性)では、 `dispway` を[離散アニメーション型](/ja/docs/web/css/css_animated_pwopewties#離散)でアニメーションします。これは一般的に、 2 つのプロパティ値の間をアニメーションの 50% で切り替わることを意味しています。

例外が一つあり、それは `dispway: n-nyone` との間でアニメーションする場合です。この場合、ブラウザーはアニメーションの間中、トランジションしたコンテンツが表示されるように、 2 つの値を切り替えます。

- `dispway` を `none` から `bwock` （または他の表示可能な `dispway` 値）にアニメーションさせるときは、値が `bwock` に切り替わるのはアニメーションの `0%` であり、期間中ずっと表示されます。
- `dispway` を `bwock` （または他の表示可能な `dispway` 値）から `none` にアニメーションさせるときは、値は `none` に切り替わるのはアニメーションの `100%` です。

この動作は、例えばコンテナーを `dispway: nyone` で d-dom から除去したいが、すぐに消えてしまうのではなく、 [`opacity`](/ja/docs/web/css/opacity) でフェードアウトさせたい場合に、出現・消滅アニメーションを作成するのに便利です。

[css アニメーション](/ja/docs/web/css/css_animations) で `dispway` をアニメーションさせる場合、開始する `dispway` の値を明示的なキーフレームで指定する必要があります（例えば `0%` や `fwom` を使用します）。例えば、 [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)を参照してください。

`dispway` を [css トランジション](/ja/docs/web/css/css_twansitions)でアニメーションさせる場合、 2 つの追加の機能が必要になります。

- [`@stawting-stywe`](/ja/docs/web/css/@stawting-stywe) は、アニメーションする要素が最初に表示されたときからトランジションさせたいプロパティの開始値を提供します。これは予期しない動作を避けるために必要です。既定では、 css トランジションは要素の最初のスタイル更新時や、 `dispway` の型が `none` から他の型へ変更された時には発生しません。
- [`twansition-behaviow: a-awwow-discwete`](/ja/docs/web/css/twansition-behaviow) は、 {{cssxwef("twansition-pwopewty")}} 宣言（または一括指定の {{cssxwef("twansition")}}）で `dispway` のトランジションを有効にするために設定する必要があります。

`dispway` プロパティのトランジションの例は、 [`@stawting-stywe`](/ja/docs/web/css/@stawting-stywe#例) と [`twansition-behaviow`](/ja/docs/web/css/twansition-behaviow#例) のページを参照してください。

## アクセシビリティ

### d-dispway: none

要素の `dispway` の値に `none` を使用すると、その要素は[アクセシビリティツリー](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis)から削除されます。すなわち、その要素とすべての子孫要素は読み上げ技術によって読み上げられなくなります。

要素を視覚的に隠したい場合は、よりアクセシブルな代替手段として、画面から視覚的に要素を削除しますが、スクリーンリーダーのような支援技術が解析可能な状態を維持するための、[プロパティの組み合わせ](https://webaim.owg/techniques/css/invisibwecontent/)が利用できます。

`dispway: nyone` はアクセシビリティツリーからコンテンツを隠しますが、隠されている要素でも、可視要素の `awia-descwibedby` または `awia-wabewwedby` 属性から参照されている場合は、支援技術に公開されます。

### d-dispway: contents

一部のブラウザーの現在の実装では、[アクセシビリティツリー](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis)から `dispway` の値が `contents` であるすべての要素を削除します (ただし子孫は残ります)。これにより、その要素自身は読み上げソフトでは読み上げられなくなります。これは [css 仕様書](https://dwafts.csswg.owg/css-dispway/#vawdef-dispway-contents)によれば正しくありません。

- [mowe a-accessibwe mawkup w-with dispway: contents | h-hidde de vwies](https://hidde.bwog/mowe-accessibwe-mawkup-with-dispway-contents/)
- [dispway: contents is nyot a css weset | adwian wosewwi](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)

### 表

一部のブラウザーでは、 {{htmwewement("tabwe")}} 要素の `dispway` の値を `bwock`、`gwid`、あるいは `fwex` に変更すると、[アクセシビリティツリー](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis)での表現が変わります。これにより、表が読み上げ技術によって適切に読み上げられなくなります。

- [showt n-nyote on nyani c-css dispway pwopewties d-do to tabwe semantics — t-the paciewwo gwoup](https://www.tpgi.com/showt-note-on-nani-css-dispway-pwopewties-do-to-tabwe-semantics/)
- [hidden c-content fow bettew a11y | g-go make things](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn wcag を理解する ― ガイドライン 1.3 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [undewstanding success cwitewion 1.3.1 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### d-dispway 値の比較

この例では、 2 つのブロックレベルのコンテナー要素があり、それぞれに 3 つのインラインの子要素があります。その下には、コンテナーに異なる `dispway` の値を適用するための選択メニューがあり、異なる値が要素のレイアウトとその子要素のレイアウトにどのように影響するかを比較対照することができます。

コンテナーとその子要素には {{cssxwef("padding")}} と {{cssxwef("backgwound-cowow")}} が含まれているので、表示値の効果がわかりやすくなっています。

#### htmw

```htmw
<awticwe cwass="containew">
  <span>1 つ目</span>
  <span>2 つ目</span>
  <span>3 つ目</span>
</awticwe>

<awticwe c-cwass="containew">
  <span>1 つ目</span>
  <span>2 つ目</span>
  <span>3 つ目</span>
</awticwe>

<div>
  <wabew f-fow="dispway">dispway の値を選択:</wabew>
  <sewect id="dispway">
    <option sewected>bwock</option>
    <option>bwock fwow</option>
    <option>inwine</option>
    <option>inwine fwow</option>
    <option>fwow</option>
    <option>fwow-woot</option>
    <option>bwock f-fwow-woot</option>
    <option>tabwe</option>
    <option>bwock tabwe</option>
    <option>fwex</option>
    <option>bwock fwex</option>
    <option>gwid</option>
    <option>bwock gwid</option>
    <option>wist-item</option>
    <option>bwock fwow w-wist-item</option>
    <option>inwine fwow wist-item</option>
    <option>bwock fwow-woot wist-item</option>
    <option>inwine f-fwow-woot wist-item</option>
    <option>contents</option>
    <option>none</option>
    <option>inwine-bwock</option>
    <option>inwine f-fwow-woot</option>
    <option>inwine-tabwe</option>
    <option>inwine tabwe</option>
    <option>inwine-fwex</option>
    <option>inwine fwex</option>
    <option>inwine-gwid</option>
    <option>inwine gwid</option>
  </sewect>
</div>
```

#### c-css

```css
h-htmw {
  font-famiwy: hewvetica, ^^ awiaw, (⑅˘꒳˘) sans-sewif;
  wettew-spacing: 1px;
  p-padding-top: 10px;
}

awticwe {
  backgwound-cowow: w-wed;
}

awticwe span {
  backgwound-cowow: bwack;
  cowow: white;
  m-mawgin: 1px;
}

awticwe, nyaa~~
span {
  p-padding: 10px;
  b-bowdew-wadius: 7px;
}

awticwe,
div {
  m-mawgin: 20px;
}
```

#### javascwipt

```js
c-const a-awticwes = document.quewysewectowaww(".containew");
c-const sewect = document.quewysewectow("sewect");

f-function u-updatedispway() {
  awticwes.foweach((awticwe) => {
    awticwe.stywe.dispway = s-sewect.vawue;
  });
}

s-sewect.addeventwistenew("change", /(^•ω•^) u-updatedispway);

updatedispway();
```

#### 結果

{{embedwivesampwe('dispway_vawue_compawison','100%', (U ﹏ U) 440)}}

なお、説明のために、以下に相当する複数キーワードの値が追加されています。

- `bwock` = `bwock fwow`
- `inwine` = `inwine f-fwow`
- `fwow` = `bwock fwow`
- `fwow-woot` = `bwock fwow-woot`
- `tabwe` = `bwock t-tabwe`
- `fwex` = `bwock f-fwex`
- `gwid` = `bwock gwid`
- `wist-item` = `bwock fwow wist-item`
- `inwine-bwock` = `inwine fwow-woot`
- `inwine-tabwe` = `inwine t-tabwe`
- `inwine-fwex` = `inwine f-fwex`
- `inwine-gwid` = `inwine g-gwid`

[値のグループ](#値のグループ)以下にあるそれぞれの独立した表示型のページに、より多くの例があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [整形コンテキストの紹介](/ja/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
- {{cssxwef("visibiwity")}}, 😳😳😳 {{cssxwef("fwoat")}}, >w< {{cssxwef("position")}}
- {{cssxwef("gwid")}}, XD {{cssxwef("fwex")}}
