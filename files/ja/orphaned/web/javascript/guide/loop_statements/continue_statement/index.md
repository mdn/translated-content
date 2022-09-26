---
title: continue 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/continue_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/continue_Statement
---

### continue 文

`continue` 文は `while` 文、`do-while` 文、`for` 文、`label` 文をリスタートさせるために用います。

- ラベルを用いずに `continue` を使用した場合、現在繰り返している最も内側にある `while` 文 `do-while` 文、`for` 文を終了し、次の反復の実行に移ります。`break` 文とは異なり、`continue` はループ全体の実行を終了しません。`while` ループでは条件比較部分に戻ります。`for` ループではインクリメントの式に移ります。
- ラベルを用いて `continue` を使用した場合、`label` で指定されたループ文に移ります。

`continue` 文は次のように使用します。

1. `continue`
2. `continue label`

**例 1**
次の例では、`i` の値が 3 のときに実行される `continue` 文を用いた `while` ループを示します。こうすることで `n` は順に 1、3、7、12 という値をとります。

```
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}
```

**例 2**
`checkiandj` というラベルの付いた文の中に `checkj` というラベルの付いた文があります。`continue` に出くわすと、プログラムは `checkj` の現在の反復を終了し、次の反復を始めます。`continue` に出くわすたびに、条件が false になるまで `checkj` を繰り返します。false が返されると `checkiandj` 文の残りを完了し、条件が false を返すまで `checkiandj` を繰り返します。false が返されると `checkiandj` に続く文が実行されます。

`continue` が `checkiandj` というラベルを持っているとプログラムは `checkiandj` 文の最初から続けます。

```
checkiandj :
   while (i < 4) {
      document.write(i + "<br/>");
      i += 1;
      checkj :
         while (j > 4) {
            document.write(j + "<br/>");
            j -= 1;
            if ((j % 2) == 0)
               continue checkj;
            document.write(j + " is odd.<br/>");
         }
      document.write("i = " + i + "<br/>");
      document.write("j = " + j + "<br/>");
   }
```

{{ PreviousNext("JavaScript/Guide/Loop_Statements/break_Statement", "JavaScript/Guide/Object_Manipulation_Statements") }}
