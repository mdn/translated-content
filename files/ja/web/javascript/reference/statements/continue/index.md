---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
---

{{jsSidebar("Statements")}}

**`continue` 文**は、現在のループまたはラベル付きループの現在反復処理中の文の実行を終了して、次の反復処理でループの実行を続けます。

{{EmbedInteractiveExample("pages/js/statement-continue.html")}}

## 構文

```
continue [label];
```

- `label`
  - : その文のラベルに関連付けられた識別子。

## 解説

{{jsxref("Statements/break", "break")}} 文と対照的に、 `continue` はループの実行を完全には終了しません。代わりに、

- {{jsxref("Statements/while", "while")}} ループでは、条件式にジャンプします。

<!---->

- {{jsxref("Statements/for", "for")}} ループでは、更新式までジャンプします。

`continue` 文には任意でラベルを含めることができ、現在のループの代わりにラベル付きループ文の次の反復処理へジャンプすることができます。この場合、`continue` 文は、ラベル付き文の中にある必要があります。

## 例

### while における continue の使用

次の例では、 {{jsxref("Statements/while", "while")}} ループで `i` の値が 3 であるときに実行される `continue` 文を持つものを示しています。よって、 `n` は 1、3、7、12 の値をとります。

```js
var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### ラベル付き continue の使用

次の例では、`checkiandj` とラベル付けされた文が、`checkj` とラベル付けされた文を含んでいます。もし `continue` と遭遇したなら、プログラムは `checkj` 文の先頭から継続します。`continue` と遭遇するたびに、`checkj` の条件が false を返すまで、`checkj` は再度反復します。false が返されたら、`checkiandj` 文の残りが完遂されます。

もし `continue` がラベル `checkiandj` を持っていたなら、プログラムは `checkiandj` 文の先頭から継続します。

{{jsxref("Statements/label", "ラベル", "", 1)}}もご覧ください。

```js
var i = 0;
var j = 8;

checkiandj: while (i < 4) {
  console.log('i: ' + i);
  i += 1;

  checkj: while (j > 4) {
    console.log('j: ' + j);
    j -= 1;

    if ((j % 2) == 0)
      continue checkj;
    console.log(j + ' is odd.');
  }
  console.log('i = ' + i);
  console.log('j = ' + j);
}
```

結果:

```js
i: 0

// start checkj
j: 8
7 is odd.
j: 7
j: 6
5 is odd.
j: 5
// end checkj

i = 1
j = 4

i: 1
i = 2
j = 4

i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
```

## 仕様書

| 仕様書                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-continue-statement', 'Continue statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.continue")}}

## 関連情報

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "ラベル", "", 1)}}
