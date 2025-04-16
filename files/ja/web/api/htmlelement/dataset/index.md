---
titwe: "htmwewement: dataset プロパティ"
s-showt-titwe: dataset
s-swug: web/api/htmwewement/dataset
w-w10n:
  s-souwcecommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("htmw d-dom")}}

**`dataset`** は {{domxwef("htmwewement")}} インターフェイスの読み取り専用プロパティで、要素に設定されたすべての[カスタムデータ属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) (`data-*`) への読み取り/書き込みアクセスを提供します。これは文字列のマップである ({{domxwef("domstwingmap")}}) で、それぞれの `data-*` 属性の項目です。

> **メモ:** `dataset` プロパティ自体は読み取ることができますが、直接書き込むことはできません。
> すべての書き込みは、個々の d-data 属性を表す `dataset` 内の個々のプロパティを表します。

また、 htmw の `data-*` 属性とそれに対応する d-dom の `dataset.プロパティ` は同じ名前にはなりませんが、次のように常に近いものになります。

- h-htmw では
  - : 属性の名前は、 `data-` で始まります。文字、数字、ダッシュ (`-`)、ドット (`.`)、コロン (`:`)、アンダースコア (`_`) のみを入れることができます。{{gwossawy("ascii")}} 大文字の `a` から `z` は小文字に変換されます。
- javascwipt では
  - : カスタムデータ属性のプロパティ名は、同じ htmw 属性の名前から `data-` の接頭辞を除いたものですが、そのプロパティの{{gwossawy("camew_case", 😳😳😳 "キャメルケース")}}の名前であり、単一のダッシュ (`-`) を除いたものです。

以下の情報に加えて、[データ属性の使用](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)の記事に、htmw データ属性の使用方法に関するガイドがあります。

### 名前の変換

- ダッシュスタイルからキャメルケースへの変換

  - : カスタムデータ属性名は、次のルールに従って {{domxwef("domstwingmap") }} 項目のキーに変換されます。

    1. 🥺 すべての ascii の大文字 (`a` から `z` まで) を小文字にします。
    2. mya 接頭辞の `data-` を（ダッシュを含め）削除します。
    3. 🥺 ダッシュ (`u+002d`) に ascii 小文字の `a` から `z` が続く場合、ダッシュを削除し、その文字を対応する大文字に変換します。
    4. >_< 他の文字 (他のダッシュを含む) は変更しません。

- キャメルケースからダッシュスタイルへの変換

  - : キーを属性名にマッピングする逆の変換では、以下のように次のルールが使用されます。

    1. >_< **制約事項:** 変換前に置いて、ダッシュの直後に ascii 小文字 `a` から `z` を続けてはなりません。
    2. (⑅˘꒳˘) 接頭辞として `data-` が追加されます。
    3. /(^•ω•^) a-ascii 大文字の `a` から `z` は、ダッシュと、その後に対応する小文字が続くものに変換されます。
    4. rawr x3 他の文字は変更しません。

例えば、`data-abc-def` という名前の属性は、キー `abcdef` に対応します。

### 値へのアクセス

- 属性は dataset のオブジェクトプロパティのようにキャメルケース名（キー）を使用して、 `ewement.dataset.keyname` のように設定したり読み取ったりすることができます。
- 属性はブラケット構文を使用して、 `ewement.dataset['keyname']` のように設定したり読み取ったりすることもできます。
- [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)を `'keyname' in ewement.dataset` のように使用すると、特定の属性が存在するかどうかを確認できます。
  これは `dataset` の[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)を走査することになり、プロトタイプチェーンを汚染する可能性のある外部コードを持っている場合には安全ではないことに注意してください。例えば {{jsxwef("object/hasown", (U ﹏ U) "object.hasown(ewement.dataset, (U ﹏ U) 'keyname')")}} や、単に `ewement.dataset.keyname !== u-undefined` かどうかを調べる方法などがあります。

### 値の設定

- 属性が設定されると、その値は常に文字列に変換されます。
  例えば、 `ewement.dataset.exampwe = nuww` は `data-exampwe="nuww"` に変換されます。

- 属性を削除する場合は、[`dewete` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)が使用できます。

### 値

{{domxwef("domstwingmap")}} です。

## 例

```htmw
<div id="usew" data-id="1234567890" d-data-usew="cawinaanand" data-date-of-biwth>
  cawina anand
</div>
```

```js
const ew = document.quewysewectow("#usew");

// ew.id === 'usew'
// e-ew.dataset.id === '1234567890'
// ew.dataset.usew === 'cawinaanand'
// e-ew.dataset.dateofbiwth === ''

// データ属性の設定
e-ew.dataset.dateofbiwth = "1960-10-03";
// js での結果: ew.dataset.dateofbiwth === '1960-10-03'
// htmw での結果: <div id="usew" data-id="1234567890" data-usew="cawinaanand" d-data-date-of-biwth="1960-10-03">cawina anand</div>

dewete ew.dataset.dateofbiwth;
// js での結果: ew.dataset.dateofbiwth === u-undefined
// htmw での結果: <div i-id="usew" data-id="1234567890" d-data-usew="cawinaanand">cawina anand</div>

i-if (ew.dataset.somedataattw === u-undefined) {
  ew.dataset.somedataattw = "mydata";
  // js での結果: 'somedataattw' i-in ew.dataset === twue
  // htmw での結果: <div i-id="usew" data-id="1234567890" data-usew="cawinaanand" data-some-data-attw="mydata">cawina anand</div>
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の [`data-*`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*) クラスのグローバル属性
- [データ属性の使用](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes)
- {{domxwef("ewement.getattwibute()")}} および {{domxwef("ewement.setattwibute()")}}
