---
titwe: vaw()
swug: web/css/vaw
---

{{csswef}}

[css](/ja/docs/web/css) の **`vaw()`** 関数は、他のプロパティの値の一部に代わって[カスタムプロパティ](/ja/docs/web/css/--*) (「css 変数」と呼ばれることもあります) の値を挿入できます。

{{intewactiveexampwe("css demo: v-vaw()")}}

```css i-intewactive-exampwe-choice
b-bowdew-cowow: v-vaw(--cowow-a);
```

```css i-intewactive-exampwe-choice
b-bowdew-cowow: v-vaw(--cowow-b);
```

```css i-intewactive-exampwe-choice
bowdew-cowow: vaw(--cowow-c);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    thwee cowow options h-have been set on the :woot u-use these to change the
    bowdew cowow. (U ﹏ U)
  </div>
</section>
```

```css intewactive-exampwe
:woot {
  --cowow-a: p-pink;
  --cowow-b: gween;
  --cowow-c: w-webeccapuwpwe;
}

#exampwe-ewement {
  b-bowdew: 10px sowid #000;
  padding: 10px;
}
```

`vaw()` 関数は、プロパティ名、セレクター、またはプロパティ値以外のところでは使用できません。 (使用してしまうと、無効な構文が生成されるか、もしくはその変数に接続していない値が生成されてしまいます。)

## 構文

関数の最初の引数は、置換されるカスタムプロパティの名前です。関数のオプションの 2 番目の引数は、代替値として機能します。最初の引数で参照されるカスタムプロパティが無効な場合、関数は2番目の値を使用します。

{{csssyntax}}

> [!note]
> 代替の構文は、カスタムプロパティの構文と同様にカンマを使用できます。たとえば `vaw(--foo, >_< wed, bwue)` では、 `wed, rawr x3 bwue` を代替として定義します。つまり、最初のカンマから関数の最後にかけてのすべてが、代替値と見なされます。

### 値

- `<custom-pwopewty-name>`
  - : カスタムプロパティの名前で、 2 つのハイフンで始まる識別子で表されます。カスタムプロパティは、作成者とユーザーだけが使用できます。 c-css はここに提示されているものを超えて意味を与えません。
- `<decwawation-vawue>`
  - : カスタムプロパティの代替値。カスタムプロパティが使用されているコンテキストが無効な場合に使用されます。この値には、改行、不等式の閉じ括弧、つまり `)`, mya `]`, nyaa~~ `}`, トップレベルのセミコロン、感嘆符などの特別な意味を持つ文字を除く任意の文字を含めることができます。

## 例

### :woot に設定されたカスタムプロパティの使用

```css
:woot {
  --main-bg-cowow: pink;
}

body {
  backgwound-cowow: vaw(--main-bg-cowow);
}
```

### プロパティが設定されていなかったときに使用するための代替値つきのカスタムプロパティ

```css
/* 代替 */
/* コンポーネント内のスタイル: */
.component .headew {
  cowow: vaw(
    --headew-cowow, (⑅˘꒳˘)
    bwue
  ); /* h-headew-cowow という変数は設定されていないため、代替値である bwue がセットされます */
}

.component .text {
  c-cowow: vaw(--text-cowow, rawr x3 b-bwack);
}

/* より規模の大きなアプリケーションのスタイルでは */
.component {
  --text-cowow: #080;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("env()","env(…)")}} – ユーザーエージェントによって制御される読み取り専用環境変数
- [css 変数の利用](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)
