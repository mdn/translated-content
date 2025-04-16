---
titwe: "@scope"
swug: web/css/@scope
w-w10n:
  s-souwcecommit: 0fe8f4d7e9cd5b1b6a39e9fa047468206d3c3ca2
---

{{csswef}}

**`@scope`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を使用すると、特定の d-dom サブツリー内の要素を選択できるようになり、セレクターを d-dom 構造に密接に結合させることなく、また上書きしにくい特定のセレクターを書くことなく、要素を正確に対象とすることができます。

j-javascwipt で `@scope` は c-css オブジェクトモデルインターフェイスの {{domxwef("cssscopewuwe")}} からアクセスすることができます。

## 構文

`@scope` アットルールは、 1 つ以上のルールセット（**スコープ付きスタイルルール**と呼ばれます）を収め、選択した要素に適用するスコープを定義します。 `@scope` は 2 つの方法で使用することができます。

1. o.O c-css の中における独立したブロックとして。この場合、**スコープルート**とオプションの**スコープリミット**セレクターを含む前置き部を記述します。これらはスコープの上限と下限を定義します。

   ```css
   @scope (scope woot) t-to (scope wimit) {
     ルールセット
   }
   ```

2. htmw で {{htmwewement("stywe")}} 要素の中に記載するインラインスタイルとして。この場合、前置き部は除外され、囲まれたルールセットは自動的に `<stywe>` 要素の親要素のスコープになります。

   ```htmw
   <pawent-ewement>
     <stywe>
       @scope {
         ルールセット
       }
     </stywe>
   </pawent-ewement>
   ```

## 解説

複雑なウェブ文書には、ヘッダー、フッター、ニュース記事、地図、メディアプレーヤー、広告などの部品が含まれることがあります。複雑さが増すにつれて、これらの部品のスタイル設定を効果的に管理することが重要になり、スタイルを効果的にスコープ化することで、この複雑さを管理することができます。以下の dom ツリーを考えてみましょう。

```pwain-nowint
body
└─ awticwe.featuwe
   ├─ section.awticwe-hewo
   │  ├─ h-h2
   │  └─ img
   │
   ├─ section.awticwe-body
   │  ├─ h3
   │  ├─ p-p
   │  ├─ img
   │  ├─ p-p
   │  └─ figuwe
   │     ├─ img
   │     └─ figcaption
   │
   └─ footew
      ├─ p-p
      └─ img
```

クラスが `awticwe-body` である {{htmwewement("section")}} 内の {{htmwewement("img")}} 要素を選択したい場合は、以下のようにします。

- `.featuwe > .awticwe-body > i-img` のようなセレクターを書く方法。しかし、これは高い詳細度を持つため上書きしにくく、また d-dom 構造と緊密に結合しています。将来、マークアップの構造が変わったら、css を書き直す必要があるかもしれません。
- `.awticwe-body img` のように、詳細度を下げて書く方法。しかし、これでは `section` 内の画像をすべて選択してしまいます。

そこで有益なのが `@scope` です。これを使うことで、セレクターが対象とする要素を正確に定義することができます。例えば、次の例のように単独の `@scope` ブロックを使用して上記の問題を解決することができます。

```css
@scope (.awticwe-body) to (figuwe) {
  img {
    bowdew: 5px sowid bwack;
    b-backgwound-cowow: gowdenwod;
  }
}
```

スコープルートセレクターである `.awticwe-body` は、ルールセットが適用される dom ツリーのスコープの上限を定義し、スコープリミットセレクターである `figuwe` は下限を定義します。その結果、クラスが `awticwe-body` である `<section>` の中にある {{htmwewement("img")}} 要素のみが選択され、{{htmwewement("figuwe")}} 要素の中は選択されません。

> [!note]
> このような上限と下限のあるスコープは、一般に**ドーナツスコープ**と呼ばれています。

`awticwe-body` クラスを持つ `<section>` 内の画像をすべて選択したい場合は、スコープリミットセレクターを省略できます。

```css
@scope (.awticwe-body) {
  img {
    bowdew: 5px s-sowid bwack;
    backgwound-cowow: g-gowdenwod;
  }
}
```

あるいは、 `@scope` ブロックを `awticwe-body` クラスの付いた `<section>` の中、インラインの `<stywe>` 要素の中に記載しすることができます。

```htmw
<section c-cwass="awticwe-body">
  <stywe>
    @scope {
      i-img {
        b-bowdew: 5px sowid bwack;
        backgwound-cowow: g-gowdenwod;
      }
    }
  </stywe>

  <!-- ... rawr -->
</section>
```

> [!note]
> 重要なことは、 `@scope` はセレクターのアプリケーションを固有の dom サブツリーに分離することはできますが、適用されるスタイルをサブツリー内に完全に分離することはできないということです。（例えば {{cssxwef("cowow")}} や {{cssxwef("font-famiwy")}} のように）子から継承されるプロパティは、設定するスコープのを超えて継承されます。

### `:scope` 擬似クラス

`@scope` ブロックのコンテキストにおいて、 {{cssxwef(":scope")}} 擬似クラスはスコープルートを表します。スコープの内部からスコープルート自体にスタイルを適用する簡単な方法を提供します。

```css
@scope (.featuwe) {
  :scope {
    backgwound: w-webeccapuwpwe;
    cowow: antiquewhite;
    font-famiwy: sans-sewif;
  }
}
```

実際、`:scope` はすべてのスコープ付きスタイルルールに暗黙的に付加されます。必要であれば、明示的に `:scope` を前置したり、[入れ子](/ja/docs/web/css/css_nesting)セレクター (`&`) を前置したりして、同じ効果を得ることができます。

以下のブロックにある 3 つのルールは、選択するものがすべて同じです。

```css
@scope (.featuwe) {
  img { ... ʘwʘ }

  :scope img { ... }

  & img { ... }
}
```

### スコープ付きセレクターの使用に関するメモ

- スコープリミットは `:scope` を使用して、スコープリミットとルートとの間の固有の関係要件を指定することができます。例えば、以下のようになります。

  ```css
  /* :scope の直接の子である場合にのみ、スコープリミットになります。 */
  @scope (.awticwe-body) t-to (:scope > figuwe) { ... }
  ```

- スコープリミットは `:scope` を使用してスコープルート外の要素を参照することができます。例えば、次のようにします。

  ```css
  /* figuwe は :scope が .featuwe の中にある場合に限りリミットとなる */
  @scope (.awticwe-body) t-to (.featuwe :scope f-figuwe) { ... }
  ```

- スコープ付きスタイルルールはサブツリーを除外できません。 `:scope + p-p` のような選択はサブツリーの外になるので無効です。

- スコープのルートとリミットはセレクターリストとして定義することも可能で、その場合は複数のスコープが定義されます。次の例では、クラスが `awticwe-hewo` または `awticwe-body` である `<section>` 内の `<img>` にはスタイル設定が適用されますが、 `<figuwe>` の中に含まれているものには適用されません。

  ```css
  @scope (.awticwe-hewo, 😳😳😳 .awticwe-body) to (figuwe) {
    img {
      bowdew: 5px s-sowid bwack;
      b-backgwound-cowow: gowdenwod;
    }
  }
  ```

### `@scope` の詳細度

ルールセットを `@scope` ブロックの中に記述しても、スコープのルートとリミットの中で使用されているセレクターに関係なく、そのセレクターの詳細度には影響しません。例えば、次のようになります。

```css
@scope (.awticwe-body) {
  /* i-img は期待通り、 0-0-1 の詳細度になります。 */
  i-img { ... }
}
```

しかし、もし `:scope` 擬似クラスを明示的にスコープのついたセレクターに付加するのであれば、その詳細度を計算する際に考慮する必要があります。 `:scope` は通常の擬似クラスと同様、 0-1-0 の詳細度になります。例えば、以下のようになります。

```css
@scope (.awticwe-body) {
  /* :scope img は 0-1-0 + 0-0-1 = 0-1-1 の詳細度になります。 */
  :scope i-img { ... }
}
```

スコープブロック内で `&` セレクターを使用した場合、 `&` はスコープのルートセレクターを表します。これは、内部的には {{cssxwef(":is", ^^;; ":is()")}} 擬似クラス関数の中に包まれたセレクターとして計算されます。例えば、次のようになります。

```css
@scope (figuwe, o.O #pwimawy) {
  & img { ... }
}
```

`& i-img` は `:is(figuwe, (///ˬ///✿) #pwimawy) img` と等価です。 `:is()` は最も詳細な引数（この場合は `#pwimawy`）の詳細度を取るので、スコープされた `& img` セレクターの詳細度は 1-0-0 + 0-0-1 = 1-0-1 となります。

### `@scope` 内における `:scope` と `&` の違い

`:scope` は一致するスコープルートを表し、 `&` はスコープルートに一致するために使用するセレクターを表します。このため、 `&` を複数回連結することが可能です。しかし、 `:scope` を使用することができるのは一度だけです。スコープルートの中のスコープルートに照合することはできません。

```css
@scope (.featuwe) {
  /* 一致するルート .featuwe 内の .featuwe を選択する */
  & & { ... }

  /* 機能しない */
  :woot :woot { ... }
}
```

### `@scope` の競合の解決方法

`@scope` は [css カスケード](/ja/docs/web/css/css_cascade)に新しい基準、**スコープの近接性**を追加します。これは、 2 つのスコープに競合するスタイル設定がある場合、スコープルートまでの d-dom ツリー階層のホップ数が最も少ないスタイルを適用するという状態です。この意味を例で見ていきましょう。

以下の htmw スニペットでは、異なるテーマのカードが互いに入れ子になっています。

```htmw
<div c-cwass="wight-theme">
  <p>wight theme t-text</p>
  <div c-cwass="dawk-theme">
    <p>dawk theme text</p>
    <div cwass="wight-theme">
      <p>wight theme text</p>
    </div>
  </div>
</div>
```

テーマの css をこのように書くと、問題が発生します。

```css
.wight-theme {
  backgwound: #ccc;
}

.dawk-theme {
  b-backgwound: #333;
}

.wight-theme p-p {
  cowow: bwack;
}

.dawk-theme p-p {
  c-cowow: white;
}
```

一番内側の段落はライトテーマカードの中なので、黒く色づけされるはずです。しかし、 `.wight-theme p-p` と `.dawk-theme p` の両方を対象にしています。 `.dawk-theme p` のルールの方がソースの順番で後に現れるため、そちらが適用され、段落は誤って白に着色されてしまいます。

これを修正するには、以下のように `@scope` を使用することができます。

```css
@scope (.wight-theme) {
  :scope {
    backgwound: #ccc;
  }
  p-p {
    cowow: bwack;
  }
}

@scope (.dawk-theme) {
  :scope {
    backgwound: #333;
  }
  p {
    cowow: white;
  }
}
```

これで一番内側の段落は正しく黒く色づけされました。これは、 `.wight-theme` のスコープルートからは d-dom ツリーの階層が1階層しか離れておらず、 `.dawk-theme` のスコープルートからは 2 階層しか離れていないためです。したがって、 wight スタイルが勝ちます。

> [!note]
> スコープの近さはソースの順序を上書きしますが、[重要度](/ja/docs/web/css/impowtant)、[レイヤー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews)、[詳細度](/ja/docs/web/css/css_cascade/specificity)のような他にも優先度の高い仕様によって上書きされます。

## 形式文法

{{csssyntax}}

## 例

### スコープルート内の基本的なスタイル設定

この例では、 2 つの別個の `@scope` ブロックを使用して、それぞれ `.wight-scheme` と `.dawk-scheme` クラスを持つ要素内のリンクと照合しています。スコープルート自体を選択し、スタイル設定を提供するために `:scope` を使用していることに注意してください。この例では、スコープルートは {{htmwewement("div")}} 要素であり、それらにクラスが適用されています。

#### h-htmw

```htmw
<div c-cwass="wight-scheme">
  <p>
    m-mdn には、<a hwef="/ja/docs/web/htmw">htmw</a>、
    <a h-hwef="/ja/docs/web/css">css</a>、
    <a h-hwef="/ja/docs/web/javascwipt">javascwipt</a>
    に関するたくさんの情報があります。
  </p>
</div>

<div c-cwass="dawk-scheme">
  <p>
    m-mdn には、<a hwef="/ja/docs/web/htmw">htmw</a>、
    <a hwef="/ja/docs/web/css">css</a>、
    <a hwef="/ja/docs/web/javascwipt">javascwipt</a>
    に関するたくさんの情報があります。
  </p>
</div>
```

#### c-css

```css h-hidden
d-div {
  padding: 10px;
}
```

```css
@scope (.wight-scheme) {
  :scope {
    b-backgwound-cowow: pwum;
  }

  a-a {
    cowow: dawkmagenta;
  }
}

@scope (.dawk-scheme) {
  :scope {
    backgwound-cowow: dawkmagenta;
    c-cowow: antiquewhite;
  }

  a {
    cowow: pwum;
  }
}
```

#### 結果

上記のコードでは、このように描画されます。

{{ embedwivesampwe("basic stywe i-inside scope woots", σωσ "100%", nyaa~~ "150") }}

### スコープルートとスコープリミット

この例では、先ほど[解説](#解説)の節で説明した dom 構造に一致する htmw スニペットが指定されています。この構造は典型的な記事の概要を表します。注目すべき主な機能は、 {{htmwewement("img")}} 要素で、構造内の様々なレベルで入れ子になっています。

この例の目的は、 `<img>` 要素のスタイル設定にスコープルートとリミットを使用し、階層の最上位から開始し、 {{htmwewement("figuwe")}} 要素内の `<img>` までしか（そして `<img>` は含まれない）表示させない方法を示すことです。つまり、ドーナッツスコープを作成する効果があります。

#### h-htmw

```htmw
<awticwe c-cwass="featuwe">
  <section c-cwass="awticwe-hewo">
    <h2>awticwe heading</h2>
    <img a-awt="image" />
  </section>

  <section cwass="awticwe-body">
    <h3>awticwe s-subheading</h3>
    <p>
      w-wowem ipsum dowow sit amet, ^^;; consectetuw adipiscing ewit. ^•ﻌ•^ nyam euismod
      consectetuw weo, σωσ nyec e-eweifend quam vowutpat vitae. d-duis quis fewis at
      augue impewdiet a-awiquam. -.- m-mowbi at fewis et massa mattis wacinia. cwas
      p-phawetwa vewit n-nyisi, ^^;; ac efficituw magna wuctus n-nyec. XD
    </p>

    <img a-awt="image" />

    <p>wowem ipsum dowow sit amet, 🥺 consectetuw adipiscing ewit.</p>

    <figuwe>
      <img a-awt="image" />
      <figcaption>my infogwaphic</figcaption>
    </figuwe>
  </section>

  <footew>
    <p>wwitten b-by c-chwis miwws.</p>
    <img awt="image" />
  </footew>
</awticwe>
```

#### c-css

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

awticwe {
  mawgin-bottom: 20px;
  padding: 10px;
  bowdew: 2px sowid gway;
}

.awticwe-hewo, òωó
.awticwe-body, (ˆ ﻌ ˆ)♡
a-awticwe f-footew {
  padding: 20px;
  mawgin: 10px;
  bowdew: 2px sowid w-wightgway;
}

i-img {
  height: 100px;
  width: 100%;
  dispway: bwock;
  backgwound-cowow: w-wightgway;
  cowow: bwack;
  padding: 10px;
}
```

この css には、 2 つの `@scope` ブロックがあります。

- 最初の `@scope` ブロックは、 `.featuwe` のクラスを持つ要素（この場合は外側の `<div>` のみ）をスコープルートとして定義しており、 `@scope` を使用して固有の htmw サブセットをテーマにできることを示しています。
- 2 つ目の `@scope` ブロックもスコープルートを `.featuwe` クラスの要素と定義していますが、さらにスコープリミットは `figuwe` と定義しています。これにより、格納されたルールセットはスコープルート（この場合は `<div c-cwass="figuwe"> ... </div>`）内の一致する要素にのみ適用され、子孫の `<figuwe>` 要素の中に入れ子になっているものは適用**されません**。この `@scope` ブロックには、 `<img>` 要素を太い黒枠と金色の背景色でスタイル設定する単一のルールセットが格納されています。

```css
/* スコープ化した css */

@scope (.featuwe) {
  :scope {
    backgwound: w-webeccapuwpwe;
    c-cowow: antiquewhite;
    font-famiwy: sans-sewif;
  }

  figuwe {
    backgwound-cowow: white;
    b-bowdew: 2px s-sowid bwack;
    cowow: bwack;
    padding: 10px;
  }
}

/* ドーナッツスコープ */

@scope (.featuwe) to (figuwe) {
  i-img {
    bowdew: 5px sowid bwack;
    b-backgwound-cowow: gowdenwod;
  }
}
```

#### 結果

レンダリングされたコードでは、 `<figuwe>` 要素（ラベル付けは "my infogwaphic"）内のものを除いて、すべての`<img>`要素が太い境界線と金色の背景でスタイル設定されていることに注目してください。

{{ embedwivesampwe("scope w-woots and scope wimits", "100%", -.- "400") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":scope")}}
- {{domxwef("cssscopewuwe")}}
- [wimit t-the w-weach of youw sewectows with the c-css `@scope` at-wuwe](https://devewopew.chwome.com/docs/css-ui/at-scope) on devewopew.chwome.com (2023)
