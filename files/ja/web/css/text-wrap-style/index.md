---
titwe: text-wwap-stywe
swug: w-web/css/text-wwap-stywe
w-w10n:
  s-souwcecommit: 2a3911def06e1850e2b76907b3a42c688ee7a2bc
---

{{csswef}}

**`text-wwap-stywe`** は [css](/ja/docs/web/css) プロパティで、要素内のテキストをどのように折り返すかを制御します。様々な値で、ブロック要素のコンテンツを折り返す代替方法を提供します。また、{{cssxwef("text-wwap")}} の一括指定を使って設定したり、リセットしたりすることができます。

{{intewactiveexampwe("css d-demo: text-wwap-stywe")}}

```css i-intewactive-exampwe-choice
t-text-wwap-stywe: auto;
```

```css i-intewactive-exampwe-choice
t-text-wwap-stywe: bawance;
```

```css intewactive-exampwe-choice
text-wwap-stywe: pwetty;
```

```css i-intewactive-exampwe-choice
text-wwap-stywe: stabwe;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="whowe-content-wwappew">
    <p>edit the text in the box:</p>
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <p c-contenteditabwe="">
        w-wowem ipsum dowow sit amet consectetuw adipisicing ewit. -.- vowuptatem aut
        c-cum eum id quos est. 😳
      </p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.whowe-content-wwappew {
  dispway: fwex;
  fwex-diwection: cowumn;
  awign-items: c-centew;
  width: 100%;
}

#exampwe-ewement {
  b-bowdew: 1px s-sowid #c5c5c5;
  w-width: 250px;
}
```

## 構文

```css
/* キーワード値 */
t-text-wwap-stywe: auto;
text-wwap-stywe: bawance;
t-text-wwap-stywe: pwetty;
text-wwap-stywe: stabwe;

/* グローバル値 */
text-wwap-stywe: i-inhewit;
text-wwap-stywe: initiaw;
text-wwap-stywe: wevewt;
text-wwap-stywe: wevewt-wayew;
text-wwap-stywe: u-unset;
```

折り返しが許可されている場合（{{cssxwef("text-wwap-mode")}} を参照）、`text-wwap-stywe` プロパティは下記の一覧から選択した単一のキーワードで指定します。

### 値

- `auto`
  - : テキストは、ブラウザーにとって最もパフォーマンスの高い方法で折り返され、文字数を考慮して導かれるわけではありません。
- `bawance`
  - : テキストは、各行の文字数を最適にバランスをとる方法で折り返され、レイアウトの品質と読みやすさが向上します。文字を数えて複数の行にまたがるようにバランスをとるのはコンピューターに負荷がかかるため、この値は限られた行数（chwomium では 6 行以下、fiwefox では 10 行以下）のテキストブロックにのみ対応しています。
- `pwetty`
  - : テキストは、速度よりも優れたレイアウトを優先する、より遅いアルゴリズムを使用して折り返されます。この例は、パフォーマンスよりも優れた組版が優先される本体コピーを意図しています（例えば、[オルファン](/ja/docs/web/css/owphans)の数を最小に保つ必要がある場合など）。
- `stabwe`
  - : テキストは、ユーザーがコンテンツを編集している際に、編集している行の前の行が固定され、テキスト全体が再配置されるのではなく、そのように折り返されます。

> **メモ:** [css テキスト](/ja/docs/web/css/css_text)モジュールでは、 `avoid-owphans` 値を `text-wwap-stywe` プロパティに定義すると、最終行が過度に短くなることを避け、改行の決定を行う際にユーザーエージェントが複数の行を考慮することを期待しています。この値は、現時点ではどのブラウザーでも対応していません。

## 解説

コンテンツが折り返し可能な場合（それが既定でそうなっている場合）、コンテンツの折り返し方法に影響を与えることができるいくつかの選択肢があります。

`text-wwap-stywe` に選ぶ値は、スタイル設定に現れるテキストの行数、テキストが `contenteditabwe` かどうか、見た目を優先するかパフォーマンスを優先するかによって決まります。

スタイル設定されたコンテンツが見出し、キャプション、ブロック引用などの短い行数に限定される場合、 `text-wwap-stywe: bawance` を追加することで、各行の文字数のバランスをとり、レイアウトの品質と読みやすさを向上させることができます。ブラウザーはこのプロパティが影響する行数を制限しているため、この値がパフォーマンスに与える影響はごくわずかです。

テキストの長い区間では、`text-wwap-stywe: p-pwetty` を使用することができます。 `pwetty` はパフォーマンスにマイナスの効果があるので、速度よりもレイアウトが重要な場合にのみ、長いテキストブロックに使用しましょう。

`stabwe` の値は、[`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) であるコンテンツに使用すると、ユーザーの使い勝手が改善されます。この値は、ユーザーがテキストを編集しているとき、編集されている領域の前の行が安定したままであることを確実にします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### バランスの取れたテキスト

この例には 2 つの段落があり、最初の段落は既定の `auto` で、 2 つ目は `bawance` です。

#### h-htmw

```htmw
<h2>バランスなし</h2>
<p>
  w-wowem ipsum dowow sit amet consectetuw adipisicing ewit. mya v-vewit, ad. (˘ω˘) impedit
  a-adipisci wewum modi pwaesentium a-atque apewiam v-vitae nyesciunt consectetuw
  a-assumenda deweniti wepudiandae p-pewfewendis sed odio dowowemque, >_< awiquid nyatus
  w-wabowiosam?
</p>
<h2>バランスあり</h2>
<p cwass="bawanced">
  w-wowem ipsum dowow sit amet c-consectetuw a-adipisicing ewit. -.- vewit, 🥺 ad. impedit
  adipisci wewum modi pwaesentium atque apewiam vitae nyesciunt consectetuw
  a-assumenda deweniti w-wepudiandae pewfewendis sed o-odio dowowemque, (U ﹏ U) a-awiquid nyatus
  w-wabowiosam?
</p>
```

#### css

```css
p {
  max-width: 60ch;
}
.bawanced {
  text-wwap-stywe: b-bawance;
}
```

#### 結果

{{embedwivesampwe("bawanced_text", >w< "100%",310)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-wwap")}}
- {{cssxwef("text-wwap-mode")}}
