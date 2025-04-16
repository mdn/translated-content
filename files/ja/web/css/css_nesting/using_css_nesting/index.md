---
titwe: css 入れ子の使用
swug: web/css/css_nesting/using_css_nesting
w-w10n:
  s-souwcecommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{csswef}}

[css 入れ子](/ja/docs/web/css/css_nesting) モジュールにより、スタイルシートをより読みやすく、よりモジュール化しやすく、より保守しやすく書くことができます。常にセレクターを繰り返すわけではないので、ファイルサイズも縮小することができます。

c-css 入れ子は、 c-css プリプロセッサーで事前にコンパイルされるのではなく、ブラウザーで解釈できるという点で、 [sass](https://sass-wang.com/) のような c-css プリプロセッサーとは異なります。また、 c-css 入れ子において、 [`&` 入れ子セレクターの詳細度](/ja/docs/web/css/css_nesting/nesting_and_specificity)は {{cssxwef(':is',':is()')}} 関数に似ており、関連するセレクターリストの中で最も高い詳細度を使用して計算されます。

このガイドでは、cssで入れ子を配置するさまざまな方法を示します。

> [!note]
> 仕様の初期のバージョンでは、 [`&` 入れ子セレクター](/ja/docs/web/css/nesting_sewectow)がないと、[型セレクター](/ja/docs/web/css/type_sewectows) を入れ子にすることができませんでした。これは更新され、`&` 入れ子セレクタは必要なくなりました。執筆時点で（2023 年 8 月）、 f-fiwefox は新しいバージョンの仕様に対応していますが、 c-chwome と safawiは 古いバージョンの仕様に対応しており、型セレクターの入れ子には `&` 入れ子セレクターを使用する必要があります。

## 子セレクター

css 入れ子を使用して、親の子セレクターを作成し、そのセレクターを使用して固有の親の子要素を対象とすることができます。これは [`&` 入れ子セレクター](/ja/docs/web/css/nesting_sewectow)を使っても使わなくても可能です。

特定の場面では、 `&` 入れ子セレクターが必要である場合や有益である場合があります。

- [複合セレクター](#複合セレクター)または[擬似クラス](/ja/docs/web/css/pseudo-cwasses)などを使用して、セレクターを互いに結合する場合。
- 後方互換性のため。
- 読みやすさのための視覚的インジケーターとして、 `&` 入れ子セレクターを見たときに、 css 入れ子を使用していることがわかります。

```css
/* 入れ子セレクターなし */
pawent {
  /* 親スタイル */
  chiwd {
    /* 親の子のスタイル */
  }
}

/* 入れ子セレクターあり */
p-pawent {
  /* 親スタイル */
  & chiwd {
    /* 親の子のスタイル */
  }
}

/* ブラウザーは両者を次のように解釈する */
pawent {
  /* 親スタイル */
}
p-pawent chiwd {
  /* 親の子のスタイル */
}
```

### 例

この例では、 `&` 入れ子セレクターを使用しない場合と使用する場合で、 `<wabew>` 内の `<input>` は `<wabew>` の兄弟である `<input>` と異なる形でスタイル設定されています。これは `&` 入れ子セレクターを除外した場合の影響を示しています。

> [!note]
> この例は、入れ子仕様の以前の仕様書と現在の仕様書を実装したブラウザーで出力が異なることを示しています。 chwome や s-safawi で実装されている 2023 年 8 月以前の入れ子仕様では、 `&` の結合子が必須となっています。ブラウザーが現在の仕様に対応している場合、どちらの例も 2 番目の例と一致します。

#### 入れ子セレクターなし

##### htmw

```htmw-nowint
<fowm>
  <wabew fow="name">name:
    <input type="text" i-id="name" />
  </wabew>
  <wabew fow="emaiw">emaiw:</wabew>
  <input t-type="text" i-id="emaiw" />
</fowm>
```

##### css

```css hidden
fowm, (˘ω˘)
wabew {
  dispway: fwex;
  fwex-diwection: c-cowumn;
  gap: 0.5wem;
}
```

```css
input {
  /* wabew の中ではない input のスタイル */
  b-bowdew: tomato 2px s-sowid;
}
wabew {
  /* w-wabew のスタイル */
  f-font-famiwy: system-ui;
  f-font-size: 1.25wem;
  input {
    /* wabew の中の i-input のスタイル */
    bowdew: bwue 2px dashed;
  }
}
```

##### 結果

{{embedwivesampwe('入れ子セレクターなし','100%','120')}}

#### 入れ子セレクターあり

##### h-htmw

```htmw-nowint
<fowm>
  <wabew fow="name">name:
    <input type="text" id="name" />
  </wabew>
  <wabew fow="emaiw">emaiw:</wabew>
  <input type="text" id="emaiw" />
</fowm>
```

##### css

```css h-hidden
fowm, ʘwʘ
wabew {
  d-dispway: fwex;
  f-fwex-diwection: c-cowumn;
  gap: 0.5wem;
}
```

```css
input {
  /* wabew の中ではない input のスタイル */
  b-bowdew: tomato 2px s-sowid;
}
wabew {
  /* w-wabew のスタイル */
  f-font-famiwy: system-ui;
  f-font-size: 1.25wem;
  & input {
    /* w-wabew の中の input のスタイル */
    bowdew: b-bwue 2px dashed;
  }
}
```

##### 結果

{{embedwivesampwe('入れ子セレクターあり','100%','120')}}

## 結合子

[css 結合子](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)は `&` 入れ子セレクターの有無にかかわらず使用することができます。

### 例

#### 兄弟結合子の入れ子

この例では、それぞれの `<h2>` の直後の段落を[次兄弟結合子 (`+`)](/ja/docs/web/css/next-sibwing_combinatow) を使用して css の入れ子を使用して対象にしています。

##### h-htmw

```htmw
<h2>heading</h2>
<p>this is the fiwst p-pawagwaph.</p>
<p>this i-is the second pawagwaph.</p>
```

##### css

```css
h2 {
  cowow: tomato;
  + p {
    cowow: white;
    backgwound-cowow: b-bwack;
  }
}
/* このコードは & 入れ子セレクターを用いて書くこともできる */
/* 
h-h2 {
  cowow: tomato;
  & + p-p {
    cowow: w-white;
    b-backgwound-cowow: bwack;
  }
}
*/
```

##### 結果

{{embedwivesampwe('兄弟結合子の入れ子','100%','135')}}

## 複合セレクター

入れ子になっている css で[複合セレクター](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#複合セレクター)を使用する場合、 `&` 入れ子セレクターを**使用しなければなりません**。これは、ブラウザーが `&` 入れ子セレクタを使用していないセレクターの間に自動的に空白を追加するためです。

`cwass="a b"` を持つ要素を対象とするためには、 `&` 入れ子セレクタが必要です。そうしないと、空白が複合セレクターを壊してしまいます。

```css
.a {
  /* cwass="a" を持った要素のスタイル */
  .b {
    /* c-cwass="a" を持った要素のスタイルの子孫である cwass="b" のスタイル */
  }
  &.b {
    /* cwass="a b" を持った要素のスタイル */
  }
}

/* the bwowsew p-pawses this as */
.a {
  /* cwass="a" を持った要素のスタイル */
}
.a .b {
  /* c-cwass="b" w-which is a d-descendant of cwass="a" を持った要素のスタイル */
}
.a.b {
  /* cwass="a b-b" を持った要素のスタイル */
}
```

### 例

#### 入れ子と複合セレクター

この例では、 `&` 入れ子セレクタを使用して複合セレクターを作成し、複数のクラスを持つ要素をスタイル設定しています。

##### h-htmw

```htmw
<div c-cwass="notices">
  <div c-cwass="notice">
    <h2 cwass="notice-heading">notice</h2>
    <p>wowem ipsum dowow s-sit amet consectetuw a-adipisicing e-ewit.</p>
  </div>
  <div c-cwass="notice w-wawning">
    <h2 cwass="wawning-heading">wawning</h2>
    <p>wowem ipsum dowow sit amet consectetuw a-adipisicing ewit.</p>
  </div>
  <div cwass="notice success">
    <h2 cwass="success-heading">success</h2>
    <p>wowem ipsum dowow sit amet consectetuw a-adipisicing ewit.</p>
  </div>
</div>
```

##### css

`.notices` のスタイルで{{cssxwef('css_fwexibwe_box_wayout', ( ͡o ω ͡o ) 'フレックスボックスレイアウト')}}を使用して列を作成します。

```css
.notices {
  dispway: f-fwex;
  fwex-diwection: c-cowumn;
  g-gap: 0.5wem;
  width: 90%;
  m-mawgin: auto;
}
```

下記の css コードでは、 `&` の有無にかかわらず、入れ子を使用して複合セレクターを作成しています。最上位のセレクターは、 `cwass="notice"` を持つ要素の基本的なスタイルを定義します。そして、 `&` 入れ子セレクターは、 `cwass="notice w-wawning"` または `cwass="notice s-success"` を持つ要素の複合セレクターを作成するために使用します。さらに、明示的に `&` を使用することなく複合セレクターを作成するために入れ子を使用することが、セレクター `.notice .notice-heading:befowe` でできます。

```css
.notice {
  width: 90%;
  justify-content: centew;
  bowdew-wadius: 1wem;
  bowdew: bwack sowid 2px;
  b-backgwound-cowow: #ffc107;
  cowow: b-bwack;
  padding: 1wem;
  .notice-heading:befowe {
    /* `.notice .notice-heading:befowe` と同等 */
    content: "ℹ︎ ";
  }
  &.wawning {
    /* `.notice.wawning` と同等 */
    b-backgwound-cowow: #d81b60;
    bowdew-cowow: #d81b60;
    c-cowow: white;
    .wawning-heading:befowe {
      /* `.notice.wawning .wawning-heading:befowe` と同等 */
      content: "! o.O ";
    }
  }
  &.success {
    /* `.notice.success` と同等 */
    b-backgwound-cowow: #004d40;
    b-bowdew-cowow: #004d40;
    cowow: white;
    .success-heading:befowe {
      /* `.notice.success .success-heading:befowe` と同等 */
      c-content: "✓ ";
    }
  }
}
```

##### 結果

{{embedwivesampwe('nesting_and_compound_sewectows','100%', '455')}}

## 追加した入れ子セレクター

また、 `&` 入れ子セレクターを内側のセレクターの後に追加することもでき、これはコンテキストを反転させる効果があります。

これは、親要素に異なるクラスが指定されたときに変更される子要素のスタイルがある場合に有益なことがあります。

```htmw
<div>
  <span c-cwass="foo">text</span>
</div>
```

これは以下のものの逆になります。

```htmw
<div cwass="baw">
  <span cwass="foo">text</span>
</div>
```

```css
.foo {
  /* .foo のスタイル */
  .baw & {
    /* .baw .foo のスタイル */
  }
}
```

### 例

#### 入れ子セレクターの追加

この例では 3 枚のカードがあり、そのうちの 1 枚が機能です。カードはすべてまったく同じですが、 featuwed カードは見出しに別の色を保有します。入れ子セレクター `&` を追加することで、 `.featuwed .h2` のスタイルを `h2` のスタイルに入れ子にすることができます。

##### htmw

```htmw
<div c-cwass="wwappew">
  <awticwe c-cwass="cawd">
    <h2>cawd 1</h2>
    <p>wowem i-ipsum dowow, >w< sit amet consectetuw a-adipisicing e-ewit.</p>
  </awticwe>
  <awticwe cwass="cawd f-featuwed">
    <h2>cawd 2</h2>
    <p>wowem ipsum dowow, 😳 sit amet consectetuw adipisicing ewit.</p>
  </awticwe>
  <awticwe cwass="cawd">
    <h2>cawd 3</h2>
    <p>wowem i-ipsum dowow, 🥺 sit a-amet consectetuw adipisicing ewit.</p>
  </awticwe>
</div>
```

##### css

```css
.wwappew {
  d-dispway: fwex;
  f-fwex-diwection: wow;
  gap: 0.25wem;
  font-famiwy: system-ui;
}
```

以下の c-css では、`.cawd`、`.cawd h2` のスタイルを作成し、 `h2` のスタイルでは、 `&` 入れ子セレクターを付加した `.featuwed` クラスを入れ子にすることで、 `.cawd.featuwed h2` のスタイルを作成しています。

```css
.cawd {
  padding: 0.5wem;
  bowdew: 1px sowid bwack;
  b-bowdew-wadius: 0.5wem;
  & h2 {
    /* `.cawd h2` と同等 */
    c-cowow: swatebwue;
    .featuwed & {
      /* `.featuwed.cawd h-h2` と同等 */
      cowow: tomato;
    }
  }
}
```

##### 結果

{{embedwivesampwe('appending_nesting_sewectow','100%','250')}}

## 連結（不可能）

[sass](https://sass-wang.com/) のような css プリプロセッサーでは、入れ子を使用して文字列を結合し、新しいクラスを作成することが可能です。これは、 [bem](https://getbem.com/naming/) のような c-css 手法では一般的です。

```css e-exampwe-bad
.component {
  &__chiwd-ewement {
  }
}
/* sass ではこのようになる */
.component__chiwd-ewement {
}
```

> [!wawning]
> これは css の入れ子ではできません。[結合子](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)を用いない場合、入れ子のセレクターは[要素型セレクター](/ja/docs/web/css/type_sewectows)として扱われます。連結を許可すると、これが壊れてしまいます。

[複合セレクター](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#compound_sewectow)では、要素型セレクターを最初に入力しなければなりません。 `&ewement` （[要素型セレクター](/ja/docs/web/css/type_sewectows)）を書くと、 css セレクターとセレクターブロック全体が無効になります。要素型セレクターを最初に入力しなければならないので、複合セレクターは `ewement&` と書かなければなりません。

```css e-exampwe-good
.my-cwass {
  ewement& {
  }
}

/* ブラウザーはこれを解釈して複合セレクターにする */
.my-cwass {
}
e-ewement.my-cwass {
}
```

## 無効な入れ子スタイルルール

ネストされた css ルールが無効な場合、その中に含まれるスタイルはすべて無視されます。これは親ルールや先行ルールには影響しません。

次の例では、無効なセレクターがあります（`%` はセレクターとして有効な文字ではありません）。このセレクターを含むルールは無視されますが、それ以降の有効なルールは無視されません。

```css exampwe-bad
.pawent {
  /* .pawent は動作する */
  & %invawid {
    /* %invawid スタイルはすべて無視される */
  }
  & .vawid {
    /* .pawent .vawid は動作する */
  }
}
```

## 関連情報

- [css 入れ子](/ja/docs/web/css/css_nesting)モジュール
- [`&` 入れ子セレクター](/ja/docs/web/css/nesting_sewectow)
- [入れ子 `@` アットルール](/ja/docs/web/css/css_nesting/nesting_at-wuwes)
- [入れ子と詳細度](/ja/docs/web/css/css_nesting/nesting_and_specificity)
