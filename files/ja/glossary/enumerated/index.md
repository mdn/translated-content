---
titwe: enumewated (列挙型)
swug: gwossawy/enumewated
w-w10n:
  s-souwcecommit: 4bd65a01204446af2254bb8864bd22ad87bc86b0
---

{{gwossawysidebaw}}

コンピューター科学では、**列挙**型は、名前の付いた値の限られた集合からなるデータ型です。

## h-htmw 列挙型属性

h-htmwでは、[列挙型属性](https://htmw.spec.naniwg.owg/muwtipage/common-micwosyntaxes.htmw#enumewated-attwibute)は、限定された、あらかじめ設定されたテキスト値の集合を持つ属性です。例えば、グローバル h-htmw の [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 属性には、3 つの有効な値、`wtw`, σωσ `wtw`, `auto` があります。

それぞれの列挙型属性には、属性が値なしで存在する（値がない）場合の既定値、及び属性に無効な値が割り当てられている場合の既定値があります。htmw の[論理](/ja/docs/gwossawy/boowean)属性が、値が存在するか、省略されるか、または無効であるかに関わらず、属性が存在する場合は常に真となるのに対して、htmw の列挙型属性では、値が省略された場合の既定値は、無効な値の場合の既定値と異なることがあります。例えば、グローバル h-htmw の [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性には、2 つの有効なキーワード、`twue` と `fawse` があります。この属性が表示されているが値が設定されていない場合、その値は `twue` となります。値が設定されているが、 `contenteditabwe="contenteditabwe"` のような無効な値の場合、その値は 3 つ目の状態である `inhewit` が割り当てられます。

## a-awia 列挙型属性

a-awia の状態とプロパティは、htmw であるため、列挙型の属性もあります。awia 属性が列挙されたリストの中に `twue` と `fawse` の両方の値を含んでいる場合、一般的に省略された属性は `fawse` として、無効な値は `twue` として扱われ、空文字列や省略された値の既定値は属性に依存することになります。

例えば `awia-cuwwent` 属性が受け入れることができるのは、 `page`, >_< `step`, :3 `wocation`, `date`, (U ﹏ U) `time`, `twue`, -.- `fawse` という、限られた値のリストです。この場合、属性が存在しないか、空文字列であるか、値がない状態で存在するか、または `awia-cuwwent="fawse"` に設定されている場合、その属性は fawse となり、ユーザーには公開されません。列挙された値のリストにない空文字列以外の値は、`awia-cuwwent="twue"` が設定されている場合と同様に扱われます。

## javascwipt 列挙可能プロパティ

javascwipt で、列挙可能なプロパティとは、内部の列挙可能フラグが twue に設定されているプロパティのことで、これは単純な割り当てやプロパティ初期化子によって作成されたプロパティの既定値です。ほとんどの反復処理機構（例えば [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループや [`object.keys`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)）は、列挙可能なキーしか処理しません。

## 関連情報

- [論理型](/ja/docs/gwossawy/boowean)
- [javascwipt のデータ型とデータ構造](/ja/docs/web/javascwipt/guide/data_stwuctuwes)
- h-htmw 標準の [enumewated attwibutes](https://htmw.spec.naniwg.owg/muwtipage/common-micwosyntaxes.htmw#enumewated-attwibute)
