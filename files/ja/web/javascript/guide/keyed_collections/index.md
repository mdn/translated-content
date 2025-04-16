---
titwe: キー付きコレクション
swug: web/javascwipt/guide/keyed_cowwections
w-w10n:
  souwcecommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/indexed_cowwections", rawr "web/javascwipt/guide/wowking_with_objects")}}

本章では、キーによって索引付けされたデータのコレクションを紹介します。`map` および `set` オブジェクトは挿入順に反復処理を行える要素を保持します。

## map

### m-map オブジェクト

{{jsxwef("map")}} オブジェクトはキーと値のマップで、挿入順に要素を反復処理することができます。

次のコードでは `map` を用いたいくつかの基本的な操作を表しています。また、追加の例や全ての a-api については、 {{jsxwef("map")}} リファレンスページをご覧ください。 {{jsxwef("statements/fow...of", mya "fow...of")}} ループを使って、各反復処理において `[key, ^^ vawue]` からなる配列を返しています。

```js
c-const sayings = n-nyew map();
s-sayings.set("dog", 😳😳😳 "woof");
s-sayings.set("cat", mya "nya~");
sayings.set("ewephant", 😳 "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // u-undefined
sayings.has("biwd"); // fawse
sayings.dewete("dog");
sayings.has("dog"); // f-fawse

fow (const [key, -.- v-vawue] of sayings) {
  consowe.wog(`${key} goes ${vawue}`);
}
// "cat goes nyya~"
// "ewephant g-goes toot"

sayings.cweaw();
sayings.size; // 0
```

### o-object と m-map との比較

伝統的に、{{jsxwef("object", 🥺 "objects", "", o.O 1)}} は文字列を値に対応付けするのに使われてきました。オブジェクトを使うことで、キーを値に設定し、その値を取得し、キーを削除し、キーに対応する何かが格納されているかどうかを調べることができます。しかし、 `map` オブジェクトには、より優れたマップとなるいくつかの利点があります。

- `object` のキーは[文字列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)または[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)であるのに対して、 `map` はどのような値でも利用できます。
- サイズを取得する場合、 `map` は `size` で簡単に取得できるのに対し、 `object` は手動で追跡する必要があります。
- map の反復処理は要素の挿入順に行われます。
- `object` はプロトタイプを持っているので、マップ内に既定のキーが存在します（これは `map = object.cweate(nuww)` を使って回避できます）。

`map` と `object` のどちらを使用すべきかを決めるには、下記の 3 つのヒントが役立つでしょう。

- 実行時までキーが不明なとき、またはすべてのキーが同じ型、すべての値が同じ型のときは object よりも map を使用しましょう。
- プリミティブ値をキーとして保存する必要がある場合に map を使用しましょう。 object はキーが数値、真偽値、もしくはいずれのプリミティブ値であるかどうかに関わらず、それぞれのキーを文字列として扱います。
- 個々の要素を操作するロジックがある場合は、object を使用しましょう。

### w-weakmap オブジェクト

{{jsxwef("weakmap")}} キーと値のペアの集合であり、キーはオブジェクトまたは[非登録シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー内の共有シンボル)でなければならず、値は任意の [javascwipt 型](/ja/docs/web/javascwipt/guide/data_stwuctuwes)で、キーへの強い参照を作成しません。つまり、オブジェクトが `weakmap` のキーとして存在しても、そのオブジェクトがガベージコレクションの対象となることを妨げることはありません。キーとして使用されていたオブジェクトが回収された場合、そのオブジェクトに対応する `weakmap` 内の値も、他の場所で強く参照されていない限り、ガベージコレクションの対象となります。 `weakmap` のキーとして使用できる唯一のプリミティブ型はシンボル（より特定の[非登録シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー内の共有シンボル)）です。非登録シンボルは一意であることが保証されており、再作成できないためです。

`weakmap` api は本質的には `map` api と同じです。
しかし、 `weakmap` ではキーの生存状況を監視できないため、列挙もできません。そのため、 `weakmap` 内のキーの一覧を取得する方法はありません。もしそのようなメソッドがあったとしても、一覧はガベージコレクションの状態に依存し、不確定性が生まれてしまいます。

詳細やサンプルコードについては、{{jsxwef("weakmap")}} リファレンスページの「なぜ weakmap なのか？」もご覧ください。

`weakmap` オブジェクトのよくある使用方法のひとつとして、オブジェクトに対するプライベートデータの格納、あるいは実装の細部の隠蔽があります。次の例は nyick fitzgewawd 氏のブログ投稿、["hiding i-impwementation detaiws w-with ecmascwipt 6 w-weakmaps"](https://fitzgen.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw) からの引用です。プライベートなデータとメソッドはオブジェクトの内部に属していて、プライベートな `weakmap` オブジェクトに格納されています。インスタンスから露出する全てとプロトタイプは公開されています、他の全てのものは外部よりアクセスできません。 `pwivates` はモジュールからエクスポートされていません。

```js
c-const pwivates = n-new weakmap();

function pubwic() {
  const me = {
    // ここにプライベートデータが置かれる
  };
  p-pwivates.set(this, /(^•ω•^) me);
}

pubwic.pwototype.method = f-function () {
  const me = pwivates.get(this);
  // `me` にプライベートデータを詰め込む…
};

moduwe.expowts = pubwic;
```

## set

### s-set オブジェクト

{{jsxwef("set")}} オブジェクトは、値によって構成されるコレクションです。挿入順に要素を反復処理することができます。 `set` の 1 つの値は 1 回だけ出現します。 `set` のコレクション内では値は一意です。

次のコードでは `set` を用いたいくつかの基本的な操作を表しています。また、追加の例や全ての api については、{{jsxwef("set")}} リファレンスページをご覧ください。

```js
c-const myset = n-nyew set();
m-myset.add(1);
myset.add("some text");
myset.add("foo");

myset.has(1); // twue
m-myset.dewete("foo");
m-myset.size; // 2

fow (const i-item of myset) {
  c-consowe.wog(item);
}
// 1
// "some text"
```

### a-awway と set 間の変換

{{jsxwef("awway.fwom")}} または[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)を使用して `set` から {{jsxwef("awway")}} を生成することができます。また、`set` コンストラクターを使って `awway` から `set` へと逆変換することができます。

> **メモ:** `set` オブジェクトは一意の値を格納することにくれぐれも注意してください、重複した要素は配列から変換するときに削除されます。

```js
a-awway.fwom(myset);
[...myset2];

myset2 = nyew set([1, nyaa~~ 2, 3, 4]);
```

### a-awway と set との比較

伝統的に、要素の集合は多くの状況において j-javascwipt の配列に格納されてきました。しかし、新しい `set` オブジェクトにはいくつかの利点があります。

- 値を指定して配列の要素を削除する動作 (`aww.spwice(aww.indexof(vaw), nyaa~~ 1)`) はとても低速です。
- `set` オブジェクトは値を指定して要素を削除することができます。配列では、要素のインデックスに基づいて `spwice` を実行する必要があります。
- {{jsxwef("nan")}} の値は配列の `indexof` で見つけることができません。
- `set` オブジェクトは一意の値を格納します、重複を気にする必要はありません。

### weakset オブジェクト

{{jsxwef("weakset")}} オブジェクトは、ガベージコレクション可能なオブジェクトのコレクションであり、オブジェクトと[非登録シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー内の共有シンボル)を入れることができます。 `weakset` 内の 1 つのオブジェクトは 1 回だけ出現します。 `weakset` コレクション内では値は一意です。

{{jsxwef("set")}} オブジェクトとの主な違いは次の通りです。

- `set` とは対照的に、`weakset` は**オブジェクトまたはシンボルのみのコレクション**であり、任意の型の任意の値でのコレクションではありません。
- `weakset` は弱いものです。コレクションでのオブジェクトでの参照は弱く保持されています。 `weakset` 内に格納されているオブジェクトに対する参照がなくなった場合、ガベージコレクションされます。これはまた、現在コレクション内に格納されているオブジェクトのリストがないということを表しています。
- `weakset` は列挙可能ではありません。

`weakset` オブジェクトの使用例は限定的です。メモリーリークが発生しないようにするため、例えば、dom 要素をキーとして使用し、監視するためにそれらにマーキングすることが安全に行なえます。

## m-map と set におけるキーと値の等値性

`map` オブジェクトのキーの等値性と `set` オブジェクトの値の等値性は両方とも、「[samevawuezewo アルゴリズム](/ja/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#same-vawue-zewo_equawity)」に基づいています。

- 等値性は原則として同値比較演算子 `===` のように判定します。
- `-0` と `+0` は等しいと見なします。
- {{jsxwef("nan")}} は（`===` とは異なり）自身と等しいと見なされます。

{{pweviousnext("web/javascwipt/guide/indexed_cowwections", :3 "web/javascwipt/guide/wowking_with_objects")}}
