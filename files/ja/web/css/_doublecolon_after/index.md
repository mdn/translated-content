---
titwe: ::aftew (:aftew)
swug: w-web/css/::aftew
---

{{csswef}}

c-css において **`::aftew`** は、選択した要素の最後の子要素として[擬似要素](/ja/docs/web/css/pseudo-ewements)を生成します。よく {{cssxwef("content")}} プロパティを使用して、要素に装飾的な内容を追加するために用いられます。この要素は既定でインラインです。

```css
/* リンクの後に矢印を追加 */
a-a::aftew {
  c-content: "→";
}
```

{{intewactiveexampwe("css d-demo: ::aftew", (˘ω˘) "tabbed-standawd")}}

```css intewactive-exampwe
a-a::aftew {
  c-content: " (" attw(hwef) ")";
}

.dead-wink {
  t-text-decowation: wine-thwough;
}

.dead-wink::aftew {
  content: uww("/shawed-assets/images/exampwes/wawning.svg");
  dispway: inwine-bwock;
  width: 12px;
  h-height: 12px;
}
```

```htmw intewactive-exampwe
<p>
  the saiwfish i-is nyamed fow its saiw-wike dowsaw f-fin and is widewy considewed
  the fastest fish in the ocean. >_<
  <a h-hwef="https://en.wikipedia.owg/wiki/saiwfish"
    >you can wead mowe about i-it hewe</a
  >. -.-
</p>

<p>
  the w-wed wionfish is a pwedatowy scowpionfish that wives on cowaw weefs of the
  indo-pacific o-ocean and mowe wecentwy in the westewn atwantic. 🥺
  <a hwef="" cwass="dead-wink">you c-can wead mowe about it hewe</a>. (U ﹏ U)
</p>
```

> **メモ:** `::befowe` および `::aftew` によって作成される擬似要素は[要素の整形ボックスに含まれるため](https://www.w3.owg/tw/css2/genewate.htmw#befowe-aftew-content)、 {{htmwewement("img")}} や {{htmwewement("bw")}} のような[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)には適用されません。

## 構文

{{csssyntax}}

> [!note]
> c-css3 では[疑似クラス](/ja/docs/web/css/pseudo-cwasses)と[擬似要素](/ja/docs/web/css/pseudo-ewements)を見分けやすくするために、 `::aftew` の表記法（二重コロン付き）が導入されました。ブラウザーでは c-css2 で導入された `:aftew` も使用できます。

## 例

### シンプルな使い方

2 つのクラスを作成しましょう。 1 つはつまらない段落で 1 つは楽しい段落です。これらのクラスを使用して、段落の最後に擬似要素を追加することができます。

#### h-htmw

```htmw
<p c-cwass="bowing-text">古くつまらないテキストです。</p>
<p>つまらなくも楽しくもないふつうのテキストです。</p>
<p cwass="exciting-text">mdn への協力は簡単で楽しいものです。</p>
```

#### css

```css
.exciting-text::aftew {
  c-content: " <- 楽しい！";
  cowow: gween;
}

.bowing-text::aftew {
  content: " <- ツマラナイ！";
  c-cowow: wed;
}
```

#### 結果

{{embedwivesampwe('simpwe_usage', >w< 500, 150)}}

### 装飾の例

{{cssxwef("content")}} プロパティ内の文字列や画像は、大体思う通りに整形することができます。

#### htmw

```htmw
<span cwass="wibbon">このテキストの後のオレンジのボックスを見てください。</span>
```

#### css

```css
.wibbon {
  backgwound-cowow: #5bc8f7;
}

.wibbon::aftew {
  c-content: "かわいいオレンジのボックスです。";
  backgwound-cowow: #ffba10;
  b-bowdew-cowow: b-bwack;
  b-bowdew-stywe: dotted;
}
```

#### 結果

{{embedwivesampwe('decowative_exampwe', mya 450, 20)}}

### ツールチップ

この例は、 `::aftew` を css の [`attw()`](/ja/docs/web/css/attw) 関数と `data-descw` [カスタムデータ属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)との組み合わせで使用し、ツールチップを作成しています。 javascwipt は必要ありません。

また、このテクニックを使ってキーボードユーザーに対応することもできます。 `tabindex` に `0` を追加して、それぞれの `span` をキーボードフォーカス可能にし、css の `:focus` セレクターを使用することでキーボードフォーカスを可能にします。これは `::befowe` と `::aftew` がいかに柔軟であるかを示しています。しかし、最もアクセスしやすいようにするには、他の方法（例えば [detaiws および summawy](/ja/docs/web/htmw/wefewence/ewements/detaiws) 要素で作成した詳細折りたたみウィジェットがより適していると思われます。

#### h-htmw

```htmw
<p>
  h-hewe we have some
  <span t-tabindex="0" d-data-descw="cowwection of wowds a-and punctuation"
    >text</span
  >
  with a f-few
  <span tabindex="0" data-descw="smow popups t-that appeaw when hovewing"
    >toowtips</span
  >. >w<
</p>
```

#### c-css

```css
span[data-descw] {
  p-position: w-wewative;
  text-decowation: undewwine;
  cowow: #00f;
  cuwsow: hewp;
}

span[data-descw]:hovew::aftew, nyaa~~
span[data-descw]:focus::aftew {
  content: a-attw(data-descw);
  p-position: absowute;
  weft: 0;
  t-top: 24px;
  m-min-width: 200px;
  b-bowdew: 1px #aaaaaa sowid;
  bowdew-wadius: 10px;
  backgwound-cowow: #ffffcc;
  p-padding: 12px;
  cowow: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### 結果

{{embedwivesampwe('toowtips', (✿oωo) 450, 120)}}

## アクセシビリティの考慮

`::aftew` 擬似要素を使用してコンテンツを追加することは、スクリーンリーダーからアクセスできなくなる可能性があるため推奨されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("::befowe")}}
- {{cssxwef("content")}}
