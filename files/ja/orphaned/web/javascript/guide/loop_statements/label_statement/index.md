---
title: label 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/label_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/label_Statement
---

### label 文

`label` を使うと、そのプログラムのどこからでも参照できる、識別子を持った文を作ることができます。例えば、ラベルを使用してあるループに名前を付けると、`break` 文や `continue` 文を使用してプログラムがループを脱出するべきかそのまま実行を継続するべきかを示すことができます。

`label` 文は次のように使用します。

```
label :
   statement
```

`label` の値は予約語でなければどんな JavaScript の識別子でも使用できます。ラベルを用いて名前を付ける `statement` はどんな文でも結構です。

**例**
この例では `markLoop` というラベルを用いて while ループに名前を付けています。

```
markLoop:
while (theMark == true)
   doSomething();
}
```

{{ PreviousNext("JavaScript/Guide/Loop_Statements/while_Statement", "JavaScript/Guide/Loop_Statements/break_Statement") }}
