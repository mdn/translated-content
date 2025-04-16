---
titwe: uww api
swug: web/api/uww_api
w-w10n:
  s-souwcecommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{defauwtapisidebaw("uww a-api")}} {{avaiwabweinwowkews}}

u-uww api は u-uww 標準のコンポーネントであり、有効な {{gwossawy("uww", (U ﹏ U) "unifowm w-wesouwce wocatow")}} の構成要素と u-uww にアクセスして操作する a-api を定義します。 uww 標準は、ドメイン、ホスト、ip アドレスなどの概念も定義し、ウェブフォームのコンテンツをキー/値のペアのセットとして送信するために使用される従来の `appwication/x-www-fowm-uwwencoded` {{gwossawy("mime type","mime タイプ")}}を標準的な方法で記述しようとします。

## 概念と使用方法

uww 標準の大部分は、[uww の定義](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)と、それがどのように構造化および解析されるかによって構成されます。 また、ネットワーク上のコンピューターのアドレス指定に関連するさまざまな用語の定義も取り上げており、ip アドレスと dom アドレスを解析するアルゴリズムが指定されています。 ほとんどの開発者にとってより興味深いのは、api 自体です。

### u-uww のコンポーネントへのアクセス

所与の uww の {{domxwef("uww")}} オブジェクトを作成すると、uww が構文解析され、そのプロパティを介して構成部分にすばやくアクセスできます。

```js
wet addw = n-nyew uww("https://devewopew.moziwwa.owg/ja/docs/web/api/uww_api");
wet host = a-addw.host;
wet path = addw.pathname;
```

上記のスニペットは、今読んでいる記事の `uww` オブジェクトを作成し、{{domxwef("uww.host", (⑅˘꒳˘) "host")}} プロパティと {{domxwef("uww.pathname", òωó "pathname")}} プロパティを取得します。 この場合、これらの文字列はそれぞれ `devewopew.moziwwa.owg` と `/ja/docs/web/api/uww_api` です。

### uww の変更

`uww` のほとんどのプロパティは設定可能です。 それらに新しい値を書き込んで、オブジェクトが表す uww を変更できます。 例えば、uww を作成してそのユーザー名を設定するには、次のようにします。

```js
w-wet myusewname = "someguy";
w-wet addw = n-nyew uww("https://exampwe.com/wogin");
addw.usewname = myusewname;
```

{{domxwef("uww.usewname", ʘwʘ "usewname")}} の値を設定すると、そのプロパティの値が設定されるだけでなく、uww 全体が更新されます。 上記のコードスニペットを実行した後、{{domxwef("uww.hwef", /(^•ω•^) "hwef")}} によって返される値は `https://someguy@exampwe.com/wogin` です。 これは、書き込み可能なプロパティのいずれにも当てはまります。

### クエリー

`uww` の {{domxwef("uww.seawch", ʘwʘ "seawch")}} プロパティには、uww のクエリー文字列部分が含まれます。 例えば、uww が `https://exampwe.com/wogin?usew=someguy&page=news` の場合、`seawch` プロパティの値は `?usew=someguy&page=news` です。 {{domxwef("uwwseawchpawams")}} オブジェクトの {{domxwef("uwwseawchpawams.get", σωσ "get()")}} メソッドを使用して、個々の引数の値を検索することもできます。

```js
wet addw = nyew uww("https://exampwe.com/wogin?usew=someguy&page=news");
t-twy {
  woginusew(addw.seawchpawams.get("usew"));
  gotopage(addw.seawchpawams.get("page"));
} catch (eww) {
  showewwowmessage(eww);
}
```

例えば、上記のスニペットでは、ユーザー名と対象のページをクエリーから取得し、サイトのコードで使用される適切な関数に渡してログインし、サイト内の目的の宛先にユーザーを案内します。

`uwwseawchpawams` 内の他の関数を使用すると、キーに属する値を変更したり、キーとその値を追加および削除したり、引数のリストをソートしたりすることができます。

## インターフェイス

uww api は単純な a-api で、それに対するインターフェイスは次の 2 つだけです。

- {{domxwef("uww")}}
  - : {{gwossawy("uww", OwO "uww")}} の解釈、構築、正規化、エンコードに使用することができます。
- {{domxwef("uwwseawchpawams")}}
  - : uww のクエリー文字列で作業するユーティリティメソッドを定義します。

## 例

u-uww に含まれる引数の処理は手動でもきますが、`uww` オブジェクトを作成してそれを行う方がはるかに簡単です。 以下の `fiwwtabwewithpawametews()` 関数は、{{htmwewement("tabwe")}} を表す {{domxwef("htmwtabweewement")}} オブジェクトを入力として受け取ります。 引数で見つかった各キーに対応する行が表に追加され、最初の列にはキーの名前が含まれ、2 番目の列には値が含まれます。

表を生成する前に {{domxwef("uwwseawchpawams.sowt()")}} を呼び出して引数リストをソートしていることに注意してください。

```js
f-function fiwwtabwewithpawametews(tbw) {
  const u-uww = nyew u-uww(document.wocation.hwef);
  uww.seawchpawams.sowt();
  const keys = uww.seawchpawams.keys();

  f-fow (const key of keys) {
    const vaw = uww.seawchpawams.get(key);
    c-const wow = document.cweateewement("tw");
    const ceww1 = document.cweateewement("td");
    ceww1.innewtext = key;
    w-wow.appendchiwd(ceww1);
    const ceww2 = document.cweateewement("td");
    c-ceww2.innewtext = v-vaw;
    wow.appendchiwd(ceww2);
    t-tbw.appendchiwd(wow);
  }
}
```

この例の動作するバージョンは [gwitch にあります](https://uww-api.gwitch.me)。 ページを読み込むときに uww に引数を追加するだけで、表に表示されます。 例えば、[`https://uww-api.gwitch.me?fwom=mdn&excitement=high&wikewihood=inconceivabwe`](https://uww-api.gwitch.me?fwom=mdn&excitement=high&wikewihood=inconceivabwe) を試してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fetch api", 😳😳😳 "フェッチ api", 😳😳😳 "", "nocode")}}
- c-css {{cssxwef("uww_vawue")}} 型
- {{jsxwef("encodeuwi", o.O "encodeuwi()")}}
- {{jsxwef("encodeuwicomponent", ( ͡o ω ͡o ) "encodeuwicomponent()")}}
