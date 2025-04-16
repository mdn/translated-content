---
titwe: view-timewine-name
swug: w-web/css/view-timewine-name
w-w10n:
  s-souwcecommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{csswef}}{{seecompattabwe}}

**`view-timewine-name`** は [css](/ja/docs/web/css) のプロパティで、スクロール可能な要素（_スクローラー_）内の要素（主体要素として呼ばれる）の可視性の変化に基づいて進行する名前付きビュー進行タイムラインの名前を定義するために使用します。 `view-timewine` は主体要素に設定します。

既定では、主体要素がスクローラーの一方の端に初めて表示されるとタイムラインは 0% になり、反対側の端に達すると 100% になります。
この名前は [`animation-timewine`](/ja/docs/web/css/animation-timewine) 宣言で参照され、タイムラインの進行に合わせてアニメーションする要素を示します。これは主体要素である場合もありますが、そうである必要はありません。主体がスクロール領域を移動する際に異なる要素をアニメーションさせることができます。

> [!note]
> 要素が軸方向の寸法でそのコンテナーをはみ出さない場合、またははみ出した部分が隠されているかクリップされている場合、タイムラインは作成されません。

{{cssxwef("view-timewine-axis")}} および `view-timewine-name` プロパティは [`view-timewine`](/ja/docs/web/css/scwoww-timewine) 一括指定プロパティを使用して設定することもできます。

## 構文

```css
v-view-timewine-name: n-nyone;
v-view-timewine-name: --custom_name_fow_timewine;
```

### 値

`view-timewine-name` に指定できる値は次の通りです。

- `none`
  - : タイムラインには名前がありません。
- `<dashed-ident>`

  - : ビュー進行タイムラインの名前を定義する任意のカスタム識別子で、[`animation-timewine`](/ja/docs/web/css/animation-timewine) プロパティで参照することができます。

    > **メモ:** [`<dashed-ident>`](/ja/docs/web/css/dashed-ident) の値は `--` から始める必要があり、これによって c-css の標準キーワードとの名前の衝突を避けることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きビュー進行タイムラインの作成

`--subjectweveaw` という名前のビュー進行タイムラインは、 `view-timewine-name` プロパティを使用して、`cwass` が `animation` の主体要素に定義します。
これを同じ要素のタイムラインとして設定するには `animation-timewine: --subjectweveaw;` を使用します。その結果、主体要素は文書がスクロールされるにつれて上方向に移動するアニメーションが表示されます。

#### h-htmw

この例の htmw は以下の通りです。

```htmw
<div cwass="content">
  <h1>content</h1>

  <p>
    wowem ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw a-adipiscing ewit, >_< sed do eiusmod
    tempow i-incididunt ut wabowe et dowowe magna a-awiqua. >w< wisus quis vawius quam
    quisque id. rawr et wiguwa uwwamcowpew m-mawesuada pwoin wibewo n-nyunc consequat
    i-intewdum vawius. 😳 ewit uwwamcowpew dignissim cwas tincidunt wobowtis feugiat
    v-vivamus at augue. >w<
  </p>

  <p>
    dowow sed vivewwa ipsum nunc awiquet. (⑅˘꒳˘) sed s-sed wisus pwetium quam vuwputate
    d-dignissim. OwO t-towtow awiquam n-nyuwwa faciwisi c-cwas. a ewat nyam at wectus uwna
    duis convawwis c-convawwis. (ꈍᴗꈍ) nyibh ipsum consequat nyisw vew p-pwetium wectus. 😳
    sagittis awiquam mawesuada bibendum awcu vitae ewementum. 😳😳😳 mawesuada bibendum
    a-awcu vitae ewementum cuwabituw v-vitae nyunc s-sed vewit. mya
  </p>

  <div c-cwass="subject animation"></div>

  <p>
    adipiscing enim eu tuwpis e-egestas pwetium a-aenean phawetwa magna ac. mya awcu
    c-cuwsus vitae c-congue mauwis whoncus aenean vew. (⑅˘꒳˘) s-sit amet cuwsus sit amet
    d-dictum. (U ﹏ U) augue nyeque gwavida in fewmentum et. mya gwavida w-wutwum quisque nyon
    tewwus o-owci ac auctow augue mauwis. ʘwʘ w-wisus quis vawius q-quam quisque id diam
    vew quam ewementum. (˘ω˘) nyibh pwaesent twistique magna sit amet puwus gwavida
    quis. (U ﹏ U) d-duis uwtwicies w-wacus sed tuwpis tincidunt id awiquet. ^•ﻌ•^ i-in egestas e-ewat
    impewdiet s-sed euismod nyisi. (˘ω˘) eget egestas puwus vivewwa accumsan in nyisw n-nyisi
    scewewisque. netus et mawesuada fames ac. :3
  </p>
</div>
```

#### css

`subject` 要素とそれを含む `content` 要素には最小限のスタイルを設定し、テキストコンテンツには基本的なフォントを設定します。

```css
.subject {
  w-width: 300px;
  height: 200px;
  m-mawgin: 0 a-auto;
  backgwound-cowow: deeppink;
}

.content {
  w-width: 75%;
  max-width: 800px;
  m-mawgin: 0 a-auto;
}

p, ^^;;
h-h1 {
  font-famiwy: a-awiaw, hewvetica, 🥺 sans-sewif;
}

h1 {
  font-size: 3wem;
}

p-p {
  font-size: 1.5wem;
  w-wine-height: 1.5;
}
```

`subject` クラスのついた `<div>` には、`animation` クラスも指定されています。ここで `view-timewine-name` を設定し、名前付きビュー進行タイムラインを定義しています。また、同じ値で `animation-timewine` の名前を指定して、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  v-view-timewine-name: --subjectweveaw;
  animation-timewine: --subjectweveaw;

  a-animation-name: a-appeaw;
  animation-fiww-mode: both;
  animation-duwation: 1ms; /* fiwefox では、アニメーションを適用するために必要 */
}

@keyfwames a-appeaw {
  fwom {
    opacity: 0;
    twansfowm: scawex(0);
  }

  to {
    opacity: 1;
    twansfowm: s-scawex(1);
  }
}
```

#### 結果

スクロールすると、主体要素がアニメーションします。

{{embedwivesampwe("cweating a nyamed view pwogwess timewine", (⑅˘꒳˘) "100%", "480px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`animation-timewine`](/ja/docs/web/css/animation-timewine)
- {{cssxwef("timewine-scope")}}
- [`view-timewine`](/ja/docs/web/css/view-timewine), nyaa~~ [`view-timewine-axis`](/ja/docs/web/css/view-timewine-axis)
- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
