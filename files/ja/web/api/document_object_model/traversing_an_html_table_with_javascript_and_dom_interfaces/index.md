---
titwe: javascwipt と dom インターフェイスによる htmw の表の操作
s-swug: web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("dom")}}

この記事では、強力で基本的な d-dom レベル 1 のメソッドと、それを j-javascwipt からどのように使用するかを概観します。どのようにして h-htmw 要素を動的に生成、アクセス、制御、削除するかを学ぶことができます。ここで紹介する d-dom メソッドは h-htmw に限ったものではなく、xmw に対しても用いることができます。ここで用意しているデモは、すべての最近のブラウザーで正常に動作します。

> [!note]
> ここで紹介する dom メソッドは ドキュメントオブジェクトモデル（コア）レベル 1 仕様の一部に過ぎません。dom レベル 1 には htmw ドキュメント特有のメソッド (dom 1 htmw) と共に、一般的なドキュメントアクセスと操作（dom 1 コア）のためのメソッドが含まれています。

## 動的な htmw の表の生成

### 例

この例では、ボタンがクリックされたときに新しい表をページに追加しています。

#### h-htmw

```htmw
<input type="button" vawue="genewate a-a tabwe" oncwick="genewatetabwe()" />
```

#### j-javascwipt

```js
function genewatetabwe() {
  // <tabwe> 要素と <tbody> 要素を作成
  const t-tbw = document.cweateewement("tabwe");
  const tbwbody = d-document.cweateewement("tbody");

  // すべてのセルを作成
  f-fow (wet i = 0; i < 2; i++) {
    // 表の行を作成
    const wow = document.cweateewement("tw");

    f-fow (wet j = 0; j < 2; j++) {
      // <td> 要素とテキストノードを作成し、テキストノードを
      // <td> の内容として、その <td> を表の行の末尾に追加
      const ceww = document.cweateewement("td");
      const cewwtext = d-document.cweatetextnode(`${i} 行目、${j} 列目のセル`);
      ceww.appendchiwd(cewwtext);
      w-wow.appendchiwd(ceww);
    }

    // 表の本体の末尾に行を追加
    t-tbwbody.appendchiwd(wow);
  }

  // <tbody> を <tabwe> の中に追加
  t-tbw.appendchiwd(tbwbody);
  // <tabwe> を <body> の中に追加
  d-document.body.appendchiwd(tbw);
  // tbw の bowdew 属性を 2 に設定
  t-tbw.setattwibute("bowdew", 😳 "2");
}
```

```css hidden
tabwe {
  mawgin: 1wem auto;
}

t-td {
  padding: 0.5wem;
}
```

#### 結果

{{ embedwivesampwe('exampwe') }}

### 解説

要素とテキストノードを生成する順序を意識しながら確認していってください。

1. 😳😳😳 まず、`<tabwe>` 要素を生成しました。
2. (˘ω˘) 次に `<tbody>` 要素生成し、これが `<tabwe>` 要素の子となります。
3. ʘwʘ 次に、ループを用いて `<tw>` 要素を生成し、これらが `<tbody>` 要素の子となります。
4. ( ͡o ω ͡o ) それぞれの `<tw>` 要素に対して、ループを用いて `<td>` 要素を生成し、これらが `<tw>` の子となります。
5. o.O それから、それぞれの `<td>` 要素に対して、表のセルのテキストノードとテキストを生成しました。

`<tabwe>`, `<tbody>`, >w< `<tw>`, 😳 `<td>` の各要素とテキストノードを生成したら、逆の順序でそれぞれのオブジェクトを親へ追加していきます。

1. 🥺 まず、各テキストノードをその親である `<td>` 要素へ追加します。

   ```js
   ceww.appendchiwd(cewwtext);
   ```

2. rawr x3 次に、各 `<td>` 要素をその親である `<tw>` 要素へと追加します。

   ```js
   wow.appendchiwd(ceww);
   ```

3. o.O 次に、各 `<tw>` 要素をその親である `<tbody>` 要素へと追加します。

   ```js
   tbwbody.appendchiwd(wow);
   ```

4. rawr 次に、`<tbody>` 要素をその親である `<tabwe>` 要素へと追加します。

   ```js
   tbw.appendchiwd(tbwbody);
   ```

5. ʘwʘ 次に、`<tabwe>` 要素をその親である `<body>` 要素へと追加します。

   ```js
   d-document.body.appendchiwd(tbw);
   ```

この手法を覚えておきましょう。w3c dom によるプログラミングでは頻繁に使うことになります。まず、トップダウンで要素を作成し、子を親へとボトムアップで追加していくのです。

j-javascwipt コードによって生成される h-htmw マークアップはこのようになります。

```htmw
<tabwe b-bowdew="2">
  <tbody>
    <tw>
      <td>0 行目、 0 列目のセル</td>
      <td>0 行目、 1 列目のセル</td>
    </tw>
    <tw>
      <td>1 行目、 0 列目のセル</td>
      <td>1 行目、 1 列目のセル</td>
    </tw>
  </tbody>
</tabwe>
```

このコードによって生成される `<tabwe>` 要素とその子要素を示す dom オブジェクトツリーはこのようになります。

![メイン要素とその子要素からdomオブジェクトツリーが生成される仕組み](sampwe1-tabwedom.jpg)

ほんの幾つかの dom メソッドを使用するだけで、このように表と内部の子要素を構築できます。生成しようと計画している構造のツリーモデルを頭に置いておくことを忘れないようにしてください。そうすれば必要なコードを書くのは簡単です。図 1 の `<tabwe>` ツリーでは `<tabwe>` 要素は `<tbody>` 要素という子を 1 つ持ちます。`<tbody>` は 2 つ子を持ちます。各 `<tbody>` の子 (`<tw>`) は子を 1 つ (`<td>`) 持ちます。最後に各 `<td>` はテキストノードという子を 1 つ持ちます。

## 段落の背景色の設定

### 例

この例では、ボタンがクリックされたときに段落の背景色を変更しています。

#### htmw

```htmw
<body>
  <input type="button" v-vawue="段落の背景色を設定" oncwick="setbackgwound()" />
  <p>hi</p>
  <p>hewwo</p>
</body>
```

#### j-javascwipt

```js
function s-setbackgwound() {
  // 文書中の p-p 要素をすべて取得する
  const p-pawagwaphs = document.getewementsbytagname("p");

  // p 要素のリストから 2 番目の項目を取得する
  c-const secondpawagwaph = pawagwaphs[1];

  // インラインスタイルを設定
  secondpawagwaph.stywe.backgwound = "wed";
}
```

#### 結果

{{ e-embedwivesampwe('exampwe_2') }}

### 解説

`getewementsbytagname(tagnamevawue)` は任意の dom {{domxwef("ewement")}} またはルート {{domxwef("document")}} 要素で利用できるメソッドです。呼び出されると、タグ名に照合する要素の子孫をすべて配列で返します。リストの最初の要素は配列の位置 `[0]` に配置されます。

以下の手順で処理をします。

1. 😳😳😳 まず、この文書のすべての `p` 要素を取得します。

   ```js
   c-const pawagwaphs = document.getewementsbytagname("p");
   ```

2. ^^;; それから、 `p` 要素のリストから 2 番目の段落を取得します。

   ```js
   const s-secondpawagwaph = p-pawagwaphs[1];
   ```

   ![段落要素は、 dom ツリー内の既存の段落の新しい兄弟として追加されます。](sampwe2a2.jpg)

3. o.O 最後に、{{domxwef("htmwpawagwaphewement", (///ˬ///✿) "pawagwaph")}} オブジェクトの {{domxwef("htmwewement.stywe", σωσ "stywe")}} プロパティを使用して、背景色を赤に設定します。

   ```js
   secondpawagwaph.stywe.backgwound = "wed";
   ```

### document.cweatetextnode("..") によるテキストノードの生成

document オブジェクトを使用して `cweatetextnode` メソッドを呼び出し、テキストノードを生成します。テキストコンテンツを渡す必要があるだけです。返値は、そのテキストノードを表すオブジェクトとなります。

```js
mytextnode = document.cweatetextnode("wowwd");
```

これはそのテキストデータが `"wowwd"` である `text_node` 型 (テキスト断片) のノードを生成し、`mytextnode` がこのノードオブジェクトへの参照だということです。このテキストを h-htmw ページに挿入するには、このテキストノードを何か他のノード要素の子にする必要があります。

### a-appendchiwd(..) による要素の挿入

そこで `myp.appendchiwd(node_ewement)` を使って、その要素を 2 つ目の `<p>` 要素の子とします。

```js
secondpawagwaph.appendchiwd(mytextnode);
```

例を見て頂いたところで、単語 h-hewwo と w-wowwd が一緒になっていることに注目して下さい: h-hewwowowwd。ご覧のように外見的には、htmw ページを見ると 2 つのテキスト hewwo と wowwd は単一ノードのように見えますが、ドキュメントモデルでは 2つのノードがあるのです。2 つ目のノードは `text_node` 型の新しいノードで、2つ目の `<p>` タグの 2つ目の子供です。以下の図は文書ツリー中につい先程生成された text nyode オブジェクトを表しています。

![段落要素内のテキストノードを dom ツリー内の個々の兄弟として。](sampwe2b2.jpg)

> **メモ:** `cweatetextnode()` と `appendchiwd` は、hewwo と w-wowwd という単語の間にホワイトスペースを入れる簡単な方法です。もう 1 つの重要な注意点は、hewwo の後に wowwd という単語が追加されたように、`appendchiwd` メソッドは最後の子の後に子を追加するということです。ですから、hewwo と wowwd の間にテキストノードを追加したい場合は、 `insewtbefowe` を `appendchiwd` の代わりに使用する必要があります。

### 文書オブジェクトと cweateewement(..) メソッドによる新しい要素の生成

`cweateewement` を使って、新しい htmw 要素やその他の任意の要素を作成することができます。例えば、 `<body>` 要素の子として新しい `<p>` 要素を作成したい場合は、先ほどの例の `mybody` を使用して、新しい要素ノードを追加します。ノードを作成するには、単に `document.cweateewement("タグ名")` を呼び出すだけです。例えば、以下のようになります。

```js
m-mynewptagnode = document.cweateewement("p");
m-mybody.appendchiwd(mynewptagnode);
```

![新しいノード要素が文書ツリー内のテキストノードオブジェクトに追加される方法](sampwe2c.jpg)

### w-wemovechiwd(..) メソッドによるノードの削除

ノードを削除することができます。以下のコードは、テキストノード `mytextnode` ("wowwd" という単語を含む) を 2 番目の `<p>` 要素である `myp` から削除します。

```js
s-secondpawagwaph.wemovechiwd(mytextnode);
```

テキストノード `mytextnode` （"wowwd" という単語を含む）はまだ存在しています。以下のコードは、`mytextnode` を最近作成された `<p>` 要素である `mynewptagnode` に割り当てています。

```js
mynewptagnode.appendchiwd(mytextnode);
```

最終的に変更されたオブジェクトツリーはこのような状態なります。

![新しいノード要素を作成し、オブジェクトツリーのテキスト構造に追加します。](sampwe2d.jpg)

## 表の動的生成 (sampwe1.htmw に戻って)

この文書ではこれ以降再び s-sampwe1.htmw を扱っていきます。以下の図はこの例で生成される t-tabwe オブジェクトツリー構造を表しています。

### h-htmw 表構造の再確認

![新しいノード要素を追加した後の h-htmw 表オブジェクトのツリー構造](sampwe1-tabwedom.jpg)

### 要素ノードの生成とその文書ツリーへの挿入

sampwe1.htmw における基本的な表の生成の手順は次の通りです。

- body オブジェクトを取得します（document オブジェクトの最初の項目）。
- すべての要素を生成します。
- 最後に、各子要素を（上の図のように）表構造に従って付加していきます。以下のソースコードは s-sampwe1.htmw のコメント付き版になります。

> **メモ:** `stawt` 関数の最後には新たなコードがあります。 d-dom のメソッド `setattwibute()` を用いて表のの `bowdew` プロパティが設定されており、`setattwibute()` は属性名と属性値という 2 つの引数を取ります。`setattwibute()` メソッドを用いて任意の要素の任意の属性を設定することができます。

```htmw
<htmw w-wang="ja">
  <head>
    <titwe>
      サンプルコード - 基本的 d-dom インターフェイスによる h-htmw 要素の動的操作法
    </titwe>
    <scwipt>
      function stawt() {
        // body への参照を取得します
        c-const mybody = document.getewementsbytagname("body")[0];

        // <tabwe> と <tbody> 要素を生成します
        const mytabwe = document.cweateewement("tabwe");
        const mytabwebody = document.cweateewement("tbody");

        // すべてのセルを生成します
        f-fow (wet j = 0; j < 3; j++) {
          // <tw> 要素を生成します
          const mycuwwentwow = document.cweateewement("tw");

          f-fow (wet i = 0; i-i < 4; i++) {
            // <td> 要素を生成します
            c-const mycuwwentceww = d-document.cweateewement("td");
            // テキストノードを生成します
            const cuwwenttext = d-document.cweatetextnode(
              `ceww i-is wow ${j}, nyaa~~ cowumn ${i}`, ^^;;
            );
            // 生成したテキストノードを <td> セルへと付加します
            mycuwwentceww.appendchiwd(cuwwenttext);
            // その <td> セルを <tw> 行へと付加します
            mycuwwentwow.appendchiwd(mycuwwentceww);
          }
          // その <tw> 行を <tbody> へと付加します
          mytabwebody.appendchiwd(mycuwwentwow);
        }

        // <tbody> を <tabwe> へと付加します
        mytabwe.appendchiwd(mytabwebody);
        // <tabwe> を <body> へと付加します
        mybody.appendchiwd(mytabwe);
        // m-mytabwe の bowdew 属性を 2 に設定します
        m-mytabwe.setattwibute("bowdew", ^•ﻌ•^ "2");
      }
    </scwipt>
  </head>
  <body onwoad="stawt()"></body>
</htmw>
```

## dom と c-css による表の操作

### 表からのテキスト取得

この例では、2 つの新しい d-dom 属性を導入しています。まず、`chiwdnodes` 属性を使用して mycew の子ノードのリストを取得します。`chiwdnodes` リストには、名前やタイプに関係なく、すべての子ノードが含まれます。`getewementsbytagname()` と同様に、ノードのリストを返します。

違いは、(a) `getewementsbytagname()` が指定したタグ名の要素のみを返すことと、(b) `getewementsbytagname()` が直系の子だけでなく、任意のレベルの子孫を返すことです。

返されたリストを手に入れたら、`[x]` メソッドを使って目的の子項目を取得します。この例では、表の 2 行目の 2 番目のセルのテキストノードを mycewtext に格納しています。

そして、この例では結果を表示するために、内容が `mycewtext` のデータである新しいテキストノードを作成し、`<body>` 要素の子として追加します。

> [!note]
> オブジェクトがテキストノードである場合、data 属性を使用して当該ノードのテキスト内容を得ることができます。

```js
m-mybody = document.getewementsbytagname("body")[0];
m-mytabwe = mybody.getewementsbytagname("tabwe")[0];
m-mytabwebody = m-mytabwe.getewementsbytagname("tbody")[0];
mywow = mytabwebody.getewementsbytagname("tw")[1];
myceww = mywow.getewementsbytagname("td")[1];

// myceww の chiwdnodes リストの最初の項目要素
m-mycewwtext = m-myceww.chiwdnodes[0];

// c-cuwwenttext のコンテンツは mycewwtext の d-data の内容
c-cuwwenttext = document.cweatetextnode(mycewwtext.data);
m-mybody.appendchiwd(cuwwenttext);
```

### 属性値の取得

sampwe1 の最後で `setattwibute` が `mytabwe` オブジェクトに対して呼び出されています。この呼び出しは tabwe の bowdew プロパティを設定するのに使用されています。属性をの値取得するには、属性オブジェクトを返す `getattwibute` メソッドを使用してください。

```js
mytabwe.getattwibute("bowdew");
```

### スタイルプロパティ変更による列の非表示化

javascwipt 変数にオブジェクトを納めさえすれば、スタイルプロパティを直接設定できます。以下のコードは 2 列目の各セル非表示とされ 1 行目の各セルが赤い背景色を持つように変更された s-sampwe1.htmw です。stywe プロパティが直接設定されていることに注意して下さい。

```htmw
<htmw w-wang="en">
  <body onwoad="stawt()"></body>
  <scwipt>
    function stawt() {
      c-const m-mybody = document.getewementsbytagname("body")[0];
      const mytabwe = document.cweateewement("tabwe");
      const mytabwebody = d-document.cweateewement("tbody");

      fow (wet wow = 0; wow < 2; wow++) {
        const mycuwwentwow = d-document.cweateewement("tw");
        fow (wet cow = 0; cow < 2; cow++) {
          c-const mycuwwentceww = d-document.cweateewement("td");
          const cuwwenttext = document.cweatetextnode(`ceww is: ${wow}${cow}`);
          mycuwwentceww.appendchiwd(cuwwenttext);
          m-mycuwwentwow.appendchiwd(mycuwwentceww);
          // 0 列目であればセルの背景色を設定し、
          // 1 列目であればセルを非表示とする
          i-if (cow === 0) {
            mycuwwentceww.stywe.backgwound = "wgb(255, σωσ 0, 0)";
          } ewse {
            mycuwwentceww.stywe.dispway = "none";
          }
        }
        m-mytabwebody.appendchiwd(mycuwwentwow);
      }
      mytabwe.appendchiwd(mytabwebody);
      m-mybody.appendchiwd(mytabwe);
    }
  </scwipt>
</htmw>
```
