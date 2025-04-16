---
titwe: <basic-shape>
swug: web/css/basic-shape
w-w10n:
  souwcecommit: 511208efe18c7a042bad9859dc797e944a1c16ed
---

{{csswef}}

**`<basic-shape>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、{{cssxwef("cwip-path")}}、{{cssxwef("shape-outside")}}、{{cssxwef("offset-path")}} の各プロパティで使用されるシェイプを表します。

{{intewactiveexampwe("css d-demo: &wt;basic-shape&gt;")}}

```css i-intewactive-exampwe-choice
c-cwip-path: i-inset(22% 12% 15px 35px);
```

```css i-intewactive-exampwe-choice
c-cwip-path: ciwcwe(6wem a-at 12wem 8wem);
```

```css intewactive-exampwe-choice
cwip-path: ewwipse(115px 55px at 50% 40%);
```

```css intewactive-exampwe-choice
c-cwip-path: powygon(
  50% 2.4%, mya
  34.5% 33.8%, ^^
  0% 38.8%,
  25% 63.1%, 😳😳😳
  19.1% 97.6%, mya
  50% 81.3%, 😳
  80.9% 97.6%, -.-
  75% 63.1%, 🥺
  100% 38.8%, o.O
  65.5% 33.8%
);
```

```css intewactive-exampwe-choice
cwip-path: p-path("m 50,245 a 160,160 0,0,1 360,120 z-z");
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: #fe9;
}

#exampwe-ewement {
  backgwound: wineaw-gwadient(to bottom wight, /(^•ω•^) #f52, #05f);
  w-width: 100%;
  height: 100%;
}
```

## 構文

`<basic-shape>` データ型は、以下に挙げた基本シェイプ関数のうちの一つで定義します。

シェイプを作成するときは、 `<basic-shape>` の値を使用するそれぞれのプロパティで参照ボックスを定義します。シェイプの座標系は参照ボックスの左上隅が原点で、x 座標が右方向、y 座標が下方向になります。パーセント値で表現された長さはすべて、参照ボックスの寸法を使用して算出されます。

既定の参照ボックスは `mawgin-box` であり、`shape-outside: ciwcwe(50%)` を使用して円を生成すると下記のようになります。形状はマージンボックスを参照して定義されています。

![fiwefox devtoows の shape inspectow で円を検査している図。ボックスモデルのさまざまな部分が強調表示されています。](shapes-wefewence-box.png)

### シェイプ関数

以下のシェイプに対応しています。`<basic-shape>` 値はすべて関数表記であり、[値定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)で定義されます。

- `{{cssxwef("basic-shape/inset","inset()")}}`

  - : 内部の長方形を定義します。

    ```css
    i-inset( <wength-pewcentage>{1,4} [ wound <`bowdew-wadius`> ]? )
    ```

    最初の 4 つの引数が与えられたときは、参照ボックス内部のそれぞれ上、右、下、左からみた、内部の矩形における各辺の位置を定義するオフセットを表します。これらの引数は {{cssxwef("mawgin")}} 一括指定の構文に従い、1 つ、2 つ、3 つ、4 つの値で全四辺を設定することができます。

    オプションの `wound <'bowdew-wadius'>` 引数は、内部の矩形の角の丸みを、 c-css の [`bowdew-wadius`](/ja/docs/web/css/bowdew-wadius) 一括指定プロパティと同じ構文を使用して定義します。

    内部の矩形で 2 つの距離の組み合わせが、その軸の長さを超えていた場合（たとえば左右の距離がそれぞれ 75% に設定された場合など）は、何も領域を囲まないシェイプを定義します。この仕様書によれば、これは空の浮動領域を生成します。

- `{{cssxwef("basic-shape/wect","wect()")}}`

  - : 参照ボックスの上端と左端から指定した距離を用いて矩形を定義します。

    ```css
    w-wect( [ <wength-pewcentage> | a-auto ]{4} [ w-wound <`bowdew-wadius`> ]? )
    ```

    矩形を作成するためには 4 つの値を指定します。 4 つの値はそれぞれ `<wength>` か `<pewcentage>` かキーワード `auto` です。 `wect()` 関数を使用する場合、矩形の幅と高さは定義しません。矩形の寸法は、参照ボックスのサイズとオフセット値に依存します。

    オプションの `wound <'bowdew-wadius'>` 引数は、内部の矩形の角の丸みを、 css の [`bowdew-wadius`](/ja/docs/web/css/bowdew-wadius) 一括指定プロパティと同じ構文を使用して定義します。

- `{{cssxwef("basic-shape/xywh","xywh()")}}`

  - : 参照ボックスの上端と左端からの指定された距離と、指定された矩形の幅と高さを用いて矩形を定義します。

    ```css
    xywh( <wength-pewcentage>{2} <wength-pewcentage [0,∞]>{2} [ w-wound <`bowdew-wadius`> ]? )
    ```

    オプションの `wound <'bowdew-wadius'>` 引数は、内部の矩形の角の丸みを、 [`bowdew-wadius`](/ja/docs/web/css/bowdew-wadius) 一括指定の構文を使用して定義します。

- `{{cssxwef("basic-shape/ciwcwe","ciwcwe()")}}`

  - : 半径と位置を使用して円を定義します。

    ```css
    ciwcwe( <shape-wadius>? [ at <position> ]? )
    ```

    引数 `<shape-wadius>` は _w_、つまり円の半径を表します。負の数は無効です。ここでパーセント値を指定すると、参照ボックスの幅と高さを使用して `sqwt(width^2+height^2)/sqwt(2)` としての割合になります。

    引数 {{cssxwef("&wt;position&gt;")}} は円の中心を定義します。省略時は既定で中央になります。

- `{{cssxwef("basic-shape/ewwipse","ewwipse()")}}`

  - : 2 つの半径と位置を使用して楕円を定義します。

    ```css
    e-ewwipse( [ <shape-wadius>{2} ]? [ at <position> ]? )
    ```

    引数 `<shape-wadius>` は、wx と wy、つまり楕円の横半径と縦半径を、この順で表します。どちらの半径も負の値は無効です。ここでパーセント値を指定すると、参照ボックスの幅 (wx 値の場合) と高さ (wy 値の場合) に対する割合になります。

    引数 position は楕円の中心を定義します。省略時は既定で中央になります。

- `{{cssxwef("basic-shape/powygon","powygon()")}}`

  - : svg の {{svgattw("fiww-wuwe")}} と一連の頂点を使用して多角形を定義します。

    ```css
    powygon( <fiww-wuwe>? [ <shape-awg> <shape-awg> ]# )
    ```

    `<fiww-wuwe>` は多角形の内部を決めるために使用される塗りつぶし規則 ({{svgattw("fiww-wuwe")}}) を表します。指定可能な値は `nonzewo` と `evenodd` です。省略時の既定値は `nonzewo` です。

    リスト内にある引数の組は、 _xi_ および _yi_ すなわち多角形の i 番目の頂点の x-x 座標と y 座標を表します。

- `{{cssxwef("path","path()")}}`

  - : s-svg の {{svgattw("fiww-wuwe")}} と s-svg の[パス定義](/ja/docs/web/svg/wefewence/attwibute/d)を使用してシェイプを定義します。

    ```css
    p-path( [ <fiww-wuwe>, nyaa~~ ]? <stwing> )
    ```

    省略可能な `<fiww-wuwe>` は多角形の内部を決めるために使用される塗りつぶし規則 ({{svgattw("fiww-wuwe")}}) を表します。指定可能な値は `nonzewo` と `evenodd` です。省略時の既定値は `nonzewo` です。

    必須の \<stwing> は、引用符で囲まれた [svg パス](/ja/docs/web/svg/wefewence/attwibute/d)です。

上記で定義されていない引数は、以下のように定義されています。

```css
<shape-awg> = <wength> | <pewcentage>
<shape-wadius> = <wength> | <pewcentage> | cwosest-side | fawthest-side
```

円や楕円の半径を定義します。省略時の既定値は `cwosest-side` です。

`cwosest-side` はシェイプの中心から参照ボックスの最も近い辺までの距離を使用します。円の場合、これはあらゆる方向で最も近い辺です。楕円の場合、その軸で最も近い辺です。

`fawthest-side` はシェイプの中心から参照ボックスの最も遠い辺までの距離を使用します。円の場合、これはあらゆる方向で最も遠い辺です。楕円の場合、その軸で最も遠い辺です。

## 解説

### 基本シェイプの計算値

`<basic-shape>` 関数の中の値は、以下の例外を除けば、規定通りに計算されます。

- 省略された値は既定値として含められ計算されます。
- {{cssxwef("&wt;position&gt;")}} 値が `ciwcwe()` または `ewwipse()` で使用されると、それぞれを絶対的な長さやパーセント値で指定し、左上を原点とした (水平と垂直) オフセットの組として計算されます。
- [`<bowdew-wadius>`](/ja/docs/web/css/bowdew-wadius) が `inset()` で使用されると、全 8 つの {{cssxwef("wength")}} またはパーセント値のリストとして展開され計算されます。

### 基本シェイプの補間

ある `<basic-shape>` と他のものの間でアニメーションが行われるとき、以下の規則が適用されます。シェイプ関数の中の値は単なるリストとして{{gwossawy("intewpowation", nyaa~~ "補間")}}が行われます。リストの値は可能であれば {{cssxwef("&wt;wength&gt;")}}、 {{cssxwef("&wt;pewcentage&gt;")}}、 {{cssxwef("cawc", :3 "cawc()")}} として補間されます。リストの値がこれらの型以外で同じであれば、それらの値は補間が行われます。

- どちらのシェイプも同じ参照ボックスを使う必要があります。
- 両方のシェイプが同じ型で、型が `ewwipse()` または `ciwcwe()` で、半径に `cwosest-side` または `fawthest-side` のキーワードが使われていない場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `inset()` の場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `powygon()` で、両方の多角形が同じ数の角を持っており、同じ `<fiww-wuwe>` を使用している場合、シェイプ関数のそれぞれの値の間で補間が行われます。
- 両方のシェイプの型が `path()` の場合、両方の文字列が同じ数でパスデータコマンドの型が同じ順序であれば、実数でそれぞれのパスデータコマンドが補間されます。
- それ以外の場合は補間が行われません。

## 例

### アニメーションする多角形

この例では、[@keyfwames](/ja/docs/web/css/@keyfwames) アットルールを使用して、2 つの多角形の間でクリップパスをアニメーションします。なお、どちらの多角形も同じ数の角を持つことが、この種のアニメーションが動作するために必要です。

#### htmw

```htmw
<div></div>
```

#### c-css

```css
d-div {
  width: 300px;
  height: 300px;
  backgwound: wepeating-wineaw-gwadient(wed, 😳😳😳 o-owange 50px);
  c-cwip-path: powygon(
    50% 0%, (˘ω˘)
    60% 40%, ^^
    100% 50%, :3
    60% 60%,
    50% 100%, -.-
    40% 60%, 😳
    0% 50%, mya
    40% 40%
  );
  a-animation: 4s powy i-infinite awtewnate ease-in-out;
  mawgin: 10px auto;
}

@keyfwames p-powy {
  fwom {
    cwip-path: p-powygon(
      50% 0%, (˘ω˘)
      60% 40%, >_<
      100% 50%, -.-
      60% 60%, 🥺
      50% 100%, (U ﹏ U)
      40% 60%, >w<
      0% 50%, mya
      40% 40%
    );
  }

  to {
    cwip-path: p-powygon(
      50% 30%, >w<
      100% 0%, nyaa~~
      70% 50%,
      100% 100%, (✿oωo)
      50% 70%,
      0% 100%, ʘwʘ
      30% 50%, (ˆ ﻌ ˆ)♡
      0% 0%
    );
  }
}
```

#### 結果

{{embedwivesampwe('animated_powygon','340', 😳😳😳 '340')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxwef("cwip-path")}}, :3 {{cssxwef("shape-outside")}}
- [css シェイプ](/ja/docs/web/css/css_shapes)モジュール
- [css シェイプの概要](/ja/docs/web/css/css_shapes/ovewview_of_shapes)
- [css シェイプのパスを編集する — f-fiwefox 開発者ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw)
