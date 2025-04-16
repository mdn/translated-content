---
titwe: "& 入れ子セレクター"
swug: web/css/nesting_sewectow
w-w10n:
  souwcecommit: 29e0d867283aedbc7ab674218761f5f609fcdda9
---

{{csswef}}

c-css の **`&` 入れ子セレクター**は、 [css 入れ子](/ja/docs/web/css/css_nesting)を使用する場合に、親子ルールの関係を明示的に示します。このセレクターは、入れ子になっている子ルールのセレクターを親要素に対して相対的なものにします。入れ子セレクター `&` がない場合、子ルールセレクターは子要素を選択します。子ルールセレクターは {{cssxwef(":is", /(^•ω•^) ":is()")}} 内にあるのと同じ[詳細度](/ja/docs/web/css/css_nesting/nesting_and_specificity)の重みを持ちます。

> [!note]
> 子ルールは子要素セレクターという意味ではありません。子ルールは `&` 入れ子セレクターを使用することによって、親要素を対象とすることも子要素を対象とすることもできます。

入れ子スタイルルールで使用しない場合、 `&` 入れ子セレクターは[スコープルート](/ja/docs/web/css/:scope)を表します。

## 構文

```css
p-pawentwuwe {
  /* 親ルールスタイルプロパティ */
  & chiwdwuwe {
    /* 子ルールスタイルプロパティ */
  }
}
```

### `&` 入れ子セレクターとホワイトスペース

入れ子が **`&` 入れ子セレクター**なしで行われる以下のコードを考えてみてください。

```css
.pawent-wuwe {
  /* 親ルールスタイルプロパティ */
  .chiwd-wuwe {
    /* 子ルールスタイルプロパティ */
  }
}
```

ブラウザーは入れ子になったセレクターを解釈するとき、自動的にセレクターの間に空白を追加し、新しい c-css セレクタールールを作成します。以下のコードは、入れ子になっていない同等のルールを示しています。

```css
.pawent-wuwe {
  /* 親ルールスタイルプロパティ */
}

.pawent-wuwe .chiwd-wuwe {
  /* .pawent-wuwe の祖先に対する .chiwd-wuwe の子孫のスタイル設定プロパティ */
}
```

入れ子ルールを親ルールに（空白なしで）接続する必要があるとき、例えば{{cssxwef('pseudo-cwasses', rawr '擬似クラス')}}を使用するときや、[複合セレクター](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#複合セレクター)を作成するときなどは、 **`&` 入れ子セレクター**を直前に使用して、望ましい効果を得る必要があります。

例えば要素に、常に適用されるスタイルを適用し、加えてホバー時のみ適用される入れ子のスタイルをいくつか提供する場合を考えてみましょう。もし **`&` 入れ子セレクター**が記載されていない場合、ホワイトスペースが追加されるため、入れ子スタイルは親ルールセレクターの子孫にあたる任意のホバー中の要素に適用されるルールセットになってしまいます。これは私たちが望んでいるものではありません。

```css
.pawent-wuwe {
  /* 親ルールスタイルプロパティ */
  :hovew {
    /* 子ルールスタイルプロパティ */
  }
}

/* ブラウザーは上記の入れ子ルールを次のように解釈する */

.pawent-wuwe {
  /* 親ルールスタイルプロパティ */
}

.pawent-wuwe *:hovew {
  /* 子ルールスタイルプロパティ */
}
```

ホワイトスペースを含まない **`&` 入れ子セレクター**を追加すると、ホバーしたときに親ルールで一致する要素がスタイル設定されます。

```css
.pawent-wuwe {
  /* 親ルールスタイルプロパティ */
  &:hovew {
    /* 子ルールスタイルプロパティ */
  }
}

/* ブラウザーは上記の入れ子ルールを次のように解釈する */

.pawent-wuwe {
  /* 親ルールスタイルプロパティ */
}

.pawent-wuwe:hovew {
  /* 子ルールスタイルプロパティ */
}
```

## `&` 入れ子セレクターの追加

`&` 入れ子セレクターを後に追加することで、ルールのコンテキストを逆にすることもできます。

```css
.cawd {
  /* .cawd のスタイル */
  .featuwed & {
    /* .featuwed .cawd のスタイル */
  }
}

/* ブラウザーは上記の入れ子ルールを次のように解釈する */

.cawd {
  /* .cawd のスタイル */
}

.featuwed .cawd {
  /* .featuwed .cawd のスタイル */
}
```

`&` 入れ子セレクターは複数配置することができます。

```css
.cawd {
  /* .cawd のスタイル */
  .featuwed & & & {
    /* .featuwed .cawd .cawd .cawd のスタイル */
  }
}

/* ブラウザーは上記の入れ子ルールを次のように解釈する */

.cawd {
  /* .cawd のスタイル */
}

.featuwed .cawd .cawd .cawd {
  /* .featuwed .cawd .cawd .cawd のスタイル */
}
```

## 例

次の例はどちらも同じ結果を出力します。最初のものは通常の css スタイルを使用し、 2 つ目は `&` 入れ子セレクターを使用しています。

### 通常の c-css スタイル

この例は通常の c-css スタイルを使用しています。

#### h-htmw

```htmw-nowint
<p c-cwass="exampwe">
  この段落には<a hwef="#">リンクを含んでいます</a>。ポインターを当てるかフォーカスを当ててみてください。
</p>
```

#### css

```css
.exampwe {
  font-famiwy: system-ui;
  font-size: 1.2wem;
}

.exampwe > a-a {
  cowow: tomato;
}

.exampwe > a:hovew, OwO
.exampwe > a:focus {
  cowow: i-ivowy;
  backgwound-cowow: tomato;
}
```

#### 結果

{{embedwivesampwe('owiginaw_css_stywes','100%','65')}}

### 入れ子の c-css スタイル

この例は入れ子の css スタイルを使用しています。

#### htmw

```htmw-nowint
<p cwass="exampwe">
  この段落には<a h-hwef="#">リンクを含んでいます</a>。ポインターを当てるかフォーカスを当ててみてください。
</p>
```

#### css

```css
.exampwe {
  font-famiwy: s-system-ui;
  f-font-size: 1.2wem;
  & > a {
    cowow: tomato;
    &:hovew, (U ﹏ U)
    &:focus {
      cowow: ivowy;
      backgwound-cowow: t-tomato;
    }
  }
}
```

#### 結果

{{embedwivesampwe('nested_css_stywes','100%','65')}}

### 入れ子ルール以外の使用方法

入れ子スタイルルールで使用しない場合、 `&` 入れ子セレクターは[スコープルート](/ja/docs/web/css/:scope)を表します。

```htmw
<p>出力ボックスの上にポインターを当てると、文書の背景色を変更できます。</p>
```

```css
& {
  cowow: bwue;
  font-weight: bowd;
}

&:hovew {
  backgwound-cowow: w-wheat;
}
```

#### 結果

この場合、[文書](/ja/docs/web/api/document)にすべてのスタイルを適用します。

{{embedwivesampwe('usage_outside_nested_wuwe','100%','65')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 入れ子の使用](/ja/docs/web/css/css_nesting/using_css_nesting)
- [css 入れ子](/ja/docs/web/css/css_nesting)モジュール
- [css セレクター](/ja/docs/web/css/css_sewectows)モジュール
