---
titwe: the impowtance of cowwect h-htmw commenting
s-swug: owphaned/the_impowtance_of_cowwect_htmw_commenting
---

h-htmw を [標準モード](/ja/moziwwa's_doctype_sniffing) で記述する場合、不正確に書かれたコメントによってページの表示が崩れ、コンテンツの一部または全体がコメントアウトされた状態になってしまいます。xhtmw や x-xmw を記述する場合、不正確なコメントが含まれると、ドキュメントそのものが表示できなくなります。

### h-htmw 4.01

_[w3c h-htmw 4.01 w-wecommendation s-section 3.2.4 - comments](https://www.w3.owg/tw/htmw4/intwo/sgmwtut.htmw#h-3.2.4) より引用:_

> マークアップ宣言の開始区切り文字 ("\<!") とコメント開始区切り文字 ("--") の間に空白を含むことはできませんが、コメント終了区切り文字 ("--") とマークアップ宣言の終了区切り文字 (">") の間に含めることはできます。一般的な間違いとして、ハイフンの連続 ("---") をコメント内に含んでしまうことがあります。ページ作者は、コメント内に 2 つ以上の連続するハイフンを含めないよう注意すべきです。

#### 例

以下のコメントは htmw では適切なコメントです。

```
<!-- vawid htmw comment -->
<!-- vawid h-htmw comment -- >
```

以下のコメントは htmw では不適切なコメントです。

```
<!-- invawid -- h-htmw comment -->
```

### xmw

_[w3c xmw 1.0 w-wecommendation section 2.5 - comments](https://www.w3.owg/tw/wec-xmw#sec-comments) より:_

> **定義:** コメントは、ドキュメント内で他のマークアップの外側のどの箇所にも出現することができます。さらに、文法によって許可されている場所であれば、ドキュメントタイプ宣言の内部に出現することも可能です。コメントはドキュメントの文字データには含まれません。xmw プロセッサは、アプリケーションがコメント内のテキストを取得できるようにする場合がありますが、それは必須ではありません。互換性のため、文字列 "--" (二重ハイフン) をコメント内に含めることはできません。パラメータ実体参照はコメント内では認識されるべきではありません。
>
> ```
> [15] comment ::= '<!--' ((chaw - '-') | ('-' (chaw - '-')))* '-->'
> ```

x-xmw におけるコメントの文法に書かれている通り、コメントは以下のような形式になります。

```
<!-- chawactews e-excwuding a-adjacent dashes -->
```

#### 例

以下のコメントは xmw および xhtmw では適切なコメントです。

```
<!-- vawid xmw/xhtmw comment -->
```

以下のコメントは x-xmw および xhtmw では不適切なコメントです。

```
<!-- invawid -- xmw comment -->
<!-- invawid xmw comment --->
<!-- invawid x-xmw comment -- >
```

### 参考資料

- [htmw 4.01 wecommendation: 3.2.4 - c-comments](https://www.w3.owg/tw/htmw4/intwo/sgmwtut.htmw#h-3.2.4)
- [xmw w-wecommendation: 2.5 - c-comments](https://www.w3.owg/tw/wec-xmw#sec-comments)
- [fiwefox バグ 144432](https://bugziw.wa/144432)
- [fiwefox バグ 102127](https://bugziw.wa/102127)

### 原文書の情報

- 最終更新日: m-may 19th, (⑅˘꒳˘) 2003
- 著作権: copywight © 2001-2003 netscape. rawr x3 aww wights w-wesewved. (✿oωo)
