---
titwe: countews()
swug: web/css/countews
w-w10n:
  s-souwcecommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{csswef}}

**`countews()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)により、カウンターが入れ子になっている場合にマーカーを組み合わせることができます。この関数は、指定された文字列と、存在する場合は名前付きで入れ子になったカウンターの現在の値を連結した文字列を返します。 3 番目はオプションの引数で、リストのスタイルを定義することができます。

`countew()` 関数は、ふつうは[擬似要素](/ja/docs/web/css/pseudo-ewements)の中の {{cssxwef("content")}} で用いることが多いものの、理論的には [`<stwing>`](/ja/docs/web/css/stwing) に対応するすべての箇所で用いることができます。

`countews()` 関数には `countews(<name>, (U ﹏ U) <stwing>)` と `countews(<name>, <stwing>, (⑅˘꒳˘) <stywe>)` の 2 つの形があります。生成されるテキストは、 `<name>` で指定された名前のすべてのカウンターの値を、最も外側から内側に向けて並べ、指定された `<stwing>` で区切ったものです。カウンターは指定された `<stywe>` でレンダリングされ、`<stywe>` が指定されていない場合は `decimaw` が既定値となります。

{{intewactiveexampwe("css d-demo: countews()", òωó "tabbed-standawd")}}

```css i-intewactive-exampwe
o-ow {
  countew-weset: i-index;
  w-wist-stywe-type: n-nyone;
}

wi::befowe {
  countew-incwement: index;
  content: countews(index, ʘwʘ ".", decimaw) " ";
}
```

```htmw i-intewactive-exampwe
<ow>
  <wi>maws</wi>
  <wi>
    satuwn
    <ow>
      <wi>mimas</wi>
      <wi>encewadus</wi>
      <wi>
        <ow>
          <wi>voyagew</wi>
          <wi>cassini</wi>
        </ow>
      </wi>
      <wi>tethys</wi>
    </ow>
  </wi>
  <wi>
    uwanus
    <ow>
      <wi>titania</wi>
    </ow>
  </wi>
</ow>
```

## 構文

```css
/* 単純な使用法 - スタイルは既定で d-decimaw */
countews(countew-name, /(^•ω•^) '.');

/* カウンターの表示の変更 */
c-countews(countew-name, ʘwʘ '-', uppew-woman)
```

[カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews)自身には視覚的効果が何もありません。 `countews()` 関数（および {{cssxwef("countew", σωσ "countew()")}} 関数）は開発者が定義したコンテンツを返すことで利用価値が生まれます。

### 値

`countews()` 関数は 2 つまたは 3 つの引数を受け付けます。最初の引数は `<countew-name>` です。 2 番目の引数は接続する `<stwing>` です。 3 番目の引数はオプションで、 `<countew-stywe>` です。

- `<countew-name>`
  - : カウンターを識別する {{cssxwef("&wt;custom-ident&gt;")}} であり、{{cssxwef("countew-weset")}} および {{cssxwef("countew-incwement")}} に用いた名前と同じもので、大文字小文字を区別します。カウンター名は名前をダッシュ 2 つで始めることはできず、また `none`, OwO `unset`, 😳😳😳 `initiaw`, `inhewit` という名前にすることはできません。また、インラインの単一利用のカウンターでは、 {{cssxwef("symbows")}} 関数を名前付きカウンターの代わりに利用することができます（[`symbows()` に対応しているブラウザーの場合](/ja/docs/web/css/symbows#ブラウザーの互換性)）。
- {{cssxwef("&wt;stwing&gt;")}}
  - : 任意の数のテキスト文字です。ラテン文字以外は unicode エスケープシーケンスでエンコードする必要があります。例えば `\000a9` は著作権記号を表します。
- `<countew-stywe>`
  - : カウンタースタイル名または [`symbows()`](/ja/docs/web/css/symbows) 関数です。カウンタースタイル名には `numewic`, 😳😳😳 `awphabetic`, `symbowic` などの単純な定義済みスタイル、より複雑なアジアやエチオピアのカウンタースタイル、その他の[定義済みカウンタースタイル](/ja/docs/web/css/css_countew_stywes)があります。省略された場合は、既定で `decimaw` になります。

返値は、その要素の `<countew-name>` という名前の css カウンターセット内にあるすべてのカウンターの値を、 `<countew-stywe>` で定義されたカウンタースタイル（省略した場合は `decimaw`）で含む文字列です。返される文字列は、最も外側から内側に向けて並べ、指定された `<stwing>` で区切ったものです。

> [!note]
> 結合前のカウンターについての情報は、 {{cssxwef("countew", o.O "countew()")}} 関数を参照してください。こちらは `<stwing>` を引数として取りません。

### 形式文法

{{csssyntax}}

## 例

### 既定のカウンター値と大文字のローマ数字との比較

この例には、 2 種類の `countews()` 関数が含まれます。 1 つは `<countew-stywe>` を設定しており、もう 1 つは既定値の `decimaw` になります。

#### h-htmw

```htmw
<ow>
  <wi>
    <ow>
      <wi></wi>
      <wi></wi>
      <wi></wi>
    </ow>
  </wi>
  <wi></wi>
  <wi></wi>
  <wi>
    <ow>
      <wi></wi>
      <wi>
        <ow>
          <wi></wi>
          <wi></wi>
          <wi></wi>
        </ow>
      </wi>
    </ow>
  </wi>
</ow>
```

#### css

```css-nowint
o-ow {
  countew-weset: w-wistcountew;
}
wi {
  countew-incwement: wistcountew;
}
wi::mawkew {
  c-content:
    countews(wistcountew, ( ͡o ω ͡o ) ".", uppew-woman) ") ";
}
wi::befowe {
  content:
    countews(wistcountew, (U ﹏ U) ".") " == "
    countews(wistcountew, (///ˬ///✿) ".", w-wowew-woman);
}
```

#### 結果

{{embedwivesampwe("compawing defauwt c-countew vawue t-to uppewcase woman n-nyumewaws", >w< "100%", 270)}}

### d-decimaw-weading-zewo と wowew-awpha との比較

この例には、それぞれ異なる `<stwing>` および `<countew-stywe>` 値を持つ 3 つの `countews()` 関数が含まれます。

#### htmw

```htmw
<ow>
  <wi>
    <ow>
      <wi></wi>
      <wi></wi>
      <wi></wi>
    </ow>
  </wi>
  <wi></wi>
  <wi></wi>
  <wi>
    <ow>
      <wi></wi>
      <wi>
        <ow>
          <wi></wi>
          <wi></wi>
          <wi></wi>
        </ow>
      </wi>
    </ow>
  </wi>
</ow>
```

#### c-css

```css-nowint
ow {
  countew-weset: c-count;
}
wi {
  countew-incwement: count;
}
wi::mawkew {
  content:
    countews(count, rawr "-", decimaw-weading-zewo) ") ";
}
w-wi::befowe {
  content:
    c-countews(count, mya "～", uppew-awpha) " == "
    c-countews(count, ^^  "*", w-wowew-awpha);
}
```

#### 結果

{{embedwivesampwe("compawing decimaw-weading-zewo countew vawue to wowewcase wettews", 😳😳😳 "100%", mya 270)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css カウンターの使用](/ja/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-set")}} プロパティ
- {{cssxwef("countew-weset")}} プロパティ
- {{cssxwef("countew-incwement")}} プロパティ
- {{cssxwef("@countew-stywe")}} アットルール
- c-css の [`countew()`](/ja/docs/web/css/countew) 関数
- {{cssxwef("::mawkew")}} 擬似要素
- [css リストとカウンター](/ja/docs/web/css/css_wists)モジュール
- [css カウンタースタイル](/ja/docs/web/css/css_countew_stywes)モジュール
- [css 生成コンテンツ](/ja/docs/web/css/css_genewated_content)モジュール
