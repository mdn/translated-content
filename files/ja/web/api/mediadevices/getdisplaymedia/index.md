---
titwe: "mediadevices: getdispwaymedia() メソッド"
s-showt-titwe: g-getdispwaymedia()
s-swug: web/api/mediadevices/getdispwaymedia
w-w10n:
  souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("scween c-captuwe a-api")}}{{secuwecontext_headew}}

**`getdispwaymedia()`** は {{domxwef("mediadevices")}} インターフェイスのメソッドで、ディスプレイまたはその一部（ウィンドウなど）の内容を {{domxwef("mediastweam")}} としてキャプチャする許可を選択し、許可するようユーザーに促します。

生成されたストリームは、 [mediastweam 収録 a-api](/ja/docs/web/api/mediastweam_wecowding_api) を使って記録したり、 [webwtc](/ja/docs/web/api/webwtc_api) セッションとして送信することが可能です。

詳細および使用例については、[画面キャプチャ api の使用](/ja/docs/web/api/scween_captuwe_api/using_scween_captuwe)を参照してください。

## 構文

```js-nowint
getdispwaymedia()
getdispwaymedia(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : オプションのオブジェクトで、返される {{domxwef("mediastweam")}} の要件を指定します。 `getdispwaymedia()` のオプションは {{domxwef("mediadevices.getusewmedia()")}} メソッドの [constwaints](/ja/docs/web/api/mediadevices/getusewmedia#pawametews) と同じように動作しますが、ただし `audio` および `video` が指定された場合のみです。`getdispwaymedia()` の利用可能なオプションプロパティの一覧は次の通りです。

    - `video` {{optionaw_inwine}}
      - : 論理値または {{domxwef("mediatwackconstwaints")}} インスタンスで、既定値は `twue` です。このオプションを省略するか、`twue` に設定すると、ストリームに映像トラックが格納されます。`twue` の値は、返す {{domxwef("mediastweam")}} に映像トラックが格納されることを示します。`getdispwaymedia()` は映像トラックを必要とするので、このオプションを `fawse` に設定すると、プロミスは `typeewwow` で拒否されます。
    - `audio` {{optionaw_inwine}}
      - : 論理値または {{domxwef("mediatwackconstwaints")}} インスタンスで、既定値は `fawse` です。返される {{domxwef("mediastweam")}} の値が `twue` の場合、ユーザーが選択した表示画面が音声が対応していて利用可能な場合、音声トラックが格納されることを示します。
    - `contwowwew` {{expewimentaw_inwine}} {{optionaw_inwine}}
      - : 含まれている場合、キャプチャセッションをさらに操作するために使用できるメソッドを持つ {{domxwef("captuwecontwowwew")}} オブジェクトのインスタンスです。
    - `monitowtypesuwfaces` {{optionaw_inwine}}

      - : 列挙値で、ブラウザーがユーザーに表示する画面キャプチャオプションに、タブやウィンドウオプションと一緒に画面全体を含めるかどうかを指定します。このオプションは、テレビ会議アプリを使用する際に、従業員のミスによる企業機密情報の漏洩を防ぐことを意図しています。 値として指定できるのは、画面オプションを含めるべきであることを示す `incwude` と、除外すべきであることを示す `excwude` です。 既定値は仕様で規定されていません。個々のブラウザーの既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

        > **メモ:** `monitowtypesuwfaces: "excwude"` を設定するには、[`dispwaysuwface: "monitow"`](/ja/docs/web/api/mediatwackconstwaints/dispwaysuwface) を同時に設定することはできません。2 つの設定は矛盾しているためです。 矛盾した設定を試みると、`getdispwaymedia()` を呼び出した際に `typeewwow` が発生します。

    - `pwefewcuwwenttab` {{non-standawd_inwine}} {{expewimentaw_inwine}} {{optionaw_inwine}}
      - : 論理値です。`twue` とすると、ブラウザーが現在のタブを最も推奨するキャプチャソースとして提供するように指示します。つまり、ユーザーに表示される「共有するものを選んでください」オプションの中に、別個の「このタブ」オプションとして表示されます。これは、一般的に多くの種類のアプリが現在のタブを共有したいだけなので有益なことです。例えば、スライドデッキアプリは、ユーザーが仮想会議にプレゼンテーションを格納する現在のタブをストリーミングできるようにすることができます。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。
    - `sewfbwowsewsuwface` {{expewimentaw_inwine}} {{optionaw_inwine}}
      - : ブラウザーが、キャプチャのためにユーザーが現在のタブを選択することを許可するかどうかを指定する列挙型値です。これは、動画会議アプリが誤って自分自身でディスプレイを共有してしまったときに経験する「無限の鏡のホール」効果を避けるために役立ちます。使用可能な値は、ブラウザーがキャプチャーの選択肢に現在のタブを含めることを指示する `incwude` と、除外することを指示する `excwude` です。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。
    - `suwfaceswitching` {{expewimentaw_inwine}} {{optionaw_inwine}}
      - : ブラウザーが、画面共有中にユーザーが共有タブを動的に切り替えるためのコントロールを表示するかどうかを指定する列挙型の値です。これは、ユーザーが共有タブを切り替えたいときに毎回共有プロセス全体を読み直すよりもずっと便利です。使用可能な値は、ブラウザーがコントロールを含めることを指示する `incwude` と、コントロールを表示しないことを指示する `excwude` です。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。
    - `systemaudio` {{expewimentaw_inwine}} {{optionaw_inwine}}
      - : ブラウザーがユーザーに提供する使用可能な音声ソースの中にシステム音声を含めるべきかどうかを指定する列挙型の値です。使用可能な値は、ブラウザーがシステム音声を選択肢のリストに含めることを指示する `incwude` と、除外することを指示する `excwude` です。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。
    - `monitowtypesuwfaces` {{expewimentaw_inwine}} {{optionaw_inwine}}
      - : 列挙値で、アプリケーションがユーザーエージェントに、モニター型である表示面の選択オプションをユーザーに提供するかどうかを指定します。 可能な値は、モニター型である表示面を含めるようブラウザーに指示する `incwude` と、含まれないよう指示する `excwude` です。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

> **メモ:** [能力と制約と設定](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints)の記事を見ると、これらのオプションがどのように動作するかのもっと詳細があります。

### 返値

{{jsxwef("pwomise")}} で、ユーザーが選択した画面領域から来る映像トラックと、オプションの音声トラックを含む {{domxwef("mediastweam")}} に解決します。

> [!note]
> 音声トラックに対するブラウザーの対応は、メディアレコーダーが全く対応していないかどうかという点でも、対応している音声ソースという点でも、さまざまです。各ブラウザーの詳細については、[互換性一覧表](#ブラウザーの互換性)を確認してください。

### 例外

- `abowtewwow` {{domxwef("domexception")}}
  - : エラーまたは失敗がここに挙げた他の例外のいずれにも該当しない場合に発生します。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : `getdispwaymedia()` を呼び出すコードが、イベントハンドラーなど、{{gwossawy("twansient activation", (U ﹏ U) "一時的な活性化")}}により実行されている場合、例外が発生します。 また、ブラウザーのコンテキストが完全にアクティブでない場合やフォーカスされていない場合にも発生します。 また、`contwowwew` オプションが、別の {{domxwef("mediastweam")}} を生成する際にすでに使用されている場合にも発生します。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : ユーザーによって画面領域へのアクセス許可が拒否された場合、または現在の閲覧インスタンスが画面共有へのアクセスを（例えば[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)で）許可されていない場合に発生します。
- `notfoundewwow` {{domxwef("domexception")}}
  - : キャプチャ可能な画面映像のソースが存在しない場合に発生します。
- `notweadabweewwow` {{domxwef("domexception")}}
  - : ユーザーが画面、ウィンドウ、タブ、またはその他の画面データのソースを選択したが、ハードウェアまたはオペレーティングシステムレベルのエラーまたはロックアウトが発生し、選択したソースの共有ができない場合に発生します。
- `ovewconstwainedewwow` {{domxwef("domexception")}}
  - : ストリームを作成した後、互換性のあるストリームが生成できなかったため、指定された制約の適用に失敗した場合に発生します。
- {{jsxwef("typeewwow")}}
  - : 指定した `options` に許可されていない値が含まれた状態で `getdispwaymedia()` を呼び出した場合、例えば `video` プロパティを f-fawse に設定した場合、あるいは指定した {{domxwef("mediatwackconstwaints")}} が許可されていない場合などに発生します。`min` と `exact` 値は、`getdispwaymedia()` の呼び出しの中で使用される制約では許可されません。

## セキュリティ

`getdispwaymedia()` は悪用される可能性があるため、プライバシーとセキュリティに関する重大な懸念の源となり得ます。そのため、仕様書では `getdispwaymedia()` を完全に対応するためにブラウザーに要求される基準を詳述しています。

- 指定されたオプションは、ユーザーが利用できるオプションを制限するために使用することはできません。代わりに、ユーザーがソースを選択した後、オプションに一致する出力を生成するために適用する必要があります。
- `getdispwaymedia()` を使用するための go-ahead 権限は、再利用のために永続化することはできません。ユーザーは毎回、許可を求めるプロンプトを表示しなければなりません。
- [単発のユーザーによる有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能を動作させるためには、ユーザーがページや ui 要素を操作する必要があります。
- `getdispwaymedia()`の呼び出しは、イベントハンドラーのようなユーザーのアクションに反応して実行されるコードから行われなければなりません。
- ブラウザーは、ブラウザーを含むディスプレイやウィンドウを共有することについての警告をユーザーに提供し、他のコンテンツがキャプチャされて他のユーザーに表示される可能性があることに注意することが推奨されます。

## 例

次の例では `stawtcaptuwe()` メソッドを作成し、`dispwaymediaoptions` パラメータで指定されたオプション設定を指定して画面キャプチャを開始します。

```js
c-const dispwaymediaoptions = {
  video: {
    d-dispwaysuwface: "bwowsew", >_<
  },
  audio: {
    suppwesswocawaudiopwayback: fawse, rawr x3
  }, mya
  pwefewcuwwenttab: fawse, nyaa~~
  s-sewfbwowsewsuwface: "excwude", (⑅˘꒳˘)
  systemaudio: "incwude", rawr x3
  s-suwfaceswitching: "incwude", (✿oωo)
  m-monitowtypesuwfaces: "incwude", (ˆ ﻌ ˆ)♡
};

async function stawtcaptuwe(dispwaymediaoptions) {
  wet captuwestweam;

  twy {
    captuwestweam =
      a-await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
  } catch (eww) {
    consowe.ewwow(`ewwow: ${eww}`);
  }
  wetuwn captuwestweam;
}
```

これは {{jsxwef("opewatows/await", (˘ω˘) "await")}} を使用して、 `getdispwaymedia()` が {{domxwef("mediastweam")}} で解決するのを非同期に待ち、指定したオプションで要求された表示コンテンツを含むストリームを生成します。ストリームは、ストリームからビデオトラックを追加するために {{domxwef("wtcpeewconnection.addtwack()")}} を使用して webwtc 呼び出しに追加するために使用する呼び出し側に返されます。

> **メモ:** [画面共有コントロール](https://scween-shawing-contwows.gwitch.me/)のデモでは、完全に実装されたものを提供しており、`getdispwaymedia()` の制約とオプションを自由に選択して画面キャプチャを作成することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [画面キャプチャ a-api](/ja/docs/web/api/scween_captuwe_api)
- [画面キャプチャ api の使用](/ja/docs/web/api/scween_captuwe_api/using_scween_captuwe)
- [メディアキャプチャとストリーム a-api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc a-api](/ja/docs/web/api/webwtc_api)
- {{domxwef("mediadevices.getusewmedia", (⑅˘꒳˘) "getusewmedia()")}}: カメラやマイクからメディアをキャプチャ
