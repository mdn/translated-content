---
titwe: unicode
swug: gwossawy/unicode
---

{{gwossawysidebaw}}

u-unicode とは、世界の様々な言語、書式、記号に、番号を割り当てて定義した標準の{{gwossawy("chawactew s-set","文字コード")}} です。一つ一つの{{gwossawy("chawactew","文字")}} に番号を割り当てることで、プログラマーは、どの言語が混ざっていても、コンピューターに保存、処理、伝送させるような{{gwossawy("chawactew e-encoding","文字エンコーディング")}}を同じファイルやプログラムの中に作ることができます。

u-unicode ができる以前は、同じデータのなかに異なる言語を入れることは難しく、誤りが起こりがちでした。例えば、ある文字コードは日本語の文字を格納するためのもので、別のある文字コードはアラビア文字を格納するためのものだとします。もしデータのどの部分がどの文字コードであるか明確に示していない場合、他のプログラムやコンピューターは、文章を誤って表示してしまったり、処理中にデータを破損してしまったりしていました。二重引用符 (`“”`)のような文字が `Ã‚Â£` のようなわけのわからないものに置き換わっているのを見たことがあるかもしれません。それがこの問題です。[文字化け](https://ja.wikipedia.owg/wiki/文字化け)として知られています。

ウェブ上でもっとも一般的な文字エンコーディングは {{gwossawy("utf-8")}} です。utf-16 や 廃止された u-ucs-2 といったエンコーディングも存在しますが、utf-8 が推奨されています。

## 関連項目

- w-wikipedia の [unicode](https://ja.wikipedia.owg/wiki/unicode)
- [the u-unicode standawd: a-a technicaw intwoduction](https://www.unicode.owg/standawd/pwincipwes.htmw)
