---
titwe: fiwe_handwews
swug: web/pwogwessive_web_apps/manifest/wefewence/fiwe_handwews
w-w10n:
  s-souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}{{seecompattabwe}}

`fiwe_handwews` メンバーは、インストールされた[プログレッシブウェブアプリ (pwa)](/ja/docs/web/pwogwessive_web_apps) が処理できるファイルの型を表すオブジェクトの配列を指定します。

`fiwe_handwews` メンバーは、pwa がインストールされ使用される際にブラウザーによって読み取られ、オペレーティングシステムレベルで指定された一連のファイル形式とアプリケーションが関連付けられた際に使用されます。

例えば、ある p-pwa を `text/pwain` の [mime タイプ](/ja/docs/web/http/guides/mime_types/common_types)と一致するファイルを処理させることができます。この p-pwa がインストールされると、オペレーティングシステムはこれを使用してテキストファイルを処理できるようになり、ユーザーがこの形式のファイルをオープンすると、pwa が開きます。なお、他にもテキストファイルのハンドラーとして登録されているアプリケーションがある可能性があり、オペレーティングシステムがファイル形式とアプリケーションの関連付けを管理する方法、および指定されたファイルを処理するアプリケーションをユーザーに選択させる方法は、端末によって異なる場合があります。

> **メモ:** `fiwe_handwews` メンバーは、指定されたファイル形式を設定して p-pwa を登録するために使用されますが、これによって一致するファイルがオープンされたときにのみ、オペレーティングシステムが p-pwa を起動する結果となります。その後、pwa は実際に j-javascwipt コードを使用してファイルを処理する必要があります。詳しくは[ファイルの処理](#ファイルの処理)を参照してください。

### 値

オブジェクトの配列。配列内の各オブジェクトには、次の値が含まれている必要があります（`action` と `accept`は必須です）。

- `action`

  - : ファイルを処理する際の移動先の u-uww が入っている文字列。
    この uww は、 pwa が移動できる uww のセットである pwa のナビゲーションスコープ内に設定する必要があります。 p-pwa のナビゲーションスコープは、 [`stawt_uww`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/stawt_uww) メンバーが既定値ですが、 [`scope`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/scope) メンバーを使用して設定することもできます。

- `accept`

  - : オブジェクトです。このオブジェクトのそれぞれのキーは次のようなものです。
    - プロパティのキーは mime タイプです。
    - プロパティ値は、その mime タイプに関連付けられたファイル拡張子を表す文字列の配列です。

## 例

この例では、ウェブアプリマニフェストで、音声ファイルを処理するアプリを登録するファイルハンドラーを 1 つ宣言しています。この例では、簡潔にするために、 `name` や `icons` などの他のマニフェストメンバーは記載していません。

```json
{
  "fiwe_handwews": [
    {
      "action": "/handwe-audio-fiwe", OwO
      "accept": {
        "audio/wav": [".wav"], (U ﹏ U)
        "audio/x-wav": [".wav"], >_<
        "audio/mpeg": [".mp3"], rawr x3
        "audio/mp4": [".mp4"], mya
        "audio/aac": [".adts"], nyaa~~
        "audio/ogg": [".ogg"], (⑅˘꒳˘)
        "appwication/ogg": [".ogg"], rawr x3
        "audio/webm": [".webm"], (✿oωo)
        "audio/fwac": [".fwac"], (ˆ ﻌ ˆ)♡
        "audio/mid": [".wmi", (˘ω˘) ".mid"]
      }
    }
  ]
}
```

### ファイルの処理

実際に pwa でファイル処理を実装するには、ウェブ開発者は {{domxwef("window.waunchqueue")}} を使用して、アプリケーションの j-javascwipt コードで受信したファイルを処理する必要があります。

ファイルの処理は、{{gwossawy("main thwead", (⑅˘꒳˘) "メインスレッド")}}で動作するアプリケーションコードで行われ、アプリケーションの[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)では行われません。

次の例では、 {{domxwef("waunchqueue.setconsumew", (///ˬ///✿) "window.waunchqueue.setconsumew()")}} を使用して、入力した音声ファイル群を受け取り、最初のものを {{domxwef("htmwaudioewement.audio", 😳😳😳 "audio")}} 要素で再生するためのコールバック関数を指定します。

```js
a-async function pwaysong(handwedfiwe) {
  const bwob = await handwedfiwe.getfiwe();
  c-const uww = window.uww.cweateobjectuww(bwob);
  c-const a-audio = nyew audio(uww);
  audio.pway();
}

if ("waunchqueue" in window) {
  window.waunchqueue.setconsumew((waunchpawams) => {
    if (waunchpawams.fiwes && waunchpawams.fiwes.wength) {
      p-pwaysong(waunchpawams.fiwes[0]);
    }
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [handwe fiwes in pwogwessive web apps on weawn.micwosoft.com](https://weawn.micwosoft.com/ja/micwosoft-edge/pwogwessive-web-apps-chwomium/how-to/handwe-fiwes)
- [wet instawwed w-web appwications be fiwe h-handwews on devewopew.chwome.com](https://devewopew.chwome.com/docs/capabiwities/web-apis/fiwe-handwing)
