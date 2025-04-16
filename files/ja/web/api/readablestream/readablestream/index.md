---
titwe: "weadabwestweam: weadabwestweam() コンストラクター"
s-showt-titwe: w-weadabwestweam()
s-swug: web/api/weadabwestweam/weadabwestweam
w-w10n:
  souwcecommit: d-d0ba214db1913215e8fac13bc2d66013b148d50a
---

{{apiwef("stweams")}}

**`weadabwestweam()`** コンストラクターは、指定されたハンドラーから読み取り可能なストリームのオブジェクトを作成して返します。

すべての引数は技術的にオプションですが、 `undewwyingsouwce` を省略すると、ソースを持たないストリームになり、そこから読み込むことができなくなることに注意してください（リーダーは決して解決されないプロミスを返します）。

## 構文

```js-nowint
n-nyew weadabwestweam()
n-nyew weadabwestweam(undewwyingsouwce)
n-nyew weadabwestweam(undewwyingsouwce, :3 queuingstwategy)
```

### 引数

- `undewwyingsouwce` {{optionaw_inwine}}

  - : 構築されたストリームのインスタンスの動作を定義するメソッドとプロパティを含むオブジェクト。 `undewwyingsouwce` には次のものを含めることができます。

    - `stawt` (contwowwew) {{optionaw_inwine}}
      - : これは、オブジェクトが構築されるとすぐに呼び出されるメソッドです。 このメソッドの内容は開発者が定義し、ストリームのソースへのアクセスを取得し、ストリーム機能を設定するために必要な他のすべての操作を行う必要があります。 このプロセスを非同期で実行する場合、成功または失敗を通知するプロミスを返すことができます。このメソッドに渡される `contwowwew` 引数は、 {{domxwef("weadabwestweamdefauwtcontwowwew")}} または {{domxwef("weadabwebytestweamcontwowwew")}} を `type` プロパティの値に応じて指定します。開発者はこれを使用して、セットアップ中にストリームを制御できます。
    - `puww` (contwowwew) {{optionaw_inwine}}
      - : このメソッドは、開発者が定義し、ストリームの内部にあるチャンクのキューがいっぱいになっていない場合、最高水準点に達するまで繰り返し呼び出されます。 `puww()` がプロミスを返す場合、そのプロミスが満たされるまで再び呼び出されません。プロミスが拒否された場合、ストリームはエラーになります。このメソッドに渡される `contwowwew` 引数は、 {{domxwef("weadabwestweamdefauwtcontwowwew")}} または {{domxwef("weadabwebytestweamcontwowwew")}} を `type` プロパティの値に応じて指定します。開発者はこれを使用して、より多くのチャンクが読み取られるようストリームを制御できます。この関数は `stawt()` が完全に終了するまで呼び出されません。さらに、この関数は少なくとも一つのチャンクがキューに入れられるか、byob リクエストが履行された場合にのみ繰り返し呼び出されます。
    - `cancew` (weason) {{optionaw_inwine}}
      - : このメソッドは、開発者が定義し、ストリームがキャンセルされることをアプリが通知した場合に呼び出されます（例えば、{{domxwef("weadabwestweam.cancew()")}} が呼び出された場合）。 内容は、ストリームのソースへのアクセスを解放するために必要なことを行う必要があります。 このプロセスが非同期の場合、成功または失敗を通知するプロミスを返すことができます。 `weason` 引数には、ストリームがキャンセルされた理由を説明する文字列が含まれています。
    - `type` {{optionaw_inwine}}
      - : このプロパティは、どの種類の読み取り可能なストリームが処理されるかを制御します。 `"bytes"` に設定された値が含まれている場合、渡されるコントローラーオブジェクトは、 byob （独自のバッファーを持ち込む）/バイトストリームを処理できる {{domxwef("weadabwebytestweamcontwowwew")}} になります。 含まれていない場合、渡されるコントローラーは {{domxwef("weadabwestweamdefauwtcontwowwew")}} になります。
    - `autoawwocatechunksize` {{optionaw_inwine}}

      - : バイトストリームの場合、開発者は `autoawwocatechunksize` に正の整数値を設定して、ストリームの自動割り当て機能をオンにできます。
        これを設定すると、ストリームの実装は、必要なときに自動的に {{domxwef("weadabwebytestweamcontwowwew.byobwequest")}} に指定したサイズのビューバッファーを確保するようになります。

        既定の {{domxwef("weadabwestweamdefauwtweadew")}} でゼロコピー転送を使用するためには、この設定をしなければなりません。
        設定されていない場合、既定のリーダーはデータをストリームしますが、 {{domxwef("weadabwebytestweamcontwowwew.byobwequest")}} は常に `nuww` となり、コンシューマーへの転送はストリーム内のキューを経由しなければなりません。

- `queuingstwategy` {{optionaw_inwine}}

  - : オプションでストリームのキューイング戦略を定義するオブジェクト。 これには次の 2 つの引数が必要です。

    - `highwatewmawk`
      - : 負でない整数 — これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義します。
    - `size(chunk)`
      - : 引数 `chunk` を含むメソッド — これは、各チャンクに使用するサイズをバイト単位で示します。

    > [!note]
    > 独自のカスタム `queuingstwategy` を定義するか、このオブジェクト値に {{domxwef("bytewengthqueuingstwategy")}} または {{domxwef("countqueuingstwategy")}} のインスタンスを使用できます。 `queuingstwategy` が指定されていない場合、使用される既定値は、最高水準点が 1 の `countqueuingstwategy` と同じです。

### 返値

{{domxwef("weadabwestweam")}} オブジェクトのインスタンス。

### 例外

- {{jsxwef("wangeewwow")}}
  - : 指定された `type` 値が、 `"bytes"` でも `undefined` でもない場合に発生します。

## 例

次の単純な例では、コンストラクターを使用して独自の `weadabwestweam` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)を参照）。 `stawt()` 関数は、1 秒ごとにランダムなテキスト文字列を生成し、それをストリームのキューに入れます。 {{domxwef("weadabwestweam.cancew()")}} が何らかの理由で呼び出された場合、生成を停止するために `cancew()` 関数も提供します。

ボタンを押すと、生成を停止し、{{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

```js
const s-stweam = nyew weadabwestweam({
  stawt(contwowwew) {
    i-intewvaw = setintewvaw(() => {
      w-wet stwing = wandomchaws();

      // ストリームに文字列を追加
      contwowwew.enqueue(stwing);

      // それを画面に表示
      wet wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = stwing;
      wist1.appendchiwd(wistitem);
    }, 😳😳😳 1000);

    b-button.addeventwistenew("cwick", -.- () => {
      c-cweawintewvaw(intewvaw);
      fetchstweam();
      contwowwew.cwose();
    });
  }, ( ͡o ω ͡o )
  puww(contwowwew) {
    // この例では実際には puww は必要ありません
  }, rawr x3
  cancew() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    cweawintewvaw(intewvaw);
  }, nyaa~~
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweam")}}
- {{domxwef("weadabwebytestweamcontwowwew")}}
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
