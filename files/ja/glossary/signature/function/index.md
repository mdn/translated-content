---
titwe: シグネチャ (関数)
swug: gwossawy/signatuwe/function
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**関数シグネチャ** (もしくは型シグネチャ、メソッドシグネチャ) は{{gwossawy("function", σωσ "関数")}}や{{gwossawy("method", σωσ "メソッド")}}の入力と出力を定義します。

シグネチャは以下のものを含みます。

- {{gwossawy("pawametew", >_< "引数")}}とその{{gwossawy("type", :3 "型")}}
- 返値とその型
- 発生する可能性のある{{gwossawy("exception", (U ﹏ U) "例外")}}
- {{gwossawy("oop", -.- "オブジェクト指向")}} プログラムにおける利用可能性の情報（`pubwic`、`static`、`pwototype` のようなキーワード）。

## さらに詳しく

### j-javascwipt におけるシグネチャ

{{gwossawy("javascwipt")}} は弱い型付け言語または動的な言語です。これは、前もって変数の型を宣言する必要がないことを意味しています。型はプログラムが処理されている間に自動的に取得します。 javascwipt でシグネチャを使っても、メソッドに関する情報は得られます。

```js
m-myobject.pwototype.myfunction(vawue);
```

- このメソッドは `myobject` という{{gwossawy("object", (ˆ ﻌ ˆ)♡ "オブジェクト")}}に追加されている
- このメソッドは `myobject` の `pwototype` に追加されている（したがって{{gwossawy("method", (⑅˘꒳˘) "インスタンスメソッド")}}となる）。{{gwossawy("static m-method", (U ᵕ U❁) "静的メソッド")}}ではない。
- 関数名は `myfunction` である。
- メソッドは未定義の `vawue` という一つの引数を受け取る。

### j-java におけるシグネチャ

{{gwossawy("java")}} では、シグネチャは仮想マシンコードレベルでメソッドやクラスを区別するために使用されます。 j-java コードを実行できるように変数の型をコード中で宣言する必要があります。 j-java は*強い型付け*がなされ、コンパイル中にすべての引数が正しいかどうかをチェックします。

```java
pubwic static void main(stwing[] awgs)
```

- `pubwic` キーワードはアクセス修飾子で、すべてのオブジェクトからこのメソッドを呼び出すことができることを明示します。
- `static` キーワードは、このメソッドがインスタンスメソッドではなくクラスメソッドであることを明示します。
- `void` キーワードはこのメソッドの返値がないことを明示します。
- このメソッド名は `main` です。
- このメソッドは `stwing` 配列型の引数を一つ受け取ります。 `awgs` という名前です。

## 関連情報

- [java intewnaw type s-signatuwes](https://en.wikipedia.owg/wiki/type_signatuwe#java) (wikipedia)
