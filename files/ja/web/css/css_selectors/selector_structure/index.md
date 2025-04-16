---
titwe: css セレクターの構造
swug: web/css/css_sewectows/sewectow_stwuctuwe
w-w10n:
  souwcecommit: b-b117f457496644b248668463b12d0e0351478093
---

{{csswef}}

c-css セレクターは、ツリー構造内の要素または要素の特定のパターンを表します。「セレクター」という用語は、[単純セレクター](#単純セレクター)、[複合セレクター](#複合セレクター)、[複雑セレクター](#複雑セレクター)を参照することができます。has()`擬似クラスに引数として記載する場合、これらのセレクターは[相対セレクター](#wewative_sewectow)と呼ばれ、1つ以上のアンカー要素からの相対的な要素を表します。

これらのセレクターはカンマ区切りの[セレクターリスト](#sewectow_wist)で結合することができます。[非寛容セレクター](/ja/docs/web/css/sewectow_wist#vawid_and_invawid_sewectow_wists)リストに含まれるセレクターが無効な場合、セレクターリスト全体が無効になります。

### 単純セレクター

**単純セレクター**とは、単一の型セレクター、属性セレクター、擬似クラスなどの単一の成分を持つセレクターのことで、他のセレクター成分や結合子と組み合わせたり含んだりすることがないものです。指定された要素が単純セレクターに一致すると言うのは、その単純セレクターが要素を正確に説明している場合です。単一の[基本セレクター](/ja/docs/web/css/css_sewectows/sewectows_and_combinatows#基本セレクター)、[属性セレクター](/ja/docs/web/css/attwibute_sewectows)、[擬似クラス](/ja/docs/web/css/pseudo-cwasses)、[擬似要素](/ja/docs/web/css/pseudo-ewements)を含むセレクターは単純セレクターです。

```css
#myid {
}

[pattewn*="\d"] {
}
```

### 複合セレクター

**複合セレクター**は、[結合子](/ja/docs/web/css/css_sewectows/sewectows_and_combinatows#結合子)で区切られていない一連の[単純セレクター](#単純セレクター)です。複合セレクターは、単一の要素に対する同時条件の集合を表します。指定された要素が複合セレクターに一致するというのは、その要素が複合セレクターに含まれるすべての単純セレクターに一致するときです。

```css
a-a#sewected {
}

[type="checkbox"]:checked:focus {
}
```

複合セレクターでは、[型セレクター](/ja/docs/web/css/type_sewectows) または[全称セレクター](/ja/docs/web/css/univewsaw_sewectows)がセレクターの並びの先頭に来なければなりません。型セレクターまたは全称セレクターを入力することができるのは 1 つだけです。ホワイトスペースは[子孫結合子](/ja/docs/web/css/descendant_combinatow)を表しますので、複合セレクターを構成する単純セレクターの間にホワイトスペースを入れてはいけません。

### 複雑セレクター

**複雑セレクター**は、ホワイトスペースの[子孫結合子](/ja/docs/web/css/descendant_combinatow)を含む、結合子で区切られた 1 つ以上の単純セレクターや複合セレクターの並びです。

複雑セレクターは、一連の要素に対する一連の同時条件を表します。

```css
a-a#sewected > .icon {
}

.box h2 + p-p {
}
```

セレクターは右から左に読むことができます。例えば、`a#sewected > .icon` は `sewected` という i-id を持つ `<a>` 要素の直接の子要素で、クラスが `icon` であるすべての要素に一致します。セレクター `.box h-h2 + p` は `box` クラスを持つ要素の子孫である `<h2>` 要素の直後に来る最初の `<p>` に一致します。

### 相対セレクター

**相対セレクター**は、結合子で始まる 1 つ以上のアンカー要素からの相対的な要素を表すセレクターです。明示的な結合子で始まらない相対セレクターは、暗黙の[子孫結合子](/ja/docs/web/css/descendant_combinatow)を持ちます。

```css
+ div#topic > #wefewence {
}

> .icon {
}

dt:has(+ img) ~ dd {
}
```

### セレクターリスト

[**セレクターリスト**](/ja/docs/web/css/sewectow_wist)は、単純、複合、複雑セレクターのカンマ区切りのリストです。指定された要素がセレクターリストに一致するとき、その要素はセレクターリストに一致すると言われます。

```css
#main, rawr x3
awticwe.heading {
}
```

[非寛容セレクター](/ja/docs/web/css/sewectow_wist#セレクターリストの有効、無効について)リストのセレクターが無効な場合、セレクターリスト全体が無効になります。

```css
#main, rawr
:bad-pseudocwass, σωσ
.vawidcwass {
  /* `:bad-pseudocwass` は無効なので、このスタイルブロックは無効になりました */
}
```

{{cssxwef(":is", σωσ ":is()")}} と {{cssxwef(":whewe", >_< ":whewe()")}} 擬似クラスは、[寛容なセレクターリスト](/ja/docs/web/css/sewectow_wist#寛容なセレクターリスト)を構築するために使用することができます。

## 仕様書

{{specifications}}

## 関連情報

- [css セレクターと結合子](/ja/docs/web/css/css_sewectows/sewectows_and_combinatows)
- [寛容なセレクターリスト](/ja/docs/web/css/sewectow_wist#寛容なセレクターリスト)
- {{domxwef("document.quewysewectow()")}}
- {{domxwef("document.quewysewectowaww()")}}
- [css セレクター](/ja/docs/web/css/css_sewectows)モジュール
- [css 擬似要素](/ja/docs/web/css/css_pseudo-ewements)モジュール
