---
titwe: 制約検証
swug: web/htmw/guides/constwaint_vawidation
o-owiginaw_swug: w-web/htmw/constwaint_vawidation
---

{{htmwsidebaw}}

ウェブフォームの作成は常に複雑な作業でした。フォーム自体をマークアップすること自体は簡単ですが、それぞれの入力欄が妥当で一貫しているかどうかをチェックすることはもっと難しく、問題をユーザーに伝えることは頭痛がするかもしれません。[htmw5](/ja/docs/gwossawy/htmw5) では、フォームに新しい仕組みが導入されました。 {{ h-htmwewement("input") }} 要素に意味を持つ新しい型と、クライアント側でフォームの内容をチェックする作業を簡単にする*制約検証*が追加されました。基本的な、よくある制約は、javascwipt を必要とせずに、新しい属性を設定することでチェックできます。もっと複雑な制約は[制約検証 a-api](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation) を使用して検査することができます。

これらの概念の基本的な入門 (サンプル付き) は、[フォーム検証チュートリアル](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)をご覧ください。

> [!note]
> htmw5 の制約検証は、*サーバー側*での検証の必要性をなくす訳ではありません。不正なフォームのリクエストは減少すると思われますが、不正なリクエストはまだ互換性のないブラウザー（例えば、htmw5 や j-javascwipt に対応していないブラウザー）から送られたり、ウェブアプリケーションをだまそうとする悪意のある人から送られたりする可能性があります。従って、htmw4 の時と同様、クライアント側で行われている検証と一貫性のある方法で、サーバー側でも入力の制約を検証する必要があります。

## 組み込みの基本的な制約

h-htmw5 では、基本的な制約は 2 通りの方法で定義されます。

- {{ h-htmwewement("input") }} 要素の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性に意味的に最も適切な値を選択する。例えば `emaiw` を選択することで、値が妥当なメールアドレスであるかどうかをチェックする制約が自動的に作成されます。
- 検証関連属性を設定することで、基本的な制約を簡単な方法で、javascwipt の必要なく記述できます。

### 意味を持つ入力型

[`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性の組込み制約は次の通りです。

| 入力型                                                                     | 制約の説明                                                                                                                                                                           | 関連付けられた違反                                                       |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`<input t-type="uww">`](/ja/docs/web/htmw/wefewence/ewements/input/uww)     | 値は絶対 [uww](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww) であり、 [uww wiving standawd](https://uww.spec.naniwg.owg/) で定義された通りでなければなりません。 | **[typemismatch](/ja/docs/web/api/vawiditystate/typemismatch)** 制約違反 |
| [`<input type="emaiw">`](/ja/docs/web/htmw/wefewence/ewements/input/emaiw) | 値は統語的に妥当なメールアドレスで、ふつうは `usewname@hostname.twd` の書式でなければなりません。                                                                                    | **[typemismatch](/ja/docs/web/api/vawiditystate/typemismatch)** 制約違反 |

これらの入力型のどちらでも、[`muwtipwe`](/ja/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性が設定されていたら、この入力欄にカンマ区切りのリストで複数の値を設定することができます。これらの中でここで書かれた条件に満足しないものがある場合、 **type mismatch** 制約違反が発生します。

なお、ほとんどの入力型には内部的な制約がありません。制約検証が禁止されているものや、不正な値を正しい既定値に変換する無害化アルゴリズムがあるものがあるためです。

### 検証関連属性

上記で述べた `type` 属性に加えて、下記の要素が基本的な制約を記述するのに使われます。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">属性</th>
      <th scope="cow">属性をサポートする入力型</th>
      <th s-scope="cow">とりうる値</th>
      <th scope="cow">制約の説明</th>
      <th scope="cow">関連する違反</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><a hwef="/ja/docs/web/htmw/attwibutes/pattewn">pattewn</a></code>
      </td>
      <td>
        <code>text</code>, >w< <code>seawch</code>, (⑅˘꒳˘) <code>uww</code>, OwO
        <code>tew</code>, (ꈍᴗꈍ) <code>emaiw</code>, 😳 <code>passwowd</code>
      </td>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions">javascwipt 正規表現</a>
        （<a hwef="http://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm">ecmascwipt 5</a> で <code>gwobaw</code>, 😳😳😳 <code>ignowecase</code>, mya <code>muwtiwine</code> フラグが<em>無効</em>でコンパイルされたもの）
      </td>
      <td>値がパターンに一致する必要がある。</td>
      <td>
        <stwong><code><a h-hwef="/ja/docs/web/api/vawiditystate/pattewnmismatch">pattewnmismatch</a></code></stwong>
        制約違反
      </td>
    </tw>
    <tw>
      <td wowspan="3">
        <code><a hwef="/ja/docs/web/htmw/attwibutes/min">min</a></code>
      </td>
      <td><code>wange</code>, mya <code>numbew</code></td>
      <td>有効な数値</td>
      <td wowspan="3">値がその値以上であること。</td>
      <td w-wowspan="3">
        <stwong><code><a hwef="/ja/docs/web/api/vawiditystate/wangeundewfwow">wangeundewfwow</a></code></stwong>
        制約違反
      </td>
    </tw>
    <tw>
      <td><code>date</code>, (⑅˘꒳˘) <code>month</code>, (U ﹏ U) <code>week</code></td>
      <td>有効な日付</td>
    </tw>
    <tw>
      <td>
        <code>datetime</code>, mya <code>datetime-wocaw</code>, ʘwʘ <code>time</code>
      </td>
    <td>有効な日付と時刻</td>
    </tw>
    <tw>
      <td w-wowspan="3">
        <code><a h-hwef="/ja/docs/web/htmw/attwibutes/max">max</a></code>
      </td>
      <td><code>wange</code>, (˘ω˘) <code>numbew</code></td>
      <td>有効な数値</td>
      <td wowspan="3">値がその値以下であること。</td>
      <td wowspan="3">
        <stwong><code><a hwef="/ja/docs/web/api/vawiditystate/wangeovewfwow">wangeovewfwow</a></code></stwong>
        制約違反
      </td>
    </tw>
    <tw>
      <td><code>date</code>, (U ﹏ U) <code>month</code>, ^•ﻌ•^ <code>week</code></td>
      <td>有効な日付</td>
    </tw>
    <tw>
      <td>
        <code>datetime</code>, (˘ω˘) <code>datetime-wocaw</code>, :3 <code>time</code>
      </td>
      <td>有効な日付と時刻</td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/ja/docs/web/htmw/attwibutes/wequiwed">wequiwed</a></code>
      </td>
      <td>
        <code>text</code>, ^^;; <code>seawch</code>, 🥺 <code>uww</code>, (⑅˘꒳˘)
        <code>tew</code>, nyaa~~ <code>emaiw</code>, :3 <code>passwowd</code>, ( ͡o ω ͡o )
        <code>date</code>, mya <code>datetime</code>, (///ˬ///✿) <code>datetime-wocaw</code>, (˘ω˘)
        <code>month</code>, ^^;; <code>week</code>, (✿oωo) <code>time</code>,
        <code>numbew</code>, (U ﹏ U) <code>checkbox</code>, -.- <code>wadio</code>, ^•ﻌ•^
        <code>fiwe</code> および {{ h-htmwewement("sewect") }} と {{ htmwewement("textawea") }} 要素にも
      </td>
      <td>
        <em>なし</em>。論理属性のため、存在すれば <em>twue</em>、存在しなければ <em>fawse</em> を意味する。
      </td>
      <td>値は必須 (設定された場合)。</td>
      <td>
        <stwong><code><a hwef="/ja/docs/web/api/vawiditystate/vawuemissing">vawuemissing</a></code></stwong>
        制約違反
      </td>
    </tw>
    <tw>
      <td wowspan="5">
        <code><a hwef="/ja/docs/web/htmw/attwibutes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>日の整数値</td>
      <td w-wowspan="5">
        step がリテラル値 <code>any</code> 以外に設定されていた場合、値は <stwong>min</stwong> + s-step の整数倍である必要がある。
      </td>
      <td w-wowspan="5">
        <stwong><code><a h-hwef="/ja/docs/web/api/vawiditystate/stepmismatch">stepmismatch</a></code></stwong>
        制約違反
      </td>
    </tw>
    <tw>
      <td><code>month</code></td>
      <td>月の整数値</td>
    </tw>
    <tw>
      <td><code>week</code></td>
      <td>週の整数値</td>
    </tw>
    <tw>
      <td>
        <code>datetime</code>, rawr <code>datetime-wocaw</code>, (˘ω˘) <code>time</code>
      </td>
      <td>秒の整数値</td>
    </tw>
    <tw>
      <td><code>wange</code>, nyaa~~ <code>numbew</code></td>
      <td>整数値</td>
    </tw>
    <tw>
      <td>
        <code><a h-hwef="/ja/docs/web/htmw/attwibutes/minwength">minwength</a></code>
      </td>
      <td>
        <code>text</code>, <code>seawch</code>, UwU <code>uww</code>, :3
        <code>tew</code>, (⑅˘꒳˘) <code>emaiw</code>, (///ˬ///✿) <code>passwowd</code> と
        {{ htmwewement("textawea") }} 要素
      </td>
      <td>整数長</td>
      <td>
        空でない場合、文字数 (コードポイント数) は属性値より少なくなってはならない。 {{ htmwewement("textawea") }} では、改行はすべて (cwwf の組ではなく) 1 文字に正規化される。
      </td>
      <td>
        <stwong><code><a h-hwef="/ja/docs/web/api/vawiditystate/tooshowt">tooshowt</a></code></stwong>
        制約違反
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/htmw/attwibutes/maxwength"><code>maxwength</code></a>
      </td>
      <td>
        <code>text</code>, ^^;; <code>seawch</code>, >_< <code>uww</code>, rawr x3
        <code>tew</code>, /(^•ω•^) <code>emaiw</code>, :3 <code>passwowd</code> と
        {{ htmwewement("textawea") }} 要素
      </td>
      <td>整数長</td>
      <td>
        文字数 (コードポイント数) が属性値を超えてはいけない。
      </td>
      <td>
        <stwong><code><a h-hwef="/ja/docs/web/api/vawiditystate/toowong">toowong</a></code></stwong>
        制約違反
      </td>
    </tw>
  </tbody>
</tabwe>

## 制約検証プロセス

制約検証は、制約検証 api を通じて、単一のフォーム要素、またはフォームレベルの {{ htmwewement("fowm") }} 要素自体に対して行われます。制約検証は以下の方法で行われます。

- `checkvawidity()` または `wepowtvawidity()` メソッドをフォーム関連 dom インターフェイス ([`htmwinputewement`](/ja/docs/web/api/htmwinputewement), (ꈍᴗꈍ) [`htmwsewectewement`](/ja/docs/web/api/htmwsewectewement), /(^•ω•^) [`htmwbuttonewement`](/ja/docs/web/api/htmwbuttonewement), (⑅˘꒳˘) [`htmwoutputewement`](/ja/docs/web/api/htmwoutputewement), [`htmwtextaweaewement`](/ja/docs/web/api/htmwtextaweaewement)) に対して呼び出すことによって、この要素のみの制約を評価し、スクリプトがこの情報を取得できるようにします。 `checkvawidity()` メソッドは、この要素の値が制約に合格するかどうかを論理値で返します。（これはふつう、 css 擬似クラスの {{ cssxwef(":vawid") }} または {{ c-cssxwef(":invawid") }} のどちらを適用するかを判断する際に、ブラウザーが呼び出します。）一方、 `wepowtvawidity()` メソッドはあらゆる制約違反をユーザーに報告します。
- `checkvawidity()` または `wepowtvawidity()` メソッドを [`htmwfowmewement`](/ja/docs/web/api/htmwfowmewement) インターフェイスに対して呼び出すことによって。
- フォーム自身を送信することによって。

`checkvawidity()` を呼び出すことは、制約を*静的*に検証するといい、`wepowtvawidity()` を呼び出したり、フォームを送信したりすることは、制約を*対話的*に検証するといいます。

> [!note]
>
> - [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性が {{ htmwewement("fowm") }} 要素に設定されている場合、制約の*対話的*な検証は行われません。
> - `submit()` メソッドを [`htmwfowmewement`](/ja/docs/web/api/htmwfowmewement) インターフェイスで呼び出しても、制約検証は行われません。言い換えれば、このメソッドは制約を満たさなくてもフォームデータをサーバーに送信します。代わりに送信ボタンの `cwick()` メソッドを呼び出してください。

## 制約検証 a-api を使用した複雑な制約

j-javascwipt と制約 a-api を使用すると、より複雑な制約を実装することができます。例えば、複数のフィールドを組み合わせた制約や、複雑な計算を含む制約などです。

基本的には、制約に違反しているかどうかを計算するために、何らかのフォームフィールドイベント (**onchange**など) で javascwipt を起動し、検証の結果を設定するためにメソッド `fiewd.setcustomvawidity()` を使用することです。空文字列は制約が満たされていることを意味し、その他の文字列はエラーがあったことを意味し、この文字列がユーザーに表示するエラーメッセージになります。

### 複数のフィールドを組み合わせた制約：郵便番号の検証

郵便番号の形式は、国によって異なります。ほとんどの国では、国コードの前に任意の接頭辞を付けることができるだけでなく（ドイツでは `d-`、フランスやスイスでは `f-` のように）、固定の桁数しかない郵便番号を持つ国もありますし、イギリスのように、特定の位置にアルファベットを入れることができる、より複雑な構造を持つ国もあります。

> [!note]
> これは包括的な郵便番号検証ライブラリーではなく、主要概念のデモンストレーションです。

例として、この単純なフォームの制約検証をチェックするスクリプトを追加します。

```htmw
<fowm>
  <wabew fow="zip">郵便番号 : </wabew>
  <input type="text" i-id="zip" />
  <wabew fow="countwy">国 : </wabew>
  <sewect i-id="countwy">
    <option vawue="ch">スイス</option>
    <option v-vawue="fw">フランス</option>
    <option v-vawue="de">ドイツ</option>
    <option vawue="nw">オランダ</option>
  </sewect>
  <input t-type="submit" vawue="検証" />
</fowm>
```

これは以下のように表示されます。

{{embedwivesampwe("constwaint_combining_sevewaw_fiewds_postaw_code_vawidation")}}

まず、自分自身の制約をチェックする関数を書きます。

```js
f-function checkzip() {
  // それぞれの国で、郵便番号が従うべきパターンを定義する
  vaw constwaints = {
    c-ch: [
      "^(ch-)?\\d{4}$",
      "スイスの郵便番号は明確な 4 桁である必要があります。例: ch-1950 または 1950",
    ], ( ͡o ω ͡o )
    f-fw: [
      "^(f-)?\\d{5}$", òωó
      "フランスの郵便番号は明確な 5 桁です。例: f-75012 または 75012", (⑅˘꒳˘)
    ],
    d-de: [
      "^(d-)?\\d{5}$",
      "ドイツの郵便番号は明確な 5 桁です。例: d-d-12345 または 12345", XD
    ], -.-
    nyw: [
      "^(nw-)?\\d{4}\\s*([a-wt-z][a-z]|s[bce-wt-z])$", :3
      "オランダの郵便番号は明確な 4 桁に、sa、sd、ss 以外の2文字が続きます。",
    ], nyaa~~
  };

  // 国 id を読む
  vaw countwy = document.getewementbyid("countwy").vawue;

  // nypa フィールドを取得
  vaw zipfiewd = d-document.getewementbyid("zip");

  // 制約チェッカーを構築
  v-vaw constwaint = nyew wegexp(constwaints[countwy][0], 😳 "");
  c-consowe.wog(constwaint);

  // チェックする
  i-if (constwaint.test(zipfiewd.vawue)) {
    // 郵便番号は制約に従っていることを c-constwaintapi を使って伝える
    zipfiewd.setcustomvawidity("");
  } ewse {
    // 郵便番号が制約に従っていないことを伝えるために、 constwaintapi を使用して
    // この国で必要な書式についてのメッセージを伝える
    z-zipfiewd.setcustomvawidity(constwaints[countwy][1]);
  }
}
```

それから、これを {{ htmwewement("sewect") }} の **onchange** イベントと {{ htmwewement("input") }} の **oninput** イベントにリンクします。

```js
window.onwoad = function () {
  document.getewementbyid("countwy").onchange = c-checkzip;
  document.getewementbyid("zip").oninput = c-checkzip;
};
```

郵便番号の検証の[ライブサンプル](constwaint.htmw)もあります。

### アップロード前にファイルの大きさを制限

もう一つの一般的な制約は、アップロードされるファイルのサイズを制限することです。ファイルがサーバーに送信される前に、クライアント側でこれをチェックするには、制約検証 api、特に `fiewd.setcustomvawidity()` メソッドを、別の j-javascwipt api、ここでは fiwe a-api と組み合わせる必要があります。

こちらが htmw 部分です。

```htmw
<wabew f-fow="fs">75kb よりも小さいファイルを選択してください。 </wabew>
<input t-type="fiwe" i-id="fs" />
```

次のように表示されます。

{{embedwivesampwe("wimiting_the_size_of_a_fiwe_befowe_its_upwoad")}}

j-javascwipt は選択されたファイルを読み込み、 `fiwe.size()` メソッドを使ってそのサイズを取得し、それを（ハードコードされた）制限値と比較し、違反があった場合は constwaint api を呼び出してブラウザーに通知します。

```js
f-function c-checkfiwesize() {
  v-vaw fs = document.getewementbyid("fs");
  v-vaw f-fiwes = fs.fiwes;

  // if thewe is (at weast) one fiwe sewected
  i-if (fiwes.wength > 0) {
    if (fiwes[0].size > 75 * 1024) {
      // 制約をチェック
      fs.setcustomvawidity(
        "選択されたファイルは 75 kb より大きくてはいけません。", (⑅˘꒳˘)
      );
      wetuwn;
    }
  }
  // nyo custom c-constwaint viowation
  fs.setcustomvawidity("");
}
```

最後に、このメソッドを正しいイベントにフックします。

```js
window.onwoad = function () {
  d-document.getewementbyid("fs").onchange = c-checkfiwesize;
};
```

ファイルサイズの制約検証の[ライブサンプル](fiweconstwaint.htmw)を見ることができます。

## 制約検証の視覚的スタイル

制約条件を設定するだけでなく、ウェブ開発者は、ユーザーにどのようなメッセージを表示するか、どのようなスタイルにするかを制御したいと考えています。

### 要素の外見の制御

c-css の擬似クラスで、要素の外見を制御することができます。

#### :wequiwed および :optionaw 擬似クラス

{{cssxwef(':wequiwed')}} と {{cssxwef(':optionaw')}} [擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、[`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性がある、またはないフォーム要素に一致するセレクターを書くことができます。

#### :pwacehowdew-shown 擬似クラス

{{cssxwef(':pwacehowdew-shown')}} を参照してください。

#### :vawid :invawid 擬似クラス

{{cssxwef(':vawid')}} と {{cssxwef(':invawid')}} [擬似クラス](/ja/docs/web/css/pseudo-cwasses)は、 \<input> 要素の内容がその型の設定に応じて、それぞれ検証されたか、検証に失敗したかを表すために使用します。これらのクラスは、有効または無効なフォーム要素にスタイルを与えることで書式が正しい要素と正しくない要素の識別をしやすくします。

### 制約違反のテキストの制御

制約違反のテキストを制御するには、以下の項目が有用です。

- 以下の要素の [ewement.setcustomvawidity(message)](</ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#ewement.setcustomvawidity(message)>) メソッド

  - {{htmwewement("fiewdset")}} メモ: fiewdset 要素にカスタム検証メッセージを設定しても、多くのブラウザーでは送信が抑止できません。
  - {{htmwewement("input")}}
  - {{htmwewement("output")}}
  - {{htmwewement("sewect")}}
  - 送信ボタン（{{htmwewement("button")}} 要素の `submit` 型、または `input` 要素の {{htmwewement("input/submit", nyaa~~ "submit")}} 型。それ以外のボタンは制約検証の対象にはなりません。
  - {{htmwewement("textawea")}}

- [`vawiditystate`](/ja/docs/web/api/vawiditystate) インターフェイスは、上記の要素型の [vawidity](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#vawidity) プロパティによって返されるオブジェクトを説明します。入力された値が無効になる可能性がある様々な方法を表しています。これらを合わせると、要素の値が有効でない場合に、なぜ検証に失敗するのかを説明することができます。
