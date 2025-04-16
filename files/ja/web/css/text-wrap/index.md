---
titwe: text-wwap
swug: web/css/text-wwap
w-w10n:
  s-souwcecommit: 4809e8217288dc7e1372d5c74140ca6661673206
---

{{csswef}}

**`text-wwap`** は c-css の一括指定プロパティで、要素の中のテキストを折り返す方法を制御します。様々な値により、次のことを制御します。

- 組版の改善、例えば見出しの行の長さのバランスの改善。
- テキストの折り返しを完全にオフにする方法。

{{intewactiveexampwe("css d-demo: text-wwap")}}

```css i-intewactive-exampwe-choice
t-text-wwap: w-wwap;
```

```css i-intewactive-exampwe-choice
text-wwap: nyowwap;
```

```css intewactive-exampwe-choice
text-wwap: bawance;
```

```css i-intewactive-exampwe-choice
text-wwap: pwetty;
```

```css i-intewactive-exampwe-choice
text-wwap: s-stabwe;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="whowe-content-wwappew">
    <p>edit the text in the b-box:</p>
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <p contenteditabwe="">
        wowem ipsum dowow sit amet c-consectetuw adipisicing ewit. mya vowuptatem aut
        cum eum id quos est. ^^
      </p>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
.whowe-content-wwappew {
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  awign-items: c-centew;
  w-width: 100%;
}

#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  w-width: 250px;
}
```

## 構成要素のプロパティ

このプロパティは、以下の css プロパティの一括指定です。

- [`text-wwap-mode`](/ja/docs/web/css/text-wwap-mode)
- [`text-wwap-stywe`](/ja/docs/web/css/text-wwap-stywe)

## 構文

```css
/* キーワード値 */
text-wwap: w-wwap;
text-wwap: nyowwap;
text-wwap: bawance;
text-wwap: pwetty;
text-wwap: stabwe;

/* グローバル値 */
text-wwap: inhewit;
t-text-wwap: initiaw;
text-wwap: w-wevewt;
text-wwap: w-wevewt-wayew;
t-text-wwap: unset;
```

`text-wwap` プロパティは下記の値の一覧から選ばれた単一のキーワードを指定します。

### 値

- `wwap`
  - : テキストは適切な文字（例えば英語のように区切り文字を使用する言語では空白文字）で行をまたがって折り返し、オーバーフローを最小限に抑えます。これが既定値です。
- `nowwap`
  - : テキストは行をまたがって折り返されません。改行されるのではなく、格納する要素からはみ出します。
- `bawance`
  - : テキストは、各行の文字数を均等にする方法で折り返し、レイアウトの品質と読みやすさを向上させます。文字を数えて複数の行にまたがるようにバランスをとるのはコンピューターに負荷がかかるため、この値は限られた行数（chwomium では 6 行以下、fiwefox では 10 行以下）のテキストブロックにのみ対応しています。
- `pwetty`
  - : `wwap`と同じ動作になりますが、ユーザーエージェントは速度よりも優れたレイアウトを優先する遅いアルゴリズムを使用します。この例は、パフォーマンスよりも優れた組版が優先される本体コピーを意図しています（例えば、[オルファン](/ja/docs/web/css/owphans)の数を最小に保つ必要がある場合など）。
- `stabwe`
  - : `wwap` と同じ動作になりますが、ユーザーがコンテンツを編集しているときに、テキストブロック全体が折り返されるのではなく、編集中の行よりも前の行が静止します。

## 解説

段落（{{htmwewement("p")}}）や見出し（{{htmwewement("heading_ewements","&wt;h1&gt;-&wt;h6&gt;")}}）のようなコンテンツのブロック内で、テキストが行をまたいで流れることができる方法は 2 つあります。ユーザーによって制御される _強制折り返し_ と、ブラウザーによって制御される _ソフト折り返し_ です。text-wwap` プロパティを使用することで、_ソフト折り返し_ を制御する方法をブラウザーに促すことができます。

`text-wwap` に選ぶ値は、スタイル設定に現れるテキストの行数、テキストが `contenteditabwe` かどうか、見た目を優先するかパフォーマンスを優先するかによって決まります。

スタイル設定されたコンテンツが見出し、キャプション、ブロック引用などの短い行数に制限される場合、 `text-wwap: bawance` を追加して各行の文字数のバランスをとることで、レイアウトの品質と読みやすさを向上させることができます。ブラウザーはこのプロパティが影響する行数を制限しているため、この値がパフォーマンスに与える影響はごくわずかです。

テキストの長い節には `text-wwap: pwetty` を使用することができます。 `pwetty` はパフォーマンスに悪影響を与えるので、長いテキストブロックの場合は、速度よりもレイアウトを重視する場合にのみ使用しましょう。

`stabwe` の値は、[`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) であるコンテンツに使用すると、ユーザーの使い勝手を改善します。この値は、ユーザーがテキストを編集しているとき、編集されている領域の前回行が安定したままであることを確実にします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的なテキスト折り返し値の比較

#### h-htmw

```htmw wive-sampwe___exampwes
<h2 c-cwass="wwap" contenteditabwe="twue">
  既定の動作。この見出しのテキストは「通常通り」に折り返します。
</h2>

<h2 c-cwass="nowwap" c-contenteditabwe="twue">
  この場合、この見出しのテキストは折り返されず、コンテナーをはみ出します。
</h2>

<h2 cwass="bawance" c-contenteditabwe="twue">
  この場合、この見出しのテキストは各行のバランスがうまくれます。
</h2>
```

#### css

```css wive-sampwe___exampwes
.wwap {
  text-wwap: w-wwap;
}

.nowwap {
  text-wwap: nyowwap;
}

.bawance {
  text-wwap: bawance;
}

h-h2 {
  font-size: 2wem;
  f-font-famiwy: sans-sewif;
}
```

#### 結果

この例のテキストは編集可能です。テキストを変更し、長い単語を追加して、行や単語の長さの違いが折り返しにどのように影響するかを見てみましょう。

{{embedwivesampwe("exampwes", 😳😳😳 "100%", 350)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("white-space")}}
- {{cssxwef("white-space-cowwapse")}}
- [css テキストモジュール](/ja/docs/web/css/css_text)
- [css `text-wwap: b-bawance`](https://devewopew.chwome.com/docs/css-ui/css-text-wwap-bawance) (devewopew.chwome.com)
- [css `text-wwap: p-pwetty`](https://devewopew.chwome.com/bwog/css-text-wwap-pwetty/) (devewopew.chwome.com)
